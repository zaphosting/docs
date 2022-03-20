---
id: scpservermod_uploadplugins
title: SCP: Secret Laboratory: Plugins auf Server installieren installieren
description: Informationen, wie du Plugins auf deinen SCP: ServerMod Server von ZAP-Hosting.com installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Plugins installieren
---

> Um Plugins auf deinem Server installieren zu können benötigst du **SCP: ServerMod**. Leider ist die Installation von Plugins bei der Vanilla Version von SCP nicht möglich. 

## 📶 Verbinden via FTP
Bevor Plugins installiert werden können, muss dein [FTP Zugang](gameserver_ftpaccess.md) eingerichtet werden.

Nachdem dies erledigt ist, kannst du dich via FTP auf deinen Server verbinden und öffnest dort folgendes Verzeichnis.
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2wKT5XzXKnR43wy/preview)

## ⬇️ Plugins Installieren

### Plugins Finden

Zunächst müssen Sie nach verfügbaren SMOD-kompatiblen Plugins suchen.

Am einfachsten findest du Plugins auf deren [Discord](https://discord.gg/T9aurNf)

> Dies ist nur eine Möglichkeit, um Plugins zu bekommen. Prüfe auf jeden Fall im Vorfeld ob das gewählte Plugin mit deiner SMOD-Version kompatibel ist.

Im folgenden Beispiel verwenden wir folgendes Plugin:

![image](https://user-images.githubusercontent.com/13604413/159183661-4e3c22ac-4d4b-44d2-b74c-4f521d581ac0.png)

### Plugins hochladen

Nachdem du ein Plugin heruntergeladen hast, kannst du dies via FTP auf deinen Server hochladen. Das geht am einfachsten via **drag&drop** in den Ordner **sm_plugins folder.**

![image](https://user-images.githubusercontent.com/13604413/159183662-b9032125-b4d6-46dd-aba2-e34f1f70762a.png)

![image](https://user-images.githubusercontent.com/13604413/159183666-e5ed02fb-c7e3-44bd-83e7-2ecb99a8befe.png)

> Beachte: Nach der Installation des Plugins wirst du deinen Server **neu starten** müssen damit das plugin **aktiv wird.**

### Plugins knfigurieren

Je nach Plugin gibt es verschiedene Konfigurationsmöglichkeiten welche du deiner config_gameplay.txt hinzufügen kannst.

Für unser Beispiel-Plugin sind folgende Konfigurationsmöglichkeiten definiert:

![image](https://user-images.githubusercontent.com/13604413/159183671-0cbad21c-98e4-4a9c-831c-2313a7072c78.png)

Um diese hinzufügen zu können musst du nun deine **config_gameplay.txt** bearbeiten.

Diese findest du links im Menü deines Servers über den **Configs** Tab.

![](https://screensaver01.zap-hosting.com/index.php/s/w6bfmpRn8fmyt6Y/preview)

Die **config_gameplay.txt** findest du im Anschluss dort:

![](https://screensaver01.zap-hosting.com/index.php/s/M3zNTxGszGixjig/preview)

> Die Konfiguration kannst du an beliebiger Stelle in dder Datei einfügen. Für eine bessere Übersicht fügen wir das ganze im Beispiel direkt unter '#Misc gameplay settings' in die **config.gameplay.txt** ein.

![](https://screensaver01.zap-hosting.com/index.php/s/qNbyngmjRpiLD9S/preview)

> Beachte: Je nach Plugin wird sich die Konfiguration von der in diesem Beispiel verwendeten unterscheiden. Stelle sicher immer die Anleitung des jeweiligen Plugins zu lesen damit du die Konfiguration korrekt hinzufügen kannst.

Nachdem du die Konfiguration vorgenommen hast kannst du deinen Server starten und findest dein Plugin ab sofort im Spiel.  
