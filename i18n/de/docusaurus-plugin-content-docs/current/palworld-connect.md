---
id: palworld-connect
title: "Palworld: Mit Palworld Server verbinden"
description: Informationen zur Verbindung mit einem Palworld-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Mit dem Server verbinden
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung erfährst du, wie du dich mit deinem Palworld-Server verbinden kannst. Wir empfehlen, den Server vorher nach deinen Wünschen zu konfigurieren. Mehr darüber erfährst du in unserer [Server Konfiguration](palworld-configuration.md) Anleitung.

:::tip
Wir haben jetzt eine separate **Palword (Xbox)** Spielversion auf unseren Gameservern, mit der du auf Xbox/Microsoft Store Spielversionen spielen kannst. In unserer [Spielwechsel](gameserver-gameswitch.md) erfährst du, wie du dein Spiel ganz einfach wechseln kannst. Achte darauf, dass du deine Spielstände wie immer sicherst.
:::

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ecdBptZkaZMNSGX/preview" title="Setup Palworld server in just a MINUTE!" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

<InlineVoucher />

## Ermitteln der Server-IP

Zunächst musst du die IP und den Port deines Palworld-Servers kennen, um eine direkte Verbindung herstellen zu können. Gehe einfach zu deinem [ZAP-Hosting Webinterface](https://zap-hosting.com/en/customer/) auf der Website und halte die vollständige IP und den Port bereit.

![](https://github.com/zaphosting/docs/assets/42719082/a27d76e0-acf6-4736-b5c9-c110901a5f14)

Wenn du deinen Palworld-Server als externen dedizierten Server betreibst, ist die IP die des Host-Rechners und der Port derjenige, den du in deiner Konfigurationsdatei eingestellt hast (standardmäßig ist dies 8211). In unserer [Server Konfiguration](palworld-configuration.md) findest du weitere Informationen zum Port.

## Direktverbindung

Beginne damit, Palworld über deinen Game Launcher zu starten. Wähle im Hauptmenü **Multiplayer-Spiel beitreten**.

![](https://github.com/zaphosting/docs/assets/42719082/fefc7ead-5098-4bdb-aa56-c9d78673d7e8)

Gehe im dedizierten Server-Browser zum unteren Ende der Seite. Gib in das untere Suchfeld deine IP- und Portdaten ein. Sobald du fertig bist, drückst du auf den Button **Verbinden** und trittst deinem Server bei.

:::note
Achte darauf, dass du das untere Suchfeld benutzt und nicht das obere. Das obere Feld wird verwendet, um in der Serverliste nach Servern mit Namen zu suchen.
:::

![](https://github.com/zaphosting/docs/assets/42719082/ae31ddee-8992-486a-aef3-e6e4d115f018)

Wenn du dem Server nicht erfolgreich beitreten kannst und eine Timeout-Fehlermeldung erhältst, vergewissere dich bitte, dass die eingegebene IP und der Port korrekt sind und dass dein Server online ist. Du kannst den Konsolenbereich deines Webinterfaces für deinen Palworld Server nutzen, um die Fehlersuche zu erleichtern.