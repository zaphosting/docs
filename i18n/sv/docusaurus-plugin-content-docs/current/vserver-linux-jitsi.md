---
id: vserver-linux-jitsi
title: "VPS: Installation av Jitsi Meet"
description: "Upptäck hur du sätter upp din egen säkra och användarvänliga Jitsi Meet videokonferensserver på Debian för smidiga online-möten → Lär dig mer nu"
sidebar_label: Installera Jitsi Meet
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Jitsi Meet är en open source-videokonferensprogramvara som låter dig sätta upp egna videokonferenser på din server. En stor fördel med Jitsi Meet är den enkla hanteringen: Du behöver bara en webbläsare (på mobil används Jitsi-appen) och du behöver inte logga in på externa tjänster. Varje videokonferens får sin egen URL för att ansluta till mötet. Jitsi Meet är perfekt för videokonferenser även med personer som inte är så tekniskt vana.  
Obs: Utan ytterligare inställningar kan vem som helst som når Jitsi Meet-servern starta egna videokonferenser på servern.

<InlineVoucher />

## Installera Jitsi Meet på en Debian-server

Nedan visar vi hur du installerar en Jitsi Meet-server på en Debian-server. I princip fungerar Jitsi Meet på andra Linux-servrar också, t.ex. Ubuntu, och installationen är väldigt lik.

### Förberedelser

För att använda Jitsi Meet på rätt sätt bör du använda din egen domän för att nå Jitsi-servern. Det är smart att skapa en egen subdomän för Jitsi Meet-servern. Som exempel använder vi domänen meet.zap-testdomain.de.  
För ZAP-Hosting-domäner måste du skapa en ny post i DNS-administrationen. Skriv in subdomänens namn i fältet "Namn" och IP-adressen till din server i fältet "Värde". I vårt exempel skriver vi "meet" i Namn-fältet och IP-adressen till ZAP-testservern där vi installerar Jitsi Meet i Värde-fältet: 185.239.239.49 (ange IP:n till din server, inte detta exempel)

Att ansluta till en Jitsi Meet-server via IP-adress fungerar, men för SSL-certifikatet krävs en domän. Utan domän får webbläsaren en säkerhetsvarning.

När subdomänen är satt (det kan ta upp till 24 timmar innan ändringarna träder i kraft) kan du förbereda din server för installation.  
Anslut till din server via Putty eller WinSCP.  
Innan du fortsätter, se till att servern är uppdaterad. Vid behov måste varje kommando köras med superuser-rättigheter. Lägg då till "sudo" före kommandot (t.ex. "sudo apt-get update")

```
$	apt-get update
```
```
$	apt-get upgrade
```

Om ingen brandvägg är installerad på servern kan du installera en brandvägg, t.ex. UFW:
```
$	apt install ufw
```

Gör följande inställningar i brandväggen:

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

Aktivera brandväggen:
```
$	ufw enable
```

Kolla status:
```
$	ufw status
```

### Installation av Jitsi Meet

För att installera Jitsi Meet behöver du först paketet gnupg:
```
$	apt install gnupg
```

Efter paketinstallationen laddas Jitsi-GPG-nyckeln ner och läggs till:
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

För att installera Jitsi Meet måste du lägga till Jitsi-repositoriet:
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

Följande rad läggs till i editorn. Spara sedan ändringen och stäng editorn:
```
$	deb https://download.jitsi.org stable/
```

Nu kan Jitsi Meet installeras. Det rekommenderas att uppdatera alla installerade paket igen:
```
$	apt update
```
```
$	apt install jitsi-meet
```

Under installationen blir du ombedd att ange ett värdnamn. Skriv in subdomänen du skapade för din Jitsi Meet-server. I vårt testexempel är det: meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/oBEDBDx6GqzAoFa/preview)

Bekräfta med "Ok". Ett nytt fönster öppnas där du får välja om ett självsignerat TLS-certifikat ska skapas eller om ett befintligt ska användas. Välj "Generate a new self-signed certificate":

![](https://screensaver01.zap-hosting.com/index.php/s/jcr84boZHiakNDS/preview)

Installationen av Jitsi Meet är nu klar och det enda som återstår är att hämta TLS-certifikatet.  
Installera paketet Certbot:
```
$	apt install certbot
```

Kör skriptet för att installera TLS-certifikatet:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Under körningen blir du ombedd att ange en e-postadress som skickas till letsencrypt.org. Skriv in en e-postadress och bekräfta.

Efter det bör Jitsi Meet vara fullt installerat och aktivt på din server. För att testa att Jitsi Meet är korrekt installerat, skriv bara in subdomänen du satt upp i webbläsarens adressfält. I denna guide är det:
```
https://meet.zap-testdomain.de
```

## Slutsats

Grattis, du har nu installerat och konfigurerat Jitsi! Om du har fler frågor eller problem, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig!

<InlineVoucher />