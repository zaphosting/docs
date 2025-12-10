---
id: domain-cloudflare-setup
title: "Domein: Domein instellen met Cloudflare"
description: "Ontdek hoe je de beveiliging en prestaties van je website verbetert met Cloudflare en ZAP-Hosting domeinen → Leer het nu"
sidebar_label: Cloudflare setup
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Cloudflare is een superpopulaire CDN (Content Delivery Network) provider die je websites voorziet van betere beveiliging, DDoS-bescherming en een makkelijk te gebruiken dashboard. In deze gids leggen we uit hoe je jouw ZAP-Hosting domein instelt om samen te werken met Cloudflare via ExpertDNS en het aanpassen van de nameservers.

<InlineVoucher />

## Voorbereiding
Om deze gids te volgen heb je nodig:
- Een domein in je ZAP-Hosting account
- Een Cloudflare account
  
## Stap 1: ExpertDNS optie inschakelen

Ga naar het webinterface paneel van je gekozen domein in je ZAP-Hosting account. Zoek de **ExpertDNS** optie en zet deze aan door het vinkje aan te zetten en op opslaan te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## Stap 2: Domein instellen op Cloudflare

De volgende stappen doe je in Cloudflare, dus log eerst in op je Cloudflare account. Zodra je bent ingelogd, voeg je je website toe aan het dashboard door de setup stappen van Cloudflare te volgen.

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

Bij stap 4 krijg je de nameservers te zien die je moet instellen.

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

Ga terug naar het webinterface paneel van je domein en open de **ExpertDNS** sectie. Verwijder hier de standaard ZAP-Hosting nameservers en vervang ze door de nameservers die Cloudflare je heeft gegeven.

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

Vergeet niet je wijzigingen op te slaan zodra je klaar bent.

## Stap 3: Setup afronden op Cloudflare

Ga terug naar je Cloudflare dashboard. Op de setup pagina van je domein zie je een knop om Cloudflare te dwingen je nameservers opnieuw te controleren.

:::info
Het kan tot 24 uur duren voordat je nameserver wijzigingen worden herkend, maar meestal gaat het veel sneller.
:::

Zodra Cloudflare je nameserver wijzigingen herkent, ontvang je een mail dat je setup klaar is. Je kunt dit ook checken in je Cloudflare dashboard. Een succesvolle setup toont **Actief** onder het domein dat je hebt ingesteld.

Je hebt nu je domein succesvol geïntegreerd met Cloudflare, wat zorgt voor betere prestaties, beveiliging en beheer van je website.

<InlineVoucher />