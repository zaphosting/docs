---
id: palworld-set-a-password
title: "Palworld: Stel een Wachtwoord in"
description: "Leer hoe je een Palworld serverwachtwoord instelt door de Palworld gameconfiguratie handmatig te bewerken en de wachtwoordwijziging correct toe te passen. -> Leer nu meer"
sidebar_label: "Stel een Wachtwoord in"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld stelt je in staat om je server te beveiligen met een wachtwoord zodat alleen geautoriseerde spelers kunnen meedoen. In deze gids leer je hoe je handmatig het serverwachtwoord instelt of wijzigt in de ZAP-Hosting game serverconfiguratie en het wachtwoord correct toepast.



## Voorbereiding

Voordat je begint, zorg ervoor dat:

- je Palworld game server online is in de ZAP-Hosting webinterface
- je toegang hebt tot de game server administratie
- je het wachtwoord weet dat je wilt gebruiken voor servertoegang

:::info Handmatige Configuratie Vereist
Voor Palworld kan het wachtwoord handmatig worden ingesteld via de serverconfiguratiebestanden. In de ZAP-Hosting interface kun je deze bestanden bereiken via je game server administratie onder `Configs`.
:::

## Open het Palworld Configuratiebestand

Om een wachtwoord in te stellen voor je Palworld server, moet je het bestand `PalWorldSettings.ini` bewerken.

### Vind het bestand in de ZAP-Hosting interface

1. Log in op de ZAP-Hosting webinterface.
2. Open je **Palworld** game server administratie.
3. Navigeer naar **Configs**.
4. Open het bestand `PalWorldSettings.ini`.

Dit bestand bevat de belangrijkste Palworld serverinstellingen, inclusief de regel die bepaalt of een wachtwoord vereist is om mee te doen.

:::note Doel van het Configuratiebestand
Het `PalWorldSettings.ini` bestand slaat serveropties op in één configuratieregel, meestal binnen de sectie `OptionSettings=(...)`. Je moet daar de waarde van `ServerPassword` aanpassen.
:::

## Bewerk het Serverwachtwoord

Zodra je `PalWorldSettings.ini` hebt geopend, zoek je naar de invoer `ServerPassword`.

### Vereiste configuratieregel

Gebruik de volgende waarde:

```ini
ServerPassword="[your_password]"
```

Vervang `[your_password]` door het wachtwoord dat spelers moeten invoeren om op je server te komen.

Als het wachtwoord momenteel uitgeschakeld is, ziet de waarde er mogelijk zo uit:

```ini
ServerPassword=""
```

Een lege waarde betekent dat er geen wachtwoord is ingesteld.

### Voorbeeldconfiguratie

In Palworld maakt deze instelling meestal deel uit van het blok `OptionSettings=(...)`. Het kan er ongeveer zo uitzien:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="[your_password]",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Formaat Niet Wijzigen
Pas alleen de waarde binnen `ServerPassword="..."` aan. Verwijder geen komma’s, aanhalingstekens, haakjes of andere items in de regel `OptionSettings=(...)`, want dit kan voorkomen dat de server de configuratie correct laadt.
:::

## Configuratie Referentie

De volgende tabel toont de relevante instelling voor deze wachtwoordwijziging:

| Instelling | Voorbeeldwaarde | Doel |
| --- | --- | --- |
| `ServerPassword` | `ServerPassword="[your_password]"` | Vereist dat spelers een wachtwoord invoeren voordat ze op de server kunnen |

### Wachtwoordtips

Houd bij het kiezen van een wachtwoord rekening met het volgende:

| Tip | Uitleg |
| --- | --- |
| Gebruik een uniek wachtwoord | Gebruik niet hetzelfde wachtwoord als voor andere accounts |
| Vermijd te simpele woorden | Simpele wachtwoorden zijn makkelijker te raden |
| Deel het alleen met vertrouwde spelers | Iedereen met het wachtwoord kan proberen mee te doen |
| Bewaar het veilig | Een wachtwoordmanager helpt je het veilig bij te houden |

:::tip Kies een Sterk Wachtwoord
Als je een privé Palworld server runt voor vrienden of een besloten community, gebruik dan een sterk wachtwoord in plaats van een simpel woord of servernaam. Dit helpt ongewenste toegang te verminderen.
:::

## Sla de Wijzigingen op en Herstart de Server

Nadat je het wachtwoord hebt aangepast, sla je het bestand op in de sectie `Configs`.

### Pas het nieuwe wachtwoord toe

Om de wachtwoordwijziging actief te maken:

1. Sla de wijzigingen op in `PalWorldSettings.ini`.
2. Herstart je Palworld game server.

Een herstart is nodig omdat Palworld de serverinstellingen uit het configuratiebestand leest tijdens het opstarten. Zonder herstart wordt het nieuwe wachtwoord mogelijk niet toegepast.

:::info Herstart Vereist
Na het wijzigen van `ServerPassword` moet je de server handmatig herstarten via de ZAP-Hosting game server administratie zodat de nieuwe instelling wordt geladen.
:::

## Controleer het Wachtwoord

Na de herstart test je de configuratie door vanaf de Palworld game verbinding te maken met de server.

### Waarop letten

Controleer bij het verbinden of:

- de server nu om een wachtwoord vraagt voordat je kunt meedoen
- het ingestelde wachtwoord correct werkt
- spelers zonder wachtwoord geen toegang krijgen tot de server

Als de server niet om een wachtwoord vraagt, open dan opnieuw `PalWorldSettings.ini` en controleer of:

- `ServerPassword` aanwezig is in de sectie `OptionSettings=(...)`
- de waarde niet leeg is
- het bestand succesvol is opgeslagen
- de server is herstart na de wijziging

:::note Wachtwoord is Zichtbaar
Het wachtwoord wordt in platte tekst opgeslagen in het configuratiebestand. Zorg dat je alleen vertrouwde gebruikers toegang geeft tot je serveradministratie.
:::

## Conclusie

Gefeliciteerd, je hebt succesvol een wachtwoord ingesteld voor je Palworld server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂