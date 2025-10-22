---
id: moe-configuration
title: "Myth of Empires: Server-Konfiguration"
description: "Entdecke, wie du deinen Myth of Empires Gameserver für optimales Gameplay und volle Kontrolle anpasst → Jetzt mehr erfahren"
sidebar_label: Server-Konfiguration
services:
  - gameserver-moe
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Myth of Empires bietet eine Vielzahl an Konfigurationsmöglichkeiten, mit denen du deinen Gameserver ganz nach deinen Wünschen anpassen kannst. In dieser Anleitung schauen wir uns einige der aktuell verfügbaren Konfigurationsparameter an und erklären sie dir im Detail.

<YouTube videoId="a-tZnWIpOSg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/GozxMwycZ43y4sm/preview" title="Myth Of Empires Gameserver in nur EINER MINUTE einrichten!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>

<InlineVoucher />

## Zugriff auf deine Konfigurationsdatei

Zuerst musst du auf deine Konfigurationsdatei zugreifen, um Parameter zu bearbeiten. Es gibt mehrere Wege, diese Datei zu editieren.

:::tip
Wir empfehlen dir dringend die **Webinterface**-Methode, da MOE eine große Anzahl an Konfigurationsoptionen und Dateien hat. Das Setup dauert sonst deutlich länger, als wenn du die Werte direkt über das Webinterface änderst.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Über Webinterface" default>

#### Über Webinterface

Die benutzerfreundlichste Methode ist, im **Einstellungen**-Bereich deines Gameservers im Webinterface nach den passenden Optionen zu suchen, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Du findest dort viele verschiedene Sektionen und Einstellungen, in denen du die Werte direkt anpassen kannst.

</TabItem>

<TabItem value="configs" label="Über WI Konfigurationsdatei">

#### Über WI Konfigurationsdatei

:::note
Der Gameserver muss gestoppt sein, bevor die Konfig bearbeitet wird. Änderungen werden sonst beim Neustart überschrieben.
:::

Alternativ kannst du als Nutzer, der die rohen Konfigurationsdateien direkt bearbeiten möchte, im **Configs**-Bereich des Gameserver-Webinterfaces auf diese zugreifen. Um eine Datei zu bearbeiten, klick einfach auf den blauen „Datei bearbeiten“-Button, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/ke6TF9RooBGqawW/preview)

Es öffnet sich ein Texteditor direkt auf der Seite, in dem du die Datei anpassen kannst.

</TabItem>

<TabItem value="ftp" label="Über FTP">

#### Über FTP

:::note
Der Gameserver muss gestoppt sein, bevor die Konfig bearbeitet wird. Änderungen werden sonst beim Neustart überschrieben.
:::

Die letzte Möglichkeit, auf die Rohdatei zuzugreifen, ist über FTP. Falls du mit FTP noch nicht vertraut bist, empfehlen wir dir einen Blick in die [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung. Diese Methode dauert allerdings länger, und wenn du die Datei direkt bearbeiten möchtest, empfehlen wir dir, einfach die **Einstellungen** im Webinterface zu nutzen.

</TabItem>
</Tabs>

## Server-Konfigurationsoptionen

Hier haben wir einige der wichtigsten und zentralen Server-Konfigurationsoptionen herausgepickt, die du wahrscheinlich anpassen möchtest, inklusive einiger interner Einstellungen.

:::tip
Wir raten davon ab, Port-, IP- oder Verzeichnis-Einstellungen zu ändern, da diese automatisch vom Gameserver konfiguriert werden. Änderungen daran können deinen Gameserver zum Absturz bringen!
:::

| Parametername | Beispiel                              | Beschreibung                                              |
| -------------- | ----------------------------------- | -------------------------------------------------------- | 
| name           | ZAP-Hosting Docs Test                | Der Name deines Servers                                  |
| password       | iLoveZAP!2024                       | Sperre den Server mit einem Passwort (privat)           |
| description    | Das ist ein cooler Server!           | Füge eine Beschreibung für deinen Server hinzu          |
| gamemode       | PVE / PVP                          | Lege den Spielmodus für deinen Server fest               |
| mapname        | Central Island                     | Lege die Map für deinen Server fest                       |
| difficulty     | 1                                  | Schwierigkeitsgrad deiner Welt                            |

Nachdem du deine Änderungen abgeschlossen hast, speichere die Datei an der richtigen Stelle und starte deinen Server neu. Beim nächsten Start verwendet dein Server dann die von dir eingestellten Werte.

<InlineVoucher />