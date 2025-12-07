---
id: dedicated-reset
title: "Server Dedicato: Reset del Server (Stato di fabbrica)"
description: "Scopri come resettare il tuo server in modo efficace per ripristinare le prestazioni o ricominciare da zero con una rimozione sicura dei dati → Scopri di più ora"
sidebar_label: Reset server
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il tuo server non funziona più come dovrebbe o vuoi ricominciare da capo ma non sai come fare? Nessun problema, puoi resettare il tuo server reinstallandolo. Questa guida ti spiegherà come farlo e cosa devi considerare.





## Preparativi

Prima di resettare i dati sul tuo server, devi sapere che tutti i dati esistenti andranno persi. Se hai dati importanti, questo è il momento giusto per fare un backup prima di iniziare la reinstallazione. Dopo di che, devi decidere esattamente come vuoi resettare il sistema.



## Resettare i dati

Ci sono due modi diversi per resettare i dati, a seconda delle tue esigenze e della situazione. Di seguito spieghiamo entrambe le opzioni nel dettaglio:

- Resettare i dati usando la configurazione RAID (Metodo rapido)
- Resettare i dati usando la Wipe ISO (Metodo completo)

Resettando i dati tramite la configurazione RAID, i dati esistenti vengono cancellati logicamente e sostituiti con nuovi dati, rendendo questa soluzione veloce ed efficiente per la reinstallazione del sistema.

In confronto, il reset con Wipe ISO prevede più cicli di cancellazione, assicurando che tutti i dati vengano rimossi in modo permanente e irreversibile. Questo metodo è ideale per una pulizia completa del sistema quando è necessaria una cancellazione approfondita dei dati.



### Metodo rapido

Come per la configurazione RAID, durante il processo di avvio premi il tasto `F8` per aprire la configurazione RAID. Apri la voce di menu **Delete Logical Drive** nella configurazione RAID. Qui vedrai la configurazione RAID attuale e i dischi rigidi. Premi il tasto `F8` per cancellare il RAID esistente. Conferma con il tasto `F3`.

Poi torna alla configurazione RAID e apri la voce di menu **Create Logical Drive**. Ora seleziona i dischi rigidi e la configurazione RAID desiderata (Raid 0/1) e crea il RAID confermando con il tasto `Enter`.

Se non sei pratico di come configurare il RAID sul tuo sistema, ti consigliamo di dare un’occhiata anche alla nostra guida generale [Configura RAID](dedicated-raid.md).



### Metodo completo

Per eseguire il reset vero e proprio dei dati, devi montare ed eseguire la Wipe ISO richiesta. I file ISO possono essere montati tramite iLO o tramite la console remota. Se non sai ancora come fare, dai un’occhiata alla guida [ISO personalizzate](http://localhost:3000/guides/docs/dedicated-iso).

Monta il seguente file Wipe ISO sul tuo server e riavvialo:


```
http://185.223.30.65/dedicatedisos/wipedisk.iso
```

Una volta riavviato, la Wipe ISO dovrebbe essere rilevata e caricata automaticamente. Collegati al tuo server dedicato usando una console remota (HTML5, .NET, Java Web Start) a tua scelta.

Vedrai come il server esegue automaticamente il processo e a che punto è il progresso della formattazione. Il server sovrascriverà tutti i volumi esistenti, cancellando efficacemente tutti i dati. A seconda della dimensione dell’SSD, questo processo può durare da 45 minuti a 2 ore.

![](https://screensaver01.zap-hosting.com/index.php/s/4nfaexaqiK78t6e/preview)



:::danger
Questo processo è irreversibile e definitivo. Non esistono backup aggiuntivi che possano essere ripristinati in caso di necessità.
Ti consigliamo vivamente di non eseguire questa procedura a meno che tu non sia assolutamente sicuro di voler cancellare tutti i tuoi dati.
:::



## Conclusione

Congratulazioni, hai cancellato con successo i dati sul tuo server dedicato. Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂