---
id: cs2-gslt
title: "Counter-Strike 2: Erstelle einen GSLT (Steam Game Server Login Token)"
description: "Entdecke, wie du deinen dedizierten Gameserver mit einem Steam Game Server Login Token authentifizierst und absicherst für optimale Server-Sichtbarkeit und Schutz → Mehr erfahren"
sidebar_label: GSLT erstellen
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Der **GSLT (Game Server Login Token)** ist ein Login-Token, das von Steam/Valve für den Betrieb dedizierter Server bestimmter Spiele benötigt wird. Er ist an ein Steam-Konto gebunden und stellt sicher, dass der Server korrekt authentifiziert ist.

Ohne einen gültigen GSLT werden betroffene Server möglicherweise nicht in der öffentlichen Serverliste angezeigt oder können keinen VAC-Schutz nutzen.

<InlineVoucher />



## Voraussetzungen

Um einen Game Server Login Token (GSLT) zu nutzen, darf dein Steam-Konto nicht eingeschränkt, gebannt oder von der Community ausgeschlossen sein. Es muss mit einem verifizierten Smartphone verknüpft sein und du musst das Spiel besitzen, das du hosten möchtest. Pro Konto kannst du bis zu 1000 Tokens erstellen.

Beachte, dass du für deine Tokens voll verantwortlich bist. Wenn ein Token missbraucht oder gesperrt wird, kannst du dauerhaft den Zugriff auf das verknüpfte Spiel verlieren. Teile deine Tokens niemals mit anderen, und falls doch, lösche sie sofort. Wenn dein Steam-Passwort zurückgesetzt wird, werden alle Tokens automatisch neu generiert. Tokens, die lange nicht genutzt werden, verfallen, können aber jederzeit neu erstellt werden.



## GSLT erstellen
Um einen Game Server Login Token zu erstellen, melde dich mit deinem Steam-Konto an und rufe die [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers) Seite auf.


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Nach dem Login kannst du über das auf der Seite angezeigte Formular einen neuen Token erstellen. Im Feld **App ID** gibst du die App ID `730` ein, die zu **Counter-Strike 2** gehört. Achte darauf, die korrekte ID einzugeben, da der Token mit einer falschen ID nicht funktioniert.

Im Feld **Memo** kannst du eine Beschreibung deiner Wahl hinzufügen. Das hilft dir später, den Zweck des Tokens zu erkennen, z.B. den Namen oder die Rolle des Servers. Nach Eingabe beider Werte klickst du auf **Create**, um den Token zu generieren. Der Token wird dann angezeigt und kann in der Startkonfiguration deines Servers verwendet werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/rXyykRZKBYe95qY/download)

## Server-Konfiguration

Der Login-Token muss nun in deine Server-Konfiguration eingetragen werden. Öffne dazu das Management-Interface deines Gameservers und navigiere zum Bereich **Einstellungen**. Trage den Token in das Feld **GSL Token** ein und speichere die Änderung.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Mehrere Counter-Strike 2 Server betreiben
Wenn du mehrere **Counter-Strike 2** Server betreibst, benötigst du für jeden Server einen eigenen GSLT. Es ist <u>**nicht**</u> möglich, mehrere Gameserver mit nur einem einzigen GSLT zu betreiben.
:::



## Abschluss

Der GSLT wurde erstellt und in deiner Server-Konfiguration hinterlegt. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />