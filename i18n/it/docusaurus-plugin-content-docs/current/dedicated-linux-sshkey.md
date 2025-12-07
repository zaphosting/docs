---
id: dedicated-linux-sshkey
title: "Dedicated Server: Generazione e utilizzo delle chiavi SSH per server Linux"
description: "Scopri come generare e gestire in modo sicuro le chiavi SSH per il tuo server Linux per aumentare la sicurezza della connessione → Scopri di più ora"
sidebar_label: Chiave SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Genera Chiave SSH

Per una connessione molto più sicura rispetto alla classica connessione con password SSH, si consiglia l’uso delle chiavi SSH. Per farlo, apri la scheda "**Accesso & Sicurezza**" nel pannello del server Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

In "**Accesso & Sicurezza**" puoi ora generare una chiave cliccando sul pulsante "**Genera Chiave SSH**".  
Appena premi questo pulsante, si apre un popup e una chiave generata casualmente viene scaricata direttamente sul PC.  
Per aggiungere la chiave al server, devi cliccare sul pulsante "**Aggiungi Chiave**".

:::info
Nel caso di VPS Linux, la chiave viene aggiunta direttamente. Nel caso di Root Server Linux, il server deve essere riavviato affinché le modifiche abbiano effetto.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

Se ti servono altre chiavi, puoi premere il pulsante "**Genera Chiave**" nella stessa finestra.  
Con "**Nome chiave**" puoi assegnare un nome alla chiave, che verrà mostrato nel pannello ZAP-Hosting. Consigliato per avere tutto più ordinato.

Quando tutte le chiavi desiderate sono state generate e aggiunte, verranno mostrate sotto "**Accesso & Sicurezza**".

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

Se hai una tua chiave pubblica generata esternamente e non tramite il nostro pannello, puoi integrarla cliccando sull’icona "**+**".

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

Si apre un pannello vuoto dove puoi incollare la tua chiave pubblica. La chiave verrà aggiunta al server premendo la funzione "**Aggiungi Chiave**" e poi mostrata nel nostro pannello.

## Da OpenSSH a Chiave Privata PuTTY con PuTTYGen

Le chiavi SSH create dal nostro pannello sono in formato OpenSSH. Per poterle usare con PuTTY, devono essere convertite nel formato chiave privata PuTTY. Puoi usare il software "**PuTTYGen**" che viene installato automaticamente con PuTTY.

L’app PuTTYGen si trova nella cartella principale di PuTTY. Di default, la cartella PuTTY si trova nell’esempio mostrato in "**C:>Program Files>PuTTY**".

Avvia PuTTYGen e clicca su "**File**" -> "**Load private key**".

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

Ora devi aprire il file generato da ZAP-Hosting. Vai nella cartella standard dove vengono salvati tutti i tuoi download.

:::info
**Importante:** Assicurati di avere il filtro impostato su "**Tutti i file**" come mostrato nell’immagine, perché il file .pri creato dal sistema non è visibile altrimenti.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/5eRjG5HNMrxW38D/preview)

Una volta caricato, puoi usare i vari campi per inserire commenti e una password per la chiave. Per impostare la password, devi inserirla sia in "**Key passphrase**" che in "**Confirm passphrase**".  
*Nota:* Puoi anche lasciare vuoti questi campi e creare la chiave senza password, ma sarebbe meno sicuro e quindi non consigliato. Quando hai impostato tutto, puoi salvare la chiave compatibile con PuTTY cliccando su "**Save private key**".

![](https://screensaver01.zap-hosting.com/index.php/s/S2XNpejKYds6C6K/preview)

Dai un nome a questo file .ppk e salvalo in modo da ritrovarlo facilmente.

## Connessione con Chiave SSH

Per usare la chiave nelle connessioni, devi prima collegarla a PuTTY. Vai su "**SSH**" - "**Auth**" - "**Browse...**".

![](https://screensaver01.zap-hosting.com/index.php/s/cxLBRMPiqEXBG55/preview)

Trova la chiave che hai appena creato con PuTTYGen e clicca su "**Open**".

Per non dover ripetere questi passaggi ad ogni connessione, ti consigliamo di salvarla nella sessione. Vai su "**Sessione**" - "**Default Settings**" - "**Salva**", come mostrato nello screenshot.

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

Ora puoi fare il login al server con PuTTY. Il "**Commento chiave**" inserito in PuTTYGen sarà visibile lì.

## Disattivare il Login con Password

Le chiavi SSH sono state create per aumentare la sicurezza. Se il login con password SSH è ancora possibile, la sicurezza del server non è cambiata. Per questo motivo, il login SSH tramite password deve essere disattivato.  
C’è una differenza tra Linux VPS e Linux Root Server su come disattivare questo login. Se il login è stato disattivato correttamente, la connessione sarà possibile solo per gli utenti con la chiave SSH che hai creato.

### Linux VPS

Puoi disattivare il login con password facilmente nella scheda Accesso & Sicurezza.  
Premi il pulsante **Disattiva Login Password** accanto al pulsante Genera Chiave SSH.  
Una volta disattivato, non sarà più possibile accedere al server tramite login con password.

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

La voce "**Login SSH tramite password**" sarà impostata su "**Inattivo**".