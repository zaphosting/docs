---
id: humanitz-change-weather
title: "HumanitZ: Wetter ändern"
description: "Lerne, wie du die Wetterhäufigkeit und -arten auf deinem HumanitZ-Gameserver anpasst und individualisierst → Jetzt mehr erfahren"
sidebar_label: "Wetter ändern"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

Wetterverhältnisse beeinflussen das Survival-Gameplay, die Sichtweite und die Atmosphäre in HumanitZ. Egal, ob du eine ruhigere Umgebung mit meist klarem Himmel oder eine härtere Welt mit häufigen Stürmen und Schneestürmen möchtest – durch das Anpassen der Wettereinstellungen kannst du steuern, wie oft verschiedene Wettertypen auftreten.

<InlineVoucher />

## Konfiguration

Die Wettereinstellungen werden in der Datei `GameServerSettings.ini` gesteuert. Du findest diese Datei im Control Panel deines Servers unter **Configs**. In der Konfigurationsdatei findest du folgende Parameter:

```
;Hier kannst du die Wahrscheinlichkeiten für jeden Wettertyp anpassen. Die aktuelle Jahreszeit bestimmt weiterhin, welche Wettertypen auftreten können.
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=1
Weather_Thunderstorm=1
Weather_LightSnow=1
Weather_Snow=1
Weather_Blizzard=1
```

Jede Einstellung repräsentiert die **relative Wahrscheinlichkeit**, dass der entsprechende Wettertyp auftritt. Höhere Werte erhöhen die Chance, dass dieser Wettertyp bei der Wettergenerierung ausgewählt wird, während niedrigere Werte sie verringern.

Zum Beispiel:

- `Weather_ClearSky=3` erhöht die Chance auf klaren Himmel im Vergleich zu anderen Wettertypen  
- `Weather_Blizzard=0` deaktiviert effektiv Schneestürme (außer die Saison-Logik erzwingt sie)



### Ruhiges Wetter

Dieses Beispiel priorisiert ruhiges Wetter und reduziert extreme Bedingungen:

```
Weather_ClearSky=3
Weather_Cloudy=2
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=0
Weather_Thunderstorm=0
Weather_LightSnow=1
Weather_Snow=0
Weather_Blizzard=0
```



### Heftiges Wetter

Dieses Beispiel erhöht die Wahrscheinlichkeit für heftiges und dynamisches Wetter:

```
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=2
Weather_LightRain=2
Weather_Rain=3
Weather_Thunderstorm=2
Weather_LightSnow=1
Weather_Snow=2
Weather_Blizzard=2
```

Speichere nach der Bearbeitung die Datei und starte den Gameserver neu, damit die neuen Wettereinstellungen wirksam werden.



## Fazit

Glückwunsch! Durch das Anpassen der Wetterhäufigkeitswerte in der `GameServerSettings.ini` hast du erfolgreich das Wetter auf deinem HumanitZ-Gameserver individualisiert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />