---
id: vserver-linux-password-change
title: "vServer: Root-Passwort für Linux-Server ändern"
description: "Entdecke, wie du dein Server-Passwort sicher über das Webinterface oder die Konsole änderst und verwaltest – für besseren Zugriffsschutz → Jetzt mehr erfahren"
sidebar_label: Passwort ändern
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Webinterface

Das Passwort kannst du ganz easy über unser Webinterface ändern. Öffne dazu die Seite „Zugang und Sicherheit“, die du links in der Navigation findest.

![](https://screensaver01.zap-hosting.com/index.php/s/9nMFt4ZAGmQEHnZ/preview)

Das Feld für das Root-Passwort findest du dort, wo du dein neues Passwort eingeben kannst.

:::info
Beachte bitte, dass das Passwort mindestens 8 Zeichen lang sein muss und Groß- und Kleinbuchstaben (a-z/A-Z), Zahlen (1-9) sowie Sonderzeichen (!@=#$%&-?_;:.,) enthalten muss. Wenn das nicht erfüllt ist, wird das Passwort nicht auf dem Server übernommen.
:::

Nachdem du das Passwort eingegeben hast, erscheint ein Pop-up, das du mit „ok“ bestätigen kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/sybJP9oeJKY2SLr/preview)

Wenn alle Voraussetzungen passen, bestätigt das System, dass das Passwort erfolgreich geändert wurde.

✅ Das Passwort wurde jetzt geändert.

Ab sofort kannst du das Passwort für 3 Stunden in unserem Webinterface einsehen. Danach wird es aus Sicherheitsgründen gelöscht. Um das Passwort anzuzeigen, klick einfach auf das Augensymbol bei „Passwort“.

![](https://screensaver01.zap-hosting.com/index.php/s/rFKrYA6en8Z9ypz/preview)

Danach öffnet sich ein Pop-up-Fenster, in dem dir das Passwort angezeigt wird.

## Server-Konsole

Das Passwort kannst du auch über die Server-Konsole ändern, egal ob du per Putty oder über die serielle Konsole zugreifst.

:::info
Wichtig: Diese Option kannst du nur nutzen, wenn du noch Zugriff auf den Server hast.
:::

Wenn du in der Konsole eingeloggt bist, änderst du das Passwort mit dem Befehl `passwd`. Danach musst du das neue Passwort zur Bestätigung nochmal eingeben. Stimmen beide Eingaben überein, bestätigt dir die Konsole die Änderung.

Wenn die beiden Passwörter nicht übereinstimmen, bricht die Konsole den Vorgang ab. In dem Fall musst du den Befehl `passwd` nochmal ausführen.

:::info
Wichtig: Wenn du das Passwort über die Konsole änderst, wird es nicht für 3 Stunden im Webinterface unter „Zugang und Sicherheit“ angezeigt.
:::

<InlineVoucher />