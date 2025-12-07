---
id: vserver-linux-gs-interface
title: "VPS: Gameserver/TS3-Interface"
description: "Upptäck hur du enkelt sätter upp spel- och röstservrar på Linux VPS utan förkunskaper med en automatiserad interface → Lär dig mer nu"
sidebar_label: GS/TS3 Interface
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Om våra gameserver-produkter inte riktigt passar din stil eller dina förväntningar, eller om du behöver din tjänst på andra sätt, är det ofta bättre att köra på en VPS. Men då stöter man ofta på utmaningen att inte alla tjänster är automatiserade eller förinstallerade. Att sätta upp tjänster som gameservers, Teamspeak 3-servrar och musikbots måste göras manuellt.

För att lösa detta har vi utvecklat en smidig lösning för våra Linux-baserade VPS eller dedikerade servrar. Den så kallade Gameserver/Teamspeak 3 Server-interfacet (GS/TS3 Interface)!

<YouTube videoId="V6qyQFPp_Ls" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/frWNEMQqcMxzRcM/preview" title="Sätt upp en Gameserver med Linux VPS UTAN ERFARENHET!" description="Känns det lättare att förstå när man ser det i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Användningsfall

Med det användarvänliga GS/TS3-interfacet kan du installera Teamspeak 3 eller andra utvalda gameserver-tjänster på din Linux-baserade VPS eller dedikerade server med bara några klick. Inga förkunskaper krävs för installationen. Allt från installation av nödvändiga paket, serverfiler till själva installationen är helt automatiserat, vilket sparar dig tid och krångel.

:::warning
GS/TS3-interfacet kan användas med följande operativsystem:

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) Vi jobbar redan på att göra fler och nyare operativsystem och versioner tillgängliga inom kort.
:::



## Tillgängliga tjänster / spel

GS/TS3-interfacet stödjer setup av gameservers, röstservrar och musikbots. De flesta spel vi erbjuder för våra gameserver-produkter finns också i GS/TS3-interfacet. Detta gäller alla spel som vi aktivt kör under Linux. Alla spel som kräver Windows kan tyvärr inte installeras här. Där är det bara manuell installation som gäller, förutsatt att spelet har en Linux-serverversion.

| Tjänster    | Stöds |
| ----------- | ---- |
| Gameserver  | ✔️    |
| Röstserver  | ✔️    |
| Musikbot (Sinuxbot)   | ✔️    |



## Installation och konfiguration

För att installera GS/TS3-interfacet går du till navigationspanelen **Inställningar** i serveradministrationen för din produkt och klickar på undermenyn **Gameserver / TS3**. 

Första gången du öppnar GS/TS3-interfacet tas du till en användarvänlig installationsguide. För att koppla interfacet till din server måste du först skapa en SSH-nyckel. Denna nyckel behövs för att webbplatsen ska kunna skapa en säker anslutning till servern. Det gör det möjligt att sätta upp, hantera och styra tjänster som gameservers och Teamspeak 3-servrar direkt via interfacet.

När du är där måste SSH-nyckeln skapas. Klicka på knappen **Generera SSH-nyckel** och lägg sedan till nyckeln genom att klicka på **Lägg till nyckel**. 


![](https://screensaver01.zap-hosting.com/index.php/s/teZ87eGKRm6iJRa/preview)



När du klickat på **Lägg till nyckel** sparas SSH-nyckeln på din server. GS/TS3-interfacet kan då kopplas till din server.



![](https://screensaver01.zap-hosting.com/index.php/s/QqtCFmC3oxPErD9/preview)



:::info
**Tips:** Om SSH-nyckeln inte känns igen direkt kan en omstart av servern och uppdatering av sidan ofta lösa det.
:::

Under installationen kan du följa framstegen. Observera att installation och konfiguration av interfacet och dess paket kan ta lite tid. Vanligtvis mellan 5 och 15 minuter.

![](https://screensaver01.zap-hosting.com/index.php/s/xkWQBEp74BqQdM6/preview)

:::info
**Varning**: Fortsätt inte processen förrän interfacet är helt installerat. Du ser att installationen är klar när progressbaren försvunnit och "Installerad" visas istället för "Saknas" för varje paket.
:::



### Skapa Gameserver

När GS/TS3-interfacet är installerat och klart kan du börja sätta upp tjänsterna. En gameserver installeras via knappen **Installera gameserver** under kategorin **Gameserver**.

![](https://screensaver01.zap-hosting.com/index.php/s/4TD3w3dpXrFYNcb/preview)



I nästa steg kan du välja IP-adressen för den önskade gameservern (om din server har fler än en IP). Du kan också ange port, antal slots och RAM-boost individuellt.

![](https://screensaver01.zap-hosting.com/index.php/s/icfwifbTrmwZQ6q/preview)

Dubbelkolla att all info är korrekt och passar dina krav. När du är klar klickar du på "Installera gameserver nu" för att starta installationen. Gameservern sätts då upp enligt dina inställningar och du kan snart börja spela. Din nyskapade gameserver visas nu i listan.



![](https://screensaver01.zap-hosting.com/index.php/s/MTRmMwc9GyMFW5A/preview)



Du är nu inne i administrationen för din gameserver. Där kan du välja och installera önskat spel under navigationspanelen **Inställningar** under **Spel**.

![](https://screensaver01.zap-hosting.com/index.php/s/xqxLAAR6jbdmM3Z/preview)

Här hittar du en lista på alla spel du kan installera på din server. I detta exempel installeras en server med spelet (paketet) Minecraft: Paperspigot. Välj ditt spel och klicka på den gröna knappen för att starta installationen.

![](https://screensaver01.zap-hosting.com/index.php/s/MtrsxLoYxssJLBt/preview)

En översikt med alla nödvändiga villkor visas. Om allt är uppfyllt kan du bekräfta med knappen **Acceptera och installera**.

![](https://screensaver01.zap-hosting.com/index.php/s/GjijXaM3z9EgnYG/preview)

Installationen kan ta lite tid beroende på spelet. Framstegen visas i statusfältet. När det är klart kan du starta din gameserver och ansluta till den i spelet!



### Skapa Röstserver

Installationen av en **Röstserver (Teamspeak 3 Server)** är liknande som för en gameserver. Klicka först på "Gameserver / TS3" igen. Här hittar du alternativet **Installera röstserver**, som du klickar på för att starta installationen av Teamspeak 3-servern.

![](https://screensaver01.zap-hosting.com/index.php/s/xct5DPC57wWeABG/preview)

I nästa steg kan du ange önskade inställningar för din Teamspeak 3-server, som IP-adress, port och antal slots. När du fyllt i allt klickar du på **Installera röstserver nu** för att slutföra installationen.

![](https://screensaver01.zap-hosting.com/index.php/s/2XnJrDEDyLwBsHk/preview)

Dubbelkolla att all info är korrekt och passar dina krav. Klicka sedan på **Installera Teamspeak 3/5 Server nu** för att starta installationen. Du kan nu se och klicka på den installerade Teamspeak 3-servern i **Röstserver-översikten**.

![](https://screensaver01.zap-hosting.com/index.php/s/bgpZJgPjz7Ybpke/preview)

:::info
**Varning**: Det är på denna instans som Teamspeak 3-servern kommer att installeras.
:::

Du är nu inne i interfacet för din installerade Teamspeak 3-serverinstans. Du kan starta instansen genom att klicka på **Starta**-knappen.

![](https://screensaver01.zap-hosting.com/index.php/s/G96RPrjEdm96CCj/preview)


Klicka nu på menyalternativet **Virtuella servrar**. Alla installerade Teamspeak 3-servrar på din instans listas tydligt här. För att öppna interfacet för respektive Teamspeak 3-server klickar du bara på "ögon"-ikonen.

![](https://screensaver01.zap-hosting.com/index.php/s/awJdyTgJPSia5B2/preview)

I Teamspeak 3-serverinterfacet hittar du all nödvändig info och inställningar för att skräddarsy och hantera din server. Under fliken "Autentiseringsnyckel" kan du till exempel skapa en token som ger dig adminrättigheter på servern. Det ger dig full kontroll över användarhantering och serveråtkomst.

Under menyn "Inställningar" finns fler alternativ för att anpassa din server. Här kan du till exempel ändra servernamnet, sätta ett lösenord för att begränsa åtkomst eller lägga in ett personligt välkomstmeddelande som användare får när de går in på servern.

:::caution Information om Teamspeak-licenser
Det finns ingen licens installerad på Teamspeak 3-servern som standard. Det betyder att du bara kan använda en Teamspeak 3-server med upp till 32 slots. Vill du ha fler slots eller extra funktioner kan du köpa en licens direkt från Teamspeak.
:::


## Sammanfattning

Grattis, du har nu installerat och konfigurerat vårt GS/TS3-interface! Har du fler frågor eller problem är vårt supportteam redo att hjälpa dig varje dag!

<InlineVoucher />