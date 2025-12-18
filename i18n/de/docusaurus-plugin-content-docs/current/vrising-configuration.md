---
id: vrising-configuration
title: "V Rising: Server-Konfiguration"
description: "Entdecke, wie du die V Rising Server-Einstellungen für optimales Gameplay anpasst und deine Server-Umgebung kontrollierst → Jetzt mehr erfahren"
sidebar_label: Server-Konfiguration
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

V Rising Gameserver bieten eine Vielzahl an Konfigurationsparametern, die du ganz nach deinem Geschmack anpassen kannst. In dieser Anleitung schauen wir uns alle aktuell verfügbaren Konfigurationsoptionen an und erklären sie dir im Detail.

<InlineVoucher />

## Zugriff auf deine Konfigurationsdatei

Zuerst musst du auf deine Konfigurationsdatei zugreifen, um irgendwelche Parameter zu bearbeiten. Es gibt mehrere Wege, diese Datei zu editieren.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Über Webinterface" default>

#### Über Webinterface

Die benutzerfreundlichste Methode ist, im **Einstellungen**-Bereich deines Gameservers im Webinterface die passenden Einstellungen zu suchen, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Über WI Konfigurationsdatei">

#### Über WI Konfigurationsdatei

:::note
Der Server muss gestoppt sein, bevor die Konfiguration bearbeitet wird. Änderungen an der Konfig und ein anschließender Neustart ohne Speichern führen dazu, dass alle Änderungen verloren gehen.
:::

Alternativ, wenn du die Rohdatei direkt bearbeiten möchtest, kannst du im **Configs**-Bereich deines Gameservers im Webinterface auf den blauen „Datei bearbeiten“-Button klicken, wie hier zu sehen:

![](https://screensaver01.zap-hosting.com/index.php/s/3Dg6NCtN9akx8bg/preview)

Dadurch öffnet sich ein Texteditor direkt auf der Seite, mit dem du die Datei bearbeiten kannst.

</TabItem>

<TabItem value="ftp" label="Über FTP">

#### Über FTP

:::note
Der Server muss gestoppt sein, bevor die Konfiguration bearbeitet wird. Änderungen an der Konfig und ein anschließender Neustart ohne Speichern führen dazu, dass alle Änderungen verloren gehen.
:::

Die letzte Möglichkeit, auf die Rohdatei zuzugreifen, ist über FTP. Falls du mit FTP nicht vertraut bist, empfehlen wir dir, einen Blick in die [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung zu werfen. Diese Methode dauert allerdings länger, und wenn du die Datei direkt bearbeiten willst, empfehlen wir dir, einfach den **Configs**-Bereich im Webinterface deines Gameservers zu nutzen.

</TabItem>
</Tabs>

## Server-Konfigurationsoptionen

In den folgenden Abschnitten findest du Tabellen mit Infos zu den verfügbaren Konfigurationsoptionen, sowohl für den Server selbst als auch für Gameplay-Einstellungen.

:::tip
Wir empfehlen nicht, die Port-Einstellungen zu ändern, da diese automatisch vom Gameserver konfiguriert werden. Änderungen an den Ports können deinen Gameserver kaputt machen!
:::

### Wichtige Server-Einstellungen

Dieser Abschnitt fasst die wichtigsten Server-Einstellungen zusammen, die du in der **ServerHostSettings.json** Konfigurationsdatei findest. Für die vollständige Liste der Optionen schau dir die [offizielle GitHub-Anleitung des Spiels](https://github.com/StunlockStudios/vrising-dedicated-server-instructions/blob/master/1.0.x/INSTRUCTIONS.md) an.

| Parameter-Name     | Beispiel                 | Beschreibung                                                                |
| ------------------ | ------------------------ | -------------------------------------------------------------------------- | 
| Name               | ZAP-Hosting Docs Test    | Setzt den Namen deines Servers                                             |
| Description        | ZAP ist der Beste!       | Setzt die Beschreibung deines Servers                                      |
| Port               | 9876 (Standard)          | Legt den Netzwerk-Port fest, den das Spiel verwendet                       |
| QueryPort          | 9877 (Standard)          | Legt den Query-Port fest, der Infos über den Server in der Serverliste liefert |
| MaxConnectedUsers  | 10                       | Legt die maximale Anzahl an Spielern fest, die gleichzeitig auf dem Server sein können |
| MaxConnectedAdmins | 4                        | Legt fest, wie viele Admins einem vollen Server beitreten können           |
| ServerFps          | 30 (empfohlen)           | Legt die Bildrate für deinen Server fest, wir empfehlen den Standardwert   |
| SaveName           | ZAPDocsTest              | Legt den Namen des Welt-Saves fest                                         |
| Password           | iLoveZAP!2024            | Setzt ein Passwort für deinen Server oder lässt es leer für kein Passwort  |
| ListOnMasterServer | true/false               | Legt fest, ob dein Server in der Serverliste angezeigt wird                 |
| AutoSaveCount      | 15                       | Legt fest, wie viele ältere Saves gespeichert werden sollen                |
| AutoSaveInterval   | 600                      | Legt das Intervall zwischen automatischen Saves fest                       |
| RCON Enabled       | true/false               | Aktiviert oder deaktiviert RCON                                            |
| RCON Port          | 25575                    | Legt den RCON-Port fest                                                    |
| RCON Password      | iLoveZAP!2024            | Setzt das Passwort für deine RCON-Verbindung                               |

Nachdem du deine Änderungen gemacht hast, speichere die Datei und starte deinen Server neu. Beim nächsten Start verwendet dein Server die von dir eingestellten Werte.

### Wichtige Gameplay-Konfigurations-Einstellungen

V Rising bietet eine Menge Parameter und Optionen, um das Gameplay anzupassen. In diesem Abschnitt fassen wir die wichtigsten zusammen, die du in der **ServerGameSettings.json** Konfigurationsdatei findest.

| Parameter-Name           | Beispiel                       | Beschreibung                                                                                          |
| ------------------------ | ----------------------------- | ---------------------------------------------------------------------------------------------------- | 
| GameDifficulty           | Normal                        | Legt den Schwierigkeitsgrad für deine Welt fest                                                     |
| GameModeType             | PvP, PvE                      | Legt den Spielmodus für deine Welt fest                                                             |
| CastleDamageMode         | Always, Never, TimeRestricted | Legt fest, wann Burgen beschädigt werden können, mit dem Parameter VSCastle kannst du die Zeit für "TimeRestricted" einstellen |
| PlayerDamageMode         | Always, TimeRestricted        | Legt fest, ob andere Spieler Schaden nehmen können, mit dem Parameter VSPlayer kannst du die Zeit für "TimeRestricted" einstellen |
| PvPProtectionMode        | Short, Medium, Long           | Legt fest, wie lange neue Spieler unverwundbar sind                                                 |
| DeathContainerPermission | Anyone, ClanMembers           | Legt fest, wer Items plündern darf, wenn ein Spieler stirbt                                         |
| CanLootEnemyContainers   | true/false                    | Legt fest, ob ein Spieler die Truhen anderer Spieler plündern darf, die nicht im Clan sind          |
| BloodBoundEquipment      | true/false                    | Legt fest, ob du deine Ausrüstung nach dem Tod behält                                               |
| TeleportBoundItems       | true/false                    | Legt fest, ob Items dich am Teleportieren via Vampire Waygates hindern können                        |
| AllowGlobalChat          | true/false                    | Aktiviert oder deaktiviert den globalen Chat                                                        |

Nachdem du deine Änderungen gemacht hast, speichere die Datei und starte deinen Server neu. Beim nächsten Start verwendet dein Server die von dir eingestellten Werte.

<InlineVoucher />