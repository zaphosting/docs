---
id: dedicated-proxmox
title: "Dedicated Server: Installatie van Proxmox VE"
description: "Ontdek hoe je Proxmox VE installeert en beheert voor enterprise virtualisatie met geïntegreerde tools en hoge beschikbaarheid → Leer het nu"
sidebar_label: Proxmox Installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Proxmox Virtual Environment is een complete, open-source server management platform voor enterprise virtualisatie. Het integreert de KVM hypervisor en Linux Containers (LXC), software-defined storage en netwerkfunctionaliteiten, allemaal op één platform. Met de geïntegreerde webinterface beheer je eenvoudig VM's en containers, hoge beschikbaarheid voor clusters, en de ingebouwde disaster recovery tools.



## Voorbereiding

Om te beginnen moet je de Proxmox VE (Virtual Environment) ISO installer mounten en opstarten op je dedicated server. Dit kan op twee manieren: de makkelijkere via de webinterface van je dedicated server, of de wat langere route via het iLO-paneel van je server.



### ISO mounten via de webinterface
Ga naar de **Initial Installation** sectie in het webinterface paneel van je dedicated server. Druk hier eerst op de groene **enable iLO** knop. Wacht even tot de secties zichtbaar worden. Je moet mogelijk de pagina verversen om alles goed te laten laden.

![](https://github.com/zaphosting/docs/assets/42719082/b457f17a-0bc6-42db-91ec-a553fd456936)

Selecteer vervolgens een **Proxmox VE** ISO uit het dropdownmenu. We raden aan de nieuwste versie te gebruiken om up-to-date te blijven. Klik daarna op de groene **Insert** knop.

![](https://github.com/zaphosting/docs/assets/42719082/2b0baf71-d683-46ad-a34a-bfda9d71939d)

Tot slot moet je je dedicated server herstarten om vanaf de ISO te kunnen booten. Dit doe je via de restart knop onder stap 3.



### ISO mounten via iLO
Download de Proxmox VE ISO via de [Proxmox download site](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso). Upload en mount deze vervolgens op je dedicated server volgens de [iLO](dedicated-ilo.md) & [Eigen ISO](dedicated-iso.md) handleidingen, waarin wordt uitgelegd hoe je inlogt en je custom ISO uploadt.



## Setup & configuratie

:::important
Zorg dat je je server hebt herstart na het importeren en mounten van de nieuwe ISO voordat je verder gaat.
:::

Nu je ISO gemount is, moet je hiervan opstarten. Dit doe je via de **HTML5 remote console** in je iLO-paneel. Klik in de webinterface op de **Open here** link onder `iLO web access` om naar je paneel te gaan en log in met de gegeven credentials.

:::note
Je browser kan een beveiligingswaarschuwing tonen, negeer deze en accepteer om door te gaan.
:::

Eenmaal ingelogd, vind je onder de **Overview** sectie de **HTML5** link onder `Integrated Remote Console`. Klik hierop om een overlay paneel te openen.

![](https://github.com/zaphosting/docs/assets/42719082/3b9ce97e-f974-439b-8e57-ced05f248ef9)

Je Proxmox setup start nu. Navigeer met de `pijltjestoetsen`, `enter` en `esc`. We raden aan de **Graphical** versie te kiezen, want deze handleiding volgt die.

![](https://github.com/zaphosting/docs/assets/42719082/614218f2-df12-43ad-95fe-39026b900141)

Wacht een paar seconden tot het installatieproces verder gaat. Accepteer de Proxmox EULA via de **I agree** knop rechtsonder. Op de volgende pagina kies je de doel-schijf voor je omgeving. Gebruik je één schijf, dan zijn de standaardinstellingen prima en klik je op **Next**.

![](https://github.com/zaphosting/docs/assets/42719082/090c1f2e-20fe-48f3-b4b4-070c197f4825)

:::note
Wil je RAID instellen (sommige dedicated servers hebben twee schijven), gebruik dan de **Options** knop om je gewenste `RAID` modus te kiezen. Wij raden `RAID1` aan, dat beide schijven spiegelt.

![](https://github.com/zaphosting/docs/assets/42719082/44e3b6ba-07f3-4313-8d36-b185a6da8089)
:::

Vul daarna algemene zaken in zoals taal en toetsenbordindeling, die meestal automatisch worden gedetecteerd. Klik op verder.

![](https://github.com/zaphosting/docs/assets/42719082/931e066c-9868-48d9-a638-f07c932579d2)

Stel nu een sterk wachtwoord en een e-mailadres in. Het e-mailadres wordt gebruikt voor belangrijke meldingen vanuit je panel.

:::important
Onthoud het wachtwoord goed, want hiermee log je na installatie voor het eerst in op het panel!
:::

![](https://github.com/zaphosting/docs/assets/42719082/617a504c-9520-4b89-93c3-81fba06e5fdc)

De laatste stap is het instellen van de netwerkconfiguratie. Kies de beschikbare management interface en een hostname voor je server.

![](https://github.com/zaphosting/docs/assets/42719082/d694a5af-20e2-4c1b-9cdb-c1a8ca684cde)

Ga nu naar de **IP-Addresses** sectie in de webinterface van je dedicated server om een beschikbare IP te vinden.

![](https://github.com/zaphosting/docs/assets/42719082/e358f264-8535-4280-a1c5-0a15f4b99ed9)

Kies een IP-adres dat je wilt gebruiken voor je Proxmox panel. Vul het IP-adres, Netmask en Gateway in de installer in met de gegevens uit de webinterface. Voor de DNS-server kun je `8.8.8.8` invullen, dat is de publieke DNS van Google.

Als alles ingevuld is, klik je op **Next** en controleer je de samenvatting. Klopt alles? Klik dan op **Install** om door te gaan!

## Toegang tot het panel
Na de installatie en herstart, kies je in het menu de optie **Proxmox Environment GNU/Linux** en druk op **Enter**. Na het laden zie je een welkomstbericht in de console met het IP-adres en een link om via je browser in te loggen op het panel (het IP dat je eerder hebt opgegeven). Ga naar die link.

:::note
Je browser kan weer een beveiligingswaarschuwing tonen, negeer deze en accepteer om door te gaan.
:::

Als de link niet werkt, is er waarschijnlijk iets misgegaan met de netwerkconfiguratie tijdens de setup.

Log in op het panel met de gebruikersnaam `root` en het wachtwoord dat je tijdens de installatie hebt ingesteld. Zorg dat **Realm** staat op `Linux PAM standard authentication`.

![](https://github.com/zaphosting/docs/assets/42719082/4072c2ac-6f5c-4350-a5df-0635b1f433c0)

Na het inloggen kun je het abonnementsbericht negeren door op **OK** te klikken. Gefeliciteerd, je hebt Proxmox VE succesvol geïnstalleerd en bent ingelogd op je panel!



## Maak je eerste VM aan
Hier leggen we de basisstappen uit om je eerste Virtual Machine (VM) te maken via het Proxmox panel. Ga naar `local (panel)` en kies de sectie **ISO Images**. Hier kun je een `.iso` bestand handmatig uploaden, of Proxmox het direct laten downloaden via een directe URL.

![](https://github.com/zaphosting/docs/assets/42719082/8182bd73-690f-434f-8394-5fdca6889a74)

Daarna klik je rechtsboven op **Create VM**. Er opent een menu met veel opties.

Begin met de algemene instellingen. Standaard staat de `Node` op de default (hier `panel`). Geef een unieke VM ID op, standaard is dat `100` of een hoger nummer als je al VM's hebt. Geef je VM een naam, dat kan alles zijn.

![](https://github.com/zaphosting/docs/assets/42719082/bcd2eb41-a8fc-4a44-9abb-072f9e408d10)

Ga door naar de OS instellingen. Kies hier de ISO die je eerder hebt geüpload. Selecteer ook het type en de versie van het OS dat je gaat gebruiken.

![](https://github.com/zaphosting/docs/assets/42719082/05d51c46-5a69-4cd7-b2e6-c3472437caf9)

We raden aan de standaard instellingen bij System te laten staan, die zijn meestal goed. Bij Disk kun je de grootte van de schijf instellen en de opslagpool kiezen, standaard is dat `local-lvm`. De rest van de instellingen kun je ook standaard laten.

![](https://github.com/zaphosting/docs/assets/42719082/26f11d42-8884-4bb5-b0fe-d7b4df7885a5)

Bij CPU instellingen bepaal je het aantal sockets en cores voor je VM. Pas dit aan naar wens.

![](https://github.com/zaphosting/docs/assets/42719082/91103b8d-dadc-4305-a3fe-bf4c8f96fc27)

Ook bij Memory kun je instellen hoeveel RAM je VM krijgt en de ballooning status.

![](https://github.com/zaphosting/docs/assets/42719082/ac0048cb-0bd4-4791-9a9f-857e5037955d)

Laat de Network instellingen voorlopig op standaard staan, die zijn meestal prima. Tot slot kun je alles nog eens controleren. Zet de optie `Start after created` aan zodat je VM meteen opstart. Ben je tevreden? Klik dan op **Finish** om de VM aan te maken.

![](https://github.com/zaphosting/docs/assets/42719082/d14a8b3d-e9bb-4feb-8049-428e84c1e917)

En zo heb je je eerste VM gemaakt in je Proxmox panel! Je ziet ‘m terug in de serverlijst links in het panel.





## Conclusie

Gefeliciteerd, je hebt Proxmox succesvol geïnstalleerd op je dedicated server. Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂