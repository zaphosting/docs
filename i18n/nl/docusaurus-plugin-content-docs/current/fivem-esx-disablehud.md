---
id: fivem-esx-disablehud
title: "FiveM: HUD uitschakelen/inschakelen"
description: "Leer hoe je je ESX-serverconfig aanpast voor betere HUD-beheer en serverprestaties → Ontdek het nu"
sidebar_label: HUD uitschakelen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Gearchiveerde gids
Dit document is gearchiveerd. Documenten worden gearchiveerd als ze niet meer relevant, onjuist of verouderd zijn. Het is om de volgende reden gearchiveerd:

**Reden**: De methode is voor een verouderde ESX-versie. Deze aanpak werkt niet voor de huidige ESX-versie, omdat de structuur is veranderd. 
::::



<InlineVoucher />

## 📑 Config vinden en aanpassen

Als je dit gedaan hebt, open je de Config-pagina en zoek je naar es_extended.  
Druk gewoon op CTRL + F en zoek naar es_extended.  
Dan vind je het snel.  
Daar gaan we mee aan de slag.

![](https://screensaver01.zap-hosting.com/index.php/s/FfjdwPMGYgz2k3k/preview)

Laten we nu kijken naar: Config.EnableHUD.

![](https://screensaver01.zap-hosting.com/index.php/s/F6w582EoXgbPjeC/preview)

Zet deze op false en sla het bestand op.

Ga daarna naar de Server.cfg.  
Deze vind je ook op de Config-pagina.  
Zoek hier weer met STRG + F naar es_  
Zoek dan naar es_ui en verwijder deze regel helemaal.  
Sla daarna opnieuw op.

Als je dit gedaan hebt, hoef je alleen nog maar de server te herstarten en dat was het.

<InlineVoucher />