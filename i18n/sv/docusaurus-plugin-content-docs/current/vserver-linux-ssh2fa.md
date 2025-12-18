---
id: vserver-linux-ssh2fa
title: "VPS: SSH tvåfaktorsautentisering"
description: "Upptäck hur du förbättrar SSH-säkerheten med Google Authenticator 2FA för säkrare serveråtkomst och skydda din Linux-miljö → Läs mer nu"
sidebar_label: 2FA (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Googles SSH tvåfaktorsautentisering (2FA), kallad **Google Authenticator SSH**, höjer säkerheten för SSH (Secure Shell) genom att lägga till ett extra lager av autentisering. Även om SSH redan erbjuder en säker metod för att skapa en krypterad anslutning till en fjärrserver, ökar 2FA säkerheten genom att kräva att användaren inte bara anger sitt lösenord utan även en engångskod genererad av Google Authenticator. I den här guiden går vi igenom hur du installerar och konfigurerar **Google Authenticator SSH** på en Linux-server.

<InlineVoucher />

## Installation

Först behöver du installera Google Authenticator på din Linux VPS. Kör följande kommando:

```
sudo apt install libpam-google-authenticator
```

Du kommer då bli ombedd att skriva "Y" för att installera paketet, skriv detta, tryck Enter så installeras Google Authenticator!

![](https://screensaver01.zap-hosting.com/index.php/s/AnKdPXEzKdB5xWS/preview)

Starta Google Authenticator genom att skriva 'google-authenticator'. Se till att ditt terminalfönster är tillräckligt stort för QR-koden, annars tryck "CTRL+C" och kör kommandot igen.

![](https://screensaver01.zap-hosting.com/index.php/s/8w9aDz5ZbSmNPZ9/preview)

Du kommer nu bli tillfrågad igen om du vill köra det, skriv "Y" för att acceptera. Du får nu upp en QR-kod. Öppna din Authenticator-app på mobilen och skanna QR-koden. I det här exemplet använder vi Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/J5CL6mjzPRMSiap/preview)

Se till att kopiera backupkoderna, de kan användas en gång var om du skulle tappa bort din autentiserare.

![](https://screensaver01.zap-hosting.com/index.php/s/itdjPyGrFb7Wq39/preview)

Appen visar nu redan koderna du behöver för att logga in senare. Så här ser det ut:

![](https://screensaver01.zap-hosting.com/index.php/s/TW24xBe26TbgCqE/preview)

Följande frågor kommer nu:

1. Vill du spara Google Authenticator-konfigurationen?
2. Vill du bara tillåta en inloggning var 30:e sekund?
3. Ska tiden då en kod är giltig förlängas?
4. Ska endast tre inloggningar vara möjliga var 30:e sekund? (Skydd mot Brute Force)

Av säkerhetsskäl rekommenderar vi att svara Ja på alla.

![](https://screensaver01.zap-hosting.com/index.php/s/bdYRncwk7ssQyYJ/preview)

## Konfiguration

Nu måste vi justera Google Authenticator så att det också används. Det kräver två ändringar.

### /etc/ssh/sshd_config

Aktivera de nödvändiga modulerna i `/etc/ssh/sshd_config`. Öppna filen genom att skriva:
```
sudo nano /etc/ssh/sshd_config
```

Du är nu i en texteditor. Navigera med piltangenterna, ta bort text fritt och spara med 'CTRL + X', sedan 'Y' och till sist 'Enter'.

Se till att raderna 'UsePAM' och 'ChallengeResponseAuthentication' är satta till 'yes'. Så här:

![](https://screensaver01.zap-hosting.com/index.php/s/n8MzX8724T2GFAF/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zLk98HrkF4jk4Jf/preview)

Spara filen med 'CTRL + X', 'Y' och 'Enter'. Starta om SSH med kommandot:
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

Nu lägger vi till Google Authenticator i inloggningen i `/etc/pam.d/sshd`. Öppna filen med:
```
sudo nano /etc/pam.d/sshd
```
Scrolla längst ner och lägg till raden:
```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/xwodXzPifANsQAM/preview)

Spara filen med 'CTRL + X', 'Y' och 'Enter'.

## Testa åtkomst

Nu är det dags att logga in första gången med 2FA. Efter att ha följt stegen ovan, starta om din SSH-anslutning.

![](https://screensaver01.zap-hosting.com/index.php/s/cN3x3aFbtfxdi7M/preview)

Skriv in ditt lösenord som vanligt. Du kommer bli ombedd att ange en kod, skriv in den aktuella 2FA-koden från din app.

![](https://screensaver01.zap-hosting.com/index.php/s/y3dgYXezL8sDbJe/preview)

Nu är du inloggad!

## Slutsats

Grattis, du har nu aktiverat och konfigurerat 2FA för SSH! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns här för att hjälpa dig varje dag!

<InlineVoucher />