---
id: minecraft-custom-seed
title: "Minecraft: Custom Seed konfigurieren"
description: Informationen über die Konfiguration eines benutzerdefinierten World Seed für deinen Minecraft-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label:  Custom Seed konfigurieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein Seed in Minecraft ist ein bestimmter Code, der aus Zahlen oder Buchstaben besteht und bestimmt, wie deine Spielwelt generiert wird. Er legt fest, wie Gelände, Biome, Strukturen und Ressourcen in deiner Welt aussehen. Wenn du denselben Seed mit derselben Spielversion und den gleichen Einstellungen verwendest, wird immer dieselbe Welt erstellt. So kannst du einzigartige Welten ganz einfach mit anderen teilen.

:::info Seed Limitierungen
Sobald eine Welt erstellt wurde, kann ihr Seed nicht mehr geändert werden. Seeds legen fest, wie eine Welt generiert wird und wirken sich nur aus, wenn du nach dem Setzen des Seeds eine neue Welt erstellst.
:::

<InlineVoucher />

## Konfiguration

Um einen eigenen Seed zu konfigurieren, stoppe zuerst deinen Server, um Datenkonflikte zu vermeiden. Öffne danach deine `server.properties` Konfigurationsdatei. Diese findest du im Dashboard deines Servers unter **Configs**. Suche dort die Zeile, die mit `level-seed=` beginnt. Dort kannst du deinen gewünschten Seed-Wert eintragen.

![img](https://screensaver01.zap-hosting.com/index.php/s/XBKN9r3CAweP9RG/download)

Ersetze den Beispiel-Code `12345` mit deinem eigenen Seed. Das kann jede beliebige Zahl oder ein Text sein. Nachdem du deinen Seed eingetragen hast, musst du eine neue Welt erstellen, damit er aktiv wird. Der einfachste Weg dafür ist, den `level-name` unter **Configs** auf einen neuen, noch nicht verwendeten Namen zu ändern, zum Beispiel `world1`. So stellt Minecraft sicher, dass ein neuer Welt-Ordner mit deinem Seed erstellt wird.

Wenn du mehr darüber erfahren möchtest, wie du eine bestehende Welt neu erstellen kannst, findest du in unserem [Welt neu erstellen](minecraft-worlds.md#welt-neu-erstellen) Anleitung eine ausführliche erklärung.


## Abschluss
Mit diesen Schritten hast du erfolgreich einen neuen Seed für deine neue Welt festgelegt. Starte deinen Server neu, erkunde deine frisch generierte Welt und genieße dein ganz persönliches Minecraft Abenteuer. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
