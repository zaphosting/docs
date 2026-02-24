---
id: humanitz-change-player-difficulty
title: "HumanitZ: Spieler-Schwierigkeit ändern"
description: "Lerne, wie du die Spieler-Schwierigkeit und Survival-Einstellungen auf deinem HumanitZ-Server anpasst → Jetzt mehr erfahren"
sidebar_label: "Spieler-Schwierigkeit ändern"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

Die Spieler-Schwierigkeit in HumanitZ bestimmt, wie hart das Survival-Erlebnis ist. Von permanentem Tod über die Geschwindigkeit des Vitalstoffabbaus bis hin zur Stärke der Banditen – diese Einstellungen beeinflussen direkt, wie herausfordernd dein Server ist.

<InlineVoucher />

## Konfiguration

Die Einstellungen zur Spieler-Schwierigkeit werden in der Datei `GameServerSettings.ini` gesteuert. Du findest diese Datei im Control Panel deines Servers unter **Configs**. Im Config-File suchst du folgende Parameter:

````
;Wenn auf true gesetzt, verliert der Spieler nach dem Tod seinen Charakter und muss einen neuen erstellen
PermaDeath=false

;0=Nichts verlieren, 1=Rucksack und Waffe in der Hand verlieren, 2=Vorheriges + Taschen und Rucksack, 3=Alles vorherige + Ausrüstung
OnDeath=2

;Schlafentzug-Effekt false=Deaktiviert true=Aktiviert
Sleep=true

;Wie schnell deine Vitalwerte sinken 0=Langsam, 1=Normal, 2=Schnell
VitalDrain=1

;Gesundheit des Hundebegleiters 0=Niedrig 1=Standard 2=Hoch
CompanionHealth=1

;Schaden des Hundebegleiters 0=Niedrig 1=Standard 2=Hoch
CompanionDmg=1

;Zeit in Minuten bis menschliche Banditen respawnen, 0 deaktiviert Respawn
HumanRespawnTimer=90

;Schwierigkeit der menschlichen Banditen Gesundheit 0=Sehr leicht, 1=Leicht, 2=Standard, 3=Schwer, 4=Sehr schwer, 5=Albtraum
HumanHealth=2

;Schwierigkeit der menschlichen Banditen Geschwindigkeit 0=Sehr leicht, 1=Leicht, 2=Standard, 3=Schwer, 4=Sehr schwer, 5=Albtraum
HumanSpeed=2

;Schwierigkeit der menschlichen Banditen Schaden 0=Sehr leicht, 1=Leicht, 2=Standard, 3=Schwer, 4=Sehr schwer, 5=Albtraum
HumanDamage=2
````

Hier eine Übersicht, was jede Einstellung steuert:

- `PermaDeath` – Bei `true` verlieren Spieler ihren Charakter dauerhaft nach dem Tod und müssen einen neuen erstellen  
- `OnDeath` – Legt fest, wie viel Inventar beim Tod verloren geht  
- `Sleep` – Aktiviert oder deaktiviert den Schlafentzug-Effekt  
- `VitalDrain` – Steuert, wie schnell Hunger, Durst und andere Vitalwerte sinken  
- `CompanionHealth` – Legt die Gesundheit des Hundebegleiters fest  
- `CompanionDmg` – Legt den Schaden des Hundebegleiters fest  
- `HumanRespawnTimer` – Bestimmt, wie lange es dauert, bis menschliche Banditen respawnen (0 deaktiviert Respawn)  
- `HumanHealth` – Passt die Gesundheit der Banditen an  
- `HumanSpeed` – Passt die Bewegungsgeschwindigkeit der Banditen an  
- `HumanDamage` – Passt den Schaden der Banditen an  

Ändere die Werte je nach gewünschtem Schwierigkeitsgrad. Nach dem Bearbeiten speichere die Datei und starte den Server neu, damit die Änderungen wirksam werden.



## Beispiel-Schwierigkeitsvoreinstellungen

### Easy Survival Setup

Dieses Setup sorgt für ein entspannteres Erlebnis mit langsamerem Vitalstoffabbau, schwächeren Gegnern und ohne permanenten Tod.

```
PermaDeath=false
OnDeath=1
Sleep=false
VitalDrain=0
CompanionHealth=2
CompanionDmg=2
HumanRespawnTimer=180
HumanHealth=1
HumanSpeed=1
HumanDamage=1
```



### Hard Survival Setup

Dieses Setup erhöht den Survival-Druck mit permanentem Tod, schnellerem Vitalstoffabbau und stärkeren Banditen.

```
PermaDeath=true
OnDeath=3
Sleep=true
VitalDrain=2
CompanionHealth=0
CompanionDmg=0
HumanRespawnTimer=60
HumanHealth=4
HumanSpeed=4
HumanDamage=4
```



## Fazit

Glückwunsch! Mit der Anpassung der Schwierigkeitswerte in der `GameServerSettings.ini` hast du die Spieler-Schwierigkeit auf deinem HumanitZ-Server erfolgreich individualisiert. Bei weiteren Fragen oder Support brauchst du nur unser Team zu kontaktieren – wir sind täglich für dich da! 🙂

<InlineVoucher />