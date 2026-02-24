---
id: vserver-linux-plesk
title: "Installera Plesk på en Linux-server – Hantera webbplatser med ett kraftfullt kontrollpanel"
description: "Upptäck hur du effektivt hanterar webbplatser och servrar med Plesk, för både nybörjare och proffs → Läs mer nu"
sidebar_label: Installera Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Plesk är en komplett plattform för webbhosting och serverhantering som låter dig hantera webbplatser, servrar, e-postkonton och mycket mer via ett användarvänligt gränssnitt. Det är en flexibel lösning som passar både nybörjare och erfarna webbutvecklare och systemadministratörer.

<InlineVoucher />

## Installera Plesk

:::info
Innan installation, kör `apt update` och `apt upgrade` så att de senaste paketen installeras på servern.
:::
Plesk kan för närvarande endast installeras på Debian 9 (Stretch), Debian 10 (Buster), Ubuntu 18.04 (Bionic Beaver), Ubuntu 20.04 (Focal Fossa), CentOS 7/8, Red Hat Enterprise Linux 7.x/8.x, CloudLinux 7.1+/8, AlmaLinux OS, Rocky Linux 8.x och Virtuozzo Linux 7. Arkitekturen måste vara 64-bitars.

Anslutningen till servern kan göras via Putty, till exempel.

## Starta installationen

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="One-Click Installation" default>

För att Plesk ska installeras helt automatiskt med standardkomponenter och funktioner som de flesta Plesk-användare använder, krävs bara ett kommando:

> Plesk-installatören installerar alltid den senaste versionen av Plesk. Det kan hända att bilderna/skärmdumparna här inte visar den allra senaste versionen.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
Om detta fel visas: "-bash: curl: command not found" måste du installera paketet med `apt install curl`.
:::

När kommandot körts tar det vanligtvis mellan 15 och 60 minuter att installera Plesk helt.

:::info
SSH-sessionen får inte stängas medan installatören är aktiv. Det skulle annars avbryta installationen.
:::
Annars måste servern installeras om för att starta om installatören.  
Om installatören startas om utan att servern först installeras om kan det uppstå problem med icke-fungerande funktioner under installationen eller i Plesk-panelen.

:::info
Det kan se ut som att installatören "fastnat", men i 99 % av fallen fortsätter den efter några minuter eftersom den fortfarande konfigurerar paket och inställningar.
:::

Installationen är klar när detta visas:

![](https://screensaver01.zap-hosting.com/index.php/s/9o6bEzBr8rCAWzf/preview)

</TabItem>
<TabItem value="Web Installation" label="Webbinstallation">

Endast några få kommandon behövs för att installera Plesk via webben.

:::info
Plesk-installatören installerar alltid den senaste versionen av Plesk. Det kan hända att bilderna/skärmdumparna här inte visar den allra senaste versionen.
:::

Ladda ner Plesk-installatören:
```
wget https://autoinstall.plesk.com/plesk-installer
```

Ge rätt behörighet:

```
chmod +x plesk-installer
```

Starta installatören:

```
./plesk-installer --web-interface
```

</TabItem>
<TabItem value="Konsolen Installation" label="Konsolinstallation">

Endast några få kommandon krävs för att installera Plesk via konsolen.

:::info
Plesk-installatören installerar alltid den senaste versionen av Plesk. Det kan hända att bilderna/skärmdumparna här inte visar den allra senaste versionen.
:::

Ladda ner installatören:

```
wget https://autoinstall.plesk.com/plesk-installer
```

Ge rätt behörighet:

```
chmod +x plesk-installer
```

Starta installatören:

```
./plesk-installer
```

När de tre kommandona körts måste licensen godkännas med "F":

![](https://screensaver01.zap-hosting.com/index.php/s/XrCa3WYALoDx6H3/preview)

Efter godkännandet frågar systemet vilken Plesk-version som ska installeras, t.ex. Plesk Obsidian eller Plesk Onyx. Det visas också vilken som är den mest stabila. Vanligtvis används en "stable" version för produktion. Eftersom de valda alternativen redan pekar på den stabila versionen, bekräfta detta igen med "F".

Frågan om Plesk får samla in data för produktförbättring kan besvaras med "Y" (Ja) eller "n" (Nej).

Efter det frågar systemet vilken typ av den valda Plesk-versionen du vill installera. Vanligtvis räcker det med typen "Recommended" som redan är förvald. Moduler som inte installeras nu men behövs kan installeras senare i Plesk-panelen.

Nästa fråga om paket får installeras/uppgraderas bekräftas med "F".

Nu startar installatören installationen.

:::info
SSH-sessionen får inte stängas medan installatören är aktiv. Det skulle leda till avbrott och servern måste installeras om för att starta om installatören.
:::
Det kan se ut som att installatören "fastnat", men i 99 % av fallen fortsätter den efter några minuter eftersom den måste konfigurera paket och inställningar.

Installationen är klar när följande visas:

![](https://screensaver01.zap-hosting.com/index.php/s/8K5p6RHapwYDfZY/preview)

</TabItem>
</Tabs>

## Öppna webbinstallatören

När installatören startats sker installationen i webbläsaren. Installationssidan nås via `https://IP:8447` eller `https://Domän.xx:8447`.

## Plesk Web Panel

:::info
När du öppnar Web Panel visas: "This is not a secure connection". Detta måste godkännas första gången, sedan öppnas sidan.
:::

Webbgränssnittet nås via `https://IP:8443` eller `https://Domän.xx:8443` på servern. Inloggningsuppgifterna är root/admin och det aktuella root-lösenordet. Alternativt kan du använda någon av de visade URL:erna. Om de inte längre är giltiga kan du skapa nya med kommandot ``plesk login``.

### Setup

När registreringen lyckats måste Admin-kontot ställas in. Ett kontakt namn, e-post och lösenord måste anges. Har du redan en Plesk-licens kan du ange den direkt. Alternativt kan du begära en 15-dagars testlicens från Plesk. Slutligen måste användaravtalet godkännas.  
Nu kan Plesk användas.

### Ställ in språk

Efter installationen är Plesk-panelen på engelska, men tyska kan ställas in eller väljas under Verktyg & Inställningar ➡️ Plesk Utseende ➡️ Språk. Där måste "de-DE" väljas. Sedan kan språket sättas permanent för alla genom att klicka på "Make default".  
Efter utloggning och inloggning hittar du Plesk-panelen på tyska.

![](https://screensaver01.zap-hosting.com/index.php/s/6Wo8Qz3oMXGzn3t/preview)

### Lägg till domän

För att lägga till din första domän klicka på den blå knappen "Add domain".

![](https://screensaver01.zap-hosting.com/index.php/s/2S4mgRPctffS452/preview)

Nu kan din egen domän anges. Även en IP samt användarnamn och lösenord för webbplatsens utrymme måste definieras. Om subdomänen "www" redan finns i domänens DNS kan ett SSL-certifikat från Let's Encrypt skapas direkt. Detta alternativ kan väljas efter att en e-postadress angetts och bekräftats med den blå "OK"-knappen.

![](https://screensaver01.zap-hosting.com/index.php/s/SLSBz5TRH2mDBB8/preview)

:::info
Domänen måste peka på IP:n för webbplatsen. Om domänen är hos ZAP-Hosting kan den enkelt pekas om via EasyDNS. Om den är extern måste en A-post sättas till IP:n och subdomänerna "www" och "webmail" måste också peka på IP:n. En MX-post bör också sättas till webbplatsens IP.

Det kan ta upp till 24 timmar innan en ny eller ändrad DNS-post har spridits till rätt destination.
:::

## SSL-kryptering

Under domänregistreringen/webbplatsens skapande genererades redan ett SSL-certifikat från Let's Encrypt, detta kan nu väljas under "Hosting settings" för domänen. Sedan måste du klicka på "Apply" för att bekräfta.

:::info
För att alltid omdirigeras till HTTPS (SSL) när webbplatsen öppnas måste rutan "Permanent, SEO-suitable 301 forwarding from HTTP to HTTPS" kryssas i.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/HL4tcnTqJtX7be9/preview)

Om domänen nu öppnas i webbläsaren visas dess kryptering.

![](https://screensaver01.zap-hosting.com/index.php/s/xcqwAQWK77X3yip/preview)

:::info
Installationen och inställningen av den första domänen med kryptering är nu helt klar.
:::

## Slutsats

Grattis, du har nu installerat och konfigurerat Plesk! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />