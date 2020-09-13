---
id: scpservermod_uploadplugins
title: Plugins installieren
sidebar_label: Plugins installieren
---

> Um Plugins auf deinem Server installieren zu können benötigst du **SCP: ServerMod**. Leider ist die Installation von Plugins bei der Vanilla Version von SCP nicht möglich. 

## Verbinden via FTP
Bevor Plugins installiert werden können, muss dein [FTP Zugang](gameserver_ftpaccess.md) eingerichtet werden.

Nachdem dies erledigt ist, kannst du dich via FTP auf deinen Server verbinden und öffnest dort folgendes Verzeichnis.
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/ttm3MLyR8CpFZFt/preview)

## Plugins Installieren

### Plugins Finden

Zunächst müssen Sie nach verfügbaren SMOD-kompatiblen Plugins suchen.

Am einfachsten findest du Plugins auf deren [Discord](https://discord.gg/T9aurNf)

> Dies ist nur eine Möglichkeit, um Plugins zu bekommen. Prüfe auf jeden Fall im Vorfeld ob das gewählte Plugin mit deiner SMOD-Version kompatibel ist.

Im folgenden Beispiel verwenden wir folgendes Plugin:

![](https://screensaver01.zap-hosting.com/index.php/s/smGccFjzBbR5iRw/preview)

### Plugins Hochladen

Nachdem du ein Plugin heruntergeladen hast, kannst du dies via FTP auf deinen Server hochladen. Das geht am einfachsten via **drag&drop** in den Ordner **sm_plugins folder.**

![](https://screensaver01.zap-hosting.com/index.php/s/kKCZ66323om7DRm/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/6xPEzC2fTDjzNrj/preview)

> Beachte: Nach der Installation des Plugins wirst du deinen Server **neu starten** müssen damit das plugin **aktiv wird.**

### Plugins Konfigurieren

Je nach Plugin gibt es verschiedene Konfigurationsmöglichkeiten welche du deiner config_gameplay.txt hinzufügen kannst.

Für unser Beispiel-Plugin sind folgende Konfigurationsmöglichkeiten definiert:

![](https://screensaver01.zap-hosting.com/index.php/s/DQbaycE3Fze8Hyb/preview)

Um diese hinzufügen zu können musst du nun deine **config_gameplay.txt** bearbeiten.

Diese findest du links im Menü deines Servers über den **Configs** Tab.

![](https://screensaver01.zap-hosting.com/index.php/s/c4P7PMmoqQbgi8E/preview)

Die **config_gameplay.txt** findest du im Anschluss dort:

![](https://screensaver01.zap-hosting.com/index.php/s/2NcpJqjNQDjkRgj/preview)

> Die Konfiguration kannst du an beliebiger Stelle in dder Datei einfügen. Für eine bessere Übersicht fügen wir das ganze im Beispiel direkt unter '#Misc gameplay settings' in die **config.gameplay.txt** ein.

![](https://screensaver01.zap-hosting.com/index.php/s/gr2AR2mywrH4z6q/preview)

> Beachte: Je nach Plugin wird sich die Konfiguration von der in diesem Beispiel verwendeten unterscheiden. Stelle sicher immer die Anleitung des jeweiligen Plugins zu lesen damit du die Konfiguration korrekt hinzufügen kannst.

Nachdem du die Konfiguration vorgenommen hast kannst du deinen Server starten und findest dein Plugin ab sofort im Spiel.  

![](https://screensaver01.zap-hosting.com/index.php/s/L3C3xTZYfyPLS5Z/preview)
