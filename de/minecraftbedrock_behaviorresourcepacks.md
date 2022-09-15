---
id: minecraftbedrock_behaviorresourcepacks
title: Minecraft Bedrock: Behavior/Resource Packs installieren
description: Informationen, wie du Behaviour/Resource Packs auf deinen Minecraft Bedrock Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Behavior/Resource Packs installieren
---

Hier gelangst du zu unseren Minecraft Servern: [Minecraft Server mieten](https://zap-hosting.com/de/minecraft-server-mieten/)

## 🖱 Welt vom Server downloaden

Als erstes musst du den Server herunterfahren, deine Welt vom Server downloaden und zu deinem Minecraft hinzufügen.
(Falls du einfach eine Frische Welt haben möchtest, ignoriere den Schritt und gehe direkt zu "Addon hinzufügen"
Für das downloaden kannst du dich einfach per FTP auf den Server verbinden und den Welten Ordner downloaden den du unter "worlds" findest.
Nach dem download kannst du den Ordner einfach hier einfügen:

```
C:\Users\%username%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

## 🎮 Addon Hinzufügen
Öffne nun die .mcpack Datei von deinem Addon. Das Spiel sollte sich öffnen und automatisch das Addon importieren. Die Welt die du runtergeladen hast von deinem Server sollte nun angezeigt werden, falls du die Welt nicht runtergeladen hast clicke einfach auf "Neu erstellen". Stelle sicher das du hier alles ausgewählt hast was du haben möchtest und gehe dann auf "Spielen". Deine Addons sollten nun im Spiel verfügbar sein. Funktioniert alles, schliesse einfach Minecraft.

## 📀 Welt auf den Server hochladen

Gehe nun wieder auf FileZilla.Lösche dort nun die Welt die du vorher heruntergeladen hast, da wir diese nun ersetzen werden. Lade jetzt einfach wieder den Ordner auf deinen Server hoch. Wichtig dabei ist das der Name sich nicht verändert hat.

Ein letzter Schritt kommt noch. In dem Welt Ordner auf deinem PC hast du jetzt die Ordner "behavior_packs" und/oder "resource_packs". Lade diese jeweils noch in ihre richtigen Ordner auf dem Server hoch. Diese sind in dem gleichen Ordner wo auch der "worlds" Ordner liegt. Anschliessend musst du noch server.properties öffnen und die Zeile

```
texturepack-required=false
```

zu

```
texturepack-required=true
```

setzen. Dies stellt sicher das Spieler die auf deinen Server joinen auch die erforderlichen Resourcen downloaden. Wenn das getan ist musst du nurnoch den Server starten, joinen und dann solltest du dein Addon benutzen können.
