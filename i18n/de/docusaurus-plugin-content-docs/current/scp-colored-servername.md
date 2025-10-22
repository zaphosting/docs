---
id: scp-colored-servername
title: "SCP Secret Laboratory: Farbiger Servername"
description: "Lerne, wie du deinen Servernamen mit farbigem Text für bessere Sichtbarkeit und Style anpasst → Jetzt mehr erfahren"
sidebar_label: Farbiger Servername
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Damit dein Server in der öffentlichen Serverliste angezeigt wird, muss eine Pastebin-ID gesetzt werden. Unsere Anleitung dazu findest du hier: [Pastebin ID](scp-pastebin.md).

Der Server muss ausgeschaltet sein, damit Änderungen wirksam werden.
:::

<InlineVoucher />

Öffne deine Servereinstellungen und prüfe, ob bei 'SCP Servername' nichts eingetragen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/Y9BXkJnBGXy3jWP/preview)

Wenn du sicher bist, dass dort nichts steht, navigiere bitte zum Tab 'Configs', der eine Menüebene unter den Einstellungen liegt.

Öffne jetzt die config_gameplay.txt, indem du den blauen Button drückst.

![](https://screensaver01.zap-hosting.com/index.php/s/FAm8KQfAonpTWp2/preview)

Unser Config-Editor ist jetzt offen. Du kannst deinen Servernamen mit "server_name" anpassen. Mit [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) kannst du verschiedene Farben verwenden.

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

In diesem Beispiel möchte ich, dass "Grüner Text", "Blauer Text" und "Roter Text" in der passenden Farbe angezeigt werden.

Dafür musst du den Tag `<color="FARBE">Dein Text</color>` verwenden. Alle verfügbaren Farben findest du [hier](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html). Es ist auch möglich, andere Attribute wie die Größe zu ändern.
:::info
Wichtig: Die Anführungszeichen " " um die Farbe im Tag sind Pflicht, wie im obigen Beispiel gezeigt.
:::

Wenn du mit deiner Anpassung fertig bist, speichere sie.

:::info
Starte deinen Server neu, dann wird dein Servername farbig angezeigt.
:::

<InlineVoucher />