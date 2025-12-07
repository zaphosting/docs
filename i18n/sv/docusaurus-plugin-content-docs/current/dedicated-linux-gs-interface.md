---
id: dedicated-linux-gs-interface
title: "Dedikerad Server: Gameserver/TS3-Interface"
description: "Upptäck hur du enkelt sätter upp gameservers, röstservrar och musikbots på Linux VPS eller dedikerade servrar → Lär dig mer nu"
sidebar_label: GS/TS3 Interface
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Om våra gameserver-produkter inte riktigt matchar din stil eller dina förväntningar, eller om du behöver din tjänst på andra sätt, är det ofta bättre att använda en VPS eller dedikerad server. Men då stöter du ofta på utmaningen att inte alla tjänster är automatiserade eller förinstallerade. Att sätta upp tjänster som gameservers, Teamspeak 3-servrar och musikbots måste göras själv.

För att lösa detta har vi utvecklat en smidig lösning för våra Linux-baserade VPS:er eller dedikerade servrar. Den så kallade Gameserver/Teamspeak 3 Server-interfacet (GS/TS3 Interface)!



## Användningsfall

Med det användarvänliga GS/TS3-interfacet kan du installera Teamspeak 3 eller andra utvalda gameserver-tjänster på din Linux-baserade VPS eller dedikerade server med bara några klick. Ingen förkunskap krävs för installationen. Allt från installation av nödvändiga paket, serverfiler till själva installationen är helt automatiserat, vilket sparar dig tid och krångel.

:::warning
GS/TS3-interface-funktionen kan användas med följande operativsystem:

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) Vi jobbar redan på att göra fler och nyare operativsystem och versioner tillgängliga inom kort.
:::



## Tillgängliga tjänster & spel

GS/TS3-interfacet stödjer uppsättning av gameservers, röstservrar och musikbots. De flesta spel vi erbjuder för våra gameserver-produkter finns också tillgängliga i GS/TS3-interfacet. Detta gäller alla spel som vi aktivt kör under Linux. Tyvärr kan inte spel som kräver Windows installeras här. Där är det bara manuell installation som gäller, förutsatt att spelet stödjer en Linux-serverversion.

| Tjänster    | Stöds |
| ----------- | ---------------- |
| Gameserver  | ✔️                |
| Röstserver  | ✔️                |
| Musikbot (Sinusbot)  | ✔️                |



## Installation och konfiguration

För att installera GS/TS3-interfacet går du till navigationspanelen **Inställningar** i serveradministrationen för din produkt och klickar på undermenyn **Gameserver / TS3**. 

Första gången du öppnar GS/TS3-interfacet skickas du vidare till en användarvänlig installationsguide. För att sätta upp interfacet och koppla det till servern måste du välja ett stödt operativsystem och ange root-användarens inloggningsuppgifter. 

![](https://screensaver01.zap-hosting.com/index.php/s/dLeLDKdmdiZ74CP/download)



När servern och webbgränssnittet är kopplade kan GS/TS3-interfacet skapas. 



![](https://screensaver01.zap-hosting.com/index.php/s/FK9mP3BgzrPmH7S/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/JL7jyTKbCEx8FBZ/preview)

:::info
**Varning**: Fortsätt inte processen förrän interfacet är helt installerat. Du ser att installationen är klar när progressbaren försvunnit och "Installerad" visas istället för "Saknas" för varje nödvändigt paket.
:::



### Skapa Gameserver

När GS/TS3-interfacet är installerat och klart kan du börja sätta upp tjänsterna. Installationen av en gameserver görs via knappen **Installera gameserver** i kategorin **Gameserver**.

![](https://screensaver01.zap-hosting.com/index.php/s/QinM7KtFwcAp5pE/preview)



I nästa steg kan du välja IP-adressen för den önskade gameservern (om din server har fler än en IP). Du kan också ange port, antal slots och RAM-boost individuellt.

![](https://screensaver01.zap-hosting.com/index.php/s/cqWwZbXT77okeDa/preview)

Dubbelkolla att alla uppgifter är korrekta och passar dina krav. När du är klar klickar du på "Installera gameserver nu" för att starta installationen. Gameservern sätts då upp enligt dina inställningar och du kan snart börja spela. Du kan nu se och öppna din nyskapade gameserver i listan.



![](https://screensaver01.zap-hosting.com/index.php/s/9WkJnxzkaEHmri7/preview)



Du är nu inne i administrationen för din gameserver. Där kan du välja och installera önskat spel för din server under navigationspanelen **Inställningar** under **Spel**.

![](https://screensaver01.zap-hosting.com/index.php/s/6pxEbWttos6HAYt/preview)

Här hittar du en lista över alla spel du kan installera på din server. I detta exempel installeras en server med spelet (paketet) Minecraft: Paperspigot. Välj ditt spel och klicka på den gröna knappen för att starta installationen.

![](https://screensaver01.zap-hosting.com/index.php/s/gazW2itexCJd7cY/preview)

En översikt med alla nödvändiga villkor visas. Om allt är uppfyllt kan du bekräfta med knappen **Acceptera och installera**.

![](https://screensaver01.zap-hosting.com/index.php/s/jeQC7dp6zpe3ny4/preview)

Att sätta upp spelet kan ta lite tid beroende på spelet. Progress visas i statusfältet. Därefter kan du starta din gameserver och ansluta till den i spelet!



### Skapa Röstserver

Installationen av en **Röstserver (Teamspeak 3 Server)** liknar installationen av en gameserver. Du klickar först på "Gameserver / TS3" igen. Här hittar du alternativet **Installera röstserver**, som du klickar på för att starta installationen av Teamspeak 3-servern.

![](https://screensaver01.zap-hosting.com/index.php/s/mi8p3NTfwBBExsD/preview)

I nästa steg kan du ange önskade inställningar för din Teamspeak 3-server, som IP-adress, port och antal slots. När du fyllt i allt klickar du på **Installera röstserver nu** för att slutföra installationen.

![](https://screensaver01.zap-hosting.com/index.php/s/ajfzxsJfCFdfBac/preview)

Se till att all info är korrekt och uppfyller dina krav. När allt är klart klickar du på **Installera Teamspeak 3/5 Server nu** för att starta installationen. Du kan nu se och klicka på den installerade Teamspeak 3-servern i **Röstserver-översikten**.

![](https://screensaver01.zap-hosting.com/index.php/s/YaEYorRG7TJGpmB/preview)

:::info
**Varning**: Detta är instansen där Teamspeak 3-servern kommer att installeras.
:::

Du är nu inne i interfacet för instansen av din installerade Teamspeak 3-server. Du kan starta instansen genom att klicka på **Start**-knappen.

![](https://screensaver01.zap-hosting.com/index.php/s/SmqHB24ozJimBY9/preview)


Klicka nu på menyalternativet **Virtual Servers**. Alla installerade Teamspeak 3-servrar på din instans listas tydligt här. För att öppna interfacet för respektive Teamspeak 3-server klickar du bara på "ögon"-ikonen.

![](https://screensaver01.zap-hosting.com/index.php/s/E3ZqxC9rPjWwC5F/preview)

I Teamspeak 3-serverinterfacet hittar du all nödvändig info och inställningar för att skräddarsy och hantera din server. Under fliken "Authorization key" kan du till exempel skapa en token som ger dig adminrättigheter på servern. Det ger dig full kontroll över användarhantering och serveråtkomst.

Under menyn "Inställningar" finns fler alternativ för att anpassa din server. Här kan du till exempel ändra servernamnet, sätta ett lösenord för att begränsa åtkomst eller lägga in ett personligt välkomstmeddelande som användare får när de går in på servern.

:::caution Info om Teamspeak-licenser
Det finns ingen licens installerad på Teamspeak 3-servern som standard. Det betyder att du bara kan använda en Teamspeak 3-server med upp till 32 slots. Vill du ha fler slots eller extra funktioner kan du köpa en licens direkt från Teamspeak.
:::





## Slutsats
Grattis, du har nu installerat och konfigurerat vårt GS/TS3-interface! Har du fler frågor eller problem är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig!