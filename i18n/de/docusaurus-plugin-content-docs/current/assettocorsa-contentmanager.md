---
id: assettocorsa-contentmanager
title: Server konfigurieren mit Content Manager
description: Information, wie du deinen Assetto Corsa Server von ZAP-Hosting mittels des Content-Managers konfigurieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Server konfigurieren mit Content Manager
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
**Wichtig** 

Um den Server mit dem Content Manager verwalten zu können, ist die Full-Version nötig, die Lite-Version kann server *nicht* verwalten.
:::

<InlineVoucher />

## Vorbereitung

Zunächst öffnen wir unseren Content Manager, und klicken rechts oben auf das Sandwich Menü, dort wählen wir "Server":

![](https://screensaver01.zap-hosting.com/index.php/s/Np78jeeJeSBs3Mi/preview)

Hier erstellen wir nun ein neues Preset und wählen dieses aus:

![](https://screensaver01.zap-hosting.com/index.php/s/2HyyRjQDt78Dtf4/preview)


## Server Slots Einstellen

Wir müssen zuerst einstellen, wie viel Kapazität unser Server hat, in unserem Fall ist unser Server nur 10 Slots, daher wählen wir bei Capacity '10' aus:

![](https://screensaver01.zap-hosting.com/index.php/s/ENnjE8ZFiMTbqCD/preview)

## Map Einstellen

Hier wird standardmäßig Imola als Map ausgewählt, indem wir auf die Map klicken, können wir unsere eigene Map auswählen:

![](https://screensaver01.zap-hosting.com/index.php/s/DTon4gDnCN9r48b/preview)



## Autos Einstellen

Nun wechseln wir in das Tab "Entry List", hier können wir nun neue Autos hinzufügen:

![](https://screensaver01.zap-hosting.com/index.php/s/xLrDPWgZYWfa5B6/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/tcD4aPc4qMQTwca/preview)



:::info
Beachte, dass alle Autoslots befüllt werden und nicht mehr, als die Menge der verfügbaren Slots gesetzt wird

![](https://screensaver01.zap-hosting.com/index.php/s/QHfXaPGNTp9xLGf/preview)
:::

## FTP Upload Konfigurieren

Über das "Advanced" Menü können wir einen FTP-Uploader konfigurieren, damit du deine Serverconfig mit einem Click hochladen kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/rAcPfq3ZNkietz3/preview)


Hier gibst du nun deine FTP-Daten ein:

![](https://screensaver01.zap-hosting.com/index.php/s/GX945J67eWZMGRg/preview)


:::info
**Achtung!** Im "Folder" muss die ID deines Gameservers angegeben werden, wie du sie in der URL deines Gameservers siehst, z.b. 

https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/
:::

In unserem Fall wäre das Ganze dann:

```
/g427814/assetto-corsa/
```

Für AssettoServer: 

```
/g427814/assettoserver/
```

Danach kann auf "Upload Content" geklickt werden, die Config, Strecke und Autos, welche konfiguriert wurden, werden automatisch hochgeladen, danach brauchst du nur noch deinen Server zu starten!

<InlineVoucher />
