---
id: dedicated-linux-fivem
title: "Dedicated Server: FiveM Dedicated Server Linux Einrichtung (GS/TS3 Interface)"
description: Informationen zum Einrichten eines FiveM Dedicated Servers auf einem Linux Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Einführung
Besitzt du einen Dedicated Server und möchtest dort deinen eigenen FiveM Dedicated Server Dienst mit txAdmin installieren? Dann bist du hier genau richtig! Im Folgenden werden dir alle notwendigen Schritte erläutert, wie du diesen genau installierst, konfigurierst und was es dabei zu beachten gibt. 

:::warning Betriebssystem ausgewählt und installiert
Es wird vorausgesetzt, dass du für deinen Dedicated Server bereits ein Betriebssystem ausgewählt und installiert hast. Solltest du diesen Schritt noch nicht erfüllt haben, so müsstest du zunächst die Schritte aus der [Ersteinrichtung](dedicated-setup.md) Anleitung für Dedicated Server befolgen.
:::



## Vorbereitung

Zum Aufsetzen eines FiveM Servers sind ein paar Vorbereitungsschritte notwendig, die umgesetzt werden müssen, bevor mit der eigentlichen Einrichtung des FiveM Dedicated Server begonnen werden kann.



### Datenbank einrichten

Zu unserer GS/TS3 Interface Option stellen wir bereits eigene Datenbanken inklusive zur Verfügung. Solltest du dennoch bevorzugen deinen eigenen Datenbankserver und Datenbank aufsetzen zu wollen, so empfehlen wir einen Blick in die [Datenbank installieren](dedicated-linux-databases.md) Anleitung zu werfen. 

:::warning
Wenn du eine eigene Datenbank verwendest, dann musst du während des txAdmin Setups die vordefinierten Datenbankinformationen mit deinen eigenen ersetzen. 
:::



### GS/TS3 Interface installieren
With the user-friendly GS/TS3 interface you can install your FiveM Dedicated Server with just a few clicks. No prior knowledge is required for this installation. The setup of all required packages, server files, and the actual installation are fully automated, saving you time and effort.

:::warning
Das GS/TS3- Interface Feature kann mit den folgenden Betriebssystemen verwendet werden:

- Debian: 10, 11
- Ubuntu: 20.04

(*) Wir arbeiten bereits daran, andere und neuere Betriebssysteme und (Versionen) in naher Zukunft bereitzustellen.
:::

Solltest du mit dem GS/TS3 Interface noch nicht vertraut sein, dann empfehlen wir einen Blick in unsere [GS/TS3 Interface](dedicated-linux-gs-interface.md) Anleitung zu werfen. 

Vorausgesetzt du hast das GS/TS3 Interface angelegt, rufe nun den neu angelegten Gameserver Dienst auf. Dort angelangt, muss nun noch das Spiel ausgewählt. Navigiere dafür zu der Seite **Spiele**. Klicke auf, verfügbare Spiele, suche dort nach txAdmin und klicke auf den installieren Button. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jjtHEbpY8NDeTxK/download)




### FiveM Server Lizensschlüssel erstellen

Jeder FiveM Server benötigt seinen eigenen Lizenzschlüssel, welcher über das neue [Cfx.re Portal](http://portal.cfx.re/) verwaltet wird. Der Lizenzschlüssel wird mit deinem Cfx.re Account verknüpft. Logge dich auf der Seite ein, navigiere zu der **Server** Kategorie und klicke dort auf den **Generate Key** Button.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Konfiguration

Nun kann mit der Konfiguration des FiveM Server und txAdmin begonnen werden. Öffne dazu das Dashboard deines Gameservers. In dem Abschnitt txAdmin findest du den Link und die Zugangsdaten zu der txAdmin Instanz. Öffne diese und logge dich dort im Anschluss ein. 

![img](https://screensaver01.zap-hosting.com/index.php/s/dgtKoasr73Hn6e6/preview)



### txAdmin Einrichtung

Während des txAdmin-Setups wird dein eigener FiveM Server in fünf Schritten installiert und konfiguriert. Folge den Anweisungen im txAdmin Interface und lege zunächst einen **Servernamen** fest. Danach wählst du die gewünschte **Serverart** aus. In diesem Beispiel wird die Installation eines FiveM Servers mit vorinstalliertem QBCore gezeigt.

Wähle im Schritt **Deployment Type** die Option **Popular Recipes** und anschließend das **QBCore Framework Template**. Bestätige das gewünschte **Datenverzeichnis** und starte den **Recipe Deployer**, um die Installation abzuschließen.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Firewall Konfiguration

Bei der Installation des FiveM Servers über das GS/TS3 Interface werden alle notwendigen Port Weiterleitungen in der Firewall **automatisch** eingerichtet. Sollte es dennoch zu Problemen kommen, so kannst du die Portweiterleitung auch manuell per SSH mit folgendem Befehl einrichten: 

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Abschluss

Du hast auf deinem Dedicated Server nun erfolgreich einen FiveM Dedicated Server Dienst installiert und konfiguriert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

