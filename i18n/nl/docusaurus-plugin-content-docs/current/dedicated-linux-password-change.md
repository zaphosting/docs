---
id: dedicated-linux-password-change
title: "Dedicated Server: Root-wachtwoord wijzigen voor Linux-server"
description: "Ontdek hoe je je serverwachtwoord veilig kunt wijzigen en beheren via de webinterface of console voor betere toegangscontrole → Leer het nu"
sidebar_label: Wachtwoord wijzigen
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Webinterface

Je kunt het wachtwoord wijzigen via onze webinterface. Open de pagina "Toegang en Beveiliging", die je links in het navigatiemenu vindt.

![](https://screensaver01.zap-hosting.com/index.php/s/Kt3B9n4sGpbpn5q/preview)

Het root-wachtwoordveld bevindt zich daar, waar je het gewenste wachtwoord kunt instellen.

:::info
Houd er rekening mee dat het wachtwoord minimaal 8 tekens lang moet zijn en hoofdletters, kleine letters (a-z/A-Z), cijfers (1-9) en speciale tekens (!@=#$%&-?_;:.,) moet bevatten. Als dit niet het geval is, wordt het wachtwoord niet op de server toegepast.
:::

Nadat je het wachtwoord hebt ingevoerd, verschijnt er een pop-up die je kunt bevestigen met "ok".

![](https://screensaver01.zap-hosting.com/index.php/s/Ckc6PLB3tRY5epR/preview)

Als aan alle voorwaarden is voldaan, bevestigt het systeem dat het wachtwoord succesvol is gewijzigd.


✅ Het wachtwoord is nu gewijzigd.


Vanaf nu kun je het wachtwoord 3 uur lang in onze webinterface bekijken. Daarna wordt het om veiligheidsredenen verwijderd. Om het wachtwoord te bekijken, klik je gewoon op het oog-icoon bij "Wachtwoord".

![](https://screensaver01.zap-hosting.com/index.php/s/XfpFrGg5LyKEiRL/preview)

Vervolgens verschijnt er een pop-upvenster waarin het wachtwoord wordt weergegeven.


## Server Console

Je kunt het wachtwoord ook wijzigen via de Server Console, of je nu toegang hebt via Putty of via de Seriële console.

:::info
Belangrijk: Deze optie is alleen beschikbaar als je nog toegang hebt tot de server.
:::

Als je bent ingelogd in de console, kun je het wachtwoord wijzigen met het commando `passwd`. Daarna moet je het wachtwoord nogmaals invoeren ter bevestiging. Als dit klopt en het wachtwoord overeenkomt met de eerste invoer, bevestigt de console de wijziging.


Als beide wachtwoorden niet overeenkomen, stopt de console de actie. In dat geval moet je het commando `passwd` opnieuw uitvoeren.

:::info
Belangrijk: Als je het wachtwoord via de Console wijzigt, wordt het wachtwoord niet gedurende 3 uur weergegeven in onze webinterface onder Toegang en Beveiliging.
:::
