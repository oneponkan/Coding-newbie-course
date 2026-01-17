// import { Button } from "@/components/ui/button"; // Removed unused import
import { Challenge } from "@/data/curriculum/schema";
import { ArrowRight } from "lucide-react";

import ReactMarkdown from "react-markdown";

interface InfoCardProps {
    challenge: Challenge;
    onComplete: () => void;
}

export function InfoCard({ challenge, onComplete }: InfoCardProps) {
    return (
        <div className="flex flex-col gap-6">
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{challenge.title || challenge.question}</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none leading-relaxed
                    prose-headings:text-[#4A3B2A] prose-headings:font-bold
                    prose-p:text-[#2D2A26] prose-p:font-medium
                    prose-strong:text-[#2D2A26] prose-strong:font-black
                    prose-li:text-[#2D2A26] prose-li:marker:text-[#FFB5A7]
                    prose-code:text-[#D97706] prose-code:bg-[#FEF3C7] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-[''] prose-code:after:content-['']
                    prose-pre:bg-[#2D2A26] prose-pre:text-[#FDFBF7] prose-pre:rounded-2xl
                    prose-blockquote:border-l-4 prose-blockquote:border-[#FFB5A7] prose-blockquote:text-[#8D7F7D] prose-blockquote:bg-[#F5F0EB]/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                    prose-a:text-[#4A3B2A] prose-a:font-bold prose-a:underline prose-a:decoration-[#FFB5A7] prose-a:decoration-2 hover:prose-a:text-[#FFB5A7]">
                    <ReactMarkdown>{challenge.content || ""}</ReactMarkdown>
                </div>
            </div>
            <div className="flex justify-end">
                <button
                    onClick={onComplete}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-md hover:bg-primary/90 transition-transform active:scale-95"
                >
                    <span>繼續</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
