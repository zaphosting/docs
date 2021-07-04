---
id: vserver_windows_expand_disk
title: vServer: Festplatte auf Windows Server erweitern
description: Informationen, wie du die Festplatte deines Windows vServers von ZAP-Hosting nach einem Upgrade erweitern kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Festplatte erweitern
---

## 💾Festplattenspeicher über die Konsole hinzufügen

Um deine Festplatte über die Konsole zu erweitern, musst du dich via RDP mit dem Server verbinden. Im Anschluss, gibst du in die Suchzeile **CMD** ein.

![](https://screensaver01.zap-hosting.com/index.php/s/LxemaKjEetCRKzy/preview)

Nun gibst du folgende Befehle nacheinander ein: 
1. **DISKPART**
2. **select volume 2**
3. **extend filesystem**

Anschließend wurde die Festplatte erweitert.

![](https://screensaver01.zap-hosting.com/index.php/s/ZE4LJAQBraGMb7J/preview)

## 💾Festplattenspeicher über die Einstellungen hinzufügen

Um deine Festplatte über die Einstellungen von Windows zu erweitern, musst du in die Suchzeile **Festplatte** eingeben. Anschließend erscheint dann als Vorschlag **Festplattenpartition erstellen und formatieren**.

![](https://screensaver01.zap-hosting.com/index.php/s/nNKPr2rENxHAnQq/preview)

Dort siehst du, welcher Speicher noch nicht zugewiesen worden ist. Um diesen nun einzubinden, musst du lediglich einen **Rechtsklick** machen und dann auf **Volumen erweitern...**.

![](https://screensaver01.zap-hosting.com/index.php/s/TSRZsFC4YTwjNwY/preview)

Anschließend einfach die Seiten durchklicken auf **Weiter** durchgehen und anschließend auf **Fertig stellen**.

![](https://screensaver01.zap-hosting.com/index.php/s/2fbeX38CocBQijw/preview)

Nun kann der erweiterte Speicher eingesehen und genutzt werden.
