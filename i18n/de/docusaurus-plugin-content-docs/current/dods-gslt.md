---
id: dods-gslt
title: "Day of Defeat: Source: Erstelle ein GSLT (Steam Game Server Login Token)"
description: "Entdecke, wie du deine dedizierten Gameserver mit dem Steam Game Server Login Token authentifizierst und absicherst für bessere Sichtbarkeit und Schutz → Jetzt mehr erfahren"
sidebar_label: GSLT erstellen
services:
  - gameserver-dods
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Das **GSLT (Game Server Login Token)** ist ein Login-Token, das von Steam/Valve für den Betrieb dedizierter Server bestimmter Spiele benötigt wird. Es ist mit einem Steam-Account verknüpft und stellt sicher, dass der Server korrekt authentifiziert ist.

Ohne ein gültiges GSLT werden betroffene Server möglicherweise nicht in der öffentlichen Serverliste angezeigt oder können keinen VAC-Schutz nutzen.

<InlineVoucher />



## Voraussetzungen

Um ein Game Server Login Token (GSLT) zu nutzen, darf dein Steam-Account nicht eingeschränkt, gebannt oder von der Community ausgeschlossen sein. Er muss mit einem verifizierten Smartphone verknüpft sein, und du musst das Spiel besitzen, das du hosten möchtest. Pro Account kannst du bis zu 1000 Tokens erstellen.

Beachte, dass du die volle Verantwortung für deine Tokens trägst. Wenn ein Token missbraucht oder gesperrt wird, kannst du den Zugriff auf das verknüpfte Spiel dauerhaft verlieren. Teile deine Tokens niemals mit anderen, und falls doch, lösche sie sofort. Wenn dein Steam-Passwort zurückgesetzt wird, werden alle Tokens automatisch neu generiert. Tokens, die lange nicht genutzt werden, verfallen, können aber jederzeit neu erstellt werden.



## GSLT erstellen
Um ein Game Server Login Token zu erstellen, melde dich mit deinem Steam-Account an und öffne die [Steam Game Server Account Verwaltung](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Nach dem Login kannst du über das auf der Seite angezeigte Formular ein neues Token erstellen. Im Feld **App ID** gibst du die App ID `300` ein, die zu **Day of Defeat: Source** gehört. Achte darauf, die korrekte ID einzugeben, da das Token mit einer falschen ID nicht funktioniert.

Im Feld **Memo** kannst du eine Beschreibung deiner Wahl hinzufügen. Das hilft dir später, den Zweck des Tokens zu erkennen, z.B. den Namen oder die Rolle des Servers. Nach Eingabe beider Werte klickst du auf **Create**, um das Token zu generieren. Das Token wird dann angezeigt und kann in der Startkonfiguration deines Servers verwendet werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/n7pZjBfz5cy59TM/download)

## Serverkonfiguration

Das Login-Token muss nun in deine Serverkonfiguration eingetragen werden. Öffne dazu das Management-Interface deines Gameservers und navigiere zum Bereich **Einstellungen**. Trage das Token im Feld **GSL Token** ein und speichere die Änderung.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Mehrere Day of Defeat: Source Server betreiben
Wenn du mehrere **Day of Defeat: Source** Server betreibst, benötigst du für jeden Server ein eigenes GSLT. Es ist <u>**nicht**</u> möglich, mehrere Gameserver mit nur einem einzigen GSLT zu betreiben.
:::



## Abschluss

Das GSLT wurde erstellt und in deiner Serverkonfiguration hinterlegt. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />