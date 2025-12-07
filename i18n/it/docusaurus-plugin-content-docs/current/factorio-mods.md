---
id: factorio-mods
title: "Factorio: Installare Mods/DLC sul tuo server Factorio"
description: "Scopri come migliorare la tua esperienza di gioco in Factorio attivando DLC e aggiungendo mod per un gameplay personalizzato → Scopri di più ora"
sidebar_label: Installa Mods/DLC
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/factorio-mods.json';

## Introduzione

Factorio supporta nativamente le mod, permettendoti di aggiungere facilmente una vasta gamma di mod al tuo gioco e server, oltre ai DLC acquistati. In questa guida vedremo come attivare i DLC e installare mod sia sul client che sul server Factorio.

<InlineVoucher />

## Preparazione

Puoi visitare il sito ufficiale delle [mod di Factorio](https://mods.factorio.com/) per esplorare le mod disponibili. Qui troverai una libreria enorme di mod gratuite create dalla community, suddivise in tantissime categorie diverse.

:::tip
Assicurati che le mod che scarichi siano compatibili con la versione del tuo server Factorio.
:::

## Attivare i DLC

Con l’aggiornamento Factorio 2.0 è stato introdotto il primo DLC ufficiale chiamato Space Age. Per gestirlo, è stata aggiunta una nuova opzione nel pannello web del server che ti permette di attivare o disattivare il DLC.

<YouTube videoId="i9CuAsCxUsk" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BRa5saY3L76xe5F/preview" title="Attiva il DLC Space Age di Factorio" description="Ti è più chiaro vedere le cose in azione? Ci pensiamo noi! Guarda il nostro video che ti spiega tutto passo passo. Perfetto se sei di fretta o se preferisci imparare in modo super coinvolgente!"/>

Vai al pannello web del tuo prodotto e apri la sezione **Impostazioni**. Scorri fino a trovare l’opzione **Space Age DLC**, che dovrebbe essere attivata di default.

![](https://screensaver01.zap-hosting.com/index.php/s/T5G5GrEzwoxM3Xk/preview)

Attiva o disattiva la funzione e clicca sul pulsante verde **Salva** in fondo alla pagina. Hai appena attivato con successo un DLC di Factorio.

## Aggiungere & Caricare Mods

Ora che hai scaricato le mod che vuoi, devi caricarle sul tuo server Factorio tramite FTP. Usa la nostra guida su [Accesso FTP](gameserver-ftpaccess.md) per collegarti facilmente al server.

:::note
Il server deve essere spento prima di aggiungere o modificare le mod, altrimenti le modifiche potrebbero non essere salvate.
:::

Quando sei pronto, vai nella cartella seguente e carica le mod scaricate, che devono essere in formato `.zip`.

```
../factorio/saves/mods
```

![](https://screensaver01.zap-hosting.com/index.php/s/APFEnmg29jBCFKn/preview)

:::tip
Quando usi le mod, devono essere sincronizzate tra client e server. Factorio rende tutto super semplice: la prima volta che entri nel server dopo aver cambiato mod, il gioco ti chiederà automaticamente di sincronizzarle.
:::

Infine, riavvia il server per attivare e installare automaticamente le mod. Se incontri errori, tipo il server che si spegne da solo, controlla la sezione **Informazioni->Registro Eventi** nel pannello web per vedere i messaggi di errore. Spesso è un problema di versioni non allineate.

## Mod Popolari

Cerchi ancora le mod perfette per il tuo server? Dai un’occhiata alla nostra lista selezionata delle mod più popolari e consigliate per migliorare il gameplay e dare quel tocco finale al tuo server. Trova l’ispirazione giusta e scegli le mod che fanno al caso tuo.

<SearchableItemList items={items} />

## Conclusione

Complimenti, hai installato con successo le mod sul tuo server Factorio! Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />