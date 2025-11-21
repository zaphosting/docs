---
id: vserver-linux-ssh2fa
title: "vServer: SSH Zwei-Faktor-Authentifizierung"
description: "Entdecke, wie du die SSH-Sicherheit mit Google Authenticator 2FA verbesserst für einen sichereren Serverzugang und schütze deine Linux-Umgebung → Jetzt mehr erfahren"
sidebar_label: 2FA (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der SSH-Zwei-Faktor-Authentifizierungsdienst (2FA) von Google, bekannt als **Google Authenticator SSH**, erhöht die Sicherheit des SSH (Secure Shell)-Zugangs, indem eine zweite Authentifizierungsebene hinzugefügt wird. Während SSH bereits eine sichere Methode bietet, um eine verschlüsselte Verbindung zu einem entfernten Server herzustellen, steigert die Integration von 2FA die Sicherheit, indem Nutzer nicht nur ihr Passwort, sondern auch einen einmaligen Verifizierungscode eingeben müssen, der vom Google Authenticator generiert wird. In dieser Anleitung zeigen wir dir, wie du den **Google Authenticator SSH** Dienst auf einem Linux-Server installierst und konfigurierst.

<InlineVoucher />

## Installation

Zuerst musst du den Google Authenticator auf deinem Linux VPS installieren. Führe folgenden Befehl aus:

```
sudo apt install libpam-google-authenticator
```

Du wirst dann aufgefordert, mit "Y" die Installation zu bestätigen. Tippe das ein, drücke Enter und der Google Authenticator wird installiert!

![](https://screensaver01.zap-hosting.com/index.php/s/AnKdPXEzKdB5xWS/preview)

Starte den Google Authenticator, indem du `google-authenticator` eingibst. Achte darauf, dass dein Fenster groß genug für den QR-Code ist, sonst drücke "CTRL+C" und starte den Befehl erneut.

![](https://screensaver01.zap-hosting.com/index.php/s/8w9aDz5ZbSmNPZ9/preview)

Du wirst erneut gefragt, ob du den Vorgang ausführen möchtest – tippe "Y" zum Bestätigen. Jetzt bekommst du einen QR-Code angezeigt. Öffne deine Authenticator-App auf dem Smartphone und scanne den QR-Code. Für dieses Beispiel nutzen wir den Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/J5CL6mjzPRMSiap/preview)

Kopiere unbedingt die Backup-Codes, diese kannst du jeweils einmal verwenden, falls du deinen Authenticator verlierst.

![](https://screensaver01.zap-hosting.com/index.php/s/itdjPyGrFb7Wq39/preview)

Die App zeigt dir jetzt schon die Codes an, die du später zum Einloggen brauchst. So sieht das aus:

![](https://screensaver01.zap-hosting.com/index.php/s/TW24xBe26TbgCqE/preview)

Jetzt folgen ein paar Fragen:

1. Möchtest du die Google Authenticator-Konfiguration speichern?
2. Möchtest du nur einen Login alle 30 Sekunden erlauben?
3. Soll die Zeit, in der ein Code gültig ist, verlängert werden?
4. Sollen nur drei Logins alle 30 Sekunden möglich sein? (Schutz vor Brute Force)

Aus Sicherheitsgründen empfehlen wir, alle Fragen mit "Ja" zu bestätigen.

![](https://screensaver01.zap-hosting.com/index.php/s/bdYRncwk7ssQyYJ/preview)

## Konfiguration

Jetzt müssen wir den Google Authenticator so einstellen, dass er auch wirklich genutzt wird. Dafür sind zwei Anpassungen nötig.

### /etc/ssh/sshd_config

Aktiviere die nötigen Module in der Datei `/etc/ssh/sshd_config`. Öffne die Datei mit:

```
sudo nano /etc/ssh/sshd_config
```

Du bist jetzt im Texteditor. Mit den Pfeiltasten kannst du dich bewegen, Text löschen oder eingeben. Speichere die Datei mit 'CTRL + X', dann 'Y' und drücke Enter.

Stelle sicher, dass die Zeilen `UsePAM` und `ChallengeResponseAuthentication` auf `yes` gesetzt sind. So sollte es aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/n8MzX8724T2GFAF/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zLk98HrkF4jk4Jf/preview)

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

![](https://screensaver01.zap-hosting.com/index.php/s/xwodXzPifANsQAM/preview)

Speichere die Datei wieder mit 'CTRL + X', dann 'Y' und Enter.

## Zugang testen

Jetzt ist es Zeit, dich das erste Mal mit 2FA einzuloggen. Nachdem du die Schritte oben befolgt hast, musst du nur noch deine SSH-Verbindung neu starten.

![](https://screensaver01.zap-hosting.com/index.php/s/cN3x3aFbtfxdi7M/preview)

Gib dein Passwort wie gewohnt ein. Danach wirst du nach einem Code gefragt – gib einfach den aktuellen 2FA-Code ein.

![](https://screensaver01.zap-hosting.com/index.php/s/y3dgYXezL8sDbJe/preview)

Und schon bist du eingeloggt!

## Fazit

Glückwunsch, du hast 2FA für SSH erfolgreich aktiviert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />