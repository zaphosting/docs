---
id: dst-create-cave
title: "Don't Starve Together: Höhlen auf Gameservern erstellen"
description: "Entdecke, wie du Master- und Slave-Server für Höhlen in Don't Starve Together einrichtest, um dein Spielerlebnis zu verbessern → Jetzt mehr erfahren"
sidebar_label: Höhlen erstellen
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Vorbereitung für Höhlen

Um Höhlen in Don't Starve Together nutzen zu können, benötigst du zwei bei uns bestellte Gameserver. Ein Server ist der „Master“, der für die Oberwelt zuständig ist, und der zweite Server ist der „Slave“, der ausschließlich für die Höhlen genutzt wird. Welcher Server der „Master“ und welcher der „Slave“ wird, wird über die Konfigurationen in der server.ini und cluster.ini festgelegt.

Beide Konfig-Dateien findest du im Interface unter "**Configs**" und kannst sie dort bearbeiten.

![](https://screensaver01.zap-hosting.com/index.php/s/mgjpecSGBsyasmc/preview)

Bearbeitet wird nur der "**[SHARD]**"-Abschnitt in beiden .ini-Dateien.

## Master

Der Master ist der Oberwelt-Server, dieser Server muss in den Konfigurationen als Master gesetzt werden.

### server.ini

:::info
**WICHTIG:** Die "**MASTERIP**" steht für die IP-Adresse des Master-Servers. Wenn diese IP z.B. 123.123.123.123 ist, muss dort „bind_ip = 123.123.123.123“ eingetragen werden.

„**MASTERIP**“ ist kein statischer Wert, der einfach so in der server.ini bei „bind_ip =“ eingetragen werden kann.
:::

Standardmäßig steht im Abschnitt "**[SHARD]**" der server.ini nur „is_master = true“. Folgende Befehle werden dort ergänzt:

```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

### cluster.ini

Standardmäßig enthält der Abschnitt "**[SHARD]**" in der cluster.ini nur „is_master = true“. Dort werden folgende Befehle ergänzt:

```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

## Slave

Der Slave ist der Höhlen-Server, hier müssen die Daten vom Master in den Konfigurationen eingetragen werden.

### server.ini

:::info
**WICHTIG:** Die "**SLAVEIP**" steht für die IP-Adresse des Slave-Servers. Wenn diese IP z.B. 123.123.123.123 ist, muss dort „bind_ip = 123.123.123.123“ eingetragen werden.

„**SLAVEIP**“ ist kein statischer Wert, der einfach so in der server.ini bei „bind_ip =“ eingetragen werden kann.

„**MASTERIP**“ ist kein statischer Wert, der einfach so in der server.ini bei „master_ip =“ eingetragen werden kann.
:::

Standardmäßig enthält der Abschnitt "**[SHARD]**" in der server.ini nur „is_master = true“. Folgende Befehle werden dort ergänzt:

```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Caves
id=200
```

### cluster.ini

Standardmäßig enthält der Abschnitt "**[SHARD]**" in der cluster.ini nur „is_master = true“. Dort werden folgende Befehle ergänzt:

```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Caves
cluster_key = deinclusterkey
```

### Neue Welt generieren

Wenn alle Konfigurationen korrekt gesetzt sind, muss für den Slave-Server eine neue Welt generiert werden. Es wird eine neue Datei benötigt, damit die Höhlen korrekt erstellt werden.

Nutze die [Anleitung zum FTP-Zugang](gameserver-ftpaccess.md), um dich auf dem Slave-Server im Verzeichnis */starve/Save/Cluster_1/Master/* einzuloggen.  
Erstelle dort eine neue Datei mit dem Namen "*worldgenoverride.lua*".  
Diese Datei wird mit folgendem Inhalt gefüllt:

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

Anschließend musst du auf dem Server die "**TAB**"-Taste gedrückt halten, um den Serverstatus zu öffnen. Dort kannst du oben links auf die drei Punkte klicken und mit "**Regenerate World**" die Welt einmal mit den überschriebenen Parametern neu generieren.

Sobald die Welt neu geladen wurde, ist alles fertig und du kannst mit Höhlen auf deinem Gameserver spielen.

<InlineVoucher />