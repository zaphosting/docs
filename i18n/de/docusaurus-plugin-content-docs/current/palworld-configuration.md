---
id: palworld-configuration
title: "Palworld: Palworld Server-Konfiguration"
description: "Entdecke, wie du die Palworld Server-Einstellungen für ein maßgeschneidertes Spielerlebnis anpassen und dein Gameplay optimieren kannst → Jetzt mehr erfahren"
sidebar_label: Server-Konfiguration
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Palworld Gameserver bieten eine Vielzahl an Konfigurationsparametern, die du ganz nach deinem Geschmack anpassen kannst. In dieser Anleitung schauen wir uns alle aktuell verfügbaren Konfigurationsparameter an und erklären sie dir im Detail.
<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/LsRSG5MHK9PyQZF/preview" title="Palworld Server in nur EINER MINUTE einrichten!" description="Lernst du besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art und Weise Infos aufsaugst!"/>

<InlineVoucher />

## Zugriff auf deine Konfigurationsdatei

Zuerst musst du auf deine Konfigurationsdatei zugreifen, um irgendwelche Parameter zu bearbeiten. Es gibt mehrere Wege, diese Datei zu editieren.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Über Webinterface" default>

#### Über Webinterface

Die benutzerfreundlichste Methode ist, im **Einstellungen**-Bereich deines Gameserver-Webinterfaces nach den passenden Einstellungen zu suchen, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Über WI Konfigurationsdatei">

#### Über WI Konfigurationsdatei

:::note
Der Server muss gestoppt sein, bevor die Konfig bearbeitet werden kann. Änderungen an der Konfig und ein anschließender Neustart ohne Speichern führen dazu, dass alle Änderungen verloren gehen.
:::

Alternativ, wenn du die Rohdatei direkt bearbeiten möchtest, kannst du im **Configs**-Bereich deines Gameserver-Webinterfaces auf den blauen „Datei bearbeiten“-Button klicken, wie hier zu sehen:

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Das öffnet einen Texteditor direkt auf der Seite, mit dem du die Datei bearbeiten kannst.

</TabItem>

<TabItem value="ftp" label="Über FTP">


#### Über FTP

:::note
Der Server muss gestoppt sein, bevor die Konfig bearbeitet werden kann. Änderungen an der Konfig und ein anschließender Neustart ohne Speichern führen dazu, dass alle Änderungen verloren gehen.
:::

Die letzte Möglichkeit, auf die Rohdatei zuzugreifen, ist über FTP. Falls du mit FTP nicht vertraut bist, empfehlen wir dir, einen Blick in unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung zu werfen. Diese Methode dauert allerdings länger und wenn du die Datei direkt bearbeiten willst, empfehlen wir dir, einfach den **Configs**-Bereich im Gameserver-Webinterface zu nutzen, wie oben beschrieben.

</TabItem>
</Tabs>

## Server-Konfigurationsoptionen

### Crossplay-Unterstützung aktivieren

Palworld Dedicated Server unterstützen mehrere Plattformen, sodass du Crossplay nutzen kannst. Standardmäßig ist die Steam-Plattform eingestellt. Wenn du Support für Xbox, PS5 und Mac aktivieren möchtest, kannst du das in der Gameserver-Verwaltung unter den Einstellungen machen.

![img](https://screensaver01.zap-hosting.com/index.php/s/nD5kBoNH2JBfoxF/preview)

:::info
Crossplay zwischen Steam & Microsoft Store/Xbox-Versionen ist aktuell noch nicht möglich. Dein Server kann entweder für Steam oder für Microsoft Store/Xbox eingestellt werden.
:::

:::info
Auf Xbox-Konsolen kannst du dich nicht direkt über die IP-Adresse verbinden. Wenn du also auf Xbox spielen willst, musst du deinen Dedicated Server öffentlich machen.

Außerdem solltest du einen Servernamen wählen, der leicht gefunden wird. Schau dir dazu unsere [Server-Konfiguration](palworld-configuration.md) Anleitung an.
:::

### Wichtige Server-Einstellungen

Diese Server-Konfigurationsoptionen sind essenziell, um dein Serverlisting anzupassen, es mit Passwörtern zu schützen und weitere interne Einstellungen vorzunehmen.

:::tip
Wir empfehlen nicht, den Port oder die IP-Einstellungen zu ändern, da diese automatisch vom Gameserver konfiguriert werden. Änderungen an IP/Port können deinen Gameserver kaputt machen!
:::

| Parametername                 | Beispiel                               | Beschreibung                                               |
| ---------------------------- | ------------------------------------- | --------------------------------------------------------- | 
| ServerPlayerMaxNum            | 4                                     | Maximale Anzahl an Spielern, die dem Server beitreten können (max. 32) |
| ServerName                   | ZAP-Hosting Docs Test                 | Name deines Servers                                       |
| ServerDescription            | Dies ist ein Server, den wir testen   | Beschreibung deines Servers                               |
| AdminPassword                | ctRQvhPAWVHq                        | Admin-Passwort für Admin-Befehle                          |
| ServerPassword               | iLoveZAP!2024                       | Passwortschutz für den Server (privat)                    |
| PublicPort                   | 8211 (Standard)                      | Öffentlicher Port, auf dem der Server läuft               |
| PublicIP                     | 123.123.123.123                     | Öffentliche IP-Adresse des Servers                         |
| RCONEnabled                  | true                                | RCON-Nutzung aktivieren/deaktivieren                      |
| RCONPort                     | 8222                                | Portnummer für RCON                                       |

Nachdem du deine Änderungen abgeschlossen hast, speichere die Datei an der richtigen Stelle und starte deinen Server neu. Beim nächsten Start verwendet dein Server die von dir angegebenen Einstellungen.

### Gameplay-Konfigurationseinstellungen

Diese Server-Konfigurationsoptionen sind weniger kritisch und dienen hauptsächlich dazu, das Gameplay und den Fortschritt sowie die Karte und Welt, in der du spielst, anzupassen.

| Parametername                   | Beschreibung                                      | 
| ------------------------------ | ------------------------------------------------ | 
| DayTimeSpeedRate               | Geschwindigkeit der Zeit während des Tages       |
| NightTimeSpeedRate             | Geschwindigkeit der Zeit während der Nacht       |
| ExpRate                      | Rate, mit der du Erfahrung (XP) erhältst          |
| PalCaptureRate               | Rate, mit der du Pals einfängst                    |
| PalSpawnNumRate              | Spawnrate der Pals                                 |
| PalDamageRateAttack          | Schadensmultiplikator von Pals                     |
| PalDamageRateDefense         | Schadensmultiplikator gegen Pals                   |
| PlayerDamageRateAttack       | Schadensmultiplikator von Spielern                 |
| PlayerDamageRateDefense      | Schadensmultiplikator gegen Spieler                 |
| PlayerStomachDecreaceRate    | Hungerabbau-Rate des Spielers                       |
| PlayerStaminaDecreaceRate    | Ausdauerabbau-Rate des Spielers                     |
| PlayerAutoHPRegeneRate       | Automatische HP-Regeneration des Spielers           |
| PlayerAutoHpRegeneRateInSleep | HP-Regeneration des Spielers im Schlaf              |
| PalStomachDecreaceRate       | Hungerabbau-Rate der Pals                            |
| PalStaminaDecreaceRate       | Ausdauerabbau-Rate der Pals                          |
| PalAutoHPRegeneRate          | Automatische HP-Regeneration der Pals                |
| PalAutoHpRegeneRateInSleep   | HP-Regeneration der Pals im Schlaf (im Palbox)       |
| BuildObjectDamageRate        | Schadensmultiplikator an Strukturen                   |
| BuildObjectDeteriorationDamageRate | Abnutzungsrate von Strukturen                      |
| CollectionDropRate           | Multiplikator für sammelbare Items                    |
| CollectionObjectHpRate       | HP-Multiplikator für sammelbare Objekte               |
| CollectionObjectRespawnSpeedRate | Respawn-Intervall für sammelbare Objekte           |
| EnemyDropItemRate            | Multiplikator für gedroppte Items                      |
| DeathPenalty                 | Todesstrafe (Keine/Item)                              |
| GuildPlayerMaxNum            | Maximale Spieleranzahl in einer Gilde                  |
| PalEggDefaultHatchingTime    | Zeit (in Stunden) zum Ausbrüten eines großen Eies      |

Nachdem du deine Änderungen abgeschlossen hast, speichere die Datei an der richtigen Stelle und starte deinen Server neu. Beim nächsten Start verwendet dein Server die von dir angegebenen Einstellungen.

<InlineVoucher />