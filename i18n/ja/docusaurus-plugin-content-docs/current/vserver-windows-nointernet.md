---
id: vserver-windows-nointernet
title: "VPS: インターネット接続トラブルシューティング"
description: "Windows VPSでのインターネット接続問題のトラブルシューティングと解決方法を効果的に学ぼう → 今すぐチェック"
sidebar_label: インターネット接続トラブルシューティング
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

インターネット接続が途切れたり不安定になる原因は、IPアドレス、サブネットマスク、ゲートウェイ、DNSサーバー、ファイアウォール設定の誤りなど様々です。このガイドでは、ネットワークの問題をトラブルシュートし解決する方法を解説します。

<YouTube videoId="VfZyNge5ikA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pqpjBWoHGJWztQG/preview" title="Windows VPSのインターネット接続問題を解決する方法" description="実際の動きを見て理解したい？そんなあなたにピッタリ！忙しい時も、じっくり学びたい時も、わかりやすく解説した動画をぜひチェックしてね！"/>



<InlineVoucher />

## インターネットなしでも使えるVNCアクセス

RDP（リモートデスクトップ）でサーバーに接続できない場合は、当社ウェブサイトのVNC（Virtual Network Computing）コンソールを使う方法があります。

この方法ならインターネット接続がなくてもサーバーにアクセスして問題を解決可能です。サーバーのウェブインターフェースの **ツール -> VNCコンソール** セクションからアクセスできます。

このページで **Open Web Client** ボタンを押し、普段使っている認証情報でログインすればコンソールが起動します。

![](https://screensaver01.zap-hosting.com/index.php/s/L9ZPLHEXbydc6ZS/preview)

## トラブルシューティング手順

### IPアドレス、サブネットマスク、ゲートウェイ設定の確認

まずはサーバーのネットワークアダプターの設定が正しいか確認しましょう。IPアドレス、サブネットマスク、ゲートウェイが正しく設定されている必要があります。

サーバーのウェブインターフェースの **設定 -> IPアドレス** セクションにアクセスし、現在レンタル中のIPアドレスを確認します。

![](https://screensaver01.zap-hosting.com/index.php/s/8gF7Qsq5k5aYxbq/preview)

問題がある場合はRDPかVNCコンソールでサーバーにアクセスし、Windowsのネットワークアダプター設定を開きます：
```
設定 -> ネットワークとインターネット -> アダプターのオプションを変更する -> ネットワークアダプター
```

リストから **インターネット プロトコル バージョン4 (TCP/IPv4)** を選択し、**プロパティ**をクリック。

![](https://screensaver01.zap-hosting.com/index.php/s/xYSSa2txkRkM4bx/preview)

#### アダプターの設定方法

アダプターの情報を以下のように設定されているか確認してください：
- IPアドレス：ウェブインターフェースの **IPアドレス** ページにあるIPアドレスと同じもの
- サブネットマスク：通常は `255.255.255.0`（当社のネットワークはクラスCを使用）
- デフォルトゲートウェイ：IPアドレスの最後のオクテット（.xxx）を `.1` に置き換えたもの

#### 設定例

:::info
これは理解を助けるための**例**です。必ずご自身のサーバーのIPアドレスに置き換えてください。
:::

IPアドレスが `185.223.28.163` の場合、設定は以下のようになります：

| 設定項目         | 値              |
| --------------- | -------------- |
| IPアドレス      | 185.223.28.163 |
| サブネットマスク | 255.255.255.0  |
| デフォルトゲートウェイ | 185.223.28.1   |

![](https://screensaver01.zap-hosting.com/index.php/s/PTjQZc5gqP2okAC/preview)

設定が終わったら **OK** を押して変更を適用。トラブルシューティング完了のためにサーバーの再起動をおすすめします。



### DNSサーバー設定の確認

インターネット接続問題が続く場合は、DNSサーバーの設定も見直しましょう。DNSサーバーの値が空欄だったり間違っている場合は、信頼できるDNSサーバーに置き換えます。

GoogleかCloudflareのDNSサーバーを使うのがおすすめ。どちらも広く使われていて信頼性抜群です。

| DNSプロバイダー | DNSサーバーの値                     |
| ------------ | ------------------------------------- |
| Google       | 優先：8.8.8.8 / 代替：8.8.4.4       |
| Cloudflare   | 優先：1.1.1.1 / 代替：1.0.0.1       |

![](https://screensaver01.zap-hosting.com/index.php/s/oqcR5BHBKLa3ink/preview)

設定が終わったら再度 **OK** を押して変更を適用。こちらもサーバーの再起動を推奨します。

:::tip
サーバーのコマンドプロンプト（cmd.exe）で以下のコマンドを実行すると、DNSサーバーを簡単に設定できます：
```
powershell “Get-NetAdapter | Get-NetIPAddress | ForEach-Object { netsh interface ip set dns name=”$($_.InterfaceAlias)“ static 8.8.8.8; netsh interface ip add dns name=”$($_.InterfaceAlias)“ 1.1.1.1 index=2 }”
```
:::



### ファイアウォール設定の確認

最後にWindowsファイアウォールの設定をチェックしましょう。

一時的にWindowsファイアウォールを無効化して問題が解決するか試すのがおすすめです。Windowsの検索で **Windows Defender ファイアウォールの設定** を開き、左側の **Windows Defender ファイアウォールの有効化または無効化** を選択。

![](https://screensaver01.zap-hosting.com/index.php/s/bWcPqHcCZ7ajJSA/preview)

ファイアウォールを無効にして問題が解決した場合、ファイアウォールの設定ミスが原因の可能性が高いです。

ファイアウォールの対処法は問題によって異なります。ファイアウォールルールの管理に関しては、当社の[ポートフォワーディング（ファイアウォール）](vserver-windows-port.md)ガイドも参考にしてください。



## ネットワーク設定のリセット

VPSのウェブインターフェース管理画面の設定ページにある **ネットワーク設定をリセット** ボタンを押すと、IPアドレス、サブネットマスク、ゲートウェイ、DNSサーバーの設定を初期状態に戻せます。

![img](https://screensaver01.zap-hosting.com/index.php/s/YsLZZJZEaf3pemt/preview)


## まとめ
すべての手順を実施すれば、通常通りインターネット接続が復旧しているはずです。もし問題が解決しない場合や質問があれば、いつでもサポートチームに気軽にお問い合わせくださいね！毎日対応しています 🙂 

<InlineVoucher />