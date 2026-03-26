---
id: voiceserver-query
title: "Voiceserver: TeamSpeak Query Zugriff"
description: "Entdecke, wie du deinen TeamSpeak Server extern über Query Login effizient verwaltest und administrierst → Jetzt mehr erfahren"
sidebar_label: Query Login
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der Query Login von TeamSpeak ermöglicht dir den Zugriff auf die Server Query Schnittstelle, über die du deinen TeamSpeak Server extern per Befehle verwalten kannst.

:::warning Server Admin Query Zugriff
Unsere TeamSpeak Server Produkte beinhalten keinen Server Admin Query Zugriff. 
:::

<InlineVoucher />

## Login-Daten

<Tabs>
<TabItem value="Webinterface" label="TeamSpeak Server Produkt" default>

Aus Sicherheitsgründen ist der **Server Admin Query** Login beim **TeamSpeak Server Produkt** nicht verfügbar. Wenn du jedoch Admin-Rechte auf deinem TeamSpeak Server hast, kannst du dir einen eigenen Query Login erstellen, indem du folgende Schritte befolgst.

:::info
Funktionen wie Import von Snapshots, Änderung von Slots/Ports und Ähnliches sind nicht verfügbar. Diese Einstellungen sind von uns vorgegeben und können nicht manuell angepasst werden. 
:::

Um deinen eigenen Query Login zu erstellen, klickst du im TeamSpeak Client unter Werkzeuge auf „Server Query Login“.
Anschließend musst du einen Namen für den Login eingeben, dieser ist auch der Login-Name, z.B. „MyQueryLogin“:

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

Nach Bestätigung mit „OK“ wird ein Passwort angezeigt. Dieses muss gespeichert werden, da es später nicht mehr geändert werden kann.

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)

Mit den nun erstellten Login-Daten kann eine Verbindung z.B. über [YaTQA](https://yat.qa) hergestellt werden. Dafür werden die Server-IP, der Query-Port, der Server-Port sowie der Query Login Name und das Passwort benötigt.

Die Server-IP, der Query-Port und der Server-Port sind im Dashboard im Webinterface einsehbar:

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>
<TabItem value="self_hosted" label="Self hosted (VPS/Dedicated Server)">

Wenn der TeamSpeak Server auf deinem eigenen VPS oder Dedicated Server über das Webinterface installiert wurde, kann der normale „Server Admin Query“ genutzt werden. Die Login-Daten findest du im Webinterface der TeamSpeak-Instanz.

</TabItem>
</Tabs>

## Query Zugriff

Trage die bereitgestellten bzw. selbst erstellten Login-Daten für deinen Query Login unter Quick Connect in der **YatQA** Anwendung ein und klicke anschließend auf den **Connect-Button**.

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)

:::warning Fehler bei individuellem Query-Port
Standardmäßig sollte nach einer frischen Installation ein Fehler auftreten, wenn du einen anderen Port als den Standard Query-Port angibst. Das ist normal und lässt sich wie folgt beheben:

![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::

## Abschluss

Du hast erfolgreich eine Verbindung zur Query über YatQA hergestellt. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />