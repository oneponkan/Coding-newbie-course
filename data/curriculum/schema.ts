export type ProblemType = "parsons" | "multiple-choice" | "fill-in-the-blank" | "info";

export interface Option {
    id: string;
    text: string;
    isCorrect?: boolean;
}

export interface ParsonsBlock {
    id: string;
    text: string;
    indentationLevel?: number; // For future complexity
}

export interface Challenge {
    id: string;
    type: ProblemType;
    question: string;
    hint?: string;
    // Info type content
    content?: string; // Markdown supported
    // Multiple Choice
    options?: Option[];
    // Parsons
    codeBlocks?: ParsonsBlock[]; // Scrambled blocks
    solutionOrder?: string[]; // Array of block IDs in correct order
    // Fill In The Blank
    codeSnippet?: string; // Code with marked holes, e.g., "color: {{hole}};"
    validAnswers?: string[];
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
