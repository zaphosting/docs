---
id: assettocorsa_contentmanager
title: Server Konfigurieren mit Content Manager
sidebar_label: Server Konfigurieren mit Content Manager
---

> **Wichtig** 
> Um den Server mit dem Content Manager verwalten zu können, ist die Full-Version nötig, die Lite-Version kann server *nicht* verwalten.

## Vorbereitung

Zunächst öffnen wir unseren Content Manager, und klicken rechts oben auf das Sandwich Menü, dort wählen wir "Server":

![image](https://user-images.githubusercontent.com/13604413/159136989-b4cfb732-072d-472d-bb8b-8abe97508107.png)

Hier erstellen wir nun ein neues Preset und wählen dieses aus:

![image](https://user-images.githubusercontent.com/13604413/159136995-7994802f-4902-47c2-bdde-97187e7ccbf0.png)


## Server Slots Einstellen

Wir müssen zuerst einstellen, wie viel Kapazität unser Server hat, in unserem Fall ist unser Server nur 10 Slots, daher wählen wir bei Capacity '10' aus:

![image](https://user-images.githubusercontent.com/13604413/159137001-22301dbb-838a-46dc-a24c-ebdf903b1768.png)

## Map Einstellen

Hier wird standardmäßig Imola als Map ausgewählt, indem wir auf die Map klicken, können wir unsere eigene Map auswählen:

![image](https://user-images.githubusercontent.com/13604413/159137008-d2e5e0ef-d3df-402e-9611-66b93b4916fb.png)



## Autos Einstellen

Nun wechseln wir in das Tab "Entry List", hier können wir nun neue Autos hinzufügen:

![image](https://user-images.githubusercontent.com/13604413/159137029-f4dcf8ef-c3f6-4428-bb1e-27315637c36a.png)


![image](https://user-images.githubusercontent.com/13604413/159137034-22cb04a5-17a4-4c39-9697-c65fdac44561.png)



> Beachte das alle Autoslots befüllt werden und nicht mehr, als die Menge der verfügbaren Slots gesetzt wird
> ![image](https://user-images.githubusercontent.com/13604413/159137039-17947b65-947a-4276-b681-0a7f27b49e3e.png)

## FTP Upload Konfigurieren

Über das "Advanced" Menü können wir einen FTP-Uploader Konfigurieren, damit du deine Serverconfig mit einem Click hochladen kannst.

![image](https://user-images.githubusercontent.com/13604413/159137074-ab04ba8b-29af-499f-a938-f611c6046cce.png)


Hier gibst du nun deine FTP-Daten ein:

![image](https://user-images.githubusercontent.com/13604413/159137117-597633df-d277-4ae6-b5bc-e155b4fbdf30.png)


> **Achtung!** Im "Folder" muss die ID deines Gameservers angegeben werden, wie du sie in der URL deines Gameservers siehst, z.b. 
> https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/

In unserem Fall wäre das Ganze dann:

```
/g427814/assetto-corsa/
```

Für AssettoServer: 

```
/g427814/assettoserver/
```

Danach kann auf "Upload Content" geklickt werden, die Config, Strecke und Autos, welche konfiguriert wurden, werden automatisch hochgeladen, danach brauchst du nur noch deinen Server starten!
