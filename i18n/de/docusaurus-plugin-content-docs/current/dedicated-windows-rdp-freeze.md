---
id: dedicated-windows-rdp-freeze
title: "Dedicated Server: Remote Desktop Verbindungsabbrüche"
description: Informationen zur Fehlersuche und Behebung von Remote Desktop Verbindungsabbrüche - ZAP-Hosting.com Dokumentation
sidebar_label: RDP Verbindungsabbrüche
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das RDP-Freeze-Problem ist ein häufig auftretendes Phänomen, bei dem abhängig vom verwendeten Betriebssystem und Version, die Remote-Desktop-Sitzungen unerwartet einfrieren. Diese Problematik kann frustrierend sein und die Produktivität erheblich beeinträchtigen. In diesem Dokument erfährst du mehr über die Ursache des Problems und wie du dies beheben kannst. 

<InlineVoucher />

## Ursache

Verschiedene Quellen weisen verstärkt darauf hin, dass die Problematik auf die verringerte Widerstandsfähigkeit des RDP-Protokolls bei Paketverlust oder beschädigten Paketen zurückzuführen ist. Zudem kann ein Fehler in gewissen Windows Versionen dazu führen, dass das Betriebssystem nicht nahtlos zwischen den TCP- und UDP-Protokollen wechseln kann, was die Problematik weiter verschärft.

## Lösungsansatz
Um die Problematik  zu beheben, kannst du das UDP-Protokoll für die RDP-Verbindung deaktivieren und stattdessen nur das stabilere TCP-Protokoll verwenden Öffne dazu die Eingabeaufforderung (cmd.exe) als Administrator auf deinem eigenen Computer und führe den folgenden Befehl aus:

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

Durch Ausführen dieses Befehls wird dein Computer für die RDP-Sitzung nun von fortan das TCP- und nicht das UDP-Protokoll verwenden. Dies kann die Stabilität der Verbindung verbessern, insbesondere in Netzwerken mit instabiler Verbindung oder hohem Paketverlust.

:::info
**Bestätige die Eingabe** mit der Enter-Taste und **starte im Anschluss deinen Computer neu**, damit die Änderung übernommen und wirksam wird wird. 
:::