---
id: vserver-ssh-default
title: "VPS: Gestisci le chiavi SSH predefinite nel profilo"
description: "Scopri come automatizzare la configurazione delle chiavi SSH per un accesso più veloce al server e installazioni prodotto più fluide con ZAP-Hosting → Scopri di più ora"
sidebar_label: Chiavi SSH predefinite
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Una delle ultime novità nel nostro webinterface ZAP-Hosting è la possibilità di aggiungere chiavi SSH predefinite al tuo account direttamente dal sito. Il vantaggio pazzesco? Le chiavi SSH configurate nella tua pagina Profilo verranno impostate automaticamente di default e usate durante la prima configurazione del prodotto o la reinstallazione del sistema operativo. Così risparmi tempo e non devi più configurare manualmente le chiavi SSH.

<InlineVoucher />

## Requisiti
Per usare questa funzione devi avere una chiave SSH già generata. Se ce l’hai, puoi passare alla sezione successiva.

Per generare una chiave SSH, ti consigliamo di andare nella sezione **Informazioni->Accesso & Sicurezza** nel webinterface del tuo vServer.

![](https://screensaver01.zap-hosting.com/index.php/s/N9FxTpdfibwCWSD/preview)

Qui vedrai un pulsante verde **Genera chiave SSH**. Premilo e la tua chiave privata SSH verrà scaricata automaticamente sul tuo PC. Questa è la chiave che userai per connetterti al server una volta configurato SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/tdYfxJYNBFC2R9k/preview)

Ora devi salvare la chiave pubblica che trovi nel prompt, perché è quella che dovrai inserire quando crei la chiave SSH nel tuo profilo.

![](https://screensaver01.zap-hosting.com/index.php/s/Tc9MEGamAC9dDF3/preview)

Vai alla sezione successiva quando sei pronto.

## Gestione chiavi SSH nel profilo
Gestire le chiavi SSH predefinite nel tuo account è semplice. Vai alla tua **[pagina Profilo ZAP-Hosting](https://zap-hosting.com/en/customer/home/profile/)** e scorri fino alla sezione **Chiavi SSH standard**.

![](https://screensaver01.zap-hosting.com/index.php/s/QzefcYZWPGz3rJr/preview)

### Aggiungere una nuova chiave
Per aggiungere una chiave, premi prima l’icona verde con il + per aprire il prompt di creazione. Qui scegli un nome adatto per la tua chiave SSH.

Poi incolla la tua chiave pubblica SSH nel secondo campo. La chiave deve essere in formato OpenSSH, che inizia con `ssh-rsa` e termina con un suffisso. Quando hai finito, premi il pulsante verde **Salva** per aggiungere la chiave.

![](https://screensaver01.zap-hosting.com/index.php/s/CBTcDSiBLfNYi2R/preview)

:::tip
Assicurati di inserire la **chiave pubblica SSH** e non la chiave privata. La chiave privata serve per autenticarti durante il login usando la chiave pubblica.
:::

Hai aggiunto con successo una chiave SSH predefinita al tuo account ZAP-Hosting.

### Modificare o rimuovere una chiave
Per modificare una chiave, premi l’icona blu a forma di occhio che apre un prompt. Qui puoi vedere i dettagli attuali e modificarli direttamente, poi salvare.

Per eliminare una chiave, premi l’icona rossa del cestino che cancellerà quella chiave specifica.

![](https://screensaver01.zap-hosting.com/index.php/s/56mPcDswpZBaHms/preview)

<InlineVoucher />