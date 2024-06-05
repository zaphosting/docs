---
id: vrising-server-savegames
Titel: "V Rising: V Rising Savegames verwalten"
description: Informationen über die Verwaltung von Savegames auf deinem V Rising Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Savegames verwalten
---

In dieser Anleitung erfahren wir, wie du deine V Rising Gamesaves auf deinem Spielserver verwaltest, einschließlich der Sicherung deiner lokalen und Server-Savegames sowie des Uploads auf deinen Server.

## Voraussetzungen

Um auf die Dateien deines Servers zugreifen zu können, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source sind und kostenlos heruntergeladen werden können.

Du musst dich über einen FTP-Client mit deinem Server verbinden, indem du die Zugangsdaten verwendest, die du im Webinterface deines Spieleservers unter **Tools->FTP-Broswer** findest. Bitte benutze unseren [FTP File Access guide](gameserver-ftpaccess.md) als weitere Hilfe, um dich mit deinem Server zu verbinden.


## Backup Savegame

### Lokales Savegame

Lokale Savegames sind Savegames, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät veranstaltet hast. Diese findest du in deinen Windows LocalLow AppData, und zwar in folgendem Pfad:
```
../AppData/LocalLow/Stunlock Studios/VRising
```

:::tip
Du kannst ganz einfach direkt auf diesen Pfad zugreifen, indem du gleichzeitig `CTRL` + `R` drückst und im Ausführen-Dialog nach dem folgenden Pfad suchst: `%Benutzerprofil%/appdata/locallow/Stunlock Studios/VRising`. Drücke einfach **OK** und du wirst zu dem Ordner weitergeleitet.

![image](https://screensaver01.zap-hosting.com/index.php/s/dz4ytiTai5jD2ep/preview)
:::

An diesem Ort siehst du entweder einen `Saves`- und/oder einen `CloudSaves`-Ordner, je nachdem, ob du die Steam Cloud Saving-Funktion genutzt hast und welchen Server du benutzt. Wenn du in die Ordner gehst, findest du deine lokalen Savegames.

:::note
Je nach Spielversion befinden sich deine Spielstände entweder in einem v1- oder v3-Ordner.
:::

### Zugriff auf Savegame über FTP

Es ist ganz einfach, dein Savegame auf dem Server zu sichern. Sobald du dich über einen FTP-Client mit deinem Spielserver verbunden hast, gehst du zu folgendem Pfad:
```
../vrising/save-data/Saves
```

Dort solltest du je nach Spielversion einen v1- und einen v3-Ordner sehen können. In jedem dieser Ordner findest du deine Savegames. Klicke einfach mit der rechten Maustaste auf den Ordner und benutze die Schaltfläche **Download**, um ihn lokal auf deinem Gerät zu speichern.

![image](https://screensaver01.zap-hosting.com/index.php/s/tZ4HngqLeHTkizz/preview)

### Automatische Sicherung

Wir bieten auch die Möglichkeit, dein Savegame (und deine Konfigurationsdatei) direkt über unser Webinterface automatisch zu sichern. Rufe einfach das Webinterface deines Spieleservers auf und gehe in den Bereich **Tools->Backups**. Hier kannst du eine Reihe von Optionen konfigurieren, um automatische Backups für deinen Server zu planen. Wir stellen dir 10gb kostenlosen Backup-Speicher zur Verfügung, in dem deine Backups gespeichert werden. Weitere Informationen zu Backups findest du in unserem [Automatic Server Backup guide](gameserver-backups.md) zu diesem Thema.

## Savegame hochladen

Ähnlich wie das Sichern ist auch das Hochladen deines Savegames ganz einfach. Stelle zunächst sicher, dass du dich über einen FTP-Client mit deinem Spielserver verbindest. Sobald du bereit bist, gehst du zu folgendem Pfad:
```
.../vrising/save-data/Saves
```

![image](https://screensaver01.zap-hosting.com/index.php/s/RXd4aoxrA6QnP46/preview)

Je nach Version deines Spielstandes musst du jetzt nur noch deine Savegames mit deinem FTP-Client in den entsprechenden Ordner ziehen und schon werden sie auf deinen Server hochgeladen.

:::tip
Es kann sinnvoll sein, den Namen des hochgeladenen Gamesave-Ordners zu kopieren, da du ihn brauchst, wenn du ihn im nächsten Abschnitt aktivieren möchtest.
:::

## Savegame aktivieren

Um ein bestimmtes Savegame verwenden zu können, musst du eine Konfigurationsdatei bearbeiten. Es gibt mehrere Möglichkeiten, dies zu tun. Wir werden uns mit dem Webinterface befassen, da dies am benutzerfreundlichsten ist. Wenn du andere Methoden zur Bearbeitung der Datei suchst, schaue dir bitte unsere [V Rising-Konfigurationsanleitung](vrising-configuration.md) an, in der dies beschrieben wird.

Gehe einfach im Webinterface deines Spieleservers in den Bereich **Einstellungen** und suche die Einstellung **Savenname**.

Ändere diese Einstellung auf den Namen des Spielstandsordners, den du im vorherigen Schritt hochgeladen hast. Wenn du fertig bist, stelle sicher, dass du unten mit der grünen Schaltfläche **Speichern** speicherst und dann deinen Server neu startest.