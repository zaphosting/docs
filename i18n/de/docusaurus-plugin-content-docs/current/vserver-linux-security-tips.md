---
id: vserver-linux-security-tips
title: "vServer: Linux Sicherheitstipps"
description: "Entdecke, wie du die Sicherheit deines Linux Servers mit wichtigen Tipps verbesserst, um unbefugten Zugriff zu verhindern und deine Services zu schützen → Jetzt mehr erfahren"
sidebar_label: Sicherheitstipps
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Diese Anleitung enthält einige Tipps und Ratschläge, wie du deinen Linux Server sicherer machen kannst. Gerade weil (virtuelle) Server von außen erreichbar sein müssen, ist ein Basisschutz gegen unerwünschten Zugriff auf jeden Fall empfehlenswert und sollte nicht vernachlässigt werden.

:::info
Bitte beachte, dass diese Anweisungen nicht abschließend sind und detailliertere Informationen in anderen Bereichen der ZAP-Dokumentation zu finden sind. (z.B. [2FA (SSH)](vserver-linux-ssh2fa.md))
:::

:::tip
Der einfachste Weg, deinen Server zu schützen, ist immer derselbe, egal welcher Server: Nutze sichere Passwörter, aktualisiere deine Services regelmäßig und achte generell darauf, welche Services du installierst und welchen Anleitungen du folgst.
:::

<InlineVoucher />

## SSH absichern

SSH (Secure Shell) ist ein Service, der dir erlaubt, remote auf die Konsole deines Servers zuzugreifen, um Befehle auszuführen. Hier siehst du, wie du SSH auf deinem Server einrichtest: [Erstzugang (SSH)](vserver-linux-ssh.md)

Standardmäßig wird für SSH ein passwortbasierter Login verwendet. Das hat jedoch den großen Nachteil, dass die Authentifizierung relativ leicht durch Brute-Force-Angriffe umgangen werden kann, besonders wenn du ein zu einfaches Passwort für deinen SSH-Login nutzt. Wenn du dich also für die Passwortlösung entscheidest, verwende bitte ein **sicheres** Passwort.

Um deinen Server noch besser gegen unerwünschten SSH-Zugriff zu schützen, solltest du die Authentifizierung ausschließlich über SSH-Schlüssel aktivieren und den Passwort-Login deaktivieren. Schau dir dazu die [SSH Key](vserver-linux-sshkey.md) Anleitung an, die erklärt, wie du SSH-Schlüssel generierst und hinzufügst.

## Port-Konfiguration deiner Services

| Service | Port |
|---------|------|
| SSH     | 22   |
| FTP     | 21   |
| Mail    | 25   |
| DNS     | 53   |
| HTTP    | 80   |
| HTTPS   | 443  |

Services wie SSH oder FTP verwenden standardmäßig immer dieselben Ports (einige davon sind in der Tabelle oben aufgeführt). Wenn ein externer Angreifer versucht, deinen SSH-Service per Brute Force anzugreifen, muss er zuerst wissen, welcher Port für SSH genutzt wird. Wenn du diese Ports nicht anders konfigurierst, sind die Ports 22 und 21 meist die Treffer, um direkt Befehle auf dem Server auszuführen oder Dateien per FTP zuzugreifen.

Um das zu verhindern, empfehlen wir, die Ports der Standardservices benutzerdefiniert einzurichten. Im nächsten Abschnitt erfährst du, wie das geht:

:::danger
Dein gewünschter Port muss zwischen 1024 und 65536 liegen und darf kein bereits genutzter Port sein!
:::
Mit `cat /etc/services` kannst du dir einige Standardports anzeigen lassen, damit du keinen bereits belegten Port auswählst.

### SSH-Port

Um den SSH-Port zu ändern, musst du die Konfigurationsdatei anpassen. Diese befindet sich normalerweise unter `/etc/ssh/sshd_config`, falls nicht, kannst du sie mit folgendem Befehl suchen:
```
find / -name "sshd_config" 2>/dev/null
```

Öffne die Datei jetzt mit nano (als root oder mit *sudo*).
```
sudo nano /etc/ssh/sshd_config
```

Füge deinen gewünschten Port hinter `Port` ein. Wenn `Port` auskommentiert ist (also `#Port 22`), entferne das "#" und ersetze die 22 durch deinen gewünschten Port. Speichere die Datei (in Nano mit Ctrl + o) und schließe sie (Nano: Ctrl + x).

![Port sshd](https://screensaver01.zap-hosting.com/index.php/s/F4Z4SDjLW4y2iDp/preview)

Der SSH-Service muss nun neu gestartet werden, damit die Änderungen wirksam werden.
```
# Unter Ubuntu/Debian/CentOS z.B.
sudo systemctl restart sshd
```

### FTP-Port

Wenn du einen FTP-Service wie **proFTPd** installiert hast, kannst du den Port ebenfalls einfach durch Bearbeiten der Konfigurationsdatei ändern. Die Vorgehensweise ist ähnlich wie beim SSH-Service.

Finde die Konfigurationsdatei `proftpd.conf`
```
find / -name "proftpd.conf" 2>/dev/null
```

Die Datei befindet sich normalerweise unter `/etc/proftpd.conf` (CentOS) oder `/etc/proftpd/proftpd.conf` (Ubuntu, Debian).
Öffne die Datei mit nano, entferne das "#" vor `port` und trage deinen gewünschten Port dahinter ein. Beachte die Hinweise oben, damit du keinen ungültigen Port einträgst.

:::tip
Nutze Ctrl + W, um in nano zu suchen.
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://screensaver01.zap-hosting.com/index.php/s/qw3a88EwfDCMKXS/preview)

## Einsatz einer Firewall

Das Prinzip der externen Erreichbarkeit eines Servers ist immer gleich: Ein Port muss geöffnet sein, damit der Server von außen erreichbar ist. Beim SSH ist das **standardmäßig** der Port 22/TCP. (siehe oben, wie du den Standardport ändern kannst)

Das Problem dabei ist, dass dieser Port nun für jeden zugänglich ist, egal wer, von wo und mit welcher Absicht. Das stellt eine große Sicherheitslücke dar, da Angreifer den Server mit Login-Versuchen fluten könnten, um entweder das richtige Passwort zu erraten (durch Brute-Force, falls Passwort-Login noch aktiviert ist) oder das Servernetzwerk durch Überlastung (z.B. DDoS) lahmzulegen.

Um diese Effekte zu reduzieren, kannst du Firewall-Regeln anwenden, die den Zugriff auf die offenen Ports einschränken.

Es gibt zwei Methoden, die du dafür nutzen kannst:
- **IPTables**: Die klassische Linux-Firewall mit vielen Optionen, aber etwas komplexer in der Bedienung.
- **UFW**: Eine einfachere Oberfläche für IPTables, die komplizierte Befehle vermeidet, aber etwas eingeschränkter ist.

Letztendlich liegt die Wahl bei dir, welche Methode du nutzen möchtest. Je nach Anwendungsfall brauchst du vielleicht die Flexibilität von IPTables, manchmal reicht aber auch UFW. (z.B. wenn du einfach nur Ports öffnen/schließen willst – besser als nichts!)

### IPTables

In diesem Abschnitt nutzt du IPTables, um Regeln zu erstellen, die die Anzahl der Verbindungsversuche begrenzen. Die Erklärungen zu den einzelnen Befehlen findest du unter dem Codeblock.

Beachte, dass diese Regel nur für **Port 22** aktiviert ist (Wert nach `--dport`). Für andere Services müssten die Befehle angepasst werden.

:::note
Die folgenden Befehle funktionieren nicht bei jeder Linux-Distribution, aber bei den meisten der beliebtesten Distros.
:::

Melde dich zuerst auf deinem Linux Server an. Falls du Hilfe brauchst, folge unserer Anleitung [Erstzugang (SSH)](vserver-linux-ssh.md). Führe dann die folgenden Befehle in der angegebenen Reihenfolge aus.

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1.  Die erste Regel verwirft Pakete, wenn es mehr als 2 Verbindungen im `TIME_WAIT`-Status zu Port 22 von einer einzelnen IP gibt.
2.  Die zweite Regel fügt die IP-Adresse einer neuen Verbindung zur `recent`-Liste hinzu.
3.  Die dritte Regel verwirft neue Verbindungen von IP-Adressen, die in der letzten Sekunde mehr als 2 Verbindungsversuche unternommen haben.

### UFW

Wie oben beschrieben, ist UFW eine „einfachere“ Oberfläche für IPTables. Der erste Schritt ist, UFW zu installieren, da es nicht in allen Linux-Distributionen standardmäßig enthalten ist. Du solltest die Befehle als root oder mit *sudo* ausführen.

Melde dich zuerst auf deinem Linux Server an. Falls du Hilfe brauchst, folge unserer Anleitung [Erstzugang (SSH)](vserver-linux-ssh.md). Die folgenden Anweisungen wurden mit Debian und Ubuntu getestet, sollten aber auch auf anderen Linux-Distributionen funktionieren.

Zuerst sollten apt-Verzeichnis und vorhandene Services aktualisiert werden.
```
sudo apt update && sudo apt upgrade -y
```

Dann installiere UFW via apt.
```
sudo apt install ufw -y
```

Stelle sicher, dass die Installation erfolgreich war, indem du folgenden Befehl ausführst.
```
sudo ufw status
> Firewall not loaded
```

Damit du dich nicht aus deinem Server aussperrst, muss der SSH-Service zuerst freigegeben werden, bevor die Firewall aktiviert wird.

:::caution
Wenn du den SSH-Port bereits geändert hast, gib hier bitte den neuen Port statt 22 ein.
:::

Nutze folgende Befehle, um den SSH-Service freizugeben.
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

Eine erfolgreiche Ausgabe sollte so aussehen:
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```

Führe nun folgenden Befehl aus, der die Verbindungen auf 6 pro Minute limitiert.
```
ufw limit 22/tcp
```

:::note
UFW erlaubt nur eine Limitierung auf 6 Verbindungen pro Minute. Der UFW-Limiter ist recht simpel und nicht für alle Situationen geeignet. Für eine detailliertere und flexiblere Konfiguration empfehlen wir IPTables direkt zu nutzen.
:::

:::tip
Die Firewall (egal ob IPTables oder UFW) zählt die Verbindungsversuche nur „blind“ und blockiert entsprechend. Mit Fail2Ban kannst du Logdateien auf Auffälligkeiten prüfen. Im nächsten Abschnitt erfährst du, wie du Fail2Ban installierst und aktivierst.
:::

## Zusätzliche Schutzmaßnahmen mit Fail2Ban

Fail2Ban ist ein Service, der IP-Adressen blockiert, die sich mit wahrscheinlich böswilligen Absichten am Server anmelden wollen. Fail2Ban überwacht Logdateien auf Auffälligkeiten und sichert dein System so relativ einfach und effektiv ab.

Nach der Installation bringt Fail2Ban bereits vorkonfigurierte Einstellungen für einige häufig genutzte Services mit, darunter:
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
Weitere Services können einfach per regulärem Ausdruck (RegEx) und Angabe der gewünschten Logdatei hinzugefügt werden.

Als Beispiel schauen wir uns einen Eintrag in `/var/log/auth.log` an. Diese Datei enthält alle SSH-Login-Versuche, egal ob erfolgreich oder fehlgeschlagen.
![/var/log/auth.log](https://screensaver01.zap-hosting.com/index.php/s/XzpxrWZRkpFJseo/preview)

Hier siehst du den Eintrag:
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Ban nutzt diese Logdatei und überwacht sie auf fehlgeschlagene Authentifizierungen. Da die Logdatei direkt die IP-Adresse des Angreifers enthält, kann Fail2Ban diese IP-Adresse nach einigen Fehlversuchen blockieren.

### Installation von Fail2Ban

Melde dich zuerst auf deinem Linux Server an. Falls du Hilfe brauchst, folge unserer Anleitung [Erstzugang (SSH)](vserver-linux-ssh.md). Du solltest die Befehle als root oder mit *sudo* ausführen.

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

Nach der Installation kannst du den Status direkt mit `systemctl` prüfen: (Mit Ctrl+C verlässt du systemctl)
```
systemctl status fail2ban.service
* fail2ban.service - Fail2Ban Service
     Loaded: loaded (/lib/systemd/system/fail2ban.service; enabled; vendor pres>
     Active: active (running) since Sat 2023-12-02 13:10:33 UTC; 24s ago
       Docs: man:fail2ban(1)
    Process: 23988 ExecStartPre=/bin/mkdir -p /run/fail2ban (code=exited, statu>
   Main PID: 23989 (fail2ban-server)
        CPU: 409ms
     CGroup: /system.slice/fail2ban.service
             `-23989 /usr/bin/python3 /usr/bin/fail2ban-server -xf start

Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Starting Fail2Ban Service...
Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Started Fail2Ban Service.
Dec 02 13:10:34 vps-zap515723-1 fail2ban-server[23989]: Server ready
```

### Konfiguration von Fail2Ban

Fail2Ban ist jetzt installiert, aber noch nicht aktiv oder konfiguriert. Schau dir `/etc/fail2ban` an, dort sollten aktuell folgende Dateien liegen:
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
Um ein aktives „Jail“ zu erstellen, muss eine Datei namens `jail.local` angelegt werden. Kopiere einfach den Inhalt von `jail.conf` in die neue Datei und öffne sie:
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

Alle Einstellungen kannst du jetzt in der `jail.local` Datei vornehmen, inklusive der zu überwachenden Services.
Du solltest dich nur auf den Teil nach `[Default]` konzentrieren. Der Default-Abschnitt dient für allgemeine Grundeinstellungen.

Scroll ein Stück runter, bis du diesen Abschnitt findest, und passe ihn z.B. so an:

| Attribut     | Erklärung                                                                 | Wert        |
|--------------|---------------------------------------------------------------------------|-------------|
| ignoreip     | IP-Adressen, die nicht blockiert werden sollen                            | 127.0.0.1/8 |
| ignorecommand| Nicht relevant.                                                           |             |
| bantime      | Wie lange eine IP-Adresse gesperrt bleibt                                | 1h          |
| findtime     | Zeitraum, in dem fehlgeschlagene Logins gezählt werden                   | 10m         |
| maxretry     | Anzahl der Fehlversuche, die zu einer Sperre führen                      | 5           |

```
# kann mit Leerzeichen (und/oder Komma) getrennt definiert werden.
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" ist die Anzahl der Sekunden, die ein Host gesperrt ist.
bantime  = 1h

# Ein Host wird gesperrt, wenn er "maxretry" Fehler innerhalb von "findtime"
# Sekunden erzeugt hat.
findtime  = 10m

# "maxretry" ist die Anzahl der Fehler, bevor ein Host gesperrt wird.
maxretry = 5
```

Du hast jetzt die Grundeinstellungen abgeschlossen. Um z.B. den SSH-Service zu überwachen, scrollst du weiter runter zum Tag `[sshd]`. Wenn du deinen Port geändert hast, solltest du ihn unter `port` eintragen.

Der `[sshd]`-Abschnitt sieht dann so aus:
```
[sshd]

enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 4
```
:::tip
Wie du siehst, sind auch individuelle Einstellungen für einzelne Services möglich (hier z.B. `maxretry`, das niedriger als die Standard-Einstellung ist). Obwohl du vorher allgemeine Einstellungen gemacht hast, kannst du die meisten Einstellungen für jeden Service nochmal separat konfigurieren. Wenn du das nicht machst, wird die allgemeine Einstellung genutzt.
:::

Jetzt musst du Fail2Ban nur noch neu starten, damit die Überwachung startet.
```
sudo systemctl restart fail2ban.service
```

### Funktionalität von Fail2Ban überprüfen

Wenn du Zugriff auf ein VPN oder einen zweiten Server hast, kannst du versuchen, dich selbst von Fail2Ban blockieren zu lassen, um zu testen, ob der Service funktioniert. Mit einem VPN oder Hotspot über dein Handy solltest du eine andere IP-Adresse bekommen, mit der du Fail2Ban testen kannst.

:::danger
Teste das nicht in deinem normalen Netzwerk, da deine eigene IP-Adresse blockiert werden könnte und du dich **aussperrst**.
:::

Versuche, eine SSH-Verbindung zu deinem Server (mit anderer IP-Adresse!) herzustellen und gib jedes Mal das falsche Passwort ein. Das Ergebnis sollte ungefähr so aussehen:
```
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
root@185.223.29.xxx: Permission denied (publickey,password).
root@vps-zap515723-2:/var/log# ssh root@185.223.29.179
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
^C
root@vps-zap515723-2:/var/log# ssh root@185.223.29.xxx
ssh: connect to host 185.223.29.xxx port 22: Connection refused
```

Wie du siehst, wird die Verbindung von deinem Fail2Ban-geschützten Server jetzt abgelehnt (`Connection refused` statt `Permission denied`).

Zeige nun den Status von Fail2Ban an. Hier siehst du, dass eine IP-Adresse blockiert wurde.
```
fail2ban-client status sshd
Status for the jail: sshd
|- Filter
|  |- Currently failed: 4
|  |- Total failed:     8
|  `- File list:        /var/log/auth.log
`- Actions
   |- Currently banned: 1
   |- Total banned:     1
   `- Banned IP list:   xxx
```

Wenn du die IP wieder freigeben möchtest, kannst du das mit folgendem Befehl tun: `fail2ban-client set sshd unbanip {deine IP}`.

:::info
Wenn du ungewöhnlich viele IP-Sperren hast, empfiehlt es sich, die Sperrzeit mit jedem Fehlversuch zu verlängern, um die Anzahl der möglichen Login-Versuche zu reduzieren.
:::

```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
# Bantime sollte mit jeder Sperre dieser IP steigen
bantime.increment = true
# Skalierungsfaktor von 24 Stunden (1h,24h,48h,3d,4d....)
bantime.factor = 24
# Maximale Sperrzeit = 5 Wochen
bantime.maxtime = 5w
```

## Webserver mit Cloudflare absichern

Viele nutzen Cloudflare als DNS-Manager für ihre Domain. Cloudflare hat nicht nur eines der größten Netzwerke weltweit, was zu schnelleren Ladezeiten, geringerer Latenz und besserer Nutzererfahrung führt, sondern schützt deine Webseiten auch vor DoS/DDoS-Angriffen, inklusive Flooding und neuen Angriffstypen, die täglich entdeckt werden.
In dieser Anleitung lernst du, wie du deinen Webserver vor Angriffen schützt.

Wir gehen davon aus, dass deine Domain bereits von Cloudflare verwaltet wird. Falls nicht, kannst du [deren Anleitung](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) folgen, um deine Domain zu übertragen. Gehe im Cloudflare-Dashboard zum Tab DNS Records und stelle sicher, dass dein Eintrag zu deinem Webserver die orange Wolke hat und „Proxied“ anzeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/wptKPBTLwmKxx8F/preview)

Dann läuft der gesamte Traffic, der über deine Domain geht, über Cloudflare und von dort zu deinem Server – legitimer Traffic.
Dein Server ist aber weiterhin von außerhalb Cloudflares erreichbar. Dafür musst du den Zugriff auf die Ports 80 und 443 des TCP-Protokolls deines Linux Servers einschränken und nur Zugriff erlauben, wenn der Traffic von legitimen Cloudflare-IPs kommt.

Dafür kannst du manuell Firewall-Regeln mit der [öffentlichen IPv4-Liste von Cloudflare](https://cloudflare.com/ips-v4) und der [öffentlichen IPv6-Liste von Cloudflare](https://cloudflare.com/ips-v6) anlegen.

Alternativ sparst du Zeit und nutzt Tools wie [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw), um diese Firewall-Regeln schnell massenhaft zu importieren.
Achte darauf, dass du keine separaten Regeln hast, die uneingeschränkten Zugriff auf deinen Webserver erlauben, außer den gerade hinzugefügten, sonst funktionieren die Regeln nicht.

## Fazit – dein Server ist jetzt viel sicherer als vorher!

Diese Anleitung hat dir einige grundlegende und fortgeschrittene Funktionen gezeigt, um deinen Linux Server abzusichern. Wenn du alle Empfehlungen umgesetzt hast, die für dein System relevant sind, ist dein Server schon deutlich sicherer als zuvor – Glückwunsch!

Weitere Maßnahmen kannst du natürlich noch ergreifen:
- [2FA (SSH)](vserver-linux-ssh2fa.md)
- Weitere Konfigurationen für Fail2Ban hinzufügen
- Mail-Benachrichtigungen in Fail2Ban einrichten
- Und vieles mehr...

<InlineVoucher />