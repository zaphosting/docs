---
id: dedicated-windows-satisfactory
title: "Dedicated Server: Satisfactory Dedicated Server Windows Setup"
description: "Leer hoe je een Satisfactory Dedicated Server op jouw server installeert voor soepel gamen en beheer → Ontdek het nu"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een dedicated server en wil je daar game servers op installeren? Bijvoorbeeld een Satisfactory Dedicated Server? Dan ben je hier aan het juiste adres! Hieronder leggen we stap voor stap uit hoe je zo’n service op jouw server kunt installeren.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="Satisfactory Dedicated Server Setup op Windows VPS" description="Snap je het beter als je dingen in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitzoekt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>



## Voorbereiding

Voor het opzetten van een Satisfactory server heb je SteamCMD nodig. SteamCMD is de **command line versie van de Steam client**. Met deze tool kun je snel en makkelijk dedicated server applicaties van populaire Steam games downloaden. Je vindt SteamCMD op de officiële Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD. 

Daarna ga je de download starten. Dit levert het **steamcmd.zip** bestand op, dat je eerst moet uitpakken. Het is aan te raden om een aparte map aan te maken waar je het bestand uitpakt. Je zou dan de **steamcmd.exe** moeten zien. Voer deze uit en wacht tot de installatie klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je beginnen met het installeren van de Satisfactory server.



## Installatie

Na de installatie zou je commando’s moeten kunnen uitvoeren in de **Steam command line (steamcmd.exe)**. Je moet hier inloggen. Dit doe je met de gebruiker **anonymous**. Voer het volgende commando uit: `login anonymous`

De volgende stap is de installatie. Dit doe je met het commando `app_update 1690800`. De App ID **1690800** staat voor de **Satisfactory Dedicated Server** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
Onderbreek het proces alsjeblieft niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::



Ga naar de map waar je de installatie hebt uitgevoerd en navigeer naar de volgende submap: **../steamapps/common/SatisfactoryDedicatedServer**

Daar moet je het opstartbestand aanmaken dat nodig is om de server software te starten. Maak een bestand aan met de naam: server-start.bat

:::info
Zorg ervoor dat je de optie ‘Bestandsextensies weergeven’ aan hebt staan, zodat de juiste bestandsextensie wordt gebruikt.
:::

Open het bestand, voeg de volgende inhoud toe en sla de wijzigingen op:

```
Factoryserver.exe -log -unattended
```



Voer het bestand daarna uit. Bij de eerste keer opstarten zou er een popup moeten verschijnen die aangeeft dat bepaalde componenten nodig zijn om het programma te draaien. Het spel heeft de Visual C++ Runtime nodig. Klik op Ja en rond de installatie af. 

Om de server zichtbaar en extern bereikbaar te maken, moeten de gebruikte serverpoorten in de firewall worden vrijgegeven/forwarded. Open hiervoor de Windows Firewall instellingen.

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


Je moet extra regels toevoegen in de instellingen. Klik hiervoor op binnenkomende en uitgaande regels zoals hieronder beschreven en voeg ze toe voor het UDP-protocol en poort 15000.



## Configuratie

De basis setup is nu klaar. Verdere configuraties kun je aanpassen in het **ServerSettings.ini** configuratiebestand. Hier kun je bijvoorbeeld de servernaam, serverwachtwoord en andere opties wijzigen. Navigeer naar de volgende map: 

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Spelen

Aan het einde van de setup kun je nu de server starten door het eerder aangemaakte **server-start.bat** bestand uit te voeren. Dit opent de serverconsole en start het opstartproces van de server. Als alles goed gaat, zou de server na een succesvolle start zichtbaar moeten zijn in de serverlijst.



