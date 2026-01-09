---
id: domain-teamspeak-redirect
title: "Domain: TeamSpeak 3 Weiterleitung einrichten"
description: "Entdecke, wie du die Verbindung zu deinem TeamSpeak 3 Server mit eigenen Domains oder Subdomains vereinfachst → Jetzt mehr erfahren"
sidebar_label: TeamSpeak 3 Weiterleitung
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Beachte, dass es immer bis zu 24 Stunden dauern kann, bis Änderungen an DNS-Einträgen aktiv werden!
:::

## Einführung

Du kannst entweder deine komplette Domain oder nur eine Subdomain auf deinen TeamSpeak 3 Server weiterleiten.
So muss sich niemand mehr die komplizierte IP-Adresse aus Zahlen merken, sondern kann einfach über die Domain eine Verbindung zu deinem TeamSpeak 3 Server herstellen.

:::note
Standardmäßig erhalten **neue** TeamSpeak 3 Server jetzt einen `.zap.cloud` Alias mit einem zufälligen Präfix, über den man sich verbinden kann.
:::

<InlineVoucher />

## TSDNS Schnellsetup nutzen

Wir haben ein neues TSDNS-System für unsere TeamSpeak 3 Server implementiert, mit dem du in nur wenigen Klicks eine Subdomain für deinen TeamSpeak 3 Server einrichten kannst! Wenn du keine Domain bei uns hast, springe zum nächsten Abschnitt, um DNS-Einträge manuell einzurichten.

Gehe einfach im Webinterface deines TeamSpeak Servers auf unserer Website in den Bereich **Einstellungen->TSDNS**. Dort kannst du eine Subdomain (Präfix vor der Domain) auswählen sowie entweder unsere `zap-ts3.com` oder eine deiner eigenen Domains, die du bei uns im ZAP-Hosting Account hast.

:::info
Für dieses Schnellsetup musst du entweder [eine perfekte Domain direkt bei uns kaufen](https://zap-hosting.com/en/shop/product/domain/) oder deine eigene Domain zu deinem ZAP-Hosting Account umziehen. Diese Domains erscheinen dann im TSDNS-Bereich. Alternativ kannst du kostenlos die reguläre `zap-ts3.com` nutzen.
:::

Im Beispiel siehst du, wie wir eine neue Subdomain mit der `.zap.cloud` Domain erstellen, die dann auf unseren TeamSpeak 3 Server zeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/Mi3wK7cY639Rp3x/preview)

:::note
Beachte, dass es bis zu 3 Stunden dauern kann, bis die Domain propagiert ist und funktioniert.
:::

## Reguläre DNS Einrichtung

Um die IP-Adresse weiterzuleiten, kannst du entweder eine Subdomain erstellen, die auf die IP-Adresse des TeamSpeak 3 Servers zeigt, oder die komplette Domain ohne Subdomain weiterleiten.
Das reicht aus, wenn der TeamSpeak 3 Server den Standardport **9987** nutzt.
Verwendet der TeamSpeak 3 Server jedoch einen anderen Port als den Standard, muss zusätzlich ein **SRV-Eintrag** auf die IP-Adresse des TeamSpeak 3 Servers gesetzt werden, um die Domain oder Subdomain auf den richtigen Port weiterzuleiten.

### SRV Service

Der Service-Name beginnt immer mit einem **Unterstrich**.
Für einen TeamSpeak 3 Server ist der Service-Name immer **_ts3**, ohne Ausnahme.

### SRV Protokoll

Als Protokoll wird das Internetprotokoll angegeben, das für die Verbindung genutzt wird. Hier sind **UDP** und **TCP** möglich.
Die Protokollangabe beginnt ebenfalls immer mit einem **Unterstrich** und ist entweder **_udp** oder **_tcp**.
Für einen TeamSpeak 3 Server wird immer **_udp** verwendet, ohne Ausnahme.

## Domain ohne Subdomain weiterleiten

Um deine Domain ohne Subdomain auf einen Gameserver weiterzuleiten, öffne zuerst deine Domain im Dashboard und dann im Menü links die DNS-Verwaltung.

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)

Dort siehst du alle bestehenden DNS-Einträge für deine Domain.
Falls du noch keine eigenen Einträge erstellt hast, kannst du alle vorhandenen Einträge anzeigen, indem du auf den roten Papierkorb rechts klickst.

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

Klicke dann auf **Neuer Eintrag** und du gelangst zur Erstellung eines neuen DNS-Eintrags.
Als **Name** wählst du hier den Domainnamen, z.B. **teamspeak-server.de**, der **Typ ist A** und der **Wert** ist die IP deines TeamSpeak 3 Servers, in diesem Fall **88.214.57.116**.
Das Feld **TTL** kannst du unverändert lassen.

![](https://screensaver01.zap-hosting.com/index.php/s/cTGTdBFrigs7HDG/preview)

Wenn du alles eingetragen hast, klicke auf **Speichern**, der Eintrag wird in den DNS-Einstellungen gespeichert und erscheint innerhalb von 24 Stunden.

:::info
Es kann immer bis zu 24 Stunden dauern, bis neue DNS-Einträge aktiv werden. Leider hat niemand darauf Einfluss.
:::

## Domain mit Subdomain weiterleiten

Wenn du eine Subdomain erstellen möchtest, z.B. ts.teamspeak-server.de, gehst du wie im vorherigen Beispiel vor.
Als **Name** gibst du jedoch nicht den Domainnamen, sondern die Subdomain ein.
Das sieht dann so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/ocaqgX2DSdspGQ8/preview)

## Domain mit Port weiterleiten (SRV)

Wenn nicht der Standardport **9987** genutzt wird, muss zusätzlich ein **SRV-Eintrag** erstellt werden, damit die Domain nicht nur auf die IP des Gameservers, sondern auch auf den richtigen Port weitergeleitet wird.

Zuerst erstellst du entweder eine **Subdomain** wie oben beschrieben oder leitest die Domain direkt wie oben beschrieben auf den TeamSpeak 3 Server weiter – beides ist möglich.

### Weiterleitung ohne Subdomain

Nachdem du deine Domain wie oben beschrieben auf die IP deines TeamSpeak 3 Servers weitergeleitet hast, klicke auf **Neuer Eintrag** und erstelle einen Eintrag, der so aussieht:

![](https://screensaver01.zap-hosting.com/index.php/s/H3NGmYZHyJsCYnf/preview)

Im Feld **Name** steht der Service-Name, hier also unser TeamSpeak 3 Server, also **_ts3**. Außerdem enthält es den Protokolltyp, hier **_udp**, sowie den **Domainnamen**.
Der **Typ** ist ein **SRV** Eintrag.
Im Feld **Wert** steht der Gameport und die Domain, hier **0 1234 teamspeak-server.de**, wobei **1234** der **Port des Gameservers** ist und **teamspeak-server.de** die Domain, auf die weitergeleitet wird.
Der Wert **0** ist nicht mehr relevant und bleibt immer gleich. Die Felder **TTL** und **Prio** bleiben ebenfalls unverändert.

Danach kannst du auf **Speichern** klicken.

:::info
Wichtig: Im **Wert**-Feld muss am Ende der Domain ein **Punkt** gesetzt werden!
:::

### Weiterleitung mit Subdomain

Mit einer Subdomain funktioniert es fast genauso. Zuerst erstellst du eine Subdomain wie oben beschrieben und leitest sie auf die IP deines TeamSpeak 3 Servers weiter. Dann klickst du auf **Neuer Eintrag** und erstellst einen Eintrag mit folgendem Inhalt:

![](https://screensaver01.zap-hosting.com/index.php/s/aEkro3z9WBgWf8g/preview)

Im Feld **Name** steht der Service-Name, also **_ts3**, der Protokolltyp **_udp** sowie der **Domainname** inklusive Subdomain, hier **ts.teamspeak-server.de**.
Der **Typ** ist ein **SRV** Eintrag.
Im Feld **Wert** steht der Port und die Domain mit Subdomain, hier **0 1234 ts.teamspeak-server.de**, wobei **1234** der **Port des TeamSpeak 3 Servers** ist und **ts.teamspeak-server.de** die Domain mit Subdomain, auf die weitergeleitet wird.
Der Wert **0** ist nicht mehr relevant und bleibt immer gleich. Die Felder **TTL** und **Prio** bleiben ebenfalls unverändert.

<InlineVoucher />