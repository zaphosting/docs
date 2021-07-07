---
id: dst_create_cave
title: Don't Starve Together: Höhlen auf Server erstellen
description: Informationen wie du für Don't Starve Together Höhlen auf Servern erstellst und verwendest - ZAP-Hosting.com Dokumentationen
sidebar_label: Höhlen erstellen
---

## 📋 Voraussetzungen für Höhlen

Um Höhlen bei Don't Starve Together nutzen zu können, werden zwei über uns bestellte Server benötigt.
Der eine Server wäre der "Master" welcher für die Oberwelt genutzt wird und der zweite Server wäre der "Slave" welcher einzig und allein für die Höhlen genutzt wird.
Welchen Server du zum "Master" machst und welcher davon der "Slave" wird entscheidet sich durch die Konfigurationen der server.ini und cluster.ini.

Beide Configs sind im Interface unter "**Configs**" zu sehen und können dort bearbeitet werden.

![](https://screensaver01.zap-hosting.com/index.php/s/QycjmKD4WmmDf5c/preview)

Bearbeitet wird in beiden .ini Dateien nur der "**[SHARD]**" Teil.

## ⬆️ Master

Bei dem Master handelt es sich um den Oberwelt Server, bei diesem Server muss in den Configs der Server als Master gesetzt werden.

### server.ini

> **WICHTIG** mit "**MASTERIP**" wäre die IP vom Master Server gemeint, ist diese IP 123.123.123.123 dann muss dort "bind_ip = 123.123.123.123" eingetragen werden.
> "**MASTERIP**" ist kein statischer Wert der in der server.ini bei "bind_ip = " eingetragen werden darf.

Standardmäßig steht in der server.ini bei "**[SHARD]**" nur "is_master = true", dort werden nun folgende Befehle nachgetragen.

```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

![](https://screensaver01.zap-hosting.com/index.php/s/c8rS4bcFKFQmmpX/preview)

### cluster.ini

Standardmäßig steht in der cluster.ini bei "**[SHARD]**" nur "is_master = true", dort werden nun folgende Befehle nachgetragen.

```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

![](https://screensaver01.zap-hosting.com/index.php/s/WmQKBWZ8SXjysKm/preview)

## ⬇️ Slave

Bei dem Slave handelt es sich um den Höhlen Server, bei welchem die Daten vom Master in die Configs eingetragen werden müssen.

### server.ini

> **WICHTIG** mit "**SLAVEIP**" wäre die IP vom Slave Server gemeint, ist diese IP 123.123.123.123 dann muss dort "bind_ip = 123.123.123.123" eingetragen werden.
> "**SLAVEIP**" ist kein statischer Wert der in der server.ini bei "bind_ip = " eingetragen werden darf.
> "**MASTERIP**" ist kein statischer Wert der in der server.ini bei "master_ip = " eingetragen werden darf.

Standardmäßig steht in der server.ini bei "**[SHARD]**" nur "is_master = true", dort werden nun folgende Befehle nachgetragen.

```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Cave
id=200
```

![](https://screensaver01.zap-hosting.com/index.php/s/DSTdfgBTs78cday/preview)

### cluster.ini

Standardmäßig steht in der cluster.ini bei "**[SHARD]**" nur "is_master = true", dort werden nun folgende Befehle nachgetragen.

```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Cave
cluster_key = deinclusterkey
```

![](https://screensaver01.zap-hosting.com/index.php/s/Lf57cxzH7bmJKKF/preview)

### neue Welt generieren

In so fern alle Configs korrekt eingestellt wurden, muss für den Slave Server eine neue Welt generiert werden.
Damit die Höhlen auch korrekt erstellt werden, wird eine neue Datei benötigt.

Navigiere mithilfe dieser [FTP-Verbindung](https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess/) Anleitung bei dem Slave Server in das Verzeichnis: */starve/Save/Cluster_1/Master/*
In diesem Verzeichnis wird nun eine neue Datei mit dem Namen "*worldgenoverwrite.lua*" angelegt.
Diese Datei wird mit folgendem Inhalt gefüllt.

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

Im Anschluss muss nun im Spiel bei dem Server die "**TAB**" Taste gehalten werden, um den Serverstatus abzurufen, dort kann man oben links dann auf 3 Punkte klicken und mit "**Regenerate World**" die Welt einmal mit dem überschriebenen Parameter neu generieren.

Sobald diese neugeladen wurde, ist alles beendet und du kannst auf deinem Server mit Höhlen spielen.
