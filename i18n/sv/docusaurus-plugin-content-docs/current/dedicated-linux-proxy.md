---
id: dedicated-linux-proxy
title: "Dedikerad Server: Sätt upp en Reverse Proxy med nginx på Linux"
description: "Upptäck hur du sätter upp en säker och effektiv reverse proxy för webbplatser och spelservrar för bättre åtkomst och skydd → Lär dig mer nu"
sidebar_label: Reverse Proxy
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En reverse proxy-server är en server som agerar mellanhand mellan slutanvändare och en annan server. Webbplatser och spelservrar är vanliga anledningar till att använda en reverse proxy, med olika fördelar som säkerhet, enklare åtkomst och skydd.

I den här guiden går vi igenom hur du sätter upp en allmän reverse proxy för webbplatser samt en anpassad för spelservrar.



## Förberedelser

För att sätta upp en reverse proxy behöver du en **Linux-server** som kommer att hosta din proxy. I det här exemplet använder vi Ubuntu som Linux-distribution, men installationsstegen är väldigt lika för de flesta Linux-distributioner.

:::tip Rekommenderade VPS-specifikationer
För en reverse proxy anpassad för spelservrar rekommenderar vi starkt att du skaffar högre nätverkshastigheter, särskilt om din server har många spelare. Det beror på att din VPS kommer att streama rå TCP/UDP direkt mellan klienten (spelaren) och spelservern. Annars räcker en server med bas-specar och minimala uppgraderingar för en webbproxy. :)
:::

Vi rekommenderar att du sätter upp proxyn med en **domän** som du äger. För varje subdomän du planerar att använda bör du skapa en `A` DNS-post (t.ex. `zapdocs.example.com`) som pekar på IP-adressen till din __Linux VPS__. Det är så användare kommer åt din webbplats eller spelserver.

### Anslut till VPS

När din Linux VPS är redo måste du ansluta till den. Använd gärna vår guide för [SSH Initial Access](vserver-linux-ssh.md) för att lära dig hur du gör detta.

### Installera Nginx

Du kommer använda Nginx för att hosta reverse proxy-servern eftersom det är en snabb och populär open-source webbserver.

När du har anslutit till din VPS, kör följande kommando för att installera Nginx.

```
sudo apt install nginx
```

När installationen är klar måste du justera din brandvägg så att tjänsten är tillgänglig från internet. I den här guiden använder vi **UFW-brandväggen** eftersom Nginx registrerar sig som en app, vilket gör det enkelt att ändra inställningar. Du kan läsa mer om UFW-brandväggen i vår guide för [Linux Security Tips](vserver-linux-security-tips.md).

:::note
Om du använder andra brandväggar (som Iptables), se till att ge relevant brandväggstillgång till Nginx, särskilt på port 80 och 443 där nginx-tjänsten körs.
:::

Du kan kolla Nginx-profiler med `sudo ufw app list`. Här vill vi välja **Nginx Full**, vilket ger tillgång till HTTP för test och HTTPS för produktion.

```
sudo ufw allow 'Nginx Full'
```

När Nginx är installerat, testa att nå sidan via en webbläsare för att säkerställa att allt fungerar som det ska. Om testsidan fungerar kan du fortsätta med guiden.

```
http://[din_serverip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## För Webbplatser

En reverse proxy för webbplatser kan vara väldigt användbar av flera anledningar, som att omdirigera till interna serverresurser, t.ex. en Vaultwarden-instans (utan att behöva port i URL:en), eller vidarebefordra användaren till extern content, vilket är bra för lastbalansering och skydd.

En stor fördel är att din server kan hantera förfrågningar från så många källor/domäner som behövs, istället för en enda webbserver som kör på port 80/443.

### Nginx-setup

Börja med att skapa en konfigurationsfil i Nginx-katalogen för den domän du valde tidigare, vanligtvis en subdomän som `zapdocs.example.com` i vårt exempel.

:::important
Se till att du har skapat en `A`-post som pekar på IP-adressen till din proxyserver innan du fortsätter. Utan detta kommer domänen och efterföljande steg inte fungera som förväntat.
:::

Gå till serverblock-mappen med följande kommando. Här sparar du alla dina proxy-konfigurationer.

```
cd /etc/nginx/sites-available/
```

Skapa nu en ny konfigurationsfil med följande kommando. Vi rekommenderar att använda domännamnet som filnamn för enkel identifiering (t.ex. zapdocs.example.com). Byt ut `[your_filename]` mot det filnamn du vill använda.

```
sudo nano [your_filename]
```

Nano-editorn öppnas och du kan klistra in följande mall. Anpassa `[your_domain]` till den domän du vill proxya och `[your_target_server]` till den server du vill nå.

```
upstream targetServer {
    # Lägg till målservern du vill nå. Det kan vara:
    # Intern "localhost"-omdirigering (t.ex. 127.0.0.1:9090)
    # Extern server (t.ex. 103.146.43.52:9000)
    server [your_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # Domän som ska hanteras (t.ex. zapdocs.example.com)
    server_name [your_domain];

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass_request_headers on;
        proxy_http_version 1.1;
        proxy_pass http://targetServer;
    }
}
```

När du anpassat alla värden sparar du filen och avslutar nano med `CTRL + X`, tryck `Y` för att bekräfta och sedan `ENTER`.

Nu måste du aktivera serverblocket genom att skapa en symlink till den aktiva katalogen.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

För att säkerställa att allt är korrekt, särskilt syntaxen, kan du köra `sudo nginx -t` för att se om några fel visas. Om det är OK, starta om Nginx för att ladda den nya konfigurationen.

```
systemctl reload nginx.service
```

När tjänsten är omstartad, testa att nå domänen du använt för reverse proxyn i din webbläsare. Om allt funkar ska sidan visa det innehåll du satt som `targetServer`. Om du stöter på problem, kolla loggarna med `journalctl -f -u nginx.service` för felsökning.

## För Spelservrar

En reverse proxy för spelservrar kan vara väldigt användbar för flera anledningar, som att ge ett extra lager av säkerhet och stabilitet genom att förbättra skydd och begränsa åtkomst till huvudservern.

:::tip
De flesta dedikerade spelservrar fungerar utmärkt med en rå TCP/UDP-endpoint proxy som du sätter upp här. Men en liten minoritet av spel, som BeamMP, kan ha problem med VPN och proxies, så testa per spel.
:::

### Nginx-setup

Det här kräver **Nginx Stream**-modulen, som inte ingår i standard Nginx-installationen.

#### Installera Nginx stream-modul

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt install -y libnginx-mod-stream
```
</TabItem>

<TabItem value="centos-fedora" label="CentOS & Fedora">
```bash
sudo dnf -y install nginx-mod-stream 
```
</TabItem>

</Tabs>

#### Nginx stream-konfiguration

Du kommer lägga till ett nytt `stream`-block i huvudfilen `nginx.conf` där du definierar upstream-servern och vilken port den ska nås på via proxyn.

Öppna filen med:

```
sudo nano /etc/nginx/nginx.conf
```

Klistra in följande mall som lägger till ett nytt `stream`-block. Byt ut `[your_target_server]` mot servern du vill streama till, inklusive port (t.ex. `:30120` för FiveM). Byt även ut `[your_port_listener]` mot porten du vill att folk ska ansluta till via proxyn.

```
stream {
    upstream targetServer {
        # Lägg till målservern du vill nå (t.ex. 103.146.43.52:30120)
        server [your_target_server];
    }

    server {
        # Lyssnarport som accepterar och vidarebefordrar anslutningar (t.ex. 30120)
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

Nginx kommer alltså lyssna på den specifika porten för inkommande anslutningar och streama allt till målservern du definierat (från proxyn till din riktiga spelserver).

Spara filen och avsluta nano med `CTRL + X`, `Y` och `ENTER`.

Kör `sudo nginx -t` för att kontrollera syntaxen. Om allt är OK, starta om Nginx för att ladda den nya konfigurationen.

```
systemctl reload nginx.service
```

När tjänsten är omstartad, testa att ansluta till din spelserver via proxy-domänen. Om det funkar ska du kunna ansluta till spelservern du satt som `targetServer`. Om problem uppstår, kolla loggarna med `journalctl -f -u nginx.service` för felsökning.

## SSL-certifikat

När din reverse proxy är uppe och rullar rekommenderar vi starkt att du lägger till ett SSL-certifikat på dina domäner för att säkerställa att trafiken skickas säkert via HTTPS. Kolla in vår guide för [Install Certbot](dedicated-linux-certbot.md) som går igenom hela processen för att begära och automatiskt förnya SSL-certifikat för dina domäner.

## Sammanfattning

Grattis! Du har nu framgångsrikt satt upp en reverse proxy för antingen en webbplats eller din spelserver (eller båda :), vilket ger dig flera förbättringar inom säkerhet, stabilitet och prestanda. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂