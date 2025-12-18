---
id: vserver-windows-ark
title: "VPS: ARK Survival Evolved Dedicated Server Windows Setup"
description: "Ontdek hoe je snel en makkelijk een ARK: Survival Evolved Dedicated Server op je Windows VPS installeert → Leer het nu"
sidebar_label: ARK Survival Evolved Dedicated Server Setup
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introductie
Heb je een Windows VPS en wil je daar game servers op installeren? Bijvoorbeeld een ARK: Survival Evolved Dedicated Server? Dan ben je hier aan het juiste adres! Hieronder leggen we stap voor stap uit hoe je zo’n server op jouw VPS kunt installeren.

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Tde2kaHrjgtMd3H/preview" title="ARK: Survival Evolved Dedicated Server Setup op Windows VPS" description="Snap je het beter als je dingen in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitzoekt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>

Verbind met je VPS via RDP om je ARK: Survival Evolved Dedicated Server op te zetten. Weet je niet hoe je via RDP verbinding maakt met je server? Check dan onze [Initial Access (RDP)](vserver-windows-userdp.md) gids.

<InlineVoucher />

## Voorbereiding

Voor het opzetten van een ARK server heb je SteamCMD nodig. SteamCMD is de **command line versie van de Steam client**. Met deze tool kun je snel en makkelijk dedicated server applicaties van populaire Steam games downloaden. Je vindt SteamCMD op de officiële Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD. 

Daarna ga je het downloaden. Dit levert een **steamcmd.zip** bestand op, dat je eerst moet uitpakken. Het is aan te raden om een aparte map aan te maken waar je het bestand uitpakt. Je zou dan de **steamcmd.exe** moeten zien. Voer deze uit en wacht tot de installatie klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/67Prbs9CKEo4tfG/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je beginnen met het installeren van de ARK server.



## Installatie

Na de installatie zou je commando’s moeten kunnen uitvoeren in de **Steam command line (steamcmd.exe)**. Hier moet je inloggen. Dit doe je met de gebruiker **anonymous**. Voer het volgende commando uit: `login anonymous`

De volgende stap is de installatie. Dit doe je met het commando `app_update 376030`. De App ID **376030** staat voor de **ARK: Survival Evolved Dedicated Server** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/37YL4YgiL4EogS6/preview)



:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::



Ga naar de map waar je de installatie hebt uitgevoerd en navigeer naar de volgende submap: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

Daar moet je het opstartbestand aanmaken dat nodig is om de server software te starten. Maak een bestand aan met de naam: start-ark.bat

:::info
Zorg ervoor dat je de optie 'Bestandsextensies weergeven' aan hebt staan, zodat de juiste bestandsextensie wordt gebruikt.
:::

Open het bestand, voeg de volgende inhoud toe en sla de wijzigingen op:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_naam>?ServerPassword=<join_wachtwoord>?ServerAdminPassword=<admin_wachtwoord>?Port=<poort>?QueryPort=<query_poor>?MaxPlayers=<max_spelers>
exit
```



Om de server zichtbaar en bereikbaar te maken van buitenaf, moeten de gebruikte serverpoorten in de firewall worden geopend/forwarded. Open hiervoor de Windows Firewall instellingen.

![](https://screensaver01.zap-hosting.com/index.php/s/WxKJRKAPf9dXwFF/preview)


Je moet extra regels toevoegen in de instellingen. Klik hiervoor op binnenkomende en uitgaande regels zoals hieronder beschreven en voeg ze toe voor de volgende protocollen en poorten:

- TCP binnenkomend en uitgaand: 27020
- UDP binnenkomend en uitgaand: 27015
- UDP binnenkomend en uitgaand: 7777-7778



## Configuratie

De basis setup is nu klaar. Verdere configuratie kun je doen in de configbestanden **DefaultGameUserSettings.ini** en **Gameusersettings.ini**. Hier kun je de servernaam, serverwachtwoord, adminwachtwoord en nog veel meer opties aanpassen. Je vindt deze bestanden in de volgende mappen:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Spelen

Aan het einde van de setup kun je nu de server starten door het eerder aangemaakte **start-ark.bat** bestand uit te voeren. Dit opent de serverconsole en start het opstartproces van de server. Als alles goed gaat, is de server na een succesvolle start zichtbaar in de serverlijst.

![](https://screensaver01.zap-hosting.com/index.php/s/SkjP94KCa9YnJXn/preview)


## Conclusie

Gefeliciteerd, je hebt de ARK Survival server succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />