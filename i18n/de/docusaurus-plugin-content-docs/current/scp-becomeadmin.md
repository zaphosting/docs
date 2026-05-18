---
id: scp-becomeadmin
title: "SCP Secret Laboratory: Werde Admin auf deinem eigenen Server"
description: "Entdecke, wie du Administratorrechte für volle Serverkontrolle vergibst und Rollen effektiv in deinem Gameserver verwaltest → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Administrator kannst du alle verfügbaren Optionen und Funktionen, die das Spiel direkt bietet, im Spiel nutzen. Alle Schritte, die du zur Vergabe von Administratorrechten für deinen Server durchführen musst, werden im Folgenden beschrieben.  
<InlineVoucher />

:::info
Seit den letzten SCP-Updates funktioniert der Passwort-Login nicht mehr. Bitte nutze die folgende Anleitung, um deine Rollen direkt über die SteamID hinzuzufügen. 
:::


## Konfiguration für die Remote Admin Config

### Vorbereitung

Zuerst musst du deine Steam64ID herausfinden.  
Dafür kannst du das folgende Tool nutzen: [SteamID Lookup](https://steamid.io/lookup).  
Die ID wird später in der Konfigurationsdatei eingetragen.

Hier ein Beispiel, wie du deine SteamID bekommst, indem du deinen Profil-Link dort eingibst:

![](https://screensaver01.zap-hosting.com/index.php/s/k4EEWwFQB3xAxA2/preview)

## Admins hinzufügen

Jetzt muss die Konfigurationsdatei geöffnet und bearbeitet werden.  
Diese findest du unter "**Configs**" im Bereich "**Settings**".

![](https://screensaver01.zap-hosting.com/index.php/s/NSFrZG3SX6ZaQgb/preview)

Dort kannst du die "**config_remoteadmin.txt**" öffnen, in der die nötigen Zeilen angepasst werden.

![](https://screensaver01.zap-hosting.com/index.php/s/KM6YpQwGC4n8rZW/preview)

Die Rollen werden dort erstellt und zugewiesen.  
Dabei muss "**SomeSteamId64**", das vor "**@steam: owner**" steht, mit deiner zuvor ermittelten SteamID64 aus dem "**steamid lookup**" ersetzt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/HC4Z2s9wPgdJjXT/preview)

Das kannst du für jeden weiteren Nutzer machen, der Rechte erhalten soll.  
In unserem Beispiel vergeben wir Rechte für drei Nutzer: Einer bekommt "**owner**", die anderen beiden "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/9e7YWoMHAxn3z3b/preview)

## Weitere Rollen hinzufügen, um das Passwort zu umgehen

Wenn du mehrere Rollen hast, die das Remote Admin Passwort umgehen sollen, kannst du einfach die folgende Zeile in der Datei  
"**config_remoteadmin.txt**" anpassen:

Suche genau diesen Abschnitt:

![](https://screensaver01.zap-hosting.com/index.php/s/HoGJ7X2ZEWW34bH/preview)

Um weitere Rollen hinzuzufügen, schreibst du deine gewünschten Rollen einfach mit Komma getrennt dazu.  
Zum Beispiel, um admin und moderator hinzuzufügen, damit sie das Passwort umgehen:

![](https://screensaver01.zap-hosting.com/index.php/s/PFLFiG9W3kScZ3d/preview)

:::info
Um die Remote Admin Konsole im Spiel zu öffnen, drücke nach dem Einloggen auf dem Server die "**M**"-Taste. Wenn der Server läuft, musst du ihn neu starten, damit die Änderungen wirksam werden. Ist der Server offline, schalte ihn einfach an und öffne dann die Remote Admin Konsole im Spiel.
:::


## Abschluss

Glückwunsch, du hast die Administratorrechte erfolgreich konfiguriert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂

<InlineVoucher />