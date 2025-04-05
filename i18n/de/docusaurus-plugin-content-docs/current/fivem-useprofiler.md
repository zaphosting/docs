---
id: fivem-useprofiler
title: "FiveM: Verwendung des Profilers zur Ermittlung von Serverproblemen"
description: Informationen, wie du den Profiler für deinen FiveM Server on ZAP-Hosting zur Problemidentifizierung benutzt und interpretierst - ZAP-Hosting.com Dokumentation
sidebar_label: Profiler Benutzen
services:
  - gameserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

Der Profiler ist ein recht nützliches und einfach zu bedienendes Spieltool, um die Leistung des Servers zu messen. Damit lassen sich Codes und Threads überprüfen, die zu möglichen Leistungsproblemen führen. Dies kann zum Beispiel durch schlecht entwickelte Ressourcen oder ähnliches verursacht werden. Der Profiler ist direkt in die Serversoftware integriert. 

<InlineVoucher />

## Verwendung des Profilers
Die Prozedur zum benutzen vom FiveM Profiler ist relativ einfach. Führe dazu die Befehle `profiler record 100` und `profiler view` in der Live-Konsole aus. Es wird ein Profil mit 100 Frames erstellt, welches dann über den bereitgestellten Link in der Konsole aufgerufen werden kann. ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)

 


## Probleme erkennen
Der Profiler enthält Informationen zu den einzelnen Aktivitäten (Ticks), die genauer überprüft werden müssen. Wähle einen Tick-Bereich aus und zoomen ihn heran. Anhand des Ticks kann man nun sehen, welche Prozesse ausgeführt wurden und wie lange sie gedauert haben. 

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

So kannst du zum Beispiel auch erkennen, welche Ressourcen viel Zeit in Anspruch nehmen. Ressourcen, die insgesamt mehr als 6 ms verbrauchen, können mögliche Probleme verursachen.



## Abschluss

Glückwunsch, du hast erfolgreich ein FiveM-Profil erstellt, mit dem du potenzielle Probleme erkennen kannst. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
