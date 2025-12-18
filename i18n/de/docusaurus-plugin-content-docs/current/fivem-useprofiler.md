---
id: fivem-useprofiler
title: "FiveM: Profiler nutzen, um Serverprobleme zu erkennen"
description: "Entdecke, wie du mit dem FiveM Profiler die Server-Performance analysierst und Ressourcenprobleme findest für ein flüssigeres Gameplay → Jetzt mehr erfahren"
sidebar_label: Profiler nutzen
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

Der Profiler ist ein super nützliches und einfach zu bedienendes Tool, um die Performance deines Servers zu messen. Damit kannst du Codes und Threads checken, die mögliche Performance-Probleme verursachen. Das kann zum Beispiel durch schlecht entwickelte Ressourcen oder Ähnliches passieren. Der Profiler ist direkt in die Server-Software integriert.

<InlineVoucher />

## Profiler verwenden
Die Nutzung des FiveM Profilers ist ziemlich simpel. Gib dazu einfach die Befehle `profiler record 100` und `profiler view` in der Live-Konsole ein. Es wird ein Profil mit 100 Frames erstellt, das du dann über den Link in der Konsole aufrufen kannst. ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)




## Probleme erkennen
Der Profiler zeigt dir Infos zu den einzelnen Aktivitäten (Ticks), die du dir genauer anschauen solltest. Wähle einen Tick-Bereich aus und zoome rein. Anhand des Ticks siehst du jetzt, welche Prozesse ausgeführt wurden und wie lange sie gedauert haben.

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

So erkennst du zum Beispiel auch, welche Ressourcen viel Zeit fressen. Ressourcen, die insgesamt mehr als 6 ms brauchen, können potenzielle Probleme verursachen.
:::



## Fazit

Glückwunsch, du hast erfolgreich ein FiveM-Profil erstellt, mit dem du mögliche Probleme identifizieren kannst. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />