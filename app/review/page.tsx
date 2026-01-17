"use client";

import { useProgress } from "@/components/context/ProgressContext";
import { month1Content } from "@/data/curriculum/month1";
import { Challenge } from "@/data/curriculum/schema";
import { ReviewView } from "@/components/puzzle/ReviewView";
import { useState, useMemo } from "react";
import { BrainCircuit, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ReviewPage() {
    const { challengeRecords } = useProgress();
    const [isReviewing, setIsReviewing] = useState(false);

    // Flat list of all challenges to lookup by ID
    const allChallenges = useMemo(() => {
        const challenges: Record<string, Challenge> = {};
        month1Content.weeks.forEach(week => {
            week.lessons.forEach(lesson => {
                lesson.challenges.forEach(c => {
                    challenges[c.id] = c;
                });
            });
        });
        return challenges;
    }, []);

    // Filter Logic:
    // 1. Attempts > 0
    // 2. Correct Rate < 100% OR SRS Due (nextReview < now)
    const reviewQueue = useMemo(() => {
        const now = Date.now();
        const queue: Challenge[] = [];

        Object.values(challengeRecords).forEach(record => {
            const challenge = allChallenges[record.challengeId];
            if (!challenge) return;
            if (challenge.type === "info") return; // Skip info cards for review

            const isDue = record.srs.nextReview <= now;
            const isHard = (record.correctCount / record.attempts) < 0.8; // < 80% correct rate

            if (isDue || isHard) {
                queue.push(challenge);
            }
        });

        // Sort by urgency? (Maybe shuffle for variety, or hard ones first)
        return queue;
    }, [challengeRecords, allChallenges]);

    if (isReviewing) {
        return <ReviewView challenges={reviewQueue} onExit={() => setIsReviewing(false)} />;
    }

    return (
        <div className="min-h-screen bg-[#fffdfa] text-foreground p-8 flex flex-col items-center justify-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="max-w-md w-full text-center space-y-8"
            >
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto text-purple-600">
                    <BrainCircuit className="w-12 h-12" />
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-2">錯題複習模式</h1>
                    <p className="text-muted-foreground">
                        我們會根據你的答題記錄與遺忘曲線，挑選出現在最需要複習的題目。
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-5xl font-bold text-slate-800 mb-2">{reviewQueue.length}</div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">待複習卡片</div>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={() => setIsReviewing(true)}
                        disabled={reviewQueue.length === 0}
                        className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        <Play className="fill-current w-5 h-5" />
                        開始複習
                    </button>

                    <Link
                        href="/"
                        className="block w-full text-slate-400 font-bold py-3 hover:text-slate-600 transition-colors"
                    >
                        返回主頁
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
