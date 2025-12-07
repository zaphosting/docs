---
id: dedicated-linux-plesk
title: "Dedikerad Server: Installation av Plesk"
description: "Upptäck hur du effektivt hanterar webbplatser och servrar med Plesks mångsidiga plattform för alla nivåer → Läs mer nu"
sidebar_label: Installera Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Plesk är en komplett plattform för webbhotell och serverhantering som låter dig hantera webbplatser, servrar, e-postkonton och mycket mer via ett användarvänligt gränssnitt. Det är en flexibel lösning som passar både nybörjare och erfarna webbutvecklare och systemadministratörer. 



## Installera Plesk

:::info
Innan installation, kör `apt update` och `apt upgrade` så att de senaste paketen installeras på servern. 
:::
Plesk kan för närvarande endast installeras på Debian 9 (Stretch), Debian 10 (Buster), Ubuntu 18.04 (Bionic Beaver), Ubuntu 20.04 (Focal Fossa), CentOS 7/8, Red Hat Enterprise Linux 7.x/8.x, CloudLinux 7.1+/8, AlmaLinux OS, Rocky Linux 8.x och Virtuozzo Linux 7. Arkitekturen måste vara 64-bit.

Anslutningen till servern kan göras via Putty, till exempel.


## Starta installationen 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="One-Click Installation" default>

För att Plesk ska installeras helt automatiskt med standardkomponenter och funktioner som de flesta Plesk-användare använder, krävs bara ett kommando:

>Installationsprogrammet för Plesk installerar alltid den senaste versionen av Plesk. Det kan hända att bilderna/skärmdumparna här inte visar den senaste versionen av Plesk.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
Om detta fel visas: "-bash: curl: command not found" måste du installera paketet med `apt install curl`.
:::

När kommandot har körts tar det vanligtvis mellan 15 och 60 minuter att installera Plesk helt.

:::info
SSH-sessionen får inte stängas medan installationsprogrammet är aktivt. Det skulle annars leda till avbrott. 
:::
Annars måste servern installeras om för att starta om installationen. 
Om installationsprogrammet startas om utan att först installera om servern kan det uppstå problem med icke-fungerande funktioner under installationen eller i Plesk-panelen. 

:::info
Det kan se ut som att installationsprogrammet "fastnat", men i 99% av fallen fortsätter det efter några minuter eftersom det fortfarande måste konfigurera paket/inställningar med mera.
:::


Installationen är klar när detta visas

![](https://screensaver01.zap-hosting.com/index.php/s/gpNWyd7xZaw22zW/preview)

</TabItem>
<TabItem value="Web Installation" label="Webbinstallation">

Endast några få kommandon behövs för att installera Plesk via webben. 

:::info
Installationsprogrammet för Plesk installerar alltid den senaste versionen av Plesk. Det kan hända att bilderna/skärmdumparna här inte visar den senaste versionen av Plesk.
:::

Ladda ner Plesk-installationsprogrammet:
```
wget https://autoinstall.plesk.com/plesk-installer
```

Sätt rätt behörighet:

```
chmod +x plesk-installer
```

Starta installationsprogrammet:

```
./plesk-installer --web-interface
```

</TabItem>
<TabItem value="Konsolen Installation" label="Konsolinstallation">

Endast några få kommandon krävs för att installera Plesk via konsolen. 

:::info
Installationsprogrammet för Plesk installerar alltid den senaste versionen av Plesk. Det kan hända att bilderna/skärmdumparna här inte visar den senaste versionen av Plesk.
:::

Ladda ner installationsprogrammet:

```
wget https://autoinstall.plesk.com/plesk-installer
```

Sätt rätt behörighet:

```
chmod +x plesk-installer
```

Starta installationsprogrammet:

```
./plesk-installer
```

När de tre startkommandona har körts måste licensen godkännas med "F": 

![](https://screensaver01.zap-hosting.com/index.php/s/dJiJ3sTxCqoC3RR/preview)

Efter godkännandet frågar systemet vilken Plesk-version som ska installeras. Här kan du välja Plesk Obsidian eller Plesk Onyx. Systemet visar också vilken som är mest stabil. Vanligtvis används en "stabil" version för produktion. Eftersom de valda alternativen redan pekar på den stabila versionen, bekräfta detta igen med "F".

Frågan om Plesk får samla in data för produktförbättring kan besvaras med "Y" (Ja) eller "n" (Nej). 

Efter svaret frågar systemet vilken typ av den valda Plesk-versionen du vill installera. Vanligtvis räcker det med typen "Recommended" som redan är förvald. Moduler som inte installeras nu men behövs kan installeras senare i Plesk-panelen. 

Nästa fråga om paket får installeras/uppgraderas bekräftas med "F".

Nu startar installationsprogrammet installationen.

:::info
SSH-sessionen får inte stängas medan installationsprogrammet är aktivt. Det skulle leda till avbrott och servern måste installeras om för att installationsprogrammet ska kunna startas om. 
:::
Det kan se ut som att installationsprogrammet "fastnat", men i 99% av fallen fortsätter det efter några minuter eftersom det måste konfigurera paket/inställningar med mera.

Installationen är klar så fort följande visas: 

![](https://screensaver01.zap-hosting.com/index.php/s/2Wk2Nm2HXCkQjkQ/preview)

</TabItem>
</Tabs>

## Öppna Web Installern

När installationsprogrammet har startats sker installationen i webbläsaren. Installationssidan nås via https://IP:8447 eller via https://Domän.xx:8447.

## Plesk Web Panel

:::info
Följande visas när Web Panel öppnas: "Detta är inte en säker anslutning". Detta måste godkännas första gången, sedan öppnas sidan. 
:::

Webbgränssnittet nås via https://IP:8443 eller https://Domän.xx:8443 på servern. Inloggningsuppgifterna är root/admin och det aktuella root-lösenordet. Alternativt kan du använda någon av de visade URL:erna. Om dessa inte längre fungerar kan du skapa nya URL:er med kommandot ``plesk login``. 

### Setup

När registreringen lyckats måste Admin-kontot ställas in. Ett kontakt namn, en e-postadress och ett lösenord måste anges. Har du redan en Plesk-licens kan du ange den direkt. Alternativt kan du begära en 15-dagars testlicens från Plesk. Slutligen måste användaravtalet godkännas. 
Nu kan Plesk användas. 

### Ställ in språk


Efter installation är Plesk-panelen på engelska, men tyska kan ställas in eller väljas under Verktyg & Inställningar ➡️ Plesk Utseende ➡️ Språk. Där måste "de-DE" väljas. Därefter kan språket sättas permanent för alla genom att klicka på "Make default". 
Efter utloggning och inloggning hittar du Plesk-panelen på tyska.

![](https://screensaver01.zap-hosting.com/index.php/s/GtTGYGCYXwewxNQ/preview)

### Lägg till domän

För att lägga till den första domänen klicka på den blå knappen "Add domain".

[](https://screensaver01.zap-hosting.com/index.php/s/G3fetgKfLNKFr7N/preview)

Nu kan din egen domän anges. Även en IP samt användarnamn och lösenord för webbplatsens utrymme måste definieras. Om subdomänen "www" redan finns i domänens DNS kan ett SSL-certifikat från Let's Encrypt skapas direkt. Detta alternativ kan väljas efter att en e-postadress angetts och bekräftas med den blå "OK"-knappen.  

[](https://screensaver01.zap-hosting.com/index.php/s/Pw2PSFDKGFDXZi2/preview)


:::info
Domänen måste peka på IP:n för webbplatsen, om domänen är hos ZAP-Hosting kan den enkelt pekas om till webbplatsen via EasyDNS, om den är extern måste en A-post sättas till IP:n och subdomänerna "www" och "webmail" måste också peka på IP:n. En MX-post bör också sättas till IP:n för webbplatsen. 


Det kan ta upp till 24 timmar innan en ny/ändrad DNS-post har spridits till rätt destination. 
:::

## SSL-kryptering

Under domänregistreringen/skapandet av webbplatsen genererades redan ett SSL-certifikat från Let's Encrypt, detta kan nu anges/väljas under "Hosting settings" för domänen. Därefter måste du bekräfta med ett klick på "Apply".

:::info
För att alltid omdirigeras till HTTPS (SSL) när webbplatsen öppnas måste rutan "Permanent, SEO-suitable 301 forwarding from HTTP to HTTPS" vara ikryssad. 
:::

[](https://screensaver01.zap-hosting.com/index.php/s/xad7pbeZWY6QQHK/preview)

Om domänen nu öppnas i webbläsaren visas dess kryptering.

![](https://screensaver01.zap-hosting.com/index.php/s/JrNEjciJfz2LzCX/preview)

:::info
Installationen samt inställningen av den första domänen med kryptering är nu helt klar. 
:::


