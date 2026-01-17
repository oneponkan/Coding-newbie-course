import { Challenge, Option } from "@/data/curriculum/schema";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";
import { useProgress } from "@/components/context/ProgressContext";
import { ChallengeStats } from "./ChallengeStats";

interface MultipleChoiceProps {
    challenge: Challenge;
    onComplete: () => void;
}

export function MultipleChoice({ challenge, onComplete }: MultipleChoiceProps) {
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const { recordAttempt } = useProgress();

    const handleSelect = (optionId: string) => {
        // Allow changing selection even after error
        if (isSubmitted && !isCorrect) {
            setIsSubmitted(false); // Reset submission state to clear error styles
        } else if (isSubmitted && isCorrect) {
            return; // Block if already correct
        }
        setSelectedOptionId(optionId);
    };

    const handleCheck = () => {
        if (!selectedOptionId) return;

        const option = challenge.options?.find(o => o.id === selectedOptionId);
        const correct = option?.isCorrect || false;

        setIsCorrect(correct);
        setIsSubmitted(true);
        recordAttempt(challenge.id, correct);

        // If wrong, we don't need to do anything else, user can just click another option
    };

    return (
        <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-center text-foreground">{challenge.question}</h2>

            <div className="grid gap-3">
                {challenge.options?.map((option) => {
                    const isSelected = selectedOptionId === option.id;
                    const showSuccess = isSubmitted && isSelected && option.isCorrect;
                    const showError = isSubmitted && isSelected && !option.isCorrect;

                    return (
                        <div
                            key={option.id}
                            onClick={() => handleSelect(option.id)}
                            className={cn(
                                "p-4 border-2 rounded-xl cursor-pointer transition-all flex flex-col justify-center group relative",
                                !isSubmitted && "hover:border-primary/50 hover:bg-secondary/10",
                                isSelected && !isSubmitted && "border-primary bg-secondary/20",
                                showSuccess && "border-green-500 bg-green-50",
                                showError && "border-red-500 bg-red-50",
                                !isSelected && isSubmitted && isCorrect && "opacity-50 grayscale", // Only dim others if correct
                                !isSelected && isSubmitted && !isCorrect && "opacity-100" // Don't dim if just wrong
                            )}
                        >
                            <div className="flex items-center justify-between w-full">
                                <span className="font-medium text-lg">{option.text}</span>
                                {showSuccess && <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />}
                                {showError && <XCircle className="w-6 h-6 text-red-500 shrink-0" />}
                            </div>

                            {/* Explanation Display */}
                            {isSubmitted && option.explanation && (
                                // Show explanation for the SELECTED option (if wrong or right)
                                // OR show explanation for ALL options if correct?
                                // User request: "If right, show explanation for all".
                                // If wrong, maybe just show explanation for the wrong one? Or nothing?
                                // Let's follow the previous logic: Only show if correct? 
                                // User said: "In Success screen, show explanation for EACH option".
                                // So if !isCorrect, maybe don't show explanations yet to avoid spoilers?
                                // But if they selected a wrong one, maybe helpful to know why it's wrong?
                                // Let's stick to: If Status == Correct, show ALL explanations.
                                // If Status == Wrong, maybe show explanation for the WRONG one?
                                // Let's just show if isSubmitted && (isCorrect || isSelected)
                                (isCorrect || (isSelected && showError)) && (
                                    <div className={cn(
                                        "mt-2 text-sm pl-4 border-l-2",
                                        showError ? "text-red-700 border-red-200" : "text-foreground/70 border-primary/20"
                                    )}>
                                        {option.explanation}
                                    </div>
                                )
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="h-16 flex items-center justify-center mt-4">
                {!isSubmitted || !isCorrect ? (
                    <button
                        onClick={handleCheck}
                        disabled={!selectedOptionId}
                        className={cn(
                            "w-full font-bold py-4 rounded-xl shadow-sm hover:brightness-105 transition-all text-white",
                            isSubmitted && !isCorrect
                                ? "bg-red-500 hover:bg-red-600 animate-shake" // Visual feedback it was wrong, but acts as "Try Again" / "Check"
                                : "bg-secondary text-secondary-foreground"
                        )}
                    >
                        {isSubmitted && !isCorrect ? "答錯了，請再選一個並檢查" : "檢查答案"}
                    </button>
                ) : (
                    <button
                        onClick={onComplete}
                        className="w-full bg-green-500 text-white font-bold py-4 rounded-xl shadow-md animate-bounce-short hover:bg-green-600 transition-all"
                    >
                        太棒了！繼續
                    </button>
                )}
            </div>

            <ChallengeStats challengeId={challenge.id} />
        </div>
    );
}
