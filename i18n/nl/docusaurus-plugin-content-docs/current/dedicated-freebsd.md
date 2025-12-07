---
id: dedicated-freebsd
title: "Dedicated Server: FreeBSD Installeren"
description: "Ontdek hoe je FreeBSD installeert en configureert op je dedicated server voor optimale prestaties en betrouwbaarheid → Leer het nu"
sidebar_label: FreeBSD Installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Hier leggen we je stap voor stap uit hoe je het FreeBSD besturingssysteem installeert en configureert op je dedicated server. Volg deze instructies goed om ervoor te zorgen dat je het OS succesvol opzet en optimaal gebruikt.

:::info

De gids is gebaseerd op FreeBSD 13.0. Installaties van oudere of nieuwere versies kunnen iets afwijken in het proces.

:::



## Voorbereiding

Voor het installeren en configureren van een besturingssysteem is het belangrijk om eerst de juiste ISO van het OS te mounten. Dit kan op verschillende manieren:

1. Mounten via de initiële setup
2. Mounten via iLO (Virtual Media)
3. Mounten via iLO (Remote Console)

Als je nog niet bekend bent met het mounten van een ISO-bestand, bekijk dan onze [Initiële setup](dedicated-setup.md) of [Eigen ISO](dedicated-iso.md) handleiding.



## Installatie
Zodra de ISO succesvol is geladen, start de server met het setupproces.

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

Start de installatie door op `Enter` te drukken![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

Kies de gewenste toetsenbordindeling en ga verder met doorgaan.

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

Kies je gewenste hostname.

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

Je kunt optionele systeem-pakketten kiezen die geïnstalleerd moeten worden, als je klaar bent, ga door met OK.

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

In deze stap kun je partities aanmaken, in dit voorbeeld gebruiken we RAID0. Meer info over RAID vind je in [RAID Configureren](dedicated-raid.md)

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

Druk op `Enter` als je geen wijzigingen wilt maken.

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

Omdat we RAID0 gebruiken, kiezen we geen redundantie.

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

Markeer je volume met `Space` en ga verder met `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

We bevestigen dat alle data gewist wordt

:::info
Je server verwerkt nu de setup, dit kan enkele minuten duren
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

Vul je wachtwoord in en ga verder met `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

Kies "Nee" bij IPv4/IPv6 configuratie, dit doen we later.

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

Kies "Ja" en selecteer je tijdzone en datum/tijd.

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

Je kunt instellen welke systemen automatisch starten bij het opstarten van de server.

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

Pas indien nodig de beveiligingsinstellingen aan.

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

De setup is nu klaar, kies "Exit" en bevestig met `Enter`

:::info
Verwijder de ISO in je iLO en kies "Reboot"
:::



## Configuratie

### Netwerk

Om het netwerkapparaat te activeren, log in op je systeem met je wachtwoord.

Open loader.conf met een editor naar keuze, bijvoorbeeld `ee /boot/loader.conf` en voeg de volgende regel toe:

```if_oce_load="YES"```

Verlaat de editor met `CTRL+C` en typ exit, daarna herstart je je dedicated server.

***

Na de reboot moeten we rc.conf aanpassen, bijvoorbeeld met `ee /etc/rc.conf`, voeg de volgende regel toe:

```
ifconfig_oce0="DHCP"
```

:::caution
De naam van de netwerkadapter in het voorbeeld **oce0** kan anders zijn. Zorg dat je de juiste netwerkadapter gebruikt. Dit kun je checken met het ifconfig-commando. De netwerkgegevens worden dan automatisch via DHCP opgehaald.
:::

Dit zou er bijvoorbeeld zo uit moeten zien:

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

Verlaat de editor met `CTRL+C` en typ "exit", voer daarna het commando `/etc/netstart` uit.

:::info
Je server zou nu een actieve internetverbinding moeten hebben
:::



## Afsluiting

Gefeliciteerd, je hebt FreeBSD succesvol geïnstalleerd op je dedicated server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, we staan dagelijks voor je klaar! 🙂