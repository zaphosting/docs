---
id: webspace-plesk-ftp
title: "Webspace: Configurare l'accesso FTP per il webspace"
description: "Scopri come gestire più accessi FTP per progetti web collaborativi e controllare efficacemente i permessi delle cartelle → Scopri di più ora"
sidebar_label: Accesso FTP
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

FTP sta per *file transfer protocol* ed è necessario per caricare file dal PC al webspace.  
Ogni cliente riceve automaticamente l'accesso FTP al webspace ordinato.

Qui ti spieghiamo come configurare ulteriori accessi FTP. Questo è utile se stai lavorando con più persone su un progetto e ognuno deve avere il proprio accesso FTP.

Queste persone potranno usare l’accesso FTP creato solo per le cartelle specificate dal proprietario del webspace.

<InlineVoucher />

## Configurare l'accesso FTP

Nel Pannello di controllo Plesk, apri la funzione "**Accesso FTP**"

:::info
In questa pagina principale vedrai anche l'indirizzo IP, che ti servirà per il test più avanti.
:::

![Bildschirmfoto vom 2022-05-13 05-29-41](https://screensaver01.zap-hosting.com/index.php/s/FK3mBHJRqS3xdbB/preview)

Qui vedrai l’unico accesso FTP creato automaticamente dal sistema al completamento dell’ordine del webspace.  
Per creare un altro account, clicca sul pulsante "**Aggiungi account FTP**".

![Bildschirmfoto vom 2022-05-13 05-29-53](https://screensaver01.zap-hosting.com/index.php/s/L2Qa3p5nYHA3WGf/preview)

Poi inserisci i dati richiesti. Quando hai finito, conferma con "**OK**".

![Bildschirmfoto vom 2022-05-13 05-30-10](https://screensaver01.zap-hosting.com/index.php/s/xZM5rmy3QsPJN52/preview)

:::info
Alla voce "**Directory base**" puoi scegliere la cartella a cui l’accesso FTP deve avere accesso. Se l’accesso FTP deve poter vedere e modificare tutto, non serve cambiare nulla.
:::

## Testare l'accesso FTP

Per testare l’accesso FTP ti serve un programma che lo supporti. Nel nostro esempio usiamo *Filezilla Client*.  
In "**Server**" inserisci l’IP del server mostrato nella pagina principale.  
In "**username**" e "**password**" inserisci i dati creati per l’accesso FTP.  
La porta di default è "**21**".

## Account utente già esistente

Questo messaggio appare quando il nome dell’account FTP è già usato da qualcun altro nel sistema.  
Il webspace ordinato è creato su un sistema condiviso con più clienti, quindi se uno di questi usa già quel nome, nessun altro può usarlo.  
In questo caso devi scegliere un altro nome per l’account.

<InlineVoucher />