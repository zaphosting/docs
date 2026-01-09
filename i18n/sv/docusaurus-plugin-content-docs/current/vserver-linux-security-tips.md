---
id: vserver-linux-security-tips
title: "VPS: Linux Säkerhetstips"
description: "Upptäck hur du förbättrar säkerheten på din Linux-server med viktiga tips för att förhindra obehörig åtkomst och skydda dina tjänster → Lär dig mer nu"
sidebar_label: Säkerhetstips
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Den här guiden innehåller tips och råd om hur du gör din Linux-server säkrare. Speciellt eftersom (virtuella) servrar måste nås externt, är grundläggande skydd mot oönskad åtkomst verkligen rekommenderat och bör inte förbises.

:::info
Observera att dessa instruktioner inte är uttömmande och att mer detaljerad information finns i andra delar av ZAP-dokumentationen. (t.ex. [2FA (SSH)](vserver-linux-ssh2fa.md))
:::

:::tip
Det enklaste sättet att skydda din server är alltid detsamma, oavsett server: Använd säkra lösenord, uppdatera dina tjänster regelbundet och var generellt noga med vilka tjänster du installerar och vilka guider du följer.
:::

<InlineVoucher />

## Säkerställ SSH

SSH (Secure Shell) är en tjänst som låter dig fjärråtkomst till serverns konsol för att köra kommandon på servern. Här kan du se hur du ställer in SSH på din server: [Initial access (SSH)](vserver-linux-ssh.md)

Som standard används lösenordsbaserad inloggning för SSH. Detta har dock den stora nackdelen att autentisering relativt enkelt kan kringgås med en brute force-attack, särskilt om du använder ett för enkelt lösenord för din SSH-inloggning. Så om du väljer lösenordslösningen, använd ett **säkert** lösenord.

För att skydda din server ännu bättre mot oönskad SSH-åtkomst bör du aktivera autentisering enbart via SSH-nycklar och inaktivera lösenordsinloggning. Kolla in guiden [SSH Key](vserver-linux-sshkey.md) som förklarar hur du genererar och lägger till SSH-nycklar.

## Portkonfiguration för dina tjänster

| Tjänst | Port |
|--------|------|
| SSH    | 22   |
| FTP    | 21   |
| Mail   | 25   |
| DNS    | 53   |
| HTTP   | 80   |
| HTTPS  | 443  |

Tjänster som SSH eller FTP använder alltid samma portar som standard (några av dem listas i tabellen ovan). Om en extern illvillig aktör vill brute force:a din servers SSH-tjänst måste de först veta vilken port som används för SSH. Om du inte konfigurerar dessa portar annorlunda är portarna 22 och 21 vanligtvis målet för att köra kommandon direkt på servern eller komma åt filer via FTP.

För att förhindra detta rekommenderar vi att du sätter portarna för standardtjänsterna som användardefinierade. I nästa del av guiden kan du se hur:

:::danger
Din önskade port måste vara mellan 1024 och 65536 och får inte vara en port som redan används!
:::
Du kan använda `cat /etc/services` för att visa några standardportar så att du inte väljer en port som redan är upptagen.

### SSH-port

För att ändra SSH-porten måste du justera konfigurationsfilen. Den finns normalt i `/etc/ssh/sshd_config` som standard, men om den inte finns där kan du använda följande kommando för att hitta den.
```
find / -name "sshd_config" 2>/dev/null
```

Öppna nu filen med nano (som root eller med *sudo*).
```
sudo nano /etc/ssh/sshd_config
```

Lägg till din önskade port efter `Port`. Om `Port` är kommenterad (dvs `#Port 22`), ta bort "#" och ersätt 22 med din önskade port. Spara sedan filen (i Nano med Ctrl + o) och stäng den (Nano: Ctrl + x).

![Port sshd](https://screensaver01.zap-hosting.com/index.php/s/F4Z4SDjLW4y2iDp/preview)

SSH-tjänsten måste nu startas om för att ändringarna ska träda i kraft.
```
#Under Ubuntu/Debian/CentOS t.ex.
sudo systemctl restart sshd
```

### FTP-port

Om du har installerat en FTP-tjänst som **proFTPd**, kan porten också enkelt ändras genom att redigera konfigurationsfilen. Proceduren är alltså liknande som för SSH-tjänsten.

Hitta konfigurationsfilen `proftpd.conf`
```
find / -name "proftpd.conf" 2>/dev/null
```

Filen finns normalt i `/etc/proftpd.conf` (CentOS) eller `/etc/proftpd/proftpd.conf` (Ubuntu, Debian).
Öppna filen med nano och ta bort "#" framför `port` och skriv in din önskade port efter det. Tänk på informationen ovan så att du inte anger en ogiltig port.

:::tip
Använd Ctrl + W för att söka i nano.
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://screensaver01.zap-hosting.com/index.php/s/qw3a88EwfDCMKXS/preview)

## Användning av brandvägg

Principen för extern åtkomst till en server är alltid densamma: en port måste öppnas så att servern kan nås externt. För SSH är detta **som standard** port 22/TCP. (se ovan hur du kan ändra standardporten)

Problemet är att denna port nu är tillgänglig för alla, oavsett person, plats och avsikt. Detta utgör en stor säkerhetsrisk eftersom illvilliga aktörer kan översvämma servern med inloggningsförsök för att antingen lista ut rätt lösenord (genom brute force om du fortfarande har lösenordsinloggning aktiverad) eller försöka överbelasta serverns nätverk genom flooding (t.ex. DDoS), vilket ofta händer.

För att minska dessa effekter kan du använda brandväggsregler som begränsar åtkomsten till de öppna portarna.

Det finns två olika metoder du kan använda:
- **IPTables**: Den ursprungliga Linux-brandväggen. Den erbjuder många möjligheter men är lite mer komplicerad att använda.
- **UFW**: En enklare gränssnitt för IPTables som gör det lättare att använda utan krångliga kommandon, men är lite mer begränsad.

I slutändan är det upp till dig vilken av metoderna du vill använda. Beroende på behov kan du behöva IPTables flexibilitet, men ibland räcker UFW. (t.ex. om du bara vill öppna/stänga portar, vilket ändå är bättre än inget!)

### IPTables

I det här avsnittet använder du IPTables för att skapa regler som begränsar antalet möjliga anslutningsförsök. Förklaringar till kommandona finns under kodblocket.

Observera att denna regel bara aktiveras för **port 22** (värdet efter `--dport`) och kommandon för andra tjänster måste anpassas.

:::note
Följande kommandon fungerar kanske inte på alla Linux-distributioner, men de fungerar på majoriteten av de mest populära distros.
:::

Logga först in på din Linux-server. Om du behöver hjälp, följ vår guide [Initial access (SSH)](vserver-linux-ssh.md). Kör sedan följande kommandon i ordning.

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1.  Den första regeln släpper paket om det finns mer än 2 anslutningar i `TIME_WAIT`-status till port 22 från en enda IP.
2.  Den andra regeln lägger till IP-adressen för en ny anslutning i `recent`-listan.
3.  Den tredje regeln släpper nya anslutningar från IP-adresser som försökt göra mer än 2 anslutningar under den senaste sekunden.

### UFW

Som nämnt ovan är UFW ett "enklare" gränssnitt för IPTables. Först måste du installera UFW, eftersom det inte alltid ingår i alla Linux-distributioner. Kör kommandona som root eller med *sudo*.

Logga in på din Linux-server. Om du behöver hjälp, följ vår guide [Initial access (SSH)](vserver-linux-ssh.md). Instruktionerna är testade på Debian och Ubuntu men bör fungera på andra distros också.

Uppdatera först apt och befintliga tjänster.
```
sudo apt update && sudo apt upgrade -y
```

Installera sedan UFW via apt.
```
sudo apt install ufw -y
```

Kontrollera att installationen lyckades med:
```
sudo ufw status
> Firewall not loaded
```

För att inte låsa ute dig själv från servern måste ssh-tjänsten först tillåtas innan brandväggen aktiveras.

:::caution
Om du redan ändrat SSH-porten, ange den nya porten här istället för 22.
:::

Aktivera ssh-tjänsten med följande kommandon:
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

Ett lyckat resultat bör se ut ungefär så här:
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```

Kör nu följande kommando som begränsar anslutningar till 6 per minut.
```
ufw limit 22/tcp
```

:::note
UFW tillåter bara att begränsa antalet anslutningar till 6 per minut. UFW:s limiter är ganska enkel och kanske inte passar alla situationer. För mer detaljerad och flexibel konfiguration rekommenderar vi att använda IPTables direkt.
:::

:::tip
Brandväggen (oavsett IPTables eller UFW) kan bara "tanklöst" räkna anslutningsförsök och blockera dem. Med Fail2Ban kan du kolla loggfiler efter avvikelser. Nästa avsnitt visar hur du installerar och aktiverar Fail2Ban.
:::

## Extra skydd med Fail2Ban

Fail2Ban är en tjänst som blockerar IP-adresser som försöker ansluta till servern med troligen illvilliga avsikter. Fail2Ban övervakar loggfiler efter avvikelser och skyddar ditt system effektivt på ett relativt enkelt sätt.

Efter installationen har Fail2Ban redan förbyggda konfigurationer för några vanliga tjänster, bland annat:
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
Fler tjänster kan läggas till enkelt med reguljära uttryck (RegEx) och genom att ange önskad loggfil.

Som exempel, titta på en rad i `/var/log/auth.log`. Denna fil innehåller alla SSH-inloggningsförsök, både lyckade och misslyckade.
![/var/log/auth.log](https://screensaver01.zap-hosting.com/index.php/s/XzpxrWZRkpFJseo/preview)

Här ser du raden:
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Ban använder denna loggfil och övervakar den för misslyckade autentiseringar. Eftersom loggfilen direkt innehåller angriparens IP-adress kan Fail2Ban blockera denna IP efter några misslyckade försök.

### Installera Fail2Ban

Logga in på din Linux-server. Om du behöver hjälp, följ vår guide [Initial access (SSH)](vserver-linux-ssh.md). Kör kommandon som root eller med *sudo*.

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

Efter installation kan du kolla status direkt med `systemctl`: (Avsluta systemctl med Ctrl+C)
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

### Konfigurera Fail2Ban

Fail2Ban är nu installerat men inte aktivt eller konfigurerat. Titta i `/etc/fail2ban` och du bör se följande filer:
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
För att skapa en aktiv "jail" måste en fil som heter `jail.local` skapas. Kopiera innehållet från `jail.conf` till den nya filen och öppna den:
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

Alla inställningar görs nu i `jail.local`, inklusive vilka tjänster som ska övervakas.
Titta bara på delen efter `[Default]`. Default-sektionen används för generella standardinställningar.

Scrolla ner lite tills du hittar denna del och justera den så här, till exempel:

| Attribut     | Förklaring                                                                | Värde       |
|--------------|---------------------------------------------------------------------------|-------------|
| ignoreip     | IP-adresser som inte ska blockeras                                        | 127.0.0.1/8 |
| ignorecommand| Ej relevant.                                                              |             |
| bantime      | Hur länge en IP-adress ska blockeras                                     | 1h          |
| findtime     | Tidsram för misslyckade inloggningar som räknas                           | 10m         |
| maxretry     | Antal misslyckade försök som leder till blockering                        | 5           |

```
# kan definieras med mellanslag (och/eller komma) som separator.
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" är antal sekunder en host är bannad.
bantime  = 1h

# En host bannas om den genererat "maxretry" under de senaste "findtime"
# sekunderna.
findtime  = 10m

# "maxretry" är antalet misslyckanden innan en host bannas.
maxretry = 5
```

Du har nu ställt in standardinställningarna. För att övervaka SSH-tjänsten, scrolla ner till `[sshd]`-taggen. Om du ändrat port ska du ange den under `port`.

`[sshd]`-taggen ser ut så här:
```
[sshd]

enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 4
```
:::tip
Som du ser går det att göra individuella inställningar per tjänst (som här med `maxretry` som är lägre än standard). Även om du gjort generella inställningar kan du konfigurera de flesta inställningar per tjänst. Om du inte gör det används standardinställningen.
:::

Starta om Fail2Ban för att börja övervaka.
```
sudo systemctl restart fail2ban.service
```

### Kontrollera att Fail2Ban fungerar

Om du har tillgång till en VPN eller en annan server kan du testa att bli blockerad av Fail2Ban för att se om tjänsten fungerar som den ska. Med VPN eller hotspot via mobilen får du en annan IP, vilket gör testet möjligt.

:::danger
Testa inte detta på ditt vanliga nätverk, eftersom din egen IP kan blockeras och du **kommer att bli utelåst**.
:::

Försök ansluta via SSH till din server (med annan IP!) och skriv fel lösenord varje gång. Resultatet bör se ut ungefär så här:
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

Som du ser nekas nu anslutningen från din server skyddad av Fail2Ban (`Connection refused` istället för `Permission denied`).

Visa nu status för Fail2Ban. Här ser du att en IP-adress är blockerad.
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

Vill du låsa upp IP:n igen kan du göra det med kommandot: `fail2ban-client set sshd unbanip {din IP}`.

:::info
Om du har ovanligt många IP-blockeringar är det smart att förlänga bantiden vid varje misslyckat försök för att minska antalet möjliga inloggningsförsök.
:::

```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
# Bantiden bör öka för varje blockering av denna IP
bantime.increment = true
# Skalningsfaktor på 24 timmar (1h,24h,48h,3d,4d....)
bantime.factor = 24
# Maximal bantid = 5 veckor
bantime.maxtime = 5w
```

## Säkerställ webbservrar med Cloudflare

Många använder Cloudflare som DNS-hanterare för sina domäner. Cloudflare har inte bara ett av världens största nätverk som ger snabbare laddningstider, lägre latens och bättre upplevelse, utan skyddar också dina webbplatser mot DoS/DDoS-attacker, inklusive flooding och nya typer av attacker som dyker upp varje dag.

I den här guiden lär du dig hur du skyddar din webbserver från attacker.

Vi utgår från att din domän redan hanteras av Cloudflare, annars kan du följa [deras guide](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) för att flytta din domän. Gå till DNS Records-fliken i Cloudflares dashboard och se till att din post till webbservern har orange moln och står som "Proxied".

![](https://screensaver01.zap-hosting.com/index.php/s/wptKPBTLwmKxx8F/preview)

All trafik som går via din domän passerar nu Cloudflare och vidare till din server som legitim trafik.
Men din server är fortfarande åtkomlig utanför Cloudflare, så du måste begränsa åtkomst till portarna 80 och 443 (TCP) på din Linux-server och bara tillåta trafik som kommer från legitima Cloudflare-adresser.

Det gör du genom att manuellt begränsa åtkomst med brandväggsregler från [Cloudflares publika IPv4-lista](https://cloudflare.com/ips-v4) och [Cloudflares publika IPv6-lista](https://cloudflare.com/ips-v6).

Alternativt kan du spara tid och använda verktyg som [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) för att snabbt importera dessa brandväggsregler i bulk.
Se till att du inte har några andra regler som tillåter obegränsad åtkomst till din webbserver, för då fungerar inte dessa regler.

## Slutsats – din server är nu mycket säkrare än tidigare!

Den här guiden har visat dig grundläggande och avancerade funktioner för att säkra din Linux-server. Om du har följt alla rekommendationer som gäller för ditt system är din server redan mycket säkrare än tidigare – grattis!

Ytterligare åtgärder kan såklart vidtas:
- [2FA (SSH)](vserver-linux-ssh2fa.md)
- Lägg till fler konfigurationer i Fail2Ban
- Ställ in mailnotiser i Fail2Ban
- Och mycket mer...

<InlineVoucher />