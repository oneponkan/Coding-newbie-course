"use client";

import { month1Content } from "@/data/curriculum/month1";
import { cn } from "@/lib/utils";
import { CheckCircle, Circle, Lock, BrainCircuit, Menu, X, ChevronDown, ChevronRight, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useProgress } from "../context/ProgressContext";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
// Note: We might not have react-responsive installed. 
// Let's use simple window matchMedia hook or just CSS classes + state control.

// Hook for media query
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);
    return isMobile;
}

export function Sidebar() {
    const months = [month1Content];
    const { isLessonComplete } = useProgress();
    const isMobile = useIsMobile();

    // State
    const [isOpen, setIsOpen] = useState(true); // Control visibility
    const [expandedWeeks, setExpandedWeeks] = useState<Record<string, boolean>>({ "week-1": true });

    // Auto-close on mobile, open on desktop by default
    useEffect(() => {
        setIsOpen(!isMobile);
    }, [isMobile]);

    const toggleWeek = (weekId: string) => {
        setExpandedWeeks(prev => ({
            ...prev,
            [weekId]: !prev[weekId]
        }));
    };

    const SidebarContent = () => (
        <div className="h-full flex flex-col font-sans bg-card border-r border-border custom-scrollbar">
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center justify-between sticky top-0 bg-card z-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl shadow-sm cursor-default select-none">
                        N
                    </div>
                    <h1 className="text-lg font-bold text-foreground tracking-tight select-none">Newbie Code</h1>
                </div>
                {/* Close Button (Both Mobile & Desktop can close) */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-secondary/20 rounded-lg transition-colors text-muted-foreground"
                    title="收起側邊欄"
                >
                    <PanelLeftClose className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {/* Review Mode Entry */}
                <Link href="/review" className="flex items-center gap-3 px-3 py-3 text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all group">
                    <BrainCircuit className="w-5 h-5 shrink-0 group-hover:rotate-12 transition-transform" />
                    <span>錯題複習模式</span>
                </Link>

                {months.map((month) => (
                    <div key={month.id}>
                        <h2 className="text-xs font-bold text-foreground/70 uppercase tracking-widest mb-3 px-2 select-none">
                            {month.title}
                        </h2>
                        <div className="space-y-2">
                            {month.weeks.map((week) => {
                                const isExpanded = expandedWeeks[week.id];
                                return (
                                    <div key={week.id} className="border border-border/50 rounded-xl overflow-hidden bg-card/50">
                                        <button
                                            onClick={() => toggleWeek(week.id)}
                                            className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-foreground bg-secondary/30 hover:bg-secondary/50 transition-colors"
                                        >
                                            <span>{week.title}</span>
                                            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                                        </button>

                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="p-2 space-y-1">
                                                        {week.lessons.map((lesson) => {
                                                            const isComplete = isLessonComplete(lesson.id);
                                                            return (
                                                                <Link
                                                                    key={lesson.id}
                                                                    href={`/lesson/${lesson.id}`}
                                                                    onClick={() => isMobile && setIsOpen(false)}
                                                                    className={cn(
                                                                        "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all",
                                                                        isComplete
                                                                            ? "text-primary font-bold bg-primary/10"
                                                                            : "text-foreground/80 hover:bg-muted"
                                                                    )}
                                                                >
                                                                    <div className="w-4 h-4 shrink-0 flex items-center justify-center">
                                                                        {isComplete ? (
                                                                            <CheckCircle className="w-full h-full text-primary" strokeWidth={2.5} />
                                                                        ) : (
                                                                            <Circle className="w-full h-full text-muted-foreground" strokeWidth={2.5} />
                                                                        )}
                                                                    </div>
                                                                    <span className="leading-tight line-clamp-1">{lesson.title}</span>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* Coming Soon Placeholder */}
                <div className="opacity-60 grayscale-[0.5] select-none">
                    <h2 className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-3 px-2">
                        Month 2: 前端開發
                    </h2>
                    <div className="px-3 py-2 flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-2xl border border-dashed border-border">
                        <Lock className="w-4 h-4" />
                        <span>尚未解鎖</span>
                    </div>
                </div>
            </div>

            <div className="py-4 pr-4 pl-8 border-t border-border">
                <div className="flex items-center gap-2">
                    {/* User Avatar */}
                    <div className="relative w-10 h-10 shrink-0">
                        <Image
                            src="/avatar-orange-v2.png"
                            alt="學徒橘子"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-foreground">學徒橘子</p>
                        <p className="text-xs text-muted-foreground">Lv. 1 初學者</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Global Toggle Button (Visible when sidebar is closed) */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed top-4 left-4 z-40 p-2 bg-white/80 backdrop-blur-md border border-border rounded-xl shadow-md hover:bg-white hover:shadow-lg transition-all group"
                        title="展開側邊欄"
                    >
                        <PanelLeftOpen className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Mobile Drawer (Absolute Overlay) */}
            <AnimatePresence>
                {isOpen && isMobile && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
                        />
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-y-0 left-0 z-50 w-72 h-full shadow-2xl"
                        >
                            <SidebarContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar (Push Layout) */}
            <AnimatePresence initial={false}>
                {isOpen && !isMobile && (
                    <motion.aside
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 288, opacity: 1 }} // w-72 = 18rem = 288px
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="h-screen sticky top-0 overflow-hidden shrink-0 border-r border-border bg-background"
                    >
                        <div className="w-72 h-full">
                            <SidebarContent />
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}
