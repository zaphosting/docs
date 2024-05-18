---
id: dedicated-linux-ssh2fa
title: "Dedicated Server: SSH Zwei-Faktor-Authentifizierung "
description: Informationen, wie du Zwei Faktor Authentifizierung für deinen Linux Dedicated Server von ZAP-Hosting einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: 2FA (SSH)
---



## Einführung

Der SSH-Zweifaktorauthentifizierung (2FA) Service von Google, bekannt als **Google Authenticator SSH**, erweitert die Sicherheit von SSH-Zugängen (Secure Shell) durch die Hinzufügung einer zweiten Authentifizierungsebene. Während SSH bereits eine sichere Methode bietet, um eine verschlüsselte Verbindung zu einem Remote-Server herzustellen, erhöht die Integration von 2FA die Sicherheitsstufe, indem sie verlangt, dass Benutzer nicht nur ihr Passwort eingeben, sondern auch einen einmaligen Verifizierungscode, der durch den Google Authenticator generiert wird. In dieser Anleitung werden wir uns mit der Installation und Konfiguration des **Google Authenticator SSH**-Dienstes auf einem Linux-Server beschäftigen.



## Installation

Als Erstes musst du den Google Authenticator auf deinem Linux Dedicated Server/Rootserver installieren.
Kopiere dir dafür einfach diese Zeile:

```
sudo apt install libpam-google-authenticator
```

Danach wirst du aufgefordert werden "Y" einzugeben um das Paket zu installieren, gib dies ein, drücke Enter und dann ist der Google Authenticator installiert!

![](https://user-images.githubusercontent.com/61839701/166183702-67a07bf3-e199-4f20-a166-9fed0f297d1c.pn)

Führe nun den Google Authenticator aus, indem du `google-authenticator` eingibst.

![](https://user-images.githubusercontent.com/61839701/166183758-869cf62d-a242-4365-9ca3-3bbeda553870.png)

Du wirst nun gefragt, ob du es ausführen möchtest, schreibe dort auch einfach "Y". Du kriegst jetzt einen großen QR Code.
Achte darauf, dass dein Fenster groß genug für den QR Code ist, ansonsten drücke "CTRL+C" und gib es erneut ein.
 Öffne deine Authenticator App auf deinem Smartphone und scanne den QR Code.
Für dieses Beispiel benutzen wir den Google Authenticator.

![image](https://user-images.githubusercontent.com/13604413/159171815-4a7368da-fab1-4284-9c90-e310a577dbbf.png)

Stelle sicher, dass du dir die Backupcodes kopierst, diese können jeweils einmal eingesetzt werden im Fall, dass du deinen Authenticator verlierst.

![](https://user-images.githubusercontent.com/61839701/166183779-055a3e93-1040-460a-a589-366d9c8bdedf.png)

Jetzt kannst du in der App bereits die Codes sehen, mit denen du dich später einloggst.

In unserem Fall sieht das jetzt so aus:

![](https://user-images.githubusercontent.com/61839701/166183807-7e5e04a2-8da6-4d2e-bd3b-a42c2baa045a.png)

Du wirst jetzt 4 Dinge gefragt.

1. Soll die Google Authenticator Konfiguration gespeichert werden?
2. Soll nur ein Login alle 30 Sekunden möglich sein? (Also nur ein Login alle 30 Sekunden).
3. Soll die Zeit erhöht werden, in der ein Code nutzbar ist?
4. Sollen nur drei Logins alle 30 Sekunden möglich sein? (Schutz gegen Brute Force)

Aus Sicherheitsgründen empfehlen wir bei allen 4 Fragen "Y" einzugeben und dann Enter zu drücken.

![](https://user-images.githubusercontent.com/61839701/166183833-fdb07942-51c2-446e-b87b-e0e0d839e6d4.png)



## Konfiguration

Nun müssen wir noch anpassen, dass der Google Authenticator auch genutzt wird. Dafür sind nur zwei Dateiänderungen nötig.

### /etc/ssh/sshd_config

In der `/etc/ssh/sshd_config` aktivieren wir die erforderlichen Module. Öffne die `/etc/ssh/sshd_config` Datei, indem du 

```
sudo nano /etc/ssh/sshd_config
```
eingibst.

Du bist jetzt in einem Text Editor. Du kannst dich mit den Pfeiltasten bewegen, frei Text löschen und eingeben und schließlich mit `CTRL + X` dann `Y` und letztlich `Enter` die Datei speichern. Stelle sicher das die beiden Zeilen `UsePAM` und `ChallengeResponseAuthentication` auf `yes` stehen. So wie hier:

![](https://user-images.githubusercontent.com/61839701/166183852-ea0dc9dd-b5db-40eb-b90e-6c53e71d0908.png)

![](https://user-images.githubusercontent.com/61839701/166183859-2fe15906-efec-4c62-b24f-a1b0fc364ebd.png)

Speichere danach die Datei mit `CTRL + X` dann `Y` und letztlich `Enter`. Starte danach SSH neu mit 

```
sudo systemctl restart ssh
```
Wenn keine Fehler kommen, gehen wir zum nächsten Schritt.

### /etc/pam.d/sshd

In der `/etc/pam.d/sshd` fügen wir den Google Authenticator dem Login hinzu.

Öffne die `/etc/pam.d/sshd` Datei, indem du `sudo nano /etc/pam.d/sshd` eingibst.

Der letzte Schritt ist jetzt an das Ende der Datei runterzuscrollen und `auth required pam_google_authenticator.so` einzutragen.

![](https://user-images.githubusercontent.com/61839701/166183887-7a683371-6ff5-4260-9300-4f79bcc29e60.png)

Speichere danach die Datei mit `CTRL + X` dann `Y` und letzlich `Enter`



## Zugang testen

Jetzt ist die Zeit gekommen, sich das erste Mal mit 2FA einzuloggen. Nachdem du die oben genannten Schritte befolgt hast, musst du nur noch deine SSH Verbindung neu starten.

![image](https://user-images.githubusercontent.com/13604413/159171829-90fb3349-c238-4558-818a-0657b87062e5.png)

Du gibst nun ganz normal dein Passwort ein. Danach wirst du nach einem Code gefragt, gebe dort einfach den aktuellen 2FA Code ein.

![](https://user-images.githubusercontent.com/61839701/166183906-b2d6e770-66fa-4096-a642-b3873470dc85.png)

Und schon bist du eingeloggt! Du hast nun 2FA für SSH aktiviert.
