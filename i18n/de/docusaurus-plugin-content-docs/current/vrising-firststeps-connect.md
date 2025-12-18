---
id: vrising-firststeps-connect
title: "V Rising: Mit deinem V Rising Server verbinden"
description: "Entdecke, wie du dich direkt oder über die Serverliste mit deinem V Rising Server verbindest für ein nahtloses Gameplay → Jetzt mehr erfahren"
sidebar_label: Mit Server verbinden
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung zeigen wir dir, wie du dich mit deinem V Rising Server verbindest. Es gibt zwei Verbindungswege: Entweder direkt über die IP-Adresse deines Servers oder über die Serverliste. Wir empfehlen, deinen Server vorher nach deinen Wünschen zu konfigurieren. Mehr dazu findest du in unserer [Server Konfiguration](vrising-configuration.md) Anleitung.

<InlineVoucher />

## Direkte Verbindung über IP

### Server-IP herausfinden

Zuerst brauchst du die IP und den Port deines V Rising Servers, um dich direkt verbinden zu können. Geh einfach auf dein [ZAP-Hosting Webinterface](https://zap-hosting.com/en/customer/) und halte die vollständige IP und den Port bereit.

![](https://screensaver01.zap-hosting.com/index.php/s/4L86LFeqL8o96kn/preview)

Falls du deinen V Rising Server auf einem externen Dedicated Server betreibst, ist die IP die des Host-Systems und der Port der, den du in deiner Konfigurationsdatei eingestellt hast (standardmäßig 9876). Mehr Infos zum Port findest du in unserer [Server Konfiguration](vrising-configuration.md) Anleitung.

### Verbindung im Spiel herstellen

Starte V Rising über deinen Game Launcher. Im Hauptmenü wählst du **Play** und dann die Option **Online Play**.

![](https://screensaver01.zap-hosting.com/index.php/s/cJcnRAX2Wj7sogx/preview)

Wähle den Spielmodus, den du spielen möchtest, oder drücke alternativ unten rechts auf **Show all Servers**, um direkt zum Serverbrowser zu gelangen.

Drücke jetzt unten auf den Button **Direct Connect** und gib deine IP gefolgt vom Port ein, z.B.: `123.456.679.123:9876`. Falls ein Passwort gesetzt ist, wirst du nach dem Verbinden dazu aufgefordert, es einzugeben.

![](https://screensaver01.zap-hosting.com/index.php/s/tfroQDEgmr3p2D8/preview)

Falls du nicht erfolgreich verbinden kannst und eine Timeout-Fehlermeldung bekommst, überprüfe bitte, ob die eingegebene IP und der Port korrekt sind und dein Server online ist. Zur Fehlersuche kannst du die Konsole im Webinterface deines V Rising Servers nutzen.

## Verbindung über die Serverliste

Die einfachere Variante, um dich mit deinem Server zu verbinden, ist über die Serverliste. Dafür muss dein Server allerdings in den Serverkonfigurationen auf öffentlich gestellt sein.

Schau dir dazu unsere [Server Konfiguration](vrising-configuration.md) Anleitung an, um die passenden Parameter `Name` und `ListOnMasterServer` in deine Konfigurationsdatei oder im Webinterface einzutragen.

Ist das erledigt, wählst du im Hauptmenü **Play**, dann **Online Play** und klickst wieder unten rechts auf **Show all Servers**. Im Serverbrowser kannst du jetzt deinen Server mit den Filtern wie Name, Spielmodus, Schwierigkeit und mehr finden.

![](https://screensaver01.zap-hosting.com/index.php/s/CGoZBkRsGTwkTQg/preview)

<InlineVoucher />