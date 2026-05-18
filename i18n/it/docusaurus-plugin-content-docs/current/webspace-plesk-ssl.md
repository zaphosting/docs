---
id: webspace-plesk-ssl
title: "Webspace: Crea un Certificato SSL in Plesk"
description: "Scopri come proteggere il tuo sito web con un certificato SSL in Plesk e attivare HTTPS per connessioni criptate."
sidebar_label: Crea Certificato SSL
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduzione

Un certificato SSL cripta la connessione tra il tuo sito web e i suoi visitatori. Una volta attivato HTTPS, i browser stabiliscono una connessione sicura e mostrano un’icona a forma di lucchetto nella barra degli indirizzi. Questo protegge i dati sensibili, aumenta la fiducia e impedisce ai browser di segnalare il tuo sito come non sicuro.

<InlineVoucher />

## Proteggere il Dominio Principale

Quando un dominio viene creato per la prima volta in Plesk, è accessibile tramite HTTP e non è criptato. Nel pannello Plesk puoi vedere che non è ancora assegnato alcun certificato. Se apri il dominio in un browser in questa fase, di solito verrà segnalato come non sicuro:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Per attivare la crittografia, apri il dominio nel tuo pannello Plesk e vai su **Certificati SSL/TLS**. Si aprirà il menu corrispondente:

![img](https://screensaver01.zap-hosting.com/index.php/s/8rSr7Jt3DsjDzBY/download)

Da qui puoi richiedere un certificato gratuito Let's Encrypt. Durante la richiesta, devi fornire un indirizzo email valido e selezionare i nomi di dominio da proteggere. Nella maggior parte dei casi, vengono selezionati sia il dominio principale che il sottodominio www, a patto che la voce www esista nella configurazione DNS:

![img](https://screensaver01.zap-hosting.com/index.php/s/LTFN73ekPjtikwp/preview)

Dopo aver confermato la richiesta cliccando su **Ottienilo gratis**, Plesk comunica con Let's Encrypt e rilascia automaticamente il certificato. Una volta creato con successo, HTTPS dovrebbe essere forzato attivando il redirect permanente da HTTP a HTTPS nelle impostazioni di hosting:

![img](https://screensaver01.zap-hosting.com/index.php/s/BN7AMzG6MyMKb38/preview)

Dopo l’attivazione, tutti i visitatori verranno automaticamente reindirizzati alla versione HTTPS criptata del tuo sito. Puoi verificare l’installazione aprendo il tuo dominio con https nel browser.



## Proteggere Tutti i Sottodomini con un Certificato Wildcard

Se usi o prevedi di usare più sottodomini, un certificato wildcard è la soluzione più smart. Protegge il dominio principale e tutti i sottodomini esistenti e futuri. Per richiedere un certificato wildcard, apri di nuovo il menu **Certificati SSL/TLS**:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Seleziona l’opzione per rinnovare o richiedere un certificato Let's Encrypt. Attiva l’opzione per proteggere il dominio wildcard:

![img](https://screensaver01.zap-hosting.com/index.php/s/ZMcdJk9wCzifBmq/preview)

Dopo aver confermato la richiesta, Plesk mostrerà un box informativo blu con un record DNS TXT che devi creare:

![img](https://screensaver01.zap-hosting.com/index.php/s/wnbNfKeTMsCdsy9/preview)

Questo record TXT deve essere aggiunto alla zona DNS del tuo dominio esattamente come indicato. Conferma la proprietà del dominio e permette a Let's Encrypt di validare la richiesta. Una voce DNS sarà simile al seguente esempio:

![img](https://screensaver01.zap-hosting.com/index.php/s/tDtDaERR7twzaMr/preview)

:::warning Ritardo nella Propagazione DNS
La propagazione DNS può richiedere fino a 24 ore prima che il record TXT sia accessibile globalmente. Durante questo periodo, la validazione potrebbe fallire perché alcuni server DNS restituiscono ancora informazioni obsolete. Se succede, aspetta che il record sia completamente propagato e riprova la verifica.
:::



Per assicurarti che il record TXT sia stato propagato correttamente e sia accessibile pubblicamente, puoi verificarlo con uno strumento esterno di lookup DNS come MXToolbox SuperTool:

https://mxtoolbox.com/SuperTool.aspx

Apri il sito e seleziona l’opzione **TXT Lookup**. Inserisci il nome host completo fornito da Plesk, di solito nel formato `_acme-challenge.tuodominio.com`, e avvia la ricerca. Lo strumento interrogherà i server DNS pubblici e mostrerà i record TXT attualmente visibili.

Se il valore di verifica corretto viene mostrato esattamente come in Plesk, la voce DNS è stata propagata con successo e Let's Encrypt può validare la proprietà del dominio. Se non viene restituito alcun risultato o il valore è diverso, la propagazione DNS potrebbe essere ancora in corso. In questo caso, aspetta e ripeti la ricerca dopo un po’ finché la voce corretta non sarà visibile in tutto il mondo.

![img](https://screensaver01.zap-hosting.com/index.php/s/iFP5P8SY6oSXQBW/download)

Una volta che il record è visibile, torna su Plesk e avvia di nuovo la validazione. Se va a buon fine, il certificato wildcard verrà emesso e mostrato come protetto. Da questo momento in poi, ogni nuovo sottodominio creato sarà automaticamente protetto.



## Conclusione

Congratulazioni! Il tuo sito è ora protetto con crittografia SSL. Tutti i dati trasmessi tra il tuo server e i visitatori sono al sicuro, i browser riconoscono il tuo dominio come affidabile e HTTPS viene forzato automaticamente.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />