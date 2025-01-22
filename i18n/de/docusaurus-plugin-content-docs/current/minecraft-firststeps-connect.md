---
id: _minecraft-firststeps-connect
title: "Minecraft: Zum Server verbinden"
description: Informationen über verschiedene Möglichkeiten, wie du dich mit deinem Minecraft Server von ZAP-Hosting verbinden kannst - ZAP-Hosting Dokumentation
sidebar_label: Zum Server verbinden
services:
  - gameserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

Unsicher, wie du dich mit deinem **Minecraft** Server verbinden kannst oder was du dafür benötigst? Kein Problem, wir helfen dir weiter! Wir führen dich durch alles, was du benötigst - von den erforderlichen Werkzeugen und Informationen bis hin zum eigentlichen Verbindungsprozess und den wesentlichen Punkten, die für eine reibungslose und störungsfreie Verbindung erforderlich sind. Befolge unsere Anleitung und du wirst in kürzester Zeit verbunden sein!

<InlineVoucher />



## Voraussetzungen

Für dieses Spiel ist möglicherweise zusätzliche Software erforderlich, um sich mit dem Gameserver zu verbinden. Für die Vanilla-Version von Minecraft, d. h. ohne zusätzliche Mods oder Modpacks, ist keine zusätzliche Software erforderlich. Wenn du Mods/Modpacks verwenden möchtest, benötigst du auch den passenden Launcher. Welchen Launcher du für die jeweilige Mod oder das Modpack benötigst, siehst du am Namen des Spiels im Dashboard. 

| Minecraft Variante                         | Zusätzliche Software erforderlich |
| ------------------------------------------ | --------------------------------- |
| Minecraft: Vanilla                         | X                                 |
| Minecraft: Paper Spigot                    | X                                 |
| Minecraft: Spigot                          | X                                 |
| Minecraft: Bukkit                          | X                                 |
| Minecraft: Forge                           | ✓                                 |
| Minecraft: Fabric                          | ✓                                 |
| Minecraft mit Mods/Modpacks im Allgemeinen | ✓                                 |




#### Mods
Wenn du Mods verwenden möchtest, dann benötigst du auch den passenden Mod-Loader. Je nachdem, ob du Mods aus Forge oder Fabric verwenden möchtest, benötigst du eines von beiden. 

- [Minecraft: Forge](https://files.minecraftforge.net/net/minecraftforge/forge/) - Um Forge-Mods verwenden zu können, musst du Forge herunterladen und installieren.
- [Minecraft: Fabric](https://fabricmc.net/) - Um Fabric-Mods zu verwenden, musst du Fabric herunterladen und installieren.

Forge und auch Fabric Mods müssen sowohl im Spiel als auch in der Serversoftware manuell installiert werden, damit eine Verbindung hergestellt werden kann.

:::danger Keine Fabric/Forge Mods mischen
Fabric und Forge sind nicht miteinander kompatibel. Forge-Mods müssen mit Forge laufen, und Fabric-Mods müssen mit Fabric laufen. Eine Kombination kann sowohl zu Client- als auch zu Serverabstürzen führen. 
:::


#### Modpacks
Wenn du eines der Modpacks benutzen möchtest, dann benötigst du auch den passenden Launcher. Welchen Launcher du für das jeweilige Modpack benötigst, kannst du anhand des Namens des Spiels im Dashboard sehen. 
- [CurseForge](https://www.curseforge.com/) - Um Modpacks vom Curse / Twitch Launcher zu verwenden, ist es notwendig, diesen herunterzuladen und das Modpack von dort zu installieren. 
- [Feed The Beast](https://www.feed-the-beast.com/) - Um Modpacks aus dem Feed The Beast Launcher zu verwenden, ist es notwendig, diesen herunterzuladen und das Modpack von dort aus zu installieren. 
- [Technic Launcher](https://www.technicpack.net/) - Um Modpacks aus dem Technic Launcher zu verwenden, ist es notwendig, diesen herunterzuladen und das Modpack von dort aus zu installieren. 


## Server-Details abrufen

Du benötigst alle relevanten Informationen, um dich mit deinem Server zu verbinden. Die Informationen über deinen Server findest du im Dashboard der Gameserver-Verwaltung. Zu den wichtigen Informationen gehören folgende: 

- IP-Adresse und Port

Mit den oben genannten wichtigen Informationen solltest du in der Lage sein, deinen Server zu finden und sicherzustellen, dass du dich mit dem richtigen Server verbindest. 

![img](https://screensaver01.zap-hosting.com/index.php/s/RotxFtT3ZMdSWRy/preview)

## Verbindung zum Server herstellen

Die Verbindung zu einem Gameserver kann oftmals über einen oder mehrere Wege hergestellt werden. Die verfügbaren Optionen und Methoden sowie deren Verwendung werden im Folgenden detailliert erläutert. 

<Tabs>
    <TabItem value="connect_solution_server_browser_ingame" label="Server Browser (Im Spiel)" default>

Starte dein Spiel über den Minecraft- oder Mod-Pack-Launcher und navigiere zum Menüpunkt Multiplayer. Klicke dann auf Server hinzufügen. Dort kannst du einen Namen als Platzhalter und die IP-Adresse/Port eingeben.

![img](https://screensaver01.zap-hosting.com/index.php/s/4nAK62sXGLySm4D/download)

</TabItem>

</Tabs>



## Mögliche Probleme und Lösungen

Der Verbindungsaufbau klappt nicht so wie erwartet? Es kann in gewissen Situationen vorkommen, dass der Verbindungsaufbau durch ein technisches Problem fehlschlägt. Wir haben dir im Folgenden die bekanntesten Probleme und dazu gehörigen Lösungsansätze aufgelistet:

#### Nicht sichtbar

Eine fehlende Sichtbarkeit des Servers kann dann vorliegen, wenn die Initialisierung aus einem bestimmten Grund nicht erfolgreich abgeschlossen wurde. Das kann beispielsweise durch eine fehlerhafte Konfiguration oder beschädigten Dateien liegen. Weitere Informationen lassen sich in der Regel in der Server-Konsole oder den Log-Dateien nachvollziehen.

#### Verbindung fehlgeschlagen, Connection timed out.
Die Fehlermeldung bedeutet, dass eine Verbindung mit dem Server nicht innerhalb des vorgesehenen Zeitfensters aufgebaut werden konnte. Die Ursachen dafür können vielfältig sein. Mehr Informationen dazu lassen sich in der Regel in den Logs oder Live Konsole nachvollziehen.

#### Mismatched mod channel list
Diese Fehlermeldung tritt dann auf, wenn eine Differenz bei den Mods zwischen dem Client und dem Server auftritt. Das kann beispielsweise dann vorkommen, wenn einzelne Mods fehlen oder diese für eine andere Version installiert sind. Die Mods sollten in dem Fall vorzugsweise beim Client und beim Server erneut installiert und kontrolliert werden.

#### Fehlende Lösung oder nicht hilfreich

Die genannten Lösungsansätze haben dein Problem noch nicht gelöst oder treffen in deinem Fall nicht zu? In dem Fall stehen wir dir auch im Support täglich zur Verfügung. Erstelle dazu einfach ein **[Ticket](https://zap-hosting.com/de/customer/support/)** und erläutere uns dein Problem. Wir werden uns dies dann so schnell wie möglich anschauen und dir bei der Lösung des Problems entsprechend weiterhelfen!



## Abschluss

Glückwunsch, vorausgesetzt, dass du alle Schritte befolgt hast, solltest du erfolgreich eine Verbindung zum Server hergestellt haben. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂