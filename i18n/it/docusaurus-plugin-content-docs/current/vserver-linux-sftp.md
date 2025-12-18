---
id: vserver-linux-sftp
title: "VPS: Connessione tramite SFTP"
description: "Scopri come trasferire file in modo sicuro usando SFTP e proteggi i tuoi dati con connessioni criptate → Scopri di più ora"
sidebar_label: Connessione SFTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';





## Introduzione

SFTP è un protocollo sicuro per trasferire file tra computer tramite Internet o una rete. Sta per **“SSH File Transfer Protocol”** o **“Secure File Transfer Protocol”** ed è basato sul **protocollo SSH (Secure Shell)**.

A differenza di FTP (File Transfer Protocol), dove i dati vengono trasferiti senza crittografia, SFTP garantisce che tutti i dati siano criptati e quindi protetti da accessi non autorizzati.

<InlineVoucher />



## Stabilire la connessione

Per la connessione tramite **SFTP**, si usano i dati di accesso dell’utente root. Questo esempio mostra come configurare la connessione con l’app WinSCP. Crea una **Nuova sessione** in WinSCP.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDsMr5mnJpC7FtM/download)

Scegli `SFTP` come **protocollo di trasferimento** nella finestra di configurazione della nuova sessione. Poi inserisci l’**indirizzo IP** del tuo server e la porta **22**. Per username e password, usa i dati di accesso del tuo utente `root`.

![img](https://screensaver01.zap-hosting.com/index.php/s/Wq59YHDnirKYkDr/download)

:::warning Uso delle chiavi SSH
Se usi una chiave SSH invece della semplice password, clicca su **Avanzate** e vai su **SSH -> Autenticazione**. Qui puoi caricare la tua chiave SSH.
:::

La prima volta che ti connetti via SFTP, comparirà questo messaggio perché il tuo computer non conosce ancora il server. Conferma con **“Sì”** se ti fidi del server. Così salverai la sua chiave di sicurezza e non ti verrà più chiesto nelle connessioni future. È una procedura normale quando ti connetti a un server nuovo per la prima volta.

![img](https://screensaver01.zap-hosting.com/index.php/s/DxErsePZJnkxyCp/download)





## Conclusione

Se hai seguito tutti i passaggi, hai stabilito con successo una connessione SFTP al tuo server. Per altre domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />