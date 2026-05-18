---
id: server-truenas-scale
title: "サーバーにTrueNAS SCALEをセットアップ - 自分だけのNASシステムを作ろう"
description: "専用サーバーにTrueNAS SCALEをインストールしてネットワーク接続ストレージとファイル共有を実現 → 今すぐ詳しくチェック"
sidebar_label: TrueNAS SCALEのインストール
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## はじめに

TrueNAS SCALEはオープンソースのストレージプラットフォームで、サーバー上にネットワーク接続ストレージ（NAS）システムを構築できます。このガイドでは、専用サーバーにTrueNAS SCALEをインストールし、ストレージプール、ユーザーアカウント、SMBファイル共有などの初期設定を行います。

:::danger VPSは非推奨
VPSは仮想ディスクが1つしかないため適していません。VPSにTrueNAS SCALEをインストールすることは可能ですが、OSでディスク全体を使うためストレージプールは作成できません。

TrueNAS SCALEのセットアップには、最低でも2台のハードドライブを搭載した[専用サーバー構成](https://zap-hosting.com/en/dedicated-server-hosting/)が必要です。
:::

<InlineVoucher />

## 準備

インストールを始める前に、以下の最低システム要件を満たしているか確認してください：

| ハードウェア | 最低要件    | ZAP-Hosting推奨          |
| ------------ | ----------- | ------------------------ |
| CPU          | 2 CPUコア   | 8 vCPUコア               |
| RAM          | 8 GB        | 16 GB                    |
| ディスク容量 | 16 GB OS用  | 利用用途に応じて変動     |

<InlineServiceLink />

公式の[TrueNASサイト](https://www.truenas.com/download-truenas-scale/)から最新の安定版をダウンロードしましょう。ISOファイルは自分のウェブサーバーやクラウドストレージなど公開可能な場所にアップロードするか、ローカルPCに保存して直接マウントできます。

:::tip[ISOホスティング]
リモートコンソールでURL経由でマウントする場合、ISOファイルのURLは`.iso`で終わり、認証なしで公開されている必要があります。
:::

**ISOのマウント**

[ZAP-Hostingのダッシュボード](https://zap-hosting.com/en/customer/)にログインし、サービス一覧から専用サーバーを選択。サーバー管理画面を開き、**iLOを有効化**をクリックしてサーバー管理インターフェースにアクセスします。

![img](https://screensaver01.zap-hosting.com/index.php/s/or8HJ8e3QeAJm6z/preview)

iLO画面で**Integrated Remote Console**を探し、好みのコンソールタイプを選択して起動。新しいウィンドウが開き、サーバーの画面に直接アクセスできます。

リモートコンソールの上部にある**CDアイコン**をクリックし、**CD/DVD**を選択。ISOをオンラインにアップロードしている場合は**Scripted Media URL**を選び、直接URLを入力。ローカルにある場合は**Local .iso File**を選択してPCからファイルを指定。どちらの場合もISOが仮想CD/DVDドライブにマウントされます。

![img](https://screensaver01.zap-hosting.com/index.php/s/F98tgjsqq2S6nqp/preview)

:::tip 他のマウント方法
Virtual Mediaインターフェースなど他のISOマウント方法は[Own ISOガイド](dedicated-iso.md)を参照してください。
:::

ISOをマウントしたら、コンソールの**Powerメニュー**から再起動を選択。**Reset**をクリックするとサーバーが再起動し、TrueNAS SCALEのISOから起動します。

## インストール

起動中のコンソールを見守りましょう。TrueNAS SCALEのセットアップ画面が表示され、インストーラーが自動で読み込まれます。環境のロードには数分かかります。

![img](https://screensaver01.zap-hosting.com/index.php/s/TJwMWFZeorwGryn/preview)

インストーラーは**インストール先メディアの選択**を表示し、利用可能なディスクを一覧表示。**矢印キー**で移動し、OSをインストールするディスクを選択します。OS用には一番小さいディスクを選びましょう（このディスクはTrueNAS SCALE専用になります）。**Spaceキー**で選択し、**Enter**を押します。

![img](https://screensaver01.zap-hosting.com/index.php/s/Z5o7TFye6BPor7Q/preview)

選択したドライブの内容がすべて消去される警告が表示されます。**矢印キー**で**Yes**を選択し、**Enter**を押します。

![img](https://screensaver01.zap-hosting.com/index.php/s/LS2mJBQ2deawKFp/preview)

次に認証設定について聞かれます。**オプション1**は今すぐパスワードを設定、**オプション2**は後でWeb UIから設定可能。ここでは柔軟性のある**オプション2: Web UIで設定**を選び、**Enter**。

![img](https://screensaver01.zap-hosting.com/index.php/s/oPpMLCZ5nPePdLW/preview)

「EFIブートを許可しますか？」と聞かれたら、**Yes**（推奨）を選択して**Enter**。

![img](https://screensaver01.zap-hosting.com/index.php/s/We8tqgctQrjz5oS/preview)

インストールが始まり、通常15〜20分かかります。画面の進捗を見ながらファイルのコピーとシステム設定を待ちましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/BAykMjmxDn76sJB/preview)

完了すると**"The TrueNAS installation is successful"**と表示されます。**Enter**を押します。

![img](https://screensaver01.zap-hosting.com/index.php/s/GmNwHaTfY6KHSbN/preview)

再起動前に**ISOをアンマウント**しないと再びインストーラーが起動します。**DVDアイコン**をクリックし、**CD/DVD**を選択して**メディアの取り出し**をクリック。Powerメニューから再起動するか、自動で再起動を待ちます。

<InlineServiceLink />

## 設定

インストール完了後、サーバーがどのディスクから起動するか設定する必要があります。TrueNAS SCALEはインストール済みですが、RAIDコントローラーのROM設定で正しいディスクから起動するよう指定しなければなりません。

:::info[重要なステップ]
インストール後、RAIDコントローラーROMで起動ボリュームを設定し、正しいディスクから起動するようにしてください。
:::

**ROMで起動ディスクを設定**

起動時にコンソールを見て、**"Press F8 for ROM Configuration for Arrays Utility"**が表示されたらすぐに**F8**を押します。

![img](https://screensaver01.zap-hosting.com/index.php/s/BCosyXCBnZJjeiX/preview)

ROM設定ユーティリティが開きます。**Select Boot Volume**に矢印キーで移動し、**Enter**。

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw4netxJPkX3354/preview)

インストールしたTrueNAS SCALEのディスクを選択し、**Enter**。

![img](https://screensaver01.zap-hosting.com/index.php/s/7mPgXFMqn9Q475Z/preview)

ディスクを選んだら**F8**で保存。確認があれば承認し、ユーティリティを終了。サーバーがTrueNAS SCALEで起動します。

![img](https://screensaver01.zap-hosting.com/index.php/s/YEFokMkz3RSB625/preview)

**Webインターフェースへのアクセス**

初回起動後、TrueNAS SCALEのコンソールにWeb UIのアクセスURLが表示されます：`http://[your_server_ip]`。このIPアドレスはWebインターフェースにアクセスする際に必要なのでメモしておきましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/8JwikNGRTz4La3y/preview)

:::tip ネットワーク自動設定
TrueNAS SCALEは通常DHCPでネットワーク設定を自動取得します。複数IPを使う場合や固定IPが必要な場合以外はスキップしてOKです。
:::

手動設定する場合はコンソールメニューから**1) Configure Network Interfaces**を選択。メインのインターフェース（例：`enp0s3`や`eth0`）を選び、**Configure IPv4** → **Static**を選択。ZAP-Hostingのダッシュボードで確認したIPアドレス、サブネットマスク、ゲートウェイを入力します。

ブラウザで`http://[your_server_ip]`にアクセス。

先ほど**Web UIで設定**を選んだので、ここでパスワードを設定します。ログイン画面のユーザー名は`truenas_admin`。強力なパスワードを入力し、確認のため再入力して**Submit**。

![img](https://screensaver01.zap-hosting.com/index.php/s/dZrpdZYQwKBFksJ/preview)

:::danger セキュリティ重要
TrueNASの管理者アカウントには強力でユニークなパスワードを設定してください。このアカウントはシステム全体のアクセス権を持ちます。
:::

ログインするとダッシュボードが表示され、システム情報、ネットワーク状況、ストレージプール、サービス、アラートなどが確認できます。これでTrueNAS SCALEの設定が完了し、ストレージのセットアップに進めます。

![img](https://screensaver01.zap-hosting.com/index.php/s/fYkDpDfpqwTT5yY/preview)

**ストレージプールの作成**

左サイドバーの**Storage**をクリックし、**Create Pool**ボタンを押します。

![img](https://screensaver01.zap-hosting.com/index.php/s/fFeSjm3YnnPfxq5/preview)

まずプール名を入力。`Disk`や`tank`など分かりやすい名前でOK。準備できたら**Next**。

![img](https://screensaver01.zap-hosting.com/index.php/s/23MNpcrHmmGz2L2/preview)

**Data**セクションの**Layout**ドロップダウンから用途に合った構成を選択：

- **Stripe**：最大容量だが冗長性なし
- **Mirror**：2台のディスクに同じデータを保存し冗長性あり（容量は半分に）
- **RAIDZ1**：1台分の冗長性あり
- **RAIDZ2**：2台分の冗長性あり
- **RAIDZ3**：3台分の冗長性あり

![img](https://screensaver01.zap-hosting.com/index.php/s/wKHy7f8xoifEXB6/preview)

**Disk Selection**にストレージ用ディスクが一覧表示されます。プールに含めたいディスクをクリックすると構成エリアに移動し、容量の目安が表示されます。

:::info 起動ディスクは非表示
OS専用のインストールディスクはここには表示されません。
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/McEcGQSBzHaZNNc/preview)

オプション設定はデフォルトのままで**Next**。確認画面で名前、レイアウト、ディスク、容量をチェックし、問題なければ**Create Pool**をクリック。

![img](https://screensaver01.zap-hosting.com/index.php/s/RDitijsoGWtEoT5/preview)

**データセットで整理**

ストレージプールができたら、データセットでデータを整理できます。データセットはストレージプールの論理的な区分で、用途ごとに分けるのに便利。サイドバーの**Datasets**をクリック。作成したプール（例："Disk"）が表示されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/oZPctpbLcCESWWt/preview)

**Add Dataset**をクリック。親は自動でプールに設定されます。名前は`documents`や`media`、`backups`など用途に合わせて。特別な要件がなければ詳細設定はデフォルトのまま**Save**。

![img](https://screensaver01.zap-hosting.com/index.php/s/JxPmPW53zke9NQL/preview)

**ユーザーアカウントの作成**

サイドバーの**Credentials**をクリックし、**Add**。ユーザー名（例：`john`や`fileuser`）、フルネーム、パスワードを入力。プライマリグループ、ホームディレクトリ、シェルはデフォルトのまま。画面下部でWindowsアクセス用に**SMB**オプションを有効にします。

セキュリティ要件に応じて権限を調整可能。基本的なファイル共有ならSMB有効のデフォルト設定で十分。完了したら**Submit**。

:::danger SMBアクセスの注意
`root`や`truenas_admin`はSMB共有には使えません。専用ユーザーを作成してください。
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/3SLGk75E3KP57ZS/preview)

**SMB共有の設定**

サイドバーの**Shares**をクリック。Windows（SMB）、Unix（NFS）、Block（iSCSI）の3種類が表示されます。ここではSMBを設定。Windows (SMB) Sharesの**Add**をクリック。

![img](https://screensaver01.zap-hosting.com/index.php/s/fgWcqjyxXLD2dRy/preview)

**Add SMB**ダイアログが開きます。**Path**は作成したデータセットのパス（例：`/mnt/Disk/documents`）を指定。**Name**はネットワーク上で表示される名前（例：`documents`）。**Purpose**はほとんどの場合デフォルトのままでOK。説明を追加してもOK。ACL設定などの詳細オプションもありますが、セキュリティのためゲストアクセスは無効のままにしましょう。**Save**をクリック。

![img](https://screensaver01.zap-hosting.com/index.php/s/D2xQYHQfbmsKRwT/preview)

共有作成後、**SMBサービスが起動していません**というポップアップが出ます。**Start Service**をクリック。さらに**Start Automatically**にチェックを入れて起動時に自動で開始するように設定。これでSMB共有がネットワーク上で利用可能になります。

![img](https://screensaver01.zap-hosting.com/index.php/s/KQH5zoA7FYWaXMa/preview)

Linux/Unix向けのNFS共有を設定する場合は、**Shares** → **Unix (NFS) Shares**で**Add**をクリック。データセットを選び、ネットワークや権限を設定。NFSを有効にして保存します。

<InlineServiceLink />

## 共有へのアクセス

例えばWindows PCから共有にアクセスするには、**エクスプローラー**を開きます。**PC**（または**マイコンピューター**）を右クリックし、**ネットワークの場所を追加**を選択。

![img](https://screensaver01.zap-hosting.com/index.php/s/NDJWjdpC6ZCq6c3/preview)

**ネットワークの場所の追加ウィザード**が開くので、**次へ**をクリック。

![img](https://screensaver01.zap-hosting.com/index.php/s/7KXPxNQJy4qsiBy/preview)

場所の入力を求められたら、以下の形式で入力：`\\[your_server_ip]\[share_name]`。例：`\\192.168.1.100\documents`。`[your_server_ip]`はTrueNASサーバーのIPアドレス、`[share_name]`はSMB共有名に置き換えます。入力後、**次へ**。

![img](https://screensaver01.zap-hosting.com/index.php/s/2yaoWfiCTX6XLAz/preview)

TrueNASで作成したユーザー名とパスワードを入力。`root`や`truenas_admin`はSMBで使えないので注意。**資格情報を記憶する**にチェックを入れて次回から自動ログイン可能に。**OK**をクリック。

![img](https://screensaver01.zap-hosting.com/index.php/s/4nFReNbPLkHfmMp/preview)

これでTrueNASの共有にアクセス可能。ファイルの閲覧、フォルダ作成、データのコピーなど通常のネットワークドライブと同じように使えます。

![img](https://screensaver01.zap-hosting.com/index.php/s/nBqrkmkCYJntwW2/preview)

:::tip クイックアクセス
より簡単にアクセスしたい場合は、**ネットワークの場所を追加**ではなく**ネットワークドライブの割り当て**を使いましょう。エクスプローラーにドライブレター（例：`Z:`）として表示されます。
:::

:::info macOSやLinuxからのアクセス
**macOS**：Finderで`Cmd+K`を押し、`smb://[your_server_ip]/[share_name]`を入力

**Linux**：ファイルマネージャーの「サーバーに接続」機能で`smb://[your_server_ip]/[share_name]`を使うか、コマンドラインで`mount.cifs`を使ってマウント
:::

## まとめ

おめでとうございます！サーバーにTrueNAS SCALEを無事インストールし、設定まで完了しました。もし質問やサポートが必要な場合は、いつでもお気軽に当社のサポートチームにお問い合わせください。毎日対応していますよ！🙂