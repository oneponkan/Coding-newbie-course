"use client";

import { useProgress } from "@/components/context/ProgressContext";
import { RotateCcw, Trophy, Target } from "lucide-react";
import { motion } from "framer-motion";

interface ChallengeStatsProps {
    challengeId: string;
    className?: string;
}

export function ChallengeStats({ challengeId, className = "" }: ChallengeStatsProps) {
    const { getChallengeRecord, resetChallenge } = useProgress();
    const record = getChallengeRecord(challengeId);

    if (!record || record.attempts === 0) return null;

    const rate = Math.round((record.correctCount / record.attempts) * 100);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 pt-4 border-t border-dashed border-gray-200 w-full flex items-center justify-between text-xs text-muted-foreground ${className}`}
        >
            <div className="flex gap-4">
                <div className="flex items-center gap-1.5" title="總答題次數">
                    <Target className="w-3.5 h-3.5" />
                    <span>{record.attempts} 次嘗試</span>
                </div>
                <div className={`flex items-center gap-1.5 ${rate >= 80 ? 'text-green-600 font-medium' : ''}`} title="答對率">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>正確率 {rate}%</span>
                </div>
            </div>

            <button
                onClick={() => resetChallenge(challengeId)}
                className="flex items-center gap-1.5 hover:text-red-500 transition-colors px-2 py-1 rounded-md hover:bg-red-50"
                title="重置此題記錄"
            >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>重置</span>
            </button>
        </motion.div>
    );
}
