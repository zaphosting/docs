---
id: vserver-linux-ftp
title: "VPS: Servizio FTP non disponibile (Interfaccia GS/TS3)"
description: "Scopri come risolvere e ripristinare l'accesso FTP sul tuo VPS quando i server di gioco o Teamspeak non sono raggiungibili → Scopri di più ora"
sidebar_label: Servizio FTP non disponibile
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I servizi Gameserver e Teamspeak 3 creati tramite l'interfaccia GS/TS3 sono servizi completamente gestiti. L'accesso FTP è fornito tramite l'interfaccia e l'infrastruttura sottostante. Se l'accesso FTP non è possibile, la causa è solitamente legata allo stato del servizio, alla configurazione interna o a problemi lato infrastruttura, piuttosto che alle impostazioni locali del client FTP.



:::warning Servizio FTP fornito dall'interfaccia GS/TS3
Questa guida si applica solo al servizio FTP che viene installato e gestito automaticamente quando si utilizza la funzione dell'interfaccia GS/TS3. Se l'interfaccia GS/TS3 non è installata, di default non viene configurato alcun server FTP sul sistema. In questo caso, l'accesso FTP non è disponibile a meno che non venga installato manualmente un servizio FTP.
:::

<InlineVoucher />



## Controlla lo stato di ProFTPD via SSH

Connettiti al server tramite SSH o console e verifica lo stato attuale del servizio FTP con il comando:

```
service proftpd status
```

L'output mostra se il servizio ProFTPD è attualmente attivo. Se il servizio risulta attivo o in esecuzione, il servizio FTP è disponibile e dovrebbe accettare connessioni in ingresso. In questo caso, il problema di solito non riguarda il demone FTP, ma potrebbe essere legato ai dati di accesso, alle regole del firewall o alla configurazione del client.

Se lo stato è inattivo, terminato o fermo, il servizio FTP non è in esecuzione. Mentre il servizio è fermo, non è possibile stabilire connessioni FTP.

## Riavvia il servizio FTP

Se il servizio ProFTPD non è in esecuzione, può essere avviato manualmente con il comando:

```
service proftpd restart
```

Dopo aver avviato o riavviato il servizio, verifica sempre di nuovo lo stato per confermare che ProFTPD stia funzionando correttamente. Se il servizio risulta attivo dopo il riavvio, l'accesso FTP dovrebbe essere di nuovo disponibile.



## Cause comuni di problemi FTP

I problemi di accesso FTP sono spesso causati dal servizio FTP non in esecuzione o fermo dopo un riavvio di sistema o un aggiornamento. Errori di configurazione possono impedire l'avvio corretto di ProFTPD. In alcuni casi, un altro servizio potrebbe già utilizzare la porta 21, impedendo al servizio FTP di legarsi alla porta richiesta. Problemi temporanei a livello di sistema o servizio possono anche causare l'arresto improvviso del servizio FTP.

Se ProFTPD non si avvia o si ferma subito dopo l'avvio, è necessaria un'indagine più approfondita. In questi casi, è consigliato controllare i log di sistema o contattare il supporto.



## Conclusione



L'accesso FTP per i servizi gameserver GS/TS3 è gestito esclusivamente tramite l'interfaccia GS/TS3. Se i controlli standard non risolvono il problema, è necessario aprire un ticket di supporto. Fornire informazioni complete e precise aiuta a risolvere più velocemente. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂



<InlineVoucher />