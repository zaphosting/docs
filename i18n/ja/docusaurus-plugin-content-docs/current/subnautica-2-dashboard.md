---
id: subnautica-2-dashboard
title: "Subnautica 2: ダッシュボード"
description: "ZAP-HostingのダッシュボードでSubnautica 2サーバーの管理方法、ホスティングのパフォーマンス監視、重要なZAPウェブ管理機能へのアクセス方法を解説 -> 今すぐ詳しく学ぶ"
sidebar_label: "Subnautica 2: ダッシュボード"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

**Subnautica 2**のゲームサーバーに興味がある、またはすでに所有しているけど、管理画面の全体像や必要なオプションの場所がわからない？特に最初は戸惑うことも多いですが、このガイドではサービス管理の詳細な導入を提供し、最適な全体像を掴めるようにします。

このガイドを読み終えると、サーバーを効率的に管理し、必要なオプションや機能を素早く簡単に見つけられるようになります。段階的にサーバー管理に慣れ、知識を的確に広げるための構造化された概要を提供します。これにより、**Subnautica 2**サーバーをあなたのニーズに最適化し、**ZAP-Hosting**パネルの利用可能なオプションを最大限に活用できます。

<InlineVoucher />

## Product Administration

**Product Administration**セクションでは、サーバー管理に必要なすべてのページが見つかります。以下にサーバー管理のオプションを詳しく説明します。

### Dashboard

サーバーの**ダッシュボード**は管理の中心です。サービスに関する基本かつ重要な情報がわかりやすく表示されます。例えば、サーバー所在地、状態、IP:ポート、使用メモリ、プレイ中のゲーム、サーバー名、マップ、利用可能なスロット数などです。さらにCPU、メモリ、RAMの使用率も表示されます。

![img](https://screensaver01.zap-hosting.com/index.php/s/tSHRbW66eDXBxJn/preview)

ダッシュボードからは、サービスの起動、停止、再起動が可能で、運用を完全にコントロールできます。また、ライブコンソールにアクセスしてサーバーの状態をリアルタイムで確認し、必要に応じて直接操作も行えます。

### Statistics

**Statistics**ではサーバーの負荷状況を包括的に確認できます。利用可能なスロット、CPU、メモリの負荷など様々な情報が表示されます。期間は直近の**60分、24時間、3日、7日、30日**から選択可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

これによりサーバーの使用状況を把握しやすくなります。パフォーマンス問題の特定や原因の絞り込みにも役立ちます。例えば、負荷が増えたタイミングや特定のイベント・変更との関連を追跡可能です。急な問題発生時に的確なトラブルシューティングや原因分析を行うために重要です。

### DDoS Manager

過去のDDoS攻撃を確認し、潜在的な脅威やパターンを把握できます。サーバーで発生中のDDoS攻撃の通知を有効にしておくと、インシデント発生時に迅速に対応可能です。

サーバー所在地や利用可能なDDoS保護に応じて、リアルタイムでの攻撃監視も可能です。正当なトラフィックと緩和システムでブロックされたトラフィック量の詳細な情報が表示されます。この透明性により保護の効果を理解し、リスクを早期に特定できます。

:::info DDoS Managerアクセス権がありません
DDoS Managerの利用には専用IPアドレスまたは追加オプション「DDoS Manager Overview」が必要です。現在のプランに含まれていない場合は、サービスのアップグレードでいつでも追加可能です。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::caution DDoS Manager利用条件
DDoS Managerは専用IPアドレスまたは追加オプション「DDoS Manager Overview」のいずれかが契約されている場合のみ利用可能です。これらがプランに含まれていない場合はアップグレードで追加してください。
:::

### Log files

技術的な問題が発生し原因が不明な場合、まずは**ログファイル**を確認するのが有効です。ログにはサーバーの現在のイベント、ヒント、エラーメッセージなど多くの情報が含まれています。

特にエラーメッセージは問題の原因特定や理解に役立ちます。ログファイルを的確に確認することで問題の発見や解決につながることが多いです。

:::caution ログファイルのサポートが必要な場合
ログの内容がわからない、または役に立たない場合は、**[チケット](https://zap-hosting.com/en/customer/support/)**を作成して問題を説明してください。サポートは毎日対応しており、問題解析を支援します。
:::

### Event log

**イベントログ**ではサーバー管理に関わるすべての活動を包括的に確認できます。サーバーの起動、停止、クラッシュ、アップデート、バックアップ、新規インストールの実施日時などを追跡可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Live Console

**ライブコンソール**はサーバー上の現在のイベントをリアルタイムで表示します。プレイヤーの動きやエラーメッセージ、システムメッセージなどが確認でき、サーバーの状況を総合的に把握し早期に問題を検知できます。

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

イベントの監視に加え、**ライブコンソール**から直接コマンドを送信することも可能です。設定変更や特定の操作、問題発生時の迅速な対応に役立ちます。

### Service Interruptions

サーバーが一時的にオフラインになり原因がわからない場合、イベントログやログファイルに情報がないこともあります。この場合、問題の原因はサーバーではなく、サーバーが稼働しているホストシステムにある可能性があります。

監視システムが全体的な障害を検知すると、自動的に技術者に通知され、できるだけ早く問題解決にあたります。

このセクションでは、ゲームサーバーサービスが稼働しているホストシステムの障害履歴を確認できます。最新のサービス状況は[ステータスページ](https://status.zap-hosting.com/)でご覧ください。

## Settings

**Settings**セクションではサーバー設定に必要なすべてのページが見つかります。以下に設定可能なオプションを詳しく説明します。

### Settings

**Settings**ではサーバーの一般的な設定オプションの概要と簡単な説明が表示されます。サーバー管理初心者には特にこの設定ページの利用をおすすめします。

より詳細な変更を行いたい場合は、代わりにConfig Editorの利用を推奨します。詳細は**Configs**カテゴリのガイドをご覧ください。

### Configs

コンフィグファイルエディターでは、簡易表示を使わずにウェブサイト上で直接設定ファイルを編集できます。これによりサーバー設定を個別にカスタマイズ可能です。

エディターを使うことで全オプションに直接アクセスし、正確に設定を調整できます。高度なユーザーがサーバー設定を完全にコントロールしたい場合に特に有用です。

:::caution 設定値が上書きされる場合があります
一部の変更が反映されない場合、設定ページのオプションが優先されている可能性があります。コンフィグで直接変更したい場合は、該当オプションを設定ページで無効にしてください。
:::

### Games

**Games**では、既存のゲームのバリアント変更や別のゲームのインストールが可能です。同じスロット料金のゲームは**Available Games**から直接選択できます。その他のゲームはスロット料金の調整が必要です。詳細は[ゲーム変更](gameserver-gameswitch.md)ガイドをご覧ください。

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versions

**Versions**では現在のゲームサーバーのバージョンを確認・管理できます。いつでも最新バージョンにアップデート可能で、自動更新を有効にして常に最新状態を維持できます。

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

さらに、自動更新のメール通知機能を有効にして、アップデート情報を受け取ることも可能です。

### Scheduled Tasks

定期的に自動実行されるスケジュールタスクを作成し、サーバー上の様々な処理を自動化できます。タスクは一度だけ実行するか、繰り返し実行するか設定可能です。対応タスクにはサービスの起動、停止、再起動、オンライン時のサーバー再起動、バックアップ作成、カスタムコマンドの実行などがあります。

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Restart planner

特定の時間にサーバーを再起動したい場合は、Restart Plannerを使って自動再起動のスケジュールを設定できます。指定時間や定期的な間隔での再起動が可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS settings

ZAPのDNS設定を使うと、サービスに覚えやすいアドレスを作成できます。利用可能なドメインのサブドメインを使うか、ご自身のドメインにDNSレコードを作成して、プロジェクトに関連付けやすいアドレスを設定可能です。

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Tools

ナビゲーションパネルの**Tools**セクションには、サーバー管理に役立つサブ項目が揃っています。**FTPブラウザー**、**データベース**、**バックアップ**などです。以下で各エリアの詳細を紹介します。

### FTP-Browser

**FTPブラウザー**ではFTPアクセスに接続するための必要情報が確認できます。FTPアクセスによりゲームサーバーのファイルに直接アクセス可能です。最適な利用には[FileZilla](https://filezilla-project.org/)や[WinSCP](https://winscp.net/eng/index.php)などの外部FTPクライアントの使用を推奨します。FTPの使い方がわからない場合は[FTPアクセス](gameserver-ftpaccess.md)ガイドを参照してください。

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZillaは最もシンプルで有名なFTPクライアントの一つです。インストール後、上部バーにパネルに表示された認証情報を入力し、接続ボタンを押すだけでサーバーにログインしてファイル管理ができます。

**WinSCP:** WinSCPは主にSCPやSFTP向けですが、標準FTP接続も扱えます。FileZillaより機能が多く、高度なユーザーに適しています。

### Databases

ゲームサーバー製品に加え、10個のデータベースが付属しています。データをデータベースに保存する必要がある場合に利用します。**Databases**ではデータベースの作成やアクセス認証情報の確認が可能です。バックアップ機能の有効化や既存のデータベースバックアップのインポートもできます。

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backups

**Backups**ではサーバーと関連データベースの手動および自動バックアップを作成できます。問題やデータ損失時の復旧が容易になります。

設定でバックアップの自動作成を有効にし、毎日または毎週の頻度を選択可能です。さらに、ストレージ容量が不足した場合に古いバックアップを削除するかどうかも設定できます。

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

ゲームサーバー製品にはデフォルトでバックアップ用に10GBのストレージが提供されます。必要に応じて有料で容量を増やせます。これにより常に十分なバックアップ容量を確保し、古いバックアップも保持可能です。

## Further Links

**Further Links**セクションには、製品に関連する追加リンクがまとめられています。

### Frequently Asked Questions

**Frequently Asked Questions**ではお客様からよくある質問をまとめています。役立つ回答や詳細情報が掲載されており、迅速かつ効率的に疑問を解消できます。

### ZAP-Hosting Documentation

製品ごとの豊富なドキュメントが用意されており、よくある質問や問題のナレッジベースとして機能します。様々なトピックのガイドやヘルプがあり、製品の利用や管理をサポートします。

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News

**News**ではサービスに関するすべての告知やニュースを包括的に確認できます。内容は以下のような重要情報が含まれます：

- アップデートや新機能によるサービス変更
- メンテナンスや技術的問題の告知
- 限定特典や割引などのキャンペーン情報
- その他サービス利用に重要な情報

定期的に**News**をチェックすることで最新情報を把握し、サービスを最適に活用できます。

<InlineVoucher />

## Conclusion

これで**Subnautica 2**ダッシュボードの主要なエリアを完全に把握し、**ZAP-Hosting**パネル内の中央管理、設定、ツール、情報ページの場所がわかりました。

Congratulations, you have successfully learned how to use the Subnautica 2 dashboard. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂