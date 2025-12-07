---
id: gmod-gslt
title: "Garry’s Mod: Crea un GSLT (Steam Game Server Login Token)"
description: "Scopri come autenticare il tuo server di gioco con un Steam Game Server Login Token per una corretta visualizzazione e protezione VAC → Scopri di più ora"
sidebar_label: Crea GSLT
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Il **GSLT (Game Server Login Token)** è un token di accesso richiesto da Steam/Valve per gestire server dedicati di alcuni giochi. È collegato a un account Steam e garantisce che il server sia autenticato correttamente.

Senza un GSLT valido, i server interessati potrebbero non comparire nella lista pubblica dei server o non poter utilizzare la protezione VAC.

<InlineVoucher />



## Requisiti

Per usare un Game Server Login Token (GSLT), il tuo account Steam non deve essere limitato, bannato o escluso dalla community. Deve essere collegato a uno smartphone verificato e devi possedere il gioco che vuoi ospitare. Puoi creare fino a 1000 token per account.

Ricorda che sei completamente responsabile dei tuoi token. Se un token viene usato in modo scorretto o bannato, potresti perdere l’accesso al gioco collegato in modo permanente. Non condividere mai i tuoi token; se lo hai fatto, cancellali subito. Quando resetti la password Steam, tutti i token vengono rigenerati automaticamente. I token inutilizzati per molto tempo scadono, ma possono essere ricreati in qualsiasi momento.



## Crea GSLT
Per creare un Game Server Login Token, accedi con il tuo account Steam e vai su [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Una volta loggato, puoi creare un nuovo token usando il modulo sulla pagina. Nel campo **App ID**, inserisci l’ID `4000` che corrisponde a **Garry’s Mod**. Assicurati di inserire l’ID corretto, altrimenti il token non funzionerà.

Nel campo **Memo** puoi aggiungere una descrizione a tua scelta. Ti aiuterà a riconoscere lo scopo del token in futuro, ad esempio il nome o il ruolo del server. Dopo aver inserito entrambi i valori, clicca su **Create** per generare il token. Il token verrà mostrato e potrà essere usato nella configurazione di avvio del tuo server.

![img](https://screensaver01.zap-hosting.com/index.php/s/Yn572Ze42ZsXNPL/download)

## Configurazione server

Ora devi aggiungere il token alla configurazione del tuo server. Apri il pannello di gestione del tuo game server e vai nella sezione **Impostazioni**. Inserisci il token nel campo chiamato **GSL Token** e salva.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Gestire più server Garry’s Mod
Se gestisci più server **Garry’s Mod**, ti serve un GSLT per ciascun server. <u>**Non**</u> è possibile usare un singolo GSLT per più server contemporaneamente.
:::



## Conclusione

Hai creato il GSLT e lo hai applicato alla configurazione del tuo server. Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />