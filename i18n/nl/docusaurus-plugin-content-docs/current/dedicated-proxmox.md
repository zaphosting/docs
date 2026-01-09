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

![](https://screensaver01.zap-hosting.com/index.php/s/r6XNqDqQeEec7wW/preview)

Selecteer vervolgens een **Proxmox VE** ISO uit het dropdownmenu. We raden aan de nieuwste versie te gebruiken om up-to-date te blijven. Klik daarna op de groene **Insert** knop.

![](https://screensaver01.zap-hosting.com/index.php/s/xXfWzqtE6JMG9Ka/preview)

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

![](https://screensaver01.zap-hosting.com/index.php/s/HPWJ3oksyo3SdW6/preview)

Je Proxmox setup start nu. Navigeer met de `pijltjestoetsen`, `enter` en `esc`. We raden aan de **Graphical** versie te kiezen, want deze handleiding volgt die.

![](https://screensaver01.zap-hosting.com/index.php/s/MGqm3EAxYc8EBQw/preview)

Wacht een paar seconden tot het installatieproces verder gaat. Accepteer de Proxmox EULA via de **I agree** knop rechtsonder. Op de volgende pagina kies je de doel-schijf voor je omgeving. Gebruik je één schijf, dan zijn de standaardinstellingen prima en klik je op **Next**.

![](https://screensaver01.zap-hosting.com/index.php/s/pZ8FiFJT6tJKFsS/preview)

:::note
Wil je RAID instellen (sommige dedicated servers hebben twee schijven), gebruik dan de **Options** knop om je gewenste `RAID` modus te kiezen. Wij raden `RAID1` aan, dat beide schijven spiegelt.

![](https://screensaver01.zap-hosting.com/index.php/s/WqiYPowiLttzoeZ/preview)
:::

Vul daarna algemene zaken in zoals taal en toetsenbordindeling, die meestal automatisch worden gedetecteerd. Klik op verder.

![](https://screensaver01.zap-hosting.com/index.php/s/As4J4NzytcZFrHp/preview)

Stel nu een sterk wachtwoord en een e-mailadres in. Het e-mailadres wordt gebruikt voor belangrijke meldingen vanuit je panel.

:::important
Onthoud het wachtwoord goed, want hiermee log je na installatie voor het eerst in op het panel!
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QAEaygacSXNfgot/preview)

De laatste stap is het instellen van de netwerkconfiguratie. Kies de beschikbare management interface en een hostname voor je server.

![](https://screensaver01.zap-hosting.com/index.php/s/EZDzsaq4aXpP4we/preview)

Ga nu naar de **IP-Addresses** sectie in de webinterface van je dedicated server om een beschikbare IP te vinden.

![](https://screensaver01.zap-hosting.com/index.php/s/KQC4DLj6LxTX4io/preview)

Kies een IP-adres dat je wilt gebruiken voor je Proxmox panel. Vul het IP-adres, Netmask en Gateway in de installer in met de gegevens uit de webinterface. Voor de DNS-server kun je `8.8.8.8` invullen, dat is de publieke DNS van Google.

Als alles ingevuld is, klik je op **Next** en controleer je de samenvatting. Klopt alles? Klik dan op **Install** om door te gaan!

## Toegang tot het panel
Na de installatie en herstart, kies je in het menu de optie **Proxmox Environment GNU/Linux** en druk op **Enter**. Na het laden zie je een welkomstbericht in de console met het IP-adres en een link om via je browser in te loggen op het panel (het IP dat je eerder hebt opgegeven). Ga naar die link.

:::note
Je browser kan weer een beveiligingswaarschuwing tonen, negeer deze en accepteer om door te gaan.
:::

Als de link niet werkt, is er waarschijnlijk iets misgegaan met de netwerkconfiguratie tijdens de setup.

Log in op het panel met de gebruikersnaam `root` en het wachtwoord dat je tijdens de installatie hebt ingesteld. Zorg dat **Realm** staat op `Linux PAM standard authentication`.

![](https://screensaver01.zap-hosting.com/index.php/s/iKcErA9Bx5LpB3n/preview)

Na het inloggen kun je het abonnementsbericht negeren door op **OK** te klikken. Gefeliciteerd, je hebt Proxmox VE succesvol geïnstalleerd en bent ingelogd op je panel!



## Maak je eerste VM aan
Hier leggen we de basisstappen uit om je eerste Virtual Machine (VM) te maken via het Proxmox panel. Ga naar `local (panel)` en kies de sectie **ISO Images**. Hier kun je een `.iso` bestand handmatig uploaden, of Proxmox het direct laten downloaden via een directe URL.

![](https://screensaver01.zap-hosting.com/index.php/s/GJjxxkPAkiRM7Fw/preview)

Daarna klik je rechtsboven op **Create VM**. Er opent een menu met veel opties.

Begin met de algemene instellingen. Standaard staat de `Node` op de default (hier `panel`). Geef een unieke VM ID op, standaard is dat `100` of een hoger nummer als je al VM's hebt. Geef je VM een naam, dat kan alles zijn.

![](https://screensaver01.zap-hosting.com/index.php/s/6LmXZ26bnNY46yS/preview)

Ga door naar de OS instellingen. Kies hier de ISO die je eerder hebt geüpload. Selecteer ook het type en de versie van het OS dat je gaat gebruiken.

![](https://screensaver01.zap-hosting.com/index.php/s/QWjGQ7grR8ttaqZ/preview)

We raden aan de standaard instellingen bij System te laten staan, die zijn meestal goed. Bij Disk kun je de grootte van de schijf instellen en de opslagpool kiezen, standaard is dat `local-lvm`. De rest van de instellingen kun je ook standaard laten.

![](https://screensaver01.zap-hosting.com/index.php/s/2XJyydoZwaEMDeZ/preview)

Bij CPU instellingen bepaal je het aantal sockets en cores voor je VM. Pas dit aan naar wens.

![](https://screensaver01.zap-hosting.com/index.php/s/RrWWT2wMRaQzde7/preview)

Ook bij Memory kun je instellen hoeveel RAM je VM krijgt en de ballooning status.

![](https://screensaver01.zap-hosting.com/index.php/s/DaXCsYLwWeMr9aJ/preview)

Laat de Network instellingen voorlopig op standaard staan, die zijn meestal prima. Tot slot kun je alles nog eens controleren. Zet de optie `Start after created` aan zodat je VM meteen opstart. Ben je tevreden? Klik dan op **Finish** om de VM aan te maken.

![](https://screensaver01.zap-hosting.com/index.php/s/EfNAZ4idcxizDsa/preview)

En zo heb je je eerste VM gemaakt in je Proxmox panel! Je ziet ‘m terug in de serverlijst links in het panel.





## Conclusie

Gefeliciteerd, je hebt Proxmox succesvol geïnstalleerd op je dedicated server. Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂