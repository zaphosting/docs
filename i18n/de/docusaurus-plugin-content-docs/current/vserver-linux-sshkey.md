---
id: vserver-linux-sshkey
title: "vServer: SSH Key für Linux Server generieren und verwenden"
description: Informationen wie du einen SSH Key für deinen Linux vServer von ZAP-Hosting generieren kannst und wie du den Key verwendest - ZAP-Hosting.com Dokumentation
sidebar_label: SSH Key
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## SSH Key generieren

Für eine Verbindung, die deutlich sicherer ist, wie eine herkömmliche Verbindung mit dem SSH Password, wird die Nutzung von SSH Keys empfohlen.
Hierzu im Dashboard von dem Linux Server den Reiter "**Zugang & Sicherheit**" öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/7a6NbYMSLAn2DDw/preview)

Bei "**Zugang & Sicherheit**" kann nun mit dem "**SSH-Key generieren**" Button in Key generiert werden.
Sobald dieser gedrückt wird, öffnet sich ein Popup und ein Key zufällig erstellter Key wird direkt auf den PC heruntergeladen.
Damit der Key zu dem Server hinzugefügt wird, muss der "**Key hinzufügen**" Button betätigt werden.

:::info
Bei Linux vServern wird der Key direkt hinzugefügt

Bei Linux Rootserver ist ein Neustart von dem Server erforderlich, damit diese Änderungen übernommen werden
:::

<InlineVoucher />

![](https://screensaver01.zap-hosting.com/index.php/s/wYgLT8aZmmijnPC/preview)

Sollten weitere Keys benötigt werden, kann im gleichen Fenster der "**Key generieren**" Button betätigt werden.
Mit "**Keyname**" kann man einen Namen für den Key setzen, welcher im ZAP-Hosting Panel angezeigt werden soll, wird für eine deutlich bessere Übersicht empfohlen.

Sofern alle gewünschten Keys generiert und hinzugefügt wurden, werden diese nun bei "**Zugang & Sicherheit**" angezeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/ijroyJ6jK7R8FkK/preview)

Solltest du einen eigenen Public Key haben, welchen du vorher extern und nicht über unser Panel generiert hast, kannst du diesen über einen Klick auf das "**+**" Icon einbinden.

![](https://screensaver01.zap-hosting.com/index.php/s/YXAoP7RPA7fdPws/preview)

Es öffnet sich dann ein leeres Panel, in welchem du deinen eigenen Public Key einfügen kannst. 
Der Key wird dann mit Betätigen der "**Key hinzufügen**" Funktion zum Server hinzugefügt und in unserem Panel angezeigt.

## OpenSSH zu PuTTY-Private-Key mit PuTTYGen

Die SSH Keys, die von unserem Panel erstellt werden, befinden sich im OpenSSH Format.
Damit man diese bei PuTTY nutzen kann, müssen diese Keys vorher zu dem PuTTY-Private-Key Format konvertiert werden.
Nutzen kann man dafür die von PuTTY automatisch mit installierte "**PuTTYGen**" Software.

Die PuTTYGen Anwendung befindet sich in dem PuTTY Stammverzeichnis.
Standardmäßig wäre der PuTTY Ordner wie im Beispielbild zu sehen bei "** C: > Program Files > PuTTY **"

Die PuTTYGen Anwendung starten und dort dann auf "**File**" -> "**Load private key**"

![](https://screensaver01.zap-hosting.com/index.php/s/gEf7RNEFSM8SF7Y/preview)

Nun muss die vom ZAP-Hosting generierte Datei geöffnet werden.
Dafür musst du in das Standardverzeichnis, wo alle deine Downloads abgelegt werden.

:::info
**Wichtig:** stelle sicher, dass du den Filter wie im Bild zu sehen auf "**ALL Files**" stehen hast, da die vom System erstellte .pri Datei nicht zu sehen ist.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/D4gDMZfnc3T3bBk/preview)

Sobald diese geladen wurde, kann man jetzt mit den verschiedenen Feldern sowohl Kommentare als auch ein Passwort für die Keys festlegen.
Um das Passwort zu setzen, muss dieses Wunschpasswort sowohl in "**Key passphrase**" als auch "**Confirm passphrase**" eingetragen werden.
*Hinweis:* Man kann diese Felder auch leer lassen und den Key ohne ein Passwort erstellen, dies wäre aber etwas unsicherer und demnach nicht empfohlen. 
Sobald alle Wunscheinträge gesetzt, kann nun mit dem Button "**Save private key**" ein für PuTTY kompatibler Key gespeichert werden.

![](https://screensaver01.zap-hosting.com/index.php/s/noFCwZWoj5PE2Cf/preview)

Diese .ppk Datei benennen und so abspeichern, dass diese später wiedergefunden werden kann.

## SSH Key Verbindung

Damit der Key für die Verbindungen genutzt werden kann, muss dieser bei Putty erst verknüpft werden.
Dafür im PuTTY Panel auf "**SSH**" - "**Auth**" - "**Browse...**".

![](https://screensaver01.zap-hosting.com/index.php/s/WfroQtpinWjeKYe/preview)

Den gerade über PuTTYGen erstellten Key heraussuchen und dort "**Öffnen**".

Damit man diese Schritte nicht bei jeder Verbindung wiederholen muss, wäre es empfohlen dies in der Session zu speichern.
Dafür auf "**Session**" - "**Default Settings**" - "**Save**", sowie es im Screenshot zu sehen wäre.

![](https://screensaver01.zap-hosting.com/index.php/s/qwLYtan4oNrpBYr/preview)

Nun kann bei Putty der Login zu dem Server durchgeführt werden.

## Login mit Passwort deaktivieren

Die SSH Keys wurden erstellt, um die Sicherheit zu erhöhen. Sofern der Login mit dem SSH Passwort aber noch möglich ist, hat sich an der Sicherheit vom Server noch nichts getan.
Aus diesem Grund muss jetzt der SSH Login via Passwort deaktiviert werden.
Zwischen Linux vServer und Linux Rootservern, gibt es einen Unterschied wie dieser Login deaktiviert werden muss.
Insofern der Login für deinen Server korrekt deaktiviert wurde, ist die Verbindung ausschließlich für Nutzer mit deinen erstellten SSH Key möglich.

### Linux vServer

Bei Linux vServer befindet sich direkt neben dem "**SSH Key generieren**" Button der "**Login mit Passwort deaktivieren**" Button, sofern dieser gedrückt wurde, ist der SSH Login mit dem Passwort nicht mehr möglich.

![](https://screensaver01.zap-hosting.com/index.php/s/eT8jeirpdWEnRB2/preview)

Die Anzeige bei "**SSH-Login via Passwort**" würde sich dann auch auf "**inaktiv**" stellen.

### Linux Rootserver

Bei Linux Rootserver, gibt es diese Funktion leider nicht, dort müsste dies händisch über SSH gemacht werden.
Dafür über PuTTY zu dem Server verbinden und mit einem Texteditor deiner Wahl folgende Datei ändern.
In unserem Beispiel nutzen wir "**nano**".

```
nano /etc/ssh/sshd_config
```

In dieser Datei muss nun "**PasswordAuthentification**" von "**yes**" auf "**no**" umgestellt werden.
Zudem muss die Raute (#) welche sich vor "**PasswordAuthentification**" befindet, entfernt werden.

Sofern "**#PasswordAuthentification yes**" auf "**PasswordAuthentification no**" gewechselt wurde, kann man die Datei bei Nano mit "**STRG**" + "**X**" schließen und die Änderungen mit "**Y**" speichern.


Im Anschluss muss der SSH Dienst neu gestartet werden, damit die Änderungen direkt aktiv sind.
Alternativ wären diese erst nach einem Serverneustart aktiv.

```
service sshd restart
```

## Abschluss

Glückwunsch, du hast den SSH Key erfolgreich angelegt und konfiguriert! Solltest du noch weitere Fragen oder Probleme haben, dann wende dich gerne an unser Support-Team, welches dir jeden Tag zur Verfügung steht! 