---
id: palworld-update-your-server
title: "Palworld: Deinen Server updaten"
description: "Lerne, wie du deinen Palworld-Server updatest, ein Versionsupdate auslöst und die neueste Palworld-Spielversion bei ZAP-Hosting überprüfst -> Jetzt mehr erfahren"
sidebar_label: Palworld: Deinen Server updaten
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld-Serverupdates sind notwendig, um deinen Server mit der neuesten Palworld-Spielversion und dem Client-Update kompatibel zu halten. In dieser Anleitung lernst du, wie du deinen Palworld-Server bei ZAP-Hosting updatest, wo du die relevanten Einstellungen findest und was zu tun ist, wenn das Update nicht korrekt angewendet wird.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld-Gameserver im ZAP-Hosting Webinterface hast und die Berechtigung, den Server bei Bedarf neu zu starten oder neu zu installieren.

:::info Serverzugriff erforderlich
Du benötigst Zugriff auf die Serververwaltung, inklusive **Configs**, **Konsole** und den Power-Controls im ZAP-Hosting Panel.
:::

:::note Zu den Konfigurationsdateien
Für Palworld-Updates gibt es normalerweise keine Gameplay-Konfigurationsdatei, die du bearbeiten musst, um eine neue Spielversion zu installieren. Der Updateprozess wird meist automatisch von der Serverinstallation übernommen. Prüfe dennoch deine Servereinstellungen im Panel, falls du das Updateverhalten manuell steuerst.
:::

## Wie Palworld-Serverupdates bei ZAP-Hosting funktionieren

Palworld Dedicated Server auf Hosting-Plattformen aktualisieren sich meist, wenn die Serverinstallation beim Start nach einer neueren Version sucht. Nach den aktuell verfügbaren Informationen führen ZAP-Hosting Server diese Prüfung in der Regel automatisch beim Start oder Neustart durch.

Ist dein Server für automatische Updates konfiguriert, reicht meist ein Neustart nach einer neuen Palworld-Version. Wenn automatische Updates in deinen Serviceeinstellungen deaktiviert sind, musst du den Server nach jedem Patch manuell neu starten, damit die Updateprüfung ausgeführt wird.

:::caution Automatische Updatefunktion
Die genaue Bezeichnung und Verfügbarkeit der automatischen Updateoptionen kann je nach aktuellem ZAP-Hosting Gameserver-Interface und Produktsetup variieren. Wenn du keinen Update-Schalter in deinen Servereinstellungen findest, heißt das nicht zwangsläufig, dass er dauerhaft fehlt; die Option kann je nach Produktversion unterschiedlich sein oder im Hintergrund automatisch laufen.
:::

## Relevante Servereinstellungen prüfen

Öffne zunächst deinen Palworld-Server im ZAP-Hosting Webinterface und überprüfe die verfügbaren Einstellungen zu Updates und Startverhalten.

### Serververwaltung öffnen

1. Melde dich im ZAP-Hosting Webinterface an.
2. Öffne deinen **Palworld** Gameserver.
3. Schau dir die Bereiche **Configs**, **Konsole** und die Power-Controls an.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Prüfen, ob eine Konfigurationsdatei bearbeitet werden muss

Für den Palworld-Updateprozess gibt es keinen bestätigten Konfigurationsdatei-Eintrag, der die Spielversion manuell ändert. Die relevanten Palworld Gameplay-Konfigurationsdateien unter **Configs** dienen meist zur Einstellung von Serverregeln, nicht zum Herunterladen einer neuen Serverversion.

Die üblicherweise genutzte Palworld-Einstellungsdatei ist:

| Datei | Typischer Zweck | Speicherort |
| --- | --- | --- |
| `PalWorldSettings.ini` | Gameplay- und Serververhaltenseinstellungen | Serververwaltung unter **Configs** |

:::note Kein manueller Versionseintrag
Es gibt keinen verifizierten `PalWorldSettings.ini`-Schlüssel, um ein bestimmtes Palworld-Server-Update in einem Standard-ZAP-Hosting-Setup zu erzwingen. Wenn du nur die Server-Software updaten möchtest, ist das Bearbeiten von `PalWorldSettings.ini` normalerweise nicht nötig.
:::

## Server updaten

Nachdem du den Serverzugriff bestätigt und die Einstellungen geprüft hast, kannst du den Updateprozess starten.

### Server neu starten, um Updateprüfung auszulösen

Die Hauptmethode ist ein Neustart des Servers. Bei vielen gehosteten Palworld-Servern löst der Start eine Prüfung auf verfügbare Updates aus.

1. Stoppe oder starte deinen Palworld-Server im ZAP-Hosting Webinterface neu.
2. Warte, bis der Server vollständig heruntergefahren ist.
3. Starte den Server erneut.
4. Gib dem Server einige Minuten Zeit, um den Start- und Updateprozess abzuschließen.

Ist die automatische Updatefunktion bei deinem Service aktiv, sollte dieser Neustart den Server veranlassen, das neueste Palworld-Update herunterzuladen und anzuwenden.

### Wenn automatische Updates deaktiviert sind

Ist dein Service so konfiguriert, dass keine automatischen Updates erfolgen, musst du den Server nach jedem Palworld-Patch oder Versionsupdate manuell neu starten.

Nutze denselben Ablauf:

1. Server stoppen.
2. Server neu starten.
3. Warten, bis der Server vollständig gestartet ist.

:::tip Beste Praxis nach Palworld-Release
Starte deinen Server nach einer neuen Palworld-Veröffentlichung oder Patch in einer Zeit mit wenig Spieleraktivität neu. So vermeidest du Verbindungsprobleme durch Versionsunterschiede zwischen Client und Server.
:::

## Prüfen, ob das Update angewendet wurde

Nach dem Neustart solltest du sicherstellen, dass die neue Version aktiv ist.

### Konsolenausgabe prüfen

Öffne die **Konsole** in der Serververwaltung und sieh dir das Startprotokoll an. Achte darauf, dass der Server normal startet und keine Fehler bei Updates oder Dateiprüfungen auftreten.

Da die genauen Logzeilen je nach Serverversion variieren können, konzentriere dich darauf, ob der Server erfolgreich startet und Verbindungen von Clients mit der neuesten Palworld-Version akzeptiert.

### `info`-Befehl verwenden

Falls deine Serverkonsole es unterstützt, führe folgenden Befehl aus:

```text
info
```

Dieser Befehl zeigt Serverinformationen nach dem Start an.

| Befehl | Zweck |
| --- | --- |
| `info` | Zeigt Serverinformationen zur Überprüfung nach dem Update an |

:::note Verfügbarkeit des Befehls
Die Unterstützung von Konsolenbefehlen kann je nach Palworld Dedicated Server-Implementierung und der Art des Konsolenzugangs variieren. Wenn `info` in deiner Umgebung keine nützlichen Daten liefert, nutze stattdessen das Startprotokoll und teste die Verbindung mit einem aktualisierten Spielclient.
:::

## Fehlerbehebung bei fehlgeschlagenem Update

Wenn der Neustart den Server nicht aktualisiert, nutze die Wiederherstellungsoptionen im ZAP-Hosting Panel.

### Serverdateien neu installieren oder überprüfen

Wenn der Server nach dem Neustart weiterhin eine alte Version ausführt:

1. Stoppe den Server vollständig.
2. Öffne die Neuinstallations- oder Wiederherstellungsoption in der Serververwaltung.
3. Nutze, falls vorhanden, die Option **Integrität prüfen** oder eine ähnliche Dateiprüfung.
4. Starte den Server nach Abschluss des Vorgangs neu.

Dieser Prozess überprüft oder lädt die Palworld-Serverdateien neu und kann unvollständige oder fehlgeschlagene Updates beheben.

:::caution Vorsicht bei gespeicherten Daten
Bevor du Neuinstallationsfunktionen nutzt, kläre, ob die Option nur Spieldateien oder auch Weltdaten betrifft. Wenn das Panel das nicht klar erklärt, erstelle vorher ein Backup oder kontaktiere den Support.
:::

### Client- und Serverversion abgleichen

Manchmal ist der Server korrekt aktualisiert, aber Spieler können nicht verbinden, weil ihr lokaler Client eine andere Version hat.

Prüfe Folgendes:

| Prüfung | Warum wichtig |
| --- | --- |
| Server nach Patch neu gestartet | Start löst Update aus |
| Neueste Clientversion installiert | Spieler brauchen gleiche Version |
| Keine Startfehler in der Konsole | Fehler verhindern Updateabschluss |
| Dateiprüfung durchgeführt | Beschädigte Dateien blockieren Updates |

## Was du in den Configs bearbeiten musst

Da diese Anleitung speziell einen manuellen Prozess behandelt und **Configs** erwähnt, ist es wichtig, den Umfang zu klären:

- Die Palworld-Konfigurationsdateien unter **Configs** dienen zur Servereinstellung.
- Es gibt keinen verifizierten Palworld-Konfigurationsschlüssel in `PalWorldSettings.ini`, der ein Server-Softwareupdate manuell herunterlädt oder anwendet.
- Für ein normales Versionsupdate musst du in der Regel keine Werte in der Config-Datei ändern.
- Die erforderliche Aktion ist meist ein **Serverneustart**, gefolgt von einer **Dateiprüfung oder Neuinstallation**, falls das Update fehlschlägt.

Falls ZAP-Hosting später einen dedizierten Update-Schalter oder Startparameter im Panel bereitstellt, solltest du genau die dort angezeigte Bezeichnung verwenden und keine nicht unterstützten Einträge in der Config-Datei hinzufügen.

:::danger Keine unbestätigten Config-Schlüssel hinzufügen
Füge keine zufälligen Updatebefehle, SteamCMD-Parameter oder undokumentierte Schlüssel in `PalWorldSettings.ini` oder andere Dateien unter **Configs** ein, sofern sie nicht ausdrücklich für deinen aktuellen ZAP-Hosting Palworld-Service dokumentiert sind. Nicht unterstützte Einträge aktualisieren den Server nicht zuverlässig und können Konfigurationsprobleme verursachen.
:::

## Nach dem Update

Sobald das Update erfolgreich angewendet wurde:

1. Stelle sicher, dass der Server normal läuft.
2. Prüfe die Konsole auf Fehler.
3. Teste den Verbindungsaufbau mit einem aktualisierten Palworld-Client.
4. Führe `info` in der Konsole aus, falls unterstützt.

Dein Server sollte jetzt bereit sein für Spieler mit der neuesten Version.

## Fazit

Glückwunsch, du hast deinen Palworld-Server erfolgreich upgedatet. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne! 🙂