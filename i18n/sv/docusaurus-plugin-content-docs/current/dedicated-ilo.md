---
id: dedicated-ilo
title: "Dedikerad Server: iLO"
description: "Upptäck hur du fullt ut kan hantera din Enterprise Dedikerade Server med iLO för smidig kontroll och övervakning → Läs mer nu"
sidebar_label: iLO
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
På våra Enterprise Dedikerade Servrar använder vi hanteringsgränssnittet iLO, som ger dig fullständig och obegränsad kontroll över din server.  
Funktionerna inkluderar start/stopp/omstart av servern, hanteringskonsol via Java eller HTML5, samt montering av boot-media (ISO-filer).  
Var noga med att ändra inställningarna försiktigt, felaktiga ändringar kan orsaka stora problem.

## iLO-access
Öppna serverpanelen för din ZAP Dedikerade Server i valfri webbläsare. Där hittar du redan den viktigaste informationen om din iLO.  
För att aktivera iLO klickar du helt enkelt på "Aktivera iLO".  
![](https://screensaver01.zap-hosting.com/index.php/s/grj9PxttLKiZg6m/preview)

Observera att det kan ta några sekunder innan din iLO är fullt tillgänglig.  
När systemet har startat hanteringsgränssnittet och det är åtkomligt, ser du inloggningsuppgifterna.  
Klicka på den visade IP-adressen för att öppna iLO och logga in med dina uppgifter.

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

Efter en kort stund är du inloggad i administrationsgränssnittet för din dedikerade server.  
Här hittar du massor av viktig info:

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### Översikt
* **Systemhälsa**  
Bör normalt vara grön. Vid varje serverstart testar serverns hårdvara sig själv, och om det finns problem rapporteras de direkt.  
Möjliga statusar är: grön (OK), gul (Nedsatt) och röd (Kritisk). Det kan hända att servern visar din SSD som nedsatt, vilket oftast inte är ett problem.  
Du kan självklart kontakta supporten så kollar vi om åtgärder behövs. Om systemstatus är röd ("Kritisk") bör supporten kontaktas omedelbart.  
Första steget för att lösa problem är alltid en fullständig omstart av servern.

* **iLO-hälsa**  
Visar mer info om iLO-parametrarna, här ska inga större förändringar finnas.  
Det är inte nödvändigt att ändra något i denna flik.

* **Serverström**  
Visar status på din server, t.ex. "ON" betyder att servern är igång.

* **Integrerad fjärrkonsol**  
Här kan du visuellt se din server och köra kommandon direkt.  
Fjärrkonsolerna skiljer sig åt i två varianter:  
HTML5 startas direkt i din webbläsare och kräver ingen extra mjukvara.  
Java Web Start använder Java för att öppna hanteringskonsolen.  
Eventuella säkerhetsvarningar kan du lugnt klicka bort.  
Hur du steg för steg ansluter till din server via fjärrkonsol finns i våra detaljerade instruktioner.

* **Aktiva sessioner**  
Här ser du alla användare som är inloggade i iLO just nu.

### iLO-händelselogg
Sparar alla ändringar som görs via iLO, t.ex. inloggningar, serverstart/stopp och inställningsändringar.

### Integrerad hanteringslogg
Sparar all hårdvarurelaterad info, t.ex. resultat från POST (Power on Self Test) som körs vid varje serverstart.  
Om det finns problem med din dedikerade servers hårdvara visas de här.

### Virtuellt media
Integration av egna boot-media (ISO-filer) görs via undermenyn "Connect CD/DVD-ROM".  
Serverns boot-ordning är inställd så att den alltid försöker boota från en registrerad ISO först.  
Ordningen kan ändras i menyn "Boot Order".

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

Under "Scripted Media URL" anger du hela länken till ISO-filen du vill montera, t.ex.: http://mydomain.com/bootimage.iso  
Din länk måste peka direkt på ISO-filen och sluta med .iso.  
Klicka sedan på "Insert Media" och starta om servern under "Power Management".  
Servern kommer nu att ladda din insatta ISO.

### Strömhantering
Här kan du göra allt som rör start och stopp av din ZAP Dedikerade Server.

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **Graceful Power Off**  
Stänger av servern på ett säkert sätt, samma som att trycka på strömknappen på din laptop/dator en gång.  
Alla applikationer stängs ner korrekt och servern stängs av enligt schema.  
Det kan ta lite tid beroende på vilka program som körs.

* **Force Power Off**  
Om servern måste stängas av direkt utan väntan är detta rätt val. Det motsvarar att rycka ur strömsladden.  
Systemet stängs av omedelbart utan fördröjning.

* **Force System Reset**  
Startar om systemet direkt.

### Effektmätare
Visar serverns genomsnittliga strömförbrukning – ju högre förbrukning, desto högre belastning på systemet.

### Nätverk
Visar nätverksinställningarna för din iLO. Observera att dessa inte påverkar serverns egna nätverksinställningar.

:::info
Om du ska konfigurera din server eller om nätverksåtkomst inte fungerar, kan du alltid titta direkt på servern via fjärrkonsolen.
:::

## Fjärrkonsoler (Display)
iLO erbjuder som standard två olika typer av fjärrkonsoler:

![](https://screensaver01.zap-hosting.com/index.php/s/cozRqRt9KLTMCkd/preview)

### HTML5-konsolen {#the-html5-console}
Med ett enkelt klick är du inne på din server, utan att behöva någon extra mjukvara – den körs direkt i webbläsaren.  
Den har många smarta funktioner:

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - Strömhantering (start, stopp, omstart) av servern  
* 2 - Skicka tangentbordsgenvägar (t.ex. CTRL + ALT + DEL)  
* 3 - Infoga ISO > CD/DVD > Scripted Media URL  
* 4 - Systemhälsa  
* 5 - Serverns strömstatus (ON / OFF)

Om din server har ett grafiskt gränssnitt (GUI) kan du använda musen som vanligt och tangentbordsinmatning skickas också vidare.

### Java-konsolen
För att använda Java-konsolen behöver du ha Java installerat (kan laddas ner från java.com).  
:::info
Eventuella säkerhetsvarningar kan du ignorera.
:::

När du öppnar filen får du följande meddelande, bekräfta med "Continue".  
![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

Vi accepterar risken och klickar på "Run".  

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

Nu öppnas Java-konsolen.  
:::info
Programmet ändrar ofta tangentbordslayouten till "EN".
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - Inställningar för strömhantering (start, stopp, omstart) av servern  
* 2 - Infoga ISO > URL CD/DVD-ROM  
* 3 - Skicka tangentkombinationer (t.ex. CTRL + ALT + DEL)  
* 4 - Systemhälsa  
* 5 - Serverns strömstatus (ON / OFF)

Om din server har ett grafiskt gränssnitt (GUI) kan du använda musen som vanligt och tangentbordsinmatning skickas också vidare.

## Vanliga problem, tips & tricks

* Servern fastnar i POST (Power on Self Test) och startar inte.  
Anslut till fjärrkonsolen och kolla exakt var servern fastnar. Visas några felmeddelanden?  
Stäng av servern i Power Management i några sekunder (Force Power Off) och starta sedan om (Momentary Press).  
Om servern fortfarande inte startar, kontakta supporten.

* ISO laddas inte.  
Kontrollera att länken till din ISO är korrekt. Det enklaste testet är att klistra in länken i webbläsaren – om en nedladdning startar är allt rätt.  
Se till att länken är korrekt inskriven i Virtuellt Media och att servern har startats om. Kolla även boot-ordningen och att CD/DVD-enheten ligger högst upp.

* Min server tar lång tid på sig att starta.  
Enterprise-hårdvaran kan ta tid på sig att boota, det är helt normalt. Det kan ta upp till 10-15 minuter.

* Jag kan inte öppna iLO längre.  
Se till att iLO är aktiverat i serverpanelen. Av säkerhetsskäl stängs hanteringsgränssnittet automatiskt av efter en tid.  
Du kan självklart stänga av och aktivera iLO igen (vänta minst 5 minuter efter aktivering).

## Slutsats

Det här borde göra din administration mycket enklare när du gått igenom allt i detalj. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support – vi finns här för dig varje dag! 🙂