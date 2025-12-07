---
id: dedicated-windows-valheim
title: "Dedicated Server: Valheim Dedicated Server Windows Setup"
description: "Ontdek hoe je een Valheim dedicated server op je eigen server installeert voor soepel multiplayer gamen → Leer het nu"
sidebar_label: Valheim
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een dedicated server en wil je daar game servers op installeren? Bijvoorbeeld een Valheim Dedicated Server? Dan ben je hier aan het juiste adres! Hieronder leggen we stap voor stap uit hoe je zo’n service op je server installeert.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/D2doaAqjzdMSo9r/preview" title="Valheim Dedicated Server Setup op Windows VPS" description="Snap je het beter als je dingen in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitzoekt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>



## Voorbereiding
Voor het opzetten van een Valheim server heb je SteamCMD nodig. SteamCMD is de **command line versie van de Steam client**. Met deze tool kun je snel en makkelijk dedicated server applicaties van populaire Steam games downloaden. Je vindt SteamCMD op de officiële Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD. 

Daarna ga je het downloaden. Dit bevat het **steamcmd.zip** bestand, dat je eerst moet uitpakken. Het is aan te raden om een aparte map aan te maken waar je het bestand uitpakt. Je zou dan de **steamcmd.exe** moeten zien. Voer deze uit en wacht tot het installatieproces klaar is.
![](https://screensaver01.zap-hosting.com/index.php/s/Y5zygHw2DFJa4dZ/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je beginnen met het installeren van de Valheim server.



## Installatie

Na de installatie moet je in staat zijn om commando’s uit te voeren in de **Steam command line (steamcmd.exe)**. Daar moet je inloggen. Dit doe je met de gebruiker **anonymous**. Voer het volgende commando uit: `login anonymous`

De volgende stap is de installatie. Dit doe je met het commando `app_update 896660`. De App ID **896660** staat voor de **Valheim Dedicated Server** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/PxZFZat7cP2C26k/preview)

:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::


Ga naar de map waar je de installatie hebt uitgevoerd en navigeer naar de volgende submap:  **../steamapps/common/Valheim dedicated Server**/

Daar moet je het opstartbestand aanmaken dat nodig is om de server software te starten. Maak een bestand aan met de naam: start_headless.bat

:::info
Zorg ervoor dat je de optie ‘Bestandsextensies weergeven’ aan hebt staan, zodat de juiste bestandsextensie wordt gebruikt.
:::

Open het bestand, voeg de volgende inhoud toe en sla de wijzigingen op:

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Maak een lokale kopie van dit script om te voorkomen dat het door Steam wordt overschreven.
REM LET OP: Minimale wachtwoordlengte is 5 tekens & het wachtwoord mag niet in de servernaam voorkomen.
REM LET OP: Je moet ervoor zorgen dat de poorten 2456-2458 worden doorgestuurd naar je server via je lokale router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

Om de server zichtbaar en extern bereikbaar te maken, moeten de gebruikte serverpoorten in de firewall worden geopend/doorgestuurd. Open hiervoor de Windows Firewall instellingen.

![](https://screensaver01.zap-hosting.com/index.php/s/MTHjL85zKsLtN9g/preview)

Je moet extra regels toevoegen in de instellingen. Klik hiervoor op binnenkomende en uitgaande regels zoals hieronder beschreven en voeg ze toe voor de volgende poorten: 2456-2458 voor de TCP/UDP protocollen.




## Configuratie

De basis setup is nu klaar. Verdere configuraties kun je aanpassen in het **start_headless_server.bat** bestand. Hier kun je de servernaam, serverwachtwoord, server admin wachtwoord en nog veel meer opties wijzigen. Navigeer hiervoor naar de volgende map:

```
../steamapps/common/Valheim dedicated Server/
```



## Spelen

Aan het einde van de setup kun je de server starten door het eerder aangemaakte **start_headless_server.bat** bestand uit te voeren. Dit opent de serverconsole en start het opstartproces van de server. Als alles goed gaat, is de server na een succesvolle start zichtbaar in de serverlijst.