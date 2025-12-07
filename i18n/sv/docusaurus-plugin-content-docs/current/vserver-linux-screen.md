---
id: vserver-linux-screen
title: "VPS: Installation av Screen"
description: "Upptäck hur du effektivt hanterar flera terminalsessioner på Unix-liknande system med Screen → Lär dig mer nu"
sidebar_label: Installera Screen
services:
  - vserver
---

## Introduktion

Screen är en terminalmultiplexer för Unix-liknande operativsystem, som Linux. Den låter dig hantera flera terminalsessioner inom ett enda fönster eller fjärranslutning. I den här guiden går vi igenom installationsstegen och ger dig tips för att bli mer bekant med screen.

## Förberedelser

Innan du installerar något på en server rekommenderar vi att du kör uppdateringskommandot som passar ditt operativsystem för att hålla servern säker.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt update && sudo apt upgrade
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf update
```

</TabItem>
</Tabs>

## Installation

Att installera screen är lika enkelt som att köra följande kommando beroende på din Linux-distribution:

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt install screen
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum install screen
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper install screen
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf install screen
```

</TabItem>
</Tabs>

## Grundläggande användning av Screen

Som nämnt tidigare låter screen dig skapa flera sessioner. För att starta en kör du helt enkelt följande kommando, där du byter ut `[name]` mot vad du vill.
```
screen -S [name]
```

:::info
Tänk på att kommandona i den här guiden är skiftlägeskänsliga, särskilt när det gäller parameterflaggor.
:::

Detta öppnar en ny screen där du kan starta vilket skript eller program du vill som ska fortsätta köras även efter att du stängt fjärranslutningen.

Du kan lämna en screen genom att trycka `CTRL + A` följt av `D` eller helt enkelt skriva `exit` i konsolen.

:::tip
Du kan lista alla aktiva sessioner/screens med kommandot `screen -ls` eller `screen -list`.
:::

För att återgå till en tidigare skapad screen kör du `screen -r [name]` som direkt tar dig tillbaka till rätt session.

## Screen parameterflaggor

Screen har många `-` parameterflaggor som du kan använda för att konfigurera kommandon. Några av de viktigaste finns listade i tabellen nedan.

| Flagga | Alias | Info |
| ---- | ----- | ---- |
| -v   | | Visar aktuell version av screen |
| -S `[name]` | | Startar en ny screen med namnet `[name]` |
| -ls | -list | Listar alla aktiva screens |
| -wipe `[name]` | | Tar bort screens, valfri `[name]`-parameter |
| -r `[name]` | | Återansluter till screen-sessionen `[name]` |
| -d -r `[name]` | | Kopplar från din nuvarande screen och återansluter till `[name]` |

:::tip
Du kan se alla tillgängliga parametrar genom att köra `screen -h` som visar en komplett lista.
:::

## Avancerad användning av Screen

### Fönsterhantering

Nu när du är bekant med grundkommandona i screen är det dags att lära dig några genvägar som hjälper dig navigera mellan dina sessioner smidigare. Inuti en screen kan du skapa flera separata fönster för olika uppgifter.

:::note 
Alla genvägar i det här avsnittet körs efter att du tryckt `CTRL + A`.
:::

Tryck på `C` för att skapa ett nytt tomt fönster i din nuvarande katalog. För att växla mellan fönster kan du använda `N` (nästa), `P` (föregående) eller `"` och välja fönstret du vill se från listan med piltangenterna.

Som standard har alla fönster samma namn (vanligtvis namnet på skalet du använder). För att byta namn kör du kommandot `A` och väljer ett nytt namn.

Slutligen kan du ta bort ett fönster genom att trycka `K`.

#### Delade fönster

För att köra 2 fönster i delad vy kan du använda `S` (horisontellt) eller `|` (vertikalt) och navigera mellan dem med `Tab`.

:::tip
Efter att du skapat ett delat fönster, gå till det med `Tab` och kör `"` för att öppna ett tidigare fönster i den andra vyn.
:::

Du kan fortsätta dela fönster hur mycket du vill, men tänk på att serverns RAM-användning kan öka snabbt när du multitaskar.

## Avslutning

Vi hoppas den här guiden hjälpte dig att förstå hur screen fungerar i Linux. Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂