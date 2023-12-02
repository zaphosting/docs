---
id: vserver-linux-security-tips
title: Tipps zur Linux-Sicherheit
description: Tipps und Hinweise für die Sicherung deines Linux-Servers - ZAP-Hosting.com Dokumentation
sidebar_label: Sicherheitstipps

---

## Einführung

Diese Anleitung beeinhaltet einige Tipps und Hinweise wie du deinen Linux Server sicherer gestalten kannst. Insbesondere da auf (virtuelle) Server extern zugegriffen werden muss ist ein grundlegender Schutz vor ungewünschten Zugriffen definitiv empfehlenswert und sollte keinesfalls vernachlässigt werden. 

:::info
Bitte beachte dass diese Anleitung nicht abschließend ist und tiefergehende Informationen anderen Abschnitten der ZAP-Dokumentation entnommen werden kann. (z.B. [2FA](https://zap-hosting.com/guides/de/docs/vserver-linux-ssh2fa/))
:::

:::tip
Der einfachste Weg deinen Server zu schützen ist, egal bei welchem Server, immer gleich: Nutze sichere Passwörter, update deine Dienste regelmäßig und achte allgemein darauf welche Dienste du installieren möchtest und welche Guides du befolgst.
:::

## Absichern von SSH (Secure Shell)

SSH ist ein Dienst der es dir erlaubt aus der Ferne auf die Konsole deines Servers zuzugreifen und Befehle auf dem Server auszuführen. Hier siehst du, wie du SSH auf deinem Server einrichten kannst: [Wie richte ich SSH auf meinem Server ein?](https://zap-hosting.com/guides/de/docs/vserver-linux-ssh/)

Standardmäßig wird für SSH eine Passwortbasierte Anmeldung genutzt. Dies hat jedoch den großen Nachteil, dass die Authentifizierung relativ einfach per Brute-Force-Attacke umgangen werden kann, insbesondere dann, wenn du ein zu simples Passwort für deinen SSH Login nutzt. Solltest du dich also für die Passwortlösung entscheiden, dann nutze bitte ein **sicheres** Passwort.

Um deinen Server noch besser vor ungewünschten SSH Zugriffen zu schützen, solltest du die Authentifizierung ausschließlich über SSH- Schlüssel ermöglichen, und den Passwort-Login deaktivieren. Schau dir dazu [unsere SSH-Anleitung](https://zap-hosting.com/guides/docs/vserver-linux-sshkey) an, in der erklärt wird, wie man SSH-Schlüssel generiert und hinzufügt werden. 

## Einfach aber effektiv: Port deiner Dienste ändern

| Dienst | Port |
|--------|------|
| SSH    | 22   |
| FTP    | 21   |
| Mail   | 25   |
| DNS    | 53   |
| HTTP   | 80   |
| HTTPS  | 443  |

Dienste wie SSH oder FTP nutzen standardmäßig immer die selben Ports. Möchte ein außenstehender Angreifer eine Brute-Force-Attacke auf den SSH Dienst deines Servers ausführen, dann muss dieser erstmal wissen, über welchen Port SSH zu erreichen ist. Wenn du diese Ports nicht anders konfigurierst, dann sind die Ports 22 und 21 meist ein Treffer, um direkt Befehle auf dem Server auszuführen oder Dateien per FTP abzugreifen.

Um dies zu verhindern empfehlen wir die Ports der Standarddienste benutzerdefiniert einzurichten. Wie dies funktioniert, erfährst du jetzt:

:::danger
Dein Wunschport muss sich zwischen 1024 und 65536 befinden und sollte kein bereits genutzer Port sein!
:::
Mittels `cat /etc/services` kannst du dir einige Standardports ausgeben lassen um zu verhindern, dass du einen bereits genutzten Port auswählst.

### SSH Port einstellen

Um den Port beim SSH-Dienst zu ändern, musst du die Konfigurationsdatei anpassen. Diese befindet sich standardmäßig in `/etc/ssh/sshd_config`, kann aber mit
```
find / -name "sshd_config" 2>/dev/null
```
gesucht werden.

Öffne nun die Datei per nano (als Root oder mit **sudo**)
```
sudo nano /etc/ssh/sshd_config
```
und füge hinter `Port` deinen Wunschport ein. Sollte `Port` auskommentiert sein (also `#Port 22`), dann entferne das "#" und ersetze die 22 mit deinem Wunschport. Nun musst du die Datei noch speichern (Unter Nano mit Strg + o) und schließen (Nano: Strg + x).

![Port sshd](https://i.imgur.com/fDak8p8.png)

Jetzt muss der SSH-Dienst noch neugestartet werden, damit die Änderungen wirksam werden.
```
#Unter Ubuntu/Debian/CentOS z.B.
sudo systemctl restart sshd
```

### FTP Port einstellen

Solltest du einen FTP Dienst wie **proFTPd** installiert haben, kannst du auch dort einfach den Port ändern. Das Vorgehen ist ähnlich wie bei dem SSH-Dienst.

Konfigurationsdatei `proftpd.conf` finden
```
find / -name "proftpd.conf" 2>/dev/null
```

Die Datei liegt normalerweise in `/etc/proftpd.conf` (CentOS) oder `/etc/proftpd/proftpd.conf`.
Öffene nun die Datei per nano und entferne das "#" vor `Port` und trage dahinter deinen Wunschport ein. Bitte beachte die Information weiter oben, sodass du keinen ungültigen Port angibst.

:::tip
Mittels Strg+W kannst du in nano suchen
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://i.imgur.com/dAdXEsv.png)



## Eine Firewall nutzen um dein System besser zu schützen

Der Grundsatz der externen Erreichbarkeit eines Servers ist immer gleich: Damit der Server extern erreichbar sein kann, muss ein Port geöffnet werden. Im Fall von SSH ist das **standardmäßig** Port 22/TCP. (siehe weiter oben, wie du den Standardport ändern kannst) 

Das Problem dabei ist, dass dieser Port nun für Jedermann erreichbar ist, unabhängig von Person, Standort und Intention. Dies stellt eine große Sicherheitslücke dar, da böswillige Akteure den Server mit Anmeldeversuchen überschwemmen könnten, um entweder das richtige Kennwort herauszufinden (durch eine Brute-Force-Attacke, falls du den Login per Passwort noch aktiviert hast) oder um zu versuchen, das Servernetzwerk durch Flooding (z.B. DDoS) zu überlasten, was häufig der Fall ist.

Um diese Auswirkungen zu verringern, kannst du Firewall-Regeln anwenden, die den Zugriff auf die geöffneten Ports beschränken.

Dafür gibt es zwei verschiedene Methoden die du nutzen kannst:
- **IPTables**: Dies ist sogesehen die ursprüngliche Firewall von Linux. Es bietet dir sehr viele Möglichkeiten, ist aber durchaus etwas komplizierter in der Anwendung.
- **UFW**: Dies ist letztendlich nur ein einfacheres Interface um IPTables zu nutzen, ohne die komplizierten Befehle anwenden zu müssen. Bietet dafür etwas weniger Möglichkeiten.

Im Endeffekt kannst du dir aussuchen, welche von beiden Methoden du nutzen möchtest. Je nach Anwendungsfall braucht man die Vielfältigkeit von IPTables, manchmal reicht auch einfach UFW. (z.B. dann, wenn du einfach nur Ports öffnen/schließen möchtest)

### IPTables

In diesem Abschnitt wirst du mit IPTables mehrere Regeln erstellen, die die Anzahl der möglichen Verbindungsversuche einschränken. Die Erklärungen zu den einzelnen Befehlen findest du unterhalb des Codeblocks.

Bitte beachte, dass diese Regel nur für **Port 22** (Der Wert nach `--dport`) aktiviert wird und die Befehle für andere Dienste angepasst werden müssten.  

:::note
Die folgenden Befehle funktionieren möglicherweise nicht mit jedem beliebigen Linux-Betriebssystem, aber sie funktionieren mit der überwiegenden Mehrheit der beliebtesten Betriebssysteme.
:::

Melde dich zunächst bei deinem Linux-Server an. Wenn du dabei Hilfe brauchst, folge bitte unserer Anleitung [SSH-Zugang](https://zap-hosting.com/guides/docs/vserver-linux-ssh), die erklärt, wie dies funktioniert. Führe dann die folgenden Befehle in der aufgelisteten Reihenfolge aus.

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1.  Die erste Regel verwirft Pakete, wenn sich mehr als 2 Verbindungen im Zustand `TIME_WAIT` zu Port 22 von einer einzigen IP befinden.
2.  Die zweite Regel fügt die IP-Adresse einer neuen Verbindung zur `recent`-Liste hinzu.
3.  Die dritte Regel verwirft neue Verbindungen von IP-Adressen, die in der letzten Sekunde versucht haben, mehr als zwei Verbindungen herzustellen.



### UFW

Wie oben beschrieben ist UFW ein "einfacheres" Interface für IPTables. Im ersten Schritt muss UFW installiert werden, da es nicht bei allen Linux Distributionen inkludiert ist. Die Befehle solltest du entweder als Root ausführen oder unter der verwendung von *sudo*.

Melde dich zunächst bei deinem Linux-Server an. Wenn du dabei Hilfe brauchst, folge bitte unserer Anleitung [SSH-Zugang](https://zap-hosting.com/guides/docs/vserver-linux-ssh), in der erklärt wird, wie dies funktioniert. 

Debian & Ubuntu:

Zuerst sollte das apt Verzeichnis aktualisiert werden
```
sudo apt update && sudo apt upgrade -y
```

Dann UFW per apt installieren
```
sudo apt install ufw -y
```

Nun checken wir noch, ob die Installation erfolgreich war:
```
sudo ufw status
> Firewall not loaded
```

Damit du dich nicht aussperrst, muss der ssh Dienst zuerst freigegeben werden, bis letztendlich die Firewall aktiviert werden kann. 

:::caution
Solltest du den Port für SSH bereits geändert haben, dann trag hier statt 22 bitte den neuen Port ein.
:::

```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```
Der Output dürfte in etwa so aussehen:
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```


Führe nun den folgenden Befehl aus, der die Verbindung auf 6 pro Minute begrenzt.
```
ufw limit 22/tcp
```

:::note
UFW erlaubt es dir lediglich, die Anzahl der Verbindungen auf 6 pro Minute zu begrenzen. Der Begrenzer von UFW ist recht einfach und eignet sich möglicherweise nicht für alle Situationen. Für eine detailliertere und flexiblere Konfiguration empfehlen wir die direkte Verwendung von IPTables.
:::

:::tip
Die Firewall (egal ob IPTables oder UFW) kann die Verbindungversuche nur "stumpf" zählen und entsprechend blocken. Mit Fail2Ban ist es möglich Log- Files auf Auffälligkeiten zu prüfen. Im nächsten Abschnitt wird beschrieben, wie du Fail2Ban für einige Dienste aktivieren kannst.
:::

## Fail2Ban zur erweiterten und dynamischen Absicherung deines Servers

Fail2Ban ist ein Dienst der IP-Adressen blockiert mit denen Verbindungen zum Server hergestellt werden sollen mit wahrscheinlich böswilligen Absichten. Fail2Ban überwacht dazu einige Log-Datein auf Anomalien, und sichert damit dein System über ein relativ einfachen Weg sehr effektiv ab.

Nach der Installation überwacht Fail2Ban bereits standardmäßig u.a.
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
Weitere Services können dabei einfach per Regulärem Ausdruck (RegEx) und unter Angabe der gewünschten Log- Datei hinzugefügt werden.

Als Beispiel schauen wir uns einen Eintrag in `/var/log/auth.log` an. Diese Datei beinhaltet alle SSH Loginversuche, egal ob erfolgreich oder fehlgeschlagen.
![/var/log/auth.log](https://i.imgur.com/k6xZkVa.png)

Hier siehst du nun u.A. den Eintrag:
```
Dec  2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Ban nutzt nun genau dieses Logfile und überwacht es auf fehlgeschlagene Authentifizierungen. Da das Logfile direkt die IP-Adresse des Angreifers beinhaltet, kann Fail2Ban nach einigen fehlgeschlagenen Versuchen diese IP-Adresse blockieren.

### Installation von Fail2Ban

Melde dich zunächst bei deinem Linux-Server an. Wenn du dabei Hilfe brauchst, folge bitte unserer Anleitung [SSH-Zugang](https://zap-hosting.com/guides/docs/vserver-linux-ssh), in der erklärt wird, wie dies funktioniert. Die Befehle solltest du entweder als Root ausführen oder unter der verwendung von *sudo*.

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

Nach der Installation von Fail2Ban kannst du per `systemctl` direkt den Status prüfen: (Mit Strg+C kannst du systemctl wieder verlassen)
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

Nun ist Fail2Ban zwar installiert, aber noch nicht aktiv und noch nicht konfiguriert. Mit einem Blick in `/etc/fail2ban` siehst du, dass dort aktuell die folgenenden Datein liegen sollten:
```
action.d       fail2ban.d  jail.conf  paths-arch.conf    paths-debian.conf
fail2ban.conf  filter.d    jail.d     paths-common.conf  paths-opensuse.conf
```
Um ein aktives "jail" (=Gefängnis) zu erstellen, muss eine Datei namens `jail.local` erstellt werden. Kopier dazu den Inhalt von `jail.conf` einfach in die neue Datei und öffne diese:
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```
In der `jail.local` Datei kannst du nun alle Einstellungen vornehmen, inkl. der zu überwachenden Dienste.
Beachte nun in der Datei ausschließlich den Part nach `[DEFAULT]`. Direkt in der Default Sektion kannst du allgemeine Einstellungen vornehmen.

Scroll in dieser Datei etwas weiter herunter, bis du diesen Part findest, und passe ihn bspw. so an:

| Attribut      | Erklärung                                                                    | Wert        |
|---------------|------------------------------------------------------------------------------|-------------|
| ignoreip      | IP-Adressen die nicht blockiert werden sollen                                | 127.0.0.1/8 |
| ignorecommand | Nicht relevant.                                                              |             |
| bantime       | Wie lange ein IP-Adresse blockiert wird                                      | 1h          |
| findtime      | Maximaler Abstand der fehlgeschlagenen Logins, die berücksicht werden sollen | 10m         |
| maxretry      | Anzahl der Fehlversuche die zu einem Ban führen                              | 5           |

```
# can be defined using space (and/or comma) separator.
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" is the number of seconds that a host is banned.
bantime  = 1h

# A host is banned if it has generated "maxretry" during the last "findtime"
# seconds.
findtime  = 10m

# "maxretry" is the number of failures before a host get banned.
maxretry = 5
```
Damit hast du nun die allgemeinen Einstellungen vorgenommen. Um z.B. den SSH-Dienst zu überwachen, scrolle etwas weiter herunter, bis zum `[sshd]`-Tag. Beachte, dass du unter `Port` deinen eventuell abgeänderten Port eintragen solltest.
```
[sshd]

enabled	= true
port    = 22
filter	= sshd
logpath	= /var/log/auth.log
maxretry = 4
```
:::tip
Wie du siehst ist es möglich auch in einem einzelnen Dienst individuelle Einstellungen vorzunehmen (wie hier mit `maxretry`). Obwohl wir die Einstellung zuvor allgemein vorgenommen haben, kannst du die meisten Einstellungen für jeden Dienst nochmal einstellen. Solltest du dies nicht tun, dann wird einfach die allgemeine Einstellung genutzt.
:::

Jetzt muss Fail2Ban nurnoch neugestartet werden, damit die Überwachung gestartet wird.
```
sudo systemctl restart fail2ban.service
```

### Überprüfen ob Fail2Ban funktioniert

Solltest du Zugriff auf einen VPN oder einen zweiten Server haben, dann kannst du versuchen dich selbst von Fail2Ban sperren zu lassen um zu schauen ob der Dienst wie gewünscht funktioniert. Mit einem VPN oder einem Hotspot über dein Mobiltelefon solltest du eine andere IP-Adresse bekommen, womit es möglich wäre Fail2Ban zu testen.

:::danger
Teste dies nicht in deinem normalen Netzwerk, da möglicherweise deine eigene IP-Adresse blockiert wird und du **dich somit aussperren wirst!**
:::

Versuche nun (mit einer anderen IP-Adresse!) eine SSH-Verbindung zu deinem Server herzustellen und gebe jedes mal ein falsches Passwort ein. Das Ergebnis dürfte in etwa so aussehen:
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
Wie du siehst wird nun die Verbindung von deinem durch Fail2Ban geschützten Server abgeleht.
Lass dir nun den Status von Fail2Ban ausgeben. Hier siehst du, dass eine IP-Adresse blockiert wurde.

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

Wenn du die IP wieder freigeben möchtest, kann du das per `fail2ban-client set sshd unbanip {deine IP}`.

:::info
Solltest du außergewöhnlich viele IP-Bans haben ist es empfehlenswert die Bantime mit jedem fehlgeschlagegenen Versuch zu verlänger, um die Anzahl der möglichen Anmeldeversuche zu verringern.
```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
#Bantime soll bei jedem Ban dieser IP steigen
bantime.increment = true
#Um Faktor 24 (1h,24h,48h,3d,4d....)
bantime.factor = 24
#Maximale Banzeit=5 Wochen
bantime.maxtime = 5w
```
:::

## Absicherung von Webservern mit Cloudflare

Viele Menschen nutzen Cloudflare als ihren Domain-DNS-Manager. Cloudflare verfügt nicht nur über eines der größten Netzwerke der Welt, das niedrigere Seitenladezeiten, geringere Latenzzeiten und ein besseres Gesamterlebnis bietet, sondern schützt auch deine Webseiten vor DoS/DDoS-Angriffen, einschließlich Flooding und neuen Arten von Angriffen, die jeden Tag ans Licht kommen.
In dieser Anleitung erfährst du, wie du deinen Webserver vor Angriffen schützen kannst.

Wir gehen von der Annahme aus, dass deine Domain bereits von Cloudflare verwaltet wird. Falls nicht, kannst du der [Anleitung](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) folgen, um deine Domain zu verschieben. Öffne die Registerkarte DNS-Einträge im Dashboard von Cloudflare und vergewissere dich, dass dein Eintrag zu deinem Webserver die orangefarbene Wolke hat und "Proxied" heißt.

![](https://i.imgur.com/wNEoWQP.png)

Danach wird der gesamte Datenverkehr, der über deine Domäne läuft, durch Cloudflare und von dort zu deinem Server geleitet, und zwar als legitimer Datenverkehr.
Dennoch ist dein Server immer noch von außerhalb von Cloudflare erreichbar. Dazu musst du den Zugriff auf die Ports 80 und 443 des TCP-Protokolls deines Linux-Servers beschränken und den Zugriff nur zulassen, wenn dieser von legitimem Cloudflare-Datenverkehr stammt.

Zu diesem Zweck kannst du den Zugang manuell mit Firewall-Regeln aus der [Cloudflare public IPv4 list](https://cloudflare.com/ips-v4) und [Cloudflare public IPv6 list](https://cloudflare.com/ips-v6) beschränken.

Alternativ kannst du auch etwas Zeit sparen und Tools wie [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) verwenden, um diese Firewall-Regeln schnell zu importieren.
Achte darauf, dass du keine separaten Regeln hast, die den uneingeschränkten Zugriff auf deinen Webserver erlauben, außer denen, die du gerade hinzugefügt hast, sonst werden diese nicht funktionieren.
