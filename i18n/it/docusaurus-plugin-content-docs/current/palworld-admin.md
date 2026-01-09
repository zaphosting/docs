---
id: palworld-admin
title: "Palworld: Admin einrichten"
description: "Erfahre, wie du deinen Palworld-Server mit einem Admin-Passwort sicherst und vertrauenswürdige Spieler effektiv verwaltest → Jetzt mehr erfahren"
sidebar_label: Admin einrichten
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung
In diesem Guide zeigen wir dir, wie du deinen Server mit einem Admin-Passwort konfigurierst und dich im Spiel als Admin hinzufügst. Dieses Passwort kannst du mit vertrauenswürdigen Spielern teilen, um ihnen verschiedene Admin-Befehle zu ermöglichen. Mehr zu den Serverbefehlen findest du in unserem [Server Commands](palworld-server-commands.md) Guide.
<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ramgExKNxeLeDdL/preview" title="Palworld Server in nur EINER MINUTE einrichten!" description="Lernst du besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder lieber auf die coole Art lernst!"/>

<InlineVoucher />

## Admin-Passwort konfigurieren

Zuerst musst du auf deine Konfigurationseinstellungen zugreifen. Es gibt mehrere Wege, das zu tun – wir listen sie dir hier mit Anleitungen zum Setzen des Passworts auf. Wir empfehlen die **Webinterface**-Option, da sie am einfachsten zu bedienen ist. Sobald du dein Admin-Passwort gesetzt hast, geht’s weiter zum nächsten Abschnitt.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Über Webinterface" default>

#### Über Webinterface

Der einfachste Weg führt über den Bereich **Einstellungen** im Webinterface deines Gameservers.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Im Bereich **Einstellungen** suchst du nach der Option **Game server password**. Dort gibst du dein gewünschtes Passwort ein.

![](https://screensaver01.zap-hosting.com/index.php/s/aQYQDYMP34NnNXr/preview)

:::info
Hast du dein Passwort eingegeben, scroll nach oben und klick unbedingt auf den grünen **Speichern**-Button, um die Änderung zu sichern.

![](https://screensaver01.zap-hosting.com/index.php/s/YG5MZ6Jt8SdFy4A/preview)
:::

</TabItem>

<TabItem value="configs" label="Über WI Config-Datei">

#### Über WI Config-Datei

:::note
Der Server muss gestoppt sein, bevor du die Config bearbeiten kannst. Änderungen werden beim Neustart sonst nicht übernommen.
:::

Alternativ kannst du die Config auch direkt bearbeiten. Geh dazu im Webinterface auf den Bereich **Configs** und klick auf den blauen Button zum Bearbeiten der Datei, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Es öffnet sich ein Texteditor direkt auf der Seite. Such die Zeile mit **AdminPassword** (Tipp: `STRG+F` zum Suchen) und trag dort dein gewünschtes Admin-Passwort ein. Speichere die Datei ab und starte dann deinen Server.

![](https://screensaver01.zap-hosting.com/index.php/s/gpBjxxmdsWKD4t2/preview)

</TabItem>

<TabItem value="ftp" label="Über FTP">

#### Über FTP

:::note
Der Server muss gestoppt sein, bevor du die Config bearbeiten kannst. Änderungen werden beim Neustart sonst nicht übernommen.
:::

Der letzte Weg, um an die Config zu kommen, ist über FTP. Falls du FTP noch nicht kennst, schau dir am besten unseren [Zugriff via FTP](gameserver-ftpaccess.md) Guide an. Diese Methode dauert etwas länger. Wenn du direkt die Datei bearbeiten willst, empfehlen wir dir eher die **Configs**-Sektion im Webinterface, wie oben beschrieben.

</TabItem>
</Tabs>

## Dich als Admin festlegen

Nachdem dein Admin-Passwort gesetzt ist, musst du dich im Spiel als Admin eintragen. Starte Palworld und verbinde dich mit deinem Server. Falls du dabei Hilfe brauchst, check unseren [Connect to Server](palworld-connect.md) Guide.

Im Spiel öffnest du den Chat mit `Enter`. Gib dann folgenden Befehl ein, wobei du `[password]` durch dein zuvor gesetztes Admin-Passwort ersetzt:

```
/AdminPassword [password]
```

![](https://screensaver01.zap-hosting.com/index.php/s/75D5ejaWNM6oYNX/preview)

Wenn alles richtig war, bekommst du eine Erfolgsmeldung im Chat. Falls nicht, überprüfe nochmal, ob du das korrekte Admin-Passwort eingegeben hast, das du vorher gesetzt hast.

<InlineVoucher />