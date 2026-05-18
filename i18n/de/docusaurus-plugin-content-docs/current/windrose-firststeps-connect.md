---
id: windrose-firststeps-connect
title: "Windrose: Mit dem Server verbinden"
description: "Lerne, wie du dich mit deinem Windrose-Server über den richtigen Einladungscode verbindest und eine stabile Serververbindung ohne häufige Verbindungsprobleme herstellst -> Jetzt mehr erfahren"
sidebar_label: Mit Server verbinden
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du bist dir unsicher, wie du dich mit deinem **Hytale** Gameserver verbindest oder was du dafür brauchst? Kein Problem, wir helfen dir weiter! Wir zeigen dir alles, was du wissen musst – von den benötigten Tools und Infos bis hin zum eigentlichen Verbindungsprozess und wichtigen Hinweisen für eine reibungslose Verbindung. Folge unserer Anleitung und du bist im Handumdrehen verbunden!

## Serverdetails besorgen
Bevor du dich verbindest, musst du die relevanten Serverinformationen aus deinem ZAP-Hosting Gameserver-Webinterface holen. Für Windrose ist der wichtigste Wert der **Einladungscode**.

Diesen findest du in deiner Gameserver-Verwaltung unter den Server-Konfigurationsdateien in `InviteCode.txt`.

:::info Einladungscode erforderlich
Für Windrose ist der Einladungscode der Schlüsselwert, um dich mit dem Server zu verbinden. Wenn du einen falschen oder veralteten Code benutzt, kann die Verbindung fehlschlagen.
:::

Folgende Informationen sind vor dem Start nützlich:

| Information | Zweck |
| --- | --- |
| Inhalt von `InviteCode.txt` | Wird benötigt, um dich mit dem Windrose-Server zu verbinden |
| Servername | Hilft dir, den richtigen Server zu identifizieren |
| Optionales Serverpasswort | Kann je nach Konfiguration erforderlich sein |

![](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

## Serververbindung herstellen
Sobald du deinen Einladungscode hast, kannst du dich direkt über das Spiel mit dem Windrose-Server verbinden.

### Einladungscode in der Serververwaltung finden
Öffne dein ZAP-Hosting Gameserver-Webinterface und navigiere zum Bereich der Serverkonfiguration. Suche die Datei `InviteCode.txt` und öffne sie.

In dieser Datei findest du den aktuellen Einladungscode für deinen Server. Kopiere diesen Wert genau so, wie er angezeigt wird.

:::note Platzhalterwerte
Wenn du in dieser Anleitung einen Wert wie `[your_invite_code]` siehst, ersetze ihn durch den tatsächlichen Code aus deiner eigenen `InviteCode.txt`.
:::

### Im Spiel Windrose dem Server beitreten
Starte Windrose und öffne das Serververbindungs- oder Mehrspieler-Menü. Suche die Option, um einem Server per Einladungscode beizutreten.

Gib den Einladungscode aus `InviteCode.txt` in das entsprechende Feld ein und bestätige die Verbindung. Falls dein Server geschützt ist, wirst du eventuell auch nach einem Passwort gefragt.

| Feld | Eingabe |
| --- | --- |
| Einladungscode | `[your_invite_code]` |
| Passwort | `[your_server_password]`, falls konfiguriert |

Nach Eingabe des Einladungscodes sollte das Spiel die Verbindung zu deinem Windrose-Server herstellen.

:::tip Code exakt kopieren
Um Verbindungsprobleme zu vermeiden, kopiere den Einladungscode am besten direkt aus der Datei `InviteCode.txt`. Schon ein kleiner Tippfehler kann die Verbindung verhindern.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/t3R6by5GrswnZsQ/download)

## Mögliche Probleme und Lösungen
Wenn die Serververbindung nicht sofort klappt, kannst du die häufigsten Ursachen hier prüfen.

### Einladungscode funktioniert nicht
Wenn der Einladungscode abgelehnt wird, überprüfe zuerst, ob du den kompletten Inhalt von `InviteCode.txt` korrekt kopiert hast. Achte darauf, dass keine Leerzeichen vor oder nach dem Code sind.

Es kann auch sein, dass sich der Einladungscode nach einem Serverneustart, Update oder einer Konfigurationsänderung geändert hat. Öffne in dem Fall `InviteCode.txt` erneut und nutze den aktuellen Wert.

### Server ist noch nicht bereit
Wenn der Server noch startet oder die Initialisierung nicht abgeschlossen ist, können Spieler sich trotz korrektem Einladungscode nicht verbinden.

Prüfe die Serverkonsole und Logs in deiner Gameserver-Verwaltung, um sicherzustellen, dass der Server erfolgreich gestartet ist und vollständig online ist.

:::caution Warte auf vollständigen Start
Versuche nicht, dich zu verbinden, während der Server noch lädt oder neu startet. Das führt sonst zu fehlgeschlagenen Verbindungsversuchen, auch wenn der Einladungscode korrekt ist.
:::

### Konfigurations- oder Dateiprobleme
Wenn der Server weiterhin nicht erreichbar ist, kann eine fehlerhafte Konfiguration oder beschädigte Dateien den Start verhindern. Überprüfe in dem Fall kürzliche Änderungen am Server und sieh dir die Logs auf Fehler an.

Falls nötig, stelle ein funktionierendes Backup wieder her oder mache die letzten Konfigurationsänderungen rückgängig.

### Keine Lösung gefunden oder unklar
Wenn du dich nach Prüfung von Einladungscode, Serverstatus und Konfiguration immer noch nicht verbinden kannst, kontaktiere den ZAP-Hosting Support über die offizielle [Support-Seite](https://zap-hosting.com/en/customer/support/).

Gib bei der Anfrage möglichst viele Details an, zum Beispiel:

- Das genaue Problem, das du hast
- Ob der Server erfolgreich startet
- Ob der Einladungscode in `InviteCode.txt` sichtbar ist
- Relevante Fehlermeldungen aus Konsole oder Logs

## Fazit
Glückwunsch, du hast dich erfolgreich mit deinem Windrose-Server über den Einladungscode verbunden. Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung! 🙂