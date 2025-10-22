---
id: fivem-licensekey
title: "FiveM: Eigene Lizenzschlüssel hinzufügen"
description: "Entdecke, wie du deinen eigenen FiveM Lizenzschlüssel erstellst und verwaltest, um Abo-Vorteile freizuschalten und deinen Server individuell anzupassen → Jetzt mehr erfahren"
sidebar_label: Eigener Lizenzschlüssel
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Standardmäßig wird dein FiveM Gameserver mit einem automatisch generierten Lizenzschlüssel ausgeliefert. Diesen anzupassen und deinen eigenen FiveM Lizenzschlüssel zu nutzen, kann aus verschiedenen Gründen sinnvoll sein – zum Beispiel um auf deine FiveM Element Club Abo-Vorteile wie Onesync zuzugreifen, den Serverbesitzer auf deinen Namen zu ändern und vieles mehr. In dieser Anleitung zeigen wir dir, wie du deinen eigenen Lizenzschlüssel erstellst und zu deinem FiveM Gameserver hinzufügst.

<InlineVoucher />

## Vorbereitung

Um mit der Erstellung des Schlüssels zu starten, musst du dich auf der offiziellen **[Cfx.re Portal](https://portal.cfx.re/)** Website mit deinem Cfx.re Forum Account einloggen. Falls du noch keinen Account hast, kannst du dich dort ganz einfach registrieren.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info Neues Cfx.re Portal
Das Cfx.re Portal ist die neue zentrale Anlaufstelle für alles rund um FiveM und ersetzt die alten FiveM Keymaster und Patreon Lösungen. Hier kannst du jetzt deine Server-Lizenzschlüssel verwalten, gekaufte Assets einsehen und dein FiveM Abo zentral steuern.

Wir empfehlen dir dringend, den [offiziellen Blogpost](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) zu lesen, um mehr über die Migration von Patreon-Abos zum neuen Cfx.re Portal zu erfahren und deine Vorteile zu behalten.
:::

## Lizenzschlüssel generieren

Nach dem Login im Portal gehst du oben in der Navigation auf den Bereich **Servers**, um zum Hauptbereich für die Schlüsselverwaltung zu gelangen. Dieser ersetzt die alte FiveM Keymaster Website und bietet dir alles in einem praktischen Portal. Du kannst hier auch bestehende Lizenzschlüssel mit der Option **Re-Activate** aktualisieren.

Klicke auf den Button **Generate Key**, um das Registrierungsfenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

Gib im Fenster einen aussagekräftigen Namen für den Schlüssel ein, damit du ihn später leicht wiedererkennst. Drücke dann auf den Generate-Button.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

Du solltest nun einen neuen Eintrag in der Tabelle sehen mit dem gerade generierten Schlüssel. Kopiere den Schlüssel über die Aktionsbuttons rechts und halte ihn für den nächsten Schritt bereit.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Schlüssel zum Server hinzufügen

Mit dem vorbereiteten Lizenzschlüssel musst du jetzt den bestehenden Lizenzschlüssel auf deinem FiveM Gameserver anpassen und durch den neuen ersetzen. Dafür musst du auf das txAdmin Control Panel deines FiveM Gameservers zugreifen. Dieses findest du im Webinterface Dashboard deines Gameservers. Nutze die dort angegebenen Zugangsdaten, um dich einzuloggen.

Im txAdmin Interface navigierst du links zum **CFG Editor**, um die `server.cfg` Datei zu öffnen. Suche in der Datei die Zeile mit dem Parameter `sv_licensekey` und ersetze den Wert durch deinen eigenen Lizenzschlüssel. Speichere die Änderungen mit dem Save-Button.

![](https://screensaver01.zap-hosting.com/index.php/s/2E8j9jtykcjwF7L/preview)

## Fazit

Nachdem du den eigenen Lizenzschlüssel eingerichtet hast, starte deinen Server neu, damit der Schlüssel aktiv wird. Du hast erfolgreich einen eigenen Lizenzschlüssel zu deinem FiveM Gameserver hinzugefügt. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />