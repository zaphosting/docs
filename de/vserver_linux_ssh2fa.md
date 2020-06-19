---
id: vserver_linux_ssh2fa
title: Zwei Faktor Authentifizierung
sidebar_label: Zwei Faktor Authentifizierung
---

## 💾 Google Authenticator Installieren

Als erstes musst du den Google Authenticator auf deinem Linux vServer/Rootserver installieren.
Kopiere dir dafür einfach diese Zeile:

```
sudo apt install libpam-google-authenticator
```

Danach wirst du aufgefordert werden "Y" einzugeben um das Packet zu installieren, gib dies ein, drücke Enter und dann ist der Google Authenticator installiert!

![](https://screensaver01.zap-hosting.com/index.php/s/MFfdxA2ib4FnxJe/preview)

## ⌨ Google Authenticator Ausführen

Führe nun den Google Authenticator aus, indem du `google-authenticator` eingibst.

Achte darauf das dein Fenster groß genug für den QR Code ist, ansonsten Drücke "CTRL+C" und gib es erneu ein.

![](https://screensaver01.zap-hosting.com/index.php/s/Cs3oCH27xKr3C2a/preview)

Du wirst nun gefragt ob du es ausführen möchtest, schreibe dort auch einfach "Y"

Du kriegst nun einen großen QR Code. Öffne deine Authenticator App auf deinem Smartphone und scanne den QR Code.
Für dieses Beispiel benutzen wir den Google Authenticator.

![](https://screensaver01.zap-hosting.com/index.php/s/ZnabwTXa5qZPtkS/preview)

Stelle sicher das du dir die Backup Codes kopierst, diese können jeweils einmal eingesetzt werden im Fall das du deinen Authenticator verlierst.

![](https://screensaver01.zap-hosting.com/index.php/s/yJGHF9pgseSCdMj/preview)

Jetzt kannst du in der App bereits die Codes sehen mit denen du dich später einloggst.

In unserem Fall sieht das jetzt so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/cZjx8zoCcY3CSFa/preview)

Du wirst nun 4 Dinge gefragt.

1. Soll die Google Authenticator Konfiguration gespeichert werden?
2. Soll nur ein Login alle 30 Sekunden möglich sein? (Also nur ein Login alle 30 Sekunden).
3. Soll die Zeit erhöt werden in der ein Code nutzbar ist?
4. Sollen nur Drei Logins alle 30 Sekunden möglich sein? (Schutz gegen Brute Force)

Aus Sicherheitsgründen empfehlen wir bei allen 4 Fragen "Y" einzugeben und dann Enter zu drücken.

![](https://screensaver01.zap-hosting.com/index.php/s/Z8HibKcB9WnseR8/preview)

## 💽 Google Authenticator Konfigurieren

Nun müssen wir noch anpassen das der Google Authenticator auch genutzt wird.

Dafür sind nur zwei Dateiänderungen nötig.

### /etc/ssh/sshd_config

In der `/etc/ssh/sshd_config` aktivieren wir die erforderlichen Module.

Öffne die `/etc/ssh/sshd_config` Datei indem du 
```
sudo nano /etc/ssh/sshd_config
``` 
eingibst.

Du siehst nun dieses Fenster vor dir:

![](https://screensaver01.zap-hosting.com/index.php/s/ykWsTHCYKNoRNwg/preview)

Du bist nun in einem Text Editor. Du kannst dich mit den Pfeiltasten bewegen, frei Text löschen und Eingeben und schliesslich mit `CTRL + X` dann `Y` und letzlich `Enter` die Datei Speichern.

Stelle nun Sicher das die beiden Zeilen `UsePAM` und `ChallengeResponseAuthentication` auf `yes` stehen. So wie hier:

![](https://screensaver01.zap-hosting.com/index.php/s/DH9nDHjfyPGYtbz/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/rteESXsZzWLRJPa/preview)

Speichere danach die Datei mit `CTRL + X` dann `Y` und letzlich `Enter`

Starte danach SSH neu mit 
```
sudo systemctl restart ssh
``` 
Wenn keine Fehler kommen gehen wir zum nächsten Schritt.

### /etc/pam.d/sshd

In der `/etc/pam.d/sshd` fügen wir den Google Authenticator dem Login hinzu.

Öffne die `/etc/pam.d/sshd` Datei indem du `sudo nano /etc/pam.d/sshd` eingibst.

Du siehst nun dieses Fenster vor dir:

![](https://screensaver01.zap-hosting.com/index.php/s/NHxgbcYfZFPqJEy/preview)

Der letzte Schritt ist nun an das Ende der Datei runterzuscrollen und `auth required pam_google_authenticator.so` einzutragen.

![](https://screensaver01.zap-hosting.com/index.php/s/pTpMQYZ2FDNR5yE)

Speichere danach die Datei mit `CTRL + X` dann `Y` und letzlich `Enter`

## 💻 Einloggen mit 2FA

Jetzt ist die Zeit gekommen sich das erste mal mit 2FA einzuloggen.

Nachdem du die oben genannten Schritte befolgt hast musst du nurnoch deine SSH Verbindung neustarten.

![](https://screensaver01.zap-hosting.com/index.php/s/meaMHTJBYqPwJnt/preview)

Du gibst nun ganz normal dein Passwort ein. Danach wirst du nach einem Code gefragt, gebe dort einfach den aktuellen 2FA Code ein.

![](https://screensaver01.zap-hosting.com/index.php/s/Mwe4cMfFwBGnnNM/preview)

Und schon bist du eingeloggt! Du hast nun 2FA für SSH aktiviert.
