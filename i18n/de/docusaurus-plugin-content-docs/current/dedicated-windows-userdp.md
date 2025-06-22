---
id: dedicated-windows-userdp
title: "Dedicated Server: Zugriff auf Windows Server über Remote Desktop (RDP)"
description: Informationen zum Zugriff auf deinen Windows Dedicated Server von ZAP-Hosting über Remote Desktop (RDP) - ZAP-Hosting.com Dokumentation
sidebar_label: Erstzugang (RDP)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Windows-Betriebssystem verwendet das Remotedesktop-Protokoll (RDP), um die Verbindung zu anderen Windows-Systemen zu erleichtern. In dieser Anleitung gehen wir den einfachen Verbindungsprozess über RDP zu deinem Windows-Server durch.

<InlineVoucher />



## Verbindung über Windows

Seit der Einführung von RDP hat Windows OS die Anwendung **Remotedesktopverbindung** als Kernsystemanwendung installiert. Du kannst darauf zugreifen, indem du in der Windows-Suchleiste danach suchst oder indem du die Windows-Taste/das Windows-Symbol drückst und die Suchleiste im Startmenü verwendest.

![](https://screensaver01.zap-hosting.com/index.php/s/TZNJQsY266fYaqg/preview)

Gib in dem neuen Fenster im Feld **Computer** die IP-Adresse deines Servers ein und drücke **Verbinden**. Du solltest nun eine Windows-eigene Eingabeaufforderung sehen, in der du den **Benutzernamen** als `Administrator` und das **Passwort**, das Passwort für deinen Windows-Server, eingeben musst.

![](https://screensaver01.zap-hosting.com/index.php/s/WYx7Czi8KtyWGgH/preview)

Drücke jetzt auf **OK** und du solltest in der Lage sein, eine Fernverbindung zu deinem Windows-Server herzustellen. Wenn du Probleme hast, überprüfe, ob die eingegebenen Anmeldedaten korrekt sind.

:::info
Es kann sein, dass du beim ersten Verbindungsaufbau einen Zertifikatsfehler siehst. Das ist normal und kann getrost ignoriert werden.
:::

Du hast dich erfolgreich mit deinem Windows Server verbunden.

## Andere Remote Connection (RDP) Apps

### Desktop Apps

Die folgenden Programme sind großartige Alternativen, die sich für die Verbindung zu deinem Windows-Server über das Remotedesktop-Protokoll (RDP) eignen. Wir empfehlen dir, die integrierte Anwendung zu verwenden, wenn du von Windows aus auf den Server zugreifst (wie im vorigen Schritt beschrieben), da sie sehr einfach zu bedienen ist und gut funktioniert.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Apps für mobile Geräte

In der heutigen Zeit bietet Microsoft eine offizielle Remote Desktop (RDP) App für die beiden wichtigsten mobilen Betriebssysteme an. Wir empfehlen, diese auf dem Handy zu benutzen, da sie viele nützliche Funktionen hat.

Die App findest du hier für die jeweilige Plattform: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) und [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)