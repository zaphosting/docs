---
id: fivem-mastodon
title: "FiveM: Activity Feed mit Mastodon einrichten"
description: "Entdecke, wie du einen Mastodon-Activity-Feed in deinen Server integrierst für Echtzeit-Updates und mehr Community-Power → Jetzt mehr erfahren"
sidebar_label: Activity Feed konfigurieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Ein Activity Feed hält deine Spieler direkt im FiveM Gameserver auf dem Laufenden. Durch die Verbindung mit einem Mastodon-Account werden Server-Updates, Ankündigungen und kurze Nachrichten in Echtzeit angezeigt – ganz ohne, dass die Spieler externe Plattformen checken müssen.

Diese Integration schafft einen klaren Kommunikationskanal zwischen Server und Community und sorgt dafür, dass wichtige Infos immer an einem zentralen Ort sichtbar sind.

## Vorbereitung

Bevor du den Activity Feed einrichtest, brauchst du einen Mastodon-Account. Über diesen Account werden später die Updates veröffentlicht, die im Feed angezeigt werden.

Falls du noch keinen Account hast, registriere dich auf einer [Mastodon](https://joinmastodon.org/) Instanz deiner Wahl. Nach der Registrierung solltest du sicherstellen, dass dein Profil erreichbar ist und bereit für Posts, denn genau diese Beiträge werden im Activity Feed angezeigt.



## Einrichtung

Öffne dein Mastodon-Profil und kopiere deinen kompletten Nutzernamen. 
Der Username hat normalerweise dieses Format:

```
username@instance.domain
```

In diesem Beispiel ist der Username `zaphosting@mstdn.instance`. Öffne als Nächstes den **Configs**-Bereich deines FiveM Servers und bearbeite die `server.cfg` Datei. Scrolle ganz nach unten und füge folgende Zeile hinzu:

```
sets activitypubFeed username
```

Ersetze `username` durch deinen eigenen Mastodon-Nutzernamen.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Speichere die Datei und starte den Server neu. Nach dem Neustart kann es bis zu 20 Minuten dauern, bis der Activity Feed verfügbar ist. Sobald aktiv, erscheint beim Öffnen des Servers ein neuer **Feed**-Tab, der die Posts vom verknüpften Mastodon-Account anzeigt.



## Fazit

Mit dem konfigurierten Activity Feed werden Server-Updates und Ankündigungen direkt und übersichtlich für deine Spieler angezeigt. Dieses Setup sorgt für mehr Transparenz, stärkt die Community-Interaktion und bietet eine effiziente Möglichkeit, News und Infos zu teilen – ganz ohne externe Links oder Plattformen.



Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂