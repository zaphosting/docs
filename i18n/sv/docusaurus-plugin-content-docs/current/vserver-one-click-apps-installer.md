---
id: vserver-one-click-apps-installer
title: "VPS: One Click Apps Installer"
description: "Distribuera appar med VPS One Click Apps Installer, hantera projekt via webbgränssnittet och använd Coolify för avancerad apphantering -> Lär dig mer nu"
sidebar_label: One Click App Installer
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

One Click Apps Installer låter dig bläddra i ett stort appkatalog och distribuera appar direkt från ditt VPS webbgränssnitt. I den här guiden lär du dig hur du förbereder din server, väljer rätt installationstyp, installerar och hanterar appar samt använder avancerade inställningar och felsökningsverktyg vid behov.

![img](https://screensaver01.zap-hosting.com/index.php/s/GDwkwA8Mi4gHS7D/preview)

<InlineVoucher />

## Förberedelser

Innan du använder One Click Apps Installer måste din VPS uppfylla minimikraven och använda ett stödt operativsystem.

:::info Minimala krav
App-funktionen kräver att din VPS är online och konfigurerad med tillräckliga resurser för att pålitligt köra både plattformstjänsterna och dina installerade appar.
:::

| Krav | Minimum | Rekommenderat |
| --- | --- | --- |
| Serverstatus | Online | Online |
| Lagring | 30 GB | 50 GB |
| RAM | 2 GB | 4 GB |
| CPU | 2 kärnor | 4 kärnor |
| Operativsystem | Debian eller Ubuntu LTS | Debian 13 - EN - 64bit |

:::caution Färskt operativsystem rekommenderas
Det rekommenderas starkt att sätta upp app-funktionen på en färsk installation av operativsystemet. Detta hjälper till att undvika konflikter med befintliga tjänster, upptagna portar, Docker-konfigurationer eller anpassade inställningar som redan finns på servern.
:::

Om du behöver installera om din VPS innan du fortsätter, använd en färsk stödd Debian- eller Ubuntu LTS-image från ditt VPS-hanteringsgränssnitt.

## Så öppnar du One Click Apps Installer

Öppna din VPS i ZAP-Hostings webbgränssnitt och hitta sektionen One Click Apps. Därifrån kan du starta den initiala installationen och senare återvända för att hantera alla appar som är installerade på servern.

Första gången du öppnar funktionen måste du välja hur plattformen ska installeras på din VPS.

## Välja installationstyp

Du kan välja mellan full installation och node-only installation. Rätt val beror på om denna VPS ska hosta både hanteringspanelen och appar, eller bara agera som en länkad nod för en annan panel.

### Full installation

Välj **Full installation** om du vill sätta upp servern med panelen och servern själv som en nod. Detta är det rekommenderade valet för nya användare och för de flesta standardinstallationer.

Med denna metod kan du:

- distribuera appar från appkatalogen
- hantera projekt och miljöer
- organisera alla appar på ett ställe
- använda de integrerade webbgränssnittets hanteringsverktyg
- få tillgång till den avancerade panelen senare om det behövs

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Rekommenderas för de flesta användare
Om det är första gången du använder app-funktionen, välj full installation. Det ger den enklaste uppsättningen och fullständig hantering direkt från ZAP-Hostings webbgränssnitt.
:::

### Node-only installation

Välj **Node-only installation** om du vill att denna VPS bara ska agera som en nod. Du kan då länka den till en annan VPS-server eller till en extern panelinstans.

Detta är användbart om du vill:

- skala över flera VPS-system
- centralisera hanteringen på en panel
- länka denna server till en befintlig installation
- utöka en befintlig multi-nod setup

:::note Avancerat distributionsalternativ
Node-only installation är avsedd för användare som redan har en annan panelinstans tillgänglig eller som vill koppla denna server till en extern miljö.
:::

## Installera app-funktionen

Efter att ha valt installationstyp, starta installationen från webbgränssnittet. Den initiala installationen tar vanligtvis bara några minuter.

Under processen distribueras plattformstjänsterna som krävs för One Click Apps-funktionen till din VPS. När det är klart blir appkatalogen och hanteringssektionerna tillgängliga i webbgränssnittet.

:::info Installationsbeteende
Exakta detaljer om installationsförloppet kan variera beroende på din VPS prestanda, operativsystemets tillstånd och nätverksförhållanden. Om installationen inte slutförs framgångsrikt, gå igenom felsökningsavsnittet senare i guiden.
:::

## Bläddra i appkatalogen

När installationen är klar kan du öppna appkatalogen och bläddra bland tillgängliga appar. Katalogen innehåller över 300 appar redo att distribueras och stödjer filtrering för att snabbt hitta rätt app.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Söka och filtrera appar

I katalogen kan du söka efter appar med namn och filtrera efter kategori. Detta hjälper dig att begränsa alla appar i appbutiksstilens gränssnitt och hitta rätt distributionsmål för ditt projekt.

Typiska åtgärder inkluderar:

- söka efter appnamn
- filtrera efter kategori
- granska tillgängliga app-poster
- välja en app för distribution

Detta arbetsflöde är särskilt användbart om du hanterar många appnedladdningsmål eller jämför flera tjänster innan installation.

### Starta en appinstallation

Efter att ha valt en app från katalogen, starta installationen via webbgränssnittet. Beroende på app kan du behöva ange värden som:

- `[your_project_name]`
- `[your_environment_name]`
- `[your_domain]`
- `[your_app_name]`

Dessa platshållare representerar värden specifika för din distribution. Till exempel bör `[your_domain]` ersättas med den domän du vill använda för appen.

:::tip Projekt och miljöer
Använd projekt och miljöer för att hålla din distribution organiserad. Detta är särskilt hjälpsamt när du hostar flera appar, testar versioner eller separerar produktion och staging-tjänster.
:::

## Hantera installerade appar

Efter distribution listas dina installerade appar i hanteringssektionen i webbgränssnittet. Därifrån kan du övervaka och styra dina tjänster utan att behöva jobba manuellt med underliggande containers.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Tillgängliga hanteringsåtgärder

Sektionen för installerade appar låter dig utföra vanliga livscykelåtgärder direkt från webbgränssnittet.

| Åtgärd | Syfte |
| --- | --- |
| Starta | Startar en stoppad app |
| Stoppa | Stoppar en körande app |
| Kontrollera loggar | Öppnar apploggar för felsökning |
| Installera om | Distribuerar om appen |

Dessa verktyg gör det enklare att hantera alla appar från ett ställe, särskilt om du vill ha enkel webb-baserad kontroll istället för manuell kommandoradshantering.

### Organisera projekt och miljöer

Projekt och miljöer hjälper dig att strukturera dina distributioner tydligt. Du kan använda dem för att separera:

- personliga och produktionsappar
- test- och live-miljöer
- flera kund- eller teamdistributioner
- olika stackar på samma VPS

Denna organisation blir allt viktigare när din samling av appbutiksappar växer och du hanterar fler tjänster på en eller flera noder.

## Domäner, Cloud Access och SSL

One Click Apps-funktionen stödjer anpassade domäner och ZAP Cloud-integration. Detta låter dig exponera appar säkert och provisionera SSL-certifikat för dina distributioner.

:::info Domän- och SSL-stöd
Du kan använda anpassade domäner för dina appar och dra nytta av SSL-certifikat där plattformsuppsättningen stödjer det.
:::

När du tilldelar en domän, se till att dina DNS-poster pekar på `[your_server_ip]`. Om din domän inte är korrekt konfigurerad kan appen bli otillgänglig från internet.

| Värde | Beskrivning |
| --- | --- |
| `[your_domain]` | Domänen eller subdomänen som tilldelats din app |
| `[your_server_ip]` | Den publika IP-adressen för din VPS |

:::caution DNS måste peka på din VPS
Om DNS för `[your_domain]` inte pekar på `[your_server_ip]` kan domänvalidering och appåtkomst misslyckas.
:::

## Använda avancerade inställningar

Avancerade användare kan få tillgång till extra funktionalitet via den externa panelen som finns i avsnittet för avancerade inställningar.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

Detta kan vara användbart om du behöver djupare anpassning, utökad distributionskontroll eller direkt tillgång till funktioner utöver standardwebbgränssnittet.

### Viktig supportbegränsning

:::caution Supportomfång för avancerad panelanvändning
Avancerade användare är välkomna att använda den externa Coolify-panelen för extra anpassning och funktionalitet. Supporten är dock begränsad till ZAP-Hostings webbgränssnitt. Om du gör ändringar utanför webbgränssnittet kan hjälp inte erbjudas för dessa anpassade modifieringar.
:::

### När du ska använda den avancerade panelen

Du kan vilja använda den avancerade panelen om du behöver:

- mer detaljerad distributionsanpassning
- direkt nodlänkning
- avancerad appkonfiguration
- panelhantering utöver det förenklade gränssnittet

Om du tappar åtkomst eller integrationen slutar svara, använd felsökningsverktygen nedan innan du gör manuella ändringar.

## Länka noder

Om du valde node-only installation kan du länka denna VPS till en annan VPS-server eller en extern panelinstans. Detta låter dig skala din infrastruktur och hantera flera noder från en enda plats.

Nodlänkning är användbart när du vill:

- distribuera appar över flera VPS-system
- centralisera hanteringen
- utöka kapaciteten utan att skapa isolerade distributioner
- koppla till en extern panelmiljö

:::note Extern panellänkning
Du kan länka din nod till en annan VPS eller en extern panelinstans. Exakta länkdetaljer beror på den målmiljö som redan används.
:::

## Felsöka degraderad status

Om webbgränssnittet visar degraderad status betyder det att plattformen inte kan kontakta eller hämta data från instansen som driver One Click Apps-funktionen. Följ felsökningsstegen i kronologisk ordning.

### Statusindikatorer

Felsökningspopupen kan visa indikatorer som:

| Status | Betydelse |
| --- | --- |
| Coolify Status: Aktiv | Paneltjänsten verkar vara igång |
| API Status: Tillgänglig | API:et kan nås just nu |
| Tjänststatus: Online | Din VPS är online |

Om en eller flera delar inte fungerar korrekt, fortsätt med stegen nedan.

### Steg 1: Bekräfta att VPS är online

Först, se till att din VPS-tjänst är online i ZAP-Hostings webbgränssnitt. Om servern är offline kan inte app-plattformen fungera.

### Steg 2: Uppdatera status

Använd åtgärden **Uppdatera status** för att köra hälsokontrollen igen med senaste data. Detta kan lösa tillfälliga, intermittenta problem.

:::tip Tillfälliga anslutningsproblem
En degraderad status kan ibland orsakas av ett kortvarigt kommunikationsproblem. Att uppdatera status är det snabbaste första steget.
:::

### Steg 3: Starta om Docker

Om status fortfarande är degraderad, använd åtgärden **Starta om Docker**. Detta tvingar plattformsinstansen att starta om. Efter ett lyckat svar, vänta `1-2 minuter` och uppdatera status igen.

:::caution Tjänsteomstart
Att starta om Docker kan tillfälligt avbryta körande appar medan tjänsterna startar om.
:::

### Steg 4: Uppdatera autentiseringsuppgifter

Som sista steg, använd **Uppdatera autentiseringsuppgifter**. Detta är särskilt viktigt om status visas som online men funktioner i webbgränssnittet som appinstallation inte fungerar.

Denna åtgärd:

- tar **inte** bort dina data
- uppdaterar root-användarens autentiseringsuppgifter
- uppdaterar API-token som används av webbgränssnittet
- uppdaterar panelens autentiseringsuppgifter automatiskt vid lyckad åtgärd

:::info Säker uppdatering av autentiseringsuppgifter
Att uppdatera autentiseringsuppgifter tar inte bort dina installerade appar eller distributionsdata. Det förnyar bara de uppgifter som krävs för åtkomst och kommunikation.
:::

### När du ska kontakta support

Om problemet kvarstår efter att ha följt alla felsökningssteg, skapa en supportticket via ZAP-Hostings webbplats.

## Bästa praxis

För att hålla One Click Apps Installer stabil och enkel att hantera, följ dessa rekommendationer:

| Bästa praxis | Orsak |
| --- | --- |
| Använd en färsk OS-installation | Minskar konflikter med befintliga tjänster och portar |
| Uppfyll rekommenderade resurser | Förbättrar prestanda och pålitlighet |
| Organisera appar i projekt och miljöer | Håller distributionerna hanterbara |
| Konfigurera DNS innan du tilldelar domäner | Förhindrar åtkomst- och SSL-problem |
| Använd avancerade inställningar med försiktighet | Undviker icke-stödda anpassade ändringar |

:::tip Håll distributionerna organiserade
Om du planerar att hosta många appar, skapa en tydlig namngivningsstruktur för `[your_project_name]`, `[your_environment_name]` och `[your_app_name]` innan du distribuerar dina första tjänster.
:::

## Avslutning

Grattis, du har nu framgångsrikt satt upp och använt VPS One Click Apps Installer för att distribuera och hantera appar på din server. För fler frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig!

<InlineVoucher />