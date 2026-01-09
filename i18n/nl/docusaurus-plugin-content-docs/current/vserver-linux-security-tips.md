---
id: vserver-linux-security-tips
title: "VPS: Linux Security Tips"
description: "Ontdek hoe je de beveiliging van je Linux-server verbetert met essentiële tips om ongeautoriseerde toegang te voorkomen en je services te beschermen → Leer nu meer"
sidebar_label: Security Tips
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Deze gids bevat tips en adviezen om je Linux-server veiliger te maken. Vooral omdat (virtuele) servers van buitenaf bereikbaar moeten zijn, is een basisbescherming tegen ongewenste toegang zeker aan te raden en mag je niet negeren.

:::info
Let op: deze instructies zijn niet volledig en uitgebreidere info vind je in andere delen van de ZAP-documentatie. (bijv. [2FA (SSH)](vserver-linux-ssh2fa.md))
:::

:::tip
De makkelijkste manier om je server te beschermen is altijd hetzelfde, ongeacht de server: gebruik sterke wachtwoorden, update je services regelmatig en let goed op welke services je installeert en welke handleidingen je volgt.
:::

<InlineVoucher />

## SSH beveiligen

SSH (Secure Shell) is een service waarmee je op afstand toegang krijgt tot de console van je server om commando’s uit te voeren. Hier zie je hoe je SSH op je server instelt: [Eerste toegang (SSH)](vserver-linux-ssh.md)

Standaard wordt voor SSH een login met wachtwoord gebruikt. Dit heeft echter als groot nadeel dat authenticatie relatief makkelijk te omzeilen is met een brute force-aanval, vooral als je een te simpel wachtwoord gebruikt. Gebruik dus altijd een **sterk** wachtwoord als je voor deze methode kiest.

Wil je je server nog beter beschermen tegen ongewenste SSH-toegang? Schakel dan authenticatie via SSH-sleutels in en zet de wachtwoordlogin uit. Check de [SSH Key](vserver-linux-sshkey.md) gids, die uitlegt hoe je SSH-sleutels genereert en toevoegt.

## Poortconfiguratie van je services

| Service| Poort |
|--------|-------|
| SSH    | 22    |
| FTP    | 21    |
| Mail   | 25    |
| DNS    | 53    |
| HTTP   | 80    |
| HTTPS  | 443   |

Services zoals SSH of FTP gebruiken standaard altijd dezelfde poorten (zoals hierboven in de tabel). Wil een kwaadwillende brute force uitvoeren op je SSH-service, dan moet die eerst weten welke poort SSH gebruikt. Als je deze poorten niet aanpast, zijn poorten 22 en 21 vaak het doelwit om direct commando’s uit te voeren of bestanden via FTP te benaderen.

Om dit te voorkomen raden we aan om de poorten van standaardservices aan te passen naar zelfgekozen poorten. In het volgende deel van deze gids lees je hoe:

:::danger
Je gewenste poort moet tussen 1024 en 65536 liggen en mag niet al in gebruik zijn!
:::
Met `cat /etc/services` kun je een lijst met standaardpoorten bekijken, zodat je geen poort kiest die al bezet is.

### SSH-poort

Om de SSH-poort te wijzigen, moet je het configuratiebestand aanpassen. Dit staat normaal in `/etc/ssh/sshd_config`, maar als je het daar niet vindt, kun je dit commando gebruiken om het te zoeken:
```
find / -name "sshd_config" 2>/dev/null
```

Open het bestand vervolgens met nano (als root of met *sudo*).
```
sudo nano /etc/ssh/sshd_config
```

Voeg je gewenste poort toe achter `Port`. Staat `Port` uitcommentarieerd (bijv. `#Port 22`), verwijder dan het "#" en vervang 22 door je nieuwe poort. Sla het bestand op (in Nano met Ctrl + o) en sluit af (Ctrl + x).

![Port sshd](https://screensaver01.zap-hosting.com/index.php/s/F4Z4SDjLW4y2iDp/preview)

Herstart daarna de SSH-service zodat de wijziging actief wordt.
```
# Onder Ubuntu/Debian/CentOS bijvoorbeeld
sudo systemctl restart sshd
```

### FTP-poort

Heb je een FTP-service zoals **proFTPd** geïnstalleerd? Dan kun je de poort ook aanpassen door het configbestand te bewerken, vergelijkbaar met SSH.

Zoek het configuratiebestand `proftpd.conf`
```
find / -name "proftpd.conf" 2>/dev/null
```

Dit bestand staat meestal in `/etc/proftpd.conf` (CentOS) of `/etc/proftpd/proftpd.conf` (Ubuntu, Debian).
Open het met nano, haal het "#" weg voor `port` en vul je gewenste poort in. Let op de eerder genoemde regels zodat je geen ongeldige poort kiest.

:::tip
Gebruik Ctrl + W om in nano te zoeken.
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://screensaver01.zap-hosting.com/index.php/s/qw3a88EwfDCMKXS/preview)

## Gebruik van een firewall

Het principe van externe bereikbaarheid van een server is altijd hetzelfde: een poort moet openstaan zodat de server van buitenaf bereikbaar is. Voor SSH is dat **standaard** poort 22/TCP. (zie hierboven hoe je die poort kunt aanpassen)

Het probleem is dat deze poort dan voor iedereen toegankelijk is, ongeacht wie, waar en met welke intentie. Dit is een groot beveiligingsrisico, want kwaadwillenden kunnen de server overspoelen met inlogpogingen om het juiste wachtwoord te raden (via brute force als wachtwoordlogin nog aanstaat) of proberen het netwerk te overbelasten met flooding (bijv. DDoS).

Om dit te beperken kun je firewallregels instellen die de toegang tot open poorten beperken.

Je hebt hiervoor twee opties:
- **IPTables**: de originele Linux-firewall met veel opties, maar wat lastiger in gebruik.
- **UFW**: een simpelere interface voor IPTables, makkelijker te gebruiken maar iets beperkter.

Welke je kiest is aan jou. Soms heb je de flexibiliteit van IPTables nodig, maar vaak is UFW al voldoende (bijv. om simpel poorten te openen/sluiten, wat beter is dan niets doen!).

### IPTables

Hier maak je met IPTables regels die het aantal connectiepogingen beperken. De uitleg van de commando’s staat onder de code.

Let op: deze regels gelden alleen voor **poort 22** (waarde na `--dport`). Voor andere services moet je de regels aanpassen.

:::note
Deze commando’s werken niet op elke Linux-distributie, maar wel op de meeste populaire.
:::

Log eerst in op je Linux-server. Hulp nodig? Volg onze [Eerste toegang (SSH)](vserver-linux-ssh.md) gids. Voer daarna de volgende commando’s in volgorde uit.

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1.  De eerste regel blokkeert pakketten als er meer dan 2 connecties in `TIME_WAIT` naar poort 22 zijn van één IP.
2.  De tweede regel voegt het IP van een nieuwe connectie toe aan de `recent` lijst.
3.  De derde regel blokkeert nieuwe connecties van IP’s die meer dan 2 connecties binnen 1 seconde probeerden.

### UFW

Zoals gezegd is UFW een “simpelere” interface voor IPTables. Eerst moet je UFW installeren, want het zit niet standaard in alle Linux-distributies. Voer de commando’s uit als root of met *sudo*.

Log in op je Linux-server. Hulp nodig? Volg onze [Eerste toegang (SSH)](vserver-linux-ssh.md) gids. De volgende instructies zijn getest op Debian en Ubuntu, maar werken ook op andere Linux-distributies.

Update eerst de apt-bronnen en upgrade bestaande pakketten.
```
sudo apt update && sudo apt upgrade -y
```

Installeer daarna UFW via apt.
```
sudo apt install ufw -y
```

Controleer of de installatie gelukt is met:
```
sudo ufw status
> Firewall not loaded
```

Om te voorkomen dat je jezelf buitensluit, moet je eerst de ssh-service toestaan voordat je de firewall activeert.

:::caution
Heb je de SSH-poort al aangepast? Vul dan hier je nieuwe poort in in plaats van 22.
:::

Gebruik deze commando’s om ssh toe te staan:
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

Een succesvolle output ziet er zo uit:
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```

Voer nu dit commando uit om het aantal connecties te limiteren tot 6 per minuut.
```
ufw limit 22/tcp
```

:::note
UFW beperkt het aantal connecties tot 6 per minuut. De limiter is vrij simpel en niet altijd geschikt. Voor meer gedetailleerde configuraties raden we IPTables aan.
:::

:::tip
De firewall (IPTables of UFW) telt alleen connectiepogingen en blokkeert die. Met Fail2Ban kun je logbestanden scannen op verdachte activiteiten. In het volgende deel lees je hoe je Fail2Ban installeert en activeert.
:::

## Extra bescherming met Fail2Ban

Fail2Ban blokkeert IP-adressen die waarschijnlijk kwaadwillend proberen in te loggen. Het monitort logbestanden op verdachte patronen en beveiligt zo je systeem effectief en simpel.

Na installatie heeft Fail2Ban standaard configuraties voor veelgebruikte services zoals:
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
Extra services kun je toevoegen met reguliere expressies (RegEx) en het juiste logbestand.

Als voorbeeld een regel uit `/var/log/auth.log`. Dit bestand bevat alle SSH-loginpogingen, geslaagd of mislukt.
![/var/log/auth.log](https://screensaver01.zap-hosting.com/index.php/s/XzpxrWZRkpFJseo/preview)

Hier zie je de regel:
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Ban gebruikt dit logbestand om mislukte authenticaties te detecteren. Omdat het IP-adres van de aanvaller in het log staat, kan Fail2Ban dit IP na een paar mislukte pogingen blokkeren.

### Fail2Ban installeren

Log in op je Linux-server. Hulp nodig? Volg onze [Eerste toegang (SSH)](vserver-linux-ssh.md) gids. Voer commando’s uit als root of met *sudo*.

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

Na installatie check je de status met `systemctl`: (Ctrl+C om te stoppen)
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

### Fail2Ban configureren

Fail2Ban is geïnstalleerd, maar nog niet actief of geconfigureerd. Kijk in `/etc/fail2ban` en je ziet deze bestanden:
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
Om een actieve “jail” te maken, kopieer je `jail.conf` naar `jail.local` en open je dat:
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

Alle instellingen pas je nu aan in `jail.local`, inclusief welke services gemonitord worden.
Focus op het deel na `[Default]`. Dit is voor algemene standaardinstellingen.

Scroll iets naar beneden tot je dit ziet en pas het aan zoals hieronder:

| Attribuut    | Uitleg                                                                    | Waarde      |
|--------------|---------------------------------------------------------------------------|-------------|
| ignoreip     | IP-adressen die niet geblokkeerd mogen worden                             | 127.0.0.1/8 |
| ignorecommand| Niet relevant                                                             |             |
| bantime      | Hoelang een IP geblokkeerd blijft                                        | 1h          |
| findtime     | Tijdvenster waarin mislukte pogingen worden geteld                       | 10m         |
| maxretry     | Aantal mislukte pogingen waarna een ban volgt                            | 5           |

```
# kan met spatie (en/of komma) gescheiden worden.
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" is het aantal seconden dat een host geblokkeerd wordt.
bantime  = 1h

# Een host wordt geblokkeerd als het "maxretry" keer faalt binnen "findtime"
# seconden.
findtime  = 10m

# "maxretry" is het aantal mislukte pogingen voordat een host geblokkeerd wordt.
maxretry = 5
```

Je hebt nu de standaardinstellingen klaar. Om bijvoorbeeld SSH te monitoren, scroll je iets verder naar `[sshd]`. Heb je je poort aangepast? Zet die dan bij `port`.

De `[sshd]` sectie ziet er zo uit:
```
[sshd]

enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 4
```
:::tip
Je kunt per service individuele instellingen maken (zoals hier `maxretry` dat lager is dan de standaard). Als je dat niet doet, gebruikt Fail2Ban de algemene instellingen.
:::

Herstart Fail2Ban om de monitoring te starten.
```
sudo systemctl restart fail2ban.service
```

### Controleren of Fail2Ban werkt

Heb je toegang tot een VPN of een tweede server? Probeer dan jezelf te blokkeren om te testen of Fail2Ban werkt. Met een VPN of mobiele hotspot krijg je een ander IP, zodat je dit veilig kunt testen.

:::danger
Test dit niet op je normale netwerk, want dan blokkeer je je eigen IP en **word je buitengesloten**.
:::

Probeer met een ander IP via SSH in te loggen en voer telkens een verkeerd wachtwoord in. Het resultaat zou zo moeten zijn:
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

Je ziet dat de verbinding nu geweigerd wordt (`Connection refused` in plaats van `Permission denied`).

Check nu de status van Fail2Ban. Je ziet dat een IP geblokkeerd is.
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

Wil je een IP weer deblokkeren? Gebruik dan: `fail2ban-client set sshd unbanip {jouw IP}`.

:::info
Heb je veel IP-bans? Verleng dan de bantijd met elke mislukte poging om het aantal inlogpogingen te beperken.
:::

```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
# Bantijd wordt langer bij elke ban van dit IP
bantime.increment = true
# Schaalfactor van 24 uur (1u, 24u, 48u, 3d, 4d...)
bantime.factor = 24
# Maximaal 5 weken ban
bantime.maxtime = 5w
```

## Webservers beveiligen met Cloudflare

Veel mensen gebruiken Cloudflare als DNS-manager voor hun domein. Cloudflare heeft niet alleen een van de grootste netwerken ter wereld, wat zorgt voor snellere laadtijden, lagere latency en een betere ervaring, maar beschermt je websites ook tegen DoS/DDoS-aanvallen, flooding en nieuwe aanvalstypes die dagelijks opduiken.

In deze gids leer je hoe je je webserver tegen aanvallen beschermt.

We gaan ervan uit dat je domein al via Cloudflare wordt beheerd. Zo niet, volg dan [deze handleiding](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) om je domein over te zetten. Ga in het Cloudflare-dashboard naar het tabblad DNS Records en zorg dat je record naar je webserver een oranje wolkje heeft en “Proxied” zegt.

![](https://screensaver01.zap-hosting.com/index.php/s/wptKPBTLwmKxx8F/preview)

Al het verkeer via je domein gaat nu door Cloudflare naar je server, en is legitiem verkeer.
Je server is echter nog steeds rechtstreeks bereikbaar buiten Cloudflare om. Daarom moet je de toegang tot poorten 80 en 443 (TCP) op je Linux-server beperken en alleen verkeer toestaan dat van Cloudflare komt.

Dat doe je door handmatig firewallregels toe te voegen met de [Cloudflare publieke IPv4-lijst](https://cloudflare.com/ips-v4) en [Cloudflare publieke IPv6-lijst](https://cloudflare.com/ips-v6).

Wil je tijd besparen? Gebruik tools zoals [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) om deze firewallregels snel te importeren.
Let erop dat je geen andere regels hebt die onbeperkte toegang tot je webserver toestaan, anders werken deze regels niet.

## Conclusie - je server is nu veel veiliger!

Deze gids heeft je basis- en geavanceerde tips gegeven om je Linux-server te beveiligen. Als je alle relevante aanbevelingen hebt doorgevoerd, is je server al een stuk veiliger dan voorheen – gefeliciteerd!

Natuurlijk kun je nog meer doen:
- [2FA (SSH)](vserver-linux-ssh2fa.md)
- Extra configuraties toevoegen aan Fail2Ban
- Mailnotificaties instellen in Fail2Ban
- En nog veel meer...

<InlineVoucher />