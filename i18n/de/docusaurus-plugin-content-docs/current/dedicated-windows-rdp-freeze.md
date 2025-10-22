---
id: dedicated-windows-rdp-freeze
title: "Dedicated Server: Remote-Desktop-Verbindung bricht ab"
description: "Entdecke, wie du RDP-Freezes durch stabilere Verbindungen und Vermeidung von Sitzungsabbrüchen behebst → Jetzt mehr erfahren"
sidebar_label: RDP-Verbindungsabbrüche
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das RDP-Freezing-Problem ist ein häufiges Phänomen, bei dem Remote-Desktop-Sitzungen je nach verwendetem Betriebssystem und Version unerwartet einfrieren. Dieses Problem kann mega nervig sein und deine Produktivität stark beeinträchtigen. In diesem Beitrag erfährst du, was die Ursache ist und wie du das Problem fixen kannst.

<InlineVoucher />

## Hauptursache

Verschiedene Quellen zeigen immer mehr, dass das Problem an der geringen Fehlertoleranz des RDP-Protokolls bei Paketverlust oder beschädigten Paketen liegt. Außerdem sorgt ein Bug in bestimmten Windows-Versionen dafür, dass das Betriebssystem nicht sauber zwischen TCP- und UDP-Protokollen switcht, was das Ganze noch verschlimmert.

## Lösungsansatz

Um das Problem zu lösen, kannst du das UDP-Protokoll für die RDP-Verbindung deaktivieren und stattdessen das stabilere TCP-Protokoll nutzen. Öffne dazu die Eingabeaufforderung (cmd.exe) als Administrator auf deinem PC und führe folgenden Befehl aus:

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

Mit diesem Befehl nutzt dein Rechner für die RDP-Sitzung jetzt das TCP-Protokoll statt UDP. Das kann die Verbindung deutlich stabiler machen, vor allem bei instabilen Netzwerken oder hohem Paketverlust.

:::info 
**Bestätige die Eingabe** mit der Enter-Taste und **starte deinen PC danach neu**, damit die Änderung übernommen wird und wirkt.
:::

<InlineVoucher />