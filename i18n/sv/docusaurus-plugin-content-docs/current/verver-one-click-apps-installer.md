---
id: verver-one-click-apps-installer
title: "VPS: One Click Apps Installer"
description: "Deploy apps with the VPS One Click Apps Installer, manage projects through the web interface, and use Coolify for advanced app management -> Learn more now"
sidebar_label: One Click App Installer
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

One Click Apps Installer låter dig bläddra i ett omfattande appkatalog och distribuera appar direkt från din VPS webbgränssnitt. I den här guiden lär du dig hur du förbereder din server, väljer rätt installationstyp, installerar och hanterar appar samt använder avancerade inställningar och felsökningsverktyg vid behov.

<InlineVoucher />

## Preparation

Innan du använder One Click Apps Installer måste din VPS uppfylla minimikraven och använda ett stöds operativsystem.

:::info Minimala krav
Appfunktionen kräver att din VPS är online och konfigurerad med tillräckliga resurser för att pålitligt köra både plattformstjänsterna och dina installerade appar.
:::

| Krav | Minimum | Rekommenderat |
| --- | --- | --- |
| Serverstatus | Online | Online |
| Lagring | 30 GB | 50 GB |
| RAM | 2 GB | 4 GB |
| CPU | 2 kärnor | 4 kärnor |
| Operativsystem | Debian eller Ubuntu LTS | Debian 13 - EN - 64bit |

:::caution Rekommenderat med färskt operativsystem
Det rekommenderas starkt att sätta upp appfunktionen på en färsk installation av operativsystemet. Detta hjälper till att undvika konflikter med befintliga tjänster, upptagna portar, Docker-konfigurationer eller anpassade inställningar som redan finns på servern.
:::

Om du behöver installera om din VPS innan du fortsätter, använd en färsk stödd Debian- eller Ubuntu LTS-image från din VPS-hanteringspanel.

## Accessing the One Click Apps Installer

Öppna din VPS i ZAP-Hostings webbgränssnitt och hitta avsnittet One Click Apps. Där kan du starta den initiala installationen och senare återvända för att hantera alla appar som är installerade på servern.

Första gången du öppnar den här funktionen måste du välja hur plattformen ska installeras på din VPS.

## Choosing an Installation Type

Du kan välja mellan en fullständig installation och en nod-endast installation. Rätt alternativ beror på om denna VPS ska vara värd för både hanteringspanelen och apparna, eller bara fungera som en länkad nod för en annan panel.

### Full Installation

Välj **Full Installation** om du vill sätta upp servern med panelen och servern själv som en nod. Detta är det rekommenderade alternativet för nya användare och för de flesta standardinstallationer.

Med denna metod kan du:

- distribuera appar från appkatalogen
- hantera projekt och miljöer
- organisera alla appar på ett ställe
- använda de integrerade webbgränssnittets hanteringsverktyg
- få tillgång till den avancerade panelen senare vid behov

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Rekommenderas för de flesta användare
Om det är första gången du använder appfunktionen, välj full installation. Det ger den enklaste uppsättningen och fullständig hantering direkt från ZAP-Hostings webbgränssnitt.
:::

### Node-only Installation

Välj **Node-only Installation** om du vill att denna VPS endast ska fungera som en nod. Du kan då länka den till en annan VPS-server eller till en extern panelinstans.

Detta alternativ är användbart om du vill:

- skala över flera VPS-system
- centralisera hanteringen på en panel
- länka denna server till en befintlig installation
- utöka en befintlig multi-nod setup

:::note Avancerat installationsalternativ
Node-only installation är avsedd för användare som redan har en annan panelinstans tillgänglig eller som vill koppla denna server till en extern miljö.
:::

## Installing the Apps Feature

Efter att ha valt installationstypen startar du installationen från webbgränssnittet. Den initiala installationen tar vanligtvis bara några minuter.

Under processen distribueras plattformstjänsterna som krävs för One Click Apps-funktionen till din VPS. När det är klart blir appkatalogen och hanteringssektionerna tillgängliga i webbgränssnittet.

:::info Installationsbeteende
Exakta detaljer om installationsförloppet kan variera beroende på din VPS prestanda, operativsystemets tillstånd och nätverksförhållanden. Om installationen inte slutförs framgångsrikt, se felsökningsavsnittet senare i guiden.
:::

## Browsing the App Catalogue

När installationen är klar kan du öppna appkatalogen och bläddra bland tillgängliga appar. Katalogen innehåller mer än 300 färdiga appar för distribution och stöder filtrering för att snabbt hitta rätt app.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Searching and Filtering Apps

I katalogen kan du söka efter appar med namn och filtrera efter kategori. Detta hjälper dig att begränsa alla appar som finns i appbutiksgränssnittet och hitta rätt distributionsmål för ditt projekt.

Typiska åtgärder inkluderar:

- söka efter appnamn
- filtrera efter kategori
- granska tillgängliga appposter
- välja en app för distribution

Detta arbetsflöde är särskilt användbart om du hanterar många appnedladdningsmål eller jämför flera tjänster innan installation.

### Starting an App Installation

Efter att ha valt en app från katalogen startar du installationen via webbgränssnittet. Beroende på appen kan du behöva ange värden som:

- `[your_project_name]`
- `[your_environment_name]`
- `[your_domain]`
- `[your_app_name]`

Dessa platshållare representerar värden specifika för din distribution. Till exempel bör `[your_domain]` ersättas med den domän du vill använda för appen.

:::tip Projekt och miljöer
Använd projekt och miljöer för att hålla din distribution organiserad. Detta är särskilt hjälpsamt när du hostar flera appar, testar versioner eller separerar produktions- och stagingtjänster.
:::

## Managing Installed Apps

Efter distribution listas dina installerade appar i hanteringssektionen i webbgränssnittet. Härifrån kan du övervaka och kontrollera dina tjänster utan att behöva arbeta manuellt med de underliggande containrarna.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Available Management Actions

Sektionen för installerade appar låter dig utföra vanliga livscykelåtgärder direkt från webbgränssnittet.

| Åtgärd | Syfte |
| --- | --- |
| Start | Startar en stoppad app |
| Stop | Stoppar en körande app |
| Check logs | Öppnar apploggar för felsökning |
| Reinstall | Installerar om appen |

Dessa verktyg gör det enklare att hantera alla appar från ett ställe, särskilt om du vill ha enkel webb-baserad kontroll istället för manuell kommandoradshantering.

### Organizing Projects and Environments

Projekt och miljöer hjälper dig att strukturera dina distributioner tydligt. Du kan använda dem för att separera:

- personliga och produktionsappar
- test- och live-miljöer
- flera kund- eller teamdistributioner
- olika stackar på samma VPS

Denna organisering blir allt viktigare när din samling av appbutiksappar växer och du hanterar fler tjänster på en eller flera noder.

## Domains, Cloud Access, and SSL

One Click Apps-funktionen stöder anpassade domäner och ZAP Cloud-integration. Detta gör att du kan exponera appar säkert och tillhandahålla SSL-certifikat för dina distributioner.

:::info Domän- och SSL-stöd
Du kan använda anpassade domäner för dina appar och dra nytta av SSL-certifikatutfärdande där plattformsuppsättningen stöder det.
:::

När du tilldelar en domän, se till att dina DNS-poster pekar på `[your_server_ip]`. Om din domän inte är korrekt konfigurerad kan appen bli otillgänglig från internet.

| Värde | Beskrivning |
| --- | --- |
| `[your_domain]` | Domänen eller subdomänen som tilldelats din app |
| `[your_server_ip]` | Den publika IP-adressen för din VPS |

:::caution DNS måste peka på din VPS
Om DNS för `[your_domain]` inte pekar på `[your_server_ip]` kan domänvalidering och appåtkomst misslyckas.
:::

## Using Advanced Settings

Avancerade användare kan få tillgång till ytterligare funktionalitet via den externa panelen som finns i avsnittet för avancerade inställningar.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

Detta kan vara användbart om du behöver djupare anpassning, utökad distributionskontroll eller direkt åtkomst till funktioner utöver standardwebbgränssnittet.

### Important Support Limitation

:::caution Supportens omfattning för avancerad panelanvändning
Avancerade användare är välkomna att använda den externa Coolify-panelen för ytterligare anpassning och funktionalitet. Supporten är dock begränsad till ZAP-Hostings webbgränssnitt. Om du gör ändringar utanför webbgränssnittet kan hjälp med dessa anpassningar vara otillgänglig.
:::

### When to Use the Advanced Panel

Du kan vilja använda den avancerade panelen om du behöver:

- mer detaljerad anpassning av distributionen
- direkt nodlänkning
- avancerad appkonfiguration
- panelhantering utöver det förenklade gränssnittet

Om du förlorar åtkomst eller integrationen slutar svara, använd felsökningsverktygen nedan innan du gör manuella ändringar.

## Linking Nodes

Om du valde nod-endast installation kan du länka denna VPS till en annan VPS-server eller en extern panelinstans. Detta låter dig skala din infrastruktur och hantera flera noder från en enda plats.

Nodlänkning är användbart när du vill:

- distribuera appar över flera VPS-system
- centralisera hanteringen
- utöka kapaciteten utan att skapa isolerade distributioner
- koppla till en extern panelmiljö

:::note Extern panellänkning
Du kan länka din nod till en annan VPS eller en extern panelinstans. Exakta länkdetaljer beror på den målmiljö som redan används.
:::

## Troubleshooting Degraded Status

Om webbgränssnittet visar ett degraderat status betyder det att plattformen inte kan kontakta eller hämta data från instansen som driver One Click Apps-funktionen. Följ felsökningsstegen i kronologisk ordning.

### Status Indicators

Felsökningspopupen kan visa indikatorer som följande:

| Status | Betydelse |
| --- | --- |
| Coolify Status: Active | Paneltjänsten verkar vara igång |
| API Status: Accessible | API:et är för närvarande tillgängligt |
| Service Status: Online | Din VPS är online |

Om en eller flera delar inte fungerar korrekt, fortsätt med stegen nedan.

### Step 1: Confirm the VPS Is Online

Först, kontrollera att din VPS-tjänst är online i ZAP-Hostings webbgränssnitt. Om servern är offline kan inte appplattformen fungera.

### Step 2: Refresh the Status

Använd åtgärden **Refresh Status** för att köra hälsokontrollen igen med den senaste datan. Detta kan lösa tillfälliga intermittentproblem.

:::tip Tillfälliga anslutningsproblem
Ett degraderat tillstånd kan ibland orsakas av ett kortvarigt kommunikationsproblem. Att uppdatera status är den snabbaste första kontrollen.
:::

### Step 3: Restart Docker

Om status fortfarande är degraderad, använd åtgärden **Restart Docker**. Detta tvingar plattformsinstansen att starta om. Efter ett lyckat svar, vänta `1-2 minuter` och uppdatera status igen.

:::caution Omstart av tjänst
Att starta om Docker kan tillfälligt avbryta körande appar medan tjänsterna startar om.
:::

### Step 4: Refresh Credentials

Som sista steg, använd **Refresh Credentials**. Detta är särskilt viktigt om status visas som online men webbgränssnittsfunktioner som appinstallation inte fungerar.

Denna åtgärd:

- tar **inte** bort dina data
- uppdaterar root-användarens autentiseringsuppgifter
- uppdaterar API-token som används av webbgränssnittet
- uppdaterar panelens autentiseringsuppgifter automatiskt vid lyckad åtgärd

:::info Säker uppdatering av autentiseringsuppgifter
Att uppdatera autentiseringsuppgifter tar inte bort dina installerade appar eller distributionsdata. Det förnyar bara de uppgifter som krävs för åtkomst och kommunikation.
:::

### When to Contact Support

Om problemet kvarstår efter att ha genomfört alla felsökningssteg, skapa en supportticket via ZAP-Hostings webbplats.

## Best Practices

För att hålla One Click Apps Installer stabil och lätt att hantera, följ dessa rekommendationer:

| Bästa praxis | Orsak |
| --- | --- |
| Använd en färsk OS-installation | Minskar konflikter med befintliga tjänster och portar |
| Uppfyll rekommenderade resurser | Förbättrar prestanda och tillförlitlighet |
| Organisera appar i projekt och miljöer | Håller distributionerna hanterbara |
| Konfigurera DNS innan du tilldelar domäner | Förhindrar åtkomst- och SSL-problem |
| Använd avancerade inställningar med försiktighet | Undviker icke-stödda anpassade ändringar |

:::tip Håll distributionerna organiserade
Om du planerar att hosta många appar, skapa en tydlig namngivningsstruktur för `[your_project_name]`, `[your_environment_name]` och `[your_app_name]` innan du distribuerar dina första tjänster.
:::

## Conclusion

Grattis, du har framgångsrikt satt upp och använt VPS One Click Apps Installer för att distribuera och hantera appar på din server. För ytterligare frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig!

<InlineVoucher />