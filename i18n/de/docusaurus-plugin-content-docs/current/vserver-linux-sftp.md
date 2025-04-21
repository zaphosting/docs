---
id: vserver-linux-sftp
title: "vServer: Verbindung via SFTP herstellen"
description: Informationen, wie du eine SFTP-Verbindung zu deinem Linux vServer von ZAP-Hosting aufbauen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: SFTP Verbindung
services:
  - vserver

---



import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

SFTP ist ein sicheres Protokoll zum Übertragen von Dateien zwischen Computern über das Internet oder ein Netzwerk. Es steht für **"SSH File Transfer Protocol"** oder auch **"Secure File Transfer Protocol"** und basiert auf dem **SSH-Protokoll (Secure Shell)**.

Im Gegensatz zu FTP (File Transfer Protocol), bei dem Daten unverschlüsselt übertragen werden, sorgt SFTP dafür, dass alle Daten verschlüsselt und somit vor unbefugtem Zugriff geschützt sind.

<InlineVoucher />



## Verbindung herstellen

Für die Verbindung via **SFTP** werden die Zugangsdaten des Root Benutzers verwendet. In diesem Beispiel wird der Verbindungsaufbau mit der WinSCP Anwendung dargestellt. Erstelle in WinSCP eine **Neue Sitzung**. 

![img](https://screensaver01.zap-hosting.com/index.php/s/HDsMr5mnJpC7FtM/download)



Wähle in dem Konfigurationsfenster der neuen Sitzung `SFTP` als **Übertragungsprotokoll** aus. Trage anschließend die **IP-Adresse** deines Servers und den Port **22** ein. Für den Benutzernamen und das Passwort verwendest du die Zugangsdaten deines `Root` Benutzers. 

![img](https://screensaver01.zap-hosting.com/index.php/s/Wq59YHDnirKYkDr/download)

:::warning Nutzung von SSH-Keys
Solltest du an Stelle der einfachen Passwort Option einen SSH-Key verwenden, so klicke auf **Advanced** und navigiere zu **SSH -> Authentication**. Dort kannst du deinen SSH-Key hinterlegen. 
:::

Beim ersten Verbindungsaufbau per SFTP erscheint dieser Hinweis, weil dein Computer den Server noch nicht kennt. Bestätige mit **"Yes"**, wenn du dem Server vertraust. Dadurch wird sein Sicherheitsschlüssel gespeichert, und du wirst bei zukünftigen Verbindungen nicht erneut gefragt. Dies ist ein normaler Schritt bei der erstmaligen Verbindung zu einem neuen Server.

![img](https://screensaver01.zap-hosting.com/index.php/s/DxErsePZJnkxyCp/download)



## Abschluss

Vorausgesetzt, dass du alle Schritte befolgt hast, hast du erfolgreich eine SFTP Verbindung zu deinem Server hergestellt. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
