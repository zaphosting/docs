---
id: rust-server-wipe
title: "Rust: Server Wipe – Halte Deinen Server Ausgeglichen und Sauber"
description: "Erfahre, was Rust Server Wipes sind, warum sie notwendig sind und wie du einen Wipe auf deinem Rust Gameserver durchführst → Jetzt mehr erfahren"
sidebar_label: Server Wipe
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

In **Rust** setzt ein Server Wipe Teile der Spielwelt zurück, um allen Spielern einen frischen Start zu ermöglichen. Mit der Zeit werden Rust-Maps stark bebaut mit großen Basen, angesammelten Ressourcen und etablierten Spielergruppen. Das kann das Servergleichgewicht und die Performance beeinträchtigen.

Ein Server Wipe entfernt den bisherigen Fortschritt und stellt eine saubere Umgebung wieder her, damit Spieler von Null anfangen können. Viele Rust-Communities führen regelmäßig Wipes durch, um das Gameplay fair und spannend zu halten – besonders bei neuen Updates oder Maps.

Je nach Wipe-Typ werden entweder die **Map**, die **Spieler-Blueprints** oder **beide** zurückgesetzt.

<InlineVoucher />



## Was ein Server Wipe bewirkt

Ein Rust Server Wipe löscht gespeicherte Welt- oder Spielerfortschrittsdaten. Dazu gehören:

- Von Spielern gebaute Strukturen und Basen  
- Spielerinventare und gelagerte Items  
- Erkundungsdaten der Map  
- Gelernte Blueprints (je nach Wipe-Typ)

Nach einem Wipe verhält sich der Server wie eine frische Welt, in der Spieler Ressourcen sammeln, Basen neu bauen und den Fortschritt neu erlernen müssen.



## Arten von Rust Wipes

Rust unterstützt verschiedene Wipe-Typen, je nachdem, was du zurücksetzen möchtest. Die folgenden Wipe-Arten werden erklärt:

### Map Wipe

Ein **Map Wipe** löscht die komplette Welt-Save-Datei. Alle Basen, Strukturen und Map-Fortschritte werden entfernt. Beim Neustart des Servers wird eine neue Map generiert oder heruntergeladen. Der Blueprint-Fortschritt bleibt erhalten, sofern kein Blueprint Wipe durchgeführt wird.

### Blueprint Wipe

Ein **Blueprint Wipe** setzt alle gelernten Baupläne zurück. Spieler müssen Items erneut erforschen, bevor sie sie herstellen können. Dieser Wipe betrifft nur den Fortschritt und setzt die Map selbst nicht zurück.

### Full Wipe

Ein **Full Wipe** setzt sowohl die Map als auch alle Spieler-Blueprints zurück. So entsteht eine komplett frische Server-Umgebung, die oft für saisonale Resets oder große Updates genutzt wird.



## Warum Server Wipes wichtig sind

Server Wipes helfen, eine gesunde Rust Server-Umgebung zu erhalten. Mit der Zeit sammeln sich viele Strukturen, Lagercontainer und Welt-Entitäten an. Das kann die Server-Performance und das Gameplay-Gleichgewicht negativ beeinflussen. Regelmäßige Wipes bieten folgende Vorteile:

- Stellt die Server-Performance wieder her  
- Schafft einen Neustart für alle Spieler  
- Verhindert, dass dominante Clans die Map dauerhaft kontrollieren  
- Ermöglicht das Einspielen neuer Maps oder Map-Seeds

Viele Rust-Communities führen geplante Wipes wöchentlich, zweiwöchentlich oder monatlich durch – je nach Serverstil.



## Einen Server Wipe durchführen

Um einen Wipe auf deinem Rust Gameserver durchzuführen, greif über den [FTP-Zugang](gameserver-ftpaccess.md) auf deine Server-Dateien zu. Suche dann die Save-Dateien im Rust Server-Verzeichnis. Diese Dateien beinhalten typischerweise:

```
proceduralmap.*
player.blueprints.*
player.deaths.*
player.identities.*
player.states.*
```
Welche Dateien du löscht, bestimmt den Wipe-Typ. Löscht du die `proceduralmap.*` Dateien, führst du einen **Map Wipe** durch und entfernst die bestehende Welt. Löscht du die `player.blueprints.*` Dateien, machst du einen **Blueprint Wipe**.

![img](https://screensaver01.zap-hosting.com/index.php/s/QdeoFWbaaQz7Yaf/preview)

Wenn du beide löschst, entsteht ein **Full Wipe**. Nach dem Löschen der gewünschten Dateien startest du den Server neu. Der Server generiert automatisch eine neue Welt und die Spieler können frisch starten.



## Fazit

Glückwunsch! Du weißt jetzt, wie Rust Server Wipes funktionieren und wie du sie durchführst. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />