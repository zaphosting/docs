---
id: domain-cloudflare-setup
title: "Domain: Configurare del dominio con Cloudflare"
description: "Scopri come migliorare la sicurezza e le prestazioni del tuo sito web usando Cloudflare con i domini ZAP-Hosting → Scopri di più ora"
sidebar_label: Configurazione Cloudflare
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Cloudflare è uno dei provider CDN (Content Delivery Network) più popolari che potenzia i tuoi siti web con una sicurezza migliorata, mitigazione DDoS e una gestione semplice tramite il loro pannello. Questa guida ti spiega come configurare il tuo dominio ZAP-Hosting per usarlo con Cloudflare tramite ExpertDNS e la modifica dei nameserver.

## Preparazione
Per seguire questa guida ti serviranno:
- Un dominio nel tuo account ZAP-Hosting
- Un account Cloudflare

## Passo 1: Attivare l’opzione ExpertDNS

Inizia accedendo al pannello web del dominio scelto nel tuo account ZAP-Hosting. Trova l’opzione **ExpertDNS**, attivala spuntando la casella e premi salva.

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## Passo 2: Configurare il dominio su Cloudflare

Ora passiamo a Cloudflare: effettua il login nel tuo account. Una volta dentro, aggiungi il tuo sito seguendo i passaggi guidati direttamente da Cloudflare.

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

Arrivato al passo 4, ti verranno forniti i nameserver da configurare.

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

Torna al pannello web del tuo dominio e vai nella sezione **ExpertDNS**. Qui elimina i nameserver predefiniti di ZAP-Hosting e inserisci quelli forniti da Cloudflare.

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

Ricordati di salvare le modifiche.

## Passo 3: Completare la configurazione su Cloudflare

Ritorna al dashboard di Cloudflare. Nella pagina di setup del dominio, troverai un pulsante per forzare il controllo dei nameserver da parte di Cloudflare.

:::info
La propagazione dei nameserver può richiedere fino a 24 ore, ma di solito avviene molto più velocemente.
:::

Quando Cloudflare rileva i cambiamenti, riceverai un’email di conferma che la configurazione è pronta. Puoi anche verificarlo nel dashboard: sotto il dominio vedrai lo stato **Active**.

Hai integrato con successo il tuo dominio con Cloudflare, sbloccando prestazioni, sicurezza e gestione top per il tuo sito.

<InlineVoucher />