---
id: hytale-disable-world-fall-damage
title: "Hytale: Fallschaden in der Welt deaktivieren"
description: "Erfahre, wie du den Fallschaden auf deinem Hytale-Gameserver deaktivierst → Jetzt mehr erfahren"
sidebar_label: Fallschaden deaktivieren
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Auf einem Hytale-Gameserver sind Schwerkraft und Fallschaden Teil der Gameplay-Mechanik der Welt. Wenn Fallschaden aktiviert ist, erleiden Spieler Schaden bei hohen Stürzen. Ist er deaktiviert, können Spieler frei fallen, ohne Schaden zu nehmen. Das Deaktivieren von Fallschaden ist besonders praktisch für Creative-Server, Bauprojekte, Testumgebungen oder jede Situation, in der Fallschaden das Spielerlebnis nicht beeinflussen soll.

<InlineVoucher />



## Konfiguration

Der Fallschaden wird pro Welt über die Konfigurationsdatei der jeweiligen Welt gesteuert. Jede Welt im Server-Universum hat ihre eigene `config.json`, in der eine Einstellung bestimmt, ob Fallschaden angewendet wird.

Um den Fallschaden zu deaktivieren, öffne die `config.json` der Welt, die du unter `universe/worlds/<welt_name>/config.json` findest. Suche die Einstellung, die den Fallschaden steuert, meist als Boolean-Flag wie `IsFallDamageEnabled` dargestellt, und setze sie auf `false`:

```
{
  "IsFallDamageEnabled": false
}
```

Wenn dieser Wert auf `false` gesetzt ist, nehmen Spieler keinen Fallschaden mehr. Soll der Fallschaden aktiviert bleiben, muss der Wert auf `true` stehen:

```
{
  "IsFallDamageEnabled": true
}
```

Speichere die Änderungen nach dem Bearbeiten der Datei und **starte den Server neu**.  
Konfigurationsänderungen werden erst angewendet, wenn die Welt neu geladen wird, daher ist ein Neustart notwendig, damit die neue Einstellung wirksam wird.



## Fazit

Indem du das Fallschaden-Flag in der Konfigurationsdatei der Welt anpasst, hast du die volle Kontrolle darüber, ob Spieler Fallschaden erleiden oder nicht. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />