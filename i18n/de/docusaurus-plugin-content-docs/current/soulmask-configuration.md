---
id: soulmask-configuration
title: "Soulmask: Serverkonfiguration"
description: "Entdecke, wie du die Soulmask-Servereinstellungen anpassen und Gameplay-Konfigurationen für ein maßgeschneidertes Spielerlebnis optimieren kannst → Jetzt mehr erfahren"
sidebar_label: Serverkonfiguration
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Soulmask-Server bieten eine Vielzahl von Konfigurationsparametern, die du ganz nach deinem Geschmack anpassen kannst. In dieser Anleitung schauen wir uns alle aktuell verfügbaren Konfigurationsparameter an und erklären sie im Detail.

<InlineVoucher />

## Zugriff auf deine Konfigurationsdatei

Zuerst musst du auf deine Konfigurationsdateien zugreifen, um irgendwelche Parameter zu bearbeiten. Deine Servereinstellungen kannst du über das Webinterface anpassen, während die Gameplay-Einstellungen per FTP bearbeitet werden.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Über Webinterface" default>

#### Über Webinterface

Der Hauptweg, um auf deine Serverkonfigurationsoptionen zuzugreifen, führt über den Bereich **Einstellungen** im Webinterface deines Gameservers. Dort findest du die passenden Einstellungen, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="ftp" label="Über FTP">

#### Über FTP

:::note
Der Server muss gestoppt sein, bevor die Konfiguration bearbeitet wird. Änderungen werden sonst beim Neustart rückgängig gemacht.
:::

Der Hauptweg, um auf deine Gameplay-Konfigurationsdatei zuzugreifen, ist über FTP. Falls du mit FTP noch nicht vertraut bist, empfehlen wir dir einen Blick in die [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung.

</TabItem>
</Tabs>

## Serverkonfigurationsoptionen
In den folgenden Abschnitten zeigen wir dir, wie du auf die Konfigurationsoptionen zugreifst und stellen einige der verfügbaren Einstellungen für Server- und Gameplay-Optionen vor.

### Wichtige Servereinstellungen

Derzeit kannst du Servereinstellungen nur über den Bereich **Einstellungen** im Webinterface deines Gameservers anpassen. Dort kannst du folgende Optionen einstellen:

| Parametername        | Beispiel              | Beschreibung                                           |
| -------------------- | --------------------- | ----------------------------------------------------- | 
| Servername           | ZAP-Hosting Docs Test | Lege den Namen deines Servers fest                     |
| Gameserver Passwort  | iLoveZAP!2024         | Setze ein Passwort für deinen Server oder lasse es leer für keines |
| Admin Passwort       | iLoveZAP!2024         | Setze ein Passwort für den Admin-Zugang                |
| Spielmodus           | PVE/PVP               | Wähle, ob dein Spiel PVE oder PVP sein soll            |

Wenn du fertig bist, vergiss nicht, unten auf den Speichern-Button zu klicken und deinen Server neu zu starten.

### Gameplay-Konfigurationseinstellungen

Aktuell kannst du die Konfigurationsdatei nur über FTP erreichen. Achte darauf, deinen Server vor dem Bearbeiten zu stoppen, sonst werden Änderungen wahrscheinlich nicht übernommen.

Navigiere zum folgenden Pfad und öffne die Datei **GameXishu.json**:
```
../soulmask/WS/Saved/GameplaySettings
```

Diese Datei enthält eine Vielzahl an Gameplay-Konfigurationsoptionen, die du nach Belieben anpassen kannst.

Nachdem du deine Änderungen abgeschlossen hast, speichere die Datei und starte deinen Server neu. Beim nächsten Start verwendet dein Server dann die von dir eingestellten Werte.

<InlineVoucher />