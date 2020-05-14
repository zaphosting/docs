---
id: fivem_changespawnpoint
title: Spawnpoint setzen
sidebar_label: Spawnpoint setzen
---

## 📔 Map herrausfinden

Zu allererst müssen wir herrausfinden, welche Map auf unserem FiveM Server läuft.
Dafür gehen wir wie folgt vor:
**1** Gehe in dein Dashboard deines Servers

![](https://screensaver01.zap-hosting.com/index.php/s/6NyyJx8adoN227F/preview)

## 📑 Ressource für Koordinaten

Nun brauchen wir ein Script, welches uns die Koordinaten anzeigen lassen kann.
Wie zum Beispiel : https://github.com/qalle-fivem/qalle_coords
Dieses installieren wir nun.
Wie du das tun kannst findest du hier: https://docs.zap-hosting.com/docs/de/fivem_installresources/

## 🔧 Map öffnen

Nun öffnen wir unsere Map welche wir vorhin herrausgefunden haben.
Dies tun wir zb per Filezilla

![](https://screensaver01.zap-hosting.com/index.php/s/7fPmWTPyjgnz4yC/preview)

Dort öffnen wir dann die Map.lua

![](https://screensaver01.zap-hosting.com/index.php/s/bMbfGydeN5tyTfp/preview)

Nun erhalten wir eine Datei mit sehr vielen Koordinaten Einträgen

![](https://screensaver01.zap-hosting.com/index.php/s/MpPeciA3yaAATWR/preview)

Davon löschen wir jetzt **alle** Einträge bis auf zwei


![](https://screensaver01.zap-hosting.com/index.php/s/ySrZ4MkgwjskrCt/preview)


## 📖 Koordinaten bestimmen

Jetzt ist es an der Zeit auf unseren Server zu joinen
Haben wir dies getan öffnen wir die Koordinaten in dem wir */coords* eintippen
Siehe da, nun haben wir die Koordinaten.
Jetzt suchen wir uns eine geeignete Stelle und ersetzen dann die Koordinaten

![](https://screensaver01.zap-hosting.com/index.php/s/2x8EfJFXWAgfJS7/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/BPPzEmq7aGJ8bPf/preview)

Ist dies erledigt laden wir die Datei wieder neu hoch.

## 🕹 Framework installieren
Jetzt, wenn nicht schon erledigt, brauchen wir noch ein Framework auf dem Server.
Dies können wir unter dem Reiter **Ressources** tun
In dem Fall ist nun **ESX** installiert.

![](https://screensaver01.zap-hosting.com/index.php/s/gQ4ipRrcNbHaRDN/preview)

**Allternativ kann auch vRP installiert werden**

Nun spawnen neue Spieler an der festgelegten Position

## 🌏 Troubleshooting
Solltet ihr nicht an der Position spawnen wie erwünscht geht bitte folgende Schritte durch:

Checkt ob ihr auch die richtige Map benutzt habt, oft kann das passieren dass die falsche Map benutzt wird
Bearbeitet wirklich nur die Map die benutzt wird keine andere, es kann sonst zu Fehlern kommen
Leert den Cache eures Servers und startet den Server neu

Wenn ihr diese Schritte befolgt sollte es klappen
