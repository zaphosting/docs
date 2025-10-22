---
id: vserver-windows-javascript
title: 'VPS: JavaScriptのインストール'
description: "WindowsでNode.js、Deno、Bunをインストールして効率的にJavaScriptランタイム環境を構築する方法をチェック → 今すぐ詳しく見る"
sidebar_label: JavaScriptのインストール
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、Windows上でNode.js、Deno、Bunをインストールする手順を紹介します。以下の手順はRDP経由で実行する必要があります。RDPでサーバーに接続する方法がわからない場合は、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドをチェックしてください。
<InlineVoucher />

## インストール

まず、どのJavaScriptランタイムをインストールするか決めましょう。各ランタイムについて詳しく解説しているオンラインリソースはたくさんありますが、このガイドでは基本的な使い方のコマンドやコード例も含めて紹介します。Node.jsは最も広く使われていて人気も高いのでおすすめです。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Node.jsランタイムのインストール

### ステップ1: ファイルのダウンロード
お好きなブラウザを開きます（このガイドではChromeを使用します）[https://Node.js.org/en](https://Node.js.org/en) にアクセスしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

次に、`Download Node.js (LTS)`ボタンをクリックしてダウンロードが完了するまで待ちます。

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
インストールは最新のLong Term Support（LTS）バージョンを使うのが一般的におすすめです。
:::

### ステップ2: インストールの実行
ダウンロードしたインストーラーを実行します。`Welcome`画面で`Next`をクリックしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Node.jsのライセンス契約を読み、チェックボックスにチェックを入れて同意し、`Next`をクリックします。

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

次にNode.jsのインストール先を指定します。

:::note
デフォルトのインストール先を使うことをおすすめします。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

次の画面ではNode.jsのコアパッケージの一部をインストールしない選択もできますが、通常はそのまま`Next`を押して問題ありません。Chocolateyのインストールオプションもありますが、必須ではありません。

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### ステップ3: インストールの完了
`Install`をクリックしてインストールを開始します。完了まで少し時間がかかるので気長に待ちましょう。:)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

インストールが終わったら`Finish`をクリックして完了です。これでサーバー上でNode.jsが使えるようになりました。

### Node.jsのバージョン確認とアップデート

`node -v`コマンドで現在のNode.jsのバージョンを確認できます。定期的に最新のLTSバージョンかチェックし、アップデートしたい場合はこの[インストール手順](vserver-windows-javascript.md)をもう一度実行してください。

### Node.jsとnpmの使い方

npmはNode.jsの公式パッケージマネージャーで、インターネット上のパッケージをインストールするのに使います。

:::tip
npmの全パッケージは公式サイトで探せます → [https://www.npmjs.com/](https://www.npmjs.com/)
:::

### 新しいプロジェクトの作成

新しいNode.jsプロジェクトを始めるときは、まずファイルエクスプローラーで新しいフォルダを作り、コマンドプロンプトやPowerShellをそのフォルダで開いて`npm init`コマンドを実行します。これで`package.json`という設定ファイルを作成するための基本情報を入力できます。

:::tip
Windowsではファイルエクスプローラーのパスバーをクリックして`cmd`と入力しEnterを押すと、そのフォルダ内でコマンドプロンプトが開けて便利です。
:::

プロジェクトを初期化したら、`index.js`というファイルを作ってコードを書きます。例として、デフォルトのポート80で動作し、localhostからアクセスするとテストメッセージを返す簡単なHTTPサーバーを作ってみましょう。

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

このコードは`node .`コマンドで実行でき、ブラウザで`localhost:80`にアクセスすると動作を確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
npmから外部パッケージをインストールするには`npm install [パッケージ名]`を使います。
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Denoランタイムのインストール

DenoのインストールはPowerShellで`irm https://deno.land/install.ps1 | iex`と入力するだけで簡単にできます。Windowsの検索バーで`Powershell`を検索し、管理者権限で開いて上記コマンドを実行してください。指示に従って進めましょう。

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
現在のバージョンは`deno --version`で確認できます。
:::

### Denoのアップデート

Denoのアップデートは`deno upgrade`コマンドで簡単に行えます。

### Denoの実行

Denoを使うには新しく`index.ts`ファイルを作り、コードを書きます。例として、デフォルトのポート80で動作し、localhostからアクセスするとテストメッセージを返す簡単なHTTPサーバーを作ってみましょう。

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

このコードは`deno run --allow-net index.ts`コマンドで実行でき、ブラウザで`localhost:80`にアクセスすると動作を確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Denoはセキュリティを重視して作られているため、`--allow-net`のような権限を明示的に許可する必要があります。
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bunランタイムのインストール

Bunも簡単に1コマンドでインストールできますし、Node.jsを使ったことがある人はnpm経由でのインストールも可能です。

<Tabs>
<TabItem value="command" label="コマンド" default>

PowerShellで`irm bun.sh/install.ps1|iex`を実行するとBunがインストールされます。

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
サーバーに必要なファイルが不足している場合、Bunがその情報とダウンロードリンクを教えてくれます。

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

npmがすでにインストールされている場合は、`npm install -g bun`でBunをインストールできます。

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Bunの実行

Bunは他のJavaScriptエンジンより高速に動作するよう設計されており、Node.jsに似たセットアップが特徴です。空のディレクトリを開き、コマンドプロンプトで`bun init`を実行してください。

:::note
選択した言語（JSまたはTS）に応じて、Bunは設定ファイル（jsconfig.jsonまたはtsconfig.json）を作成します。
:::

Bunを使うには新しく`index.ts`ファイルを作り、コードを書きます。例として、デフォルトのポート80で動作し、localhostからアクセスするとテストメッセージを返す簡単なHTTPサーバーを作ってみましょう。

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

このコードは`bun index.ts`コマンドで実行でき、ブラウザで`localhost:80`にアクセスすると動作を確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>



## まとめ

おめでとうございます！VPSにJavaScriptランタイムのインストールと設定が無事完了しました！もし何か質問や問題があれば、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！

<InlineVoucher />