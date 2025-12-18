---
id: account-backup-storage
title: バックアップストレージ
description: "スケーラブルなストレージオプションでバックアップを安全に保存・管理し、簡単に復元・アクセスする方法をチェック → 今すぐ詳しく見る"
sidebar_label: バックアップストレージ
---

## バックアップストレージとは？
バックアップストレージは、お客様がサービスを通じてバックアップを作成できる機能を提供します。すべてのお客様には10GBの無料バックアップストレージが付与されており、これを自由に使えます。さらに、少額の追加料金で最大200GBまでストレージ容量を拡張可能です。

## バックアップファイルにはどうやってアクセスするの？
バックアップは、ウェブインターフェースからバックアップを作成するとバックアップストレージに保存されます。ファイルは、各サービスのバックアップ機能を使って復元するか、FTP接続を通じてバックアップストレージからダウンロードできます。

### FTPでバックアップストレージに接続する方法
FTPでバックアップストレージに接続するには、まずお使いのOSに対応したプログラム[FileZilla](http://www.filezilla.de/download.htm)をダウンロード＆インストールしてください。インストールが完了したら、プログラムを開きます。
FileZillaの画面が表示されるはずです：

![2022-04-08_04-41](https://screensaver01.zap-hosting.com/index.php/s/XHa7gfPBKcGgYj4/preview)

バックアップストレージに接続するには、上部のテキストフィールドに接続情報を入力します。
この情報は、ウェブインターフェースのバックアップストレージのページで確認できます。
メニューバーのこのアイコンをクリックしてください：

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

バックアップストレージのページで、画像の枠内にあるFTP接続用のアクセス情報が見つかります：

![2022-04-08_04-39](https://screensaver01.zap-hosting.com/index.php/s/pziwNeT9jmFC5Ax/preview)

FileZillaの**サーバー**欄にIPアドレス、**ユーザー名**欄にユーザー名、**パスワード**欄にパスワードを入力してください。ポートが*21*の場合は入力不要です。入力後、**接続**をクリック。
接続に成功すると、各サービスが作成したバックアップがそれぞれのフォルダに表示されます。

![2022-04-08_04-41_1](https://screensaver01.zap-hosting.com/index.php/s/K9MZHf8napDMCjT/preview)

![2022-04-08_04-41_2](https://screensaver01.zap-hosting.com/index.php/s/ca7DkJ2T6DpxTFH/preview)

バックアップは各フォルダ内に**\*.tar.gz**形式で圧縮されており、WinRARや7-Zipなどのプログラムで解凍可能です。

## 「転送接続が中断されました」エラーメッセージについて

接続や転送時に「Transfer connection interrupted: ECCONABORTED - Connection aborted」というエラーが出た場合は、転送モードを「**パッシブ**」から「**アクティブ**」に変更してみてください。
以下はFileZillaの設定で変更する手順です。

FileZillaクライアントのメニューから「**編集**」を押し、「**設定...**」を開きます：

![2022-04-08_05-16](https://screensaver01.zap-hosting.com/index.php/s/AgrmP6i5aAEr2kr/preview)

「設定」ウィンドウが開いたら、「**FTP**」をクリックしてFTP接続の設定を表示します。
デフォルトでは転送モードが「**パッシブ**」になっているので、「**アクティブ**」のラジオボタンを選択し、「**OK**」で変更を保存してください。

![2022-04-08_05-17](https://screensaver01.zap-hosting.com/index.php/s/REPQieY3Zbm8arM/preview)

設定変更後、FTP接続を再度試してみましょう。

## メッセージ
サイドバーのサブメニュー*メッセージ*では、どのトリガーや理由でどのアクションがいつどのパッケージのバックアップ時に実行されたかのログが表示されます。

![2022-04-08_04-42](https://screensaver01.zap-hosting.com/index.php/s/GwtGHoDL7d9r3Ds/preview)