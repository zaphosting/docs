---
id: vserver-linux-troubleshooting-restore-access
title: "VPS: Toegang herstellen"
description: "Ontdek hoe je weer toegang krijgt tot je Linux VPS na een wachtwoord-lockout en minimaliseer downtime → Leer het nu"
sidebar_label: Toegang herstellen
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Het kan snel gebeuren. Je probeert in te loggen op je Linux-server, maar het wachtwoord wordt niet meer geaccepteerd of is vergeten. Hierdoor is toegang tot het systeem en belangrijke data of services niet meer mogelijk. Super frustrerend, vooral als de server nodig is voor lopende processen. Bij de meeste Linux-distributies kun je via de recovery mode weer toegang krijgen zonder het OS opnieuw te installeren. Volg onderstaande stappen om weer toegang te krijgen tot je server en zo min mogelijk downtime te hebben.



## Toegang herstellen

Om het wachtwoord te resetten via recovery mode, moet het systeem opstarten met toegang tot het GRUB bootmenu. Open tijdens het opstarten het GRUB-menu en selecteer **Advanced options for Ubuntu**.

![img](https://screensaver01.zap-hosting.com/index.php/s/j6DKWdM95fFWWZi/preview)

Kies op het volgende scherm de optie die het systeem in **recovery mode** start. Dit laadt de recovery omgeving in plaats van het normale OS.

Als het recovery menu verschijnt, selecteer je **root – Drop to root shell prompt** en bevestig je de keuze. Druk nogmaals op Enter om de root shell te openen.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFjTj3FxKQwHemD/preview)

In recovery mode wordt het root-bestandssysteem standaard als read-only gemount. Om het wachtwoord te kunnen wijzigen, moet je het met schrijfpermissies remounten. Voer het volgende commando uit:

```bash
mount -o remount,rw /
```

Als je de gebruikersnaam niet weet, kun je alle beschikbare accounts bekijken door de home directories te checken:

```
ls /home
```

Om het wachtwoord te resetten, gebruik je het `passwd` commando gevolgd door de gebruikersnaam:

```
passwd username
```

Vervang `username` door de juiste accountnaam. Voer het nieuwe wachtwoord in en bevestig het wanneer daarom gevraagd wordt. Het wachtwoord wordt niet op het scherm getoond. Als het wachtwoord succesvol is aangepast, herstart je het systeem met het commando `reboot`.



## Afsluiting

Als je deze stappen hebt doorlopen, heb je succesvol een nieuw wachtwoord ingesteld voor de gewenste gebruiker. Je kunt nu weer inloggen via je remote desktop verbinding. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂