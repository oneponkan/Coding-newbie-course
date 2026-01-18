"use client";

import { Sidebar } from "@/components/ui/Sidebar";
import { useProgress } from "@/components/context/ProgressContext";
import Image from "next/image";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export default function Home() {
  const { progressPercentage, completedLessons, challengeRecords } = useProgress();
  const badgesEarned = Math.floor(completedLessons.length / 4);
  const [now, setNow] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setNow(Date.now()), 0);
    return () => clearTimeout(timer);
  }, []);
  
  const dueReviews = Object.values(challengeRecords).filter((r) => {
    const isDue = r.srs.nextReview > 0 && r.srs.nextReview < now;
    
    // Hard items: < 80% accuracy, but don't show if reviewed recently (e.g., last 5 minutes)
    // This prevents them from "stucking" in the queue immediately after a review.
    const COOLDOWN = 5 * 60 * 1000;
    const isRecent = (now - r.lastAttemptAt) < COOLDOWN;
    const isHard = r.attempts > 0 && (r.correctCount / r.attempts) < 0.8 && !isRecent;
    
    return isDue || isHard;
  }).length;

  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-foreground">歡迎來到程式冒險！</h1>
          <p className="text-muted-foreground text-lg">
            準備好開始你的 6 個月全棧開發之旅了嗎？
          </p>
        </header>

        {/* Hero / Mascot Area */}
        <div className="bg-card border border-border rounded-3xl p-8 shadow-sm mb-8 flex flex-col md:flex-row items-center gap-5 relative overflow-hidden text-center md:text-left">
          {/* Decorative Circle */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Mascot Image */}
          <div className="w-40 h-40 relative z-10 shrink-0 ml-2">
            <Image
              src="/avatar-cat-v2.png"
              alt="貓貓助教"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              貓貓助教：
            </h2>
            <p className="text-lg text-foreground/80 font-medium leading-relaxed">
              「喵！不用擔心寫錯代碼，我們會用拼圖的方式一步步學會！先從 <span className="text-primary font-bold">Week 1</span> 開始吧！」
            </p>
          </div>
        </div>

        {/* Quick Stats or Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-secondary/30 rounded-xl border-2 border-secondary/50 shadow-sm">
            <h3 className="font-bold text-secondary-foreground mb-2 text-lg">目前進度</h3>
            <p className="text-4xl font-black text-secondary-foreground mb-1">{progressPercentage}%</p>
            <p className="text-sm text-secondary-foreground/80 font-medium">剛開始！加油！</p>
          </div>
          <div className="p-6 bg-accent/30 rounded-xl border-2 border-accent/50 shadow-sm">
            <h3 className="font-bold text-secondary-foreground mb-2 text-lg">已獲得徽章</h3>
            <p className="text-4xl font-black text-secondary-foreground mb-1">{badgesEarned}</p>
            <p className="text-sm text-secondary-foreground/80 font-medium">完成 Week 1 解鎖第一個！</p>
          </div>
          
          {/* Review Card */}
          <Link 
            href="/review" 
            className="p-6 bg-orange-500/10 rounded-xl border-2 border-orange-500/20 shadow-sm hover:bg-orange-500/20 hover:scale-[1.02] transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-2">
                <BrainCircuit className="w-5 h-5 text-orange-600 group-hover:rotate-12 transition-transform" />
                <h3 className="font-bold text-orange-700 dark:text-orange-400 text-lg">今日待複習</h3>
            </div>
            <p className="text-4xl font-black text-orange-600 dark:text-orange-400 mb-1">{dueReviews}</p>
            <p className="text-sm text-orange-600/80 dark:text-orange-400/80 font-medium">
                {dueReviews > 0 ? "大腦需要鍛鍊了！" : "太棒了！目前沒有累積"}
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
