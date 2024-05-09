---
id: palworld-rcon
title: "Palworld: Server RCON verwenden"
description: Informationen, wie du RCON mit deinem Palworld-Server von ZAP-Hosting verwendest, um deinen Server zu verwalten - ZAP-Hosting.com Dokumentation
sidebar_label: RCON
---

## Was ist RCON?

RCON ist eine Schnittstelle in verschiedenen Programmen, wie also auch Gameservern, mit der Fernwartungen wie auch Fernverwaltungen durchgeführt werden können. Mit dieser Schnittstelle können Server verwaltet werden, die bereits laufen und erreichbar sind. Mit einem bestimmten Fernwartungsprogramm kann dann auf die Schnittstelle zugegriffen werden und der Server somit verwaltet werden.

## Zugriff auf deine Konfigurationsdatei

Um RCON nutzen zu können, musst du zunächst auf die Konfiguration deines Servers zugreifen und diese Funktion aktivieren. Du kannst die Konfigurationsdatei entweder über das Webinterface deines Servers oder direkt über FTP bearbeiten.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="configs" label="Über die WI-Konfigurationsdatei">

#### Über die Webinterface-Konfigurationsdatei

Wir empfehlen, diese Methode zu verwenden, da sie am einfachsten ist. 

:::note
Der Server muss gestoppt werden, bevor die Konfigurationsdatei bearbeitet werden kann. Wenn die Konfigurationsdatei erst bearbeitet und der Server neu gestartet wird, werden sämtliche Änderungen rückgängig gemacht.
:::

Gehe einfach zum Abschnitt **Configs** im Webinterface deines Gameservers und klicke auf die blaue Schaltfläche Datei bearbeiten, wie unten zu sehen:

![image](https://github.com/zaphosting/docs/assets/42719082/53c8acad-7347-4c3e-85bf-5ae0ad423fc6)

Es öffnet sich ein Texteditor, mit dem du die Datei direkt bearbeiten kannst. Suche in der Datei nach dem Parameter `RCONEnabled` und setze ihn auf `True`, zum Beispiel: `RCONEnabled=True`. Wir empfehlen dir, die Suchfunktion deines Browsers mit der Tastenkombination `CTRL+F` zu öffnen, um dir dabei zu helfen.

Direkt daneben befindet sich der Parameter `RCONPort`. Das ist der RCON-Schnittstellenport, den du später für die Verbindung verwenden wirst.

![image](https://github.com/zaphosting/docs/assets/42719082/40dbb8ae-a75d-47b9-96d5-3af0519b62ac)

:::note
Wir raten dir, diesen Wert für deinen Gameserver nicht zu ändern, da er vordefiniert ist und eine Änderung die Funktionalität beeinträchtigen kann. Bei selbst gehosteten Palworld-Servern auf VPS-Produkten kannst du diesen Wert ändern, musst aber sicherstellen, dass du den ausgewählten Port weiterleitest.
:::

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Über FTP

:::note
Der Server muss gestoppt werden, bevor die Konfigurationsdatei bearbeitet werden kann. Wenn die Konfigurationsdatei erst bearbeitet und der Server neu gestartet wird, werden sämtliche Änderungen rückgängig gemacht.
:::

Eine andere Möglichkeit, deine Konfigurationsdatei zu bearbeiten, ist über FTP. Wenn du dich mit der Verwendung von FTP nicht auskennst, empfehlen wir dir, einen Blick in die Anleitung [Zugriff per FTP](gameserver-ftpaccess.md) zu werfen. Diese Methode dauert jedoch länger und wenn du die Dateiinhalte direkt bearbeiten möchtest, empfehlen wir dir, wie bereits erwähnt, den Bereich **Configs** im Webinterface deines Gameservers zu verwenden.

Sobald du dich per FTP mit deinem Server verbunden hast, gehst du in das folgende Verzeichnis:
```
../Pal/Saved/Config/WindowsServer/ # Für Windows
../Pal/Saved/Config/LinuxServer/ # Für Linux
```

Finde die Datei `PalWorldSettings.ini` und öffne sie. Suche in der Datei nach dem Parameter `RCONEnabled` und setze ihn auf `true`, zum Beispiel: `RCONEnabled=True`.

Direkt daneben gibt es auch einen Parameter `RCONPort`. Das ist der RCON-Schnittstellenport, den du später für die Verbindung verwenden wirst.

:::note
Wir raten dir, diesen Wert für deinen Gameserver nicht zu ändern, da er vordefiniert ist und eine Änderung die Funktionalität beeinträchtigen kann. Bei selbst gehosteten Palworld-Servern auf VPS-Produkten kannst du diesen Wert ändern, musst aber sicherstellen, dass du den ausgewählten Port weiterleitest.
:::

</TabItem>
</Tabs>

:::info
Achte darauf, dass du deinen Server neu startest, wenn du deine Konfigurationsdetails angepasst hast.
:::

## RCON verwenden

Jetzt, wo du RCON in der Konfiguration deines Servers aktiviert hast, kannst du über den in der Datei definierten Port auf die RCON-Schnittstelle von Palworld zugreifen.

Du musst ein RCON-Programm verwenden, um dich damit zu verbinden. Wir empfehlen [RCON Console](https://sourceforge.net/projects/rconconsole/), da es Open-Source ist.

In dem RCON-Programm deiner Wahl musst du die IP-Adresse deines Servers und den RCON-Port eingeben, der in der Konfigurationsdatei festgelegt wurde. Stelle sicher, dass dein Gameserver online ist und läuft.

:::tip
Achte darauf, dass du den RCON-Port eingibst, den du in der Konfigurationsdatei gesehen hast, und nicht den Port, über den du dich mit deinem Server verbindest. Dies ist ein häufiger Fehler.
:::

Wenn die Verbindung erfolgreich ist, kannst du jetzt über das von dir gewählte RCON-Konsolenprogramm Befehle an deinen Palworld-Server senden. 

:::tip
In unserer [Palworld Server-Befehle Anleitung](palworld-server-commands.md) findest du alle derzeit verfügbaren Befehle, die du über RCON ausführen kannst.
:::

Du hast RCON erfolgreich auf deinem Palworld-Server aktiviert.