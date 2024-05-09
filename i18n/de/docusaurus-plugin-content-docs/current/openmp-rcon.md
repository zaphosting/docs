---
id: openmp-rcon
title: "Open.mp: Server mit RCON"
description: Informationen darüber, wie du RCON mit deinem Open.mp-Server von ZAP-Hosting verwendest, um deinen Server zu verwalten - ZAP-Hosting.com Dokumentation
sidebar_label: RCON
---

## Was ist RCON?

RCON ist eine Schnittstelle in verschiedenen Programmen, wie z.B. Spieleservern, mit der Fernwartung und Fernadministration durchgeführt werden kann. Mit dieser Schnittstelle können Server verwaltet werden, die bereits laufen und erreicht werden können. Die Schnittstelle kann dann mit einem bestimmten Fernwartungsprogramm aufgerufen und der Server so verwaltet werden.

## Zugriff auf deine Konfigurationsdatei

Um RCON nutzen zu können, musst du zunächst auf die Konfiguration deines Servers zugreifen und diese Funktion aktivieren. Du kannst die Konfigurationsdatei entweder über das Webinterface deines Servers oder direkt über FTP bearbeiten.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="configs" label="Über die WI-Konfigurationsdatei">

#### Über die Webinterface-Konfigurationsdatei

Wir empfehlen, diese Methode zu verwenden, da sie am einfachsten ist. 

:::note
Der Server muss angehalten werden, bevor die Config bearbeitet werden kann. Wenn du die Config bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Gehe einfach zum Abschnitt **Configs** im Webinterface deines Gameservers und klicke auf die blaue Schaltfläche Datei bearbeiten, wie unten zu sehen:

![image](https://github.com/zaphosting/docs/assets/42719082/60a922ab-0ca3-4248-b936-3ce43ba8bd5f)

Es öffnet sich ein Texteditor, mit dem du die Datei direkt bearbeiten kannst. Suche in der Datei nach dem Abschnitt "rcon". Setze hier den Parameter `enable` auf `true`, zum Beispiel: `"enable":true`. Wir empfehlen dir, die Suchfunktion deines Browsers mit der Tastenkombination "STRG+F" zu öffnen, um dir dabei zu helfen.

Im selben Abschnitt solltest du auch ein Passwort für den Zugriff auf die RCON-Schnittstelle einrichten, indem du den Parameter `password` anpasst. Dies verhindert unbefugten Zugriff und sollte geheim gehalten werden.

![image](https://github.com/zaphosting/docs/assets/42719082/d3fbb8ac-b836-4e12-a7cf-d1b4961925d7)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Über FTP

:::note
Der Server muss angehalten werden, bevor die Konfiguration bearbeitet werden kann. Wenn du die Konfiguration bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Eine andere Möglichkeit, deine Konfigurationsdatei zu bearbeiten, ist über FTP. Wenn du dich mit der Verwendung von FTP nicht auskennst, empfehlen wir dir, einen Blick in die Anleitung [Zugriff per FTP](gameserver-ftpaccess.md) zu werfen. Diese Methode dauert jedoch länger und wenn du die Dateiinhalte direkt bearbeiten möchtest, empfehlen wir dir, wie bereits erwähnt, den Bereich **Configs** im Webinterface deines Gameservers zu verwenden.

Sobald du dich per FTP mit deinem Server verbunden hast, gehst du in das folgende Verzeichnis:
```
..g[zap_id]/gta-openmp/
```

Unter diesem Pfad findest du die Datei "config.json" und öffnest sie. Dies ist die Serverkonfigurationsdatei, die du bearbeiten solltest.

Suche in der Datei nach dem Abschnitt "rcon". Setze den Parameter `enable` auf `true` und gib mit dem Parameter `password` ein Passwort für deine RCON-Schnittstelle an.

</TabItem>
</Tabs>

:::info
Stelle sicher, dass du deinen Server neu startest, nachdem du deine Konfigurationsdetails angepasst hast.
:::

## RCON verwenden

Nachdem du RCON in der Konfiguration deines Servers aktiviert hast, kannst du über den in der Datei definierten Port auf die RCON-Schnittstelle von Open.mp zugreifen.

Du musst ein RCON-Programm verwenden, um dich damit zu verbinden. Wir empfehlen [RCON Console] (https://sourceforge.net/projects/rconconsole/), da es Open-Source ist.

In dem RCON-Programm deiner Wahl musst du die IP-Adresse und den Port deines Servers eingeben. Stelle sicher, dass dein Gameserver online ist und läuft.

Wenn die Verbindung erfolgreich ist, kannst du nun über das RCON-Konsolenprogramm deiner Wahl Befehle an deinen Palworld-Server senden. 

:::tip
In unserer [Open.mp server commands Anleitung](openmp-server-commands.md) findest du alle derzeit verfügbaren Befehle, die du über RCON ausführen kannst.
:::

Du hast RCON erfolgreich auf deinem Palworld-Server aktiviert.