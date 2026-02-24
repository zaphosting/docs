---
id: dedicated-windows-javascript
title: "WindowsサーバーでJavaScriptランタイムをセットアップ - 最新のWebアプリを動かそう"
description: "WindowsにNode.js、Deno、BunをインストールしてJavaScriptを効率的に実行する方法を解説 → 今すぐチェック"
sidebar_label: JavaScriptのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、WindowsにNode.js、Deno、Bunをインストールする手順を紹介します。以下の手順はRDP経由で実行してください。RDP接続方法がわからない場合は、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドを参照してください。



## インストール

まず、どのJavaScriptランタイムをインストールするか決めましょう。各ランタイムについて詳しく解説しているオンラインリソースはたくさんありますが、このガイドでは基本的な使い方やコード例も紹介します。特にNode.jsは最も広く使われている人気の選択肢なのでおすすめです。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Node.jsランタイムのインストール

### ステップ1: ファイルのダウンロード
お好きなブラウザを開きます（このガイドではChromeを使用します）[https://Node.js.org/en](https://Node.js.org/en) にアクセスしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

次に `Download Node.js (LTS)` ボタンをクリックしてダウンロードが完了するまで待ちます。

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
基本的には最新のLong Term Support（LTS）バージョンをインストールすることを推奨します。
:::

### ステップ2: インストールの開始
ダウンロードしたインストーラーを実行します。`Welcome` ページで `Next` をクリックしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Node.jsのライセンス契約書を読み、チェックボックスにチェックを入れて同意し、`Next` をクリックします。

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

次にNode.jsのインストール先を指定します。

:::note
デフォルトのインストール先を使うことをおすすめします。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

次の画面ではNode.jsのコアパッケージの一部をインストールしない選択もできますが、通常はそのまま `Next` を押して問題ありません。Chocolateyのインストールオプションもありますが、必須ではありません。

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### ステップ3: インストール完了
`Install` をクリックしてインストールを開始します。完了まで少し時間がかかるので気長に待ちましょう。:)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

インストールが終わったら `Finish` をクリックして完了です。これでサーバー上でNode.jsが使えるようになりました。

### Node.jsのバージョン確認とアップデート

`node -v` コマンドでインストールされているNode.jsのバージョンを確認できます。定期的に最新のLTSバージョンかチェックし、アップデートしたい場合はこの[Install JavaScript](dedicated-windows-javascript.md)ガイドの該当セクションを再度参照してください。

### Node.jsとnpmの使い方

npmはNode.jsの公式パッケージマネージャーで、インターネット上のパッケージをインストールするのに使います。

:::tip
npmの全パッケージは公式サイトの[こちら](https://www.npmjs.com/)で探せます。
:::

### 新しいプロジェクトの作成

新しいNode.jsプロジェクトを始めるときは、まずファイルエクスプローラーで新しいフォルダを作成し、コマンドプロンプトやPowerShellをそのフォルダで開いて `npm init` コマンドを実行します。これにより `package.json` ファイルを作成するための基本情報を入力するよう求められます。このファイルがNode.jsの設定ファイルになります。

:::tip
Windowsではファイルエクスプローラーのパスバーを一度クリックして `cmd` と入力しEnterを押すと、そのフォルダ内でコマンドプロンプトが開けて便利です。
:::

プロジェクトの初期化が終わったら、`index.js` というファイルを作成してコードを書きます。例として、デフォルトのポート80で簡単なHTTPサーバーを作り、localhostからアクセスされたらテストメッセージを返すコードを以下に示します。

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

このコードは `node .` コマンドで実行でき、ブラウザで `localhost:80` にアクセスすると動作を確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
npmから外部パッケージをインストールするには `npm install [パッケージ名]` を使います。
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Denoランタイムのインストール

DenoのインストールはPowerShellで `irm https://deno.land/install.ps1 | iex` と入力するだけで簡単にできます。Windowsの検索バーで `Powershell` を検索し、管理者権限で開いて上記コマンドを実行してください。指示に従って進めます。

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
インストール済みのバージョンを確認するには `deno --version` を実行してください。
:::

### Denoのアップデート

Denoのアップデートは `deno upgrade` コマンドで簡単に行えます。

### Denoの実行

Denoを使い始めるには、新しく `index.ts` ファイルを作成してコードを書きます。例として、デフォルトのポート80で簡単なHTTPサーバーを作り、localhostからアクセスされたらテストメッセージを返すコードを以下に示します。

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

このコードは `deno run --allow-net index.ts` コマンドで実行でき、ブラウザで `localhost:80` にアクセスすると動作を確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Denoはセキュリティを重視して作られているため、ネットワークアクセスには `--allow-net` のような権限指定が必要です。
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bunランタイムのインストール

Bunも簡単に1コマンドでインストールできますし、Node.jsを使ったことがある人はnpm経由でのインストールも可能です。

<Tabs>
<TabItem value="command" label="コマンド" default>

PowerShellで `irm bun.sh/install.ps1|iex` を実行するとBunがサーバーにインストールされます。

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
サーバーに必要なファイルが不足している場合、Bunがその旨を教えてくれ、インストーラー実行時にダウンロードリンクも案内されます。

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

すでにnpmがインストールされている場合は、`npm install -g bun` を実行してBunをインストールできます。

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Bunの実行

Bunは他のJavaScriptエンジンより高速で、Node.jsに似たセットアップが特徴です。空のディレクトリを開き、コマンドプロンプトで `bun init` を実行してください。

:::note
選択した言語（JSまたはTS）に応じて、Bunは設定ファイル（jsconfig.json または tsconfig.json）を作成します。
:::

Bunを使い始めるには、新しく `index.ts` ファイルを作成してコードを書きます。例として、デフォルトのポート80で簡単なHTTPサーバーを作り、localhostからアクセスされたらテストメッセージを返すコードを以下に示します。

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

このコードは `bun index.ts` コマンドで実行でき、ブラウザで `localhost:80` にアクセスすると動作を確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>

## まとめ

おめでとうございます！JavaScriptランタイムのインストールが無事完了しました。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂



