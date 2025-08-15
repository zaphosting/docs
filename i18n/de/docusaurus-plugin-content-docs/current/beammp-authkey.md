---
id: beammp-authkey
title: "BeamMP: Auth Key Erstellen"
description: Information, wie du einen Auth Key für deinen BeamMP Server von ZAP-Hosting erstellen kannst  - ZAP-Hosting.com Dokumentation
sidebar_label: Auth Key Erstellen
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wieso brauche ich einen Key?

Ein Auth Key wird benötigt, wenn der Server in der Serverliste angezeigt werden soll, ansonsten ist dieser nur über die Direktverbindung verfügbar.

<InlineVoucher />

## Vorbereitung
Um einen eigenen Authkey zu erstellen, melden wir uns zunächst auf https://beammp.com/keymaster an, hierzu wird ein Discord Account benötigt.

Nachdem wir angemeldet sind, klicken wir links auf "Keys", damit kommen wir in die Licensekey Übersicht:

![](https://screensaver01.zap-hosting.com/index.php/s/dxHwK89xk9dQiKD/preview)

Hier klicken wir nun auf das blaue "here", um den Key zu erstellen:

![](https://screensaver01.zap-hosting.com/index.php/s/QSgb4wBKGMtFMJ5/preview)


## Daten Angeben

Nun können wir die Daten wie folgt befüllen:

- **Server Name:** Ein Name für deinen Server, dieser muss nicht mit dem Namen in den Einstellungen übereinstimmen.
- **Server IP:** Die IP deines Servers, ohne Port.


### IP Angeben

Die IP muss ohne den Port angegeben werden, diese finden wir in unserem Interface ganz oben:

![](https://screensaver01.zap-hosting.com/index.php/s/ZMBTW3omeADmQyC/preview)

## Key Erstellen

Nun klicken wir auf "Create", es wird nun ein Key generiert.

![](https://screensaver01.zap-hosting.com/index.php/s/ZqaRXZeJxc2Ncme/preview)

## Key Einstellen

Nun öffnen wir die Einstellungen unseres Gameservers und scrollen nach unten, hier können wir nun unseren eigenen Key unter "Auth Key" angeben, das Endresultat sollte so aussehen.

![](https://screensaver01.zap-hosting.com/index.php/s/ggqXrWosXx5NkPo/preview)

Nun speichern wir die Einstellungen und starten den Server neu.

Fertig! Der Key ist nun angewandt und der Server sollte sich in Kürze listen.
