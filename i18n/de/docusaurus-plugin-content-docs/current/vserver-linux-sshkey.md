---
id: vserver-linux-sshkey
title: "vServer: SSH-Keys für Linux-Server erstellen und nutzen"
description: "Entdecke, wie du SSH-Keys sicher für deinen Linux-Server generierst und verwaltest, um die Verbindungssicherheit und Kontrolle zu verbessern → Jetzt mehr erfahren"
sidebar_label: SSH Key
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## SSH-Key generieren

Für eine deutlich sicherere Verbindung als bei der herkömmlichen SSH-Passwort-Verbindung empfehlen wir die Nutzung von SSH-Keys. Öffne dafür den Tab "**Zugriff & Sicherheit**" im Dashboard deines Linux-Servers.

![](https://screensaver01.zap-hosting.com/index.php/s/wJCtHY44dYiYoqX/preview)

Unter "**Zugriff & Sicherheit**" kannst du jetzt mit dem Button "**SSH-Key generieren**" einen Key erstellen. Sobald du diesen klickst, öffnet sich ein Popup und der zufällig generierte Key wird direkt auf deinen PC heruntergeladen. Damit der Key auf dem Server hinterlegt wird, musst du den Button "**Key hinzufügen**" drücken.

:::info
Bei Linux VPS wird der Key direkt hinzugefügt. Bei Linux Root Servern muss der Server neu gestartet werden, damit die Änderungen wirksam werden.
:::

<InlineVoucher />

![](https://screensaver01.zap-hosting.com/index.php/s/GsER3sNYWYj8t7y/preview)

Wenn du weitere Keys brauchst, kannst du im selben Fenster den Button "**Key generieren**" erneut drücken.  
Mit "**Key-Name**" kannst du deinem Key einen Namen geben, der im ZAP-Hosting Panel angezeigt wird. Das sorgt für mehr Übersicht.

Sind alle gewünschten Keys generiert und hinzugefügt, werden sie unter "**Zugriff & Sicherheit**" angezeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/5yjACdnpyiw6E97/preview)

Falls du einen eigenen öffentlichen Key hast, den du extern generiert hast und nicht über unser Panel, kannst du ihn über das "**+**"-Icon integrieren.

![](https://screensaver01.zap-hosting.com/index.php/s/H75CCTe5tTonn8y/preview)

Es öffnet sich ein leeres Feld, in das du deinen öffentlichen Key einfügen kannst. Mit "**Key hinzufügen**" wird der Key auf dem Server hinterlegt und im Panel angezeigt.

## OpenSSH zu PuTTY Private Key mit PuTTYGen konvertieren

Die SSH-Keys, die unser Panel erstellt, sind im OpenSSH-Format. Um diese mit PuTTY nutzen zu können, müssen sie zuerst ins PuTTY Private Key-Format konvertiert werden. Dafür nutzt du die Software "**PuTTYGen**", die automatisch mit PuTTY installiert wird.

Die PuTTYGen-Anwendung findest du im PuTTY-Installationsordner. Standardmäßig wäre das im Beispielbild unter "**C:>Program Files>PuTTY**".

Starte PuTTYGen und klicke dann auf "**Datei**" -> "**Privaten Schlüssel laden**".

![](https://screensaver01.zap-hosting.com/index.php/s/KNeiG7eWpWateDz/preview)

Jetzt musst du die von ZAP-Hosting generierte Datei öffnen. Navigiere dazu in das Standard-Download-Verzeichnis.

:::info
**Wichtig:** Achte darauf, dass der Filter auf "**Alle Dateien**" steht, wie im Bild gezeigt, da die .pri-Datei sonst nicht angezeigt wird.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/WQfWN264pJPKWYX/preview)

Sobald die Datei geladen ist, kannst du Kommentare und ein Passwort für den Key festlegen. Um ein Passwort zu setzen, gib es sowohl bei "**Key-Passphrase**" als auch bei "**Passphrase bestätigen**" ein.  
*Hinweis:* Du kannst die Felder auch leer lassen und den Key ohne Passwort erstellen, das ist aber weniger sicher und daher nicht empfohlen. Wenn alles passt, speichere den PuTTY-kompatiblen Key mit "**Privaten Schlüssel speichern**".

![](https://screensaver01.zap-hosting.com/index.php/s/N4dKc86M95yYbtK/preview)

Gib der .ppk-Datei einen Namen und speichere sie, damit du sie später wiederfindest.

## SSH-Key Verbindung

Damit der Key für Verbindungen genutzt werden kann, muss er zuerst in PuTTY eingebunden werden. Klicke dazu auf "**SSH**" - "**Auth**" - "**Durchsuchen...**".

![](https://screensaver01.zap-hosting.com/index.php/s/3BJ7NaG2AemGSZt/preview)

Wähle den gerade mit PuTTYGen erstellten Key aus und klicke auf "**Öffnen**".

Damit du das nicht bei jeder Verbindung wiederholen musst, empfiehlt es sich, die Einstellungen in der Session zu speichern. Klicke dazu auf "**Session**" - "**Standard-Einstellungen**" - "**Speichern**", wie im Screenshot zu sehen.

![](https://screensaver01.zap-hosting.com/index.php/s/zENfY7DBZk85mMa/preview)

Jetzt kannst du dich mit PuTTY auf deinem Server einloggen. Der in PuTTYGen eingetragene "**Key-Kommentar**" wird dort angezeigt.

## Passwort-Login deaktivieren

SSH-Keys wurden erstellt, um die Sicherheit zu erhöhen. Wenn der Login per SSH-Passwort noch möglich ist, hat sich an der Sicherheit des Servers nichts geändert. Deshalb muss der SSH-Login via Passwort jetzt deaktiviert werden. Dabei gibt es Unterschiede zwischen Linux VPS und Linux Root Servern. Wenn der Login korrekt deaktiviert ist, können sich nur noch Nutzer mit deinem SSH-Key verbinden.

### Linux VPS

Das Passwort-Login kannst du ganz einfach im Tab Zugriff & Sicherheit deaktivieren.  
Drücke den Button **Passwort-Login deaktivieren** neben dem Button SSH-Key generieren.  
Ist es deaktiviert, ist der Login per Passwort nicht mehr möglich.

![](https://screensaver01.zap-hosting.com/index.php/s/jd9NiypwxgpeMGe/preview)

Die Anzeige bei "**SSH-Login via Passwort**" steht dann auf "**Inaktiv**".

## Fazit

Glückwunsch, du hast deinen SSH-Key erfolgreich eingerichtet und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />