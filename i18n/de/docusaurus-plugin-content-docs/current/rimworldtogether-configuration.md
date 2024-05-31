---
id: rimworldtogether-configuration
title: "RimWorld Together: Server-Konfiguration"
description: Informationen zur Konfiguration eines RimWorld Together-Spielservers von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Server-Konfiguration
---

RimWorld Together-Server verfügen über eine Vielzahl von Konfigurationsparametern, die du nach deinen Wünschen anpassen kannst. In dieser Anleitung gehen wir auf alle derzeit verfügbaren Konfigurationsparameter ein und erklären sie genauer.

## Zugriff auf deine Konfigurationsdatei

Zunächst musst du auf deine Konfigurationsdatei zugreifen, um die Parameter zu bearbeiten. Derzeit kannst du diese Dateien nur bearbeiten, indem du per FTP auf deinen Server zugreifst. Wenn du dich mit der Verwendung von FTP nicht auskennst, empfehlen wir dir, einen Blick in die Anleitung [FTP file access](gameserver-ftpaccess.md) zu werfen.

:::note
Der Server muss gestoppt werden, bevor eine Konfiguration bearbeitet werden kann. Wenn du eine Konfiguration bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Wenn dein FTP-Client nun bereit ist, navigiere in das folgende Verzeichnis:
```
../rimworld-together/Core
```

Dieser Ordner enthält eine Vielzahl von `.json` Konfigurationsdateien für deinen RimWorld Together Server.

![image](https://screensaver01.zap-hosting.com/index.php/s/76g3TcY9TCLyFsH/preview)

## Server-Konfigurationsoptionen

In den folgenden Abschnitten findest du Informationen darüber, wie du einige beliebte und gängige Konfigurationsoptionen für deinen RimWorld Together-Server anpassen kannst. Mehr über die einzelnen Dateien erfährst du in der [offiziellen RimWorld Together-Anleitung](https://rimworldtogether.github.io/Guide/selfhosting/getting-started.html#core), in der die Konfigurationsoptionen behandelt werden.

:::tip
Wir raten davon ab, die Port- oder IP-Einstellungen in der Datei **ServerConfig.json** zu ändern, da diese automatisch vom Spielserver konfiguriert werden. Wenn du diese Werte änderst, kann dein Spieleserver kaputt gehen!
:::

#### Server-Whitelist

Das Umschalten der Server-Whitelist ist ganz einfach. Öffne die Konfigurationsdatei **Whitelist.json** und setze den Parameter `UseWhitelist` auf true.

Passe nun den Parameter "WhitelistedUsers" an und füge die Benutzernamen der Personen hinzu, die du auf die Liste setzen möchtest. Jeder, der nicht auf dieser Liste steht, kann sich nun nicht mehr verbinden.

#### Gameplay-Einstellungen

Über die Datei **DifficultyValues.json** kannst du eine Vielzahl von Schwierigkeitsparametern für deine RimWorld Together-Server einstellen.

Auch die Savegame-Einstellungen können über die Datei **WorldConfig.json** angepasst werden. Es wird empfohlen, dass du diese Datei nicht bearbeitest, wenn du schon mitten im Spiel bist, da dies das Spielerlebnis ruinieren könnte.
