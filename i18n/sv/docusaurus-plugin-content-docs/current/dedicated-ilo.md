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
Klicka på den visade IP-adressen för att öppna iLO och logga in med dina inloggningsuppgifter.

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

Efter en kort stund är du inloggad i administrationsgränssnittet för din dedikerade server.  
Här hittar du massor av viktig info:

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### Översikt
* **Systemhälsa**  
Bör normalt vara grön. Vid varje serverstart testar serverns hårdvara sig själv, och om det finns problem rapporteras de direkt.  
Möjliga statusar är: grön (OK), gul (Nedsatt) och röd (Kritiskt). Det kan hända att servern visar din SSD som nedsatt, vilket oftast inte är ett problem.  
Du kan självklart kontakta supporten så kollar vi om åtgärder behövs. Om systemstatus är röd ("Kritiskt") bör supporten kontaktas omedelbart.  
Första steget för att lösa problemet är alltid en fullständig omstart av servern.

* **iLO Hälsa**  
Visar mer info om iLO-parametrarna, här ska inga större förändringar finnas.  
Det är inte nödvändigt att ändra något i denna flik.

* **Serverström**  
Visar status på din server, t.ex. "ON" betyder att servern är igång.

* **Integrerad Fjärrkonsol**  
Här kan du visuellt se din server och köra kommandon direkt.  
Fjärrkonsolerna skiljer sig åt i två aspekter:  
HTML5 startas direkt i din webbläsare och kräver ingen tredjepartsprogramvara.  
Java Web Start använder Java för att öppna hanteringskonsolen.  
Eventuella säkerhetsvarningar kan du tryggt klicka bort.  
Hur du steg för steg ansluter till din server via fjärrkonsol kan du läsa i våra detaljerade instruktioner.

* **Aktiva Sessioner**  
Här ser du alla användare som är inloggade i iLO just nu.

### iLO Händelselogg
Sparar alla ändringar som görs via iLO, t.ex. inloggningar, serverstart/stopp och inställningsändringar.

### Integrerad Hanteringslogg
Den integrerade hanteringsloggen lagrar all hårdvarurelaterad info, till exempel resultat från POST (Power On Self Test) som körs vid varje serverstart.  
Om det finns problem med hårdvaran på din dedikerade server visas de här.

### Virtuella Media
Integration av egna boot-media (ISO-filer) görs via undermenyn "Anslut CD/DVD-ROM".  
Serverns boot-ordning är konfigurerad så att den som standard alltid startar från en registrerad ISO först.  
Ordningen kan också ändras i menyn "Boot Order".

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

Under "Scripted Media URL" måste du ange hela länken till ISO-filen du vill montera, t.ex.: http://mydomain.com/bootimage.iso  
Din länk måste peka direkt på ISO-filen och sluta med .iso.  
Klicka sedan på "Insert Media" och starta om servern under "Power Management".  
Servern kommer nu att ladda din insatta ISO.

### Strömhantering
I denna meny kan du göra allt som rör start och stopp av din ZAP Dedikerade Server.

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **Gracefull Power Off**  
Stänger av servern på ett kontrollerat sätt, samma som att trycka på strömknappen på din laptop/dator en gång.  
Alla applikationer stängs ner korrekt och servern stängs av enligt schema.  
Det kan ta lite tid beroende på vilka program som körs.

* **Force Power Off**  
Om servern måste stängas av omedelbart utan väntan är detta rätt val. Det motsvarar att dra ur strömsladden.  
Systemet stängs av direkt utan fördröjning.

* **Force System Reset**  
Startar om systemet omedelbart.

### Effektmätare
Visar den genomsnittliga strömförbrukningen för ditt system, i princip ju högre förbrukning desto högre belastning på systemet.

### Nätverk
Visar nätverksinställningarna för din iLO. Observera att dessa inställningar inte påverkar nätverkskonfigurationen för själva servern.

:::info
För att konfigurera din server eller om nätverksåtkomsten inte fungerar, kan du alltid titta direkt på din server.
:::

## Fjärrkonsoler (Display)
iLO erbjuder som standard två olika typer av fjärrkonsoler:

![](https://screensaver01.zap-hosting.com/index.php/s/cozRqRt9KLTMCkd/preview)

### HTML5-konsolen
Med ett enkelt klick är du redan inne på din server, du behöver ingen extra programvara och den startas direkt i webbläsaren.  
Den erbjuder många användbara verktyg:

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - Strömhanteringsinställningar (start, stopp, omstart) för servern  
* 2 - Skicka tangentbordsgenvägar (t.ex. CTRL + ALT + DEL)  
* 3 - Inkludera ISO-filer > CD/DVD > Scripted Media URL  
* 4 - Systemhälsa  
* 5 - Serverns strömstatus (ON / OFF)  

Om din server har ett grafiskt gränssnitt (GUI) kan du använda musen som vanligt och tangentbordsinmatning skickas också vidare.

### Java-konsolen
För att använda Java-konsolen behöver du ha Java installerat. (Kan laddas ner från java.com)  
:::info  
Eventuella säkerhetsmeddelanden kan du ignorera.  
:::

Efter att ha öppnat filen får du följande meddelande, bekräfta med "Continue".  
![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

Vi accepterar risken och bekräftar med "Run".

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

Nu öppnas Java-konsolen.  
:::info  
Programmet ändrar ofta tangentbordslayout till "EN".  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - Inställningar för strömhantering (start, stopp, omstart) av servern  
* 2 - Inkludera ISO-filer > URL CD/DVD-ROM  
* 3 - Skicka tangentkombinationer (t.ex. CTRL + ALT + DEL)  
* 4 - Systemhälsa  
* 5 - Serverns strömstatus (ON / OFF)  

Om din server har ett grafiskt gränssnitt (GUI) kan du använda musen som vanligt och tangentbordsinmatning skickas också vidare.

## Vanliga problem, tips & tricks

* Servern fastnar i POST (Power On Self Test) och startar inte.  
Anslut till en fjärrkonsol och kolla exakt var servern fastnar. Visas några felmeddelanden?  
Stäng av servern i Power Management i några sekunder (Force Power Off) och starta sedan om den (Momentary Press).  
Om servern fortfarande inte startar, kontakta supporten.

* ISO laddas inte.  
Kontrollera att länken till din ISO verkligen är korrekt. Det enklaste testet är att klistra in länken i webbläsaren – om en nedladdning startar är allt rätt.  
Se till att länken är korrekt inskriven i Virtuella Media och att servern har startats om. Kolla även boot-ordningen och att CD/DVD-enheten ligger högst upp.

* Min server tar lång tid på sig att starta.  
Den använda Enterprise-hårdvaran kan ta lång tid på sig att starta, det är helt normalt. Det kan ta upp till 10-15 minuter.

* Jag kan inte öppna iLO längre.  
Se till att iLO är aktiverat i din serverpanel. Av säkerhetsskäl stängs hanteringsgränssnittet automatiskt av efter en tid.  
Du kan självklart stänga av och aktivera iLO igen. (Vänta minst 5 minuter efter aktivering)

## Slutsats

Det här borde göra din administration mycket enklare när du gått igenom allt i detalj. Vid fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂