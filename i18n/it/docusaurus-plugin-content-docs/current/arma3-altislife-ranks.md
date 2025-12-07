---
id: arma3-altislife-ranks
title: "Arma 3: Aggiungere gradi a un server Altis Life"
description: "Scopri come assegnare e gestire i gradi dei giocatori come Poliziotto, Medico e Admin in Arma 3 per migliorare il gameplay e i ruoli sul server → Scopri di più ora"
sidebar_label: Gradi Altis Life
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In Arma 3 ci sono diversi gradi che possono essere assegnati a un giocatore. Questi includono Poliziotto, Medico e i vari gradi Admin.  
A seconda del server, possono esserci altri gradi se ad esempio viene aggiunta una nuova fazione o professione.  
Qui sotto imparerai come assegnare i gradi per Poliziotti, Medici e Amministratori nel gioco, sempre usando il database nella tabella **players**.

:::info
IMPORTANTE: Per trovare il nome del giocatore nel database devi connetterti al server almeno una volta!
:::

<InlineVoucher />

## Aprire il database

Per prima cosa devi andare nel tuo database, che puoi raggiungere dal menu a sinistra sotto **Tools** > **Databases**:

![](https://screensaver01.zap-hosting.com/index.php/s/Y8mZZ7JCNqr9zZM/preview)

Il login al database si trova cliccando su questa icona blu, a sinistra trovi anche i dati di accesso (username e password) per il tuo database:

![](https://screensaver01.zap-hosting.com/index.php/s/3tta9MQ5XcdZk98/preview)

Dopo aver cliccato su questo pulsante, entri in phpMyAdmin, l’interfaccia di gestione del database.  
Qui scegli il nome del tuo database sulla sinistra:

![](https://screensaver01.zap-hosting.com/index.php/s/YfTpyoXmArbtBwb/preview)

Poi selezioni la tabella **players** con un click sinistro, dove potrai assegnare i gradi:

![](https://screensaver01.zap-hosting.com/index.php/s/A643Ds2LFjFCzba/preview)

Cerca il nome del giocatore a cui vuoi assegnare un grado e clicca su **Edit**:

![](https://screensaver01.zap-hosting.com/index.php/s/KrnpZMyeiL8YXAm/preview)

## Assegnare i gradi per Poliziotti e Medici

I campi per il livello Poliziotto e Medico li trovi in cima alla lista:

![](https://screensaver01.zap-hosting.com/index.php/s/z5KoxwqHf7XMcFd/preview)

Ora puoi facilmente selezionare il livello del grado dal menu a tendina, disponibili sono livelli da 1 a 7 per i poliziotti e da 1 a 5 per i medici.  
Più alto è il livello, più permessi ha il Poliziotto o il Medico nel gioco, questo influisce tra le altre cose sulle armi e i veicoli disponibili.

![](https://screensaver01.zap-hosting.com/index.php/s/bKr4MHNy5LYnWYr/preview)

## Assegnare i gradi per gli amministratori (livello admin)

Imposti il livello admin come descritto sopra, solo che la voce si trova più in basso:

![](https://screensaver01.zap-hosting.com/index.php/s/fc5G93bWkdW7nAj/preview)

Anche qui puoi scegliere tra 5 livelli diversi dal menu a tendina. Più alto è il livello, più diritti ha l’amministratore nel gioco.

Per salvare le modifiche, clicca semplicemente sul pulsante **GO** in basso a destra:

![](https://screensaver01.zap-hosting.com/index.php/s/y85Zwq3J8zM9sFi/preview)

I gradi sono stati salvati e diventano attivi per il giocatore che deve solo riconnettersi al server, non serve riavviare il server.

<InlineVoucher />