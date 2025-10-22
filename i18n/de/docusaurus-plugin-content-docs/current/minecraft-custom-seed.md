---
id: minecraft-custom-seed
title: "Minecraft: Eigener Welt-Seed"
description: "Entdecke, wie du einzigartige Minecraft-Welten erstellst, indem du eigene Seeds für neue Abenteuer und Weltgenerierung festlegst → Jetzt mehr erfahren"
sidebar_label: Eigener Welt-Seed
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein Seed in Minecraft ist ein spezieller Code aus Zahlen oder Buchstaben, der bestimmt, wie deine Spielwelt generiert wird. Er formt das Terrain, Biome, Strukturen und Ressourcen, die du in deiner Welt findest. Mit dem gleichen Seed, der gleichen Spielversion und den gleichen Einstellungen wird immer dieselbe Welt generiert – perfekt, um einzigartige Welten mit anderen zu teilen.

Beachte, dass du den Seed für eine bestehende Welt nicht ändern kannst. Der Seed beeinflusst nur die Generierung einer neuen Welt. Um einen anderen Seed zu nutzen, musst du also immer eine neue Welt erstellen, nachdem du ihn eingestellt hast.

<InlineVoucher />

## Konfiguration

Um einen eigenen Seed einzustellen, stoppe zuerst deinen Server, um Datenkonflikte zu vermeiden. Öffne dann deine `server.properties` Datei. Diese findest du im Admin-Panel deines Servers unter **Configs**.

![img](https://screensaver01.zap-hosting.com/index.php/s/XBKN9r3CAweP9RG/download)

Suche die Zeile, die mit `level-seed=` beginnt. Hier kannst du deinen gewünschten Seed eingeben. Zum Beispiel:

```
level-seed=12345
```

Ersetze `12345` durch deinen eigenen Seed-Code. Das kann jede beliebige Zahl oder Textzeichenfolge sein. Nachdem du deinen eigenen Seed eingestellt hast, musst du eine neue Welt generieren, damit die Änderung wirksam wird.

Am einfachsten geht das, indem du den `level-name` in den **Einstellungen** auf einen neuen, noch nicht genutzten Namen änderst, zum Beispiel `world1`. So stellt Minecraft sicher, dass ein frischer Welt-Ordner mit deinem neuen Seed erstellt wird.

Wenn du wissen möchtest, wie du eine bestehende Welt neu erstellen kannst, schau dir unsere [Welt neu erstellen](minecraft-worlds.md) Anleitung mit detaillierten Schritten an. Zum Schluss startest du deinen Server wieder. Minecraft generiert jetzt eine neue Welt mit deinem eigenen Seed.

## Fazit

Mit diesen Schritten hast du erfolgreich einen neuen Seed für deine neue Welt eingestellt. Starte deinen Server neu, erkunde deine frisch generierte Welt und genieße dein ganz eigenes Minecraft-Abenteuer. Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />