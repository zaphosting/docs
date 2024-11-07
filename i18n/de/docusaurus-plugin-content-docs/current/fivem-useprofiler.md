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

Der Profiler ist ein recht nützliches und einfach zu bedienendes Spieltool, um die Leistung des Servers zu messen. Damit lassen sich Codes und Threads überprüfen, die zu möglichen Leistungsproblemen führen. Dies kann zum Beispiel durch schlecht entwickelte Ressourcen oder ähnliches verursacht werden. Der Profiler ist direkt in die Serversoftware integriert und kann somit auch für jede FiveM Servervariante verwendet werden. 

<InlineVoucher />

## Verwendung des Profilers
Die Vorgehensweise zur Nutzung des Profilers kann je nach gewählter FiveM Server Variante (Windows/Linux/TxAdmin) leicht abweichen. Das Vorgehen wird in den folgenden Abschnitten näher erläutert. 

<Tabs>
  <TabItem value="fivem_txadmin" label="FiveM (txAdmin) server" default>

Die FiveM (txAdmin) Servervariante ermöglicht dir, ein Profil direkt über die Live-Konsole zu erstellen. Führe dazu die Befehle `profiler record 100` und `profiler view` in der Konsole aus. Es wird ein Profil mit 100 Frames erstellt, welches dann über den bereitgestellten Link in der Konsole aufgerufen werden kann. ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)

  </TabItem>

 <TabItem value="fivem_linux" label="FiveM (Linux) server">

Die FiveM (Linux) Servervariante ermöglicht dir, ein Profil direkt über die Live-Konsole zu erstellen. Führe dazu die Befehle `profiler record 100` und `profiler view` in der Konsole aus. Es wird ein Profil mit 100 Frames erstellt, welches dann über den bereitgestellten Link in der Konsole aufgerufen werden kann. 
![img](https://screensaver01.zap-hosting.com/index.php/s/mK8HPBZESz4LKfN/download)

  </TabItem>

<TabItem value="fivem_windows" label="FiveM (Windows) server">

Die FiveM (Windows) Servervariante unterstützt die Live-Konsole nicht, das heißt, von dort können keine Befehle ausgeführt werden. Als Alternative kann daher das RCON-Tool [Icecon](https://github.com/icedream/icecon/releases/tag/v1.0.0) verwendet werden. 

Um eine Verbindung aufzubauen, benötigst du die IP-Adresse, den Port und das definierte RCON-Passwort deines Servers, die du in den entsprechenden Feldern angeben musst. 



![img](https://screensaver01.zap-hosting.com/index.php/s/kogH6z4XeGGwMCf/download)

Sobald die Verbindung über RCON hergestellt ist, kannst du ein Profil erstellen. Führe dazu die Befehle `profiler record 25` und `profiler view` aus. Es wird ein Profil mit 100 Einzelbildern erstellt, das dann über den in der Konsole angegebenen Link aufgerufen werden kann.



  </TabItem>
</Tabs>


## Probleme erkennen
Der Profiler enthält Informationen zu den einzelnen Aktivitäten (Ticks), die genauer überprüft werden müssen. Wähle einen Tick-Bereich aus und zoomen ihn heran. Anhand des Ticks kann man nun sehen, welche Prozesse ausgeführt wurden und wie lange sie gedauert haben. 

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

So kannst du zum Beispiel auch erkennen, welche Ressourcen viel Zeit in Anspruch nehmen. Ressourcen, die insgesamt mehr als 6 ms verbrauchen, können mögliche Probleme verursachen.



## Abschluss

Glückwunsch, du hast erfolgreich ein FiveM-Profil erstellt, mit dem du potenzielle Probleme erkennen kannst. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
