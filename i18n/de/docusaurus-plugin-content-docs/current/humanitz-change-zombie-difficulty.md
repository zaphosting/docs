---
id: humanitz-change-zombie-difficulty
title: "HumanitZ: Zombie-Schwierigkeit ändern"
description: "Lerne, wie du die Zombie- und KI-Schwierigkeit auf deinem HumanitZ-Server anpasst → Jetzt mehr erfahren"
sidebar_label: "Zombie-Schwierigkeit ändern"
services:
  - gameserver-humanitz

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

Die Zombie-Schwierigkeit spielt eine große Rolle dabei, wie dein Survival-Erlebnis in HumanitZ aussieht. Von Zombie-Stärke und -Geschwindigkeit bis hin zu Spawn-Multiplikatoren und KI-Raid-Events – diese Einstellungen bestimmen, wie gefährlich die Welt wird.

Alle zombie- und KI-bezogenen Schwierigkeitsoptionen werden in der `GameServerSettings.ini` Datei konfiguriert und geben dir volle Kontrolle über die Intensität der PvE-Begegnungen auf deinem Server.

<InlineVoucher />

## Konfiguration

Die Zombie-Schwierigkeit wird in der `GameServerSettings.ini` Datei gesteuert. Du findest diese Datei in deinem Server-Management-Panel unter **Configs**. Im Config-File suchst du folgende Parameter:

```
;Health difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffHealth=1

;Speed difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffSpeed=2

;Damage difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffDamage=3

;Zombie amount multiplier 2 for example would mean twice as many zombies. 0.5 would mean half as many zombies.
ZombieAmountMulti=1

;Human bandit amount multiplier 2 for example would mean twice as many human bandits. 0.5 would mean half as many human bandits.
HumanAmountMulti=1

;Zombie dog mainly appear at night. 2 for example would mean twice as many zombie dogs. 0.5 would mean half as many zombie dogs.
ZombieDogMulti=1

;The time in minutes it takes for zombies to respawn, set to 0 to disable zombie respawning.
ZombieRespawnTimer=90

;The game will sometimes spawn AI events such as zombies or humans raiding your location. 0 = Disabled, 1 = Low, 2 = Default, 3 = High, 4 = Insane
AIEvent=2
```

Hier eine Übersicht, was jede Einstellung steuert:

- `ZombieDiffHealth` – Steuert die Lebenspunkte-Schwierigkeit der Zombies  
- `ZombieDiffSpeed` – Steuert die Bewegungsgeschwindigkeit der Zombies  
- `ZombieDiffDamage` – Steuert den Schaden, den Zombies verursachen  
- `ZombieAmountMulti` – Multipliziert die Gesamtanzahl der Zombies, die spawnen  
- `HumanAmountMulti` – Multipliziert die Anzahl der menschlichen Banditen, die spawnen  
- `ZombieDogMulti` – Multipliziert die Anzahl der Zombiehunde, die spawnen  
- `ZombieRespawnTimer` – Legt fest, wie lange es dauert, bis Zombies respawnen (0 deaktiviert Respawn)  
- `AIEvent` – Steuert die Häufigkeit von KI-Raid-Events  

Nach Änderungen speicherst du die Datei und startest den Server neu, damit die neuen Einstellungen aktiv werden.



## Beispiel-Schwierigkeitsvoreinstellungen

### Easy Zombie Setup

Diese Konfiguration sorgt für ein entspannteres PvE-Erlebnis mit weniger Gegnern und geringerer Bedrohung.

```
ZombieDiffHealth=1
ZombieDiffSpeed=1
ZombieDiffDamage=1
ZombieAmountMulti=0.75
HumanAmountMulti=0.75
ZombieDogMulti=0.5
ZombieRespawnTimer=180
AIEvent=1
```



### Hard Zombie Setup

Diese Konfiguration erhöht die Gegnerstärke, Spawnraten und Eventhäufigkeit für eine deutlich gefährlichere Welt.

```
ZombieDiffHealth=4
ZombieDiffSpeed=4
ZombieDiffDamage=4
ZombieAmountMulti=1.5
HumanAmountMulti=1.5
ZombieDogMulti=2
ZombieRespawnTimer=60
AIEvent=3
```



## Fazit

Glückwunsch! Durch das Anpassen der zombie-bezogenen Werte in der `GameServerSettings.ini` hast du die Zombie-Schwierigkeit auf deinem HumanitZ-Server erfolgreich individualisiert. Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />