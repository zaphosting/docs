---
id: fivem-esx-changemoneyicon
title: "FiveM: Geldsymbol ändern"
description: "Entdecke, wie du das Geldsymbol deines Servers für ein personalisiertes Ingame-Erlebnis anpasst → Jetzt mehr erfahren"
sidebar_label: Geldsymbol ändern
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archivierte Anleitung
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, fehlerhaft oder veraltet sind. Es wurde aus folgenden Gründen archiviert:

**Grund**: Die Umsetzungs-Methode basiert auf einer veralteten ESX-Version. Dieser Ansatz funktioniert nicht mit der aktuellen ESX-Version, da sich die Struktur geändert hat.
::::



<InlineVoucher />

## Mit FTP verbinden

Zuerst muss der [Zugang via FTP](gameserver-ftpaccess.md) eingerichtet werden.


Nachdem das erledigt ist, kannst du dich verbinden und den Server-Ordner öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


Hier öffnen wir die `server.cfg` Datei im Ordner `server-data`.

## Config bearbeiten

Jetzt fügen wir folgendes oberhalb der Zeile `start essentialmode` hinzu:

```Lua
set es_moneyIcon "$"
```

Hier kannst du das $ durch dein eigenes Symbol ersetzen.

![](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


Nach dem Speichern der Datei und einem Neustart des Servers wird das Geldsymbol im Spiel geändert.

<InlineVoucher />