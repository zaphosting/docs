---
id: gmod-ttt
title: "Garry's Mod: Konfiguration"
description: "Entdecke, wie du deine TTT-Server-Einstellungen für besseres Gameplay und Rundenmanagement optimierst → Jetzt mehr erfahren"
sidebar_label: Garry's Mod TTT Konfiguration
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Die Konfiguration deines TTT-Servers

**Wichtig: Schalte deinen Server für alle Änderungen aus.**

Die Basis-Konfiguration kannst du ganz easy in unserem Webinterface erledigen, z.B. Servername, Rcon- und Serverpasswort.

![](https://screensaver01.zap-hosting.com/index.php/s/6TACDQ4QGXkRfrX/preview)

Wenn du den Server nach deinen Wünschen eingestellt hast, geht’s weiter mit der Konfiguration der speziellen TTT-Gamemode-Einstellungen. Dafür kannst du unser Webinterface nutzen oder die Datei per FTP anpassen.

Den Konfigurations-Editor findest du in unserem Webinterface unter dem Tab „Configs“, dort öffnest du die server.cfg.

![](https://screensaver01.zap-hosting.com/index.php/s/MjC5XoBCzc2tsMo/preview)

Dort findest du die Werte, um das Gameplay auf deinem TTT-Server anzupassen. Die wichtigsten Variablen kurz erklärt:

<InlineVoucher />

## Runden und Mapwechsel

ttt_round_limit  
:::info  
Maximale Anzahl an Runden, bis die Map gewechselt wird. (Standard: 6)  
:::

ttt_time_limit_minutes  
:::info  
Maximale Minutenanzahl bis zum Mapwechsel oder Start einer Abstimmung. (Standard: 75)  
:::

ttt_postround_dm  
:::info  
Erlaubt Schaden nach Ende einer Runde. Kills werden nicht für die Wertung gezählt, also freies Chaos. (Standard: 1)  
:::

ttt_ragdoll_pinning_innocents  
:::info  
Erlaubt es auch Nicht-Verrätern, Leichen festzupinnen. (Standard: 1)  
:::

## Gameplay

ttt_traitor_pct  
:::info  
Prozentsatz der Spieler, die Verräter sind. Die Spieleranzahl wird mit diesem Wert multipliziert und abgerundet. Ergebnis wird auf mindestens 1 und maximal Spieleranzahl begrenzt. (Standard: 0.25)  
:::

ttt_traitor_max  
:::info  
Maximale Anzahl an Verrätern. (Standard: 32)  
:::

ttt_detective_pct  
:::info  
Prozentsatz der Spieler, die Detektive sind. (Standard: 0.13)  
:::

ttt_detective_max  
:::info  
Maximale Anzahl an Detektiven. Damit kannst du Detektive begrenzen oder deaktivieren. (Standard: 32)  
:::

ttt_detective_min_players  
:::info  
Minimale Spieleranzahl, bevor Detektive ins Spiel kommen. (Standard: 5)  
:::

ttt_detective_karma_min  
:::info  
Wenn das Karma eines Spielers unter diesen Wert fällt, sinken seine Chancen, als Detektiv ausgewählt zu werden. (Standard: 600)  
:::

ttt_minimum_players  
:::info  
Anzahl der Spieler, die mindestens da sein müssen, bevor die Runde startet. Wird vor der Vorbereitungsphase und vor Rundenstart geprüft. (Standard: 2)  
:::

## DNA

ttt_killer_dna_range  
:::info  
Maximale Reichweite, in der eine DNA-Probe des Killers auf der Leiche des Opfers hinterlassen wird. (Standard: 300)  
:::

## Karma

ttt_karma  
:::info  
Aktiviert das Karma-System. Spieler starten mit einem Karma-Wert und verlieren Karma, wenn sie „Teammitglieder“ (also Unschuldige, wenn sie unschuldig sind, oder Verräter, wenn sie Verräter sind) verletzen oder töten. Der Verlust hängt vom Karma des Opfers ab. (Standard: 1)  
:::

ttt_karma_strict  
:::info  
Wenn aktiviert, steigt die Schadensstrafe schneller, je niedriger das Karma wird. Bei deaktiviertem strict ist die Schadensstrafe sehr niedrig, solange das Karma über 800 bleibt. (Standard: 1)  
:::

ttt_karma_starting  
:::info  
Start-Karma der Spieler. Wenn du willst, dass Spieler einen Schadensbonus „verdienen“ können, setz das z.B. auf 850. Sauberes Spielen lässt das Karma auf 1000 steigen, was ein paar Prozent mehr Schaden als ein neuer Spieler bedeutet. (Standard: 1000)  
:::

ttt_karma_max  
:::info  
Maximales Karma, das ein Spieler haben kann. Werte über 1000 geben keinen Schadensbonus, sondern nur einen „Puffer“, bevor eine Schadensstrafe einsetzt. (Standard: 1000)  
:::

ttt_karma_ratio  
:::info  
Verhältnis des Schadens, das genutzt wird, um zu berechnen, wie viel Karma des Opfers vom Angreifer abgezogen wird. (Standard: 0.001)  
:::

ttt_karma_kill_penalty  
:::info  
Alle Karma-Strafen basieren auf dem verursachten Schaden. Die Kill-Strafe ist ein zusätzlicher „Schaden“, der beim Töten angerechnet wird. Wenn dieser Wert z.B. 100 ist und du jemanden mit einem Kopfschuss tötest, wird dir so getan, als hättest du 200 Schaden verursacht. (Standard: 15)  
:::

ttt_karma_round_increment  
:::info  
Grundwert, um den das Karma am Ende jeder Runde „geheilt“ wird. (Standard: 5)  
:::

ttt_karma_clean_bonus  
:::info  
Wenn ein Spieler in der Runde keine Teammitglieder verletzt oder getötet hat, bekommt er extra 30 Karma „geheilt“. (Standard: 30)  
:::

ttt_karma_traitordmg_ratio  
:::info  
Wie ttt_karma_ratio, aber für die Karma-Belohnung, wenn man einen Verräter verletzt. Standardmäßig wird das Belohnt mit ca. 1/4 der Strafe, die man bekommen würde, wenn es ein Unschuldiger mit vollem Karma wäre. (Standard: 30)  
:::

ttt_karma_traitorkill_bonus  
:::info  
Bonus-Karma für das Töten eines Verräters. (Standard: 40)  
:::

ttt_karma_low_autokick  
:::info  
Spieler mit niedrigem Karma werden am Ende der Runde automatisch gekickt. (Standard: 1)  
:::

ttt_karma_low_amount  
:::info  
Karma-Level, bei dem Spieler am Rundenende gekickt werden. (Standard: 300)  
:::

ttt_karma_low_ban  
:::info  
Wenn low_autokick aktiviert ist, werden Spieler zusätzlich gebannt, wenn diese Option an ist. Keine Wirkung, wenn Autokick aus ist. (Standard: 1)  
:::

ttt_karma_low_ban_minutes  
:::info  
Dauer des Banns in Minuten. (Standard: 60)  
:::

ttt_karma_persist  
:::info  
Speichert das Karma eines Spielers dauerhaft am Rundenende oder bei Disconnect. Beim Wiedereinloggen wird es geladen, sodass das Karma auch bei Mapwechsel erhalten bleibt. (Standard: 1)  
:::

ttt_karma_clean_half  
:::info  
Wenn das Karma eines Spielers über dem Startwert liegt (also wenn das maximale Karma höher als der Startwert konfiguriert ist), werden alle Karma-Zuwächse basierend darauf reduziert, wie weit das Karma über dem Startwert liegt. Je höher das Karma, desto langsamer steigt es. (Standard: 0.25)  
:::

Wenn du alle Variablen nach Wunsch angepasst hast, ist der nächste Schritt, deine Änderungen zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/LyEsQQ8Af8AwWj9/preview)

Danach kannst du deinen Server starten!

<InlineVoucher />