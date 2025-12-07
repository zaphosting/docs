---
id: webspace-external-domain
title: "Webspace: Collegare un dominio esterno"
description: "Scopri come collegare il tuo dominio esterno allo webspace ZAP-Hosting per un sito e email senza intoppi → Scopri di più ora"
sidebar_label: Collega dominio esterno
services:
  - webspace
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Hai già un dominio registrato con un altro provider e vuoi collegarlo al tuo prodotto webspace ZAP-Hosting? Nessun problema! Per farlo, devi modificare le impostazioni DNS presso il tuo provider di dominio. In questa guida ti mostriamo esattamente quali record DNS devi creare affinché il tuo dominio punti correttamente al tuo webspace.

:::info Trasferisci il tuo dominio
Trasferisci il tuo dominio su ZAP-Hosting e goditi una gestione più semplice. Collega il tuo dominio al webspace con pochi click e approfitta di tante funzionalità extra. Scopri come trasferire il tuo dominio nella nostra guida [Trasferimento Dominio](domain-transfer.md).
:::

<InlineVoucher />



## Collega il dominio in Plesk

Prima di poter collegare il tuo dominio esterno al webspace, devi prima aggiungere il dominio in **Plesk**. Per farlo, aggiungi il tuo dominio nella sezione **Impostazioni Hosting**. Se non sai ancora come fare, trovi istruzioni dettagliate nella nostra guida [Aggiungi Dominio](https://zap-hosting.com/guides/docs/webspace-adddomain).

![img](https://screensaver01.zap-hosting.com/index.php/s/Kx7KDPEk3t6Tcbd/download)



## Configura le impostazioni DNS

Per collegare il tuo dominio esterno al webspace ZAP-Hosting, devi prima modificare le impostazioni DNS presso il provider dove hai registrato il dominio. Per far funzionare correttamente sito e email, il dominio deve sapere a quale server indirizzare visitatori e traffico mail. Questo si fa creando i record DNS necessari.

Ti servirà l’indirizzo IP della tua istanza webspace per configurare i record A. Puoi trovare questa info direttamente nel tuo dashboard ZAP webspace.

![img](https://screensaver01.zap-hosting.com/index.php/s/DzpqenW4FwP6fbf/download)

Una volta che hai l’indirizzo IP, puoi aggiungere i record DNS necessari presso il tuo provider di dominio. Questi includono record A per puntare il dominio al webspace, oltre a record MX e TXT per gestire la consegna delle email e la verifica del dominio.

Per info più dettagliate su come funzionano i vari tipi di record DNS e a cosa servono, ti consigliamo di dare un’occhiata alla nostra guida [Record Dominio](domain-records.md).

Qui sotto trovi una tabella con tutti i record DNS richiesti per la tua configurazione:

| Nome                           | Tipo | Valore                          | TTL  | Prio |
| ------------------------------ | ---- | ------------------------------- | ---- | ---- |
| *                              | A    | Indirizzo IP dell’istanza webspace | 3600 | 0    |
| mail                           | A    | Indirizzo IP dell’istanza webspace | 3600 | 0    |
| www                            | A    | Indirizzo IP dell’istanza webspace | 3600 | 0    |
| domain.tld.                    | A    | Indirizzo IP dell’istanza webspace | 3600 | 0    |
| domain.tld.                    | MX   | v=DKIM1;k=rsa;p=MIIBIjA......   | 3600 | 10   |
| default._domainkey.domain.tld. | TXT  | plesk-steve.zap.cloud.          | 3600 | 0    |
| domain.tld.                    | TXT  | v=spf1 a mx ~all                | 3600 | 0    |
| _dmarc.domain.tld.             | TXT  | v=DMARC1; p=none                | 3600 | 0    |

:::warning Le modifiche DNS possono richiedere tempo

Le modifiche alle impostazioni DNS possono impiegare fino a 24 ore per propagarsi completamente in tutto il mondo. Durante questo periodo, il tuo dominio potrebbe non puntare subito al nuovo webspace o ai servizi email, quindi abbi pazienza mentre le modifiche si attivano.
:::




## Conclusione
Seguendo questi passaggi configurerai e collegherai il tuo dominio al webspace. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂


<InlineVoucher />