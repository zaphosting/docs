---
id: fivem-proxy
title: "FiveM: Ställ in en Reverse Proxy"
description: "Upptäck hur du förbättrar säkerheten och stabiliteten på din FiveM-server med en reverse proxy för bättre DDoS-skydd och prestanda → Lär dig mer nu"
sidebar_label: Reverse Proxy
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En reverse proxy-server är en server som agerar som en mellanhand mellan slutanvändarna (dina spelare) och din FiveM-server. Detta kan vara väldigt fördelaktigt för servrar som ofta utsätts för DDoS-attacker, eftersom det ger ett extra lager av säkerhet och stabilitet genom att minska synligheten av huvudservern och ger extra skydd.

I den här guiden går vi igenom hur du ställer in en reverse proxy för din FiveM-server. Det finns två typer av reverse proxies i detta scenario; connect-proxyn som används för connect-endpointen och en server-proxy som används för server-endpointen där rå TCP/UDP-proxying sker. Båda kan ställas in oberoende av varandra.

<InlineVoucher />

## Förberedelser

För att ställa in en reverse proxy behöver du en **Linux-server** (t.ex. en VPS) som kommer att hosta din proxy-server. I detta exempel använder vi Ubuntu som Linux-distribution, men installationsstegen bör vara väldigt lika för de flesta Linux-distributioner.

:::tip Rekommenderade VPS-specifikationer
Vi rekommenderar starkt att du köper högre nätverkshastigheter om du planerar att sätta upp en server-proxy, särskilt om din server har många spelare. Detta eftersom din VPS kommer att streama rå TCP/UDP direkt mellan klienten (spelaren) och FiveM-servern. Annars räcker en server med bas-specifikationer och minimala uppgraderingar. :)
:::

Vi rekommenderar också att du sätter upp proxyn med en **domän** som du äger. Du bör skapa en `A`-post på den domän du vill använda (t.ex. `zapdocs.example.com`), som pekar på IP-adressen till din __Linux VPS__. Det är denna som spelarna kommer att använda för att ansluta till servern, även om du tekniskt sett kan använda IP-adressen till din proxy-server istället om du vill.

### Ansluta till VPS

När din Linux VPS är redo måste du ansluta till den. Använd gärna vår guide för [SSH Initial Access](vserver-linux-ssh.md) för att lära dig hur du gör detta.

### Installera Nginx

Du kommer att använda Nginx för att hosta reverse proxy-servern eftersom det är en mycket snabb och populär open-source webbserver.

När du har anslutit till din VPS, kör följande kommando för att installera Nginx.

```
sudo apt install nginx
```

När installationen är klar måste du justera din brandvägg för att säkerställa att tjänsten är tillgänglig från internet. I denna guide använder vi **UFW-brandväggen** eftersom Nginx registrerar sig som en app, vilket gör det enkelt att justera inställningarna. Du kan läsa mer om UFW-brandväggen i vår guide [Linux Security Tips](vserver-linux-security-tips.md).

:::note
Om du använder andra brandväggar (som Iptables), se till att ge relevant brandväggstillgång till Nginx, särskilt på port 80 och 443 där nginx-tjänsten körs.
:::

Du kan kolla Nginx-profiler genom att köra `sudo ufw app list`. I detta scenario vill vi välja **Nginx Full**-alternativet, vilket ger tillgång till HTTP för testning och HTTPS för produktion.

```
sudo ufw allow 'Nginx Full'
```

När Nginx är installerat, försök att nå sidan via en webbläsare för att säkerställa att allt fungerar som det ska. Om testsidan laddas som förväntat kan du fortsätta med guiden.

```
http://[din_serverip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Connect Proxy

En connect proxy används för att proxy:a connect-endpointen för din FiveM-server. Det betyder i princip att din proxy-server tar emot förfrågningar till connect-endpointen och skickar vidare dem till din huvud-FiveM-server. Detta ger en stor fördel genom att dölja den riktiga FiveM-hostens IP-adress från serverlistan, vilket minskar synligheten.

### Nginx-setup

Börja med att skapa en konfigurationsfil i Nginx-katalogen för den domän du valde tidigare under domäninställningen. I detta exempel använder vi `zapdocs.example.com` som tidigare.

Använd följande kommando för att skapa serverblocket för din domän, och byt ut `[your_domain]` mot din egen.

```
sudo nano /etc/nginx/sites-available/[your-domain]
```

Kopiera nu in följande mall i editorn och anpassa den med dina värden.

```
upstream backend {
    # FiveM Server IP-adress
    server [your_fivem_serverip]:30120;
}

proxy_cache_path /srv/cache levels=1:2 keys_zone=assets:48m max_size=20g inactive=2h;

server {
    listen 80;
    listen [::]:80;

    server_name [your_domain]; # Exempel: zapdocs.example.com

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        # Krävs för att skicka auth headers korrekt
        proxy_pass_request_headers on;
        # Krävs för att undvika att deferrals stänger anslutningen direkt
        proxy_http_version 1.1;
        proxy_pass http://backend;
    }

    # Extra block för caching proxy
    location /files/ {
        proxy_pass http://backend$request_uri;
        add_header X-Cache-Status $upstream_cache_status;
        proxy_cache_lock on;
        proxy_cache assets;
        proxy_cache_valid 1y;
        proxy_cache_key $request_uri$is_args$args;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 1;
    }
}
```

När du har anpassat alla värden kan du spara filen och avsluta nano med `CTRL + X`, följt av `Y` för att bekräfta och sedan `ENTER`.

Nu måste du aktivera serverblocket genom att skapa en symlink till den aktiva katalogen.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

För att säkerställa att allt är korrekt, särskilt syntaxen, kan du köra `sudo nginx -t` för att se om några fel visas. Om det är lyckat är sista steget att starta om Nginx så att det nya serverblocket träder i kraft.

```
systemctl reload nginx.service
```

När tjänsten är omstartad bör du testa att nå domänen du använder för reverse proxyn i din webbläsare. Om det fungerar ska sidan ladda det innehåll du satt som `targetServer`-parametern. Om du stöter på problem rekommenderar vi att du kollar loggarna för felsökning med `journalctl -f -u nginx.service` för att hitta eventuella fel.

### FiveM-konfiguration

När proxyn är uppe måste du justera några värden i `server.cfg`-filen på din FiveM-server.

Lägg till följande i konfigurationen och byt ut värdena mot dina egna.

```
# Förhindrar att serverlistan annonserar din server med dess riktiga IP
set sv_forceIndirectListing true

# Gör så att serverlistans backend frågar din domän istället för standard (exempel: zapdocs.example.com)
set sv_listingHostOverride "[your_domain]"

# En mellanslagsseparerad lista med IPv4-nät i CIDR-notation som tillåts skicka 'X-Real-IP', samt kringgår rate limiter
set sv_proxyIPRanges "[your_proxy_serverip]/32"

# Den faktiska endpoint din server hostas på, eller en eller flera server-endpoint proxies
set sv_endpoints "[your_fivem_serverip]:30120"
```

Spara filen och starta om servern. Nästa gång servern startar ska din domän nu peka på din FiveM-server och kan användas för att ansluta.

Du kan verifiera att allt fungerar genom att försöka nå: `https://[your_domain]/info.json`. Om den laddas korrekt fungerar din connect proxy.

## Server Proxy

En server proxy används för att proxy:a server-endpointen till din FiveM-server, vilket direkt proxyar råa TCP/UDP-endpoints och streams.

### Nginx-setup

För detta använder du **stream**-modulen som ingår i Nginx. Öppna `nginx.conf`-filen med nano.

```
sudo nano /etc/nginx/nginx.conf
```

Kopiera in följande innehåll i root-scope och byt ut värdena mot dina egna.

```
stream {
    upstream backend {
        server [your_fivem_serverip]:30120;
    }
    
    server {
		listen 30120;
		proxy_pass backend;
	}

	server {
		listen 30120 udp reuseport;
		proxy_pass backend;
	}
}
```

När du anpassat värdena sparar du filen och avslutar nano med `CTRL + X`, följt av `Y` och `ENTER`.

För att säkerställa att allt är korrekt, särskilt syntaxen, kör `sudo nginx -t`. Om det är lyckat, starta om Nginx för att aktivera den nya konfigurationen.

```
systemctl reload nginx.service
```

När tjänsten är omstartad bör du testa att ansluta till din spelserver via proxy-domänen. Om det fungerar ska du kunna ansluta till spelet, specifikt servern du satt som `targetServer`-parameter. Om du har problem, kolla loggarna med `journalctl -f -u nginx.service` för felsökning.

### FiveM-konfiguration

När proxyn är uppe måste du justera ett värde i `server.cfg` på din FiveM-server.

:::tip
Om du redan har satt `set sv_endpoints` genom att konfigurera en Connect Proxy kan du hoppa över detta steg.
:::

Lägg till följande rad i konfigurationen och byt ut värdet mot ditt.

```
# Den faktiska endpoint din server hostas på, eller en eller flera server-endpoint proxies
set sv_endpoints "[your_fivem_serverip]:30120"
```

Spara filen och starta om servern. Nästa gång servern startar ska råa TCP/UDP-endpoints streamas genom din reverse proxy.

Du kan verifiera detta genom att kolla IP-adresserna på spelarna, som alla bör vara IP-adressen till din proxy-server följt av slumpmässigt tilldelade portar.

## SSL-certifikat

När din FiveM reverse proxy är uppe rekommenderar vi starkt att du lägger till ett SSL-certifikat på dina domäner för att säkerställa att sidan skickar data säkert via HTTPS.

Kolla in vår guide [Install Certbot](dedicated-linux-certbot.md) som täcker hela processen för att begära och automatiskt förnya SSL-certifikat för dina domäner.

## Avslutning

Grattis, du har nu framgångsrikt satt upp en reverse proxy för din FiveM-server, vilket ger dig flera förbättringar inom säkerhet, stabilitet och prestanda. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />