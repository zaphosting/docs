---
id: vserver-linux-ftp
title: "VPS: FTP-Dienst nicht verfügbar (GS/TS3 Interface)"
description: "Verstehe, wie du den FTP-Zugang auf deinem VPS wiederherstellst, wenn Gameserver oder Teamspeak-Server nicht erreichbar sind → Jetzt mehr erfahren"
sidebar_label: FTP-Dienst nicht verfügbar
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Gameserver- und Teamspeak 3-Dienste, die über das GS/TS3 Interface erstellt werden, sind voll verwaltete Services. Der FTP-Zugang wird über das Interface und die zugrundeliegende Infrastruktur bereitgestellt. Wenn der FTP-Zugang nicht möglich ist, liegt die Ursache meist am Service-Status, internen Konfigurationen oder Problemen auf der Infrastruktur-Seite – und nicht an den lokalen FTP-Client-Einstellungen.



:::warning FTP-Dienst über das GS/TS3 Interface
Diese Anleitung gilt nur für den FTP-Dienst, der automatisch installiert und verwaltet wird, wenn die GS/TS3 Interface-Funktion genutzt wird. Wenn das GS/TS3 Interface nicht installiert ist, wird standardmäßig kein FTP-Server auf dem System eingerichtet. In diesem Fall ist FTP-Zugang nur verfügbar, wenn ein FTP-Dienst manuell installiert wurde.
:::

<InlineVoucher />



## ProFTPD-Status via SSH prüfen

Verbinde dich per SSH oder Konsole mit dem Server und überprüfe den aktuellen Status des FTP-Dienstes mit folgendem Befehl:

```
service proftpd status
```

Die Ausgabe zeigt, ob der ProFTPD-Dienst aktuell läuft. Wenn der Dienst als aktiv oder running angezeigt wird, ist der FTP-Dienst verfügbar und sollte eingehende Verbindungen akzeptieren. In diesem Fall liegt das Problem meist nicht am FTP-Daemon selbst, sondern kann mit Zugangsdaten, Firewall-Regeln oder der Client-Konfiguration zusammenhängen.

Wenn der Status als inactive, dead oder stopped angezeigt wird, läuft der FTP-Dienst nicht. Solange der Dienst gestoppt ist, können keine FTP-Verbindungen aufgebaut werden.

## FTP-Dienst neu starten

Wenn der ProFTPD-Dienst nicht läuft, kannst du ihn manuell starten. Führe dazu folgenden Befehl aus:

```
service proftpd restart
```

Nach dem Start oder Neustart solltest du den Status erneut prüfen, um sicherzustellen, dass ProFTPD korrekt läuft. Wenn der Dienst nach dem Neustart als aktiv angezeigt wird, sollte der FTP-Zugang wieder verfügbar sein.



## Häufige Ursachen für FTP-Probleme

FTP-Zugangsprobleme entstehen oft, weil der FTP-Dienst nicht läuft oder während eines Systemneustarts oder Updates gestoppt wurde. Konfigurationsfehler können ebenfalls verhindern, dass ProFTPD erfolgreich startet. In manchen Fällen nutzt ein anderer Dienst bereits Port 21, wodurch der FTP-Dienst den benötigten Port nicht binden kann. Temporäre System- oder Service-Probleme können ebenfalls dazu führen, dass der FTP-Dienst unerwartet stoppt.

Wenn ProFTPD sich nicht starten lässt oder direkt nach dem Start wieder stoppt, ist eine genauere Untersuchung nötig. In solchen Fällen empfiehlt sich ein Blick in die System-Logs oder die Kontaktaufnahme mit dem Support.



## Fazit



Der FTP-Zugang für GS/TS3 Gameserver-Services wird ausschließlich über das GS/TS3 Interface verwaltet. Wenn die Standard-Checks das Problem nicht lösen, ist eine Eskalation an den Support notwendig. Vollständige und genaue Angaben helfen, die Lösung schneller zu finden. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂



<InlineVoucher />