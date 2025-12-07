---
id: scp-newroles
title: "SCP Secret Laboratory: Server - Aggiungere nuovi ruoli"
description: "Scopri come creare e personalizzare i ruoli del server con permessi specifici per una gestione remota efficace → Scopri di più ora"
sidebar_label: Aggiungi nuovi ruoli
services:
  - gameserver-scp 
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Visualizza la Config
I nuovi ruoli si inseriscono nel file "config_remoteadmin.txt".  
Puoi trovare questo file di configurazione cliccando su "Configs" nell’interfaccia del tuo server.

![](https://screensaver01.zap-hosting.com/index.php/s/7JEE5gLDyF29mZR/preview)

Qui puoi cercare la Config mostrata sopra e cliccare sull’icona “occhio” a destra per aprirla.

## Copia ruoli esistenti
Con la Config aperta, cerca queste voci:

![](https://screensaver01.zap-hosting.com/index.php/s/tDBFmR5g44gxpp5/preview)

Questi sono ruoli di esempio già inseriti.  
Inseriremo una nuova voce sotto.  
Per farlo, copiamo il blocco di uno dei ruoli sopra e lo incolliamo sotto l’ultimo ruolo.  
Nel nostro esempio, abbiamo copiato il ruolo "Moderator" e lo abbiamo incollato sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/ELHDZCDcT6WDydJ/preview)

## Aggiungi un ruolo personalizzato
Ora possiamo modificare il blocco appena inserito partendo dal ruolo esistente e inserire i valori che vogliamo.  
Nel nostro esempio abbiamo usato il nome "ZAP":

![](https://screensaver01.zap-hosting.com/index.php/s/6gtEmbeBjP5A8zy/preview)

Una volta fatto questo, dobbiamo aggiungere il ruolo alla lista dei ruoli disponibili.  
Anche questa sezione si trova poco più in basso nella stessa Config.

![](https://screensaver01.zap-hosting.com/index.php/s/qNNKnwYaYSjy2XK/preview)

Inseriamo quindi il nostro ruolo sotto il ruolo "moderator".  
:::info
ATTENZIONE: Fai attenzione agli spazi prima e dopo il "-"!
:::

## Permessi
In fondo al file "config_remoteadmin.txt" possiamo modificare i permessi per i vari ruoli.  
Se vogliamo assegnare un permesso al nostro ruolo, inseriamo il nome del ruolo tra parentesi.  
Come mostrato in questo esempio:

![](https://screensaver01.zap-hosting.com/index.php/s/kRSiKjYyWsK2RD3/preview)


<InlineVoucher />