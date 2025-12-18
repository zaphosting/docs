---
id: dedicated-dashboard
title: "Dedikerad Server: Översikt Dashboard"
description: "Upptäck hur du effektivt hanterar och optimerar din Dedikerade Server med en tydlig översikt över nyckelfunktioner och administrationsverktyg → Lär dig mer nu"
sidebar_label: Dashboard
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Du är intresserad av en **Dedikerad Server** eller äger redan en, men saknar fortfarande en komplett översikt över administrationen och hur du hittar alla nödvändiga inställningar? Speciellt i början kan det kännas klurigt. Men lugn, vi ger dig en detaljerad introduktion till administrationen av din tjänst nedan, så att du får bästa möjliga överblick.

Efter att ha gått igenom den här guiden kommer du enkelt kunna hantera din Dedikerade Server effektivt och snabbt hitta alla nödvändiga inställningar och funktioner. Här får du en strukturerad översikt som hjälper dig steg för steg att bekanta dig med administrationen av din Dedikerade Server och utöka din kunskap på ett målmedvetet sätt. På så vis kan du säkerställa att din **Dedikerade Server** är optimalt konfigurerad efter dina behov och att du får ut maximalt av de tillgängliga möjligheterna.



## Produktadministration

I avsnittet **Produktadministration** hittar du alla nödvändiga sidor för att hantera din Dedikerade Server. Alternativen för att administrera din Dedikerade Server listas i detalj nedan. 



### Dashboard

Dashboarden ger en central översikt över all viktig information relaterad till din Dedikerade Server. Den visar aktuell status, serveradress, hostname, installerat operativsystem, systembelastning inklusive CPU- och RAM-användning samt nätverkstrafik. Denna översikt stödjer effektiv övervakning och hantering av din virtuella servermiljö.

![img](https://screensaver01.zap-hosting.com/index.php/s/QEnaS6N7MqHejtk/preview)



### Händelselogg

Håll koll på alla adminuppgifter och systemhändelser på ett och samma ställe. Händelseloggen samlar alla relevanta aktiviteter, så du alltid vet vem som gjort ändringar, när det hände och vad som påverkades.

![img](https://screensaver01.zap-hosting.com/index.php/s/akKpTx2XzDKy7qc/preview)



### Statistik
Detaljerade trafikdata visar exakt hur mycket data din server hanterar, både inkommande och utgående. Aktuella temperaturvärden och fläkthastigheter hjälper dig att hålla din hårdvara inom säkra driftstemperaturer hela tiden.

![img](https://screensaver01.zap-hosting.com/index.php/s/B7yLamtJrdALpPb/preview)



### Hårdvarustatus

Håll koll på alla viktiga hårdvarudetaljer på ett ställe. Kolla vilka firmware-versioner som är installerade, inklusive System ROM, iLO och Storage Controller, och övervaka statusen på din CPU, RAM, nätverksgränssnitt och anslutna diskar i realtid.

Detaljerad hårdvaruinformation hjälper dig att upptäcka potentiella problem tidigt och säkerställer att din server körs stabilt. Du har också tillgång till en tydlig logg över allt underhåll som utförts, så du alltid vet vilka uppdateringar eller reparationer som gjorts och när.

![img](https://screensaver01.zap-hosting.com/index.php/s/9CsZGarzsdMP5Ea/preview)

## Inställningar

I avsnittet **Inställningar** hittar du alla nödvändiga sidor för att konfigurera din Dedikerade Server. De tillgängliga alternativen för att konfigurera din Dedikerade Server listas i detalj nedan.

### Initial installation
Innan du kan använda din dedikerade server produktivt krävs en initial installation. Detta inkluderar att aktivera iLO-hanteringsgränssnittet, välja och montera en ISO-bild samt installera önskat operativsystem. Installationsguiden leder dig steg för steg genom processen och säkerställer en smidig start även utan tidigare erfarenhet. Detaljerade instruktioner hittar du i vår guide för [Initial Setup](dedicated-setup.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/MnZKXAGGTqs9Xdp/download)

### Inställningar

Justera konfigurationsalternativ för din dedikerade server. Här har du full kontroll att ändra inställningar som strömläge, vilket hjälper dig att optimera servern efter dina specifika behov.

![img](https://screensaver01.zap-hosting.com/index.php/s/WiHSELJNc5icsyQ/preview)



### DDoS Manager

Se tidigare DDoS-attacker för att bättre bedöma potentiella hot och mönster. Aktivera notiser för pågående DDoS-attacker på din server för att snabbt kunna agera vid en incident.

Beroende på serverplats och tillgängligt DDoS-skydd kan du även övervaka aktiva attacker i realtid. Detta inkluderar detaljerad trafikinsikt, som visar både legitim trafik och mängden trafik som blockeras av skyddssystemen. Denna transparens hjälper dig att förstå hur skyddet fungerar och gör det möjligt att tidigt identifiera potentiella risker.

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)



### Gameserver / TS3

Med den här funktionen kan du enkelt sätta upp och hantera gameserver- och voiceserver-tjänster med bara några klick. Webbgränssnittet sköter hela installationsprocessen åt dig, så du behöver ingen djup teknisk kunskap.

Du kan skapa nya gameserver- eller voiceserver när du behöver, justera inställningar som slots eller resurser och styra dem smidigt från din ZAP-webbdashboard. Det gör hanteringen av flera servrar snabb, flexibel och enkel. Allt på ett ställe.

:::warning Operativsystemskompatibilitet 
Den här funktionen är endast kompatibel med utvalda Linux-operativsystem. För mer info om hur du sätter upp och använder GS/TS3-gränssnittet, se vår guide för [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/nd6YF93omGcApC8/preview)



### Redigera rDNS

Justera reverse DNS-posten (PTR-record) för din servers IP-adress så att den pekar på rätt hostname. En korrekt konfigurerad rDNS hjälper till att säkerställa att din servers namn löses korrekt och är särskilt viktigt om du kör en mailserver. Utan giltig rDNS kan utgående mail markeras som spam eller levereras osäkert.

![img](https://screensaver01.zap-hosting.com/index.php/s/LpdMgD6T39tXiNK/preview)



### IP-adresser

Se alla IP-adresser som är tilldelade din server på en och samma vy. Denna översikt visar viktiga konfigurationsdetaljer som IP-adress, subnetmask och gateway. Du kan även kontrollera om en IP är nåbar eller inte, vilket hjälper dig att verifiera att dina nätverksinställningar är korrekt konfigurerade i operativsystemet.

![img](https://screensaver01.zap-hosting.com/index.php/s/a64XRkWn2EA4Nef/preview)



## Verktyg

Avsnittet **Verktyg** innehåller alla viktiga verktyg för att hantera din Dedikerade Server. De tillgängliga alternativen för att konfigurera servern beskrivs i detalj nedan och möjliggör precis anpassning efter specifika behov.



### Nollställ trafik

Håll koll på din månatliga trafikförbrukning. Här ser du hur mycket av din inkluderade trafik du redan använt. Om du når din gräns innan månaden är slut kan du även välja att nollställa trafiken i förväg mot en extra kostnad.

![img](https://screensaver01.zap-hosting.com/index.php/s/5Z38eyRdntF6ict/preview)



### iLO fjärrhantering / ISO

Få säker fjärråtkomst till din serverhårdvara när som helst. Här kan du se dina iLO-inloggningsuppgifter, aktivera fjärrhanteringsfunktioner och använda iLO-gränssnittet för att utföra viktiga uppgifter.

![img](https://screensaver01.zap-hosting.com/index.php/s/9SZMtCPDJgNZSZ6/preview)

## Fler länkar
Avsnittet med fler länkar ger ytterligare referenser som är relevanta för användning och hantering av produkten. Det kan inkludera dokumentation, verktyg eller externa resurser kopplade till den specifika tjänsten.

### Vanliga frågor
Avsnittet **Vanliga frågor** ger en översikt över de vanligaste frågorna från våra kunder. Här hittar du hjälpsamma svar och detaljerad information om olika ämnen för att hjälpa dig snabbt och smidigt.

### ZAP-Hosting Dokumentation
Vi erbjuder omfattande dokumentation för våra produkter som fungerar som en kunskapsbas för de vanligaste frågorna och funderingarna. Där hittar du olika guider och hjälp inom flera områden som hjälper dig att använda och hantera din produkt.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)