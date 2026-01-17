import { LessonView } from "@/components/puzzle/LessonView";
import { month1Content } from "@/data/curriculum/month1";
import { notFound } from "next/navigation";

// Define Page Props strictly as a type or interface
// In Next.js 15+, params is an async function/promise
// But in Next 14 app router it's an object. 
// However, newer Next.js types suggest Promise<params>.
// Let's handle both possibilities or just use 'any' if unsure about version, but 'any' is bad.
// Given strict mode, let's try the modern signature.

interface PageProps {
    params: Promise<{ lessonId: string }>;
}

export default async function LessonPage({ params }: PageProps) {
    const { lessonId } = await params;

    // Flatten logic to find lesson
    let foundLesson;
    for (const week of month1Content.weeks) {
        const lesson = week.lessons.find((l) => l.id === lessonId);
        if (lesson) {
            foundLesson = lesson;
            break;
        }
    }

    if (!foundLesson) {
        notFound();
    }

    return <LessonView lesson={foundLesson} />;
}
