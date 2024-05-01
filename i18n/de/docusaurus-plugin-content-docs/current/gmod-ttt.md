---
id: gmod-ttt
title: "Garry's Mod: Konfiguration"
description: Informationen zu den Konfigurationsmöglichkeiten deines Garry's Mod TTT-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Garry's Mod TTT Konfiguration
---

## Die Grundkonfiguration deines TTT-Servers

**Bitte beachte, dass der Server für alle Änderungen heruntergefahren sein muss!**

Einige Basiseinstellungen kannst du bereits bequem in unserem Webinterface setzen, wie den Servernamen, das Rcon- und Serverpasswort.

![image](https://user-images.githubusercontent.com/26007280/189975778-3bc41b8b-c637-4f29-a7c5-7b80f184a70f.png)

Sofern du diese Einstellungen nach deinen Wünschen angepasst hast, können nun die spezifischen Einstellungen des TTT-Gamemodes verändert werden. Hierbei kannst du bequem unseren Config-Editor im Webinterface nutzen, selbstverständlich ist eine Bearbeitung der Datei auch via FTP möglich.

In unserem Webinterface findest du diese Funktion unter "Configs" dort öffnest du die server.cfg

![image](https://user-images.githubusercontent.com/26007280/189975802-380b6ba8-70a1-49d2-8994-b83c199cf929.png)

Dort finden wir die Einstellungen von unserem TTT Server, die wichtigsten Variablen kurz erklärt:

## Runden und Mapwechsel
ttt_round_limit 
:::info
Dieser Wert legt die Anzahl der Runden bis zum nächsten Mapwechsel fest. (Standardmäßig: 6)
:::

ttt_time_limit_minutes
:::info
Hiermit definierst du die Zeit bis zum Mapwechsel oder einer Abstimmung. (Standardmäßig: 75)
:::

ttt_postround_dm
:::info
Sofern dieser Wert auf 1 steht, ist es möglich sich nach einer Runde gegenseitig zu töten. (Standardmäßig: 1)
:::

ttt_ragdoll_pinning_innocents 
:::info
Sofern dieser Wert auf 1 steht, ist es für die Innocents möglich, Leichen an Wänden und Decken aufzuhängen. (Standardmäßig: 1)
:::

## Gameplay
ttt_traitor_pct
:::info
Dieser Wert definiert die prozentuale Anzahl der Spieler, welche Verräter sind. Die Anzahl der Spieler wird mit diesem Wert multipliziert. (Standardmäßig: 0.25)
:::

ttt_traitor_max
:::info
Die maximale Anzahl von Verrätern. (Standardmäßig: 32)
:::

ttt_detective_pct 
:::info
Dieser Wert definiert die prozentuale Anzahl der Spieler, welche Detektive sind. Die Anzahl der Spieler wird mit diesem Wert multipliziert. (Standardmäßig: 0.13)
:::

ttt_detective_max
:::info
Die maximale Anzahl von Detektivten (Standardmäßig: 32)
:::

ttt_detective_min_players
:::info
Definiert die minimale Anzahl von Spielern, ab welcher ein Detektiv vorhanden sein soll (Standardmäßig: 5)
:::

ttt_detective_karma_min
:::info
Wenn ein Spieler unter diesen Wert fällt, sinkt die Chance ein Detektiv zu sein. (Standardmäßig: 600)
:::

ttt_minimum_players
:::info
Die Anzahl der Spieler, welche mindestens auf dem Server sein müssen, damit eine Runde beginnt. (Standardmäßig: 2)
:::

## DNA
ttt_killer_dna_range
:::info
Maximaler Bereich, um welchen eine DNA-Probe hinterlassen wird. (Standardmäßig: 300)
:::

## Karma
ttt_karma
:::info
Aktiviert oder deaktiviert das Karma-System. Spieler starten mit einer bestimmten Anzahl von Karma-Punkten, sie verlieren diese durch das verletzen oder töten von Team-Mitgliedern. Die Menge hängt vom Karma-Wert des getöteten/verletzten ab. (Standardmäßig: 1)
:::

ttt_karma_strict
:::info
Wenn aktiviert, erhöht sich der Abzug des Karmas deutlich, der sogenannte Strenge-Modus. (Standardmäßig: 1)
:::

ttt_karma_starting
:::info
Dieser Wert definiert die Anzahl der Karma-Punkte bei einem neuen Spieler. (Standardmäßig: 1000)
:::

ttt_karma_max
:::info
Die maximale Anzahl an Karma, welche ein Spieler haben kann. (Standardmäßig: 1000)
:::

ttt_karma_ratio
:::info
Definiert wieviel Karma abgezogen wird. (Standardmäßig: 0.001)
:::

ttt_karma_kill_penalty
:::info
Die Karma-Strafe basiert auf dem verursachten Schaden. Die Todesstrafe ist nur eine zusätzliche Menge an Schäden, der verursacht wird, wenn sie jemanden töten. z.B. Bei einem Heaadshot wird statt 100, 200 abgezogen. (Standardmäßig: 15)
:::

ttt_karma_round_increment
:::info
Die Grundanzahl, um wie viele Punkte das Karma sich am Rundenende "heilt" (Standardmäßig: 5)
:::

ttt_karma_clean_bonus
:::info
Wenn ein Spieler nimenaden verletzt oder tötet, erhält er diesen Wert als Bonus am Rundenende. (Standardmäßig: 30)
:::

ttt_karma_traitordmg_ratio 
:::info
Definiert den Wert, wie viele Karma-Punkte erhalten werden, wenn ein Verräter verletzt wird. (Standardmäßig: 30)
:::

ttt_karma_traitorkill_bonus
:::info
Bonus Karma, wenn ein Verräter getötet wird. (Standardmäßig: 40)
:::

ttt_karma_low_autokick
:::info
Aktiviert oder deaktiviert den Autokick eines Spielers mit niedrigem Karma-Level am Rundenende (Standardmäßig: 1)
:::

ttt_karma_low_amount
:::info
Definiert den Karma Punktestand, ob ein Spieler am Rundenende gekickt wird oder nicht. (Standardmäßig: 300)
:::

ttt_karma_low_ban
:::info
Sofern Autokick aktiviert ist, werden Spieler auch gebannt, wenn dieser Wert auf 1 steht. (Standardmäßig: 1)
:::

ttt_karma_low_ban_minutes
:::info
Definiert die Ban-Zeit welche durch einen Karma-Ban ausgelöst wird. (in Minuten) (Standardmäßig: 60)
:::

ttt_karma_persist
:::info
Sofern aktiviert, werden die Karma-Punkte beim disconnecten gespeichert. (Standardmäßig: 1)
:::

ttt_karma_clean_half
:::info
Wenn das Karma eines Spielers über dem Startlevel liegt (was bedeutet, dass das Karma-Maximum höher konfiguriert wurde), werden alle seine Karma-Erhöhungen reduziert, je nachdem, wie weit sein Karma über diesem Startlevel liegt. Je höher es ist, desto langsamer steigt es. Wenn der Standardwert 0,25 ist und die Startmenge von Karma 1000 und die maximale Menge von 1500 beträgt und ein Spieler Karma 1125 ((1500 - 1000) * 0,25 = 125) hat, beträgt sein Bonus für die saubere Runde 30/2 = 15. (Standardmäßig 0.25)
:::

Wenn du alle Variablen angepasst hast, musst du deine Änderungen nur noch speichern.

![image](https://user-images.githubusercontent.com/26007280/189975845-f8aa61c6-b68e-46b1-8b8e-45ea91052859.png)

Danach kannst du deinen Server starten! 
