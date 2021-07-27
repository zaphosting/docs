---
id: assettocorsa_contentmanager
title: Server Konfigurieren mit Content Manager
sidebar_label: Server Konfigurieren mit Content Manager
---

> **Wichtig** 
> Um den Server mit dem Content Manager verwalten zu können, ist die Full-Version nötig, die Lite-Version kann server *nicht* verwalten.

## Vorbereitung

Zunächst öffnen wir unseren Content Manager, und klicken rechts oben auf das Sandwich Menü, dort wählen wir "Server":

![](https://screensaver01.zap-hosting.com/index.php/s/BDGw7TkYT286qgF/preview)

Hier erstellen wir nun ein neues Preset und wählen dieses aus:

![](https://screensaver01.zap-hosting.com/index.php/s/dG7AsDiRKDzDCkn/preview)

## Server Slots Einstellen

Wir müssen zuerst einstellen, wie viel Kapazität unser Server hat, in unserem Fall ist unser Server nur 10 Slots, daher wählen wir bei Capacity '10' aus:

![](https://screensaver01.zap-hosting.com/index.php/s/H44SCCYFgRPeasG/preview)

## Map Einstellen

Hier wird standardmäßig Imola als Map ausgewählt, indem wir auf die Map klicken, können wir unsere eigene Map auswählen:

![](https://screensaver01.zap-hosting.com/index.php/s/RcjefNi3Xi4emZR/preview)


## Autos Einstellen

Nun wechseln wir in das Tab "Entry List", hier können wir nun neue Autos hinzufügen:

![](https://screensaver01.zap-hosting.com/index.php/s/HnHL2s6yTXb2aCn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/R5KpGwAEAm8La2J/preview)


> Beachte das alle Autoslots befüllt werden und nicht mehr, als die Menge der verfügbaren Slots gesetzt wird
> ![](https://screensaver01.zap-hosting.com/index.php/s/RcJpb7MSd65zLf7/preview)

## FTP Upload Konfigurieren

Über das "Advanced" Menü können wir einen FTP-Uploader Konfigurieren, damit du deine Serverconfig mit einem Click hochladen kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/iXxYFoZ46TKnAeg/preview)

Hier gibst du nun deine FTP-Daten ein:

![](https://screensaver01.zap-hosting.com/index.php/s/oqXLoZBQJdSjxCL/preview)


> **Achtung!** Im "Folder" muss die ID deines Gameservers angegeben werden, wie du sie in der URL deines Gameservers siehst, z.b. 
> https://zap-hosting.com/en/customer/gameserver/show/**300395**/ftpBrowser/

In unserem Fall wäre das Ganze dann:

```
/g300395/assetto-corsa/
```

Danach kann auf "Upload Content" geklickt werden, die Config, Strecke und Autos, welche konfiguriert wurden, werden automatisch hochgeladen, danach brauchst du nur noch deinen Server starten!