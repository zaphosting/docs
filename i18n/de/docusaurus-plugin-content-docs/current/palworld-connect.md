---
id: palworld-connect
title: "Palworld: Mit deinem Palworld Server verbinden"
description: "Entdecke, wie du dich mit deinem Palworld Server verbindest und nahtlos Multiplayer-Spiele startest → Jetzt mehr erfahren"
sidebar_label: Mit Server verbinden
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung zeigen wir dir, wie du dich mit deinem Palworld Server verbindest. Wir empfehlen, den Server vorher nach deinen Wünschen zu konfigurieren. Mehr dazu findest du in unserer [Server Konfiguration](palworld-configuration.md) Anleitung.

:::tip
Wir haben jetzt eine separate **Palworld (Xbox)** Spielversion auf unseren Gameservern, mit der du die Xbox/Microsoft Store Version spielen kannst. Schau dir unsere [Spielwechsel](gameserver-gameswitch.md) Anleitung an, um zu erfahren, wie du dein Spiel ganz easy wechseln kannst. Denk daran, wie immer deine Saves zu sichern.
:::

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/eA3xonLFkB4x3G6/preview" title="Palworld Server in nur EINER MINUTE einrichten!" description="Lernst du besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder einfach am liebsten auf die spannendste Art lernst!"/>

<InlineVoucher />

## Server-IP erhalten

Zuerst brauchst du die IP-Adresse und den Port deines Palworld Servers, um dich direkt verbinden zu können. Geh einfach auf dein [ZAP-Hosting Webinterface](https://zap-hosting.com/en/customer/) und halte die vollständige IP und den Port bereit.

![](https://github.com/zaphosting/docs/assets/42719082/62bcad5b-064c-45cd-a7f0-406a1148b15c)

Falls du deinen Palworld Server auf einem externen Dedicated Server betreibst, ist die IP die des Hostsystems und der Port der, den du in deiner Konfigurationsdatei eingestellt hast (standardmäßig 8211). Mehr Infos zum Port findest du in unserer [Server Konfiguration](palworld-configuration.md) Anleitung.

## Direkte Verbindung

Starte Palworld über deinen Game Launcher. Im Hauptmenü wählst du **Multiplayer-Spiel beitreten**.

![](https://github.com/zaphosting/docs/assets/42719082/fefc7ead-5098-4bdb-aa56-c9d78673d7e8)

Im Dedicated Server Browser scrollst du ganz nach unten. Gib dort deine IP und den Port in das untere Suchfeld ein. Drücke dann auf den **Verbinden** Button und du bist auf deinem Server.

:::note
Achte darauf, das untere Suchfeld zu benutzen, nicht das obere. Das obere sucht nach Servernamen in der Serverliste.
:::

![](https://github.com/zaphosting/docs/assets/42719082/ae31ddee-8992-486a-aef3-e6e4d115f018)

Falls du nicht verbinden kannst und eine Timeout-Fehlermeldung bekommst, überprüfe bitte, ob IP und Port korrekt sind und dein Server online ist. Für die Fehlersuche kannst du die Konsole im Webinterface deines Palworld Servers nutzen.

<InlineVoucher />