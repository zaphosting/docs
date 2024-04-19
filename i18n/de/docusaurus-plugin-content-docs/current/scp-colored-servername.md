---
id: scp-colored-servername
title: "SCP Secret Laboratory: Farbiger Servername"
description: Information, wie du den Servernamen bei deinem SCP Server von ZAP-Hosting färben kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Farbiger Servername
---

:::info
Damit dein Server in der öffentlichen Serverliste angezeigt wird, muss eine Pastebin ID gesetzt sein. Unsere Anleitung dazu findest du [hier](scp-pastebin.md).

Damit Änderungen wirksam werden, muss der Server ausgeschaltet sein.
:::

Öffne die Einstellungen deines Servers und stelle sicher, dass in 'SCP Servername' nichts eingetragen ist.

![image](https://user-images.githubusercontent.com/26007280/221601888-41f05784-3e35-4076-b62b-ac6499f9b8a4.png)

Wenn du sichergestellt hast, dass kein Name eingetragen ist, öffnen nun die 'Configs' deines Gameservers, welche sich einen Menüpunkt unterhalb befinden. Bearbeite als Nächstes die config_gameplay.txt, in dem du auf den blauen Button klickst.

![image](https://user-images.githubusercontent.com/26007280/221601941-477c3ef0-8e22-47c3-b86c-c8fd2eaacb60.png)

Die Konfigurationsdatei öffnet sich jetzt, bei server_name können nun mit dem [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) verschiedene Farben definiert werden.

![image](https://user-images.githubusercontent.com/26007280/221601977-06b16924-3119-48ab-bba8-f1c830a753e9.png)

In diesem Beispiel soll "Grüner Text", "Blauer Text" und "Roter Text" in der jeweiligen Farbe angezeigt wird.

Hierzu benutzen wir den Tag `<color="FARBE">Dein Text</color>`. Eine Auswahl von verschiedenen Farben findest du [hier](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html). Es ist ebenfalls möglich, die Größe und andere Attribute zu verändern.
:::info
Es ist wichtig, daran zu denken, dass Quotes "" um die tatsächliche Farbe innerhalb des Tags erforderlich ist. Wie das Beispiel oben hat.
:::

Wenn du alle Änderungen deinen Wünschen nach verändert hast, müssen diese noch gespeichert werden. Starte nun deinen Server, dann wird dein Servername farbig sein.
