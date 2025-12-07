---
id: dedicated-linux-ssh2fa
title: "Dedicated Server: Autenticazione SSH a due fattori"
description: "Scopri come migliorare la sicurezza SSH con Google Authenticator 2FA per un accesso al server più sicuro e proteggi il tuo VPS Linux → Scopri di più ora"
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il servizio di autenticazione a due fattori (2FA) SSH di Google, chiamato **Google Authenticator SSH**, aumenta la sicurezza dell’accesso SSH (Secure Shell) aggiungendo un secondo livello di autenticazione. Anche se SSH fornisce già un metodo sicuro per stabilire una connessione criptata a un server remoto, l’integrazione della 2FA alza il livello di sicurezza richiedendo agli utenti di inserire non solo la password, ma anche un codice di verifica monouso generato da Google Authenticator. In questa guida vedremo come installare e configurare il servizio **Google Authenticator SSH** su un server Linux.

## Installazione

Per prima cosa devi installare Google Authenticator sul tuo VPS Linux. Esegui questo comando:

```
sudo apt install libpam-google-authenticator
```

Ti verrà chiesto di digitare "Y" per installare il pacchetto, digita e premi Invio, così Google Authenticator verrà installato!

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

Avvia Google Authenticator digitando `google-authenticator`. Assicurati che la finestra sia abbastanza grande per visualizzare il QR Code, altrimenti premi "CTRL+C" e rilancialo.

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

Ti verrà chiesto di confermare l’esecuzione, digita "Y" per accettare. Ora vedrai un QR Code. Apri l’app Authenticator sul tuo smartphone e scansiona il QR Code. Per questo esempio usiamo Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

Assicurati di copiare i codici di backup, ognuno può essere usato una volta nel caso perdessi l’accesso all’autenticatore.

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

L’app ti mostrerà già i codici necessari per il login. In questo caso appare così:

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

Ora ti verranno poste queste domande:

1. Vuoi salvare la configurazione di Google Authenticator?
2. Vuoi permettere un solo login ogni 30 secondi?
3. Vuoi aumentare il tempo in cui un codice è valido?
4. Vuoi limitare a tre login ogni 30 secondi? (Protezione contro Brute Force)

Per motivi di sicurezza ti consigliamo di rispondere Yes a tutte.

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## Configurazione

Ora dobbiamo configurare Google Authenticator per farlo funzionare. Servono due modifiche.

### /etc/ssh/sshd_config

Attiva i moduli necessari nel file `/etc/ssh/sshd_config`. Apri il file con:

```
sudo nano /etc/ssh/sshd_config
```

Sei ora in un editor di testo. Usa le frecce per muoverti, cancella o modifica il testo liberamente. Per salvare premi 'CTRL + X', poi 'Y' e infine 'Invio'.

Assicurati che le righe `UsePAM` e `ChallengeResponseAuthentication` siano impostate su `yes`, così:

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

Salva il file con 'CTRL + X', poi 'Y' e 'Invio'. Riavvia SSH con:

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

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

Salva con 'CTRL + X', poi 'Y' e 'Invio'.

## Test accesso

È il momento di fare il primo login con 2FA. Dopo aver seguito i passaggi sopra, ti basta riavviare la connessione SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

Inserisci la password come al solito. Ti verrà chiesto un codice, inserisci semplicemente il codice 2FA attuale.

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

Ecco fatto, sei dentro!

## Conclusione

Congratulazioni, hai configurato con successo la 2FA per il tuo accesso SSH. Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂