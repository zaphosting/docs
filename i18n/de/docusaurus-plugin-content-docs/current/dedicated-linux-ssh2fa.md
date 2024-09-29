---
id: dedicated-linux-ssh2fa
title: "Dedicated Server: SSH Zwei-Faktor-Authentifizierung "
description: Informationen, wie du Zwei Faktor Authentifizierung für deinen Linux Dedicated Server von ZAP-Hosting einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der SSH-Zweifaktorauthentifizierung (2FA) Service von Google, bekannt als **Google Authenticator SSH**, erweitert die Sicherheit von SSH-Zugängen (Secure Shell) durch die Hinzufügung einer zweiten Authentifizierungsebene. Während SSH bereits eine sichere Methode bietet, um eine verschlüsselte Verbindung zu einem Remote-Server herzustellen, erhöht die Integration von 2FA die Sicherheitsstufe, indem sie verlangt, dass Benutzer nicht nur ihr Passwort eingeben, sondern auch einen einmaligen Verifizierungscode, der durch den Google Authenticator generiert wird. In dieser Anleitung werden wir uns mit der Installation und Konfiguration des **Google Authenticator SSH**-Dienstes auf einem Linux-Server beschäftigen.

<InlineVoucher />

## Installation

Als Erstes musst du den Google Authenticator auf deinem Linux Dedicated Server/Rootserver installieren.
Kopiere dir dafür einfach diese Zeile:

```
sudo apt install libpam-google-authenticator
```

Danach wirst du aufgefordert werden "Y" einzugeben um das Paket zu installieren, gib dies ein, drücke Enter und dann ist der Google Authenticator installiert!

![](https://screensaver01.zap-hosting.com/index.php/s/Tct38PNonnpcxZ2/preview)

Führe nun den Google Authenticator aus, indem du `google-authenticator` eingibst.

![](https://screensaver01.zap-hosting.com/index.php/s/CTBA39GZkNJQm5s/preview)

Du wirst nun gefragt, ob du es ausführen möchtest, schreibe dort auch einfach "Y". Du kriegst jetzt einen großen QR Code.
Achte darauf, dass dein Fenster groß genug für den QR Code ist, ansonsten drücke "CTRL+C" und gib es erneut ein.
 Öffne deine Authenticator App auf deinem Smartphone und scanne den QR Code.
Für dieses Beispiel benutzen wir den Google Authenticator.

![](https://screensaver01.zap-hosting.com/index.php/s/WGRyiqHfzmSdbFb/preview)

Stelle sicher, dass du dir die Backupcodes kopierst, diese können jeweils einmal eingesetzt werden im Fall, dass du deinen Authenticator verlierst.

![](https://screensaver01.zap-hosting.com/index.php/s/zpnaXJt75txsNEE/preview)

Jetzt kannst du in der App bereits die Codes sehen, mit denen du dich später einloggst.

In unserem Fall sieht das jetzt so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/jdfK4YEa8Kkrwjb/preview)

Du wirst jetzt 4 Dinge gefragt.

1. Soll die Google Authenticator Konfiguration gespeichert werden?
2. Soll nur ein Login alle 30 Sekunden möglich sein? (Also nur ein Login alle 30 Sekunden).
3. Soll die Zeit erhöht werden, in der ein Code nutzbar ist?
4. Sollen nur drei Logins alle 30 Sekunden möglich sein? (Schutz gegen Brute Force)

Aus Sicherheitsgründen empfehlen wir bei allen 4 Fragen "Y" einzugeben und dann Enter zu drücken.

![](https://screensaver01.zap-hosting.com/index.php/s/NgFz8bEWwjbqM6M/preview)



## Konfiguration

Nun müssen wir noch anpassen, dass der Google Authenticator auch genutzt wird. Dafür sind nur zwei Dateiänderungen nötig.

### /etc/ssh/sshd_config

In der `/etc/ssh/sshd_config` aktivieren wir die erforderlichen Module. Öffne die `/etc/ssh/sshd_config` Datei, indem du 

```
sudo nano /etc/ssh/sshd_config
```
eingibst.

Du bist jetzt in einem Text Editor. Du kannst dich mit den Pfeiltasten bewegen, frei Text löschen und eingeben und schließlich mit `CTRL + X` dann `Y` und letztlich `Enter` die Datei speichern. Stelle sicher das die beiden Zeilen `UsePAM` und `ChallengeResponseAuthentication` auf `yes` stehen. So wie hier:

![](https://screensaver01.zap-hosting.com/index.php/s/b4jHpayES6Bqegx/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/tyYnbBPBmNMMTyx/preview)

Speichere danach die Datei mit `CTRL + X` dann `Y` und letztlich `Enter`. Starte danach SSH neu mit 

```
sudo systemctl restart ssh
```
Wenn keine Fehler kommen, gehen wir zum nächsten Schritt.

### /etc/pam.d/sshd

In der `/etc/pam.d/sshd` fügen wir den Google Authenticator dem Login hinzu.

Öffne die `/etc/pam.d/sshd` Datei, indem du `sudo nano /etc/pam.d/sshd` eingibst.

Der letzte Schritt ist jetzt an das Ende der Datei runterzuscrollen und `auth required pam_google_authenticator.so` einzutragen.

![](https://screensaver01.zap-hosting.com/index.php/s/ktcZ2AMmjMjaYno/preview)

Speichere danach die Datei mit `CTRL + X` dann `Y` und letzlich `Enter`



## Zugang testen

Jetzt ist die Zeit gekommen, sich das erste Mal mit 2FA einzuloggen. Nachdem du die oben genannten Schritte befolgt hast, musst du nur noch deine SSH Verbindung neu starten.

![](https://screensaver01.zap-hosting.com/index.php/s/KRJwKGCBHYEEfos/preview)

Du gibst nun ganz normal dein Passwort ein. Danach wirst du nach einem Code gefragt, gebe dort einfach den aktuellen 2FA Code ein.

![](https://screensaver01.zap-hosting.com/index.php/s/bAQcHtkjZ9qFm5P/preview)

Und schon bist du eingeloggt! Du hast nun 2FA für SSH aktiviert.
