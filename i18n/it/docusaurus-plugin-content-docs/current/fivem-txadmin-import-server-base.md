---
id: fivem-txadmin-import-server-base
title: "FiveM: Importa una base server con txAdmin"
description: "Scopri come importare una base server pronta sul tuo server con txAdmin per una configurazione rapida e integrazione senza intoppi → Scopri di più ora"
sidebar_label: Importa base server
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduzione

Hai trovato una base server pronta su Internet e vuoi caricarla sul tuo server? Nessun problema! Con txAdmin puoi importare una base server pronta in modo rapido e semplice – a patto che tu tenga conto di qualche requisito e dettaglio importante. In questa guida ti mostriamo come importare una base server.



<InlineVoucher />

## Preparazione

Per iniziare il processo di setup, è necessario che tu abbia già scaricato una base server pronta da Internet sul tuo computer e che il file sia già estratto. 

Il contenuto di una base server può variare a seconda del tipo e del contenuto del server, quindi i file potrebbero apparire diversi. Tuttavia, la tua base server dovrebbe generalmente contenere i seguenti dati: 

- **Configurazione server - `server.cfg` (obbligatorio):** Il file di configurazione contiene tutti i comandi/impostazioni rilevanti per il tuo server.
- **Cartella risorse - `resource` (obbligatoria):** La cartella risorse contiene tutte le risorse pronte utilizzate nella base server fornita.
- **File SQL - `filenameXY.sql` (opzionale):** Questo file contiene la struttura del database finita, necessaria per l’uso e la comunicazione tra le risorse e il database (se usato). 

I **dati (`server.cfg`, `resources`)** della base server scaricata devono essere caricati sul tuo game server. Il **file SQL** deve essere importato nel database ZAP fornito da noi. 

### File del server
L’upload dei dati della tua base server avviene tramite FTP. Se non sai ancora come funziona, dai un’occhiata a questa guida: [Accesso FTP](gameserver-ftpaccess.md)

Connettiti al tuo game server via FTP e vai nella cartella `fivem`. Crea una cartella per la tua base server, se non esiste già. In questo esempio, il nome **ExampleServer** viene usato per la base server pronta.

![img](https://screensaver01.zap-hosting.com/index.php/s/HzDrADKgK3rqfKm/download)



Una volta creata la cartella, devi caricare i dati della base server. Vai nella cartella appena creata e carica la cartella resource e il file di configurazione server. Il risultato dovrebbe essere così:

![img](https://screensaver01.zap-hosting.com/index.php/s/xyAZyt8W5XcxGaF/preview)

 

### Database

Se la tua base server richiede anche un database, il file SQL fornito deve essere importato nel tuo database ZAP. Se non sai ancora come fare, dai un’occhiata a questa guida: [Importa file SQL](fivem-sql-file-import.md) 

Importa il file SQL nel database come descritto nella guida. Prima però assicurati di aver modificato il contenuto del file SQL e di aver specificato il nome corretto del tuo database ZAP. Per farlo, sostituisci il valore originale nel comando Use '...' con il nome del tuo database ZAP.

:::warning Controlla bene il contenuto del file SQL prima di importarlo
Assicurati che il contenuto del file SQL sia stato modificato e sia completamente corretto prima di importarlo. Altrimenti comparirà questo messaggio di errore: 

`Access denied for user ‘zapXXXXX-X’@’%’ to database ’originalDatabaseName’` 
:::



## Setup txAdmin

La preparazione per il setup del server è ora completata. Il setup, l’installazione e la configurazione del server avvengono ora tramite il processo di setup dell’interfaccia txAdmin. La guida seguente spiega nel dettaglio come accedere a txAdmin e come fare esattamente il setup: [Setup txAdmin](fivem-txadmin-setup.md)



### Benvenuto

Definisci un nome che vuoi usare per il tuo progetto. Questo nome non serve per la lista server ma è solo per l’uso all’interno dell’interfaccia txAdmin e per i messaggi in Chat/Discord. Prosegui con il passo Deployment Type. 

![img](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)

### Deployment Type

Qui devi scegliere come vuoi configurare il tuo server. Hai queste opzioni: **Popular Recipes**, **Existing Server Data**, **Remote URL Template** e **Custom Template**. Per il tuo caso devi scegliere **Existing Server Data**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oMSBwf6jmHMwtYn/preview)

### Selezione dei percorsi

Ora devi specificare il percorso dove si trova la tua base server. La struttura cartelle inizia così e deve essere estesa con il nome della tua base server: `/home/zapXXXXX/gXXXXXXXX/fivem/ExampleServer`.

Puoi semplicemente copiare e incollare la struttura cartelle mostrata nello screenshot e poi aggiungere il nome della cartella della base server che hai creato. Il risultato dovrebbe essere così:

![img](https://screensaver01.zap-hosting.com/index.php/s/eDPeDzSqfMbk7Tg/download)



Clicca su **Next**. Ora dovrebbe essere riconosciuto il file di configurazione `server.cfg`. Conferma e completa il setup regolare con il pulsante **Save & Start**. 



## Configurazione

È molto probabile che il server non parta subito perché non tutte le informazioni necessarie sono corrette. Questo può dipendere da dati errati riguardo l’indirizzo IP e la porta del server, informazioni mancanti sul database per una connessione riuscita, o una license key mancante. Per questo motivo, sono necessari aggiustamenti finali alla configurazione del server. 

### Dettagli server

Di default, l’indirizzo IP e la porta forniti sono o non disponibili o errati. Assicurati che le voci per gli endpoint siano presenti e corrette nel file di configurazione server. La sintassi è la seguente:

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

Sostituisci l’indirizzo IP (0.0.0.0) e la porta (30120) con le informazioni del tuo server. Le trovi nell’amministrazione del game server.

:::warning IP/porta errati
Se le informazioni configurate non sono corrette, vedrai questo messaggio di errore: 

```
Line XX: [ZAP-Hosting] the 'endpoint_add_tcp' interface MUST be 'XXX.XXX.XXX.XXX'
Line XX: [ZAP-Hosting] the 'endpoint_add_udp' interface MUST be 'XXX.XXX.XXX.XXX'
```
:::


### Database

Per permettere al server di connettersi al database, nel file di configurazione `server.cfg` deve esserci una stringa di connessione MySQL con le informazioni del database. Di default può essere così: 

```sql
set mysql_connection_string "mysql://username:password@dataBaseHostname/databaseName?charset=utf8mb4"
```

Se questa stringa esiste già o meno dipende dalla base server che stai usando. Se non esiste o non contiene le informazioni necessarie, devi aggiungerla e modificarla. Puoi vedere le info del database nell’amministrazione del game server sotto Databases. Un esempio potrebbe essere: 

```sql
set mysql_connection_string "mysql://zapXXXXXXX-X:yourDatabasePassword@mysql-mariadb-XX-XXX.zap-hosting.com/zapXXXXXX-X?charset=utf8mb4"
```

:::tip Fatti la vita più facile
Se vuoi evitare questo passaggio, puoi cliccare sul pulsante **[Reconfigure MySQL Connection String](https://screensaver01.zap-hosting.com/index.php/s/zZSmQex6ropFK3X/preview)** nell’amministrazione del game server sotto le impostazioni in fondo alla pagina. 
:::


### Onesync

Se nel file `server.cfg` della tua base server ci sono informazioni su **Onesync**, devono essere rimosse. Onesync si gestisce tramite le impostazioni dell’interfaccia txAdmin. Se vuoi attivarlo, trovi l’opzione sotto **Settings ⟶ FXServer**. 

![img](https://screensaver01.zap-hosting.com/index.php/s/Y4LKM8ZRn4ZSFzp/download)

### License key 

Per far partire il server ti serve una license key personale da CFX. Come crearla lo trovi in questa guida: [Licensekey personale](fivem-licensekey.md)

Aggiungi la license key nel file di configurazione server: 

```
sv_licenseKey "yourLicenseKeyGoesHere"
```



## Conclusione

Congratulazioni! Una volta caricati i file, completato il setup txAdmin e fatti gli ultimi aggiustamenti alla configurazione server, puoi finalmente avviare e giocare sul tuo server con la tua base server.

<InlineVoucher />