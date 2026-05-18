---
id: vserver-linux-openclaw
title: "VPS: OpenClaw installeren op Linux - Bouw je eigen AI-assistent!"
description: "Ontdek hoe je OpenClaw installeert en configureert voor self-hosting om een persoonlijke en krachtige open-source AI-assistent te bouwen → Leer het nu"
sidebar_label: OpenClaw installeren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

[OpenClaw](https://openclaw.ai/) is een AI-gestuurd automatiserings- en controleplatform waarmee je via een browserinterface met software kunt communiceren. In plaats van handmatig door menu’s te klikken, gebruikersinterfaces te navigeren of steeds dezelfde workflows te herhalen, kan OpenClaw taken programmatisch uitvoeren en biedt het remote control mogelijkheden via het webdashboard.

![img](https://screensaver01.zap-hosting.com/index.php/s/XQkk46EnKzxxWrK/preview)

Wat OpenClaw echt revolutionair maakt, is dat het een moderne “control layer” voor applicaties en systemen mogelijk maakt. In plaats van gebonden te zijn aan een lokale desktop sessie, kan OpenClaw draaien op een remote machine zoals een VPS en toch volledig beheerd worden vanaf elke locatie. Dit maakt het een krachtig hulpmiddel voor gebruikers die betrouwbare automatisering, remote control en gecentraliseerd beheer willen zonder een lokale computer continu aan te hoeven laten staan.

Overweeg je deze service zelf te hosten? We nemen je stap voor stap mee in het installatie- en configuratieproces, inclusief alles waar je op moet letten.

<InlineVoucher />


## Gebruiksscenario’s van OpenClaw

OpenClaw is inzetbaar in allerlei dagelijkse situaties en geschikt voor iedereen die taken wil automatiseren, AI-gebruik wil centraliseren of een altijd beschikbare assistent wil draaien.

Een veelvoorkomend scenario is het samenbrengen van AI-interacties over meerdere platforms. In plaats van verschillende tools te gebruiken voor verschillende messaging apps, kan OpenClaw fungeren als één assistent met consistente context en configuratie, onafhankelijk van waar je hem benadert.

OpenClaw is ook ideaal voor automatisering. Het helpt repetitief handwerk te verminderen door terugkerende taken af te handelen, informatie te organiseren, content samen te vatten en gestructureerde antwoorden te geven.

Een andere belangrijke toepassing is webautomatisering. Door browser-sessies te besturen via speciale Chrome- of Chromium-instanties kan OpenClaw met webinterfaces interacteren, zelfs als er geen directe API-integratie is.

Om deze scenario’s te ondersteunen, biedt OpenClaw een breed scala aan functies, waaronder multi-channel messaging support (zoals WhatsApp, Telegram, Slack en Discord), een gateway-gebaseerde architectuur voor sessie- en kanaalbeheer, optionele spraakfuncties, een interactieve canvas-interface, een uitbreidbaar skills-platform, ondersteuning voor meerdere AI-providers (waaronder OpenAI en Anthropic), device nodes voor mobiele acties, API key authenticatie en persistent workspace- en configuratiebeheer.

![img](https://screensaver01.zap-hosting.com/index.php/s/7A5eiaMSE8FFQRs/download)


## Vereisten

Afhankelijk van hoe je **OpenClaw** wilt gebruiken, kan het resourcegebruik snel oplopen. Basisinstallaties (bijvoorbeeld alleen de Web UI met minimale automatisering) draaien prima op kleinere VPS-pakketten, maar geavanceerdere scenario’s zoals meerdere kanalen draaien, veel skills inschakelen of browserautomatisering gebruiken, kunnen flink meer resources vragen.

Voor stabiele prestaties raden we aan een VPS-pakket te kiezen met voldoende CPU en RAM-ruimte, vooral als OpenClaw continu op de achtergrond draait.

| Hardware   | Minimum      | ZAP-Hosting Aanbeveling  |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 vCPU Core  | 8 vCPU Cores             |
| RAM        | 4 GB         | 16 GB                    |
| Schijfruimte | 25 GB      | 50 GB                    |




## Installatie
De installatie start met het uitvoeren van het officiële OpenClaw installatiescript op je Linux VPS. Verbind via SSH met je server en voer het volgende commando uit:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Na het uitvoeren van het commando start automatisch een interactieve installatiescript die je door de setup leidt. De installer controleert je omgeving, installeert ontbrekende dependencies en start daarna het OpenClaw onboarding proces.

![img](https://screensaver01.zap-hosting.com/index.php/s/DJcT4NrJ7ts8Gqn/download)



### Platformdetectie en dependency-check

De installer detecteert automatisch je besturingssysteem en installeert benodigde dependencies indien nodig.  
Als Node.js bijvoorbeeld ontbreekt, wordt dit automatisch geïnstalleerd. Je hoeft hier zelf niets voor te doen.



### Vereiste pakketten installeren

OpenClaw installeert benodigde pakketten via de systeem package manager. Ook hier is geen handmatige actie nodig. Zodra alle pakketten geïnstalleerd zijn, gaat de installer automatisch verder.

### OpenClaw installeren

Zodra de dependencies klaarstaan, downloadt en installeert de installer de OpenClaw release. Als dit proces voltooid is, zie je een bevestiging zoals:

![img](https://screensaver01.zap-hosting.com/index.php/s/NwTqC997KQ23Htr/preview)



### OpenClaw onboarding

Na installatie start de onboarding wizard automatisch. Deze onboarding is nodig om de initiële configuratie af te ronden en OpenClaw bruikbaar te maken.



Lees eerst de getoonde veiligheidsmelding en bevestig om door te gaan. Kies daarna de onboarding modus. Voor de meeste gebruikers is **QuickStart** de aanbevolen optie.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZQXSmmwQ29yk374/preview)

Kies vervolgens je model/auth provider. In dit voorbeeld is **OpenAI** geselecteerd. Vul nu je OpenAI API key in. OpenClaw slaat deze key lokaal op in de configuratie zodat hij in toekomstige sessies gebruikt kan worden. Nadat de API key is opgeslagen, selecteer je het standaardmodel dat OpenClaw moet gebruiken.

![img](https://screensaver01.zap-hosting.com/index.php/s/HQ5MNqCxdd5EY8Q/preview)

In de laatste stappen kun je optioneel kanalen (zoals Telegram, Discord of Slack), skills en hooks configureren. Als je deze opties nu niet wilt instellen, kun je ze overslaan en later in de configuratie toevoegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/xFnb3GNSiSZBPnD/preview)

Wil je OpenClaw via Telegram gebruiken, dan moet je eerst een Telegram bot aanmaken en de API token daarvan verkrijgen. Dit doe je rechtstreeks in Telegram via de officiële **BotFather**.

Open de chat met **BotFather**, start het aanmaakproces door `/newbot` te sturen en volg de instructies.  
BotFather vraagt eerst om een weergavenaam, daarna om een gebruikersnaam. Die gebruikersnaam moet eindigen op `bot`.

Het gesprek ziet er meestal zo uit:

```
User: /newbot 

BotFather: Oké, een nieuwe bot. Hoe gaan we hem noemen? Kies een naam voor je bot.  

User: ZAP DOCS EXAMPLE

BotFather: Goed. Nu kiezen we een gebruikersnaam voor je bot. Die moet eindigen op `bot`. Bijvoorbeeld: TetrisBot of tetris_bot. 

User: ZAP_DOCS_EXAMPLE_BOT 

BotFather: Klaar! Gefeliciteerd met je nieuwe bot. Je vindt hem op t.me/ZAP_DOCS_EXAMPLE_BOT. Je kunt nu een beschrijving, info en profielfoto toevoegen, zie /help voor een lijst met commando’s. Als je klaar bent met het maken van je coole bot, kun je onze Bot Support pingen als je een betere gebruikersnaam wilt. Zorg er wel voor dat de bot volledig werkt voordat je dat doet.

Gebruik deze token om toegang te krijgen tot de HTTP API:
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Bewaar je token goed, want iedereen die hem heeft kan je bot besturen.

Voor een beschrijving van de Bot API, zie deze pagina: https://core.telegram.org/bots/api
```

Nadat BotFather de bot heeft aangemaakt, kopieer je de getoonde **token** en bewaar je die veilig. Je hebt deze token later nodig om Telegram als kanaal te koppelen in de OpenClaw onboarding of configuratie. Iedereen met deze token kan je bot besturen, dus deel hem nooit publiekelijk.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHTxW7Pi4SRsoe7/preview)

Na het aanmaken van de Telegram bot en opslaan van de token, kun je verder met de OpenClaw onboarding. In de volgende stappen kun je **skills** installeren en **hooks** inschakelen. Dit wordt aanbevolen, maar je kunt het ook overslaan en later in de configuratie toevoegen als je eerst de setup wilt afronden.

Als de onboarding klaar is, installeert OpenClaw automatisch de **Gateway service**. Kies daarna de optie **Web UI** zodat OpenClaw de dashboard link toont. Hiermee kun je de OpenClaw Control UI openen en je setup via de browser beheren.

Daarna wordt de onboarding als voltooid gemarkeerd. Aan het einde van de setup biedt OpenClaw ook aan om het **shell completion script** te installeren. Dit is optioneel, maar aanbevolen omdat het de command-line gebruiksvriendelijkheid verbetert door auto-completion voor OpenClaw commando’s mogelijk te maken. Volg hiervoor de stappen.

![img](https://screensaver01.zap-hosting.com/index.php/s/xWNpjYj2XeKgK4J/preview)





## Configuratie

Onze VPS-servers worden standaard geleverd zonder grafische gebruikersinterface. Daarom draait OpenClaw in headless modus en is de Control UI alleen lokaal op de server bereikbaar via poort `18789`.

Na installatie en onboarding toont OpenClaw de dashboard info in de console output:

```
Dashboard link (met token):
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Kopieer/plak deze URL in een browser op deze machine om OpenClaw te bedienen.
Geen GUI gedetecteerd. Open vanaf je eigen computer:
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111

Open daarna:
http://localhost:18789/
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Omdat de webinterface gebonden is aan `127.0.0.1`, is deze niet direct vanaf internet bereikbaar. Om er veilig vanaf je PC bij te kunnen, maak je een SSH-tunnel die de OpenClaw poort van de VPS naar je lokale machine doorstuurt.

Open op je PC een terminal en voer uit:

```bash
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111
```

Zolang deze SSH-sessie open blijft, kun je de OpenClaw Control UI in je browser openen via:

```
http://localhost:18789/
```

Als OpenClaw authenticatie vereist, open dan de tokenized link die in je OpenClaw output staat:

```
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```



:::tip Gebruik een GUI (Desktop Environment)

Wil je liever met een grafische interface werken, dan kun je een desktopomgeving installeren op je VPS, bijvoorbeeld **XFCE**. Na installatie van een GUI (en een remote desktop oplossing zoals RDP of VNC) kun je OpenClaw direct via de VPS desktop bedienen in plaats van via SSH port forwarding.

:::



![img](https://screensaver01.zap-hosting.com/index.php/s/FscTYx36eWeHHca/download)



### Skills installeren

Skills breiden OpenClaw uit met extra functionaliteit en integraties.  
OpenClaw heeft meer dan 50 skills beschikbaar. Je kunt skills direct in het dashboard installeren door de sectie **Skills** te openen en de gewenste skills te activeren.

![img](https://screensaver01.zap-hosting.com/index.php/s/gXxs6j9WHtxPYAQ/preview)



### Hooks inschakelen

Hooks laten OpenClaw automatisch acties uitvoeren wanneer bepaalde events plaatsvinden of specifieke commando’s worden gebruikt.  
Dit is handig om terugkerende taken te automatiseren, context op te slaan of workflows te triggeren zonder handmatige tussenkomst.

![img](https://screensaver01.zap-hosting.com/index.php/s/KYSWM4cFcDp45F6/preview)



### Kanalen configureren

Kanalen maken het mogelijk OpenClaw via messaging platforms te gebruiken.  
In het dashboard kun je ondersteunde kanalen zoals Telegram, Discord, Slack en anderen configureren en koppelen.

![img](https://screensaver01.zap-hosting.com/index.php/s/Le38gZXf2BDintr/preview)

Afhankelijk van het gekozen platform moet je extra tokens of credentials invullen (zoals uitgelegd bij het Telegram bot token dat je via BotFather hebt aangemaakt). 



Als een kanaal succesvol gekoppeld is, kan OpenClaw berichten ontvangen en beantwoorden via dat platform. Een gesprek met de AI-assistent via Telegram kan er zo uitzien:

![img](https://screensaver01.zap-hosting.com/index.php/s/oFRZCEPFyyMmsG4/preview)



## Veiligheidsaspecten

OpenClaw is een krachtig hulpmiddel en moet altijd met de juiste beveiligingsmaatregelen gebruikt worden. Het Gateway Dashboard is beveiligd met een token, dat werkt als een wachtwoord en toegang geeft tot je OpenClaw instance. Deel deze gateway token nooit publiekelijk (bijvoorbeeld in screenshots, tickets of chatlogs), want iedereen met de token kan het dashboard bedienen.

We raden aan OpenClaw achter een firewall te houden en te voorkomen dat de gateway interface direct publiekelijk bereikbaar is. Standaard bindt OpenClaw de gateway service aan `127.0.0.1`, wat externe toegang voorkomt en de veiligste optie is voor de meeste toepassingen. Gebruik SSH port forwarding om het dashboard op afstand te benaderen en beperk toegang tot vertrouwde gebruikers.



## Conclusie en meer bronnen

Gefeliciteerd! Je hebt OpenClaw nu succesvol geïnstalleerd en geconfigureerd op je VPS. We raden je ook aan onderstaande bronnen te bekijken, die je extra hulp en tips kunnen bieden tijdens je serverconfiguratie.

- [openclaw.ai](https://https://openclaw.ai/) - Officiële website
- [docs.openclaw.ai](https://docs.openclaw.ai/start/getting-started) - OpenClaw documentatie
- [clawhub.com](https://clawhub.com/) - ClawHub - Community-built Skills

Heb je specifieke vragen die hier niet behandeld worden? Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />