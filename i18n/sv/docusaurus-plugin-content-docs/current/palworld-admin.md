---
id: palworld-admin
title: "Palworld: Ställ in Admin"
description: "Lär dig hur du säkrar din Palworld-server med ett admin-lösenord och hanterar betrodda spelare effektivt → Läs mer nu"
sidebar_label: Ställ in Admin
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


##Introduktion
I den här guiden går vi igenom hur du konfigurerar din server med ett admin-lösenord och lägger till dig själv som admin i spelet. Det här lösenordet kan delas med betrodda spelare för att ge tillgång till en rad admin-kommandon. Du kan lära dig mer om dessa serverkommandon i vår [Server Commands](palworld-server-commands.md)-guide.
<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ramgExKNxeLeDdL/preview" title="Ställ in Palworld-server på bara EN MINUT!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Konfigurera ditt Admin-lösenord

Först måste du komma åt dina konfigurationsinställningar. Det finns några olika sätt att göra detta på, vi listar dem alla nedan med instruktioner för hur du sätter lösenordet. Vi rekommenderar att använda **Webinterface** eftersom det är det mest användarvänliga. När du har satt ditt admin-lösenord kan du gå vidare till nästa steg.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

Det mest användarvänliga sättet är att gå till **Settings**-sektionen i ditt spelservers webinterface.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

I **Settings**-området, leta upp alternativet **Game server password**. Här skapar du ett lösenord som du vill använda och skriver in det.

![](https://screensaver01.zap-hosting.com/index.php/s/aQYQDYMP34NnNXr/preview)

:::info
När du har valt ett lösenord, scrolla upp och se till att trycka på den gröna **Save**-knappen för att bekräfta valet.

![](https://screensaver01.zap-hosting.com/index.php/s/YG5MZ6Jt8SdFy4A/preview)
:::

</TabItem>

<TabItem value="configs" label="Via WI Config-fil">

#### Via WI Config-fil

:::note
Servern måste vara stoppad innan config-filen kan redigeras, att redigera config och starta om servern kommer att göra att ändringarna försvinner.
:::

Alternativt, för dig som vill redigera filen direkt, kan du gå till **Configs**-sektionen i ditt spelservers webinterface och klicka på den blå redigeringsknappen, som visas nedan:

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Detta öppnar en textredigerare direkt på sidan så att du kan redigera filen. Leta upp alternativet **AdminPassword** i filen (använd `CTRL+F` för att söka) och ändra det till det admin-lösenord du vill sätta. Spara sedan filen och starta servern.

![](https://screensaver01.zap-hosting.com/index.php/s/gpBjxxmdsWKD4t2/preview)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Servern måste vara stoppad innan config-filen kan redigeras, att redigera config och starta om servern kommer att göra att ändringarna försvinner.
:::

Det sista sättet att komma åt filen är via FTP. Om du inte är van vid FTP rekommenderar vi att du kollar in vår [Access via FTP](gameserver-ftpaccess.md)-guide. Men det här sättet tar längre tid och om du vill redigera filens innehåll direkt rekommenderar vi att du använder **Configs**-sektionen i webinterfacet som nämnts ovan.

</TabItem>
</Tabs>

## Sätt dig själv som admin

När ditt admin-lösenord är satt måste du lägga till dig själv som admin. Starta Palworld och anslut till din server. Behöver du hjälp med detta? Kolla in vår [Connect to Server](palworld-connect.md)-guide.

I spelet, öppna chatten med `Enter`. Skriv sedan in följande kommando, byt ut `[password]` mot det admin-lösenord du satte tidigare:

```
/AdminPassword [password]
```

![](https://screensaver01.zap-hosting.com/index.php/s/75D5ejaWNM6oYNX/preview)

Du ska få ett bekräftelsemeddelande i chatten om det var rätt. Får du ett felmeddelande, dubbelkolla att admin-lösenordet du skrev in är korrekt och det du satte i föregående steg.

<InlineVoucher />