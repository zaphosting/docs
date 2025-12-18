---
id: vserver-iso-windows
title: "VPS: Installation av Windows X/Windows Server 20XX"
description: "Upptäck hur du anpassar Windows-installationer med skräddarsydda ISO-filer för full kontroll över setup och drivrutiner → Lär dig mer nu"
sidebar_label: "Installera Windows X/WS 20XX"
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introduktion
Att installera en egen ISO ger dig full kontroll över hur du sätter upp Windows-miljöer som Windows 10 eller Windows Server 2016/2019/2022/2025. Till skillnad från våra färdigbyggda standard-OS-bilder kan du här använda ett installationsmedium anpassat efter dina specifika behov, till exempel med specialdrivrutiner, fördefinierade konfigurationer eller extra mjukvarupaket.

<InlineVoucher />



## Förberedelser

För installation och konfiguration av ett operativsystem är det först viktigt att montera rätt ISO för operativsystemet. Om du inte är van vid att montera ISO-filer än, kolla gärna in vår guide om [Egen ISO](vserver-iso.md).



## Installation

När du startar Windows-installationen guidar systemet dig genom de första stegen. Välj först önskat **språk**, konfigurera sedan **tangentbordslayout** och välj därefter **installationsmetod**. För demo använder vi här alternativet **Tidigare version av installation**. I nästa steg väljer du edition, och i det här exemplet väljs **Windows Server 2025 Datacenter Desktop Experience**, som ger full grafisk användargränssnitt.

![img](https://screensaver01.zap-hosting.com/index.php/s/7K227dRoaz5Y4py/download)

Vid den här punkten i installationen ser du att inga partitioner visas. Det är inget fel, utan beror på att Windows inte kan hitta de virtuella diskarna utan extra drivrutiner. De viktiga VirtIO-drivrutinerna behövs för att diskarna ska kännas igen och hanteras korrekt. Dessa måste nu monteras och installeras, då dyker diskarna upp och du kan fortsätta med partitionering och installation av operativsystemet.



### VirtIO-drivrutin(er)

Innan operativsystemet installeras måste VirtIO-drivrutinerna läggas till. Dessa Windows-drivrutiner är optimerade för KVM-baserade hypervisorer och ser till att Windows-VM:ar körs med max prestanda och kompatibilitet.

För att göra detta måste du tillfälligt byta installationsmedium till `virtio-win.iso`. Välj VirtIO ISO-filen bland tillgängliga ISO:er och klicka på **Montera**. Då blir drivrutinerna tillgängliga under installationen så att de kan installeras innan du fortsätter med OS-installationen.

![img](https://screensaver01.zap-hosting.com/index.php/s/wtZFngf9FofiQ88/download)

:::warning STARTA INTE OM SERVERN
När du **tillfälligt** byter ISO till VirtIO-versionen räcker det att bara välja ISO-filen. Gör **<u>inte</u>** en omstart, annars förlorar du allt tidigare framsteg.

:::

De nödvändiga drivrutinerna är organiserade i tre mappar: **Balloon**, **NetKVM** och **vioscsi**. Varje mapp innehåller en specifik typ av drivrutin som är avgörande för att köra en Windows-VM på en KVM-baserad hypervisor.

- **Balloon:** Hanterar minnesallokering dynamiskt, så att VM:ens tilldelade RAM kan växa eller krympa utan omstart.  
- **NetKVM:** Ger en fullt fungerande och optimerad nätverksadapter för stabil och snabb nätverksanslutning i VM:n.  
- **Vioscsi:** En specialiserad SCSI-kontrollerdrivrutin som ser till att virtuella hårddiskar känns igen och nås snabbt. Förbättrar I/O-prestanda och garanterar att Windows korrekt identifierar de virtuella diskarna.  

I varje mapp finns en undermapp för systemarkitektur. Under installationen ska du välja den undermapp som matchar operativsystemet du installerar. Använd alltid amd64-arkitekturen för detta. <u>Upprepa proceduren för alla tre drivrutinsmappar som på skärmbilden.</u>

![img](https://screensaver01.zap-hosting.com/index.php/s/fisTox5ziW4Y3tt/download)

När VirtIO-drivrutinerna är installerade kan du fortsätta med själva installationen av operativsystemet. Som tidigare måste ISO-filen bytas tillbaka. Den här gången väljer du originalinstallations-ISO:n för operativsystemet och öppnar sedan VNC-konsolen igen för att fortsätta installationen.

![img](https://screensaver01.zap-hosting.com/index.php/s/QECit2kf66WQF9R/download)



### Skapa och välj partition

Nästa steg är att konfigurera partitioneringen. Ta först bort eventuella okända partitioner. Välj sedan den nyupptäckta oallokerade partitionen som mål för installationen.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRijdykS6CxyrbA/download)

Klicka på **Nästa** för att fortsätta, resten av installationen sker automatiskt. I slutet får du ange inloggningsuppgifter för administratörskontot.

![img](https://screensaver01.zap-hosting.com/index.php/s/bPzrdmbgYeLGrjJ/download)



## Konfiguration

När installationen är klar krävs några sista konfigurationssteg för att systemet ska vara säkert och stabilt att använda. Det handlar om att aktivera och hantera åtkomst via **Remote Desktop (RDP)**, konfigurera **brandväggsregler** för både skydd och funktionalitet, samt ställa in **nätverksinställningar** för att integrera servern korrekt i nätverket.

Med dessa justeringar säkerställer du att fjärråtkomst funkar, övervakning och statuskontroller fungerar utan problem, och att servern körs med stabila och förutsägbara nätverksparametrar i din infrastruktur.



### RDP-konfiguration

För att aktivera Remote Desktop (RDP) i Windows är proceduren i stort sett densamma för Windows 10 (klient) och Windows Server 2016/2019/2022/2025. Öppna **Kontrollpanelen** eller **Inställningar**, gå till **System → Fjärrskrivbord** (på klientversioner) eller **Systemegenskaper → Fjärr** (på serverversioner) och slå på alternativet **Tillåt fjärranslutningar till den här datorn**. På serverversioner heter det **Aktivera fjärrskrivbord**.

![img](https://screensaver01.zap-hosting.com/index.php/s/kcA3bWFHamWRwL8/download)



### Brandväggskonfiguration

För att servern ska vara fullt igång och för att statuskontroller som ping ska fungera måste **ICMP-protokollet** tillåtas genom Windows-brandväggen. Utan denna regel kan inte övervakningsverktyg och nätverkstester nå servern, vilket leder till misslyckade hälsokontroller.

![img](https://screensaver01.zap-hosting.com/index.php/s/jyLqA5Ly3iXDPJ5/download)

För att aktivera ICMP, öppna **Windows-brandväggen med avancerad säkerhet** och gå till inkommande regler. Skapa en ny anpassad regel och välj protokollet "Alla" och välj **ICMPv4**. Ställ in regeln att gälla för alla portar och välj vilka profiler (Domän, Privat, Offentlig) regeln ska vara aktiv i. Oftast rekommenderas att aktivera för alla profiler. Ge regeln ett beskrivande namn som *Tillåt inkommande ICMP* och slutför guiden.

Från och med nu accepterar servern ICMP-förfrågningar, vilket gör att kommandon som `ping` och övervakningssystem kan nå den och verifiera status utan problem.



### Nätverkskonfiguration

För att manuellt konfigurera nätverksinställningarna i Windows, öppna först **Nätverks- och delningscenter** via Kontrollpanelen eller aktivitetsfältet. Välj rätt nätverksadapter (LAN eller Wi-Fi), högerklicka och öppna **Egenskaper**. Markera sedan **Internet Protocol Version 4 (TCP/IPv4)** och klicka på **Egenskaper**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nEGkdE79tDwLszr/download)

I dialogrutan ändrar du inställningen från Hämta IP-adress automatiskt till Använd följande IP-adress. Fyll i **IP-adress**, **nätmask** och **standard-gateway** för din server. Under, byt DNS-inställningar till manuella och ange `1.1.1.1` och `8.8.8.8` som primär och sekundär **DNS**-server. Bekräfta med **OK** för att spara den statiska nätverkskonfigurationen.





## Avslutning

Grattis, du har nu installerat och konfigurerat ditt Windows-operativsystem! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂



<InlineVoucher />