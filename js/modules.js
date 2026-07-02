// ========================================
// Claude 研修アプリ - 学習コンテンツデータ
// 実践型カリキュラム: チャット・Cowork・Claude Code
// ========================================

const MODULES = [
  // ============================================================
  // 第1回：Claudeで仕事の初速を上げ、成果物を作る
  // ============================================================
  {
    id: 'session-1',
    title: '第1回：Claudeで仕事の初速を上げ、成果物を作る',
    shortTitle: '第1回',
    description: 'Claudeの特徴を理解してChatで初速を上げ、Office・Research・Artifact・Coworkで業務成果物まで作れるようになる',
    target: 'Claude を業務で使い始めたい方',
    duration: '自分のペースで',
    prereq: 'Claudeアカウント（事前準備済み）',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
    objectives: [
      'Claudeの概要と、業務のどの場面で効果を発揮するかを説明できる',
      'Claude（まずは Chat）で、壁打ち・下書き・要約を実行できる',
      'プロンプト3要素（前提の共有・タスク・ルール）で的確に指示が出せる',
      'AIの出力を鵜呑みにせず、確認・修正・最終判断する姿勢が身についている',
      'Claudeの周辺機能（Project / Artifact / Cowork / Claude Code）を「必要になったら使える」レベルで把握できる'
    ],
    coverGroups: [
      { label: 'Claudeを知る', icon: '💡', sections: [0, 1, 2], objectives: ['Claudeが何者か説明できる', '主要機能の全体像を把握する', 'Chat / Cowork / Code を使い分けられる'] },
      { label: 'Chatを使いこなす', icon: '💬', sections: [3, 4, 5], objectives: ['Chatで壁打ち・下書き・要約ができる', 'プロンプト3要素で良い指示を出せる', '出力を確認・修正し責任を持てる'] },
      { label: '成果物を作る', icon: '🏗️', sections: [6, 7, 8, 9, 10], objectives: ['Project / Artifactで成果物にできる', '成果物の種類と作り分けがわかる', 'Office・Research・プロトタイプを活用できる'] },
      { label: '業務に組み込む', icon: '⚙️', sections: [11, 12, 13, 14], objectives: ['Coworkでファイル作業を任せられる（委任）', 'Chrome拡張でブラウザ作業を支援できる', 'Scheduled tasksで定型業務を自動化できる', 'よく使う手順をSkillとして型化できる'] }
    ],
    sections: [

      // ========================================
      // 1-1: Claudeとは何か
      // ========================================
      {
        title: '1-1. Claudeとは何か',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude がどんなAIで、業務のどこで活かせるかを押さえます。本講座を進めるうえでの出発点です。</p>

          <h3>Claudeとは</h3>
          <p>Claude は Anthropic が開発した生成AIアシスタントです。「大規模言語モデル（LLM）」を基盤にしており、<strong>長文処理・指示への忠実さ・考えるパートナーとしての設計</strong>に強みがあります。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🧠</div>
              <div class="grid-title">長文に強い</div>
              <div class="grid-desc">一度に約75万字＝文庫本で数冊分（最大100万トークン）まで読み込めます。長い報告書や議事録、複数資料をそのまま渡して、要約・分析・比較を依頼できます</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">指示に忠実</div>
              <div class="grid-desc">役割・ルール・出力形式を指定すると、そのとおりに動きます。「箇条書き3点で」「です・ます調で」といった制約を守る精度が高い</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🤝</div>
              <div class="grid-title">考えるパートナー</div>
              <div class="grid-desc">壁打ち・論点整理・構造化が得意です。「答えを出す」だけでなく「一緒に考える」ために設計されています</div>
            </div>
          </div>

          <h3>業務での使いどころ</h3>
          <p>Claude が役立つのは、次のような場面。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🏓</div>
              <div class="grid-title">壁打ち・論点整理</div>
              <div class="grid-desc">提案の切り口を一緒に考える、論点を構造化する、弱点を指摘してもらう</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✍️</div>
              <div class="grid-title">下書き・素案作成</div>
              <div class="grid-desc">メール、報告書、議事録の叩き台を作る。自分の言葉で磨く前の初稿として使う</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">要約・情報整理</div>
              <div class="grid-desc">長い文書やメールスレッドを要点に絞る。複数資料の横断比較も得意</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">分析・構造化整理</div>
              <div class="grid-desc">データの傾向分析、SWOT整理、競合比較表の作成など</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏗️</div>
              <div class="grid-title">提案書、プロジェクト資料、データ分析・レポート作成</div>
              <div class="grid-desc">構成案・スライド・図表・KPI可視化まで、業務成果物の生成</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">プロトタイプ・アプリの作成</div>
              <div class="grid-desc">診断ツール、シミュレーター、画面モック</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 まず Chat から</strong><br>
            Claude は Chat（対話）を中心に、Cowork（ファイル作業）や Claude Code（高度作業）、Office アドインや Artifact など多彩な接点を持ちます。第1回ではまず Chat から始め、続けて他の接点へ広げていきます。
          </div>
        `
      },

      // ========================================
      // 1-2: Claudeの主要機能マップ
      // ========================================
      {
        title: '1-2. Claudeの主要機能マップ',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude の機能を「地図」として頭に入れます。全部を一度に覚える必要はありません。「こういう機能がある」と知っておけば、必要なときに引き出せます。</p>

          <h3>機能の全体マップ</h3>
          <p>Claude の機能は <strong>Chat（対話）を中心に広がっています</strong>。Chat の中で使える機能と、Chat の外に広がる機能を分けて理解しましょう。</p>

          <div class="visual-product-map">
            <div class="product-map-row full">
              <div class="product-group browser">
                <div class="product-group-header">💬 Chat — すべての基盤</div>
                <div class="product-features">
                  <span class="product-feature">📋 Project（前提・資料を保持 — 1-7）</span>
                  <span class="product-feature">🎨 Artifact（成果物を切り出す — 1-7）</span>
                  <span class="product-feature">🔍 Research（複数ソースを調査 — 1-10）</span>
                  <span class="product-feature">🌐 Web検索 / ファイル添付（1-4）</span>
                </div>
              </div>
            </div>
            <div class="product-map-row split">
              <div class="product-group desktop">
                <div class="product-group-header">🖥️ Desktop アプリ追加モード</div>
                <div class="product-features">
                  <span class="product-feature">📂 Cowork（ファイル作業を委任 — 1-13）</span>
                  <span class="product-feature">⚡ Claude Code（高度な作業 — 第2回）</span>
                </div>
              </div>
              <div class="product-group office">
                <div class="product-group-header">📊 Office / 🌐 Chrome</div>
                <div class="product-features">
                  <span class="product-feature">📊 Office アドイン（1-9）</span>
                  <span class="product-feature">🌐 Chrome 拡張（1-12）</span>
                  <span class="product-feature">⏰ Scheduled tasks（1-14）</span>
                </div>
              </div>
            </div>
            <div class="product-map-row split">
              <div class="product-group" style="background:var(--bg);border:1px solid var(--border-light);">
                <div class="product-group-header" style="color:var(--text-secondary);">🧩 Skills</div>
                <div class="product-features">
                  <span class="product-feature">よく使う手順・テンプレート・ルールを型として保存</span>
                  <span class="product-feature">名前を呼ぶだけで再利用できる（1-15 / 第2回 2-5）</span>
                </div>
              </div>
              <div class="product-group" style="background:var(--bg);border:1px solid var(--border-light);">
                <div class="product-group-header" style="color:var(--text-secondary);">🔗 MCP / Connectors</div>
                <div class="product-features">
                  <span class="product-feature">Slack・Notion など社内ツールと Claude を接続</span>
                  <span class="product-feature">コピペなしで社内データを成果物に反映（第2回 2-5）</span>
                </div>
              </div>
            </div>
          </div>

          <div class="visual-highlight-card">
            <p><strong>今日のフォーカス</strong>：第1回では <strong>Chat・Project・Artifact</strong> を中心に学びます。Office・Research・Cowork・Skill などは 1-8〜1-15、MCP・Claude Code は第2回で順に扱うので、今は「こういうものがある」と頭に入れておけばOKです。</p>
          </div>
        `
      },

      // ========================================
      // 1-3: Chat / Cowork / Claude Code の使い分け
      // ========================================
      {
        title: '1-3. Chat / Cowork / Claude Code の使い分け',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude は「<strong>作業スタイル</strong>」と「<strong>利用場所</strong>」の 2 軸で整理すると分かりやすくなります。「3つのモード」（Chat / Cowork / Claude Code）は <strong>作業スタイル</strong> の話で、それぞれをどこ（Web / Desktop / Mobile / Cursor IDE / CLI）で使うかは別の軸です。</p>

          <h3>3つの作業スタイル</h3>
          <p>まず作業スタイルから押さえます。</p>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">Chat</div>
              <div class="grid-desc">
                <strong>会話しながら考える</strong><br>
                壁打ち・質問・下書き・要約・論点整理。<br>
                情報が1回で渡せるタスク向き。<br>
                Web / Desktop / Mobile で使える
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">Cowork</div>
              <div class="grid-desc">
                <strong>ファイル作業を任せる</strong><br>
                ローカルファイルや複数資料を渡して成果物を作ってもらう。<br>
                PPTX / XLSX 直接出力、離席OK。<br>
                Desktop で使う
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">Claude Code</div>
              <div class="grid-desc">
                <strong>高度な作業を任せる</strong><br>
                プロトタイプ、コード・アプリ・複数ファイル編集・データ処理など。<br>
                <strong>Claude Desktop で使うのが基本</strong>、<br>
                CLI / IDE はより細かく使いたい人向け
              </div>
            </div>
          </div>

          <h3>作業スタイル × 利用場所</h3>
          <p>「<strong>何を任せるか</strong>（作業スタイル）」と「<strong>どこで使うか</strong>（利用場所）」を分けて理解するのが整理のコツです。</p>

          <table class="info-table">
            <thead>
              <tr>
                <th>作業スタイル</th>
                <th>主な利用場所</th>
                <th>位置づけ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>💬 <strong>Chat</strong></td>
                <td>Web / Desktop / Mobile</td>
                <td>初心者がまず使う基本</td>
              </tr>
              <tr>
                <td>📂 <strong>Cowork</strong></td>
                <td>Desktop</td>
                <td>ファイル作業・資料作成で使う</td>
              </tr>
              <tr>
                <td>⚡ <strong>Claude Code</strong></td>
                <td><strong>Desktop が基本</strong>（CLI / IDE は上級者向け）</td>
                <td>まず Desktop で試し、より高度に使いたい人は CLI / IDE へ</td>
              </tr>
            </tbody>
          </table>

          <div class="info-box">
            <strong>ℹ️ まずは Desktop から</strong><br>
            Chat・Cowork・Claude Code はいずれも Claude Desktop から使えます。Web 版で Chat を試してみて、次のステップとして Desktop を開いてみましょう。CLI / IDE（VS Code / Cursor など）は、より高度に使いたくなってから検討すれば十分です。
          </div>

          <h3>判断フロー — いつ、どれを使う？</h3>
          <div class="visual-flow">
            <div class="flow-step">
              <div class="flow-num">❓</div>
              <div class="flow-label">対話で済むか？</div>
              <div class="flow-desc">質問・壁打ち・下書き</div>
            </div>
            <div class="flow-arrow">→ Yes →</div>
            <div class="flow-step">
              <div class="flow-num">💬</div>
              <div class="flow-label">Chat</div>
              <div class="flow-desc">まずはここから</div>
            </div>
          </div>
          <div class="visual-flow" style="margin-top: 12px;">
            <div class="flow-step">
              <div class="flow-num">❓</div>
              <div class="flow-label">ファイルを作ってほしいか？</div>
              <div class="flow-desc">PPTX / XLSX / DOCX</div>
            </div>
            <div class="flow-arrow">→ Yes →</div>
            <div class="flow-step">
              <div class="flow-num">📂</div>
              <div class="flow-label">Cowork</div>
              <div class="flow-desc">1-13 で詳しく</div>
            </div>
          </div>
          <div class="visual-flow" style="margin-top: 12px;">
            <div class="flow-step">
              <div class="flow-num">❓</div>
              <div class="flow-label">毎回同じ品質で繰り返したいか？</div>
              <div class="flow-desc">ルール固定・自動化</div>
            </div>
            <div class="flow-arrow">→ Yes →</div>
            <div class="flow-step">
              <div class="flow-num">⚡</div>
              <div class="flow-label">Claude Code</div>
              <div class="flow-desc">第2回で詳しく</div>
            </div>
          </div>

          <h3>具体例</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">Chat で</div>
              <div class="grid-desc">
                ・提案の切り口を壁打ち<br>
                ・メールの下書き<br>
                ・議事録PDFの要約<br>
                ・競合比較表の作成
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">Cowork で</div>
              <div class="grid-desc">
                ・提案書PPTXの作成<br>
                ・Excelデータの整形<br>
                ・フォルダ内の資料整理<br>
                ・定型レポートの自動生成
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">Claude Code で</div>
              <div class="grid-desc">
                ・品質チェックの自動化<br>
                ・テンプレートの標準化<br>
                ・複数ツール連携の自動化<br>
                ・チーム共通ルールの固定
              </div>
            </div>
          </div>

          <div class="visual-highlight-card">
            <p><strong>迷ったら Chat から</strong>：Chat はベースキャンプです。Chat で始めて「ファイルを直接作りたい」と思ったら Cowork、「毎回同じ品質にしたい」と思ったら Claude Code に進みましょう。</p>
          </div>

          <div class="info-box">
            <strong>ℹ️ Cowork は 1-13、Claude Code は第2回で詳しく</strong><br>
            まずは Chat の使い方をしっかり身につけることに集中します。Cowork・Claude Code は「こういうものがある」と知っておけば十分です。
          </div>
        `
      },

      // ========================================
      // 1-4: Chatで壁打ち・下書き・要約
      // ========================================
      {
        title: '1-4. Chatで壁打ち・下書き・要約',
        type: 'hands-on',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Chat で最もよく使う3つのパターン — 壁打ち・下書き・要約 — を実際に体験します。どれもチャットに文章を入力するだけで始められます。</p>

          <h3>Chat の3つの基本パターン</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🏓</div>
              <div class="grid-title">壁打ち</div>
              <div class="grid-desc">アイデアや方針を Claude にぶつけて、論点を整理する。一人で考えるより視野が広がる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✍️</div>
              <div class="grid-title">下書き</div>
              <div class="grid-desc">メール、報告書、議事録の素案を作る。自分の言葉で磨く前の叩き台として使う</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">要約</div>
              <div class="grid-desc">長い文書やメールスレッドを要点に絞る。ファイルを添付して「3点に要約して」</div>
            </div>
          </div>

          <h3>パターン1：壁打ち</h3>
          <p>壁打ちは「正解を求める」のではなく、<strong>考えを整理し、視野を広げる</strong>ための使い方です。</p>
          <div class="example-box">
            <strong>📌 プロンプト例：提案の切り口を壁打ち</strong><br><br>
            「製造業のクライアントにDX推進の提案をします。<br>
            現状は紙ベースの在庫管理で、月次棚卸に3日かかっています。<br>
            提案の切り口を5つ挙げて、それぞれのメリット・リスクを教えてください。」<br><br>
            <em>→ Claude が5つの切り口を提示。「このうち2番目を深掘りして」と会話を続けられる</em>
          </div>

          <h3>パターン2：下書き</h3>
          <p>下書きは「完成品」ではなく<strong>「叩き台」</strong>を作る使い方です。0から書くより、叩き台を修正する方が圧倒的に速い。</p>
          <div class="example-box">
            <strong>📌 プロンプト例：クライアントへのメール</strong><br><br>
            「明日のステアリングコミッティに向けて、進捗報告メールを書いてください。<br>
            宛先はA社の部長。丁寧だが簡潔なトーンで。<br>
            報告内容：Phase 1 完了、Phase 2 は1週間前倒しで開始予定、リスクは要員確保。」<br><br>
            <em>→ すぐにメール文面が出力される。微調整して送信すればOK</em>
          </div>

          <h3>パターン3：要約</h3>
          <p>要約は「長い情報を短くする」だけでなく、<strong>「何が重要かを判断する」</strong>ための使い方です。</p>
          <div class="example-box">
            <strong>📌 プロンプト例：議事録の要約</strong><br><br>
            「この議事録を以下の形式で要約してください。<br>
            ・決定事項（箇条書き）<br>
            ・宿題（担当者と期限付き）<br>
            ・次回アジェンダ案」<br>
            ＋ 議事録PDFを添付<br><br>
            <em>→ 構造化された要約が返ってくる。出力形式を指定すると精度が上がる</em>
          </div>

          <h3>Chat の便利機能</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📎</div>
              <div class="grid-title">ファイル添付</div>
              <div class="grid-desc">PDF・Word・Excel・画像をドラッグ&ドロップ。中身について質問したり、処理を依頼できる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Web検索</div>
              <div class="grid-desc">最新情報が必要なとき、Claude が自動で検索して回答に反映する。出典も表示される</div>
            </div>
          </div>

          <h3>どのモデルを選ぶ？</h3>
          <div class="visual-grid" style="grid-template-columns: repeat(4, 1fr);">
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">Haiku</div>
              <div class="grid-desc">素早い回答・要約・情報抽出など、シンプルな処理に特化。高速で軽量。<br><strong style="color:var(--primary);font-size:12px;">トークン消費 少</strong></div>
            </div>
            <div class="visual-grid-item" style="border:2px solid var(--primary);">
              <div class="grid-icon">⚖️</div>
              <div class="grid-title">Sonnet　<span style="font-size:11px;color:var(--primary);">★ 迷ったらここ</span></div>
              <div class="grid-desc">コーディング・分析・文書作成・複雑なワークフローまで幅広く対応。汎用性が最も高い。<br><strong style="color:var(--primary);font-size:12px;">トークン消費 中</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧠</div>
              <div class="grid-title">Opus</div>
              <div class="grid-desc">深い調査・複雑な推論が必要な対話的セッションに。Sonnet では難しい問題向き。<br><strong style="color:var(--text-muted);font-size:12px;">トークン消費 大</strong></div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✨</div>
              <div class="grid-title">Fable</div>
              <div class="grid-desc">精度が極めて重要な長い複雑なタスク・長文ドキュメントや図表からの出力生成に。<br><strong style="color:var(--text-muted);font-size:12px;">トークン消費 最大（Opus の約2倍）</strong></div>
            </div>
          </div>
          <div class="info-box">
            <p>上位モデルほど性能が高い反面、<strong>1回の会話で消費するトークン（使用量）が多くなります</strong>。日常的な依頼（メール下書き・議事録整理・要約など）は Sonnet で十分。Opus・Fable は「どうしても高い精度が必要な場面」に絞ると、使用量の節約になります。</p>
          </div>

          <div class="column-box">
            <div class="column-eyebrow">📎 コラム：トークンとは？</div>
            <p>Claude が文章を処理するときの<strong>最小単位</strong>が「トークン」です。日本語では1文字がほぼ1トークン（英語は単語の一部）と考えるとイメージしやすいです。</p>
            <p>トークンには<strong>「読み込み」と「書き出し」の2方向</strong>があります。あなたが送った文章（資料・指示）が読み込みトークン、Claude が返した回答が書き出しトークンです。両方の合計が使用量にカウントされます。</p>
            <p><strong>上位モデルは同じ質問でも消費トークンが増える</strong>傾向があります。特に Fable は Opus の約2倍の消費量になります。利用プランごとに1日・1か月の上限があるので、定型的な作業は Haiku・Sonnet、ここぞという場面だけ Opus・Fable と使い分けると上限に余裕ができます。</p>
          </div>

          <h3>どれだけ資料を渡せる？</h3>
          <div class="visual-stats">
            <div class="visual-stat">
              <div class="stat-value">最大 100万トークン</div>
              <div class="stat-label">コンテキストウィンドウ（一度に扱える上限）</div>
            </div>
            <div class="visual-stat">
              <div class="stat-value">約75万字 = 文庫本で数冊分</div>
              <div class="stat-label">長い議事録・報告書・複数資料もまるごとOK</div>
            </div>
          </div>
          <p style="font-size:13px;color:var(--text-secondary);">ただし一度に詰め込みすぎると要点がぼけることもあるので、必要な資料に絞る・分割するのもコツです。</p>

          <div class="try-box">
            <strong>✅ やってみよう</strong><br>
            claude.ai を開いて、以下のどれかを試してみましょう：<br><br>
            <strong>壁打ち</strong>：「来週のチームMTGのアジェンダ案を3つ出して。それぞれの狙いも教えて」<br>
            <strong>下書き</strong>：「○○の件でクライアントに送る報告メールの下書きを作って。丁寧だが簡潔に」<br>
            <strong>要約</strong>：手元のPDFを添付して「この資料の要点を3つにまとめて」
          </div>
        `
      },

      // ========================================
      // 1-5: 良い指示の出し方
      // ========================================
      {
        title: '1-5. 良い指示の出し方',
        type: 'hands-on',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude への指示（プロンプト）の書き方で、出力の質は大きく変わります。「3つの要素」を意識するだけで、狙った出力を引き出せるようになります。</p>

          <h3>プロンプトの3要素</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">前提の共有</div>
              <div class="grid-desc">あなたは誰で、何の案件で、どんな状況か。Claude に背景を伝える</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">タスク定義</div>
              <div class="grid-desc">何をしてほしいか。ゴールと成果物を具体的に伝える</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📐</div>
              <div class="grid-title">ルール指定</div>
              <div class="grid-desc">出力形式、文字数、トーン、禁止事項。出力の「形」を指定する</div>
            </div>
          </div>

          <h3>Before / After で見る効果</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Before：要素なし</div>
              <p>「競合分析して」</p>
              <p style="margin-top:8px;color:var(--text-muted)">→ 何業界？どの競合？何を比較？出力形式は？<br>Claude は推測で回答するしかない</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">After：3要素あり</div>
              <p>「あなたはITコンサルタントです。<br>
              A社・B社・C社のクラウドERPを、機能・価格・導入実績で比較してください。<br>
              比較表（Markdown＝そのまま資料に貼れる軽い書式）で出力し、最後に推奨を1段落で述べてください。」</p>
            </div>
          </div>

          <h3>要素別の具体例</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">前提の共有</div>
                <div class="step-desc">「あなたは○○業界のコンサルタントです」「クライアントは製造業の中堅企業で…」「私はプロジェクトマネージャーとして…」<br>→ Claude が文脈を理解し、適切なトーンと深さで回答できる</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">タスク定義</div>
                <div class="step-desc">「競合3社を機能・価格・導入実績で比較して」「このデータから上位5つの傾向を抽出して」「提案書の構成案を作って」<br>→ 何をゴールにすればよいかが明確になる</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">ルール指定</div>
                <div class="step-desc">「箇条書き5点で」「です・ます調で」「Markdown の表形式で」「300字以内で」<br>→ そのまま使える形で出力が返ってくる</div>
              </div>
            </div>
          </div>

          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">「切り口を5つ出して」</div>
                <div class="step-desc">まず簡潔に投げる。最初から完璧を狙わず、たたき台を引き出す。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">「2番をもっと具体的に」</div>
                <div class="step-desc">返ってきた出力を見て調整。良かった部分を指定して深掘りさせる。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">「競合事例も加えて」</div>
                <div class="step-desc">方向を絞り込む。足りない観点を足して、内容を厚くしていく。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">「Artifactの比較表に」</div>
                <div class="step-desc">成果物として完成。最後に体裁を整え、再利用できる形にする。</div>
              </div>
            </div>
          </div>
          <p style="font-size:13px;color:var(--text-secondary);">1回で完成させようとするより、<strong>往復して積み重ねる</strong>ほうが速く、質も上がることが多い。</p>

          <div class="info-box">
            <strong>📄 会社の「生成AIプロンプト集」を活用する</strong><br>
            ゼロからプロンプトを書く前に、まず社内の<a href="https://app.notion.com/p/eight-hundred/22bb14ae3bcd80f4898dd3816448557c?v=22cb14ae3bcd80088278000ca2862351" target="_blank" rel="noopener">生成AIプロンプト集</a>を探すのが近道です。リサーチ・分析・文書作成・資料作成・レビューなどの<strong>業務カテゴリ別／難易度別</strong>に整理されているので、見つけた型を自分の案件に合わせて調整して使いましょう。
          </div>

          <h3>「Claudeへの指示」で毎回の手間を減らす</h3>
          <p>毎回同じ前提（自分の役職、業界、好みのトーンなど）を書くのは面倒です。Claude には<strong>「Claudeへの指示」</strong>（設定 > 一般）という機能があり、全会話で自動的に参照される前提を登録できます。</p>
          <div class="prompt-copy">
            <span class="prompt-copy-label">📝 穴埋めテンプレート（〔 〕を自分の業務に置き換える）</span>
            <p>私は〔役割・所属〕です（例：コンサルティングファームのコンサルタント）。<br>
            出力は結論先行・です・ます調で、要点は箇条書きにしてください。<br>
            数字・固有名詞は根拠のあるものだけを使い、不確かな点は「要確認」と明記してください。<br>
            専門用語には簡単な補足を添え、誇張・断定表現は避けてください。</p>
            <button class="copy-btn" data-copy="私は〔役割・所属〕です（例：コンサルティングファームのコンサルタント）。
出力は結論先行・です・ます調で、要点は箇条書きにしてください。
数字・固有名詞は根拠のあるものだけを使い、不確かな点は「要確認」と明記してください。
専門用語には簡単な補足を添え、誇張・断定表現は避けてください。">コピー</button>
          </div>
          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">書きたい内容</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">置き場所</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">全業務に共通する自分の作法（役職・トーン・出力ルール）</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claudeへの指示（設定）</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">案件固有の前提（クライアント名・フェーズ・案件ルール）</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Project の Instructions（1-7 で学習）</span>
            </div>
          </div>

          <div class="try-box">
            <strong>✅ やってみよう</strong><br>
            1. 「競合分析して」を、3要素を満たす形に書き直して Claude に投げてみてください<br>
            2. 設定 > 一般 >「Claudeへの指示」に自分の前提を登録し、新しいチャットで「私についてどんな前提を持っていますか？」と聞いて反映を確認してください
          </div>
        `
      },

      // ========================================
      // 1-6: 出力を疑う・直す・責任を持つ
      // ========================================
      {
        title: '1-6. 出力を疑う・直す・責任を持つ',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>AI の出力は便利ですが、100%正しいとは限りません。出力を鵜呑みにせず、確認・修正・最終判断を行う姿勢を身につけます。これは Claude に限らず、すべての生成AIに共通する大切なスキルです。</p>

          <h3>AIの出力は「たたき台」</h3>
          <p>Claude の出力は「たたき台」だと考えてください。そのまま提出するのではなく、<strong>確認して、直して、自分の責任で仕上げる</strong>。このプロセスが重要です。</p>

          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">指示する</div>
                <div class="step-desc">Claude に依頼。前提・タスク・ルールの3要素を揃えると出力が安定する。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">確認する</div>
                <div class="step-desc">事実・数字・固有名詞を裏取り。報告書やクライアント向け資料に使う情報は特に慎重に。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">直す</div>
                <div class="step-desc">追加指示で修正・深掘り。「2番をもっと具体的に」「競合事例も加えて」と往復しながら磨く。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">仕上げる</div>
                <div class="step-desc">最終判断は自分が持つ。成果物の責任は常に自分にある。Claude は初稿を作る相棒。</div>
              </div>
            </div>
          </div>

          <h3>ハルシネーション（でっち上げ）に注意</h3>
          <p>生成AIは、事実と異なる内容をもっともらしく生成することがあります。これを「ハルシネーション」と呼びます。特に注意すべきポイントは以下の3つです。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🔢</div>
              <div class="grid-title">数字・統計</div>
              <div class="grid-desc">市場規模、成長率、シェアなど。もっともらしい数字を生成するが、出典が存在しないことがある</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">👤</div>
              <div class="grid-title">固有名詞</div>
              <div class="grid-desc">人名、社名、製品名。実在しない組織や人物を「ある」と回答することがある</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📖</div>
              <div class="grid-title">引用・出典</div>
              <div class="grid-desc">論文タイトルやURL。見た目はそれらしいが、存在しないページを示すことがある</div>
            </div>
          </div>

          <h3>ハルシネーションを減らすコツ</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">出典を求める</div>
              <div class="grid-desc">「根拠となるURLも示してください」と依頼する。出典が出てきたら、実際にアクセスして確認する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">Web検索をONにする</div>
              <div class="grid-desc">最新情報や事実確認が必要なときは Web 検索を有効にする。検索結果に基づく回答は精度が上がる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">重要情報は自分で照合</div>
              <div class="grid-desc">報告書に載せる数字、クライアント向けの事実は、必ず別途検索して裏取りする</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🚫</div>
              <div class="grid-title">「わからない」と言わせる</div>
              <div class="grid-desc">「確実でない場合は『不明』と答えてください」と指示すると、でっち上げが減る</div>
            </div>
          </div>

          <div class="visual-comparison">
            <div class="visual-comparison-card before">
              <div class="comp-label">🤝 Claudeに任せる</div>
              <ul>
                <li>初稿・たたき台の作成</li>
                <li>情報整理・要約の下ごしらえ</li>
                <li>複数の選択肢の列挙</li>
              </ul>
            </div>
            <div class="visual-comparison-card after">
              <div class="comp-label">🙋 自分が持つ</div>
              <ul>
                <li>事実・数字の裏取り</li>
                <li>判断・意思決定</li>
                <li>最終仕上げと提出</li>
              </ul>
            </div>
          </div>
          <p style="font-size:13px;color:var(--text-secondary);text-align:center;">「任せる」のは初稿まで。<strong>判断・確認・最終仕上げは自分の仕事</strong>です。</p>

          <div class="tip-box">
            <strong>💡 これは生成AI共通の習慣</strong><br>
            ハルシネーションはすべての生成AIに共通するリスクです。Claude 特有の問題ではありません。「出力を確認する」習慣を、業務での生成AI活用すべてに共通する基本動作として身につけてください。
          </div>
        `
      },

      // ========================================
      // 1-7: Project / Artifactで成果物にする
      // ========================================
      {
        title: '1-7. Project / Artifact で成果物にする',
        type: 'hands-on',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Chat での対話を「その場限り」で終わらせず、<strong>案件の資産として蓄積し、成果物として残す</strong>方法を学びます。Project と Artifact を使うと、Claude の活用レベルが一段上がります。</p>

          <h3>Project — 案件ごとの「自分用Claude」</h3>
          <p>Project は、案件固有の背景情報・ルール・参照資料を Claude に覚えさせる仕組みです。一度設定すれば、その Project 内の全会話で自動的に参照されます。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Before：Projectなし</div>
              <p>毎回「私はITコンサルで、A社のERP導入案件を…」と入力</p>
              <p>→ 会話のたびに前提説明で手間がかかる</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">After：Projectあり</div>
              <p>案件概要をProjectに登録済み。「今週のステータスをまとめて」だけで通じる</p>
              <p>→ すぐ本題から始められる</p>
            </div>
          </div>

          <h3>Projectの構成要素</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">Instructions（指示文）</div>
              <div class="grid-desc">案件の背景、クライアント情報、出力ルール、禁止事項などを記述。全会話で自動参照される</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📚</div>
              <div class="grid-title">ナレッジベース</div>
              <div class="grid-desc">参照資料（PDF・Word・Excel等）をアップロード。Claude が内容を読んで回答に活用する</div>
            </div>
          </div>

          <div class="example-box">
            <strong>📌 Instructions の記述例</strong><br><br>
            「# B社 新商品ローンチ マーケティング戦略案件<br>
            - クライアント：B社（食品メーカー・健康志向の新ブランドを立ち上げ）<br>
            - フェーズ：戦略策定（市場調査・コンセプト確定済、メディアプラン策定中）<br>
            - 主要ステークホルダー：マーケティング本部 鈴木部長<br>
            - 出力ルール：結論先行、です・ます調、数字には出典を付ける<br>
            - 禁止：景品表示法・薬機法に抵触しうる表現（効果の断定・最大級表現）を使わないこと」
          </div>

          <div class="tip-box">
            <strong>💡 Instructions は徐々に育てる</strong><br>
            最初から完璧を目指す必要はありません。「毎回同じことを伝えているな」と気づいたら、その内容を Instructions に追加していきましょう。
          </div>

          <h3>Artifact — 会話から独立した成果物</h3>
          <p>Artifact は、チャットの中で生成される<strong>独立した成果物</strong>です。チャットの回答は会話の流れの中に埋もれますが、Artifact は別パネルに表示され、保存・編集・コピーができます。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">文書・表</div>
              <div class="grid-desc">比較表、レポート、チェックリストなど。Markdown で構造化された文書</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">図表・チャート</div>
              <div class="grid-desc">Mermaid 図、フローチャート、組織図、プロセスマップ</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">インタラクティブUI</div>
              <div class="grid-desc">簡易ダッシュボード、診断ツール、シミュレーター、画面モック。提案の論点を「プロトタイプ」として具体化</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔄</div>
              <div class="grid-title">バージョン管理</div>
              <div class="grid-desc">追加指示で修正するたびにバージョンが記録される。前の状態に戻すことも可能</div>
            </div>
          </div>

          <div class="visual-comparison">
            <div class="visual-comparison-card before">
              <div class="comp-label">🎨 ギャラリーに貯まる</div>
              <ul>
                <li>Markdown 文書</li>
                <li>図（Mermaid）</li>
                <li>HTML / インタラクティブUI</li>
                <li>コード</li>
              </ul>
              <p style="font-size:12px;color:var(--text-secondary);margin-top:8px;">画面内で開いて検索・再利用できる</p>
            </div>
            <div class="visual-comparison-card after">
              <div class="comp-label">📥 ダウンロードして使う</div>
              <ul>
                <li>PowerPoint（→ Office アドイン 1-9）</li>
                <li>Word（→ Office アドイン 1-9）</li>
                <li>Excel（→ Office アドイン 1-9）</li>
                <li>PDF / その他ファイル（→ Cowork 1-13）</li>
              </ul>
              <p style="font-size:12px;color:var(--text-secondary);margin-top:8px;">Artifact一覧には登録されない</p>
            </div>
          </div>

          <h3>Artifact の活用シーン</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🏓</div>
              <div class="grid-title">壁打ちの結果を図解</div>
              <div class="grid-desc">「今の議論をMermaid図で整理して」→ 論点の構造が一目でわかる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">比較表を成果物に</div>
              <div class="grid-desc">「この比較をArtifactの表にして」→ コピーしてそのまま資料に使える</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">論点を「触れるもの」に</div>
              <div class="grid-desc">「この診断フローをインタラクティブなツールにして」→ 提案の説得力が上がる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">データを可視化</div>
              <div class="grid-desc">「このデータをグラフ付きダッシュボードにして」→ 数字が直感的に伝わる</div>
            </div>
          </div>

          <div class="try-box">
            <strong>✅ やってみよう</strong><br>
            <strong>Project を作る：</strong><br>
            1. claude.ai >「プロジェクト」から新規プロジェクトを作成<br>
            2. Instructions に案件概要を記入し、参照資料をアップロード<br>
            3. 「この案件の論点を3つ整理して」と試す<br><br>
            <strong>Artifact を体験する：</strong><br>
            4. 「この内容を比較表のArtifactにして」と依頼<br>
            5. 「さらにMermaid図で全体像を可視化して」と追加指示<br>
            6. バージョン履歴で前の状態に戻せることを確認
          </div>
        `
      }
,


      // ========================================
      // 1-8: 成果物の種類を広げる
      // ========================================
      {
        title: '1-8. 成果物の種類を広げる',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>ここまでは Chat を使ったテキストのやり取りが中心でした。しかし Claude で作れるものは文章だけではありません。このセクションでは、Claude を使って作れる<strong>成果物の全体像</strong>を一覧し、「こんなものも作れるのか」という視野を広げます。</p>

          <h3>Claude で作れる成果物マップ</h3>
          <p>Claude で作れる成果物は、大きく6つのカテゴリに分かれます。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">文書</div>
              <div class="grid-desc">議事録、報告書、提案メモ、メール、契約書レビュー</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">表</div>
              <div class="grid-desc">比較表、課題一覧、ToDo リスト、評価表、チェックリスト</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">スライド</div>
              <div class="grid-desc">構成案、スライド文言、ストーリーライン、役員向け要約</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">調査レポート</div>
              <div class="grid-desc">市場調査、競合調査、業界動向、出典付き論点整理</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📈</div>
              <div class="grid-title">チャート</div>
              <div class="grid-desc">KPI 可視化、比較グラフ、簡易分析、傾向レポート</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">プロトタイプ</div>
              <div class="grid-desc">診断ツール、シミュレーター、画面モック、簡易ダッシュボード</div>
            </div>
          </div>

          <h3>どの機能で何を作るか</h3>
          <p>成果物の種類によって、使う Claude の機能が異なります。以下のマッピングを頭に入れておくと、迷わず取りかかれます。</p>

          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">作りたいもの</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">使う機能</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">文書・表の下書き</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Chat / Artifact</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Excel 分析・加工</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude in Excel</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">PowerPoint 構成・改善</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude in PowerPoint</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Word 要約・校正</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude in Word</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Web 調査・論点整理</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Research</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">プロトタイプ（試作品）</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Artifact（HTML/JS）</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Web ページ要約・補助</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude in Chrome</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">ファイルの一括処理</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Cowork</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">定型業務の自動実行</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Scheduled tasks</span>
            </div>
          </div>

          <h3>よくある誤解</h3>
          <div class="warning-box">
            <p><strong>「Claude = テキスト生成ツール」ではない</strong></p>
            <p>文章を書くだけのツールだと思われがちですが、表・チャート・インタラクティブなツールまで幅広い成果物を作れます。「これも Claude でできるかも？」と考える習慣が、活用の幅を広げる第一歩です。</p>
          </div>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon" style="font-size:13px;font-weight:800;color:var(--primary);">1-9</div>
              <div class="grid-title">Office アドイン</div>
              <div class="grid-desc">Excel / PowerPoint / Word の中から Claude を呼び出す</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon" style="font-size:13px;font-weight:800;color:var(--primary);">1-10</div>
              <div class="grid-title">Research</div>
              <div class="grid-desc">複数ソースを調査して根拠付きのレポートを生成する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon" style="font-size:13px;font-weight:800;color:var(--primary);">1-11</div>
              <div class="grid-title">Artifact</div>
              <div class="grid-desc">診断ツール・画面モックなどプロトタイプを作る</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon" style="font-size:13px;font-weight:800;color:var(--primary);">1-12</div>
              <div class="grid-title">Chrome 拡張</div>
              <div class="grid-desc">ブラウザで開いたページをその場で要約・分析する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon" style="font-size:13px;font-weight:800;color:var(--primary);">1-13</div>
              <div class="grid-title">Cowork</div>
              <div class="grid-desc">作業フォルダごと渡してファイル作業を委任する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon" style="font-size:13px;font-weight:800;color:var(--primary);">1-14</div>
              <div class="grid-title">Scheduled tasks</div>
              <div class="grid-desc">ニュース収集・定例チェックなど定型業務を自動化する</div>
            </div>
          </div>
        `
      },

      // ========================================
      // 1-9: Office アプリで Claude を使う — Excel / PowerPoint / Word
      // ========================================
      {
        title: '1-9. Office アプリで Claude を使う — Excel / PowerPoint / Word',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude in Office を使うと、Excel・PowerPoint・Word の中で直接 Claude に指示が出せます。普段の Office 作業にAIを組み込むことで、分析・資料作成・文書校正の質とスピードを同時に上げられます。</p>

          <div class="info-box">
            <p>📑 このセクションは <strong>①アドインを入れる（インストール）→ ②各アプリでの使い方 → ③【応用】スライドの段階生成</strong> の3部構成です。まずは①を研修中に終わらせ、②③は必要なところから読んでください。</p>
          </div>

          <h3>インストール手順（PowerPoint アドインを研修中にセット）</h3>
          <p>普段使う Office アプリ（PowerPoint / Word / Excel）に Claude のアドインを追加すると、ファイルを開いたまま Claude を呼び出せるようになります。研修中は <strong>PowerPoint アドインを実際にインストール</strong>します。Word / Excel は同じ手順なので研修後にご自身で入れてください。</p>

          <h4>インストール対象アドイン</h4>
          <table class="info-table">
            <thead>
              <tr>
                <th>アドイン</th>
                <th>用途</th>
                <th>インストール / 使い方</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Claude for PowerPoint</strong></td>
                <td>スライド構成・改善</td>
                <td><a href="https://support.claude.com/en/articles/13521390-use-claude-for-powerpoint" target="_blank" rel="noopener">公式ガイドを開く（手順・使い方）</a></td>
              </tr>
              <tr>
                <td><strong>Claude for Word</strong></td>
                <td>文書要約・校正・Tracked Changes</td>
                <td><a href="https://support.claude.com/en/articles/14465370-use-claude-for-word" target="_blank" rel="noopener">公式ガイドを開く（手順・使い方）</a></td>
              </tr>
              <tr>
                <td><strong>Claude for Excel</strong></td>
                <td>データ分析・集計</td>
                <td><a href="https://support.claude.com/en/articles/12650343-use-claude-for-excel" target="_blank" rel="noopener">公式ガイドを開く（手順・使い方）</a></td>
              </tr>
            </tbody>
          </table>

          <p>アプリ間連携：<a href="https://support.claude.com/en/articles/13892150-work-across-microsoft-365-apps" target="_blank" rel="noopener">Microsoft 365 のアプリをまたいで使う（Excel→PowerPoint 等）</a></p>

          <h4>PowerPoint アドインのインストール手順（研修中に実施・約3〜5分）</h4>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">PowerPoint を起動</div>
                <div class="step-desc">PC にインストール済みのデスクトップアプリを開く</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">「ホーム」タブ → 「アドイン」をクリック</div>
                <div class="step-desc">または「挿入」タブ → 「アドインを取得」</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">ストア検索で「Claude」と入力</div>
                <div class="step-desc">候補の中から「Claude for PowerPoint」を探す</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">「Claude for PowerPoint」を「追加」</div>
                <div class="step-desc">表示されたボタンをクリックする</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">5</div>
              <div class="step-body">
                <div class="step-title">ライセンス条項に同意</div>
                <div class="step-desc">読んで「同意」をクリック</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">6</div>
              <div class="step-body">
                <div class="step-title">リボンに Claude アイコンが表示</div>
                <div class="step-desc">インストール完了後、PowerPoint の上部リボンに Claude アイコンが追加される</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">7</div>
              <div class="step-body">
                <div class="step-title">Microsoft 365 アカウントでサインイン</div>
                <div class="step-desc">Claude アイコンをクリックして、職場/学校アカウントで認証</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">8</div>
              <div class="step-body">
                <div class="step-title">Claude（Anthropic）アカウントでサインイン</div>
                <div class="step-desc">続けて、Claude のアカウント（claude.ai のログイン情報）で認証</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">9</div>
              <div class="step-body">
                <div class="step-title">サイドペインに Claude のチャット欄が表示</div>
                <div class="step-desc">表示されればインストール成功</div>
              </div>
            </div>
          </div>

          <h4>研修後：Word / Excel も同じ手順でインストール</h4>
          <p><strong>手順は PowerPoint とまったく同じ</strong>です。Word / Excel をそれぞれ起動して、上記の Step 1〜9 を繰り返してください。3つとも入れると、本セクションで紹介する Office 連携が全アプリで使えるようになります。</p>

          <div class="warning-box">
            <p><strong>⚠️ 各アプリで個別にインストールが必要</strong></p>
            <p>PowerPoint で入れても Word / Excel には自動で入りません。それぞれのアプリで同じ手順を行ってください。</p>
          </div>

          <h4>うまくいかないときの対処</h4>
          <ul>
            <li><strong>サインインできない</strong> → ブラウザの認証ポップアップがブロックされていないか確認してください</li>
            <li><strong>アイコンが表示されない</strong> → PowerPoint を再起動／「挿入」タブの「個人用アドイン」から確認してください</li>
          </ul>

          <div class="info-box">
            <strong>💡 Tips</strong><br>
            Claude は Excel / PowerPoint / Word をまたいで <strong>1つの会話で複数アプリを編集できます</strong>。たとえば PowerPoint で構成を作り → そのまま Word で配布資料化、といった流れがアプリ切り替えなしで進められます。
          </div>

          <h3>Claude in Excel — データを読み解く</h3>
          <p>Excel の中で Claude を呼び出し、データの分析や整理を依頼できます。計算式を書くのではなく、<strong>日本語で「このデータをどう読むか」を相談する</strong>感覚です。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">データの傾向を読む</div>
              <div class="grid-desc">「このシートの売上推移から読み取れるポイントを3つ挙げて」とデータの示唆を引き出す</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔢</div>
              <div class="grid-title">集計観点を出す</div>
              <div class="grid-desc">「この顧客データを分析するとしたら、どんな軸で集計するのが有効か」と切り口を相談する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📈</div>
              <div class="grid-title">グラフ化の方針を考える</div>
              <div class="grid-desc">「このデータを経営会議で見せるとしたら、どんなグラフが適切か」と可視化の方向を聞く</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚠️</div>
              <div class="grid-title">異常値・確認ポイントの洗い出し</div>
              <div class="grid-desc">「このデータに不自然な値や外れ値がないかチェックして」と品質チェックを依頼する</div>
            </div>
          </div>

          <h3>Claude in PowerPoint — 提案書を磨く</h3>
          <p>PowerPoint の中で Claude に指示を出し、スライドの構成や表現を改善できます。<strong>「何を伝えたいか」を日本語で伝えると、スライド単位で改善案を返してくれます。</strong></p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🏗️</div>
              <div class="grid-title">提案書の構成を作る</div>
              <div class="grid-desc">「この案件の提案書を10枚構成で作って。各スライドのタイトルとキーメッセージを提案して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">スライドタイトルを改善する</div>
              <div class="grid-desc">「このスライドのタイトルを、結論が伝わる一文に書き直して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">メッセージを明確にする</div>
              <div class="grid-desc">「このスライドで伝えたいことは何？」と問いかけ、1スライド1メッセージに整理する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">👥</div>
              <div class="grid-title">読み手に合わせて表現を変える</div>
              <div class="grid-desc">「このスライドを役員向けに書き直して。技術用語を経営指標に置き換えて」</div>
            </div>
          </div>

          <h3>Claude in Word — 文書を整える</h3>
          <p>Word の中で Claude を呼び出し、文書の構成・文体・表現を改善できます。長い報告書や提案書の仕上げ作業に効果を発揮します。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">長文資料を要約する</div>
              <div class="grid-desc">「この報告書を経営層向けに1ページで要約して。数字と結論を残して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✍️</div>
              <div class="grid-title">文体を統一する</div>
              <div class="grid-desc">「この文書全体を『です・ます調』に統一して。箇条書きの粒度も揃えて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📑</div>
              <div class="grid-title">章立てを見直す</div>
              <div class="grid-desc">「この報告書の構成を、結論→背景→詳細→提案の順に並べ替えて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏢</div>
              <div class="grid-title">クライアント向け表現に変換する</div>
              <div class="grid-desc">「社内メモをクライアント提出用に書き直して。敬語と表現の丁寧さを上げて」</div>
            </div>
          </div>

          <h3>Office連携の注意点</h3>
          <div class="warning-box">
            <p><strong>Office 連携は「相談相手」であり「自動実行ツール」ではない</strong></p>
            <p>Claude in Office は、ファイル内容について Claude と対話する機能です。Chat と同じく、出力を鵜呑みにせず確認してから適用してください。特に数値データの分析結果は、元データと照合する習慣をつけましょう。</p>
          </div>

          <h3>アドインの履歴はブラウザに保存され、次回も続きから使えます</h3>
          <p>Office アドイン（Word / Excel / PowerPoint）のチャット履歴は、お使いのブラウザ内に保存され、アプリやファイルを閉じても残ります。次に開いたとき、前回の会話の続きから作業できます。仕様は以下のとおりです。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">アプリを閉じても履歴が残る</div>
              <div class="grid-desc">履歴はブラウザ内（IndexedDB）に保存され、次回そのまま続きから使えます。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">同じアプリ内ならファイル間で共有</div>
              <div class="grid-desc">例えば、ある PowerPoint の会話が別の PowerPoint でも表示されます。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔒</div>
              <div class="grid-title">保存先はご自身のブラウザのみ</div>
              <div class="grid-desc">Anthropic のサーバーには保存されず、別の端末・ブラウザには引き継がれません。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🗑️</div>
              <div class="grid-title">消したいときは設定から</div>
              <div class="grid-desc">設定画面で履歴を手動で全消去できます（ブラウザのデータ消去でも消えます）。</div>
            </div>
          </div>

          <h4>大事な内容を残す方法</h4>
          <table class="info-table">
            <thead>
              <tr>
                <th>方法</th>
                <th>内容</th>
                <th>向く場面</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>その場で残す</strong></td>
                <td>チャット欄から内容をコピーして Word やメモに貼り付ける</td>
                <td>別の端末でも見たい・形に残したい</td>
              </tr>
              <tr>
                <td><strong>ナレッジに移す</strong></td>
                <td>claude.ai 本体の Project に持ち込んで続きを検討する（第1回 1-7 で学習）</td>
                <td>案件のナレッジとして残したい</td>
              </tr>
            </tbody>
          </table>

          <div class="info-box">
            <strong>💡 棲み分けのコツ</strong><br>
            アドインは「下書き・即時のヘルプ」、深い検討やナレッジ化は claude.ai の Project に持ち込む。この棲み分けが、Claude を業務で安定して使うコツです。
          </div>

          <div class="info-box">
            <strong>📦 さらに高度な使い方は第2回で</strong><br>
            うまくいった「指示の型化」や「定型ワークフローの再利用」は第2回で扱います。
          </div>

          <h3>【応用】スライドは「いきなり完成形」を作らせない — 段階生成のコツ</h3>
          <p>「提案書を10枚作って」と一気に依頼すると、見た目は整っていても<strong>論点・ストーリー・意思決定への接続が弱い</strong>スライドが返ってきがちです。次の順で段階的に作らせ、各段階で人がレビューします。</p>

          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">構成案を作る</div>
                <div class="step-desc">「この案件で意思決定者に伝えるべき論点を洗い出し、10枚のストーリーラインを提案して」</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">1枚ごとのキーメッセージを作る</div>
                <div class="step-desc">「各スライドのタイトルとキーメッセージを、結論が伝わる一文で書いて」</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">図表案・本文を作る</div>
                <div class="step-desc">「各スライドのキーメッセージを支える図表案・本文を提案して。出典が必要なら明記して」</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">レビュー観点で点検する</div>
                <div class="step-desc">「論理飛び・数字根拠・読み手目線・1スライド1メッセージの観点でレビューして」</div>
              </div>
            </div>
          </div>

          <div class="info-box">
            <p><strong>提案資料は見た目より「論点・ストーリー・意思決定への接続」</strong>。デザインを整える前に、伝えたい論点と読み手の意思決定にどうつながるかを揃えるのが先です。うまくいった生成手順自体は、第2回の Skills 化対象として再利用できます。</p>
          </div>
        `
      },

      // ========================================
      // 1-10: Research で調査する
      // ========================================
      {
        title: '1-10. Research で調査する',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Research は、Claude に Web 上の情報を調べてもらう機能です。通常の Web 検索と異なり、<strong>複数の情報源を横断して調査し、要点をまとめ、出典付きで報告してくれます</strong>。単なる情報収集ではなく、提案や意思決定に使える示唆に変換する力が Research の価値です。</p>

          <h3>Research が力を発揮する場面</h3>
          <p>以下のような場面で、手動の検索よりも効率的に、かつ構造化された結果が得られます。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🏭</div>
              <div class="grid-title">市場調査</div>
              <div class="grid-desc">「○○業界の市場規模と成長率を、直近3年の推移とともにまとめて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏢</div>
              <div class="grid-title">競合調査</div>
              <div class="grid-desc">「A社・B社・C社のクラウドサービスを、価格・機能・導入実績で比較して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📰</div>
              <div class="grid-title">業界動向整理</div>
              <div class="grid-desc">「○○業界で直近半年に起きた主要な動きを時系列でまとめて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📚</div>
              <div class="grid-title">事例収集</div>
              <div class="grid-desc">「DX推進の成功事例を業界別に3つずつ、施策と効果をまとめて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📎</div>
              <div class="grid-title">出典付き論点整理</div>
              <div class="grid-desc">「○○に関する賛否両論を、出典を明記してそれぞれ3つずつ挙げて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💡</div>
              <div class="grid-title">調査からの示唆出し</div>
              <div class="grid-desc">「上記の調査結果から、当社にとっての機会とリスクを整理して」</div>
            </div>
          </div>

          <h3>Research と通常の Web 検索の違い</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">通常の Web 検索</div>
              <ul>
                <li>検索キーワードを自分で考える</li>
                <li>複数サイトを1つずつ開いて読む</li>
                <li>情報の取捨選択は自分で行う</li>
                <li>整理・まとめ作業も自分で行う</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Research</div>
              <ul>
                <li>調査の目的を日本語で伝える</li>
                <li>複数の情報源を自動で横断調査</li>
                <li>関連情報を抽出・要約して報告</li>
                <li>出典付きで構造化された結果を返す</li>
              </ul>
            </div>
          </div>

          <h3>Research を使いこなすコツ</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">調査の目的を明確に伝える</div>
                <div class="step-desc">「○○について調べて」ではなく「○○の導入を検討するために、コスト・効果・リスクを比較したい」と目的を伝えると、的を絞った調査結果が返ります。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">出力形式を指定する</div>
                <div class="step-desc">「比較表で」「時系列で」「賛否両論を分けて」など、どんな形で結果が欲しいかを指示すると、そのまま資料に使える形で返ります。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">出典を確認する習慣をつける</div>
                <div class="step-desc">Research は出典付きで報告してくれますが、そのリンクが正確かは必ず確認してください。重要な数値や事実は、元の情報源に戻って裏取りしましょう。</div>
              </div>
            </div>
          </div>

          <h3>注意点</h3>
          <div class="warning-box">
            <p><strong>Research は「初稿を作る助手」であり「確定情報の提供者」ではない</strong></p>
            <p>調査結果はあくまで出発点です。出典のURLが無効なケースや、情報が古いケースもあります。クライアントに提出する調査レポートの場合は、必ず一次情報に当たって確認してください。</p>
          </div>

          <h3>調査結果を「示唆・提案」に変換する</h3>
          <p>Research の出力は情報の山です。そのままでは資料になりません。<strong>「この情報から何が言えるか」「クライアントの意思決定にどうつながるか」</strong>まで Claude に考えさせて、初めて使える形になります。</p>

          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">情報収集で止まる</div>
              <ul>
                <li>「○○業界の動向を調べて」だけで終わる</li>
                <li>調査結果が箇条書きの山で止まる</li>
                <li>クライアントの論点に結びつかない</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">示唆まで変換する</div>
              <ul>
                <li>「上の調査から、当社にとっての機会・脅威を3つずつ整理して」</li>
                <li>「クライアントの意思決定に必要な論点を、推奨アクション付きで」</li>
                <li>調査→示唆→提案の流れまで一気に進める</li>
              </ul>
            </div>
          </div>

          <h3>他ツールとの併用 — NotebookLM など</h3>
          <p>大量の社内資料・PDF・録音文字起こしなどをまとめて把握したい場面では、<strong>NotebookLM のような「資料に紐付いた回答」を返すツールとの併用</strong>も有効な選択肢です。役割分担の目安：</p>

          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">やりたいこと</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">適したツール</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Web 横断調査・出典付きレポート</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude の Research</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">手元の大量資料を読ませて Q&amp;A・図解化</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">NotebookLM など資料連動型ツール</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">調査 → 示唆 → 提案 → スライド生成</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude（Chat / Artifact / Skills を組み合わせ）</span>
            </div>
          </div>
        `
      },

      // ========================================
      // 1-11: Artifact で「プロトタイプ」を作る
      // ========================================
      {
        title: '1-11. Artifact で「プロトタイプ」を作る',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>1-7 で Artifact の基本を学びました。ここではさらに一歩進んで、<strong>実際に操作できる「プロトタイプ」</strong>を Artifact で作る方法を学びます。診断ツール、シミュレーター、ダッシュボードなど、提案やプロジェクトの論点を具体化するための試作品です。</p>

          <h3>「プロトタイプ」とは</h3>
          <p>文書や表とは違い、<strong>ユーザーが操作して結果が変わる成果物</strong>のことです。Claude の Artifact は HTML・CSS・JavaScript を生成でき、ブラウザ上でそのまま動作します。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🩺</div>
              <div class="grid-title">診断ツール</div>
              <div class="grid-desc">質問に回答すると結果が表示される。例：セグメンテーション診断、ブランド適合度診断</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧮</div>
              <div class="grid-title">シミュレーター</div>
              <div class="grid-desc">数値を変えると結果が連動する。例：市場規模（TAM/SAM/SOM）算出、価格弾力性シミュレーション</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">ダッシュボード</div>
              <div class="grid-desc">データを視覚的に一覧表示。例：競合比較ダッシュボード、KPIモニター</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🗺️</div>
              <div class="grid-title">ポジショニングマップ・ペルソナカード</div>
              <div class="grid-desc">2軸マップや想定顧客像を可視化。認識合わせに使う</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔀</div>
              <div class="grid-title">カスタマージャーニー可視化</div>
              <div class="grid-desc">顧客の行動・感情の流れをインタラクティブに表示。離脱ポイントをハイライト</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">ペルソナカードジェネレーター</div>
              <div class="grid-desc">属性を入力すると、想定顧客像のペルソナカードが生成される</div>
            </div>
          </div>

          <h3>なぜ「プロトタイプ」が提案に使えるのか</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">スライドだけの提案</div>
              <ul>
                <li>「こういう仕組みを作ります」と文字で説明</li>
                <li>クライアントはイメージしにくい</li>
                <li>認識のずれが後工程で発覚する</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">プロトタイプを添えた提案</div>
              <ul>
                <li>実際に操作して体験してもらう</li>
                <li>「これがやりたいことです」が一瞬で伝わる</li>
                <li>認識のずれを提案段階で修正できる</li>
              </ul>
            </div>
          </div>

          <h3>作り方の基本フロー</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">目的と使う場面を伝える</div>
                <div class="step-desc">「クライアントに IT 成熟度を自己診断してもらうツールを作りたい」のように、誰が・何のために使うかを伝えます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">Artifact で試作品を生成する</div>
                <div class="step-desc">Claude が HTML/CSS/JavaScript の Artifact を生成します。その場で動作するので、すぐに操作して確認できます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">操作して修正を繰り返す</div>
                <div class="step-desc">「質問項目を5つに増やして」「結果にグラフを追加して」と追加指示を出して、完成度を上げます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">HTML をダウンロードして共有する</div>
                <div class="step-desc">完成した Artifact は HTML ファイルとしてダウンロードし、ブラウザで開くだけで使えます。</div>
              </div>
            </div>
          </div>

          <h3>重要な注意点</h3>
          <div class="warning-box">
            <p><strong>「プロトタイプ」は試作品であり、本番システムではない</strong></p>
            <p>Artifact で作るものはあくまで<strong>提案やプロジェクトの論点を具体化するための「たたき台」</strong>です。クライアントに見せる際は「これは認識合わせのための試作品です」と必ず説明してください。本番システムの開発は別途エンジニアリングが必要です。</p>
          </div>

          <div class="info-box">
            <p><strong>Artifact にはデータを保存する仕組みがない</strong>ため、入力したデータはページを閉じると消えます。実データを扱う場合はこの点をクライアントに伝えておきましょう。</p>
          </div>
        `
      },

      // ========================================
      // 1-12: Chrome でブラウザ作業を支援する
      // ========================================
      {
        title: '1-12. Chrome でブラウザ作業を支援する',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude in Chrome は、ブラウザ上で Claude を呼び出せる拡張機能です。Web ページを見ながら、その場で要約・分析・情報整理を依頼できます。調査作業やブラウザ上の作業を効率化する「もう一人の目」として活用します。</p>

          <h3>Chrome 拡張で できること</h3>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">Web ページの要約</div>
              <div class="grid-desc">長い記事やレポートを開いた状態で「このページを3行で要約して」と依頼。要点だけを素早く把握できる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">情報収集の補助</div>
              <div class="grid-desc">競合サイトや製品ページを見ながら「このサービスの特徴を5つ抜き出して」と指示。手動で読み込む手間を省く</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✏️</div>
              <div class="grid-title">入力作業の補助</div>
              <div class="grid-desc">フォーム入力や文章作成時に Claude に相談。「このメールの返信案を作って」とその場で下書きを生成</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚖️</div>
              <div class="grid-title">複数サイトの比較</div>
              <div class="grid-desc">複数のサービスページを調べた後、「さっき見た3つのサービスの比較表を作って」と整理を依頼</div>
            </div>
          </div>

          <h3>具体的な活用シーン</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">提案準備の調査</div>
                <div class="step-desc">クライアントの IR 資料や業界レポートを開き、「この資料の要点を、売上・利益・戦略の3軸でまとめて」と依頼する。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">競合サービスの比較</div>
                <div class="step-desc">競合3社の製品ページをそれぞれ要約し、「この3つを機能・価格・サポートで比較する表を作って」と整理する。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">日常のブラウザ作業の効率化</div>
                <div class="step-desc">長いメールやチャットの要約、Webフォームの入力補助、英語ページの翻訳など、日常的なブラウザ作業をその場で支援してもらう。</div>
              </div>
            </div>
          </div>

          <h3>注意点</h3>
          <div class="warning-box">
            <p><strong>機密情報・個人情報が含まれるページでは慎重に</strong></p>
            <p>Chrome 拡張を使うと、表示中のページ内容が Claude に送信されます。クライアントの機密情報や個人情報が含まれるページ（社内システム、顧客管理画面等）では、<strong>送信してよい情報かどうか</strong>を判断してから使ってください。</p>
          </div>

          <div class="info-box">
            <p>Chrome 拡張の Chat は claude.ai の Chat と同じですが、<strong>Project の自動参照やファイルアップロードはできません</strong>。複雑な作業には claude.ai を直接使いましょう。</p>
          </div>
        `
      },

      // ========================================
      // 1-13: Cowork でファイル作業を任せる
      // ========================================
      {
        title: '1-13. Cowork でファイル作業を任せる',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Cowork の<strong>「フォルダごと渡して、ファイルを直接読み書きさせる」</strong>使い方を理解し、Chat との違いを踏まえてファイル作業を任せられるようになります。Cowork は Claude のデスクトップアプリで使えるモードです。</p>

          <div class="tip-box">
            💬 Chat が「相談役」なら、Cowork は仕事を<strong>任せる「相棒」</strong>。AI に作業を任せる「エージェント」的な使い方の入口です（考え方は第2回 2-1 でくわしく扱います）。
          </div>

          <div class="agent-team">
            <div class="agent-team-lead">
              <span class="at-icon">🧑</span>
              <div class="at-body"><strong>あなた</strong><span>「このフォルダの資料、案件ごとに整理して」とゴールだけ伝える</span></div>
            </div>
            <div class="agent-team-down">▼ あとは任せる</div>
            <div class="agent-team-lead result">
              <span class="at-icon">🤖</span>
              <div class="at-body"><strong>Cowork（相棒）</strong><span>フォルダを開いて読む → 案件ごとに仕分ける → 整理した表を作る まで自分で進める</span></div>
            </div>
          </div>
          <p>新しく人を採って教える手間なく、手元の作業を頼める“相棒”が増えるイメージ。やり方の細かい指示までは要らず、まずは<strong>ゴールを伝えるだけ</strong>でよいのがポイント。</p>

          <h4>データの置き場所が違う：クラウド型（Chat）と ローカル型（Cowork）</h4>
          <p>Chat と Cowork の根っこの違いは「ファイルをどこに置いて読ませるか」。</p>
          <ul>
            <li><strong>Chat＝クラウド型</strong>：ファイルをクラウドにアップロードし、それを Claude が読む。「アップロードする」というワンクッションが要る。</li>
            <li><strong>Cowork＝ローカル型</strong>：ファイルは自分の PC に置いたまま、そのフォルダへのアクセスを許可して Claude が直接読む。アップロードのワンクッションがなく、フォルダの中身をまとめて扱える。</li>
          </ul>
          <p>だから、案件の前提資料やナレッジを手元のフォルダに置いておけば、毎回アップロードし直さなくても、必要なときに Claude がそこを参照する。中身は自分でいつでも確認・編集できるので、常に最新に保てる。</p>

          <div class="visual-comparison">
            <div class="visual-comparison-card before">
              <span class="comp-label">クラウド型</span>
              <h4>💬 Chat</h4>
              <ul>
                <li>📄 ファイルを <strong>アップロード</strong></li>
                <li>☁️ クラウド経由で Claude が読む</li>
                <li>1ファイルずつ添付が必要</li>
              </ul>
              <p style="margin-top:8px;font-size:12px;color:var(--text-secondary);">※ 毎回アップロードし直すワンクッションが要る</p>
            </div>
            <div class="visual-comparison-card after">
              <span class="comp-label">ローカル型</span>
              <h4>📂 Cowork</h4>
              <ul>
                <li>📁 PC のフォルダを <strong>直接アクセス許可</strong></li>
                <li>Claude がフォルダ内を直接読む</li>
                <li>フォルダごと一括で扱える</li>
              </ul>
              <p style="margin-top:8px;font-size:12px;color:var(--text-secondary);">※ アップロード不要・常に最新</p>
            </div>
          </div>

          <h3>Chat との決定的な違い — フォルダに直接アクセスできる</h3>
          <p>Chat は「テキストで対話」する場で、ファイルを<strong>添付</strong>し、結果はコピーやダウンロードで持ち出す“持ち込み・持ち出し”型です。1回で渡しきれるタスクに向きます。</p>
          <p>Cowork は<strong>作業フォルダごと Claude に渡し、その中のファイルを直接ひらいて読み・加工し、新しいファイルとして書き出せます</strong>。アップロードとダウンロードの往復がいらないのが最大の違いです（単発なら従来どおり添付でも構いません）。</p>

          <div class="visual-highlight-card">
            <p><strong>💡 ここが非エンジニアにとっての大きなメリット</strong>：コードもコマンドも書かずに、手元のフォルダにあるファイル群（Excel・Word・PowerPoint・PDF など）をそのまま読ませ、成果物も同じフォルダに作らせられます。「ファイルを触る作業」を丸ごと任せられるのが Cowork の核心です。</p>
          </div>

          <h3>Chat と Cowork の使い分け</h3>
          <div class="visual-comparison">
            <div class="visual-comparison-card before">
              <div class="comp-label">💬 Chat</div>
              <h4>添付して会話する</h4>
              <ul>
                <li><strong>渡し方</strong>：ファイルを1つずつ添付</li>
                <li><strong>操作</strong>：添付したものを読む</li>
                <li><strong>成果物</strong>：テキスト / Artifact / ダウンロードファイル</li>
                <li><strong>向く場面</strong>：壁打ち・下書き・要約</li>
              </ul>
            </div>
            <div class="visual-comparison-card after">
              <div class="comp-label">📂 Cowork</div>
              <h4>フォルダごと任せる</h4>
              <ul>
                <li><strong>渡し方</strong>：フォルダごと接続</li>
                <li><strong>操作</strong>：フォルダ内を直接 読む・作る・書き換える</li>
                <li><strong>成果物</strong>：フォルダにファイルとして出力</li>
                <li><strong>向く場面</strong>：複数ファイルの整理・加工・一括処理</li>
              </ul>
            </div>
          </div>

          <h3>Cowork が力を発揮する場面</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">複数資料の整理</div>
              <div class="grid-desc">議事録複数、素材のまとめ、フォルダ内のファイル構成の確認</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Excel の加工</div>
              <div class="grid-desc">複数シートのデータ統合、集計、異常値抽出</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">Word・PowerPoint の下書き</div>
              <div class="grid-desc">議事録テンプレートへの入力、スライドドラフトの作成</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">レポート初稿作成</div>
              <div class="grid-desc">複数資料を読んで初稿を一括で完成させる</div>
            </div>
          </div>

          <h3>Cowork の使い方の流れ</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">フォルダを渡す</div>
                <div class="step-desc">作業用フォルダ（元ファイルのコピーを入れたもの）を Cowork に指定します。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">やってほしい作業を伝える</div>
                <div class="step-desc">「このフォルダの議事録を案件ごとに整理して」のように、成果物のイメージを伝えます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">Claude が作業を実行する</div>
                <div class="step-desc">Claude がフォルダ内のファイルを直接読み取り、加工・作成します（離席してもOK）。作業中に確認の質問が来ることもあります。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">フォルダ内の成果物を確認する</div>
                <div class="step-desc">フォルダ内に出力された成果物を確認し、修正が必要なら追加指示を出します。</div>
              </div>
            </div>
          </div>

          <h3>注意点</h3>
          <div class="warning-box">
            <p><strong>作業用フォルダ（コピー）で使う</strong></p>
            <p>Cowork はフォルダ内のファイルを直接書き換えられるため、元データが上書きされるリスクがあります。<strong>元ファイルのコピーを入れた作業用フォルダ</strong>を渡してください。Cowork は Claude Desktop 専用です。</p>
          </div>

          <div class="warning-box">
            <p><strong>社内利用ルール（必ず守る）</strong></p>
            <ul>
              <li><strong>操作はローカル環境に限定</strong>：BOX・Google ドライブなどの共有フォルダは探索・操作しません（現状、これらは Claude のエージェントからアクセスできません）。Cowork に渡すのはローカルの作業用フォルダのみにしてください。</li>
              <li><strong>アカウント管理は SSO で実施</strong>します。</li>
              <li><strong>個人情報・機密情報などの入力は禁止</strong>です。（社内の生成AI利用ガイドラインおよび「最重要情報・重要情報」の別表に準拠してください）</li>
            </ul>
          </div>
        `
      },

      // ========================================
      // 1-14: 定型業務をScheduled tasks化する
      // ========================================
      {
        title: '1-14. 定型業務を Scheduled tasks 化する',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>毎週・毎日のように繰り返す作業はありませんか？ Scheduled tasks は、Claude に<strong>「この作業を毎週月曜にやっておいて」</strong>と予約できる機能です。自動化そのものが目的ではなく、「毎回同じようにやっている作業を Claude に任せられないか考える」という発想を身につけます。</p>

          <h3>Scheduled tasks に向いている業務</h3>
          <p>以下のような「繰り返し」「定型」「準備作業」に効果を発揮します。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📰</div>
              <div class="grid-title">毎週の業界ニュース収集</div>
              <div class="grid-desc">「毎週月曜朝に○○業界の主要ニュースを5件、要約付きでまとめて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">定例会議前の確認事項整理</div>
              <div class="grid-desc">「毎週水曜の定例前に、先週の議事録から宿題の進捗を整理して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">週次レポートの下書き</div>
              <div class="grid-desc">「毎週金曜に、今週のタスク完了状況をまとめたレポートの下書きを作って」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔔</div>
              <div class="grid-title">タスクのリマインド</div>
              <div class="grid-desc">「毎朝、今日の期限のタスクを一覧で表示して」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏢</div>
              <div class="grid-title">定期的な競合情報チェック</div>
              <div class="grid-desc">「毎月1日に、A社・B社の新着プレスリリースをまとめて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">データ更新の確認</div>
              <div class="grid-desc">「毎週、共有フォルダ内の売上データが更新されているかチェックして」</div>
            </div>
          </div>

          <h3>設定の流れ</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">自動化したい作業を特定する</div>
                <div class="step-desc">まず「毎回同じようにやっている作業」を洗い出します。完全に定型でなくても、「ほぼ毎回同じ手順」なら候補になります。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">Cowork で Scheduled task を作成する</div>
                <div class="step-desc">Cowork の中で「毎週月曜に○○を実行して」と指示すると、Claude がスケジュールを設定します。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">結果を確認・調整する</div>
                <div class="step-desc">最初の実行結果を確認し、「出力の形式を変えて」「対象範囲を広げて」など調整します。</div>
              </div>
            </div>
          </div>

          <h3>Scheduled tasks を考えるときの発想法</h3>
          <div class="visual-highlight-card">
            <p>自分の1週間を振り返って、<strong>「これ、毎回ほぼ同じことをやっているな」</strong>と感じる作業を3つ挙げてみてください。それが Scheduled tasks の候補です。</p>
          </div>

          <h3>注意点</h3>
          <div class="warning-box">
            <p><strong>結果を鵜呑みにしない</strong></p>
            <p>Scheduled tasks の出力も、Chat や Cowork と同様に「初稿」です。特にニュース収集や競合チェックの結果は、自分の目で確認してから利用してください。自動だからといって品質チェックを省略しないことが重要です。</p>
          </div>

          <div class="visual-comparison">
            <div class="visual-comparison-card after">
              <div class="comp-label">▶️ 実行される</div>
              <ul>
                <li>PC 起動中</li>
                <li>Claude Desktop を開いている</li>
              </ul>
              <p style="font-size:12px;margin-top:6px;">→ 予定どおり実行</p>
            </div>
            <div class="visual-comparison-card before">
              <div class="comp-label">⏸️ いったんスキップ</div>
              <ul>
                <li>PC がスリープ中</li>
                <li>Claude Desktop を閉じている</li>
              </ul>
              <p style="font-size:12px;margin-top:6px;">→ 次に PC を開いたとき自動実行</p>
            </div>
          </div>
          <p style="font-size:13px;color:var(--text-secondary);">クラウドで常時動くわけではありません。</p>
        `
      },

      // ========================================
      // 1-15: よく使う手順を Skill にする（入門）
      // ========================================
      {
        title: '1-15. よく使う手順を Skill にする（入門）',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Skill とは何かを理解し、資料作成やリサーチでの活用イメージを持ち、自分の繰り返し作業を1つ「型」にできるようになります。</p>

          <h3>Skill とは</h3>
          <p>よく使う手順・指示・出力形式を「型」として保存し、呼び出すだけで同じ品質を再現できる機能です。</p>
          <div class="visual-flow">
            <div class="flow-step">
              <div class="flow-num">📝</div>
              <div class="flow-label">手順・指示・テンプレートを型として保存</div>
              <div class="flow-desc">毎回書いていた指示を一度だけ書く</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">📞</div>
              <div class="flow-label">名前で呼び出す</div>
              <div class="flow-desc">「議事録フォーマットで整理して」と言うだけ</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">✅</div>
              <div class="flow-label">毎回同じ品質で完成</div>
              <div class="flow-desc">長いプロンプトを書き直す手間がなくなる</div>
            </div>
          </div>
          <p style="font-size:13px;color:var(--text-secondary);">属人化しがちな「うまいやり方」を、誰でも同じ品質で再現できる形にできます（くわしくは 2-5）。</p>

          <h3>同じ Skill を Chat でも Cowork でも呼べる</h3>
          <p>つくった Skill は特定の場所に縛られず、同じ型をそのまま呼び出せます。たとえば「議事録フォーマット」Skill なら、次のように使えます。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">Chat の場合</div>
              <div class="grid-desc">会議メモを貼り付けて「議事録フォーマットで整理して」と呼ぶ。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">Cowork の場合</div>
              <div class="grid-desc">メモのファイルを渡して「議事録フォーマットで」と呼ぶ。</div>
            </div>
          </div>

          <p>どちらでも同じ型・同じ品質で仕上がります。一度つくれば、その都度作り直す必要がありません。</p>

          <h3>実務での活用例</h3>
          <p>特に向いているのは「毎回フォーマットや観点が決まっている作業」です。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item" style="text-align:left;">
              <div class="grid-icon" style="margin:0 0 10px;">📝</div>
              <div class="grid-title">資料作成</div>
              <div class="grid-desc">
                ・議事録フォーマット（日付・参加者・決定事項・宿題・次回アジェンダの順、です・ます調で整える）<br>
                ・クライアント向け文体への変換（社内メモを提出用のトーンに整える）<br>
                ・提案書のレビュー観点チェック（決まった5観点で叩く）
              </div>
            </div>
            <div class="visual-grid-item" style="text-align:left;">
              <div class="grid-icon" style="margin:0 0 10px;">🔍</div>
              <div class="grid-title">リサーチ</div>
              <div class="grid-desc">
                ・競合・市場調査の型（「機能・価格・実績の観点で比較表に」「出典URL付きで」など枠組みを固定）<br>
                ・調査結果を示唆に変換する型（機会・脅威を3つずつ → 推奨アクションまで）
              </div>
            </div>
          </div>

          <p>毎回ゼロから長い指示を書き直す必要がなくなり、出力の品質も揃います。</p>

          <h3>どう作る？（基本）</h3>
          <p>難しく考えず、いつもの指示を「型」にするところから始めます。</p>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">繰り返している作業を1つ選ぶ</div>
                <div class="step-desc">「今週2回以上、似た指示を書いたな」というものが候補です。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">名前と「いつ使うか」を決める</div>
                <div class="step-desc">例：「議事録整形」＝会議メモを議事録にするとき。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">手順・ルール・出力形式を書く</div>
                <div class="step-desc">やる順番／守る文体・禁止事項／出力の形（見出し・項目・文字数）を書きます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">一度試して直す</div>
                <div class="step-desc">実際のメモや資料で呼び出し、物足りない点を追記して育てます。</div>
              </div>
            </div>
          </div>
          <p>最初から完璧でなくてOK。使いながら少しずつ精度を上げていきます。</p>

          <div class="tip-box">
            <strong>💡 まずは1つだけ</strong><br>
            「今週、同じような指示を2回以上書いたな」という作業を1つ思い出してみてください。それが最初の Skill 候補です。完璧を目指さず、いつもの指示文をそのまま型にするところから始めれば十分です。
          </div>

          <div class="warning-box">
            <p><strong>ここでは「型にする」感覚をつかむだけ</strong></p>
            <p>どんな作業を Skill にすべきかの見極め、作った型の運用、チームでの共有・標準化といった本格的な作り方は、第2回の <strong>2-5</strong> でまとめて深掘りします。ここでは「繰り返しの手順は型にして再利用できる」というイメージを持てれば十分です。</p>
          </div>
        `
      },

      // ========================================
      // 第1回のまとめ
      // ========================================
      {
        title: '🏁 第1回のまとめ',
        type: 'lecture',
        content: `
          <h3>このセクションのゴール</h3>
          <p>第1回は「<strong>個人で仕事の初速を上げ、成果物を作る</strong>」がテーマでした。要点を振り返ります。</p>

          <h3>今回の要点</h3>
          <h4>🚀 仕事の初速を上げる</h4>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">基盤は Chat</div>
              <div class="grid-desc">まず Chat。壁打ち・下書き・要約・翻訳はすべて Chat から始まる。難しい設定は不要で、今日から使える。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📐</div>
              <div class="grid-title">プロンプト3要素</div>
              <div class="grid-desc"><strong>前提（背景・制約）・タスク（何をしてほしいか）・ルール（形式・禁止事項）</strong>の3つを揃えると出力が安定する。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">出力は”初稿”</div>
              <div class="grid-desc">事実・数字・固有名詞は必ず裏取り。最終判断と責任は自分が持つ。鵜呑みにしないことが安全な使い方の基本。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">Project / Artifact</div>
              <div class="grid-desc">Project で案件の前提を保持し毎回説明し直す手間を省く。Artifact で成果物を会話と切り離して残し、再利用する。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔄</div>
              <div class="grid-title">対話で磨く</div>
              <div class="grid-desc">1回で完成させようとしない。「2番をもっと具体的に」「競合事例を追加して」と往復するほど成果物の質が上がる。</div>
            </div>
          </div>
          <h4>🏗️ 成果物を作る</h4>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">機能の使い分け</div>
              <div class="grid-desc">Office アドイン（Office 内で直接）／Research（根拠付き調査）／Artifact（プロトタイプ）／Cowork（ファイル作業の委任）を成果物に応じて選ぶ。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">Cowork</div>
              <div class="grid-desc">作業フォルダごと渡してファイル作業を委任する。PPTX・Excel・Word の作成や複数ファイルの整理がアップロード不要で依頼できる。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⏰</div>
              <div class="grid-title">Chrome / Scheduled tasks</div>
              <div class="grid-desc">Chrome 拡張でブラウザ上の調査をその場でサポート。Scheduled tasks で競合チェック・ニュース収集などの定型業務を自動化する。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧩</div>
              <div class="grid-title">Skill</div>
              <div class="grid-desc">繰り返す手順・指示・出力形式を「型」として保存し、名前を呼ぶだけで再利用できる。属人化しがちな”うまいやり方”をチームで共有できる形に。</div>
            </div>
          </div>

          <h3>今日からやること（まず1つでOK）</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">⚙️</div>
              <div class="grid-title">「Claudeへの指示」に前提を登録</div>
              <div class="grid-desc">役職・業界・トーンを1回だけ入力。毎回説明し直す手間がなくなる。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">担当案件で Project を1つ作る</div>
              <div class="grid-desc">Instructions に案件の概要を書き込む。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🏗️</div>
              <div class="grid-title">成果物を1つ作る</div>
              <div class="grid-desc">Artifact か Cowork で実際の業務に当てはめてみる。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Office アドインを1回使う</div>
              <div class="grid-desc">PowerPoint などを入れて手元のファイルで試してみる。</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>✏️ 手を動かして定着させる</strong><br>
            各セクションの演習は「<strong>練習問題</strong>」ページにまとまっています（自習モード）。講義を見たら、練習問題で1つ手を動かすと定着します。
          </div>

          <h3>次回（第2回）へ</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">第1回</div>
              <h4>Chat の基本と成果物づくり</h4>
              <ul>
                <li>Chat・Project・Artifact で初速を上げる</li>
                <li>Office / Research / Cowork で成果物にする</li>
                <li>Skill で手順を型化する</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">第2回</div>
              <h4>Claude Code で幅を広げ、品質を安定させる</h4>
              <ul>
                <li>Claude Code で高度な成果物を作る</li>
                <li>CLAUDE.md・Skills・MCP で品質を固定する</li>
                <li>Subagents でリサーチ・企画にも展開する</li>
              </ul>
            </div>
          </div>
        `
      }
    ],

    // ========================================
    // クイズ（21問）
    // ========================================
    quiz: [
      {
        question: 'Claude の3つのモード（Chat / Cowork / Claude Code）について正しいものはどれですか？',
        options: ['全員が最初から Claude Code を使うべき', 'Cowork は対話専用のモード', 'Chat はすべての基盤で、迷ったらまず Chat を使う', 'Chat と Cowork は全く同じ機能'],
        correct: 2,
        explanation: 'Chat はすべての基盤です。Cowork はファイルを直接操作して成果物を作るモード、Claude Code は品質ルールの固定と高度な自動化のモード。迷ったら Chat から始めましょう。'
      },
      {
        question: 'プロンプトの3要素として正しい組み合わせはどれですか？',
        options: ['入力・処理・出力', '前提の共有・タスク定義・ルール指定', '質問・回答・確認', '要約・分析・報告'],
        correct: 1,
        explanation: '「前提の共有」で背景を伝え、「タスク定義」でゴールを明確にし、「ルール指定」で出力の形を決める。この3要素を意識するだけで出力の質が大きく上がります。'
      },
      {
        question: '「競合分析して」というプロンプトの改善として最も適切なものはどれですか？',
        options: ['「競合分析してください。お願いします」と丁寧にする', '「競合分析して。早く」と簡潔にする', '「ITコンサルとして、A社・B社・C社のクラウドERPを機能・価格・実績で比較。表形式で出力」と3要素を入れる', '「競合分析して。できるだけ詳しく」と量を増やす'],
        correct: 2,
        explanation: '前提（ITコンサル）・タスク（3社比較、比較軸の指定）・ルール（表形式で出力）の3要素を満たすことで、的確な出力が得られます。丁寧さや量の指定だけでは精度は上がりません。'
      },
      {
        question: 'Claude の出力に対する適切な姿勢はどれですか？',
        options: ['AIの出力は常に正確なので、そのまま使ってよい', '出力は「たたき台」として、確認・修正・最終判断を行う', 'AIの出力は信用できないので使わない方がよい', '数字や固有名詞の確認は不要'],
        correct: 1,
        explanation: 'AI の出力は「たたき台」です。そのまま使うのではなく、確認→修正→仕上げのプロセスを経て、自分の責任で最終成果物にします。'
      },
      {
        question: 'ハルシネーション（でっち上げ）について正しいものはどれですか？',
        options: ['Claude だけに発生する問題で、他の生成AI では起きない', '出典を求めれば必ず正確な情報が返ってくる', '数字・固有名詞・引用は特に注意が必要で、重要情報は自分で裏取りする', 'Web検索をONにすればハルシネーションは完全になくなる'],
        correct: 2,
        explanation: 'ハルシネーションはすべての生成AIに共通するリスクです。特に数字・固有名詞・引用元は確認が必要。Web検索ONで精度は上がりますが、重要情報は自分で照合する習慣が大切です。'
      },
      {
        question: 'Project の主な目的として最も適切なものはどれですか？',
        options: ['会話履歴を無限に保存する', '案件固有の背景・ルール・参照資料を保持し、毎回の前提説明を省略する', 'Claude の回答速度を上げる', 'チームメンバー全員の会話を閲覧する'],
        correct: 1,
        explanation: 'Project は案件固有の Instructions とナレッジベースを保持し、毎回同じ前提を伝え直す手間を省きます。Project 内の全会話で自動参照されるため、すぐ本題に入れます。'
      },
      {
        question: 'Artifact について正しいものはどれですか？',
        options: ['チャットの回答をコピーしたもの', '会話とは独立した成果物で、文書・図表・インタラクティブUIなどを生成できる', 'Artifact は画像生成専用の機能', 'Artifact は一度作ると修正できない'],
        correct: 1,
        explanation: 'Artifact は会話とは独立した成果物です。文書・表・図表・Webページ・ダッシュボードなどを生成でき、追加指示で修正するとバージョンが記録されます。'
      },
      {
        question: 'Chat で壁打ちをするときのコツとして適切なものはどれですか？',
        options: ['正解を1つだけ求める', '複数の切り口を出してもらい、気になるものを深掘りする', 'できるだけ短い質問にする', '壁打ちは Chat ではできない'],
        correct: 1,
        explanation: '壁打ちは「正解を求める」のではなく「考えを整理し、視野を広げる」使い方です。複数の切り口を出してもらい、「2番目を深掘りして」と会話を続けると効果的です。'
      },
      {
        question: 'Cowork と Claude Code について、第1回の時点で正しい理解はどれですか？',
        options: ['今すぐ全機能を使いこなす必要がある', 'Chat で十分なので、Cowork と Claude Code は不要', 'Chat をまず使いこなし、必要に応じて Cowork、Claude Code（第2回）へ進む', 'Cowork と Claude Code は同じ機能'],
        correct: 2,
        explanation: 'まずは Chat で壁打ち・下書き・要約をしっかり使いこなすことが大切です。ファイル作成が必要になったら Cowork、品質の固定が必要になったら Claude Code を学びましょう。'
      },
      {
        question: 'Excel に入った売上データの傾向を把握したい場合、最も適切な Claude の使い方はどれですか？',
        options: [
          'Claude in Excel でデータの傾向を読み取ってもらう',
          'Research で売上データの分析方法を調べる',
          'Artifact で売上ダッシュボードを作る',
          'Cowork に Excel をアップロードして集計してもらう'
        ],
        correct: 0,
        explanation: 'Excel 内のデータの傾向把握は、Claude in Excel でそのまま依頼するのが最も効率的です。「このデータから読み取れるポイントを3つ挙げて」のように、日本語で分析を依頼できます。'
      },
      {
        question: 'Research と通常の Web 検索の違いとして、最も適切な説明はどれですか？',
        options: [
          'Research は検索速度が速い',
          'Research は複数の情報源を横断し、構造化・出典付きで報告してくれる',
          'Research は有料の情報源にもアクセスできる',
          'Research は検索結果の正確性が保証されている'
        ],
        correct: 1,
        explanation: 'Research の強みは、複数の情報源を自動で横断調査し、要点を整理して出典付きで報告してくれる点です。ただし正確性の保証はなく、重要な情報は必ず一次情報に当たって確認する必要があります。'
      },
      {
        question: 'Artifact で作った「プロトタイプ」をクライアントに見せる際、必ず伝えるべきことは何ですか？',
        options: [
          '使用したプログラミング言語の説明',
          '「これは認識合わせのための試作品です」という位置づけ',
          'AI が作ったものなので品質は保証できないこと',
          'Artifact の使い方の技術的な説明'
        ],
        correct: 1,
        explanation: 'Artifact で作る「プロトタイプ」は、提案やプロジェクトの論点を具体化するための「たたき台」です。クライアントが本番システムだと誤解しないよう、試作品であることを必ず伝えましょう。'
      },
      {
        question: 'Chrome 拡張で Claude を使う際、注意すべきことは何ですか？',
        options: [
          'Chrome のバージョンが最新であること',
          '機密情報・個人情報が含まれるページでは送信内容を判断すること',
          '1日の使用回数に制限があること',
          'Chrome 拡張は英語ページにしか対応していないこと'
        ],
        correct: 1,
        explanation: 'Chrome 拡張を使うと、表示中のページ内容が Claude に送信されます。クライアントの機密情報や個人情報が含まれるページ（社内システム、顧客管理画面等）では、送信してよい情報かどうかを判断してから使ってください。'
      },
      {
        question: 'Chat と Cowork の違いとして、最も適切な説明はどれですか？',
        options: [
          'Chat は無料だが Cowork は有料',
          'Chat は対話でやり取りし、Cowork はファイルを渡して作業を委任する',
          'Chat は簡単な質問用で、Cowork は複雑な質問用',
          'Chat はブラウザ用で、Cowork はスマートフォン用'
        ],
        correct: 1,
        explanation: 'Chat はテキストで対話する使い方、Cowork はファイルを渡して加工・作成を委任する使い方です。Chat の出力は自分でコピーして使いますが、Cowork は成果物がファイルとして生成されます。'
      },
      {
        question: 'Cowork にファイルを渡す際のベストプラクティスはどれですか？',
        options: [
          '元ファイルをそのまま渡す（変更が即座に反映されるため）',
          '元ファイルのコピーを作ってから渡す',
          'ファイルを ZIP 圧縮してから渡す',
          'ファイルをPDFに変換してから渡す'
        ],
        correct: 1,
        explanation: 'Cowork は Claude がファイルを直接変更するため、意図しない変更が元ファイルに及ぶリスクがあります。作業用コピーを作ってから渡すことで、元のデータを安全に保てます。'
      },
      {
        question: 'Scheduled tasks に最も向いている業務はどれですか？',
        options: [
          '一度きりの大規模プレゼン資料作成',
          '毎週月曜に行う業界ニュースの収集と要約',
          '創造的なブレインストーミング',
          '初めて行う新規クライアントへの提案'
        ],
        correct: 1,
        explanation: 'Scheduled tasks は「繰り返し」「定型」「準備作業」に効果を発揮します。毎週同じように行う業界ニュース収集は典型的な好例です。一度きりの作業や、毎回異なる創造的な作業には Chat や Cowork の方が適しています。'
      },
      {
        question: '提案書の構成を考える際、Claude in PowerPoint でまずやるべきことは何ですか？',
        options: [
          'スライドのデザインテンプレートを選ぶ',
          '提案書の構成案を依頼し、各スライドのタイトルとキーメッセージを提案してもらう',
          '箇条書きを入力してから Claude に修正させる',
          '過去の提案書を全てアップロードする'
        ],
        correct: 1,
        explanation: 'まず全体の構成（何枚のスライドで、各スライドで何を伝えるか）を Claude に提案してもらうのが効果的です。構成が決まってから、各スライドの内容を詳細化していきましょう。'
      },
      {
        question: 'Research の結果をクライアント向け調査レポートに使う場合、最も重要な確認事項は何ですか？',
        options: [
          'Research が参照した情報源の数',
          '出典のURLが有効で、数値や事実が正確かの裏取り',
          'Research の実行にかかった時間',
          '調査結果の文字数が十分かどうか'
        ],
        correct: 1,
        explanation: 'Research は出典付きで報告してくれますが、URLが無効なケースや情報が古いケースもあります。クライアントに提出する調査レポートでは、必ず一次情報に当たって数値や事実を確認してください。'
      },
      {
        question: '次のうち、Artifact の「プロトタイプ」として作るのに最も適しているのはどれですか？',
        options: [
          '社内の人事管理システム',
          'クライアントとの認識合わせ用のセグメンテーション診断ツール',
          '本番運用する在庫管理データベース',
          '個人情報を扱う顧客登録フォーム'
        ],
        correct: 1,
        explanation: 'Artifact で作る「プロトタイプ」は、論点を具体化するための試作品です。認識合わせ用の診断ツールは好例です。本番システムや個人情報を扱う仕組みには Artifact は適しません。'
      },
      {
        question: 'Word で長い報告書をクライアント提出用に整える場合、Claude in Word の活用として適切な順序はどれですか？',
        options: [
          'デザインを整える → 文体を統一する → 内容を確認する',
          '章立てを見直す → 文体を統一する → クライアント向け表現に変換する',
          'クライアント向け表現に変換する → 章立てを見直す → 文体を統一する',
          '文体を統一する → デザインを整える → 章立てを見直す'
        ],
        correct: 1,
        explanation: 'まず全体の構成（章立て）を整理し、次に文体を統一し、最後にクライアント向け表現に仕上げるのが効率的です。構成が決まっていない段階で細かい表現を整えても、手戻りが発生します。'
      },
      {
        question: 'Scheduled tasks の出力について、正しい認識はどれですか？',
        options: [
          '自動実行なので人間のチェックは不要',
          'スケジュール通りに実行されれば品質は保証される',
          '自動実行の結果も Chat と同様に「初稿」として確認が必要',
          '一度正しく出力されれば、以降は確認不要'
        ],
        correct: 2,
        explanation: 'Scheduled tasks の出力も、Chat や Cowork と同様に「初稿」です。自動だからといって品質チェックを省略せず、自分の目で確認してから利用しましょう。特にニュース収集や競合チェックは、情報の鮮度や正確性を確認することが重要です。'
      }
    ],

    // ========================================
    // 練習問題
    // ========================================
    practices: [
      {
        section: '1-4. Chatで壁打ち・下書き・要約',
        title: '会議メモから論点整理を作る',
        task: '手元の会議メモ（なければ適当な長文メール）を Claude に添付し、「この内容を、決定事項・未決事項・宿題（担当者付き）に分けて整理してください」と依頼してみましょう。出力を確認し、足りない点があれば追加指示で修正してください。',
        hint: '出力形式を具体的に指定すると精度が上がります。「箇条書きで」「表形式で」など試してみましょう。'
      },
      {
        section: '1-4. Chatで壁打ち・下書き・要約',
        title: '提案の切り口を壁打ちする',
        task: '自分が関わっている（または想定する）案件について、「この案件に対する提案の切り口を5つ挙げて、それぞれのメリットとリスクを教えてください」と Claude に依頼してください。返ってきた5つのうち1つを選び、「この切り口をさらに深掘りして」と会話を続けてみましょう。'
      },
      {
        section: '1-5. 良い指示の出し方',
        title: 'プロンプト3要素で書き直す',
        task: '以下の雑なプロンプトを、3要素（前提の共有・タスク定義・ルール指定）を満たす形に書き直してから Claude に投げてください。\n\n悪い例：「競合分析して」\n\nヒント：あなたは何業界の何の案件で、どの競合の何を比較したいのか、出力はどういう形式が欲しいのか。',
        hint: '例：「あなたはITコンサルタントです。A社・B社・C社のクラウドERPサービスを、機能・価格・導入実績で比較してください。比較表（Markdown）で出力し、最後に推奨を1段落で述べてください。」'
      },
      {
        section: '1-5. 良い指示の出し方',
        title: '「Claudeへの指示」を設定する',
        task: 'claude.ai の設定 > 一般 >「Claudeへの指示」に、自分の前提情報を登録してください。\n新しいチャットで「私についてどんな前提を持っていますか？」と聞いて、反映されていることを確認しましょう。',
        hint: '例：「私は経営コンサルティングファームのシニアコンサルタントです。出力はです・ます調、結論先行で。」'
      },
      {
        section: '1-6. 出力を疑う・直す・責任を持つ',
        title: 'ハルシネーションを体験する',
        task: '「2024年の日本のSaaS市場規模を、出典付きで教えてください」を Claude に投げて、返ってきた数字と出典を別途検索して照合してください。\n次に Web 検索 ON で同じ質問を投げて、結果の違いを比較しましょう。',
        hint: '出典URLが実在するか、数字が正確かを確認してみてください。Web検索ONとOFFで精度がどう変わるかがポイントです。'
      },
      {
        section: '1-7. Project / Artifact で成果物にする',
        title: 'Projectを作成して壁打ちする',
        task: 'claude.ai >「プロジェクト」から新規プロジェクトを作成してください。\nInstructions に案件概要を記入し、参照資料があればアップロード。\n「この案件の論点を3つ整理して」と試してください。\nProjectなしの通常チャットとの応答の違いを比較してみましょう。'
      },
      {
        section: '1-7. Project / Artifact で成果物にする',
        title: 'Artifactで成果物を作る',
        task: 'Chat で壁打ちした内容や比較分析の結果を、Artifact として残してみましょう。\n\n1. 「この内容を比較表のArtifactにして」と依頼\n2. 「さらにMermaid図で全体像を可視化して」と追加指示\n3. バージョン履歴で前のバージョンに戻せることを確認'
      },
      {
        section: '1-7. Project / Artifact で成果物にする',
        title: 'インタラクティブなArtifactを作る',
        task: '業務で使えるインタラクティブな成果物を Claude に作ってもらいましょう。\n\n例：「クライアントの業務改善の優先度を診断するツールを作って。5つの質問に答えると、改善領域の優先度がチャートで表示される」\n\nArtifact内でクリック・入力ができることを確認してください。',
        hint: '診断ツール、シミュレーター、簡易ダッシュボード、画面モックなど。「提案の論点を触れる形にしたい」と伝えてみましょう。'
      },
      {
        section: '1-9. Office アプリで Claude を使う — Excel / PowerPoint / Word',
        title: 'Excel データの傾向を読み取る',
        task: '手元にある Excel データ（売上・顧客・アンケート等）を開き、Claude in Excel で以下を依頼してみましょう。\n\n1. 「このデータから読み取れる傾向を3つ挙げて」\n2. 返ってきた示唆の中から1つ選び、「この点をさらに深掘りして」と追加指示\n3. 最後に「経営会議で報告するとしたら、どんなグラフが適切か」と聞く',
        hint: 'データがない場合は、サンプルの売上データ（3ヶ月分・5商品程度）を自分で作ってから試しましょう。'
      },
      {
        section: '1-9. Office アプリで Claude を使う — Excel / PowerPoint / Word',
        title: 'PowerPoint のスライド構成を作る',
        task: '自分が関わっている（または想定する）案件について、Claude in PowerPoint で提案書の構成を依頼してください。\n\n1. 「この案件の提案書を8〜10枚構成で作って。各スライドのタイトルとキーメッセージを提案して」\n2. 構成が出たら、「3枚目のスライドを役員向けの表現に書き直して」と追加指示\n3. 「全体のストーリーラインを1文で表現して」とまとめを依頼',
        hint: '案件の背景（業界・課題・提案の方向性）を最初に伝えると、精度の高い構成が返ります。'
      },
      {
        section: '1-10. Research で調査する',
        title: '競合調査レポートを作成する',
        task: 'Research を使って、以下の手順で競合調査を行ってください。\n\n1. 自分が関わる業界の競合3社を選ぶ\n2. 「○○業界のA社・B社・C社について、主力サービス・価格帯・強みを調査して、比較表にまとめてください。出典も明記してください」と依頼\n3. 返ってきた比較表の出典URLを実際にクリックして、情報が正確かを確認\n4. 「この調査結果から、当社にとっての機会とリスクを整理して」と示唆を依頼',
        hint: '出典URLが無効だった場合や数値が不正確だった場合は、どこが間違っていたかをメモしておきましょう。Research の限界を理解することも重要です。'
      },
      {
        section: '1-11. Artifact で「プロトタイプ」を作る',
        title: 'セグメンテーション診断ツールを作る',
        task: 'Artifact を使って、クライアント向けの簡易診断ツールを作ってみましょう。\n\n1. 「クライアントの新規事業について、ターゲットセグメントの適合度を5段階で診断するツールを作ってください。質問は5問で、回答に応じて総合スコアとアドバイスを表示してください」と依頼\n2. 生成された Artifact を実際に操作して回答してみる\n3. 「質問を1つ追加して」「結果にレーダーチャートを追加して」と修正指示を出す\n4. 完成したら HTML をダウンロードして、ブラウザで開けることを確認',
        hint: '「これは認識合わせのための試作品です」と伝えた上で、クライアントに見せることを想像して作りましょう。'
      },
      {
        section: '1-11. Artifact で「プロトタイプ」を作る',
        title: '市場規模シミュレーターを作る',
        task: 'Artifact を使って、提案の裏付けとなる試算ツールを作ってみましょう。\n\n1. 「新規事業の市場規模（TAM/SAM/SOM）を試算するシミュレーターを作ってください。入力項目は、対象人口、購入率、平均単価の3つ。市場規模を自動計算して表示してください」と依頼\n2. 数値を変えて結果が連動することを確認\n3. 「入力値の妥当性チェック（マイナス値の排除等）を追加して」と品質を上げる\n4. 「結果をグラフでも表示して」とビジュアルを強化',
        hint: 'シミュレーターの計算ロジックが正しいか、自分で計算して照合してみましょう。'
      },
      {
        section: '1-12. Chrome でブラウザ作業を支援する',
        title: 'Web 調査を Chrome 拡張で効率化する',
        task: 'Chrome 拡張を使って、Web 調査を効率化してみましょう。\n\n1. 調査したいテーマ（業界動向・競合サービス等）のWebページを3つ開く\n2. 各ページで Claude に「このページの要点を3つにまとめて」と依頼\n3. 3つの要約を比較し、「この3つの情報源から、共通する傾向を整理して」と依頼',
        hint: '機密情報が含まれないページ（公開されているIR資料、プレスリリース等）で試しましょう。'
      },
      {
        section: '1-13. Cowork でファイル作業を任せる',
        title: 'Cowork で複数ファイルを整理する',
        task: 'Cowork を使って、複数ファイルの整理を委任してみましょう。\n\n1. 議事録・メモ・メールなどのファイルを3〜5件用意する（コピーを作る）\n2. Cowork にアップロードし、「これらの資料から、案件ごとの決定事項・未決事項・宿題を整理して」と依頼\n3. 出力を確認し、「表形式にまとめ直して」「宿題に期限を追加して」と追加指示',
        hint: '必ず元ファイルのコピーを使ってください。Cowork はファイルを直接変更する可能性があります。'
      },
      {
        section: '1-14. 定型業務を Scheduled tasks 化する',
        title: '自分の定型業務を洗い出す',
        task: 'Scheduled tasks の設定に入る前に、まず自動化の候補を洗い出してみましょう。\n\n1. 自分の1週間のルーティンを振り返り、「毎回ほぼ同じ手順でやっている作業」を5つ書き出す\n2. その中から、Claude に任せられそうなもの（情報収集・整理・下書き系）を2つ選ぶ\n3. 選んだ2つについて、「毎週○曜日に、○○を○○の形式でまとめて」というスケジュール指示文を書く\n4. 余力があれば、Cowork で実際に Scheduled task を1つ設定してみる',
        hint: '最初は頻度の高い小さな作業から始めましょう。「毎朝の業界ニュース要約」などが手軽な第一歩です。'
      }
    ],

    // ========================================
    // リンク集・FAQ
    // ========================================
    selfStudyResources: {
      links: [
        { title: 'Claude.ai（公式サイト）', url: 'https://claude.ai/', desc: 'Claude のチャット・Cowork はここからアクセス', category: '🚀 はじめる' },
        { title: 'Claude デスクトップアプリ ダウンロード', url: 'https://claude.com/download', desc: 'Mac / Windows 対応', category: '🚀 はじめる' },
        { title: 'プロンプト設計ガイド', url: 'https://docs.claude.com/en/resources/prompt-library/library', desc: 'プロンプト作成のコツ・ベストプラクティス', category: '📖 プロンプトを学ぶ' },
        { title: 'Claude Tips & Tricks（YouTube）', url: 'https://www.youtube.com/playlist?list=PLf2m23nhTg5VEz8sS0ORurJk3lBL7nB0V', desc: 'Anthropic 公式の使い方動画', category: '📖 プロンプトを学ぶ' },
        { title: 'Anthropic Cookbook', url: 'https://github.com/anthropics/anthropic-cookbook', desc: '実践的なユースケースとコード例', category: '📖 プロンプトを学ぶ' },
        { title: '生成AIプロンプト集（社内DB）', url: 'https://app.notion.com/p/eight-hundred/22bb14ae3bcd80f4898dd3816448557c?v=22cb14ae3bcd80088278000ca2862351', desc: '社内で作成した業務別プロンプト集。業務カテゴリ別／難易度別に整理', category: '📖 プロンプトを学ぶ' },
        { title: 'Anthropic 公式ドキュメント', url: 'https://docs.claude.com/', desc: 'Claude の技術仕様・機能一覧・ベストプラクティス', category: '📚 公式リファレンス' },
        { title: 'Claude サポートサイト', url: 'https://support.claude.com/', desc: 'Project・Artifact・各機能の使い方ガイド', category: '📚 公式リファレンス' },
        { title: 'Claude in Office（公式ガイド）', url: 'https://support.claude.com/en/articles/13892150-work-across-microsoft-365-apps', desc: 'Excel / PowerPoint / Word との連携ガイド', category: '💼 Officeで使う' },
        { title: 'Cowork 公式ガイド', url: 'https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork', desc: 'Cowork の機能と使い方ガイド', category: '💼 Officeで使う' },
        { title: 'Claude in Chrome 拡張', url: 'https://chromewebstore.google.com/detail/claude/danfoobapigkipfachmebkhbhegkahpc', desc: 'Chrome 拡張のインストールページ', category: '🌐 Chromeで使う' },
        { title: 'Artifact ガイド', url: 'https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them', desc: 'Artifact の使い方と活用例', category: '📚 公式リファレンス' },
        { title: 'Research 機能ガイド', url: 'https://support.claude.com/en/articles/11088861-use-research-on-claude', desc: 'Research の仕組みと活用方法', category: '📚 公式リファレンス' },
        { title: 'Scheduled tasks ガイド', url: 'https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork', desc: 'Scheduled tasks の設定方法', category: '📚 公式リファレンス' }
      ],
      faq: [
        { q: 'Claude ではまず何から使えばよいですか？', a: 'まずは Chat から始めましょう。壁打ち（論点整理）、下書き（メール・報告書の素案）、要約（長い文書を要点に絞る）の3パターンが最も使用頻度が高いです。慣れてきたら Project で案件の背景を登録し、Artifact で成果物を残すとさらに効率が上がります。', category: '💡 Claudeの基本' },
        { q: 'Chat / Cowork / Claude Code はどう使い分けますか？', a: '「対話で済むか？」→ Chat。「ファイルを直接作ってほしいか？」→ Cowork。「毎回同じ品質で繰り返したいか？」→ Claude Code。迷ったら Chat からで問題ありません。', category: '💡 Claudeの基本' },
        { q: 'Claude と ChatGPT / Gemini の違いは何ですか？', a: 'Claude は長文処理の安定性（200Kトークン）、指示への忠実さ（出力形式・ルール遵守）、構造化・論点整理の精度に強みがあります。また、ファイルを直接操作する Cowork モードは Claude 独自の機能です。ChatGPT は画像生成やプラグインエコシステム、Gemini は Google サービスとの連携が充実しています。タスクに応じて使い分けるのが現実的です。', category: '💡 Claudeの基本' },
        { q: 'Project とは何ですか？', a: 'Project は案件固有の背景情報・ルール・参照資料を Claude に覚えさせる仕組みです。Instructions（指示文）とナレッジベース（参照資料）を設定すると、その Project 内の全会話で自動参照されます。毎回同じ前提を説明し直す手間がなくなります。', category: '🖥️ Chat・Projects' },
        { q: 'Artifact とは何ですか？', a: 'Artifact は会話とは独立した成果物です。文書・表・図表・Webページ・ダッシュボードなどを生成でき、追加指示で修正するとバージョンが記録されます。チャットの回答は流れていきますが、Artifact は残ります。「これを Artifact にして」と依頼するか、Claude が自動的に生成します。', category: '🖥️ Chat・Projects' },
        { q: 'Cowork や Claude Code は最初から使うべきですか？', a: 'いいえ。まずは Chat で壁打ち・下書き・要約を使いこなすことが最優先です。ファイルを直接作ってほしい場面が出てきたら Cowork（1-13）、品質の再現性が必要になったら Claude Code（第2回）を学びましょう。', category: '💡 Claudeの基本' },
        { q: 'Claude の出力をそのまま使ってよいですか？', a: 'そのまま提出することは推奨しません。Claude の出力は「たたき台」です。特に数字・固有名詞・引用元は裏取りが必要です。確認→修正→仕上げのプロセスを経て、自分の責任で最終成果物にしてください。', category: '✍️ プロンプト・品質' },
        { q: 'プロンプトの3要素は必ず全部入れるべきですか？', a: '必ずしも全部必要ではありません。簡単な質問なら不要ですが、業務で精度の高い出力が欲しいときは3要素（前提の共有・タスク定義・ルール指定）を意識すると品質が上がります。まず簡潔に指示して、返ってきた出力を見て追加指示するやり方も有効です。', category: '✍️ プロンプト・品質' },
        { q: 'Claude in Office では具体的に何ができますか？', a: 'Excel ではデータの傾向分析・集計観点の提案・グラフ化方針の相談・異常値の洗い出し、PowerPoint では構成案の作成・タイトル改善・ストーリーライン整理、Word では要約・文体統一・章立て見直し・クライアント向け表現変換ができます。Office 内で直接 Claude と対話する形で利用します。', category: '💼 Office・Chrome' },
        { q: 'Research と通常の Web 検索の違いは何ですか？', a: 'Research は複数の情報源を自動で横断調査し、要点を構造化して出典付きで報告してくれます。通常の Web 検索は自分でキーワードを考え、各サイトを読み、情報を取捨選択・整理する必要があります。ただし Research の結果も「初稿」なので、重要な数値や事実は必ず一次情報に当たって確認してください。', category: '💡 Claudeの基本' },
        { q: 'Artifact で作る「プロトタイプ」とは何ですか？', a: '診断ツール、シミュレーター、ダッシュボード、ポジショニングマップ、カスタマージャーニー可視化など、ユーザーが実際に操作できる成果物のことです。Artifact が HTML/CSS/JavaScript を生成し、ブラウザ上でそのまま動作します。提案やプロジェクトの論点を具体化する「たたき台」として活用します。', category: '💡 Claudeの基本' },
        { q: 'プロトタイプをクライアントに見せる際の注意点は？', a: '必ず「これは認識合わせのための試作品です」と伝えてください。Artifact で作るものは本番システムではなく、論点を具体化するためのたたき台です。データの保存機能がないこと、セキュリティ対策が施されていないことなどを説明し、本番開発は別途必要であることを明確にしましょう。', category: '✍️ プロンプト・品質' },
        { q: 'Chrome 拡張を使う際の注意点は？', a: 'Chrome 拡張を使うと、表示中のページ内容が Claude に送信されます。クライアントの機密情報や個人情報が含まれるページ（社内システム、顧客管理画面等）では、送信してよい情報かどうかを判断してから使ってください。また、Project の自動参照やファイルアップロードは Chrome 拡張では使えません。', category: '💼 Office・Chrome' },
        { q: 'Cowork はどのような作業に向いていますか？', a: '複数資料の整理、Excel の加工、Word・PowerPoint の下書き、ファイル構成の確認、レポートの初稿作成など、ファイルを直接扱う作業に向いています。Chat が「対話で相談する」のに対し、Cowork は「作業を委任する」イメージです。作業用コピーを作ってから渡すことをお勧めします。', category: '📂 Cowork' },
        { q: 'Scheduled tasks はどのような業務に使えますか？', a: '毎週の業界ニュース収集、定例会議前の確認事項整理、週次レポートの下書き、タスクのリマインド、定期的な競合情報チェックなど、「繰り返し」「定型」「準備作業」に効果を発揮します。「毎回同じようにやっている作業」を洗い出し、Claude に任せられないか考えてみてください。', category: '📂 Cowork' },
        { q: 'Claude で作った成果物はそのまま提出してよいですか？', a: '第1回の復習になりますが、どの機能で作った成果物も「たたき台」です。特に Research の数値・出典、Artifact の計算ロジック、Office 連携の分析結果は、自分で確認してから使ってください。成果物の最終責任は常に自分にあります。', category: '✍️ プロンプト・品質' },
        { q: 'スライド生成を Claude に任せる時のコツは何ですか？', a: 'いきなり「10枚作って」と任せると、見た目は整っても論点・ストーリーが弱くなりがちです。次の順で段階的に作らせるのがコツです：(1) 構成・ストーリーラインを作る、(2) 1枚ごとのキーメッセージを作る、(3) 図表案・本文を作る、(4) 論理飛び・数字根拠・読み手目線で点検する。各段階で人がレビューし、デザインは最後に整えます。うまくいった生成手順自体は Skill 化して再利用すると効率的です。', category: '✍️ プロンプト・品質' },
        { q: 'NotebookLM など他のAIツールと Claude はどう併用できますか？', a: '役割分担で考えると整理しやすいです。Web 横断調査・出典付きレポートは Claude の Research、手元の大量資料を読ませて Q&A・図解化する用途は NotebookLM のような資料連動型ツール、調査→示唆→提案→スライド化の一連の流れは Claude（Chat / Artifact / Skills の組み合わせ）が向きます。「すべて Claude」ではなく、得意分野で使い分けるのが効率的です。', category: '💡 Claudeの基本' },
        { q: '自分のアカウントで何が使えますか？料金プランや使用量の上限は？', a: '利用できる機能・プラン・使用量の上限は、社内のライセンス契約によって決まります。最新の利用範囲や申請方法は社内ガイド（Notion）を確認するか、AI推進担当に問い合わせてください。プランや上限は変わることがあるため、本教材では具体的な数値は記載していません。', category: '💡 Claudeの基本' }
      ]
    }
  },

  // ============================================================
  // 第2回：Claude Code で成果物を作る
  // ============================================================
  {
    id: 'session-2',
    title: '第2回：Claude Code で成果物を作る',
    shortTitle: '第2回',
    description: 'Claude Code を使って、ツール・自動化・データ処理など一段上の成果物を自分で作れるようになる',
    target: '第1回 完了者',
    duration: '自分のペースで',
    prereq: '第1回 完了',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    objectives: [
      'Claude Code で何が作れるか（ツール／自動化／データ処理／複数ファイル編集）を説明できる',
      'Claude Code を Desktop（基本）で安全に始め、適切に指示を出せる',
      'データ処理・複数ファイル作業を任せて成果物にできる',
      'ツール／プロトタイプ／簡単なアプリを作れる',
      'CLAUDE.md でルールを固定し、Skills で手順を型化して、成果物の質と再現性を上げられる',
      'Subagents で作業を分担・並列化し、大きめの成果物づくりを効率化できる'
    ],
    coverGroups: [
      { label: '第1回の復習', icon: '🔁', sections: [0], objectives: ['第1回の要点を振り返り、第2回（Claude Code）の土台にする'] },
      { label: 'Claude Codeを知る・始める', icon: '🚀', sections: [1, 2], objectives: ['Claude Codeで何が作れるかを理解する', 'Desktopで安全に始め、適切に指示できる'] },
      { label: '成果物を作る', icon: '🛠️', sections: [3, 4], objectives: ['データ処理・複数ファイル作業を任せる', 'ツール・プロトタイプ・アプリを作る'] },
      { label: '質を上げ、使いこなす', icon: '✅', sections: [5, 6, 7], objectives: ['CLAUDE.md／Skillsで質と再現性を固定する', 'Subagentsで分担・並列化し効率化する', '実践TIPSと立て直し方を押さえる'] },
      { label: 'インストールガイド', icon: '📦', appendix: true, sections: [9], objectives: ['Claude を Desktop / CLI / IDE でインストールできる'] }
    ],
    sections: [

      // ========================================
      // 第1回の復習
      // ========================================
      {
        title: '🔁 第1回の復習',
        type: 'lecture',
        content: `
          <h3>このセクションのゴール</h3>
          <p>第1回で身につけた「初速の出し方」と「成果物の作り方」を振り返り、第2回（Claude Code で成果物を作る）へつなげます。</p>

          <h3>Chatが全ての土台</h3>
          <p>Cowork・Claude Code も土台は Chat。まず Chat を使いこなすことがすべての基本です。</p>

          <div class="agent-team">
            <div class="agent-team-lead">
              <span class="at-icon">💬</span>
              <div class="at-body"><strong>基盤は Chat</strong><span>まず Chat で対話。Cowork・Claude Code も根っこはここ</span></div>
            </div>
            <div class="agent-team-down">↓ ここから3つの実践が広がる</div>
            <div class="agent-team-row">
              <div class="agent-team-member"><span class="at-icon">🧠</span><strong>モデル選択</strong><span>Opus／Sonnet／Haikuでトークン量を調整</span></div>
              <div class="agent-team-member"><span class="at-icon">📐</span><strong>プロンプト3要素</strong><span>前提・タスク・ルールで出力を安定させる</span></div>
              <div class="agent-team-member"><span class="at-icon">✅</span><strong>出力はたたき台</strong><span>確認・修正が必須</span></div>
            </div>
          </div>

          <div class="tip-box">
            <p>💡 <strong>困ったらAIに聞く</strong> — 使い方に迷ったら、その使い方自体を Claude に聞けばよい。</p>
          </div>

          <h3>成果物につなげる</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">Office アドイン</div>
              <div class="grid-desc">Word / Excel / PowerPoint 上で直接 Claude を呼ぶ</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">Research</div>
              <div class="grid-desc">複数ソースを調べて根拠付きでまとめる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">Project</div>
              <div class="grid-desc">前提・資料を入れておけば毎回説明し直さなくてよい</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎨</div>
              <div class="grid-title">Artifact</div>
              <div class="grid-desc">診断ツールやポジショニングマップなどのプロトタイプを作る</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📂</div>
              <div class="grid-title">Cowork</div>
              <div class="grid-desc">作業フォルダごと渡し、ファイルを直接読み書き</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⏰</div>
              <div class="grid-title">Scheduled tasks</div>
              <div class="grid-desc">定型作業を時間で自動実行</div>
            </div>
          </div>

          <h3>第2回でやること</h3>
          <div class="visual-big-message">
            <div class="big-message-icon">🚀</div>
            <div class="big-message-text">Claude Code で成果物の幅を広げ、仕組みで品質を固定する</div>
            <div class="big-message-sub">第1回で「Chat の基本と成果物づくり」を押さえました。第2回はその先へ。</div>
          </div>
          <h4>🧭 知る・始める</h4>
          <div class="visual-steps" style="margin-top:16px;">
            <div class="visual-step-item">
              <div class="step-marker">2-1</div>
              <div class="step-body">
                <div class="step-title">何ができるか知る</div>
                <div class="step-desc">AIエージェントとは何かを理解し、Claude Code で何が作れるか（ツール／自動化／データ処理／複数ファイル編集）を押さえる。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2-2</div>
              <div class="step-body">
                <div class="step-title">準備する</div>
                <div class="step-desc">Desktop（基本）で作業用フォルダを切り、目的・変更対象・禁止事項・完了条件を含めた安全な指示の出し方を押さえる。</div>
              </div>
            </div>
          </div>

          <h4>🏗️ 作る</h4>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">2-3</div>
              <div class="step-body">
                <div class="step-title">データ処理を任せる</div>
                <div class="step-desc">複数 Excel / CSV の集計・複数議事録の整理・フォルダ横断の分類など、手作業で時間がかかる「集める・整える・まとめる」を委任する。自分は分析・判断に集中できる。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2-4</div>
              <div class="step-body">
                <div class="step-title">ツールを作る</div>
                <div class="step-desc">第1回の Artifact（その場かぎり）を発展させて、保存・複数画面・データ読み書きに対応した繰り返し使えるツールを作る。診断ツール・市場規模シミュレーター・社内ミニツールが対象。</div>
              </div>
            </div>
          </div>

          <h4>🔒 質を固定する</h4>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">2-5</div>
              <div class="step-body">
                <div class="step-title">CLAUDE.md・Skills・MCPを揃える</div>
                <div class="step-desc">CLAUDE.md でルールを常時読み込ませ、Skills で手順を型化し、MCP で社内データを接続する。3つが揃うと依頼文は短くなり、毎回同じ品質の成果物が返ってくる。</div>
              </div>
            </div>
          </div>

          <h4>🚀 使いこなす</h4>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">2-6</div>
              <div class="step-body">
                <div class="step-title">リサーチ・企画に広げる</div>
                <div class="step-desc">Subagents で調査・実装・レビューを分担・並列化する。競合3社を観点別に同時調査したり、発散役と評価役を分けてアイデアを選別したりと、リサーチや企画の幅も広がる。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2-7</div>
              <div class="step-body">
                <div class="step-title">小ワザ・立て直し方を覚える</div>
                <div class="step-desc">スラッシュコマンドや小ワザで作業を速くし、うまく動かないときは「強い指示」より「準備に戻る」——立て直し方を身につける。</div>
              </div>
            </div>
          </div>
        `
      },

      // ========================================
      // 2-1: Claude Code とは／何が作れるか
      // ========================================
      {
        title: '2-1. Claude Code とは／何が作れるか',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>第1回では Artifact（プロトタイプ）と Cowork（ローカルフォルダでのファイル作業）を学びました。Claude Code は、これらをさらに広げて<strong>データ処理・複数ファイル編集・再利用できるツール作成</strong>まで任せられる作業環境です。まずは「何ができるのか」を地図として押さえます。</p>

          <h3>そもそも「AIエージェント」とは</h3>
          <p>これまでの Chat は「相談役」（聞けば答えてくれる）でした。<strong>エージェントは、仕事を任せられる「相棒」</strong>です——ゴールを伝えると、自分で段取りを考え、必要な道具を使い、最後の成果物まで仕上げてくれます。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🧭</div>
              <div class="grid-title">段取りを考える</div>
              <div class="grid-desc">ゴールから「何をすべきか」を自分で計画する。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⏳</div>
              <div class="grid-title">自律的に進める</div>
              <div class="grid-desc">複数のステップを続けて実行する。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧰</div>
              <div class="grid-title">道具を使って完結</div>
              <div class="grid-desc">検索・ファイル操作などを組み合わせて仕上げる。</div>
            </div>
          </div>

          <p>言葉だけだとピンと来ないので、よくある場面で比べてみる。「明日の企画書、構成案と裏付け調査をお願い」と頼んだとき——</p>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">相談役（これまで）</div>
              <h4>💬 きれいな構成案を返して終わり</h4>
              <p>「完璧な構成案です。あとはご自身で調査して、資料に仕上げてください」——アイデアはくれるが、手を動かすのは結局こちら。</p>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">相棒（エージェント）</div>
              <h4>🤝 調べて、書いて、資料まで仕上げる</h4>
              <p>ゴールから自分でやることリストを立て、調べ、本文を書き、資料の形にして手元に出す。こちらは出てきたものを確認するだけ。</p>
            </div>
          </div>
          <p>同じ「お願い」でも、返ってくるのが<strong>「下書きのタネ」</strong>か<strong>「ほぼ仕上がった成果物」</strong>かが違う。これがエージェントの正体。</p>

          <div class="visual-highlight-card">
            <p><strong>コパイロット → エージェント</strong>：人が主役で AI が横で補助する使い方から、<strong>任せて、出てきた結果を確認する</strong>使い方へ。Claude Code（と Cowork）は、この「任せられるエージェント」の代表例です。</p>
          </div>

          <h4>“ひと続きの作業”を一気に任せる、とはこういうこと</h4>
          <p>たとえば「この案件フォルダの問い合わせメモから、よくある相談内容を集計して、傾向を1枚の説明資料にまとめて」と頼むと、エージェントは指示を分解して順番にこなします。</p>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">段取りを立てる</div>
                <div class="step-desc">ゴールから「メモを読む→相談内容を分類→集計→資料化」とやることリストを自分で組む。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">道具を使い分けて進める</div>
                <div class="step-desc">フォルダのファイルを読む・表に集計する・資料に書き出す、と必要な手を順に動かす。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">成果物まで仕上げて差し出す</div>
                <div class="step-desc">ひとつの依頼で、集計表と説明資料という“仕上がり”まで作って手元に出す。</div>
              </div>
            </div>
          </div>
          <p><strong>ゴールを1回伝えれば、間の手順はエージェントが自分で埋めてくれる</strong>——上の3つの力（段取り・自律・道具）が、実際の作業ではこう1本の流れになります。</p>

          <div class="tip-box">
            <strong>💡 “依頼力”が人間側のスキル</strong><br>
            「AI に何を任せられるか」を知っているほど、頼める仕事の幅が広がります。
          </div>

          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">役割分担</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">担当</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">🧑 人間</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">ゴールを決める／出てきた成果物を確認し、採用・修正・やり直しを最終判断する</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">🤖 エージェント</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">段取り・道具の操作・仕上げまでの“間の作業”を進める</span>
            </div>
          </div>

          <h3>Claude Code とは</h3>
          <p>Claude Code は、<strong>ゴールを伝えるとファイルを直接読み書きして作業を進めてくれる</strong>環境です。コードやコマンドを自分で書く必要はありません。「このフォルダのデータを集計してレポートにして」「この試作ツールに保存機能を足して」のように、日本語で依頼するだけで、複数ファイルをまたいだ作業や成果物の作成まで進めてくれます。</p>

          <div class="visual-highlight-card">
            <p><strong>位置づけ</strong>：Chat（対話）・Cowork（ローカルフォルダでのファイル作業）の延長線上にあり、<strong>より大きく・繰り返し使える成果物</strong>を作るのが Claude Code です。第1回で触れた Artifact / Cowork が「入口」、Claude Code が「もう一歩先」と捉えてください。</p>
          </div>

          <h3>成果物作成の3つのレベル</h3>
          <p>Claude で成果物を作る手段は、複雑さに応じて使い分けます。</p>

          <div class="visual-mapping" style="--mapping-cols: auto 32px 1fr;">
            <div class="mapping-header" style="grid-template-columns: auto 32px 1fr;">
              <span class="mapping-from">レベル</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">使うもの → 作れるもの</span>
            </div>
            <div class="mapping-row" style="grid-template-columns: auto 32px 1fr;">
              <span class="mapping-from">簡易</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Artifact → 診断ツール、画面モック、シミュレーター（その場の試作）</span>
            </div>
            <div class="mapping-row" style="grid-template-columns: auto 32px 1fr;">
              <span class="mapping-from">中級</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Cowork → 手元のファイルを使った成果物（レポート、集計表）</span>
            </div>
            <div class="mapping-row" style="grid-template-columns: auto 32px 1fr;">
              <span class="mapping-from">高度</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Claude Code → データ処理、複数画面、保存・再利用できるツール</span>
            </div>
          </div>

          <h3>Claude Code で作れるもの</h3>
          <p>作れるものに共通するのは、<strong>保存できる・繰り返し使える・チームで共有できる</strong>という点です。「その場限り」だった作業を、何度でも使える仕組みに変えられます。</p>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">CSV / Excel 分析ツール</div>
              <div class="grid-desc">大量データを読み込み、集計・グラフ化・レポート生成を自動化</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📈</div>
              <div class="grid-title">簡易ダッシュボード</div>
              <div class="grid-desc">複数データソースを統合した KPI 表示画面を構築</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">複数ファイルの整理</div>
              <div class="grid-desc">散在するファイルを読み取り、分類・統合・レポート化</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🖥️</div>
              <div class="grid-title">プロトタイプの本格化</div>
              <div class="grid-desc">Artifact で作った試作品を、保存・複数画面対応に発展</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔧</div>
              <div class="grid-title">社内向けミニツール</div>
              <div class="grid-desc">見積計算、申請フォーム、チェックリストなど業務支援ツール</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">定型レポート生成</div>
              <div class="grid-desc">毎月の報告書を、テンプレートとデータから自動生成する仕組み</div>
            </div>
          </div>

          <div class="info-box">
            <p>🔍 Claude Code は“作る”だけでなく<strong>“調べる・考える”にも使えます</strong>。複数のエージェントで手分けして、<strong>リサーチや企画・アイデア出し</strong>を広く深く進められます（くわしくは 2-6）。</p>
          </div>

          <h3>Chat・Cowork・Claude Code の使い分け</h3>
          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">使い分け</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">向いている場面</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Chat</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">ファイルを貼って直してもらう。都度自分で貼り直し・受け取って配置する一回性のやりとり（1-4）</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Cowork</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">手元のファイル群（Word・Excel・PDF・画像）を読ませて整理・要約・成果物化する</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">Claude Code</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">プロジェクトフォルダ単位で、複数ファイルを横断した分析・ツール構築・自動化を行う</span>
            </div>
          </div>

          <div class="info-box">
            <p><strong>📦 まずは小さく</strong>：いきなり大きなツールを目指さず、第1回で作った Artifact を「保存できる形にする」など、小さな一歩から始めるのがコツです。次の 2-2 で、安全に始める準備を整えます。</p>
          </div>
        `
      },

      // ========================================
      // 2-2: Claude Code を始める準備
      // ========================================
      {
        title: '2-2. Claude Code を始める準備',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude Code の成果は<strong>最初の準備で大きく変わります</strong>。「どこで動かすか」を選び、作業用フォルダを切ることと安全な指示の型を押さえて、安心して任せられる状態を作ります。</p>

          <h3>1. どこで動かすか — Desktop / CLI / IDE</h3>
          <p>Claude Code はいろんなタッチポイントから使えます。<strong>自分の作業スタイルに合わせて選びましょう</strong>。</p>
          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">状況</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">推奨 — 理由</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">まず試す／ファイル中心で使う</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Desktop — 軽快で初心者向け。Cowork との切り替えもスムーズ</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">エディタで成果物を見ながら作業したい</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">IDE（VS Code / Cursor / JetBrains 拡張） — エディタ画面の中で作業が完結する</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">並列作業・自動化を求めるようになったら</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">CLI — 複数の Claude Code を同時に起動して、並行で進められる</span>
            </div>
          </div>
          <div class="info-box">
            <p>💡 <strong>CLI</strong>とは、黒い画面に文字を打って操作する「ターミナル」から呼び出す方法。同じ処理をまとめて自動で何度も動かすのが得意です。<strong>IDE</strong>とは、プログラムを書く人が使う専用の画面（エディタ）に Claude Code を組み込んで使う方法で、変更箇所を画面上で見ながら進められます。</p>
          </div>
          <p><strong>最初は Desktop から始めると迷いません</strong>。CLI や IDE は、並列作業や自動化を求めるようになってから検討すれば十分です。</p>

          <h3>2. 始める前の準備 — 作業用フォルダを切る</h3>
          <p>作業を始める前に、まず作業用フォルダを切る。元データを直接編集させないよう作業コピーをまとめておき、Claude Code に渡すのはこのプロジェクトフォルダにする。</p>

          <h3>3. 起動して最初の一歩</h3>
          <h4>Desktop で起動して作業フォルダを開く</h4>
          <p>作業用フォルダを切ったら、最初の起動で迷う方が多いポイントです。流れはシンプルで、次の4ステップです。</p>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">Claude デスクトップアプリを起動する</div>
                <div class="step-desc">インストール済みの Claude アプリを開きます（インストールは巻末の「付録. インストールガイド」を参照）。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">Claude Code を開く</div>
                <div class="step-desc">アプリのメニューから Claude Code を選びます（Cowork と同じ画面まわりから入れます）。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">作業フォルダを開く</div>
                <div class="step-desc">用意したローカルの作業用フォルダを指定します。Claude Code に渡すのは、この1つのフォルダです。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">最初の指示を1つ入れて試す</div>
                <div class="step-desc">いきなり大きな作業を頼まず、まず「このフォルダに何があるか教えて」と聞いて、つながりを確認します。</div>
              </div>
            </div>
          </div>
          <div class="example-box">
            <strong>📌 最初の1回はこう打つ</strong><br><br>
            上のステップ4「最初の指示」は、いきなり作業を頼むのではなく<strong>「まず中身を見てもらう」</strong>1文から始めると安全です。つながりの確認と、Claude が何を読めるかの把握を同時にできます。<br><br>
            <strong>例：</strong>「このフォルダに何のファイルがあるか、一覧と内容の概要を教えて。まだ何も変更しないで。」<br><br>
            これは新しいメンバーに仕事を頼むとき、いきなり成果物ではなく、まず「手元の資料に何があるか、ざっと見て教えて」と状況把握から入るのと同じです。実際の作り方（計画の出させ方や範囲の絞り方）は、このあとの「4. 安全な指示の出し方」と 2-3 で扱います。
          </div>

          <h4>最初に必ず出る「許可しますか？」の答え方</h4>
          <p>起動して最初の指示を出すと、Claude Code は「このファイルを読んでいいですか？」「変更していいですか？」と、作業のたびに<strong>確認ダイアログ</strong>を出します。これは暴走を防ぐ安全装置なので、止まったと勘違いせず落ち着いて答えれば大丈夫です。選択肢は基本2つです。</p>
          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">ボタン</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">意味と使い分け</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">1回だけ許可</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">この1回だけ実行を認める。次の作業ではまた確認が出る。中身をよく見てから進めたいときに</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">常に許可</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">同じフォルダ内の同種の操作（読み込みなど）は次回から確認なしで進む。安全だと納得できた操作だけに使う</span>
            </div>
          </div>
          <p>最初は確認が何度も出て戸惑いますが、「常に許可」を押した操作はその作業フォルダ内では次から省かれ、だんだんスムーズになります。<strong>迷ったら「1回だけ許可」を選べば安全です</strong>。作業フォルダの外を触ろうとしたときほど、中身を確かめてから答えましょう。</p>

          <h3>4. 安全な指示の出し方</h3>
          <p>Claude Code は強力ですが、指示が曖昧だと意図しない変更を行うことがあります。以下の5点を意識して指示を出しましょう。</p>

          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">目的と成果物を最初に伝える</div>
                <div class="step-desc">「何のために」「最終的に何を出すか」を最初の指示で言語化します。曖昧なまま依頼すると Claude も迷走します。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">変更対象を明確にする</div>
                <div class="step-desc">「○○ファイルの△△の部分を修正して」のように、作業範囲を具体的に伝えます。「全体を良くして」のような曖昧な指示は避けてください。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">禁止事項を明示する</div>
                <div class="step-desc">「○○は変更しないで」「既存のデータは消さないで」のように、触ってほしくない部分を先に伝えます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">完了条件を決めておく</div>
                <div class="step-desc">「これが満たされたら完了」とする条件を最初の指示に含めます。レビュー基準にもなります。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">5</div>
              <div class="step-body">
                <div class="step-title">小さな単位で進める</div>
                <div class="step-desc">一度に大きな変更を依頼せず、「まず○○を作って → 確認 → 次に△△を追加して」と段階的に進めます。</div>
              </div>
            </div>
          </div>

          <div class="warning-box">
            <p><strong>Claude Code は「手を動かすアシスタント」であり「責任者」ではない</strong></p>
            <p>Claude Code が生成・修正したファイルの最終責任は自分にあります。「Claude Code がやったから大丈夫」ではなく、実際に動かして結果を確認し、責任を持つ姿勢は他の機能と同じです。特にデータの正確性と、既存部分が壊れていないかは重点的にチェックしてください。</p>
          </div>

          <div class="info-box">
            <p><strong>📦 次は実際に作る</strong>：準備が整ったら、2-3 でデータ処理・複数ファイルの成果物を、2-4 でツール・プロトタイプを作っていきます。</p>
          </div>
        `
      },

      // ========================================
      // 2-3: 成果物を作る①：データ処理・複数ファイル
      // ========================================
      {
        title: '2-3. 成果物を作る①：データ処理・複数ファイル',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>まずは Claude Code が特に得意な<strong>データ処理と複数ファイルの横断作業</strong>から。</p>
          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">担当</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">役割</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">🤖 Claude Code</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">集める・整える・まとめる（下ごしらえ）</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">🧑 自分</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">分析・判断（価値を出す仕事）</span>
            </div>
          </div>

          <h3>どんな成果物が作れるか</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">複数アンケート・調査データのクロス集計</div>
              <div class="grid-desc">設問ごと・セグメント別に集計し、自由回答はカテゴリに分類して比較表にまとめる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">インタビュー逐語録の整理</div>
              <div class="grid-desc">複数の逐語録を読み、論点・発言を抽出して一覧に整理</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">競合IR・財務データの横断比較</div>
              <div class="grid-desc">複数社の開示情報を統合し、比較表を自動生成</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📄</div>
              <div class="grid-title">定型調査レポートの生成</div>
              <div class="grid-desc">テンプレートとデータを渡し、定例の調査レポートドラフトを生成</div>
            </div>
          </div>

          <h3>作る流れ</h3>
          <p>2-2 の準備・安全な指示を、実際の作業手順に落とすと次のようになります。</p>

          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">目的と成果物を1行で伝える</div>
                <div class="step-desc">「このフォルダの月次売上CSVを統合して、拠点別の集計表（Excel）を作る」のように、ゴールを最初に渡します。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">対象範囲を限定する</div>
                <div class="step-desc">「対象は ◯◯フォルダの CSV だけ。元ファイルは変更せず、新しいファイルに出力して」と範囲と禁止事項を明示します。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">計画を出させてから実装</div>
                <div class="step-desc">「まず実装せず、読み込むファイルと集計方針を説明して」と先に計画を確認し、認識を合わせてから進めます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">出力を動作確認する</div>
                <div class="step-desc">出来上がった成果物を開き、数値が元データと合っているか、抜け漏れがないかを自分で確認します。</div>
              </div>
            </div>
          </div>

          <h3>活用例：アンケート・調査データを集計する</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">📁</div>
              <div class="step-body">
                <div class="step-title">データを作業フォルダに置く</div>
                <div class="step-desc">元ファイルのコピーを作業用フォルダに入れる。元データを直接編集させないための準備。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">💬</div>
              <div class="step-body">
                <div class="step-title">統合・集計を依頼</div>
                <div class="step-desc">「これらを統合して、設問ごと・セグメント別にクロス集計し、自由回答は主要カテゴリに分類して比較表にして」。まず計画を出させてから実装させると安全。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">💾</div>
              <div class="step-body">
                <div class="step-title">新ファイルとして保存</div>
                <div class="step-desc">「集計表を新しいファイルとして保存して」。元データのコピーは変更せず、成果物は別ファイルに出力させる。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">✅</div>
              <div class="step-body">
                <div class="step-title">元データと照合して報告書へ</div>
                <div class="step-desc">数値・金額・固有名詞は元データと必ず照合する。特に顧客データ・アンケート結果は慎重に確認してから使う。</div>
              </div>
            </div>
          </div>

          <div class="warning-box">
            <p><strong>元データは作業コピー・出力は必ず人が確認</strong></p>
            <p>Claude Code はファイルを直接書き換えられます。<strong>元データのコピーを入れた作業用フォルダ</strong>で進め、特に数値・金額・固有名詞は元データと照合してから使ってください。顧客データ・アンケート結果・機密資料は特に慎重に扱います。</p>
          </div>
        `
      },

      // ========================================
      // 2-4: 成果物を作る②：ツール・プロトタイプ・アプリ
      // ========================================
      {
        title: '2-4. 成果物を作る②：ツール・プロトタイプ・アプリ',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>データ処理の次は「動くもの」を作ります。第1回の Artifact（プロトタイプ）の延長で、Claude Code なら<strong>保存できて・複数画面があって・繰り返し使えるツール</strong>に発展させられます。ツールにすると、<strong>クライアントとの認識合わせが速くなり、同じ仕組みを案件をまたいで使い回せます</strong>。</p>

          <h3>Artifact と Claude Code の違い</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">Artifact（第1回 1-11）</div>
              <ul>
                <li>その場で動く試作品</li>
                <li>1画面・データ保存なし</li>
                <li>認識合わせ・たたき台に最適</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Claude Code</div>
              <ul>
                <li>ファイルとして保存・再利用できる</li>
                <li>複数画面・データの読み書きに対応</li>
                <li>社内ミニツールとして継続利用できる</li>
              </ul>
            </div>
          </div>

          <h3>作れるツールの例</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🩺</div>
              <div class="grid-title">セグメンテーション診断ツール</div>
              <div class="grid-desc">回答すると顧客セグメントやブランド適合度のスコアとアドバイスが出る</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧮</div>
              <div class="grid-title">市場規模・価格シミュレーター</div>
              <div class="grid-desc">TAM/SAM/SOM を算出。価格弾力性シミュレーションにも</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">競合比較ダッシュボード</div>
              <div class="grid-desc">複数社の価格・機能・シェアをグラフで一覧表示</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🗺️</div>
              <div class="grid-title">ポジショニングマップ生成ツール</div>
              <div class="grid-desc">2軸を入力すると、競合・自社の位置づけを可視化</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📈</div>
              <div class="grid-title">NPS・認知度トラッカー</div>
              <div class="grid-desc">定点調査の結果を時系列で入力し、推移をグラフ化</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">競合・市場情報の検索ツール</div>
              <div class="grid-desc">手元の調査資料一覧をキーワードで絞り込む検索</div>
            </div>
          </div>

          <h3>作り方のステップ</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">目的と使う人を伝える</div>
                <div class="step-desc">「誰が・何のために使うツールか」を伝えます。例：「営業が提案時に使う、簡単な市場規模算出ツール」。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">たたき台を生成させる</div>
                <div class="step-desc">まず動く最小版を作らせ、すぐ操作して確認します。一気に作り込ませないのがコツ。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">操作して修正を繰り返す</div>
                <div class="step-desc">「項目を増やして」「結果をグラフにして」と、操作しながら段階的に育てます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">4</div>
              <div class="step-body">
                <div class="step-title">ファイルとして保存・共有する</div>
                <div class="step-desc">完成したツールをファイルに保存。ブラウザで開くだけで使える形にして共有します。</div>
              </div>
            </div>
          </div>

          <div class="warning-box">
            <p><strong>「試作品・社内ツール」であり本番システムではない</strong></p>
            <p>Claude Code で作るのは、認識合わせや社内業務を支える<strong>試作品・ミニツール</strong>です。多人数で使う本番システムや、個人情報・機密データを扱う仕組みは、セキュリティ・運用の設計が別途必要です。クライアントに見せる際は「試作品です」と明記しましょう。</p>
          </div>

          <div class="tip-box">
            <strong>💡 まずは Artifact の発展から</strong><br>
            第1回で作った Artifact の試作品を「保存できる形にして」と Claude Code に頼むのが、いちばん入りやすい第一歩です。
          </div>
        `
      },

      // ========================================
      // 2-5: AIを“自分仕様”にする道具（CLAUDE.md・Skills・MCP）
      // ========================================
      {
        title: '2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>成果物を繰り返し作るようになると、<strong>毎回品質がブレない仕組み</strong>が欲しくなります。ここでは質と再現性を支える道具 — CLAUDE.md（ルール固定）、Skills（手順の型化）、MCP / Connectors（必要なデータの接続） — を押さえます。</p>

          <h3>まず全体像 — 3つの道具の役割分担</h3>
          <p>3つの道具はどれも、AI に情報・ルール・データを渡して<strong>”自分仕様”</strong>にするための道具です。役割の違いは、料理にたとえるとつかみやすくなります。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📏</div>
              <div class="grid-title">CLAUDE.md ＝ 守る作法</div>
              <div class="grid-desc"><span class="grid-badge" style="background:var(--primary);color:#fff;font-size:10px;padding:2px 8px;border-radius:99px;display:inline-block;margin-bottom:6px;">常に読み込まれる</span><br>例：文体・体裁・禁止事項<br>🍳 店の決まり</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📖</div>
              <div class="grid-title">Skills ＝ レシピ＋道具箱</div>
              <div class="grid-desc"><span class="grid-badge" style="border:1px solid var(--primary);color:var(--primary);font-size:10px;padding:2px 8px;border-radius:99px;display:inline-block;margin-bottom:6px;">呼ばれたときに動く</span><br>例：議事録の型・週報づくり<br>🍳 レシピ本と調理道具</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🛒</div>
              <div class="grid-title">MCP ＝ 材料の取り寄せ</div>
              <div class="grid-desc"><span class="grid-badge" style="border:1px solid var(--primary);color:var(--primary);font-size:10px;padding:2px 8px;border-radius:99px;display:inline-block;margin-bottom:6px;">呼ばれたときに動く</span><br>例：Notion・Slack<br>🍳 材料の買い出し</div>
            </div>
          </div>

          <div class="info-box">
            <p>常に守るルール（CLAUDE.md）の上で、型化した手順と道具（Skills）を使い、足りないデータ（MCP）を取り寄せる — この役割分担で質と再現性が固定されます。</p>
          </div>

          <h3>CLAUDE.md — 作業ルールを書いておく</h3>
          <p>CLAUDE.md は、Claude Code が自動で読み込む<strong>ルールファイル</strong>です。役割はシンプルで、「<strong>毎回説明し直していることを、書いておく場所</strong>」。会話のたびに同じ注意を繰り返さなくても、品質を一定に保てます。</p>

          <h4>何を書く？</h4>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">書くべきこと</div>
              <div class="grid-desc">プロジェクトの概要、ファイル構成、守るルール、禁止事項、出力形式のルール、レビュー基準</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">❌</div>
              <div class="grid-title">書かなくてよいこと</div>
              <div class="grid-desc">一般的な知識、一時的な作業指示（それはチャットで伝える）</div>
            </div>
          </div>

          <p>迷ったら「次の会話でも説明し直すか？」——し直すことなら書いておきましょう。</p>

          <h4>指示は "具体的" に書く</h4>
          <p>ルールは <strong>後から自分で確認できるくらい具体的</strong> に書くほど効きやすくなります。曖昧な表現は Claude が独自解釈し、毎回ブレる原因になります。</p>
          <div class="visual-mapping" style="grid-template-columns: auto 32px 1fr">
            <div class="mapping-header">
              <span class="mapping-from">曖昧な書き方</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">具体的な書き方（推奨）</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">結論から書く</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">冒頭1段落に"結論・根拠・アクション"の3点を入れる</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">要約をつける</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">先頭に3行以内のエグゼクティブサマリーを入れる</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">社名をきちんと書く</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">先方は常に「株式会社〇〇」と正式表記する</span>
            </div>
          </div>

          <div class="example-box">
            📄 <strong>案件用 CLAUDE.md の例（B社 中期計画支援）</strong> — 箇条書きで書くだけでよく、特別な書き方は要りません。<br>
            ・概要：B社（食品メーカー）の中期経営計画策定支援。成果物は経営会議向け資料<br>
            ・フォルダの使い方：01_受領資料／は読むだけ（変更しない）、02_作業中／にドラフト、03_納品／は確定版のみ<br>
            ・守るルール：です・ます調、結論から書く。社名は「B社」と表記<br>
            ・禁止事項：01_受領資料／の中のファイルは変更しない<br>
            ・出力形式：報告資料は1スライド1メッセージ
          </div>
          <p>こう書いておくと、2-2 の準備・指示の基本がファイルに固定され、毎回口頭で伝えずに済みます。</p>

          <h4>どこに置く？ — 置き場所は2段（自分用と案件用）</h4>
          <p>CLAUDE.md は1か所だけでなく、効かせたい範囲に応じて置き場所を選べます。大きく「自分用（グローバル）」と「案件用（プロジェクト）」の2段です。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🌐</div>
              <div class="grid-title">自分用（グローバル）</div>
              <div class="grid-desc">自分の PC の設定フォルダ（<code>.claude</code>）に1つ。自分が関わる<strong>すべての作業</strong>に共通で適用される。<br>例：結論から書く／です・ます調＝“自分の仕事の流儀”<br>場所は覚えなくてよい——<code>/memory</code> で開ける・「全体の CLAUDE.md はどこ？」と聞けば教えてくれる。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📁</div>
              <div class="grid-title">案件用（プロジェクト）</div>
              <div class="grid-desc">Claude Code で<strong>作業フォルダとして開くフォルダの直下</strong>に置く。その案件だけに適用される。<strong>チーム共有</strong>でき、全員が同じ前提で動ける。<br>例：クライアントは B社／成果物の体裁／レビュー観点</div>
            </div>
          </div>

          <div class="example-box">
            📁 Claude作業（親フォルダ）<br>
            &nbsp;&nbsp;├ 📁 A社_新商品案件<br>
            &nbsp;&nbsp;│&nbsp;&nbsp;└ 📄 CLAUDE.md　← この案件のルール<br>
            &nbsp;&nbsp;└ 📁 B社_調査案件<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ 📄 CLAUDE.md
          </div>

          <div class="info-box">
            <p><strong>両方とも効きます</strong>（重ねて読み込まれます）。内容がぶつかったときは、より具体的な<strong>案件用が優先</strong>と考えれば OK です。<br><strong>使い分けの目安</strong>：自分の流儀（結論先行・です・ます調など）は自分用、案件固有（クライアント名・体裁・レビュー観点）は案件用に。</p>
          </div>

          <div class="warning-box">
            <p>⚠️ <strong>社内ルール：作業フォルダは必ず自分の PC 上（ローカル）に作る</strong>（例：デスクトップに「Claude作業」親フォルダ → 案件ごとのサブフォルダ）。Google ドライブ・BOX などのクラウド共有には直接つながないでください（現状、これらは Claude から接続できないようになっています）。クラウド上のファイルは、いったんローカルの作業用フォルダにコピーして使います。</p>
          </div>

          <h4>どう作る？ — まず /init、確認は /memory</h4>
          <p><code>/init</code> も <code>/memory</code> も、いつもの依頼文と同じ<strong>チャット入力欄に打って送信するだけ</strong>です（デスクトップアプリでも使えます）。この <code>/</code> で始まる短い命令を「スラッシュコマンド」と呼びます（一覧は 2-7 で）。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">/init</div>
              <div class="grid-desc">案件フォルダを作業フォルダとして開いた状態で打つと、フォルダの中身から CLAUDE.md の<strong>たたき台を自動生成</strong>。ゼロから書かず、それを直すところから始められる。すでに CLAUDE.md がある場合は、上書きせずに改善点を提案してくれる。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">/memory</div>
              <div class="grid-desc">現在読み込まれている CLAUDE.md を<strong>一覧表示・編集</strong>。自分用／案件用のどちらに何が書いてあるか確認・追記できる。<strong>自動メモリの中身もここで確認・編集</strong>できる（Claude が保存したメモを読んだり、不要なものを削除したりできる）。</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>💡 コマンドを使わなくても OK</strong><br>
            「CLAUDE.md にまとめて」と頼めば、Claude がフォルダ内に作ってくれます。正確な置き場所は覚えなくて大丈夫です。
          </div>

          <div class="info-box">
            <p>📌 <strong>CLAUDE.md が反映されるのは「新しい会話」を始めたとき</strong>（会話＝Claude Code とのひと続きのやり取り。”セッション”とも呼びます）。途中で書き換えても、いま進行中の会話には反映されません。作ったら・変えたら、新しい会話で始めましょう。</p>
          </div>

          <h4>自動メモリ — Claude が自分でメモを取る</h4>
          <p>あなたが書く CLAUDE.md に加え、<strong>Claude 自身が作業中に学んだことをメモとして保存</strong>する仕組みが <strong>自動メモリ</strong> です。あなたの修正パターン・好み・作業ログを次のセッションに引き継ぎます。</p>

          <div class="visual-comparison">
            <div class="visual-comparison-card before">
              <div class="comp-label">CLAUDE.md</div>
              <h4>あなたが書くルール</h4>
              <p>守るべき方針・禁止事項・体裁。「毎回守ってほしいこと」を自分で明文化しておく。</p>
            </div>
            <div class="visual-comparison-card after">
              <div class="comp-label">自動メモリ</div>
              <h4>Claude が自ら書くメモ</h4>
              <p>あなたの修正パターン・好み・気づき。会話の中で学んだことを Claude が自動で蓄積していく。</p>
            </div>
          </div>

          <p>「毎回同じ修正をしている」と感じたら <strong>「これを覚えておいて」</strong> と伝えるだけで自動メモリに保存されます。<code>/memory</code> コマンドで中身をいつでも確認・編集できます。</p>

          <h4>応用 — ルールファイルは小さく分ける（役割別に）</h4>
          <p>規模が大きくなると、CLAUDE.md にすべて書くと長くなりすぎます。<strong>役割別のファイルに分け、CLAUDE.md からは「詳しくは○○.md を参照」と参照する</strong>設計が便利です。</p>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🎨</div>
              <div class="grid-title">DESIGN.md</div>
              <div class="grid-desc">見た目のトンマナ、配色、体裁。非デザイナーでも一定品質を保てる。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📝</div>
              <div class="grid-title">CONTENT.md</div>
              <div class="grid-desc">文体・用語・構成パターン・「書かないこと」のルール。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">REVIEW.md</div>
              <div class="grid-desc">レビュー観点と合格基準。誰がレビューしても同じ目線でチェックできる。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📈</div>
              <div class="grid-title">PROGRESS.md</div>
              <div class="grid-desc">作業の経過・決定事項・残タスク（次回への申し送り）。</div>
            </div>
          </div>

          <p>ほかに GLOSSARY.md（用語集）など、案件に応じて増やせます。</p>

          <div class="tip-box">
            <strong>📈 PROGRESS.md で進捗を引き継ぐ</strong><br>
            作業の経過を PROGRESS.md に残し、CLAUDE.md に「<strong>作業開始時に PROGRESS.md も読んで</strong>」と書いておくと、会話をまたいで、前回の続きから作業を引き継げます。
          </div>

          <div class="info-box">
            <p><strong>CLAUDE.md は「インデックス」、各 .md は「個別の章」</strong>と捉えると整理しやすくなります。1ファイルに全部書くと、どのルールを優先するか判断しづらくなります。</p>
          </div>

          <h3>Skills — よく使う手順を型にする</h3>
          <p>第1回 1-15 で学んだ Skills（よく使う手順の型）は、成果物づくりでも効きます。「議事録をこの体裁で」「この観点で集計して」といった<strong>手順・ルール・出力形式を型として保存</strong>し、呼び出すだけで同じ品質の成果物を作れます。</p>

          <h4>中身は4点セット — “手順”だけでなく“道具”も束ねられる</h4>
          <p>Skill には手順の指示書だけでなく、テンプレートや決まった処理といった“道具”も一緒に入れられます。実例で見るのが早いでしょう。たとえば毎週つくる<strong>「競合ウォッチ週報」 Skill</strong> なら、中身はこの4つです。</p>

          <div class="example-box">
            📦 Skill「競合ウォッチ週報」<br>
            &nbsp;&nbsp;├ 📋 指示書（中心） … 「競合の動きを整理 → 自社への示唆 → 次アクションを提案」の手順と、いつ使うか<br>
            &nbsp;&nbsp;├ 🧩 テンプレート・素材 … 週報のひな型（見出し・表の体裁・トンマナ）<br>
            &nbsp;&nbsp;├ ⚙️ 決まった処理 … 社名・製品名の表記ゆれを正式名称に一括統一<br>
            &nbsp;&nbsp;└ 📚 参照資料 … 自社の競合定義・用語集（必要なときだけ読む補足）
          </div>

          <p>呼び出すと、AI が柔軟に書く部分（示唆・提案）と、毎回ブレてはいけない部分（体裁・表記）が<strong>1回でまとめて</strong>仕上がる。指示文をコピペし直す手間も、体裁を整え直す手間も消える。<strong>AIの柔軟さ＋決まった処理の正確さを両立</strong>できるので、品質が安定します。</p>

          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">いつもの手作業</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">Skill 化すると</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">前回の週報を探して指示を書き直す</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">Skill を呼ぶだけで手順とひな型が揃う</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">体裁・社名表記を毎回直す</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">決まった処理が毎回同じ品質で固定</span>
            </div>
          </div>

          <h4>いつ Skill にする？(3条件)</h4>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🔁</div>
              <div class="grid-title">繰り返し発生する</div>
              <div class="grid-desc">週次・案件ごとに同じ作業が発生する</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">手順が明確</div>
              <div class="grid-desc">「毎回このステップでやる」が言語化できる</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎚️</div>
              <div class="grid-title">品質基準がある</div>
              <div class="grid-desc">「これを満たせばOK」という判断軸がある</div>
            </div>
          </div>
          <p style="font-size:13px;color:var(--text-secondary);">この3つが揃う作業が Skill 向き。</p>

          <h4>どう作って育てる？ — まず指示文だけ、あとから道具を足す</h4>
          <p>最初から完成形を目指さなくてよい。<strong>まずは指示文（手順）だけ</strong>で作り、使いながら足りないものを足して育てる、の3ステップが現実的だ。プログラムを書く必要はない。</p>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">手順を文章で書く（これだけで動く）</div>
                <div class="step-desc">うまくいった依頼文を「やり方・順番・いつ使うか」として書き起こす。手書きせず「この手順を Skill にして」と Claude に頼めば下書きを作ってくれる。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">道具を足す</div>
                <div class="step-desc">体裁がブレるならテンプレートを、絶対に揺らしたくない処理（表記統一など）があれば決まった処理を、説明が長いなら参照資料を後付けで束ねる。束ねる作業も Claude に頼めばよい。ひな型ファイルを作業フォルダに置いて「この体裁をこの Skill のテンプレートとして組み込んで」「表記ゆれを直す処理を足して」と頼めば、中の仕組みは Claude が作ってくれる。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">使って直す</div>
                <div class="step-desc">実際に呼び出し、物足りない点を指示文に追記する。発動するか・品質・手間の3点を見ながら、何度か回すうちに「自分（自社）仕様」に育っていく。</div>
              </div>
            </div>
          </div>

          <div class="info-box">
            <p><strong>🔔 いつ使われる？ — 名指しが確実、合う依頼には自動でも</strong><br>
            どの Skill を使うかは、AI が依頼内容と各 Skill の説明文を見て<strong>自分で判断</strong>します。依頼文で<strong>Skill 名を名指し</strong>するのが確実（例：「競合ウォッチ週報の Skill で今週分を作って」）ですが、説明文に合う依頼なら名指ししなくても自動で使われることがあります。「作ったのに呼ばれない」ときは、まず説明文の「どんなときに使うか」を具体的にし、それでも不安なら名指ししてください。</p>
          </div>

          <h4>育てた Skill をチームに広げる</h4>
          <p>Skill の実体はファイル一式なので、<strong>そのまま人に配れます</strong>。渡す側はフォルダ一式を共有し、受け取る側は自分の環境に取り込むだけ——1-15 で触れた「属人化しがちな“うまいやり方”」が、チームの標準になります。次に紹介する当社のスキル集は、この共有を全社規模でやっている実例です。</p>

          <div class="toolkit-card">
            <div class="toolkit-head">🧰 Skills の実例 — 当社のスキル集「consulting-toolkit-800」</div>
            <p>コンサル業務のワークフロー（調査提案書・デスクリサーチ・インタビュー設計・議事録・報告書骨子・スライド構成 など）をまとめた<strong>当社製のスキル集（プラグイン）</strong>です。上で説明した「手順＋道具」を束ねたスキルの実例で、スライドのテンプレートや生成手順まで含まれています。</p>
            <a class="toolkit-link" href="https://github.com/eight-hundred-inc/consulting-toolkit-800" target="_blank">GitHub で見る ▸</a>

            <div class="proj-chart">
              <p class="proj-chart-title">プロジェクト体制図</p>
              <div class="proj-chart-row">
                <div class="proj-node proj-node--human">
                  <div class="proj-node-icon">👤</div>
                  <div><strong>プロジェクト責任者（人間）</strong><span>レビュー・意思決定・インタビュー</span></div>
                </div>
              </div>
              <div class="proj-chart-conn"><span class="proj-chart-conn-label">指示 ↕ レビュー</span></div>
              <div class="proj-chart-row">
                <div class="proj-node proj-node--pm">
                  <div class="proj-node-icon">⚙️</div>
                  <div><strong>project-manager</strong><span>ワークフロー管理・スキル呼び出し・進捗管理</span></div>
                </div>
              </div>
              <div class="proj-lower">
                <div class="proj-branch"></div>
                <div class="proj-agents">
                  <div class="proj-agent"><span class="proj-agent-role">ストラテジスト</span><span class="proj-agent-skill">interview-research-proposal</span><span class="proj-agent-desc">与件から調査提案書を作成</span></div>
                  <div class="proj-agent"><span class="proj-agent-role">リサーチャー</span><span class="proj-agent-skill">desk-research</span><span class="proj-agent-desc">論点に基づくデスクリサーチ</span></div>
                  <div class="proj-agent"><span class="proj-agent-role">インタビュー設計</span><span class="proj-agent-skill">interview-guide-creator</span><span class="proj-agent-desc">論点に対応した質問設計</span></div>
                  <div class="proj-agent"><span class="proj-agent-role">ドキュメンター</span><span class="proj-agent-skill">interview-minutes-creator</span><span class="proj-agent-desc">文字起こしから構造化議事録</span></div>
                  <div class="proj-agent"><span class="proj-agent-role">アナリスト</span><span class="proj-agent-skill">report-outline-creator</span><span class="proj-agent-desc">調査結果から報告書の骨子を設計</span></div>
                  <div class="proj-agent"><span class="proj-agent-role">スライドデザイナー</span><span class="proj-agent-skill">slide-structure-designer</span><span class="proj-agent-desc">ソースからスライド構成を設計</span></div>
                </div>
              </div>
            </div>

            <p class="toolkit-note">💡 使いたい環境を選んでインストールしてください。</p>
            <div class="toolkit-install">
              <h5>Ⓐ Web（claude.ai ブラウザ版）</h5>
              <div class="toolkit-copy">
                <code>eight-hundred-inc/consulting-toolkit-800</code>
                <button class="copy-btn" data-copy="eight-hundred-inc/consulting-toolkit-800">コピー</button>
              </div>
              <ol>
                <li>左上の「Customize」を開きます。</li>
                <li>左サイドバーの「個人用プラグイン」の横の「＋」→「プラグインを作成」→「マーケットプレイスを追加」（マーケットプレイス＝スキル集の配布元カタログ）を選びます。</li>
                <li>「URL」欄に上の文字列をそのまま貼り付けて「同期」を押します。</li>
                <li>一覧に出た <code>consulting-toolkit-800</code> を「インストール」します。</li>
              </ol>
            </div>
            <div class="toolkit-install">
              <h5>Ⓑ デスクトップアプリ</h5>
              <div class="toolkit-copy">
                <code>eight-hundred-inc/consulting-toolkit-800</code>
                <button class="copy-btn" data-copy="eight-hundred-inc/consulting-toolkit-800">コピー</button>
              </div>
              <ol>
                <li>左上の「Customize」を開きます。</li>
                <li>左サイドバーの「個人用プラグイン」の横の「＋」→「プラグインを作成」→「マーケットプレイスを追加」（マーケットプレイス＝スキル集の配布元カタログ）を選びます。</li>
                <li>「URL」欄に上の文字列をそのまま貼り付けて「同期」を押します。</li>
                <li>一覧に出た <code>consulting-toolkit-800</code> を「インストール」します。</li>
              </ol>
            </div>
            <div class="toolkit-install">
              <h5>Ⓒ CLI ／ IDE 拡張 — コマンドで入れる</h5>
              <p>チャット入力欄で、次の2つを順に実行します（VS Code / Cursor などの IDE 拡張も同じコマンドです）。</p>
              <div class="toolkit-copy">
                <code>/plugin marketplace add eight-hundred-inc/consulting-toolkit-800</code>
                <button class="copy-btn" data-copy="/plugin marketplace add eight-hundred-inc/consulting-toolkit-800">コピー</button>
              </div>
              <div class="toolkit-copy">
                <code>/plugin install consulting-toolkit@consulting-toolkit-800</code>
                <button class="copy-btn" data-copy="/plugin install consulting-toolkit@consulting-toolkit-800">コピー</button>
              </div>
            </div>
            <div class="toolkit-install">
              <h5>📁 個人のスキルを Claude Code でも使うには</h5>
              <p>Customize の「個人のスキル」（議事録レビューなどの単体スキル）は Chat・Cowork 専用で、Claude Code には出てきません。Claude Code でも使いたい場合は、スキルのフォルダ一式を自分の PC の設定フォルダ <code>~/.claude/skills/</code> にコピーします（Windows は <code>C:\\Users\\ユーザー名\\.claude\\skills\\</code>）。コピー後、Claude Code を再起動すれば <code>/スキル名</code> で呼び出せます。</p>
            </div>
            <div class="info-box">
              <strong>💡 インストール後に反映するには</strong><br>
              プラグインは<strong>起動時に読み込まれます</strong>。claude.ai / Chat / Cowork は、新しい会話を始めれば反映されます。Claude Code（デスクトップ／CLI）は、いったん<strong>終了して再起動</strong>すれば反映されます（PC の再起動までは不要です。CLI では終了せず今すぐ反映したいときは <code>/reload-plugins</code> を実行します）。
            </div>
          </div>

          <h3>MCP / Connectors — 必要なデータを接続する</h3>
          <p>成果物の質は「渡す情報の質」で決まります。MCP / Connectors を使うと、Notion・Slack などの<strong>社内情報を Claude に接続</strong>でき、自社の文脈を踏まえた成果物が作れます。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🔌</div>
              <div class="grid-title">正体はシンプル</div>
              <div class="grid-desc">claude.ai の設定にある「コネクタ」の正体が MCP。<strong>「Claude と外部サービスをつなぐ口」</strong>と理解すれば十分。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔗</div>
              <div class="grid-title">つなぎ方</div>
              <div class="grid-desc">デスクトップアプリの設定（コネクタ）から使うサービスを追加し、画面の案内に沿ってログインして許可する。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">確認</div>
              <div class="grid-desc">チャット入力欄で <code>/mcp</code> と打つと、現在接続中のサービス一覧が見られる。</div>
            </div>
          </div>

          <div class="visual-mapping">
            <div class="mapping-header">
              <span class="mapping-from">接続の原則</span>
              <span class="mapping-arrow"></span>
              <span class="mapping-to">ポイント</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">必要な情報だけ渡す</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">関係ない情報が多いとノイズになり、出力品質が下がる</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">適切な粒度で渡す</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">全部ではなく、関連する部分を選んで渡す</span>
            </div>
            <div class="mapping-row">
              <span class="mapping-from">権限・機密に注意</span>
              <span class="mapping-arrow">→</span>
              <span class="mapping-to">自分がアクセス権を持つ情報に限定。機密・権限外は不用意につながない</span>
            </div>
          </div>

          <div class="example-box">
            📌 例：社内の Notion を接続すれば、「先週の定例の議事メモを踏まえて論点を整理して」が、コピペなしの一度の依頼で通ります。<br>
            PC 上のフォルダなら接続は不要です——作業フォルダに置けばそのまま読めます（2-2）。
          </div>

          <div class="visual-highlight-card">
            <p><strong>CLAUDE.md も Skill も、チームの「品質基準書」になる</strong>：どちらも共有すれば、他のメンバーも同じルール・同じ手順で Claude Code を使え、成果物の品質が揃います。個人の工夫を、再現できる形に残していきましょう。</p>
          </div>
        `
      },

      // ========================================
      // 2-6: 使いこなす：Subagents（分担・並列）
      // ========================================
      {
        title: '2-6. 使いこなす：Subagents（分担・並列）',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>大きめ・複雑な成果物を効率よく作るための使いこなしを押さえます。中心は <strong>Subagents（作業の分担・並列化）</strong>。成果物づくりだけでなく、リサーチ・企画にも効きます。</p>

          <h3>Subagents — 作業を分担・並列化する</h3>
          <p>Subagents は、1つの大きなタスクを<strong>役割を分けた複数のエージェントに任せる</strong>仕組みです。「調べる人・作る人・チェックする人」を分けるイメージです。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">🔍</div>
              <div class="grid-title">調査担当</div>
              <div class="grid-desc">必要な情報やファイルの収集・整理を専門に担当</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔧</div>
              <div class="grid-title">実装担当</div>
              <div class="grid-desc">実際のファイル作成・修正・成果物づくりを担当</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">レビュー担当</div>
              <div class="grid-desc">成果物の品質チェック・抜け漏れ確認を担当</div>
            </div>
          </div>

          <h4>サブエージェントの動き方</h4>
          <p>1つの大きな仕事を、<strong>メインエージェント（親）</strong>が複数の<strong>サブエージェント（子）</strong>に手分けし、各担当が<strong>並列</strong>で動いて<strong>要約だけ</strong>をメインに返す——という仕組みです。あなたはゴールを渡すだけで、手分け〜統合の段取りはメインエージェントが組み立てます。確実に分担させたいときは、下のように一言頼むのが確実です。</p>
          <div class="agent-team">
            <div class="agent-team-lead result">
              <span class="at-icon">🧑</span>
              <div class="at-body"><strong>あなた（人間）</strong><span>ゴールを渡す。最後に成果を確認し、採否を判断する</span></div>
            </div>
            <div class="agent-team-down">↓ ゴールを渡す　　↑ 成果を受け取る</div>
            <div class="agent-team-lead">
              <span class="at-icon">🧠</span>
              <div class="at-body"><strong>メインエージェント（親）</strong><span>あなたと話す AI 本体。自分でサブに手分けし、戻ってきた要約を統合する</span></div>
            </div>
            <div class="agent-team-down">↓ 手分けして指示　　↑ 要約が戻る</div>
            <div class="agent-team-row">
              <div class="agent-team-member"><span class="at-icon">🔍</span><strong>調査担当</strong><span>情報を集める</span></div>
              <div class="agent-team-member"><span class="at-icon">🔧</span><strong>実装担当</strong><span>成果物を作る</span></div>
              <div class="agent-team-member"><span class="at-icon">✅</span><strong>レビュー担当</strong><span>品質を点検</span></div>
            </div>
            <div class="agent-team-parallel">サブエージェント（子）は並列で作業し、要約だけをメインエージェントに返す</div>
          </div>
          <p>調査・実装・レビューの担当は、メインエージェントが必要に応じて生成する<strong>“子”のエージェント</strong>。出ていって調べ・作り・点検し、要約を持ってメインに戻ります（調査のような独立した作業は並列で進み、レビュー担当は成果物が揃ってから動きます——この段取りもメインが組みます）。<strong>あなたが手分けや統合を指揮するのではなく、ゴールを渡せばメインエージェントが手分け〜統合までの段取りを組み立て</strong>、あなたは出てきた成果を確認・判断します。</p>

          <div class="info-box">
            <p><strong>💬 どう頼む？ — 一言入れるのが確実</strong><br>
            依頼文に「<strong>サブエージェントで手分けして</strong>」「<strong>並列で調べて</strong>」と一言入れます。大きな作業では Claude が自分で手分けすることもありますが、確実に使いたいときは言葉にして頼みます（2-5 の Skill の名指しと同じ発想です）。観点と役割を自分で指定するほど、狙いどおりに動きます。</p>
          </div>

          <h3>なぜ成果物づくりに強いのか</h3>
          <div class="visual-before-after">
            <div class="ba-item before">
              <div class="ba-label">1人（1エージェント）で抱える</div>
              <ul>
                <li>調査も実装もチェックも順番待ち</li>
                <li>大きい作業ほど時間がかかる</li>
                <li>自分のチェックだけだと抜けやすい</li>
              </ul>
            </div>
            <div class="ba-arrow">→</div>
            <div class="ba-item after">
              <div class="ba-label">Subagents で分担・並列</div>
              <ul>
                <li>調べる・作る・チェックを並行で進める</li>
                <li>大きい成果物を効率よく仕上げられる</li>
                <li>別視点のレビューで抜け漏れが減る</li>
              </ul>
            </div>
          </div>

          <div class="info-box">
            <p><strong>なぜ有効なのか（机の上の書類のたとえ）</strong>：1体の AI は“作業机”に限りがあり、調べた情報（書類）で机がいっぱいになると判断が鈍ります。サブエージェントに手分けさせ、各自が<strong>要約レポートだけを親エージェントに返す</strong>ようにすると、親の机が空いたままになり、広く・深く・抜け漏れ少なく仕上げられます。</p>
          </div>
          <div class="info-box">
            <p><strong>役割を分けると精度が上がる</strong>：同じ AI に「作って」と「批判して」を同時に頼むと、立場が混ざって批判が甘くなりがちです。役割を物理的に分けると、それぞれが本気で役目を果たします。</p>
          </div>

          <h3>使いどころ</h3>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📚</div>
              <div class="grid-title">大量ファイルの調査と実装を並行</div>
              <div class="grid-desc">参照資料の調査を進めながら、別エージェントが成果物を作り始める</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔎</div>
              <div class="grid-title">複数観点のレビューを同時に</div>
              <div class="grid-desc">「数値の正確性」「読みやすさ」など観点別に同時チェック</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔀</div>
              <div class="grid-title">調査→実装→レビューの分業</div>
              <div class="grid-desc">大きなタスクを役割ごとに分け、段取りよく仕上げる</div>
            </div>
          </div>

          <div class="info-box">
            <p><strong>💡 最初は1つの Claude Code で十分</strong>です。「分担した方が速い」と感じるほど作業が大きくなってきたら、Subagents を取り入れましょう。小さなタスクで無理に分ける必要はありません。</p>
          </div>

          <h3>成果物づくりだけじゃない — リサーチ・企画にも使える</h3>
          <p>Subagents（複数のエージェント）は“作る”だけでなく、<strong>“調べる・考える”でこそ威力を発揮します</strong>。1体では「1つの視点」「1つの机（一度に扱える情報量）」に限られますが、手分けすれば<strong>広さ</strong>と<strong>客観性</strong>を同時に手に入れられます。</p>

          <h4>🔍 リサーチの型：観点を分担して並行調査</h4>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">🔍</div>
              <div class="step-body">
                <div class="step-title">観点別に並列調査</div>
                <div class="step-desc">複数の担当が同時に異なる観点を調べる。1体では「1つの机」の情報量に限られるが、手分けすれば広く深く調査できる。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">🧠</div>
              <div class="step-body">
                <div class="step-title">親が統合</div>
                <div class="step-desc">各担当から要約だけを受け取り、メインエージェントが全体をまとめる。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">✅</div>
              <div class="step-body">
                <div class="step-title">別担当が検証</div>
                <div class="step-desc">抜けと根拠の弱い点をチェックする専任を立てる。調べた担当とは独立しているので批判が甘くならない。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">📄</div>
              <div class="step-body">
                <div class="step-title">1枚にまとめる</div>
                <div class="step-desc">広く深く、抜けの少ない成果物として完成する。</div>
              </div>
            </div>
          </div>
          <div class="prompt-copy">
            <span class="prompt-copy-label">そのまま使える例文</span>
            <p>競合3社を『価格・提供価値・顧客層』の3観点でサブエージェントに手分けして並列で調べて。統合したら、別の担当に抜けと根拠の弱い点をチェックさせ、最後に1枚の比較表にまとめて</p>
            <button class="copy-btn" data-copy="競合3社を『価格・提供価値・顧客層』の3観点でサブエージェントに手分けして並列で調べて。統合したら、別の担当に抜けと根拠の弱い点をチェックさせ、最後に1枚の比較表にまとめて">コピー</button>
          </div>

          <h4>💡 アイデアの型：発散役と評価役を分ける</h4>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">📚</div>
              <div class="step-body">
                <div class="step-title">成功パターンを調べる</div>
                <div class="step-desc">前例・成功事例を収集する。ゼロから発想するより、良い型を知ってから発散した方が質が上がる。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">💡</div>
              <div class="step-body">
                <div class="step-title">案を発散</div>
                <div class="step-desc">数を出すことに徹する。まず量。評価は次の担当に任せるので、この段階では絞らない。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">🎚️</div>
              <div class="step-body">
                <div class="step-title">評価役が採点</div>
                <div class="step-desc">発散とは別の担当が基準で採点・選別する。作り手と評価役を分けることで甘い自己評価を排除できる。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">🏆</div>
              <div class="step-body">
                <div class="step-title">上位案に絞る</div>
                <div class="step-desc">検討に値する案だけが残る。従来は複数AIに投げてコピペ統合していた工程が一度の依頼で通せる。</div>
              </div>
            </div>
          </div>
          <div class="prompt-copy">
            <span class="prompt-copy-label">そのまま使える例文</span>
            <p>新サービスの名称を考えたい。まず命名の成功パターンを調べ、次に案を20個発散し、別の評価役に『覚えやすさ・独自性・既存名との重複』で採点させて上位5案に絞って</p>
            <button class="copy-btn" data-copy="新サービスの名称を考えたい。まず命名の成功パターンを調べ、次に案を20個発散し、別の評価役に『覚えやすさ・独自性・既存名との重複』で採点させて上位5案に絞って">コピー</button>
          </div>

          <div class="info-box">
            <p><strong>カギは「独立した目」と「広さ」</strong>：調べる役と検証する役、作る役と選ぶ役を分けるほど、思い込み・抜け・身内びいきが減ります。広げたら<strong>一度まとめ、別のエージェントで検証する</strong>ひと手間で、最終アウトプットの質がぐっと上がります（従来は複数のAIに投げてコピペで手作業統合していた工程が、一度の依頼で通せます）。</p>
          </div>

          <div class="column-box">
            <div class="column-eyebrow">📎 コラム：思考フレームワークを Subagents に載せる</div>
            <p><strong>シックスハット（6つの帽子）</strong>は、物事を6つの視点で多角的に見る<strong>古典的な思考フレームワーク</strong>です。1体に丸ごと考えさせると賛成・反対の立場が混ざって判断が甘くなりますが、<strong>1つの視点＝1人の担当（サブエージェント）</strong>に分ければ、テーマを抜けなく検証できます。Subagents は、こうした「役割を分ける思考法」を自動で回す土台になります。</p>

          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">⚪️</div>
              <div class="grid-title">事実（白）</div>
              <div class="grid-desc">データ・客観的な情報だけを集める。「分かっていること／いないこと」を仕分ける担当</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔴</div>
              <div class="grid-title">感情（赤）</div>
              <div class="grid-desc">使う人・受け手がどう感じるか。直感的な好き嫌いや期待・不安を言語化する担当</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚫️</div>
              <div class="grid-title">リスク（黒）</div>
              <div class="grid-desc">弱点・懸念・失敗しうる点を厳しく指摘する担当。批判専門なので遠慮なく突っ込める</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🟡</div>
              <div class="grid-title">メリット（黄）</div>
              <div class="grid-desc">価値・うまくいく理由・得られる効果を前向きに洗い出す担当</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🟢</div>
              <div class="grid-title">新発想（緑）</div>
              <div class="grid-desc">代替案・別の切り口・改善アイデアを自由に発想する担当</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔵</div>
              <div class="grid-title">統括（青）</div>
              <div class="grid-desc">他の5人の結果を受け取り、全体を整理して結論にまとめる担当（＝あなたの統合役）</div>
            </div>
          </div>

          <p>使うときは、下のプロンプトの【テーマ】を検討対象に置き換えて Claude Code に渡します。</p>
          <div class="prompt-copy">
            <p class="prompt-text">【テーマ】について、6つの帽子（①事実 ②感情 ③リスク ④利点 ⑤新発想 ⑥全体整理）の役割に分け、それぞれ別の担当（サブエージェント）に並行で検討させてください。最後に「全体整理」役が結果を1本のレポートに統合し、機会・リスク・対応策・結論を整理してください。各担当は自分の視点に徹し、要約だけを返してください。</p>
            <button class="copy-btn" data-copy="【テーマ】について、6つの帽子（①事実 ②感情 ③リスク ④利点 ⑤新発想 ⑥全体整理）の役割に分け、それぞれ別の担当（サブエージェント）に並行で検討させてください。最後に「全体整理」役が結果を1本のレポートに統合し、機会・リスク・対応策・結論を整理してください。各担当は自分の視点に徹し、要約だけを返してください。">コピー</button>
          </div>

          <div class="info-box">
            <p><strong>なぜ役を分けると精度が上がるのか</strong>：同じ1体に「メリットも言って、でも厳しく批判して」と頼むと立場が混ざり、批判が甘くなります。視点ごとに担当を分けると、それぞれが本気で役目を果たすため、賛否・リスク・代替案がそろい、検証の精度が上がります。企画の評価・提案の事前レビュー・打ち手の比較などに向いています。</p>
          </div>
          </div>

          <h3>使う／使わないの見極め</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">使う</div>
              <div class="grid-desc">情報量が多く1つの会話では精度が落ちる／作業を並列に分けられる／違う視点が欲しい</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⏭️</div>
              <div class="grid-title">使わない</div>
              <div class="grid-desc">簡単・短い・手順が一直線の作業（過剰になるので単体の Claude Code でOK）</div>
            </div>
          </div>

          <div class="warning-box">
            <p>⚠️ 背景（前提）を渡さないと、たくさん動く分だけ的外れになりやすいです。目的・前提・判断基準を先に共有しましょう。</p>
          </div>

          <h3>Skills（2-5）との違いは？</h3>
          <p>Skills は「どうやるか」（手順の型）、Subagents は「誰が（何人で）やるか」（作業の分担）です。役割が違うので、組み合わせて使うこともできます。</p>

          <div class="visual-comparison">
            <div class="visual-comparison-card before">
              <div class="comp-label">Skills（2-5）</div>
              <h4>どうやるか — 手順の型</h4>
              <ul>
                <li>毎回同じ作業を型にしたいときに効く</li>
                <li>手順書・マニュアルを1人で見ながら作業するイメージ</li>
              </ul>
            </div>
            <div class="visual-comparison-card after">
              <div class="comp-label">Subagents（このセクション）</div>
              <h4>誰が（何人で）やるか — 作業の分担</h4>
              <ul>
                <li>大きい・複雑な作業を手分けしたいときに効く</li>
                <li>仕事を何人かに振って並行して進めてもらうイメージ</li>
              </ul>
            </div>
          </div>

          <div class="visual-flow">
            <div class="flow-step">
              <div class="flow-num">🧍</div>
              <div class="flow-label">ゴールを1つ渡す</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">🧠</div>
              <div class="flow-label">メインエージェント（親）が手分け</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">👥</div>
              <div class="flow-label">調査・実装・レビューが並列で動く</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="flow-num">📥</div>
              <div class="flow-label">要約を統合して報告</div>
            </div>
          </div>

          <div class="tip-box">
            <p>💡 組み合わせも可能です——Subagents の各担当が、自分の Skill を使って作業することもできます。</p>
          </div>
        `
      },

      // ========================================
      // 2-7: 実践TIPS・立て直し方
      // ========================================
      {
        title: '2-7. 実践TIPS・立て直し方',
        type: 'lecture',
        content: `
          <h3>このセクションのゴール</h3>
          <p>日々の Claude Code 作業を速くする<strong>実践 TIPS</strong>と、うまく動かない時の<strong>立て直し方</strong>を押さえます。すべてを覚える必要はありません、使えそうなものから取り入れてください。</p>

          <h3>実践 TIPS — 作業を速くする小ワザ</h3>
          <p>日々の Claude Code 作業で、覚えておくと効率が上がる小さな工夫です。<strong>すべてを覚える必要はありません</strong>。使えそうなものから取り入れてください。</p>

          <h4>スラッシュコマンドとは</h4>
          <p>チャット入力欄に打ち込む <code>/</code>（スラッシュ）で始まる短い命令です。2-5 で使った <code>/init</code>・<code>/memory</code>・<code>/mcp</code> もこれで、<strong>デスクトップアプリでも使えます</strong>。コマンドはバージョンで増減するので、正確な最新一覧は <code>/help</code> で確認してください。</p>

          <h4>会話が重くなったら — 2-6 の“作業机”を思い出す</h4>
          <p>会話が長くなると、机が書類（履歴）で埋まって動きが鈍くなります。次の3つのコマンドで手当てします。</p>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">👀</div>
              <div class="grid-title">/context</div>
              <div class="grid-desc">机の埋まり具合を見る</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🧹</div>
              <div class="grid-title">/compact</div>
              <div class="grid-desc">要点だけ残して机を片付ける（同じ作業を続けるとき）</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🆕</div>
              <div class="grid-title">/clear</div>
              <div class="grid-desc">全部下げてまっさらにする（別の作業に移るとき）</div>
            </div>
          </div>

          <h4>待ち時間は別の会話で並行できる</h4>
          <div class="visual-comparison">
            <div class="visual-comparison-card after">
              <div class="comp-label">✅ 安全な形</div>
              <ul>
                <li>📁 A社フォルダ ↔ 💬 会話A</li>
                <li>📁 B社フォルダ ↔ 💬 会話B</li>
              </ul>
              <p style="font-size:12px;color:var(--text-secondary);margin-top:6px;">案件＝フォルダ＝会話を 1対1に</p>
            </div>
            <div class="visual-comparison-card before">
              <div class="comp-label">⚠️ 避ける形</div>
              <ul>
                <li>💬 会話1 ＋ 💬 会話2</li>
                <li>↓</li>
                <li>📁 同じフォルダを同時変更</li>
              </ul>
              <p style="font-size:12px;color:var(--text-secondary);margin-top:6px;">互いに上書きし合う原因になる</p>
            </div>
          </div>

          <h4>小ワザ3選 — パスのコピー／Effort 設定／ESC 2回・↑キー</h4>
          <div class="visual-grid cols-3">
            <div class="visual-grid-item">
              <div class="grid-icon">📋</div>
              <div class="grid-title">パスのコピー（Windows / エクスプローラー）</div>
              <div class="grid-desc">右クリック →「パスのコピー」で選択ファイルの絶対パスをコピーし、チャット欄に貼ればフォルダ外のファイルも渡せる。Windows 11 では右クリックの標準メニューに出る（古い Windows では Shift を押しながら右クリック）。Mac は Opt + ⌘ + C が同じ役割。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎚️</div>
              <div class="grid-title">Effort 設定（思考の深さを調整）</div>
              <div class="grid-desc"><code>/effort</code> で切り替えられる。複雑な作業は深く、軽い作業はデフォルトで十分。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⌨️</div>
              <div class="grid-title">ESC 2回・↑キー（CLI / IDE 向け）</div>
              <div class="grid-desc">ESC 2回で直前の指示まで巻き戻して書き直す／↑キーで過去の指示を再利用。デスクトップ版にはない操作なので、入力欄で書き直せば OK。</div>
            </div>
          </div>

          <div class="info-box">
            <p><strong>📚 TIPS はあとから参照できます</strong>：拡張機能・上級の小ワザを含む全 TIPS は、自習モードの <a href="#" data-nav="tips">「TIPS集」ページ</a> にカテゴリ別・レベル別でまとまっています。研修中に全部覚える必要はありません。</p>
          </div>

          <h3>うまく動かない時の立て直し方</h3>
          <p>「もっと強い指示を出す」より「準備に戻る」のが効きます。</p>

          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">会話を片付ける</div>
                <div class="step-desc"><code>/context</code> で埋まり具合を確認 → <code>/compact</code> で要点だけ残して整理。これだけで改善することが多い。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">状況に応じた打ち手を選ぶ</div>
                <div class="step-desc">下の5枚から「今の状況に合うもの」を選ぶ。順番ではなく、状況次第で選びます。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">準備・指示の基本に立ち返る</div>
                <div class="step-desc">それでも長引くときは、<strong>2-2 の準備・指示の基本（作業フォルダ／目的と成果物／変更対象／禁止事項／完了条件）</strong>を整え直すのが近道。指示を強くするより前提を整え直す。</div>
              </div>
            </div>
          </div>

          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🛑</div>
              <div class="grid-title">まず、止めてよい</div>
              <div class="grid-desc">実行中に方向違いに気づいたら、停止ボタン（または ESC）でいつでも止めてかまわない。止めたら「今どこまで進んだ？」と確認してから打ち手を選ぶ。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">💬</div>
              <div class="grid-title">新しい会話で仕切り直す</div>
              <div class="grid-desc">会話が長くなると Claude も迷子になる。今の会話を閉じ、新しい会話の冒頭に「目的／いまの状況／残っている課題」を1段落で書いてから依頼し直す。<br>例：「目的は◯◯。△△まで完了。残りは□□。この前提で □□ だけ進めて」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✂️</div>
              <div class="grid-title">作業を1ステップに切る</div>
              <div class="grid-desc">「全部直して」をやめ、「まず◯◯だけ」と1つずつ頼み、結果を確認してから次へ進む。<br>例：「△△ファイルの ◯◯ だけ直して。終わったら報告して、次の指示を待って」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🎯</div>
              <div class="grid-title">対象ファイル・範囲を限定する</div>
              <div class="grid-desc">触ってよいファイルやフォルダを名指しし、「これ以外は読まない・変更しない」と禁止を明示する。渡す情報を絞るほど精度が上がる。<br>例：「対象は ◯◯フォルダの △△ だけ。ほかは読まず・変更しないで」</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🔎</div>
              <div class="grid-title">現状を棚卸しさせる</div>
              <div class="grid-desc">次の指示を出す前に「いまどうなっているか／何が問題か」を Claude に説明させ、自分の認識と合っているか確認する。ズレていたら正してから次の手へ。<br>例：「変更する前に、今このファイルがどうなっていて、何が問題か説明して」</div>
            </div>
          </div>

        `
      },

      // ========================================
      // 第2回のまとめ
      // ========================================
      {
        title: '🏁 第2回のまとめ',
        type: 'lecture',
        content: `
          <h3>このセクションのゴール</h3>
          <p>第2回は「<strong>Claude Code で成果物を作る</strong>」がテーマでした。要点を振り返ります。</p>

          <h3>今回の要点</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🚀</div>
              <div class="grid-title">Claude Code を知る・始める</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>何が作れるか</strong> — データ処理・複数ファイル・ツール・自動化。</li>
                  <li><strong>まず Desktop で</strong> — 作業用フォルダを切り、安全な指示の型（目的／変更対象／禁止事項／完了条件など）を押さえる。</li>
                </ul>
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🛠️</div>
              <div class="grid-title">成果物を作る</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>①データ処理・複数ファイル</strong> — 集める・整える・まとめるを任せる。</li>
                  <li><strong>②ツール・プロトタイプ</strong> — Artifact の延長で、保存・再利用できる形に。</li>
                </ul>
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">✅</div>
              <div class="grid-title">質を固定する道具</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>CLAUDE.md</strong> — ルールを固定。役割別ファイルに分けて参照。</li>
                  <li><strong>Skills / MCP</strong> — 手順を型化し、必要なデータを接続する。</li>
                </ul>
              </div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">⚡</div>
              <div class="grid-title">使いこなす</div>
              <div class="grid-desc">
                <ul>
                  <li><strong>Subagents</strong> — 調査・実装・レビューを分担／並列で効率化。</li>
                  <li><strong>実践TIPS・立て直し方</strong> — スラッシュコマンド・小ワザ／困ったら準備に戻る。</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>今日からやること（まず1つでOK）</h3>
          <div class="visual-grid cols-2">
            <div class="visual-grid-item">
              <div class="grid-icon">🚀</div>
              <div class="grid-title">Claude Code を Desktop で1回試す</div>
              <div class="grid-desc">作業用フォルダ＋小さなタスクから始める。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📊</div>
              <div class="grid-title">複数ファイルで成果物を1つ作る</div>
              <div class="grid-desc">手元のデータで集計やレポートの下書きを試す。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">🛠️</div>
              <div class="grid-title">Artifact をツールに発展させる</div>
              <div class="grid-desc">第1回の試作品を「保存できる形にして」と頼む。</div>
            </div>
            <div class="visual-grid-item">
              <div class="grid-icon">📏</div>
              <div class="grid-title">CLAUDE.md にルールを1つ書く</div>
              <div class="grid-desc">プロジェクトの前提・禁止事項を1行でも書いてみる。</div>
            </div>
          </div>

          <div class="tip-box">
            <strong>✏️ 手を動かして定着させる</strong><br>
            第2回の演習も「<strong>練習問題</strong>」ページにまとまっています（自習モード）。Desktop で実際に1つ作ってみるのがいちばんの近道です。
          </div>

          <h3>全体のまとめ</h3>
          <div class="visual-highlight-card">
            <p>第1回で「Chat の基本と成果物づくり」を押さえた。<br>第2回はその先——Claude Code で成果物の幅を広げ、仕組み（CLAUDE.md・Skills・MCP）で品質を安定させ、チームに展開する。困ったら <strong>TIPS集</strong> と <strong>FAQ</strong> を見直しながら、自分の業務で使えるものから取り入れていきましょう。</p>
          </div>
        `
      },
      {
        title: '付録. Claude インストールガイド（Desktop / CLI / IDE）',
        type: 'lecture',
        content: `
          <h3>このセクションで学ぶこと</h3>
          <p>Claude を使い始めるためのインストール手順です。まずは<strong>デスクトップアプリ</strong>、コマンド操作をしたい方は <strong>CLI</strong>、普段のエディタで使いたい方は <strong>IDE</strong> もどうぞ。</p>

          <div class="info-box">
            <p>💡 <strong>Windows で Claude Code を使うには <a href="https://git-scm.com/downloads/win" target="_blank">Git for Windows</a> が必要です</strong>（インストール時に案内が出ます）。Chat・Cowork だけなら不要。デスクトップ版・CLI版のどちらも同じです。</p>
          </div>

          <h3>A. デスクトップアプリ版（Mac / Windows）</h3>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title"><a href="https://claude.com/download" target="_blank" rel="noopener">claude.com/download</a> を開く</div>
                <div class="step-desc"><a href="https://claude.com/download" target="_blank" rel="noopener">公式ダウンロードページ</a>にアクセスします。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">自分の OS 版をインストール</div>
                <div class="step-desc">Mac / Windows から自分の環境に合うものをダウンロードしてインストールします。</div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">起動してログイン</div>
                <div class="step-desc">Anthropic アカウントでログインすれば完了です。</div>
              </div>
            </div>
          </div>
          <p>これで Chat・Cowork・Claude Code（Desktop）が使えます。非エンジニアの方はまずこれで OK です。</p>

          <div class="tip-box">
            <strong>💡 作った「.md」ファイルが開けない時（Windows）</strong><br>
            Claude / Claude Code は、調査結果やメモを <code>.md</code>（マークダウン）という形式で書き出すことがよくあります。Windows 標準ではダブルクリックしても開けないことがありますが、中身はただのテキストなので壊れているわけではありません。ファイルを右クリック →「プログラムから開く」→「メモ帳」を選べば、そのまま中身を読めます。なお Cowork でファイルを開くと、見やすく整形された状態で表示されます。
          </div>

          <h3>B. CLI 版（Claude Code をコマンドで）</h3>
          <p>PowerShell を開き、次の3つを順に実行します。</p>
          <div class="visual-steps">
            <div class="visual-step-item">
              <div class="step-marker">1</div>
              <div class="step-body">
                <div class="step-title">インストール</div>
                <div class="step-desc">
                  <div class="toolkit-copy" style="margin:8px 0 0;">
                    <code>irm https://claude.ai/install.ps1 | iex</code>
                    <button class="copy-btn" data-copy="irm https://claude.ai/install.ps1 | iex">コピー</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">2</div>
              <div class="step-body">
                <div class="step-title">インストール確認</div>
                <div class="step-desc">
                  バージョン番号が表示されれば成功。
                  <div class="toolkit-copy" style="margin:8px 0 0;">
                    <code>claude --version</code>
                    <button class="copy-btn" data-copy="claude --version">コピー</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="visual-step-item">
              <div class="step-marker">3</div>
              <div class="step-body">
                <div class="step-title">初回起動・ログイン</div>
                <div class="step-desc">
                  ブラウザが開くので Anthropic アカウントでログインする。
                  <div class="toolkit-copy" style="margin:8px 0 0;">
                    <code>claude</code>
                    <button class="copy-btn" data-copy="claude">コピー</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3>C. IDE 版（VS Code / Cursor / JetBrains などで使う）</h3>
          <p>普段使っているエディタ（IDE）の中から Claude Code を呼び出す方法です。コードや成果物を<strong>画面で見ながら作業でき、変更箇所（差分）も確認しやすい</strong>のが利点です。エディタに拡張機能として追加して使います。</p>
          <div class="info-box">
            <p>💡 <strong>Cursor</strong> でのセットアップ手順は、社内ガイド「<a href="https://app.notion.com/p/eight-hundred/309b14ae3bcd819e82d8c499446592fe?source=copy_link" target="_blank" rel="noopener">Cursor のセットアップ手順</a>」を参照してください。</p>
          </div>

          <div class="warning-box">
            <p>⚠️ 社内ネットワークで SSL エラー（接続できない）が出たら、社内セキュリティ（Zscaler）が原因のことがあります。対処の詳細は社内ガイド「<a href="https://app.notion.com/p/7a274acba8f4447e9b9b972e8b04839c" target="_blank">Claude Code インストール手順</a>」を参照してください。</p>
          </div>
        `
      }
    ],

    // ========================================
    // 第2回 クイズ（12問）
    // ========================================
    quiz: [
      {
        question: 'Claude Code で作れる成果物として、最も適切なのはどれですか？',
        options: [
          '画像生成や動画編集',
          'データ処理・複数ファイル編集・再利用できるツールなど、一段上の成果物',
          '対話による壁打ちと要約のみ',
          'クラウド上のメール送信'
        ],
        correct: 1,
        explanation: 'Claude Code は、Chat や Cowork の延長で、データ処理・複数ファイルの横断作業・保存できるツール作成といった高度な成果物づくりを任せられる環境です。'
      },
      {
        question: 'Artifact / Cowork / Claude Code の使い分けとして正しいのはどれですか？',
        options: [
          'Artifact は最も高度で、Claude Code は簡易的なツール',
          'Artifact はプロトタイプ、Cowork はローカルフォルダでのファイル作業、Claude Code は高度な処理・再利用できるツールに使う',
          '3つとも同じことができるが、インターフェースが違うだけ',
          'Claude Code は非エンジニア向け、Artifact はエンジニア向け'
        ],
        correct: 1,
        explanation: 'プロトタイプ（診断ツール、モック等）→ Artifact、ローカルフォルダでのファイル作業 → Cowork、データ処理や保存できるツール → Claude Code と、複雑さに応じて使い分けます。'
      },
      {
        question: 'Claude Code を初めて使うとき、まず選ぶ場所として推奨されるのはどれですか？',
        options: [
          'CLI（ターミナル）から始める',
          'Desktop から始める',
          'Web 版から始める',
          'いきなり複数を並列で使う'
        ],
        correct: 1,
        explanation: 'まずは Desktop から始めると迷いません。CLI や IDE は、並列作業や自動化を求めるようになってから検討すれば十分です。'
      },
      {
        question: 'Claude Code に安全に作業を任せるための準備・指示として適切でないのはどれですか？',
        options: [
          '作業用フォルダを切り、元データの直接編集を避ける',
          '目的と成果物・禁止事項・変更対象・完了条件を整える',
          'できるだけ多くのファイルを一度に渡し、全体を任せる',
          '「これが満たされたら完了」という条件を先に書き出す'
        ],
        correct: 2,
        explanation: '基本は作業用フォルダを切り、目的と成果物・変更対象・禁止事項・完了条件を最初の指示に明示することです。範囲を絞らず全体を丸投げするのは、意図しない変更や迷走の原因になります。'
      },
      {
        question: 'Claude Code に修正を依頼する際、最も重要な安全策はどれですか？',
        options: [
          '一度に全ての修正を依頼して効率化する',
          '変更対象・禁止事項を明示し、小さな単位で段階的に進める',
          'Claude Code に全て任せて結果だけ確認する',
          'バックアップは不要（Claude Code が自動で管理する）'
        ],
        correct: 1,
        explanation: '曖昧な指示は意図しない変更を引き起こすリスクがあります。変更対象と禁止事項を明示し、小さな単位で進め、都度動作確認することが安全な進め方です。'
      },
      {
        question: '複数の CSV / Excel を Claude Code で集計する際、出力に対して必ず行うべきことは？',
        options: [
          '自動実行なので確認は不要',
          '出力された数値が元データと合っているか、自分で照合する',
          '元ファイルを直接上書きして保存する',
          'ファイル数が多いほど確認を省略してよい'
        ],
        correct: 1,
        explanation: 'Claude Code の出力も「初稿」です。特に数値・金額・固有名詞は元データと照合してから使います。元データはコピーを使い、直接上書きは避けます。'
      },
      {
        question: 'Claude Code でツールを作るとき、Artifact との違いとして正しいのはどれですか？',
        options: [
          'Artifact の方が保存・再利用に向いている',
          'Claude Code はファイルとして保存でき、複数画面やデータの読み書きに対応できる',
          '両者に違いはない',
          'Claude Code は1画面のモック専用'
        ],
        correct: 1,
        explanation: 'Artifact はその場の試作（1画面・保存なし）に向き、Claude Code は保存・複数画面・データの読み書きに対応した、繰り返し使えるツールづくりに向きます。'
      },
      {
        question: 'CLAUDE.md に書くべき内容として、最も適切なのはどれですか？',
        options: [
          '一般的な知識の解説',
          'プロジェクトの概要、ファイル構成、守るルール、禁止事項などの永続的なルール',
          'Claude への一時的な作業指示',
          'チームメンバーの個人情報'
        ],
        correct: 1,
        explanation: 'CLAUDE.md はプロジェクト固有の「作業ルールブック」です。永続的なルールを書き、一時的な作業指示はチャットで伝えます。長くなったら DESIGN.md / CONTENT.md などに分けて参照します。'
      },
      {
        question: 'Skills を成果物づくりに活かす考え方として正しいのはどれですか？',
        options: [
          'すべての作業を Skill にすべきだ',
          '繰り返し発生し・手順が明確で・品質基準がある作業を型にし、発動するか・品質・手間の3点を見ながら使って育てる',
          'Skill は一度作ったら変更してはいけない',
          'Skill は Claude Code では使えない'
        ],
        correct: 1,
        explanation: 'Skills は「繰り返し × 手順が明確 × 品質基準あり」が揃う作業で効果的です。作って終わりにせず、発動するか・品質・手間の3点で確認しながら育てます。'
      },
      {
        question: 'Subagents（作業の分担・並列化）が特に役立つのはどんな場面ですか？',
        options: [
          'ごく小さな1ファイルの修正',
          '大きめ・複雑な成果物で、調査・実装・レビューを分担／並列で進めたいとき',
          '対話で雑談したいとき',
          'Claude を使わずに手作業したいとき'
        ],
        correct: 1,
        explanation: 'Subagents は「調べる人・作る人・チェックする人」を分け、大きい成果物を効率よく仕上げるのに役立ちます。小さな作業は1つの Claude Code で十分で、無理に分ける必要はありません。'
      },
      {
        question: 'Claude Code が作った成果物のレビュー責任について、正しい認識はどれですか？',
        options: [
          'Claude が作ったものは AI が保証するのでレビュー不要',
          'CLAUDE.md や Skills を使えばレビューは省略できる',
          '最終的な確認と承認は人間が行い、責任を持つ',
          'Subagents のレビュー担当に任せれば人間の確認は不要'
        ],
        correct: 2,
        explanation: 'Claude Code の出力は常に「初稿」です。CLAUDE.md・Skills・Subagents で品質を安定させても、最終的な確認と承認は人間が行います。'
      },
      {
        question: 'Claude Code がうまく動かないとき、まず立ち返るべき考え方はどれですか？',
        options: [
          'とにかく「ちゃんとやって」と強い言葉で何度も指示し直す',
          '「強い指示」より「準備に戻る」——止める／新しい会話で仕切り直す／1ステップに切る／範囲を限定する／棚卸しさせる、の打ち手から状況に応じて選ぶ',
          'すぐにあきらめて手作業に切り替える',
          'バックアップを取らずに、大きな変更をまとめて一気に依頼し直す'
        ],
        correct: 1,
        explanation: '打ち手は順番ではなく、状況に応じて選びます。長引くときは 2-2 の準備・指示の基本を整え直すのが近道です。'
      }
    ],

    // ========================================
    // 第2回 練習問題（8問）
    // ========================================
    practices: [
      {
        section: '2-2. Claude Code を始める準備',
        title: 'Claude Code への安全な指示文を作る',
        task: '以下のシナリオで、Claude Code に出す指示文を作成してください。\n\nシナリオ：チーム内で使っている月次レポートのテンプレート（Excel・PowerPoint など、チームで共有している形式）に、集計項目を2つ追加したい（「新規顧客数」「解約率」）。既存のレイアウトは壊したくない。\n\n1. 変更対象を明確にした指示文を書く\n2. 禁止事項（触ってほしくない部分）を明記する\n3. 完了条件（何をもって完了とするか）を定義する\n4. 段階的に進める手順（まずデータ項目追加 → 表示確認 → レイアウト調整）を書く',
        hint: '「レポートを改善して」ではなく「○○ファイルの△△セクションに□□を追加して。既存の◇◇は変更しないで」のように、範囲・禁止事項・完了条件を具体的に書くのがポイントです。'
      },
      {
        section: '2-3. 成果物を作る①：データ処理・複数ファイル',
        title: '複数ファイルのデータ集計を Claude Code で作る',
        task: '手元の複数ファイル（月別・拠点別などに分かれた CSV / Excel、なければ架空のデータでOK）を使って、集計レポートを作ってみましょう。\n\n1. 作業用フォルダにファイルのコピーを入れる\n2. 「このフォルダのファイルを統合し、○○別に集計した表を新しいファイルに出力して」と依頼する\n3. まず計画（読み込むファイル・集計方針）を出させてから実装させる\n4. 出力された数値を元データと照合して確認する',
        hint: '元データは必ずコピーを使いましょう。最初から完璧な集計を目指さず、小さな範囲で1度試してから対象を広げると安全です。'
      },
      {
        section: '2-4. 成果物を作る②：ツール・プロトタイプ・アプリ',
        title: '簡単なツールを1つ作る',
        task: '業務で使えそうな小さなツールを、Claude Code で1つ作ってみましょう。\n\n1. 「誰が・何のために使うか」を1行で決める（例：営業が提案時に使う簡単な市場規模算出ツール）\n2. まず動く最小版を作らせ、すぐ操作して確認する\n3. 「項目を増やして」「結果をグラフにして」と段階的に育てる\n4. ファイルとして保存し、ブラウザで開いて動作を確認する',
        hint: '第1回で作った Artifact の試作品を「保存できる形にして」と頼むのが、いちばん入りやすい第一歩です。本番システムではなく試作・社内ツールとして扱いましょう。'
      },
      {
        section: '2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP',
        title: 'CLAUDE.md を1つ書く',
        task: '自分が関わるプロジェクト（社内ツール、資料置き場、教材など）の CLAUDE.md を作成してください。\n\n1. プロジェクトの概要・ファイル構成を書く\n2. 守るルール・禁止事項（触ってはいけないファイル等）を書く\n3. 出力形式やレビュー基準を書く\n4. 長くなりそうなら DESIGN.md / CONTENT.md などに分け、CLAUDE.md から参照する形にする',
        hint: '最初から完璧を目指さず、「毎回同じ注意を書いているな」という内容を1つ書き出すところから始めましょう。Claude Code の /init でたたき台を生成させるのも有効です。'
      },
      {
        section: '2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP',
        title: '成果物づくりの Skill を1つ設計する',
        task: 'よく作る成果物（議事録、集計表、提案書レビューなど）の手順を Skill にしてみましょう。\n\n1. 必ず含める項目・出力形式を定義する\n2. 守るルール（文体、粒度、順序等）を書き出す\n3. 実際のデータで「この手順で作って」と試す\n4. 出力を見て足りない部分を Skill に追記する',
        hint: 'まず実際の素材（簡単なものでOK）を用意し、Skill の定義と一緒に渡して試しましょう。発動するか・品質・手間の3点で確認して育てます。'
      },
      {
        section: '2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP',
        title: '配布スキル（consulting-toolkit-800）を入れて1つ呼び出す',
        task: '2-5 の手順で当社スキル集「consulting-toolkit-800」をインストールし、実際に1つ呼び出して成果物を出してみましょう。\n\n1. デスクトップアプリ（または CLI）に consulting-toolkit-800 をインストールする\n2. 新しい会話で「どんなスキルが使える？」と聞いて、使えるスキルの一覧を確認する\n3. 議事録・スライド構成など身近な1つを選び、実データ（簡単なものでOK）で呼び出す\n4. 出てきた成果物を確認し、自分の業務に合うか・どこを直すかを見極める',
        hint: 'まずは1つ呼び出して「型化済みスキルの便利さ」を体感するのが目的です。MCP（Notion・Slack 等の接続）も、必要になったら同じ感覚で1つだけ試してみましょう。'
      },
      {
        section: '2-6. 使いこなす：Subagents（分担・並列）',
        title: 'Subagents の分担を設計し、実際に動かす',
        task: 'Subagents での役割分担を設計し、実際に依頼して動かしてみましょう。\n\n【設計する】\n1. 大きいタスクを1つ選ぶ（例：複数資料を調査して提案ドラフトを作る）\n2. 「調査担当・実装担当・レビュー担当」に分けて、それぞれの役割を書き出す\n3. どこを並列で進められるか、どこは順番が必要かを整理する\n4. 1人（1エージェント）でやる場合と比べて、どこが速くなるかを考える\n\n【実際に動かす】\n5. 設計した分担を実際に依頼する（例：「この資料群を3つの観点でサブエージェントに手分けして並列で調べて、最後に1枚のまとめにして」）\n6. サブエージェントが立ち上がる様子と、統合された要約を確認する',
        hint: '最初は1つの Claude Code で十分です。「分担した方が速い」と感じる規模のタスクを選ぶと、Subagents の効果がイメージしやすくなります。確実に分担させたいときは「サブエージェントで手分けして」と一言入れるのが確実です。'
      },
      {
        section: '2-7. 実践TIPS・立て直し方',
        title: '実践TIPSを実際に試す',
        task: 'Claude Code の使いこなし TIPS を、実際に手を動かして試しましょう。\n\n1. /help でコマンド一覧を表示し、/context で会話の埋まり具合を確認する\n2. 会話が長くなったら /compact で圧縮してみる\n3. /mcp で外部サービスの接続状況を確認する\n4. ファイルのパスをコピーしてチャット欄に貼り、フォルダ外のファイルを渡してみる\n5. （CLI / IDE の人は）ESC 2回・↑キーも試してみる',
        hint: 'すべてを一度に覚える必要はありません。まずは /help・/context・/compact の3つから。詳しい一覧は自習モードの TIPS集 を参照してください。'
      }
    ],

    // ========================================
    // 第2回 自習リソース
    // ========================================
    selfStudyResources: {
      links: [
        { title: 'Claude Skills ガイド', url: 'https://code.claude.com/docs/en/skills', desc: 'Skills の作成方法と活用例', category: '🔧 Claude Codeで使う' },
        { title: 'Claude Code 公式ドキュメント', url: 'https://code.claude.com/docs/en/overview', desc: 'Claude Code の公式ガイド', category: '🔧 Claude Codeで使う' },
        { title: 'Claude Code ベストプラクティス', url: 'https://code.claude.com/docs/en/best-practices', desc: '効果的な Claude Code の使い方', category: '🔧 Claude Codeで使う' },
        { title: 'CLAUDE.md ガイド', url: 'https://code.claude.com/docs/en/memory', desc: 'CLAUDE.md の書き方と設計パターン', category: '🔧 Claude Codeで使う' },
        { title: 'MCP 公式', url: 'https://modelcontextprotocol.io/', desc: 'MCP の仕様・対応サービス一覧', category: '🔗 外部ツールと連携する' },
        { title: 'MCP サーバー一覧', url: 'https://github.com/modelcontextprotocol/servers', desc: 'Slack・Notion 等の対応一覧', category: '🔗 外部ツールと連携する' },
        { title: 'Anthropic ニュース', url: 'https://www.anthropic.com/news', desc: '最新アップデート・事例', category: '📚 公式リファレンス' }
      ],
      faq: [
        { q: 'Skills はどんな業務に向いていますか？', a: '手順やフォーマットが定型化できる繰り返し業務に向いています。議事録作成、提案書レビュー、調査レポート作成、文体統一、要約フォーマット、Excel 分析の標準手順などが好例です。「毎回同じ品質で出力したい」業務を洗い出し、Skills 化の候補にしてください。', category: '🔧 Claude Code' },
        { q: 'Project と Skills はどう使い分けますか？', a: 'Project は「案件の背景情報や参照資料を保持する場所」、Skills は「業務手順やルールを再利用する型」です。Project は「この案件について」、Skills は「この作業を毎回この手順で」と使い分けます。Project 内で Skills を呼び出すことで、案件固有の情報 × 標準化された手順の組み合わせが実現します。', category: '🔧 Claude Code' },
        { q: 'MCP / Connectors は何のために使うのですか？', a: 'Claude の出力品質は渡す情報の質に左右されます。MCP / Connectors を使うと、Slack・Notion 等の社内情報源を Claude から直接参照でき、より正確で自社に即した出力が得られます。ただし、目的に必要な情報だけを適切な粒度で渡すことが重要です。', category: '🔗 外部連携（MCP）' },
        { q: 'Claude Code は非エンジニアでも使うべきですか？', a: 'はい。Claude Code は日本語の指示でコードやツールを作れるため、エンジニアでなくても活用できます。ただし、Chat → Cowork → Claude Code の順で段階的に学ぶことをお勧めします。最初は「Artifact では作れないレベルの成果物が必要になったとき」に Claude Code を使い始めましょう。', category: '🔧 Claude Code' },
        { q: 'Claude Code に修正を依頼するときの注意点は？', a: '3点を指示に含めてください。(1) 変更対象を具体的に指定する、(2) 触ってほしくない部分を禁止事項として明示する、(3) 一度に大きな変更をせず小さな単位で進める。「全体を良くして」のような曖昧な指示は、意図しない変更を引き起こすリスクがあります。加えて、実装後は自分で動かして結果を確認し、責任を持ちます（Claude Code は責任者ではありません）。', category: '🔧 Claude Code' },
        { q: 'CLAUDE.md には何を書くべきですか？', a: 'プロジェクトの概要、ファイル構成、コーディング規約、禁止事項、出力形式のルール、レビュー基準など、プロジェクト固有の永続的なルールを書きます。一時的な作業指示はチャットで伝えます。CLAUDE.md はチームの「品質基準書」として機能し、新メンバーが読めばプロジェクトのルールがわかる状態を目指します。', category: '🔧 Claude Code' },
        { q: 'Hooks や Subagents はいつ必要ですか？', a: 'Subagents（分担・並列）は 2-6 で学ぶ仕組みで、「情報量が多い」「観点ごとに並列に分けられる」「違う視点で検証したい」ときに、依頼文で「サブエージェントで手分けして」と一言頼んで使います。簡単・短い・一直線の作業には使いません。Hooks は作業前後にチェックを自動で挟む上級者向けの仕組みで、本編では扱いません。最初は CLAUDE.md と Skills だけで十分です。', category: '🔧 Claude Code' },
        { q: 'Claude Code の快適化 TIPS は全員が覚える必要がありますか？', a: 'いいえ。まずは安全に作業を任せるための「指示の型」（現状調査・変更対象限定・計画提示・確認報告）を覚えれば十分です。ショートカットや拡張機能は慣れてから、権限モードや自動化設定はチームルールに従って必要な人だけ使ってください。', category: '🔧 Claude Code' },
        { q: '本編でまず覚えるべき Claude Code の使い方は何ですか？', a: '次の5つの基本の型を押さえてください。(1) 現状調査を依頼する、(2) 変更対象ファイルを限定する、(3) 実装前に計画を出させる、(4) 小さく実装させる、(5) 実装後に確認結果を報告させる。これだけで意図しない変更や手戻りを大きく減らせます。', category: '🔧 Claude Code' },
        { q: 'Bypass Permissions のような権限モードは使ってよいですか？', a: '便利ですが誤操作の影響も大きくなります。業務利用では「作業コピーで使う・低リスク作業に限定する・チームルールに従う・レビューを通す」を前提にしてください。機密情報や重要ファイルを扱う作業では特に慎重に運用します。', category: '🔧 Claude Code' },
        { q: 'Web 記事や外部ファイルを Claude Code に渡すにはどうすればよいですか？', a: 'PDF・Word・Markdown・画像などはファイルパスで渡すと扱いやすくなります。長文記事・ログイン要のページ・SNS 投稿などは、Web Clipper 系のツールで Markdown 化してから渡すと安定します。元ファイルを直接編集させず、作業コピーで作業させるのが安全です。', category: '🔧 Claude Code' },
        { q: '.claude フォルダは触ってよいですか？', a: '仕組みを理解する目的で確認するのは有用ですが、初心者が不用意に編集するのは避けてください。チームで使う場合は、共通ルールやレビューを前提に扱い、変更内容は記録・共有します。', category: '🔧 Claude Code' },
        { q: 'Cowork や Claude Code を始める前に何を準備すべきですか？', a: '次の5点を作業前に整えると成果が安定します。(1) 作業用フォルダ（元データを直接編集しないコピー）、(2) 目的と最終成果物を1行で言語化、(3) 触ってほしくない禁止事項を書き出す、(4) 変更対象の範囲を限定する、(5) 完了条件を明文化する。これらをそろえてから依頼すると、無駄な手戻りを大きく減らせます。', category: '🔧 Claude Code' },
        { q: 'Claude Code がうまく動かない時はどうすればよいですか？', a: '「もっと強い指示を出す」より「準備に戻る」が近道です。(1) 文脈を整理する（新しい会話で目的・現状・残課題を再提示）、(2) 作業を分割する、(3) 対象ファイルを限定する、(4) 現状調査に戻り認識のズレを揃える。長時間うまくいかない時は、フォルダ・目的・成果物・禁止事項・変更対象の5点を整え直すのが効果的です。', category: '🔧 Claude Code' },
        { q: 'Skills 化すべき業務はどう見極めればよいですか？', a: '次の3条件が揃ったときに Skills 化の効果が大きくなります。(1) 繰り返し発生する（月次・週次・案件ごと）、(2) 手順が明確化できる（段取りで言語化できる）、(3) 品質基準がある（チームで合意できる「OKレベル」がある）。具体例は議事録、提案書レビュー、調査レポート、Excel 分析の標準手順、PPT 構成生成、UI レビュー、プロトタイプ作成手順など。作った後は発動するか・品質・手間の3点で確認しながら育てます。', category: '🔧 Claude Code' },
        { q: 'AI 情報を効率よく追うにはどうすればよいですか？', a: '全部を追うのは続きません。範囲を「自分の業務で使うもの」（Claude の主要アップデート、案件で必要なテーマ）に絞り、定期的にチェックするのが現実的です。「直近1週間の主要アップデートを5トピックに整理して」という調査手順を Skill 化しておくと、毎回同じ品質でキャッチアップできます。チームなら調査担当を持ち回って共有し、Notion など1箇所に集約すると負荷が下がります。', category: '💡 Claudeの基本' },
        { q: 'Claude を業務で使うとき、自分で決めておくとよいことは？', a: 'まず個人として、(1) 何を Claude に渡してよいか（公開情報やサマリーは比較的安全、個人情報・契約金額は慎重に）、(2) 成果物の保存先、(3) 自分でのレビュー（数字・固有名詞・出典の確認）を決めておきましょう。チームで使う場合は、これらに加えて「対象業務・共通化するもの（Project・Skills・CLAUDE.md）・レビュー体制」を共通ルールにすると展開しやすくなります。完璧を目指さず、運用しながら改善する前提で始めます。', category: '💡 Claudeの基本' },
        { q: 'クライアント情報や機密情報をどう扱うべきですか？', a: '「何を Claude に渡してよいか」のガイドラインをチームで策定してください。公開情報やサマリー化された情報は比較的安全ですが、個人情報・契約金額・NDA 対象情報は慎重に扱う必要があります。迷った場合は上長に確認する、というルールを設けるのも有効です。万一のインシデント対応フローも事前に決めておきましょう。', category: '💡 Claudeの基本' }
      ]
    }
  }

];

// ============================================================
// TIPS集（自習用補助教材） — Step 8・Step 9 で扱った実践TIPSを整理
// 全部覚えるものではなく、必要な時に参照するもの
// ============================================================
const TIPS_CATEGORIES = [
  '🌐 共通',
  '💬 Chat 個別',
  '📂 Cowork 個別',
  '⚡ Claude Code 個別'
];

const TIPS_LEVELS = [
  { id: 'basic', label: '基本' },
  { id: 'intermediate', label: '中級' },
  { id: 'advanced', label: '上級' }
];

const TIPS = [
  // ---- まず試す ----
  {
    id: 'tip-001',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: '実装前に現状調査を依頼する',
    summary: 'いきなり実装させず、まず構造・変更対象・影響範囲・確認方法を確認させる。',
    whenToUse: '既存アプリ・既存資料・既存フォルダを安全に修正したいとき。',
    howToUse: [
      'まず実装せず、リポジトリ構造や対象ファイルを確認させる',
      '変更対象ファイルを一覧化させる',
      '影響範囲と確認方法を出させる'
    ],
    example: 'まず実装はせず、現在の構造を確認してください。変更対象ファイル、影響範囲、実装方針、確認方法を整理してから報告してください。',
    caution: '全体を把握しないまま変更すると、意図しないファイルに影響が及ぶことがある。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 2, label: '第2回 2-2. Claude Code を始める準備' }]
  },
  {
    id: 'tip-002',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: '変更対象ファイルを限定する',
    summary: '「全部直して」ではなく、対象ファイルや対象範囲を明示する。',
    whenToUse: '既存機能や他の領域への影響を小さくしたいとき。',
    howToUse: [
      '対象ファイル・対象セクションを名指しで指定する',
      '触ってほしくないファイルを禁止事項として明示する',
      '関連ファイルへの軽微修正が必要な場合は事前に報告させる'
    ],
    example: '今回は js/modules.js の MODULES[1] のみを対象にしてください。第2回のみ対象で、第1回・表示ロジック・CSS には触らないでください。',
    caution: '範囲を絞るほど安全だが、依存ファイルがある場合は報告ルールも併記する。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 2, label: '第2回 2-2. Claude Code を始める準備' }]
  },
  {
    id: 'tip-003',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: '実装後に確認結果を報告させる',
    summary: '実装して終わりにせず、確認画面・コンソールエラー・変更ファイル・残課題まで報告させる。',
    whenToUse: 'アプリや資料の更新後に、品質確認まで通したいとき。',
    howToUse: [
      '報告フォーマットを先に指定する',
      '確認した画面と結果を明示させる',
      '残課題があれば次の依頼の起点にする'
    ],
    example: '実装後、変更ファイル、変更内容、確認した画面、コンソールエラーの有無、残課題を報告してください。',
    caution: '確認条件を先に指定しないと、「動いた／動いてない」だけの曖昧な報告になりがち。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 2, label: '第2回 2-2. Claude Code を始める準備' }]
  },

  // ---- Claude Code ----
  {
    id: 'tip-004',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: 'IDE で Claude Code を使う',
    summary: 'Claude Code は CLI だけでなく IDE でも使える。複数ファイル編集やアプリ改修にはファイルを見ながら作業できる IDE が便利。社内には Cursor の活用ノウハウもあるが、Cursor は全員必須ではない。',
    whenToUse: '複数ファイルを横断する高度な作業を Claude Code に任せたいとき。非エンジニアや初心者は、まず Claude Desktop で Chat / Cowork を使うところから始めれば十分。',
    howToUse: [
      'まずは Claude Desktop の Chat / Cowork で十分かを確認する（多くの場合これで足りる）',
      'コード・アプリ改修・複数ファイル横断が必要になったら IDE 利用を検討する',
      '使う IDE を選ぶ（Cursor / VS Code / JetBrains など。社内には Cursor のノウハウあり）',
      'プロジェクトフォルダを開いた状態で会話を始め、ファイルツリーを見ながら指示を出す',
      '（補足）CLI はターミナルから使える、エンジニアや慣れた人向けの選択肢'
    ],
    caution: 'IDE 上で開いていても、対象範囲は明示する。「見えている＝編集してよい」ではない。Cursor は全員必須ではなく、IDE を使わなくても Claude Code は CLI で使える。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 7, label: '第2回 2-7. 実践TIPS・立て直し方' }]
  },
  {
    id: 'tip-005',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: '作業は「計画 → 実装 → 確認」で頼む',
    summary: 'まず計画、次に小さく実装、最後に確認結果を報告させる。',
    whenToUse: '既存アプリ改修、資料更新、複数ファイル修正など。',
    howToUse: [
      '実装前に変更方針・変更対象・確認方法・リスクを出させる',
      '小さな単位で実装させる',
      '実装後に確認結果を報告させる'
    ],
    example: 'まず実装計画を出してください。問題なければ、小さな単位で実装し、最後に確認結果を報告してください。',
    caution: '一気に大改修を頼むと、意図しない変更や手戻りが増える。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 2, label: '第2回 2-2. Claude Code を始める準備' }]
  },
  {
    id: 'tip-006',
    category: '⚡ Claude Code 個別',
    level: 'intermediate',
    title: 'うまく動かない時は「準備」に戻る',
    summary: '会話が長くなった・出力がズレた時は、強い指示より文脈整理・作業分割・対象限定・現状調査に戻る。',
    whenToUse: 'Claude Code が迷走している、期待と違う変更をしている、同じ失敗を繰り返すとき。',
    howToUse: [
      '新しい会話で目的・現状・残課題を1段落で再提示する',
      '作業を「まず◯◯」「次に△△」と分割する',
      '対象ファイルを絞り直す',
      '「いまどうなっているか」を Claude に説明させ認識のズレを揃える'
    ],
    caution: '無理に続けるより、作業フォルダを切り直し、目的・変更対象・禁止事項・完了条件を指示し直すほうが早い。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 7, label: '第2回 2-7. 実践TIPS・立て直し方' }]
  },

  // ---- Cowork ----
  {
    id: 'tip-007',
    category: '📂 Cowork 個別',
    level: 'basic',
    title: 'Cowork は作業コピーで使う',
    summary: '元ファイルを直接触らせず、作業用フォルダやコピーを使う。',
    whenToUse: 'Excel・Word・PowerPoint・PDF などのファイル作業を任せるとき。',
    howToUse: [
      '作業用フォルダを切ってコピーを置く',
      'コピー側を Cowork に渡す',
      '結果を確認してから元ファイルに反映する'
    ],
    caution: '重要ファイル・顧客資料・契約書・機密資料は特にバックアップを取る。',
    relatedSession: '第1回',
    relatedSections: [{ m: 0, s: 12, label: '第1回 1-13. Cowork でファイル作業を任せる' }]
  },
  {
    id: 'tip-008',
    category: '📂 Cowork 個別',
    level: 'basic',
    title: 'Cowork の最初の30分で前提を整える',
    summary: '目的・成果物・入力ファイル・禁止事項・出力形式・確認方法を最初に伝える。',
    whenToUse: '複数資料の整理、レポート・提案資料の下書き、ファイル加工を任せるとき。',
    howToUse: [
      'やりたいことと最終成果物を1行で書く',
      '入力ファイルと触ってほしくないものを明示する',
      '出力形式と確認方法を先に決める'
    ],
    caution: '前提が曖昧だと、見た目は整っていても使いにくい成果物になる。',
    relatedSession: '第1回',
    relatedSections: [
      { m: 0, s: 12, label: '第1回 1-13. Cowork でファイル作業を任せる' }
    ]
  },

  // ---- 成果物作成 ----
  {
    id: 'tip-009',
    category: '💬 Chat 個別',
    level: 'basic',
    title: 'スライドはいきなり完成形を作らせない',
    summary: '構成 → 1枚ごとのメッセージ → 図表案 → 文言 → デザイン の順で段階生成する。',
    whenToUse: '提案書・報告書・役員向け資料・研修資料を作るとき。',
    howToUse: [
      'まずストーリーラインと10枚程度の構成を作らせる',
      '各スライドのキーメッセージを1文で書かせる',
      '図表案・本文を作らせ、最後にレビュー観点で点検させる'
    ],
    caution: '一気に PPT 化すると、見た目は整っていても論点が弱い資料になる。',
    relatedSession: '第1回',
    relatedSections: [{ m: 0, s: 8, label: '第1回 1-9. Office アプリで Claude を使う — Excel / PowerPoint / Word' }]
  },
  {
    id: 'tip-010',
    category: '💬 Chat 個別',
    level: 'intermediate',
    title: '提案書は「素材抽出」から始める',
    summary: '商談メモや議事録から、課題・要望・意思決定基準・競合・予算・スケジュールを抽出してから提案ストーリーを作る。',
    whenToUse: '提案資料・営業資料・プロジェクト提案書を作るとき。',
    howToUse: [
      '元情報から抽出すべき項目を先に決める',
      'まず素材を一覧で抽出させる',
      '次に提案ストーリーを構築させる'
    ],
    caution: '素材抽出と資料化を同時に頼むと、論点の抜け漏れに気づきにくい。',
    relatedSession: '第1回',
    relatedSections: [{ m: 0, s: 8, label: '第1回 1-9. Office アプリで Claude を使う — Excel / PowerPoint / Word' }]
  },
  {
    id: 'tip-011',
    category: '💬 Chat 個別',
    level: 'basic',
    title: 'プロトタイプは議論のたたき台として扱う',
    summary: '診断ツール・シミュレーター・画面モック・ダッシュボードは、提案の説得力を高める補助。',
    whenToUse: '抽象的な構想や To-Be 業務を具体化したいとき。',
    howToUse: [
      'Artifact で素早く試作する',
      'クライアントには「議論用の試作品」と明示する',
      'フィードバックをもらって改善する'
    ],
    caution: '本番システムではないことを明示し、データ保存・セキュリティ要件は別途検討する。',
    relatedSession: '第1回',
    relatedSections: [{ m: 0, s: 10, label: '第1回 1-11. Artifact で「プロトタイプ」を作る' }]
  },

  // ---- Research ----
  {
    id: 'tip-012',
    category: '💬 Chat 個別',
    level: 'basic',
    title: '調査は「示唆」に変換する',
    summary: '情報収集で終わらせず、ファクト・示唆・提案への使い方を分けて整理する。',
    whenToUse: '市場調査・競合調査・業界動向・事例調査を行うとき。',
    howToUse: [
      'Research の出力を受けたら、「機会・脅威」「論点・推奨アクション」に変換させる',
      'クライアントの意思決定にどう繋がるかまで書かせる'
    ],
    caution: '重要な数字・固有名詞・出典は必ず一次情報で確認する。',
    relatedSession: '第1回',
    relatedSections: [{ m: 0, s: 9, label: '第1回 1-10. Research で調査する' }]
  },
  {
    id: 'tip-013',
    category: '💬 Chat 個別',
    level: 'intermediate',
    title: '大量資料は他ツール併用も考える',
    summary: '手元の大量資料の把握には NotebookLM 等の併用も選択肢。Claude では示唆化・構成化・成果物化に集中させる。',
    whenToUse: '大量 PDF・公開資料・社内資料をまとめて読みたいとき。',
    howToUse: [
      'Web 横断調査・出典付きレポート → Claude の Research',
      '資料に紐付いた Q&A・図解化 → NotebookLM 等',
      '示唆 → 提案 → スライド化 → Claude（Chat / Artifact / Skills）'
    ],
    caution: 'ツールごとの得意分野を理解し、最終的な判断は人間が行う。',
    relatedSession: '第1回',
    relatedSections: [{ m: 0, s: 9, label: '第1回 1-10. Research で調査する' }]
  },
  {
    id: 'tip-014',
    category: '💬 Chat 個別',
    level: 'intermediate',
    title: 'AI 情報は「定点観測」する',
    summary: '都度検索だけでなく、定期的に見る情報源と確認サイクルを決める。',
    whenToUse: 'AI ニュース・競合動向・技術トレンドを追いたいとき。',
    howToUse: [
      '週次のチーム持ち回りで担当を回す',
      '調査手順自体を Skill 化して品質を揃える',
      '集約先を1箇所（Notion・Wiki 等）に決める'
    ],
    caution: '最新情報は変わりやすいため、固定知識にしすぎない。範囲は「自分のチームで使うもの」に絞る。',
    relatedSession: '第1回 / 第2回',
    relatedSections: [
      { m: 0, s: 9, label: '第1回 1-10. Research で調査する' },
      { m: 1, s: 5, label: '第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP' }
    ]
  },

  // ---- Skills / 再現性 ----
  {
    id: 'tip-015',
    category: '🌐 共通',
    level: 'intermediate',
    title: 'Skills 化すべき業務を見極める',
    summary: '繰り返し発生する × 手順が明確化できる × 品質基準がある、の3条件が揃ったら候補。',
    whenToUse: '何を Skill 化すべきか迷ったとき。',
    howToUse: [
      '直近1ヶ月で繰り返した作業をリストアップ',
      '手順が言語化できるか確認',
      '「OK ライン」がチームで合意できるか確認'
    ],
    example: '候補例：議事録作成、提案書レビュー、調査レポート、PPT 構成生成、Excel 分析、UI レビュー、プロトタイプ手順。',
    caution: '一度しか使わない作業は、無理に Skill 化しなくてよい。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP' }]
  },
  {
    id: 'tip-016',
    category: '🌐 共通',
    level: 'intermediate',
    title: 'Skills は作って終わりにしない',
    summary: '「発動するか／期待品質になるか／効率化するか」の3観点でテストしながら育てる。',
    whenToUse: 'チームで使う Skill を作成・改善するとき。',
    howToUse: [
      '発動：指示通りにこの Skill が呼ばれているか確認',
      '品質：期待する成果物が出ているか確認',
      '効率：手作業より速いか・レビュー手間が許容範囲か確認'
    ],
    caution: '作った後の検証と改善がないと、形だけの Skill になる。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP' }]
  },
  {
    id: 'tip-017',
    category: '🌐 共通',
    level: 'intermediate',
    title: 'CLAUDE.md を業務マニュアルとして使う',
    summary: 'プロジェクトの前提・禁止事項・出力形式・レビュー観点・トンマナ・成果物ルールを書く。',
    whenToUse: '毎回同じ説明をするのが面倒なとき、成果物の品質を安定させたいとき。',
    howToUse: [
      'プロジェクトの目的・対象を冒頭に書く',
      '触ってはいけないファイル・データを禁止事項に',
      '出力形式・レビュー観点を明文化',
      '大きい場合は DESIGN.md / CONTENT.md / REVIEW.md に分割し参照する'
    ],
    caution: '古いルールが残ると逆効果。定期的に見直し、使われていない規約は外す。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP' }]
  },

  // ---- チーム展開 ----
  {
    id: 'tip-018',
    category: '🌐 共通',
    level: 'intermediate',
    title: 'よく使う指示を「型」として残す',
    summary: 'うまくいった指示を使い捨てにせず、テンプレート・Project・Skills・CLAUDE.md に落として再利用する（チーム共有にも）。',
    whenToUse: 'うまくいった指示を再利用したいとき／チームに広げたいとき。',
    howToUse: [
      '成功した指示パターンを自分のメモや Project・Skills に保存（チームなら Slack・Notion・Wiki に集約）',
      '「型」として再利用できる形にする',
      '成功事例をもとに定期的に更新する'
    ],
    caution: 'テンプレートは使いっぱなしにせず、運用しながら改善する。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP' }]
  },
  {
    id: 'tip-019',
    category: '🌐 共通',
    level: 'intermediate',
    title: '自分用の「使い方メモ」を作る（チーム共有にも）',
    summary: 'Claude の使い方・禁止事項・レビュー観点・よく使うテンプレート・相談先を1ページにまとめておく。新メンバーのオンボーディングにも使える。',
    whenToUse: '自分の使い方を整理したいとき／新メンバーに広げるとき。',
    howToUse: [
      'チームでよく使う Project と入り口を書く',
      '定番 Skills の呼び方を書く',
      'CLAUDE.md / DESIGN.md のありかを書く',
      '最初の30〜60分の体験課題を1つ用意する'
    ],
    caution: '運用ルールが複雑すぎると使われない。最初はシンプルにする。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP' }]
  },
  {
    id: 'tip-020',
    category: '🌐 共通',
    level: 'basic',
    title: 'レビュー責任を明確にする',
    summary: 'Claude が作った成果物でも、最終責任は人間が持つ。',
    whenToUse: 'クライアント提出物・数値を含む資料・契約／法務／財務に関わる資料を作るとき。',
    howToUse: [
      '誰がレビューし、誰が承認するかを決める',
      '重要な数字・固有名詞・出典・表現の妥当性を必ず確認する',
      'インシデント対応フローも事前に決める'
    ],
    caution: '「Claude がやったから OK」は通らない。最終チェックは必ず人が行う。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP' }]
  },

  // ---- 上級・補助 ----
  {
    id: 'tip-021',
    category: '⚡ Claude Code 個別',
    level: 'advanced',
    title: '権限モードは慎重に使う',
    summary: 'Bypass Permissions などの権限モードは便利だが、誤操作のリスクも大きくなる。',
    whenToUse: '低リスクな作業コピーや、個人環境で効率化したいとき。',
    howToUse: [
      '機密情報・重要ファイルでは使わない',
      '作業コピーで使う',
      'チームルールとレビュー前提で運用する'
    ],
    caution: '便利さだけで選ばない。誤操作の影響範囲を先に想定する。',
    relatedSession: '第2回（補助資料）',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP' }]
  },
  {
    id: 'tip-022',
    category: '⚡ Claude Code 個別',
    level: 'advanced',
    title: '.claude フォルダや設定ファイルは不用意に触らない',
    summary: '仕組み理解には役立つが、初心者が不用意に編集するのは避ける。',
    whenToUse: '高度な設定・チーム共通設定・品質固定を検討するとき。',
    howToUse: [
      '何が書かれているかをまず読み解く',
      '変更する前にバックアップを取る',
      'チームで使う場合は共通ルールとレビューを前提にする'
    ],
    caution: 'ファイル構造や役割を理解しないまま触ると、想定外の挙動につながる。',
    relatedSession: '第2回（補助資料）',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP' }]
  },
  {
    id: 'tip-023',
    category: '⚡ Claude Code 個別',
    level: 'advanced',
    title: '自動化スクリプトや外部 CLI は補助資料扱い',
    summary: 'Downloads 自動コピー、xurl、外部 CLI 連携などは便利だが、環境依存・権限・API 設定が絡む。',
    whenToUse: '高度な効率化をしたい人、技術的な設定に慣れている人向け。',
    howToUse: [
      '個人環境で小さく試す',
      '失敗時の戻し方を先に確認する',
      'チーム運用に組み込む場合はガイドラインを整備する'
    ],
    caution: '研修本編の必須事項ではなく、必要な人が使う発展 TIPS として扱う。',
    relatedSession: '第2回（補助資料）',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP' }]
  },

  // ---- 知っておくと役立つ小ワザ系（追加） ----
  {
    id: 'tip-024',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: 'ESC 2 回で直前の指示を巻き戻す',
    summary: '誤字や条件抜けに気づいた直後、ESC を 2 回押すと直前の指示まで巻き戻して書き直せる。',
    whenToUse: '指示を送った直後に「あ、ちょっと違った」と気づいたとき。',
    howToUse: [
      '指示送信直後に ESC を 2 回押す',
      '直前のメッセージまで巻き戻る',
      '修正して再送信'
    ],
    caution: '複数遡りたい場合は ↑ キー（tip-025）で履歴をたどる。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 7, label: '第2回 2-7. 実践TIPS・立て直し方' }]
  },
  {
    id: 'tip-025',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: '↑ キーで過去の指示を呼び出す',
    summary: 'チャット欄で ↑ キーを押すと直前の指示が呼び出される。連打でさらに遡れる。',
    whenToUse: '同じ指示や似た指示を再利用したいとき。長文指示の修正再送時にも便利。',
    howToUse: [
      'チャット欄で ↑ キーを押す',
      '連打で過去履歴を遡る',
      'そのまま送信、または編集して再送'
    ],
    caution: 'ターミナル経験者には馴染みのある操作。慣れると指示の再利用が高速化する。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 7, label: '第2回 2-7. 実践TIPS・立て直し方' }]
  },
  {
    id: 'tip-026',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: 'Opt+⌘+C で Finder のファイルパスを渡す',
    summary: 'Mac の Finder で選択ファイルの絶対パスをコピーし、チャット欄に貼ればワークスペース外のファイルも渡せる。',
    whenToUse: '契約書レビュー、Slack・メールで受け取った PDF 処理など、ワークスペース外のファイルを Claude Code に渡したいとき。',
    howToUse: [
      'Finder で対象ファイルを選択',
      'Opt + ⌘ + C で絶対パスをクリップボードにコピー',
      'Claude Code のチャット欄に貼り付けて指示'
    ],
    example: '「~/Documents/契約書.pdf をレビューしてください。」',
    caution: '機密情報を含むファイルは特に慎重に。作業コピーを使う原則は同じ。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 7, label: '第2回 2-7. 実践TIPS・立て直し方' }]
  },
  {
    id: 'tip-027',
    category: '⚡ Claude Code 個別',
    level: 'basic',
    title: '⌘+Shift+R で出力ファイルを Finder で即開く',
    summary: 'VS Code / Cursor で選択中のファイルを Finder で即開けるショートカット。Slack / メール / Figma への共有がスムーズ。',
    whenToUse: 'Claude Code が作成した Markdown / PDF / 画像 / HTML を、Slack やメールに添付したいとき。',
    howToUse: [
      'エディタで対象ファイルを選択',
      '⌘ + Shift + R で Finder が開く',
      '添付・ドラッグ&ドロップで次のアクションへ'
    ],
    caution: '共有前に必ず人が目視確認。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 7, label: '第2回 2-7. 実践TIPS・立て直し方' }]
  },
  {
    id: 'tip-028',
    category: '⚡ Claude Code 個別',
    level: 'advanced',
    title: '⌘+Shift+. で隠しフォルダを表示し設定を見直す',
    summary: 'Mac の Finder で ⌘+Shift+. を押すと隠しファイル・隠しフォルダが表示される。.claude/ の中身（commands、settings.json）を覗いて自分の設定を見直す。',
    whenToUse: '自分の Claude Code 設定や使っているスキルをメンテナンスしたいとき。',
    howToUse: [
      'Finder で ⌘+Shift+. を押す',
      '.claude/ を開く',
      'commands/ と settings.json を確認',
      '使っていないスキルや設定を整理'
    ],
    caution: '中身を不用意に編集しない（tip-022 参照）。読むだけのつもりが事故につながる。',
    relatedSession: '第2回（補助資料）',
    relatedSections: [{ m: 1, s: 5, label: '第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP' }]
  },
  {
    id: 'tip-029',
    category: '⚡ Claude Code 個別',
    level: 'intermediate',
    title: 'Effort 設定を使い分けて思考の深さを調整する',
    summary: 'Claude Code の Effort 設定を Extra High にすると、より深く考えた回答が返る。タスクの重さに応じて切り替える。',
    whenToUse: '戦略立案・リサーチ・構成案作成・複雑な修正など、思考の質が成果物に直結するタスクのとき。',
    howToUse: [
      '思考の質が重要なタスクで Extra High に切り替え',
      '定型作業や事実確認はデフォルトで十分',
      '時間とトークン消費のバランスを見て使い分ける'
    ],
    caution: '全タスクで最高設定にすると時間とコストが増える。タスクの重さに応じて選ぶ。',
    relatedSession: '第2回',
    relatedSections: [{ m: 1, s: 7, label: '第2回 2-7. 実践TIPS・立て直し方' }]
  },
  {
    "id": "tip-030",
    "category": "🌐 共通",
    "level": "basic",
    "title": "出力された .md ファイルを Windows のメモ帳で開けるようにする",
    "summary": "Claude が作る .md（マークダウン）ファイルは、Windows 標準ではダブルクリックしても開けないことがある。中身はただのテキストなので、メモ帳で開く設定にしておけばすぐ中身を確認できる。",
    "whenToUse": "Cowork や Claude Code に作業を頼んだら、見慣れない拡張子「.md」のファイルができて、ダブルクリックしても開かない／開くアプリを聞かれたとき。",
    "howToUse": [
      "できた .md ファイルをダブルクリックすると「このファイルを開く方法を選んでください」と聞かれるので、一覧から「メモ帳」を選ぶ（無ければ「その他のアプリ」から探す）",
      "「常にこのアプリを使って .md ファイルを開く」にチェックを入れておくと、次回以降は自動でメモ帳が開く",
      "中身はテキストなので、そのまま読んで内容を確認できる"
    ],
    "caution": ".md はテキスト形式なので、メモ帳で開いても壊れる心配はない。記号付きの生テキストではなく整形された見やすい形で読みたいときは、Cowork なら作ったファイルを選ぶと画面右側にプレビュー表示できる（この見やすい表示は Claude Code にはない）。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 3,
        "label": "第2回 2-3. 成果物を作る①：データ処理・複数ファイル"
      }
    ]
  },
  {
    "id": "tip-031",
    "category": "📂 Cowork 個別",
    "level": "basic",
    "title": "確認ダイアログは「1回だけ許可」と「常に許可」を使い分ける",
    "summary": "Coworkで作業中に出る確認画面では「1回だけ許可」か「常に許可」を選べる。同じフォルダ内の読み込みなど繰り返す安全な操作は「常に許可」にしておくと、2回目以降は確認が出ずスムーズに進む。",
    "whenToUse": "Coworkを使い始めた頃、ファイルの読み込みやツール利用のたびに確認画面が何度も出てきて手が止まるとき。",
    "howToUse": [
      "確認画面が出たら、まず「何の操作をしようとしているか」を一度読む（例：このフォルダのファイルを読む）",
      "そのフォルダ内の読み込みなど、これから何度も繰り返す安全な操作なら「常に許可」を選ぶ",
      "初めて行う操作や、影響がよく読めない操作は「1回だけ許可」にとどめる"
    ],
    "example": "例：「○○フォルダのファイルを読み込みます」と出たら、同じフォルダを何度も読む作業なら「常に許可」。逆に書き換え・削除など影響が大きい操作は「1回だけ許可」で都度判断する。",
    "caution": "使い始め直後は確認が多くて大変に感じるが、安全な操作を「常に許可」にしていくほど動きが速くなる。ただし内容を読まずに何でも許可しないこと。意味のわからない確認が出たら、一度止めて中身を確認する。",
    "relatedSession": "第1回",
    "relatedSections": [
      {
        "m": 0,
        "s": 12,
        "label": "第1回 1-13. Cowork でファイル作業を任せる"
      }
    ]
  },
  {
    "id": "tip-032",
    "category": "⚡ Claude Code 個別",
    "level": "basic",
    "title": "意味がわからない確認が出たら、一旦「拒否」して中身を聞く",
    "summary": "ツールのインストールなど意味のわからない確認に、よく分からないまま許可を連打すると、パソコンに不要なものが入って環境が汚れていく。判断できないときは一旦「拒否」し、何をしようとしているか説明させてから、安全だと納得できたときだけ進める。",
    "whenToUse": "Claude Code が作業中に「○○をインストールしてもいいですか？」のような見慣れない確認を出してきて、許可していいか自分で判断できないとき。",
    "howToUse": [
      "内容が読み取れない確認は、まず「拒否」を選ぶ（拒否しても壊れない）",
      "同じ会話で「今なにをしようとしているの？」「これを入れると何が起きる？」とそのまま聞く",
      "説明を読んで安全だと納得できたときだけ進める。納得できなければ拒否のままにして、詳しい人に相談する"
    ],
    "example": "今なにをしようとしているのか、このまま進めると私のパソコンに何が起きるのか、初心者にもわかるように説明して",
    "caution": "拒否は「その操作をやめさせる」だけで、作業全体やパソコンが壊れるわけではない。逆に、よく分からないまま許可を連打して不要なツールが溜まると、後から環境が不安定になる原因になる。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 7,
        "label": "第2回 2-7. 実践TIPS・立て直し方"
      }
    ]
  },
  {
    "id": "tip-033",
    "category": "⚡ Claude Code 個別",
    "level": "intermediate",
    "title": "Python を使う作業は「UV でフォルダ内に入れて」と全体設定に書く",
    "summary": "Claude Code にプログラムやデータ処理を任せると、パソコン全体に部品（ツール）が次々入って環境が散らかることがある。全体設定（グローバルの CLAUDE.md）に「Python のツールは UV を使ってそのフォルダの中だけに入れる」と一度書いておくと、以後は自動で安全な入れ方をしてくれる。",
    "whenToUse": "プログラムやデータ処理の仕組みを作ってもらう前。最初のセットアップ時に一度だけ設定しておけば、以後ずっと反映される。",
    "howToUse": [
      "Claude Code に「全体設定の CLAUDE.md はどこにある？」と聞いて場所を教えてもらう",
      "そこに『Python のツールをインストールするときは必ず UV を使い、フォルダの中だけに入れる。環境を汚す恐れのある操作は説明したうえで確認する』と書いてもらう",
      "新しい会話を開くと、このルールに自動で従ってくれる"
    ],
    "example": "Python のツールをインストールするときは必ず UV を使い、そのフォルダの中だけに入れて。環境を汚す恐れのある操作は、わかりやすい説明とともに確認して。これを全体設定の CLAUDE.md に書いておいて。",
    "caution": "これは Python を使う作業向けの仕組み。フォルダ内だけに入れておけば、うまくいかなくてもそのフォルダを消せば他に影響しないので、詳しくない人ほど安心。なお書いたあとも、初めての操作では確認ダイアログが出ることがあるので、内容を見て進める。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 5,
        "label": "第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP"
      }
    ]
  },
  {
    "id": "tip-034",
    "category": "🌐 共通",
    "level": "intermediate",
    "title": "CLAUDE.md は「新しい会話を始めたとき」にしか読まれないと知っておく",
    "summary": "全体設定の CLAUDE.md も、フォルダ内の CLAUDE.md も、新しい会話（チャット／タスク）を始めたときに最初にまとめて読まれる。作業の途中で書き換えても、いま動いている会話には反映されない。",
    "whenToUse": "CLAUDE.md を作ったり書き換えたのに、いま動いている会話に反映されている様子がないとき。",
    "howToUse": [
      "CLAUDE.md を新しく作る・書き換えたら、その会話のまま続けない",
      "新しい会話（新しいタスク／チャット）を開き直す",
      "Claude Code や Cowork では同じフォルダを選び直してから依頼すると、最新の設定が読み込まれた状態で始まる"
    ],
    "example": "（CLAUDE.md を直したあと）新しいチャットを開いて「このフォルダの CLAUDE.md を読んだうえで、画像をモノクロにする処理を作って」と頼むと、更新後のルールが効いた状態で始まる。",
    "caution": "「途中で設定したから読まれていないかも」と思ったら、迷わず新しい会話に切り替えるのが確実。細かいが、つまずきやすいポイント。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 5,
        "label": "第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP"
      }
    ]
  },
  {
    "id": "tip-035",
    "category": "🌐 共通",
    "level": "intermediate",
    "title": "うまくいった手順は会話の流れで「CLAUDE.md に書いておいて」と頼んで育てる",
    "summary": "良い出力フォーマットや段取りができたら、自分で設定ファイルを書かず、その会話のまま「この内容を CLAUDE.md に書いておいて」と頼む。Claude が追記してくれるので、同じフォルダで作業すれば次回からは細かく指示しなくても同じやり方で進めてくれる。使うほど知見が溜まり、2回目以降が楽になる。",
    "whenToUse": "調査やレポートで「このまとめ方が理想」という形に仕上がり、次も同じ形で繰り返したいと思ったとき。",
    "howToUse": [
      "望ましい出力が出たら、その会話のまま「このフォーマット／手順をこのフォルダの CLAUDE.md に書いておいて」と頼む（自分でファイルを書く必要はない）",
      "CLAUDE.md は次の新しい会話の開始時に読み込まれるので、反映させたいときは新しい会話を始める",
      "次回は同じフォルダを選んで「まとめて」とだけ依頼し、同じ形で出てくるか確認する",
      "ズレたら、また「ここをこう直して CLAUDE.md に書いておいて」と頼んで少しずつ育てる"
    ],
    "example": "今回のまとめ方が理想なので、このフォーマットと手順をこのフォルダの CLAUDE.md に書いておいて。次回からは同じ形で作業して",
    "caution": "CLAUDE.md は新しい会話の開始時に読み込まれる。書いた直後の同じ会話では反映されないので、効かせたいときは一度会話を始め直す。一度に完璧を目指さず、使いながら追記して育てるとよい。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 5,
        "label": "第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP"
      }
    ]
  },
  {
    "id": "tip-036",
    "category": "⚡ Claude Code 個別",
    "level": "basic",
    "title": "使い捨て作業用に「temp（一時）」フォルダを1つ作っておく",
    "summary": "Claude Code は毎回どのフォルダで作業するかを指定して使う。ちょっと試すだけ・残さなくてよい作業のたびに新しいフォルダを作るのは手間なので、使い捨て用の「temp（一時）」フォルダを1つだけ用意しておくと気軽に試せる。",
    "whenToUse": "ちょっとした確認や、結果を残さなくてよい使い捨ての作業をしたいだけで、わざわざ専用フォルダを作るほどではないとき。",
    "howToUse": [
      "デスクトップなどに「temp」など分かりやすい名前のフォルダを1つ作っておく",
      "残さなくてよい作業のときは、毎回この temp フォルダを選んで実行する",
      "中身が溜まったら、フォルダ自体は残したまま中のファイルだけ消して使い回す"
    ],
    "example": "作業フォルダを選ぶ画面で、あらかじめ作っておいた「temp」フォルダを指定 → そのまま「この内容を要約して」などと依頼。残す必要がなければ、後でフォルダ内のファイルをまとめて削除するだけ。",
    "caution": "temp フォルダはあくまで使い捨て用。大事な成果物は案件ごとの専用フォルダで作業し、temp とごちゃ混ぜにしない（消すときに必要なファイルまで消さないため）。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 2,
        "label": "第2回 2-2. Claude Code を始める準備"
      }
    ]
  },
  {
    "id": "tip-037",
    "category": "🌐 共通",
    "level": "basic",
    "title": "使ってほしいSkillは名前で名指しする",
    "summary": "Claudeはどのスキルを使うか自分で判断するが、指示文にスキル名をそのまま書くと、狙ったスキルが確実に発動する。",
    "whenToUse": "特定のスキルを必ず使わせたいのに、Claudeが別のやり方で処理してしまう／スキルを使ってくれないとき。",
    "howToUse": [
      "設定（機能 → Skills）で使いたいスキルをオンにしておく",
      "指示文の中にスキル名をそのまま書く（例：「〇〇スキルを使って」）",
      "最初の応答でClaudeがそのスキル名を読み込んだと表示するので、狙いどおりのスキルが使われたか確認する"
    ],
    "example": "「ワークスタイル図作成スキルを使って、生成AIの仕組みを5枚のスライドで説明して。」",
    "caution": "名指ししなくても発動することはあるが確実性は下がる。狙ったスキルがあるなら名前を書くのが安全。なお設定でオフのスキルは名指ししても使えない。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 5,
        "label": "第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP"
      }
    ]
  },
  {
    "id": "tip-038",
    "category": "🌐 共通",
    "level": "basic",
    "title": "Skillは一から書かず、見本をマネして作る",
    "summary": "標準で用意されている見本スキルの中身を見て、自分の業務に合うものを一部だけ書き換えるところから始めると、ゼロから作るより圧倒的に楽。",
    "whenToUse": "スキルを作ってみたいが、SKILL.mdに何をどう書けばいいか分からず手が止まっているとき。",
    "howToUse": [
      "設定の機能から、標準で用意されている見本スキルの中身を見て、構造（指示書＋付属ファイル）を把握する",
      "自分の業務に近いものを選び、目的に合わせて一部だけ書き換える",
      "書き換え方針も自分で抱え込まず、目的を伝えてClaudeに書き換えてもらう"
    ],
    "example": "「このスキルの中身を、当部署のレポート作成手順に合わせて書き換えたい。手順の部分をこう変えて。」",
    "caution": "見本は英語のことが多い。中身を見て構造を理解するのが目的で、完全に理解できなくても「どこを直せば自分用になるか」が分かれば十分。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 5,
        "label": "第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP"
      }
    ]
  },
  {
    "id": "tip-039",
    "category": "🌐 共通",
    "level": "intermediate",
    "title": "Skillの定義文はClaudeに相談しながら作らせる",
    "summary": "Skillの指示書（SKILL.md）は自分で一から書かなくてよい。Claudeには「Skillを作るためのSkill」が用意されており、作りたい内容を伝えると質問しながら指示書を生成してくれる。",
    "whenToUse": "繰り返し業務をSkill化したいが、指示書を一から書く自信がないとき。見本を探して真似るより、対話で作りたいとき。",
    "howToUse": [
      "設定からSkill作成を始め、作りたいSkillの目的・使う場面・固定したい要素（ロゴ・テンプレ等）を言葉で伝える",
      "Claudeからの質問（何の図を作るか、デザインの方向性は等）に順番に答えていく",
      "出来上がった指示書を読み、自分の意図とずれている部分を指摘して直してもらう"
    ],
    "example": "「自社ロゴを必ず右下に入れた、16対9の資料を作るSkillを作りたい。用途はフローチャートとビジネスプロセス図。質問しながら一緒に作って。」",
    "caution": "丸投げで終わらせず、完成した指示書に一度目を通して「何を作る指示か」を自分で把握しておく。中身を理解していないと、後で意図と違う出力が出たときに直せない。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 5,
        "label": "第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP"
      }
    ]
  },
  {
    "id": "tip-040",
    "category": "🌐 共通",
    "level": "intermediate",
    "title": "SKILL.mdは「日本語で作って」と指定する",
    "summary": "スキルの指示書（SKILL.md）は何も言わないと英語で作られがち。日本語で運用したいなら作成を頼むときに明示する。",
    "whenToUse": "Claudeにスキルを作ってもらうとき。後で自分や同僚が中身を読んで手直しすることを想定しているとき。",
    "howToUse": [
      "スキル作成を依頼するときに「SKILL.md（指示書）は日本語で作って」と一言添える",
      "出来上がった指示書が日本語になっているか確認する",
      "英語のまま作られていたら「日本語に直して」と頼む"
    ],
    "example": "「このスキルを作って。SKILL.md（指示書）は日本語で書いてください。」",
    "caution": "指定しないと英語で作られることが多い。日本語にしておくと、あとで中身を読んで一部を書き換えたいときに楽になる。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 5,
        "label": "第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP"
      }
    ]
  },
  {
    "id": "tip-041",
    "category": "🌐 共通",
    "level": "advanced",
    "title": "Skillの出力ブレは「枠を先に固定」して防ぐ",
    "summary": "毎回まるごと作らせると体裁が揺れる。先に枠（テンプレート）を一度だけ作り、以降はその枠を固定して中身だけ差し替える設計にすると、ロゴ位置や余白がブレずに安定する。",
    "whenToUse": "同じレイアウト・体裁で資料やドキュメントを繰り返し作りたいのに、毎回少しずつ仕上がりが変わってしまうとき。",
    "howToUse": [
      "ロゴ位置や余白など固定したい部分を、一度だけ枠（テンプレート）として作る",
      "その枠の画像やファイルを「素材」としてスキルに同梱しておく",
      "以降は「同梱の枠を使って中身だけ変えて」という指示にし、枠は毎回作り直させない"
    ],
    "example": "「添付のテンプレート枠は変えずに固定して、中身だけ今回の内容に差し替えて資料を作って。」",
    "caution": "枠を毎回ゼロから作り直させると、ロゴ位置や余白に揺れが出る。固定したい要素は「素材」としてスキルに同梱し、再生成させないのがコツ。なお枠やプログラムをスキルに組み込む作業自体はやや上級者向けで、最初はAIに相談しながら少しずつ整えるとよい。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 5,
        "label": "第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP"
      }
    ]
  },
  {
    "id": "tip-042",
    "category": "🌐 共通",
    "level": "intermediate",
    "title": "作ったSkillはエラーを見て少しずつ直す",
    "summary": "スキルは一発で完璧にならない。出力の不具合を具体的に伝え、その指摘を指示書（SKILL.md）に反映する作業を繰り返して育てる。",
    "whenToUse": "自作スキルを実行したら、ロゴが出ない・体裁が崩れるなど期待どおりにならなかったとき。",
    "howToUse": [
      "何がどうおかしかったかを具体的に伝える（例：右下のロゴが表示されていない）",
      "「原因を教えて」とClaudeに尋ね、返答から直すべき点を確認する",
      "その修正点をスキルの指示書（SKILL.md）に反映し、もう一度実行して確認する"
    ],
    "example": "「今の出力、右下のロゴが表示されていない。原因を教えて。直したらスキルの指示書（SKILL.md）にも反映して。」",
    "caution": "最初からうまくいくことは少ない。「実行→不具合を指摘→指示書に反映」を数回繰り返す前提で取り組むと挫折しにくい。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 5,
        "label": "第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP"
      }
    ]
  },
  {
    "id": "tip-043",
    "category": "💬 Chat 個別",
    "level": "basic",
    "title": "Skillは設定でオンにしてから使う",
    "summary": "スキルは「設定 → 機能」でオンにして初めて使える。複数オンにしておけば、依頼内容からClaudeがどれを使うか判断してくれる（名指しすればより確実に発動する）。",
    "whenToUse": "スキルを使った依頼をしたのに反応がない／そもそもスキルを使い始めたいとき。",
    "howToUse": [
      "設定を開き、「機能」からスキルの一覧を表示する",
      "使いたいスキルにチェックを入れてオンにする（複数選択可）",
      "チャットに戻り、依頼する。確実に使わせたいときはスキル名を添える"
    ],
    "example": "（設定でスキルをオンにした後）「〇〇スキルを使って、この内容をスライドにして。」のように、スキル名を入れて依頼すると確実。",
    "caution": "オンにし忘れると名指ししても発動しない。逆に関係ないスキルを大量にオンにすると選択がぶれる原因になるので、使うものに絞る。スキル自体が表示されない場合は利用環境（プランや機能の有無）による。",
    "relatedSession": "第1回",
    "relatedSections": [
      {
        "m": 0,
        "s": 14,
        "label": "第1回 1-15. よく使う手順を Skill にする（入門）"
      }
    ]
  },
  {
    "id": "tip-044",
    "category": "⚡ Claude Code 個別",
    "level": "intermediate",
    "title": "配布されたSkillはファイルから取り込んで使う",
    "summary": "スキルはファイル（ZIPまたはスキルファイル）として保存・配布できる。同僚や講師が作ったスキルを受け取ったら、設定から取り込んで自分の環境で使える。",
    "whenToUse": "同僚や講師から配布されたスキルファイルを使いたいとき。自分が作ったスキルを保存して、別の環境でも使い回したいとき。",
    "howToUse": [
      "自分で作ったスキルは、画面から「ファイルとして保存」する（受け取った場合は、もらったファイルを用意する）",
      "Claudeの設定を開き、「機能」の画面で「追加」を選ぶ",
      "スキルファイル（ZIPまたはスキルファイル）をアップロードする",
      "取り込んだスキルを名前で名指しして、実行できるか確認する"
    ],
    "example": "「（取り込んだ）営業レポート作成スキルを使って、今月の数字でレポートを作って。」",
    "caution": "この方法で取り込んだスキルは Chat・Cowork で使える（Claude Code とは別管理）。スキルに付属するファイル（テンプレートや素材）も一緒に含まれているか確認する。取り込んだ直後はうまく動かないこともあるので、まず簡単な内容で試してから本番に使う。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 5,
        "label": "第2回 2-5. AIを“自分仕様”にする道具 — CLAUDE.md・Skills・MCP"
      }
    ]
  },
  {
    "id": "tip-045",
    "category": "⚡ Claude Code 個別",
    "level": "intermediate",
    "title": "サブエージェントを「いつ使う/使わないか」で見極める",
    "summary": "情報量が多い・タスクを並列に分けられる・あえて異なる視点が欲しい、の3条件のどれかに当てはまるときだけサブエージェント並列を使う。簡単・短い・手順が一直線の作業には使わない。",
    "whenToUse": "Claude Code で「複数のエージェントに分担させようか、1つのClaudeに任せようか」迷ったとき。",
    "howToUse": [
      "依頼内容が次の3条件のどれかに当てはまるか確認する：(1)情報量が多く1つの会話では精度が落ちる (2)観点ごとに並列で分けられる (3)あえて異なる視点で検証したい",
      "どれにも当てはまらない（簡単な質問・短い作業・手順が一本道）なら、分担させず1つのClaudeにそのまま頼む",
      "迷ったら、まずサブエージェントを使わず1つのClaudeに1回頼んでみて、出力が薄ければ分担に切り替える"
    ],
    "example": "このリサーチは観点が5つあって1回の会話だと浅くなりそうなので、観点ごとにサブエージェントで並列調査して、最後に統合してください。",
    "caution": "簡単な作業にまで並列で分担させると、明らかに過剰なボリュームになり時間も容量も無駄になる。「楽しいから何でも分担」は避け、効果が出る場面を選ぶ。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 6,
        "label": "第2回 2-6. 使いこなす：Subagents（分担・並列）"
      }
    ]
  },
  {
    "id": "tip-046",
    "category": "🌐 共通",
    "level": "intermediate",
    "title": "アイデア出しは「ベストプラクティス→発散→評価」の3段で頼む",
    "summary": "いきなり「アイデアを出して」ではなく、まず成功パターンを調べさせ、それを踏まえて発散させ、最後に評価基準で採点させる。素のアイデア出しとは別物のクオリティになる。",
    "whenToUse": "ネーミング・企画名・施策案など、ゼロから出すと「ありがちな案」しか出てこないアイデア出しのとき。",
    "howToUse": [
      "ステップ1：その領域で成功している事例の共通ルール・パターンを先に調べてまとめさせる",
      "ステップ2：まとめたパターンを踏まえて、案を20〜30個ほど一気に発散させる",
      "ステップ3：あらかじめ決めた評価基準（覚えやすさ・意味の重なり等）で各案を採点させ、おすすめを絞り込ませる"
    ],
    "example": "コミュニティ名を考えます。まず成功しているコミュニティ名の共通パターンを調べてまとめ、それを踏まえて案を30個発散し、最後に『覚えやすさ・意味の広がり・読みやすさ』の基準で採点しておすすめを3つ出してください。",
    "caution": "背景情報（業界・狙い・想定読者）を渡さないと、調べる方向がぶれて的外れな案になる。最初に前提を具体的に書く。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 6,
        "label": "第2回 2-6. 使いこなす：Subagents（分担・並列）"
      }
    ]
  },
  {
    "id": "tip-047",
    "category": "🌐 共通",
    "level": "intermediate",
    "title": "リサーチは「並列調査→統合→批判的に再検証」で深める",
    "summary": "観点ごとに並列で調べさせて統合し、そのまま終わらせず「現実性・網羅性・論理整合性」で2段階目の検証をかけてから最終レポートにする。広げるだけでなく、検証する工程を必ず挟む。",
    "whenToUse": "1回のディープリサーチでは浅い・偏ると感じる、幅と確からしさの両方が要るリサーチのとき。",
    "howToUse": [
      "調べたい観点を複数に分け、それぞれ並列で調査・要約させる",
      "全観点を1本のレポートに統合させる",
      "そのレポートが妥当か、現実性・網羅性・論理的整合性の観点で批判的に検証させ、修正版を作らせる"
    ],
    "example": "このテーマを『市場の需要』『成功パターン』『ロードマップ』の3観点で並列調査し、1本に統合してください。そのうえで、結論が現実的か・網羅できているか・論理に飛躍がないかを批判的に検証し、最終レポートに直してください。",
    "caution": "検証工程を省くと「それっぽいが甘い」結論で止まる。広げて終わりにせず、必ず2段階目の検証を指示する。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 6,
        "label": "第2回 2-6. 使いこなす：Subagents（分担・並列）"
      }
    ]
  },
  {
    "id": "tip-048",
    "category": "🌐 共通",
    "level": "intermediate",
    "title": "批判・検証は「役割を分けた別の担当」にやらせる",
    "summary": "同じClaudeに続けて「これを批判して」と頼んでも、自分が出した案には甘くなり、賛成と反対の立場が混ざって精度が下がる。批判・検証は『反証専門』など役割をはっきり分けた別の担当にやらせると、弱点が出やすくなる。",
    "whenToUse": "自分の案や下書きの弱点を本気で潰したいとき。企画・提案・結論を、賛成寄りにならず多角的にチェックしたいとき。",
    "howToUse": [
      "まず案や下書きを用意する（Claudeに作らせても、自分で書いても良い）",
      "新しい会話を開くか、明確に役割を切り替えて『あなたは反証専門の担当です』と立場を固定し、案を渡して弱点・抜け・反対意見を洗い出させる",
      "出てきた指摘を踏まえて、元の案を直す（採否は最後に自分で判断する）"
    ],
    "example": "あなたは『反証専門』のレビュー担当です。賛成の立場は取らず、この企画案の前提の弱さ・抜けているリスク・想定される反対意見だけを遠慮なく挙げてください。良い点は書かなくて構いません。",
    "caution": "同じ会話で「いいね」と褒めた直後に「批判して」と続けると立場が混ざり甘くなりやすい。役割（反証専門など）を最初にはっきり指定するのがコツ。出てきた批判を全部受け入れる必要はなく、採否の最終判断は自分で行う。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 6,
        "label": "第2回 2-6. 使いこなす：Subagents（分担・並列）"
      }
    ]
  },
  {
    "id": "tip-049",
    "category": "⚡ Claude Code 個別",
    "level": "advanced",
    "title": "結論を出す前に「6つの帽子」で多角検証させる",
    "summary": "客観的事実・感情・リスク・利点・新発想・全体整理という役割の違うエージェントに同じテーマを並行で検討させ、最後に1本に統合する。1体に任せると揃いきらない視点を漏れなく網羅でき、賛否・リスク・機会を抜け落ちなく洗い出せる。",
    "whenToUse": "重要な意思決定や、賛否・リスク・機会を漏れなく洗い出したいテーマを、複数のサブエージェントに役割分担させて検討させるとき。",
    "howToUse": [
      "テーマを決め、6つの役割（事実／感情／リスク／利点／新発想／全体整理）でそれぞれ並行して分析させる",
      "分析が出そろったら『結果を1本に統合して』と明示的に依頼し、機会・リスク・対応策・結論を整理させる（統合は自動では始まらないことがある）",
      "出てきた論点を、自分の意思決定の材料として読み解く"
    ],
    "example": "『マルチエージェントを当部署で活用する価値』を、6つの帽子（事実・感情・リスク・利点・新発想・全体整理）の役割に分けて並行で多角的に分析し、終わったら1本のレポートに統合して、機会・リスク・対応策・結論を整理してください。",
    "caution": "市場成長率や生産性向上率など、AIが出した数値は検証なしの推定のことがある。レポート内の数字は出典を確認し、社外資料に転記する際は鵜呑みにしない。役割を分けた複数エージェントを並列で動かす使い方なので、1つのClaude Codeで足りる軽いテーマには使わない。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 6,
        "label": "第2回 2-6. 使いこなす：Subagents（分担・並列）"
      }
    ]
  },
  {
    "id": "tip-050",
    "category": "⚡ Claude Code 個別",
    "level": "advanced",
    "title": "サブエージェントは「軽いモデル＋出力字数の上限」で省エネにする",
    "summary": "分担する子エージェントまで最上位モデルにすると容量がすぐ尽きる。子は軽めのモデルにし、子の最終出力に字数上限を付けると、親に渡る情報が膨らみすぎず、コストを抑えつつ質を保てる。",
    "whenToUse": "サブエージェントを多数使うと容量・コストがすぐ上限に達してしまうとき。親に渡る情報量を整えて統合を安定させたいとき。",
    "howToUse": [
      "子エージェントへの指示に「最終結果は2000文字まで」など字数の上限を付ける（指示文だけで誰でもできて、最も効きやすい）",
      "子はしっかり調査し、詳細は手元に持たせたうえで、親には要点だけ返すよう指示する",
      "モデルを選べる設定がある場合は、全体まとめ役の親を高性能モデル、分担する子を軽めのモデルに割り当てる",
      "親はその要約を受け取って統合するだけにし、情報量が膨らみすぎないようにする"
    ],
    "example": "各サブエージェントはしっかり調査しつつ、私に返す最終結果は2000文字以内にまとめてください。詳細は各自で持っておき、要点だけ親に渡してください。",
    "caution": "子の出力が多すぎると、それを全部受け取る親が情報過多でパンクする。字数上限で渡す量を絞るのが有効。モデルの割り当ては環境によってできない場合もあるので、まず字数上限から試す。本文に出てくる具体的なモデル名・プラン名は変わりやすいので鵜呑みにしない。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 6,
        "label": "第2回 2-6. 使いこなす：Subagents（分担・並列）"
      }
    ]
  },
  {
    "id": "tip-051",
    "category": "🌐 共通",
    "level": "advanced",
    "title": "調べた成果を「専門家プロンプト」に変えて使い回す",
    "summary": "リサーチや発散で一度しっかり調べた領域知識を、その場で消費して終わりにせず「○○の専門家」として振る舞うプロンプトに凍結しておく。次回からは調べ直さず、その専門家プロンプトを単発で貼って相談できる。",
    "whenToUse": "同じ領域の検討を今後も繰り返すとき。一度ちゃんと調べた知見を、毎回ゼロから調べ直さずに済む資産として残したいとき。",
    "howToUse": [
      "リサーチや発散で得た成功パターン・前提知識・判断基準をまとめさせる",
      "その内容を「この領域の専門家として相談に乗るためのプロンプト」に書き換えてもらう",
      "次回からはそのプロンプトを貼るだけで、調べ直さずに専門家として相談する"
    ],
    "example": "今回まとめたネーミングの成功パターンと判断基準を使って、『ネーミングの専門家として相談に乗るためのプロンプト』を作ってください。次回からはこれを貼って単発で相談したいので、前提知識と判断基準を盛り込んでください。",
    "caution": "知見は時間が経つと古くなる。重要なテーマは定期的に調べ直して専門家プロンプトを更新する。チーム内で使い回す共通の型として残すと効果が大きい。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 6,
        "label": "第2回 2-6. 使いこなす：Subagents（分担・並列）"
      }
    ]
  },
  {
    "id": "tip-052",
    "category": "🌐 共通",
    "level": "basic",
    "title": "「相談」ではなく「ゴールごと任せる」依頼に切り替える",
    "summary": "AIエージェントは壁打ち相手ではなく仕事を任せる相棒。完成形のゴールを1回の依頼で渡し、入り口から出口まで通しでやらせる。",
    "whenToUse": "これまでチャットに「〜について教えて」と相談だけしていた時。作業の一部だけ手伝わせて、結局自分で仕上げていた時。",
    "howToUse": [
      "依頼を「途中まで」ではなく「最終成果物まで」で書く（例：分析だけでなく、まとめページの作成まで含める）",
      "素材の在りか・調べる範囲・最終的な形（Excel/ページ/メモ等）を1回の依頼にまとめて渡す",
      "返ってきた成果物を自分で確認し、足りなければ追加で依頼する"
    ],
    "example": "このフォルダの営業日報を全部読んで、解約に関する記述を抽出し、どんなパターンがあるかを整理したうえで、結果を1枚の説明ページにまとめてください。",
    "caution": "いきなり大きく任せる前に、影響の小さい作業で試す。重要な成果物ほど、出てきたものを必ず人間が確認する。",
    "relatedSession": "第1回",
    "relatedSections": [
      {
        "m": 0,
        "s": 0,
        "label": "第1回 1-1. Claudeとは何か"
      }
    ]
  },
  {
    "id": "tip-053",
    "category": "🌐 共通",
    "level": "basic",
    "title": "任せる前に「AIにできること」の引き出しを増やす",
    "summary": "AIが何をできるか知らないと、そもそも頼もうという発想が出ない。できることの引き出しを増やすほど、任せられる仕事の幅が広がる。",
    "whenToUse": "「これは手作業しかない」と思い込んで自分でやっている時。AIに何を頼めばいいか思いつかない時。",
    "howToUse": [
      "普段自分が手作業でやっている定型業務を一度書き出す（資料の要約、表データの傾向読み取り、議事録の論点整理、文章の言い回し統一など）",
      "その一つひとつを「これ頼める？」とAIに聞いてみて、できた／できなかったを自分用のメモに残す",
      "次に似た作業が来たら、メモの引き出しから「これも任せられそう」と発想して頼んでみる"
    ],
    "example": "普段Excelで手集計している月次の問い合わせ件数、表を貼るので種類ごとの傾向と気づきを3点にまとめてもらえますか。",
    "caution": "「たぶんできるはず」で重要作業をいきなり丸投げしない。初めての種類の依頼は、まず少量・コピーで試して結果を自分で確認する。なお、ファイルの一括処理など手元のフォルダを扱う作業は Cowork / Claude Code 向きで、Chat 単体ではできない点に注意。",
    "relatedSession": "第1回",
    "relatedSections": [
      {
        "m": 0,
        "s": 0,
        "label": "第1回 1-1. Claudeとは何か"
      }
    ]
  },
  {
    "id": "tip-054",
    "category": "🌐 共通",
    "level": "basic",
    "title": "成果物の重要度で「確認の濃さ」を変える",
    "summary": "間違いの影響が大きい成果物ほど確認を厚くする。すべてを同じ濃さで確認するのではなく、影響度でメリハリをつけるのが任せる時代の確認の仕方。",
    "whenToUse": "AIに任せた結果をそのまま使ってよいか迷う時。確認にどこまで時間をかけるか決めたい時。",
    "howToUse": [
      "成果物を「直せばよいもの」と「間違うと影響が大きいもの」に仕分ける",
      "影響が大きいもの（数値・出典・対外資料）は、根拠まで自分で確認する",
      "軽いものは目視で済ませ、確認のメリハリで時間を使い分ける"
    ],
    "example": "この調査結果のうち、市場規模の数字と出典だけ、根拠になった箇所を引用して示してください。",
    "caution": "「AIが作ったから正しい」と思わない。特に数字・固有名詞・引用は、AIの説明をうのみにせず一次情報で裏取りする。",
    "relatedSession": "第1回",
    "relatedSections": [
      {
        "m": 0,
        "s": 9,
        "label": "第1回 1-10. Research で調査する"
      }
    ]
  },
  {
    "id": "tip-055",
    "category": "🌐 共通",
    "level": "basic",
    "title": "まず1つ、実際の仕事を任せて体で覚える",
    "summary": "細かい機能や設定を先に勉強しても使えるようにはならない。実際に仕事を振って動きを見るのが上達の最短ルート。",
    "whenToUse": "「使い方が分からないから」と手を出せずにいる時。研修後に何から始めるか迷っている時。",
    "howToUse": [
      "今ちょうどある実務を1つ選ぶ（資料の下書き、フォルダ整理、調査など）",
      "機能を調べる前に、まず普通の言葉で依頼してみる",
      "出てきた結果・つまずき・想定外の動きから「次はこう頼もう」を学ぶ"
    ],
    "example": "（手元の実タスクで）この案件の打ち合わせメモを読んで、論点と次にやることを箇条書きで整理してください。",
    "caution": "最初の練習は、失敗しても困らないコピーや軽いタスクで。本番データでいきなり試さない。",
    "relatedSession": "第1回",
    "relatedSections": [
      {
        "m": 0,
        "s": 0,
        "label": "第1回 1-1. Claudeとは何か"
      }
    ]
  },
  {
    "id": "tip-056",
    "category": "📂 Cowork 個別",
    "level": "intermediate",
    "title": "フォルダごと渡して複数ファイルを横断要約させる",
    "summary": "デスクトップ型のCoworkは自分のPC内のフォルダを読める。1ファイルずつでなく、フォルダごと指定して中の全ファイルを横断し、共通形式で整理させられる。",
    "whenToUse": "議事録・日報・文字起こしなど同じ種類のファイルが大量にあり、横断して傾向や共通点を出したい時。",
    "howToUse": [
      "対象ファイルを1つのフォルダにまとめておく",
      "Coworkでそのフォルダを開いて（指定して）、「中の全ファイルを読んで〜」と依頼する",
      "抽出条件（どのファイルか／どんなパターンか）と、出力の形式（同じ項目立てで1ファイルに）も一緒に指定する"
    ],
    "example": "このフォルダ内のイベント文字起こしを全部読んで、良かった点・反省点・改善点を、イベントごとに同じ項目立てで1ファイルにまとめてください。",
    "caution": "件数が10件でも100件でも依頼の仕方は同じ。対象はローカル（自分のPC内）のフォルダで、外部クラウドの接続は前提にしない。原本を直接いじられないよう、フォルダの扱い方は別TIP『Coworkは作業コピーで使う』を参照。",
    "relatedSession": "第1回",
    "relatedSections": [
      {
        "m": 0,
        "s": 12,
        "label": "第1回 1-13. Cowork でファイル作業を任せる"
      }
    ]
  },
  {
    "id": "tip-057",
    "category": "📂 Cowork 個別",
    "level": "intermediate",
    "title": "PC内のファイルを扱う仕事はCowork、対話だけで済む仕事はChatに振り分ける",
    "summary": "自分のPCのフォルダ・ファイルを直接読み書きさせたい仕事はCowork、添付や対話だけで完結する相談・下書き・要約はChatが向く。仕事が「PC内のファイルを触るか」で選ぶ。",
    "whenToUse": "その仕事をChatとCoworkのどちらに任せるか迷った時。Chatで「手元のフォルダのファイルをまとめて触りたいのにアップロードが面倒／できない」とつまずいた時。",
    "howToUse": [
      "扱う対象が自分のPC内のフォルダ・ファイルかどうかで判断する",
      "壁打ち・下書き・1ファイルの要約など対話で完結する仕事はChatに任せる",
      "複数ファイルの整理・加工・一括処理などPC内のフォルダを直接触る仕事はCoworkに切り替える"
    ],
    "example": "「このフォルダの議事録10本を読んで案件ごとに仕分け、一覧表にして」→ Cowork。「この企画書の構成を一緒に練りたい」→ Chat。",
    "caution": "Chatはファイルをアップロードして読ませる方式で、PC内のフォルダを直接は触れない。Coworkは渡したフォルダにアクセスするので、使う前に対象フォルダの範囲を確認する。利用できるモードは社内ポリシーの範囲で使う。",
    "relatedSession": "第1回",
    "relatedSections": [
      {
        "m": 0,
        "s": 12,
        "label": "第1回 1-13. Cowork でファイル作業を任せる"
      }
    ]
  },
  {
    "id": "tip-058",
    "category": "⚡ Claude Code 個別",
    "level": "intermediate",
    "title": "差分（どこが変わったか）を確認してから承認する",
    "summary": "多くのAIツールは依頼のたびに全体を作り直すので、どこが変わったか分かりにくい。Claude Codeは編集前に変更箇所を差分（変更前・変更後の対比）で見せて承認を求めるので、内容を確かめてから承認する習慣をつける。",
    "whenToUse": "既存ファイルをClaude Codeに部分修正させた時。「全部作り直されて、どこが変わったか分からない」を防ぎたい時。",
    "howToUse": [
      "修正を依頼したら、すぐ承認せず、提示された差分（変更前・変更後）に目を通す",
      "変更箇所が自分の意図通りか、対象ファイル・対象範囲も含めて確認する",
      "問題なければ承認し、意図と違えば拒否して該当箇所だけ直すよう伝える"
    ],
    "example": "このファイルを修正する前に、変更しようとしている箇所を変更前・変更後の対比で見せてください。確認してから承認します。",
    "caution": "差分を見ずに承認を連打しない。意図しない箇所まで書き換わっていないか、対象ファイルを限定したうえで確認する。なお差分を対比で確認できる体験は、IDE で開くとさらに見やすくなる。",
    "relatedSession": "第2回",
    "relatedSections": [
      {
        "m": 1,
        "s": 7,
        "label": "第2回 2-7. 実践TIPS・立て直し方"
      }
    ]
  }
];

// セクション → 関連TIPS逆引き
function getRelatedTipsForSection(moduleIndex, sectionIndex) {
  if (typeof TIPS === 'undefined') return [];
  return TIPS.filter(t => (t.relatedSections || []).some(r => r.m === moduleIndex && r.s === sectionIndex));
}

// 修了テスト用の問題（全モジュールのクイズからシャッフルして出題）
function generateFinalTestQuestions() {
  const questions = [];
  MODULES.forEach((mod, modIndex) => {
    mod.quiz.forEach((q) => {
      questions.push({
        ...q,
        moduleIndex: modIndex,
        moduleName: mod.shortTitle
      });
    });
  });
  // シャッフル
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  return questions;
}
