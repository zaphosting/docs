---
id: voiceserver-query
title: "Voiceserver: Teamspeak Query Login einrichten"
description: Informationen, wie du einen TS Query Login für deinen Teamspeak Server von ZAP-Hosting einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Query Login
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Der Query-Login von TeamSpeak ermöglicht dir den Zugriff auf das Server Query Interface, in dem du deinen TeamSpeak Server von außen per Befehl verwalten kannst.



:::warning Server Admin Query Zugriff
Unsere Teamspeak Server Produkte beinhalten keinen Server Admin Query Zugang.
:::

<InlineVoucher />



## Zugangsdaten



<Tabs>
<TabItem value="Webinterface" label="TeamSpeak Server Produkt" default>

Aus Sicherheitsgründen ist der **Server Admin Query** Login nicht mit dem **TeamSpeak Server Produkt** verfügbar. Wenn du jedoch über Administratorrechte auf deinem Teamspeak-Server verfügst, kannst du mit den folgenden Schritten dein eigenes Query-Login erstellen.

:::info
Funktionen wie Snapshot importieren, Slots/Ports ändern und ähnliches sind nicht verfügbar. Diese Einstellungen sind von uns vordefiniert und können nicht manuell angepasst werden. 
:::

Um ein eigenes Query Login zu erstellen, musst du im Teamspeak Client unter Tools auf „Server Query Login“ klicken.
Anschließend musst du einen Namen für den Login eingeben, dies ist auch der Login-Name z.B. „MyQueryLogin“:

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

Nachdem du dies mit „OK“ bestätigt hast, wird ein Passwort angezeigt. 
Dieses muss gespeichert werden, es kann später nicht mehr geändert werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)



Mit den nun erstellten Zugangsdaten kann eine Verbindung z.B. über [YaTQA](https://yat.qa) hergestellt werden. 
Hierfür werden die Server-IP, der Query-Port, der Server-Port und der Query-Login-Name und das Passwort benötigt. 
Die Server IP, der Query Port und der Server Port können auf dem Dashboard im Webinterface eingesehen werden: 

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>

<TabItem value="self_hosted" label="Self hosted (vRootserver/Dedicated Server)">

Wurde der Teamspeak-Server auf dem eigenen VPS oder Root-Server über das Webinterface installiert, so kann die normale „Server Admin Query“ verwendet werden. 
Die Zugangsdaten findest du im Webinterface deiner Teamspeak-Instanz. 

</TabItem>
</Tabs>

## Query zugreifen

Gebe die bereitgestellten/selbst erstellten Zugangsdaten für dein Query Login unter Quick Connect in der YatQA Anwendung ein und klicke dann auf den Connect Button.

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)



:::warning Benutzerdefinierter Query Port Error
Standardmäßig sollte nach einer Erstinstallation ein Fehler auftreten, wenn du einen anderen Port als den Standard-Abfrageport angibst. Dies ist normal und kann wie folgt gelöst werden:
![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::


## Abschluss
Du hast mit Hilfe von YatQA erfolgreich eine Verbindung zur Query hergestellt. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
