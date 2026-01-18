# 🐱 Newbie Code - 讓學程式像玩遊戲一樣簡單

這不是一本厚重的教科書，也不是一堆冷冰冰的影片課程。  
**Newbie Code** 是一個陪你從零開始、無痛變強的互動式學習平台。我們相信，學程式最好的方式就是「直接動手玩」！

有了可愛的貓貓助教 😸 陪你，不用怕寫錯，因為每一個 Error 都是變強的養分。

---

## ✨ 為什麼你會愛上這裡？

### 🧩 **拼圖式學習 (Puzzle Engine)**
最怕一開始就被語法嚇跑？我們把程式碼變成了拼圖！
- **Parsons Problems**: 拖拉程式碼區塊來組裝邏輯，先懂邏輯，再學語法。
- **填空挑戰**: 只需要填補關鍵字，建立信心超快速。
- **即時回饋**: 錯在哪裡馬上告訴你，不用自己 debug 到天亮。

### 📉 **錯題復仇戰 (Mistake Review Mode)**
學了就忘？那是因為你沒有在「對的時間」複習。
- 內建 **間隔重複系統 (SRS)**，自動把你常錯的、快忘記的題目抓回來複習。
- 就像背單字卡一樣，只要每天刷個幾題，觀念就會不知不覺刻進腦子裡。

### 📱 **隨時隨地，想學就學**
- **響應式設計**: 無論是用電腦認真鑽研，還是通勤時用手機刷題，體驗一樣絲滑。
- **側邊欄收合**: 手機版自動變成 App 般的抽屜選單，桌面版也可以收起來專注學習。

### 🏆 **看得到的進步**
- **視覺化儀表板**: 清楚看到你的學習軌跡和連續天數。
- **成就徽章**: 完成階段性任務解鎖徽章，收集控一本滿足！

---

## 💭 為什麼做這個？ (Dev's Murmur)

其實這是我下班唸書摸魚摸出來的 Side Project，我自己也還在學習的路上 🐢。

做這個平台的初心，主要是想讓跟我一樣剛接觸 **Vibe Coding** 的小白們，在體驗 AI 寫 code 的快感之餘，也能真正搞懂背後那些基礎的程式邏輯。 AI 雖然強大，但懂一點基礎，絕對能讓我們跟 AI 溝通得更順暢，寫出更棒的產品！

同時，這也是我給自己的一個挑戰：『不如就直接做一個教學平台來練練手吧？』🤔

所以，這個專案本身就是一個「學習成果」。如果有些地方寫得不夠好，或者有 Bug，希望大家不要嫌棄 🙏。歡迎隨時開 Issue 跟我說，我們一起在 Vibe Coding 的路上變強！💪

---

## 🛠️ 技術棧 (Tech Stack)

這個專案本身也是一個現代全端開發的展示 (Demo)：

- **核心框架**: [Next.js 14](https://nextjs.org/) (App Router) - 順暢的路由體驗。
- **語言**: [TypeScript](https://www.typescriptlang.org/) - 型別安全，開發更穩。
- **樣式**: [Tailwind CSS](https://tailwindcss.com/) - 快速打造漂亮 UI。
- **動畫**: [Framer Motion](https://www.framer.com/motion/) - 絲滑的互動效果 (試試看收合側邊欄！)。
- **圖示**: [Lucide React](https://lucide.dev/) - 簡約好看的 Icon。
- **資料儲存**: LocalStorage within browser (之後會串接 Supabase)。

---

## 🚀 快速開始 (Getting Started)

想要在你本機跑起來？很簡單：

1. **Clone 專案**
   ```bash
   git clone https://github.com/oneponkan/newbie-course.git
   cd newbie-course
   ```

2. **安裝依賴**
   ```bash
   npm install
   # 或是 yarn, pnpm, bun
   ```

3. **啟動開發伺服器**
   ```bash
   npm run dev
   ```

4. **開始冒險**
   打開瀏覽器前往 [http://localhost:3000](http://localhost:3000)，貓貓助教在那裡等你！

---

## �️ 開發路線圖 (Roadmap)

### 📲 App Feature Roadmap (功能開發路線)

- [x] **Week 1-3 課程內容**: HTML/CSS, JS 基礎, TS 入門
- [x] **學習引擎**: 選擇題、排序題、填空題、專案實作
- [x] **進度追蹤**: 答題統計與錯題複習
- [x] **UI 優化**: 手機版適配、可收合側邊欄
- [ ] **Week 4 (React)**: 組件化思考與 Hooks (開發中...)
- [ ] **帳號系統**: 雲端同步你的學習進度
- [ ] **暗黑模式**: 因為工程師都喜歡黑底白字 😎

### 📅 6-Month Curriculum Roadmap (六個月課程大綱)

**Month 1：基礎紮實（HTML + CSS + JS/TS）**
- **Week 1**: HTML + CSS 基礎 (DOM, Flexbox, RWD) | **Project**: 個人作品集頁面
- **Week 2**: JavaScript 基礎 (ES6+, DOM 操作) | **Project**: 互動待辦清單
- **Week 3**: TypeScript 入門 (型別系統, Interface) | **Project**: 型別安全的計算器
- **Week 4**: React 基礎 (Components, Props, useState) | **Project**: 基礎天氣應用 (前端)

**Month 2：進階前端 + 部署**
- **Week 5**: Next.js 14 App Router 架構
- **Week 6**: API Routes & Git/GitHub 協作
- **Week 7**: 整合前後端 API | **Project**: 完整天氣應用
- **Week 8**: Vercel 部署實戰 (**部署里程碑 1**)

**Month 3：後端開發入門**
- **Week 9**: Google Sheets 作為輕量資料庫 (Apps Script) | **Project**: 意見反饋表單
- **Week 10**: SQL 基礎 (Replit/Supabase)
- **Week 11**: Supabase 整合 (Auth, RLS, Storage)
- **Week 12**: 全端應用整合 (**部署里程碑 2**)

**Month 4：全端進階 & 第二專案**
- **Week 13**: 代碼品質規範 (ESLint, Prettier, CI/CD 概念)
- **Week 14**: 進階認證系統 (Session, Middleware)
- **Week 15-16**: **大型專案實戰** (電商/CMS/社交平台) (**部署里程碑 3**)

**Month 5-6：專業化與職涯準備**
- **Week 17-20**: 性能優化 (Caching, SEO, Vitals)
- **Week 21-24**: 職涯準備 (履歷作品集, 模擬面試)


---
Made with ❤️ by **Newbie Code Team**
