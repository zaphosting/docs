---
id: vserver-rescue
title: "VPS: SystemRescueでファイルを救出しよう"
description: "起動できないサーバーからSystemRescue ISOを使って安全にデータを復旧・バックアップする方法 → 今すぐチェック"
sidebar_label: System Rescue（バックアップ）
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

サーバーが起動しなくなった？システムにログインできない？変更前にバックアップを取りたい？
そんな時は**SystemRescue ISO**でサーバーを起動すれば、ドライブにアクセスして重要なファイルを復元したり、ローカルにバックアップを作成したりできます。元のOSにアクセスできなくても大丈夫！

復旧したデータを安全に転送するには、**SFTP（Secure File Transfer Protocol）**を使いましょう。これは救出システムからローカルPCや別のサーバーへ、暗号化された安全な接続でファイルをコピーできる方法です。

<InlineVoucher />

## 準備

バックアップ作業には**SystemRescue ISO バージョン12.01**を使います。
まずはVPSのインターフェースにアクセスし、**ISOs**セクションへ進みましょう。

利用可能なISOからSystemRescueを選択し、**起動順序の調整**をクリック、その後**再起動**ボタンで起動を開始します。

![img](https://screensaver01.zap-hosting.com/index.php/s/pGXka7wkrsBe9XY/preview)

ISOからサーバーが起動したら、[VNCコンソール](vserver-vnc.md)で接続して操作を続けます。コンソールが起動すると、**SystemRescue**のブートメニューが表示されます。ここで**デフォルトパラメータで起動**を選択してください。

これによりSystemRescueは推奨設定で起動し、システムメンテナンスやバックアップ作業に最適な安定環境が整います。

![img](https://screensaver01.zap-hosting.com/index.php/s/sw4jLc5AxwtMT5P/preview)

## ドライブのマウント

ドライブをマウントする前に、どのストレージデバイスとパーティションがあるかを確認しましょう。以下のコマンドで一覧が表示されます。

```
fdisk -l
```

このコマンドは検出されたドライブとパーティションの詳細を表示します。出力には以下が含まれます：

- 接続されているストレージデバイス（例：`/dev/sda`、`/dev/sdb`）
- 各ドライブのサイズ
- パーティションの種類
- 利用可能なパーティション（例：`/dev/sda1`、`/dev/sda2`）
- ファイルシステムの種類（検出されていれば）

例では、`/dev/sda`に3つのパーティションがあります：`/dev/sda1`、`/dev/sda2`、`/dev/sda3`。マウントする前に正しいパーティションを選択してください。`fdisk -l`の出力でどのドライブにどのデータがあるかがわかるので、間違いを防げます。例：

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

正しいパーティションがわかったら、マウントポイントとなるディレクトリを作成します。ここにパーティションの内容がアクセス可能になります。安全のため、**読み取り専用モード**でマウントするのがおすすめです。

マウントポイント作成とマウントは以下のコマンドで行います：

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

`/dev/sdaX`は`fdisk -l`で確認した正しいパーティション名に置き換えてください。例では`/dev/sda2`が該当します。

## ファイアウォールの設定

SystemRescueはセキュリティのため、デフォルトでファイアウォールが有効になっており、すべての着信接続をブロックしています。

しかし今回は、ローカルPCからSystemRescue上のSFTPサーバーへの接続を許可する必要があります。ファイアウォールをSFTPトラフィック許可に設定するか、一時的に無効化しましょう。

信頼できるネットワーク環境で作業しているなら、SystemRescueでファイアウォールサービスを停止するのが最も簡単です。以下のコマンドを使ってください：

```
systemctl stop iptables
```

## rootパスワードの設定

SFTPクライアントはユーザー名とパスワードで認証し、SFTPサーバーにアクセスします。SystemRescueのrootアカウントを使うことで、システム内のファイルにアクセス可能です。

デフォルトではSystemRescueでroot認証は無効なので、パスワードを設定して認証を許可しましょう。以下のコマンドでパスワードを設定します：

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```

## データ転送

これでバックアップ準備完了です。お好きなFTPクライアントを開き、サーバーに接続しましょう。転送プロトコルは必ず`SFTP`を選択してください。ホスト名にはサーバーの`IPアドレス`を入力し、ポートは`21`、ユーザー名は`root`、先ほど設定した`パスワード`でログインします。

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

初めて**SFTP**でサーバーに接続すると、WinSCPはセキュリティ警告を表示します。これはサーバーの**ホストキー**がまだローカルに登録されていないためです。

IPアドレスが正しいことを確認し、意図的に接続しているなら、**サーバーを信頼して問題ありません**。「はい」をクリックしてキーをキャッシュに保存しましょう。次回からは警告が表示されません。

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

接続できたら、先ほど作成した**rescueディレクトリ**に移動します。ここからファイルにアクセスできるので、ローカルPCにダウンロードしてバックアップを開始しましょう。フォルダをブラウズして、バックアップしたいデータを選択し、SFTPで安全に転送してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## まとめ

これで大事なファイルの救出とバックアップが完了しました。
データは安全に保管されているので、必要な時にいつでも復元可能です。ここからはサーバーの再インストールやシステム修復、新環境へのデータ移行など、次のステップに進めます。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームにお問い合わせくださいね！毎日対応しています🙂

<InlineVoucher />