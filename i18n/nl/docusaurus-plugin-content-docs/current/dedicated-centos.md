---
id: dedicated-centos
title: "Dedicated Server: Installatie van CentOS"
description: "Ontdek hoe je CentOS succesvol installeert en configureert op je dedicated server voor optimale prestaties en veiligheid → Leer het nu"
sidebar_label: Installeer CentOS
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Hier leggen we je stap voor stap uit hoe je het CentOS besturingssysteem installeert en configureert op je dedicated server. Volg deze instructies goed om ervoor te zorgen dat je het OS succesvol opzet en optimaal gebruikt.

:::info

De handleiding is gebaseerd op CentOS 8.3. Installaties van oudere of nieuwere versies kunnen qua proces iets afwijken.

:::



## Voorbereiding

Voor de installatie en configuratie van een besturingssysteem is het belangrijk om eerst de juiste ISO van het OS te mounten. Er zijn verschillende manieren om dit te doen:

1. Mounten via de initiële setup
2. Mounten via iLO (Virtual Media)
3. Mounten via iLO (Remote Console)

Als je nog niet bekend bent met het mounten van een ISO-bestand, check dan onze [Initiële setup](dedicated-setup.md) of [Eigen ISO](dedicated-iso.md) gids.



## Installatie

Als de ISO succesvol is geladen, start de server met het installatieproces.

![](https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview)

* Keyboard  
Kies je gewenste toetsenbordindeling

* Tijd & Datum  
Selecteer je tijdzone

* Root Wachtwoord  
Stel een wachtwoord in voor je root-account. Dit kan elk wachtwoord zijn, maar zorg voor een sterk wachtwoord en bewaar het veilig.

* Installatiebestemming  
Selecteer de SSD waarop CentOS geïnstalleerd wordt

* Netwerk & Hostnaam  
Door een incompatibiliteit kon het netwerk nog niet worden ingesteld, dat doen we aan het einde.

Als je alle instellingen naar wens hebt aangepast, klik dan op 'Begin Installation'.

![](https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview)

Na de installatie verwijder je de ISO van je server en klik je op 'Reboot System'.



## Configuratie

### Netwerk

Nu gaan we het netwerkapparaat configureren, hiervoor moeten we een paar bestanden updaten. Mount deze ISO via de remote console of iLO op je server.

![](https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

Als de ISO succesvol is gemount, moeten we hem in ons systeem mounten om erbij te kunnen.

```mount /dev/sr0 /mnt```

De ISO is nu gemount op `/mnt`

```rpm -i /mnt/be2net.rpm```

Installeer nu het updatepakket.

```modprobe be2net```

We voeren nu de update uit, dit kan een paar seconden duren.  
Check met `ip a s` of er een netwerkdevice `eno1` bestaat. Zo ja, herstart dan je systeem.

Na de reboot gaan we het netwerkapparaat configureren.

```nano /etc/sysconfig/network-scripts/ifcfg-eno1```

Vul het volgende in het bestand in:

```
DEVICE=eno1
BOOTPROTO=dhcp
ONBOOT=yes
```

Verlaat nano met `CTRL+X` en bevestig met `Y`

Start nu het netwerkapparaat met `ifup eno1`

:::info
Je dedicated server heeft nu een werkende internetverbinding.
:::





## Afsluiting

Gefeliciteerd, je hebt CentOS succesvol geïnstalleerd op je dedicated server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, we staan dagelijks voor je klaar! 🙂