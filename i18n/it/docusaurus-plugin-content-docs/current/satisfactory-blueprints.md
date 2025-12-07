---
id: satisfactory-blueprints
title: "Satisfactory: Gestisci i Blueprint (Importa/Esporta)"
description: "Scopri come creare, condividere e gestire blueprint personalizzati per costruzioni e layout efficienti in Satisfactory → Scopri di più ora"
sidebar_label:  Gestisci Blueprint
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Satisfactory offre un sistema di blueprint personalizzati che permette agli utenti di creare e condividere progetti di costruzione con altri membri della community. Questi blueprint spaziano da layout di fabbriche super efficienti a lounge elaborate e complessi sistemi ferroviari.

Una vasta selezione di blueprint è disponibile tramite il sito Satisfactory Calculator. I blueprint possono essere importati ed esportati con facilità.

<InlineVoucher />



## Gestisci Blueprint

La gestione dei blueprint su un server Satisfactory avviene interamente tramite FTP. Se non sai ancora come connetterti al tuo server via FTP, dai un’occhiata alla nostra guida dedicata su [Accesso FTP](gameserver-ftpaccess.md) per partire col piede giusto.

### Importa Blueprint
Per iniziare, devi procurarti i file blueprint che vuoi caricare. Questi sono composti da un file `.sbp` e, opzionalmente, un file di configurazione `.sbpcfg` associato. Questi file possono provenire da fonti affidabili della community o essere creati da altre istanze di gioco.

Prima di procedere con l’upload, ti consigliamo di spegnere completamente il server tramite il pannello di gestione. Così eviti conflitti di file o problemi di memoria durante il caricamento.

Poi, connettiti al server usando un client FTP. Una volta loggato, naviga nella cartella blueprint:

 ```
 /gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
 ```

Dentro questa directory deve esserci una sottocartella esattamente con il nome del mondo (o sessione) in uso. Questo nome corrisponde al file `.sav` salvato sul server. Se la cartella non esiste ancora, creala manualmente usando esattamente il nome del file di salvataggio.

Quando la sottocartella giusta è pronta, carica i file blueprint dentro quella cartella. È fondamentale includere sia il file `.sbp` sia, se presente, il file `.sbpcfg`. Dopo aver completato l’upload, riavvia il server. Quando sarà di nuovo online, i blueprint caricati saranno disponibili in gioco tramite l’interfaccia Blueprint Designer, pronti per essere usati normalmente.

### Esporta Blueprint

Esportare blueprint da un server Satisfactory significa scaricare i file blueprint dal server e salvarli localmente sul tuo PC. Inizia spegnendo il server, così i file blueprint saranno in uno stato coerente e accessibile. Apri il client FTP e connettiti al server. Naviga nella directory:

````
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
````

Individua la sottocartella che corrisponde al mondo/sessione da cui vuoi esportare i blueprint. Dentro questa cartella troverai i file `.sbp` e, opzionalmente, i file `.sbpcfg` relativi a ogni blueprint salvato.

Scarica i file blueprint desiderati direttamente sul tuo computer usando il client FTP. Una volta completato il trasferimento, puoi archiviarli, aprirli localmente o importarli in un’altra installazione o server. Se vuoi riutilizzare i blueprint su un server diverso, segui la stessa procedura di importazione descritta sopra.



## Conclusione

Gestire i blueprint su un server Satisfactory è un processo semplice se segui i passaggi documentati. Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per darti una mano! 🙂




<InlineVoucher />