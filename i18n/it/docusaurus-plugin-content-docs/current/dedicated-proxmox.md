---
id: dedicated-proxmox
title: "Server Dedicato: Installazione di Proxmox VE"
description: "Scopri come configurare e gestire Proxmox VE per la virtualizzazione aziendale con strumenti integrati e alta disponibilità → Scopri di più ora"
sidebar_label: Installa Proxmox
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Proxmox Virtual Environment è una piattaforma completa e open-source per la gestione server dedicata alla virtualizzazione aziendale. Integra perfettamente l’hypervisor KVM e i Linux Containers (LXC), storage e networking software-defined, tutto su un’unica piattaforma. Con l’interfaccia web integrata puoi gestire VM e container, alta disponibilità per cluster e strumenti di disaster recovery in modo semplice e veloce.



## Preparazione

Per iniziare, devi montare e avviare il server dedicato dall’installer ISO di Proxmox VE (Virtual Environment). Ci sono due modi per farlo: il metodo più semplice tramite il pannello web del tuo server dedicato oppure il metodo più lungo, manualmente tramite il pannello iLO del server.



### Montare l’ISO tramite il pannello web
Vai alla sezione **Installazione Iniziale** nel pannello web del tuo server dedicato. Qui devi prima cliccare il pulsante verde **abilita iLO**. Aspetta qualche secondo finché le sezioni nascoste non diventano visibili. Potrebbe essere necessario aggiornare la pagina per caricarla completamente.

![](https://screensaver01.zap-hosting.com/index.php/s/r6XNqDqQeEec7wW/preview)

Poi seleziona un ISO **Proxmox VE** dal menu a tendina. Ti consigliamo di usare sempre l’ultima versione per restare aggiornato con le novità. Ora clicca il pulsante verde **Inserisci**.

![](https://screensaver01.zap-hosting.com/index.php/s/xXfWzqtE6JMG9Ka/preview)

Infine devi riavviare il server dedicato per poter avviare il boot dall’ISO. Puoi farlo tramite il pulsante di riavvio sotto il passo 3.



### Montare l’ISO tramite iLO
Scarica l’ISO di Proxmox VE dal [sito ufficiale di Proxmox](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso). Poi caricalo e montalo sul tuo server dedicato seguendo le guide [iLO](dedicated-ilo.md) e [ISO personalizzate](dedicated-iso.md) che spiegano come accedere e caricare la tua ISO personalizzata.



## Configurazione & Setup

:::important
Assicurati di aver riavviato il server dopo aver importato e montato la nuova ISO prima di procedere.
:::

Ora che l’ISO è montata, devi avviare il boot da essa. Puoi farlo tramite la **console remota HTML5** nel pannello iLO. Dal pannello web, clicca sul link **Apri qui** sotto `Accesso web iLO` che ti porterà al pannello iLO, usa le credenziali fornite per il login.

:::note
Il browser potrebbe mostrarti un avviso di rischio sicurezza, ignoralo e accetta per continuare.
:::

Una volta loggato, nella sezione **Panoramica** trova e clicca sul link **HTML5** sotto `Console remota integrata`. Si aprirà una finestra overlay.

![](https://screensaver01.zap-hosting.com/index.php/s/HPWJ3oksyo3SdW6/preview)

Dovresti vedere l’installazione di Proxmox in corso. Usa le frecce direzionali, `enter` e `esc` per navigare. Ti consigliamo di scegliere la versione **Grafica** di Proxmox, che è quella seguita in questa guida.

![](https://screensaver01.zap-hosting.com/index.php/s/MGqm3EAxYc8EBQw/preview)

Aspetta qualche secondo che l’installazione prosegua. Devi accettare il contratto EULA di Proxmox cliccando il pulsante **Accetto** in basso a destra. Nella pagina successiva seleziona il disco di destinazione per l’installazione. Se usi un singolo disco, le impostazioni di default sono già ottimizzate, quindi puoi continuare cliccando **Avanti**.

![](https://screensaver01.zap-hosting.com/index.php/s/pZ8FiFJT6tJKFsS/preview)

:::note
Se vuoi configurare un RAID (alcuni server dedicati hanno due dischi), usa il pulsante **Opzioni** per scegliere la modalità `RAID`. Consigliamo `RAID1` che fa il mirror dei due dischi.

![](https://screensaver01.zap-hosting.com/index.php/s/WqiYPowiLttzoeZ/preview)
:::

Nella sezione successiva imposta lingua e tastiera, che dovrebbero essere rilevate automaticamente. Compila e continua.

![](https://screensaver01.zap-hosting.com/index.php/s/As4J4NzytcZFrHp/preview)

Ora devi impostare una password forte e un indirizzo email. L’email servirà al pannello per inviarti notifiche e alert importanti.

:::important
Ricordati la password, ti servirà per il primo accesso al pannello dopo l’installazione!
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QAEaygacSXNfgot/preview)

Ultimo step: configura la rete. Seleziona l’interfaccia di gestione disponibile e un hostname per il server.

![](https://screensaver01.zap-hosting.com/index.php/s/EZDzsaq4aXpP4we/preview)

Ora vai nella sezione **Indirizzi IP** nel pannello web del server dedicato per trovare un IP libero.

![](https://screensaver01.zap-hosting.com/index.php/s/KQC4DLj6LxTX4io/preview)

Scegli un indirizzo IP da usare per il pannello Proxmox. Inserisci IP, Netmask e Gateway nell’installer usando i dati del pannello web. Per il DNS puoi mettere `8.8.8.8`, il DNS pubblico di Google.

Quando hai finito, clicca **Avanti** e controlla tutte le impostazioni nella pagina di riepilogo. Se tutto è ok, clicca **Installa** per partire!



## Accesso al pannello
Dopo l’installazione e il riavvio, seleziona l’opzione **Proxmox Environment GNU/Linux** nel menu e premi **Enter**. Quando si avvia, vedrai un messaggio di benvenuto con l’indirizzo IP e il link per accedere al pannello via browser (quello che hai specificato prima). Vai a quel link.

:::note
Il browser potrebbe mostrarti di nuovo un avviso di sicurezza, ignoralo e accetta per continuare.
:::

Se il link non funziona, probabilmente hai fatto qualche errore nella configurazione di rete durante l’installazione.

Ora che sei nel pannello, fai il login con username `root` e la password che hai impostato durante l’installazione. Assicurati che il **Realm** sia impostato su `Linux PAM standard authentication`.

![](https://screensaver01.zap-hosting.com/index.php/s/iKcErA9Bx5LpB3n/preview)

Dopo il login, puoi ignorare il messaggio di sottoscrizione cliccando **OK**. E voilà, hai installato Proxmox VE sul tuo server dedicato e sei dentro al pannello!



## Crea la tua prima VM
Qui ti spieghiamo i passi base per creare la tua prima Virtual Machine (VM) dal pannello Proxmox. Vai su `local (panel)` e seleziona la sezione **ISO Images**. Qui puoi caricare manualmente un file `.iso` oppure far scaricare a Proxmox l’ISO fornendo l’URL diretto.

![](https://screensaver01.zap-hosting.com/index.php/s/GJjxxkPAkiRM7Fw/preview)

Dopo aver caricato l’ISO, clicca in alto a destra su **Crea VM**. Si aprirà un menu con tante opzioni.

Prima configura le impostazioni generali. Di default il `Node` sarà quello predefinito (qui `panel`). Devi inserire un ID VM unico, che di default parte da `100` o si incrementa se hai già VM attive. Dai un nome alla VM, può essere qualsiasi cosa.

![](https://screensaver01.zap-hosting.com/index.php/s/6LmXZ26bnNY46yS/preview)

Passa alle impostazioni OS. Qui seleziona l’immagine ISO che hai caricato prima. Imposta anche tipo e versione del sistema operativo.

![](https://screensaver01.zap-hosting.com/index.php/s/QWjGQ7grR8ttaqZ/preview)

Consigliamo di lasciare le impostazioni di sistema di default, sono già ottimizzate. Vai alla sezione disco, dove puoi scegliere la dimensione del disco per la VM e il pool di storage (di default `local-lvm`). Le altre impostazioni vanno bene così.

![](https://screensaver01.zap-hosting.com/index.php/s/2XJyydoZwaEMDeZ/preview)

Poi la sezione CPU, dove puoi definire socket e numero di core da assegnare. Configura come preferisci.

![](https://screensaver01.zap-hosting.com/index.php/s/RrWWT2wMRaQzde7/preview)

Anche nella sezione Memoria puoi scegliere quanta RAM dare alla VM e lo stato del ballooning.

![](https://screensaver01.zap-hosting.com/index.php/s/DaXCsYLwWeMr9aJ/preview)

Consigliamo di lasciare le impostazioni di rete di default per ora. Infine rivedi tutte le impostazioni della VM. Ti consigliamo di attivare l’opzione `Avvia dopo creazione` così la VM parte subito. Se tutto ok, clicca **Fine** per creare la VM.

![](https://screensaver01.zap-hosting.com/index.php/s/EfNAZ4idcxizDsa/preview)

Ecco fatto, hai creato la tua prima VM nel pannello Proxmox! La vedrai nella lista server a sinistra nel pannello.





## Conclusione

Complimenti, hai installato con successo Proxmox sul tuo server dedicato. Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂