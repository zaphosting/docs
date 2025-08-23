---
id: dedicated-linux-gs-interface
title: "Dedicated Server: Gameserver/TS3 Interface"
description: Informationen, wie du über das Gameserver/TS3 Interface mit wenigen Klicks TS und Gameserver auf deinen Dedicated Server von ZAP-Hosting.com installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: GS/TS3 Interface
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Wenn Gameserver-Produkte nicht deinem Geschmack oder Erwartungen entsprechen oder du deinen Dienst noch anderweitig benötigst, ist die Nutzung eines Dedicated Servers häufig die bessere Option. Allerdings steht man dort oft vor der Herausforderung, dass nicht alle Dienste automatisiert vorgegeben oder installiert sind. Die Einrichtung der Dienste, wie zum Beispiel der Installation von Gameserver, Teamspeak 3 Server und Musikbots, muss eigenständig durchgeführt werden.

Um dieses Problem zu lösen, haben wir für unsere Linux-basierten vServer oder Dedicated Server eine praktische Lösung entwickelt. Das sogenannte Gameserver / Teamspeak 3 Server Interface (GS/TS3 Interface)!

<InlineVoucher />

## Anwendung

Mit dem benutzerfreundlichen GS/TS3 Interface kannst du mit nur wenigen Klicks einen Teamspeak 3 oder andere verschiedene ausgewählte Gameserver-Dienste auf deinem Linux-basierten vServer oder Dedicated Server installieren. Für diese Installation sind keinerlei Vorkenntnisse erforderlich. Die Einrichtung sämtlicher benötigter Pakete, der Server-Dateien sowie die eigentliche Installation werden vollständig automatisch durchgeführt, wodurch du Zeit und Mühe sparst.

:::warning
Das GS/TS3- Interface Feature kann mit den folgenden Betriebssystemen verwendet werden:

Debian: 10, 11, 12
Ubuntu: 20.04, 22.04
(*) Wir arbeiten bereits daran, andere und neuere Betriebssysteme und (Versionen) in naher Zukunft bereitzustellen.
:::



## Verfügbare Dienste & Spiele

Das GS/TS3 Interface unterstützt die Einrichtung von Gameserver, Voiceserver und Musikbots. Ein Großteil der Spiele, die wir für unsere Gameserver Produkte anbieten, sind bei uns ebenfalls in der GS/TS3 Interface Option vorhanden. Das betrifft alle Spiele, die wir aktiv unter Linux betreiben. Alle Spiele die bei uns über Windows Betriebssysteme laufen können leider nicht installiert werden. Dort ist lediglich eine manuelle Installation möglich, sofern das Spiel eine Linux Server Version unterstützt. 

| Dienste    | Supported |
| ----------- | ---------------- |
| Gameserver  | ✔️                |
| Voiceserver | ✔️                |
| Musicbot   | ✔️                |


## Installation und Konfiguration

Um das GS/TS3 Interface zu installieren, musst du in deiner Server Verwaltung deines Produktes zu dem Navigations Panel **Einstellungen** navigieren und dort auf den Unterpunkt **Gameserver / TS3** klicken. 

Wenn du das GS/TS3 Interface zum ersten Mal aufrufst, wirst du zum benutzerfreundlichen Einrichtungsassistenten weitergeleitet. Um das Interface einzurichten und mit dem Server zu verknüpfen, musst du ein unterstütztes Betriebssystem auswählen und die Anmeldedaten des Root-Users bereitstellen.


![](https://screensaver01.zap-hosting.com/index.php/s/sXjAWq52EJoYebf/download)

Nachdem der Server und die Webseite erfolgreich verknüpft wurden, kann das GS/TS3 Interface angelegt werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/wjT2iKNomcwKxid/preview)



Während der Installation kannst du den aktuellen Fortschritt einsehen. Bitte beachte, dass die Installation und Konfiguration des Interface und dessen Pakete eine gewisse Zeit in Anspruch nehmen kann. Das kann in der Regel zwischen 5 bis 15 Minuten dauern. 



![](https://screensaver01.zap-hosting.com/index.php/s/kHGaaKgH9rXocTm/preview)

:::caution 
Bitte setze den Prozess erst dann fort, wenn das Interface vollständig installiert ist. Du erkennst die erfolgreiche Installation daran, dass der Fortschrittsbalken verschwunden ist und bei jedem erforderlichen Paket "Installiert" anstelle von "fehlt" angezeigt wird.
:::



### Gameservers erstellen

Sofern das Anlegen und die Installation des GS/TS3 Interfaces erfolgreich abgeschlossen wurde, kann nun mit der Einrichtung der Dienste begonnen werden. Die Installation eines Gameservers erfolgt über den **Gameserver installieren** Button in der **Gameserver** Kategorie. 

![](https://screensaver01.zap-hosting.com/index.php/s/9G8ewx3gKybWcrB/preview)



Im nächsten Schritt hast du die Möglichkeit, die IP-Adresse des gewünschten Gameservers auszuwählen (vorausgesetzt, dein Server verfügt über mehr als eine IP). Zudem kannst du den gewünschten Port, die Anzahl der Slots und den RAM-Boost individuell festlegen.

![](https://screensaver01.zap-hosting.com/index.php/s/qA9Mwjw4qQMzGGR/preview)

Stelle sicher, dass alle Angaben korrekt sind und deinen Anforderungen entsprechen. Sobald du alle Einstellungen vorgenommen hast, klicke auf "Gameserver jetzt installieren", um den Installationsprozess zu starten. Der Gameserver wird dann entsprechend deiner Vorgaben eingerichtet und du kannst in Kürze loslegen. Im Anschluss kannst du nun deinen neu angelegten Gameserver in der Liste einsehen und aufrufen.



![](https://screensaver01.zap-hosting.com/index.php/s/wj6TakmwxEgfw7z/preview)



Du befindest dich nun in der Verwaltung von deinem Gameserver. Dort hast du die Möglichkeit im **Einstellungen** Navigations Panel unter **Spiele** das gewünschte Spiel für deinen Gameserver auszuwählen und zu installieren. 



![](https://screensaver01.zap-hosting.com/index.php/s/atHE44ptGSYgqSQ/preview)



Hier findest du eine Liste aller Spiele welche du auf deinem Server installieren könntest. In diesem Beispiel wird ein Server mit dem Spiel(-paket) Minecraft: Paperspigot installiert. Wähle hierzu dein gewünschtes Spiel aus und klicke auf den grünen Button, um die Installation zu starten. 

![](https://screensaver01.zap-hosting.com/index.php/s/PxLpa8YDpdNpARy/preview)

Es erfolgt eine Übersicht mit allen notwendigen Bedingungen. Sollten alle Bedingungen erfüllt sein, so kannst du im Anschluss den Vorgang mit dem **Akzeptieren und Installieren** Button bestätigen. 

![](https://screensaver01.zap-hosting.com/index.php/s/ERgf2neCtwTBkid/preview)

Die Einrichtung des Spiels kann je nach Spiel eine gewisse Zeit beanspruchen. Der Fortschritt wird in der Statusanzeige angezeigt. Im Anschluss kannst du deinen Gameserver starten und dich im Spiel damit verbinden!



### Voiceservers erstellen

Die Installation eines **Voiceserver (Teamspeak 3 Server)** verläuft ähnlich wie die eines Gameservers. Zunächst musst du erneut auf "Gameserver / TS3" klicken. In diesem Bereich findest du die Option **Voiceserver installieren**, die du anklicken kannst, um den Installationsprozess für den Teamspeak 3 Server zu starten.

![](https://screensaver01.zap-hosting.com/index.php/s/e4KtS3qSfdxjjeL/preview)



Im nächsten Schritt hast du wieder die Möglichkeit, die gewünschten Einstellungen für deinen Teamspeak 3 Server festzulegen, wie zum Beispiel die IP-Adresse, den Port und die Anzahl der verfügbaren Slots. Nachdem du alle erforderlichen Angaben gemacht hast, kannst du die Installation abschließen, indem du auf **Voiceserver jetzt installieren** klickst.



![](https://screensaver01.zap-hosting.com/index.php/s/iyxBH2TTb8M2pYn/preview)

Stelle sicher, dass alle Angaben korrekt sind und deinen Anforderungen entsprechen. Sobald du alle Einstellungen vorgenommen hast, klicke auf **Teamspeak 3/5 Server jetzt installieren**, um den Installationsprozess zu starten. Im Anschluss kannst du den installierten Teamspeak 3 Server nun in der **Voiceserver Übersich**t einsehen und anklicken.

![](https://screensaver01.zap-hosting.com/index.php/s/GfWPRaq5HG4C64w/preview)

:::info
**Achtung**: Es handelt sich hierbei um die Instanz, auf welchem der Teamspeak 3 Server im Anschluss angelegt wird.
:::

Du befindest dich nun im Interface der Instanz von deinem installierten Teamspeak 3 Server. Die Instanz kannst du nun mit einem Klick auf den **Start** Button starten.

![](https://screensaver01.zap-hosting.com/index.php/s/D9LgKc7Pjx2cKHB/preview)


Nun kannst du auf den Menüpunkt **Virtuelle Server** klicken. In diesem Bereich werden alle installierten Teamspeak 3 Server auf deiner Instanz übersichtlich aufgelistet. Um das Interface des jeweiligen Teamspeak 3 Servers aufzurufen, klicke einfach auf das "Auge"-Symbol.

![](https://screensaver01.zap-hosting.com/index.php/s/fa9bxgfEFmwnrte/preview)



Im Interface des Teamspeak 3 Servers findest du alle notwendigen Informationen und Einstellungsmöglichkeiten, um deinen Server individuell zu gestalten und zu verwalten. Beispielsweise kannst du unter dem Reiter "Berechtigungsschlüssel" einen Token erstellen, der dir Admin-Rechte auf deinem Server gewährt. Dies ermöglicht dir die vollständige Kontrolle über die Benutzerverwaltung und den Zugriff auf den Server.

Unter dem Menüpunkt "Einstellungen" stehen dir weitere Optionen zur Verfügung, um deinen Server anzupassen. Hier kannst du zum Beispiel den Namen deines Servers ändern, ein Passwort festlegen, um den Zugang zu beschränken, oder eine persönliche Begrüßungsnachricht hinterlegen, die Nutzer beim Betreten des Servers empfangen.

:::caution Information zu Teamspeak Lizenzen
Standardmäßig ist keine Lizenz auf dem Teamspeak 3 Server installiert. Dies hat zur Folge, dass du zunächst lediglich einen Teamspeak 3 Server mit einer Kapazität von 32 Slots nutzen kannst. Möchtest du jedoch mehr Kapazitäten oder zusätzliche Funktionen für deinen Teamspeak 3 Server freischalten, kannst du eine entsprechende Lizenz von Teamspeak erwerben.
:::

## Abschluss
Glückwunsch, du hast GS/TS3 Interface erfolgreich installiert und konfiguriert! Solltest du noch weitere Fragen oder Probleme haben, dann wende dich gerne an unser Support-Team, welches dir jeden Tag zur Verfügung steht!

<InlineVoucher />
