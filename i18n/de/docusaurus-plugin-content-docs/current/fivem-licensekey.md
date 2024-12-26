---
id: fivem-licensekey
title: "FiveM: Benutzerdefinierten Lizenzschlüssel hinzufügen"
description: Informationen zur Erstellung eines benutzerdefinierten Lizenzschlüssels und zum Hinzufügen zu deinem FiveM-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Eigener Lizenzschlüssel
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einleitung

Standardmäßig wird dein FiveM Game Server mit einem automatisch generierten Lizenzschlüssel geliefert. Wenn du diesen anpasst und deinen eigenen FiveM Lizenzschlüssel verwendest, kann das aus verschiedenen Gründen von Vorteil sein, z.B. um auf die Vorteile deines FiveM Element Club-Abonnements wie Onesync zuzugreifen, den Serverbesitzer auf deinen Namen zu ändern und vieles mehr. In dieser Anleitung erklären wir dir, wie du deinen eigenen Lizenzschlüssel für deinen FiveM Game Server erstellst und hinzufügst.

<InlineVoucher />

## Vorbereitung

Um mit der Schlüsselerstellung zu beginnen, musst du auf die offizielle **[Cfx.re Portal](https://portal.cfx.re/)** Website gehen und dich mit deinem Cfx.re Forum-Account anmelden. Wenn du noch kein Konto hast, kannst du die Option Registrieren wählen, um ein neues Konto zu erstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info Neues Cfx.re Portal
Das Cfx.re Portal ist das neue Zuhause für alles, was mit FiveM zu tun hat. Es ersetzt die alten Lösungen FiveM Keymaster und Patreon. Auf diesem neuen Portal kannst du jetzt deine Serverlizenzschlüssel verwalten, auf alle gekauften Assets zugreifen und dein FiveM-Abonnement verwalten - alles an einem Ort.

Wir empfehlen dir, den [offiziellen Blog-Beitrag](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) zu lesen, um zu erfahren, wie du deine Patreon-Abonnements auf das neue Cfx.re-Portal umstellen kannst, um deine Vorteile zu erhalten.
:::

## Lizenzschlüssel generieren

Wenn du im Portal eingeloggt bist, navigiere über die obere Navigationsleiste zum Abschnitt **Server**, um den Hauptbereich für die Schlüsselverwaltung aufzurufen. Dieser ersetzt die alte FiveM Keymaster-Website in einem übersichtlichen All-in-One-Portal. Du kannst auch jeden Lizenzschlüssel aktualisieren, indem du die Option **Re-Aktivieren** auf dieser Seite nutzt.

Wähle den Button **Schlüssel generieren**, um die Registrierungsaufforderung zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

Gib in die Eingabeaufforderung einen sinnvollen Namen für den Schlüssel ein, damit du ihn in Zukunft leichter identifizieren kannst. Klicke auf den Button Erzeugen, sobald du fertig bist.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

In der Tabelle sollte nun ein neuer Eintrag mit einem Schlüssel erscheinen, den du gerade erzeugt hast. Kopiere den Schlüssel über die Aktionsschaltflächen auf der rechten Seite und halte ihn für den nächsten Abschnitt bereit.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Schlüssel zum Server hinzufügen

Nachdem du den Lizenzschlüssel vorbereitet hast, musst du nun den bestehenden Lizenzschlüssel auf deinem FiveM Gameserver anpassen und durch den neu erstellten Schlüssel ersetzen. Wenn du die Spielversion **txAdmin FiveM** verwendest, solltest du den Abschnitt [dedicated txAdmin](#txadmin-fivem-version) verwenden, da die Anweisungen etwas anders sind.

### Allgemeine FiveM Server

Der einfachste Weg, einen eigenen Lizenzschlüssel festzulegen, ist der Abschnitt **Einstellungen** in der Weboberfläche. Du könntest die Datei `server.cfg` auch manuell per FTP oder über den Bereich **Configs** im Webinterface anpassen, aber wir empfehlen dir die einfachere Variante und stellen sie daher im Folgenden vor.

Rufe das Webinterface deines FiveM-Spielservers auf und gehe zum Abschnitt **Einstellungen** auf der linken Seite. Durchsuche die Seite und finde das Feld **Benutzerdefinierter Lizenzschlüssel**. Gib deinen benutzerdefinierten Lizenzschlüssel dort ein und bestätige die Änderungen mit einem Klick auf den grünen Speichern-Button.

![](https://screensaver01.zap-hosting.com/index.php/s/8SAf9yD4ztbEbZz/preview)

### txAdmin FiveM Version

Für Leser, die die Spielversion **FiveM: txAdmin** verwenden, musst du auf das txAdmin-Panel deines FiveM-Spielservers zugreifen, um die notwendigen Anpassungen vorzunehmen. Dieses findest du auf dem Dashboard der Weboberfläche deines Spieleservers. Verwende die Anmeldedaten auf der Seite, um dich in das Panel einzuloggen.

![](https://screensaver01.zap-hosting.com/index.php/s/2Rjx8sCFG6eteMD/preview)

Auf der txAdmin-Oberfläche navigierst du zum **CFG-Editor** auf der linken Seite, um auf die Datei `server.cfg` zuzugreifen. Suche im Editor die Zeile mit dem Parameter `sv_licensekey` und füge dort deinen eigenen Lizenzschlüssel ein. Klicke anschließend auf den Button Speichern, um die Änderungen zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/2E8j9jtykcjwF7L/preview)

## Fazit

Nachdem du den benutzerdefinierten Lizenzschlüssel eingerichtet hast, starte deinen Server neu, um ihn zu nutzen. Du hast erfolgreich einen benutzerdefinierten Lizenzschlüssel zu deinem FiveM Gameserver hinzugefügt.