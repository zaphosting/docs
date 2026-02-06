---
id: scp-escapetogether-automated-messages
title: "SCP: Escape Together: Automatisierte Server-Nachrichten – Halte deine Spieler über News, Social Links und mehr auf dem Laufenden!"
description: "Richte automatisierte Server-Nachrichten mit geplanten Tasks ein, um wiederkehrende Ankündigungen anzuzeigen"
sidebar_label: Automatisierte Server-Nachrichten
services:
- gameserver-scp-escapetogether
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Automatisierte Server-Nachrichten sind eine simple, aber effektive Möglichkeit, wichtige Infos direkt im Spiel an deine Spieler zu kommunizieren. Du kannst damit Server-Regeln anzeigen, Events ankündigen, nützliche Tipps teilen oder Erinnerungen in regelmäßigen Abständen senden – ganz ohne manuellen Aufwand für Admins.

Mit **Geplanten Tasks** können Server-Nachrichten automatisch in den **SCP: Escape Together** Ingame-Chat geschickt werden, indem vordefinierte Befehle nach einem Zeitplan ausgeführt werden.

<InlineVoucher />



## Wie automatisierte Nachrichten funktionieren

Automatisierte Nachrichten werden erstellt, indem ein Task geplant wird, der zu einer definierten Zeit oder in einem Intervall einen Server-Befehl ausführt. Der Befehl kann genutzt werden, um eine Chat-Nachricht, Broadcast oder Server-Benachrichtigung zu senden.

Sobald der Task eingerichtet ist, läuft er automatisch im Hintergrund und zeigt die Nachricht allen verbundenen Spielern an. So ist eine konstante Kommunikation gewährleistet, ohne dass das Team online sein muss.



## Automatisierte Nachricht erstellen

Um automatisierte Server-Nachrichten zu erstellen, öffne dein Gameserver-Dashboard und navigiere zum Bereich **Geplante Tasks**. Erstelle einen neuen geplanten Task und wähle die Option, einen **Befehl** auszuführen. Im Befehlsfeld gib den Nachrichtenbefehl ein, den dein Gameserver unterstützt.

```
<Nachrichtenbefehl> <dein Nachrichtentext>
```

Ersetze den Befehl durch den Spielbefehl oder Befehl einer Erweiterung, den du für die Nachrichten auslösen möchtest, und `<dein Nachrichtentext>` durch die Nachricht, die deine Spieler sehen sollen.

Anschließend kannst du festlegen, wie oft die Nachricht gesendet werden soll, z.B. alle paar Minuten, stündlich oder zu bestimmten Tageszeiten. Für detaillierte Anleitungen zum Erstellen von geplanten Tasks schau dir die [Geplante Tasks](gameserver-scheduled-tasks.md) Anleitung an.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Nachricht-Intervalle anpassen

Geplante Tasks geben dir volle Kontrolle darüber, wann und wie oft Nachrichten erscheinen. Häufige Anwendungsfälle sind:

- Server-Regeln alle paar Minuten anzeigen
- Kommende Events zu festen Zeiten ankündigen
- Gameplay-Tipps für neue oder zurückkehrende Spieler senden
- Spieler an Discord- oder Website-Links erinnern

Das Intervall lässt sich jederzeit anpassen, ohne den Server neu starten zu müssen – so bleibst du flexibel, während dein Server wächst.



## Wichtige Hinweise

Die Funktionalität automatisierter Server-Nachrichten hängt von den Möglichkeiten des Spiels und den verfügbaren Befehlen ab. Während einfache geplante Nachrichten mit Standard-Serverbefehlen umgesetzt werden können, sind diese oft eingeschränkt bei Formatierung, Bedingungen oder erweiterten Anpassungen.

Falls das Spiel zusätzliche Plugins, Mods oder Erweiterungen unterstützt, die mehr Flexibilität und Anpassungsmöglichkeiten bieten, lohnt sich der Einsatz solcher Lösungen. Spezialisierte Nachrichtensysteme bieten oft umfangreichere Features als die Standard-Spielbefehle und sind besser geeignet für komplexe oder stark angepasste Server-Setups.



## Fazit

Automatisierte Server-Nachrichten sind ein zuverlässiger Weg, um Spieler informiert und engagiert zu halten – ganz ohne manuellen Aufwand. Durch geplante Tasks, die Nachrichtenbefehle ausführen, können Server-Admins eine konstante Kommunikation auf ihrem Server sicherstellen.

Ist das einmal eingerichtet, laufen automatisierte Nachrichten eigenständig und lassen sich einfach wiederverwenden, indem du nur den spiel-spezifischen Nachrichtenbefehl und Text anpasst.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />