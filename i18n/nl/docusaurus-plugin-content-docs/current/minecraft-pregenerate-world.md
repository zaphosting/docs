---
id: minecraft-pregenerate-world
title: "Minecraft: Wereld Vooraf Genereren (Chunks)"
description: "Ontdek hoe je Minecraft-werelden efficiënt vooraf kunt genereren met plugins of mods voor soepelere gameplay en geoptimaliseerde serverprestaties → Leer het nu"
sidebar_label: Wereld Vooraf Genereren (Chunks)
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Wil je je wereld snel, efficiënt en veilig vooraf genereren in plaats van tijdens het spelen? Minecraft biedt standaard geen ingebouwde functie hiervoor. Dit kan echter wel met speciaal ontwikkelde plugins of mods. Hoe je deze gebruikt en waar je op moet letten, leggen we hieronder uitgebreid uit.



## Voorbereiding

Allereerst moet je ervoor zorgen dat je server geschikt is voor het gebruik van plugins of mods. Je hebt één van de volgende Minecraft-varianten nodig:

- Minecraft: Forge, Minecraft Fabric (mods)
- Minecraft: Spigot, Minecraft Bukkit, Minecraft: Paper Spigot (plugins)

Gebruik je nu nog geen van deze Minecraft-varianten? Dan kun je via de [game switch(gameserver-gameswitch.md) optie het gewenste spel selecteren.


## Installatie
De meest gebruikte methode om chunks vooraf te genereren is met [Chunky](https://github.com/pop4959/Chunky), beschikbaar voor diverse serverimplementaties als plugin en mod. In dit voorbeeld leggen we chunk-generatie uit en demonstreren we het gebruik van Chunky.

| Variant | Download |
| -------- | ------------------------------------------------------------ |
| Mod | [Forge](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge) [Fabric](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator) |
| Plugin | [Spigot/Bukkit](https://www.spigotmc.org/resources/chunky.81534/) |

Download **Chunky** als plugin of mod en installeer het op je server. Weet je niet precies hoe je [Plugins](minecraft-pluginuploader.md) of [Mods](minecraft-forge-fabric-add-mods-modpacks) installeert? De bijbehorende handleidingen helpen je verder.




## Gebruik 

Zodra **Chunky** succesvol is geïnstalleerd, kun je starten met het genereren van chunks. Dit doe je met het commando `chunky start`.

Wil je de generatie tijdelijk pauzeren en later verdergaan? Gebruik dan `chunky pause` en `chunky continue`. Om het proces helemaal te stoppen, gebruik je `chunky cancel`. Je voert deze commando’s uit via de live console of als operator direct in de game op je server.

:::warning Overbelasting
Een langdurige overschrijding van de resource-limieten kan leiden tot een tijdelijke blokkade. Om dit te voorkomen, moet chunk-generatie in een gebalanceerd tempo en omvang plaatsvinden zodat de systeembelasting binnen acceptabele grenzen blijft.

Meer info over resource-limieten en mogelijke maatregelen vind je in onze [resource limit](gameserver-resourcelimit.md) gids. 
:::



## Commando’s

Hieronder vind je alle commando’s die je met Chunky kunt gebruiken om chunks te genereren en beheren. 

#### Taakbeheer

| Commando         | Beschrijving                                                  |
| --------------- | ------------------------------------------------------------ |
| chunky start    | Start een nieuwe chunk-generatie taak vanaf de huidige selectie |
| chunky pause    | Pauzeert de huidige chunk-generatie taken en slaat voortgang op |
| chunky continue | Hervat lopende of opgeslagen chunk-generatie taken           |
| chunky cancel   | Stopt de huidige chunk-generatie taken en annuleert voortgang |



#### Selectie

| Commando                                    | Beschrijving                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| chunky world [wereld]                       | Stelt de momenteel geselecteerde wereld in                   |
| chunky shape `<shape>`                     | Stelt de vorm in die gegenereerd moet worden                 |
| chunky center [`<x>` `<z>`]                | Stelt het huidige middelpuntblok in                           |
| chunky radius `<radius>`                   | Stelt de huidige straal in                                    |
| chunky worldborder                         | Stelt middelpunt en straal in overeenkomstig de wereldgrens  |
| chunky spawn                               | Stelt het middelpunt op het spawnpunt                         |
| chunky corners `<x1>` `<z1>` `<x2>` `<z2>` | Stelt de selectie in via hoekcoördinaten                      |
| chunky pattern `<pattern>`                 | Stelt het gewenste generatiepatroon in                        |
| chunky slection                            | Toont de huidige selectie                                     |





#### Overig

| Commando                   | Beschrijving                                           |
| ------------------------- | ----------------------------------------------------- |
| chunky silent             | Schakelt het tonen van updateberichten aan/uit        |
| chunky quiet `<interval>` | Stelt het interval in seconden voor updateberichten   |
| chunky progress           | Toont de voortgang van het vooraf genereren in-game   |
| chunky reload             | Herlaadt de configuratie                               |
| chunky trim               | Verwijdert chunks buiten de selectie                   |



## Conclusie

Als je deze stappen hebt gevolgd, heb je Chunky succesvol geïnstalleerd en kun je nu je wereld (chunks) vooraf genereren. Gefeliciteerd! Als alles goed is gegaan, heb je nu een werkende verbinding met je server. Voor vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />