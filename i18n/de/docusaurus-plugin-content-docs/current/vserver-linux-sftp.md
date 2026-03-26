---
id: vserver-linux-sftp
title: "vServer: Verbindung über SFTP herstellen"
description: "Entdecke, wie du Dateien sicher per SFTP überträgst und deine Daten mit verschlüsselten Verbindungen schützt → Jetzt mehr erfahren"
sidebar_label: SFTP Verbindung
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';





## Einführung

SFTP ist ein sicheres Protokoll zum Übertragen von Dateien zwischen Computern über das Internet oder ein Netzwerk. Es steht für **„SSH File Transfer Protocol“** oder **„Secure File Transfer Protocol“** und basiert auf dem **SSH-Protokoll (Secure Shell)**.

Im Gegensatz zu FTP (File Transfer Protocol), bei dem Daten unverschlüsselt übertragen werden, sorgt SFTP dafür, dass alle Daten verschlüsselt sind und somit vor unbefugtem Zugriff geschützt werden.

<InlineVoucher />



## Verbindung herstellen

Für die Verbindung über **SFTP** werden die Login-Daten des Root-Users verwendet. Dieses Beispiel zeigt die Einrichtung der Verbindung mit der WinSCP-Anwendung. Erstelle eine **Neue Sitzung** in WinSCP.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDsMr5mnJpC7FtM/download)

Wähle im Konfigurationsfenster der neuen Sitzung `SFTP` als **Übertragungsprotokoll** aus. Gib anschließend die **IP-Adresse** deines Servers und den Port **22** ein. Für Benutzername und Passwort verwendest du die Login-Daten deines `root`-Users.

![img](https://screensaver01.zap-hosting.com/index.php/s/Wq59YHDnirKYkDr/download)

:::warning Nutzung von SSH-Schlüsseln
Wenn du statt der einfachen Passwort-Option einen SSH-Schlüssel verwendest, klicke auf **Erweitert** und navigiere zu **SSH -> Authentifizierung**. Dort kannst du deinen SSH-Schlüssel hinterlegen.
:::

Beim ersten Verbindungsaufbau via SFTP erscheint diese Meldung, da dein Rechner den Server noch nicht kennt. Bestätige mit **„Ja“**, wenn du dem Server vertraust. Dadurch wird sein Sicherheitsschlüssel gespeichert und du wirst bei zukünftigen Verbindungen nicht erneut gefragt. Das ist ein normaler Schritt beim erstmaligen Verbinden mit einem neuen Server.

![img](https://screensaver01.zap-hosting.com/index.php/s/DxErsePZJnkxyCp/download)





## Abschluss

Wenn du alle Schritte befolgt hast, hast du erfolgreich eine SFTP-Verbindung zu deinem Server hergestellt. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />