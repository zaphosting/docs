---
id: server-truenas-scale
title: "Installera TrueNAS SCALE på en Server - Bygg ditt egna NAS-system"
description: "Upptäck hur du installerar TrueNAS SCALE på din dedikerade server för nätverksansluten lagring och filhantering → Läs mer nu"
sidebar_label: Installera TrueNAS SCALE
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

TrueNAS SCALE är en öppen källkods-lagringsplattform som låter dig bygga ett nätverksanslutet lagringssystem (NAS) på en server. I den här guiden installerar du TrueNAS SCALE på en Dedikerad Server och konfigurerar den initiala setupen, inklusive lagringspooler, användarkonton och SMB-fildelning.

:::danger VPS Ej Lämpligt
Våra VPS-produkter är inte lämpliga eftersom de bara innehåller en virtuell disk. Du kan installera TrueNAS SCALE på en VPS, men du kan inte skapa lagringspooler eftersom hela disken används för operativsystemet.

För att sätta upp TrueNAS SCALE krävs en [dedikerad serverkonfiguration](https://zap-hosting.com/en/dedicated-server-hosting/) med minst två hårddiskar.
 :::

<InlineVoucher />

## Förberedelser

Innan du börjar installationen, se till att du uppfyller följande minimikrav:

| Hårdvara  | Minimum     | ZAP-Hosting Rekommendation |
| --------- | ----------- | -------------------------- |
| CPU       | 2 CPU-kärnor| 8 vCPU-kärnor              |
| RAM       | 8 GB        | 16 GB                      |
| Diskutrymme | 16 GB OS  | Beroende på användningsområde |

<InlineServiceLink />

Gå till den officiella [TrueNAS-webbplatsen](https://www.truenas.com/download-truenas-scale/) och ladda ner den senaste stabila versionen. Du kan antingen ladda upp ISO-filen till en publikt tillgänglig plats (din egen webbserver eller molnlagring) eller behålla den lokalt på din dator för direkt montering.

:::tip[ISO-hosting]
Om du planerar att montera via URL i den fjärrstyrda konsolen, se till att din ISO-fil-URL slutar med `.iso` och är publikt tillgänglig utan autentisering.
:::

**Montera ISO-filen**

Logga in på din [ZAP-Hosting Dashboard](https://zap-hosting.com/en/customer/) och navigera till din Dedikerade Server i tjänstlistan. Öppna sedan serverhanteringssidan och klicka på **Aktivera iLO** för att komma åt serverhanteringsgränssnittet.

![img](https://screensaver01.zap-hosting.com/index.php/s/or8HJ8e3QeAJm6z/preview)

I iLO-gränssnittet hittar du alternativet **Integrated Remote Console**. Välj din föredragna konsoltyp och starta den. Ett nytt fönster öppnas med direkt åtkomst till serverns skärm.

I den fjärrstyrda konsolen klickar du på **CD-ikonen** högst upp och väljer **CD/DVD**. Välj **Scripted Media URL** om du laddat upp ISO:n online och ange dess direkta URL. Annars väljer du **Local .iso File** för att bläddra på din dator. ISO:n monteras då till den virtuella CD/DVD-enheten.

![img](https://screensaver01.zap-hosting.com/index.php/s/F98tgjsqq2S6nqp/preview)

:::tip Alternativa metoder
För andra metoder att montera ISO, inklusive via Virtual Media-gränssnittet, se [Own ISO-guiden](dedicated-iso.md).
:::

När ISO:n är monterad, använd **Power**-menyn i konsolen för att starta om. Välj **Reset** så startar servern om och bootar från TrueNAS SCALE ISO:n.

## Installation

Följ konsolen när systemet startar. TrueNAS SCALE installationsskärm visas och installatören laddas automatiskt. Det tar några minuter att ladda installationsmiljön.

![img](https://screensaver01.zap-hosting.com/index.php/s/TJwMWFZeorwGryn/preview)

Installatören visar **Choose destination media** tillsammans med dina tillgängliga diskar. Navigera med **piltangenterna** och välj vilken disk som ska användas för OS. Välj den minsta disken för OS-installationen (hela disken dedikeras till TrueNAS SCALE). Tryck på **Space** för att markera den och sedan **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z5o7TFye6BPor7Q/preview)

En varning visas som säger att installationen kommer att **radera** allt på den valda disken. Navigera till **Yes** med piltangenterna och tryck **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/LS2mJBQ2deawKFp/preview)

Nästa steg frågar om autentiseringsinställning. **Alternativ 1** sätter lösenordet nu, medan **Alternativ 2** låter dig konfigurera det senare via webbgränssnittet. Vi använder **Alternativ 2: Konfigurera via Web UI** för mer flexibilitet. Välj det och tryck **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oPpMLCZ5nPePdLW/preview)

Installatören frågar **"Allow EFI boot?"**. Välj **Yes** (rekommenderas) och tryck **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/We8tqgctQrjz5oS/preview)

Installationen startar och tar vanligtvis 15-20 minuter. Följ framstegen på skärmen när filer kopieras och systemet konfigureras.

![img](https://screensaver01.zap-hosting.com/index.php/s/BAykMjmxDn76sJB/preview)

När det är klart ser du meddelandet **"The TrueNAS installation is successful"**. Tryck **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/GmNwHaTfY6KHSbN/preview)

Innan omstart, **avmontera ISO:n** annars startar du om till installatören igen. Klicka på **DVD-ikonen**, välj **CD/DVD** och klicka på **Eject Media**. Starta om via Power-menyn eller låt servern starta om automatiskt.

<InlineServiceLink />

## Konfiguration

Efter installationen måste du konfigurera vilken disk servern ska boota från. TrueNAS SCALE är installerat, men servern måste instrueras att boota från rätt disk via RAID-kontrollerns ROM-konfiguration.

:::info[Kritiskt steg]
Efter installationen måste du konfigurera boot-volymen i RAID-kontrollerns ROM för att säkerställa att servern startar från rätt disk.
:::

**Ställa in Boot-disk i ROM**

Följ konsolen under uppstart. När meddelandet **"Press F8 for ROM Configuration for Arrays Utility"** visas, tryck omedelbart på **F8**.

![img](https://screensaver01.zap-hosting.com/index.php/s/BCosyXCBnZJjeiX/preview)

ROM-konfigurationsverktyget öppnas. Navigera till **Select Boot Volume** med piltangenterna och tryck **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw4netxJPkX3354/preview)

Dina tillgängliga diskar listas här. Navigera till disken där TrueNAS SCALE är installerat och tryck **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7mPgXFMqn9Q475Z/preview)

Med disken vald, tryck **F8** för att spara. Bekräfta om du blir tillfrågad och avsluta verktyget. Servern startar nu in i TrueNAS SCALE.

![img](https://screensaver01.zap-hosting.com/index.php/s/YEFokMkz3RSB625/preview)

**Åtkomst till Webbgränssnittet**

Efter första uppstarten visar TrueNAS SCALE-konsolen webbadressen för Web UI: `http://[din_server_ip]`. Skriv ner denna IP-adress eftersom du behöver den för att komma åt webbgränssnittet.

![img](https://screensaver01.zap-hosting.com/index.php/s/8JwikNGRTz4La3y/preview)

:::tip Automatisk nätverkskonfiguration
TrueNAS SCALE konfigurerar vanligtvis nätverket automatiskt via DHCP. Hoppa över detta om du inte har flera IP-adresser eller behöver en specifik statisk IP.
:::

För manuell nätverkskonfiguration, välj **1) Configure Network Interfaces** i konsolmenyn. Välj din primära nätverksgränssnitt (t.ex. `enp0s3` eller `eth0`), välj **Configure IPv4**, sedan **Static**. Ange din IP-adress, nätmask och gateway (finns i din ZAP-Hosting Dashboard).

Öppna en webbläsare och gå till `http://[din_server_ip]` med IP-adressen från konsolen.

Eftersom vi valde **Configure using Web UI** tidigare, är det här du sätter lösenordet. Inloggningssidan visar användarnamnet `truenas_admin`. Ange ett starkt lösenord, bekräfta det och klicka på **Submit**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dZrpdZYQwKBFksJ/preview)

:::danger Säkerhet Viktigt
Välj ett starkt och unikt lösenord för ditt TrueNAS admin-konto. Detta konto har full systemåtkomst.
:::

Efter inloggning visas dashboarden med systeminfo, nätverksstatus, lagringspooler, tjänster och varningar. Du har nu konfigurerat TrueNAS SCALE och är redo att sätta upp lagring.

![img](https://screensaver01.zap-hosting.com/index.php/s/fYkDpDfpqwTT5yY/preview)

**Skapa lagringspooler**

Klicka på **Storage** i vänstermenyn och sedan på knappen **Create Pool**.

![img](https://screensaver01.zap-hosting.com/index.php/s/fFeSjm3YnnPfxq5/preview)

Börja med att ge poolen ett namn, t.ex. `Disk`, `tank` eller något som passar dig. Klicka på **Next** när du är redo.

![img](https://screensaver01.zap-hosting.com/index.php/s/23MNpcrHmmGz2L2/preview)

I avsnittet **Data**, öppna dropdown-menyn **Layout** och välj den konfiguration som passar dina behov:

- **Stripe**: Maximal användbar kapacitet men ingen redundans
- **Mirror**: Sparar identiska data på två diskar, ger redundans men minskar användbar kapacitet
- **RAIDZ1**: Ger en disk i redundans
- **RAIDZ2**: Ger två diskar i redundans
- **RAIDZ3**: Ger tre diskar i redundans

![img](https://screensaver01.zap-hosting.com/index.php/s/wKHy7f8xoifEXB6/preview)

Under **Disk Selection** listas alla dina lagringsdiskar. Klicka på de du vill ha med i poolen så flyttas de till konfigurationsområdet som visar uppskattad kapacitet.

:::info Boot-disk Ej Tillgänglig
Installationsdisken visas inte här eftersom den är reserverad för operativsystemet.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/McEcGQSBzHaZNNc/preview)

Lämna valfria inställningar som standard och klicka på **Next**. Granskningssidan visar din konfiguration inklusive namn, layout, diskar och kapacitet. Kontrollera och klicka på **Create Pool** för att bekräfta.

![img](https://screensaver01.zap-hosting.com/index.php/s/RDitijsoGWtEoT5/preview)

**Organisera med datasets**

När lagringspoolen är skapad kan du organisera dina data med datasets. Datasets är logiska underavdelningar av din lagringspool som hjälper dig separera olika datatyper. Klicka på **Datasets** i sidomenyn. Din nya pool visas där (t.ex. "Disk").

![img](https://screensaver01.zap-hosting.com/index.php/s/oZPctpbLcCESWWt/preview)

Klicka på **Add Dataset**. Poolen är automatiskt vald som förälder. Ge datasetet ett namn som `documents`, `media` eller `backups`. Lämna avancerade inställningar som standard om du inte har särskilda krav. Klicka på **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/JxPmPW53zke9NQL/preview)

**Skapa användarkonton**

Klicka på **Credentials** i sidomenyn och sedan **Add**. Välj ett användarnamn (t.ex. `john` eller `fileuser`), lägg till fullständigt namn och sätt ett lösenord. Lämna primär grupp, hemkatalog och shell som standard. Scrolla ner och aktivera **SMB**-alternativet för Windows-åtkomst.

Anpassa behörigheter efter dina säkerhetsbehov. För enkel fildelning räcker standardinställningar med SMB aktiverat. Klicka på **Submit** när du är klar.

:::danger Viktigt för SMB-åtkomst
Använd **inte** `root` eller `truenas_admin` för fildelning. Dessa systemkonton fungerar inte med SMB. Skapa dedikerade användare istället.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/3SLGk75E3KP57ZS/preview)

**Sätta upp SMB-delningar**

Klicka på **Shares** i sidomenyn. Tre alternativ visas: Windows (SMB) för Windows/macOS/Linux, Unix (NFS) för Linux/Unix och Block (iSCSI) för blocklagring. Vi sätter upp SMB. Klicka på **Add** under Windows (SMB) Shares.

![img](https://screensaver01.zap-hosting.com/index.php/s/fgWcqjyxXLD2dRy/preview)

Dialogrutan **Add SMB** öppnas. För **Path**, bläddra till ditt dataset (t.ex. `/mnt/Disk/documents`). För **Name**, ange något som `documents` (användare ser detta namn i nätverket). **Purpose** kan oftast lämnas som standard. Lägg till en beskrivning om du vill. Avancerade inställningar finns (ACL och annat), men låt gäståtkomst vara avstängd för säkerhet. Klicka på **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/D2xQYHQfbmsKRwT/preview)

Efter att ha skapat delningen visas en popup som säger att **SMB-tjänsten inte körs**. Klicka på **Start Service**. Markera även **Start Automatically** så att tjänsten startar vid boot. SMB-delningen är nu tillgänglig i nätverket.

![img](https://screensaver01.zap-hosting.com/index.php/s/KQH5zoA7FYWaXMa/preview)

För NFS-delningar med Linux/Unix-system, gå till **Shares** → **Unix (NFS) Shares** och klicka på **Add**. Välj dataset, konfigurera nätverk och behörigheter, aktivera NFS när du blir tillfrågad och spara.

<InlineServiceLink />

## Åtkomst till din delning

För att komma åt din delning exempelvis från din Windows-PC, öppna **File Explorer**. Högerklicka på **Den här datorn** (eller **Min dator**) och välj **Lägg till en nätverksplats**.

![img](https://screensaver01.zap-hosting.com/index.php/s/NDJWjdpC6ZCq6c3/preview)

**Add Network Location Wizard** öppnas. Klicka på **Nästa** för att fortsätta.

![img](https://screensaver01.zap-hosting.com/index.php/s/7KXPxNQJy4qsiBy/preview)

När du ombeds ange plats, använd formatet: `\\[din_server_ip]\[share_name]`. Exempel: `\\192.168.1.100\documents`. Byt ut `[din_server_ip]` mot din TrueNAS-serverns IP och `[share_name]` mot namnet du gav SMB-delningen. Klicka på **Nästa**.

![img](https://screensaver01.zap-hosting.com/index.php/s/2yaoWfiCTX6XLAz/preview)

Ange **användarnamn** och **lösenord** för den användare du skapade i TrueNAS. Använd inte `root` eller `truenas_admin` då de inte fungerar med SMB. Markera **Kom ihåg mina uppgifter** för att spara dem till nästa gång. Klicka på **OK**.

![img](https://screensaver01.zap-hosting.com/index.php/s/4nFReNbPLkHfmMp/preview)

TrueNAS-delningen är nu tillgänglig. Bläddra bland filer, skapa mappar och kopiera data precis som med vilken nätverksenhet som helst. Du har framgångsrikt kopplat din Windows-PC till TrueNAS-delningen.

![img](https://screensaver01.zap-hosting.com/index.php/s/nBqrkmkCYJntwW2/preview)

:::tip Snabb åtkomst
För enklare åtkomst, använd **Map network drive** istället för **Add a network location**. Delningen visas då som en enhetsbokstav (t.ex. `Z:`) i File Explorer.
:::

:::info Åtkomst från macOS eller Linux
**macOS**: I Finder, tryck `Cmd+K` och ange `smb://[din_server_ip]/[share_name]`

**Linux**: Använd din filhanterares "Connect to Server"-funktion med `smb://[din_server_ip]/[share_name]`, eller montera via terminal med `mount.cifs`
:::

## Avslutning

Grattis, du har nu installerat och konfigurerat TrueNAS SCALE på din server! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂