---
id: vserver-ssh-default
title: "vServer: Standard-SSH-Keys im Profil verwalten"
description: "Entdecke, wie du mit ZAP-Hosting die SSH-Key-Einrichtung automatisierst für schnelleren Serverzugang und einfachere Produktinstallationen → Jetzt mehr erfahren"
sidebar_label: Standard-SSH-Keys
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Eine unserer neuesten Features im ZAP-Hosting Webinterface ist die Möglichkeit, Standard-SSH-Keys direkt in deinem ZAP-Hosting Account über die Webseite hinzuzufügen. Der mega Vorteil: Die SSH-Keys, die du auf deiner Profilseite hinterlegst, werden automatisch als Standard eingerichtet und bei der ersten Produktinstallation oder Neuinstallation des Betriebssystems verwendet. Das spart dir Zeit, weil du deine SSH-Keys nicht mehr manuell einrichten musst.

<InlineVoucher />

## Voraussetzungen
Um dieses Feature zu nutzen, musst du einen SSH-Key generiert haben. Falls du schon einen SSH-Key hast, kannst du direkt zum nächsten Abschnitt springen.

Um einen SSH-Key zu erstellen, empfehlen wir dir, im Webinterface deines vServers zum Bereich **Informationen->Zugriff & Sicherheit** zu gehen.

![](https://screensaver01.zap-hosting.com/index.php/s/N9FxTpdfibwCWSD/preview)

Dort findest du einen grünen Button **SSH-Key generieren**. Wenn du diesen klickst, wird dein SSH Private Key automatisch auf deinen PC heruntergeladen. Diesen Key nutzt du später, um dich per SSH mit deinem Server zu verbinden.

![](https://screensaver01.zap-hosting.com/index.php/s/tdYfxJYNBFC2R9k/preview)

Speichere jetzt den Public Key, der dir im Prompt angezeigt wird, denn diesen brauchst du, um den SSH-Key in deinem Profil anzulegen.

![](https://screensaver01.zap-hosting.com/index.php/s/Tc9MEGamAC9dDF3/preview)

Wenn du bereit bist, geht’s weiter zum nächsten Abschnitt.

## Standard-SSH-Key im Profil verwalten
Das Verwalten deiner Standard-SSH-Keys in deinem Account ist easy. Geh dazu auf deine **[ZAP-Hosting Profilseite](https://zap-hosting.com/en/customer/home/profile/)** und scroll runter bis zum Bereich **Standard SSH Keys**.

![](https://screensaver01.zap-hosting.com/index.php/s/QzefcYZWPGz3rJr/preview)

### Neuen Key hinzufügen
Um einen neuen Key hinzuzufügen, klick zuerst auf das grüne Plus-Symbol, um das Erstellungsfenster zu öffnen. Wähle dort zuerst einen passenden Namen für deinen SSH-Key.

Füge dann deinen SSH Public Key in das zweite Feld ein. Dein SSH-Key sollte im OpenSSH-Format sein, also mit `ssh-rsa` beginnen und mit einem Suffix enden. Wenn alles passt, klick auf den grünen **Speichern**-Button, um den Key hinzuzufügen.

![](https://screensaver01.zap-hosting.com/index.php/s/CBTcDSiBLfNYi2R/preview)

:::tip
Achte darauf, dass du deinen **SSH Public Key** einfügst und nicht den SSH Private Key. Der Private Key wird nur beim Login genutzt, um dich mit deinem Public Key zu authentifizieren.
:::

Du hast jetzt erfolgreich einen Standard-SSH-Key in deinem ZAP-Hosting Account hinterlegt.

### Key bearbeiten oder löschen
Um einen Key zu bearbeiten, klick einfach auf das blaue Augen-Symbol. Es öffnet sich ein Fenster, in dem du die aktuellen Daten sehen und direkt bearbeiten sowie speichern kannst.

Um einen Key zu löschen, klick auf das rote Mülleimer-Symbol, um den jeweiligen Key zu entfernen.

![](https://screensaver01.zap-hosting.com/index.php/s/56mPcDswpZBaHms/preview)

<InlineVoucher />