"use client";

import { ProgressProvider } from "@/components/context/ProgressContext";
import { month1Content } from "@/data/curriculum/month1";

// Calculate total lessons dynamically
const totalLessons = month1Content.weeks.reduce(
    (acc, week) => acc + week.lessons.length,
    0
);

export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <ProgressProvider totalLessonCount={totalLessons}>
            {children}
        </ProgressProvider>
    );
}
