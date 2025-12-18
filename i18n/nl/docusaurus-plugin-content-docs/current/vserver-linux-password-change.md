---
id: vserver-linux-password-change
title: "VPS: Root-wachtwoord wijzigen voor Linux-server"
description: "Ontdek hoe je je serverwachtwoord veilig kunt wijzigen en beheren via de webinterface of console voor betere toegangscontrole → Leer het nu"
sidebar_label: Wachtwoord wijzigen
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Webinterface

Het wachtwoord kan gewijzigd worden via onze webinterface. Open de pagina "Toegang en Beveiliging", die je links in de navigatie vindt.

![](https://screensaver01.zap-hosting.com/index.php/s/9nMFt4ZAGmQEHnZ/preview)

Het root-wachtwoordveld vind je daar, waar je het gewenste wachtwoord kunt instellen.

:::info
Houd er rekening mee dat het wachtwoord minimaal 8 tekens lang moet zijn en hoofdletters, kleine letters (a-z/A-Z), cijfers (1-9) en speciale tekens (!@=#$%&-?_;:.,) moet bevatten. Als dit niet het geval is, wordt het wachtwoord niet op de server toegepast.
:::

Nadat het wachtwoord is ingevoerd, verschijnt er een pop-up die je kunt bevestigen met "ok".

![](https://screensaver01.zap-hosting.com/index.php/s/sybJP9oeJKY2SLr/preview)

Als aan alle voorwaarden is voldaan, bevestigt het systeem dat het wachtwoord succesvol is gewijzigd.

✅ Het wachtwoord is nu gewijzigd.

Vanaf nu is het wachtwoord 3 uur lang zichtbaar in onze webinterface. Daarna wordt het om veiligheidsredenen verwijderd. Om het wachtwoord te bekijken, klik je gewoon op het oog-icoon bij "Wachtwoord".

![](https://screensaver01.zap-hosting.com/index.php/s/rFKrYA6en8Z9ypz/preview)

Vervolgens verschijnt er een pop-up waarin het wachtwoord wordt getoond.


## Server Console

Het wachtwoord kan ook via de Server Console worden gewijzigd, ongeacht of je deze via Putty of de Seriële console opent.

:::info
Belangrijk: Deze optie is alleen te gebruiken als je nog toegang hebt tot de server.
:::

Als je bent ingelogd in de console, kun je het wachtwoord wijzigen met het commando `passwd`. Daarna moet je het wachtwoord nogmaals invoeren ter bevestiging. Als dit klopt, bevestigt de console de wijziging.

Als beide wachtwoorden niet overeenkomen, stopt de console de actie. In dat geval moet je het commando `passwd` opnieuw uitvoeren.

:::info
Belangrijk: Als je het wachtwoord via de Console wijzigt, wordt het niet zichtbaar in onze webinterface onder Toegang en Beveiliging gedurende 3 uur.
:::

<InlineVoucher />