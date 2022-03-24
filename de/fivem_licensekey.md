---
id: fivem_licensekey
title: FiveM: Eigenen Lizenzkey (Patreon) zu Server hinzufügen
description: Informationen, wie du einen eigenen Lizenzkey (von Patreon) für FiveM-Server von ZAP-Hosting erstellst und zu deinem Server hinzufügen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Eigener Lizenzkey
---

## Wieso brauche ich einen Key?

Ein Key wird benötigt, wenn z. B. die [FiveM Patreon](https://patreon.com/fivem) Vorteile gekauft wurden, um Onesync freizuschalten, oder wenn das Nucleus Interface den falschen Gameserver anzeigt.

## Vorbereitung
Um einen eigenen Lizenzkey zu erstellen, melden wir uns zunächst auf https://keymaster.fivem.net an, wenn noch kein FiveM Forum Account erstellt wurde, muss hier nun einer erstellt werden.

![image](https://user-images.githubusercontent.com/13604413/159167431-44672d55-c5a2-458c-9849-b2f7275d3cdf.png)

Nachdem wir angemeldet sind, klicken wir oben auf "New", damit kommen wir ins Menü zum Lizenzkey Erstellen:


![image](https://user-images.githubusercontent.com/13604413/159167435-0e204772-57bf-406f-ba33-e13737fad42d.png)


## Daten angeben

Nun können wir die Daten wie folgt befüllen:

- **Label:**  Beschreibung des Servers, z. B. der Name.
- **Server IP Address:** Die Server IP, ohne Port
- **Server Type:** Der Servertyp, in unserem Fall "Server Provider (rented server)"


### IP herausfinden

Die IP deines Servers findest du im Tab FTP-Browser

Die IP muss ohne den Port angegeben werden.

## Key generieren

Nachdem alle unsere Daten befüllt sind, sollte die Keymaster Seite ungefähr so aussehen:

![image](https://user-images.githubusercontent.com/13604413/159167479-a5964ac5-a6de-43a9-bd12-a459bb94e002.png)

Nun klicken wir auf "Generate", es wird nun ein Key generiert.

Auf der Homepage des keymasters können wir unseren neuen Key nun sehen:

![image](https://user-images.githubusercontent.com/13604413/159167482-70076a07-9f9a-48cf-ad21-68a0907f5d87.png)

## Key einstellen

> ⚠️ Bei txAdmin Servern muss der Lizenz-Key in der server.cfg bei sv_licensekey definiert werden!

Nun Öffnen wir die Einstellungen unseres Gameservers und scrollen nach unten, hier können wir nun unseren eigenen Key unter "Eigener Lizenzkey (optional)" Angeben, das Endresultat sollte so aussehen.

![image](https://user-images.githubusercontent.com/13604413/159167488-29414748-f743-47ff-a52e-8d6e7154090d.png)

Nun speichern wir die Einstellungen und Starten den Server neu.

Fertig! Der Key ist nun angewandt.
