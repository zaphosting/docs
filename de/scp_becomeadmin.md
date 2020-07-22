---
id: scp_becomeadmin
title: Admin werden
sidebar_label: Admin werden
---

## Admin Optionen

Es gibt zwei mögliche Wege um Admin auf dem Server zu werden.

1️⃣ Bei der ersten Option meldet man sich auf dem Server mit einem vorher gesetzten Remote Admin Passwort ein.
*Diese Option wird von den Entwicklern nicht empfohlen.*

2️⃣ Bei der zweiten Option setzt man sich in der Remote Admin Konfig als Admin. Dafür muss das Remote Admin Passwort auf "**none**" gesetzt werden.

> Für beide Wege muss ein Remote Admin Passwort gesetzt werden, daher mit folgenden Schritten das Passwort setzen.

## 🔒 Remote Admin Passwort setzen

Die Funktion für dieses Remote Admin Passwort befindet sich in "**Einstellungen**" bei dem Gameserver Dashboard.

![](https://screensaver01.zap-hosting.com/index.php/s/wQ85AnkMH7PtG3D/preview)

Bei "**Einstellungen**" angekommen ist die RemoteAdmin Passwort Funktion erstellt.

![](https://screensaver01.zap-hosting.com/index.php/s/cZ2A7CmZCo5G6rE/preview)

Dort kann nun ein beliebiges eigenes Passwort erstellt werden.

> Dieses Passwort muss mindestens 8 Zeichen, maximal 16 Zeichen, einen kleinen Buchstaben, einen großen Buchstaben, eine Zahl und zusätzlich ein Sonderzeichen enthalten.
> In unserem Beispiel wird daher *123Change!* genutzt, da dieses alle Kriterien erfüllt.
> Du kannst das Passwort Feld auch auf "**none**" stellen, sollte keine Passwort Eingabe gewünscht sein.

### 1️⃣ 🗝️ Remote Admin Passwort nutzen

Sobald das Passwort gesetzt wurde, muss der Server gestartet werden.
Im Anschluss direkt zu dem Server verbinden und nach der Verbindung die Taste "**M**" drücken.

Dort öffnet sich das Admin Menü, in welchem man das zuvor gesetzte Passwort eintragen muss. 
Nach Bestätigung dieser Eingabe bist du nun Admin auf dem Server und hast Zugriff auf das Remote Admin Menü

### 2️⃣ 📃 Remote Admin Konfig konfigurieren

#### Voraussetzung

Sobald das Passwort gesetzt wurde, benötigst du nun deine Steam64ID.
Diese kannst du über "**steamdid lookup**" einsehen: https://steamid.io/lookup . 
Die ID wird später in die Konfigurationsdatei eingetragen.

#### Konfiguration Datei ändern

Nun muss die Konfigurationsdatei geöffnet und bearbeitet werden.
Diese befindet sich in "**Configs**" bei "**Einstellungen**".

![](https://screensaver01.zap-hosting.com/index.php/s/LGwjH44sYQAKPnb/preview)

Dort wird nun die "**config_remoteadmin.txt**" geöffnet in welcher die nötigen Zeilen umgeschrieben werden.

![](https://screensaver01.zap-hosting.com/index.php/s/pgqrEwTMeAykPcM/preview)

Ganz unten in der Konfiguration Datei werden die Rollen zugewiesen.
In dieser muss "**SomeSteamId64**" welches vor "**@steam: owner**" steht mit deiner SteamID64 ersetzt werden, welche du vorher bei "**steamid lookup**" eingesehen hast.

![](https://screensaver01.zap-hosting.com/index.php/s/ZMreaSdWA2FexXj/preview)

Dies kann nun für jeden weiteren Nutzer der Rechte erhalten soll gemacht werden.
In unserem Beispiel setzen wir für drei User Rechte, einer davon bekommt "**owner**" die anderen beiden erhalten "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/oieKCK9ZAXyiwBz/preview)


