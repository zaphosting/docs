---
id: ark_serverlisting
title: Serverlisting Probleme bei Steam Spielen, die Steamworks nutzen
description: Informationen zu Problemen mit dem Serverlisting deines Server, die bei Steam-Spielen auftreten können - ZAP-Hosting.com Dokumentationen
sidebar_label: Serverlisting Probleme
---


Leider haben viele populäre Spiele wie ARK oder Valheim massive Probleme mit dem Listing aller Server in der ingame Serverliste. 

Das liegt daran, dass diese Spiele die Software "Steamworks" für ihr Listing verwenden. 

Steamworks kann maximal 4880 Server listen. Wenn ein Spiel mehr als diese Anzahl aktiver Server hat, wird nur ein kleiner Teil der aktiven Server für den Spieler gelistet. 

Dabei ist es sehr zufällig, ob Spieler 1 den Server Y sieht oder nicht. 
Es kommt daher auch vor, dass Spieler 1 den Server Y sieht, aber Spieler 2 nicht. Spieler 3 hingegen sieht ihn wieder, dafür aber einen anderen Server nicht, den Spieler 1 sieht.


Um auzuschließen, dass es ein Problem bei dem Serveranbieter gibt, kann man den Server unter "Steam" - "Ansicht" - "Server" mit IP und Port suchen. Wird er dort gefunden, ist die Verbindung zwischen Spieler und Server einwandfrei. Hier findet nämlich eine direkte Abfrage seitens des Spielers statt.

Ein gutes Beispiel um das Problem zu validieren ist auch, dass insbesondere ARK Spieler, die das Spiel über Steam geöffnet haben Server nicht finden. Öffnen sie ARK in Epic Games, werden die Server einwandfrei gefunden. Hier wird kein Steamworks genutzt.

Es gibt zu diesem Problem auch verschiedene Spieleentwickler, die sich dazu äußerten. Beispielsweise dachte Garry Newman von Garrysmod, dass das Problem mit seinem Serveranbieter OVH zusammenhängt. Das war jedoch nicht der Fall. Das Problem hat auch ZAP-Hosting und jeder andere Serveranbieter, da es direkt bei Steamworks liegt:

![image](https://user-images.githubusercontent.com/26007280/189939694-fb34c990-8386-4591-a09f-9283b2586fd8.png)

Quelle: https://twitter.com/garrynewman/status/1334446218437681152?s=20

Oder auch Rust, wie sie in Ihrem Blog schreiben:

```
It's not all roses and rainbows when you have such a sudden boost in popularity. 
You start seeing cracks forming in the foundations, most noticeable for us the server browser was never intended to handle such a large amount of servers.
Without going into the technicality this has resulted in many servers not displaying for users and causing a lot of frustration for server owners. 
We're currently working on and exploring solutions so please bear with us.
```

Quelle: https://rust.facepunch.com/blog/

Wir behalten weiterhin ein Auge auf das Problem und informieren hier, wenn es eine Lösung gibt.
