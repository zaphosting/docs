---
id: openmp-rcon
title: "Open.mp: Server mit RCON steuern"
description: "Entdecke, wie du Gameserver per RCON remote verwaltest für effiziente Serversteuerung und Sicherheit → Jetzt mehr erfahren"
sidebar_label: RCON
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Was ist RCON?

RCON ist eine Schnittstelle in verschiedenen Programmen, wie zum Beispiel Gameservern, mit der Fernwartung und Fernadministration durchgeführt werden kann. Über diese Schnittstelle lassen sich bereits laufende und erreichbare Server verwalten. Man greift dann mit einem speziellen Fernwartungsprogramm auf die Schnittstelle zu und kann so den Server steuern.

<InlineVoucher />

## Zugriff auf deine Konfigurationsdatei

Um RCON nutzen zu können, musst du zuerst auf die Serverkonfiguration zugreifen und diese Funktion aktivieren. Die Konfigurationsdatei kannst du entweder über das Webinterface deines Servers oder direkt per FTP bearbeiten.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="configs" label="Via WI Konfig-Datei">

#### Über das Webinterface die Konfig-Datei bearbeiten

Wir empfehlen diese Methode, da sie am einfachsten ist.

:::note
Der Server muss gestoppt sein, bevor die Konfiguration bearbeitet wird. Änderungen werden sonst beim Neustart überschrieben.
:::

Gehe einfach im Webinterface deines Gameservers zum Bereich **Configs** und klicke auf den blauen Button zum Bearbeiten der Datei, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Es öffnet sich ein Texteditor, in dem du die Datei direkt bearbeiten kannst. Suche in der Datei nach dem Abschnitt `rcon`. Dort setzt du den Parameter `enable` auf `true`, also z.B.: `"enable":true`. Wir empfehlen, mit `STRG+F` die Suchfunktion deines Browsers zu nutzen.

Im gleichen Abschnitt solltest du auch ein Passwort für den RCON-Zugang festlegen, indem du den Parameter `password` anpasst. So verhinderst du unbefugten Zugriff und das Passwort sollte geheim bleiben.

![](https://screensaver01.zap-hosting.com/index.php/s/WPPbd6C7k6m5Ja7/preview)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Über FTP

:::note
Der Server muss gestoppt sein, bevor die Konfiguration bearbeitet wird. Änderungen werden sonst beim Neustart überschrieben.
:::

Eine weitere Möglichkeit, die Konfigurationsdatei zu bearbeiten, ist über FTP. Falls du FTP noch nicht kennst, schau dir am besten unsere [Anleitung zum FTP-Zugang](gameserver-ftpaccess.md) an. Diese Methode dauert etwas länger und wenn du direkt den Inhalt der Datei bearbeiten willst, empfehlen wir dir das **Configs**-Menü im Webinterface deines Gameservers.

Nachdem du dich per FTP mit deinem Server verbunden hast, navigiere zu folgendem Verzeichnis:
```
..g[zap_id]/gta-openmp/
```

Dort findest du die Datei `config.json`, die du öffnen und bearbeiten solltest.

Suche in der Datei nach dem Abschnitt `rcon`. Setze den Parameter `enable` auf `true` und lege ein Passwort für den RCON-Zugang über den Parameter `password` fest.

</TabItem>
</Tabs>

:::info
Vergiss nicht, deinen Server neu zu starten, nachdem du die Konfiguration angepasst hast.
:::

## RCON nutzen

Nachdem du RCON in der Serverkonfiguration aktiviert hast, kannst du über den in der Datei definierten Port auf die Open.mp RCON-Schnittstelle zugreifen.

Dafür brauchst du ein RCON-Programm. Wir empfehlen [RCON Console](https://sourceforge.net/projects/rconconsole/), da es Open-Source ist.

Im RCON-Programm deiner Wahl gibst du die IP-Adresse und den Port deines Servers ein. Achte darauf, dass dein Gameserver online und gestartet ist.

Wenn die Verbindung klappt, kannst du jetzt Befehle an deinen Palworld Server über das RCON Console Programm senden.

:::tip
Check unsere [Server Commands](openmp-server-commands.md), um alle aktuell verfügbaren Befehle zu sehen, die du per RCON ausführen kannst.
:::

Du hast RCON erfolgreich auf deinem Palworld Server aktiviert.

<InlineVoucher />