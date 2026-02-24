---
id: dedicated-linux-certbot
title: "Installera Certbot på en Linux-server - Säkra dina webbplatser med Let's Encrypt SSL"
description: "Upptäck hur du säkrar din webbplats med gratis SSL-certifikat med Certbot och Let's Encrypt för säker dataöverföring → Läs mer nu"
sidebar_label: Installera Certbot
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

SSL-certifikat är en viktig del av internet och ser till att data kan skickas säkert mellan klient och server. I den här guiden går vi igenom hur du sätter upp det open-source-verktyget [**Certbot**](https://certbot.eff.org/) för att begära gratis SSL-certifikat från den ideella certifikatutfärdaren **Let's Encrypt**.

## Förberedelser

För att använda Certbot behöver du en Linux-server och en **domän** som du äger. Du måste ha tillgång till domänens DNS-inställningar och du **måste** skapa en `A` DNS-post som pekar på IP-adressen till din __Linux-server__ för varje rootdomän eller subdomän du vill använda.

Certbot har även extra plugins som gör det enkelt att "one-click" installera ett certifikat för en domän som fungerar med olika webbservrar som Nginx eller Apache. Vi rekommenderar Nginx eftersom det är en snabb och populär open-source webbserver. Kolla in vår [Linux reverse proxy](dedicated-linux-proxy.md)-guide för hjälp med att sätta upp detta.

## Installation

Börja med att installera det open-source-paketet [**Certbot**](https://certbot.eff.org/) som du kommer använda för att begära gratis SSL-certifikat från **Let's Encrypt**.

```
sudo apt install certbot
```

När Certbot är installerat kan du börja begära certifikat för dina domäner. Let's Encrypt och Certbot erbjuder flera ACME-utmaningar för att verifiera domänägarskap.

Vi rekommenderar starkt att använda standardmetoden **HTTP-01** eftersom den tillåter automatisk förnyelse. Om du stöter på problem kan du istället prova **DNS-01**-metoden som är manuell och inte stödjer automatisk förnyelse eftersom den verifierar via en **TXT** DNS-post.

:::tip Använd Webbserver-Plugins
Om du kör en webbserver som Nginx, Apache eller en egen lösning rekommenderar vi att du kollar in avsnittet **Webbserver-Plugins** nedan. Där visar vi hur du använder Certbots plugins för en "one-click"-installation och kan begära certifikat utan att behöva stänga ner webbservern.
:::

### HTTP-01-utmaning

Med Certbot installerat kan du nu begära certifikat för dina domäner. I det här exemplet använder vi standalone-läget, vilket innebär att Certbot startar en temporär webbserver för att utföra verifieringen. Det betyder att du måste öppna port 80 i din brandvägg och inte ha någon annan webbserver eller tjänst som körs på port 80, så att den temporära webbservern kan starta och utmaningen kan hämtas (därav `HTTP` i utmaningens namn).

I kommandot nedan använder du parametern `--standalone` för att tala om för Certbot att du vill använda den temporära webbservern.

```
# För rootdomäner
certbot certonly --standalone -d [din_rootdomän] -d www.[din_rootdomän]

# För subdomäner
certbot certonly --standalone -d [din_domän]

# Interaktiv setup
certbot certonly --standalone
```

När kommandot körs kan du behöva följa en första interaktiv setup där du anger en e-postadress för certifikatskommunikation, eventuellt går med i en mailinglista och accepterar villkoren.

Certbot genererar nu en ACME-utmaning och hostar den via den temporära webbservern. Let's Encrypts servrar försöker sedan hämta denna från din server och vid lyckad verifiering skapas certifikaten och sparas i `/etc/letsencrypt/live/[din_domän]`.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

Du kan nu använda SSL-certifikaten var du än behöver genom att ange den lokala sökvägen till certifikaten.

### TXT DNS-post

Om du har problem med att verifiera din domän via **HTTP-01**-metoden kan du istället prova **DNS-01**-metoden som innebär att du skapar en **TXT** DNS-post med ett värde som Let's Encrypt ger dig.

Som nämnts tidigare stödjer inte denna metod automatisk förnyelse om du inte sätter upp egen infrastruktur för det. Därför rekommenderar vi att använda **HTTP-01**-metoden när det är möjligt.

I kommandot nedan använder du parametern `--preferred-challenges` för att tala om för Certbot att du vill använda `DNS-01`-metoden.

```
# För rootdomäner
certbot certonly --preferred-challenges dns-01 -d [din_rootdomän] -d www.[din_rootdomän] --manual -m [din_rootdomän] -m www.[din_rootdomän]

# För subdomäner
certbot certonly --preferred-challenges dns-01 -d [din_domän] --manual -m [din_domän]

# Interaktiv setup
certbot certonly --preferred-challenges dns-01
```

När kommandot körs kan du behöva följa en första interaktiv setup där du anger en e-postadress för certifikatskommunikation, eventuellt går med i en mailinglista och accepterar villkoren.

Certbot ger dig nu instruktioner för att skapa en **TXT** DNS-post med ett specifikt värde. Målet är oftast `_acme-challenge.` följt av din domän (i det här exemplet `_acme-challenge.zapdocs.example.com`) och värdet du ska sätta får du i konsolen.

När du skapat posten trycker du på enter för att fortsätta. Om allt är korrekt och propagationen klar, skapas certifikaten och sparas i `/etc/letsencrypt/live/[din_domän]`.

:::note
Ha tålamod då DNS-ändringar kan ta lite tid att sprida sig. Det brukar gå snabbt, men ibland kan det ta längre tid.
:::

Du kan nu använda SSL-certifikaten var du än behöver genom att ange den lokala sökvägen till certifikaten.

## Webbserver-Plugins

Certbot har flera olika webbserver-plugins som gör det ännu enklare att hantera certifikat eftersom de automatiskt ändrar relevanta serverblock åt dig. För att använda ett plugin lägger du bara till rätt parameter i ditt `certbot`-kommando.

Båda metoderna använder **HTTP-01**-utmaningen och fungerar i princip likadant. När ett plugin används söker Certbot först efter det serverblock som innehåller den begärda domänen som `server_name`. När det hittas genererar Certbot en ACME-utmaning och lägger till ett temporärt `location /.well-known/acme-challenge/...`-block i serverblockets konfiguration.

Let's Encrypts servrar försöker sedan hämta detta från din server och vid lyckad verifiering genereras certifikatet och serverblockets konfiguration för vald webbserver ändras automatiskt för att använda HTTPS (port 443) och lägga till sökvägar till det nya certifikatet.

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Nginx-plugin

Innan du använder pluginet, se till att det är installerat.

```
sudo apt install python3-certbot-nginx
```

För att använda Nginx-pluginet ska du lägga till parametern `--nginx` i ditt kommando, så här:

```
# För rootdomäner
certbot --nginx -d [din_rootdomän] -d www.[din_rootdomän]

# För subdomäner
certbot --nginx -d [din_domän]

# Interaktiv setup
certbot --nginx
```

:::tip
Vill du stänga av automatisk "one-click" serverblock-justering från Certbot kan du lägga till `certonly` i kommandot, t.ex. `certbot certonly`.
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Apache-plugin

Innan du använder pluginet, se till att det är installerat.

```
sudo apt install python3-certbot-apache
```

För att använda Apache-pluginet ska du lägga till parametern `--apache` i ditt kommando, så här:

```
# För rootdomäner
certbot --apache -d [din_rootdomän] -d www.[din_rootdomän]

# För subdomäner
certbot --apache -d [din_domän]

# Interaktiv setup
certbot --apache
```

:::tip
Vill du stänga av automatisk "one-click" serverblock-justering från Certbot kan du lägga till `certonly` i kommandot, t.ex. `certbot certonly`.
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Webroot-plugin

Om du kör en egen lokal webbserver som inte använder traditionell mjukvara kan du vilja använda webroot-metoden för att använda din egen webbserver utan att behöva stänga ner den.

För att använda Webroot-pluginet ska du lägga till parametern `--webroot` i ditt kommando. Du måste också ange `-w [din_webbserver_sökväg]` (kort för `--webroot-path`), vilket är sökvägen till din webbservers toppkatalog.

```
# För rootdomäner
certbot --webroot -w [din_webbserver_sökväg] -d [din_rootdomän] -d www.[din_rootdomän]

# För subdomäner
certbot --webroot -w [din_webbserver_sökväg] -d [din_domän]

# Interaktiv setup
certbot --webroot -w [din_webbserver_sökväg]
```

:::tip
En vanlig webroot-plats är `/var/www/html`. Du kan även använda detta för webbservrar som Nginx eller Apache om du vill använda webbservern utan att Certbot automatiskt ändrar serverblocken som de inbyggda pluginen gör.
:::

</TabItem>
</Tabs>

## Automatisk förnyelse

I de flesta fall ska Certbot automatiskt sätta upp förnyelse av certifikat åt dig via cronjob och/eller systemd-timer. Du kan kontrollera detta genom att köra följande kommando som använder `--dry-run` för att testa processen.

```
certbot renew --dry-run
```

:::tip
Som nämnt tidigare stödjer inte **DNS-01**-metoden automatisk förnyelse via Certbot om du inte sätter upp egen infrastruktur för det. Därför rekommenderar vi att använda **HTTP-01**-metoden.
:::

Detta bör lyckas om allt är som det ska. Vill du se eller ändra inställningar för automatisk förnyelse hittar du kommandot i någon av följande platser: `/etc/crontab/`, `/etc/cron.*/*` eller via `systemctl list-timers`.

### Manuell cronjob-setup

Om automatisk förnyelse av någon anledning inte är satt upp kan du lägga till det själv via cronjob. Öppna crontab med `crontab -e`. Om det är första gången kan du bli ombedd att välja en editor. Välj första alternativet, som bör vara `/bin/nano`.

När filen är öppen i nano, lägg till följande rad för att köra förnyelsen varje dag kl 06:00 lokal tid.

```
0 6 * * * certbot renew
```

Spara filen och avsluta nano med `CTRL + X`, följt av `Y` för att bekräfta och sedan `ENTER`.

## Avslutning

Du har nu framgångsrikt satt upp Certbot för dina domäner via flera metoder, inklusive standalone, webroot eller via något av pluginen, och gett din webbplats säker dataöverföring via HTTPS. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂