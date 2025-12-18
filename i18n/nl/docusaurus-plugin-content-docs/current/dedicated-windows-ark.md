---
id: dedicated-windows-ark
title: "Dedicated Server: ARK Survival Evolved Dedicated Server Windows Setup"
description: "Ontdek hoe je een ARK: Survival Evolved Dedicated Server op een Windows VPS installeert voor soepel multiplayer gamen → Leer het nu"
sidebar_label: ARK Survival Evolved Dedicated Server Setup
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS en wil je daar game servers op installeren? Bijvoorbeeld een ARK: Survival Evolved Dedicated Server? Dan ben je hier aan het juiste adres! Hieronder leggen we stap voor stap uit hoe je zo’n service op je server installeert. Verbind met je VPS via RDP om je ARK: Survival Evolved Dedicated Server op te zetten. Weet je niet hoe je via RDP verbinding maakt met je server? Check dan onze [Initial Access (RDP)](vserver-windows-userdp.md) gids.

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BF23kJKNsFQyeyX/preview" title="ARK: Survival Evolved Dedicated Server Setup on Windows VPS" description="Snap je het beter als je het in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitlicht. Of je nu haast hebt of gewoon liever info opneemt op de meest toffe manier!"/>



## Voorbereiding

Voor het opzetten van een ARK server heb je SteamCMD nodig. SteamCMD is de **command line versie van de Steam client**. Met deze tool kun je snel en makkelijk de dedicated server applicaties van populaire Steam games downloaden. Je vindt SteamCMD op de officiële Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD. 

Daarna download je het bestand. Dit bevat de **steamcmd.zip** file, die je eerst moet uitpakken. Het is aan te raden om een aparte map aan te maken waar je het bestand uitpakt. Je zou dan de **steamcmd.exe** moeten zien. Voer deze uit en wacht tot het installatieproces klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/QnqpbKQiEAFLL2T/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je beginnen met de installatie van de ARK server.



## Installatie

Na de installatie zou je commando’s moeten kunnen uitvoeren in de **Steam command line (steamcmd.exe)**. Je moet hier inloggen. Dit doe je met de gebruiker **anonymous**. Voer het volgende commando uit: `login anonymous`

De volgende stap is de installatie. Dit doe je met het commando `app_update 376030`. De App ID **376030** staat voor de **ARK: Survival Evolved Dedicated Server** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/RJzpFL4ZPSsAZZd/preview)



:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::



Ga naar de map waar je de installatie hebt uitgevoerd en navigeer naar de volgende submap: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

Daar moet je het opstartbestand aanmaken dat nodig is om de server software te starten. Maak een bestand aan met de naam: start-ark.bat

:::info
Zorg dat je de optie ‘Bestandsextensies weergeven’ aan hebt staan, zodat de juiste bestandsextensie wordt gebruikt.
:::

Open het bestand, voeg de volgende inhoud toe en sla de wijzigingen op:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_naam>?ServerPassword=<join_wachtwoord>?ServerAdminPassword=<admin_wachtwoord>?Port=<poort>?QueryPort=<query_poor>?MaxPlayers=<max_spelers>
exit
```



Om de server zichtbaar en extern bereikbaar te maken, moeten de gebruikte serverpoorten in de firewall worden geopend/forwarded. Open hiervoor de Windows Firewall instellingen.

![](https://screensaver01.zap-hosting.com/index.php/s/p7iyYxZwfeGaZaW/preview)


Je moet extra regels toevoegen in de instellingen. Klik hiervoor op binnenkomende en uitgaande regels zoals hieronder beschreven en voeg ze toe voor de volgende protocollen en poorten:

- TCP binnenkomend en uitgaand: 27020
- UDP binnenkomend en uitgaand: 27015
- UDP binnenkomend en uitgaand: 7777-7778



## Configuratie

De basis setup is nu klaar. Verdere configuratie kun je doen in de config bestanden **DefaultGameUserSettings.ini** en **Gameusersettings.ini**. Hier kun je onder andere de servernaam, serverwachtwoord, admin wachtwoord en nog veel meer aanpassen. Je vindt deze bestanden in de volgende mappen:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Spelen

Aan het einde van de setup kun je nu de server starten door het eerder aangemaakte **start-ark.bat** bestand uit te voeren. Dit opent de serverconsole en start het opstartproces van de server. Als alles goed gaat, is de server na een succesvolle start zichtbaar in de serverlijst.

![](https://screensaver01.zap-hosting.com/index.php/s/cENfRQGxK4NjM3Y/preview)

