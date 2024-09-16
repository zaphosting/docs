---
id: factorio-mods
title: "Factorio: Mods installieren"
description: Informationen, wie du Mods auf deinem Factorio-Server bei ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Mods installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mit Mods hast du die Möglichkeit, deinen Server noch individueller anzupassen. Im Folgenden wird erklärt, wo du die beliebtesten Servers-Mods finden und wie du diese einrichten kannst. 

<InlineVoucher />

### Vorbereitung

Zunächst einmal muss geklärt werden, von wo man am besten Mods für Factorio herunterladen kann. Factorio selbst bietet auf deren Webseite eine große Auswahl an Mods. Diese kannst du hier finden: [Factorio - Mods](https://mods.factorio.com/)

![image](https://screensaver01.zap-hosting.com/index.php/s/4B3kgEJNQmwJi7a/preview)

Auf der Seite hast du die Möglichkeit, verschiedene Filter anzuwenden. So kannst du zum Beispiel unterscheiden zwischen dem Beliebtheitsgrad, Kategorie oder die Version. Wichtig ist es, dass die Mods die installierte Server Version unterstützen. Andernfalls kann es passieren, dass der Mod entweder nicht lädt oder der Server generell nicht mehr startet. 



### Mods hinzufügen

Nachdem du dich für deine Wunschmods entschieden und diese heruntergeladen hast, können wir mit dem Installieren der Mods beginnen. Dafür müssen die Mods auf den Server hochgeladen werden. Um Dateien auf deinen Server hochladen zu können, benötigst du einen FTP-Client. Falls du noch nicht weißt, was FTP ist und wie es funktioniert, dann schaue dir am besten die folgende Anleitung an: [Zugriff per FTP](gameserver-ftpaccess.md)

![image](https://screensaver01.zap-hosting.com/index.php/s/53tXGiW6dAJjYF4/preview)

Das Verzeichnis, in dem die Mods hochgeladen werden, findest du unter `gXXXXXX/factorio-exp/mods/`. Die heruntergeladenen Mods werden dort als ZIP Datei hochgeladen. Beim nächsten Starten des Servers werden die Mods dann entsprechend geladen.
