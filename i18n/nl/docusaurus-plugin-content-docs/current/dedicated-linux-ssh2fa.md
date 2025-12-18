---
id: dedicated-linux-ssh2fa
title: "Dedicated Server: SSH twee-factor authenticatie"
description: "Ontdek hoe je SSH-beveiliging verbetert met Google Authenticator 2FA voor veiligere servertoegang en bescherm je Linux VPS → Leer nu meer"
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Google's SSH twee-factor authenticatie (2FA) service, bekend als **Google Authenticator SSH**, verhoogt de beveiliging van SSH (Secure Shell) toegang door een extra authenticatielaag toe te voegen. SSH biedt al een veilige manier om een versleutelde verbinding met een remote server op te zetten, maar met 2FA wordt het nog veiliger doordat gebruikers niet alleen hun wachtwoord moeten invoeren, maar ook een eenmalige verificatiecode die door Google Authenticator wordt gegenereerd. In deze gids nemen we je mee door het proces van het installeren en configureren van de **Google Authenticator SSH** service op een Linux server.

## Installatie

Eerst moet je Google Authenticator installeren op je Linux VPS. Voer het volgende commando uit:

```
sudo apt install libpam-google-authenticator
```

Je wordt gevraagd om "Y" te typen om het pakket te installeren, doe dit, druk op Enter en Google Authenticator wordt geïnstalleerd!

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

Start Google Authenticator door 'google-authenticator' te typen. Zorg dat je venstergrootte groot genoeg is voor de QR-code, anders druk je op "CTRL+C" en voer je het opnieuw in.

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

Je wordt nu gevraagd of je het wilt uitvoeren, typ "Y" om te accepteren. Je krijgt nu een QR-code te zien. Open je Authenticator-app op je smartphone en scan de QR-code. Voor dit voorbeeld gebruiken we Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

Zorg dat je de backupcodes kopieert, deze kun je elk één keer gebruiken als je je authenticator kwijtraakt.

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

De app toont nu al de codes die je later nodig hebt om in te loggen. Zo ziet dat er bijvoorbeeld uit:

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

Vervolgens krijg je de volgende vragen:

1. Wil je de Google Authenticator-configuratie opslaan?
2. Wil je maar één login per 30 seconden toestaan?
3. Moet de tijd waarin een code geldig is verlengd worden?
4. Moeten er maximaal drie logins per 30 seconden mogelijk zijn? (Bescherming tegen Brute Force)

Voor de beste beveiliging raden we aan om alles met Ja te bevestigen.

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## Configuratie

Nu moeten we Google Authenticator zo instellen dat het ook daadwerkelijk gebruikt wordt. Hiervoor zijn twee aanpassingen nodig.

### /etc/ssh/sshd_config

Activeer de benodigde modules in `/etc/ssh/sshd_config`. Open het bestand door te typen:

```
sudo nano /etc/ssh/sshd_config
```

Je zit nu in een teksteditor. Je kunt navigeren met de pijltjestoetsen, tekst verwijderen en invoeren. Druk op 'CTRL + X', dan 'Y' en vervolgens 'Enter' om op te slaan.

Zorg dat de regels 'UsePAM' en 'ChallengeResponseAuthentication' op 'yes' staan. Zo:

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

Sla het bestand op met 'CTRL + X', dan 'Y' en 'Enter'. Herstart daarna SSH met:

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

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

Sla het bestand op met 'CTRL + X', dan 'Y' en 'Enter'.

## Toegang testen

Tijd om voor het eerst in te loggen met 2FA. Na het volgen van bovenstaande stappen hoef je alleen je SSH-verbinding opnieuw te starten.

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

Voer je wachtwoord in zoals gewoonlijk. Daarna wordt er om een code gevraagd, vul simpelweg de actuele 2FA-code in.

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

En voilà, je bent ingelogd!

## Conclusie

Gefeliciteerd, je hebt 2FA succesvol ingesteld voor je SSH-toegang. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂