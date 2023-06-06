---
id: fivem-change-servericon
title: Icon für Serverliste ändern
description: Informationen, wie du das Servericon für FiveM-Server von ZAP-Hosting ändern kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Server Icon Ändern
---



Du möchtest deinen Server individualisieren und ein eigenes Icon Bild verpassen? Keine Sorge, das lässt sich leicht umsetzen!  Im Folgenden werden wir dir erläutern, welche Aspekte zu berücksichtigen sind und wie die Einrichtung erfolgt. 

**📺Video:** Du bevorzugst eine Anleitung eher in Form eines Videos oder als zusätzliche visuelle Ergänzung? Kein Problem! Für dieses Thema stellen wir ebenfalls ein Video zur Verfügung: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/nv0Ss5fo_ps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Vorbereitung

Die Nutzung eines eigenen Server-Icons setzt gewisse Voraussetzungen voraus. Zu den Voraussetzungen gehören unter anderem, dass die Bild-Datei eine Größe von 96x96 Pixel hat und das Bildformat in PNG ist. Wenn du dir dein Wunschbild herausgesucht und es in die entsprechende Form gebracht hast, damit es die Voraussetzungen erfüllt, dann kann nun mit der Einrichtung begonnen werden. 



## Installation

Die Einrichtung eines eigenen Icons erfolgt per FTP. Mittels FTP hast du die Möglichkeit, die Bild-Datei auf deinen Server hochzuladen. Solltest du damit noch nicht vertraut sein, dann empfiehlt sich ein Blick in die [FTP-Zugang](gameserver-ftpaccess.md) Anleitung. Navigiere in den Ordner `gXXXX/gta-fivem/server-data/` und lade dort deine Server Icon Datei hoch.

![image](https://user-images.githubusercontent.com/13604413/159137598-e4bd90d5-047e-4b16-8020-b9fc7c68f007.png)

Kopiere dir den Dateinamen deines hochgeladenen Icons und öffne im Anschluss die Server.cfg Config-Datei. Diese kannst du ebenfalls per FTP oder in deinem Gameserver Dashboard unter dem Reiter Configs öffnen. Suche in der Datei nach der Zeile `load_server_icon`. Der Wert des Befehls muss mit dem Namen deiner hochgeladenen Datei übereinstimmen. Wenn du den Namen der ursprünglichen Datei beibehältst, dann kannst du den Schritt mit der Umbenennung überspringen. 

![image](https://user-images.githubusercontent.com/13604413/159137604-c8383001-abef-4cc9-ae10-e270c7aa33b3.png)



Zu guter Letzt ist noch ein Neustart des Servers notwendig, damit die Änderung übernommen und angezeigt wird. Das Ergebnis kannst du dann in der Server-Liste oder per Direktverbindung sehen. 
