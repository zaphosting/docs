---
id: dedicated-windows-fs-22-epic
title: "Dedicated Server: Farming Simulator 2022 (Epic Games) Dedicated Server Windows Setup"
description: "Ontdek hoe je een dedicated server voor Farming Simulator 22 Epic Games versie opzet met geoptimaliseerde prestaties en unieke vereisten → Leer het nu"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het opzetten van een server voor de Farming Simulator 22 Epic Games versie wijkt iets af van het proces voor een standaard server. Deze gids neemt je stap voor stap mee, met focus op de unieke aspecten van de Epic Games versie.

## Voorbereiding

Zorg voordat je begint dat je setup aan de volgende eisen voldoet:
- **Besturingssysteem:** Windows Server 2016/2019 (64-bit)
- **CPU:** Minimaal 4x 2.4 GHz (AMD/Intel)
- **RAM:** Minimaal 4GB (DDR3/4)
- **Schijfruimte:** Minimaal 50GB vrij (SSD of beter aanbevolen)
- **Epic Games Account:** Een Epic Games account met Farming Simulator 22.

:::info
Je kunt de server niet hosten en tegelijkertijd spelen op hetzelfde Epic Games account. Dit betekent dat je een tweede exemplaar van het spel op een ander account nodig hebt als je op de server wilt spelen.
:::

## Stap 1: Voorbereiden van de serverinstallatie
Verbind eerst met je server via Remote Desktop (RDP). Hulp nodig? Check onze [Initial Access (RDP)](vserver-windows-userdp.md).

Eenmaal verbonden moet je een vereiste installeren: Microsoft Visual C++ Redistributable, te downloaden via [Microsoft's website](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170). Volg na het downloaden de instructies op het scherm om de installatie te voltooien.

:::tip
Het kan zijn dat je de C++ Redistributable al geïnstalleerd hebt. In dat geval kan de installer een foutmelding geven. Die kun je veilig negeren en gewoon doorgaan.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

Installeer nu de Epic Games launcher, te downloaden via [Epic Games' website](https://store.epicgames.com/en-US/download). Volg ook hier de instructies op het scherm.

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

Na installatie zal de launcher waarschijnlijk nog wat extra bestanden en updates downloaden voordat hij opent.

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

Als de launcher geopend is, log dan in met je Epic Games account dat Farming Simulator 2022 bezit.

## Stap 2: Farming Simulator 2022 downloaden

Klik in de Epic Games Launcher op het tabblad **Bibliotheek** en zoek Farming Simulator 22. Klik op **Installeren** en kies de locatie waar je het spel wilt downloaden.

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

Wacht tot de download en installatie voltooid zijn. De snelheid hangt af van de bandbreedte van je server.

## Stap 3: Launch-opties instellen

Ga na installatie terug naar het tabblad **Bibliotheek** in de Epic Games Launcher. Zoek Farming Simulator 22, klik op de drie puntjes ernaast en kies **Beheren**.

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

Scroll naar beneden naar **Launch-opties** en zet deze aan. Vul in het tekstvak `-server` in en sluit het menu.

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## Stap 4: De server starten

Start nu Farming Simulator 2022 via de Epic Games launcher of de snelkoppeling op je desktop. Het spel zou nu via een command prompt (CMD) moeten starten in dedicated server modus. Werkt het niet? Check dan of je de launch-optie goed hebt ingesteld.

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## Stap 5: Webinterface inschakelen (optioneel)

Dedicated servers voor Farming Simulator 22 hebben een webinterface die je kunt inschakelen. Dit is optioneel, maar handig om instellingen aan te passen en allerlei info te checken, dus we raden het aan.

Sluit eerst de server af door de command prompt te sluiten, zodat je wijzigingen niet overschreven worden.

Ga naar de installatiemap van je game, meestal `C:\Program Files\Epic Games\FarmingSimulator22` als je de standaardlocatie hebt gebruikt.

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

Open het bestand `dedicatedServer.xml` in de hoofdmap met een teksteditor zoals Kladblok.

Stel de gebruikersnaam en het wachtwoord voor admin in door de juiste velden aan te passen:
```xml
  <initial_admin>
    <username>admin</username> //gebruikersnaam
    <passphrase>your_password</passphrase> //wachtwoord
  </initial_admin>
```

![](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

Sla het bestand op en sluit het. Start daarna `dedicatedServer.exe` in dezelfde map.

![](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

Je kunt nu de webinterface openen via `http://[jouw_serverip]:8080` in je browser, waarbij je `[jouw_serverip]` vervangt door het IP-adres van je server. Wil je lokaal op dezelfde server inloggen, gebruik dan `http://127.0.0.1:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
Door de unieke setup van de Epic Games versie kun je tegen beperkingen aanlopen met de webinterface. Je kunt wel instellingen aanpassen en de server stoppen via de webinterface, maar bijvoorbeeld niet de server starten.

Bij problemen stop je eerst dedicatedServer.exe, start je Farming Simulator 22 direct om de server te laten draaien, en daarna dedicatedServer.exe om de webinterface te activeren.

Belangrijk: start eerst de server **en daarna** de webinterface, anders kan Epic Games beide als hetzelfde bestand zien en verhinderen dat de server start.
:::

## Stap 6: Poorten openzetten (Port Forwarding)

Om je server publiek toegankelijk te maken, moet je poortregels aanpassen voor de poorten die de dedicated server gebruikt. Dit kan via PowerShell (makkelijker) of via de Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Open het zoekvak van Windows en zoek naar **PowerShell**. Klik met rechts en kies **Als administrator uitvoeren** zodat je de juiste rechten hebt.

:::info
Zorg dat je PowerShell als administrator draait, anders werken de instellingen niet goed.
:::

Plak de volgende commando’s in je PowerShell prompt:
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

Deze regels zorgen ervoor dat de firewall de benodigde poorten openzet zodat je Farming Simulator 22 server bereikbaar is.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Open via zoeken **Windows Firewall met geavanceerde beveiliging**. Soms moet je eerst op **Geavanceerde instellingen** klikken om het juiste venster te openen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Maak nieuwe regels aan voor inkomend en uitgaand verkeer met de volgende protocollen en poorten:
- TCP inkomend en uitgaand: 3724, 27015
- UDP inkomend en uitgaand: 3724, 27015

Heb je hulp nodig? Check onze [Port Forwarding (Firewall)](vserver-windows-port.md) gids.

</TabItem>
</Tabs>

## Stap 7: Verbinden met de server
Start het spel en ga naar het multiplayer menu. Zoek de servernaam op, die je ook in de webinterface kunt vinden en aanpassen.

Klik op de server om te verbinden. Als er om een wachtwoord gevraagd wordt, vul dat dan in (ook te vinden in de webinterface).

Gefeliciteerd, je hebt Farming Simulator 22 (Epic Games versie) succesvol geïnstalleerd op je Windows Dedicated Server!