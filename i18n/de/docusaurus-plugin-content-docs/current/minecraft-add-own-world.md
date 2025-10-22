---
id: minecraft-add-own-world
title: "Minecraft: Eigene Welt auf dem Server hinzufügen"
description: "Lerne, wie du eigene Minecraft-Welten auf deinem Server hochlädst und konfigurierst für ein persönliches Spielerlebnis → Jetzt mehr erfahren"
sidebar_label: Eigene Welt hinzufügen
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du willst deine eigene Welt oder eine aus dem Internet heruntergeladene Welt auf deinem Server nutzen? Dann bist du hier genau richtig! Alles, was du brauchst, ist deine Welt und ein FTP-Client. Falls du nicht weißt, was ein FTP-Client ist und wie man ihn benutzt, schau dir am besten diese Anleitung an: [Zugriff via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/Rmx6c6n2rP5MqBz/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/SbB6iZmdZtMAPaS/preview" title="Wie du eigene MAPS auf deinem Minecraft Gameserver hochlädst" description="Lernst du besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder lieber entspannt und anschaulich lernen willst!"/>

Sobald die Verbindung zum Server über FTP steht, kannst du mit dem Einrichten deiner eigenen Welt starten. Dazu musst du zuerst in das passende Verzeichnis wechseln, in dem die aktuelle Welt liegt. Dieses findest du hier: /gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/85KLwjPYt3yjHZt/preview)

Die neue Welt muss jetzt in dieses Verzeichnis hochgeladen werden. Du kannst entweder den alten **world**-Ordner löschen und ersetzen oder die neue Welt unter einem anderen Namen hochladen. In diesem Beispiel laden wir die Welt mit einem neuen Namen hoch:

![](https://screensaver01.zap-hosting.com/index.php/s/3DYD5ANgNsCNpkE/preview)

Jetzt muss die neu hochgeladene Welt nur noch in der **server.properties** konfiguriert werden. Die Datei findest du in der **Gameserver-Verwaltung** unter **Configs**. Dort musst du den Wert des Befehls **level-name=** anpassen:

![](https://screensaver01.zap-hosting.com/index.php/s/idoHWafC3g4AbYL/preview)

Nach einem Neustart des Servers sollte die neue Welt nun geladen werden. Viel Spaß mit deiner neuen Welt! 🙂

<InlineVoucher />

<InlineVoucher />