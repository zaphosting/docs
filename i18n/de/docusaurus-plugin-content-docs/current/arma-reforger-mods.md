---
id: arma-reforger-mods
title: "Arma Reforger: Mods über den Workshop installieren"
description: "Lerne, wie du Arma Reforger Workshop-Mods auf deinem Server installierst und aktivierst → Jetzt mehr erfahren"
sidebar_label: Mods installieren
services:
  - gameserver-arma-reforger
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mods spielen eine wichtige Rolle, um das Gameplay in **Arma Reforger** zu erweitern. Über den **Arma Reforger Workshop** veröffentlichen Spieler und Creator eigene Missionen, Gameplay-Änderungen, Maps und zusätzlichen Content, der auf Gameservern genutzt werden kann.

Durch das Installieren von Mods können Serverbesitzer das Gameplay anpassen, neue Mechaniken einführen oder einzigartige Missionen für ihre Community bereitstellen. Sobald die Mods installiert sind, laden Spieler, die dem Server beitreten, die benötigten Mods automatisch vor dem Verbindungsaufbau herunter.


<InlineVoucher />

## Mods finden

Du brauchst zuerst die **Workshop-ID** des Mods, den du installieren möchtest. Öffne den **Arma Reforger Workshop** und navigiere zum gewünschten Mod. Jeder Workshop-Eintrag hat eine eindeutige Kennung, die der Server nutzt, um den Mod automatisch herunterzuladen.

![img](https://screensaver01.zap-hosting.com/index.php/s/jMNGbRAQdjKcDyn/preview)

## Konfiguration

Um Workshop-Mods auf deinem Server zu installieren, öffne dein **Gameserver Management Panel** und gehe zu **Einstellungen**. Suche das Konfigurationsfeld mit dem Namen **Workshop-Mods**. Trage in dieses Feld die **Workshop-ID** des Mods ein, den du installieren möchtest. Beispielkonfiguration mit einem einzelnen Mod:

```
1234567890
```
Wenn du mehrere Mods installieren willst, gib jede Workshop-ID ein und trenne sie mit einem **Komma**. Beispielkonfiguration mit mehreren Mods:

```
1234567890,9876543210,1357924680
```
Nachdem du die gewünschten Mod-IDs eingetragen hast, **speichere die Einstellungen** und starte den Server neu. Während des Starts lädt der Server die aufgelisteten Mods automatisch aus dem Arma Reforger Workshop herunter und lädt sie.


## Fazit

Glückwunsch! Du hast erfolgreich **Arma Reforger Workshop-Mods** auf deinem Server installiert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />