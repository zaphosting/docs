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

Windows OS nutzt das Remote Desktop (RDP) Protokoll, um das Verbinden mit anderen Windows-Systemen aus der Ferne super einfach zu machen. In dieser Anleitung zeigen wir dir, wie du dich ganz unkompliziert per RDP mit deinem Windows Server verbindest.

<InlineVoucher />

## Verbindung über Windows

Seit es RDP gibt, ist die **Remote Desktop Verbindung** App standardmäßig als Kernsystem-Anwendung auf Windows installiert. Du findest sie ganz easy, indem du im Windows-Suchfeld danach suchst oder die Windows-Taste drückst und im Startmenü suchst.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

Im neuen Fenster gibst du im Feld **Computer** die IP-Adresse deines Servers ein und klickst auf **Verbinden**. Jetzt sollte ein Windows-eigenes Anmeldefenster erscheinen, in dem du den **Benutzernamen** `Administrator` und das **Passwort** für deinen Windows Server eingibst.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Drücke jetzt auf **OK** und du solltest dich remote mit deinem Windows Server verbinden können. Falls es Probleme gibt, überprüfe nochmal, ob die eingegebenen Zugangsdaten korrekt sind.

:::info
Beim ersten Verbinden kann eine Zertifikatswarnung erscheinen. Das ist normal und kann bedenkenlos ignoriert werden.
:::

Du hast dich erfolgreich mit deinem Windows Server verbunden.

## Andere Remote-Verbindungs-Apps (RDP)

### Desktop-Apps

Die folgenden Programme sind coole Alternativen, um per Remote Desktop Protokoll (RDP) auf deinen Windows Server zuzugreifen. Wir empfehlen dir aber, die eingebaute Windows-App zu nutzen (wie im vorherigen Schritt), da sie am unkompliziertesten ist und super funktioniert.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Mobile Apps

Heutzutage bietet Microsoft eine offizielle Remote Desktop (RDP) App für die beiden großen mobilen Betriebssysteme an. Für mobile Geräte empfehlen wir diese Apps, da sie viele nützliche Features haben.

Die App findest du hier, je nach Plattform: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) und [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)

<InlineVoucher />