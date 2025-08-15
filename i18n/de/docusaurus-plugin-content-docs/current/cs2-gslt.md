---
id: cs2-gslt
title: "Counter-Strike 2: GSLT erstellen (Steam Game Server Login Token)"
description: "Informationen zur Erstellung und Verwendung von GSLT für Counter-Strike 2 Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation"
sidebar_label: GSLT erstellen
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Der **GSLT (Game Server Login Token)** ist ein Login-Token, der von Steam/Valve für den Betrieb dedizierter Server für bestimmte Spiele benötigt wird. Er wird mit einem Steam-Konto verknüpft und stellt sicher, dass der Server ordnungsgemäß authentifiziert ist.

Ohne einen gültigen GSLT werden betroffene Server möglicherweise nicht in der öffentlichen Serverliste angezeigt oder können den VAC-Schutz nicht verwenden.

<InlineVoucher />



## Voraussetzungen

Um einen Game Server Login Token (GSLT) zu verwenden, darf dein Steam-Konto nicht eingeschränkt, gebannt oder von der Community ausgeschlossen sein. Es muss mit einem verifizierten Smartphone verknüpft sein und du musst das Spiel besitzen, das du hosten möchtest. Du kannst bis zu 1000 Token pro Konto erstellen.

Beachte, dass du die volle Verantwortung für deine Token trägst. Wenn ein Token missbraucht oder gesperrt wird, verlierst du möglicherweise dauerhaft den Zugriff auf das verknüpfte Spiel. Gebe deine Token niemals weiter und wenn doch, lösche sie sofort. Wenn dein Steam-Passwort zurückgesetzt wird, werden alle Token automatisch neu generiert. Tokens, die über einen längeren Zeitraum ungenutzt bleiben, verfallen, können aber jederzeit neu erstellt werden.



## GSLT erstellen
Um ein Game Server Login Token zu erstellen, melde dich mit deinem Steam-Konto an und rufe das [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers) auf.


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Nach der Anmeldung hast du die Möglichkeit, über das auf der Seite angezeigte Formular einen neuen Token zu erstellen. Gebe in das Feld **App-ID** die App-ID `730` ein, die zu **Counter-Strike 2** gehört. Achte darauf, die richtige ID einzugeben, da der Token mit einem falschen Wert nicht funktionieren wird.

In das Feld **Memo** kannst du eine Beschreibung deiner Wahl eintragen. Dies hilft dir, den Zweck des Tokens später zu identifizieren, z. B. den Namen oder die Rolle des Servers. Nachdem du beide Werte eingegeben haben, klicke auf **Create**, um den Token zu erzeugen. Der Token wird dann angezeigt und kann in der Startkonfiguration deines Servers verwendet werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/rXyykRZKBYe95qY/download)

## Server Konfiguration

Der Login-Token muss nun zu deiner Serverkonfiguration hinzugefügt werden. Öffne dazu die Verwaltungsoberfläche deines Gameservers und navigiere zum Bereich **Einstellungen**. Trage den Token in das Feld **GSL Token** ein und klicke auf Speichern.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Betreiben von mehreren Counter-Strike 2 Servern
Wenn mehrere **Counter-Strike 2** Server betrieben werden, wird für jeden Server ein GSLT benötigt. Es ist <u>**nicht**</u> möglich, mehrere Gameserver über einen einzigen GSLT zu betreiben.
:::



## Abschluss

Der GSLT wurde erstellt und für deine Serverkonfiguration angewendet. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂