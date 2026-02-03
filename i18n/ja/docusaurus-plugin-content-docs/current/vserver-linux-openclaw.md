---
id: vserver-linux-openclaw
title: "VPS: LinuxでOpenClawをセットアップ - あなただけのAIアシスタントを作ろう！"
description: "OpenClawのセルフホスティング設定方法を解説。パワフルなオープンソースAIアシスタントを自分で構築しよう → 今すぐチェック"
sidebar_label: OpenClawのインストール
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## はじめに

[OpenClaw](https://openclaw.ai/)は、ブラウザベースのインターフェースを通じてソフトウェアとやり取りできるAI搭載の自動化＆コントロールプラットフォームです。メニューを手動でクリックしたり、UIをナビゲートしたり、同じ作業を繰り返す代わりに、OpenClawはプログラム的にタスクを実行し、ウェブダッシュボードからリモートコントロールが可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/XQkk46EnKzxxWrK/preview)

OpenClawが特に革新的なのは、アプリケーションやシステムのためのモダンな「コントロールレイヤー」を実現している点です。ローカルのデスクトップセッションに縛られることなく、VPSなどのリモートマシン上で動作し、どこからでも完全に管理可能です。これにより、信頼性の高い自動化、リモートコントロール、集中管理をローカルPCを常時稼働させることなく実現できます。

自分でこのサービスをホスティングしたい？セットアップから設定まで、必要なポイントをすべて丁寧に解説します。

<InlineVoucher />


## OpenClawの活用例

OpenClawは日常のさまざまなシーンで使え、タスクの自動化、AI利用の集中管理、常時稼働するアシスタントの運用をしたい人にピッタリです。

よくある使い方は、複数プラットフォームにまたがるAIとのやり取りを一元化すること。異なるメッセージングアプリごとにツールを使い分ける代わりに、OpenClawが一つのアシスタントとして一貫したコンテキストと設定で動作し、どこからアクセスしても同じ体験を提供します。

また、自動化にも強力です。繰り返しの手作業を減らし、定期的なタスクの処理、情報整理、内容の要約、構造化された応答を提供します。

さらにウェブ自動化も重要な用途です。専用のChromeやChromiumインスタンスを使ってブラウザセッションを制御し、API連携がないウェブインターフェースともやり取りできます。

これらのシナリオを支えるため、OpenClawは多チャネルメッセージング（WhatsApp、Telegram、Slack、Discordなど）、セッション＆チャネル管理のゲートウェイアーキテクチャ、オプションのボイス機能、インタラクティブキャンバス、拡張可能なスキルプラットフォーム、複数AIプロバイダー対応（OpenAIやAnthropicなど）、モバイルアクション用デバイスノード、APIキー認証、永続的なワークスペース＆設定管理など、多彩な機能を備えています。

![img](https://screensaver01.zap-hosting.com/index.php/s/7A5eiaMSE8FFQRs/download)


## 前提条件

**OpenClaw**の使い方によってはリソース消費が急増することがあります。基本的なセットアップ（例えばWeb UIのみで最小限の自動化）は小規模VPSでも問題ありませんが、複数チャネルの同時運用、多数のスキル有効化、ブラウザ自動化など高度な使い方はかなりリソースを使います。

安定したパフォーマンスを確保するため、特にOpenClawを常時バックグラウンドで動かす場合は、CPUとRAMに余裕のあるVPSプランを選ぶのがおすすめです。

| ハードウェア | 最低限       | ZAP-Hosting推奨          |
| ------------ | ------------ | ------------------------ |
| CPU          | 1 vCPUコア   | 8 vCPUコア               |
| RAM          | 4 GB         | 16 GB                    |
| ディスク容量 | 25 GB        | 50 GB                    |




## インストール
インストールはLinux VPS上で公式OpenClawインストーラーを実行するところから始まります。SSHでサーバーに接続し、以下のコマンドを実行してください：

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

コマンド実行後、対話型のインストールスクリプトが自動で起動し、セットアップを案内します。環境チェック、依存関係のインストール、OpenClawのオンボーディングプロセスが順に進みます。

![img](https://screensaver01.zap-hosting.com/index.php/s/DJcT4NrJ7ts8Gqn/download)



### プラットフォーム検出と依存関係チェック

インストーラーは自動でOSを検出し、必要な依存関係をインストールします。例えばNode.jsがなければ自動で導入されるので、手動操作は不要です。



### 必要パッケージのインストール

OpenClawはシステムのパッケージマネージャーを使って必要なパッケージをインストールします。手動操作は不要で、すべて揃うと自動で次に進みます。

### OpenClawのインストール

依存関係が整うと、OpenClawのリリースをダウンロードしてインストールします。完了すると以下のような確認メッセージが表示されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/NwTqC997KQ23Htr/preview)



### OpenClawのオンボーディング

インストール後、オンボーディングウィザードが自動で始まります。初期設定を完了し、OpenClawを使える状態にするために必須です。



まず表示されるセキュリティ通知を読み、同意して続行します。次にオンボーディングモードを選択。ほとんどのユーザーは**QuickStart**が推奨です。

![img](https://screensaver01.zap-hosting.com/index.php/s/ZQXSmmwQ29yk374/preview)

続いてモデル／認証プロバイダーを選択します。ここでは例として**OpenAI**を選択。OpenAIのAPIキーを入力してください。OpenClawはこのキーをローカル設定に保存し、今後のセッションで利用します。APIキー保存後、OpenClawが使うデフォルトモデルを選択します。

![img](https://screensaver01.zap-hosting.com/index.php/s/HQ5MNqCxdd5EY8Q/preview)

最後に、チャネル（Telegram、Discord、Slackなど）、スキル、フックの設定がオプションで可能です。今すぐ設定したくなければスキップして続行できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/xFnb3GNSiSZBPnD/preview)

Telegram経由でOpenClawを使いたい場合は、まずTelegramボットを作成しAPIトークンを取得する必要があります。これはTelegramの公式**BotFather**アカウントで行います。

**BotFather**とのチャットを開き、`/newbot`を送信して作成プロセスを開始し、指示に従います。  
BotFatherはまず表示名を聞き、次にユーザー名を求めます。ユーザー名は必ず`bot`で終わる必要があります。

会話例はこんな感じ：

```
User: /newbot 

BotFather: Alright, a new bot. How are we going to call it? Please choose a name for your bot.  

User: ZAP DOCS EXAMPLE

BotFather: Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: TetrisBot or tetris_bot. 

User: ZAP_DOCS_EXAMPLE_BOT 

BotFather:  Done! Congratulations on your new bot. You will find it at t.me/ZAP_DOCS_EXAMPLE_BOT. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
```

BotFatherがボット作成を確認したら、表示された**トークン**をコピーして安全に保管してください。OpenClawのオンボーディングや設定でTelegramチャネルを接続する際に必要です。このトークンを持つ人は誰でもボットを操作できるため、絶対に公開しないでください。

![img](https://screensaver01.zap-hosting.com/index.php/s/JHTxW7Pi4SRsoe7/preview)

Telegramボットを作成しトークンを保存したら、オンボーディングを続けます。次のステップで**スキル**のインストールや**フック**の有効化が可能です。推奨設定ですが、後から設定画面で変更できるのでスキップしてもOKです。

オンボーディング完了後、OpenClawは**ゲートウェイサービス**を自動でインストールします。最後に**Web UI**オプションを選択すると、ダッシュボードのリンクが表示され、ブラウザからOpenClawのコントロールUIにアクセスして管理を続けられます。

セットアップ終了時に**シェル補完スクリプト**のインストールも提案されます。これは任意ですが、OpenClawコマンドのオートコンプリートが使えてCLI操作が快適になるのでおすすめです。案内に従って導入しましょう。

![img](https://screensaver01.zap-hosting.com/index.php/s/xWNpjYj2XeKgK4J/preview)





## 設定

当社のVPSはデフォルトでGUIが入っていません。そのためOpenClawはヘッドレスモードで動作し、コントロールUIはサーバーのローカル`18789`ポートでのみ公開されます。

インストール＆オンボーディング完了後、OpenClawはコンソールにダッシュボード情報を表示します：

```
Dashboard link (with token):
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Copy/paste this URL in a browser on this machine to control OpenClaw.
No GUI detected. Open from your computer:
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111

Then open:
http://localhost:18789/
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Webインターフェースは`127.0.0.1`にバインドされているため、インターネットから直接アクセスできません。PCから安全にアクセスするには、SSHトンネルを作成してVPSのOpenClawポートをローカルに転送します。

PCのターミナルで以下を実行：

```bash
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111
```

このSSHセッションが開いている間、ブラウザで以下のURLにアクセスしてOpenClawコントロールUIを使えます：

```
http://localhost:18789/
```

認証が必要な場合は、OpenClaw出力に表示されたトークン付きリンクを開いてください：

```
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```



:::tip GUI（デスクトップ環境）を使う

GUIでOpenClawを使いたい場合は、VPSにデスクトップ環境（例：**XFCE**）をインストール可能です。GUIとリモートデスクトップ（RDPやVNCなど）を導入すれば、SSHポート転送なしでVPSのデスクトップから直接OpenClawを操作できます。

:::



![img](https://screensaver01.zap-hosting.com/index.php/s/FscTYx36eWeHHca/download)



### スキルのインストール

スキルはOpenClawに追加機能や連携をもたらします。  
OpenClawには50以上のスキルが用意されており、ダッシュボードの**Skills**セクションから直接インストール＆有効化できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/gXxs6j9WHtxPYAQ/preview)



### フックの有効化

フックは特定のイベント発生時やコマンド使用時に自動でアクションを実行します。  
繰り返しタスクの自動化、コンテキスト保存、ワークフロー起動などに便利です。

![img](https://screensaver01.zap-hosting.com/index.php/s/KYSWM4cFcDp45F6/preview)



### チャネルの設定

チャネルを使うと、メッセージングプラットフォーム経由でOpenClawを操作できます。  
ダッシュボードでTelegram、Discord、Slackなど対応チャネルを設定・接続可能です。

![img](https://screensaver01.zap-hosting.com/index.php/s/Le38gZXf2BDintr/preview)

選んだプラットフォームによっては追加のトークンや認証情報が必要です（例：インストール時に説明したBotFatherで作成したTelegramボットのトークンなど）。

チャネル接続が成功すると、そのプラットフォーム経由でOpenClawがメッセージの受信＆応答を行えます。TelegramでのAIアシスタントとの会話例はこんな感じ：

![img](https://screensaver01.zap-hosting.com/index.php/s/oFRZCEPFyyMmsG4/preview)



## セキュリティについて

OpenClawは強力なツールなので、適切なセキュリティ対策を必ず行いましょう。ゲートウェイダッシュボードはトークンで保護されており、これはパスワードのように機能しOpenClawインスタンスへのアクセス権を与えます。このトークンをスクリーンショットやチケット、チャットログなどで公開しないでください。トークンを持つ誰でもダッシュボードにアクセスし操作可能です。

OpenClawはファイアウォールの内側に置き、ゲートウェイインターフェースを直接パブリックに公開しないのが推奨設定です。デフォルトでゲートウェイサービスは`127.0.0.1`にバインドされており、外部アクセスを防ぎます。リモートでダッシュボードにアクセスする場合はSSHポート転送を使い、信頼できるユーザーだけにアクセスを限定してください。



## まとめ＆参考リソース

おめでとうございます！これでVPSにOpenClawを無事インストール＆設定できました。さらに役立つ情報やサポートを得るため、以下のリソースもぜひチェックしてください。

- [openclaw.ai](https://https://openclaw.ai/) - 公式サイト
- [docs.openclaw.ai](https://docs.openclaw.ai/start/getting-started) - OpenClawドキュメント
- [clawhub.com](https://clawhub.com/) - ClawHub - コミュニティ制作スキル集

ここにない質問やサポートが必要な場合は、いつでもお気軽に当社サポートチームへお問い合わせください。毎日対応しています！🙂

<InlineVoucher />