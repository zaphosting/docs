---
id: vserver-linux-fivem-txAdmin-cloudflare-tunnel
title: "VPS: Ställ in Cloudflare Tunnel för txAdmin"
description: "Upptäck hur du sätter upp Cloudflare tunnel för txAdmin för ökad säkerhet → Lär dig mer nu"
sidebar_label: Cloudflare Tunnel för txAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

Om du vill ta extra säkerhetsåtgärder utöver den befintliga ZAP-Hosting DDoS-skyddet kan du säkra din txAdmin-instans ytterligare genom att använda en Cloudflare Tunnel. Denna setup ser till att txAdmin webbgränssnitt inte längre exponeras via din servers publika IP, utan istället nås säkert via din egen domän. Alla attacker mot txAdmin-porten filtreras av Cloudflare, samtidigt som du kan låsa ner den lokala porten helt utan att förlora åtkomst.

<InlineVoucher />

## Förutsättningar

För att använda en Cloudflare Tunnel på Linux behöver du en Linux VPS, en fungerande txAdmin-installation, din txAdmin-port och en domän som redan är kopplad till ditt Cloudflare-konto. Om din domän inte är kopplad till Cloudflare än, följ först vår guide för [Cloudflare Setup](domain-cloudflare-setup.md).

Cloudflare Tunnel fungerar genom att skapa en utgående krypterad anslutning från din server till Cloudflare, så inga publika portar behöver vara öppna för txAdmin.


## Cloudflare Setup

Innan du installerar cloudflared på din Linux vServer, skapar och konfigurerar du tunneln direkt i din Cloudflare-dashboard.

Logga in på ditt Cloudflare-konto och gå till Zero Trust-sektionen. Där kan du skapa en ny tunnel som senare kommer att vidarebefordra trafik till ditt txAdmin-gränssnitt.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Installation av Cloudflare Tunnel

Cloudflare erbjuder ett litet verktyg som heter cloudflared. Installationen av cloudflared på Linux är väldigt enkel. Först laddar du ner och kör Linux-installationsprogrammet.

![img](https://screensaver01.zap-hosting.com/index.php/s/93TFH8xfxEEDobd/preview)

```
# Lägg till cloudflare gpg-nyckel
sudo mkdir -p --mode=0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-public-v2.gpg | sudo tee /usr/share/keyrings/cloudflare-public-v2.gpg >/dev/null

# Lägg till detta repo till dina apt-källor
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-public-v2.gpg] https://pkg.cloudflare.com/cloudflared any main' | sudo tee /etc/apt/sources.list.d/cloudflared.list

# installera cloudflared
sudo apt-get update && sudo apt-get install cloudflared
```

När installationen är klar, kör det angivna kommandot:

```
cloudflared.exe service install eyJhIjoiMj...
```

Efter att ha kört kommandona kommer din server att ansluta till Cloudflare via tunneln. Om setupen lyckas ändras statusen i Connectors-sektionen till **Connected**, vilket bekräftar att tunneln är aktiv och fungerar.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Konfigurera Cloudflare Tunnel

Nästa steg är att konfigurera Route Traffic-inställningarna. Skapa en ny subdomäns-post som du vill. I detta exempel används subdomänen `txAdmin`, som senare används för att nå txAdmin-gränssnittet.

Välj den domän du vill använda, ställ in servicetypen till **HTTP** och ange **localhost:port** som URL. Byt ut port mot den port som är definierad för din txAdmin-instans. I detta exempel används port 40500.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Säkerhetsrekommendation
Istället för att använda standardporten för txAdmin **40120**, rekommenderas det att använda en annan port för bättre säkerhet.
:::



## Konfigurera Linux-brandväggen

För att förhindra att porten är nåbar utanför tunneln, konfigurera Linux-brandväggen (iptables) så att den aktuella porten bara accepterar anslutningar från localhost. Begränsa regeln till fjärradressen 127.0.0.1. Detta tvingar all trafik att komma från den lokala maskinen och blockerar all extern åtkomst, vilket säkerställer att tjänsten bakom cloudflared inte är nåbar från nätverket utanför tunneln.

```
sudo iptables -A INPUT -p tcp --dport 40500 ! -s 127.0.0.1 -j DROP
```

Med denna konfiguration blockeras alla åtkomstförsök från utanför maskinen, vilket garanterar att tjänsten bakom cloudflared inte är nåbar utanför tunneln.



## Slutsats

När Cloudflare Tunnel är aktiv blir ditt txAdmin-gränssnitt tillgängligt endast via din egen domän medan all trafik går genom Cloudflare där den filtreras och säkras.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

Direktåtkomst till txAdmin-porten via serverns IP blockeras, vilket helt tar bort den ursprungliga attackytan. Det gör txAdmin stabilt, säkert och pålitligt tillgängligt även om någon försöker överbelasta eller attackera gränssnittet.

Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />