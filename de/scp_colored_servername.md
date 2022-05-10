---
id: scp_colored_servername
title: Farbiger Servername
sidebar_label: Farbiger Servername
---

> Damit dein Server in der öffentlichen Serverliste angezeigt wird muss eine Pastebin ID gesetzt sein. Unsere Anleitung dazu findest du [hier](scp_pastebin.md).

> Damit Änderungen wirksam werden muss der Server ausgeschaltet sein.

Öffne die Einstellungen deines Servers und stelle sicher das in 'SCP Servername' nichts eingetragen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/qkqo9y35a7WGXpX/preview)

Wenn du sichergestellt hast das kein Name eingetragen ist, öffnen nun die 'Configs' deines Gameservers. Welche sich einen Menüpunkt unterhalb befinden.

Öffne nun die config_gameplay.txt in dem du auf den blauen Button klickst.

![](https://screensaver01.zap-hosting.com/index.php/s/JdJsGtQtBaKgDPa/preview)

Die Config-Datei öffnet sich nun, bei server_name kann nun mit [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) verschiedene Farben definiert werden.

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

In diesem Beispiel möchte ich dass "Grüner Text", "Blauer Text" und "Roter Text" in der jeweiligen Farbe angezeigt wird.

Hierzu benutzen wir den Tag `<color=FARBE>Dein Text</color>` eine Auswahl von verschiedenen Farben findest du [hier](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) es ist ebenfalls möglich die größe und andere Attribute zu verändern.

Wenn du alle Änderungen deinen Wünschen nach verändert hast, müssen diese noch gespeichert werden.

> Starte nun deinen Server, dann wird dein Servername farbig sein.
