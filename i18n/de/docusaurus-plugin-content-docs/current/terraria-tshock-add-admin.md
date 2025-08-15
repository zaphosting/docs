---
id: terraria-tshock-add-admin
title: "Terraria: Server-Admin werden (tShock)"
description: Informationen, wie du dich zum Admin auf deinem Terraria-Server mit tShock von ZAP-Hosting machen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden (tShock)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. 
<InlineVoucher />

## Abrufen des Tokens

Um dich als Admin auf deinem Terraria Server eintragen zu können, benötigst du deinen einzigartigen Token.
Dieser wird generiert, wenn du den Server das erste Mal startest, im Anschluss öffnest du die Live Konsole, in welcher du den Token findest:

![](https://screensaver01.zap-hosting.com/index.php/s/Kp9ffgYrCBjSWok/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/CRnkSk5oAboXK6D/preview)

In diesem Fall lautet der Token **4914096**.

## Eingabe des Tokens im Spiel

Um dich nun als Admin eintragen zu können, trittst du deinem Server in Terraria bei und gibst im Spiel den Befehl **/setup 4914096** ein.
Dabei ersetzt du natürlich den Token **4914096** mit deinem eigenen.

![](https://screensaver01.zap-hosting.com/index.php/s/qckj4cGApTRBBL6/preview)

### Im Anschluss erscheint folgende Meldung im Chat:

![](https://screensaver01.zap-hosting.com/index.php/s/9wB3rzNwMAJLnKg/preview)


## Hinzufügen eines Admins

Jetzt kannst du mit dem Befehl **/user add USERNAME PASSWORT owner** einen neuen Admin zu deinem Server hinzufügen. 
Dabei ersetzt du **USERNAME** durch deinen Namen und als **PASSWORT** kannst du ein beliebiges Passwort frei wählen
welches du künftig für den Login als Admin auf deinem Server verwenden kannst. 

![](https://screensaver01.zap-hosting.com/index.php/s/KryfWQi4Xebcfa5/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/zWzWKeEApcbZSCd/preview)

:::info
Beachte, dass dein Passwort mindestens 4 Zeichen lang sein muss!
:::

## Login als Admin

Nachdem du dich im Spiel als Admin eingetragen hast, kannst du dich mit folgendem Befehl einloggen:
**/login USERNAME PASSWORD**

Dabei ersetzt du natürlich wieder **USERNAME** durch deinen Namen und **PASSWORT** durch das von dir zuvor gesetzte Passwort.

![](https://screensaver01.zap-hosting.com/index.php/s/b5EbWNzcaA5PkAL/preview)

Nun bist du als Admin auf deinem Server angemeldet und kannst diesen mit verschiedenen Befehlen verwalten.

<InlineVoucher />
