---
id: vserver-windows-rdp-freeze
title: "vServer: Remote Desktop Verbindung bricht ab"
description: "Entdecke, wie du RDP-Freezing-Probleme behebst, indem du die Verbindungsstabilität verbesserst und die Produktivität im Remote Desktop steigerst → Jetzt mehr erfahren"
sidebar_label: RDP-Verbindung bricht ab
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das RDP-Freezing-Problem ist ein häufiges Phänomen, bei dem je nach verwendetem Betriebssystem und Version Remote-Desktop-Sitzungen unerwartet einfrieren. Dieses Problem kann mega nervig sein und die Produktivität stark beeinträchtigen. In diesem Beitrag erfährst du mehr über die Ursache des Problems und wie du es fixen kannst.

<InlineVoucher />

## Hauptursache

Verschiedene Quellen deuten immer mehr darauf hin, dass das Problem an der geringeren Robustheit des RDP-Protokolls gegenüber Paketverlusten oder beschädigten Paketen liegt. Zusätzlich kann ein Bug in bestimmten Windows-Versionen dazu führen, dass das Betriebssystem nicht nahtlos zwischen dem TCP- und UDP-Protokoll wechselt, was das Problem noch verschärft.

## Lösungsansatz

Um das Problem zu lösen, kannst du das UDP-Protokoll für die RDP-Verbindung deaktivieren und stattdessen das stabilere TCP-Protokoll nutzen. Öffne dazu die Eingabeaufforderung (cmd.exe) als Administrator auf deinem Rechner und führe folgenden Befehl aus:

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

Mit diesem Befehl nutzt dein Rechner für die RDP-Sitzung jetzt das TCP-Protokoll statt UDP. Das kann die Stabilität der Verbindung verbessern, vor allem in Netzwerken mit instabilen Verbindungen oder hohem Paketverlust.

:::info 
**Bestätige die Eingabe** mit der Enter-Taste und **starte deinen Rechner danach neu**, damit die Änderung übernommen und wirksam wird.
:::

<InlineVoucher />