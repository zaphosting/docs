---
id: minecraftbedrock_behaviorresourcepacks
title: Minecraft Bedrock: Behavior/Resource Packs installieren
description: Informationen, wie du Behaviour/Resource Packs auf deinen Minecraft Bedrock Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Behavior/Resource Packs installieren
---

## 🖱 Welt vom Server downloaden

Als erstes musst du den Server herunterfahren, deine Welt vom Server downloaden und zu deinem Minecraft hinzufügen.
(Falls du einfach eine Frische Welt haben möchtest, ignoriere den Schritt und gehe direkt zu "Addon hinzufügen"
Für das downloaden kannst du dich einfach per FTP auf den Server verbinden und den Welten Ordner downloaden den du unter "worlds" findest.
Nach dem download kannst du den Ordner einfach hier einfügen:

```
C:\Users\%username%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

![](https://screensaver01.zap-hosting.com/index.php/s/NzTt3KAAYE75q5c/preview)

## 🎮 Addon Hinzufügen
Öffne nun die .mcpack Datei von deinem Addon. Das Spiel sollte sich öffnen und automatisch das Addon importieren.

![](https://screensaver01.zap-hosting.com/index.php/s/sqArcir3gsEmi5c/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/fkZBGKf3obsEkPk/preview)

Die Welt die du runtergeladen hast von deinem Server sollte nun angezeigt werden, falls du die Welt nicht runtergeladen hast clicke einfach auf "Neu erstellen"

Hier hast du die Option deine Resourcen & Behavior packs auszuwählen

![](https://screensaver01.zap-hosting.com/index.php/s/SzDbFoJQK37okye/preview)

Stelle sicher das du hier alles ausgewählt hast was du haben möchtest und gehe dann auf "Spielen".
Deine Addons sollten nun im Spiel verfügbar sein. Funktioniert alles, schliesse einfach Minecraft.

## 📀 Welt auf den Server hochladen

Gehe nun wieder auf FileZilla.

Lösche dort nun die Welt die du vorher heruntergeladen hast, da wir diese nun ersetzen werden.

Lade jetzt einfach wieder den Ordner auf deinen Server hoch. Wichtig dabei ist das der Name sich nicht verändert hat.

Ein letzter Schritt kommt noch. In dem Welt Ordner auf deinem PC hast du jetzt die Ordner "behavior_packs" und/oder "resource_packs"

![](https://screensaver01.zap-hosting.com/index.php/s/yxCQswKxbGMXCqC/preview)

Lade diese jeweils noch in ihre richtigen Ordner auf dem Server hoch.

Diese sind in dem gleichen Ordner wo auch der "worlds" Ordner liegt.

Anschliessend musst du noch server.properties öffnen und die Zeile

```
texturepack-required=false
```

auf

```
texturepack-required=true
```

setzen. Dies stellt sicher das Spieler die auf deinen Server joinen auch die erforderlichen Resourcen downloaden.

![](https://screensaver01.zap-hosting.com/index.php/s/5DWLKKkPgSJSFsE/preview)

Wenn das getan ist musst du nurnoch den Server starten, joinen und dann solltest du dein Addon benutzen können.

![](https://screensaver01.zap-hosting.com/index.php/s/R8FtE4MSB9RognC/preview)
