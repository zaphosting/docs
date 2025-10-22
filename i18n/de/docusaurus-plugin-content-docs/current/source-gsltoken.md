---
id: source-gsltoken
title: Verwendung von Gameserver-Login-Tokens
description: "Entdecke, wie GSL-Tokens Steam-Gameserver absichern, indem Banns an Accounts gekoppelt werden – für sichereres und regelkonformes Server mieten → Jetzt mehr erfahren"
sidebar_label: GSL-Token
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ❓ Was ist ein GSL-Token?

Gameserver Login Tokens (GSLTs) sind ein Verfahren, das Steam als Sicherheitsmaßnahme eingeführt hat. Um Gameserver bestimmter Steam-Games (hauptsächlich Source-Games) zu betreiben, muss ein Token generiert werden.

<InlineVoucher />

## ❓ Wozu dient ein GSL-Token?

Früher hat Valve einige Regeländerungen für das Server mieten von Gameservern eingeführt. Nicht alle Betreiber haben sich daran gehalten. Als Folge wurden die IP-Adressen der Gameserver gebannt.

Diese Methode war aber nicht effektiv, da sie leicht mit einer neuen IP-Adresse umgangen werden konnte und zudem ein großes Problem für Gameserver-Anbieter darstellte. Denn durch das Sperren der IP-Adresse waren oft auch andere Kunden betroffen.

Deshalb wurde dieses System eingeführt, das stattdessen das Token bannt und den verknüpften Steam-Account für den weiteren Betrieb von Gameservern blockiert.

## ➕ Token erstellen

Um ein Gameserver-Login-Token zu erstellen, musst du auf der Steam-Webseite eingeloggt sein. Das Token kannst du hier erstellen: [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers)

![](https://screensaver01.zap-hosting.com/index.php/s/an5ySHwzSZmEwep/preview)

Dort wirst du nach der App ID und einem Memo (beliebiger Name als Notiz) gefragt. Die App ID hängt vom Spiel ab. Hier findest du die wichtigsten App IDs:

|              Spiel               | App ID |
| :------------------------------: | :----: |
| Counter-Strike: Global Offensive |  730   |
|      Counter-Strike: Source      |  240   |
|         Team Fortress 2          |  440   |
|            Garrys Mod            |  4000  |

Das GSL-Token kannst du dann im Control Panel unter den Einstellungen definieren.

![](https://screensaver01.zap-hosting.com/index.php/s/jqkbkXG2YQLatw2/preview)

Sobald das erledigt ist und der Server neu gestartet wurde, erscheint der Server auch in der öffentlichen Serverliste.

## ⁉ Häufig gestellte Fragen

**Was sind die Voraussetzungen für ein GSL-Token?**

Der Steam-Account darf keine Einschränkungen wie einen Community-Bann haben. Außerdem muss eine gültige Telefonnummer im Steam-Account hinterlegt sein.

**Kann ich ein GSL-Token für mehrere Server nutzen?**

Für jeden Gameserver wird ein individuelles Token benötigt.

**Gibt es etwas, das dazu führen kann, dass mein GSL-Token gebannt wird?**

Vor allem bei CS:GO-Gameservern gibt es Plugins, die nicht erlaubt sind. Eine offizielle Liste wurde nicht veröffentlicht. Dazu gehören aber Plugins, die Spielerinventare (Waffenskins), Ränge oder Ähnliches verändern.

**Was passiert, wenn mein GSL-Token gebannt wird?**

Wenn ein Token gebannt wird, sind auch der Account und alle zugehörigen Tokens gebannt. Das bedeutet, der Gameserver ist nicht mehr öffentlich erreichbar. Außerdem kann der Account nicht mehr für den Betrieb weiterer Gameserver genutzt werden. Der Steam-Account kann aber weiterhin zum Spielen verwendet werden. Weitere Strafen sind in diesem Zusammenhang nicht zu erwarten.

<InlineVoucher />