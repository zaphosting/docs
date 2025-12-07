---
id: dayz-becomeadmin
title: "DayZ: Word Admin"
description: "Ontdek hoe je volledige servercontrole krijgt door adminrechten toe te wijzen en game-opties effectief te beheren → Leer het nu"
sidebar_label: Word Admin
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Adminrechten toewijzen geeft je makkelijk en volledig controle over je server. Als admin kun je alle beschikbare opties en functies van het spel direct in-game toepassen. Hieronder leggen we stap voor stap uit wat je moet doen om adminrechten aan je server toe te wijzen.  
<InlineVoucher />

## Configuratie

De configuratie van adminrechten gebeurt via het serverconfiguratiebestand. Je vindt de configuratiebestanden van je server in het game server beheer onder **Configs**. Daar zie je een overzicht van de beschikbare configbestanden. Open het bestand **server.DZ.cfg** door op de blauwe knop te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/n6FSdPnYxxWp4Po/preview)

In het configuratiebestand zoek je naar de regel **passwordAdmin**. Hier stel je het gewenste wachtwoord in voor toegang. Vul je gewenste wachtwoord in en klik onderaan op de **Opslaan** knop.

![](https://screensaver01.zap-hosting.com/index.php/s/H3ndjqRYBPXRgRK/preview)

Om de wijziging door te voeren, moet de server opnieuw worden gestart. Verbind daarna met je server en open de in-game chat. Voer het volgende commando uit om in te loggen als admin:

```
#login wachtwoord
```



## Veelgebruikte commando’s

Hieronder vind je een lijst met een paar handige commando’s die je kunt gebruiken met je adminrechten:

| COMMANDO                                   | OMSCHRIJVING                                               |
| :----------------------------------------- | :--------------------------------------------------------- |
| #login adminwachtwoord                      | Log in als admin van de server.                            |
| #logout                                    | Log uit als admin.                                         |
| #mission bestandsnaam Moeilijkheidsgraad   | Kies een missie met bekende naam en stel de moeilijkheid in - de moeilijkheidsgraad is optioneel, als je deze niet instelt blijft de huidige moeilijkheid behouden. |
| #missions                                  | Selecteer een missie.                                      |
| ##restart                                  | Herstart een missie.                                       |
| #reassign                                  | Begin opnieuw en wijs rollen opnieuw toe.                 |
| #shutdown                                  | Zet de server uit.                                         |
| #restartserver                             | Herstart de server.                                        |
| #shutdownserveraftermission                | Zet de server uit zodra de missie eindigt.                |
| #restartserveraftermission                 | Herstart de server zodra de missie eindigt.                |
| #init                                      | Laad het serverconfiguratiebestand opnieuw dat geladen wordt via -config opties. |
| #exec ban Naam#exec ban ID#exec ban #Speler | Hiermee kun je een speler bannen.                          |
| #kick Naam#kick ID#kick #Speler            | Hiermee kun je een speler van de server kicken.            |
| #monitor (interval in seconden)             | Toont server performance info. Bij interval 0 stopt de monitoring. |
| #monitords (interval in seconden)           | Toont performance info op de serverconsole. Bij interval 0 stopt de monitoring. |
| #debug off                                 | Schakelt debugging uit.                                   |
| #debug (interval in seconden)               | Standaard interval is 10 als er geen ander interval is gekozen. |
| #debug (commando) (param)                   | Er zijn een paar beschikbare commando’s: JIPQueueuserQueuecheckFiletotalSentuserSentuserInfo Je kunt elk commando uitschakelen door ‘off’ toe te voegen na het commando, bv. #totalSent off. De output verschilt per commando, sommige schrijven naar het logbestand, andere naar het scherm, etc. Let op: je hebt een debugger nodig die OutputDebugString kan opvangen op de clientmachine. |
| #debug (commando)                           | Logt uit als admin.                                        |
| #logout                                    | Er zijn twee beschikbare commando’s: console - Stuurt wat in de serverconsole staat naar de afzender. von - Schrijft naar het logbestand dat in server.cfg is gedefinieerd, bv. “server_console.log”. Je ziet een bevestiging van deze commando’s in de chatkanalen. |


## Conclusie

Gefeliciteerd, je hebt de adminrechten succesvol ingesteld. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />