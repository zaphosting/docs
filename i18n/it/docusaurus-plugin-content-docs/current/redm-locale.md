---
id: redm-locale
title: "RedM: Cambia lingua / posizione (bandiera)"
description: "Scopri come personalizzare le lingue e le bandiere del server RedM per migliorare l’esperienza di gioco e la localizzazione → Scopri di più ora"
sidebar_label: Lingua / posizione (bandiera)
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server RedM possono essere mostrati in diverse lingue. Questo vale sia per la visualizzazione della bandiera del server nel browser dei server, sia per la lingua attivamente usata sul server. La lingua può essere personalizzata se necessario. Così hai la possibilità di scegliere la tua lingua e la bandiera del paese per il tuo server.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHgoDfcsN4XX8Jb/preview)

<InlineVoucher />

## Configurazione

La configurazione della bandiera e della lingua del server avviene tramite l’opzione Locales. La configurazione dei locales si fa tramite il file di configurazione del server. Questo è definito dal valore del comando **sets locale**. Di default viene mostrata la lingua inglese e l’Antartide come posizione (bandiera).

### Apri il file di configurazione del server

Il file di configurazione del server `server.cfg` è accessibile nell’interfaccia txAdmin sotto `CFG Editor`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/kHeJyeXiKDfSY2c/preview)



### Trova il codice locale/lingua per la tua lingua

La definizione della lingua/visualizzazione avviene tramite i locales (codici lingua/codici paese) basati sugli standard ISO 639-1/ISO 3166-1. Abbiamo riassunto una piccola lista dei paesi/lingue più rilevanti qui sotto. La lista reale è ovviamente molto più ampia:

| Paese          | Lingua     | Locale |
| -------------- | ---------- | ------ |
| Germania       | Tedesco    | de-DE  |
| USA            | Inglese    | en-US  |
| Canada         | Inglese    | en-CA  |
| Australia      | Inglese    | en-AU  |
| Regno Unito    | Inglese    | en-GB  |
| Finlandia      | Finlandese | fi-FI  |
| Francia        | Francese   | fr-FR  |
| Paesi Bassi    | Olandese   | nl-NL  |
| Portogallo     | Portoghese | pt-PT  |
| Brasile        | Portoghese | pt-BR  |
| Spagna         | Spagnolo   | es-ES  |
| Singapore      | Inglese    | en-SG  |

:::caution 
La visualizzazione della bandiera del server è generalmente supportata da tutti i paesi disponibili. Tuttavia, non tutte le risorse contengono tutte le lingue. Quindi assicurati in anticipo che il tuo paese/lingua sia supportato!
:::



### Modifica il contenuto del file di configurazione del server

Una volta aperto il file di configurazione e individuato il codice locale/lingua, puoi procedere con la configurazione. Prima devi controllare se il comando **sets locale** esiste già. Se no, l’input per questo comando è così:

```
# Un identificatore locale valido per la lingua principale del tuo server.
# Per esempio "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "root-AQ" 
# per favore SOSTITUISCI root-AQ nella riga SOPRA con una lingua reale! :)
```

Il valore del comando **sets locale** è di default **root-AQ**. Questo va modificato ora. Per esempio, se vuoi usare la bandiera USA e l’inglese come lingua, useresti **en-US** come valore in questo caso. Salva la modifica che hai fatto.


## Conclusione

L’ultimo passo è riavviare il server per assicurarti che la modifica venga applicata. Dopo puoi ricaricare la lista server nel tuo client RedM e dovresti vedere la modifica appena fatta. Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />