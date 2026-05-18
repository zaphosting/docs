---
id: wreckfest2-automated-messages
title: "Wreckfest 2: Automatisierte Server-Nachrichten – Halte deine Spieler über News, Social Links und mehr auf dem Laufenden!"
description: "Richte automatisierte Server-Nachrichten mit geplanten Tasks ein, um wiederkehrende Ankündigungen anzuzeigen"
sidebar_label: Automatisierte Server-Nachrichten
services:
- gameserver-wreckfest2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Automatisierte Server-Nachrichten sind eine simple, aber effektive Möglichkeit, wichtige Infos direkt im Spiel an deine Spieler zu kommunizieren. Du kannst sie nutzen, um Server-Regeln anzuzeigen, Events anzukündigen, hilfreiche Tipps zu teilen oder Erinnerungen in regelmäßigen Abständen zu senden – ganz ohne manuellen Aufwand für Admins.

Mit **Geplanten Tasks** können Server-Nachrichten automatisch in den **Wreckfest 2** Ingame-Chat geschickt werden, indem vordefinierte Befehle nach einem festgelegten Zeitplan ausgeführt werden.

<InlineVoucher />



## Wie automatisierte Nachrichten funktionieren

Automatisierte Nachrichten entstehen, indem du einen Task planst, der zu einer definierten Zeit oder in einem Intervall einen Server-Befehl ausführt. Der Befehl kann genutzt werden, um eine Chat-Nachricht, eine Broadcast- oder Server-Benachrichtigung zu senden.

Ist der Task einmal eingerichtet, läuft er automatisch im Hintergrund und zeigt die Nachricht allen verbundenen Spielern an. So ist eine konstante Kommunikation gewährleistet, ohne dass das Team ständig online sein muss.



## Automatisierte Nachricht erstellen

Um automatisierte Server-Nachrichten zu erstellen, öffne dein Gameserver-Dashboard und navigiere zum Bereich **Geplante Tasks**. Erstelle einen neuen Task und wähle die Option, einen **Befehl** auszuführen. Im Befehlsfeld gibst du den Nachrichtenbefehl ein, den dein Gameserver unterstützt.

```
<Nachrichtenbefehl> <dein Nachrichtentext>
```

Ersetze den Befehl durch den Game-Befehl oder einen Befehl aus einer Erweiterung, mit dem du Nachrichten auslösen möchtest, und `<dein Nachrichtentext>` durch die Nachricht, die deine Spieler sehen sollen.

Anschließend kannst du festlegen, wie oft die Nachricht gesendet werden soll – zum Beispiel alle paar Minuten, stündlich oder zu bestimmten Tageszeiten. Für detaillierte Anleitungen zum Erstellen von geplanten Tasks schau dir die [Geplante Tasks](gameserver-scheduled-tasks.md) Anleitung an.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Nachricht-Intervalle anpassen

Geplante Tasks geben dir volle Kontrolle darüber, wann und wie oft Nachrichten erscheinen. Typische Anwendungsfälle sind:

- Server-Regeln alle paar Minuten anzeigen
- Anstehende Events zu festen Zeiten ankündigen
- Gameplay-Tipps für neue oder zurückkehrende Spieler senden
- Spieler an Discord- oder Website-Links erinnern

Das Intervall lässt sich jederzeit anpassen, ohne den Server neu starten zu müssen – so bleibst du flexibel, während dein Server wächst.



## Wichtige Hinweise

Die Funktionalität automatisierter Server-Nachrichten hängt von den Möglichkeiten des Spiels und dessen verfügbaren Befehlen ab. Während einfache geplante Nachrichten mit Standard-Serverbefehlen umgesetzt werden können, sind diese oft eingeschränkt in Sachen Formatierung, Bedingungen oder erweiterter Anpassung.

Falls das Spiel zusätzliche Plugins, Mods oder Erweiterungen unterstützt, die mehr Flexibilität und Anpassungsmöglichkeiten bieten, lohnt sich der Einsatz solcher Lösungen. Spezialisierte Nachrichtensysteme bieten oft umfangreichere Features als die Standard-Game-Befehle und sind besser geeignet für komplexe oder stark individualisierte Server-Setups.



## Abschluss

Automatisierte Server-Nachrichten sind ein zuverlässiger Weg, um Spieler informiert und engagiert zu halten – ganz ohne manuellen Aufwand. Durch geplante Tasks, die Nachrichtenbefehle ausführen, können Server-Admins eine konstante Kommunikation auf ihrem Server sicherstellen.

Ist alles eingerichtet, laufen die automatisierten Nachrichten eigenständig und lassen sich einfach wiederverwenden, indem du nur den spiel-spezifischen Nachrichtenbefehl und Text anpasst.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />