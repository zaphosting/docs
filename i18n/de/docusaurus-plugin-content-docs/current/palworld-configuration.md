---
id: palworld-configuration
title: 'Palworld: Palworld Server-Konfiguration'
description: Informationen zur Konfiguration eines Palworld Gameservers von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Server Konfiguration
---

Palworld-Server verfügen über eine Vielzahl von Konfigurationsparametern, die du nach deinen Wünschen anpassen kannst. In dieser Anleitung gehen wir auf alle derzeit verfügbaren Konfigurationsparameter ein und erklären sie genauer.

<iframe width="560" height="315" src="https://www.youtube.com/embed/SDZC4-FEdNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Zugriff auf deine Konfigurationsdatei

Zunächst musst du auf deine Konfigurationsdatei zugreifen, um die Parameter zu bearbeiten. Es gibt mehrere Möglichkeiten, diese Datei zu bearbeiten.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Über Webinterface" default>

#### Über Webinterface

Die benutzerfreundlichste Methode ist es, im Webinterface deines Gameservers in den Bereich **Einstellungen** zu gehen und dort nach den entsprechenden Einstellungen zu suchen, wie unten zu sehen:

![image](https://github.com/zaphosting/docs/assets/42719082/98f19443-9e84-42b6-b4e8-a35ae6b802fc)

</TabItem>

<TabItem value="configs" label="Über die WI-Konfigurationsdatei">

#### Über die WI-Konfigurationsdatei

:::note
Der Server muss gestoppt werden, bevor die Konfigurationsdatei bearbeitet werden kann. Wenn die Konfigurationsdatei erst bearbeitet und der Server neu gestartet wird, werden sämtliche Änderungen rückgängig gemacht.
:::

Wenn du die Rohdatei direkt bearbeiten möchtest, kannst du dies auch tun, indem du im Webinterface deines Gameservers in den Bereich **Configs** gehst und auf die blaue Schaltfläche "Datei bearbeiten" klickst, wie unten zu sehen:

![image](https://github.com/zaphosting/docs/assets/42719082/ba2b275b-952f-4a5e-bdc0-5850b4eb5a85)

Dadurch wird ein Texteditor direkt auf der Seite geöffnet, mit dem du die Datei bearbeiten kannst.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Über FTP

:::note
Der Server muss gestoppt werden, bevor die Konfigurationsdatei bearbeitet werden kann. Wenn die Konfigurationsdatei erst bearbeitet und der Server neu gestartet wird, werden sämtliche Änderungen rückgängig gemacht.
:::

Die letzte Methode, um auf die Rohdatei zuzugreifen, ist über FTP. Wenn du dich mit der Verwendung von FTP nicht auskennst, empfehlen wir dir, einen Blick in die Anleitung [FTP-Dateizugriff](gameserver-ftpaccess.md) zu werfen. Diese Methode dauert jedoch länger und wenn du den Inhalt der Datei direkt bearbeiten möchtest, empfehlen wir dir, wie bereits erwähnt, den Bereich **Configs** im Webinterface deines Gameservers zu verwenden.

</TabItem>
</Tabs>

## Server-Konfigurationsoptionen

### Wichtige Servereinstellungen

Dies sind Serverkonfigurationsoptionen, die wichtig sind, um die Auflistung deines Servers anzupassen, ihn durch Passwörter zu schützen und weitere interne Einstellungen vorzunehmen.

:::tip
Wir raten davon ab, die Port- oder IP-Einstellungen zu ändern, da diese automatisch vom Gameserver konfiguriert werden. Wenn du die IP/Port-Werte änderst, kann dein Gameserver möglicherweise kaputt gehen.
:::

| Parametername      | Beispiel                                | Beschreibung                                                               |
| ------------------ | --------------------------------------- | -------------------------------------------------------------------------- | 
| ServerPlayerMaxNum | 4                                       | Die maximale Anzahl der Spieler, die dem Server beitreten können (max. 32) |
| ServerName         | ZAP-Hosting Docs Test                   | Der Name deines Servers                                                    |
| ServerDescription  | Dies ist ein Server, auf dem wir testen | Beschreibung deines Servers                                                |
| AdminPassword      | ctRQvhPAWVHq                            | Das Admin-Passwort, das für Admin-Befehle verwendet wird                   |
| ServerPassword     | iLoveZAP!2024                           | Sperre den Server hinter einem Passwort (privat)                           |
| PublicPort         | 8211 (Standard)                         | Der öffentliche Port, auf dem der Server läuft                             |
| PublicIP           | 123.123.123.123                         | Öffentliche IP, unter der der Server läuft                                 |
| RCONEnabled        | true                                    | Schaltet die Verwendung von RCON ein                                       |
| RCONPort           | 8222                                    | Portnummer, die für RCON verwendet werden soll                             |

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an den entsprechenden Stellen und starte deinen Server neu. Wenn dein Server das nächste Mal startet, verwendet er die Einstellungen, die du vorgenommen hast.

### Gameplay-Konfigurationseinstellungen

Dies sind weniger wichtige Serverkonfigurationsoptionen, mit denen du vor allem das Gameplay und den Spielverlauf sowie die Karte und die Welt, in der du spielst, verändern kannst.

| Parameter Name                     | Beschreibung                                           | 
| ---------------------------------- | ------------------------------------------------------ | 
| DayTimeSpeedRate                   | Legt die Zeitgeschwindigkeit während des Tages fest    |
| NightTimeSpeedRate                 | Legt die Zeitgeschwindigkeit in der Nacht fest         |
| ExpRate                            | Legt die Rate fest, mit der du Erfahrung (XP) erhältst |
| PalCaptureRate                     | Rate, mit der du Kumpels fängst                        |
| PalSpawnNumRate                    | Rate, mit der du Kumpel erlegst                        |
| PalDamageRateAttack                | Schaden durch Kumpel vervielfachen                     |
| PalDamageRateDefense               | Multiplikator für Schaden an Pals                      |
| PlayerDamageRateAttack             | Schaden von Spieler-Multiplikator                      |
| PlayerDamageRateDefense            | Schaden an Spieler-Multiplikator                       |
| PlayerStomachDecreaceRate          | Spieler-Hungerabbaugeschwindigkeit                     |
| PlayerStaminaDecreaceRate          | Rate des Ausdauerabbaus des Spielers                   |
| PlayerAutoHPRegeneRate             | Automatische HP-Regenerationsrate des Spielers         |
| PlayerAutoHpRegeneRateInSleep      | HP-Regenerationsrate des Spielers im Schlaf            |
| PalStomachDecreaceRate             | Pal-Hungerabbaugeschwindigkeit                         |
| PalStaminaDecreaceRate             | Rate des Ausdauerabbaus des Spielers                   |
| PalAutoHPRegeneRate                | Pal automatische HP-Regenerationsrate                  |
| PalAutoHpRegeneRateInSleep         | Pal-Gesundheitsregenerationsrate im Schlaf (in Palbox) |
| BuildObjectDamageRate              | Schaden an Strukturen vervielfachen                    |
| BuildObjectDeteriorationDamageRate | Strukturbestimmungsrate                                |
| CollectionDropRate                 | Multiplikator für erbeutete Gegenstände                |
| CollectionObjectHpRate             | Getherable objects HP multipiler                       |
| CollectionObjectRespawnSpeedRate   | Getherable objects respawn interval                    |
| EnemyDropItemRate                  | Dropped Items Multipiler                               |
| DeathPenalty                       | Todesstrafe (None/Item)                                |
| GuildPlayerMaxNum                  | Maximale Spieleranzahl der Gilde                       |
| PalEggDefaultHatchingTime          | Zeit(h) zum Ausbrüten von massiven Eiern               |

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an den entsprechenden Stellen und starte deinen Server neu. Wenn dein Server das nächste Mal startet, werden die von dir vorgenommenen Einstellungen verwendet.