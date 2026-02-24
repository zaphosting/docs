---
id: dedicated-linux-javascript
title: "LinuxサーバーにJavaScriptランタイムをセットアップ - 最新のWebアプリを動かそう"
description: "Node.js、Deno、Bunのインストールとセットアップ方法を解説。効率的なJavaScriptランタイム管理 → 今すぐチェック"
sidebar_label: JavaScriptのインストール
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドではNode.js、Deno、Bunのインストール手順を紹介します。これらのコマンドはSSH経由で実行する必要があります。SSH接続方法がわからない場合は、[初回アクセス（SSH）](vserver-linux-ssh.md)をご覧ください。



## 準備

サーバーに何かをインストールする前に、OSに対応したアップデートコマンドを実行してサーバーを安全に保つことをおすすめします。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## インストール

まず、どのJavaScriptランタイムをインストールするか決めましょう。各ランタイムの詳細はオンラインにたくさんありますが、このガイドでは基本的な使い方やコード例も紹介します。NodeJSは最も広く使われている人気の選択肢なのでおすすめです。

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Node.jsランタイムのインストール

Node.jsはLinuxディストリビューションのパッケージマネージャーかnvmを使ってインストールできます。通常はaptを使うのが簡単なのでおすすめです。

<Tabs>
<TabItem value="apt" label="パッケージマネージャー" default>

以下のコマンドでパッケージマネージャー経由でNode.jsをインストールします。

```
apt install nodejs -y
```

プロジェクト用のNode.jsパッケージを管理するnpmもインストールしましょう。

```
apt install npm
```

### Node.jsを最新バージョンにアップデートする

`node -v`でインストール済みのNode.jsバージョンを確認できます。通常は最新ではないので、最新機能を使うにはアップデートが必要です。npmパッケージの`n`を使うと簡単にアップデートできます。

まず`npm install -g n`で`n`をインストールし、`n [version]`（[version]はバージョン番号）で任意のNode.jsバージョンをインストール可能です。

:::tip
基本的には最新のLong Term Support（LTS）バージョンを使うのがおすすめです。`n lts`でインストールできます。
:::

</TabItem>
<TabItem value="nvm" label="nvm">

nvmを使うと複数のNode.jsバージョンを切り替えながら、それぞれに対応したパッケージを管理できます。

まずcurlがインストールされていることを確認し、以下のコマンドを実行します。

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

これでGitHubからnvmのインストールスクリプトを取得して実行します。

:::note
インストール後にnvmコマンドが使えない場合は、`source ~/.bashrc`でbashの設定を再読み込みしてください。
:::

あとは`nvm install v[version]`で任意のNode.jsバージョンをインストール可能です。利用可能なバージョン一覧は`nvm list-remote`、インストール済みバージョンは`nvm list`で確認できます。

:::tip
LTSバージョンは`nvm install --lts`でインストールできます。
:::

</TabItem>
</Tabs>

### Node.js & npmの使い方

npmはNode.jsの公式パッケージマネージャーで、インターネット上のパッケージをインストールするのに使います。

:::note
npmの全パッケージは[公式サイト](https://www.npmjs.com/)で探せます。
:::

### 新規プロジェクトの作成

新しいNode.jsプロジェクトを始めるときは、まず新しいディレクトリを作る（`mkdir [project-name]`）か空フォルダに移動して、`npm init`を実行します。これで`package.json`という設定ファイルを作成するための質問が表示されます。

プロジェクト初期化後、`index.js`というファイルを作成し、コードを書きます。例として、デフォルトのポート80で簡単なHTTPサーバーを作り、localhostからアクセスするとテストメッセージを返すコードを以下に示します。

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

このコードは`node .`コマンドで実行でき、ブラウザで`localhost:80`にアクセスして動作を確認できます。

:::tip
npmから外部パッケージをインストールするには`npm install [package-name]`を使います。
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Denoランタイムのインストール

Denoは以下のコマンドを実行するだけで簡単にインストールできます。

```
curl -fsSL https://deno.land/install.sh | sh
```

:::tip
インストール済みのバージョンは`deno --version`で確認可能です。
:::

### Denoを最新バージョンにアップデートする

アップデートは`deno upgrade`コマンドで簡単にできます。

### Denoの使い方

Denoを使い始めるには、新しく`index.ts`ファイルを作成し、コードを書きます。例として、デフォルトのポート80で簡単なHTTPサーバーを作り、localhostからアクセスするとテストメッセージを返すコードを以下に示します。

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

このコードは`deno run --allow-net index.ts`コマンドで実行でき、ブラウザで`localhost:80`にアクセスして動作を確認できます。

:::info
Denoはセキュリティを重視して作られているため、`--allow-net`のような権限指定が必要です。
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bunランタイムのインストール

Bunの公式インストール方法はcurlかnpmの2通りがあります。

<Tabs>
<TabItem value="curl" label="curl" default>

以下のコマンドでBunをサーバーにインストールできます。

```
curl -fsSL https://bun.sh/install | bash
```

:::tip
他のバージョンをインストールしたい場合は、`curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"`を実行してください。
:::

</TabItem>
<TabItem value="npm" label="npm">

npmがすでにインストールされている場合は、以下のコマンドでBunをインストールできます。

```
npm install -g bun
```

</TabItem>
</Tabs>

### Bunの使い方

BunはNode.jsより高速なJavaScriptエンジンを目指して作られており、セットアップも似ています。空のディレクトリで`bun init`を実行して始めましょう。

:::note
選択した言語（JSかTS）に応じて、Bunは設定ファイル（jsconfig.jsonまたはtsconfig.json）を作成します。
:::

Bunを使い始めるには、新しく`index.ts`ファイルを作成し、コードを書きます。例として、デフォルトのポート80で簡単なHTTPサーバーを作り、localhostからアクセスするとテストメッセージを返すコードを以下に示します。

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

このコードは`bun index.ts`コマンドで実行でき、ブラウザで`localhost:80`にアクセスして動作を確認できます。

</TabItem>
</Tabs>

このガイドに沿って進めれば、Linuxサーバーに人気のJavaScriptランタイムのいずれかを無事インストールできます。