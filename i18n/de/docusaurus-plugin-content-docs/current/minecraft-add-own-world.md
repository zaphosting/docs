---
id: minecraft-add-own-world
title: "Minecraft: Eigene Welt zum Server hinzufügen"
description: Informationen, wie du eine eigene Welt zu deinem Minecraft-Server von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Eigene Welt hinzufügen
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Einführung
Du möchtest eine eigene oder aus dem Internet heruntergeladene Welt auf deinem Server benutzen? Dann bist du hier genau richtig! Alles, was du dafür benötigst, ist deine Welt und einen FTP-Client. Falls du noch nicht weißt, was ein FTP-Client ist und wie du diesen benutzen kannst, dann schaue am besten in die folgende Anleitung: [FTP-Dateizugriff](minecraft-add-own-world.md)

![image](https://user-images.githubusercontent.com/13604413/159177625-7973671f-19a8-4867-ad10-e41bf04a4ab3.png)

<YouTube videoId="5tII3C9yO3g" title="How to upload custom MAPS on your Minecraft Server" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst?  Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>



Wenn die Verbindung zum Server per FTP hergestellt wurde, dann kann mit der Einrichtung der eigenen Welt begonnen werden. Dafür muss zunächst das entsprechende Verzeichnis aufgerufen werde, wo sich die aktuelle Welt befindet. Diese befindet sich im folgenden Verzeichnis: /gXXXXX/modpack/


![image](https://user-images.githubusercontent.com/13604413/159177628-ac6d55dc-e4ed-4746-93bd-5c416289d35a.png)

In das Verzeichnis muss nun die neue Welt hochgeladen werden. Hierbei kann entweder der alte **world** Ordner entweder gelöscht und ersetzt werden oder die neue Welt unter einem anderen Namen hochgeladen werden. In dem Beispiel laden wir die Welt unter einem anderen Namen hoch:

![image](https://user-images.githubusercontent.com/13604413/159177630-97982a29-6ec7-4014-bd10-81c2e2585630.png)

Jetzt muss die neu hochgeladene Welt nur noch in der **server.properties** Config eingetragen werden. Diese findest du in der **Gameserver Verwaltung** unter **Configs**. Dort muss der Wert vom **level-name=** Befehl angepasst werden:

![image](https://user-images.githubusercontent.com/13604413/159177632-6d0d181d-ce56-4257-886b-e1e75367abcd.png)


Nach erneuten Starten des Servers sollte jetzt die neue Welt verwendet werden. Viel Spaß auf deiner neuen Welt! 🙂

