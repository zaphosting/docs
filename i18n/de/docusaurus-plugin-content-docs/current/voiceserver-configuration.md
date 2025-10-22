---
id: voiceserver-configuration
title: "Voiceserver: Konfiguration"
description: "Entdecke, wie du deine Teamspeak-Server-Einstellungen für ein persönliches Erlebnis und optimiertes User-Management anpassen kannst → Jetzt mehr erfahren"
sidebar_label: Serverkonfiguration
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der Teamspeak-Server kann individuell konfiguriert werden. Im Folgenden erklären wir dir, wie du deinen Server einstellen kannst. Wir zeigen dir, wie du allgemeine Einstellungen wie Servername, Icon, Banner, Benutzerrechte, Channel- und Servergruppenrechte anpassen kannst.

<InlineVoucher />

## Allgemein

**Webinterface**

Wenn du die allgemeine Konfiguration deines Servers über das Webinterface machen möchtest, findest du die Optionen in der Teamspeak Server Administration unter Einstellungen. Die Einstellungsseite sieht dann so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/fLYXn5sx38BBC92/preview)


**Teamspeak Client**

Wenn du die allgemeine Konfiguration deines Servers direkt über den Teamspeak Client machen möchtest, findest du die Optionen, indem du mit der rechten Maustaste auf den obersten Channel **TeamSpeak ]I[ Server** klickst und dann **Virtuellen Server bearbeiten** auswählst.

![](https://screensaver01.zap-hosting.com/index.php/s/epQ2qzRiex9BmpE/preview)



Da die Einstellungen im Webinterface möglichst verständlich sein sollen und dort nicht alles angepasst werden kann, konzentriert sich diese Anleitung auf die Konfiguration des Teamspeak-Servers über den Teamspeak Client.



### Name

Im Feld **Servername** kannst du den Namen deines Teamspeak Servers festlegen. Dieser wird dann in der Serverliste, auf der Webseite und überall sonst angezeigt.



### Banner

Wenn du die Option eigener Banner gebucht hast, kannst du dein eigenes Banner im Feld **Banner Gfx URL** hinzufügen. Wichtig ist, dass du den direkten Link zum Bild angibst, sonst wird das Bild nicht erkannt. Im Feld **URL** kannst du einstellen, wohin das Banner weiterleiten soll, wenn jemand darauf klickt.

:::info
Wenn kein eigener Banner gebucht wurde, wird das Banner automatisch durch das Standard-ZAP-Banner ersetzt.
:::



### Slots (reservierte Slots)

Die Slots werden von uns festgelegt und können nicht geändert werden. Du hast jedoch die Möglichkeit, reservierte Slots einzustellen. Das bedeutet, dass diese reserviert sind, falls der Teamspeak-Server voll ist. Dann können Nutzer mit den entsprechenden Rechten trotzdem noch auf den Teamspeak-Server connecten.



### Willkommensnachricht

Hier kannst du eine Willkommensnachricht deiner Wahl hinzufügen. Diese Nachricht wird angezeigt, wenn du dich verbindest. Das kann zum Beispiel so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/AWFcf4HHJ7jesdc/preview)


### Sicherheitslevel

Das erforderliche Sicherheitslevel bestimmt, wie lange Nutzer brauchen, um das Sicherheitslevel ihrer Identität zu erhöhen, bis diese als sicher genug gilt. Grundsätzlich reduziert das die Möglichkeit für Spam und Missbrauch. Je höher das Sicherheitslevel eingestellt ist, desto länger dauert es. Hier eine Übersicht der Dauer:

- Level 0-23 - innerhalb von Sekunden generiert
- Level 23-29 - innerhalb von Minuten generiert
- Level 29-34 - innerhalb von Stunden generiert
- Level 35-39 - innerhalb von Tagen generiert
- Level 40-43 - innerhalb von Monaten generiert
- Level 44+ - innerhalb von Jahren generiert



### Benutzer verwalten (kick, ban, Bannliste, Beschwerdeliste)

Einen Kick oder Ban kannst du durchführen, indem du mit der rechten Maustaste auf den Nutzer klickst. Bei einem Ban werden die Identität und die IP-Adresse in der Bannliste gespeichert. Die Liste findest du unter **Navigationsleiste -> Extras**. Dort kannst du bestehende Bans entfernen.

Dort findest du auch die Beschwerdeliste. Das ist eine Funktion von Teamspeak, die es Nutzern erlaubt, sich über andere Nutzer, den Server selbst etc. zu beschweren, falls kein Admin auf dem Teamspeak-Server online ist.



## Personalisieren

Du kannst auf deinem Teamspeak-Server weitere Channels und Servergruppen erstellen, um deinen Teamspeak-Server noch persönlicher zu gestalten. Im Folgenden zeigen wir dir genau, wie das geht.


### Channel

Um weitere Channels zu erstellen, musst du **rechtsklicken** unter den bestehenden Channels und dann auf **Channel erstellen** klicken. Ein Popup-Fenster öffnet sich. Dort kannst du den Channel mit folgenden Optionen konfigurieren: Channel-Name, Passwort, Icon, Beschreibung, Channel-Typ und mehr.



![](https://screensaver01.zap-hosting.com/index.php/s/Bkx2q69a5ceNiyD/preview)


### Servergruppen

Um zusätzliche Servergruppen zu erstellen, klickst du in der **Navigationsleiste** auf **Rechte** und dann auf **Servergruppen**. Dort findest du eine Übersicht der bestehenden Servergruppen, deren Rechte und der zugewiesenen Nutzer. In der Liste der Servergruppen kannst du unten auf das **Plus-Symbol** klicken und dann eine neue Gruppe erstellen.



![](https://screensaver01.zap-hosting.com/index.php/s/QqcaaRse6kLNwPQ/preview)


## Rechte

Mittlerweile sollte klar sein, wie man die allgemeinen Einstellungen des Teamspeak-Servers anpasst und wie man den Teamspeak-Server durch das Erstellen zusätzlicher Channels und Servergruppen personalisiert. Im Folgenden beschäftigen wir uns damit, wie die Rechte angepasst werden können.



### Rechte: Nutzer

Die Rechte der Nutzer hängen von den zugewiesenen Servergruppen ab. Standardmäßig bekommt ein Nutzer die Gruppe **Normal** zugewiesen. Wenn du dem Nutzer mehr Rechte geben möchtest, kannst du das machen, indem du mit der rechten Maustaste auf den Nutzer klickst, dann auf Servergruppen und dann die gewünschte Gruppe zuweist.

![](https://screensaver01.zap-hosting.com/index.php/s/sXG3qFXXJXc6Kjr/preview)

### Rechte: Channel

Für jeden Channel können Rechte definiert werden. Zum Beispiel kannst du festlegen, welche Nutzer den Channel **betreten, abonnieren, beschreiben, ansehen, ändern, löschen** und auf den **Dateibrowser-Channel zugreifen** dürfen.


![](https://screensaver01.zap-hosting.com/index.php/s/9sCRd7NgMNHy9Do/preview)



Der Wert jedes Feldes hängt von der Servergruppe ab. Wenn du zum Beispiel eine zusätzliche Servergruppe namens **Member** erstellst und nur diese Zugriff auf den Channel haben sollen, muss der Wert dem der Servergruppe entsprechen. Hat die Servergruppe den Berechtigungswert 50, muss also in den einzelnen Feldern die **50** eingetragen werden.



### Rechte: Servergruppen

Für Servergruppenrechte gibt es mehrere Kategorien, die angepasst werden können. Dazu gehören:

- Allgemeine Optionen
- Gruppen verwalten
- Nutzer hinzufügen, entfernen, Berechtigungsschlüssel verwalten
- Nutzer verwalten (verschieben, kick, ban)
- Channels verwalten
- Grundlagen


![](https://screensaver01.zap-hosting.com/index.php/s/RxcYJCsar7C3KnM/preview)



Diese Rechte kannst du nach Belieben ändern. Wenn du umfangreichere Änderungen an den Rechten vornehmen möchtest, kannst du das machen, indem du in den Optionen deines Teamspeak-Clients unter Anwendung das **Erweiterte Berechtigungssystem** aktivierst.


<InlineVoucher />