---
id: vserver-linux-gs-interface
title: "VPS: ゲームサーバー/TS3 インターフェース"
description: "Linux VPSでのゲーム＆ボイスサーバーを自動化インターフェースで簡単セットアップ → 今すぐ詳しくチェック"
sidebar_label: GS/TS3 インターフェース
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

ゲームサーバー製品が自分の好みや期待に合わなかったり、他の形でサービスが必要な場合、VPSを使うのがよくあるベターな選択肢です。でも、すべてのサービスが自動化されていたり、プリインストールされているわけではないので、ゲームサーバーやTeamspeak 3サーバー、ミュージックボットなどのセットアップは自分でやらなきゃいけないことが多いんですよね。

そこで、LinuxベースのVPSや専用サーバー向けに便利なソリューションを開発しました。いわゆるゲームサーバー/Teamspeak 3サーバーインターフェース（GS/TS3 インターフェース）です！

<YouTube videoId="V6qyQFPp_Ls" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/frWNEMQqcMxzRcM/preview" title="Linux VPSでゲームサーバーを経験ゼロからセットアップ！" description="実際に動いているところを見ると理解しやすい？そんなあなたにピッタリ！忙しい時も、じっくり見たい時も、わかりやすく解説した動画をどうぞ！"/>

<InlineVoucher />

## 使い方

使いやすいGS/TS3インターフェースを使えば、LinuxベースのVPSや専用サーバーにTeamspeak 3やその他選択可能なゲームサーバーサービスを数クリックでインストール可能。インストールに特別な知識は不要です。必要なパッケージやサーバーファイルのセットアップ、実際のインストールはすべて自動化されているので、時間も手間も節約できます。

:::warning
GS/TS3インターフェース機能は以下のOSで利用可能です：

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) 近い将来、他のOSや新しいバージョンも対応予定です。
:::

## 対応サービス／ゲーム

GS/TS3インターフェースはゲームサーバー、ボイスサーバー、ミュージックボットのセットアップをサポート。ゲームサーバー製品で提供しているほとんどのゲームがGS/TS3インターフェースでも利用可能です。Linuxで動作しているゲームはすべて対応しています。Windows OSで動くゲームは残念ながらインストール不可で、Linuxサーバーバージョンがある場合のみ手動インストールが可能です。

| サービス    | 対応可 |
| ----------- | ---- |
| ゲームサーバー  | ✔️    |
| ボイスサーバー | ✔️    |
| ミュージックボット (Sinuxbot)   | ✔️    |

## インストールと設定

GS/TS3インターフェースをインストールするには、製品のサーバー管理画面のナビゲーションパネルから **設定** を開き、サブメニューの **Gameserver / TS3** をクリックします。

初回アクセス時は使いやすいセットアップアシスタントに案内されます。インターフェースをセットアップしサーバーに連携するには、まずSSHキーを作成する必要があります。このキーはウェブサイトがサーバーと安全に接続するために必要で、ゲームサーバーやTeamspeak 3サーバーなどのサービスをインターフェース経由で直接セットアップ・管理・操作できるようになります。

そこで、SSHキーを作成します。**Generate SSH key** ボタンをクリックし、続けて **Add key** ボタンでキーを追加してください。

![](https://screensaver01.zap-hosting.com/index.php/s/teZ87eGKRm6iJRa/preview)

**Add Key** をクリックするとSSHキーがサーバーに保存され、GS/TS3インターフェースをサーバーに追加できるようになります。

![](https://screensaver01.zap-hosting.com/index.php/s/QqtCFmC3oxPErD9/preview)

:::info
**注意:** SSHキーがすぐに認識されない場合は、サーバーの再起動とページのリフレッシュを試してみてください。
:::

インストール中は進行状況を確認できます。インターフェースやパッケージのインストール・設定には時間がかかることがあり、通常5〜15分ほどかかります。

![](https://screensaver01.zap-hosting.com/index.php/s/xkWQBEp74BqQdM6/preview)

:::info
**注意**: インターフェースが完全にインストールされるまで処理を続行しないでください。進捗バーが消え、必要なパッケージごとに「Missing」ではなく「Installed」と表示されていれば成功です。
:::

### ゲームサーバーの作成

GS/TS3インターフェースの作成とインストールが完了したら、サービスのセットアップを始められます。ゲームサーバーのインストールは、**ゲームサーバー**カテゴリの **Install game server** ボタンから行います。

![](https://screensaver01.zap-hosting.com/index.php/s/4TD3w3dpXrFYNcb/preview)

次に、希望のゲームサーバーのIPアドレス（サーバーに複数IPがある場合）を選択可能。ポート番号、スロット数、RAMブーストも個別に指定できます。

![](https://screensaver01.zap-hosting.com/index.php/s/icfwifbTrmwZQ6q/preview)

すべての設定が正しく条件に合っているか確認してください。設定が完了したら「Install game server now」をクリックしてインストール開始。指定通りにゲームサーバーがセットアップされ、すぐにプレイ可能になります。作成したゲームサーバーはリストで確認・呼び出し可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/MTRmMwc9GyMFW5A/preview)

ゲームサーバーの管理画面に入り、**設定**の **Games** からインストールしたいゲームを選択できます。

![](https://screensaver01.zap-hosting.com/index.php/s/xqxLAAR6jbdmM3Z/preview)

ここにサーバーにインストール可能なゲーム一覧が表示されます。例ではMinecraft: Paperspigotのゲームパッケージをインストールします。希望のゲームを選び、緑のボタンをクリックしてインストール開始。

![](https://screensaver01.zap-hosting.com/index.php/s/MtrsxLoYxssJLBt/preview)

必要条件の概要が表示されます。すべて満たしていれば、**Accept and Install** ボタンで確定してください。

![](https://screensaver01.zap-hosting.com/index.php/s/GjijXaM3z9EgnYG/preview)

ゲームによってはセットアップに時間がかかることがあります。進捗はステータス表示で確認可能。完了後、ゲームサーバーを起動してゲーム内で接続できます！

### ボイスサーバーの作成

**ボイスサーバー（Teamspeak 3サーバー）** のインストールもゲームサーバーと似ています。再度「Gameserver / TS3」をクリックし、**Install voice server** オプションを選択してTeamspeak 3サーバーのインストールを開始します。

![](https://screensaver01.zap-hosting.com/index.php/s/xct5DPC57wWeABG/preview)

次に、Teamspeak 3サーバーのIPアドレス、ポート、スロット数など希望の設定を入力可能。必要情報を入力したら、**Install voice server now** をクリックしてインストール完了。

![](https://screensaver01.zap-hosting.com/index.php/s/2XnJrDEDyLwBsHk/preview)

すべての情報が正しく条件に合っているか確認してください。設定完了後、**Install Teamspeak 3/5 Server now** をクリックしてインストール開始。インストール済みのTeamspeak 3サーバーは **Voiceserver Overview** で確認・選択できます。

![](https://screensaver01.zap-hosting.com/index.php/s/bgpZJgPjz7Ybpke/preview)

:::info
**注意**: ここでインストールされるのがTeamspeak 3サーバーのインスタンスです。
:::

インストール済みTeamspeak 3サーバーのインスタンス画面に入り、**Start** ボタンでインスタンスを起動できます。

![](https://screensaver01.zap-hosting.com/index.php/s/G96RPrjEdm96CCj/preview)

メニューの **Virtual Servers** をクリックすると、インスタンスにインストールされているすべてのTeamspeak 3サーバーが一覧表示されます。各サーバーのインターフェースを開くには「目のアイコン」をクリックしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/awJdyTgJPSia5B2/preview)

Teamspeak 3サーバーインターフェースでは、サーバーの個別設定や管理に必要な情報やオプションが揃っています。例えば「Authorization key」タブでは、管理者権限を付与するトークンを作成可能。これでユーザー管理やサーバーアクセスを完全コントロールできます。

「設定」メニューではサーバー名の変更、アクセス制限用パスワード設定、ユーザーが入室時に受け取るウェルカムメッセージの登録など、さらに細かいカスタマイズが可能です。

:::caution Teamspeakライセンスについて
Teamspeak 3サーバーにはデフォルトでライセンスがインストールされていません。つまり、32スロットまでのTeamspeak 3サーバーしか利用できません。より多くのスロットや追加機能を使いたい場合は、Teamspeakから対応ライセンスを購入してください。
:::

## まとめ

おめでとうございます！GS/TS3インターフェースのインストールと設定が無事完了しました！もし質問や問題があれば、毎日対応しているサポートチームに気軽にお問い合わせくださいね！

<InlineVoucher />