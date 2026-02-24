---
id: dedicated-linux-screen
title: "Screen instellen op een Linux-server - Beheer blijvende terminalsessies"
description: "Ontdek hoe je meerdere terminalsessies op Linux beheert met Screen voor betere productiviteit en sessie persistentie → Leer het nu"
sidebar_label: Screen installeren
services:
  - vserver
  - dedicated
---

## Introductie

Screen is een terminal multiplexer voor Unix-achtige besturingssystemen, zoals Linux. Hiermee kun je meerdere terminalsessies beheren binnen één venster of remote verbinding. In deze gids behandelen we de installatie en geven we tips om je wegwijs te maken met screen.

## Voorbereiding

Voordat je iets installeert op een server, is het slim om eerst de update-commando’s van jouw OS uit te voeren om je server veilig en up-to-date te houden.

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

## Installatie

Screen installeren is super simpel, voer gewoon het commando uit dat bij jouw Linux distro past:

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

## Basisgebruik van Screen

Zoals gezegd kun je met screen meerdere sessies aanmaken. Start er eentje door dit commando te gebruiken, waarbij je `[name]` vervangt door een naam die jij kiest.
```
screen -S [name]
```

:::info
Let op: de commando’s in deze gids zijn hoofdlettergevoelig, vooral bij parameters.
:::

Er opent dan een nieuwe screen sessie waarin je scripts of programma’s kunt draaien die blijven lopen, ook als je de remote verbinding sluit.

Je sluit een screen sessie af met `CTRL + A`, gevolgd door `D` om te detacheren, of typ gewoon `exit` in de console.

:::tip
Bekijk alle actieve sessies/screens met `screen -ls` of `screen -list`.
:::

Om terug te gaan naar een bestaande screen, gebruik je `screen -r [name]` en je zit meteen weer in die sessie.

## Screen Parameter Flags

Screen heeft veel `-` parameters om je commando’s te configureren. Hier een overzicht van de belangrijkste:

| Flag | Alias | Info |
| ---- | ----- | ---- |
| -v   | | Toont de huidige versie van screen |
| -S `[name]` | | Start een nieuwe screen met de naam `[name]` |
| -ls | -list | Lijst alle actieve screens |
| -wipe `[name]` | | Verwijdert screens, optioneel met naam `[name]` |
| -r `[name]` | | Herkoppelen aan de screen sessie `[name]` |
| -d -r `[name]` | | Detacheren van huidige screen en herkoppelen aan `[name]` |

:::tip
Check alle parameters met `screen -h` voor een volledige lijst.
:::

## Geavanceerd gebruik van Screen

### Vensterbeheer

Nu je de basics kent, leer je wat shortcuts om makkelijker door je sessies te navigeren. Binnen een screen kun je meerdere aparte vensters maken voor verschillende taken.

:::note 
Alle shortcuts hieronder voer je uit nadat je `CTRL + A` hebt ingedrukt.
:::

Druk op `C` om een nieuw leeg venster te openen in je huidige map. Navigeer tussen vensters met `N` (volgend), `P` (vorig) of `"` om een lijst te openen en met pijltjestoetsen te kiezen.

Standaard hebben alle vensters dezelfde naam (meestal de shell naam). Verander dat met `A` en geef een nieuwe naam op.

Vensters sluiten doe je met `K`.

#### Vensters splitsen

Wil je 2 vensters naast elkaar? Gebruik `S` voor horizontaal splitsen of `|` voor verticaal. Wissel tussen splitsingen met `Tab`.

:::tip
Na het splitsen ga je met `Tab` naar het nieuwe venster en druk je `"` om een bestaand venster in de tweede split te openen.
:::

Je kunt blijven splitsen, maar let op dat het RAM-gebruik van je server flink kan stijgen bij veel multitasking.

## Afsluiting

Hopelijk heeft deze gids je geholpen om screen op Linux onder de knie te krijgen. Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂