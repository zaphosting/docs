---
id: palworld-max-guild-bases
title: "Palworld: Maximalzahl der Gildenbasen"
description: "Erfahre, wie du die maximale Anzahl der Gildenbasen in Palworld änderst, indem du den Wert BaseCampMaxNumInGuild auf deinem Server anpasst. -> Jetzt mehr erfahren"
sidebar_label: "Maximalzahl der Gildenbasen"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld ermöglicht dir, die maximale Anzahl an Basen zu steuern, die jede Gilde auf deinem Server platzieren kann. In dieser Anleitung lernst du, wie du die richtige Konfigurationsdatei im ZAP-Hosting Webinterface manuell bearbeitest, die Einstellung `BaseCampMaxNumInGuild` änderst und die Änderung durch einen Serverneustart aktivierst.



## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Webinterface hast.

:::info Erforderlicher Zugriff
Du benötigst Zugriff auf die Serververwaltung deines Palworld Servers und den Bereich `Configs`, um Konfigurationsdateien bearbeiten zu können.
:::

## Finde die Konfigurationsdatei

Um die maximale Anzahl der Gildenbasen zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

Öffne im ZAP-Hosting Webinterface die Serververwaltung deines Palworld Gameservers und navigiere zu:

`Configs` → `PalWorldSettings.ini`

Diese Datei enthält die wichtigsten Gameplay-Konfigurationswerte für deinen Palworld Server, inklusive Gilden- und Basenlimits.

## Ändere den Wert für maximale Gildenbasen

Suche in der Datei `PalWorldSettings.ini` den Abschnitt `OptionSettings`. Die Einstellung, die du ändern musst, lautet:

`BaseCampMaxNumInGuild=[dein_wert]`

Ersetze `[dein_wert]` durch die Anzahl der Basen, die jede Gilde maximal platzieren darf.

### Beispielkonfiguration

Wenn du z.B. bis zu `6` Basen pro Gilde erlauben möchtest, sollte der Eintrag so aussehen:

```ini
BaseCampMaxNumInGuild=6
```

Falls die Einstellung bereits existiert, ändere nur den Wert. Falls sie fehlt, füge sie innerhalb der bestehenden `OptionSettings`-Parameterliste in der Datei hinzu.

:::note Standard- und Vanilla-Maximum
Aktuelle Referenzwerte zeigen, dass der Standardwert `4` ist und das normale Vanilla-Maximum bei `10` liegt. Werte über `10` werden auf einem unveränderten Palworld Server in der Regel nicht unterstützt.
:::

### Wertreferenz

| Konfigurationsschlüssel | Beschreibung | Standardwert | Vanilla-Maximum |
| --- | --- | --- | --- |
| `BaseCampMaxNumInGuild` | Maximale Anzahl an Basen pro Gilde | `4` | `10` |

:::caution Gültige Werte verwenden
Setze `BaseCampMaxNumInGuild` nur auf einen vernünftigen, unterstützten Wert. Werte über `10` erfordern meist serverseitiges Modding und funktionieren auf einem Standard-Palworld Server möglicherweise nicht korrekt.
:::

## Speichere die Konfiguration

Nachdem du den Wert geändert hast, speichere die Datei `PalWorldSettings.ini` im ZAP-Hosting Konfigurationseditor.

Die neue maximale Gildenbasis-Einstellung ist damit gespeichert, wird aber erst nach einem Serverneustart aktiv.

## Starte den Server neu

Nachdem die Datei gespeichert wurde, starte deinen Palworld Server über die Serververwaltung neu.

Ein Neustart ist notwendig, da Palworld die `PalWorldSettings.ini` Konfiguration nur beim Serverstart einliest. Ohne Neustart wird das neue Limit für Gildenbasen normalerweise nicht angewendet.

### Was du danach tun musst

Nach der Änderung von `BaseCampMaxNumInGuild` sind normalerweise keine weiteren Konsolenbefehle nötig. Nach dem Neustart sollte der neue Wert automatisch aktiv sein.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzliche Befehle ausführen | Nein |

:::tip Teste das neue Limit
Nach dem Neustart kannst du dich mit einer Gilde auf dem Server verbinden und das Basenplatzierungs-Limit testen, um sicherzugehen, dass die neue Einstellung wie gewünscht greift.
:::

## Fehlerbehebung

Falls sich die maximale Anzahl der Gildenbasen nicht ändert, prüfe folgende Punkte.

### Prüfe den Konfigurationseintrag

Stelle sicher, dass `BaseCampMaxNumInGuild` korrekt geschrieben ist und einen numerischen Wert verwendet, z.B.:

```ini
BaseCampMaxNumInGuild=8
```

Ein Tippfehler im Schlüssel oder ein ungültiger Wert verhindern, dass die Einstellung funktioniert.

### Bestätige, dass die Datei gespeichert wurde

Kontrolliere, ob deine Änderungen in `Configs` → `PalWorldSettings.ini` vor dem Neustart gespeichert wurden.

### Server vollständig neu starten

Nach der Änderung ist ein kompletter Serverneustart erforderlich. Wenn du nur die Datei gespeichert hast, aber nicht neu gestartet hast, wird der alte Wert weiterhin verwendet.

### Innerhalb des Vanilla-Limits bleiben

Wenn du einen Wert über `10` setzt, kann der Server diesen ignorieren oder sich unerwartet verhalten, sofern du keine kompatiblen Mods nutzt. Bei einem Standardserver solltest du den Wert bei `10` oder darunter halten.

## Fazit

Glückwunsch, du hast erfolgreich die maximale Anzahl der Gildenbasen auf deinem Palworld Server geändert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂