---
id: windrose-dashboard
title: "Windrose: Dashboard"
description: "Upptäck ZAP-Hosting Windrose-dashboarden och lär dig hur du hanterar din gameserver-hosting, övervakar prestanda och använder viktiga kontrollfunktioner effektivt -> Lär dig mer nu"
sidebar_label: Dashboard
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

**Windrose**-dashboarden är den centrala platsen för att hantera din gameserver i ZAP-Hostings webbgränssnitt. I den här guiden får du en strukturerad översikt över tillgängliga dashboard-sektioner och lär dig använda de viktigaste administrations-, övervaknings- och hostingverktygen effektivt.

<InlineVoucher />

## Produktadministration

I området **Produktadministration** hittar du de viktigaste sidorna för att styra och övervaka din **Windrose**-server. Dessa sidor hjälper dig att hantera serverns aktuella status, granska tekniska händelser och snabbt komma åt viktig serviceinformation.

### Dashboard

**Dashboarden** är huvudsidan för översikt av din **Windrose**-server. Här hittar du vanligtvis de viktigaste servicdetaljerna på en blick, som aktuell serverstatus, plats, anslutningsadress och resursanvändning.

![img](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

Beroende på serverns aktuella konfiguration och spelintegration kan dashboarden även visa extra information som aktiv karta, servernamn, använd minne eller antal använda spelplatser. Det är också här du kan starta, stoppa eller starta om din tjänst direkt.

Dashboarden är särskilt användbar eftersom den kombinerar både serverkontroll och övervakning på ett ställe. Det gör att du snabbt kan kontrollera om din tjänst är online och agera direkt om ändringar behövs.

### Statistik

Under **Statistik** kan du granska historisk användningsdata för din server. Det hjälper dig att bättre förstå hur din **Windrose**-hosting presterar över tid.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

De tillgängliga graferna visar vanligtvis värden som CPU-användning, minnesanvändning och slot-användning. Du kan ofta växla mellan olika tidsintervall för att analysera kortsiktiga toppar eller långsiktiga trender.

| Metrik | Syfte |
| --- | --- |
| CPU-användning | Hjälper dig identifiera processorbelastning och möjliga prestandaflaskhalsar |
| Minnesanvändning | Visar hur mycket RAM din server använder |
| Slot-användning | Indikerar hur många tillgängliga spelplatser som aktivt används |

:::tip Prestandaanalys
Om du märker lagg, krascher eller långsamma svarstider är statistik-sidan en av de bästa platserna att börja felsöka. Den kan hjälpa dig avgöra om problemet är relaterat till resursanvändning eller om det bara inträffade vid en specifik tidpunkt.
:::

### DDoS Manager

**DDoS Manager** låter dig granska information om upptäckta och motverkade DDoS-attacker mot din tjänst. Detta kan vara användbart om du vill förstå ovanliga trafikmönster eller undersöka avbrott orsakade av skadlig trafik.

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

Beroende på dina bokade tillval och tillgängligt skydd på din valda plats kan du även kunna se aktiv attackinformation och trafikdetaljer i realtid.

:::info Tillgänglighet för DDoS Manager
DDoS Manager är endast tillgänglig om din tjänst inkluderar antingen en dedikerad IP-adress eller tillvalet **DDoS Manager Overview**. Om detta inte ingår i ditt nuvarande paket behöver du uppgradera din tjänst först.
:::

### Loggfiler

Om din **Windrose**-server visar fel eller beter sig oväntat är avsnittet **Loggfiler** en av de viktigaste platserna att kontrollera. Loggfiler innehåller teknisk output från servern och kan inkludera varningar, startmeddelanden och felinformation.

Dessa filer är särskilt användbara när du behöver identifiera orsaken till krascher, misslyckade starter eller konfigurationsproblem.

:::caution Begränsningar vid logggranskning
Om loggutdata är otydlig eller inte hjälper dig att identifiera problemet bör du kontakta support via den officiella [support-sidan](https://zap-hosting.com/en/customer/support/). Bifoga en tydlig beskrivning av problemet och relevanta loggmeddelanden för att snabba på felsökningen.
:::

### Händelselogg

**Händelseloggen** ger dig en översikt över åtgärder och händelser relaterade till din tjänst. Detta kan inkludera serverstarter, stopp, krascher, installationer, uppdateringar och backup-aktiviteter.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

Detta avsnitt är särskilt hjälpsamt om du vill verifiera när en ändring skedde eller om en automatiserad uppgift kördes framgångsrikt.

### Live Console

**Live Console** visar serverns output i realtid medan din **Windrose**-server körs. Det låter dig övervaka vad som händer på servern just nu och kan hjälpa dig upptäcka problem direkt.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Om servermjukvaran stödjer det kan du även skicka kommandon direkt via live-konsolen. Det är användbart för administrativa åtgärder som behöver utföras utan att starta om tjänsten.

| Funktion | Beskrivning |
| --- | --- |
| Realtidsoutput | Visar aktuella serverhändelser och meddelanden |
| Felupptäckt | Hjälper dig identifiera problem när de händer |
| Kommandoingång | Låter dig skicka stödjade serverkommandon direkt |

### Serviceavbrott

Om din server var tillfälligt otillgänglig och det inte finns någon uppenbar orsak i händelseloggen eller loggfilerna kan problemet vara relaterat till den underliggande värdservern snarare än din individuella tjänst.

I avsnittet **Serviceavbrott** kan du granska avbrottshistorik relaterad till värdmiljön för din gameserver. För bredare plattformsstatus kan du även kolla den officiella [statussidan](https://status.zap-hosting.com/).

## Inställningar

Området **Inställningar** innehåller huvudkonfigurationssidorna för din **Windrose**-server. Här kan du justera tjänstens beteende, byta installerade spel där det stöds, hantera uppdateringar och konfigurera automatiseringsfunktioner.

### Inställningar

Sidan **Inställningar** ger en förenklad översikt över vanliga serveralternativ. Detta är särskilt användbart om du är ny inom gameserver-hosting och vill göra ändringar utan att redigera konfigurationsfiler direkt.

Om tillgängligt för **Windrose** kan dessa alternativ inkludera spelrelaterade inställningar eller andra vanliga serviceparametrar. De exakta alternativen kan variera beroende på aktuell spelintegration.

### Konfigurationer

Avsnittet **Konfigurationer** låter dig redigera konfigurationsfiler direkt via webbgränssnittet. Det ger dig mer exakt kontroll än den förenklade inställningssidan och passar generellt bättre för avancerade användare.

:::caution Överskrivna värden
Vissa värden kan styras av den förenklade sidan **Inställningar**. Om du märker att manuella ändringar i konfigurationseditorn skrivs över, kontrollera om samma alternativ fortfarande kontrolleras där.
:::

### Spel

Under **Spel** kan du byta till ett annat tillgängligt spel eller spelvariant om din tjänst stödjer det. Spel med samma slot-prissättning kan vanligtvis väljas direkt, medan andra spel kan kräva en paketjustering först.

Om du vill veta mer om att byta installerat spel på din tjänst, se guiden [Game Change](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versioner

Sidan **Versioner** låter dig hantera den installerade serverversionen för din **Windrose**-tjänst, om versionshantering stöds. Du kan vanligtvis uppdatera till senaste tillgängliga version och aktivera automatiska uppdateringar.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Automatiska uppdateringar hjälper till att hålla din hostingmiljö aktuell, men du bör ändå verifiera kompatibilitet efter större versionsändringar.

### Schemalagda uppgifter

Med **Schemalagda uppgifter** kan du automatisera återkommande åtgärder för din server. Det är användbart om du vill minska manuellt administrationsarbete och hålla din tjänst igång konsekvent.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Vanliga automatiserade åtgärder kan inkludera:

| Uppgiftstyp | Exempelanvändning |
| --- | --- |
| Starta tjänst | Starta servern automatiskt vid en specifik tidpunkt |
| Stoppa tjänst | Stänga ner servern under underhållsfönster |
| Starta om tjänst | Utföra rutinmässiga omstarter för stabilitet |
| Skapa backup | Skapa regelbundna säkerhetskopior utan manuella åtgärder |
| Anpassade kommandon | Köra stödjade kommandon automatiskt |

### Omstartsschema

**Omstartsschemat** är speciellt utformat för att schemalägga automatiska serveromstarter. Det kan vara användbart om du vill starta om din **Windrose**-server regelbundet, till exempel under tider med låg aktivitet.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-inställningar

Med **DNS-inställningar** kan du tilldela en mer användarvänlig adress till din tjänst. Det gör din server lättare att komma ihåg och enklare att dela med andra spelare.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

Du kan eventuellt använda antingen en ZAP-levererad subdomän eller din egen domän, beroende på din konfiguration och bokade tillval.

## Verktyg

Avsnittet **Verktyg** innehåller ytterligare funktioner för servicehantering som stödjer filåtkomst, databashantering och backup-hantering.

### FTP Browser

I **FTP Browser** hittar du anslutningsuppgifter som krävs för att komma åt dina serverfiler. FTP-åtkomst är användbart om du behöver ladda upp, ladda ner eller redigera filer direkt.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

För enklare filhantering rekommenderas att använda en extern FTP-klient som [FileZilla](https://filezilla-project.org/) eller [WinSCP](https://winscp.net/). Om du behöver hjälp med anslutning, se guiden [Access via FTP](gameserver-ftpaccess.md).

### Databaser

Under **Databaser** kan du skapa och hantera databaser som ingår i din gameserver-produkt, om det krävs av din konfiguration. Det är användbart för tjänster, mods eller verktyg som behöver strukturerad datalagring.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

Du kan vanligtvis se åtkomstuppgifter, skapa nya databaser och importera befintliga backups från detta avsnitt.

### Backups

Avsnittet **Backups** låter dig skapa och hantera säkerhetskopior för din server och, där det stöds, dess tillhörande databaser.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Regelbundna backups rekommenderas starkt eftersom de låter dig återställa din tjänst efter konfigurationsmisstag, filkorruption eller oväntade problem.

:::tip Backup-bästa praxis
Skapa en manuell backup innan du gör större ändringar som att redigera konfigurationsfiler, byta versioner eller ändra installerat spel. Det ger dig en säker återställningspunkt om något går fel.
:::

## Ytterligare länkar

Avsnittet **Ytterligare länkar** ger dig extra resurser relaterade till din tjänst och allmän användning av ZAP-Hosting-plattformen.

### Vanliga frågor

Området **Vanliga frågor** innehåller svar på vanliga ämnen relaterade till din tjänst. Det kan hjälpa dig lösa typiska problem snabbare utan att behöva kontakta support.

### ZAP-Hosting Dokumentation

**ZAP-Hosting Dokumentation** ger dig tillgång till en bred kunskapsbas som täcker serveradministration, hosting-setup, felsökning och relaterade ämnen. Om du söker mer avancerade guider utöver denna **Windrose**-dashboard-översikt är detta bästa stället att fortsätta.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Nyheter

Avsnittet **Nyheter** innehåller meddelanden som är relevanta för din tjänst. Det kan inkludera tekniska meddelanden, underhållsinformation, funktionsändringar och andra viktiga uppdateringar.

Att regelbundet kolla detta avsnitt hjälper dig hålla dig uppdaterad om förändringar som kan påverka din **Windrose**-serverhostingmiljö.

<InlineVoucher />

## Conclusion

Du har nu en komplett översikt över de viktigaste områdena i **Windrose**-dashboarden i ZAP-Hosting-panelen, från serverövervakning och loggar till inställningar, verktyg och automatiseringsfunktioner. Denna kunskap hjälper dig att navigera din hostingtjänst mer effektivt och hantera din server med större självförtroende.

Grattis, du har framgångsrikt lärt dig hur du använder Windrose-dashboarden. För ytterligare frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂