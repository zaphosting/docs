---
id: palworld-spectate-mode
title: "Palworld: Spectate-Modus"
description: "Lerne, wie du den Spectate-Modus in Palworld nutzt, das erforderliche Admin-Passwort setzt und den Spectate-Modus auf deinem Server aktivierst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Spectate-Modus
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der Spectate-Modus in Palworld ermöglicht es dir, Spieler auf deinem Server zu beobachten, ohne aktiv mitzuspielen. In dieser Anleitung lernst du, wie du den Admin-Zugang vorbereitest, wo du die nötige Konfiguration im ZAP-Hosting Interface findest und wie du den Spectate-Modus im Spiel ein- und ausschaltest.

## Vorbereitung

Bevor du den Spectate-Modus nutzen kannst, benötigst du Administratorzugang auf deinem Palworld-Server. Dafür muss ein gültiges `AdminPassword` in deiner Serverkonfiguration gesetzt sein.

Falls du das noch nicht eingerichtet hast, überprüfe zuerst deine Palworld-Servereinstellungen und die Admin-Konfiguration.

:::info Admin-Zugang erforderlich
Der Spectate-Modus steht nur Administratoren zur Verfügung. Wenn du dich nicht zuerst als Admin anmeldest, funktioniert der Spectate-Befehl nicht.
:::

## Überprüfe die erforderliche Serverkonfiguration

Obwohl der Spectate-Modus selbst keine spezielle Einstellung benötigt, muss dein Server ein Admin-Passwort konfiguriert haben, damit du dich als Administrator authentifizieren kannst.

### Öffne die Konfigurationsdatei im ZAP-Interface

Im Webinterface deines ZAP-Hosting Gameservers öffnest du den Bereich **Configs**. Die relevante Palworld-Konfiguration findest du in der Datei:

`PalWorldSettings.ini`

Je nach Server-Template und Spielversion enthält diese Datei die wichtigsten Serveroptionen inklusive des Admin-Passwort-Eintrags.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Überprüfe den Admin-Passwort-Eintrag

In der Datei `PalWorldSettings.ini` suchst du den Abschnitt `OptionSettings` und stellst sicher, dass der Wert `AdminPassword` gesetzt ist.

Ein typisches Beispiel sieht so aus:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AdminPassword="[dein_admin_passwort]")
```

Wenn deine Datei bereits viele Optionen in einer einzigen `OptionSettings=(...)`-Zeile enthält, musst du nur sicherstellen, dass der Eintrag `AdminPassword` vorhanden ist und dein gewähltes Passwort enthält.

:::caution Bestehende Syntax erhalten
Entferne keine anderen vorhandenen Werte aus der `OptionSettings`-Zeile. Palworld speichert häufig mehrere Einstellungen in einem Eintrag, daher solltest du nur den Wert `AdminPassword` vorsichtig hinzufügen oder bearbeiten.
:::

### Konfigurationsübersicht

| Datei | Ort im ZAP-Interface | Erforderlicher Schlüssel | Zweck |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` | `AdminPassword` | Ermöglicht die Authentifizierung als Admin und die Nutzung des Spectate-Modus |

## Änderungen speichern und Server neu starten

Wenn du das `AdminPassword` in `PalWorldSettings.ini` geändert hast, speichere die Datei und starte deinen Palworld-Server über das ZAP-Hosting Webinterface neu.

Ein Neustart ist notwendig, damit die aktualisierte Konfiguration vom Server geladen wird.

:::note Neustart erforderlich
Wenn du keine Änderungen an der Konfigurationsdatei vorgenommen hast und das Admin-Passwort bereits korrekt gesetzt war, ist für den Spectate-Modus selbst kein zusätzlicher Neustart nötig.
:::

## Als Administrator einloggen

Sobald der Server online ist, verbinde dich wie gewohnt im Spiel mit deinem Palworld-Server. Um den Spectate-Modus zu nutzen, musst du dich mit dem zuvor konfigurierten Admin-Passwort authentifizieren.

Der genaue Admin-Login-Befehl kann je nach aktueller Palworld-Version und Interface-Verhalten variieren. Falls dein Server nach dem Beitritt eine manuelle Admin-Authentifizierung verlangt, nutze das konfigurierte Admin-Passwort im entsprechenden Ingame-Admin-Befehl oder Admin-Login-Prompt, der von deiner Serverversion unterstützt wird.

:::info Zur Admin-Authentifizierung
Aktuelle Drittanbieter-Quellen bestätigen durchgängig, dass der Spectate-Modus Admin-Rechte erfordert und `AdminPassword` konfiguriert sein muss. Nutzt dein Server eine spezielle Admin-Login-Anweisung, solltest du das vom installierten Palworld unterstützte Befehlsformat verwenden.
:::

## Spectate-Modus aktivieren

Nachdem du als Administrator verbunden bist, kannst du den Spectate-Modus auf eine der folgenden Arten aktivieren.

### Tastenkürzel verwenden

Drücke die Taste `\`, um in den Spectate-Modus zu wechseln.

### Befehl verwenden

Alternativ kannst du den folgenden Ingame-Befehl nutzen:

```text
/togglespectate
```

Dieser Befehl schaltet den Spectate-Modus für deine aktuelle Charakter-Session ein oder aus, vorausgesetzt, du bist als Admin authentifiziert.

### Übersicht der Spectate-Modus-Befehle

| Aktion | Methode | Voraussetzung |
| --- | --- | --- |
| Spectate-Modus betreten | Taste `\` drücken | Admin-Rechte |
| Spectate-Modus umschalten | `/togglespectate` | Admin-Rechte |
| Spectate-Modus verlassen | Taste `Esc` drücken | Aktiver Spectate-Modus |

:::tip Wann Spectate-Modus nutzen
Der Spectate-Modus ist praktisch, wenn du Spieler überwachen, Meldungen prüfen oder Aktivitäten auf deinem Server beobachten möchtest, ohne ins Spielgeschehen einzugreifen.
:::

## Spectate-Modus verlassen

Um den Spectate-Modus zu verlassen und zum normalen Spiel zurückzukehren, drücke `Esc`.

Je nach Serververhalten kannst du auch `/togglespectate` erneut verwenden, um den Modus auszuschalten.

## Fehlerbehebung

Falls der Spectate-Modus nicht funktioniert, prüfe folgende Punkte.

### Admin-Passwort ist gesetzt

Öffne `PalWorldSettings.ini` erneut über **Configs** und stelle sicher, dass `AdminPassword` vorhanden und nicht leer ist.

### Nach Konfigurationsänderung neu starten

Wenn du die Konfigurationsdatei kürzlich bearbeitet hast, starte den Server neu, bevor du es erneut testest.

### Admin-Authentifizierung sicherstellen

Ein gesetztes `AdminPassword` allein reicht nicht immer aus. Du musst während deiner Session vom Server als aktiver Administrator erkannt werden.

### Prüfe deine Tastatureingabe

Auf manchen Tastaturlayouts befindet sich die Taste `\` an einer anderen Stelle. Wenn das Kürzel nicht reagiert, nutze stattdessen `/togglespectate`.

:::caution Versionsunterschiede beachten
Palworld unterliegt weiterhin Gameplay- und Serveränderungen. Wenn sich der Spectate-Modus oder das Admin-Verhalten auf deinem Server unterscheidet, stelle sicher, dass dein Server aktuell ist und prüfe, ob die aktuelle Spielversion Befehle oder Berechtigungen geändert hat.
:::

## Fazit

Glückwunsch, du hast den Spectate-Modus auf deinem Palworld-Server erfolgreich genutzt. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂