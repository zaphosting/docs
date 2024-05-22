---
id: moe-configuration
title: "Myth of Empires: Server-Konfiguration"
description: Informationen zur Konfiguration eines Myth of Empires Gameservers von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Server Konfiguration
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Einführung
Myth of Empires enthält eine Vielzahl von Konfigurationsoptionen, die es dir ermöglichen, deinen Server nach deinen Wünschen zu gestalten. In dieser Anleitung gehen wir auf einige der derzeit verfügbaren Konfigurationsparameter ein und erklären sie genauer.
<YouTube videoId="a-tZnWIpOSg" title="Setup Myth Of Empires server in just a MINUTE!" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst?  Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

## Zugriff auf deine Konfigurationsdatei

Zunächst musst du auf deine Konfigurationsdatei zugreifen, um die Parameter zu bearbeiten. Es gibt mehrere Möglichkeiten, diese Datei zu bearbeiten.

:::tip
Wir empfehlen dir, die **Webinterface**-Methode zu verwenden, da MOE eine große Anzahl von Konfigurationsoptionen und Konfigurationsdateien hat. Das bedeutet, dass die Einrichtung viel länger dauert, als wenn du die Werte direkt über das Webinterface bearbeitest.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Einstellungen" label="Über Webinterface" default>

#### Über Webinterface

Die benutzerfreundlichste Methode ist es, im Webinterface deines Gameservers in den Bereich **Einstellungen** zu gehen und dort nach den entsprechenden Einstellungen zu suchen, wie unten zu sehen:

![image](https://screensaver01.zap-hosting.com/index.php/s/cGbSnRp5gfbWnnb/preview)

Du wirst eine Vielzahl von Abschnitten und Einstellungen sehen, in denen du die Werte direkt bearbeiten kannst.

</TabItem>

<TabItem value="configs" label="Über die WI-Konfigurationsdatei">

#### Über die WI-Konfigurationsdatei

:::note
Der Server muss angehalten werden, bevor die Config bearbeitet werden kann. Wenn du die Config bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Wenn du die Konfigurationsdateien direkt bearbeiten möchtest, kannst du sie auch im Webinterface deines Gameservers im Bereich **Configs** aufrufen. Um eine Konfigurationsdatei zu bearbeiten, drückst du einfach auf die blaue Schaltfläche "Datei bearbeiten", wie unten zu sehen:

![image](https://screensaver01.zap-hosting.com/index.php/s/gjcg4DC5XkxAni6/preview)

Dadurch wird ein Texteditor direkt auf der Seite geöffnet, mit dem du die Datei bearbeiten kannst.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Über FTP

:::note
Der Server muss angehalten werden, bevor die Konfiguration bearbeitet werden kann. Wenn du die Konfiguration bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Die letzte Methode, um auf die Rohdatei zuzugreifen, ist über FTP. Wenn du dich mit der Verwendung von FTP nicht auskennst, empfehlen wir dir, einen Blick in die Anleitung [Zugriff per FTP](gameserver-ftpaccess.md) zu werfen. Diese Methode dauert jedoch länger und wenn du den Inhalt der Datei direkt bearbeiten möchtest, empfehlen wir dir, wie bereits erwähnt, den Bereich **Einstellungen** im Webinterface deines Gameservers zu verwenden.

</TabItem>
</Tabs>

## Optionen für die Serverkonfiguration

Hier haben wir einige der zentralen und wichtigen Serverkonfigurationsoptionen herausgesucht, die du wahrscheinlich ändern möchtest, einschließlich einiger interner Einstellungen.

:::tip
Wir raten davon ab, die Einstellungen für Port, IP oder Verzeichnis zu ändern, da diese automatisch vom Gameserver konfiguriert werden. Wenn du diese Werte änderst, kann es passieren, dass dein Gameserver kaputt geht!
:::

| Parametername | Beispiel                    | Beschreibung                                     |
| ------------- | --------------------------- | ------------------------------------------------ | 
| name          | ZAP-Hosting Docs Test       | Name deines Servers                              |
| password      | iLoveZAP!2024               | Sperre den Server hinter einem Passwort (privat) |
| description   | Dies ist ein cooler Server! | Füge eine Beschreibung für deinen Server hinzu   |
| gamemode      | PVE / PVP                   | Setze den Gamemode für deinen Server             |
| mapname       | Central Island              | Lege die Karte für deinen Server fest            |
| difficulty    | 1                           | Schwierigkeit deiner Welt                        |

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an der richtigen Stelle und starte deinen Server neu. Wenn dein Server das nächste Mal startet, verwendet er die Einstellungen, die du vorgenommen hast.