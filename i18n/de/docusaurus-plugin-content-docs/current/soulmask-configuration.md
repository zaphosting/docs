---
id: soulmask-configuration
title: "Soulmask: Server-Konfiguration"
description: Informationen zur Konfiguration eines Soulmask-Spielservers von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Server-Konfiguration
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Soulmask-Server verfügen über eine Vielzahl von Konfigurationsparametern, die du nach deinen Wünschen anpassen kannst. In dieser Anleitung gehen wir auf alle derzeit verfügbaren Konfigurationsparameter ein und erklären sie genauer.

<InlineVoucher />

## Zugriff auf deine Konfigurationsdatei

Zunächst musst du auf deine Konfigurationsdateien zugreifen, um die Parameter zu bearbeiten. Du kannst deine Servereinstellungen über das Webinterface und deine Spieleinstellungen über FTP anpassen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Einstellungen" label="Über Webinterface" default>

#### Über das Webinterface

Die wichtigste Methode, um auf die Konfigurationsoptionen deines Servers zuzugreifen, ist, im Webinterface deines Spieleservers in den Bereich **Einstellungen** zu gehen und dort nach den entsprechenden Einstellungen zu suchen, wie unten zu sehen:

![image](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Über FTP

:::note
Der Server muss angehalten werden, bevor die Konfiguration bearbeitet werden kann. Wenn du die Konfiguration bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Die wichtigste Methode, um auf die Konfigurationsdatei deines Spiels zuzugreifen, ist FTP. Wenn du mit der Verwendung von FTP nicht vertraut bist, empfehlen wir dir, einen Blick in die Anleitung [FTP-Dateizugriff](gameserver-ftpaccess.md) zu werfen.

</TabItem>
</Tabs>

## Optionen für die Serverkonfiguration
In den folgenden Abschnitten erfahren wir, wie du auf die Konfigurationsoptionen zugreifen kannst und welche Konfigurationsoptionen für Server- und Spieleinstellungen zur Verfügung stehen.

### Wichtige Servereinstellungen

Derzeit kannst du die Servereinstellungen nur über den Bereich **Einstellungen** im Webinterface deines Spieleservers anpassen. In diesem Bereich kannst du die folgenden Einstellungen vornehmen:

| Parametername | Beispiel | Beschreibung |
| -------------------- | --------------------- | ------------------------------------------------------- | 
| Servername | ZAP-Hosting Docs Test | Setze den Namen für deinen Server |
| Game server password | iLoveZAP!2024 | Setze ein Passwort für deinen Server, oder lass es leer, wenn du keins brauchst |
| Admin-Passwort | iLoveZAP!2024 | Setze ein Passwort für den Admin-Zugang |
| Gamemode | PVE/PVP | Wähle aus, ob dein Spiel PVE oder PVP sein soll |

Wenn du fertig bist, benutze den Speichern-Button am unteren Rand des Abschnitts und starte deinen Server neu.

### Einstellungen für die Spielkonfiguration

Im Moment ist die einzige Möglichkeit, auf die Konfigurationsdatei zuzugreifen, FTP. Achte darauf, dass du deinen Server anhältst, bevor du die Datei bearbeitest, sonst werden die Änderungen wahrscheinlich rückgängig gemacht.

Gehe zu dem folgenden Pfad und öffne die Datei **GameXishu.json**:
```
../soulmask/WS/Saved/GameplaySettings
```

Diese Datei enthält eine große Anzahl von Spielkonfigurationsoptionen, die du nach deinen Wünschen anpassen kannst.

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an der richtigen Stelle und starte deinen Server neu. Wenn dein Server das nächste Mal startet, verwendet er die Einstellungen, die du vorgenommen hast.