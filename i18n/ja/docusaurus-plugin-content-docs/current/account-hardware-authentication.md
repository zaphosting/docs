---
id: account-hardware-authentication
title: "ハードウェア認証（パスキー）"
description: "パスキーでアカウントのセキュリティを強化し、個人情報を効果的に守る方法をチェック → 今すぐ詳しく見る"
sidebar_label: ハードウェア認証
---

import SearchableAccordion from '@site/src/components/SearchableAccordion/SearchableAccordion';
import items from '@site/data/faqs/account-hardware-authentication.json';

## はじめに

パスキーを使ったハードウェア認証は、最新でフィッシングに強いユーザーアカウントのセキュリティ方法です。従来のパスワードの代わりに暗号化された鍵ペアを使います。秘密鍵はデバイス内に安全に保存され、外に出ることはありません。認証は指紋や顔認証などの生体認証、またはデバイスのPINを使ってローカルで行われます。

## 必要条件

パスキーによるハードウェア認証を使うには、対応デバイス（スマホ、タブレット、PCなど）が必要です。OSとブラウザがパスキーまたはWebAuthnに対応していることも必須です。デバイスには指紋認証、Face ID、またはローカルPINなどの画面ロックが設定されている必要があります。

## 認証の有効化

ハードウェア認証を有効にするには、カスタマーエリアのプロフィール設定から「セキュリティ」セクションへ進みます（プロフィール設定 → セキュリティ）。ここでアカウントのセキュリティオプションを設定できます。「ハードウェア認証」を選択してセットアップを開始しましょう。

このオプションを選ぶとポップアップが開きます。ウィンドウ内の「認証器を追加」ボタンをクリックして設定を始めてください。

![img](https://screensaver01.zap-hosting.com/index.php/s/oSEpGD5emG9ToxW/download)

続いてZAP-Hosting用のパスキーサインイン作成に進みます。このステップでリカバリPINの設定を求められます。このPINはメインの認証方法が一時的に使えなくなった時にアクセスを取り戻すために必要なので、安全に保管してください。

![img](https://screensaver01.zap-hosting.com/index.php/s/tiPnCDTAkieNHNP/download)

設定が完了しパスキーによるハードウェア認証が有効になると、自動的に一度ログアウトされます。これは新しい認証方法が正しく適用されていることを確認するための通常のセキュリティ措置です。

次回ログイン時にユーザー名とパスワードを入力すると、ハードウェア認証のオプションが表示されます。このオプションを選択し、デバイスで認証リクエストを承認すればログイン完了です。

![img](https://screensaver01.zap-hosting.com/index.php/s/FEpZkCCLmi9FmLw/download)

## 認証の無効化

二要素認証を無効にしたい場合は、**プロフィール設定 → セキュリティ**に進んでください。まだサインインできる状態なら、いつでも設定済みの認証器をセキュリティ設定から削除できます。

![img](https://screensaver01.zap-hosting.com/index.php/s/Htb3Td7NfbQeCg3/preview)

## よくある質問

ハードウェア認証の利用に迷っていたり、アカウントへの影響について疑問がある場合は、以下の情報がよくある質問を解消し、ZAP-Hostingでの実際の使い方をわかりやすく説明しています。

<SearchableAccordion items={items} locale="en" />