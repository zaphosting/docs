---
id: dedicated-linux-jitsi
title: "Sätt upp Jitsi Meet på en Linux-server - Hosta din egen videokonferensplattform"
description: "Upptäck hur du sätter upp och kör din egen säkra Jitsi Meet-videokonferensserver för enkla, privata online-möten → Läs mer nu"
sidebar_label: Installera Jitsi Meet
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Jitsi Meet är en open source-videokonferensmjukvara som låter dig sätta upp dina egna videomöten på din server. En stor fördel med Jitsi Meet är den enkla hanteringen: Du behöver bara en webbläsare (på mobiler används Jitsi-appen) och du loggar inte in på externa tjänster. Varje videomöte får sin egen URL för att ansluta till konferensen. Jitsi Meet är perfekt för videomöten även med folk som inte är så tekniskt vana.  
Obs: Utan några extra inställningar kan vem som helst som kommer åt Jitsi Meet-servern starta egna videokonferenser på servern.

## Installera Jitsi Meet på en Debian-server

Här visar vi hur du installerar en Jitsi Meet-server på en Debian-server. I princip funkar Jitsi Meet på andra Linux-servrar också, t.ex. Ubuntu, och installationen är väldigt lik.

### Förberedelser

För att använda Jitsi Meet på bästa sätt bör du använda din egen domän för att nå Jitsi-servern. Det är smart att skapa en egen subdomän för Jitsi Meet-servern. Som exempel använder vi domänen meet.zap-testdomain.de.  
För ZAP-Hosting-domäner måste du skapa en ny post i DNS-administrationen. Skriv in subdomänens namn i fältet "Namn" och IP-adressen till din server i fältet "Värde". I vårt exempel skriver vi "meet" i Namn-fältet och IP-adressen till ZAP-testservern där vi installerar Jitsi Meet i Värde-fältet: 185.239.239.49 (ange IP:n till din server, inte detta exempel).

Du kan nå Jitsi Meet-servern via IP-adressen, men för SSL-certifikatet krävs en domän. Utan domän får du en säkerhetsvarning i webbläsaren.

När subdomänen är satt (det kan ta upp till 24 timmar innan ändringarna slår igenom) kan du förbereda servern för installation.  
Anslut till din server via Putty eller WinSCP.  
Innan du fortsätter, se till att servern är uppdaterad. Om det behövs måste varje kommando köras med superuser-rättigheter, alltså lägg till "sudo" före kommandot (t.ex. "sudo apt-get update").

```
$	apt-get update
```
```
$	apt-get upgrade
```

Om ingen brandvägg är installerad på servern kan du installera en, t.ex. UFW:
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

Efter installationen laddas Jitsi-GPG-nyckeln ner och läggs till:
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

Lägg till följande rad i editorn. Spara ändringen och stäng editorn:
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

Under installationen kommer du bli ombedd att ange ett värdnamn. Skriv in subdomänen du skapade för din Jitsi Meet-server. I vårt testexempel är det: meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)

Bekräfta med "Ok". Ett nytt fönster öppnas där du får välja om du vill skapa ett självsignerat TLS-certifikat eller använda ett befintligt. Välj "Generate a new self-signed certificate":

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)

Installationen av Jitsi Meet är nu klar och det enda som återstår är att hämta TLS-certifikatet.  
Installera paketet Certbot:
```
$	apt install certbot
```

Kör skriptet för att installera TLS-certifikatet:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Under körningen blir du ombedd att ange en e-postadress som skickas till letsencrypt.org. Skriv in din e-post och bekräfta.

Efter det ska Jitsi Meet vara fullt installerat och aktivt på din server. För att testa att allt funkar, skriv in subdomänen du satt upp i webbläsarens adressfält. I den här guiden är det:
```
https://meet.zap-testdomain.de
```

Om sidan laddas med Jitsi Meet kan du direkt starta din första videokonferens.