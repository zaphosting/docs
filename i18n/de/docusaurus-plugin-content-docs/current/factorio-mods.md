---
id: factorio-mods
title: "Factorio: Mods/DLCs auf deinem Factorio Gameserver installieren"
description: "Entdecke, wie du dein Factorio-Erlebnis mit DLCs und Mods individuell auf deinem Gameserver erweiterst → Jetzt mehr erfahren"
sidebar_label: Mods/DLCs installieren
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/factorio-mods.json';

## Einführung

Factorio unterstützt Modding nativ, sodass du ganz easy eine riesige Auswahl an Mods zu deinem Spiel und Gameserver hinzufügen kannst – zusätzlich zu den gekauften DLCs. In dieser Anleitung zeigen wir dir, wie du DLCs aktivierst und Mods auf deinem Client und Factorio Gameserver installierst.

<InlineVoucher />

## Vorbereitung

Du kannst die [offizielle Factorio Mods](https://mods.factorio.com/) Website besuchen, um Mods zu durchstöbern. Dort findest du eine riesige Bibliothek kostenloser Mods aus der Community in vielen verschiedenen Kategorien.

:::tip
Achte darauf, dass die Mods, die du herunterlädst, mit der Version deines Factorio Gameservers kompatibel sind.
:::

## DLCs aktivieren

Mit dem Factorio 2.0 Update wurde das allererste DLC namens Space Age eingeführt. Dafür gibt es jetzt eine neue Einstellung im Webinterface, mit der du das DLC an- oder ausschalten kannst.

<YouTube videoId="i9CuAsCxUsk" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BRa5saY3L76xe5F/preview" title="Factorio Space Age DLC aktivieren" description="Du verstehst besser, wenn du es in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder lieber entspannt lernst!"/>

Geh in das Webinterface deines Produkts und öffne den Bereich **Einstellungen**. Scroll runter bis zur Option **Space Age DLC**, die standardmäßig aktiviert sein sollte.

![](https://screensaver01.zap-hosting.com/index.php/s/T5G5GrEzwoxM3Xk/preview)

Schalte die Funktion an oder aus und speichere deine Änderung mit dem grünen **Speichern** Button unten. Damit hast du das Factorio DLC erfolgreich aktiviert.

## Mods hinzufügen & hochladen

Nachdem du deine Wunschmods heruntergeladen hast, musst du sie per FTP auf deinen Factorio Gameserver hochladen. Nutze dafür unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung, falls du Hilfe beim Verbinden brauchst.

:::note
Der Gameserver muss gestoppt sein, bevor du Mods hinzufügst oder änderst, sonst gehen deine Änderungen verloren.
:::

Navigiere dann in folgendes Verzeichnis und lade deine Mods im `.zip` Format hoch:

```
../factorio/saves/mods
```

![](https://screensaver01.zap-hosting.com/index.php/s/APFEnmg29jBCFKn/preview)

:::tip
Mods müssen zwischen Client und Server synchronisiert sein. Factorio macht das super easy: Beim ersten Verbindungsaufbau nach Mod-Änderungen wirst du automatisch gefragt, ob du deine Mods synchronisieren möchtest.
:::

Starte deinen Gameserver danach neu, damit die Mods automatisch aktiviert und installiert werden. Falls Fehler auftreten, z.B. der Server sich automatisch abschaltet, check im Webinterface unter **Informationen->Ereignisprotokoll** die Fehlermeldungen. Meist liegt es an einer Versionsinkompatibilität.

## Beliebte Mods

Du suchst noch nach den perfekten Mods für deinen Gameserver? Stöbere durch unsere sorgfältig ausgewählte Liste der beliebtesten und empfohlenen Mods, um dein Spielerlebnis zu pimpen und deinem Server den letzten Schliff zu geben. Lass dich inspirieren und finde genau die Addons, die zu deinem Projekt passen.

<SearchableItemList items={items} />

## Fazit

Glückwunsch, du hast erfolgreich Mods auf deinem Factorio Gameserver installiert. Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />