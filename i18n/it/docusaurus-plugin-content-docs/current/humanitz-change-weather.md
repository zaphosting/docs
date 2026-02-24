---
id: humanitz-change-weather
title: "HumanitZ: Cambia il Meteo"
description: "Scopri come modificare e personalizzare la frequenza e i tipi di meteo sul tuo server HumanitZ → Scopri di più ora"
sidebar_label: "Cambia il Meteo"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

I pattern meteorologici influenzano il gameplay di sopravvivenza, la visibilità e l’atmosfera del mondo in HumanitZ. Che tu voglia un ambiente più tranquillo con cieli per lo più sereni o un mondo più duro con tempeste e bufere frequenti, modificare le impostazioni del meteo ti permette di controllare quanto spesso si verificano i vari tipi di condizioni atmosferiche.

<InlineVoucher />

## Configurazione

Le impostazioni del meteo sono gestite nel file `GameServerSettings.ini`. Puoi accedere a questo file dal pannello di gestione del server sotto **Configs**. All’interno del file di configurazione, trova i seguenti parametri:

```
;Qui sotto puoi modificare le probabilità di ogni tipo di meteo. La stagione corrente determinerà comunque quali tipi di meteo possono comparire.
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=1
Weather_Thunderstorm=1
Weather_LightSnow=1
Weather_Snow=1
Weather_Blizzard=1
```

Ogni impostazione rappresenta le **probabilità relative** che il tipo di meteo corrispondente si verifichi. Valori più alti aumentano la possibilità che quel tipo di meteo venga scelto durante la generazione del meteo, mentre valori più bassi la diminuiscono.

Per esempio:

- Impostare `Weather_ClearSky=3` aumenta la probabilità di cieli sereni rispetto agli altri tipi di meteo  
- Ridurre `Weather_Blizzard=0` disabilita praticamente le bufere (a meno che la logica stagionale non le imponga)



### Meteo Calmo

Questo esempio dà priorità a un meteo tranquillo e riduce le condizioni estreme:

```
Weather_ClearSky=3
Weather_Cloudy=2
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=0
Weather_Thunderstorm=0
Weather_LightSnow=1
Weather_Snow=0
Weather_Blizzard=0
```



### Meteo Estremo

Questo esempio aumenta le probabilità di meteo severo e dinamico:

```
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=2
Weather_LightRain=2
Weather_Rain=3
Weather_Thunderstorm=2
Weather_LightSnow=1
Weather_Snow=2
Weather_Blizzard=2
```

Dopo aver modificato il file, salva le modifiche e riavvia il server per applicare le nuove impostazioni del meteo.



## Conclusione

Congratulazioni! Modificando i valori di frequenza del meteo nel file `GameServerSettings.ini`, hai personalizzato con successo il comportamento del meteo sul tuo server HumanitZ. Per domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />