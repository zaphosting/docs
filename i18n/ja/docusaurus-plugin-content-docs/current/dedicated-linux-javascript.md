---
id: dedicated-linux-javascript
title: '専用サーバー：JavaScriptのインストール'
description: "Node.js、Deno、Bunをサーバーにインストールして効率的にJavaScriptランタイムを管理する方法をチェック → 今すぐ詳しく見る"
sidebar_label: JavaScriptのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

このガイドではNode.js、Deno、Bunのインストール手順を紹介します。これらのコマンドはSSH経由で実行する必要があります。SSHでサーバーに接続する方法がわからない場合は、[初回アクセス（SSH）](vserver-linux-ssh.md)をご覧ください。



## 準備

サーバーに何かをインストールする前に、OSに対応したアップデートコマンドを実行してサーバーのセキュリティを保つことをおすすめします。

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

まず、どのJavaScriptランタイムをインストールするか決めましょう。各ランタイムについて詳しく解説しているオンラインリソースはたくさんありますが、このガイドでも基本的な使い方やコード例を紹介します。NodeJSは最も広く使われている人気の選択肢なのでおすすめです。

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Node.jsランタイムのインストール

Node.jsはLinuxディストリビューションのパッケージマネージャーかnvmを使ってインストールできます。通常はaptを使うのが簡単なのでおすすめです。

<Tabs>
<TabItem value="apt" label="パッケージマネージャー" default>

以下のコマンドを実行してパッケージマネージャー経由でNode.jsをインストールします。

```
apt install nodejs -y
```

プロジェクト用にNode.jsパッケージをインストールするにはnpmパッケージマネージャーも必要です。

```
apt install npm
```

### Node.jsを最新バージョンにアップデートする

`node -v`を実行するとインストールされているNode.jsのバージョンが表示されます。通常は最新ではないので、最新機能を使うためにアップデートが必要です。幸いnpmパッケージの`n`を使うと簡単にアップデートできます。

まず`npm install -g n`で`n`をインストールし、その後`n [version]`（[version]は任意のバージョン番号）を実行して任意のNode.jsバージョンをインストールします。

:::tip
一般的には最新のLong Term Support（LTS）バージョンを使うのがおすすめです。`n lts`でインストールできます。
:::

</TabItem>
<TabItem value="nvm" label="nvm">

nvmを使ったNode.jsのインストールは、複数バージョンを切り替えながらそれぞれのパッケージを管理したい場合に便利です。

まずcurlがインストールされていることを確認し、以下のコマンドを実行します。

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

これでGitHubからnvmのインストールスクリプトを取得して実行します。

:::note
インストール後にnvmコマンドが使えない場合は、`source ~/.bashrc`を実行してbashの設定を再読み込みしてください。
:::

前述の方法と同様に、`nvm install v[version]`で任意のNode.jsバージョンをインストールできます。利用可能なバージョン一覧は`nvm list-remote`、インストール済みバージョンは`nvm list`で確認可能です。

:::tip
LTSバージョンは`nvm install --lts`でインストールできます。
:::

</TabItem>
</Tabs>

### Node.js & npmの実行

npmはNode.jsの公式パッケージマネージャーで、インターネット上のパッケージをインストールする際に使います。

:::note
npmの全パッケージは[公式サイト](https://www.npmjs.com/)で探せます。
:::

### 新しいプロジェクトの作成

新しいNode.jsプロジェクトを始めるときは、まず新しいディレクトリを作成（`mkdir [project-name]`）するか空のフォルダに移動して、`npm init`コマンドを実行してセットアップを開始します。これにより`package.json`ファイルが作成され、Node.jsの設定ファイルとして機能します。

プロジェクト初期化後、`index.js`というファイルを作成してコードを書きます。例として、デフォルトのポート80でシンプルなHTTPサーバーを作り、localhostからアクセスされたらテストメッセージを返すコードを以下に示します。

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

Denoのインストールはコンソールで`curl -fsSL https://deno.land/install.sh | sh`と入力するだけで簡単にできます。

:::tip
現在のインストールバージョンは`deno --version`で確認できます。
:::

### Denoを最新バージョンにアップデートする

Denoのアップデートは`deno upgrade`コマンドで簡単に行えます。

### Denoの実行

Denoを使い始めるには、新しく`index.ts`ファイルを作成してコードを書きます。例として、デフォルトのポート80でシンプルなHTTPサーバーを作り、localhostからアクセスされたらテストメッセージを返すコードを以下に示します。

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

このコードは`deno run --allow-net index.ts`コマンドで実行でき、ブラウザで`localhost:80`にアクセスして動作を確認できます。

:::info
Denoはセキュリティを重視して作られているため、`--allow-net`のような権限を明示的に許可する必要があります。
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bunランタイムのインストール

Bunの公式インストール方法はcurlかnpmの2通りがあります。

<Tabs>
<TabItem value="curl" label="curl" default>

`curl -fsSL https://bun.sh/install | bash`を実行するとサーバーにBunがインストールされます。

:::tip
他のバージョンをインストールしたい場合は、`curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"`を使います。
:::

</TabItem>
<TabItem value="npm" label="npm">

npmがすでにインストールされている場合は、`npm install -g bun`でBunをインストールできます。

</TabItem>
</Tabs>

### Bunの実行

Bunは他のJavaScriptエンジンより高速で、Node.jsに似たセットアップが特徴です。空のディレクトリを開いて`bun init`を実行するとセットアップが始まります。

:::note
選択した言語（JSまたはTS）に応じて、Bunは`jsconfig.json`または`tsconfig.json`の設定ファイルを作成します。
:::

Bunを使い始めるには、新しく`index.ts`ファイルを作成してコードを書きます。例として、デフォルトのポート80でシンプルなHTTPサーバーを作り、localhostからアクセスされたらテストメッセージを返すコードを以下に示します。

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

このガイドに従えば、Linuxサーバーに人気のJavaScriptランタイムのいずれかを無事インストールできます。