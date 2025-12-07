---
id: vserver-linux-sshkey
title: "VPS: Generazione e utilizzo delle chiavi SSH per server Linux"
description: "Scopri come generare e gestire in modo sicuro le chiavi SSH per il tuo server Linux per migliorare la sicurezza della connessione e il controllo → Scopri di più ora"
sidebar_label: Chiave SSH
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Genera la chiave SSH

Per una connessione molto più sicura rispetto alla classica connessione con password SSH, si consiglia di usare le chiavi SSH. Per farlo, apri la scheda "**Accesso & Sicurezza**" nel pannello del tuo server Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/wJCtHY44dYiYoqX/preview)

In "**Accesso & Sicurezza**" puoi ora generare una chiave cliccando sul pulsante "**Genera chiave SSH**".  
Appena premi, si apre un popup e la chiave generata casualmente viene scaricata direttamente sul PC.  
Per aggiungere la chiave al server, devi cliccare sul pulsante "**Aggiungi chiave**".

:::info
Nel caso dei VPS Linux, la chiave viene aggiunta direttamente. Per i Root Server Linux, invece, è necessario riavviare il server affinché le modifiche abbiano effetto.
:::

<InlineVoucher />

![](https://screensaver01.zap-hosting.com/index.php/s/GsER3sNYWYj8t7y/preview)

Se ti servono altre chiavi, puoi premere il pulsante "**Genera chiave**" nella stessa finestra.  
Con "**Nome chiave**" puoi assegnare un nome alla chiave, che verrà mostrato nel pannello ZAP-Hosting. Consigliato per tenere tutto più ordinato.

Quando tutte le chiavi desiderate sono state generate e aggiunte, le vedrai elencate sotto "**Accesso & Sicurezza**".

![](https://screensaver01.zap-hosting.com/index.php/s/5yjACdnpyiw6E97/preview)

Se hai una tua chiave pubblica generata esternamente e non tramite il nostro pannello, puoi integrarla cliccando sull'icona "**+**".

![](https://screensaver01.zap-hosting.com/index.php/s/H75CCTe5tTonn8y/preview)

Si apre un pannello vuoto dove puoi incollare la tua chiave pubblica. La chiave verrà aggiunta al server premendo la funzione "**Aggiungi chiave**" e poi mostrata nel nostro pannello.

## Da OpenSSH a chiave privata PuTTY con PuTTYGen

Le chiavi SSH create dal nostro pannello sono in formato OpenSSH. Per usarle con PuTTY, devi prima convertirle nel formato chiave privata PuTTY. Puoi usare il software "**PuTTYGen**" che viene installato automaticamente con PuTTY.

L’app PuTTYGen si trova nella cartella principale di PuTTY. Di default, la cartella PuTTY si trova come nell’esempio in "**C:>Program Files>PuTTY**".

Avvia PuTTYGen e clicca su "**File**" -> "**Load private key**".

![](https://screensaver01.zap-hosting.com/index.php/s/KNeiG7eWpWateDz/preview)

Ora devi aprire il file generato da ZAP-Hosting. Vai nella cartella standard dove vengono salvati tutti i download.

:::info
**Importante:** Assicurati di aver impostato il filtro su "**Tutti i file**" come mostrato nell’immagine, altrimenti il file .pri creato dal sistema non sarà visibile.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/WQfWN264pJPKWYX/preview)

Una volta caricato, puoi usare i vari campi per inserire commenti e una password per la chiave. Per impostare la password, inserisci la stessa in "**Key passphrase**" e "**Confirm passphrase**".  
*Nota:* Puoi anche lasciare vuoti questi campi e creare la chiave senza password, ma è meno sicuro e quindi non consigliato. Quando hai finito, salva la chiave compatibile con PuTTY cliccando su "**Save private key**".

![](https://screensaver01.zap-hosting.com/index.php/s/N4dKc86M95yYbtK/preview)

Dai un nome al file .ppk e salvalo in modo da ritrovarlo facilmente.

## Connessione con chiave SSH

Per usare la chiave nelle connessioni, devi prima collegarla a PuTTY. Vai su "**SSH**" - "**Auth**" - "**Browse...**".

![](https://screensaver01.zap-hosting.com/index.php/s/3BJ7NaG2AemGSZt/preview)

Seleziona la chiave che hai appena creato con PuTTYGen e clicca su "**Open**".

Per non dover ripetere questi passaggi ad ogni connessione, ti consigliamo di salvarla nella sessione. Vai su "**Sessione**" - "**Default Settings**" - "**Salva**", come mostrato nello screenshot.

![](https://screensaver01.zap-hosting.com/index.php/s/zENfY7DBZk85mMa/preview)

Ora puoi fare il login al server con PuTTY. Il "**Commento chiave**" inserito in PuTTYGen sarà visibile lì.

## Disattivare il login con password

Le chiavi SSH sono state create per aumentare la sicurezza. Se il login con password SSH è ancora possibile, la sicurezza del server non è cambiata. Per questo, devi disattivare il login via password.  
C’è una differenza tra Linux VPS e Linux Root Server su come disattivare il login. Se il login è disattivato correttamente, la connessione sarà possibile solo per gli utenti con la chiave SSH che hai creato.

### Linux VPS

Puoi disattivare il login con password facilmente nella scheda Accesso & Sicurezza.  
Premi il pulsante **Disattiva login con password** accanto al pulsante Genera chiave SSH.  
Una volta disattivato, non sarà più possibile accedere al server tramite login con password.

![](https://screensaver01.zap-hosting.com/index.php/s/jd9NiypwxgpeMGe/preview)

La voce "**Login SSH tramite password**" sarà impostata su "**Inattivo**".

## Conclusione

Congratulazioni, hai installato e configurato con successo la tua chiave SSH! Se hai altre domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />