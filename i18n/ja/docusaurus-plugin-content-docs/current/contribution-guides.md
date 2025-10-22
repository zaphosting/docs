---
id: contribution-guides
title: ガイド作成の流れ
description: "ZAP-Docsに価値あるオリジナルガイドを投稿して、ユーザーにわかりやすく実用的なコンテンツを届ける方法 → 今すぐチェック"
sidebar_label: ガイド作成の流れ
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

このページでは、ZAP-Docsへのガイド投稿の流れを詳しく解説しています。時系列で説明しているので、まずはここから始めるのがおすすめです。

## ステップ1: コンテンツの提案

まずはGitHubリポジトリで提案用のIssueを作成します。どんな変更や改善を行いたいか、詳細を教えてください。

既存のガイドや提案と重複していないか、初心者や上級者に役立つ内容だと自信を持って言えるかを必ず確認してください。既存の提案は[Issuesページ](https://github.com/zaphosting/docs/issues?q=is%3Aissue)でチェックできます。

:::tip
コンテンツやドキュメントのスタイルを理解するために、[ガイドライン](contribution-guides-guidelines.md)を事前に確認するのがおすすめです。
:::

### どんなテーマを求めてる？

ZAP-Hostingで提供している製品やサービス、オープンソースソフトウェアに関する実用的で質の高いガイドを幅広く募集しています。アイデアが欲しい場合は、ZAP-Docsの既存ページを見て、書き方や掲載しているコンテンツの傾向を掴んでみてください。

冒頭でも触れた通り、すべてのコンテンツは著作権法に準拠したオリジナルである必要があります。AIや生成ツール、その他の知的財産の無断使用は厳禁です。ガイドは読者が何をどうすればいいか理解できるよう、ステップごとに丁寧に解説し、最終的に解決策を提供することを目指しています。

#### ほしいガイドリスト

新規ガイドのアイデアとして役立つ提案をまとめたリストがあります。中には特別な報酬ボーナスが付くテーマも！[こちらから手動でリストを確認できます](https://docs.google.com/document/d/13R321FP6Yo3TMQZ07vMARQFlX6n_Or6RIrLpU7IsMfs/edit?usp=sharing)。

<iframe width="800" height="750" src="https://docs.google.com/document/d/e/2PACX-1vRACoNJMjk3rcWyo6LDt8WCvtqB17JpdjsPW3YHpLaZJgfPxGlt4pDEnD1ezOwGW1eljWZYPSyfgrb3/pub?embedded=true"></iframe>
<br></br>

:::note
これはあくまで参考アイデアなので、必ずしもこれに沿う必要はありません。自由にクリエイティブな提案をしてくださいね。
:::

### 提案の提出方法

提案内容がZAP-Docsにふさわしいと確信できたら、[ZAP Docs GitHubリポジトリ](https://github.com/zaphosting/docs)にアクセスし、**Contribution Suggestion**テンプレートを使ってIssueを作成してください。テンプレートに沿って必要事項をすべて記入し、[Contribution Terms](contribution-terms.md)（利用規約）への同意も求められます。

:::caution
報酬を正しく受け取るために、ZAP IDは間違いなく正確に入力してください！
:::

提案を送信したら、3〜5日以内にGitHubのIssue上で返信します。

:::tip
**困ったときは？** [ZAP-Hosting Discordサーバー](https://zap-hosting.com/discord)に気軽に参加して、ZAPコミュニティやスタッフに質問してください。または、[ウェブサイトのサポートチケット](https://zap-hosting.com/en/customer/support/)から「Contribution Program - Guides」と記載してお問い合わせいただければ、ZAP-Hosting貢献チームに繋ぎます。
:::

返信では、提案内容に対するフィードバックや修正希望点をお伝えします。問題があればGitHub Issue上で直接やり取りします。

## ステップ2: ガイドの執筆

ドキュメントの追加や修正を行う際は、必ず[ガイドライン](contribution-guides-guidelines.md)を守り、一貫性と高品質な仕上がりを目指してください。このセクションでは、新規コンテンツ作成や既存コンテンツの修正におけるベストプラクティスと最適なワークフローを詳しく解説します。GitHubの使い方に慣れていない方は、以下の簡単なチュートリアルを参考にしてください。

:::note
[GitHubリポジトリ](https://github.com/zaphosting/docs)で提案が承認されていることを必ず確認してから作業を始めてください。承認されていない場合、報酬は保証できません。
:::

**準備するもの:**
- [GitHubアカウント](https://github.com/)

まずはZAP-Docsリポジトリのフォークを作成します。[ZAP Docs GitHubリポジトリ](https://github.com/zaphosting/docs)にアクセスし、ページ上部の**Fork**ボタンを押してください。

![](https://screensaver01.zap-hosting.com/index.php/s/3AGoSTE7dGTsdz7/preview)

フォーク名は承認された提案に合わせて付け、`Copy the master branch only`にチェックを入れます。作成ボタンを押して数秒待てばフォークが完了します。

フォークができたら、次のセクションで投稿作業を進めましょう。コンテンツ作成には主に2つの方法があります。GitHubのウェブサイト上で直接編集する方法と、リポジトリをローカルにクローンしてIDEで編集する方法です。前者は初心者に優しく手軽、後者はDocusaurusのローカルプレビューができるのがメリットです。

:::tip
Gitに慣れていない方や初心者は、**方法1**のGitHubウェブサイトでの編集をおすすめします。ブラウザだけで完結し、セットアップ不要で簡単です。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### ガイド作成の方法

<Tabs>
<TabItem value="direct" label="方法1: GitHubウェブサイトで直接編集" default>

最も簡単で推奨される方法はGitHubのウェブサイト上で編集することです。ここでは新規ガイドの作成と既存ガイドの編集方法を紹介します。

まずは先ほど作成したフォークにアクセスし、**docs**フォルダを開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/dqptZFrSTrBBHAJ/preview)

ドキュメントファイルはシンプルな命名規則で、最初の単語がガイドの種類（ゲーム、製品、セクションなど）、続く単語が具体的な内容を示します。現在の[ZAP-Docsサイト](https://zap-hosting.com/guides)を見て、どのエリアに該当するか確認するのがおすすめです。例えば`dedicated-windows.md`は専用サーバーのWindows OS向けガイドです。

編集したい既存ファイルを開くか、新規作成するかで手順が変わるので、下のタブから該当する方を選んでください。新規作成は少し準備が必要です。

<Tabs>
<TabItem value="direct_new" label="新規ガイドファイルを作成" default>

例として、Rustというゲームのコマンドに関する新規ガイドを作る提案が承認されたとします。ZAP-Docsやリポジトリを確認すると、ゲームサーバーのカテゴリに**Rust**セクションが既にあります。命名規則と既存ガイドから推測すると、新規ファイル名は`rust-commands.md`が適切です。

新規ファイルを作るには、[GitHubリポジトリ](https://github.com/zaphosting/docs)の**docs**フォルダを開き、画面右側の**Add File**から**Create new file**を選択します。

![](https://screensaver01.zap-hosting.com/index.php/s/xgL3QF9HzJnwARA/preview)

ファイル名欄に`rust-commands.md`と入力してください。

:::info
すべてのガイドはMarkdown形式なので、必ず`.md`拡張子を付けてください。
:::

次にファイルの先頭にメタデータを追加します。簡単なのは既存の`rust-plugins.md`などからメタデータ部分をコピーし、必要に応じて書き換えることです。特に`id`はファイル名（拡張子なし）と**完全に一致**させる必要があります。

例：
```
---
id: rust-commands
title: "Rust: Admin Commands"
description: "Information on Admin commands for Rust from ZAP-Hosting"
sidebar_label: Admin Commands
services:
  - gameserver
---
```

:::note
レビュー時にメタデータは必ずチェックしますが、困ったら気にせず進めて大丈夫です。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/2CJFHoc5LeD4YSn/preview)

</TabItem>

<TabItem value="direct_existing" label="既存ガイドファイルを編集" default>

編集したいファイルを開きます。例として`dedicated-linux-satisfactory.md`を使います。ファイルを開くとMarkdownの簡易プレビューが表示されます。

右上の編集（ペン）アイコンを押すと編集画面が新しいタブで開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/SZTsAikipzCZcg3/preview)

</TabItem>
</Tabs>

#### 続き: コンテンツ作成

ファイルを開いたら、提案内容に沿って本文を書き進めてください。こまめに保存やコミットをして、作業内容を失わないようにしましょう。

:::tip 作業を安全に保存しよう
GitHubのエディタには自動保存機能がないので、ブラウザを閉じたりすると進捗が消えることがあります。

Markdown執筆には**[StackEdit](https://stackedit.io/app#)**のようなツールを使うのがおすすめ。ローカル保存やクラウド同期もでき、完成したらGitHubにコピペしてコミットできます。
:::

編集画面上部の**Preview**ボタンでプレビュー表示に切り替えられます。もう一度押すと編集画面に戻ります。

![](https://screensaver01.zap-hosting.com/index.php/s/4YcQo6q3iAAGYkZ/preview)

:::note Docusaurus固有の要素について
`:::note`や`:::tip`などのアドモニションやタブはGitHubのプレビューでは正しく表示されません。これは通常のMarkdownではないためです。ローカル環境や本番環境では正しく表示されます。
:::

:::info ガイドラインを守ろう
Markdownの書き方や構成、用語などは[ガイドライン](contribution-guides-guidelines.md)を必ず参照してください。
:::

編集が終わったら、**Commit changes...**ボタンを押してコミット画面を開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/2iQCZzzAHsHS2rt/preview)

何をしたか分かるわかりやすいコミットメッセージを入力し、必要に応じて詳細説明も書いてコミットしてください。これでフォークに変更が反映されます。次は**コンテンツの提出**へ進み、プルリクエストを作成しましょう。

</TabItem>

<TabItem value="local" label="方法2: ローカルでIDEを使って編集（gitクローン）">

Visual Studio CodeなどのIDEやエディタでローカル編集したい場合はこちら。新規ガイド作成と既存ガイド編集の方法を解説します。

**準備するもの:**
- お好きなIDE（例: [Visual Studio Code](https://code.visualstudio.com/)）
- [GitHub Desktop](https://desktop.github.com/) またはGit機能のあるツール

まずはフォークしたリポジトリをクローンします。GitHub Desktopなら**Add**→**Clone repository**でフォークを選択するだけで簡単です。IDEにGit機能があれば直接クローンも可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/g8AwEcGa6mBrQ75/preview)

次にVisual Studio Codeでリポジトリフォルダを開きます。左の**Explorer**タブにリポジトリ内のフォルダが表示されます。

ドキュメントファイルの命名規則は先述の通りです。ZAP-Docsサイトで該当するエリアを確認してください。

編集する既存ファイルを開くか、新規作成するかで手順が変わるので、下のタブから該当する方を選んでください。

<Tabs>
<TabItem value="local_new" label="新規ガイドファイルを作成" default>

例としてRustのコマンドに関する新規ガイドを作る提案が承認された場合。ZAP-Docsやリポジトリを確認すると、ゲームサーバーのRustセクションが既にあります。命名規則から新規ファイル名は`rust-commands.md`が適切です。

IDEで`/docs`フォルダを開き、新規ファイルを作成してください。

:::info
必ず`.md`拡張子を付けてMarkdown形式にしてください。
:::

次にファイル先頭にメタデータを追加します。既存の`rust-plugins.md`などからコピーし、必要に応じて書き換えます。`id`はファイル名（拡張子なし）と**完全一致**させてください。

例：
```
---
id: rust-commands
title: "Rust: Admin Commands"
description: "Information on Admin commands for Rust from ZAP-Hosting"
sidebar_label: Admin Commands
services:
  - gameserver
---
```

:::note
レビュー時にメタデータは必ずチェックしますが、困ったら気にせず進めて大丈夫です。
:::

最後に、Docusaurusのサイドバーに新ページを表示させるため、`sidebar.js`ファイルに追加します。Rustセクションは既にあるので、`CTRL+F`でrustを検索し、最後の項目の下に新しい行を作って`rust-commands`を追加してください。新しいセクションが必要なら、他のセクションの書式を真似て追加します。

![](https://screensaver01.zap-hosting.com/index.php/s/TwKjWmCofG5Rs8f/preview)

:::note
新しい行の前にカンマ（`,`）を忘れずに入れて、構文エラーを防いでください。
:::

</TabItem>

<TabItem value="local_existing" label="既存ガイドファイルを編集" default>

既存ファイルの編集は簡単です。`/docs`フォルダ内の対象ファイルを開き、提案内容に沿って変更を加えてください。

</TabItem>
</Tabs>

#### 続き: コンテンツ作成

ファイルが準備できたら、提案内容に沿って本文を書き進めてください。こまめに保存やコミットをして、作業内容を失わないようにしましょう。

`CTRL+SHIFT+V`ショートカットやエディタ右上のプレビューアイコンでMarkdownのライブプレビューが見られます。

:::note Docusaurus固有の要素について
`:::note`や`:::tip`などのアドモニションやタブはGitHubのプレビューでは正しく表示されません。これは通常のMarkdownではないためです。ローカル環境や本番環境では正しく表示されます。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cXgQEswNsbpGMsR/preview)

:::info ガイドラインを守ろう
Markdownの書き方や構成、用語などは[ガイドライン](contribution-guides-guidelines.md)を必ず参照してください。
:::

編集が終わったら、コミットしてフォークにプッシュします。GitHub DesktopなどのGitツールでタイトルと説明を入力し、プッシュボタンを押してください。

![](https://screensaver01.zap-hosting.com/index.php/s/tFdrLknnXn62sZc/preview)

次は**コンテンツの提出**へ進み、プルリクエストを作成しましょう。

:::tip
オプションの**ローカルでのビルドテスト**もぜひ読んでみてください。ローカルで変更を即時反映できるので効率的なワークフローになりますが、必須ではありません。
:::

</TabItem>
</Tabs>

### オプション: ローカルでのビルドテスト

最終的なプルリクエストを作成する前に、ローカルでビルドして動作確認するのがベストプラクティスです。プルリクエストの処理をスムーズにするために推奨しますが、必須ではありません。

:::tip
これは**必須ではありません**。プルリクエスト提出時に自動でビルドが走りますが、ローカルでのデバッグやライブテストに便利です。
:::

:::note
ローカルでの編集チュートリアルに従った場合は、リポジトリのクローンは済んでいるのでこのステップはスキップできます。
:::

**準備するもの:**
- [Node.js v16.14以上](https://nodejs.org/en)
- [GitHub Desktop](https://desktop.github.com/) または [Git](https://git-scm.com/)

まずはフォークをクローンします。GitHub Desktopなら**Add**→**Clone repository**でフォークを選択してください。

Gitを使う場合は、新規フォルダ（例: `Docs Test`）を作り、フォルダ内でGit Bashを開きます。フォークのURLを控え、以下のコマンドを実行します（`[your_url]`はフォークのURLに置き換え）。

```
git clone [your_url]
```

これでローカルにリポジトリがクローンされます。次に必要なモジュールをインストールします。リポジトリフォルダで右クリックしてコマンドプロンプトを開くか、Git Bashを使い、以下を実行。

```
npm install
```

時間がかかりますが、完了すると`node_modules`フォルダが作成されます。エラーが出たらNode.jsが正しくインストールされているか確認してください。

最後にローカルでドキュメントサイトを起動します。

```
npm start
```

完了するとブラウザが自動で開き、`3000`ポートでローカル版サイトが表示されます。ここで本番と同じ見た目で動作確認ができます。

満足したら次のセクションに進み、プルリクエストを作成してください。

## ステップ3: コンテンツの提出

ガイドが完成し、ガイドラインに沿った高品質な内容だと自信がついたら、プルリクエストを作成します。フォークのZAP Docsリポジトリにアクセスし、主要ボタン下の**Contribute**を押してプルリクエストを開きます。

![](https://screensaver01.zap-hosting.com/index.php/s/GLjSno3Ltz3zFpZ/preview)

変更内容の確認画面が表示されます。デフォルトで簡単なチェックリストが入っていますが、不要なら削除してOKです。

タイトルには何をしたか分かる内容を入れ、説明欄には提案のIDを`#000`形式で必ず記載してください。IDがわからなければ、[ZAP Docs GitHubリポジトリ](https://github.com/zaphosting/docs)のIssuesから探せます。

すべて入力・確認できたら、プルリクエストを作成して提出してください。

![](https://screensaver01.zap-hosting.com/index.php/s/mrGm5f2WMttYzFT/preview)

システムが構文や品質チェックを自動で行い、問題なければ数日以内にZAP-Docsチームがレビューします。

レビューで修正依頼があれば対応し、必要に応じてチーム側で修正も行います。すべて完了したら承認され、公開準備が整います。

## ステップ4: ガイド公開＆報酬支払い

プルリクエストが承認され、必要な修正が完了したら、プルリクエスト上で公開予定や報酬支払いに関する重要な情報をお知らせします。

:::info
報酬は主にコンテンツの質や量、その他ZAP貢献チームの評価基準によって決まります。詳細は[報酬について](contribution-rewards.md)をご覧ください。
:::

ZAP-Hostingのガイドに貢献してくれてありがとう！みんなの投稿を心から感謝しています！💚