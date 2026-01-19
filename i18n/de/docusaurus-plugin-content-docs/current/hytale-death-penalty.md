---
id: hytale-death-penalty
title: "Hytale: Todesstrafe ändern"
description: "Entdecke, wie die Todesstrafe auf deinem Hytale Gameserver funktioniert → Jetzt mehr erfahren"
sidebar_label: Todesstrafe ändern
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Auf einem Hytale Gameserver bestimmt die **Todesstrafe**, wie Spieler beim Tod beeinflusst werden. Diese Einstellung steuert, in welchem Ausmaß Spielerfortschritt, Items, Haltbarkeit oder andere Gameplay-Folgen nach einem Tod angewendet werden.

:::info Early Access Hinweis

Hytale wurde am 13. Januar 2026 veröffentlicht und befindet sich aktuell im Early Access. Da das Spiel sich noch in aktiver Entwicklung befindet, können sich Server-Software, Konfigurationsdateien, Modding-Support und Installationsabläufe weiterhin ändern.

:::

<InlineVoucher />


## Verfügbare Einstellungen zur Todesstrafe
Die Einstellungen zur Todesstrafe regeln, wie sich der Tod eines Spielers auf Inventarinhalte und Item-Haltbarkeit auswirkt. Diese Optionen erlauben dir zu definieren, ob Items behalten, teilweise verloren oder komplett fallen gelassen werden, sowie wie stark Items beim Tod an Haltbarkeit verlieren.

Folgende Konfigurationsoptionen stehen zur Verfügung:

**ItemsLossMode**  
Diese Einstellung definiert das generelle Verhalten beim Item-Verlust nach dem Tod.  
Folgende Werte sind möglich:

- `None` – Spieler behalten ihr gesamtes Inventar nach dem Tod
- `All` – Alle Items werden beim Tod fallen gelassen
- `Configured` – Item-Verlust wird prozentual über weitere Einstellungen gesteuert

**ItemsAmountLossPercentage**  
Dieser Wert wird nur angewendet, wenn `ItemsLossMode` auf `Configured` steht.  
Er definiert, wie viel Prozent von jedem Item-Stapel beim Tod entfernt werden.  
Beispiel: Ein Wert von `50.0` bedeutet, dass die Hälfte jedes Stapels verloren geht.

**ItemsDurabilityLossPercentage**  
Diese Einstellung steuert, wie viel Haltbarkeit Items beim Tod verlieren.  
Der Wert ist ein Prozentsatz der aktuellen Haltbarkeit und sorgt dafür, dass der Tod Konsequenzen hat, ohne Items komplett zu entfernen.

Zusammen ermöglichen diese Einstellungen eine feine Abstimmung, wie gnädig oder hart der Tod auf deinem Server sein soll.  
Eine sorgfältige Anpassung sorgt für ein ausgewogenes Erlebnis, das zur gewünschten Schwierigkeit und Spielweise passt.



## Konfiguration der Todesstrafe

Die Einstellungen zur Todesstrafe findest du in der Haupt-`config.json` deines Servers. Diese Werte werden beim Serverstart geladen und gelten global für alle Spieler.

Im Konfigurationsfile sind die todesbezogenen Einstellungen Teil der Gameplay-Konfiguration. Um die Todesstrafe hinzuzufügen oder zu ändern, suche folgende Zeile in der `config.json`:

```
"GameplayConfig": "Default",
```

Dieser Eintrag definiert das aktive Gameplay-Konfigurationsprofil. Die Todesstrafe-Konfiguration wird direkt unter dieser Zeile als neuer Block eingefügt. Sobald du die Zeile gefunden hast, füge den Death-Config-Block hinzu, um zu definieren, wie Respawn und Item-Verlust gehandhabt werden:

```
"Death": {
   "RespawnController": {
     "Type": "HomeOrSpawnPoint"
   },
   "ItemsLossMode": "Configured",
   "ItemsAmountLossPercentage": 50.0,
   "ItemsDurabilityLossPercentage": 25.0
 },
```

Das folgende Beispiel zeigt eine typische Konfiguration, bei der Item-Verlust und Haltbarkeitsverlust teilweise angewendet werden:

```
{
  "ItemsLossMode": "Configured",
  "ItemsAmountLossPercentage": 50.0,
  "ItemsDurabilityLossPercentage": 25.0
}
```

In dieser Konfiguration nutzt der Server den `Configured`-Verlustmodus, was bedeutet, dass der Item-Verlust prozentual gesteuert wird.  
Wenn ein Spieler stirbt, wird die Hälfte jedes Item-Stapels entfernt und Items verlieren 25 Prozent ihrer aktuellen Haltbarkeit.

Soll überhaupt kein Item-Verlust stattfinden, kann der Verlustmodus auf `None` gesetzt werden, dann werden die Prozentwerte ignoriert:

```
{
  "ItemsLossMode": "None"
}
```

Für ein härteres Erlebnis, bei dem alle Items beim Tod fallen gelassen werden, kann die Konfiguration so aussehen:

```
{
  "ItemsLossMode": "All"
}
```

Nach der Änderung der `config.json` muss der Server neu gestartet werden, damit die Änderungen wirksam werden.  
Es empfiehlt sich, das Verhalten nach dem Neustart im Spiel zu überprüfen, um sicherzugehen, dass die Todesstrafe der gewünschten Schwierigkeit entspricht.



## Fazit

Mit der konfigurierten Todesstrafe hast du jetzt einen klaren Überblick, wie Spieler-Tode auf deinem Hytale Gameserver gehandhabt werden. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂



<InlineVoucher />