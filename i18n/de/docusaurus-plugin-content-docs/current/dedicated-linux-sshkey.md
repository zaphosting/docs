---
id: dedicated-linux-sshkey
title: "Dedicated Server: SSH-Keys für Linux-Server erstellen und nutzen"
description: "Entdecke, wie du SSH-Keys für deinen Linux-Server sicher erstellst und verwaltest, um deine Verbindung sicherer zu machen → Jetzt mehr erfahren"
sidebar_label: SSH Key
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## SSH-Key erstellen

Für eine deutlich sicherere Verbindung als mit dem herkömmlichen SSH-Passwort empfehlen wir die Nutzung von SSH-Keys. Öffne dazu den Tab "**Zugriff & Sicherheit**" im Dashboard deines Linux-Servers.

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

Unter "**Zugriff & Sicherheit**" kannst du jetzt mit dem Button "**SSH-Key generieren**" einen Key erstellen. Sobald du den Button klickst, öffnet sich ein Popup und der zufällig generierte Key wird direkt auf deinen PC heruntergeladen. Damit der Key auf dem Server hinterlegt wird, musst du den Button "**Key hinzufügen**" drücken.

:::info
Bei Linux VPS wird der Key direkt hinzugefügt. Bei Linux Root Servern muss der Server neu gestartet werden, damit die Änderungen wirksam werden.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

Wenn du weitere Keys brauchst, kannst du im selben Fenster den Button "**Key generieren**" erneut drücken. Über "**Key-Name**" kannst du dem Key einen Namen geben, der im ZAP-Hosting Panel angezeigt wird. Das hilft dir, den Überblick zu behalten.

Sind alle gewünschten Keys generiert und hinzugefügt, werden sie unter "**Zugriff & Sicherheit**" angezeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

Falls du einen eigenen öffentlichen Key hast, den du extern erstellt hast und nicht über unser Panel, kannst du ihn über das "**+**"-Icon integrieren.

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

Es öffnet sich ein leeres Feld, in das du deinen öffentlichen Key einfügen kannst. Mit dem Button "**Key hinzufügen**" wird der Key auf dem Server hinterlegt und anschließend im Panel angezeigt.

## OpenSSH zu PuTTY Private Key mit PuTTYGen konvertieren

Die SSH-Keys, die unser Panel erstellt, sind im OpenSSH-Format. Um diese mit PuTTY nutzen zu können, müssen sie zuerst ins PuTTY Private Key-Format konvertiert werden. Dafür nutzt du die Software "**PuTTYGen**", die automatisch mit PuTTY installiert wird.

Die PuTTYGen-Anwendung findest du im PuTTY-Installationsordner. Standardmäßig wäre das im Beispielbild der Ordner "**C:>Program Files>PuTTY**".

Starte PuTTYGen und klicke dann auf "**Datei**" -> "**Privaten Schlüssel laden**".

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

Jetzt musst du die von ZAP-Hosting generierte Datei öffnen. Navigiere dazu in das Standard-Download-Verzeichnis.

:::info
**Wichtig:** Achte darauf, dass der Filter auf "**Alle Dateien**" steht, wie im Bild gezeigt, da die vom System erstellte .pri-Datei sonst nicht angezeigt wird.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/5eRjG5HNMrxW38D/preview)

Sobald die Datei geladen ist, kannst du Kommentare und ein Passwort für den Key festlegen. Um ein Passwort zu setzen, gib es in "**Key-Passphrase**" und "**Passphrase bestätigen**" ein.  
*Hinweis:* Du kannst die Felder auch leer lassen und den Key ohne Passwort erstellen, das ist aber weniger sicher und daher nicht empfohlen. Wenn alles eingestellt ist, speichere den PuTTY-kompatiblen Key mit "**Privaten Schlüssel speichern**".

![](https://screensaver01.zap-hosting.com/index.php/s/S2XNpejKYds6C6K/preview)

Gib der .ppk-Datei einen Namen und speichere sie, damit du sie später wiederfindest.

## SSH-Key Verbindung

Damit der Key für Verbindungen genutzt werden kann, muss er zuerst in PuTTY eingebunden werden. Klicke dazu auf "**SSH**" - "**Auth**" - "**Durchsuchen...**".

![](https://screensaver01.zap-hosting.com/index.php/s/cxLBRMPiqEXBG55/preview)

Suche den gerade mit PuTTYGen erstellten Key und klicke auf "**Öffnen**".

Damit du diese Schritte nicht bei jeder Verbindung wiederholen musst, empfehlen wir, die Einstellungen in der Session zu speichern. Klicke dazu auf "**Session**" - "**Standardwerte**" - "**Speichern**", wie im Screenshot zu sehen.

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

Jetzt kannst du dich mit PuTTY auf dem Server einloggen. Der in PuTTYGen eingetragene "**Key-Kommentar**" wird dir dann angezeigt.

## Login mit Passwort deaktivieren

SSH-Keys wurden erstellt, um die Sicherheit zu erhöhen. Wenn der Login mit SSH-Passwort weiterhin möglich ist, hat sich an der Sicherheit des Servers nichts geändert. Deshalb muss der SSH-Login via Passwort jetzt deaktiviert werden. Dabei gibt es Unterschiede zwischen Linux VPS und Linux Root Servern. Wenn der Login korrekt deaktiviert ist, können sich nur noch Nutzer mit deinem SSH-Key verbinden.

### Linux VPS

Das Passwort-Login kannst du ganz easy im Tab Zugriff & Sicherheit deaktivieren.  
Drücke den Button **Passwort-Login deaktivieren** neben dem Button zum SSH-Key generieren.  
Ist es deaktiviert, ist kein Login mehr per Passwort möglich.

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

Die Anzeige für "**SSH-Login via Passwort**" wird dann auf "**Inaktiv**" gesetzt.


<InlineVoucher />