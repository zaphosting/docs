---
id: palworld-enable-pvp
title: "Palworld: PvP inschakelen"
description: "Leer hoe je PvP inschakelt in Palworld, de basisgevechtsinstellingen configureert en aanbevolen PvP-instellingen toepast op je server. -> Leer nu meer"
sidebar_label: Palworld: PvP inschakelen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld bevat een PvP-modus waarmee spelers tegen elkaar kunnen vechten en die de basisgevechten en guild-interacties op je server verandert. In deze gids leer je hoe je PvP handmatig inschakelt door het juiste configuratiebestand te bewerken in de ZAP-Hosting game server administratie en de benodigde instellingen toepast.

:::caution Trial Feature Notice
PvP in Palworld wordt door de game-ontwikkelaar als een proeffunctie beschouwd. Configuratie-opties en gameplay-gedrag kunnen veranderen in toekomstige game-updates.
:::

## Voorbereiding

Voordat je begint, zorg ervoor dat:

- Je toegang hebt tot je Palworld game server in de ZAP-Hosting webinterface
- Je server momenteel gestopt is of opnieuw kan worden gestart na de wijzigingen
- Je begrijpt dat PvP de gameplay aanzienlijk verandert, vooral rond spelergevechten, basisverdediging en itemverlies bij overlijden

:::info Configuratie Toegang
Voor ZAP-Hosting Palworld servers is het relevante configuratiebestand toegankelijk via je game server administratie onder `Configs`.
:::

## Open het Palworld Configuratiebestand

Om PvP in te schakelen, moet je het bestand `PalWorldSettings.ini` bewerken.

### Vind het bestand in de ZAP-Hosting interface

1. Log in op de ZAP-Hosting webinterface.
2. Open je Palworld game server.
3. Navigeer naar `Configs` in de game server administratie.
4. Open het bestand `PalWorldSettings.ini`.



:::note Configuratieformaat
Palworld serverinstellingen worden meestal opgeslagen binnen de `OptionSettings=(...)` sectie in `PalWorldSettings.ini`. Je moet de benodigde sleutels toevoegen of aanpassen binnen dat instellingenblok.
:::

## Schakel de Vereiste PvP-instellingen in

Om PvP te activeren, moet je ervoor zorgen dat de volgende drie instellingen op `True` staan in `PalWorldSettings.ini`.

### Vereiste PvP-sleutels

| Instelling | Vereiste waarde | Beschrijving |
|---|---|---|
| `bIsPvP` | `True` | Schakelt PvP-modus op de server in |
| `bEnablePlayerToPlayerDamage` | `True` | Staat directe schade tussen spelers toe |
| `bEnableDefenseOtherGuildPlayer` | `True` | Staat defensieve interactie met andere guildspelers toe |

### Voorbeeldconfiguratie

Voeg deze waarden toe aan je `OptionSettings=(...)` regel, of wijzig de bestaande waarden als ze al aanwezig zijn:

```ini
bIsPvP=True,
bEnablePlayerToPlayerDamage=True,
bEnableDefenseOtherGuildPlayer=True
```

:::tip Vermijd Dubbele Sleutels
Als een instelling al bestaat in `PalWorldSettings.ini`, bewerk dan de bestaande waarde in plaats van dezelfde sleutel opnieuw toe te voegen. Dubbele vermeldingen kunnen onverwacht gedrag veroorzaken of het oplossen van problemen bemoeilijken.
:::

## Aanbevolen PvP-instellingen

Zodra PvP is ingeschakeld, kun je ook extra instellingen aanpassen voor een meer gebalanceerde PvP-ervaring. De volgende waarden worden vaak aanbevolen voor PvP-gerichte servers.

### Aanbevolen waarden

| Instelling | Aanbevolen waarde | Beschrijving |
|---|---|---|
| `bAllowEnhanceStat_Health` | `False` | Voorkomt toewijzing van HP-statistieken |
| `bAllowEnhanceStat_Attack` | `False` | Voorkomt toewijzing van aanvalstatistieken |
| `bEnableFastTravel` | `True` | Houdt snel reizen ingeschakeld |
| `bEnableFastTravelOnlyBaseCamp` | `True` | Beperkt snel reizen tot basiskampen |
| `bExistPlayerAfterLogout` | `True` | Houdt spelers in de wereld na uitloggen |
| `bEnableAimAssistPad` | `False` | Schakelt controller aim assist uit |
| `DeathPenalty` | `All` | Laat alle items en Pals vallen bij overlijden |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `True` | Staat het plunderen van gedropte items van andere spelers toe |
| `bInvisibleOtherGuildBaseCampAreaFX` | `False` | Toont basiskampen van andere guilds |
| `bBuildAreaLimit` | `True` | Helpt bouwen in beperkte gebieden te voorkomen |
| `GuildPlayerMaxNum` | `4` | Beperkt de grootte van een guild |
| `BaseCampMaxNumInGuild` | `2` | Beperkt het aantal basiskampen per guild |
| `MaxBuildingLimitNum` | `1000` | Beperkt het aantal structuren per speler |
| `GuildRejoinCooldownMinutes` | `60` | Stelt de cooldown voor het opnieuw joinen van een guild in |
| `BlockRespawnTime` | `5.0` | Stelt de respawnvertraging van de basis in |
| `RespawnPenaltyDurationThreshold` | `1800.0` | Tijd voordat de respawnstraf wordt gereset |
| `RespawnPenaltyTimeScale` | `2.0` | Vermenigvuldigt de respawnstraf na herhaalde sterfgevallen |

### Voorbeeld PvP-instellingenblok

Als je de aanbevolen PvP-waarden wilt gebruiken, voeg dan de volgende regels toe aan je `OptionSettings=(...)` sectie:

```ini
bAllowEnhanceStat_Health=False,
bAllowEnhanceStat_Attack=False,
bEnableFastTravel=True,
bEnableFastTravelOnlyBaseCamp=True,
bExistPlayerAfterLogout=True,
bEnableAimAssistPad=False,
DeathPenalty=All,
bCanPickupOtherGuildDeathPenaltyDrop=True,
bInvisibleOtherGuildBaseCampAreaFX=False,
bBuildAreaLimit=True,
GuildPlayerMaxNum=4,
BaseCampMaxNumInGuild=2,
MaxBuildingLimitNum=1000,
GuildRejoinCooldownMinutes=60,
BlockRespawnTime=5.0,
RespawnPenaltyDurationThreshold=1800.0,
RespawnPenaltyTimeScale=2.0
```

## Optionele PvP-beperkingen en Beloningen

Afhankelijk van hoe competitief je PvP-server moet zijn, kun je ook technologiebeperkingen en PvP-beloningen configureren.

### Beperk snelbewegings-technologieën

Je kunt bepaalde beweging-gerelateerde technologieën beperken door `DenyTechnologyList` in te stellen.

| Instelling | Voorbeeldwaarde |
|---|---|
| `DenyTechnologyList` | `SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5` |

Voorbeeldvermelding:

```ini
DenyTechnologyList="SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5"
```

:::note Controleer Bestaande Syntax
De configuratieformattering van Palworld kan verschillen afhankelijk van de huidige serverversie en hoe de bestaande `OptionSettings=(...)` regel is opgebouwd. Zorg ervoor dat je invoer overeenkomt met de al gebruikte syntaxisstijl in je bestand voordat je opslaat.
:::

### Configureer PvP-beloningen bij kills

Palworld bevat ook PvP-gerelateerde beloningsopties voor het doden van spelers.

| Instelling | Beschrijving |
|---|---|
| `bAdditionalDropItemWhenPlayerKillingInPvPMode` | Schakelt extra itemdrops in bij PvP-kills |
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Definieert het item-ID dat gedropt wordt |
| `AdditionalDropItemNumWhenPlayerKillingInPvPMode` | Stelt de hoeveelheid drops in |
| `bDisplayPvPItemNumOnWorldMap_BaseCamp` | Toont PvP-itemaantallen op de wereldkaart voor basiskampen |
| `bDisplayPvPItemNumOnWorldMap_Player` | Toont PvP-itemaantallen op de wereldkaart voor spelers |

Voorbeeldconfiguratie:

```ini
bAdditionalDropItemWhenPlayerKillingInPvPMode=True,
AdditionalDropItemWhenPlayerKillingInPvPMode=PlayerDropItem,
AdditionalDropItemNumWhenPlayerKillingInPvPMode=1,
bDisplayPvPItemNumOnWorldMap_BaseCamp=True,
bDisplayPvPItemNumOnWorldMap_Player=True
```

:::caution Item ID Compatibiliteit
Als je een aangepaste waarde gebruikt voor `AdditionalDropItemWhenPlayerKillingInPvPMode`, zorg er dan voor dat het item-ID geldig is voor jouw huidige Palworld-versie. Ongeldige item-ID's kunnen ervoor zorgen dat de instelling faalt of genegeerd wordt.
:::

## Wat Verandert Er Als PvP Is Ingeschakeld

Na het inschakelen van PvP verandert de gameplay op je server op verschillende belangrijke manieren. Op basis van de huidige publiek beschikbare Palworld PvP-richtlijnen kun je over het algemeen het volgende verwachten:

- Spelers kunnen elkaar schade toebrengen
- Het betreden van de basis van een andere speler kan ervoor zorgen dat hun basis-Pals vijandig worden
- Vliegende spelers en bereden Pals kunnen meer schade oplopen
- Opgeroepen Pals en basis-Pals kunnen minder schade oplopen
- Spelers kunnen mogelijk toegang krijgen tot kisten van andere guilds
- Schade met melee-wapens aan structuren van andere spelers kan verminderd zijn
- Basis-Pals verdedigen mogelijk een groter gebied
- De toegestane afstand tussen naburige bases kan toenemen
- Spelers kunnen meldingen krijgen wanneer hun basis wordt aangevallen
- Bouwen en repareren kan beperkt zijn tijdens een basisaanval
- Sommige wapens kunnen aangepaste bereik- of schadewaarden hebben in PvP-modus

:::danger Gameplay Impact Waarschuwing
Het inschakelen van PvP kan de progressie, basisbeveiliging en spelersbinding op je server aanzienlijk veranderen. Als je een publieke server runt, wordt aanbevolen je spelers te informeren voordat je deze wijzigingen toepast.
:::

## Sla het Bestand Op en Herstart de Server

Nadat je `PalWorldSettings.ini` hebt bewerkt, sla je het bestand op in het ZAP-Hosting `Configs`-gedeelte.

### Pas de wijzigingen toe

Om de nieuwe PvP-instellingen te activeren:

1. Sla de wijzigingen op in `PalWorldSettings.ini`.
2. Herstart je Palworld-server via de ZAP-Hosting game server administratie.

Een herstart is vereist om de configuratiewijzigingen door te voeren.

:::info Geen Extra Commando Nodig
Normaal gesproken is er geen extra in-game of consolecommando nodig na het bewerken van `PalWorldSettings.ini`. Een volledige serverherstart is de vereiste stap om de nieuwe PvP-configuratie toe te passen.
:::

## Controleer of PvP Actief Is

Na het herstarten van de server, join je de server en test je het gedrag in de game.

### Basiscontroles

Je kunt de setup verifiëren door te controleren of:

- Spelers elkaar schade kunnen toebrengen
- PvP-gerelateerd basisgedrag actief is
- Strafregels bij overlijden en lootregels overeenkomen met je configuratie
- Optionele beperkingen zoals `DenyTechnologyList` werken zoals verwacht

Als de wijzigingen niet van kracht zijn, open dan `PalWorldSettings.ini` opnieuw en controleer op:

- Verkeerd gespelde instellingenamen
- Dubbele sleutels
- Onjuiste komma’s of formattering binnen `OptionSettings=(...)`
- Waarden die niet correct zijn opgeslagen voor de herstart

## Conclusie

Gefeliciteerd, je hebt PvP succesvol ingeschakeld op je Palworld-server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze supportafdeling, die dagelijks voor je klaarstaat! 🙂