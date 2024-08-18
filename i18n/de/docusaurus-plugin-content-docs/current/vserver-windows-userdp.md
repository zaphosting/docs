---
id: vserver-windows-userdp
title: "VPS: Zugriff auf Windows Server über Remote Desktop (RDP)"
description: Informationen zum Zugriff auf deinen Windows VPS von ZAP-Hosting über Remote Desktop (RDP) - ZAP-Hosting.com Dokumentation
sidebar_label: Erstzugang (RDP)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Windows-Betriebssystem verwendet das Remotedesktop-Protokoll (RDP), um die Verbindung zu anderen Windows-Systemen zu erleichtern. In dieser Anleitung gehen wir den einfachen Verbindungsprozess über RDP zu deinem Windows-Server durch.

<InlineVoucher />

## Verbindungsdetails vorbereiten

Unabhängig von der Anwendung, mit der du auf den Windows-Server zugreifst, musst du immer Anmeldedaten eingeben, um dich mit dem Server zu verbinden.

Beginne damit, dass du das Webinterface deines Servers aufrufst und zum Abschnitt **Zugang & Sicherheit** gehst.

Auf dieser Seite kannst du alle notwendigen Informationen einsehen, vor allem die **IP-Adresse** deines Servers und die Anmeldedaten für die Benutzerverbindung. Deine Benutzerdaten bestehen aus dem Feld **Benutzername**, das `Administrator` lauten sollte, und dem Feld **Passwort**.

Wenn dein Server neu ist, kannst du auf dieser Seite über eine Eingabeaufforderung dein anfängliches, von Ranomly generiertes Passwort abrufen. Andernfalls ist das Passwort aus Sicherheitsgründen geschwärzt, aber wenn du es irgendwann vergisst, kannst du dein eigenes Passwort festlegen oder ein neues zufällig generieren.

![image](https://screensaver01.zap-hosting.com/index.php/s/pzGKXNmjxQ3eEKe/preview)

Jetzt, wo du deine Verbindungsinformationen bereit hast, kannst du im nächsten Abschnitt eine geeignete Anwendung für die Verbindung auswählen.

## Verbindung über Windows

Seit der Einführung von RDP hat Windows OS die Anwendung **Remote Desktop Connection** als Kernsystemanwendung installiert.

Du kannst darauf zugreifen, indem du in der Windows-Suchleiste danach suchst oder indem du die Windows-Taste/das Windows-Symbol drückst und die Suchleiste im Startmenü verwendest.

![image](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

Gib in dem neuen Fenster im Feld **Computer** die IP-Adresse deines Servers ein und drücke **Verbinden**.

Du solltest nun eine Windows-eigene Eingabeaufforderung sehen, in der du den **Benutzernamen** als `Administrator` und das **Passwort** eingibst, das du entweder gefunden oder im Webinterface neu festgelegt hast.

![image](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

## Andere Remote Connection (RDP) Apps

### Desktop Apps

Die folgenden alternativen Programme eignen sich für die Verbindung mit einem Windows-Server per Remotedesktop:

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Apps für mobile Geräte

In der heutigen Zeit bietet Microsoft eine offizielle Remote Desktop (RDP) App für die beiden wichtigsten mobilen Betriebssysteme an.

Diese findest du hier für: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) und [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)

