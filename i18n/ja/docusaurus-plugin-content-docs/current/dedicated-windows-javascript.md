---
id: dedicated-windows-javascript
title: '専用サーバー：JavaScriptのインストール'
description: "WindowsでNode.js、Deno、BunをインストールしてJavaScriptを効率的に動かす方法をチェック → 今すぐ詳しく見る"
sidebar_label: JavaScriptのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドでは、Windows上でNode.js、Deno、Bunをインストールする手順を紹介します。以下の手順はRDP経由で実行してください。RDPでサーバーに接続する方法がわからない場合は、[初回アクセス（RDP）](vserver-windows-userdp.md)ガイドをご覧ください。

<InlineVoucher />

## インストール

まず、どのJavaScriptランタイムをインストールするか決めましょう。各ランタイムについて詳しく解説しているオンラインリソースはたくさんありますが、このガイドでは基本的な使い方のコマンドやコード例も含めています。最も広く使われているNode.jsをおすすめします。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Node.jsランタイムのインストール

### ステップ1：ファイルのダウンロード
お好きなブラウザ（ここではChromeを使用）を開き、[https://Node.js.org/en](https://Node.js.org/en) にアクセスします。

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

次に、`Download Node.js (LTS)`ボタンをクリックしてダウンロードが完了するまで待ちます。

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
インストールは最新のLong Term Support（LTS）バージョンを使うのが一般的におすすめです。
:::

### ステップ2：インストールの実行
ダウンロードしたインストーラーを実行します。`Welcome`画面で`Next`をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Node.jsのライセンス契約を読み、チェックボックスにチェックを入れて同意し、`Next`をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

インストール先のフォルダを指定します。

:::note
デフォルトのインストール先を使うことをおすすめします。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

次の画面ではNode.jsのコアパッケージの一部をインストールしない選択もできますが、通常はそのまま`Next`を押して問題ありません。Chocolateyのインストールオプションもありますが、必須ではありません。

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### ステップ3：インストール完了
`Install`をクリックしてインストールを開始します。完了まで少し時間がかかるので気長に待ちましょう。:)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

完了したら`Finish`をクリックしてNode.jsをサーバーで使い始めましょう。

### Node.jsのバージョン確認とアップデート

`node -v`コマンドでインストール済みのNode.jsのバージョンを確認できます。定期的に最新のLTSバージョンかチェックし、アップデートしたい場合はこの[Install JavaScript](dedicated-windows-javascript.md)ガイドの該当セクションを再度参照してください。

### Node.jsとnpmの使い方

npmはNode.jsの公式パッケージマネージャーで、インターネット上のパッケージをインストールするのに使います。

:::tip
npmの全パッケージは公式[ウェブサイト](https://www.npmjs.com/)で探せます。
:::

### 新しいプロジェクトの作成

新しいNode.jsプロジェクトを始めるときは、まずファイルエクスプローラーで新しいフォルダを作成し、コマンドプロンプトやPowerShellをそのフォルダで開いて`npm init`コマンドを実行します。これにより`package.json`ファイルが作成され、Node.jsの設定ファイルとして使われます。

:::tip
Windowsではファイルエクスプローラーのパスバーをクリックして`cmd`と入力しEnterを押すと、そのフォルダ内でコマンドプロンプトが開けて便利です。
:::

プロジェクト初期化後、`index.js`というファイルを作成してコードを書きます。例として、デフォルトのポート80で動作し、localhostからアクセスするとテストメッセージを返すシンプルなHTTPサーバーを作成します。

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

このコードは`node .`コマンドで実行でき、ブラウザで`localhost:80`にアクセスして動作を確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
npmから外部パッケージをインストールするには`npm install [パッケージ名]`コマンドを使います。
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Denoランタイムのインストール

DenoのインストールはPowerShellで`irm https://deno.land/install.ps1 | iex`と入力するだけで簡単にできます。Windowsの検索バーで`Powershell`を検索し、管理者権限で開いて上記コマンドを実行してください。指示に従って進めます。

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
インストール済みのバージョンは`deno --version`で確認できます。
:::

### Denoのアップデート

`deno upgrade`コマンドで簡単にアップデート可能です。

### Denoの実行

Denoを使い始めるには、新しく`index.ts`ファイルを作成してコードを書きます。例として、デフォルトのポート80で動作し、localhostからアクセスするとテストメッセージを返すシンプルなHTTPサーバーを作成します。

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

このコードは`deno run --allow-net index.ts`コマンドで実行でき、ブラウザで`localhost:80`にアクセスして動作を確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Denoはセキュリティを重視して作られているため、`--allow-net`のような権限を明示的に与える必要があります。
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bunランタイムのインストール

Bunも簡単に1コマンドでインストールできますし、Node.jsを使ったことがあるならnpm経由でのインストールも可能です。

<Tabs>
<TabItem value="command" label="コマンド" default>

PowerShellで`irm bun.sh/install.ps1|iex`を実行するとBunがサーバーにインストールされます。

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
サーバーに必要なファイルが不足している場合、Bunがその旨を教えてくれ、インストーラー実行時にダウンロードリンクも案内されます。

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

すでにnpmがインストールされている場合は、`npm install -g bun`コマンドでBunをインストールできます。

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Bunの実行

Bunは他のJavaScriptエンジンより高速で、Node.jsに似たセットアップが特徴です。空のディレクトリを開き、コマンドプロンプトで`bun init`を実行します。

:::note
選択した言語（JSまたはTS）に応じて、Bunは設定ファイル（jsconfig.jsonまたはtsconfig.json）を作成します。
:::

Bunを使い始めるには、新しく`index.ts`ファイルを作成してコードを書きます。例として、デフォルトのポート80で動作し、localhostからアクセスするとテストメッセージを返すシンプルなHTTPサーバーを作成します。

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

このコードは`bun index.ts`コマンドで実行でき、ブラウザで`localhost:80`にアクセスして動作を確認できます。

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>

## まとめ

おめでとうございます！JavaScriptのインストールが無事完了しました。もし質問やサポートが必要な場合は、毎日対応しているサポートチームまでお気軽にお問い合わせくださいね！🙂

<InlineVoucher />