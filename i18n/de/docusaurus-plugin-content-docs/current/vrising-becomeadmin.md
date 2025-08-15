---
id: vrising-becomeadmin
title: "V Rising: Admin werden"
description: Informationen, wie du Admin auf deinem V Rising Server bei ZAP-Hosting wirst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

### Berechtigungen hinzufügen

Die Verwaltung der Admin Berechtigungen erfolgt über die **adminlist.txt**. Diese lässt sich im Webinterface unter Configs verwalten. Für das Hinzufügen eines Admins wird die SteamID64 vom Spieler benötigt. Diese erhältst du, in dem du dein Steam Profil aufrufst und dort dann an einer beliebigen Stelle einen Rechtsklick machst. Dort hast du dann die Möglichkeit, die Seiten URL zu kopieren. Im Anschluss kann die URL auf einer der folgenden Webseiten angeben werden: https://steamid.io/ https://steamrep.com/ https://steamidfinder.com/ 

![](https://screensaver01.zap-hosting.com/index.php/s/W27gwqdcg7EFiAB/preview)

Dort angelangt gibst du beim Feld deine Steam Profil URL an, welche du kopiert hast und erhältst dadurch dann deine SteamID64. Diese wird dann in der **adminlist.txt** Konfigurationsdatei eingetragen. Gehe dazu im Webinterface in deine Gameserver Verwaltung in die Kategorie Configs und rufe die adminlist.txt Konfigurationsdatei auf. 

![](https://screensaver01.zap-hosting.com/index.php/s/ZrDAnfR8aYmaxiM/preview)

:::info
Solltest du mehreren Spielern Admin Berechtigungen zuweisen wollen, dann müssen die SteamIDs jeweils in einer eigenen Zeile eingetragen werden. 
:::



### Berechtigungen aktivieren

Für die Zuweisung der Admin Berechtigungen im Spiel musst du nun noch die Konsole bei deinem Spiel aktivieren. Verbinde dich dafür mit deinem Server und gehe im Anschluss in die Einstellungen. In den Einstellungen muss dann die Option **Console Enabled** aktiviert werden. Die Konsole lässt sich standardmäßig mit der Gravis Taste auf der Tastatur öffnen. In der Konsole können die Admin-Berechtigungen dann mit dem `adminauth` Befehl aktiviert werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/H94YsC7drocDFxq/preview)


### Admin Befehlsliste

Hier findest du eine kurze Übersicht über die gängigsten Admin-Befehle, welche du auf deinem Server ausführen kannst. 

|                          |                                                              |
| ------------------------ | ------------------------------------------------------------ |
| adminauth                | Zuweisung von Administrationsberechtigungen                  |
| admindeauth              | Aufhebung von Administrationsberechtigungen                  |
| banuser [name/IP/userID] | Einen bestimmten Spieler anhand des Namens, der IP oder der Benutzer-ID sperren |
| banned                   | Zeigt eine Liste aller gesperrten Spieler an                 |
| bancharacter             | Wird verwendet, um ein bestimmtes Character zu verbieten     |
| give [name]              | Liefert dir einen bestimmten Gegenstand im Spiel.            |
| giveset                  | Ermöglicht die Erkundung verschiedener Rüstungs- und Waffensets |
| kick [name/IP/userID]    | Einen bestimmten Spieler anhand des Namens, der IP oder der Benutzer-ID kicken |
| unban [name/IP/userID]   | Einen bestimmten Spieler anhand des Namens, der IP oder der Benutzer-ID entsperren |

## Abschluss

Glückwunsch, du hast erfolgreich die Administratorberechtigungen konfiguriert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
