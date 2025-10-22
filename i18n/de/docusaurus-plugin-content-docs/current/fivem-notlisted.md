---
id: fivem-notlisted
title: "FiveM: Server erscheint nicht in der Serverliste"
description: "Finde heraus, wie du Probleme mit der Serverauflistung behebst und sicherstellst, dass dein Server korrekt in der Liste erscheint → Jetzt mehr erfahren"
sidebar_label: Server nicht in Serverliste
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Wenn dein Server nicht in der Serverliste erscheint, kann das mehrere Gründe haben. Falls diese Anleitung das Problem nicht löst, kontaktiere bitte unseren [Support](https://zap-hosting.com/en/customer/support/).

<InlineVoucher />

## Konfigurationsfehler

Oft sind es einfache Konfigurationsfehler, die dieses Problem verursachen. Zuerst sollten wir prüfen, ob die Auflistung für unseren Server deaktiviert ist. Dafür checken wir die `sv_master1` Zeile:

![](https://screensaver01.zap-hosting.com/index.php/s/KBH8deTbXxfrWtB/preview)

:::info
Diese Zeile sollte **immer** mit einem # auskommentiert sein. Wenn das nicht der Fall ist, wird der Server nicht gelistet.
:::

Auch der Servername (`sv_hostname`) sollte überprüft werden:

![](https://screensaver01.zap-hosting.com/index.php/s/9KyEj4tNQWRYxdB/preview)

In diesem Fall fehlt das Anführungszeichen am Ende der Zeile. Bei manchen Servernamen kann es auch wegen der Formatierung Probleme geben. Wir empfehlen, solche Zeichen zu entfernen, z.B. [DE] oder Sonderzeichen wie ä, ü, ö.

## Problematische Ressourcen

Es kann auch sein, dass bestimmte Ressourcen verhindern, dass der Server gelistet wird. In dem Fall empfehlen wir, die zuletzt installierten Ressourcen zu entfernen und den Server dann für ca. 1 Stunde online zu lassen. In den meisten Fällen sollte er danach wieder angezeigt werden.

## Neuinstallation

Wenn nichts davon hilft, empfehlen wir eine Neuinstallation. Dabei werden alle Serverdateien auf den Standard zurückgesetzt.

:::info
Mach unbedingt vorher ein Backup, sonst gehen alle Daten auf dem Server verloren.
:::

<InlineVoucher />