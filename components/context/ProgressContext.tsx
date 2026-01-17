"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface ChallengeRecord {
    challengeId: string;
    attempts: number;
    correctCount: number;
    lastAttemptAt: number;
    history: { timestamp: number; isCorrect: boolean }[];
    srs: {
        interval: number; // Days
        repetition: number; // Streak
        ef: number; // Easiness Factor
        nextReview: number; // Timestamp
    };
}

interface ProgressContextType {
    completedLessons: string[];
    markLessonComplete: (lessonId: string) => void;
    isLessonComplete: (lessonId: string) => boolean;
    totalLessons: number;
    progressPercentage: number;

    // Detailed Tracking
    challengeRecords: Record<string, ChallengeRecord>;
    recordAttempt: (challengeId: string, isCorrect: boolean) => void;
    resetChallenge: (challengeId: string) => void;
    getChallengeRecord: (challengeId: string) => ChallengeRecord | undefined;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({
    children,
    totalLessonCount
}: {
    children: React.ReactNode;
    totalLessonCount: number;
}) {
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [challengeRecords, setChallengeRecords] = useState<Record<string, ChallengeRecord>>({});

    useEffect(() => {
        // Load from localStorage on mount
        const savedLessons = localStorage.getItem("newbie-course-progress");
        const savedRecords = localStorage.getItem("newbie-course-challenge-records");

        if (savedLessons) {
            try {
                setCompletedLessons(JSON.parse(savedLessons));
            } catch (e) {
                console.error("Failed to parse progress", e);
            }
        }
        if (savedRecords) {
            try {
                setChallengeRecords(JSON.parse(savedRecords));
            } catch (e) {
                console.error("Failed to parse records", e);
            }
        }
    }, []);

    const markLessonComplete = (lessonId: string) => {
        setCompletedLessons((prev) => {
            if (prev.includes(lessonId)) return prev;
            const newProgress = [...prev, lessonId];
            localStorage.setItem("newbie-course-progress", JSON.stringify(newProgress));
            return newProgress;
        });
    };

    const isLessonComplete = (lessonId: string) => {
        return completedLessons.includes(lessonId);
    };

    const recordAttempt = (challengeId: string, isCorrect: boolean) => {
        setChallengeRecords((prev) => {
            const current = prev[challengeId] || {
                challengeId,
                attempts: 0,
                correctCount: 0,
                lastAttemptAt: 0,
                history: [],
                srs: { interval: 0, repetition: 0, ef: 2.5, nextReview: 0 }
            };

            const now = Date.now();
            const newHistory = [...current.history, { timestamp: now, isCorrect }];

            // SRS Logic (Simplified SM-2)
            let newSrs = { ...current.srs };

            if (isCorrect) {
                // Correct answer
                if (newSrs.repetition === 0) {
                    newSrs.interval = 1;
                } else if (newSrs.repetition === 1) {
                    newSrs.interval = 6;
                } else {
                    newSrs.interval = Math.round(newSrs.interval * newSrs.ef);
                }
                newSrs.repetition += 1;
            } else {
                // Wrong answer
                newSrs.repetition = 0;
                newSrs.interval = 1;
            }

            // Next review time = Now + Interval (days)
            newSrs.nextReview = now + (newSrs.interval * 24 * 60 * 60 * 1000);

            const newRecord: ChallengeRecord = {
                ...current,
                attempts: current.attempts + 1,
                correctCount: current.correctCount + (isCorrect ? 1 : 0),
                lastAttemptAt: now,
                history: newHistory,
                srs: newSrs,
            };

            const updated = { ...prev, [challengeId]: newRecord };
            localStorage.setItem("newbie-course-challenge-records", JSON.stringify(updated));
            return updated;
        });
    };

    const resetChallenge = (challengeId: string) => {
        setChallengeRecords((prev) => {
            const updated = { ...prev };
            delete updated[challengeId];
            localStorage.setItem("newbie-course-challenge-records", JSON.stringify(updated));
            return updated;
        });
    };

    const getChallengeRecord = (challengeId: string) => {
        return challengeRecords[challengeId];
    };

    const progressPercentage = Math.round((completedLessons.length / totalLessonCount) * 100) || 0;

    return (
        <ProgressContext.Provider
            value={{
                completedLessons,
                markLessonComplete,
                isLessonComplete,
                totalLessons: totalLessonCount,
                progressPercentage,
                challengeRecords,
                recordAttempt,
                resetChallenge,
                getChallengeRecord,
            }}
        >
            {children}
        </ProgressContext.Provider>
    );
}

export function useProgress() {
    const context = useContext(ProgressContext);
    if (context === undefined) {
        throw new Error("useProgress must be used within a ProgressProvider");
    }
    return context;
}
