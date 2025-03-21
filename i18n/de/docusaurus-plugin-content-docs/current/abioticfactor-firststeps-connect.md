---
id: abioticfactor-firststeps-connect
title: "Abiotic Factor: Verbinden mit Abiotic Factor Server"
description: Informationen zur Verbindung mit einem Abiotic Factor Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Mit dem Server verbinden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung erfährst du, wie du dich mit deinem Abiotic Factor Server verbinden kannst. Es gibt zwei Möglichkeiten, sich zu verbinden: entweder direkt über die IP-Adresse deines Servers oder über die Serverliste. Wir empfehlen, den Server vorher nach deinen Wünschen zu konfigurieren. Mehr dazu erfährst du in unserer [Server-Konfiguration](abioticfactor-configuration.md) Anleitung.

<InlineVoucher />

## Direktverbindung über IP

### Server-IP abfragen

Zunächst musst du die IP und den Port deines Abiotic Factor-Servers kennen, um eine direkte Verbindung herstellen zu können. Gehe einfach zu deinem [ZAP-Hosting Webinterface](https://zap-hosting.com/en/customer/) auf der Website und halte die vollständige IP und den Port bereit.

![](https://screensaver01.zap-hosting.com/index.php/s/P2GPRPcTPAytK2z/preview)

Wenn du deinen Abiotic Factor Server als externen dedizierten Server betreibst, ist die IP die des Host-Rechners und der Port derjenige, den du in deiner Konfigurationsdatei eingestellt hast (standardmäßig ist das 7777). In unserer [Server-Konfiguration](abioticfactor-configuration.md) Anleitung findest du weitere Informationen zum Port.

### Verbinden im Spiel

Abiotic Factor nutzt Steam Serves, d.h. du kannst die IP-Adresse deines Gameservers verwenden, um deinen Server direkt hinzuzufügen.

Öffne Steam und gehe auf die Registerkarte **View->Game Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/9Yi2ymdSRj3WDbx/preview)

Gehe nun zum Abschnitt **Favorites** und drücke unten auf das Plus-Symbol, um das Menü Direct IP zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/7dFW9ANQmeTNdz9/preview)

In der neuen Eingabeaufforderung gibst du die IP-Adresse und den Port deines Servers im folgenden Format ein: `[Deine_IP-Adresse]:[Dein_Port]`. Drücke **OK**, wenn du fertig bist und der Server sollte zu deiner Liste hinzugefügt werden. Wenn du eine Fehlermeldung erhältst, vergewissere dich, dass du beide Teile der direkten IP richtig eingegeben hast.

![](https://screensaver01.zap-hosting.com/index.php/s/ir5Hy54fc95CDbs/preview)

Jetzt solltest du deinen Abiotic Factor-Server in der Liste der Steam Game Servers sehen können. Wähle einfach den Server aus und benutze den Button **Verbinden** unten im Menü, um dich mit deinem Server zu verbinden.

## Verbinden über Serverliste

Die einfachere Möglichkeit, sich mit deinem Server zu verbinden, ist über die Serverliste. Stelle sicher, dass du einen passenden Servernamen einstellst, indem du im Webinterface deines Gameservers den Bereich **Einstellungen** aufrufst.

Wir empfehlen dir außerdem, im gleichen Bereich ein Passwort festzulegen, um deinen Server zu sichern. Sobald du fertig bist, starte deinen Server neu, damit die neuen Optionen in Kraft treten.

Gehe nun zu deinem Spiel und wähle **Einrichtung betreten** und anschließend **Server beitreten**. Auf dieser Seite kannst du in der oberen Suchleiste nach dem Namen deines Servers suchen.

:::info
Es kann einige Zeit dauern, bis die Suchergebnisse angezeigt werden. Alternativ kannst du dich auch wie oben beschrieben über Direct IP verbinden.

Vergewissere dich, dass das Kontrollkästchen **Show Dedicated** angekreuzt ist, sonst wird dein Server nicht angezeigt.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/B5JjGR93qkp9WXK/preview)