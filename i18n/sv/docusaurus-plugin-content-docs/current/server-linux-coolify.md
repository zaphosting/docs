---
id: server-linux-coolify
title: "Installera Coolify på en Linux-server – Självhostade molnappar"
description: "Upptäck hur du installerar och sätter upp Coolify för att självhosta dina egna appar, databaser och tjänster enkelt → Läs mer nu"
sidebar_label: Installera Coolify
services:
  - vserver-service-coolify
  - dedicated-service-coolify
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

[Coolify](https://coolify.io/) är ett open-source, självhostat alternativ till Heroku och Vercel som låter dig enkelt hantera dina servrar, applikationer och databaser.

![img](https://screensaver01.zap-hosting.com/index.php/s/nrXeZsgjXn43sfw/preview)

Coolifys intuitiva dashboard gör självhosting busenkelt. Du får full kontroll över din infrastruktur, automatiska GitHub-deploys och håller molnkostnaderna låga.

I den här guiden går vi igenom varje steg för hur du sätter upp det, förkonfigurerar ditt adminkonto och ställer in allt du behöver veta.

<InlineVoucher />

## Användningsområden för Coolify

Coolify funkar i massor av vardagliga scenarion och passar alla som vill automatisera app-deploys, hosta databaser eller köra bakgrundsjobb. Perfekt för både nybörjare och proffs.

Coolify har inbyggt stöd för att deploya Static Sites, Node.js, Python, PHP, Rust och Docker-containrar. Det kommer med trendiga one-click-mallar som WordPress, Ghost, Grafana, Appwrite, Nextcloud och PostgreSQL-databaser. Det hanterar automatiskt Let's Encrypt SSL-certifikat och reverse proxy-routing via Traefik.

## Förberedelser

Även om Coolify är lättviktigt i grunden kan resursanvändningen öka rejält beroende på hur många appar, Docker-bygg och databaser som körs samtidigt. Vi rekommenderar följande hårdvarukrav för att hosta Coolify på din VPS/Dedikerade Server.

| Hårdvara  | Minsta      | Rekommenderat             |
| --------- | ----------- | ------------------------- |
| CPU       | 2 vCPU-kärnor | 4 vCPU-kärnor            |
| RAM       | 2 GB        | 4 GB+                     |
| Diskutrymme | 30 GB      | 50 GB+                    |

<InlineServiceLink />

Innan du installerar Coolify behöver du koppla upp dig mot din server och se till att operativsystemet är uppdaterat. Du måste ansluta via SSH med root-behörighet. Vi har redan en guide om [SSH Initial access](vserver-linux-ssh.md) om du behöver hjälp med det.

:::tip[SSH-nyckelautentisering]
Vi **rekommenderar starkt** att du sätter upp en SSH-nyckel istället för lösenord för autentisering. Du kan lära dig hur i vår [SSH Key Setup](vserver-linux-sshkey.md)-tutorial.
:::

## Installation

När du är inloggad på servern, uppdatera systempaketen och installera `curl` som behövs för att hämta Coolify-installationsscriptet:

```bash
sudo apt update && sudo apt upgrade -y && sudo apt install curl -y
```



### Förbered dina adminuppgifter

Coolify har strikta säkerhetspolicys för ditt adminkonto. Innan du kör installationskommandot, förbered dina root-användaruppgifter enligt följande valideringskrav:

* **Användarnamn**
  * Minsta längd: 3 tecken
  * Maxlängd: 255 tecken
  * Får bara innehålla bokstäver, siffror, mellanslag, understreck och bindestreck
* **E-post**
  * Måste vara en giltig e-postadress
  * Måste ha en giltig DNS-post
  * Maxlängd: 255 tecken
* **Lösenord**
  * Minsta längd: 8 tecken
  * Måste innehålla både stora och små bokstäver
  * Måste innehålla minst en siffra
  * Måste innehålla minst en specialsymbol
  * Får inte vara ett vanligt eller komprometterat lösenord



### Kör installationsscriptet

Coolify erbjuder ett snabbt, automatiserat installationsscript. För att säkra installationen använder vi miljövariabler för att fördefiniera root-adminkontot. Det förhindrar obehörig åtkomst medan setupen pågår.

Kör följande kommando och byt ut användarnamn, e-post och lösenord mot dina egna säkra uppgifter:

```bash
env ROOT_USERNAME=zaphosting ROOT_USER_EMAIL=info@zap-hosting.com ROOT_USER_PASSWORD=zaphosting bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```
:::note[Open Source]
Du hittar installationsscriptets källkod i [Officiella Coolify-repot](https://github.com/coollabsio/coolify/blob/v4.x/scripts/install.sh)
:::

Scriptet installerar automatiskt Docker, sätter upp nödvändiga nätverk och konfigurerar Coolify-containrarna. Det kan ta några minuter beroende på din servers hårdvara.

![img](https://screensaver01.zap-hosting.com/index.php/s/Zx5DXzEH2MmrkrX/preview)



### Komma åt Coolify

När installationen är klar är nästa steg att öppna dashboarden i webbläsaren. Skriv in din servers IP följt av port 8000: `http://[din_server_ip]:8000`

Eftersom du redan angav dina uppgifter via installationskommandot ser du direkt inloggningsskärmen istället för setup-wizarden.

Logga in med den e-post och det lösenord du använde i kommandot.



### Ställa in DNS-poster

Efter inloggning i Coolify-dashboarden bör du direkt koppla en egen domän. Att nå Coolify via IP-adressen (`http://[din_server_ip]:8000`) är osäkert.

Genom att koppla en domän kan Coolify automatiskt skapa gratis SSL-certifikat för dashboarden och alla framtida appar.

Gå till DNS-hanteringen hos din domänleverantör och lägg till två nya `A`-poster som pekar på din server. Om din domän är registrerad hos ZAP-Hosting kan du följa vår guide [Domänposter](domain-records.md) för att enkelt lägga till dessa:

| Namn / Host | Typ | Värde              | TTL           |
| ----------- | ---- | ------------------ | ------------- |
| `@`         | A    | `[din_server_ip]`  | Auto / Lägst  |
| `*`         | A    | `[din_server_ip]`  | Auto / Lägst  |

:::info[DNS-routing]
*   `@`-posten låter Coolify använda rot-domänen
*   `*` (wildcard)-posten låter Coolify automatiskt routa nya subdomäner (t.ex. `api.[din_domän]`) utan att du behöver lägga till DNS-poster för varje projekt.
:::



### Konfigurera instansdomän

För att säkra din Coolify-instans med SSL-certifikat bör du koppla en domän till den. Gå till **Settings** i vänstermenyn och hitta fältet **Instance Domain**. Skriv in din domän med prefixet `https://` (t.ex. `https://coolify.[din_domän]`). Klicka på **Save** för att spara.

![img](https://screensaver01.zap-hosting.com/index.php/s/jYW63sF9k5sZez3/preview)



## Deploya din första app

Sen kan du gå till fliken **Projects** och börja deploya din första app!

Klicka på **+ Add Resource** för att lägga till ett publikt repo eller en Docker Compose-fil, eller välj någon av de många förkonfigurerade tjänsterna från one-click-mallbiblioteket. Din Coolify-installation är redo att köra!

![img](https://screensaver01.zap-hosting.com/index.php/s/nEf9XBDrfypijE7/preview)



## Avslutning och fler resurser

Grattis! Du har nu installerat Coolify på din server och kan börja deploya dina projekt direkt. Vi rekommenderar också att du kollar in följande resurser som kan ge dig extra hjälp och tips under din serverkonfiguration.

- [coolify.io](https://coolify.io/) – Officiell webbplats
- [coolify.io/docs](https://coolify.io/docs/) – Coolify-dokumentation

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />