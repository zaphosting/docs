---
id: palworld-admin
title: "Palworld: Admin einrichten"
description: "Entdecke, wie du deinen Palworld Gameserver mit einem Admin-Passwort sicherst und vertrauenswürdige Spieler effektiv verwaltest → Jetzt mehr erfahren"
sidebar_label: Admin einrichten
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung
In dieser Anleitung zeigen wir dir, wie du deinen Server mit einem Admin-Passwort konfigurierst und dich im Spiel als Admin hinzufügst. Dieses Passwort kannst du mit vertrauenswürdigen Spielern teilen, um ihnen Zugriff auf verschiedene Admin-Befehle zu geben. Mehr zu den Serverbefehlen erfährst du in unserer [Serverbefehle](palworld-server-commands.md) Anleitung.
<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ramgExKNxeLeDdL/preview" title="Palworld Server in nur EINER MINUTE einrichten!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>

<InlineVoucher />

## Admin-Passwort konfigurieren

Zuerst musst du auf deine Konfigurationseinstellungen zugreifen. Es gibt mehrere Wege, dies zu tun – wir listen sie dir unten mit Anleitungen zum Setzen des Passworts auf. Wir empfehlen die **Webinterface**-Option, da sie am benutzerfreundlichsten ist. Sobald du dein Admin-Passwort gesetzt hast, kannst du zum nächsten Abschnitt weitergehen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Über Webinterface" default>

#### Über Webinterface

Der benutzerfreundlichste Weg führt dich in den Bereich **Einstellungen** im Webinterface deines Gameservers.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Im Bereich **Einstellungen** suchst du nach der Option **Gameserver Passwort**. Dort legst du dein gewünschtes Passwort fest und gibst es ein.

![](https://screensaver01.zap-hosting.com/index.php/s/aQYQDYMP34NnNXr/preview)

:::info
Nachdem du dein Passwort ausgewählt hast, scrolle nach oben und drücke unbedingt den grünen **Speichern**-Button, um die Änderung zu bestätigen.

![](https://screensaver01.zap-hosting.com/index.php/s/YG5MZ6Jt8SdFy4A/preview)
:::

</TabItem>

<TabItem value="configs" label="Über WI Config-Datei">

#### Über WI Config-Datei

:::note
Der Server muss gestoppt sein, bevor die Config bearbeitet wird. Änderungen werden beim Neustart des Servers sonst zurückgesetzt.
:::

Alternativ kannst du die Rohdatei direkt bearbeiten, indem du im Webinterface deines Gameservers in den Bereich **Configs** gehst und den blauen Bearbeiten-Button klickst, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Es öffnet sich ein Texteditor direkt auf der Seite, in dem du die Datei bearbeiten kannst. Suche die Option **AdminPassword** (hilfreich ist `STRG+F`) und ändere sie auf dein gewünschtes Admin-Passwort. Speichere die Datei anschließend und starte deinen Server.

![](https://screensaver01.zap-hosting.com/index.php/s/gpBjxxmdsWKD4t2/preview)

</TabItem>

<TabItem value="ftp" label="Über FTP">

#### Über FTP

:::note
Der Server muss gestoppt sein, bevor die Config bearbeitet wird. Änderungen werden beim Neustart des Servers sonst zurückgesetzt.
:::

Der letzte Weg, auf die Rohdatei zuzugreifen, ist über FTP. Falls du FTP noch nicht kennst, empfehlen wir dir unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung. Diese Methode dauert etwas länger. Wenn du die Datei direkt bearbeiten willst, empfehlen wir dir stattdessen die **Configs**-Sektion im Webinterface deines Gameservers.

</TabItem>
</Tabs>

## Dich als Admin festlegen

Nachdem dein Admin-Passwort gesetzt ist, musst du dich im Spiel als Admin hinzufügen. Starte Palworld und verbinde dich mit deinem Server. Falls du Hilfe brauchst, schau dir unsere [Mit Server verbinden](palworld-connect.md) Anleitung an.

Im Spiel öffnest du den Chat mit `Enter`. Gib dann folgenden Befehl ein, wobei du `[password]` durch dein zuvor gesetztes Admin-Passwort ersetzt:

```
/AdminPassword [password]
```

![](https://screensaver01.zap-hosting.com/index.php/s/75D5ejaWNM6oYNX/preview)

Wenn alles korrekt ist, bekommst du eine Erfolgsmeldung im Chat. Falls eine Fehlermeldung erscheint, überprüfe bitte, ob das eingegebene Admin-Passwort korrekt ist und mit dem in der vorherigen Einstellung übereinstimmt.

<InlineVoucher />