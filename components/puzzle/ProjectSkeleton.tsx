"use client";

import React, { useState } from "react";
import { Challenge, Option, ProjectFile } from "@/data/curriculum/schema";
import { Folder, FileCode } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgress } from "@/components/context/ProgressContext";
import { ChallengeStats } from "./ChallengeStats";

interface ProjectSkeletonProps {
    challenge: Challenge;
    onComplete: () => void;
}

export default function ProjectSkeleton({
    challenge,
    onComplete,
}: ProjectSkeletonProps) {
    const [activeFileIndex, setActiveFileIndex] = useState(0);
    // We need to track completion state for EACH file if they have blanks
    // But for MVP, let's assume only one main file has blanks, or we treat "onComplete"
    // as passing the specific check in the active file.

    // A simple strategy: The Challenge has `options` which are shared across files?
    // Or maybe we restrict 'project' to mainly be one active editable file + read-only context files.

    const activeFile = challenge.files?.[activeFileIndex];

    // If the active file has blanks ('____'), we use FillInTheBlank logic.
    // Otherwise, we just show the code.
    const hasBlanks = activeFile?.code.includes("____");

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col h-125 border border-border rounded-xl overflow-hidden bg-card shadow-sm">
                {/* Toolbar / Header */}
                <div className="bg-muted/30 border-b border-border p-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Folder className="w-4 h-4 text-amber-500" />
                        <span>Project Workspace</span>
                    </div>
                </div>

                <div className="flex flex-col flex-1 overflow-hidden">
                    {/* File Tabs (Horizontal Scroll) */}
                    <div className="border-b border-border bg-muted/10 shrink-0">
                        <div className="p-2 flex gap-2 overflow-x-auto no-scrollbar">
                            {challenge.files?.map((file, idx) => (
                                <button
                                    key={file.name}
                                    onClick={() => setActiveFileIndex(idx)}
                                    className={cn(
                                        "flex items-center gap-2 px-3 py-1.5 rounded-t-lg border-b-2 text-sm transition-all whitespace-nowrap shrink-0",
                                        activeFileIndex === idx
                                            ? "border-primary bg-background text-primary font-bold shadow-sm"
                                            : "border-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                                    )}
                                >
                                    <FileCode
                                        className={cn(
                                            "w-4 h-4",
                                            activeFileIndex === idx ? "text-primary" : "text-muted-foreground"
                                        )}
                                    />
                                    {file.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Editor Area */}
                    <div className="flex-1 overflow-hidden bg-[#1e1e1e] text-zinc-100 flex flex-col relative w-full">
                        {/* Note: Redundant header removed as per user request */}

                        {/* Code Content */}
                        <div className="flex-1 p-4 font-mono text-sm relative overflow-auto custom-scrollbar">
                            {hasBlanks ? (
                                // For blanks, we still use pre-wrap or we might need horizontal scroll too.
                                // Let's try whitespace-pre to force horizontal scroll for better mobile code reading.
                                // But FileEditorWrapper needs to handle it.
                                <FileEditorWrapper
                                    file={activeFile!}
                                    options={challenge.options || []}
                                    onComplete={onComplete}
                                    correctAnswerId={challenge.correctAnswerId}
                                    challengeId={challenge.id}
                                />
                            ) : (
                                <pre className="whitespace-pre">
                                    <code>{activeFile?.code}</code>
                                </pre>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <ChallengeStats challengeId={challenge.id} />
        </div>
    );
}

// Wrapper to adapt File to FillInTheBlank style interaction
// But wait, FillInTheBlank component includes the QUESTION and DESCRIPTION text.
// Here we just want the CODE interaction. 
// Reusing the whole FillInTheBlank component might look weird inside the editor pane if it includes the question header.
// Let's create a specialized internal renderer for Project blanks if needed, 
// OR simpler: For MVP, 'ProjectSkeleton' just renders the Code, and if you click 'Run', it checks if you selected the right options?
//
// Actually, FillInTheBlank component logic is complex (split by ____, insert dropdowns).
// Let's re-implement a lightweight version here for "Editor Mode".

function FileEditorWrapper({ file, options, onComplete, correctAnswerId, challengeId }: {
    file: ProjectFile,
    options: Option[],
    onComplete: () => void,
    correctAnswerId?: string,
    challengeId: string
}) {
    const parts = file.code.split("____");
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const { recordAttempt } = useProgress();

    const handleSelect = (optId: string) => {
        setSelectedOptionId(optId);
        setShowError(false);
        const isCorrect = (correctAnswerId === optId) || (options.find(o => o.id === optId)?.isCorrect || false);

        recordAttempt(challengeId, isCorrect);

        if (isCorrect) {
            setIsSuccess(true);
            // Delay onComplete slightly for visual feedback
            setTimeout(() => {
                onComplete();
            }, 1000);
        } else {
            // Shake/Error effect
            setTimeout(() => setShowError(true), 100);
        }
    };

    return (
        <div className="leading-relaxed whitespace-pre font-mono min-w-max">
            {parts.map((part, i) => (
                <React.Fragment key={i}>
                    <span>{part}</span>
                    {i < parts.length - 1 && (
                        <span className="relative inline-block mx-1 align-baseline">
                            {isSuccess ? (
                                <span className="text-green-400 font-bold border-b-2 border-green-500 px-1">
                                    {options.find(o => o.id === selectedOptionId)?.text}
                                </span>
                            ) : (
                                <select
                                    className={cn(
                                        "bg-zinc-800 border border-zinc-600 rounded px-2 py-0.5 text-zinc-100 focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer hover:bg-zinc-700",
                                        showError && "border-red-500 animate-shake"
                                    )}
                                    onChange={(e) => handleSelect(e.target.value)}
                                    value={selectedOptionId || ""}
                                >
                                    <option value="" disabled>Select...</option>
                                    {options.map(opt => (
                                        <option key={opt.id} value={opt.id}>
                                            {opt.text}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
