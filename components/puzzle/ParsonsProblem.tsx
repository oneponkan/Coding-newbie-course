import { Challenge, ParsonsBlock } from "@/data/curriculum/schema";
import { Reorder, useDragControls } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { GripVertical } from "lucide-react";
import { useProgress } from "@/components/context/ProgressContext";
import { ChallengeStats } from "./ChallengeStats";

interface ParsonsProblemProps {
    challenge: Challenge;
    onComplete: () => void;
}

export function ParsonsProblem({ challenge, onComplete }: ParsonsProblemProps) {
    // Initial state: Shuffled or pre-defined scrambled order in challenge.codeBlocks?
    // Schema has `codeBlocks` (the pieces) and `solutionOrder`.
    // Ideally, `codeBlocks` provided by schema are already scrambled.

    const [items, setItems] = useState<ParsonsBlock[]>(challenge.codeBlocks || []);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const { recordAttempt } = useProgress();

    useEffect(() => {
        setItems(challenge.codeBlocks || []);
        setIsSubmitted(false);
        setIsCorrect(false);
    }, [challenge]);

    const checkAnswer = () => {
        if (!challenge.solutionOrder) return;

        // Check if current order of IDs matches solutionOrder
        const currentOrderIds = items.map(item => item.id);
        // Simple array equality check
        const correct = currentOrderIds.length === challenge.solutionOrder.length &&
            currentOrderIds.every((val, index) => val === challenge.solutionOrder![index]);

        setIsCorrect(correct);
        setIsSubmitted(true);
        recordAttempt(challenge.id, correct);
    };

    const handleReorder = (newItems: ParsonsBlock[]) => {
        if (isSubmitted && !isCorrect) {
            setIsSubmitted(false); // Reset state on interaction
        } else if (isSubmitted && isCorrect) {
            return; // Lock if correct
        }
        setItems(newItems);
    }

    return (
        <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-center text-foreground">{challenge.question}</h2>
            {challenge.hint && (
                <p className="text-center text-sm text-muted-foreground bg-secondary/20 py-1 px-3 rounded-full self-center">
                    💡 提示: {challenge.hint}
                </p>
            )}

            <div className="bg-card border-2 border-dashed border-border p-6 rounded-xl min-h-[300px] flex flex-col items-center justify-center relative">
                <p className="absolute top-2 left-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Code Editor</p>

                <Reorder.Group axis="y" values={items} onReorder={handleReorder} className="w-full space-y-2">
                    {items.map((item) => (
                        <Reorder.Item key={item.id} value={item} className="cursor-grab active:cursor-grabbing">
                            <div className={cn(
                                "bg-slate-800 text-slate-100 p-4 rounded-md font-mono text-sm shadow-sm flex items-center gap-3 select-none transition-colors border border-slate-700",
                                isSubmitted && isCorrect && "bg-green-600 border-green-500",
                                isSubmitted && !isCorrect && "bg-red-900/50 border-red-500"
                            )}>
                                <GripVertical className="text-slate-500" />
                                <span className="flex-1">{item.text}</span>
                            </div>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </div>

            <div className="h-16 flex items-center justify-center mt-4">
                {!isSubmitted || !isCorrect ? (
                    <button
                        onClick={checkAnswer}
                        className={cn(
                            "w-full bg-secondary text-secondary-foreground font-bold py-4 rounded-xl shadow-sm hover:brightness-105 transition-all",
                            isSubmitted && !isCorrect && "bg-red-500 text-white hover:bg-red-600 animate-shake"
                        )}
                    >
                        {isSubmitted && !isCorrect ? "順序不對，請調整後再試" : "執行代碼"}
                    </button>
                ) : (
                    <button
                        onClick={onComplete}
                        className="w-full bg-green-500 text-white font-bold py-4 rounded-xl shadow-md hover:bg-green-600 transition-all"
                    >
                        成功！下一步
                    </button>
                )}
            </div>

            <ChallengeStats challengeId={challenge.id} />
        </div>
    );
}
