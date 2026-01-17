"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ProgressContextType {
    completedLessons: string[];
    markLessonComplete: (lessonId: string) => void;
    isLessonComplete: (lessonId: string) => boolean;
    totalLessons: number;
    progressPercentage: number;
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

    useEffect(() => {
        // Load from localStorage on mount
        const saved = localStorage.getItem("newbie-course-progress");
        if (saved) {
            try {
                setCompletedLessons(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse progress", e);
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

    const progressPercentage = Math.round((completedLessons.length / totalLessonCount) * 100) || 0;

    return (
        <ProgressContext.Provider
            value={{
                completedLessons,
                markLessonComplete,
                isLessonComplete,
                totalLessons: totalLessonCount,
                progressPercentage,
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
