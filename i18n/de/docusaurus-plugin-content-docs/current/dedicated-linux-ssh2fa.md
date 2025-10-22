---
id: dedicated-linux-ssh2fa
title: "Dedicated Server: SSH Zwei-Faktor-Authentifizierung"
description: "Entdecke, wie du die SSH-Sicherheit mit Google Authenticator 2FA verbesserst für sicheren Serverzugang und schütze deinen Linux VPS → Jetzt mehr erfahren"
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der SSH Zwei-Faktor-Authentifizierungsdienst von Google, bekannt als **Google Authenticator SSH**, erhöht die Sicherheit des SSH (Secure Shell) Zugangs, indem eine zweite Authentifizierungsebene hinzugefügt wird. Während SSH bereits eine sichere Methode bietet, um eine verschlüsselte Verbindung zu einem entfernten Server herzustellen, steigert die Integration von 2FA die Sicherheit, indem Nutzer nicht nur ihr Passwort, sondern auch einen einmaligen Verifizierungscode eingeben müssen, der vom Google Authenticator generiert wird. In dieser Anleitung zeigen wir dir, wie du den **Google Authenticator SSH** Dienst auf einem Linux-Server installierst und konfigurierst.

<InlineVoucher />

## Installation

Zuerst musst du den Google Authenticator auf deinem Linux VPS installieren. Führe folgenden Befehl aus:

```
sudo apt install libpam-google-authenticator
```

Du wirst dann aufgefordert, mit "Y" die Installation zu bestätigen. Tippe das ein, drücke Enter und der Google Authenticator wird installiert!

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

Starte den Google Authenticator, indem du 'google-authenticator' eingibst. Achte darauf, dass dein Fenster groß genug für den QR-Code ist, sonst drücke "CTRL+C" und starte es erneut.

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

Du wirst erneut gefragt, ob du fortfahren möchtest – tippe "Y" zum Bestätigen. Jetzt bekommst du einen QR-Code angezeigt. Öffne deine Authenticator-App auf dem Smartphone und scanne den QR-Code. Für dieses Beispiel nutzen wir den Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

Kopiere unbedingt die Backup-Codes, diese kannst du jeweils einmalig verwenden, falls du deinen Authenticator verlierst.

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

Die App zeigt dir jetzt schon die Codes an, die du später zum Einloggen brauchst. So sieht das aus:

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

Folgende Fragen werden dir jetzt gestellt:

1. Möchtest du die Google Authenticator Konfiguration speichern?
2. Möchtest du nur einen Login alle 30 Sekunden erlauben?
3. Soll die Zeit, in der ein Code gültig ist, verlängert werden?
4. Sollen nur drei Logins alle 30 Sekunden möglich sein? (Schutz vor Brute Force)

Aus Sicherheitsgründen empfehlen wir, alle mit Ja zu bestätigen.

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## Konfiguration

Jetzt müssen wir den Google Authenticator so einstellen, dass er auch verwendet wird. Dafür sind zwei Anpassungen nötig.

### /etc/ssh/sshd_config

Aktiviere die benötigten Module in der Datei `/etc/ssh/sshd_config`. Öffne die Datei mit:

```
sudo nano /etc/ssh/sshd_config
```

Du bist jetzt in einem Texteditor. Mit den Pfeiltasten kannst du dich bewegen, Text löschen oder eingeben. Speichere die Datei mit 'CTRL + X', dann 'Y' und zuletzt 'Enter'.

Stelle sicher, dass die beiden Zeilen 'UsePAM' und 'ChallengeResponseAuthentication' auf 'yes' gesetzt sind. So sollte es aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

Speichere die Datei wie beschrieben und starte SSH mit folgendem Befehl neu:

```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

Jetzt fügen wir den Google Authenticator zum Login in der Datei `/etc/pam.d/sshd` hinzu. Öffne die Datei mit:

```
sudo nano /etc/pam.d/sshd
```

Scrolle ans Ende der Datei und füge folgende Zeile ein:

```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

Speichere die Datei wieder mit 'CTRL + X', dann 'Y' und 'Enter'.

## Zugang testen

Jetzt ist es Zeit, dich das erste Mal mit 2FA einzuloggen. Nachdem du die Schritte oben befolgt hast, musst du nur noch deine SSH-Verbindung neu starten.

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

Gib dein Passwort wie gewohnt ein. Danach wirst du nach einem Code gefragt – gib einfach den aktuellen 2FA-Code ein.

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

Und schon bist du eingeloggt!

## Fazit

Glückwunsch, du hast 2FA für deinen SSH-Zugang erfolgreich eingerichtet. Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂 

<InlineVoucher />