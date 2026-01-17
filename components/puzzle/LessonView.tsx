"use client";

import { Lesson } from "@/data/curriculum/schema";
import { useState } from "react";
import { InfoCard } from "./InfoCard";
import { MultipleChoice } from "./MultipleChoice";
import { ParsonsProblem } from "./ParsonsProblem";
import { FillInTheBlank } from "./FillInTheBlank";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { useProgress } from "../context/ProgressContext";

interface LessonViewProps {
    lesson: Lesson;
}

export function LessonView({ lesson }: LessonViewProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [complete, setComplete] = useState(false);
    const { markLessonComplete } = useProgress();

    const currentChallenge = lesson.challenges[currentIndex];
    // Calculate progress percentage
    const progress = ((currentIndex) / lesson.challenges.length) * 100;

    const handleComplete = () => {
        if (currentIndex < lesson.challenges.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setComplete(true);
            markLessonComplete(lesson.id);
        }
    };

    if (complete) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 p-8">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4"
                >
                    <CheckCircle className="w-20 h-20" />
                </motion.div>
                <h1 className="text-4xl font-bold text-foreground">課程完成！</h1>
                <p className="text-xl text-muted-foreground">你已經完成了「{lesson.title}」！</p>
                <Link href="/" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md mt-4">
                    返回路線圖
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background font-sans">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-50 bg-[#fffdfa]/80 backdrop-blur-md border-b border-[#e6dcd9] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="p-2 hover:bg-secondary/50 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                    </Link>
                    <div>
                        <h1 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Lesson</h1>
                        <p className="font-bold text-foreground">{lesson.title}</p>
                    </div>
                </div>

                <div className="w-1/3 h-2 bg-secondary/30 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-secondary"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">

                {/* Decorative Background Elements */}
                <div className="absolute top-10 left-10 text-9xl opacity-5 pointer-events-none select-none">🧩</div>
                <div className="absolute bottom-10 right-10 text-9xl opacity-5 pointer-events-none select-none">🐱</div>

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
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
