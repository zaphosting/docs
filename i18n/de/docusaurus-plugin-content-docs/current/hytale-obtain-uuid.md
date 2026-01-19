---
id: hytale-obtain-uuid
title: "Hytale: UUID erhalten"
description: "Finde heraus, wie du die UUID eines Spielers findest oder erhältst, um sie in der Serverkonfiguration und bei Berechtigungen zu nutzen → Jetzt mehr erfahren"
sidebar_label: UUID erhalten
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Jeder Spieler auf einem Hytale-Gameserver wird intern durch eine UUID identifiziert, auch bekannt als Universally Unique Identifier. Dieser Identifier ist dauerhaft und ändert sich nicht, selbst wenn der Spieler später seinen Benutzernamen ändert.

UUIDs werden für verschiedene administrative Aufgaben benötigt, wie z.B. das Verwalten von Berechtigungen, das Zuweisen von Gruppen oder das Referenzieren von Spielern in Serverbefehlen und Konfigurationsdateien.

:::info Early Access Hinweis

Hytale wurde am 13. Januar 2026 veröffentlicht und befindet sich aktuell im Early Access. Da sich das Spiel noch in aktiver Entwicklung befindet, können sich Server-Software, Konfigurationsdateien, Modding-Support und Installationsabläufe weiterhin ändern.

:::

<InlineVoucher />


## UUID erhalten

Die UUID eines Spielers kann direkt im Spiel über den integrierten Chat-Befehl des Servers abgefragt werden. Diese Methode ist besonders praktisch, wenn der Spieler bereits online ist und die UUID sofort benötigt wird.

Melde dich mit ausreichenden Berechtigungen an, öffne den Ingame-Chat und führe den UUID-Abfragebefehl für den gewünschten Spieler aus:

```
/whoami <Spielername>
```

Nach Ausführung des Befehls antwortet der Server direkt im Chat mit der UUID, die dem angegebenen Spieler zugeordnet ist. Die zurückgegebene UUID identifiziert diesen Spieler eindeutig und kann für die Verwaltung von Berechtigungen, Gruppen-Zuweisungen, Whitelist-Einträgen oder andere serverseitige Aktionen kopiert werden.



![img](https://screensaver01.zap-hosting.com/index.php/s/E7QrJGn3q79Kzm6/preview)



## Fazit

Das Erhalten der UUID eines Spielers ist ein wichtiger Schritt bei fortgeschrittenen Serververwaltungsaufgaben auf einem Hytale-Gameserver. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂


<InlineVoucher />