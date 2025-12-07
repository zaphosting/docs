---
id: vserver-iso-windows
title: "VPS: Installazione di Windows X/Windows Server 20XX"
description: "Scopri come personalizzare le installazioni di Windows con ISO su misura per avere il pieno controllo su setup e driver → Scopri di più ora"
sidebar_label: "Installa Windows X/WS 20XX"
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introduzione
Installare un ISO personalizzato ti dà il pieno controllo sulla configurazione di ambienti Windows come Windows 10 o Windows Server 2016/2019/2022/2025. A differenza delle nostre immagini OS standard preconfigurate, questo metodo ti permette di usare un supporto di installazione cucito sulle tue esigenze, ad esempio includendo driver speciali, configurazioni predefinite o pacchetti software aggiuntivi.

<InlineVoucher />



## Preparazione

Per installare e configurare un sistema operativo, è fondamentale montare l’ISO corrispondente. Se non hai mai montato un file ISO, ti consigliamo di dare un’occhiata alla nostra guida [ISO personalizzate](vserver-iso.md).



## Installazione

All’avvio dell’installazione di Windows, verrai guidato nei primi passaggi. Prima scegli la **lingua**, poi imposti il **layout della tastiera** e infine selezioni il **metodo di installazione**. Per questa guida usiamo l’opzione **Versione precedente dell’installazione**. Nel passaggio successivo scegli l’edizione, in questo esempio **Windows Server 2025 Datacenter Desktop Experience**, che offre l’interfaccia grafica completa.



![img](https://screensaver01.zap-hosting.com/index.php/s/7K227dRoaz5Y4py/download)

A questo punto noterai che non vengono visualizzate partizioni. Non è un errore: Windows non riesce a rilevare i dischi virtuali senza driver aggiuntivi. Servono i driver VirtIO per riconoscere i dischi e gestirli correttamente. Ora devi montarli e installarli, così i dischi appariranno e potrai procedere con il partizionamento e l’installazione.



### Driver VirtIO

Prima di installare il sistema operativo, devi configurare i driver VirtIO. Questi driver Windows sono ottimizzati per hypervisor basati su KVM e garantiscono prestazioni e compatibilità al top per le VM Windows.

Per farlo, devi temporaneamente cambiare il supporto di installazione con il file `virtio-win.iso`. Seleziona l’ISO VirtIO tra quelli disponibili e clicca su **Monta**. Così i driver saranno accessibili durante l’installazione e potrai installarli prima di proseguire con l’OS.



![img](https://screensaver01.zap-hosting.com/index.php/s/wtZFngf9FofiQ88/download)

:::warning NON RIAVVIARE IL SERVER
Quando cambi **temporaneamente** l’ISO con quella VirtIO, seleziona solo l’ISO. Non riavviare il sistema, altrimenti perderai i progressi fatti.

:::

I driver richiesti sono organizzati in tre cartelle: **Balloon**, **NetKVM** e **vioscsi**. Ognuna contiene un tipo specifico di driver essenziale per far girare Windows su hypervisor KVM.

- **Balloon:** gestisce dinamicamente la memoria RAM assegnata alla VM, permettendo di aumentarla o diminuirla senza riavviare.  
- **NetKVM:** fornisce un’interfaccia di rete ottimizzata e stabile per la VM.  
- **Vioscsi:** driver controller SCSI specializzato che garantisce il riconoscimento e l’accesso veloce ai dischi virtuali, migliorando le prestazioni I/O.  

Dentro ogni cartella c’è una sottocartella per l’architettura del sistema. Durante l’installazione devi selezionare quella corrispondente al sistema operativo che stai installando. Usa sempre l’architettura amd64. <u>Ripeti la procedura per tutte e tre le cartelle come mostrato nello screenshot.</u>

![img](https://screensaver01.zap-hosting.com/index.php/s/fisTox5ziW4Y3tt/download)

Una volta installati i driver VirtIO, puoi tornare all’installazione vera e propria del sistema operativo. Cambia di nuovo l’ISO, questa volta selezionando l’ISO originale di installazione, e riapri la console VNC per continuare.



![img](https://screensaver01.zap-hosting.com/index.php/s/QECit2kf66WQF9R/download)



### Creare e selezionare la partizione

Il passo successivo è configurare il partizionamento. Prima elimina eventuali partizioni sconosciute. Poi seleziona la nuova partizione non allocata come destinazione per l’installazione.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRijdykS6CxyrbA/download)

Clicca su **Avanti** per continuare, il resto dell’installazione procederà automaticamente. Alla fine ti verrà chiesto di impostare le credenziali per l’account Administrator.

![img](https://screensaver01.zap-hosting.com/index.php/s/bPzrdmbgYeLGrjJ/download)



## Configurazione

Terminata l’installazione, ci sono alcuni passaggi finali per configurare il sistema in modo sicuro e affidabile. Questi includono abilitare e gestire l’accesso tramite **Remote Desktop (RDP)**, configurare le **regole firewall** per protezione e funzionalità, e impostare la **configurazione di rete** per integrare correttamente il server nella rete.

Così garantisci accesso remoto, monitoraggio e controlli di stato senza problemi, e un funzionamento stabile e prevedibile della rete nella tua infrastruttura.



### Configurazione RDP

Per abilitare Remote Desktop (RDP) su Windows, la procedura è simile per Windows 10 (client) e Windows Server 2016/2019/2022/2025. Apri il **Pannello di controllo** o le **Impostazioni**, vai su **Sistema → Desktop remoto** (client) o **Proprietà sistema → Remoto** (server) e attiva l’opzione **Consenti connessioni remote a questo computer**. Sui server si chiama **Abilita Desktop remoto**.

![img](https://screensaver01.zap-hosting.com/index.php/s/kcA3bWFHamWRwL8/download)



### Configurazione Firewall

Per far partire il server e far funzionare i controlli di stato come il ping, il protocollo **ICMP** deve essere permesso dal firewall di Windows. Senza questa regola, strumenti di monitoraggio e test di rete non raggiungeranno il server, causando errori nei controlli.

![img](https://screensaver01.zap-hosting.com/index.php/s/jyLqA5Ly3iXDPJ5/download)

Per abilitare ICMP, apri **Windows Firewall con sicurezza avanzata** e vai alle regole in ingresso. Crea una nuova regola personalizzata, imposta il protocollo su "Qualsiasi" e seleziona **ICMPv4**. Configura la regola per tutte le porte e scegli i profili (Dominio, Privato, Pubblico) dove deve essere attiva. Di solito si consiglia di abilitarla su tutti i profili. Dai un nome descrittivo tipo *Consenti ICMP in ingresso* e completa la procedura guidata.

Da ora in poi il server accetterà richieste ICMP, permettendo comandi come `ping` e sistemi di monitoraggio di raggiungerlo e verificarne lo stato.



### Configurazione di rete

Per configurare manualmente la rete su Windows, apri il **Centro connessioni di rete e condivisione** dal Pannello di controllo o dalla barra delle applicazioni. Seleziona l’adattatore di rete (LAN o Wi-Fi), clicca col tasto destro e apri le **Proprietà**. Dalla lista seleziona **Protocollo Internet versione 4 (TCP/IPv4)** e clicca su **Proprietà**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nEGkdE79tDwLszr/download)

Nella finestra che si apre, cambia da Ottieni automaticamente un indirizzo IP a Usa il seguente indirizzo IP. Ora puoi inserire **indirizzo IP**, **subnet mask** e **gateway predefinito** per il tuo server. Sotto, imposta i DNS manualmente e inserisci `1.1.1.1` e `8.8.8.8` come server DNS primario e secondario. Conferma con **OK** per applicare la configurazione statica.



## Conclusione

Complimenti, hai installato e configurato con successo il tuo sistema operativo Windows. Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂



<InlineVoucher />