---
id: dedicated-proxmox
title: "Dedikerad Server: Installation av Proxmox VE"
description: "Upptäck hur du sätter upp och hanterar Proxmox VE för företagsvirtualisering med integrerade verktyg och hög tillgänglighet → Lär dig mer nu"
sidebar_label: Installera Proxmox
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Proxmox Virtual Environment är en komplett, öppen källkodsplattform för serverhantering inom företagsvirtualisering. Den integrerar KVM-hypervisorn och Linux Containers (LXC), mjukvarudefinierad lagring och nätverksfunktioner på en och samma plattform. Med det integrerade webbaserade gränssnittet kan du enkelt hantera VMer och containers, hög tillgänglighet för kluster, samt de inbyggda verktygen för katastrofåterställning.



## Förberedelser

För att börja måste du montera och boota från Proxmox VE (Virtual Environment) ISO-installationsfilen på din dedikerade server. Det finns två sätt att göra detta på: det enklare via din dedikerade servers webbgränssnitt eller det mer tidskrävande manuellt via serverns iLO-panel.



### Montera ISO via webbgränssnittet
Gå till avsnittet **Initial Installation** i din dedikerade servers webbgränssnitt. Här måste du först trycka på den gröna knappen **enable iLO**. Vänta en kort stund tills sektionerna blir synliga. Du kan behöva uppdatera sidan för att allt ska laddas fullt ut.

![](https://github.com/zaphosting/docs/assets/42719082/b457f17a-0bc6-42db-91ec-a553fd456936)

Välj sedan en **Proxmox VE** ISO från dropdown-menyn. Vi rekommenderar att du använder den senaste versionen för att hålla dig uppdaterad med de senaste ändringarna. Använd sedan den gröna knappen **Insert**.

![](https://github.com/zaphosting/docs/assets/42719082/2b0baf71-d683-46ad-a34a-bfda9d71939d)

Slutligen måste du starta om din dedikerade server för att kunna boota från ISO:n. Det gör du via omstarts-knappen under steg 3.



### Montera ISO via iLO
Förbered din Proxmox VE ISO genom att gå till [Proxmox nedladdningssida](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso). Du måste sedan ladda upp och montera den på din dedikerade server genom att följa guiderna för [iLO](dedicated-ilo.md) & [Egen ISO](dedicated-iso.md) som visar hur du loggar in och laddar upp din egna ISO.



## Setup & konfiguration

:::important
Se till att du har startat om din server efter att du importerat och monterat den nya ISO:n innan du fortsätter.
:::

Nu när du har din ISO monterad måste du boota från den. Du kan göra detta via **HTML5 remote console** i din iLO-panel. Via webbgränssnittet, klicka på länken **Open here** under `iLO web access` som tar dig till panelen, och logga in med de uppgifter som visades.

:::note
Din webbläsare kan visa en säkerhetsvarning, ignorera den och acceptera för att fortsätta.
:::

När du är inloggad, under avsnittet **Overview**, leta upp och klicka på länken **HTML5** under `Integrated Remote Console`. Detta öppnar en panel-overlay.

![](https://github.com/zaphosting/docs/assets/42719082/3b9ce97e-f974-439b-8e57-ced05f248ef9)

Din Proxmox bör nu vara i installationsprocessen. Navigera med `piltangenterna`, `enter` och `esc`. Vi rekommenderar att du väljer den **Grafiska** versionen av Proxmox eftersom guiden följer den.

![](https://github.com/zaphosting/docs/assets/42719082/614218f2-df12-43ad-95fe-39026b900141)

Vänta några sekunder tills installationsprocessen fortsätter. Du måste acceptera Proxmox EULA via knappen **I agree** nere till höger. På nästa sida ska du välja målskivan för din miljö. Om du använder en enda disk är standardinställningarna anpassade för dig, så du kan bara fortsätta med **Next**.

![](https://github.com/zaphosting/docs/assets/42719082/090c1f2e-20fe-48f3-b4b4-070c197f4825)

:::note
Om du vill sätta upp RAID (vissa av våra dedikerade servrar har två diskar) måste du använda **Options**-knappen för att välja din `RAID`-typ. Vi rekommenderar `RAID1` som speglar båda diskarna.

![](https://github.com/zaphosting/docs/assets/42719082/44e3b6ba-07f3-4313-8d36-b185a6da8089)
:::

Nästa steg är allmänna inställningar som språk och tangentbordslayout, vilket bör detekteras automatiskt. Fyll i dessa och fortsätt.

![](https://github.com/zaphosting/docs/assets/42719082/931e066c-9868-48d9-a638-f07c932579d2)

Nu måste du sätta ett starkt lösenord och en e-postadress. E-postadressen används av panelen för att skicka viktiga varningar och notiser.

:::important
Kom ihåg lösenordet, det är det du ska använda för att logga in i panelen första gången efter installationen!
:::

![](https://github.com/zaphosting/docs/assets/42719082/617a504c-9520-4b89-93c3-81fba06e5fdc)

Sista steget är nätverkskonfigurationen. Välj den tillgängliga management-interfacen och ett hostnamn för din server.

![](https://github.com/zaphosting/docs/assets/42719082/d694a5af-20e2-4c1b-9cdb-c1a8ca684cde)

Gå nu till avsnittet **IP-Addresses** i din dedikerade servers webbgränssnitt för att hitta en ledig IP.

![](https://github.com/zaphosting/docs/assets/42719082/e358f264-8535-4280-a1c5-0a15f4b99ed9)

Välj en IP-adress som du vill använda för din Proxmox-panel. Fyll i IP-adress, nätmask och gateway i installationsprogrammet med uppgifterna från webbgränssnittet. För DNS-server kan du ange `8.8.8.8` som är Googles publika DNS.

När allt är ifyllt, tryck på **Next** och granska alla val i sammanfattningssidan. Om allt ser rätt ut, tryck på **Install** för att fortsätta!

## Kom åt panelen
När installationen är klar och systemet har startat om, välj alternativet **Proxmox Environment GNU/Linux** i menyn och tryck på **Enter**. När det laddats ska du se ett välkomstmeddelande från Proxmox i konsolen med IP-adressen och en länk för att komma åt panelen via webbläsare (den du angav tidigare). Navigera till den länken.

:::note
Din webbläsare kan visa en säkerhetsvarning igen, ignorera den och acceptera för att fortsätta.
:::

Om länken inte går att nå tyder det på att du gjort en felaktig konfiguration under installationen, troligtvis i nätverksinställningarna.

När du är inne i panelen måste du logga in. Använd användarnamnet `root` och lösenordet du satte under installationen. Se till att **Realm** är satt till `Linux PAM standard authentication`.

![](https://github.com/zaphosting/docs/assets/42719082/4072c2ac-6f5c-4350-a5df-0635b1f433c0)

När du är inloggad kan du ignorera prenumerationsmeddelandet genom att trycka på **OK**. Och voilà, du har nu installerat Proxmox VE på din dedikerade server och loggat in i panelen!



## Skapa din första VM
Det här avsnittet visar de grundläggande stegen för att skapa din första Virtual Machine (VM) via Proxmox-panelen. Gå till `local (panel)` och välj sektionen **ISO Images**. Här kan du antingen ladda upp `.iso`-filen manuellt eller låta Proxmox hämta den genom att ange direktlänken till ISO-filen.

![](https://github.com/zaphosting/docs/assets/42719082/8182bd73-690f-434f-8394-5fdca6889a74)

När du gjort detta kan du fortsätta med att skapa din VM. Titta uppe till höger och klicka på **Create VM**-knappen. En ny meny med många valmöjligheter öppnas.

Först konfigurerar du allmänna inställningar. Som standard är `Node` satt till standardnoden (i detta fall `panel`). Du måste ange ett unikt VM-ID, som som standard är `100` eller ökar om du redan har andra VMer. Ge sedan din VM ett namn, det kan vara vad som helst.

![](https://github.com/zaphosting/docs/assets/42719082/bcd2eb41-a8fc-4a44-9abb-072f9e408d10)

Gå snabbt vidare till OS-inställningarna. Här väljer du ISO-bilden du vill använda, den du laddade upp tidigare. Se också till att definiera typ och version av operativsystemet du använder.

![](https://github.com/zaphosting/docs/assets/42719082/05d51c46-5a69-4cd7-b2e6-c3472437caf9)

Vi rekommenderar att du lämnar System-inställningarna som de är, de bör vara korrekt konfigurerade. Gå vidare till Disk-inställningarna där du kan ange diskstorlek för din VM. Du kan också välja lagringspool, som som standard är `local-lvm`. Resten av inställningarna fungerar bra som standard.

![](https://github.com/zaphosting/docs/assets/42719082/26f11d42-8884-4bb5-b0fe-d7b4df7885a5)

Nästa steg är CPU-inställningarna där du kan definiera antal sockets och kärnor som ska användas. Detta kan du anpassa efter behov för din VM.

![](https://github.com/zaphosting/docs/assets/42719082/91103b8d-dadc-4305-a3fe-bf4c8f96fc27)

Samma sak i Minne-inställningarna, där du kan ange hur mycket minne VM:n ska få och välja ballooning-status.

![](https://github.com/zaphosting/docs/assets/42719082/ac0048cb-0bd4-4791-9a9f-857e5037955d)

Vi rekommenderar också att du lämnar Nätverksinställningarna som standard för tillfället. Slutligen kan du granska alla inställningar du gjort under VM-setupen. Vi rekommenderar att du aktiverar `Start after created` så att din VM startar automatiskt. Om allt ser bra ut, tryck på **Finish** för att skapa VM:n.

![](https://github.com/zaphosting/docs/assets/42719082/d14a8b3d-e9bb-4feb-8049-428e84c1e917)

Och så enkelt har du skapat din första VM i Proxmox-panelen! Du bör kunna se den i serveröversikten till vänster i panelen.





## Avslutning

Grattis, du har nu installerat Proxmox på din dedikerade server! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂