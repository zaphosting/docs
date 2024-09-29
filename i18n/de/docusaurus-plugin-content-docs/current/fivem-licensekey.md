---
id: fivem-licensekey
title: "FiveM: Fügen deinen eigenen Lizenzschlüssel (Patreon) zum Server hinzu"
description: Informationen, wie du deinen eigenen Lizenzschlüssel (von Patreon) erstellen und zu deinem FiveM Server von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Eigener Lizenzschlüssel
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du benötigst einen eigenen Lizenzschlüssel, vor allem wenn du deine [FiveM Patreon](https://www.patreon.com/fivem/posts) Vorteile wie Onesync, farbige Servernamen und mehr nutzen möchtest. Alternativ kannst du auch einen eigenen Lizenzschlüssel benötigen, um den Eigentümer in der Serverliste zu ändern oder wenn du eine Fehlermeldung erhältst, dass der automatisch generierte ZAP-Schlüssel ungültig ist.

<InlineVoucher />

## Vorbereitung

Um deinen eigenen Lizenzschlüssel zu erstellen, musst du dich zunächst auf der [Cfx.re Keymaster Website](https://keymaster.fivem.net) anmelden. Wenn du kein bestehendes Cfx.re Forum-Konto hast, musst du eines erstellen, um dich anmelden und fortfahren zu können.

![](https://github.com/zaphosting/docs/assets/42719082/4c5bd4d9-ea1a-49aa-b70c-b5d7f07682c2)

Nachdem du eingeloggt bist, klicke auf den Button **Neuer Server** in der Navigationsleiste links, der dich zur Seite für die Erstellung des Schlüssels führt.





## Lizenzschlüssel generieren

Sobald du alle notwendigen Informationen eingegeben hast, solltest du in der Lage sein, einen Lizenzschlüssel zu generieren. Deine Seite sollte ungefähr so aussehen wie unten. Klicken nun auf den Button **Generieren** und es wird ein Lizenzschlüssel erstellt.

![](https://screensaver01.zap-hosting.com/index.php/s/oszSwCxqs43BWDa/preview)

Kehre zur Startseite zurück, und der neu registrierte Lizenzschlüssel wird dir angezeigt.

## Lizenzschlüssel hinzufügen

Abschließend musst du im Webinterface deines Gameservers zum Bereich **Einstellungen** navigieren und dort das Feld **Benutzerdefinierter Lizenzschlüssel** aufrufen. Füge in dieses Feld den generierten Code ein.

![](https://github.com/zaphosting/docs/assets/42719082/5e2f3fce-0f34-4401-8003-ecdcd1e175ce)

:::info
**Für txAdmin:**
Wenn du die txAdmin-Version des Gameservers verwendest, musst du stattdessen den Schlüssel unter dem Parameter `sv_licensekey` definieren. Du kannst auf deine `server.cfg` Datei entweder über dein txAdmin Interface Panel, den Bereich **Configs** auf dem Webinterface deines Gameservers oder direkt über einen FTP Zugang zugreifen.
:::



## Abschluss

Nachdem du deinen individuellen Lizenzschlüssel gesetzt hast, kannst du deinen FiveM Server neu starten. Du hast erfolgreich einen individuellen Lizenzschlüssel für deinen FiveM Gameserver gesetzt!