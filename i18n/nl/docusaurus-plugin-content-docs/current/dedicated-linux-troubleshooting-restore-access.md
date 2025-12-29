---
id: dedicated-linux-troubleshooting-restore-access
title: "Dedicated Server: Toegang herstellen"
description: "Ontdek hoe je weer toegang krijgt tot je Linux Dedicated Server na een wachtwoord-lockout en minimaliseer downtime → Leer het nu"
sidebar_label: Toegang herstellen
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Het kan snel gebeuren. Je probeert in te loggen op je Linux-server, maar het wachtwoord wordt niet meer geaccepteerd of is vergeten. Hierdoor is toegang tot het systeem en belangrijke data of services niet meer mogelijk. Dit kan super frustrerend zijn, vooral als de server nodig is voor lopende processen. Bij de meeste Linux-distributies kun je de toegang herstellen via de recovery-modus zonder het besturingssysteem opnieuw te installeren. Volg de onderstaande stappen om weer toegang te krijgen tot je server en verder te werken met minimale onderbreking.



## Toegang herstellen

Om het wachtwoord te resetten via de recovery-modus, moet het systeem opstarten met toegang tot het GRUB bootmenu. Open tijdens het opstarten het GRUB-menu en selecteer **Advanced options for Ubuntu**.

![img](https://screensaver01.zap-hosting.com/index.php/s/j6DKWdM95fFWWZi/preview)

Kies op het volgende scherm de optie die het systeem in **recovery mode** start. Dit laadt de recovery-omgeving in plaats van het normale besturingssysteem.

Zodra het recovery-menu verschijnt, selecteer je **root – Drop to root shell prompt** en bevestig je de keuze. Druk nogmaals op Enter om de root shell te openen.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFjTj3FxKQwHemD/preview)

In recovery-modus wordt het root-bestandssysteem standaard als alleen-lezen gemount. Om het wachtwoord te kunnen wijzigen, moet het met schrijfpermissies worden gemount. Voer het volgende commando uit:

```bash
mount -o remount,rw /
```

Als je de gebruikersnaam niet weet, kun je alle beschikbare accounts bekijken door de home-mappen te checken:

```
ls /home
```

Om het wachtwoord te resetten, gebruik je het `passwd` commando gevolgd door de gebruikersnaam:

```
passwd username
```

Vervang `username` door de juiste accountnaam. Voer het nieuwe wachtwoord in en bevestig het wanneer daarom gevraagd wordt. Het wachtwoord wordt niet op het scherm weergegeven. Zodra het wachtwoord succesvol is aangepast, herstart je het systeem met het commando `reboot`.



## Conclusie

Als je deze stappen hebt doorlopen, heb je succesvol een nieuw wachtwoord ingesteld voor de gewenste gebruiker. Je kunt nu weer inloggen via de remote desktop verbinding. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂