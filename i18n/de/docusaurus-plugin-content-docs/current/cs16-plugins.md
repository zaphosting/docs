---
id: cs16-plugins
title: "CS 1.6: Plugins auf deinem eigenen Server installieren"
description: "Entdecke, wie du deinen Counter-Strike 1.6 Gameserver mit AMXmodX und Metamod für erweiterte Anpassungen und Administration aufpeppen kannst → Jetzt mehr erfahren"
sidebar_label: Plugins installieren
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs16-plugins.json';

## Einführung

**AMXmodX** und **Metamod** sind notwendig, um Plugins auf einem Counter-Strike 1.6 Gameserver zu nutzen. Dabei handelt es sich um zwei Half-Life-Erweiterungen, die dir erlauben, deinen Server noch individueller zu gestalten als sonst. Dazu gehört zum Beispiel die Verwendung von Plugins und eine erweiterte Administration deines Servers.

<InlineVoucher />

## AMXmodX / Metamod Installation

### Vorbereitung

Zuerst brauchst du die eigentlichen Erweiterungen. Die kannst du dir von [amxmodx.org](https://amxmodx.org/downloads-new.php) herunterladen. Bitte nutze immer die neuesten Versionen (**stable**), damit alles voll funktionsfähig und kompatibel bleibt.

![img](https://screensaver01.zap-hosting.com/index.php/s/SxJaFb7Cz79c7ER/preview)

Du benötigst die Linux-Pakete **AMX Mod X Base, Counter-Strike Addon und Metamod**. Diese kannst du dort downloaden. Danach solltest du drei gepackte Dateien auf deinem Rechner haben. Entpacke sie. So erhältst du einen **addons**-Ordner, der die Ordner **amxmodx** und **metamod** enthält:

![](https://screensaver01.zap-hosting.com/index.php/s/LQdb93T39YApA6B/preview)

### Installation

Wenn du die obigen Schritte erledigt hast, geht’s an die eigentliche Installation. Die Dateien müssen per FTP auf deinen Server hochgeladen werden. Du brauchst dafür einen FTP-Client, um Dateien auf deinen Server zu übertragen. Falls du nicht weißt, was FTP ist und wie das funktioniert, schau dir am besten unsere Anleitung an: [Zugriff via FTP](gameserver-ftpaccess.md)

Jetzt muss der **addons**-Ordner in das Hauptverzeichnis deines Servers hochgeladen werden. Die Ordnerstruktur sollte danach so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/A5zqJ9GxL47tCrW/preview)

Die Einrichtung von **AMXmodX** und **Metamod** ist jetzt abgeschlossen. Du kannst dich im Spiel mit deinem Server verbinden und in der Konsole den Befehl ``amxx version`` eingeben, um zu prüfen, ob AMX erfolgreich installiert wurde. Die Ausgabe sollte so aussehen:

```
AMX Mod X 1.8.2
Authors: ....
Compiled: Feb 14 2013, 00:56:31
URL:http://www.amxmodx.org/
Core mode: JIT
```

Wenn die Meldung **Unknown command** erscheint, ist bei der Installation etwas schiefgelaufen.

## Plugins Installation

### Vorbereitung

Sobald die Einrichtung von **AMXmodX** und **Metamod** abgeschlossen und funktionsfähig ist, kannst du mit der Installation der Plugins starten. Lade dir zuerst die Plugins herunter, die du auf deinem Server installieren möchtest. Eine große Auswahl findest du auf [amxmodx.org](https://www.amxmodx.org/compiler.php). Dort wurden über die Jahre viele Plugins veröffentlicht, und es kommen regelmäßig neue hinzu. Du brauchst die jeweilige **.amxx**-Datei der Plugins.

### Installation

Wenn du die gewünschten Plugins heruntergeladen hast, kannst du mit der eigentlichen Installation starten. Die Plugins werden ebenfalls per FTP hochgeladen. Die Plugin-Dateien müssen in das Verzeichnis ``../addons/amx/plugins`` hochgeladen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/FG2ocNpWCRManSd/preview)

Beim nächsten Serverstart sollten die hochgeladenen Plugins automatisch geladen werden.

## Beliebte Plugins

Du suchst noch die perfekten Plugins für deinen Server?  
Stöbere durch unsere sorgfältig zusammengestellte Liste der beliebtesten und meistempfohlenen Plugins, um dein Gameplay zu verbessern und deinem Server den letzten Schliff zu geben. Lass dich inspirieren und finde genau die Addons, die zu deinem Projekt passen.

<SearchableItemList items={items} />

## Abschluss

Wenn du alle Schritte befolgt hast, solltest du AMXmodX / Metamod und deine gewünschten Plugins erfolgreich installiert haben. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />