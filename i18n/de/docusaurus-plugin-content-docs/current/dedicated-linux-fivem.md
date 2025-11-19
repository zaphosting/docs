---
id: dedicated-linux-fivem
title: "Dedicated Server: FiveM Dedicated Server Linux Setup (GS/TS3 Interface)"
description: "Entdecke, wie du deinen eigenen FiveM Dedicated Server mit txAdmin für nahtloses Multiplayer-Gaming einrichtest und betreibst → Jetzt mehr erfahren"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Einführung
Du besitzt einen Dedicated Server und möchtest deinen eigenen FiveM Dedicated Server mit txAdmin installieren und betreiben? Dann bist du hier genau richtig! Im Folgenden erklären wir dir alle notwendigen Schritte zur Installation und Konfiguration und worauf du achten musst.

:::warning  Betriebssystem ausgewählt und installiert
Es wird vorausgesetzt, dass du bereits ein Betriebssystem für deinen Dedicated Server ausgewählt und installiert hast. Falls du diesen Schritt noch nicht abgeschlossen hast, solltest du zuerst die Schritte in der [Ersteinrichtung](dedicated-setup.md) Anleitung für Dedicated Server befolgen.
:::



## Vorbereitung

Um einen FiveM Server einzurichten, sind bestimmte Vorbereitungsschritte notwendig, die vor der eigentlichen Einrichtung des FiveM Dedicated Servers umgesetzt werden müssen.


### Datenbank einrichten

Für unsere GS/TS3 Interface Option stellen wir bereits eigene Datenbanken inklusive bereit. Falls du jedoch lieber deinen eigenen Datenbankserver und deine eigene Datenbank einrichten möchtest, empfehlen wir dir einen Blick in die [Datenbank installieren](dedicated-linux-databases.md) Anleitung.

:::warning
Wenn du deine eigene Datenbank nutzt, musst du während der txAdmin Einrichtung die voreingestellten Datenbankinformationen durch deine eigenen ersetzen.
:::



### GS/TS3 Interface installieren
Mit dem benutzerfreundlichen GS/TS3 Interface kannst du deinen FiveM Dedicated Server mit nur wenigen Klicks installieren. Für diese Installation sind keine Vorkenntnisse nötig. Die Einrichtung aller benötigten Pakete, Serverdateien und die eigentliche Installation laufen vollautomatisch ab, was dir Zeit und Aufwand spart.

:::warning
Das GS/TS3 Interface Feature kann mit folgenden Betriebssystemen genutzt werden:

- Debian: 10, 11
- Ubuntu: 20.04

(*) Wir arbeiten bereits daran, weitere und neuere Betriebssysteme und Versionen in naher Zukunft verfügbar zu machen.
:::

Falls du mit dem GS/TS3 Interface noch nicht vertraut bist, empfehlen wir dir einen Blick in unsere [GS/TS3 Interface](dedicated-linux-gs-interface.md) Anleitung.

Vorausgesetzt, du hast das GS/TS3 Interface installiert, öffne den neu erstellten Gameserver-Service. Dort muss nun das Spiel ausgewählt werden. Navigiere dazu auf die **Games** Seite. Klicke auf verfügbare Spiele, suche nach txAdmin und klicke auf den Installationsbutton.

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### FiveM Server Lizenzschlüssel erstellen

Jeder FiveM Server benötigt einen eigenen Lizenzschlüssel, der über das neue [Cfx.re Portal](http://portal.cfx.re/) verwaltet wird. Der Lizenzschlüssel ist an deinen Cfx.re Account gebunden. Melde dich auf der Webseite an, navigiere zur Kategorie **Server** und klicke auf den Button **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Konfiguration

Jetzt kannst du mit der Konfiguration des FiveM Servers und txAdmin starten. Öffne dazu das Dashboard deines Gameservers. Den Link und die Login-Daten für die txAdmin Instanz findest du im txAdmin Bereich. Öffne diesen und logge dich dort ein.

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### txAdmin Einrichtung

Während der txAdmin Einrichtung wird dein eigener FiveM Server in fünf Schritten installiert und konfiguriert. Folge den Anweisungen in der txAdmin Oberfläche und definiere zuerst einen **Servernamen**. Wähle dann den gewünschten **Servertyp** aus. Dieses Beispiel zeigt die Installation eines FiveM Servers mit vorinstalliertem QBCore.

Wähle im Schritt **Deployment Type** die Option **Popular Recipes** und dann die **QBCore Framework Template**. Bestätige das gewünschte **Data Directory** und starte den **Recipe Deployer**, um die Installation abzuschließen.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Firewall-Konfiguration

Bei der Installation des FiveM Servers über das GS/TS3 Interface wird die gesamte notwendige Portweiterleitung **automatisch** in der Firewall eingerichtet. Sollten Probleme auftreten, kannst du die Portweiterleitung auch manuell via SSH mit folgendem Befehl einrichten:

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Fazit

Du hast erfolgreich einen FiveM Dedicated Server Service auf deinem Dedicated Server installiert und konfiguriert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂



