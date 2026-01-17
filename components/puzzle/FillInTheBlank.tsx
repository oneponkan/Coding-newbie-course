"use client";

import { useState } from "react";
import { Challenge } from "@/data/curriculum/schema";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";

interface FillInTheBlankProps {
    challenge: Challenge;
    onComplete: () => void;
}

export function FillInTheBlank({ challenge, onComplete }: FillInTheBlankProps) {
    // If no fill-in-the-blank specific data is provided (using generic Challenge type), 
    // we assume the 'code' field contains the template with '____' placeholders
    // and 'options' contains the correct answers + distractors.

    // Simplified logic for MVP: 
    // Code: "let name = ____;"
    // Options: [{id: "1", text: "string"}, {id: "2", text: "\"Alice\""}]
    // Correct choice needs to be validated.

    // For now, let's assume single blank for simplicity or mapped blanks.
    // We will assume the challenge object has a 'correctAnswer' equivalent to the option ID.

    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");

    const handleCheck = () => {
        if (!selectedOptionId) return;

        if (selectedOptionId === challenge.correctAnswerId) {
            setStatus("correct");
        } else {
            setStatus("wrong");
        }
    };

    const handleContinue = () => {
        if (status === "correct") {
            onComplete();
        }
    };

    const handleRetry = () => {
        setStatus("idle");
        setSelectedOptionId(null);
    };

    // Extract the code parts around the blank
    // Default assumption: Code contains "____"
    const codeParts = challenge.code ? challenge.code.split("____") : ["", ""];

    const handleSelectOption = (optionId: string) => {
        if (status === "correct") return;

        // Reset status if it was wrong so user can try again immediately
        if (status === "wrong") {
            setStatus("idle");
        }
        setSelectedOptionId(optionId);
    };

    // ... handleCheck same

    return (
        <div className="w-full max-w-2xl bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
            {/* Header ... */}
            <div className="p-1 bg-primary/10 border-b border-primary/20">
                <div className="flex gap-2 p-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
            </div>

            <div className="p-8">
                <h2 className="text-xl font-bold text-foreground mb-4">
                    填空挑戰：{challenge.title}
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                    {challenge.description}
                </p>

                {/* Code Display Area */}
                <div className="bg-[#1e1e1e] p-6 rounded-xl font-mono text-lg text-gray-300 leading-relaxed mb-8 flex flex-wrap items-center gap-2 shadow-inner">
                    {codeParts.map((part, index) => (
                        <span key={index} className="whitespace-pre-wrap">
                            {part}
                            {index < codeParts.length - 1 && (
                                <span
                                    className={cn(
                                        "inline-block min-w-[80px] px-3 py-1 mx-1 rounded-md border-b-2 text-center transition-all font-bold",
                                        selectedOptionId
                                            ? "bg-primary/20 border-primary text-primary-foreground" // When filled
                                            : "bg-gray-700 border-gray-600 text-transparent animate-pulse", // Empty state
                                        status === "correct" && "bg-green-500/20 border-green-500 text-green-400",
                                        status === "wrong" && "bg-red-500/20 border-red-500 text-red-400"
                                    )}
                                >
                                    {selectedOptionId
                                        ? challenge.options?.find(o => o.id === selectedOptionId)?.text
                                        : "?"}
                                </span>
                            )}
                        </span>
                    ))}
                </div>

                {/* Options Area */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {challenge.options?.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => handleSelectOption(option.id)}
                            disabled={status === "correct"}
                            className={cn(
                                "p-4 rounded-xl border-2 text-left transition-all relative flex flex-col gap-2",
                                selectedOptionId === option.id
                                    ? "border-primary bg-primary/5 shadow-md scale-[1.02]"
                                    : "border-border hover:border-primary/50 hover:bg-muted/30 bg-card",
                                status === "correct" && selectedOptionId === option.id && "border-green-500 bg-green-50/50",
                                status === "wrong" && selectedOptionId === option.id && "border-red-500 bg-red-50/50"
                            )}
                        >
                            <div className="flex items-center">
                                <span className="mr-2 font-bold opacity-50 shrink-0">
                                    {String.fromCharCode(65 + parseInt(option.id) - 1)}.
                                </span>
                                <span className="font-medium text-lg">{option.text}</span>
                            </div>

                            {/* Show valid/invalid explanation if status is correct OR wrong (only for selected option if wrong) */}
                            {((status === "correct") || (status === "wrong" && selectedOptionId === option.id)) && option.explanation && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className={cn(
                                        "text-sm pl-4 border-l-2",
                                        status === "correct" ? "text-foreground/70 border-primary/20" : "text-red-600 border-red-200"
                                    )}
                                >
                                    {option.explanation}
                                </motion.div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Feedback / Action Area */}
                <div className="h-16 flex items-center justify-end">
                    {status !== "correct" ? (
                        <button
                            onClick={handleCheck}
                            disabled={!selectedOptionId}
                            className={cn(
                                "px-8 py-3 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg translate-y-0 disabled:translate-y-0 hover:-translate-y-0.5 active:translate-y-0",
                                status === "wrong"
                                    ? "bg-red-500 text-white hover:bg-red-600 animate-shake"
                                    : "bg-primary text-primary-foreground hover:bg-primary/90 hidden-disabled"
                            )}
                        >
                            {status === "wrong" ? "答錯了" : "檢查答案"}
                        </button>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 bg-green-100 px-6 py-3 rounded-xl border border-green-200"
                        >
                            <div className="flex items-center gap-2 text-green-700 font-bold text-lg">
                                <CheckCircle className="w-6 h-6" />
                                <span>太棒了！正確無誤！</span>
                            </div>
                            <button
                                onClick={handleContinue}
                                className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-sm"
                            >
                                繼續
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
