---
id: dedicated-windows-userdp
title: "Dedicated Server: Windows Server per Remote Desktop (RDP) erreichen"
description: "Entdecke, wie du dich ganz easy per RDP mit deinem Windows Server verbindest und sicher von verschiedenen Geräten darauf zugreifst → Jetzt mehr erfahren"
sidebar_label: Erster Zugriff (RDP)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Windows OS nutzt das Remote Desktop (RDP) Protokoll, um dir das einfache Verbinden mit anderen Windows-Systemen aus der Ferne zu ermöglichen. In dieser Anleitung zeigen wir dir den einfachen Verbindungsprozess per RDP zu deinem Windows Server.





## Verbindung über Windows

Seit es RDP gibt, ist die **Remote Desktop Verbindung** App als Kernsystem-Anwendung in Windows vorinstalliert. Du findest sie ganz easy, indem du in der Windows-Suche danach suchst oder die Windows-Taste drückst und im Startmenü suchst.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

Im neuen Fenster gibst du im Feld **Computer** die IP-Adresse deines Servers ein und klickst auf **Verbinden**. Jetzt sollte ein Windows-eigenes Anmeldefenster erscheinen, in dem du den **Benutzernamen** `Administrator` und das **Passwort** deines Windows Servers eingibst.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Drücke nun **OK** und du solltest dich remote mit deinem Windows Server verbinden können. Falls es Probleme gibt, überprüfe nochmal, ob die eingegebenen Zugangsdaten korrekt sind.

:::info
Beim ersten Verbindungsaufbau kann eine Zertifikatswarnung erscheinen. Das ist normal und kann bedenkenlos ignoriert werden.
:::

Du hast dich erfolgreich mit deinem Windows Server verbunden.

## Weitere Remote-Verbindungs-Apps (RDP)

### Desktop-Apps

Die folgenden Programme sind coole Alternativen, um per Remote Desktop Protokoll (RDP) auf deinen Windows Server zuzugreifen. Wir empfehlen dir aber, wenn du von Windows aus zugreifst, die vorinstallierte App zu nutzen (wie oben beschrieben), da sie am unkompliziertesten und stabilsten läuft.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Mobile Apps

Heutzutage bietet Microsoft eine offizielle Remote Desktop (RDP) App für die beiden großen mobilen Betriebssysteme an. Für den mobilen Zugriff empfehlen wir diese, da sie viele praktische Features mitbringen.

Die App findest du hier passend zur Plattform: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) und [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)