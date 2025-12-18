---
id: vserver-linux-ssh2fa
title: "VPS: Autenticazione SSH a due fattori"
description: "Scopri come potenziare la sicurezza SSH con Google Authenticator 2FA per un accesso al server più sicuro e proteggi il tuo ambiente Linux → Scopri di più ora"
sidebar_label: 2FA (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il servizio di autenticazione SSH a due fattori (2FA) di Google, chiamato **Google Authenticator SSH**, migliora la sicurezza dell’accesso SSH (Secure Shell) aggiungendo un secondo livello di autenticazione. Anche se SSH fornisce già un metodo sicuro per stabilire una connessione criptata a un server remoto, l’integrazione della 2FA aumenta il livello di sicurezza richiedendo agli utenti di inserire non solo la password, ma anche un codice di verifica monouso generato da Google Authenticator. In questa guida vedremo come installare e configurare il servizio **Google Authenticator SSH** su un server Linux.

<InlineVoucher />

## Installazione

Per prima cosa devi installare Google Authenticator sul tuo VPS Linux. Esegui questo comando:

```
sudo apt install libpam-google-authenticator
```

Ti verrà chiesto di digitare "Y" per installare il pacchetto, digita questo, premi Invio e Google Authenticator verrà installato!

![](https://screensaver01.zap-hosting.com/index.php/s/AnKdPXEzKdB5xWS/preview)

Avvia Google Authenticator digitando 'google-authenticator'. Assicurati che la finestra sia abbastanza grande per visualizzare il QR Code, altrimenti premi "CTRL+C" e rilancialo.

![](https://screensaver01.zap-hosting.com/index.php/s/8w9aDz5ZbSmNPZ9/preview)

Ti verrà chiesto di confermare l’esecuzione, digita "Y" per accettare. Ora vedrai un QR Code. Apri l’app Authenticator sul tuo smartphone e scansiona il QR Code. Per questo esempio usiamo Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/J5CL6mjzPRMSiap/preview)

Assicurati di copiare i codici di backup, ognuno può essere usato una volta nel caso perdessi l’autenticatore.

![](https://screensaver01.zap-hosting.com/index.php/s/itdjPyGrFb7Wq39/preview)

L’app ti mostrerà già i codici necessari per il login. In questo caso appare così:

![](https://screensaver01.zap-hosting.com/index.php/s/TW24xBe26TbgCqE/preview)

Ora ti verranno poste queste domande:

1. Vuoi salvare la configurazione di Google Authenticator?
2. Vuoi permettere un solo login ogni 30 secondi?
3. Vuoi aumentare il tempo in cui un codice è valido?
4. Vuoi limitare a tre login ogni 30 secondi? (Protezione contro Brute Force)

Per motivi di sicurezza consigliamo di rispondere Yes a tutte.

![](https://screensaver01.zap-hosting.com/index.php/s/bdYRncwk7ssQyYJ/preview)

## Configurazione

Ora dobbiamo configurare Google Authenticator per farlo funzionare. Servono due modifiche.

### /etc/ssh/sshd_config

Attiva i moduli necessari nel file `/etc/ssh/sshd_config`. Apri il file con:

```
sudo nano /etc/ssh/sshd_config
```

Sei ora in un editor di testo. Puoi muoverti con le frecce, cancellare testo liberamente e modificare. Per salvare premi 'CTRL + X', poi 'Y' e infine 'Invio'.

Assicurati che le due righe 'UsePAM' e 'ChallengeResponseAuthentication' siano impostate su 'yes', così:

![](https://screensaver01.zap-hosting.com/index.php/s/n8MzX8724T2GFAF/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zLk98HrkF4jk4Jf/preview)

Salva il file con 'CTRL + X', poi 'Y' e infine 'Invio'. Riavvia SSH con:

```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

Ora aggiungiamo Google Authenticator al login modificando `/etc/pam.d/sshd`. Apri il file con:

```
sudo nano /etc/pam.d/sshd
```

Scorri fino in fondo e aggiungi questa riga:

```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/xwodXzPifANsQAM/preview)

Salva con 'CTRL + X', poi 'Y' e infine 'Invio'.

## Test accesso

È il momento di fare il primo login con 2FA. Dopo aver seguito i passaggi sopra, ti basta riavviare la connessione SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/cN3x3aFbtfxdi7M/preview)

Inserisci la tua password come al solito. Ti verrà chiesto un codice, inserisci semplicemente il codice 2FA attuale.

![](https://screensaver01.zap-hosting.com/index.php/s/y3dgYXezL8sDbJe/preview)

Ora sei dentro!

## Conclusione

Congratulazioni, hai attivato e configurato con successo la 2FA per SSH! Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />