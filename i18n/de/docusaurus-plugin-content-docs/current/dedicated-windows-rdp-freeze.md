---
id: dedicated-windows-rdp-freeze
title: "Dedicated Server: Remote-Desktop-Verbindung bricht ab"
description: "Entdecke, wie du RDP-Freezes durch verbesserte Verbindungsstabilität und Vermeidung von Sitzungsabbrüchen behebst → Jetzt mehr erfahren"
sidebar_label: RDP-Verbindungsabbrüche
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das RDP-Freezing-Problem ist ein häufiges Phänomen, bei dem je nach verwendetem Betriebssystem und Version Remote-Desktop-Sitzungen unerwartet einfrieren. Dieses Problem kann frustrierend sein und die Produktivität erheblich beeinträchtigen. In diesem Dokument erfährst du mehr über die Ursache des Problems und wie du es beheben kannst.

## Hauptursache

Verschiedene Quellen deuten zunehmend darauf hin, dass das Problem auf die geringere Fehlertoleranz des RDP-Protokolls gegenüber Paketverlust oder beschädigten Paketen zurückzuführen ist. Zusätzlich kann ein Bug in bestimmten Windows-Versionen dazu führen, dass das Betriebssystem nicht nahtlos zwischen den TCP- und UDP-Protokollen wechseln kann, was das Problem weiter verschärft.

## Lösungsansatz

Um das Problem zu beheben, kannst du das UDP-Protokoll für die RDP-Verbindung deaktivieren und stattdessen das stabilere TCP-Protokoll verwenden. Öffne dazu die Eingabeaufforderung (cmd.exe) als Administrator auf deinem Rechner und führe folgenden Befehl aus:

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

Mit diesem Befehl nutzt dein Rechner nun das TCP-Protokoll anstelle des UDP-Protokolls für die RDP-Sitzung. Das kann die Stabilität der Verbindung verbessern, besonders in Netzwerken mit instabilen Verbindungen oder hohem Paketverlust.

:::info 
**Bestätige die Eingabe** mit der Enter-Taste und **starte deinen Rechner anschließend neu**, damit die Änderung übernommen und wirksam wird.
:::