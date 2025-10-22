---
id: dedicated-windows-rescue
title: "専用サーバー：System Rescueでファイルを救出しよう"
description: "起動しないサーバーからSystemRescue ISOを使ってデータを復旧し、バックアップを作成する方法を解説 → 今すぐチェック"
sidebar_label: System Rescue（バックアップ）
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

サーバーが起動しなくなった？システムにログインできない？変更を加える前にバックアップを取りたい？
そんな時は、**SystemRescue ISO**でサーバーを起動すれば、ドライブにアクセスして重要なファイルを復元したり、ローカルにバックアップを作成したりできます。元のOSにアクセスできなくても大丈夫。

復旧したデータを安全に転送するには、**SFTP（Secure File Transfer Protocol）**を使いましょう。これは救出システムからローカルPCや別のサーバーへ、安全かつ暗号化された接続でファイルをコピーできる方法です。

<InlineVoucher />



## 準備

バックアップ作業には、**SystemRescue ISO バージョン12.01**を使います。
まずは専用サーバーのインターフェースにアクセスし、**初期インストール**のセクションへ進みます。

利用可能なISOの中から**SystemRescue 12.01**を選択。正しいISOを選んだら、**ISOから起動**をクリックして起動を開始します。サーバーがISOから起動したら、[iLOインターフェース](dedicated-ilo.md)で接続して操作を続けましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)



**iLO管理インターフェース**で、**HTMLコンソール**を開いてサーバーのリモート画面にアクセスします。コンソールが起動すると、**SystemRescue ISO**のブートメニューが表示されます。ここで、**デフォルトパラメータで起動**を選択してください。

これにより、SystemRescueは推奨される標準設定で起動し、システムメンテナンスやデータバックアップに最適な安定した環境が整います。

![img](https://screensaver01.zap-hosting.com/index.php/s/gzLJxw9FWZs4AJ7/download)


## ドライブのマウント

ドライブをマウントする前に、利用可能なストレージデバイスとそのパーティションを確認しましょう。以下のコマンドで一覧が表示されます：

```
fdisk -l
```

このコマンドは検出されたすべてのドライブとパーティションの詳細を表示します。出力には以下が含まれます：

- 接続されているストレージデバイス（例：`/dev/sda`、`/dev/sdb`）
- 各ドライブのサイズ
- パーティションの種類
- 利用可能なパーティション（例：`/dev/sda1`、`/dev/sda2`など）
- ファイルシステムの種類（検出されていれば）

例として、`/dev/sda`ドライブには3つのパーティションがあります：`/dev/sda1`、`/dev/sda2`、`/dev/sda3`。マウントする前に正しいパーティションを選択することが重要です。`fdisk -l`の出力でどのドライブにどのデータがあるかをしっかり確認しましょう。例：

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device     Boot   Start       End   Sectors  Size Id Type
/dev/sda1  *       2048    206847    204800  100M  7 HPFS/NTFS/exFAT
/dev/sda2        206848 232935855 232728008  111G  7 HPFS/NTFS/exFAT
/dev/sda3     232935856 234373119   1431264  699M 27 Hidden NTFS WinRE
```

正しいパーティションがわかったら、マウントポイントとなるディレクトリを作成します。ここにパーティションの内容がアクセス可能になります。マウントは**読み取り専用モード**で行うのがおすすめ。安全にデータにアクセスできます。

マウントポイント作成とパーティションのマウントは以下のコマンドで：

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

`/dev/sdaX`は`fdisk -l`で確認した正しいパーティション名に置き換えてください。例では`/dev/sda2`が該当します。

:::tip ハイバネート中のWindowsパーティションについて

Linuxはハイバネート状態やFast Bootが有効なWindowsパーティションを安全に開けません。データ破損を防ぐため、これらのパーティションは必ず**読み取り専用モード**でマウントしてください。

:::

## ファイアウォールの設定

セキュリティのため、SystemRescueはデフォルトでファイアウォールが有効になっています。つまり、すべての着信接続はブロックされ、不正アクセスからシステムを守っています。

しかし今回は、ローカルPCからSystemRescue上のSFTPサーバーへの接続を許可する必要があります。ファイアウォールをSFTPトラフィック許可に設定するか、一時的に無効化しましょう。

信頼できるネットワーク環境で作業しているなら、最も簡単で速い方法はSystemRescue上でファイアウォールサービスを停止することです。以下のコマンドを使ってください：

```
systemctl stop iptables
```



## rootパスワードの設定

SFTPクライアントはユーザー名とパスワードで認証し、SFTPサーバーのデータにアクセスします。SystemRescueのrootアカウントを使うことで、システム内のファイルにアクセス可能です。ただし、デフォルトではroot認証は許可されていません。認証を許可するためにパスワードを設定しましょう。以下のコマンドで設定します：

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## データ転送

これでデータのバックアップ準備が整いました。お好きなFTPクライアントを開き、サーバーに接続しましょう。転送プロトコルは必ず`SFTP`を選択。ホスト名にはサーバーの`IPアドレス`を入力し、ポートは`21`、ユーザー名は`root`、先ほど設定した`パスワード`でログインします。

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

初めて**SFTP**でサーバーに接続すると、WinSCPがセキュリティ警告を表示します。これはサーバーの**ホストキー**がまだローカルに保存されていないためです。

IPアドレスが正しいことを確認し、意図的に接続しているなら、**サーバーを信頼して問題ありません**。「はい」をクリックして承認しましょう。これでサーバーのキーがキャッシュに保存され、次回からは警告が表示されなくなります。

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

接続できたら、先ほど作成した**rescueディレクトリ**に移動します。ここからファイルにアクセスできるので、必要なデータを選んでローカルPCにダウンロードしましょう。フォルダをブラウズして、バックアップしたいデータを安全にSFTPで転送してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## まとめ

これで重要なファイルの救出とバックアップが無事完了しました。
データは安全に保管されているので、必要な時にいつでも復元可能です。ここからはサーバーの再インストールやシステム修復、新環境へのデータ移行など、次のステップに進めます。

質問やサポートが必要な場合は、いつでもお気軽にサポートチームにご連絡ください！毎日対応していますよ 🙂 

<InlineVoucher />