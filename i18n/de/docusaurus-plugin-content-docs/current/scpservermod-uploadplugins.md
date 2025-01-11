---
id: scpservermod-uploadplugins
title: "SCP Secret Laboratory: Plugins auf Server installieren installieren"
description: Informationen, wie du Plugins auf deinen SCP ServerMod Server von ZAP-Hosting.com installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Plugins installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archiviert - Ursache
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, nicht mehr korrekt oder nicht mehr auf dem neuesten Stand sind. Es wurde aus den folgenden Gründen archiviert:

Grund: Die Servermod Erweiterung für SCP wurde aufgegeben und wird dementsprechend nicht mehr weiterentwickelt. Wir empfehlen stattdessen auf **[SCP:EXILED](exiled-plugins.md)** umzusteigen. 
::::



<InlineVoucher />

## Verbinden via FTP
Bevor Plugins installiert werden können, muss dein [Zugriff per FTP](gameserver-ftpaccess.md) hergestellt werden.

Nachdem dies erledigt ist, kannst du dich via FTP auf deinen Server verbinden und öffnest dort folgendes Verzeichnis.
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/WXqiLKMLpLKDNpg/preview)

## Plugins Installieren

### Plugins Finden

Zunächst müssen Sie nach verfügbaren SMOD-kompatiblen Plugins suchen.

Am einfachsten findest du Plugins auf deren [Discord](https://discord.gg/T9aurNf)

:::info
Dies ist nur eine Möglichkeit, um Plugins zu bekommen. Prüfe auf jeden Fall im Vorfeld ob das gewählte Plugin mit deiner SMOD-Version kompatibel ist.
:::

Im folgenden Beispiel verwenden wir folgendes Plugin:

![](https://screensaver01.zap-hosting.com/index.php/s/LNe4GNBqrWLwL9w/preview)

### Plugins hochladen

Nachdem du ein Plugin heruntergeladen hast, kannst du dies via FTP auf deinen Server hochladen. Das geht am einfachsten via **drag&drop** in den Ordner **sm_plugins folder.**

![](https://screensaver01.zap-hosting.com/index.php/s/Tx4mFcMyBbPKpjF/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/k4j3K975SLob3ga/preview)

:::info
Beachte: Nach der Installation des Plugins wirst du deinen Server **neu starten** müssen damit das plugin **aktiv wird.**
:::

### Plugins knfigurieren

Je nach Plugin gibt es verschiedene Konfigurationsmöglichkeiten welche du deiner config_gameplay.txt hinzufügen kannst.

Für unser Beispiel-Plugin sind folgende Konfigurationsmöglichkeiten definiert:

![](https://screensaver01.zap-hosting.com/index.php/s/TYWSnWTL9bP87HB/preview)

Um diese hinzufügen zu können musst du nun deine **config_gameplay.txt** bearbeiten.

Diese findest du links im Menü deines Servers über den **Configs** Tab.

![](https://screensaver01.zap-hosting.com/index.php/s/G2xH5p2wb59A92W/preview)

Die **config_gameplay.txt** findest du im Anschluss dort:

![](https://screensaver01.zap-hosting.com/index.php/s/YknHyXCRzxJro6t/preview)

:::info
Die Konfiguration kannst du an beliebiger Stelle in dder Datei einfügen. Für eine bessere Übersicht fügen wir das ganze im Beispiel direkt unter '#Misc gameplay settings' in die **config.gameplay.txt** ein.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ac52g3GJ7aEg4Ft/preview)

:::info
Beachte: Je nach Plugin wird sich die Konfiguration von der in diesem Beispiel verwendeten unterscheiden. Stelle sicher immer die Anleitung des jeweiligen Plugins zu lesen damit du die Konfiguration korrekt hinzufügen kannst.
:::

Nachdem du die Konfiguration vorgenommen hast kannst du deinen Server starten und findest dein Plugin ab sofort im Spiel.  
