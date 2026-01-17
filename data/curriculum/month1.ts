import { Month } from "./schema";

export const month1Content: Month = {
    id: "month-1",
    title: "MONTH 1: 基礎 (HTML + CSS)",
    weeks: [
        {
            id: "week-1",
            title: "Week 1: HTML 基礎與結構",
            description: "學習網頁的骨架與核心概念",
            lessons: [
                {
                    id: "lesson-1",
                    title: "Day 1: HTML 基礎 (DOM & Tags)",
                    description: "理解網頁是如何構成的，以及 DOM 的概念。",
                    challenges: [
                        {
                            id: "c1-info-intro",
                            type: "info",
                            question: "歡迎來到程式冒險！",
                            title: "歡迎來到程式冒險！",
                            content: `
# 什麼是 HTML？

想像你要蓋一間房子：
- **HTML (HyperText Markup Language)** 是房子的**鋼筋骨架**。
- **CSS** 是油漆和裝潢。
- **JavaScript** 是電力和水管系統（讓房子動起來）。

今天我們專注於 **骨架 (HTML)**。
每一個網頁背後，都有一棵「樹」狀結構，我們稱之為 **DOM (Document Object Model)**。
                            `,
                            description: "準備好開始了嗎？"
                        },
                        {
                            id: "c2-mcq-html-def",
                            type: "multiple-choice",
                            question: "如果有個人問你 HTML 是什麼，最準確的比喻是？",
                            title: "概念測試",
                            options: [
                                { id: "1", text: "網頁的化妝師 (樣式)", explanation: "這是 CSS 的工作喔！它負責讓網頁變漂亮。" },
                                { id: "2", text: "網頁的骨架 (結構)", isCorrect: true, explanation: "沒錯！HTML 定義了標題、段落這些結構，就像房子的鋼筋。" },
                                { id: "3", text: "網頁的大腦 (邏輯)", explanation: "這是 JavaScript 的任務，負責處理互動和邏輯。" },
                                { id: "4", text: "網頁的資料庫 (儲存)", explanation: "資料庫通常是後端的事，HTML 只是展示層。" }
                            ],
                            hint: "沒有骨架，人就站不起來喔！"
                        },
                        {
                            id: "c3-mcq-dom",
                            type: "multiple-choice",
                            question: "什麼是 DOM (Document Object Model)？",
                            title: "核心概念",
                            options: [
                                { id: "1", text: "一個新的遊戲模組", explanation: "聽起來很像，但 DOM 是瀏覽器的重要觀念，不是遊戲喔。" },
                                { id: "2", text: "瀏覽器把 HTML 轉換成的「樹狀物件結構」", isCorrect: true, explanation: "正確！Document Object Model 讓程式可以「看懂」並修改 HTML 結構。" },
                                { id: "3", text: "一種加密技術", explanation: "DOM 與安全性加密無關。" },
                                { id: "4", text: "用來下載網頁的工具", explanation: "DOM 是網頁載入後形成的結構，不是下載工具。" }
                            ],
                            hint: "想像這是一棵倒過來的樹，根 (Root) 在最上面。"
                        },
                        {
                            id: "c4-fitb-tag",
                            type: "fill-in-the-blank",
                            question: "完成一個基本的 HTML 標籤結構",
                            title: "標籤結構",
                            description: "HTML 標籤通常成對出現，一個開始，一個結束。",
                            code: "<____> 這裡是內容 </p>",
                            options: [
                                { id: "1", text: "p", isCorrect: true, explanation: "p 代表 Paragraph (段落)。<p> 標籤用來定義一段文字。" },
                                { id: "2", text: "/p", explanation: "這也是 p 標籤的一部分，但是是用在「結束標籤」 (</p>)，開頭標籤不需要斜線。" },
                                { id: "3", text: "div", explanation: "Div 是一個分組容器，雖然語法上沒錯，但在這裡我們通常用 p 來放純文字內容。" },
                                { id: "4", text: "h1", explanation: "H1 是標題標籤，應該用來放頁面最重要的標題，而不是普通內容。" }
                            ],
                            correctAnswerId: "1",
                            hint: "段落 (Paragraph) 的縮寫是什麼？"
                        },
                        {
                            id: "c5-parsons-structure",
                            type: "parsons",
                            question: "將這些標籤排列成正確的網頁基本結構",
                            title: "網頁基本結構",
                            codeBlocks: [
                                { id: "3", text: "    <h1>我的標題</h1>" },
                                { id: "1", text: "<html>" },
                                { id: "5", text: "</html>" },
                                { id: "2", text: "  <body>" },
                                { id: "4", text: "  </body>" }
                            ],
                            solutionOrder: ["1", "2", "3", "4", "5"],
                            hint: "html 包住 body，body 包住內容。"
                        },
                        {
                            id: "c6-mcq-semantic",
                            type: "multiple-choice",
                            question: "如果你要寫網頁的主要標題，應該用哪個標籤最符合「語義」？",
                            title: "語義化標籤",
                            options: [
                                { id: "1", text: "<div class='big-text'>", explanation: "這只是樣式上的大字，搜尋引擎不知道這是標題。" },
                                { id: "2", text: "<b>", explanation: "這只是讓字體加粗 (Bold)，不代表它是標題。" },
                                { id: "3", text: "<h1>", isCorrect: true, explanation: "Correct! H1 代表最高等級的標題，搜尋引擎會因它而知道這一頁的重點。" },
                                { id: "4", text: "<span>", explanation: "Span 是一個沒有語義的行內容器。" }
                            ],
                            hint: "Heading 1 = h1，這是搜尋引擎最喜歡的標題格式。"
                        },
                        {
                            id: "c6-mcq-semantic",
                            type: "multiple-choice",
                            question: "如果你要寫網頁的主要標題，應該用哪個標籤最符合「語義」？",
                            title: "語義化標籤",
                            options: [
                                { id: "1", text: "<div class='big-text'>", explanation: "這只是樣式上的大字，搜尋引擎不知道這是標題。" },
                                { id: "2", text: "<b>", explanation: "這只是讓字體加粗 (Bold)，不代表它是標題。" },
                                { id: "3", text: "<h1>", isCorrect: true, explanation: "Correct! H1 代表最高等級的標題，搜尋引擎會因它而知道這一頁的重點。" },
                                { id: "4", text: "<span>", explanation: "Span 是一個沒有語義的行內容器。" }
                            ],
                            hint: "Heading 1 = h1，這是搜尋引擎最喜歡的標題格式。"
                        }
                    ]
                },
                {
                    id: "lesson-project-1",
                    title: "Project: 個人小名片",
                    description: "用剛剛學到的知識，拼湊出你的第一張網頁名片！",
                    challenges: [
                        {
                            id: "p1-skeleton",
                            type: "project",
                            question: "完成你的名片 HTML 結構",
                            title: "個人名片 v1.0",
                            description: "請在 index.html 檔案中，填入正確的標籤。",
                            files: [
                                {
                                    name: "index.html",
                                    language: "html",
                                    code: `<!DOCTYPE html>
<html>
<head>
    <title>My Card</title>
</head>
<body>
    <div class="card">
        <!-- 1. 放入最重要的標題 (你的名字) -->
        <____>學徒橘子</____>

        <p>這是我的一張名片，我正在學習全端開發！</p>
        
        <div class="actions">
           <a href="#">聯絡我</a>
        </div>
    </div>
</body>
</html>`,
                                },
                                {
                                    name: "style.css",
                                    language: "css",
                                    code: `.card {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}
h1 {
    color: #333;
}
.actions {
    margin-top: 10px;
}`,
                                    readOnly: true
                                }
                            ],
                            options: [
                                { id: "1", text: "h1", isCorrect: true },
                                { id: "2", text: "p" },
                                { id: "3", text: "div" }
                            ],
                            correctAnswerId: "1"
                        }
                    ]
                },
                {
                    id: "lesson-2",
                    title: "Day 2: CSS 選擇器基礎",
                    description: "學習如何精準地選中並裝飾你的 HTML 元素。",
                    challenges: [
                        {
                            id: "c1-info-css",
                            type: "info",
                            question: "CSS 選擇器簡介",
                            title: "CSS 選擇器",
                            content: `
# 選擇你的目標！

CSS 的威力在於「選擇器 (Selectors)」。
想像你是戰場上的指揮官，你需要指著一個兵說：「你，穿上紅衣服！」

- **Type Selector**: \`p { color: red; }\` (所有段落變紅)
- **Class Selector**: \`.btn { color: blue; }\` (所有貼著 .btn 標籤的變藍)
- **ID Selector**: \`#header { color: green; }\` (只有那個叫 header 的變綠，獨一無二)
                            `
                        },
                        {
                            id: "c2-fitb-class",
                            type: "fill-in-the-blank",
                            question: "完成這個 Class 選擇器",
                            title: "Class 選擇器",
                            description: "我們想要選擇 class 為 'card' 的元素。",
                            code: "____card { background: white; }",
                            options: [
                                { id: "1", text: ".", isCorrect: true, explanation: "Correct! 在 CSS 中，點 (.) 用來選取 Class。" },
                                { id: "2", text: "#", explanation: "# (井號) 是用來選取 ID 的，這題我們要選的是 Class。" },
                                { id: "3", text: "/", explanation: "斜線通常用在路徑或註解，不是 CSS 選擇器。" },
                                { id: "4", text: "@", explanation: "@ 符號用於 CSS 規則 (如 @media, @import)，不是用來選元素的。" }
                            ],
                            correctAnswerId: "1",
                            hint: "Class 使用點 (.)，ID 使用井號 (#)。"
                        },
                        {
                            id: "c3-mcq-id",
                            type: "multiple-choice",
                            question: "如果你要幫網頁上「唯一」的導航列 (Navbar) 設定樣式，應該用哪個選擇器？",
                            title: "ID 選擇器",
                            options: [
                                { id: "1", text: ".navbar", explanation: "點 (.) 是 Class 選擇器，適合用在多個類似的元素上。" },
                                { id: "2", text: "#navbar", isCorrect: true, explanation: "Correct! # (井號) 是 ID 選擇器，就像身分證字號一樣，一個頁面只能有一個。" },
                                { id: "3", text: "navbar", explanation: "這是標籤 (Type) 選擇器，除非你有一個 <navbar> 標籤 (HTML5 有 <nav>)。" },
                                { id: "4", text: "*navbar", explanation: "這不是有效的選擇器語法。" }
                            ],
                            hint: "身分證號碼是獨一無二的，對應符號是..."
                        },
                        {
                            id: "c4-parsons-css-syntax",
                            type: "parsons",
                            question: "將下列積木組合成正確的 CSS 規則：把所有 <p> 文字變紅色",
                            title: "CSS 語法結構",
                            codeBlocks: [
                                { id: "3", text: "  color: red;" },
                                { id: "1", text: "p" },
                                { id: "4", text: "}" },
                                { id: "2", text: "{" }
                            ],
                            solutionOrder: ["1", "2", "3", "4"],
                            hint: "選擇器 -> 左大括號 -> 屬性 -> 右大括號"
                        },
                        {
                            id: "c5-mcq-analogy-review",
                            type: "multiple-choice",
                            question: "回顧比喻：如果「標籤選擇器」是大喊『所有人』，那「Class 選擇器」像是？",
                            title: "比喻測試",
                            options: [
                                { id: "1", text: "點名特定的一個人 (身分證)", explanation: "這是 ID 選擇器的比喻。" },
                                { id: "2", text: "大喊『所有戴帽子的人』", isCorrect: true, explanation: "沒錯！Class 就像是一個特徵或標籤，可以貼在多個人身上。" },
                                { id: "3", text: "對著空氣說話", explanation: "CSS 總是要有對象的！" },
                                { id: "4", text: "跟外星人溝通", explanation: "雖然 CSS 有時候很難懂，但它不是外星語啦。" }
                            ],
                            hint: "Class 是可以重複使用的特徵，就像一群人都戴著帽子。"
                        }
                    ]
                },
                {
                    id: "lesson-3",
                    title: "Day 3: 盒模型 (Box Model)",
                    description: "理解網頁元素的尺寸與間距原理。",
                    challenges: [
                        {
                            id: "c1-info-box",
                            type: "info",
                            question: "萬物皆盒子",
                            title: "禮物盒理論",
                            content: `
# 每個元素都是一個禮物盒

在 CSS 的眼中，不管是一張圖片還是一段文字，它們都是**長方形的盒子**。
這個盒子由內而外分為四層：

1.  **Content (禮物)**：真正的內容（文字、圖片）。
2.  **Padding (氣泡紙)**：內容與紙箱之間的緩衝（內距）。
3.  **Border (紙箱)**：盒子的邊框。
4.  **Margin (社交距離)**：盒子與其他盒子之間的距離（外距）。
                            `
                        },
                        {
                            id: "c2-parsons-box-layers",
                            type: "parsons",
                            question: "請依照由內而外 (Inside-Out) 的順序排列盒模型層級",
                            title: "盒模型層級",
                            codeBlocks: [
                                { id: "3", text: "Border (邊框)" },
                                { id: "1", text: "Content (內容)" },
                                { id: "4", text: "Margin (外距)" },
                                { id: "2", text: "Padding (內距)" }
                            ],
                            solutionOrder: ["1", "2", "3", "4"],
                            hint: "最裡面是禮物，最外面是跟別人的距離。"
                        },
                        {
                            id: "c3-mcq-padding-margin",
                            type: "multiple-choice",
                            question: "如果你覺得文字離邊框太近了，想讓它「呼吸」一下，該增加什麼？",
                            title: "內外距分辨",
                            options: [
                                { id: "1", text: "Margin (外距)", explanation: "Margin 是推開別的元素，不是推開自己的邊框。" },
                                { id: "2", text: "Padding (內距)", isCorrect: true, explanation: "Correct! Padding 是內容與邊框之間的空間 (氣泡紙)。" },
                                { id: "3", text: "Border (邊框)", explanation: "加粗邊框只會讓框變厚，不會增加內部空間。" },
                                { id: "4", text: "Width (寬度)", explanation: "增加寬度只是讓盒子變寬，不一定解決擁擠感。" }
                            ],
                            hint: "要在盒子『內部』增加空間。"
                        },
                        {
                            id: "c4-fitb-box-sizing",
                            type: "fill-in-the-blank",
                            question: "為了讓排版更容易，我們通常會設定 box-sizing 為？",
                            title: "Box Sizing",
                            description: "這個設定讓 Padding 和 Border 不會額外增加盒子的總寬度。",
                            code: "box-sizing: ______-box;",
                            options: [
                                { id: "1", text: "content", explanation: "這是預設值，很難算尺寸 (寬度 + Padding + Border = 總寬)。" },
                                { id: "2", text: "border", isCorrect: true, explanation: "沒錯！border-box 讓寬度包含了內容、內距和邊框，直覺多了！" },
                                { id: "3", text: "padding", explanation: "沒有 padding-box 這個屬性值喔 (早期瀏覽器可能有，現代 CSS 不用)。" },
                                { id: "4", text: "margin", explanation: "沒有 margin-box 這個屬性值。" }
                            ],
                            correctAnswerId: "2",
                            hint: "我們希望寬度計算到邊框 (Border) 為止。"
                        },
                        {
                            id: "c5-mcq-bg-color",
                            type: "multiple-choice",
                            question: "關於背景顏色 (Background Color) 的顯示範圍，下列何者正確？",
                            title: "背景範圍",
                            options: [
                                { id: "1", text: "只會顯示在 Content 區域", explanation: "不對喔，背景色通常會延伸出去。" },
                                { id: "2", text: "顯示在 Content 和 Padding 區域", isCorrect: true, explanation: "Correct! Padding 是盒子的一部分（氣泡紙），所以會有背景色。" },
                                { id: "3", text: "顯示在 Content, Padding 和 Margin 區域", explanation: "Margin 是外部的距離（透明的），不會有背景色。" },
                                { id: "4", text: "只顯示在 Border 上", explanation: "Border 有自己的顏色設定 (border-color)。" }
                            ],
                            hint: "Margin 是透明的，但 Padding 不是。"
                        }
                    ]
                },
                {
                    id: "lesson-4",
                    title: "Day 4: Flexbox 佈局 (The Magic Box)",
                    description: "學習現代網頁排版神器，告別 float 的痛苦。",
                    challenges: [
                        {
                            id: "c1-info-flex",
                            type: "info",
                            question: "Flexbox 魔法收納盒",
                            title: "排版管家",
                            content: `
# 為什麼需要 Flexbox？

在 Flexbox 出現前，要讓東西橫向排列非常麻煩。
Flexbox 就像是一個**魔法收納盒**，只要你在父容器喊一聲：\`display: flex;\`

所有子元素就會乖乖聽話：
- **預設**：橫向排列 (Row)。
- **Justify Content**: 決定東西在**主軸** (通常是橫向) 怎麼擺。
- **Align Items**: 決定東西在**交錯軸** (通常是直向) 怎麼擺。
                            `
                        },
                        {
                            id: "c2-parsons-flex-center",
                            type: "parsons",
                            question: "請寫出一段 CSS，將盒子裡面的內容「水平置中」且「垂直置中」",
                            title: "完美置中",
                            codeBlocks: [
                                { id: "3", text: "  align-items: center;" },
                                { id: "1", text: ".box {" },
                                { id: "4", text: "  justify-content: center;" },
                                { id: "2", text: "  display: flex;" },
                                { id: "5", text: "}" }
                            ],
                            solutionOrder: ["1", "2", "3", "4", "5"], // 2, 3, 4 order inside doesn't matter strictly, but for parsons usually fixed. Let's assume standard order.
                            hint: "先啟動 flex，然後把兩個軸都設為 center。"
                        },
                        {
                            id: "c3-fitb-justify",
                            type: "fill-in-the-blank",
                            question: "導航列最常用的排版：第一個在最左，最後一個在最右，中間平均分配。",
                            title: "導航列排版",
                            description: "這會讓你的 Logo 在左邊，登入按鈕在右邊。",
                            code: "justify-content: _______-between;",
                            options: [
                                { id: "1", text: "space", isCorrect: true, explanation: "Correct! space-between 會把多餘的空間分配在元素之間。" },
                                { id: "2", text: "center", explanation: "center-between 不是有效的屬性值。" },
                                { id: "3", text: "flex", explanation: "flex-between 也不存在喔。" },
                                { id: "4", text: "gap", explanation: "Gap 是另一個用來設定間距的屬性，不是 justify-content 的值。" }
                            ],
                            correctAnswerId: "1",
                            hint: "Space (空間) 在元素之間。"
                        },
                        {
                            id: "c4-mcq-axis",
                            type: "multiple-choice",
                            question: "當你設定 `flex-direction: column;` 改成垂直排列時，主軸 (Main Axis) 變成哪個方向？",
                            title: "軸向觀念",
                            options: [
                                { id: "1", text: "還是水平的", explanation: "不對，主軸會跟著 direction 轉向。" },
                                { id: "2", text: "變成垂直的 (由上往下)", isCorrect: true, explanation: "沒錯！既然是 Column (柱子/直向)，主軸就變成垂直的了。" },
                                { id: "3", text: "變成斜的 45 度", explanation: "CSS 沒有這種魔法。" },
                                { id: "4", text: "消失了", explanation: "主軸永遠存在。" }
                            ],
                            hint: "Column 意味著像柱子一樣直立。"
                        }
                    ]
                },
                {
                    id: "lesson-5",
                    title: "Day 5: 響應式設計 (The Chameleon)",
                    description: "讓你的網頁適應手機、平板、桌面等不同螢幕。",
                    challenges: [
                        {
                            id: "c1-info-responsive",
                            type: "info",
                            question: "變色龍網頁",
                            title: "水與容器",
                            content: `
# 像水一樣適應容器

響應式設計 (Responsive Design) 讓網頁像變色龍或水一樣：
- **手機上**：可能是單欄垂直排列。
- **電腦上**：可能是三欄橫向並排。

核心技術是 **Media Queries**：
\`@media (max-width: 600px) { ... }\`
（翻譯：當螢幕比 600px 小的時候，請執行裡面的 CSS）。
                            `
                        },
                        {
                            id: "c2-fitb-media",
                            type: "fill-in-the-blank",
                            question: "完成這個 Media Query，設定當螢幕「小於」768px 時的樣式",
                            title: "媒體查詢",
                            description: "這是 iPad 直立與手機常見的斷點。",
                            code: "@media (___-width: 768px) { ... }",
                            options: [
                                { id: "1", text: "max", isCorrect: true, explanation: "Correct! max-width: 768px 代表「最大寬度是 768」，也就是 0~768 的範圍 (比 768 小)。" },
                                { id: "2", text: "min", explanation: "min-width: 768px 代表「最小寬度是 768」，也就是比 768 大的範圍 (電腦版)。" },
                                { id: "3", text: "device", explanation: "device-width 是舊寫法，現在推薦用 max-width。" },
                                { id: "4", text: "screen", explanation: "screen 通常寫在 @media screen，不是寫在括號裡。" }
                            ],
                            correctAnswerId: "1",
                            hint: "我們要把規則限制在「最大」只有 768px 的裝置上。"
                        },
                        {
                            id: "c3-parsons-mobile-first",
                            type: "parsons",
                            question: "將下列 CSS 排列成「手機優先」的寫法 (先寫預設手機，再寫大螢幕)",
                            title: "手機優先策略",
                            codeBlocks: [
                                { id: "3", text: "@media (min-width: 768px) {" },
                                { id: "2", text: "  flex-direction: column;" },
                                { id: "5", text: "}" },
                                { id: "1", text: ".menu {" },
                                { id: "4", text: "  flex-direction: row;" },
                                { id: "6", text: "}" }
                            ],
                            solutionOrder: ["1", "2", "3", "4", "5", "6"],
                            // Simplified Block:
                            // 1. .menu { flex-direction: column; } (Mobile Default)
                            // 2. @media (min-width: 768px) { .menu { flex-direction: row; } }
                            // Let's adjust blocks to be simpler chunks.
                        },
                        // Replacement for c3 above due to complexity in simple list
                        {
                            id: "c3-parsons-mobile-order",
                            type: "parsons",
                            question: "組合出一個「手機版垂直，電腦版水平」的設定",
                            title: "響應式排版",
                            codeBlocks: [
                                { id: "2", text: "  flex-direction: column; /* 手機預設 */" },
                                { id: "4", text: "  @media (min-width: 768px) {" },
                                { id: "6", text: "}" },
                                { id: "5", text: "    flex-direction: row; /* 電腦版 */" },
                                { id: "1", text: ".container {" },
                                { id: "3", text: "}" }
                            ],
                            solutionOrder: ["1", "2", "3", "4", "5", "6"],
                            hint: "先定義預設樣式 (手機)，再用 Media Query 覆蓋電腦版樣式。"
                        },
                        {
                            id: "c4-mcq-percent",
                            type: "multiple-choice",
                            question: "為了讓圖片在手機上不會爆版 (超出螢幕)，我們通常會怎麼設定寬度？",
                            title: "流體圖片",
                            options: [
                                { id: "1", text: "width: 800px;", explanation: "寫死像素 (px) 就像冰塊，手機太小會撐破版面。" },
                                { id: "2", text: "max-width: 100%;", isCorrect: true, explanation: "Correct! 這讓圖片最大只能跟父容器一樣寬，小螢幕時會自動縮小。" },
                                { id: "3", text: "height: 100vh;", explanation: "這是設定高度跟螢幕一樣高，跟寬度爆版無關。" },
                                { id: "4", text: "width: auto;", explanation: "預設就是 auto (原始大小)，如果原圖很大，還是會爆版。" }
                            ],
                            hint: "讓寬度有一個「上限」，不能超過 100%。"
                        }
                    ]
                }
            ]
        },
        {
            id: "week-2",
            title: "Week 2: JavaScript 基礎 (The Brain)",
            description: "賦予網頁邏輯與大腦，讓它能思考與互動。",
            lessons: [
                {
                    id: "lesson-w2-1",
                    title: "Day 1: 變數 (The Storage Box)",
                    description: "學習如何用變數把資料存起來。",
                    challenges: [
                        {
                            id: "c1-info-vars",
                            type: "info",
                            question: "變數收納箱",
                            title: "記憶的盒子",
                            content: `
# 什麼是變數 (Variable)？

變數就像是**貼了標籤的收納箱**。
- **宣告 (Declare)**：拿出一個新箱子，貼上標籤。
- **賦值 (Assign)**：把東西放進箱子裡。

常見的箱子種類：
- **let**：普通的箱子，裡面的東西可以隨時換（例如：分數、等級）。
- **const**：透明的上鎖展示櫃，東西放進去就不能換（例如：圓周率、網站名稱）。
                            `
                        },
                        {
                            id: "c2-fitb-declare",
                            type: "fill-in-the-blank",
                            question: "宣告一個「不會改變」的變數 (例如你的名字)",
                            title: "宣告變數",
                            description: "因為名字通常不會變，我們用 const。",
                            code: "____ myName = 'Orange';",
                            options: [
                                { id: "1", text: "const", isCorrect: true, explanation: "Correct! const 用於常數 (Constant)，一旦賦值就不能修改。" },
                                { id: "2", text: "let", explanation: "let 也可以，但如果確定不會變，用 const 更安全且語意更清楚。" },
                                { id: "3", text: "var", explanation: "var 是舊時代的語法，容易產生 Bug，現代開發少用。" },
                                { id: "4", text: "func", explanation: "func 不是宣告變數的關鍵字。" }
                            ],
                            correctAnswerId: "1",
                            hint: "Constant (常數) 的縮寫。"
                        },
                        {
                            id: "c3-mcq-types",
                            type: "multiple-choice",
                            question: "請問 '123' (有引號) 是什麼資料型別？",
                            title: "資料型別",
                            options: [
                                { id: "1", text: "Number (數字)", explanation: "雖然看起來像數字，但有引號包著就是文字。" },
                                { id: "2", text: "String (字串)", isCorrect: true, explanation: "Correct! 任何用單引號 '' 或雙引號 \"\" 包起來的都是字串。" },
                                { id: "3", text: "Boolean (布林)", explanation: "布林只有 true 或 false。" },
                                { id: "4", text: "Array (陣列)", explanation: "陣列使用方括號 []。" }
                            ],
                            hint: "引號就像是把東西串起來的繩子 (String)。"
                        },
                        {
                            id: "c4-parsons-assign",
                            type: "parsons",
                            question: "將下列程式碼排列出「宣告分數變數，然後修改分數」的過程",
                            title: "變數操作",
                            codeBlocks: [
                                { id: "3", text: "score = 100;" },
                                { id: "1", text: "let score;" },
                                { id: "2", text: "score = 0;" }
                            ],
                            solutionOrder: ["1", "2", "3"],
                            hint: "先拿箱子(let)，設初始值(0)，再更新值(100)。"
                        },
                        {
                            id: "c5-mcq-const-error",
                            type: "multiple-choice",
                            question: "如果你嘗試修改 const 變數的值，會發生什麼事？",
                            title: "Const 規則",
                            options: [
                                { id: "1", text: "變數會自動變成 let", explanation: "程式不會這麼聰明幫你改。" },
                                { id: "2", text: "程式會報錯 (Error)", isCorrect: true, explanation: "沒錯！Const 就像上鎖的櫃子，硬拆會觸發警報。" },
                                { id: "3", text: "原本的值會消失", explanation: "不會消失，是修改失敗。" },
                                { id: "4", text: "什麼事都不會發生", explanation: "瀏覽器會生氣地顯示 TypeError。" }
                            ],
                            hint: "Const = Constant (不變的)。"
                        }
                    ]
                },
                {
                    id: "lesson-w2-2",
                    title: "Day 2: 函數 (The Recipe)",
                    description: "將程式碼打包成可以重複使用的「食譜」。",
                    challenges: [
                        {
                            id: "c1-info-func",
                            type: "info",
                            question: "函數食譜",
                            title: "神奇果汁機",
                            content: `
# 函數 (Function) 是什麼？

函數就像一台**果汁機**或一份**食譜**。
- **Input (參數)**：你丟進去的水果 (蘋果、香蕉)。
- **Process (邏輯)**：機器轉動攪拌。
- **Output (回傳)**：倒出來的果汁。

寫好一次函數 \`makeJuice()\`，以後只要喊一聲，就能馬上做出一杯果汁，不用從頭組裝機器！
                            `
                        },
                        {
                            id: "c2-parsons-def-func",
                            type: "parsons",
                            question: "組合出一個會說 Hello 的簡單函數",
                            title: "定義函數",
                            codeBlocks: [
                                { id: "2", text: "{" },
                                { id: "4", text: "}" },
                                { id: "1", text: "function sayHello() " },
                                { id: "3", text: "  console.log('Hello');" }
                            ],
                            solutionOrder: ["1", "2", "3", "4"],
                            hint: "關鍵字 -> 括號 -> 內容 -> 閉合"
                        },
                        {
                            id: "c3-fitb-call",
                            type: "fill-in-the-blank",
                            question: "我們定義好了 `sayHello`，現在要怎麼「呼叫」它執行？",
                            title: "呼叫函數",
                            description: "就像按按鈕一樣，你需要加上小括號。",
                            code: "sayHello____;",
                            options: [
                                { id: "1", text: "()", isCorrect: true, explanation: "Correct! 函數名稱加上 () 代表「立即執行」。" },
                                { id: "2", text: "{}", explanation: "大括號是用來定義區塊的，不是用來執行。" },
                                { id: "3", text: "[]", explanation: "這是陣列。" },
                                { id: "4", text: "!", explanation: "驚嘆號在程式中通常是「非」(Not) 的意思。" }
                            ],
                            correctAnswerId: "1",
                            hint: "像是在喊它的名字，加上嘴巴形狀的括號 ()。"
                        },
                        {
                            id: "c4-mcq-return",
                            type: "multiple-choice",
                            question: "函數中的 `return` 關鍵字代表什麼？",
                            title: "回傳值",
                            options: [
                                { id: "1", text: "把結果印在螢幕上", explanation: "那是 console.log 的工作。return 是把值交給程式的其他部分。" },
                                { id: "2", text: "把結果交還給呼叫者 (Output)", isCorrect: true, explanation: "沒錯！就像廚師做完菜後，把盤子端出廚房交給你。" },
                                { id: "3", text: "終止程式，直接當機", explanation: "太可怕了吧！它是結束這個函數而已。" },
                                { id: "4", text: "重新執行函數", explanation: "不會重新執行，是結束並離開。" }
                            ],
                            hint: "Return = 返回/交還。"
                        },
                        {
                            id: "c5-parsons-params",
                            type: "parsons",
                            question: "建立一個能將兩個數字相加的函數 `add(a, b)`",
                            title: "參數與回傳",
                            codeBlocks: [
                                { id: "2", text: "{" },
                                { id: "4", text: "}" },
                                { id: "1", text: "function add(a, b)" },
                                { id: "3", text: "  return a + b;" }
                            ],
                            solutionOrder: ["1", "2", "3", "4"],
                            hint: "輸入 a, b -> 回傳 a+b"
                        }
                    ]
                },
                {
                    id: "lesson-w2-3",
                    title: "Day 3: 控制流 (If/Loop)",
                    description: "讓程式能判斷情況並重複執行任務。",
                    challenges: [
                        {
                            id: "c1-info-flow",
                            type: "info",
                            question: "交通警察與跑道",
                            title: "邏輯控制",
                            content: `
# 程式的選擇

**If/Else (交通警察)**
程式遇到路口時，會問：「現在是紅燈嗎？」
- 是 (true)：停下。
- 否 (false)：通過。

**Loop (跑道)**
當你需要重複做一件事很多次：
- **For Loop**：跑 10 圈就停 (已知次數)。
- **While Loop**：跑到累倒為止 (條件停止)。
                            `
                        },
                        {
                            id: "c2-parsons-if",
                            type: "parsons",
                            question: "寫一個判斷式：如果分數大於 60，就顯示「及格」",
                            title: "If/Else 判斷",
                            codeBlocks: [
                                { id: "2", text: "  console.log('及格');" },
                                { id: "3", text: "}" },
                                { id: "1", text: "if (score > 60) {" }
                            ],
                            solutionOrder: ["1", "2", "3"],
                            hint: "if (條件) { 動作 }"
                        },
                        {
                            id: "c3-fitb-for",
                            type: "fill-in-the-blank",
                            question: "完成這個迴圈：從 0 數到 4 (共執行 5 次)",
                            title: "For 迴圈",
                            description: "經典的三段式迴圈。",
                            code: "for (let i = 0; i < 5; i____) { ... }",
                            options: [
                                { id: "1", text: "++", isCorrect: true, explanation: "Correct! i++ 代表每次加 1。" },
                                { id: "2", text: "--", explanation: "i-- 會越變越小，永遠小於 5，變成無限迴圈！" },
                                { id: "3", text: "==", explanation: "這是比較運算子，不是用來增加數值的。" },
                                { id: "4", text: "**", explanation: "這是次方運算，不是遞增。" }
                            ],
                            correctAnswerId: "1",
                            hint: "每次增加 1。"
                        },
                        {
                            id: "c4-parsons-loop",
                            type: "parsons",
                            question: "用迴圈印出 1 到 3",
                            title: "簡單迴圈",
                            codeBlocks: [
                                { id: "3", text: "}" },
                                { id: "1", text: "for (let i = 1; i <= 3; i++) {" },
                                { id: "2", text: "  console.log(i);" }
                            ],
                            solutionOrder: ["1", "2", "3"],
                            hint: "For { Log }"
                        },
                        {
                            id: "c5-mcq-inf-loop",
                            type: "multiple-choice",
                            question: "如果你的 While 迴圈條件永遠是 true (例如 while(true))，會發生什麼事？",
                            title: "無限迴圈",
                            options: [
                                { id: "1", text: "程式會執行一次就停", explanation: "條件為 true 就會繼續，不會停。" },
                                { id: "2", text: "瀏覽器可能會當機 (無限迴圈)", isCorrect: true, explanation: "沒錯！因為它永遠跑不完，會吃光電腦資源。" },
                                { id: "3", text: "電腦會爆炸", explanation: "沒那麼誇張，但瀏覽器分頁會沒有回應。" },
                                { id: "4", text: "會自動修復", explanation: "程式不會自動修復邏輯錯誤。" }
                            ],
                            hint: "就像叫你在操場跑到死為止..."
                        }
                    ]
                },
                {
                    id: "lesson-w2-4",
                    title: "Day 4: 陣列與物件 (Collections)",
                    description: "處理更複雜的資料：清單與詳細資訊。",
                    challenges: [
                        {
                            id: "c1-info-arrays",
                            type: "info",
                            question: "置物櫃與檔案夾",
                            title: "資料集合",
                            content: `
# 怎麼存很多東西？

**Array (陣列) []**
- 像是有**編號**的置物櫃。
- 用號碼 (Index) 拿東西，從 0 開始！
- \`let fruits = ["Apple", "Banana"];\`

**Object (物件) {}**
- 像是貼了**標籤**的檔案夾。
- 用名字 (Key) 拿東西。
- \`let cat = { name: "Meow", color: "Orange" };\`
                            `
                        },
                        {
                            id: "c2-fitb-array",
                            type: "fill-in-the-blank",
                            question: "你有一個水果陣列 `['Apple', 'Banana']`，要怎麼拿出第一項 'Apple'？",
                            title: "陣列存取",
                            description: "記得程式是從 0 開始數數的。",
                            code: "let first = fruits[____];",
                            options: [
                                { id: "1", text: "0", isCorrect: true, explanation: "Correct! 索引 (Index) 0 代表第一個位置。" },
                                { id: "2", text: "1", explanation: "索引 1 代表第二個位置 (Banana)。" },
                                { id: "3", text: "first", explanation: "陣列只認數字編號，不認 first 這種字。" },
                                { id: "4", text: "A", explanation: "索引必須是數字。" }
                            ],
                            correctAnswerId: "1",
                            hint: "電腦的第 1 個數字是..."
                        },
                        {
                            id: "c3-parsons-object",
                            type: "parsons",
                            question: "建立一個物件代表這隻貓：名叫橘子，3歲",
                            title: "建立物件",
                            codeBlocks: [
                                { id: "2", text: "  name: 'Orange'," },
                                { id: "4", text: "};" },
                                { id: "1", text: "const cat = {" },
                                { id: "3", text: "  age: 3" }
                            ],
                            solutionOrder: ["1", "2", "3", "4"],
                            hint: "大括號包起來，裡面用 key: value 配對。"
                        },
                        {
                            id: "c4-mcq-choice",
                            type: "multiple-choice",
                            question: "如果你要存「全班同學的考卷分數」，應該用哪種資料結構？",
                            title: "情境選擇",
                            options: [
                                { id: "1", text: "Object (物件)", explanation: "物件適合存「一個人的詳細資料」，存全班分數比較適合用清單。" },
                                { id: "2", text: "Array (陣列)", isCorrect: true, explanation: "正確！因為這是一連串同類型的資料 (分數清單)。" },
                                { id: "3", text: "String (字串)", explanation: "把全班分數寫成一長串文字很難處理。" },
                                { id: "4", text: "Boolean", explanation: "True/False 無法存分數。" }
                            ],
                            hint: "這是一張「清單」。"
                        },
                        {
                            id: "c5-fitb-dot",
                            type: "fill-in-the-blank",
                            question: "要取得物件 `user` 的 `name` 屬性，我們通常用什麼符號？",
                            title: "點記法",
                            description: "這是最常用的物件存取方式。",
                            code: "console.log(user____name);",
                            options: [
                                { id: "1", text: ".", isCorrect: true, explanation: "Correct! 點記法 (Dot Notation) 是最標準的用法。" },
                                { id: "2", text: ",", explanation: "逗號是用來分隔參數的。" },
                                { id: "3", text: ":", explanation: "冒號是用在物件定義裡面的 key: value。" },
                                { id: "4", text: "#", explanation: "井號不是用來存取屬性的。" }
                            ],
                            correctAnswerId: "1",
                            hint: "Dot (點)。"
                        }
                    ]
                },
                {
                    id: "lesson-w2-5",
                    title: "Day 5: DOM 操作 (The Puppeteer)",
                    description: "學習如何用 JavaScript 控制網頁元素。",
                    challenges: [
                        {
                            id: "c1-info-dom",
                            type: "info",
                            question: "操控網頁的手",
                            title: "DOM 操作",
                            content: `
# 讓網頁動起來

JavaScript 可以透過 **DOM** 來改變 HTML。
就像操偶師控制木偶一樣：

1.  **選取 (Select)**：\`document.querySelector('#btn')\` (抓住那隻手)
2.  **監聽 (Listen)**：\`btn.addEventListener('click', ...)\` (等待觀眾握手)
3.  **操作 (Manipulate)**：\`btn.style.color = 'red'\` (把手套變紅色)
                            `
                        },
                        {
                            id: "c2-fitb-query",
                            type: "fill-in-the-blank",
                            question: "你想用 JS 選取 ID 為 'title' 的元素，應該在括號裡填什麼？",
                            title: "選取元素",
                            description: "記得 ID 選擇器前面要加的符號。",
                            code: "document.querySelector('____title');",
                            options: [
                                { id: "1", text: "#", isCorrect: true, explanation: "Correct! 與 CSS 一樣，ID 使用 #。" },
                                { id: "2", text: ".", explanation: ". 是 Class 選擇器。" },
                                { id: "3", text: "/", explanation: "這不是選擇器符號。" },
                                { id: "4", text: "$", explanation: "這是 jQuery 時代的符號，原生 JS 不用這個做前綴。" }
                            ],
                            correctAnswerId: "1",
                            hint: "井號。"
                        },
                        {
                            id: "c3-parsons-event",
                            type: "parsons",
                            question: "排列出「點擊按鈕後，跳出警示視窗」的程式碼",
                            title: "事件監聽",
                            codeBlocks: [
                                { id: "3", text: "  alert('Clicked!');" },
                                { id: "1", text: "const btn = document.querySelector('button');" },
                                { id: "4", text: "});" },
                                { id: "2", text: "btn.addEventListener('click', function() {" }
                            ],
                            solutionOrder: ["1", "2", "3", "4"],
                            hint: "先選到按鈕，再加入監聽器。"
                        },
                        {
                            id: "c4-mcq-event-type",
                            type: "multiple-choice",
                            question: "如果你想偵測使用者「在輸入框打字」的行為，該監聽哪個事件？",
                            title: "事件類型",
                            options: [
                                { id: "1", text: "click", explanation: "Click 是點擊，打字不一定要點擊。" },
                                { id: "2", text: "input", isCorrect: true, explanation: "正確！input 事件會在內容改變時觸發。" },
                                { id: "3", text: "scroll", explanation: "Scroll 是捲動頁面。" },
                                { id: "4", text: "hover", explanation: "Hover 是滑鼠游標懸停。" }
                            ],
                            hint: "輸入 (Input)。"
                        },
                        {
                            id: "c5-parsons-change-text",
                            type: "parsons",
                            question: "寫一段程式碼：把標題文字改成 'Hello JS'",
                            title: "修改內容",
                            codeBlocks: [
                                { id: "1", text: "const h1 = document.querySelector('h1');" },
                                { id: "2", text: "h1.textContent = 'Hello JS';" }
                            ],
                            solutionOrder: ["1", "2"],
                            hint: "先選取，再修改 textContent。"
                        }
                    ]
                },
                {
                    id: "lesson-project-2",
                    title: "Project: 互動待辦清單",
                    description: "綜合運用變數、函數與 DOM，製作你的第一個 Web App！",
                    challenges: [
                        {
                            id: "p2-html",
                            type: "project",
                            question: "步驟 1：準備清單容器",
                            title: "建立 HTML 結構",
                            description: "我們需要一個地方來放待辦事項。請在 HTML 中加上一個有 id 的清單標籤。",
                            files: [
                                {
                                    name: "index.html",
                                    language: "html",
                                    code: `<h1>My To-Do List</h1>
<div class="input-group">
    <input type="text" id="taskInput" placeholder="輸入任務...">
    <button id="addBtn">新增</button>
</div>

<!-- 這裡需要一個清單容器 -->
<ul id="____"></ul>`,
                                },
                                {
                                    name: "style.css",
                                    language: "css",
                                    code: `body { font-family: sans-serif; padding: 20px; }
.input-group { margin-bottom: 20px; }
ul { list-style: none; padding: 0; }
li { padding: 10px; border-bottom: 1px solid #eee; }`,
                                    readOnly: true
                                }
                            ],
                            options: [
                                { id: "1", text: "todoList", isCorrect: true },
                                { id: "2", text: "button" },
                                { id: "3", text: "input" }
                            ],
                            correctAnswerId: "1",
                            hint: "我們通常把這叫做 'todoList'。"
                        },
                        {
                            id: "p2-js-select",
                            type: "project",
                            question: "步驟 2：選取按鈕",
                            title: "JavaScript 選取元素",
                            description: "要讓按鈕有反應，我們得先用 JS 抓到它。請選取 id 為 addBtn 的元素。",
                            files: [
                                {
                                    name: "script.js",
                                    language: "javascript",
                                    code: `// 1. 選取 HTML 元素
const input = document.querySelector('#taskInput');
const list = document.querySelector('#todoList');

// 請抓取 id 為 addBtn 的按鈕
const addBtn = document.querySelector('____');`,
                                }
                            ],
                            options: [
                                { id: "1", text: "#addBtn", isCorrect: true },
                                { id: "2", text: ".addBtn" },
                                { id: "3", text: "button" }
                            ],
                            correctAnswerId: "1",
                            hint: "ID 選擇器需要加井號 #。"
                        },
                        {
                            id: "p2-js-event",
                            type: "project",
                            question: "步驟 3：監聽點擊",
                            title: "加入事件監聽",
                            description: "當按鈕被點擊 (click) 時，我們要執行一個函數。",
                            files: [
                                {
                                    name: "script.js",
                                    language: "javascript",
                                    code: `const input = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');

// 2. 加入監聽器
addBtn.addEventListener('____', function() {
    console.log("按鈕被按下了！");
});`,
                                }
                            ],
                            options: [
                                { id: "1", text: "click", isCorrect: true },
                                { id: "2", text: "hover" },
                                { id: "3", text: "change" }
                            ],
                            correctAnswerId: "1",
                            hint: "點擊的英文是 Click。"
                        },
                        {
                            id: "p2-parsons-logic",
                            type: "parsons",
                            question: "步驟 4：新增任務邏輯 (核心)",
                            title: "建立與加入元素",
                            description: "請排列下列程式碼，完成「建立 li -> 放入文字 -> 加到清單」的流程。",
                            codeBlocks: [
                                { id: "1", text: "const li = document.createElement('li');" },
                                { id: "2", text: "li.textContent = input.value;" },
                                { id: "3", text: "list.appendChild(li);" }
                            ],
                            solutionOrder: ["1", "2", "3"],
                            hint: "先建立(Create)，再填值(Value)，最後加入(Append)。"
                        },
                        {
                            id: "p2-final-review",
                            type: "info",
                            question: "恭喜完成！",
                            title: "完整程式碼",
                            content: `
# 你的 To-Do List 完成了！

這是我們組合起來的完整邏輯：

\`\`\`javascript
const input = document.querySelector('#taskInput');
const list = document.querySelector('#todoList');
const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', function() {
    // 1. 建立新 li
    const li = document.createElement('li');
    // 2. 填入輸入框的字
    li.textContent = input.value;
    // 3. 加到清單最下面
    list.appendChild(li);
    // 4. 清空輸入框 (優化體驗)
    input.value = '';
});
\`\`\`


這就是 Web App 的基本原理：**選取 -> 監聽 -> 操作 DOM**！
                            `
                        }
                    ]
                }
            ]
        },
        {
            id: "week-3",
            title: "Week 3: TypeScript (型別魔法)",
            description: "為你的程式加上魔法防護網，不再怕低級錯誤。",
            lessons: [
                {
                    id: "lesson-w3-1",
                    title: "Day 1: 型別標籤 (Type Analytics)",
                    description: "給每個變數貼上專屬標籤，這是什麼盒子就裝什麼。",
                    challenges: [
                        {
                            id: "c1-info-types",
                            type: "info",
                            question: "為什麼需要型別？",
                            title: "魔法貼紙",
                            content: `
# 記得那個變數收納箱嗎？

                            在 JavaScript(JS) 裡，盒子可以亂放東西：
\`\`\`javascript
let box = "Book";
box = 100; // 沒問題，但很危險！
\`\`\`

在 **TypeScript (TS)** 裡，我們會在箱子上貼「標籤」：
\`\`\`typescript
let box: string = "Book";
box = 100; // ❌ 錯誤！數字不能放進貼著 "string" 的箱子！
\`\`\`

這個標籤能保護我們，防止把貓放進烤箱裡！
                            `
                        },
                        {
                            id: "c2-fitb-annotation",
                            type: "fill-in-the-blank",
                            question: "宣告一個「數字」類型的變數 score",
                            title: "基本型別",
                            description: "在變數後面加上冒號和型別名稱。",
                            code: "let score: ____ = 100;",
                            options: [
                                { id: "1", text: "number", isCorrect: true, explanation: "Correct! 數字的型別是 number。" },
                                { id: "2", text: "string", explanation: "100 是數字，不是字串。" },
                                { id: "3", text: "boolean", explanation: "boolean 是 True/False。" }
                            ],
                            correctAnswerId: "1",
                            hint: "數值的英文。"
                        },
                        {
                            id: "c3-parsons-func-type",
                            type: "parsons",
                            question: "定義一個函數，規定它只能接受「數字」當參數",
                            title: "函數型別",
                            codeBlocks: [
                                { id: "1", text: "function double(x: number) {" },
                                { id: "2", text: "  return x * 2;" },
                                { id: "3", text: "}" }
                            ],
                            solutionOrder: ["1", "2", "3"],
                            hint: "參數後面也要貼標籤。"
                        },
                        {
                            id: "c4-mcq-error",
                            type: "multiple-choice",
                            question: "如果你嘗試把 'Hello' 存入 number 類型的變數，會發生什麼？",
                            title: "型別錯誤",
                            options: [
                                { id: "1", text: "程式會爆炸", explanation: "不會爆炸，但編譯器會報錯。" },
                                { id: "2", text: "TypeScript 會在你執行前就警告錯誤", isCorrect: true, explanation: "沒錯！這就是 TS 最強大的地方：預防勝於治療。" },
                                { id: "3", text: "瀏覽器會當機", explanation: "瀏覽器看不到 TS，它只看編譯後的 JS。" },
                                { id: "4", text: "沒事發生", explanation: "TS 檢查器會擋住你。" }
                            ],
                            hint: "TS 是預防錯誤的守門員。"
                        }
                    ]
                },
                {
                    id: "lesson-w3-2",
                    title: "Day 2: 介面與物件 (Interfaces)",
                    description: "為物件設計專屬的「身分證」或「藍圖」。",
                    challenges: [
                        {
                            id: "c1-info-interface",
                            type: "info",
                            question: "什麼是 Interface？",
                            title: "藍圖與契約",
                            content: `
# 物件的身分證

如果這是一個 **User (使用者)**，他一定得有名字和 ID。
我們可以定一張「契約」或「藍圖」，叫做 **Interface**：

\`\`\`typescript
interface User {
  name: string;
  id: number;
}
\`\`\`
以後只要說「這個變數是 User」，它就必須遵守這張身分證的規定，少一個欄位都不行！
                            `
                        },
                        {
                            id: "c2-parsons-interface",
                            type: "parsons",
                            question: "定義一個叫 'Cat' 的介面，有名字(字串)和年齡(數字)",
                            title: "定義介面",
                            codeBlocks: [
                                { id: "1", text: "interface Cat {" },
                                { id: "2", text: "  name: string;" },
                                { id: "3", text: "  age: number;" },
                                { id: "4", text: "}" }
                            ],
                            solutionOrder: ["1", "2", "3", "4"],
                            hint: "interface 名稱 { 屬性: 型別 }"
                        },
                        {
                            id: "c3-fitb-impl",
                            type: "fill-in-the-blank",
                            question: "使用 Cat 介面來宣告一隻貓",
                            title: "使用介面",
                            description: "告訴 TS 這個物件是 Cat。",
                            code: "const myCat: ____ = { name: 'Orange', age: 3 };",
                            options: [
                                { id: "1", text: "Cat", isCorrect: true, explanation: "Correct! 我們用剛剛定義的 Cat 當作型別。" },
                                { id: "2", text: "Dog", explanation: "這隻是貓。" },
                                { id: "3", text: "object", explanation: "太籠統了，我們要用具體的 Cat 藍圖。" }
                            ],
                            correctAnswerId: "1",
                            hint: "填入介面的名稱。"
                        }
                    ]
                },
                {
                    id: "lesson-w3-3",
                    title: "Day 3: 聯合與選擇 (Union & Optional)",
                    description: "處理「二選一」或「可有可無」的情況。",
                    challenges: [
                        {
                            id: "c1-info-union",
                            type: "info",
                            question: "這個或那個？",
                            title: "聯合型別",
                            content: `
# 選擇困難症救星

有時候變數可能是數字，也可能是字串（例如 ID）。
我們用 \`|\` (Pipe) 符號來連接：

\`\`\`typescript
let id: string | number;
id = "U-123"; // OK
id = 123;     // OK
\`\`\`

這就像一個盒子，上面寫著「書本 或 平板」，這兩種都能放進去！
                        `
                        },
                        {
                            id: "c2-parsons-union",
                            type: "parsons",
                            question: "定義一個函數，參數 id 可以是字串或數字",
                            title: "多重身分",
                            codeBlocks: [
                                { id: "1", text: "function printId(id: number | string) {" },
                                { id: "2", text: "  console.log('Your ID is: ' + id);" },
                                { id: "3", text: "}" }
                            ],
                            solutionOrder: ["1", "2", "3"],
                            hint: "使用 | 符號。"
                        },
                        {
                            id: "c3-fitb-optional",
                            type: "fill-in-the-blank",
                            question: "有些欄位不一定要填（例如 email），我們要在屬性名稱後面加什麼？",
                            title: "選擇性屬性",
                            description: "這就像表單上的 (Optional) 選填欄位。",
                            code: "interface User { name: string; email____: string; }",
                            options: [
                                { id: "1", text: "?", isCorrect: true, explanation: "Correct! ? 代表這個屬性可有可無。" },
                                { id: "2", text: "!", explanation: "! 通常代表「我保證它存在」，意思完全相反。" },
                                { id: "3", text: "|", explanation: "| 是聯合型別。" }
                            ],
                            correctAnswerId: "1",
                            hint: "這是一個問號，因為不確定有沒有。"
                        }
                    ]
                },
                {
                    id: "lesson-w3-4",
                    title: "Day 4: 函數型別 (Function Types)",
                    description: "嚴格規定函數的輸入與輸出。",
                    challenges: [
                        {
                            id: "c1-fitb-return",
                            type: "fill-in-the-blank",
                            question: "我們要規定 `add` 函數回傳的一定是數字，要寫在哪裡？",
                            title: "回傳型別",
                            description: "在參數括號的後面。",
                            code: "function add(a: number, b: number): ____ { return a + b; }",
                            options: [
                                { id: "1", text: "number", isCorrect: true, explanation: "Correct! 這代表函數執行完會吐出一個數字。" },
                                { id: "2", text: "string", explanation: "a + b 是數字相加，不會變成字串。" },
                                { id: "3", text: "void", explanation: "void 代表「沒有回傳值」，但這裡有 return。" }
                            ],
                            correctAnswerId: "1",
                            hint: "這是一個數字運算。"
                        },
                        {
                            id: "c2-parsons-arrow",
                            type: "parsons",
                            question: "定義一個變數 `greet`，它是一個「接收字串、回傳字串」的箭頭函數",
                            title: "函數簽名",
                            codeBlocks: [
                                { id: "1", text: "const greet: (name: string) => string = " },
                                { id: "2", text: "(name) => {" },
                                { id: "3", text: "  return 'Hello ' + name;" },
                                { id: "4", text: "};" }
                            ],
                            solutionOrder: ["1", "2", "3", "4"],
                            hint: "型別定義使用 => 箭頭。"
                        },
                        {
                            id: "c3-mcq-void",
                            type: "multiple-choice",
                            question: "如果一個函數只負責 console.log 而不回傳任何東西，它的回傳型別是什麼？",
                            title: "虛無 Void",
                            options: [
                                { id: "1", text: "null", explanation: "null 是一個值，代表「空值」。" },
                                { id: "2", text: "undefined", explanation: "雖然 JS 預設回傳 undefined，但在 TS 型別中我們習慣用 void。" },
                                { id: "3", text: "void", isCorrect: true, explanation: "正確！Void 代表「無」，也就是這個函數沒有產出。" },
                                { id: "4", text: "any", explanation: "any 代表什麼都可以，太寬鬆了。" }
                            ],
                            hint: "像是把東西丟進黑洞，沒有東西跑出來。"
                        }
                    ]
                },
                {
                    id: "lesson-w3-5",
                    title: "Day 5: 泛型入門 (Generics Intro)",
                    description: "打造萬能的模具，讓程式碼更靈活。",
                    challenges: [
                        {
                            id: "c1-info-generics",
                            type: "info",
                            question: "什麼是泛型？",
                            title: "萬用模具",
                            content: `
# 打造一個萬用盒子

假設你要做一個「盒子」，你不想為「裝書的盒子」寫一段程式碼，又為「裝鞋的盒子」寫另一段。
你想要一個**萬用盒子**，使用的時候再決定貼什麼標籤。

這就是 **Generics (泛型)**，我們常用 \`<T>\` 來代表「某種型別」。

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello"); // 這次 T 變成了 string
let num = identity<number>(100);        // 這次 T 變成了 number
\`\`\`
                        `
                        },
                        {
                            id: "c2-parsons-generic-func",
                            type: "parsons",
                            question: "你需要一個函數，它接收什麼型別就回傳什麼型別，請完成它",
                            title: "泛型函數",
                            codeBlocks: [
                                { id: "1", text: "function echo<T>(item: T): T {" },
                                { id: "2", text: "  return item;" },
                                { id: "3", text: "}" }
                            ],
                            solutionOrder: ["1", "2", "3"],
                            hint: "記得在函數名後面宣告 <T>。"
                        },
                        {
                            id: "c3-fitb-generic-type",
                            type: "fill-in-the-blank",
                            question: "我們有一個萬用盒子型別 \`Box<T>\`，請宣告一個「裝數字」的盒子",
                            title: "泛型應用",
                            description: "把 T 換成具體的型別。",
                            code: "const numberBox: Box<____> = { content: 123 };",
                            options: [
                                { id: "1", text: "number", isCorrect: true, explanation: "Correct! 我們指定T為number。" },
                                { id: "2", text: "T", explanation: "T 只是代號，使用時要換成真的型別。" },
                                { id: "3", text: "string", explanation: "123 是數字。" }
                            ],
                            correctAnswerId: "1",
                            hint: "裡面裝的是數字。"
                        }
                    ]
                },
                {
                    id: "lesson-project-3",
                    title: "Project: TS 重構挑戰",
                    description: "將一個容易出錯的 JS 購物車程式，升級成安全的 TS 版本！",
                    challenges: [
                        {
                            id: "p3-interface",
                            type: "project",
                            question: "步驟 1：定義商品藍圖",
                            title: "定義 Interface",
                            description: "我們需要一個 Product 介面，規定商品必須有 id (數字), name (字串), price (數字)。",
                            files: [
                                {
                                    name: "types.ts",
                                    language: "typescript",
                                    code: `// 請完成 Product 介面
export interface Product {
    id: ____;
    name: string;
    price: number;
}`,
                                }
                            ],
                            options: [
                                { id: "1", text: "number", isCorrect: true, explanation: "Correct! ID 通常是數字或 UUID 字串，這裡我們用 number。" },
                                { id: "2", text: "string" },
                                { id: "3", text: "boolean" }
                            ],
                            correctAnswerId: "1",
                            hint: "ID 是一個編號。"
                        },
                        {
                            id: "p3-function-type",
                            type: "project",
                            question: "步驟 2：為函數加上型別",
                            title: "修復計算函數",
                            description: "這個函數原本沒有型別，很危險。請幫參數 `cart` 加上正確的陣列型別。",
                            files: [
                                {
                                    name: "cart.ts",
                                    language: "typescript",
                                    code: `import { Product } from './types';

// cart 是一個 Product 的陣列
function calculateTotal(cart: ____[]): number {
    let total = 0;
    for (const item of cart) {
        total += item.price;
    }
    return total;
}`,
                                }
                            ],
                            options: [
                                { id: "1", text: "Product", isCorrect: true, explanation: "Correct! 我們要接收的是 Product 組成的陣列。" },
                                { id: "2", text: "string" },
                                { id: "3", text: "any" }
                            ],
                            correctAnswerId: "1",
                            hint: "我們剛剛定義的介面名稱。"
                        },
                        {
                            id: "p3-review",
                            type: "info",
                            question: "重構完成！",
                            title: "TypeScript 的威力",
                            content: `
# 你拯救了購物車！

以前用 JS 寫的時候，如果有人不小心傳了 \`null\` 或傳了沒有 \`price\` 的物件，程式會在 \`item.price\` 那一行直接當機。

但在 TS 版本中：
1.  **Interface** 確保每個商品都有 \`price\`。
2.  **型別檢查** 確保傳進 \`calculateTotal\` 的一定是一整組正確的商品。

如果有錯誤，代碼還沒執行就會出現紅線警告。這就是為什麼大型專案都愛用 TypeScript！
                        `
                        }
                    ]
                }
            ]
        }
    ]
};
