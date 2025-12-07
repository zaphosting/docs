---
id: vserver-linux-gs-interface
title: "VPS: Gameserver/TS3 Interface"
description: "Ontdek hoe je eenvoudig game- en voice-servers op Linux VPS instelt zonder voorkennis met een geautomatiseerde interface → Leer het nu"
sidebar_label: GS/TS3 Interface
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Als game server producten niet helemaal jouw ding zijn of niet aan je verwachtingen voldoen, of als je je service op een andere manier nodig hebt, is een VPS vaak een betere optie. Maar vaak loop je tegen het probleem aan dat niet alle services geautomatiseerd of vooraf geïnstalleerd zijn. Het opzetten van services zoals game servers, Teamspeak 3 servers en muziekbots moet je dan zelf doen.

Om dit probleem op te lossen, hebben we een handige oplossing ontwikkeld voor onze Linux-gebaseerde VPS of dedicated server. De zogenaamde Gameserver/Teamspeak 3 Server interface (GS/TS3 Interface)!

<YouTube videoId="V6qyQFPp_Ls" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/frWNEMQqcMxzRcM/preview" title="Setup a Game Server using Linux VPS with NO EXPERIENCE!" description="Snap je het beter als je dingen in actie ziet? Wij fixen het! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>

<InlineVoucher />

## Gebruiksscenario

Met de gebruiksvriendelijke GS/TS3 interface kun je Teamspeak 3 of andere geselecteerde game server services op je Linux VPS of dedicated server installeren met slechts een paar klikken. Voor deze installatie is geen voorkennis nodig. Het opzetten van alle benodigde pakketten, serverbestanden en de daadwerkelijke installatie zijn volledig geautomatiseerd, wat je tijd en moeite bespaart.

:::warning
De GS/TS3 interface functie is te gebruiken met de volgende besturingssystemen:

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) We zijn al bezig om binnenkort ook andere en nieuwere besturingssystemen en (versies) beschikbaar te maken.
:::



## Beschikbare services / games

De GS/TS3 interface ondersteunt het opzetten van game servers, voice servers en muziekbots. De meeste games die we aanbieden voor onze game server producten zijn ook beschikbaar via de GS/TS3 interface optie. Dit geldt voor alle games die we actief onder Linux draaien. Alle games die op Windows draaien kunnen helaas niet geïnstalleerd worden. Daar is alleen een handmatige installatie mogelijk, mits de game een Linux server versie ondersteunt.

| Services    | Ondersteund |
| ----------- | ---- |
| Game server  | ✔️    |
| Voice server | ✔️    |
| Musicbot (Sinuxbot)   | ✔️    |



## Installatie en configuratie

Om de GS/TS3 interface te installeren, ga je in de serverbeheer van je product naar het navigatiepaneel **Instellingen** en klik je op het submenu **Gameserver / TS3**. 

De eerste keer dat je de GS/TS3 interface opent, kom je in de gebruiksvriendelijke setup wizard terecht. Om de interface op te zetten en te koppelen aan je server, moet je eerst een SSH-sleutel aanmaken. Deze sleutel is nodig zodat de website een veilige verbinding met de server kan maken. Zo kun je services zoals game servers en Teamspeak 3 servers direct via de interface opzetten, beheren en aansturen.

Daar maak je de SSH-sleutel aan. Klik hiervoor op de knop **Genereer SSH-sleutel** en voeg de sleutel daarna toe door op **Voeg sleutel toe** te klikken. 


![](https://screensaver01.zap-hosting.com/index.php/s/teZ87eGKRm6iJRa/preview)



Als je op **Voeg sleutel toe** hebt geklikt, wordt de SSH-sleutel opgeslagen op je server. De GS/TS3 interface kan dan aan je server worden toegevoegd.



![](https://screensaver01.zap-hosting.com/index.php/s/QqtCFmC3oxPErD9/preview)



:::info
**Tip:** Als de SSH-sleutel niet meteen wordt herkend, kan het helpen om de server te herstarten en de pagina te verversen.
:::

Tijdens de installatie kun je de voortgang volgen. Houd er rekening mee dat het installeren en configureren van de interface en de pakketten even kan duren. Dit duurt meestal tussen de 5 en 15 minuten.

![](https://screensaver01.zap-hosting.com/index.php/s/xkWQBEp74BqQdM6/preview)

:::info
**Let op**: Ga niet verder met het proces totdat de interface volledig is geïnstalleerd. Je herkent een succesvolle installatie doordat de voortgangsbalk verdwenen is en er bij elk pakket "Geïnstalleerd" staat in plaats van "Ontbreekt".
:::



### Game server aanmaken

Als de installatie van de GS/TS3 interface succesvol is afgerond, kun je nu beginnen met het opzetten van services. Het installeren van een game server doe je via de knop **Installeer game server** in de categorie **Game server**.

![](https://screensaver01.zap-hosting.com/index.php/s/4TD3w3dpXrFYNcb/preview)



In de volgende stap kun je het IP-adres kiezen van de gewenste game server (als je server meer dan één IP heeft). Ook kun je de gewenste poort, het aantal slots en de RAM-boost zelf instellen.

![](https://screensaver01.zap-hosting.com/index.php/s/icfwifbTrmwZQ6q/preview)

Check goed of alle gegevens kloppen en aan jouw wensen voldoen. Als je alles hebt ingesteld, klik je op "Installeer game server nu" om het installatieproces te starten. De game server wordt dan opgezet volgens jouw instellingen en je kunt snel aan de slag. Je ziet je nieuw aangemaakte game server nu in de lijst staan.



![](https://screensaver01.zap-hosting.com/index.php/s/MTRmMwc9GyMFW5A/preview)



Je bent nu in het beheer van je game server. Hier kun je in het navigatiepaneel **Instellingen** onder **Games** het gewenste spel voor je game server selecteren en installeren.

![](https://screensaver01.zap-hosting.com/index.php/s/xqxLAAR6jbdmM3Z/preview)

Je ziet hier een lijst met alle games die je op je server kunt installeren. In dit voorbeeld wordt een server met het spel (pakket) Minecraft: Paperspigot geïnstalleerd. Kies je gewenste game en klik op de groene knop om de installatie te starten.

![](https://screensaver01.zap-hosting.com/index.php/s/MtrsxLoYxssJLBt/preview)

Er verschijnt een overzicht met alle benodigde voorwaarden. Als aan alle voorwaarden is voldaan, kun je het proces bevestigen met de knop **Accepteer en installeer**.

![](https://screensaver01.zap-hosting.com/index.php/s/GjijXaM3z9EgnYG/preview)

Het opzetten van het spel kan even duren, afhankelijk van het spel. De voortgang zie je in de statusweergave. Daarna kun je je game server starten en ermee verbinden in het spel!



### Voice server aanmaken

Het installeren van een **Voiceserver (Teamspeak 3 Server)** werkt vergelijkbaar met het installeren van een game server. Je klikt eerst weer op "Gameserver / TS3". In dit gedeelte vind je de optie **Installeer voice server**, waarmee je het installatieproces voor de Teamspeak 3 server start.

![](https://screensaver01.zap-hosting.com/index.php/s/xct5DPC57wWeABG/preview)

In de volgende stap kun je de gewenste instellingen voor je Teamspeak 3 server opgeven, zoals het IP-adres, de poort en het aantal beschikbare slots. Als je alle info hebt ingevuld, rond je de installatie af met **Installeer voice server nu**.

![](https://screensaver01.zap-hosting.com/index.php/s/2XnJrDEDyLwBsHk/preview)

Check goed of alle gegevens kloppen en aan jouw wensen voldoen. Als je alles hebt ingesteld, klik je op **Installeer Teamspeak 3/5 Server nu** om het installatieproces te starten. Je ziet de geïnstalleerde Teamspeak 3 server nu in het overzicht **Voiceserver Overzicht**.

![](https://screensaver01.zap-hosting.com/index.php/s/bgpZJgPjz7Ybpke/preview)

:::info
**Let op**: Dit is de instantie waarop de Teamspeak 3 server daarna geïnstalleerd wordt.
:::

Je bent nu in de interface van de instantie van je geïnstalleerde Teamspeak 3 server. Je kunt de instantie starten door op de **Start** knop te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/G96RPrjEdm96CCj/preview)


Klik nu op het menu-item **Virtual Servers**. Hier staan alle geïnstalleerde Teamspeak 3 servers op jouw instantie overzichtelijk weergegeven. Om de interface van een specifieke Teamspeak 3 server te openen, klik je simpelweg op het "oog" icoon.

![](https://screensaver01.zap-hosting.com/index.php/s/awJdyTgJPSia5B2/preview)

In de Teamspeak 3 server interface vind je alle benodigde info en instellingen om je server helemaal naar wens te beheren en in te richten. Bijvoorbeeld onder het tabblad "Autorisatiesleutel" kun je een token aanmaken waarmee je adminrechten op je server krijgt. Zo heb je volledige controle over gebruikersbeheer en toegang tot de server.

Onder het menu-item "Instellingen" heb je nog meer opties om je server aan te passen. Hier kun je bijvoorbeeld de naam van je server wijzigen, een wachtwoord instellen om toegang te beperken, of een persoonlijke welkomstboodschap opslaan die gebruikers krijgen als ze de server binnenkomen.

:::caution Info over Teamspeak-licenties
Er is standaard geen licentie geïnstalleerd op de Teamspeak 3 server. Dit betekent dat je een Teamspeak 3 server alleen kunt gebruiken met een capaciteit van 32 slots. Wil je meer capaciteit of extra functies voor je Teamspeak 3 server activeren, dan kun je een bijpassende licentie aanschaffen bij Teamspeak.
:::


## Conclusie

Gefeliciteerd, je hebt onze GS/TS3 interface succesvol geïnstalleerd en geconfigureerd! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />