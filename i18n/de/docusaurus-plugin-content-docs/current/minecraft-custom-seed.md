---
id: minecraft-custom-seed
title: "Minecraft: Custom World Seed"
description: Informationen über die Einrichtung eines Custom World Seed für deinen Minecraft-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Custom World Seed
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein Seed in Minecraft ist ein bestimmter Code aus Zahlen oder Buchstaben, der bestimmt, wie deine Spielwelt generiert wird. Er formt das Terrain, die Biome, die Strukturen und die Ressourcen, die du in deiner Welt entdecken wirst. Wenn du denselben Seed mit derselben Spielversion und denselben Einstellungen verwendest, entsteht immer dasselbe Weltlayout, was das Teilen einzigartiger Welten mit anderen leicht macht.

Denken daran, dass du den Seed für eine bestehende Welt nicht ändern kannst. Der Seed wirkt sich nur auf die Generierung einer neuen Welt aus. Um einen anderen Seed zu verwenden, musst du immer eine neue Welt erstellen, nachdem du diesen gesetzt hast.

<InlineVoucher />



## Konfiguration

Um einen benutzerdefinierten Seed zu konfigurieren, stoppe zunächst deinen Server, um Datenkonflikte zu vermeiden. Öffne dann deine `server.properties` Datei. Du findest diese Konfigurationsdatei in der Verwaltung deines Servers unter **Configs**.

![img](https://screensaver01.zap-hosting.com/index.php/s/XBKN9r3CAweP9RG/download)

Suche nach der Zeile, die mit `level-seed=` beginnt. Hier kannst du den gewünschten Seed-Wert eingeben. Zum Beispiel:

```
level-seed=12345
```

Ersetze `12345' durch deinen eigenen Seed-Code. Dies kann eine beliebige Zahl oder eine beliebige Zeichenkette sein. Nachdem du deinen eigenen Seed festgelegt hast, musst du eine neue Welt erzeugen, damit dieser wirksam wird.

Der einfachste Weg, dies zu tun, ist, den `Level-Namen` in den **Einstellungen** in einen neuen, unbenutzten Namen zu ändern, zum Beispiel `world1`. Dadurch wird sichergestellt, dass Minecraft einen neuen Weltordner mit deinem neuen Seed erstellt.

Wenn du mehr darüber wissen möchtest, wie du eine bestehende Welt neu erstellst, kannst du in unserer [Welten generieren](minecraft-worlds.md) Anleitung nachlesen, wie das geht. Starte schließlich deinen Server neu. Minecraft wird nun eine neue Welt mit deinem benutzerdefinierten Seed erstellen.

## Abschluss

Mit diesen Schritten hast du erfolgreich einen neuen Seed für deine neue Welt gesetzt. Starte deinen Server neu, erkunde deine frisch generierte Welt und genieße dein eigenes einzigartiges Minecraft-Abenteuer. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂