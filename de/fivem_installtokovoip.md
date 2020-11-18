---
id: fivem_installtokovoip
title: TokoVOIP Installieren
sidebar_label: TokoVOIP Installieren
---

> WICHTIG: Ein **separater Teamspeak Server ist erforderlich, damit TokoVOIP funktioniert.** Ein Teamspeak Server kann direkt bei uns [hier](https://zap-hosting.com/en/shop/product/teamspeak3-server/)(anklickbar) gebucht werden!

## 📶 Mit FTP verbinden

Bevor TokoVOIP installiert werden kann, muss die [FTP-Verbindung](gameserver_ftpaccess.md) eingerichtet werden.

Nun können wir folgenden Server-Ordner öffnen:
`/g#####/gta5-fivem/server-data/resources`

## ⬇️ Voraussetzungen

### Plugin Installieren 

Jeder Spieler muss Teamspeak 3 und das TokoVOIP-Plugin auf seinem Computer installieren.

Für dieses Tutorial wird davon ausgegangen, dass die Spieler das Plugin bereits auf Ihrem lokalen Teamspeak-Client installiert haben.

Die Anleitung dazu kann man [hier](https://github.com/Itokoyamato/TokoVOIP_TS3#players-setting-up-the-ts3-plugin) finden.

## ▶️ TokoVOIP-Server installieren

> In dieser Anleitung verwenden wir WinSCP. Das ganze funktioniert aber auch auf Filezilla! 

### Installieren/Konfigurieren von ws-server

Zunächst sollte [ws_server](https://github.com/Itokoyamato/TokoVOIP_TS3/releases) vom TokoVOIP Github heruntergeladen werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/zecMzwqWJbXXws7/preview)

Wir ziehen es dann einfach per FTP in den `resources` Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/HT2pDJDxA2GkWjf/preview)

Nun öffnen wir das `ws_server` Verzeichnis, welches auf den FTP-Server hochgeladen wurde.

Hier editieren wir die `config.js` Datei.

![](https://screensaver01.zap-hosting.com/index.php/s/tPgiQBgjTkRKAC2/preview)

In dieser Datei ändern wir nur den **TSServer** und den **WSServerPort**.

```
TSServer = IP-Adresse des TS-Servers (Ohne Port)
WSServerPort = Einer der zusätzlichen Ports, die unten auf der Registerkarte 'Einstellungen' zu finden sind 
```

Ersetze **TSServer** durch Ihre Teampeak-Server **IPV4 ADRESSE**

Beispiel:

![](https://screensaver01.zap-hosting.com/index.php/s/kwEWMBGifyLNXfN/preview)

> Beachte: Es MUSS die IPV4-Addresse sein (wie im Beispiel gezeigt). Die ######.zap-ts3.com Domain wird **NICHT** funktionieren. 

Ersetze nun **WSServerPort** durch einen der 3 zusätzlichen Ports, die direkt über die Registerkarte "Einstellungen" zu sehen ist.

Beispiel:

![](https://screensaver01.zap-hosting.com/index.php/s/9G74ZL377qPWaMC/preview)

Speichere dann Ihre Änderungen und stelle sicher, dass sie erfolgreich wieder auf den Server hochgeladen werden. 

### Installieren/Konfigurieren von tokovoip_script

Nun muss [tokovoip_script](https://github.com/Itokoyamato/TokoVOIP_TS3/releases) von der TokoVOIP Github heruntergeladen werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/MZAbALc9TAnCYpp/preview)

Diesen Ordner laden wir dann einfach über FTP auf den Server.
![](https://screensaver01.zap-hosting.com/index.php/s/bprDorAtjj6kwSc/preview)

Wir öffnen nun das Verzeichnis `tokovoip_script` auf dem Server.

Hier editieren wir die `c_config.lua` Datei.

![](https://screensaver01.zap-hosting.com/index.php/s/CYApowwqfR4SymK/preview)

In dieser Datei werden wir die folgenden Werte modifizieren:
```
wsServer
TSChannel,
TSPassword, 
TSChannelWait
```

Für **wsServer** geben wir unsere FTP-Browser-Adresse ein, welche auf der Seite 'FTP-Browser' zu finden ist, zusammen mit dem Port des ws_server, welche in der Datei ws_server/config.js definiert wurde.

In unserem Beispiel wird das so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/zNeoJSZ2CCTAKX3/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/XspTrR84NkksS3H/preview)

> Hinweis: Kunden, welche eine 'Eigene IPV4-Adresse' gebucht haben, müssen weiterhin die **FTP-Browser** IP-Adresse wie oben gezeigt angeben. 

Für den **TSChannel** und das **TSPassword** setzen wir diese auf die Namen der Channel-Namen/Passwörter, die auf Ihrem Teamspeak Server definiert wurde. Wenn diese nicht erstellt wurden, muss ein Channel erstellt werden.

> Dies ist der Channel, in den die Spieler zur Kommunikation weitergeleitet werden, sobald sie vollständig zum FiveM-Server verbunden sind. Daher wird ein Passwort empfohlen, damit Spieler, die nicht auf dem Server sind, dem Channel nicht beitreten können. 

In unserem Beispiel konfigurieren wir es wie folgt:  
![](https://screensaver01.zap-hosting.com/index.php/s/zd4BjWNed9TWzpb/preview)

Für den **TSChannelWait** geben wir den **genauen** Namen des Warte-Channels an, den die Spieler beim Laden auf den Server betreten.

> WICHTIG: Es **muss **TokoVOIP** irgendwo im Namen dieses Channels haben. 

In unserem Beispiel konfigurieren wir ihn wie gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/PBzcD6BZ8c2cTpQ/preview)

Speichere dann Ihre Änderungen und stelle sicher, dass sie erfolgreich wieder auf den Server hochgeladen werden. 

### Server.cfg konfigurieren

Wenn beide Dateien konfiguriert wurden, muss dann die `server.cfg` verändert werden.

Das kann entweder per FTP oder direkt über den Reiter 'Configs' gemacht werden. 

Sobald die "server.cfg" geöffnet wurde, müssen folgende Startzeilen hinzugefügt werden:

```
start ws_server
start tokovoip_script
```
![](https://screensaver01.zap-hosting.com/index.php/s/mqr2E42jSAYHtMz/preview)

### Plugin Testen

Wenn sowohl den ws_server als auch tokovoip_script konfiguriert wurde und die Startzeilen in die server.cfg eingefügt sind, ist die Basisinstallation von TokoVOIP abgeschlossen. 

Danach **verbinden wir uns mit dem erstellten Wartekanal im Teamspeak**, **starten den Server** und **testen ihn direkt.**

![](https://screensaver01.zap-hosting.com/index.php/s/9yiZP2NgyJ7DyMS/preview)

> Hinweis: Wenn es nicht funktioniert, beachte den Abschnitt `Probleme` am Ende dieser Anleitung.

## 📃 Extra-Konfigurationen

TokoVOIP unterstützt weitere Konfigurationen für Dinge wie Radios, Einstellungen, welche Taste was macht, und vieles mehr.

Wir raten, alle verfügbaren Konfigurationsdateien zu überprüfen und sie nach Ihren Wünschen zu konfigurieren.

Für spezifische Informationen bezüglich der Konfigurationen sollte die offizielle [Github-Seite](https://github.com/Itokoyamato/TokoVOIP_TS3) beachtet werdem.

> **ZAP ist nicht in der Lage, Ihnen bei fortgeschrittenen Konfigurationen für TokoVOIP zu helfen.**


## ❓ Probleme? 

Wenn du auf irgendein Problem stößt, ist es am besten, die **Server-Konsole** auf Fehler zu prüfen und sicherzustellen, dass Sie die **korrekte IP/Ports** in den Konfigurationsdatieen definiert wurden.

Kunden, welche **eine 'Eigene IPV4-Adresse'** gebucht haben, müssen die **FTP-Browser** IP-Adresse angeben, wie in der Anleitung gezeigt. 

Bei Fehlern im Skript selbst ist es am besten, diese direkt an TokoVOIP [Github](https://github.com/Itokoyamato/TokoVOIP_TS3) zu melden.
