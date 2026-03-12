---
id: server-truenas-scale
title: "Configura TrueNAS SCALE su un Server - Costruisci il Tuo NAS Personale"
description: "Scopri come installare TrueNAS SCALE sul tuo server dedicato per storage in rete e condivisione file → Scopri di più ora"
sidebar_label: Installazione di TrueNAS SCALE
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

TrueNAS SCALE è una piattaforma di storage open-source che ti permette di costruire un sistema NAS (Network-Attached Storage) su un server. In questa guida installerai TrueNAS SCALE su un Server Dedicato e configurerai l’installazione iniziale, inclusi pool di storage, account utente e condivisione file SMB.

:::danger VPS Non Adatto
I nostri prodotti VPS non sono adatti perché hanno un solo disco virtuale. Puoi installare TrueNAS SCALE su un VPS, ma non potrai creare pool di storage dato che l’intero disco è usato dal sistema operativo.

Per configurare TrueNAS SCALE serve un [server dedicato](https://zap-hosting.com/en/dedicated-server-hosting/) con almeno due hard disk.
:::

<InlineVoucher />

## Preparazione

Prima di iniziare l’installazione, assicurati di avere i seguenti requisiti minimi di sistema:

| Hardware   | Minimo     | Consiglio ZAP-Hosting       |
| ---------- | ---------- | --------------------------- |
| CPU        | 2 Core CPU | 8 vCPU Core                 |
| RAM        | 8 GB       | 16 GB                      |
| Spazio disco | 16 GB OS  | Dipende dall’uso            |

<InlineServiceLink />

Vai sul sito ufficiale [TrueNAS](https://www.truenas.com/download-truenas-scale/) e scarica l’ultima versione stabile. Puoi caricare l’ISO in una posizione pubblica (tuo web server o cloud storage) oppure tenerla localmente per il montaggio diretto.

:::tip[Hosting ISO]
Se vuoi montare l’ISO via URL nella console remota, assicurati che l’URL finisca con `.iso` ed è accessibile pubblicamente senza autenticazione.
:::

**Montare l’ISO**

Accedi al tuo [Dashboard ZAP-Hosting](https://zap-hosting.com/en/customer/) e vai al tuo Server Dedicato nella lista servizi. Apri la pagina di gestione server e clicca su **Attiva iLO** per accedere all’interfaccia di gestione.

![img](https://screensaver01.zap-hosting.com/index.php/s/or8HJ8e3QeAJm6z/preview)

Nell’interfaccia iLO, trova l’opzione **Integrated Remote Console**. Scegli il tipo di console preferito e avviala. Si aprirà una nuova finestra con accesso diretto al display del server.

Nella console remota, clicca sull’icona **CD** in alto e seleziona **CD/DVD**. Scegli **Scripted Media URL** se hai caricato l’ISO online e inserisci l’URL diretto. Altrimenti, seleziona **Local .iso File** per sfogliare il tuo computer. In entrambi i casi, l’ISO verrà montata come drive CD/DVD virtuale.

![img](https://screensaver01.zap-hosting.com/index.php/s/F98tgjsqq2S6nqp/preview)

:::tip Metodi Alternativi
Per altri metodi di montaggio ISO, incluso tramite Virtual Media, consulta la [guida Own ISO](dedicated-iso.md).
:::

Con l’ISO montata, usa il menu **Power** nella console per riavviare. Seleziona **Reset** e il server si riavvierà, facendo il boot dall’ISO di TrueNAS SCALE.

## Installazione

Segui la console mentre il sistema si avvia. Apparirà la schermata di setup di TrueNAS SCALE e il programma di installazione si caricherà automaticamente. Il caricamento dell’ambiente di installazione richiede qualche minuto.

![img](https://screensaver01.zap-hosting.com/index.php/s/TJwMWFZeorwGryn/preview)

L’installer mostra **Choose destination media** con i dischi disponibili. Naviga con le **frecce** e seleziona il disco per il sistema operativo. Scegli il disco più piccolo per l’installazione (questo disco sarà dedicato completamente a TrueNAS SCALE). Premi **Space** per selezionarlo, poi **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z5o7TFye6BPor7Q/preview)

Compare un avviso che l’installazione **cancellerà** tutto sul disco selezionato. Vai su **Yes** con le frecce e premi **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/LS2mJBQ2deawKFp/preview)

Poi l’installer chiede come configurare l’autenticazione. **Opzione 1** imposta la password ora, mentre **Opzione 2** permette di configurarla dopo via interfaccia web. Useremo **Opzione 2: Configura tramite Web UI** per più flessibilità. Selezionala e premi **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oPpMLCZ5nPePdLW/preview)

L’installer chiede **"Allow EFI boot?"**. Seleziona **Yes** (consigliato) e premi **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/We8tqgctQrjz5oS/preview)

L’installazione inizia e dura circa 15-20 minuti. Segui il progresso mentre i file vengono copiati e il sistema si configura.

![img](https://screensaver01.zap-hosting.com/index.php/s/BAykMjmxDn76sJB/preview)

Al termine vedrai **"The TrueNAS installation is successful"**. Premi **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/GmNwHaTfY6KHSbN/preview)

Prima di riavviare, **smonta l’ISO** altrimenti il server farà il boot di nuovo dall’installer. Clicca sull’icona **DVD**, seleziona **CD/DVD** e clicca su **Eject Media**. Riavvia dal menu Power o lascia che si riavvii automaticamente.

<InlineServiceLink />

## Configurazione

Dopo l’installazione devi configurare da quale disco il server deve fare il boot. TrueNAS SCALE è installato, ma il server deve essere impostato per avviare dal disco corretto tramite la configurazione ROM del controller RAID.

:::info[Passaggio Critico]
Dopo l’installazione, devi configurare il volume di boot nel controller RAID ROM per far partire il server dal disco giusto.
:::

**Impostare il Disco di Boot nella ROM**

Segui la console durante il boot. Quando appare **"Press F8 for ROM Configuration for Arrays Utility"**, premi subito **F8**.

![img](https://screensaver01.zap-hosting.com/index.php/s/BCosyXCBnZJjeiX/preview)

Si apre l’utilità di configurazione ROM. Vai su **Select Boot Volume** con le frecce e premi **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw4netxJPkX3354/preview)

Qui vedi i dischi disponibili. Seleziona il disco dove hai installato TrueNAS SCALE e premi **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7mPgXFMqn9Q475Z/preview)

Con il disco selezionato, premi **F8** per salvare. Conferma se richiesto, poi esci dall’utilità. Il server farà il boot in TrueNAS SCALE.

![img](https://screensaver01.zap-hosting.com/index.php/s/YEFokMkz3RSB625/preview)

**Accesso all’Interfaccia Web**

Al primo avvio, la console di TrueNAS SCALE mostra l’URL per accedere alla Web UI: `http://[tuo_ip_server]`. Segnati questo indirizzo IP perché ti servirà per accedere all’interfaccia web.

![img](https://screensaver01.zap-hosting.com/index.php/s/8JwikNGRTz4La3y/preview)

:::tip Configurazione Rete Automatica
TrueNAS SCALE di solito configura automaticamente la rete via DHCP. Salta questo passaggio a meno che tu non abbia più IP o necessiti di un IP statico specifico.
:::

Per configurare manualmente la rete, seleziona **1) Configure Network Interfaces** dal menu console. Scegli la tua interfaccia principale (es. `enp0s3` o `eth0`), poi **Configure IPv4** e **Static**. Inserisci IP, subnet mask e gateway (li trovi nel tuo Dashboard ZAP-Hosting).

Apri un browser e vai su `http://[tuo_ip_server]` usando l’IP mostrato in console.

Dato che abbiamo scelto **Configura tramite Web UI**, qui imposterai la password. La pagina di login mostra `truenas_admin` come username. Inserisci una password forte, confermala e clicca **Submit**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dZrpdZYQwKBFksJ/preview)

:::danger Sicurezza Importante
Scegli una password forte e unica per l’account admin di TrueNAS. Questo account ha accesso completo al sistema.
:::

Dopo il login, appare la dashboard con info di sistema, stato rete, pool di storage, servizi e alert. Hai configurato TrueNAS SCALE con successo e sei pronto per impostare lo storage.

![img](https://screensaver01.zap-hosting.com/index.php/s/fYkDpDfpqwTT5yY/preview)

**Creare Pool di Storage**

Clicca su **Storage** nella sidebar sinistra, poi clicca su **Create Pool**.

![img](https://screensaver01.zap-hosting.com/index.php/s/fFeSjm3YnnPfxq5/preview)

Inserisci un nome per il pool, tipo `Disk`, `tank` o quello che preferisci. Clicca **Next** quando pronto.

![img](https://screensaver01.zap-hosting.com/index.php/s/23MNpcrHmmGz2L2/preview)

Nella sezione **Data**, apri il menu **Layout** e scegli la configurazione che ti serve:

- **Stripe**: Massima capacità ma senza ridondanza
- **Mirror**: Dati identici su due dischi, ridondanza con capacità dimezzata
- **RAIDZ1**: Ridondanza su un disco
- **RAIDZ2**: Ridondanza su due dischi
- **RAIDZ3**: Ridondanza su tre dischi

![img](https://screensaver01.zap-hosting.com/index.php/s/wKHy7f8xoifEXB6/preview)

Sotto **Disk Selection** vedi tutti i dischi di storage. Clicca quelli che vuoi includere nel pool, si sposteranno nell’area di configurazione con capacità stimata.

:::info Disco di Boot Non Disponibile
Il disco di installazione non appare qui perché è riservato solo al sistema operativo.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/McEcGQSBzHaZNNc/preview)

Lascia le opzioni opzionali di default e clicca **Next**. La pagina di revisione mostra nome, layout, dischi e capacità. Controlla e clicca **Create Pool** per confermare.

![img](https://screensaver01.zap-hosting.com/index.php/s/RDitijsoGWtEoT5/preview)

**Organizzare con Dataset**

Con il pool creato, puoi organizzare i dati usando i dataset. I dataset sono suddivisioni logiche del pool che aiutano a separare tipi diversi di dati. Clicca su **Datasets** nella sidebar. Il tuo nuovo pool appare lì (es. "Disk").

![img](https://screensaver01.zap-hosting.com/index.php/s/oZPctpbLcCESWWt/preview)

Clicca su **Add Dataset**. Il pool è impostato automaticamente come parent. Dagli un nome tipo `documents`, `media` o `backups`. Lascia le opzioni avanzate di default a meno che tu non abbia esigenze specifiche. Clicca **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/JxPmPW53zke9NQL/preview)

**Creare Account Utente**

Clicca su **Credentials** nella sidebar, poi su **Add**. Scegli un username (es. `john` o `fileuser`), inserisci il nome completo e imposta una password. Lascia gruppo primario, home directory e shell di default. Scorri fino in fondo e abilita l’opzione **SMB** per accesso Windows.

Personalizza i permessi in base alle tue esigenze di sicurezza. Per condivisione base, le opzioni di default con SMB abilitato vanno benissimo. Quando hai finito, clicca **Submit**.

:::danger Importante per Accesso SMB
Non usare `root` o `truenas_admin` per la condivisione file. Questi account di sistema non funzionano con SMB. Crea utenti dedicati.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/3SLGk75E3KP57ZS/preview)

**Configurare Condivisioni SMB**

Clicca su **Shares** nella sidebar. Appaiono tre opzioni: Windows (SMB) per Windows/macOS/Linux, Unix (NFS) per Linux/Unix, e Block (iSCSI) per storage a blocchi. Configureremo SMB. Clicca su **Add** nella sezione Windows (SMB) Shares.

![img](https://screensaver01.zap-hosting.com/index.php/s/fgWcqjyxXLD2dRy/preview)

Si apre la finestra **Add SMB**. Per **Path**, sfoglia il dataset (es. `/mnt/Disk/documents`). Per **Name**, inserisci un nome tipo `documents` (gli utenti vedranno questo nome in rete). **Purpose** può restare di default nella maggior parte dei casi. Aggiungi una descrizione se vuoi. Ci sono opzioni avanzate (ACL e altro), ma lascia disabilitato l’accesso guest per sicurezza. Clicca **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/D2xQYHQfbmsKRwT/preview)

Dopo aver creato la condivisione, appare un popup che dice che il **servizio SMB non è attivo**. Clicca **Start Service**. Spunta anche **Start Automatically** per farlo partire all’avvio. Ora la condivisione SMB è disponibile in rete.

![img](https://screensaver01.zap-hosting.com/index.php/s/KQH5zoA7FYWaXMa/preview)

Per condivisioni NFS con sistemi Linux/Unix, vai su **Shares** → **Unix (NFS) Shares** e clicca **Add**. Seleziona il dataset, configura reti e permessi, abilita NFS quando richiesto e salva.

<InlineServiceLink />

## Accesso alla Condivisione

Per accedere alla condivisione da un PC Windows, apri **Esplora File**. Fai clic destro su **Questo PC** (o **Computer**) e seleziona **Aggiungi percorso di rete**.

![img](https://screensaver01.zap-hosting.com/index.php/s/NDJWjdpC6ZCq6c3/preview)

Si apre la procedura guidata **Aggiungi percorso di rete**. Continua con **Avanti**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7KXPxNQJy4qsiBy/preview)

Quando ti chiede la posizione, usa questo formato: `\\[tuo_ip_server]\[nome_condivisione]`. Per esempio: `\\192.168.1.100\documents`. Sostituisci `[tuo_ip_server]` con l’IP del server TrueNAS e `[nome_condivisione]` con il nome dato alla condivisione SMB. Poi clicca **Avanti**.

![img](https://screensaver01.zap-hosting.com/index.php/s/2yaoWfiCTX6XLAz/preview)

Inserisci **username** e **password** dell’utente creato in TrueNAS. Non usare `root` o `truenas_admin` perché non funzionano con SMB. Spunta **Memorizza le credenziali** per non doverle reinserire. Clicca **OK**.

![img](https://screensaver01.zap-hosting.com/index.php/s/4nFReNbPLkHfmMp/preview)

Ora la condivisione TrueNAS è accessibile. Puoi navigare file, creare cartelle e copiare dati come su un normale drive di rete. Hai collegato con successo il tuo PC Windows alla condivisione TrueNAS.

![img](https://screensaver01.zap-hosting.com/index.php/s/nBqrkmkCYJntwW2/preview)

:::tip Accesso Veloce
Per un accesso più rapido, usa **Mappa unità di rete** invece di **Aggiungi percorso di rete**. La condivisione apparirà come lettera di unità (es. `Z:`) in Esplora File.
:::

:::info Accesso da MacOS o Linux
**macOS**: In Finder premi `Cmd+K` e inserisci `smb://[tuo_ip_server]/[nome_condivisione]`

**Linux**: Usa l’opzione "Connetti al server" del file manager con `smb://[tuo_ip_server]/[nome_condivisione]`, oppure monta da terminale con `mount.cifs`
:::

## Conclusione

Congratulazioni, hai installato e configurato TrueNAS SCALE sul tuo server con successo. Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂