---
id: voiceserver-configuration
title: "Voiceserver: Konfiguration"
description: "Upptäck hur du anpassar dina Teamspeak-serverinställningar för en personlig upplevelse och optimerad användarhantering → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Teamspeak-servern kan konfigureras individuellt. Nedan förklarar vi hur du kan konfigurera din server. Vi går igenom hur du anpassar allmänna inställningar som servernamn, ikon, banner, användarbehörigheter, kanal- och servergruppsbehörigheter.

<InlineVoucher />

## Allmänt

**Webbgränssnitt**

Om du vill göra den allmänna konfigurationen av din server via webbgränssnittet hittar du alternativen under Teamspeak Server Administration under Inställningar. Inställningssidan ser ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/fLYXn5sx38BBC92/preview)


**Teamspeak-klient**

Vill du göra den allmänna konfigurationen direkt via Teamspeak-klienten hittar du alternativen genom att högerklicka på toppkanalen **TeamSpeak ]I[ Server** och sedan klicka på **Edit Virtual Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/epQ2qzRiex9BmpE/preview)



Eftersom inställningarna i webbgränssnittet ska vara så enkla som möjligt och inte allt kan justeras där, fokuserar denna guide på konfiguration via Teamspeak-klienten.



### Namn

I fältet **Server Name** kan du definiera namnet på din Teamspeak-server. Det visas sedan i serverlistan, på webbplatsen och på andra ställen.



### Banner

Om du har bokat tillägget egen banner kan du lägga till din egen banner i fältet **Banner Gfx URL**. Det är viktigt att du anger en direktlänk till bilden, annars känner inte systemet igen den. I fältet **URL** kan du ange vart bannern ska länka när någon klickar på den.

:::info
Om ingen egen banner är bokad ersätts bannern automatiskt med standardbannern från ZAP.
:::



### Slots (reserverade platser)

Slots sätts av oss och kan inte ändras. Däremot kan du ställa in reserverade slots. Det betyder att de är reserverade om Teamspeak-servern är full. Då kan användare med rätt behörighet fortfarande ansluta till servern.



### Välkomstmeddelande

Här kan du lägga till ett valfritt välkomstmeddelande som visas när du ansluter. Det kan se ut så här, till exempel:

![](https://screensaver01.zap-hosting.com/index.php/s/AWFcf4HHJ7jesdc/preview)


### Säkerhetsnivå

Den krävs säkerhetsnivån bestämmer hur lång tid det tar för användare att höja säkerhetsnivån på sin identitet tills den anses tillräckligt säker. Det minskar risken för spam och missbruk. Ju högre säkerhetsnivå, desto längre tid tar det. Här är en översikt över tidsåtgången:

- Nivå 0-23 - genereras inom sekunder
- Nivå 23-29 - genereras inom minuter
- Nivå 29-34 - genereras inom timmar
- Nivå 35-39 - genereras inom dagar
- Nivå 40-43 - genereras inom månader
- Nivå 44+ - genereras inom år



### Hantera användare (kicka, banna, banlista, klagolista)

Du kan kicka eller banna en användare genom att högerklicka på användaren. Vid ban sparas identitet och IP-adress i banlistan. Den hittar du under **navigeringsfältet -> extras** där du också kan ta bort befintliga ban.

Där finns även klagolistan. Det är en Teamspeak-funktion som låter användare anmäla andra användare, servern osv om det inte finns någon admin på Teamspeak-servern.



## Personalisera

Du kan skapa fler kanaler och servergrupper på din Teamspeak-server för att göra den ännu mer personlig. Nedan visar vi exakt hur du gör.



### Kanal

För att skapa fler kanaler högerklickar du under de befintliga kanalerna och klickar på **Create channel**. Ett popup-fönster öppnas där du kan konfigurera kanalen med följande alternativ: Kanalnamn, Lösenord, Ikon, Beskrivning, Kanaltyp med mera.



![](https://screensaver01.zap-hosting.com/index.php/s/Bkx2q69a5ceNiyD/preview)


### Servergrupper

För att skapa fler servergrupper klickar du på **permissions** i **navigeringsfältet** och går sedan till **server groups**. Där får du en översikt över befintliga servergrupper, deras behörigheter och tilldelade användare. I listan klickar du på **plus-symbolen** längst ner för att skapa en ny grupp.



![](https://screensaver01.zap-hosting.com/index.php/s/QqcaaRse6kLNwPQ/preview)


## Behörigheter

Nu borde det vara klart hur du justerar de allmänna inställningarna och hur du personaliserar din Teamspeak-server genom att skapa fler kanaler och servergrupper. Här går vi igenom hur du kan justera behörigheterna.



### Behörigheter: Användare

Användarnas behörigheter beror på vilka servergrupper de tillhör. Som standard får en användare gruppen **Normal**. Vill du ge fler behörigheter högerklickar du på användaren, klickar på Server Groups och tilldelar önskad grupp.

![](https://screensaver01.zap-hosting.com/index.php/s/sXG3qFXXJXc6Kjr/preview)

### Behörigheter: Kanal

Behörigheter kan definieras för varje kanal. Du kan till exempel bestämma vilka användare som kan **gå in, prenumerera, beskriva, se, ändra, ta bort** kanalen och **använda kanalens filbläddrare**.


![](https://screensaver01.zap-hosting.com/index.php/s/9sCRd7NgMNHy9Do/preview)



Värdet i varje fält beror på servergruppen. Om du till exempel skapar en servergrupp som heter **Member** och bara de ska ha tillgång till kanalen, måste värdet matcha servergruppens. Om servergruppen har behörighetsvärdet 50, måste **50** anges i respektive fält.



### Behörigheter: Servergrupper

För servergruppsbehörigheter finns flera kategorier att anpassa, bland annat:

- Allmänna alternativ
- Hantera grupper
- Lägg till, ta bort användare, hantera behörighetsnycklar
- Hantera användare (flytta, kicka, banna)
- Hantera kanaler
- Grundläggande


![](https://screensaver01.zap-hosting.com/index.php/s/RxcYJCsar7C3KnM/preview)



Du kan ändra dessa behörigheter som du vill. Vill du göra mer avancerade ändringar går du till inställningarna i Teamspeak-klienten, sedan till Application och aktiverar **Advanced permissions system**.


<InlineVoucher />