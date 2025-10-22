---
id: l4d2-gslt
title: "Left 4 Dead 2: Erstelle einen GSLT (Steam Game Server Login Token)"
description: "Entdecke, wie du Gameserver mit dem Steam GSLT für öffentliche Listen und VAC-Schutz authentifizierst → Jetzt mehr erfahren"
sidebar_label: GSLT erstellen
services:
  - gameserver-l4d2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Der **GSLT (Game Server Login Token)** ist ein Login-Token, das von Steam/Valve für den Betrieb von Dedicated Servern bestimmter Spiele benötigt wird. Er ist mit einem Steam-Account verknüpft und stellt sicher, dass der Server korrekt authentifiziert ist.

Ohne einen gültigen GSLT werden betroffene Server möglicherweise nicht in der öffentlichen Serverliste angezeigt oder können keinen VAC-Schutz nutzen.

<InlineVoucher />



## Voraussetzungen

Um einen Game Server Login Token (GSLT) zu nutzen, darf dein Steam-Account nicht eingeschränkt, gebannt oder von der Community ausgeschlossen sein. Er muss mit einem verifizierten Smartphone verknüpft sein, und du musst das Spiel besitzen, das du hosten möchtest. Pro Account kannst du bis zu 1000 Tokens erstellen.

Beachte, dass du voll verantwortlich für deine Tokens bist. Wenn ein Token missbraucht oder gesperrt wird, kannst du den Zugriff auf das verknüpfte Spiel dauerhaft verlieren. Teile deine Tokens niemals, und falls doch, lösche sie sofort. Wenn dein Steam-Passwort zurückgesetzt wird, werden alle Tokens automatisch neu generiert. Tokens, die lange ungenutzt bleiben, verfallen, können aber jederzeit neu erstellt werden.



## GSLT erstellen
Um einen Game Server Login Token zu erstellen, melde dich mit deinem Steam-Account an und rufe die [Steam Game Server Account Verwaltung](https://steamcommunity.com/dev/managegameservers) auf.


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Nach dem Login kannst du über das auf der Seite angezeigte Formular einen neuen Token erstellen. Im Feld **App ID** gibst du die App ID `550` ein, die zu **Left 4 Dead 2** gehört. Achte darauf, die korrekte ID einzugeben, da der Token mit einem falschen Wert nicht funktioniert.

Im Feld **Memo** kannst du eine Beschreibung deiner Wahl hinzufügen. Das hilft dir später, den Zweck des Tokens zu erkennen, z.B. den Namen oder die Rolle des Servers. Nachdem du beide Werte eingegeben hast, klicke auf **Create**, um den Token zu generieren. Der Token wird dann angezeigt und kann in der Startkonfiguration deines Servers verwendet werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/fTgmTPA7q8k9TAd/download)

## Serverkonfiguration

Der Login-Token muss nun in deine Serverkonfiguration eingetragen werden. Öffne dazu das Management-Interface deines Gameservers und navigiere zum Bereich **Einstellungen**. Trage den Token in das Feld **GSL Token** ein und speichere die Änderung.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Mehrere Left 4 Dead 2 Server betreiben
Wenn du mehrere **Left 4 Dead 2** Server betreibst, benötigst du für jeden Server einen eigenen GSLT. Es ist <u>**nicht**</u> möglich, mehrere Gameserver mit nur einem einzigen GSLT zu betreiben.
:::



## Fazit

Der GSLT wurde erstellt und in deine Serverkonfiguration eingetragen. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />