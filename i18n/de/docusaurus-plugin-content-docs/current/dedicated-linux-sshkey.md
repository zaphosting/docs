---
id: dedicated-linux-sshkey
title: "Dedicated Server: SSH-Keys für Linux-Server erstellen und nutzen"
description: "Entdecke, wie du SSH-Keys für deinen Linux-Server sicher erstellst und verwaltest, um die Verbindungssicherheit zu erhöhen → Jetzt mehr erfahren"
sidebar_label: SSH-Key
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## SSH-Key erstellen

Für eine deutlich sicherere Verbindung als mit dem herkömmlichen SSH-Passwort empfehlen wir die Nutzung von SSH-Keys. Öffne dazu den Tab "**Zugriff & Sicherheit**" im Dashboard deines Linux-Servers.

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

Unter "**Zugriff & Sicherheit**" kannst du jetzt mit dem Button "**SSH-Key generieren**" einen Key erstellen. 
Sobald du diesen drückst, öffnet sich ein Popup und ein zufällig generierter Key wird direkt auf deinen PC heruntergeladen.
Damit der Key auf dem Server hinterlegt wird, musst du den Button "**Key hinzufügen**" klicken.

:::info
Bei Linux VPS wird der Key direkt hinzugefügt. Bei Linux Root Servern muss der Server neu gestartet werden, damit die Änderungen wirksam werden.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

Wenn du weitere Keys brauchst, kannst du im gleichen Fenster den Button "**Key generieren**" erneut drücken.
Mit "**Key-Name**" kannst du dem Key einen Namen geben, der im ZAP-Hosting Panel angezeigt wird. Das sorgt für mehr Übersicht.

Sind alle gewünschten Keys generiert und hinzugefügt, werden sie unter "**Zugriff & Sicherheit**" angezeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

Wenn du einen eigenen öffentlichen Key hast, den du extern und nicht über unser Panel erstellt hast, kannst du ihn über das "**+**"-Icon integrieren.

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

Es öffnet sich ein leeres Feld, in das du deinen öffentlichen Key einfügen kannst. Mit "**Key hinzufügen**" wird der Key auf dem Server hinterlegt und im Panel angezeigt.

## OpenSSH zu PuTTY Private Key mit PuTTYGen konvertieren

Die SSH-Keys, die unser Panel erstellt, sind im OpenSSH-Format. Um sie mit PuTTY nutzen zu können, müssen sie zuerst ins PuTTY Private Key-Format konvertiert werden. Dafür nutzt du die Software "**PuTTYGen**", die automatisch mit PuTTY installiert wird.

PuTTYGen findest du im PuTTY-Installationsordner. Standardmäßig wäre das im Beispielbild unter "**C:>Program Files>PuTTY**".

Starte PuTTYGen und klicke dann auf "**Datei**" -> "**Privaten Schlüssel laden**".

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

Jetzt musst du die von ZAP-Hosting generierte Datei öffnen. Navigiere dazu in das Standard-Download-Verzeichnis.

:::info
**Wichtig:** Achte darauf, dass der Filter auf "**Alle Dateien**" steht, wie im Bild gezeigt, da die vom System erstellte .pri-Datei sonst nicht sichtbar ist.
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

Damit du das nicht bei jeder Verbindung wiederholen musst, empfiehlt es sich, die Einstellungen in der Session zu speichern. Klicke dazu auf "**Session**" - "**Standard-Einstellungen**" - "**Speichern**", wie im Screenshot zu sehen.

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

Jetzt kannst du dich mit PuTTY auf dem Server einloggen. Der in PuTTYGen eingegebene "**Key-Kommentar**" wird dort angezeigt.

## Login mit Passwort deaktivieren

SSH-Keys wurden erstellt, um die Sicherheit zu erhöhen. Wenn der Login mit SSH-Passwort noch möglich ist, hat sich an der Sicherheit des Servers nichts geändert. Deshalb muss der SSH-Login via Passwort jetzt deaktiviert werden. Dabei gibt es Unterschiede zwischen Linux VPS und Linux Root Servern. Wenn der Login korrekt deaktiviert ist, können sich nur noch Nutzer mit deinem SSH-Key verbinden.

### Linux VPS

Den Passwort-Login kannst du ganz easy im Tab Zugriff & Sicherheit deaktivieren.
Drücke den Button **Passwort-Login deaktivieren** neben dem Button SSH-Key generieren.
Ist er deaktiviert, ist kein Login mehr per Passwort möglich.

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

Die Anzeige für "**SSH-Login via Passwort**" steht dann auf "**Inaktiv**".