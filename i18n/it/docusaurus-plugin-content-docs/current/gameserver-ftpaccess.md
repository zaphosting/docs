---
id: gameserver-ftpaccess
title: "Gameserver: Accesso via FTP per gestire i file del server"
description: "Scopri come accedere e gestire in modo sicuro i file del tuo server usando FTP per trasferimenti senza intoppi e controllo totale → Scopri di più ora"
sidebar_label: Accesso FTP
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

FTP (File Transfer Protocol) è un protocollo di rete progettato per trasferire file su una rete TCP/IP. È stato sviluppato per facilitare lo scambio di file tra sistemi. Con il protocollo FTP, puoi accedere e gestire i file del tuo server, sia che tu voglia caricare, scaricare o modificare attivamente i file.

<InlineVoucher />

## Preparazione

Per gestire i tuoi file tramite FTP, ti serve un client FTP adatto. Ce ne sono parecchi disponibili, ma due tra i più famosi e affidabili sono **FileZilla** e **WinSCP**.

| Client FTP | Download                                                     |
| ---------- | ------------------------------------------------------------ |
| FileZilla  | [Sito Ufficiale](https://filezilla-project.org/download.php?platform=win64) |
| WinSCP     | [Sito Ufficiale](https://winscp.net/eng/downloads.php)       |



## Ottenere i dati FTP

Per accedere al tuo gameserver via FTP, ti servono le credenziali di login corrispondenti. Le trovi nella sezione **FTP Browser** del pannello di controllo del tuo server.

Inserisci semplicemente l’**indirizzo IP (server FTP)**, **username** e **password** per connetterti. Queste credenziali sono elencate nella pagina **FTP Browser**. La porta è sempre la **21** e di solito viene impostata automaticamente.

![img](https://screensaver01.zap-hosting.com/index.php/s/6FTFDwyBQZ792Fd/download)



## FileZilla

### Connessione

Puoi connetterti tramite la funzione Quickconnect oppure andando su **File -> Gestore siti**. Inserisci lì le **credenziali FTP** del tuo server e clicca su **Connetti**.

![](https://screensaver01.zap-hosting.com/index.php/s/wxSSFoW3GTXJdLK/preview)

:::info
Assicurati di fermare il server e aggiornare i permessi FTP prima di accedere ai file del server. Altrimenti potresti incappare in errori tipo "Permesso Negato" o "Accesso Negato".
:::

### Gestione file

Come detto, puoi usare il client FTP per caricare, scaricare e modificare i file sul server. Il client è diviso in due parti: a sinistra c’è il tuo client (computer), a destra il server. Puoi navigare tra le directory sia locali che del server.

La gestione avviene cliccando col tasto destro sul file o cartella desiderata. A seconda di cosa vuoi fare, puoi caricare, scaricare, modificare, rinominare o spostare file o cartelle.

![](https://screensaver01.zap-hosting.com/index.php/s/qizoBD5JnHBRkJc/preview)

:::info
Se hai più gameserver, assicurati prima di navigare nella directory corretta del server a cui vuoi accedere.
:::



### Problemi comuni e soluzioni

#### Errore "530 Login incorrect"
Se compare questo errore durante la connessione, significa che le credenziali inserite sono sbagliate. Controlla che tutti i campi siano compilati correttamente.

#### Errore "Transfer connection interrupted"
Se questo errore si presenta durante la connessione o il trasferimento, prova a cambiare la modalità di trasferimento da *Passiva* ad *Attiva*. Qui sotto ti spieghiamo come fare su FileZilla.




## WinSCP

### Connessione
Puoi connetterti tramite Quickconnect oppure in alto cliccando su **Nuova sessione**. Inserisci le credenziali FTP del tuo server e clicca su **Connetti**.

![](https://screensaver01.zap-hosting.com/index.php/s/KNnkJsnETTFqZpD/preview)


:::info
Assicurati di fermare il server e aggiornare i permessi FTP prima di accedere ai file del server. Altrimenti potresti incappare in errori tipo "Permesso Negato" o "Accesso Negato".
:::


### Gestione file

Come detto, puoi usare il client FTP per caricare, scaricare e modificare i file sul server. Il client è diviso in due parti: a sinistra c’è il tuo client (computer), a destra il server. Puoi navigare tra le directory sia locali che del server.

La gestione avviene cliccando col tasto destro sul file o cartella desiderata. A seconda di cosa vuoi fare, puoi caricare, scaricare, modificare, rinominare o spostare file o cartelle.

![](https://screensaver01.zap-hosting.com/index.php/s/dAYiFwWQAipgTqW/preview)


### Problemi comuni e soluzioni

#### Errore "530 Login incorrect"
Se compare questo errore durante la connessione, significa che le credenziali inserite sono sbagliate. Controlla che tutti i campi siano compilati correttamente.

<InlineVoucher />