---
id: vserver-linux-ssh2fa
title: "VPS: SSH two-factor authenticatie"
description: "Ontdek hoe je SSH-beveiliging verbetert met Google Authenticator 2FA voor veiligere servertoegang en bescherm je Linux-omgeving → Leer nu meer"
sidebar_label: 2FA (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Google's SSH two-factor authenticatie (2FA) service, bekend als **Google Authenticator SSH**, verhoogt de veiligheid van SSH (Secure Shell) toegang door een extra authenticatielaag toe te voegen. SSH biedt al een veilige manier om een versleutelde verbinding met een externe server op te zetten, maar met 2FA wordt het nog veiliger doordat gebruikers niet alleen hun wachtwoord moeten invoeren, maar ook een eenmalige verificatiecode die door Google Authenticator wordt gegenereerd. In deze gids nemen we je mee door het proces van het installeren en configureren van de **Google Authenticator SSH** service op een Linux-server.

<InlineVoucher />

## Installatie

Eerst moet je Google Authenticator installeren op je Linux VPS. Voer het volgende commando uit:

```
sudo apt install libpam-google-authenticator
```

Je wordt gevraagd om "Y" te typen om het pakket te installeren, doe dat, druk op Enter en Google Authenticator wordt geïnstalleerd!

![](https://screensaver01.zap-hosting.com/index.php/s/AnKdPXEzKdB5xWS/preview)

Start Google Authenticator door 'google-authenticator' te typen. Zorg dat je terminalvenster groot genoeg is voor de QR-code, anders druk je op "CTRL+C" en voer je het commando opnieuw in.

![](https://screensaver01.zap-hosting.com/index.php/s/8w9aDz5ZbSmNPZ9/preview)

Je wordt nu gevraagd of je het wilt uitvoeren, typ "Y" om te accepteren. Je krijgt nu een QR-code te zien. Open je Authenticator-app op je smartphone en scan de QR-code. Voor dit voorbeeld gebruiken we Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/J5CL6mjzPRMSiap/preview)

Zorg dat je de backupcodes kopieert, deze kun je elk één keer gebruiken als je je authenticator kwijtraakt.

![](https://screensaver01.zap-hosting.com/index.php/s/itdjPyGrFb7Wq39/preview)

De app toont nu al de codes die je later nodig hebt om in te loggen. Zo ziet dat er uit:

![](https://screensaver01.zap-hosting.com/index.php/s/TW24xBe26TbgCqE/preview)

Vervolgens krijg je de volgende vragen:

1. Wil je de Google Authenticator-configuratie opslaan?
2. Wil je slechts één login per 30 seconden toestaan?
3. Moet de tijd waarin een code bruikbaar is verlengd worden?
4. Moeten er maximaal drie logins per 30 seconden mogelijk zijn? (Bescherming tegen Brute Force)

Voor de beste beveiliging raden we aan om alles met Ja te bevestigen.

![](https://screensaver01.zap-hosting.com/index.php/s/bdYRncwk7ssQyYJ/preview)

## Configuratie

Nu moeten we Google Authenticator zo instellen dat het ook daadwerkelijk gebruikt wordt. Dit vereist twee aanpassingen.

### /etc/ssh/sshd_config

Activeer de benodigde modules in `/etc/ssh/sshd_config`. Open het bestand door te typen:
```
sudo nano /etc/ssh/sshd_config
```

Je zit nu in een teksteditor. Je kunt navigeren met de pijltjestoetsen, tekst verwijderen en invoegen. Druk op 'CTRL + X', dan 'Y' en daarna 'Enter' om het bestand op te slaan.

Zorg dat de regels 'UsePAM' en 'ChallengeResponseAuthentication' op 'yes' staan. Zo:

![](https://screensaver01.zap-hosting.com/index.php/s/n8MzX8724T2GFAF/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zLk98HrkF4jk4Jf/preview)

Sla het bestand op met 'CTRL + X', dan 'Y' en 'Enter'. Herstart SSH daarna met:
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

Voeg nu Google Authenticator toe aan de login in `/etc/pam.d/sshd`. Open het bestand met:
```
sudo nano /etc/pam.d/sshd
```
Scroll helemaal naar beneden en voeg deze regel toe:
```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/xwodXzPifANsQAM/preview)

Sla het bestand op met 'CTRL + X', dan 'Y' en 'Enter'.

## Toegang testen

Tijd om voor het eerst in te loggen met 2FA. Nadat je bovenstaande stappen hebt gevolgd, hoef je alleen je SSH-verbinding opnieuw te starten.

![](https://screensaver01.zap-hosting.com/index.php/s/cN3x3aFbtfxdi7M/preview)

Voer je wachtwoord in zoals gewoonlijk. Daarna wordt er om een code gevraagd, vul simpelweg de actuele 2FA-code in.

![](https://screensaver01.zap-hosting.com/index.php/s/y3dgYXezL8sDbJe/preview)

En voilà, je bent ingelogd!

## Conclusie

Gefeliciteerd, je hebt 2FA voor SSH succesvol ingeschakeld en geconfigureerd! Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />