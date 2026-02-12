---
id: dedicated-linux-hytale
title: "Dedicated Server: Hytale Dedicated Server Setup"
description: "Ontdek hoe je de Hytale Dedicated server instelt op jouw Linux Dedicated Server voor soepel gameplaybeheer ? Leer het nu"
sidebar_label: Hytale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux Dedicated Server en wil je Hytale daarop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert.

## Voorbereiding

Om een Hytale-server te draaien, moet je systeem aan een paar basisvereisten voldoen. De server draait op Java 25 en heeft minimaal 4 GB RAM nodig. Zowel x64 als arm64 architecturen worden ondersteund. Het daadwerkelijke resourcegebruik hangt af van het aantal spelers, zichtafstand en wereldactiviteit, dus voor grotere servers kunnen extra resources nodig zijn.

Controleer voordat je verder gaat of Java 25 op je systeem geïnstalleerd is. Dat doe je met:

```
java --version
```

Als Java nog niet geïnstalleerd is, volg dan onze speciale [Java Installatie](dedicated-linux-java) gids voor Linux-servers. Deze gids legt uit hoe je Java correct installeert en configureert in jouw omgeving.



## Installatie

Begin met het aanmaken van een aparte map voor de Hytale-server. Zo houd je alle serverbestanden netjes bij elkaar.

```
sudo mkdir -p /opt/hytale
sudo chown -R $(whoami):$(whoami) /opt/hytale
cd /opt/hytale
```

De server heeft twee hoofdcomponenten nodig: de serverapplicatie zelf en de game-assets. Deze bestanden haal je binnen met de Hytale command line downloader, bedoeld voor serverdeployments en makkelijkere updates.

De CLI downloader biedt een gestructureerde manier om de Hytale-serverbestanden te downloaden en updaten. Na het downloaden van het downloader-archief pak je het uit in een tijdelijke map. In het archief vind je een QUICKSTART.md bestand met uitleg over het gebruik van de tool.

Start de downloader via de command line en volg de instructies om de nieuwste serverversie te downloaden. Als het klaar is, kopieer je de gedownloade serverbestanden en het assets-archief naar je servermap. Na deze stap moet de map de server JAR en een assets-archief zoals Assets.zip bevatten.

| **Command**                                   | **Omschrijving**                     |
| :-------------------------------------------- | :---------------------------------- |
| `./hytale-downloader`                         | Download de nieuwste release         |
| `./hytale-downloader -print-version`          | Toon gameversie zonder te downloaden |
| `./hytale-downloader -version`                | Toon versie van hytale-downloader    |
| `./hytale-downloader -check-update`           | Check op updates voor downloader     |
| `./hytale-downloader -download-path game.zip` | Download naar specifiek bestand      |
| `./hytale-downloader -patchline pre-release`  | Download van pre-release kanaal       |
| `./hytale-downloader -skip-update-check`      | Sla automatische updatecheck over    |



## Configuratie

### Server starten

De server start je door het JAR-bestand te draaien en het pad naar het assets-archief op te geven. Pas het pad aan als jouw assets ergens anders staan.

```
java -jar HytaleServer.jar --assets /opt/hytale/Assets.zip --bind 0.0.0.0:5520
```

### Authenticatie

Bij de eerste start moet de server geauthenticeerd worden voordat spelers kunnen verbinden. Dit doe je direct via de serverconsole met een device-based login. Volg de instructies in de console om de authenticatie af te ronden.

```
/auth login device
```

De output ziet er zo uit:

```
> /auth login device
===================================================================
DEVICE AUTHORIZATION
===================================================================
Bezoek: https://accounts.hytale.com/device
Voer code in: ABCD-1234
Of bezoek: https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
Wachten op autorisatie (verloopt over 900 seconden)...

[Gebruiker voltooit autorisatie in browser]

> Authenticatie geslaagd! Modus: OAUTH_DEVICE
```

Na authenticatie kan je server spelers accepteren.



### Firewall configuratie

Standaard luistert de server op UDP-poort 5520 en bindt aan alle beschikbare interfaces. Je kunt adres en poort aanpassen indien nodig. De server communiceert via UDP met QUIC. Zorg dat je firewall inkomend UDP-verkeer op de gekozen poort toestaat, bijvoorbeeld met Iptables of UFW.

```
sudo iptables -A INPUT -p udp --dport 5520 -j ACCEPT
sudo ufw allow 5520/udp
```



## Performance tips

De zichtafstand is een van de belangrijkste factoren voor geheugengebruik. Hogere waarden verhogen het RAM-verbruik omdat er meer werelddata tegelijk actief moet zijn.

Voor de meeste setups is een maximale zichtafstand van 12 chunks (384 blokken) een goede balans tussen serverperformance en gameplay-ervaring.

Ter vergelijking: Minecraft-servers gebruiken standaard 10 chunks (160 blokken). Hytale’s standaard van 384 blokken komt ongeveer overeen met 24 Minecraft-chunks, wat de hogere geheugeneisen verklaart. Pas deze waarde aan op basis van het verwachte aantal spelers en beschikbare systeemresources.



## Conclusie

Gefeliciteerd, je hebt nu een werkende Hytale-server draaien op je systeem. Vanaf hier kun je de setup uitbreiden met mods, wereldinstellingen aanpassen en performance-tuning doen om het perfect af te stemmen op je spelers. Houd het resourcegebruik goed in de gaten om stabiele prestaties te garanderen naarmate je server groeit.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, we staan dagelijks voor je klaar! ??