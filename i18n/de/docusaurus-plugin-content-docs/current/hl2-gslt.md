---
id: hl2-gslt
title: "Half-Life 2: Erstelle ein GSLT (Steam Game Server Login Token)"
description: "Verstehe, wie du deinen Gameserver mit einem Steam Game Server Login Token authentifizierst, um eine korrekte Listung und VAC-Schutz zu gewährleisten → Jetzt mehr erfahren"
sidebar_label: GSLT erstellen
services:
  - gameserver-holdfast-hl2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Das **GSLT (Game Server Login Token)** ist ein Login-Token, das von Steam/Valve für den Betrieb von Dedicated Servern bestimmter Spiele benötigt wird. Es ist mit einem Steam-Account verknüpft und stellt sicher, dass der Server korrekt authentifiziert ist.

Ohne ein gültiges GSLT werden betroffene Server möglicherweise nicht in der öffentlichen Serverliste angezeigt oder können keinen VAC-Schutz nutzen.

<InlineVoucher />



## Voraussetzungen

Um ein Game Server Login Token (GSLT) zu verwenden, darf dein Steam-Account nicht eingeschränkt, gebannt oder von der Community ausgeschlossen sein. Er muss mit einem verifizierten Smartphone verknüpft sein, und du musst das Spiel besitzen, das du hosten möchtest. Pro Account kannst du bis zu 1000 Tokens erstellen.

Beachte, dass du voll verantwortlich für deine Tokens bist. Wenn ein Token missbraucht oder gebannt wird, kannst du dauerhaft den Zugriff auf das verknüpfte Spiel verlieren. Teile deine Tokens niemals, und falls du es doch getan hast, lösche sie sofort. Wenn dein Steam-Passwort zurückgesetzt wird, werden alle Tokens automatisch neu generiert. Tokens, die lange nicht genutzt werden, verfallen, können aber jederzeit neu erstellt werden.



## GSLT erstellen
Um ein Game Server Login Token zu erstellen, melde dich mit deinem Steam-Account an und rufe die [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers) Seite auf.


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Nach dem Login kannst du über das auf der Seite angezeigte Formular ein neues Token erstellen. Im Feld **App ID** gibst du die App ID `320` ein, die zu **Half-Life 2** gehört. Achte darauf, die korrekte ID einzugeben, da das Token mit einem falschen Wert nicht funktioniert.

Im Feld **Memo** kannst du eine Beschreibung deiner Wahl hinzufügen. Das hilft dir später, den Zweck des Tokens zu erkennen, z.B. den Namen oder die Rolle des Servers. Nachdem du beide Werte eingegeben hast, klicke auf **Create**, um das Token zu generieren. Das Token wird dann angezeigt und kann in der Startkonfiguration deines Servers verwendet werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/zBBPASS24oqRAfr/download)

## Serverkonfiguration

Das Login-Token muss nun in deine Serverkonfiguration eingetragen werden. Öffne dazu das Management-Interface deines Gameservers und navigiere zum Bereich **Einstellungen**. Trage das Token in das Feld **GSL Token** ein und speichere die Änderung.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Mehrere Half-Life 2 Server betreiben
Wenn du mehrere **Half-Life 2** Server betreibst, benötigst du für jeden Server ein eigenes GSLT. Es ist <u>**nicht**</u> möglich, mehrere Gameserver mit nur einem einzigen GSLT zu betreiben.
:::



## Fazit

Das GSLT wurde erstellt und in deiner Serverkonfiguration hinterlegt. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />