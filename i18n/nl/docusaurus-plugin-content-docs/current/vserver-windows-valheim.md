---
id: vserver-windows-valheim
title: "VPS: Valheim Dedicated Server Windows Setup"
description: "Ontdek hoe je snel en makkelijk een Valheim dedicated server op je VPS of dedicated server installeert → Leer het nu"
sidebar_label: Valheim
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een VPS of dedicated server en wil je daar game servers op draaien? Bijvoorbeeld een Valheim Dedicated Server? Dan ben je hier aan het juiste adres! Hieronder leggen we stap voor stap uit hoe je zo’n server op jouw machine installeert.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/8yWGtXMPFr8Jyza/preview" title="Valheim Dedicated Server Setup op Windows VPS" description="Snap je het beter als je het in actie ziet? Check onze video waarin we alles voor je uitleggen. Of je nu haast hebt of gewoon liever op een toffe manier info opneemt!"/>
<InlineVoucher />

## Voorbereiding
Voor het opzetten van een Valheim server heb je SteamCMD nodig. SteamCMD is de **command line versie van de Steam client**. Met dit tooltje kun je snel en makkelijk dedicated server applicaties van populaire Steam games downloaden. Je vindt SteamCMD op de officiële Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD.

Daarna ga je het downloaden. Dit levert een **steamcmd.zip** bestand op, dat je eerst moet uitpakken. Het is slim om hiervoor een aparte map aan te maken. Na het uitpakken zie je de **steamcmd.exe**. Start deze op en wacht tot de installatie klaar is.
![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is alles succesvol geïnstalleerd en kun je beginnen met het installeren van de Valheim server.



## Installatie

Na de installatie kun je commando’s uitvoeren in de **Steam command line (steamcmd.exe)**. Je moet eerst inloggen. Dit doe je met de gebruiker **anonymous**. Voer het volgende commando uit: `login anonymous`

De volgende stap is de installatie zelf. Dit doe je met het commando `app_update 896660`. De App ID **896660** staat voor de **Valheim Dedicated Server** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::


Ga naar de map waar je de installatie hebt uitgevoerd en open de volgende submap:  **../steamapps/common/Valheim dedicated Server**/

Daar moet je het opstartbestand aanmaken dat nodig is om de server software te starten. Maak een bestand aan met de naam: start_headless.bat

:::info
Zorg dat je de optie ‘Bestandsextensies weergeven’ aan hebt staan, zodat de juiste extensie gebruikt wordt.
:::

Open het bestand, voeg de volgende inhoud toe en sla de wijzigingen op:

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Maak een lokale kopie van dit script om te voorkomen dat Steam het overschrijft.
REM LET OP: Het wachtwoord moet minimaal 5 tekens zijn & mag niet in de servernaam voorkomen.
REM LET OP: Zorg dat poorten 2456-2458 worden doorgestuurd naar je server via je router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

Om de server zichtbaar en bereikbaar te maken van buitenaf, moeten de gebruikte serverpoorten opengezet/forwarded worden in de firewall. Open hiervoor de Windows Firewall instellingen.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Je moet extra regels toevoegen in de instellingen. Klik hiervoor op binnenkomende en uitgaande regels zoals hieronder beschreven en voeg ze toe voor de volgende poorten: 2456-2458 voor de TCP/UDP protocollen.




## Configuratie

De basis setup is nu klaar. Verdere configuraties kun je aanpassen in het **start_headless_server.bat** bestand. Hier kun je de servernaam, serverwachtwoord, admin wachtwoord en nog veel meer opties wijzigen. Ga hiervoor naar de volgende map:

```
../steamapps/common/Valheim dedicated Server/
```



## Spelen

Aan het einde van de setup kun je de server starten door het eerder aangemaakte **start_headless_server.bat** bestand uit te voeren. Dit opent de serverconsole en start het opstartproces. Als alles goed gaat, verschijnt de server na een succesvolle start in de serverlijst.


## Conclusie

Gefeliciteerd, je hebt Valheim succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />