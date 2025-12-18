---
id: scp-newroles
title: "SCP Secret Laboratory: Neue Rollen auf dem Server hinzufügen"
description: "Lerne, wie du Server-Rollen mit spezifischen Berechtigungen erstellst und anpasst, um das Remote-Admin-Management effektiv zu gestalten → Jetzt mehr erfahren"
sidebar_label: Neue Rollen hinzufügen
services:
  - gameserver-scp 
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Config ansehen
Neue Rollen werden in der Datei „config_remoteadmin.txt“ eingetragen.
Du findest diese Config-Datei, indem du im Interface deines Servers auf „Configs“ klickst.

![](https://screensaver01.zap-hosting.com/index.php/s/7JEE5gLDyF29mZR/preview)

Hier kannst du dann nach der oben genannten Config suchen und rechts auf das „Auge“ klicken, um sie zu öffnen.

## Bestehende Rollen kopieren
Wenn du die Config geöffnet hast, kannst du nach diesen Einträgen suchen:

![](https://screensaver01.zap-hosting.com/index.php/s/tDBFmR5g44gxpp5/preview)

Das sind Beispielrollen, die schon eingetragen sind.
Wir fügen jetzt einen neuen Eintrag darunter ein.
Dafür kopieren wir den Block von einer der Rollen oben und fügen diesen Teil unter der letzten Rolle ein.
In unserem Beispiel haben wir die Rolle „Moderator“ kopiert und darunter eingefügt:

![](https://screensaver01.zap-hosting.com/index.php/s/ELHDZCDcT6WDydJ/preview)

## Eigene Rolle hinzufügen
Jetzt können wir den gerade eingefügten Block der bestehenden Rolle bearbeiten und unsere eigenen Werte eintragen.
In unserem Beispiel haben wir den Namen „ZAP“ verwendet:

![](https://screensaver01.zap-hosting.com/index.php/s/6gtEmbeBjP5A8zy/preview)

Sobald das erledigt ist, müssen wir die Rolle noch in die Liste der verfügbaren Rollen eintragen.
Das geht etwas weiter unten in der gleichen Config.

![](https://screensaver01.zap-hosting.com/index.php/s/qNNKnwYaYSjy2XK/preview)

Wir tragen unsere Rolle also unter der Rolle „moderator“ ein.
:::info
ACHTUNG: Achte bitte auf die Leerzeichen vor und nach dem „-“!
:::

## Berechtigungen
Ganz unten in der Datei „config_remoteadmin.txt“ können wir die Berechtigungen für die jeweiligen Rollen anpassen.
Wenn wir also einer Rolle eine Berechtigung zuweisen wollen, tragen wir den Rollennamen in die Klammern ein.
So wie in diesem Beispiel gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/kRSiKjYyWsK2RD3/preview)


<InlineVoucher />