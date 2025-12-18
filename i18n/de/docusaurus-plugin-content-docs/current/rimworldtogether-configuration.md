---
id: rimworldtogether-configuration
title: "RimWorld Together: Server-Konfiguration"
description: "Entdecke die RimWorld Together Server-Einstellungen, um dein Gameplay anzupassen und den Zugang für ein maßgeschneidertes Multiplayer-Erlebnis zu verwalten → Jetzt mehr erfahren"
sidebar_label: Server-Konfiguration
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RimWorld Together Server bieten eine Vielzahl an Konfigurationsparametern, die du ganz nach deinem Geschmack anpassen kannst. In dieser Anleitung schauen wir uns alle aktuell verfügbaren Konfigurationsoptionen an und erklären sie dir im Detail.

<InlineVoucher />

## Zugriff auf deine Konfigurationsdatei

Zuerst musst du auf deine Konfigurationsdatei zugreifen, um irgendwelche Parameter zu bearbeiten. Derzeit ist der einzige Weg, diese Dateien zu editieren, der Zugriff auf deinen Server via FTP. Falls du mit FTP noch nicht vertraut bist, empfehlen wir dir einen Blick in die [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung.

:::note
Der Server muss gestoppt sein, bevor du Konfigurationen bearbeiten kannst. Änderungen an der Config und ein anschließender Server-Neustart ohne vorheriges Stoppen führen dazu, dass deine Änderungen nicht übernommen werden.
:::

Mit deinem FTP-Client bereit, navigiere zu folgendem Verzeichnis:
```
../rimworld-together/Core
```

Dieser Ordner enthält eine Vielzahl von `.json` Konfigurationsdateien für deinen RimWorld Together Gameserver.

![](https://screensaver01.zap-hosting.com/index.php/s/76g3TcY9TCLyFsH/preview)

## Server-Konfigurationsoptionen

In den folgenden Abschnitten zeigen wir dir, wie du einige der beliebtesten und häufig genutzten Konfigurationsoptionen für deinen RimWorld Together Server anpassen kannst. Mehr Infos zu den einzelnen Dateien findest du in der [offiziellen RimWorld Together Anleitung](https://rimworldtogether.github.io/Guide/selfhosting/getting-started.html#core), die die Konfigurationsoptionen ausführlich behandelt.

:::tip
Wir empfehlen nicht, die Port- oder IP-Einstellungen in der **ServerConfig.json** zu ändern, da diese automatisch vom Gameserver konfiguriert werden. Änderungen hier können deinen Gameserver zum Absturz bringen!
:::

#### Server-Whitelist

Das Aktivieren der Server-Whitelist ist super easy. Öffne die **Whitelist.json** Konfigurationsdatei und setze den Parameter `UseWhitelist` auf true.

Passe dann den Parameter `WhitelistedUsers` an, indem du die Ingame-Benutzernamen der Leute hinzufügst, die du auf die Liste setzen möchtest. Alle, die nicht auf dieser Liste stehen, können sich nicht mehr verbinden.

#### Gameplay-Einstellungen

Du kannst eine breite Palette an Schwierigkeitsparametern für deinen RimWorld Together Server über die **DifficultyValues.json** Datei anpassen.

Auch die Savegame-Einstellungen lassen sich über die **WorldConfig.json** Datei ändern. Es wird empfohlen, diese nicht mitten im Spielstand zu bearbeiten, da das dein Spielerlebnis negativ beeinflussen kann.

<InlineVoucher />