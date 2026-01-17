import { Month } from "./schema";

export const month1Content: Month = {
    id: "month-1",
    title: "Month 1: 基礎 (HTML + CSS)",
    weeks: [
        {
            id: "week-1",
            title: "Week 1: HTML & CSS 基礎",
            description: "學習網頁的骨架與外觀，完全不需要打字！",
            lessons: [
                {
                    id: "lesson-1",
                    title: "網頁是如何運作的？",
                    description: "了解瀏覽器如何閱讀代碼。",
                    challenges: [
                        {
                            id: "c1-1",
                            type: "info",
                            question: "歡迎來到程式設計的世界！",
                            content:
                                "我們每天看到的網頁，其實是一堆文字指令組成的。\n\n- **HTML** 是骨架 (Skeleton)\n- **CSS** 是皮膚 (Skin)\n- **JavaScript** 是肌肉 (Muscles)\n\n這週我們先專注於 **骨架** 與 **皮膚**。",
                        },
                        {
                            id: "c1-2",
                            type: "multiple-choice",
                            question: "如果把網頁比喻成人，HTML 是什麼？",
                            options: [
                                { id: "o1", text: "皮膚", isCorrect: false },
                                { id: "o2", text: "骨架", isCorrect: true },
                                { id: "o3", text: "肌肉", isCorrect: false },
                            ],
                        },
                    ],
                },
                {
                    id: "lesson-2",
                    title: "HTML 標籤與元素",
                    description: "認識網頁的基本積木。",
                    challenges: [
                        {
                            id: "c2-1",
                            type: "info",
                            question: "什麼是標籤 (Tag)？",
                            content:
                                "HTML 使用「標籤」來告訴瀏覽器這是什麼內容。\n\n例如：`<h1>` 代表大標題，`<p>` 代表段落。\n\n標籤通常成對出現，像這樣：`<h1>標題在此</h1>`。",
                        },
                        {
                            id: "c2-2",
                            type: "parsons",
                            question: "請將下列標籤排序，組成一個正確的標題與段落。",
                            codeBlocks: [
                                { id: "b1", text: "<p>這是一段文字</p>" },
                                { id: "b2", text: "<h1>我的第一個網頁</h1>" },
                            ],
                            solutionOrder: ["b2", "b1"], // Heading first, then paragraph
                            hint: "標題應該在最上面！",
                        },
                    ],
                },
                {
                    id: "lesson-3",
                    title: "HTML 結構",
                    description: "一個標準網頁的樣子。",
                    challenges: [
                        {
                            id: "c3-1",
                            type: "info",
                            question: "網頁的標準結構",
                            content:
                                "每個網頁都應該包含 `<html>`, `<head>`, `<body>`。\n\n- `<html>`: 根元素\n- `<head>`: 設定 (給瀏覽器看)\n- `<body>`: 內容 (給人看)",
                        },
                        {
                            id: "c3-2",
                            type: "parsons",
                            question: "請把網頁結構組合起來",
                            codeBlocks: [
                                { id: "b1", text: "</html>" },
                                { id: "b2", text: "<body>內容在這裡</body>" },
                                { id: "b3", text: "<html>" },
                            ],
                            solutionOrder: ["b3", "b2", "b1"], // Simplification for Level 1
                            hint: "先有頭 (<html>) 才有身體 (<body>) 最後結束 (</html>)",
                        },
                    ],
                },
                {
                    id: "lesson-4",
                    title: "第一個 CSS 樣式",
                    description: "讓網頁變漂亮！",
                    challenges: [
                        {
                            id: "c4-1",
                            type: "info",
                            question: "CSS 負責樣式",
                            content: "CSS 可以改變顏色、大小。\n\n比如：`color: red;` 會把文字變紅色。",
                        },
                        {
                            id: "c4-2",
                            type: "multiple-choice",
                            question: "哪一個 CSS 規則可以把字變成藍色？",
                            options: [
                                { id: "o1", text: "font-size: blue;", isCorrect: false },
                                { id: "o2", text: "color: blue;", isCorrect: true },
                                { id: "o3", text: "background: blue;", isCorrect: false },
                            ],
                        },
                    ],
                },
            ],
        },
        // ... Other weeks placeholder
    ],
};
