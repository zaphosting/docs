---
id: vserver-windows-userdp
title: "vServer: Zugriff auf Windows Server via Remote Desktop (RDP)"
description: "Entdecke, wie du dich sicher per RDP mit deinem Windows Server verbindest und den Zugriff kinderleicht verwaltest → Jetzt mehr erfahren"
sidebar_label: Erster Zugriff (RDP)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Windows OS nutzt das Remote Desktop (RDP) Protokoll, um dir das einfache Verbinden mit anderen Windows-Systemen aus der Ferne zu ermöglichen. In dieser Anleitung zeigen wir dir den einfachen Verbindungsprozess via RDP zu deinem Windows Server.

<InlineVoucher />

## Verbindungsdaten vorbereiten

Egal welche Anwendung du nutzt, um auf deinen Windows Server zuzugreifen, du musst immer deine Zugangsdaten eingeben, um dich zu verbinden.

Starte, indem du dich in das Webinterface deines Servers einloggst und zum Bereich **Zugriff & Sicherheit** gehst. Auf dieser Seite findest du alle wichtigen Infos, vor allem die **IP-Adresse** deines Servers und die Zugangsdaten für den Benutzer. Deine Zugangsdaten bestehen aus dem **Benutzernamen**, der `Administrator` sein sollte, und dem **Passwort**.

Wenn dein Server neu ist, findest du hier dein initial zufällig generiertes Passwort in einer Eingabemaske. Ansonsten ist das Passwort aus Sicherheitsgründen ausgeblendet. Falls du dein Passwort mal vergessen solltest, kannst du hier jederzeit ein neues generieren oder setzen.

![](https://screensaver01.zap-hosting.com/index.php/s/amLy6sC6XzBN5fQ/preview)

Jetzt, wo du deine Verbindungsdaten hast, geht’s im nächsten Abschnitt darum, die passende Anwendung für die Verbindung auszuwählen.

## Verbindung über Windows herstellen

Seit es RDP gibt, ist die Windows-eigene **Remote Desktop Verbindung** App als Kernsystem-Anwendung vorinstalliert. Du findest sie ganz einfach, indem du im Windows-Suchfeld danach suchst oder die Windows-Taste drückst und im Startmenü suchst.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

Im neuen Fenster gibst du im Feld **Computer** die IP-Adresse deines Servers ein und klickst auf **Verbinden**. Nun erscheint ein Windows-eigenes Login-Fenster, in das du den **Benutzernamen** `Administrator` und das **Passwort** deines Windows Servers eingibst.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Drücke jetzt auf **OK** und du solltest dich erfolgreich per Remote mit deinem Windows Server verbinden können. Falls es Probleme gibt, überprüfe nochmal, ob deine Zugangsdaten korrekt sind.

:::info
Beim ersten Verbindungsaufbau kann eine Zertifikatswarnung erscheinen. Das ist normal und kann bedenkenlos ignoriert werden.
:::

Du hast dich erfolgreich mit deinem Windows Server verbunden.

## Andere Remote Desktop (RDP) Apps

### Desktop-Apps

Die folgenden Programme sind super Alternativen, um per Remote Desktop Protokoll (RDP) auf deinen Windows Server zuzugreifen. Wir empfehlen dir aber, wenn du Windows nutzt, die vorinstallierte App zu verwenden (wie im vorherigen Schritt gezeigt), da sie am einfachsten und zuverlässigsten funktioniert.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Mobile Apps

Heutzutage bietet Microsoft eine offizielle Remote Desktop (RDP) App für die beiden großen mobilen Betriebssysteme an. Wir empfehlen dir, diese auf mobilen Geräten zu nutzen, da sie viele praktische Features bieten.

Die App findest du hier, je nach Plattform: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) und [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)

<InlineVoucher />