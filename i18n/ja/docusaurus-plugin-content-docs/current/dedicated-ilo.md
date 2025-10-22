---
id: dedicated-ilo
title: "専用サーバー: iLO"
description: "Enterprise専用サーバーをiLOで完全管理し、シームレスなコントロールとモニタリングを実現 → 今すぐ詳しくチェック"
sidebar_label: iLO
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに
当社のEnterprise専用サーバーでは管理インターフェースとしてiLOを使用しており、サーバーの無制限なフル管理が可能です。  
主な機能には、サーバーの起動/停止/再起動、JavaまたはHTML5経由の管理コンソール、ブートメディア（ISO）のマウントなどがあります。  
設定変更は慎重に行ってください。誤った変更は大きな問題を引き起こす可能性があります。

<InlineVoucher />

## iLOアクセス
お好きなブラウザでZAP専用サーバーのダッシュボードを開くと、すでにiLOに関する重要な情報が表示されています。  
iLOを有効化するには「Activate iLO」をクリックしてください。  
![](https://screensaver01.zap-hosting.com/index.php/s/grj9PxttLKiZg6m/preview)

iLOが完全に利用可能になるまで数秒かかる場合があります。  
システムが管理インターフェースを起動しアクセス可能になると、ログイン情報が表示されます。  
表示されたIPアドレスをクリックし、ログイン情報を使ってログインしてください。

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

しばらくすると専用サーバーの管理インターフェースにログイン完了です。  
ここで多くの重要な情報を確認できます：

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### 概要
* **システムヘルス**  
通常は緑色が正常です。サーバー起動時にハードウェアの自己診断が行われ、問題があれば即座に報告されます。  
状態は緑（正常）、黄（劣化）、赤（重大）があります。SSDが劣化と表示されることがありますが、通常は問題ありません。  
もちろんサポートに連絡いただければ、必要に応じて対応を確認します。システムステータスが赤（重大）の場合はすぐにサポートへ連絡してください。  
問題解決の第一歩はサーバーの完全再起動です。

* **iLOヘルス**  
iLOのパラメータに関する詳細情報を表示します。大きな変化がないか確認してください。  
このタブでの設定変更は基本的に不要です。

* **サーバーパワー**  
サーバーの状態を表示します。例：「ON」はサーバーが稼働中を意味します。

* **統合リモートコンソール**  
サーバーの画面を直接見てコマンドを実行できます。  
リモートコンソールは2種類あります。  
HTML5はブラウザ上で直接起動し、追加ソフト不要です。  
Java Web Startは名前の通りJavaを使って管理コンソールを開きます。  
表示されるセキュリティ警告は安全に無視して問題ありません。  
リモートコンソールでの接続手順は詳細ガイドをご覧ください。

* **アクティブセッション**  
現在iLOに接続中のユーザー一覧が見られます。

### iLOイベントログ
iLO経由で行われたすべての変更（ログイン、サーバー起動/停止、設定変更など）を記録します。

### 統合管理ログ
POST（Power on Self Test）など、サーバー起動時に実行されるハードウェア関連情報を保存します。  
専用サーバーのハードウェアに問題があればここに表示されます。

### バーチャルメディア
独自のブートメディア（ISO）をマウントするには「Connect CD/DVD-ROM」サブメニューを使います。  
サーバーのブート順序は、登録されたISOを最優先で起動するよう設定されています。  
順序は「Boot Order」メニューで変更可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

「Scripted Media URL」にはマウントしたいISOのフルURLを入力してください。例：`http://mydomain.com/bootimage.iso`  
URLは直接ISOファイルを指し、必ず`.iso`で終わる必要があります。  
「Insert Media」をクリックし、「Power Management」でサーバーを再起動すると、指定したISOから起動します。

### 電源管理
ここではZAP専用サーバーの起動・停止に関する操作がすべて行えます。

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **Graceful Power Off**  
ノートPCやPCの電源ボタンを一度押したのと同じく、正常にシャットダウンします。  
すべてのアプリケーションが正しく終了し、計画的にサーバーが停止します。  
アプリケーションによっては時間がかかる場合があります。

* **Force Power Off**  
すぐに電源を切る必要がある場合に使います。電源コードを抜くのと同じ動作です。  
システムは即座にシャットダウンします。

* **Force System Reset**  
システムを即時再起動します。

### 電力メーター
システムの平均消費電力を表示します。消費電力が高いほど負荷が高いことを示します。

### ネットワーク
iLOのネットワーク設定を表示します。  
ただし、これはサーバー本体のネットワーク設定とは別物です。

:::info
サーバーのセットアップやネットワーク経由でアクセスできない場合は、直接サーバー画面を確認することも可能です。
:::

## リモートコンソール（画面表示）
iLOはデフォルトで2種類のリモートコンソールを提供しています。

![](https://screensaver01.zap-hosting.com/index.php/s/cozRqRt9KLTMCkd/preview)

### HTML5コンソール
クリック一つでサーバーにアクセス可能。追加ソフト不要でブラウザ上で直接起動します。  
便利なツールがたくさんあります：

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - サーバーの電源管理（起動、停止、再起動）  
* 2 - キーボードショートカット送信（例：CTRL + ALT + DEL）  
* 3 - ISOマウント > CD/DVD > Scripted Media URL  
* 4 - システムヘルス  
* 5 - サーバーパワーステータス（ON / OFF）

サーバーにGUIがある場合はマウス操作やキーボード入力も通常通り使えます。

### Javaコンソール
Javaコンソールを使うにはJavaのインストールが必要です。（java.comからダウンロード可能）  
:::info
セキュリティ警告は無視して問題ありません。
:::

ファイルを開くと以下のメッセージが表示されるので「Continue」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

リスクを承知の上「Run」をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

Javaコンソールが開きます。  
:::info
アプリケーションはキーボードレイアウトを「EN」に変更することがあります。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - サーバーの電源管理（起動、停止、再起動）  
* 2 - ISOマウント > URL CD/DVD-ROM  
* 3 - キーコンビネーション送信（例：CTRL + ALT + DEL）  
* 4 - システムヘルス  
* 5 - サーバーパワーステータス（ON / OFF）

GUIがあるサーバーならマウスやキーボード入力も通常通り使えます。

## よくある問題、ヒント＆コツ

* サーバーがPOST（Power on Self Test）で停止し起動しない  
リモートコンソールでどこで止まっているか確認し、エラーが表示されているかチェック。  
「Power Management」でサーバーを数秒間「Force Power Off」し、その後「Momentary Press」で再起動。  
それでも起動しない場合はサポートに連絡してください。

* ISOが読み込まれない  
ISOのリンクが正しいか確認。ブラウザにURLを貼り付けてダウンロードが始まればOK。  
Virtual Mediaに正しく入力されているか、サーバーが再起動されているかも確認。  
ブート順序でCD/DVDドライブが最上位にあるかもチェック。

* サーバーの起動に時間がかかる  
Enterpriseハードウェアは起動に時間がかかるのが普通です。10〜15分かかることもあります。

* iLOにアクセスできなくなった  
サーバーダッシュボードでiLOが有効になっているか確認。  
セキュリティ上の理由で一定時間後に管理インターフェースが自動でシャットダウンします。  
iLOを一度無効化してから再度有効化することも可能です。（有効化後は最低5分待ってください）

## まとめ

ここまで読めば管理がかなり楽になるはず！  
もし質問やサポートが必要なら、いつでも気軽にサポートチームに連絡してくださいね。毎日対応しています！🙂

<InlineVoucher />