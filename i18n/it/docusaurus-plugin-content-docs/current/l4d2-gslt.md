---
id: l4d2-gslt
title: "Left 4 Dead 2: Crea un GSLT (Steam Game Server Login Token)"
description: "Scopri come autenticare i server di gioco con il GSLT di Steam per la lista pubblica e la protezione VAC → Scopri di più ora"
sidebar_label: Crea GSLT
services:
  - gameserver-l4d2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Il **GSLT (Game Server Login Token)** è un token di accesso richiesto da Steam/Valve per gestire server dedicati di alcuni giochi. È collegato a un account Steam e garantisce che il server sia autenticato correttamente.

Senza un GSLT valido, i server interessati potrebbero non comparire nella lista pubblica dei server o non poter usare la protezione VAC.

<InlineVoucher />



## Requisiti

Per usare un Game Server Login Token (GSLT), il tuo account Steam non deve essere limitato, bannato o escluso dalla community. Deve essere collegato a uno smartphone verificato e devi possedere il gioco che vuoi ospitare. Puoi creare fino a 1000 token per account.

Ricorda che sei completamente responsabile dei tuoi token. Se un token viene usato in modo scorretto o bannato, potresti perdere l’accesso al gioco collegato in modo permanente. Non condividere mai i tuoi token; se lo hai fatto, cancellali subito. Quando resetti la password Steam, tutti i token vengono rigenerati automaticamente. I token inutilizzati per molto tempo scadono, ma possono essere ricreati in qualsiasi momento.



## Crea GSLT
Per creare un Game Server Login Token, accedi con il tuo account Steam e vai su [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Una volta loggato, puoi creare un nuovo token usando il modulo sulla pagina. Nel campo **App ID**, inserisci l’App ID `550` che corrisponde a **Left 4 Dead 2**. Assicurati di inserire l’ID corretto, perché il token non funzionerà con un valore sbagliato.

Nel campo **Memo** puoi aggiungere una descrizione a tua scelta. Ti aiuta a identificare lo scopo del token in seguito, ad esempio il nome o il ruolo del server. Dopo aver inserito entrambi i valori, clicca su **Create** per generare il token. Il token verrà mostrato e potrà essere usato nella configurazione di avvio del tuo server.

![img](https://screensaver01.zap-hosting.com/index.php/s/fTgmTPA7q8k9TAd/download)

## Configurazione server

Ora devi aggiungere il token di login alla configurazione del server. Per farlo, apri l’interfaccia di gestione del tuo game server e vai nella sezione **Settings**. Inserisci il token nel campo chiamato **GSL Token** e salva.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Gestire più server Left 4 Dead 2
Se gestisci più server **Left 4 Dead 2**, ti serve un GSLT per ciascun server. <u>**Non**</u> è possibile usare un singolo GSLT per più server di gioco.
:::



## Conclusione

Il GSLT è stato creato e applicato alla configurazione del tuo server. Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />