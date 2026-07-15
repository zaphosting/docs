---
id: palworld-change-server-type
title: "Palworld: Servertype Wijzigen"
description: "Leer hoe je het Palworld-servertype wijzigt tussen Linux en Windows, het juiste config-pad bijwerkt en de wijziging correct toepast voor mod-compatibiliteit. -> Leer nu meer"
sidebar_label: "Servertype Wijzigen"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld-servers kunnen draaien met verschillende servertype, meestal Linux of Windows, afhankelijk van je hostingconfiguratie en moddingvereisten. In deze handleiding leer je hoe je het servertype wijzigt in de ZAP-Hosting interface, het juiste configuratiebestand vindt en de wijziging correct toepast.



## Voorbereiding

Zorg ervoor dat je toegang hebt tot je Palworld-gameserver in de ZAP-Hosting webinterface en dat je toestemming hebt om de server te stoppen en opnieuw te starten.

:::info Belangrijke informatie over het wijzigen van het servertype
Het wijzigen van het servertype van Linux naar Windows, of andersom, kan invloed hebben op bestandslocaties, mod-compatibiliteit en bestaande configuratiepaden. Het Windows-servertype is vaak vereist voor bepaalde UE4SS-gebaseerde modconfiguraties.
:::

:::caution Controleer of een herinstallatie nodig is
Afhankelijk van hoe het Palworld-product op je service is geïnstalleerd, kan het wijzigen van het servertype een herinstallatie of heruitrol van de software vereisen. Als de optie niet direct beschikbaar is in je interface, neem dan contact op met de support voordat je verdergaat.
:::

## Begrijp wat er verandert bij het wisselen van servertype

Het wijzigen van het servertype betekent meestal niet dat je een waarde in de gameplayconfiguratie van Palworld zelf aanpast. De belangrijkste wijziging is de onderliggende serveromgeving, die ook de locatie van de actieve configuratiebestanden verandert.

Voor Palworld is het belangrijkste configuratiebestand meestal:

- `PalWorldSettings.ini`

De map waarin dit bestand staat, hangt af van het gekozen servertype.

| Servertype | Configuratiemap | Hoofdconfiguratiebestand |
| --- | --- | --- |
| Linux | `Pal/Saved/Config/LinuxServer/` | `PalWorldSettings.ini` |
| Windows | `Pal/Saved/Config/WindowsServer/` | `PalWorldSettings.ini` |

:::note Waarom dit belangrijk is
Als je het Linux-configuratiebestand aanpast terwijl je server als Windows draait, worden je wijzigingen mogelijk niet toegepast omdat de server het Windows-specifieke pad gebruikt.
:::

## Stop de server

Stop de server voordat je het servertype wijzigt om bestandsconflicten en incomplete wijzigingen te voorkomen.

1. Log in op de ZAP-Hosting gameserver webinterface.
2. Open de Palworld serverbeheerpagina.
3. Stop de server via de serverbedieningsopties.

:::tip Aanbevolen vóór het aanpassen
Maak een back-up voordat je het servertype wijzigt, vooral als je al mods gebruikt of handmatig configuratiebestanden hebt aangepast.
:::

## Wijzig het servertype in de ZAP-Hosting interface

De wijziging van het servertype gebeurt meestal via de product- of software-instellingen in de ZAP-Hosting interface, niet door een regel in `PalWorldSettings.ini` aan te passen.

1. Ga in je Palworld serverbeheer naar het gedeelte voor serversoftware of game-instellingen.
2. Zoek de optie die het geïnstalleerde servertype of softwarevariant regelt.
3. Wijzig de instelling van `Linux` naar `Windows` of andersom, afhankelijk van je gewenste setup.
4. Sla de wijziging op.



:::info Als je de optie voor servertype niet kunt vinden
De exacte naam en locatie van deze instelling kan verschillen per ZAP-Hosting interface of productversie. Als er geen servertype-selector zichtbaar is, kan het zijn dat een herinstallatie of supporthulp nodig is.
:::

## Bewerk het juiste configuratiebestand

Na het wijzigen van het servertype moet je controleren dat je het actieve configuratiebestand in de juiste map bewerkt.

### Open het Configuratiegedeelte

In de ZAP-Hosting gameserverbeheer:

1. Open je Palworld server.
2. Ga naar `Configs`.
3. Navigeer naar de map die overeenkomt met je gekozen servertype.

Gebruik een van de volgende paden:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

Open vervolgens:

- `PalWorldSettings.ini`

### Controleer of pas je instellingen opnieuw toe

Als je eerder instellingen hebt aangepast terwijl je het andere servertype gebruikte, staan die wijzigingen mogelijk alleen in de oude map. Vergelijk beide versies van `PalWorldSettings.ini` en pas de benodigde waarden opnieuw toe in het nu actieve bestand.

| Wat controleren | Waarom dit belangrijk is |
| --- | --- |
| Bestaande aangepaste instellingen | Deze kunnen alleen in de vorige servertype-map staan |
| Mod-gerelateerde instellingen | Windows wordt vaak gebruikt voor UE4SS mod-ondersteuning |
| Gameplaywaarden | De server leest alleen het bestand uit het actieve OS-specifieke pad |

:::caution Ga er niet vanuit dat beide bestanden synchroon zijn
De Linux- en Windows-configuratiemap zijn gescheiden. Het wisselen van servertype zorgt niet automatisch dat je aangepaste instellingen worden gekopieerd.
:::

## Controleer de configuratie-invoer

Het servertype zelf wordt normaal gesproken niet geregeld door een regel in `PalWorldSettings.ini`. Toch moet je na het wisselen controleren of je actieve configuratiebestand de verwachte instellingen bevat.

Een typische `PalWorldSettings.ini` ziet er ongeveer zo uit:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,EnablePlayerToPlayerDamage=False,EnableFriendlyFire=False,EnableInvaderEnemy=True,ActiveUNKO=False,EnableAimAssistPad=True,EnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,AutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,IsMultiplay=True,IsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,EnableNonLoginPenalty=True,EnableFastTravel=True,IsStartLocationSelectByMap=True,ExistPlayerAfterLogout=False,EnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="[your_server_name]",ServerDescription="",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Vervang placeholders zoals:

- `[your_server_name]` door je eigen servernaam
- `[your_admin_password]` door je adminwachtwoord
- `[your_server_password]` door je join-wachtwoord als je dat gebruikt
- `[your_server_ip]` door je publieke server-IP als dat vereist is

:::note Geen speciale commando’s nodig in het bestand
Er is geen bekende `PalWorldSettings.ini`-instelling die het onderliggende servertype van Linux naar Windows of andersom wijzigt. Die wijziging wordt geregeld door de serveromgeving in de hostinginterface.
:::

## Pas de wijziging toe

Nadat je het servertype hebt gewijzigd en het juiste configuratiebestand hebt gecontroleerd, moet je de nieuwe setup toepassen.

### Herstart de server

Start de server opnieuw via de ZAP-Hosting webinterface nadat je je wijzigingen hebt opgeslagen.

In veel gevallen is een normale herstart voldoende als het servertype al succesvol is aangepast.

### Herinstalleren als de interface dat vereist

Sommige installaties vereisen een herinstallatie of heruitrol na het wijzigen van het softwaretype. Volg deze optie zorgvuldig als die wordt aangeboden en controleer daarna of:

- het juiste servertype actief is
- het juiste config-pad wordt gebruikt
- je `PalWorldSettings.ini`-waarden nog aanwezig zijn

:::danger Herinstallatie kan bestanden overschrijven
Als een herinstallatie nodig is, kunnen aangepaste bestanden of mods worden verwijderd tenzij je eerst een back-up hebt gemaakt. Controleer altijd je save data, mods en configuratiebestanden voordat je een herinstallatie bevestigt.
:::

## Controleer of het nieuwe servertype actief is

Controleer na het opnieuw starten van de server of de wijziging succesvol is doorgevoerd.

### Controleer via het config-pad

Open `Configs` opnieuw en kijk of het actieve pad nu overeenkomt met je gekozen servertype:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

### Controleer mod-compatibiliteit

Als je specifiek naar Windows bent overgestapt voor UE4SS-modding, controleer dan of je modbestanden en setup nu overeenkomen met de Windows-serveromgeving.

### Controleer servergedrag

Controleer of de server normaal opstart en of je verwachte instellingen correct worden geladen.

| Controlepunt | Verwacht resultaat |
| --- | --- |
| Server start succesvol | Geen opstartfouten na typewissel |
| Correct config-pad | Komt overeen met Linux of Windows |
| Aangepaste instellingen geladen | Server gebruikt jouw bewerkte `PalWorldSettings.ini` |
| Mod-ondersteuning | Windows-modvereisten kunnen nu worden gebruikt indien van toepassing |

## Problemen oplossen

### De optie voor servertype is niet zichtbaar

Als je geen instelling kunt vinden om het servertype te wijzigen, betekent dit waarschijnlijk dat deze optie niet direct beschikbaar is in jouw productinterface. Neem in dat geval contact op met ZAP-Hosting support en vraag of jouw Palworld-service kan wisselen tussen Linux en Windows.

### Mijn instellingen werden niet toegepast na de wijziging

Dit gebeurt meestal als het verkeerde configuratiepad is aangepast. Controleer of je hebt bijgewerkt:

- `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`

of

- `Pal/Saved/Config/WindowsServer/PalWorldSettings.ini`

afhankelijk van het actieve servertype.

### Mods werken nog steeds niet

Alleen overschakelen naar Windows lost niet altijd de volledige modsetup op. Sommige mods vereisen extra bestanden, loaders of handmatige installatie naast het wijzigen van het servertype.

## Conclusie

Gefeliciteerd, je hebt je Palworld-servertype succesvol gewijzigd. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂