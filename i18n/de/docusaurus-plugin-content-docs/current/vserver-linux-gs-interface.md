---
id: vserver-linux-gs-interface
title: "vServer: Gameserver/TS3 Interface"
description: "Entdecke, wie du ganz easy Gameserver und Voiceserver auf Linux VPS ohne Vorkenntnisse mit einer automatisierten Oberfläche einrichtest → Jetzt mehr erfahren"
sidebar_label: GS/TS3 Interface
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Wenn dir unsere Gameserver-Produkte nicht so zusagen oder du deinen Service auf andere Weise brauchst, ist ein VPS oft die bessere Wahl. Allerdings stehst du dann oft vor der Herausforderung, dass nicht alle Services automatisiert oder vorinstalliert sind. Das Einrichten von Services wie Gameservern, Teamspeak 3 Servern und Musikbots musst du dann selbst übernehmen.

Um dir das Leben leichter zu machen, haben wir eine praktische Lösung für unsere Linux-basierten VPS oder Dedicated Server entwickelt: Die sogenannte Gameserver/Teamspeak 3 Server Schnittstelle (GS/TS3 Interface)!

<YouTube videoId="V6qyQFPp_Ls" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/frWNEMQqcMxzRcM/preview" title="Gameserver auf Linux VPS ohne Vorkenntnisse einrichten!" description="Lernst du besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder lieber entspannt alles aufnimmst!"/>

<InlineVoucher />

## Anwendungsfall

Mit der benutzerfreundlichen GS/TS3 Oberfläche kannst du Teamspeak 3 oder andere ausgewählte Gameserver-Services auf deinem Linux-basierten VPS oder Dedicated Server mit nur wenigen Klicks installieren. Für die Installation brauchst du keine Vorkenntnisse. Die Einrichtung aller nötigen Pakete, Serverdateien und die eigentliche Installation laufen vollautomatisch ab – das spart dir Zeit und Aufwand.

:::warning
Das GS/TS3 Interface Feature funktioniert mit folgenden Betriebssystemen:

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) Wir arbeiten bereits daran, bald weitere und neuere Betriebssysteme und Versionen verfügbar zu machen.
:::



## Verfügbare Services / Spiele

Das GS/TS3 Interface unterstützt die Einrichtung von Gameservern, Voiceservern und Musikbots. Die meisten Games, die wir für unsere Gameserver-Produkte anbieten, sind auch über das GS/TS3 Interface verfügbar. Das gilt für alle Games, die wir aktiv unter Linux betreiben. Alle Games, die nur unter Windows laufen, können leider nicht installiert werden. Dort ist nur eine manuelle Installation möglich, sofern das Game eine Linux-Server-Version unterstützt.

| Services    | Unterstützt |
| ----------- | ---- |
| Gameserver  | ✔️    |
| Voiceserver | ✔️    |
| Musicbot (Sinuxbot)   | ✔️    |



## Installation und Konfiguration

Um das GS/TS3 Interface zu installieren, navigiere im Server-Adminbereich deines Produkts zum Menüpunkt **Einstellungen** und klicke auf den Unterpunkt **Gameserver / TS3**. 

Beim ersten Aufruf des GS/TS3 Interfaces wirst du zum benutzerfreundlichen Setup-Assistenten weitergeleitet. Um die Schnittstelle einzurichten und mit deinem Server zu verbinden, musst du zuerst einen SSH-Schlüssel erstellen. Dieser Schlüssel ist notwendig, damit die Webseite eine sichere Verbindung zum Server aufbauen kann. So kannst du Services wie Gameserver und Teamspeak 3 Server direkt über die Oberfläche einrichten, verwalten und steuern.

Dort erstellst du den SSH-Schlüssel. Klicke dazu auf den Button **SSH-Schlüssel generieren** und füge den Schlüssel anschließend mit dem Button **Schlüssel hinzufügen** hinzu. 


![](https://screensaver01.zap-hosting.com/index.php/s/teZ87eGKRm6iJRa/preview)



Nach Klick auf **Schlüssel hinzufügen** wird der SSH-Schlüssel auf deinem Server gespeichert. Das GS/TS3 Interface kann dann mit deinem Server verbunden werden.



![](https://screensaver01.zap-hosting.com/index.php/s/QqtCFmC3oxPErD9/preview)



:::info
**Tipp:** Falls der SSH-Schlüssel nicht sofort erkannt wird, hilft oft ein Neustart des Servers und ein Neuladen der Seite.
:::

Während der Installation kannst du den aktuellen Fortschritt verfolgen. Beachte, dass die Installation und Konfiguration der Schnittstelle und ihrer Pakete etwas Zeit in Anspruch nehmen kann. In der Regel dauert das zwischen 5 und 15 Minuten.

![](https://screensaver01.zap-hosting.com/index.php/s/xkWQBEp74BqQdM6/preview)

:::info
**Achtung**: Bitte unterbrich den Prozess nicht, bis die Schnittstelle komplett installiert ist. Du erkennst die erfolgreiche Installation daran, dass die Fortschrittsanzeige verschwindet und bei jedem benötigten Paket statt "Fehlt" nun "Installiert" steht.
:::



### Gameserver erstellen

Wenn die Erstellung und Installation des GS/TS3 Interfaces erfolgreich abgeschlossen ist, kannst du mit der Einrichtung der Services starten. Die Installation eines Gameservers erfolgt über den Button **Gameserver installieren** in der Kategorie **Gameserver**.

![](https://screensaver01.zap-hosting.com/index.php/s/4TD3w3dpXrFYNcb/preview)



Im nächsten Schritt kannst du die IP-Adresse des gewünschten Gameservers auswählen (sofern dein Server mehrere IPs hat). Außerdem kannst du den gewünschten Port, die Slot-Anzahl und den RAM-Boost individuell einstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/icfwifbTrmwZQ6q/preview)

Check, ob alle Angaben korrekt sind und deinen Anforderungen entsprechen. Sobald du alle Einstellungen vorgenommen hast, klick auf "Gameserver jetzt installieren", um den Installationsprozess zu starten. Der Gameserver wird dann nach deinen Vorgaben eingerichtet und du kannst bald loslegen. Deinen neu erstellten Gameserver findest du jetzt in der Liste.



![](https://screensaver01.zap-hosting.com/index.php/s/MTRmMwc9GyMFW5A/preview)



Du bist jetzt in der Verwaltung deines Gameservers. Dort kannst du im Menü **Einstellungen** unter **Spiele** das gewünschte Game für deinen Gameserver auswählen und installieren.

![](https://screensaver01.zap-hosting.com/index.php/s/xqxLAAR6jbdmM3Z/preview)

Hier findest du eine Liste aller Games, die du auf deinem Server installieren kannst. In diesem Beispiel wird ein Server mit dem Game (Paket) Minecraft: Paperspigot installiert. Wähle dein Wunschspiel aus und klicke auf den grünen Button, um die Installation zu starten.

![](https://screensaver01.zap-hosting.com/index.php/s/MtrsxLoYxssJLBt/preview)

Es erscheint eine Übersicht mit allen notwendigen Voraussetzungen. Wenn alle Bedingungen erfüllt sind, kannst du den Vorgang mit dem Button **Akzeptieren und installieren** bestätigen.

![](https://screensaver01.zap-hosting.com/index.php/s/GjijXaM3z9EgnYG/preview)

Die Einrichtung des Spiels kann je nach Game etwas dauern. Der Fortschritt wird im Status angezeigt. Danach kannst du deinen Gameserver starten und dich im Spiel verbinden!



### Voiceserver erstellen

Die Installation eines **Voiceservers (Teamspeak 3 Server)** läuft ähnlich ab wie die eines Gameservers. Du musst wieder auf "Gameserver / TS3" klicken. Dort findest du die Option **Voiceserver installieren**, mit der du die Installation des Teamspeak 3 Servers starten kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/xct5DPC57wWeABG/preview)

Im nächsten Schritt kannst du die gewünschten Einstellungen für deinen Teamspeak 3 Server festlegen, z.B. IP-Adresse, Port und Slot-Anzahl. Wenn du alle Infos eingegeben hast, kannst du die Installation mit **Voiceserver jetzt installieren** abschließen.

![](https://screensaver01.zap-hosting.com/index.php/s/2XnJrDEDyLwBsHk/preview)

Check, ob alle Angaben korrekt sind und deinen Anforderungen entsprechen. Sobald du alle Einstellungen vorgenommen hast, klick auf **Teamspeak 3/5 Server jetzt installieren**, um den Installationsprozess zu starten. Den installierten Teamspeak 3 Server findest du dann in der **Voiceserver Übersicht**.

![](https://screensaver01.zap-hosting.com/index.php/s/bgpZJgPjz7Ybpke/preview)

:::info
**Achtung**: Das ist die Instanz, auf der der Teamspeak 3 Server später installiert wird.
:::

Du bist jetzt in der Oberfläche der Instanz deines installierten Teamspeak 3 Servers. Du kannst die Instanz jetzt mit dem Button **Start** starten.

![](https://screensaver01.zap-hosting.com/index.php/s/G96RPrjEdm96CCj/preview)


Klicke nun auf den Menüpunkt **Virtuelle Server**. Dort werden alle installierten Teamspeak 3 Server auf deiner Instanz übersichtlich aufgelistet. Um die Oberfläche des jeweiligen Teamspeak 3 Servers aufzurufen, klick einfach auf das "Augen"-Symbol.

![](https://screensaver01.zap-hosting.com/index.php/s/awJdyTgJPSia5B2/preview)

In der Teamspeak 3 Server Oberfläche findest du alle wichtigen Infos und Einstellungsmöglichkeiten, um deinen Server individuell zu gestalten und zu verwalten. Unter dem Reiter "Autorisierungsschlüssel" kannst du z.B. einen Token erstellen, der dir Admin-Rechte auf deinem Server gibt. So hast du volle Kontrolle über Benutzerverwaltung und Serverzugang.

Unter dem Menüpunkt "Einstellungen" hast du weitere Optionen, deinen Server anzupassen. Hier kannst du z.B. den Namen deines Servers ändern, ein Passwort setzen, um den Zugang zu beschränken, oder eine persönliche Willkommensnachricht hinterlegen, die Nutzer beim Betreten des Servers sehen.

:::caution Infos zu Teamspeak-Lizenzen
Standardmäßig ist keine Lizenz auf dem Teamspeak 3 Server installiert. Das bedeutet, du kannst den Teamspeak 3 Server nur mit bis zu 32 Slots nutzen. Wenn du mehr Slots oder zusätzliche Features möchtest, kannst du eine passende Lizenz direkt bei Teamspeak kaufen.
:::


## Fazit

Glückwunsch, du hast unser GS/TS3 Interface erfolgreich installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Seite und hilft dir gerne weiter! 

<InlineVoucher />