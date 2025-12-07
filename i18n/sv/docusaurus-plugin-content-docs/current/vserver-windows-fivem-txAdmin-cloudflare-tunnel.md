---
id: vserver-windows-fivem-txAdmin-cloudflare-tunnel
title: "VPS: Ställ in Cloudflare Tunnel för txAdmin"
description: "Upptäck hur du sätter upp Cloudflare tunnel för txAdmin för bättre säkerhet → Läs mer nu"
sidebar_label: Cloudflare Tunnel för txAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

Om du vill ta extra säkerhetsåtgärder utöver den befintliga ZAP-Hosting DDoS-skyddet kan du säkra din txAdmin-instans ytterligare genom att använda en Cloudflare Tunnel. Denna setup ser till att txAdmin webbgränssnitt inte längre exponeras via din servers publika IP, utan istället nås säkert via din egen domän. Alla attacker mot txAdmin-porten filtreras av Cloudflare, samtidigt som du kan låsa ner den lokala porten helt utan att förlora åtkomst.



## Förutsättningar

För att använda en Cloudflare Tunnel på Windows behöver du en Windows VPS, en fungerande txAdmin-installation, din txAdmin-port och en domän som redan är kopplad till ditt Cloudflare-konto. Om din domän inte är kopplad till Cloudflare än, följ först vår [Cloudflare Setup](domain-cloudflare-setup.md)-guide.

Cloudflare Tunnel fungerar genom att skapa en utgående krypterad anslutning från din server till Cloudflare, så inga publika portar behöver vara öppna för txAdmin.


## Cloudflare Setup

Innan du installerar cloudflared på din Windows vServer, skapar och konfigurerar du tunneln direkt i din Cloudflare-dashboard.

Logga in på ditt Cloudflare-konto och gå till Zero Trust-sektionen. Där kan du skapa en ny tunnel som senare vidarebefordrar trafik till ditt txAdmin-gränssnitt.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Installation av Cloudflare Tunnel

Cloudflare erbjuder ett litet verktyg som heter cloudflared. Installationen av cloudflared på Windows är väldigt enkel. Ladda först ner [Windows-installationsfilen](https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi).

![img](https://screensaver01.zap-hosting.com/index.php/s/JFsdnjkcR6LrJAr/preview)

När filen är nedladdad, kör installationsprogrammet och slutför installationen. När installationen är klar, öppna Kommandotolken som administratör. Kör sedan det angivna kommandot:

```
cloudflared.exe service install eyJhIjoiMj...
```

Efter att kommandot körts kommer din server att ansluta till Cloudflare via tunneln. Om setupen lyckas ändras statusen i Connectors-sektionen till **Connected**, vilket bekräftar att tunneln är aktiv och fungerar.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Konfigurera Cloudflare Tunnel

Nästa steg är att konfigurera Route Traffic-inställningarna. Skapa en ny subdomän som du vill använda. I detta exempel används subdomänen `txAdmin`, som senare används för att nå txAdmin-gränssnittet.

Välj den domän du vill använda, ställ in servicetypen till **HTTP** och ange **localhost:port** som URL. Byt ut port mot den port som är definierad för din txAdmin-instans. I detta exempel används port 40500.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Säkerhetsrekommendation
Istället för att använda standardporten för txAdmin **40120**, rekommenderar vi att du använder en annan port för bättre säkerhet.
:::



## Konfigurera Windows-brandväggen

För att förhindra att porten är nåbar utanför tunneln, konfigurera Windows-brandväggen så att den aktuella porten bara accepterar anslutningar från localhost. Begränsa regeln till fjärradressen 127.0.0.1. Detta tvingar all trafik att komma från den lokala maskinen och blockerar all extern åtkomst, vilket säkerställer att tjänsten bakom cloudflared inte är nåbar från nätverket utanför tunneln.

```
netsh advfirewall firewall add rule name="Cloudflared Local Only" dir=in action=allow protocol=TCP localport=40500 remoteip=127.0.0.1
```

Med denna konfiguration blockeras alla åtkomstförsök från utanför maskinen, vilket garanterar att tjänsten bakom cloudflared inte är nåbar utanför tunneln.



## Slutsats

När Cloudflare Tunnel är aktiv blir ditt txAdmin-gränssnitt endast tillgängligt via din egen domän, medan all trafik passerar genom Cloudflare där den filtreras och säkras.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

Direktåtkomst till txAdmin-porten via serverns IP blockeras, vilket helt tar bort den ursprungliga attackytan. Det gör txAdmin stabilt, säkert och pålitligt tillgängligt även om någon försöker överbelasta eller attackera gränssnittet.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />