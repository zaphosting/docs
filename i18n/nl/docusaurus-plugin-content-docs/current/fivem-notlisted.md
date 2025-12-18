---
id: fivem-notlisted
title: "FiveM: Server verschijnt niet in de serverlijst"
description: "Ontdek hoe je problemen met serververmelding oplost en ervoor zorgt dat je server correct in de lijst verschijnt → Leer het nu"
sidebar_label: Server niet in Serverlijst
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Als je server niet in de serverlijst verschijnt, kan dat verschillende oorzaken hebben. Als deze gids het probleem niet oplost, vragen we je contact op te nemen met onze [Support](https://zap-hosting.com/en/customer/support/).

<InlineVoucher />

## Configuratiefout

Vaak zijn het simpele configuratiefouten die dit probleem veroorzaken. Eerst checken we of de listing niet per ongeluk is uitgeschakeld, daarvoor kijken we naar de `sv_master1` regel:

![](https://screensaver01.zap-hosting.com/index.php/s/KBH8deTbXxfrWtB/preview)

:::info
Deze regel **moet altijd** uitcommentarieerd zijn met een #. Als dat niet zo is, wordt je server niet weergegeven.
:::

Check ook de servernaam (`sv_hostname`):

![](https://screensaver01.zap-hosting.com/index.php/s/9KyEj4tNQWRYxdB/preview)

In dit voorbeeld mist het aanhalingsteken aan het einde van de regel. Bij sommige servernamen kunnen er ook problemen ontstaan door de opmaak. We raden aan om speciale tekens zoals [DE], ä, ü, ö te verwijderen in dat geval.

## Problematische resources

Het kan ook zijn dat bepaalde resources voorkomen dat je server wordt weergegeven. We raden aan om de laatst geïnstalleerde resources te verwijderen en de server daarna ongeveer 1 uur online te laten. In de meeste gevallen verschijnt de server dan weer in de lijst.

## Herinstallatie

Helpt niks van het bovenstaande? Dan raden we een verse installatie aan. Dit zet alle serverbestanden terug naar de standaardinstellingen.

:::info
Maak altijd eerst een backup voordat je herinstalleert, anders gaan je serverdata verloren.
:::

<InlineVoucher />