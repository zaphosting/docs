---
id: minecraft-add-own-world
title: "Minecraft: Eigene Welt zum Server hinzufügen"
description: Informationen, wie du eine eigene Welt zu deinem Minecraft-Server von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Eigene Welt hinzufügen
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du möchtest eine eigene oder aus dem Internet heruntergeladene Welt auf deinem Server benutzen? Dann bist du hier genau richtig! Alles, was du dafür benötigst, ist deine Welt und einen FTP-Client. Falls du noch nicht weißt, was ein FTP-Client ist und wie du diesen benutzen kannst, dann schaue am besten in die folgende Anleitung: [Eigene Welt hinzufügen](minecraft-add-own-world.md)

![](https://screensaver01.zap-hosting.com/index.php/s/NN5e5EQbxnnXH87/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7mkFxRLiTk2DmKi/preview" title="How to upload custom MAPS on your Minecraft Server" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

Wenn die Verbindung zum Server per FTP hergestellt wurde, dann kann mit der Einrichtung der eigenen Welt begonnen werden. Dafür muss zunächst das entsprechende Verzeichnis aufgerufen werde, wo sich die aktuelle Welt befindet. Diese befindet sich im folgenden Verzeichnis: /gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/LRyw78YfTExHAFR/preview)

In das Verzeichnis muss nun die neue Welt hochgeladen werden. Hierbei kann entweder der alte **world** Ordner entweder gelöscht und ersetzt werden oder die neue Welt unter einem anderen Namen hochgeladen werden. In dem Beispiel laden wir die Welt unter einem anderen Namen hoch:

![](https://screensaver01.zap-hosting.com/index.php/s/ALswtmYGiRPtA7e/preview)

Jetzt muss die neu hochgeladene Welt nur noch in der **server.properties** Config eingetragen werden. Diese findest du in der **Gameserver Verwaltung** unter **Configs**. Dort muss der Wert vom **level-name=** Befehl angepasst werden:

![](https://screensaver01.zap-hosting.com/index.php/s/SqH24c8YDySWfDi/preview)


Nach erneuten Starten des Servers sollte jetzt die neue Welt verwendet werden. Viel Spaß auf deiner neuen Welt! 🙂

<InlineVoucher />