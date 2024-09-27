---
id: fivem-whitelist
title: "FiveM: Whitelist"
description: Informationen zur Nutzung einer Whitelist bei FiveM Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Whitelist
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du möchtest deinen Server nicht jedem zugänglich machen? Es gibt mehrere Möglichkeiten, die Sichtbarkeit und Zugänglichkeit von einem Server einzuschränken. Eine dieser Möglichkeiten ist beispielsweise die Nutzung einer Whitelist, welche im Folgenden erläutert wird.

<YouTube videoId="CrLK7o-rX2g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/aiQgtsQfNK2pWeP/preview" title="How to enable WHITELIST on your FiveM Server" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

Die Whitelist ist eine Liste, welches ermöglicht eine bestimmte Auswahl an Personen zuzulassen. Das bedeutet, dass sich nur die Personen verbinden, können, die in der Whitelist eingetragen wurden. Personen, die nicht auf der Liste stehen, werden nicht zugelassen und erhalten beim Verbindungsaufbau die Meldung, dass sie nicht auf der Whitelist stehen. 

![](https://screensaver01.zap-hosting.com/index.php/s/DN6cyD6JSjQwtNe/preview)

<InlineVoucher />

## Installation

Über unseren Ressource Installer, welchen du in deinem Gameserver Dashboard unter den **Einstellungen** bei **Ressourcen** findest, kannst du unsere angebotene Whitelist Ressource per Klick installieren. Klicke dazu bei der Ressource **Whitelist** auf den grünen Button, um die Ressource zu installieren. 

![](https://screensaver01.zap-hosting.com/index.php/s/gngFjmsep66p84d/preview)

Klicke im Anschluss, sobald die Installation abgeschlossen ist, auf den blauen Konfigurationsbutton, um die Whitelist zu konfigurieren. Dort angelangt hast du nun die Möglichkeit, die gewünschten Personen zur Whitelist hinzuzufügen. 


## Konfiguration

Unter den Whitelist Einstellungen müssen jetzt die Steam64 IDs von den Personen eingetragen werden. Für jede Zeile wird ein Eintrag hinzugefügt. Solltest du nicht wissen, wie deine ID lautet, dann hast du die Möglichkeit, beispielsweise über die Seite [steamid.io](https://steamid.io/lookup), diese herauszufinden. Kopiere dafür die URL von deinem Steam Profil und füge sie in das Suchfeld ein. Im Anschluss erhältst du die Steam64 ID, welche du in das Feld eintragen kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/t35e7RLTmgoYaP5/preview)

Beim erneuten Starten des Servers wird nun die Liste berücksichtigt und es können sich nur noch Spieler verbinden, die hinterlegt sind. 
