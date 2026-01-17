// import { Button } from "@/components/ui/button"; // Removed unused import
import { Challenge } from "@/data/curriculum/schema";
import { ArrowRight } from "lucide-react";

interface InfoCardProps {
    challenge: Challenge;
    onComplete: () => void;
}

export function InfoCard({ challenge, onComplete }: InfoCardProps) {
    return (
        <div className="flex flex-col gap-6">
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{challenge.question}</h2>
                <div className="prose prose-slate dark:prose-invert text-foreground/90 whitespace-pre-wrap leading-relaxed">
                    {challenge.content}
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
