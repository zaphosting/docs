---
id: vserver-iso-windows
title: "VPS: Windows X/Windows Server 20XX のインストール"
description: "カスタムISOでWindowsインストールを自由自在にカスタマイズ！セットアップやドライバーの完全コントロール → 今すぐチェック"
sidebar_label: "Windows X/WS 20XX インストール"
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## はじめに
カスタムISOを使ったインストールなら、Windows 10やWindows Server 2016/2019/2022/2025などの環境を自分好みに完全カスタマイズ可能！当社の標準OSイメージとは違い、特別なドライバーや事前設定、追加ソフトなど、あなたのニーズに合わせたインストールメディアを使えます。

<InlineVoucher />



## 準備

OSのインストールと設定には、まず対応するOSのISOをマウントすることが重要です。ISOファイルのマウント方法がまだわからない場合は、ぜひ当社の[Own ISO](vserver-iso.md)ガイドを参考にしてください。



## インストール

Windows OSのインストール開始時には、初期セットアップのステップが案内されます。まずは希望の**言語**を選択し、次に**キーボードレイアウト**を設定、その後**セットアップ方法**を選びます。ここでは説明用に**Previous Version of Setup**を選択しています。次のステップでエディションを選び、この例ではフルGUIが使える**Windows Server 2025 Datacenter Desktop Experience**を選択しています。



![img](https://screensaver01.zap-hosting.com/index.php/s/7K227dRoaz5Y4py/download)

この段階でパーティションが表示されないのに気づくはずですが、これはエラーではなく、Windowsが追加ドライバーなしでは仮想ドライブを認識できないためです。ディスク認識と正しい動作には必須のVirtIOドライバーが必要です。これらのドライバーをマウントしてインストールすると、ドライブが表示され、パーティション設定とOSインストールを続行できます。



### VirtIOドライバー

OSインストール前にVirtIOドライバーをセットアップします。これらのWindowsドライバーはKVMベースのハイパーバイザー向けに最適化されており、Windows仮想マシンを最大パフォーマンスかつ高い互換性で動作させます。

まず、インストールメディアを一時的に`virtio-win.iso`に切り替えます。利用可能なISOからVirtIO ISOを選択し、**マウント**をクリック。セットアップ中にドライバーが利用可能になり、OSインストールを続ける前にインストールできます。



![img](https://screensaver01.zap-hosting.com/index.php/s/wtZFngf9FofiQ88/download)

:::warning サーバーを再起動しないで！
VirtIO ISOに**一時的に**切り替える際は、ISOを選択するだけでOK。システムを**<u>再起動しないでください</u>**。再起動するとこれまでの進行状況が失われます。

:::

必要なドライバーは**Balloon**、**NetKVM**、**vioscsi**の3つの専用フォルダに分かれています。これらはKVMベースのハイパーバイザー上でWindows仮想マシンを動かすために必須のドライバーです。

- **Balloon:** メモリ割り当てを動的に管理し、VMの割り当てRAMを再起動なしで増減可能にします。  
- **NetKVM:** 高性能で安定したネットワークインターフェースを提供し、仮想マシンのネットワーク接続を最適化します。  
- **Vioscsi:** 専用のSCSIコントローラードライバーで、仮想ハードドライブの正確な検出と高速アクセスを実現。I/O性能を向上させ、Windowsが仮想ディスクを正しく認識します。  

各フォルダ内にはシステムアーキテクチャ別のサブフォルダがあります。インストール時はインストールするOSに合ったサブフォルダを選択してください。必ずamd64アーキテクチャを使いましょう。<u>3つのドライバーフォルダすべてでこの手順を繰り返してください。</u>

![img](https://screensaver01.zap-hosting.com/index.php/s/fisTox5ziW4Y3tt/download)

VirtIOドライバーのインストールが完了したら、OSの本インストールに進みます。再度ISOを切り替え、今回は元のOSインストールISOを選択し、VNCコンソールを再度開いてインストールを続行します。

![img](https://screensaver01.zap-hosting.com/index.php/s/QECit2kf66WQF9R/download)



### パーティションの作成と選択

次はパーティション設定です。まず不明なパーティションをすべて削除し、新たに表示された未割り当て領域をOSインストール先として選択します。

![img](https://screensaver01.zap-hosting.com/index.php/s/tRijdykS6CxyrbA/download)

その後、**次へ**をクリックすればインストールは自動で進みます。最後に管理者アカウントの認証情報設定を求められます。

![img](https://screensaver01.zap-hosting.com/index.php/s/bPzrdmbgYeLGrjJ/download)



## 設定

OSインストール完了後は、システムを安全かつ安定して使うための最終設定が必要です。**リモートデスクトップ（RDP）**の有効化と管理、**ファイアウォールルール**の設定（保護と機能性の両立）、**ネットワーク設定**の調整でサーバーをネットワークに適切に統合します。

これらを完了すれば、リモートアクセスが可能になり、監視や状態チェックも問題なく動作。インフラ内で安定したネットワーク環境を実現できます。



### RDP設定

Windowsでリモートデスクトップ（RDP）を有効にする手順は、Windows 10（クライアント版）とWindows Server 2016/2019/2022/2025でほぼ同じです。**コントロールパネル**または**設定**を開き、**システム → リモートデスクトップ**（クライアント版）または**システムのプロパティ → リモート**（サーバー版）に進み、**このコンピューターへのリモート接続を許可する**を有効にします。サーバー版では**リモートデスクトップを有効にする**と表示されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/kcA3bWFHamWRwL8/download)



### ファイアウォール設定

サーバーを完全に初期化し、pingテストなどの状態チェックを成功させるには、Windowsファイアウォールで**ICMPプロトコル**を許可する必要があります。これがないと監視ツールやネットワークテストがサーバーに届かず、正常なヘルスチェックができません。

![img](https://screensaver01.zap-hosting.com/index.php/s/jyLqA5Ly3iXDPJ5/download)

ICMPを有効にするには、**Windows Defender ファイアウォール 高度なセキュリティ**を開き、受信の規則を選択。新しいカスタムルールを作成し、プロトコルを「任意」に設定、**ICMPv4**を選択します。すべてのポートに適用し、ルールを有効にするプロファイル（ドメイン、プライベート、パブリック）を選択。通常はすべてのプロファイルで有効化がおすすめです。最後に「受信ICMPを許可」などわかりやすい名前を付けてウィザードを完了させます。

これでサーバーはICMPリクエストを受け入れ、`ping`コマンドや監視システムが正常に状態確認できるようになります。



### ネットワーク設定

Windowsでネットワーク設定を手動で行うには、まずコントロールパネルやタスクバーから**ネットワークと共有センター**を開きます。該当のネットワークアダプター（LANまたはWi-Fi）を選択し、右クリックして**プロパティ**を開きます。リストから**インターネット プロトコル バージョン 4 (TCP/IPv4)**を選択し、**プロパティ**をクリック。

![img](https://screensaver01.zap-hosting.com/index.php/s/nEGkdE79tDwLszr/download)

ダイアログで「IPアドレスを自動的に取得する」から「次のIPアドレスを使う」に変更。ここでサーバーの**IPアドレス**、**サブネットマスク**、**デフォルトゲートウェイ**を入力します。下部のDNS設定も手動に切り替え、プライマリDNSに`1.1.1.1`、セカンダリDNSに`8.8.8.8`を指定。**OK**で静的ネットワーク設定を適用します。





## まとめ

おめでとうございます！Windows OSのインストールと設定が無事完了しました。もし質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームまでお問い合わせくださいね！🙂



<InlineVoucher />