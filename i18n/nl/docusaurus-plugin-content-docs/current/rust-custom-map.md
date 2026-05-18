---
id: rust-custom-map
title: "Rust: Gebruik een Custom Map op je Server"
description: "Leer hoe je een custom map instelt en draait op je Rust server met de Level URL instelling → Ontdek het nu"
sidebar_label: Custom Map
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Custom maps geven Rust server-eigenaren de mogelijkheid om unieke gameplay-ervaringen te creëren die verder gaan dan de standaard procedurele maps. Veel communities gebruiken custom maps om nieuwe monumenten toe te voegen, het terrein anders in te richten, speciale events te organiseren of compleet nieuwe omgevingen te ontwerpen.

Deze maps worden meestal gemaakt met tools zoals **RustEdit** en gedeeld via platforms als **Lone Design**, **Codefling** of community map repositories. Zodra je een mapbestand of downloadlink hebt, kun je deze direct in je serverinstellingen configureren.

<InlineVoucher />



## Voorbereiding

Voordat je een custom map instelt, heb je een geldige **map download URL** nodig. Custom maps worden meestal gehost op map distributieplatforms of geleverd door de mapmakers zelf.

De URL verwijst meestal naar een `.map` bestand of een downloadbaar mappakket. Zorg dat de link publiek toegankelijk is, zodat de Rust server de map tijdens het opstarten kan downloaden. Voorbeeld van een map URL:

```
https://example-map-host.com/maps/custommap.map
```



## Configuratie

Om een custom map in te stellen op je Rust server, open je je **gameserver beheerpanel** en ga je naar **Instellingen**.

Zoek het configuratieveld genaamd **Level URL**. Met deze instelling kan de server tijdens het opstarten een custom Rust map downloaden en laden. Plak je custom map URL in het **Level URL** veld. Bijvoorbeeld:

```
https://example-map-host.com/maps/custommap.map
```

Sla de instellingen op in het panel. Wanneer de server opstart, downloadt Rust automatisch de map van de opgegeven URL en laadt deze in plaats van een procedurele map te genereren.

Als je custom map extra configuratieparameters nodig heeft (zoals specifieke seeds of wereldgroottes), worden deze meestal door de mapmaker meegeleverd en moeten ze ook aan de serverconfig toegevoegd worden.

Na het opslaan van de configuratie, **herstart je de server** zodat de custom map gedownload en geladen kan worden.



## Belangrijke tips

Custom maps moeten compatibel zijn met de Rust serverversie die je draait. Als het mapbestand verouderd of beschadigd is, kan de server niet starten of terugvallen op een procedurele map.

Grote custom maps kunnen ook de opstarttijd van de server verlengen, omdat de server de map eerst moet downloaden en voorbereiden voordat spelers kunnen joinen.

Als spelers na het wisselen van map niet kunnen verbinden, controleer dan of de map URL correct is en vanaf het internet bereikbaar is.



## Conclusie

Gefeliciteerd! Je hebt succesvol een custom map ingesteld voor je Rust server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />