"use client";

import { month1Content } from "@/data/curriculum/month1";
import { cn } from "@/lib/utils";
import { CheckCircle, Circle, Lock } from "lucide-react";
import Link from "next/link";
import { useProgress } from "../context/ProgressContext";

export function Sidebar() {
    const months = [month1Content]; // Expand later
    const { isLessonComplete } = useProgress();

    return (
        <div className="h-screen w-64 bg-card/50 backdrop-blur-sm border-r border-border flex flex-col font-sans">
            <div className="p-6 border-b border-border flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl shadow-sm">
                    N
                </div>
                <h1 className="text-lg font-bold text-foreground tracking-tight">Newbie Code</h1>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {months.map((month) => (
                    <div key={month.id}>
                        <h2 className="text-xs font-bold text-foreground/70 uppercase tracking-widest mb-3 px-2">
                            {month.title}
                        </h2>
                        <div className="space-y-1">
                            {months.map((month) => (
                                <div key={month.id} className="space-y-1">
                                    {month.weeks.map((week) => (
                                        <div key={week.id} className="group">
                                            <div className="px-3 py-2 text-sm font-bold text-foreground bg-secondary/50 rounded-2xl mb-2 border border-secondary">
                                                {week.title}
                                            </div>
                                            <div className="ml-2 pl-3 border-l-2 border-border space-y-1">
                                                {week.lessons.map((lesson) => {
                                                    const isComplete = isLessonComplete(lesson.id);
                                                    return (
                                                        <Link
                                                            key={lesson.id}
                                                            href={`/lesson/${lesson.id}`}
                                                            className={cn(
                                                                "flex items-center gap-2 px-3 py-3 text-sm font-medium rounded-xl transition-all",
                                                                isComplete
                                                                    ? "text-primary font-bold bg-primary/10"
                                                                    : "text-foreground/80 hover:bg-white hover:text-primary hover:shadow-sm"
                                                            )}
                                                        >
                                                            {isComplete ? (
                                                                <CheckCircle className="w-4 h-4 text-primary" />
                                                            ) : (
                                                                <Circle className="w-2.5 h-2.5 text-muted-foreground/50" />
                                                            )}
                                                            <span>{lesson.title}</span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Coming Soon Placeholder */}
                <div className="opacity-60 grayscale-[0.5]">
                    <h2 className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-3 px-2">
                        Month 2: 前端開發
                    </h2>
                    <div className="px-3 py-2 flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-2xl border border-dashed border-border">
                        <Lock className="w-4 h-4" />
                        <span>尚未解鎖</span>
                    </div>
                </div>
            </div>

            <div className="p-4 border-t border-border">
                <div className="flex items-center gap-3">
                    {/* Placeholder for User Avatar/Cat */}
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-xl shadow-sm ring-2 ring-white">
                        🐱
                    </div>
                    <div>
                        <p className="text-sm font-bold text-foreground">學徒小明</p>
                        <p className="text-xs text-muted-foreground">Lv. 1 初學者</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
