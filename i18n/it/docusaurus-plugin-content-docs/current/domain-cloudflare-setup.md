---
id: domain-cloudflare-setup
title: "Dominio: Configurare il dominio con Cloudflare"
description: "Scopri come migliorare la sicurezza e le prestazioni del tuo sito web usando Cloudflare con i domini ZAP-Hosting → Scopri di più ora"
sidebar_label: Configurazione Cloudflare
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Cloudflare è un provider CDN (Content Delivery Network) super popolare che potenzia i tuoi siti web con una sicurezza migliorata, mitigazione DDoS e una gestione facile tramite il loro pannello. Questa guida ti spiega come configurare il tuo dominio ZAP-Hosting per usarlo con Cloudflare tramite ExpertDNS e la modifica dei nameserver.

<InlineVoucher />

## Preparazione
Per seguire questa guida ti serviranno:
- Un dominio nel tuo account ZAP-Hosting
- Un account Cloudflare
  
## Passo 1: Attivare l’opzione ExpertDNS

Inizia accedendo al pannello web del dominio che hai scelto nel tuo account ZAP-Hosting. Trova l’opzione **ExpertDNS**, attivala spuntando la casella e premi salva.

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## Passo 2: Configurare il dominio su Cloudflare

Ora passiamo a Cloudflare: fai il login nel tuo account. Una volta dentro, aggiungi il tuo sito web al dashboard seguendo i passaggi di setup che Cloudflare ti indica.

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

Quando arrivi al passo 4, ti verranno forniti i nameserver da configurare.

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

Torna al pannello web del tuo dominio e vai nella sezione **ExpertDNS**. Qui elimina i nameserver di default di ZAP-Hosting e sostituiscili con quelli che ti ha dato Cloudflare.

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

Ricordati di salvare le modifiche appena finite.

## Passo 3: Completare la configurazione su Cloudflare

Torna al dashboard di Cloudflare. Nella pagina di setup del dominio, dovresti vedere un pulsante per forzare Cloudflare a ricontrollare i nameserver.

:::info
Il riconoscimento delle modifiche ai nameserver può richiedere fino a 24 ore, ma di solito avviene molto prima.
:::

Quando Cloudflare rileva i cambiamenti, riceverai una mail che ti conferma che la configurazione è pronta. Puoi anche controllare direttamente nel dashboard di Cloudflare: se tutto è andato a buon fine, sotto il dominio vedrai scritto **Active**.

Hai integrato con successo il tuo dominio con Cloudflare, sbloccando prestazioni, sicurezza e gestione potenziate per il tuo sito.

<InlineVoucher />