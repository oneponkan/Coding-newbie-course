export type ProblemType = "parsons" | "multiple-choice" | "fill-in-the-blank" | "info" | "project";

export interface Option {
    id: string;
    text: string;
    isCorrect?: boolean;
    explanation?: string; // Why this option is right or wrong
}

export interface ProjectFile {
    name: string;
    language: string;
    code: string; // Content, can contain '____' for fill-in-the-blank
    readOnly?: boolean; // If true, file cannot be edited/interacted with
    hidden?: boolean; // Internal files
}

export interface ParsonsBlock {
    id: string;
    text: string;
    indentationLevel?: number; // For future complexity
}

export interface Challenge {
    id: string;
    type: ProblemType;
    // Common
    question: string;
    title?: string; // For rich display
    description?: string; // Additional context
    hint?: string;

    // Info type content
    content?: string; // Markdown supported

    // Multiple Choice & Fill In The Blank (Options based)
    options?: Option[];
    correctAnswerId?: string; // For single correct option selection

    // Parsons
    codeBlocks?: ParsonsBlock[]; // Scrambled blocks
    solutionOrder?: string[]; // Array of block IDs in correct order

    // Fill In The Blank
    code?: string; // Code with '____' placeholders

    // Project
    files?: ProjectFile[]; // For multi-file project view
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    challenges: Challenge[];
}

export interface Week {
    id: string;
    title: string;
    description: string;
    lessons: Lesson[];
}

export interface Month {
    id: string;
    title: string;
    weeks: Week[];
}

export interface Course {
    id: string;
    title: string;
    months: Month[];
}
