---
id: subnautica-2-connect-to-server
title: "Subnautica 2: Mit Server verbinden"
description: "Lerne, wie du dich mit deinem Subnautica 2 Server verbindest, indem du die korrekten Serverdaten nutzt und eine reibungslose Verbindung ohne häufige Probleme herstellst -> Jetzt mehr erfahren"
sidebar_label: "Mit Server verbinden"
services:
  - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Du bist dir unsicher, wie du dich mit deinem **Subnautica 2** Gameserver verbindest oder welche Infos du dafür brauchst? Diese Anleitung zeigt dir, wie du die nötigen Serverdetails bekommst, die Verbindung herstellst und häufige Verbindungsprobleme löst.

:::info Early Access Hinweis
Subnautica 2 befindet sich je nach aktuellem Release-Stand möglicherweise noch in aktiver Entwicklung. Dadurch können sich Multiplayer-Funktionen, das Verhalten des Serverbrowsers und Verbindungsabläufe im Laufe der Zeit ändern.
:::

<InlineVoucher />

## Serverdetails erhalten

Du brauchst alle relevanten Infos, um dich mit deinem Server zu verbinden. Die Details findest du im Dashboard deines Gameservers im Webinterface. Wichtige Informationen sind:

- IP-Adresse und Port
- Servername
- Serverpasswort

Mit diesen Angaben kannst du deinen Server identifizieren und sicherstellen, dass du dich mit dem richtigen verbindest.

| Detail | Beschreibung |
| --- | --- |
| `IP-Adresse` | Die öffentliche Adresse deines Subnautica 2 Servers |
| `Port` | Der Spielport, der für die Verbindung genutzt wird |
| `Servername` | Der Name, der im Spiel angezeigt wird, falls eine Serverliste oder ein Session-Browser vorhanden ist |
| `Serverpasswort` | Nur erforderlich, wenn dein Server passwortgeschützt ist |

![img](https://screensaver01.zap-hosting.com/index.php/s/tSHRbW66eDXBxJn/preview)

## Verbindung zum Server herstellen

Wie genau du dich mit einem **Subnautica 2** Server verbindest, hängt von den Multiplayer-Optionen der von dir genutzten Spielversion ab. In der Regel brauchst du die **IP-Adresse** und den **Port** des Servers, in manchen Fällen auch das **Serverpasswort**.

### Über das Multiplayer-Menü im Spiel beitreten

Starte **Subnautica 2** und öffne im Hauptmenü den Multiplayer- oder Serverbeitrittsbereich. Falls das Spiel eine Direktverbindungsoption bietet, gib dort die `IP-Adresse` und den `Port` deines Servers genau so ein, wie sie im ZAP-Hosting Webinterface angezeigt werden. Wenn ein Passwort eingerichtet ist, gib das `Serverpasswort` bei der Abfrage ein.

Nach Bestätigung versucht das Spiel, die Verbindung zu deinem Server herzustellen.

:::note Verfügbarkeit der Direktverbindung
Die genaue Bezeichnung von Menüs und Buttons kann je nach Spielversion variieren. Falls du keine Direktverbindungsoption findest, prüfe, ob das Spiel aktuell den Beitritt über eine Serverliste, ein Einladungssystem oder einen Session-Browser verlangt.
:::

### Über eine Serverliste oder den Session-Browser beitreten

Falls **Subnautica 2** statt eines manuellen Direktverbindungsfelds einen eingebauten Serverbrowser nutzt, suche deinen Server über den konfigurierten `Servernamen`. Deshalb ist es wichtig, den Servernamen im Webinterface vor dem Verbindungsversuch zu überprüfen.

Wenn du den richtigen Server in der Liste gefunden hast:

1. Wähle den Servereintrag aus  
2. Prüfe, ob der angezeigte Name mit deinem Server übereinstimmt  
3. Trete dem Server bei  
4. Gib das Passwort ein, falls abgefragt  

:::tip Nutze eindeutige Servernamen
Wenn dein Server in der Liste schwer zu erkennen ist, vergib in der Serverkonfiguration einen klaren und einzigartigen Servernamen. So findest du den richtigen Eintrag leichter und vermeidest Verbindungsfehler.
:::

### Wenn der Server nicht sofort sichtbar ist

Wenn dein Server im Ingame-Browser nicht erscheint, heißt das nicht zwangsläufig, dass er offline ist. Manchmal brauchen Serverlisten Zeit zum Aktualisieren oder das Spiel zeigt Server erst nach erfolgreicher Initialisierung an.

Prüfe Folgendes:

- Der Server ist im ZAP-Hosting Webinterface online  
- Der korrekte Spielport wird verwendet  
- Der Server ist vollständig gestartet  
- Der Servername ist korrekt konfiguriert  
- Ein Passwort wird eingegeben, falls erforderlich  

![img](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Mögliche Probleme und Lösungen

Die Verbindung zu einem Gameserver kann durch verschiedene Faktoren beeinträchtigt werden. Die häufigsten Probleme und ihre Lösungen findest du hier.

### Nicht sichtbar

Wenn der Server nicht sichtbar ist, wurde die Initialisierung möglicherweise nicht erfolgreich abgeschlossen. Das kann z. B. an einer fehlerhaften Konfiguration oder beschädigten Dateien liegen. Weitere Infos findest du meist in der Serverkonsole oder in Logdateien.

:::caution Serverstart erforderlich
Versuche nicht, dich zu verbinden, bevor der Server den Startvorgang abgeschlossen hat. Wenn der Server noch lädt oder neu startet, können Spieler sich nicht verbinden oder der Server erscheint noch nicht in einer Liste.
:::

### Falsche Verbindungsdaten

Wenn keine Verbindung zustande kommt, überprüfe, ob du die korrekte `IP-Adresse`, den richtigen `Port` und das passende `Serverpasswort` nutzt. Schon ein kleiner Tippfehler kann die Verbindung verhindern.

| Prüfen | Was überprüfen |
| --- | --- |
| `IP-Adresse` | Entspricht der Adresse im Server-Dashboard |
| `Port` | Entspricht dem zugewiesenen Spielport |
| `Passwort` | Genau so eingegeben, wie konfiguriert, inklusive Groß- und Kleinschreibung |
| `Servername` | Entspricht dem konfigurierten Servernamen, wenn du im Browser suchst |

### Server ist online, Verbindung schlägt fehl

Wenn der Server online angezeigt wird, du dich aber trotzdem nicht verbinden kannst, schau dir die Serverkonsole und Logs im Webinterface an. Fehler dort zeigen oft, ob der Server nicht richtig geladen wurde oder eine Konfigurationsproblematik Spielerverbindungen blockiert.

:::tip Logs zuerst prüfen
Die Serverkonsole und Logdateien sind meist der schnellste Weg, um herauszufinden, warum eine Verbindung fehlschlägt. Sie helfen dir zu bestätigen, ob der Server korrekt lauscht und ob Verbindungsversuche ankommen.
:::

### Keine passende Lösung gefunden?

Du hast nach der Fehlerbehebung immer noch Probleme? Unser Support-Team steht dir täglich zur Verfügung. Erstelle einfach ein **[Ticket](https://zap-hosting.com/en/customer/support/)** auf unserer Website und beschreibe dein Problem so detailliert wie möglich. Füge deine Server-IP, den Port und eine kurze Beschreibung des Verbindungsversuchs hinzu.

## Conclusion

Glückwunsch, du hast dich erfolgreich mit deinem Subnautica 2 Server verbunden. Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung! 🙂