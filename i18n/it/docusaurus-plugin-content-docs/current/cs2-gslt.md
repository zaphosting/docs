---
id: cs2-gslt
title: "Counter-Strike 2: Crea un GSLT (Steam Game Server Login Token)"
description: "Scopri come autenticare e proteggere il tuo server di gioco dedicato con un Steam Game Server Login Token per una visibilità e protezione ottimali del server → Scopri di più"
sidebar_label: Crea GSLT
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Il **GSLT (Game Server Login Token)** è un token di accesso richiesto da Steam/Valve per gestire server dedicati di alcuni giochi. È collegato a un account Steam e garantisce che il server sia correttamente autenticato.

Senza un GSLT valido, i server interessati potrebbero non comparire nella lista pubblica dei server o non poter utilizzare la protezione VAC.

<InlineVoucher />



## Requisiti

Per usare un Game Server Login Token (GSLT), il tuo account Steam non deve essere limitato, bannato o escluso dalla community. Deve essere collegato a uno smartphone verificato e devi possedere il gioco che vuoi ospitare. Puoi creare fino a 1000 token per account.

Ricorda che sei completamente responsabile dei tuoi token. Se un token viene usato in modo improprio o bannato, potresti perdere l’accesso al gioco collegato in modo permanente. Non condividere mai i tuoi token; se lo hai fatto, cancellali subito. Quando resetti la password Steam, tutti i token vengono rigenerati automaticamente. I token inutilizzati per molto tempo scadono, ma possono essere ricreati in qualsiasi momento.



## Crea GSLT
Per creare un Game Server Login Token, accedi con il tuo account Steam e vai su [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Una volta loggato, puoi creare un nuovo token usando il modulo sulla pagina. Nel campo **App ID**, inserisci l’App ID `730` che corrisponde a **Counter-Strike 2**. Assicurati di inserire l’ID corretto, altrimenti il token non funzionerà.

Nel campo **Memo** puoi aggiungere una descrizione a tua scelta. Ti aiuta a identificare lo scopo del token in seguito, ad esempio il nome o il ruolo del server. Dopo aver inserito entrambi i valori, clicca su **Create** per generare il token. Il token verrà mostrato e potrà essere usato nella configurazione di avvio del tuo server.

![img](https://screensaver01.zap-hosting.com/index.php/s/rXyykRZKBYe95qY/download)

## Configurazione del server

Ora il token di accesso deve essere aggiunto alla configurazione del tuo server. Per farlo, apri l’interfaccia di gestione del tuo game server e vai nella sezione **Settings**. Inserisci il token nel campo chiamato **GSL Token** e salva.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Gestire più server di Counter-Strike 2
Se gestisci più server di **Counter-Strike 2**, ti serve un GSLT per ciascun server. <u>**Non**</u> è possibile usare un singolo GSLT per più server contemporaneamente.
:::



## Conclusione

Il GSLT è stato creato e applicato alla configurazione del tuo server. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />