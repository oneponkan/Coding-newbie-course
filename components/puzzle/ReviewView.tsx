"use client";

import { Challenge } from "@/data/curriculum/schema";
import { useState } from "react";
import { InfoCard } from "./InfoCard";
import { MultipleChoice } from "./MultipleChoice";
import { ParsonsProblem } from "./ParsonsProblem";
import { FillInTheBlank } from "./FillInTheBlank";
import ProjectSkeleton from "./ProjectSkeleton";
import { ArrowLeft, CheckCircle, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ReviewViewProps {
    challenges: Challenge[];
    onExit: () => void;
}

export function ReviewView({ challenges, onExit }: ReviewViewProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [complete, setComplete] = useState(false);

    const currentChallenge = challenges[currentIndex];
    const progress = ((currentIndex) / challenges.length) * 100;

    const handleComplete = () => {
        if (currentIndex < challenges.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setComplete(true);
        }
    };

    if (!challenges || challenges.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <BrainCircuit className="w-16 h-16 text-muted-foreground" />
                <p>沒有錯題需要複習！</p>
                <button onClick={onExit} className="text-primary hover:underline">返回</button>
            </div>
        )
    }

    if (complete) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 p-8">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4"
                >
                    <CheckCircle className="w-20 h-20" />
                </motion.div>
                <h1 className="text-4xl font-bold text-foreground">複習完成！</h1>
                <p className="text-xl text-muted-foreground">你的大腦變強壯了！</p>
                <button onClick={onExit} className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md mt-4">
                    返回
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background font-sans">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-50 bg-[#fffdfa]/80 backdrop-blur-md border-b border-[#e6dcd9] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button onClick={onExit} className="p-2 hover:bg-secondary/50 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                    </button>
                    <div>
                        <h1 className="text-sm font-bold text-purple-600 uppercase tracking-widest flex items-center gap-2">
                            <BrainCircuit className="w-4 h-4" />
                            Mistake Review
                        </h1>
                        <p className="font-bold text-foreground">錯題複習模式 ({currentIndex + 1}/{challenges.length})</p>
                    </div>
                </div>

                <div className="w-1/3 h-2 bg-secondary/30 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden bg-slate-50/50">
                <div className="w-full max-w-3xl z-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentChallenge.id}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {currentChallenge.type === "info" && (
                                <InfoCard challenge={currentChallenge} onComplete={handleComplete} />
                            )}
                            {currentChallenge.type === "multiple-choice" && (
                                <MultipleChoice challenge={currentChallenge} onComplete={handleComplete} />
                            )}
                            {currentChallenge.type === "parsons" && (
                                <ParsonsProblem challenge={currentChallenge} onComplete={handleComplete} />
                            )}
                            {currentChallenge.type === "fill-in-the-blank" && (
                                <FillInTheBlank challenge={currentChallenge} onComplete={handleComplete} />
                            )}
                            {currentChallenge.type === "project" && (
                                <ProjectSkeleton challenge={currentChallenge} onComplete={handleComplete} />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
