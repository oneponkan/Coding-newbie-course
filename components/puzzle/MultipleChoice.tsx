import { Challenge, Option } from "@/data/curriculum/schema";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";

interface MultipleChoiceProps {
    challenge: Challenge;
    onComplete: () => void;
}

export function MultipleChoice({ challenge, onComplete }: MultipleChoiceProps) {
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [issubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleSelect = (optionId: string) => {
        if (issubmitted) return;
        setSelectedOptionId(optionId);
    };

    const handleCheck = () => {
        if (!selectedOptionId) return;

        const option = challenge.options?.find(o => o.id === selectedOptionId);
        const correct = option?.isCorrect || false;

        setIsCorrect(correct);
        setIsSubmitted(true);

        if (correct) {
            // Play success sound?
            // Wait a moment then allow proceed or just show "Continue" button
        }
    };

    return (
        <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-center text-foreground">{challenge.question}</h2>

            <div className="grid gap-3">
                {challenge.options?.map((option) => {
                    const isSelected = selectedOptionId === option.id;
                    const showSuccess = issubmitted && isSelected && option.isCorrect;
                    const showError = issubmitted && isSelected && !option.isCorrect;

                    return (
                        <div
                            key={option.id}
                            onClick={() => handleSelect(option.id)}
                            className={cn(
                                "p-4 border-2 rounded-xl cursor-pointer transition-all flex items-center justify-between group",
                                !issubmitted && "hover:border-primary/50 hover:bg-secondary/10",
                                isSelected && !issubmitted && "border-primary bg-secondary/20",
                                showSuccess && "border-green-500 bg-green-50",
                                showError && "border-red-500 bg-red-50",
                                !isSelected && issubmitted && "opacity-50 grayscale"
                            )}
                        >
                            <span className="font-medium text-lg">{option.text}</span>
                            {showSuccess && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                            {showError && <XCircle className="w-6 h-6 text-red-500" />}
                        </div>
                    );
                })}
            </div>

            <div className="h-16 flex items-center justify-center mt-4">
                {!issubmitted ? (
                    <button
                        onClick={handleCheck}
                        disabled={!selectedOptionId}
                        className="w-full bg-secondary text-secondary-foreground font-bold py-4 rounded-xl shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-105 transition-all"
                    >
                        檢查答案
                    </button>
                ) : (
                    <div className="w-full">
                        {isCorrect ? (
                            <button
                                onClick={onComplete}
                                className="w-full bg-green-500 text-white font-bold py-4 rounded-xl shadow-md animate-bounce-short hover:bg-green-600 transition-all"
                            >
                                太棒了！繼續
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    setIsSubmitted(false);
                                    setSelectedOptionId(null);
                                }}
                                className="w-full bg-red-500 text-white font-bold py-4 rounded-xl shadow-md hover:bg-red-600 transition-all"
                            >
                                再試一次
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
