---
id: dedicated-raid
title: "Server Dedicato: Configurazione RAID"
description: "Scopri come le configurazioni RAID migliorano le prestazioni e la ridondanza dei dati sui server dedicati con SSD → Scopri di più ora"
sidebar_label: Configura RAID
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RAID (Redundant Array of Independent Disks) è una tecnologia che combina più hard disk in un unico drive logico per ottenere ridondanza dei dati e/o prestazioni maggiori. Esistono diversi livelli RAID che offrono varie combinazioni di distribuzione dati e tolleranza ai guasti.

## Tipi di RAID disponibili
I nostri server dedicati offrono attualmente 2 slot SSD, quindi ci sono due configurazioni RAID possibili. La prima è RAID0, usata per unire i volumi in un unico grande volume, e RAID1, usata per fare il mirror dei volumi e mantenere i dati ridondanti. Approfondiremo entrambe nelle sezioni seguenti.

:::info
RAID0 offre velocità di lettura e scrittura leggermente più veloci, grazie alla presenza di due drive.
:::

### RAID0
In questa configurazione RAID, tutti i volumi esistenti vengono combinati in un unico grande volume, ad esempio da 2 SSD da 1 TB ciascuno. Si crea così una partizione da 2TB che può essere utilizzata completamente.

Non c’è ridondanza dei dati, quindi in caso di malfunzionamento tecnico la perdita dei dati è spesso inevitabile perché i dati sono scritti su settori diversi.

Se memorizzi dati sensibili sul tuo sistema, RAID0 non dovrebbe essere usato o almeno dovresti fare backup regolari del sistema.

:::info
Se il tuo server dedicato ha solo 1 SSD, questo è automaticamente un RAID0.
:::

### RAID1
Questa configurazione è molto diversa da RAID0: qui i dati sono ridondanti, cioè tutto ciò che salvi sul server viene duplicato.
Viene quindi fatto il mirror su entrambi gli SSD e i dati sarebbero disponibili anche se uno dei due SSD si guasta, quindi i tuoi dati sono al sicuro con 1 SSD.

In caso di malfunzionamento tecnico, basterà sostituire l’SSD guasto e il server ricostruirà il RAID, cioè rifarà il mirror dei dati.
Questa configurazione è altamente consigliata soprattutto per dati più sensibili, ma non sostituisce i backup.

:::info
Backup regolari di tutti i dati importanti sono fondamentali!
:::

## L’Assistente di Configurazione

Quando il server si avvia, è necessario avviare lo strumento di configurazione RAID. Puoi farlo premendo `F8` al momento giusto del boot.

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

Premi F8 qui per aprire lo strumento di configurazione RAID

***

![](https://screensaver01.zap-hosting.com/index.php/s/L4Lw8oGjxbDR96N/preview)

Dopo qualche secondo comparirà questa panoramica di configurazione.

***

Ora ci sono diverse opzioni di menu:

* Create Logical Drive  
Crea un nuovo volume.

* View Logical Drive  
Mostra la configurazione RAID attuale.

***
RAID0

![](https://screensaver01.zap-hosting.com/index.php/s/6mtbrFXNPeqHnYi/preview)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/749Kxjq6Mkzdc69/preview)
***

* Delete Logical Drive  
Puoi cancellare la configurazione RAID attuale, per crearne una nuova ad esempio.

* Select Boot Volume  
Puoi scegliere di avviare da un altro supporto di archiviazione, cosa non necessaria nel nostro caso.

* Manage License Keys  
Non serve modificare nulla qui, la licenza è già preconfigurata.

* Cache Settings  
L’opzione cache può essere regolata per aumentare un po’ le velocità di lettura/scrittura degli SSD.  
Fondamentalmente, gli ultimi blocchi di dati vengono messi in cache durante ogni scrittura per motivi di sicurezza, ad esempio in caso di perdita di corrente.  
Questo comporta un leggero calo di prestazioni.

### Creare un nuovo RAID

Prima di tutto controlliamo che non ci siano volumi attivi, apriamo `Delete Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/EbPtmgFyZ3oN6jb/preview)

Premiamo `F8` per cancellare il RAID esistente.

***

![](https://screensaver01.zap-hosting.com/index.php/s/qmtAciacCLKJ9QG/preview)

Premendo `F3` confermiamo la cancellazione.

***

Dopo che il RAID è stato cancellato con successo, apriamo `Create Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/SjP6ZkcWXCKc4kT/preview)

Qui vedi tutti i tuoi SSD e puoi scegliere la configurazione RAID.  
Ovviamente non tutte le configurazioni RAID sono implementabili con la configurazione attuale.

Nel nostro esempio scegliamo RAID0 o RAID1.

:::info
Puoi passare da un menu all’altro premendo `TAB`
:::

Quando hai scelto la configurazione RAID, confermala premendo `Enter`.

:::info
Puoi chiudere l’assistente di configurazione premendo `ESC`
:::

### Selezionare il Boot Volume

Se hai modificato il RAID, è necessario selezionare il volume di boot.  
Lo puoi fare facilmente in **Select Boot Volume**, scegliendo il drive logico che hai creato, altrimenti il server rimarrà bloccato in un bootloop.

**Select Boot Volume**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2GDEYfjnkmaKF9F/preview)
***
**Direct Attached Storage**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2468ZCGkr2ninxM/preview)
***
**Logical Drive 01**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tN6pRiJbZexbzmg/preview)
***
**Premi `F8` per salvare come boot volume**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tqGFzGZGgeo4JjZ/preview)

Alla fine puoi premere `F8` per riavviare subito il sistema o `Enter` per tornare al menu principale.  
Ricorda che il boot volume deve essere impostato **sempre** dopo aver modificato la configurazione RAID.

## Conclusione

Congratulazioni, hai configurato con successo il RAID sul tuo server dedicato. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂