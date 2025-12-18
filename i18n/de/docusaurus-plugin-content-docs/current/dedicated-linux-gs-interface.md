---
id: dedicated-linux-gs-interface
title: "Dedicated Server: Gameserver/TS3 Interface"
description: "Entdecke, wie du ganz easy Gameserver, Voiceserver und Musikbots auf Linux VPS oder Dedicated Servern einrichtest → Jetzt mehr erfahren"
sidebar_label: GS/TS3 Interface
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Wenn dir unsere Gameserver-Produkte nicht so zusagen oder du deinen Service auf andere Weise brauchst, ist ein VPS oder Dedicated Server oft die bessere Wahl. Allerdings stehst du dann oft vor der Herausforderung, dass nicht alle Services automatisiert oder vorinstalliert sind. Das Einrichten von Services wie Gameservern, Teamspeak 3 Servern und Musikbots musst du dann selbst übernehmen.

Um dir das Leben leichter zu machen, haben wir eine praktische Lösung für unsere Linux-basierten VPS oder Dedicated Server entwickelt: Das sogenannte Gameserver/Teamspeak 3 Server Interface (GS/TS3 Interface)!

## Anwendungsfall

Mit dem benutzerfreundlichen GS/TS3 Interface kannst du Teamspeak 3 oder andere ausgewählte Gameserver-Services auf deinem Linux-basierten VPS oder Dedicated Server mit nur wenigen Klicks installieren. Für die Installation brauchst du keine Vorkenntnisse. Die Einrichtung aller nötigen Pakete, Serverdateien und die eigentliche Installation laufen vollautomatisch ab – das spart dir Zeit und Aufwand.

:::warning
Das GS/TS3 Interface Feature funktioniert mit folgenden Betriebssystemen:

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) Wir arbeiten bereits daran, bald weitere und neuere Betriebssysteme und Versionen verfügbar zu machen.
:::

## Verfügbare Services & Games

Das GS/TS3 Interface unterstützt die Einrichtung von Gameservern, Voiceservern und Musikbots. Die meisten Games, die wir für unsere Gameserver-Produkte anbieten, sind auch über das GS/TS3 Interface verfügbar. Das gilt für alle Games, die wir aktiv unter Linux betreiben. Alle Games, die nur unter Windows laufen, können leider nicht installiert werden. Dort ist nur eine manuelle Installation möglich, sofern das Game eine Linux-Server-Version unterstützt.

| Services    | Unterstützt |
| ----------- | ----------- |
| Gameserver  | ✔️          |
| Voiceserver | ✔️          |
| Musikbot (Sinusbot)  | ✔️          |

## Installation und Konfiguration

Um das GS/TS3 Interface zu installieren, gehst du im Server-Adminbereich deines Produkts ins Menü **Einstellungen** und klickst auf den Unterpunkt **Gameserver / TS3**.

Beim ersten Aufruf des GS/TS3 Interfaces wirst du zum benutzerfreundlichen Setup-Assistenten weitergeleitet. Um das Interface einzurichten und mit deinem Server zu verbinden, wählst du ein unterstütztes Betriebssystem aus und gibst die Login-Daten des Root-Users ein.

![](https://screensaver01.zap-hosting.com/index.php/s/dLeLDKdmdiZ74CP/download)

Sobald Server und Website erfolgreich verbunden sind, kannst du das GS/TS3 Interface erstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/FK9mP3BgzrPmH7S/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/JL7jyTKbCEx8FBZ/preview)

:::info
**Achtung**: Bitte fahre erst fort, wenn das Interface komplett installiert ist. Du erkennst die erfolgreiche Installation daran, dass die Fortschrittsanzeige verschwunden ist und statt „Fehlt“ bei jedem benötigten Paket „Installiert“ steht.
:::

### Gameserver erstellen

Wenn die Erstellung und Installation des GS/TS3 Interfaces erfolgreich abgeschlossen ist, kannst du mit der Einrichtung der Services starten. Die Installation eines Gameservers erfolgt über den Button **Gameserver installieren** in der Kategorie **Gameserver**.

![](https://screensaver01.zap-hosting.com/index.php/s/QinM7KtFwcAp5pE/preview)

Im nächsten Schritt kannst du die IP-Adresse des gewünschten Gameservers auswählen (vorausgesetzt, dein Server hat mehrere IPs). Außerdem kannst du Port, Slot-Anzahl und RAM-Boost individuell einstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/cqWwZbXT77okeDa/preview)

Check, ob alle Angaben korrekt sind und deinen Anforderungen entsprechen. Sobald du alles eingestellt hast, klick auf „Gameserver jetzt installieren“, um den Installationsprozess zu starten. Der Gameserver wird dann nach deinen Vorgaben eingerichtet und du kannst bald loslegen. Deinen neu erstellten Gameserver findest du jetzt in der Liste.

![](https://screensaver01.zap-hosting.com/index.php/s/9WkJnxzkaEHmri7/preview)

Du bist jetzt in der Verwaltung deines Gameservers. Dort kannst du im Menü **Einstellungen** unter **Games** das gewünschte Game für deinen Gameserver auswählen und installieren.

![](https://screensaver01.zap-hosting.com/index.php/s/6pxEbWttos6HAYt/preview)

Hier findest du eine Liste aller Games, die du auf deinem Server installieren kannst. Im Beispiel wird ein Server mit dem Game (Paket) Minecraft: Paperspigot installiert. Wähle dein Wunschgame aus und klick auf den grünen Button, um die Installation zu starten.

![](https://screensaver01.zap-hosting.com/index.php/s/gazW2itexCJd7cY/preview)

Es erscheint eine Übersicht mit allen notwendigen Voraussetzungen. Wenn alle Bedingungen erfüllt sind, kannst du den Vorgang mit dem Button **Akzeptieren und installieren** bestätigen.

![](https://screensaver01.zap-hosting.com/index.php/s/jeQC7dp6zpe3ny4/preview)

Die Einrichtung des Games kann je nach Spiel etwas dauern. Der Fortschritt wird im Status angezeigt. Danach kannst du deinen Gameserver starten und dich im Spiel verbinden!

### Voiceserver erstellen

Die Installation eines **Voiceservers (Teamspeak 3 Server)** läuft ähnlich ab wie die eines Gameservers. Du klickst wieder auf „Gameserver / TS3“. Dort findest du die Option **Voiceserver installieren**, mit der du die Installation des Teamspeak 3 Servers starten kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/mi8p3NTfwBBExsD/preview)

Im nächsten Schritt kannst du die gewünschten Einstellungen für deinen Teamspeak 3 Server festlegen, z. B. IP-Adresse, Port und Slot-Anzahl. Wenn du alle Infos eingegeben hast, kannst du die Installation mit **Voiceserver jetzt installieren** abschließen.

![](https://screensaver01.zap-hosting.com/index.php/s/ajfzxsJfCFdfBac/preview)

Check nochmal, ob alle Angaben stimmen und deinen Anforderungen entsprechen. Sobald du alles eingestellt hast, klick auf **Teamspeak 3/5 Server jetzt installieren**, um den Installationsprozess zu starten. Den installierten Teamspeak 3 Server findest du dann in der **Voiceserver Übersicht**.

![](https://screensaver01.zap-hosting.com/index.php/s/YaEYorRG7TJGpmB/preview)

:::info
**Achtung**: Das ist die Instanz, auf der der Teamspeak 3 Server später installiert wird.
:::

Du bist jetzt im Interface der Instanz deines installierten Teamspeak 3 Servers. Du kannst die Instanz jetzt mit dem Button **Start** starten.

![](https://screensaver01.zap-hosting.com/index.php/s/SmqHB24ozJimBY9/preview)

Klick jetzt auf den Menüpunkt **Virtuelle Server**. Dort werden alle installierten Teamspeak 3 Server auf deiner Instanz übersichtlich aufgelistet. Um das Interface des jeweiligen Teamspeak 3 Servers aufzurufen, klick einfach auf das „Augen“-Symbol.

![](https://screensaver01.zap-hosting.com/index.php/s/E3ZqxC9rPjWwC5F/preview)

Im Teamspeak 3 Server Interface findest du alle wichtigen Infos und Einstellungsmöglichkeiten, um deinen Server individuell zu gestalten und zu verwalten. Zum Beispiel kannst du unter dem Tab „Autorisierungsschlüssel“ einen Token erstellen, der dir Admin-Rechte auf deinem Server gibt. Damit hast du volle Kontrolle über Benutzerverwaltung und Serverzugang.

Unter dem Menüpunkt „Einstellungen“ hast du weitere Optionen, deinen Server anzupassen. Hier kannst du z. B. den Namen deines Servers ändern, ein Passwort setzen, um den Zugang zu beschränken, oder eine persönliche Willkommensnachricht hinterlegen, die Nutzer beim Betreten des Servers sehen.

:::caution Infos zu Teamspeak-Lizenzen
Standardmäßig ist keine Lizenz auf dem Teamspeak 3 Server installiert. Das bedeutet, du kannst nur einen Teamspeak 3 Server mit bis zu 32 Slots nutzen. Wenn du mehr Slots oder zusätzliche Funktionen für deinen Teamspeak 3 Server möchtest, kannst du eine passende Lizenz direkt bei Teamspeak kaufen.
:::

## Fazit

Glückwunsch, du hast unser GS/TS3 Interface erfolgreich installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Seite und hilft dir gerne weiter!