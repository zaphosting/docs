---
id: dedicated-linux-ssh2fa
title: "Dedikerad Server: SSH tvåfaktorsautentisering"
description: "Upptäck hur du förbättrar SSH-säkerheten med Google Authenticator 2FA för säkrare serveråtkomst och skydda din Linux VPS → Läs mer nu"
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Googles SSH tvåfaktorsautentisering (2FA), känd som **Google Authenticator SSH**, höjer säkerheten för SSH (Secure Shell)-åtkomst genom att lägga till ett extra lager av autentisering. Även om SSH redan erbjuder en säker metod för att skapa en krypterad anslutning till en fjärrserver, ökar 2FA säkerheten genom att kräva att användare inte bara anger sitt lösenord, utan även en engångskod genererad av Google Authenticator. I den här guiden går vi igenom hur du installerar och konfigurerar **Google Authenticator SSH** på en Linux-server.

## Installation

Först behöver du installera Google Authenticator på din Linux VPS. Kör följande kommando:

```
sudo apt install libpam-google-authenticator
```

Du kommer att bli ombedd att skriva "Y" för att installera paketet, skriv det, tryck Enter så installeras Google Authenticator!

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

Starta Google Authenticator genom att skriva 'google-authenticator'. Se till att ditt fönster är tillräckligt stort för QR-koden, annars tryck "CTRL+C" och kör kommandot igen.

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

Du kommer nu att bli tillfrågad igen om du vill köra det, skriv "Y" för att acceptera. Du får nu upp en QR-kod. Öppna din Authenticator-app på mobilen och skanna QR-koden. I det här exemplet använder vi Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

Se till att kopiera backupkoderna, de kan användas en gång var om du skulle tappa bort din autentiserare.

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

Appen visar nu koderna du behöver för att logga in senare. Så här ser det ut:

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

Följande frågor kommer nu:

1. Vill du spara Google Authenticator-konfigurationen?
2. Vill du bara ha en inloggning var 30:e sekund?
3. Ska tiden då en kod är giltig förlängas?
4. Ska bara tre inloggningar vara möjliga var 30:e sekund? (Skydd mot Brute Force)

Av säkerhetsskäl rekommenderar vi att svara Ja på alla.

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## Konfiguration

Nu måste vi justera Google Authenticator så att det också används. Det kräver två ändringar.

### /etc/ssh/sshd_config

Aktivera de nödvändiga modulerna i `/etc/ssh/sshd_config`. Öppna filen genom att skriva:
```
sudo nano /etc/ssh/sshd_config
```

Du är nu i en texteditor. Navigera med piltangenterna, ta bort text fritt och skriv in. Spara sedan med 'CTRL + X', tryck 'Y' och sedan 'Enter'.

Se till att raderna 'UsePAM' och 'ChallengeResponseAuthentication' är satta till 'yes', så här:

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

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

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

Spara filen med 'CTRL + X', 'Y' och 'Enter'.

## Testa åtkomst

Nu är det dags att logga in första gången med 2FA. Efter att ha följt stegen ovan, starta om din SSH-anslutning.

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

Skriv in ditt lösenord som vanligt. Du kommer sedan att bli ombedd att ange en kod, skriv in den aktuella 2FA-koden från din app.

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

Nu är du inloggad!

## Slutsats

Grattis, du har nu framgångsrikt konfigurerat 2FA för din SSH-åtkomst. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂