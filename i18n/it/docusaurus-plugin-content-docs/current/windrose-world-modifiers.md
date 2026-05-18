---
id: windrose-world-modifiers
title: "Windrose: Modificatori del Mondo"
description: "Configura i modificatori del mondo di Windrose con un riferimento completo ai parametri float, impostazioni di combattimento e parametri di scaling co-op -> Scopri di più ora"
sidebar_label: Modificatori del mondo
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I modificatori personalizzati del mondo di Windrose ti permettono di regolare in dettaglio combattimento, combattimento navale, esplorazione, missioni e scaling co-op. In questa guida, imparerai come modificare il file `WorldDescription.json`, comprendere ogni parametro e applicare impostazioni personalizzate al tuo gameserver Windrose.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere:

- Un gameserver Windrose attivo su ZAP-Hosting
- Accesso alla gestione del gameserver
- Il server fermo prima di modificare i file
- Accesso all’area **Configs** o **File Manager** nella gestione del gameserver

:::info Posizione del File di Configurazione
I modificatori personalizzati del mondo sono memorizzati nel file `WorldDescription.json` all’interno del blocco `WorldSettings`.
:::

:::caution Ferma Prima il Server
Devi sempre fermare il server prima di modificare `WorldDescription.json`. Questo evita corruzioni del file o sovrascritture durante l’avvio o le operazioni di salvataggio automatico.
:::

## Comprendere i Modificatori del Mondo

Ogni impostazione personalizzata è definita singolarmente dentro `WorldDescription.json` sotto `WorldSettings`. Il gioco separa i valori per tipo:

- `float` per moltiplicatori numerici come salute o danno
- `bool` per opzioni vero o falso
- `tag` per valori di difficoltà nominati come la difficoltà di combattimento

Questa struttura è importante perché ogni parametro deve essere posizionato nella sezione corretta. Se metti un valore `float` in `bool` o usi un tag non valido, l’impostazione potrebbe non funzionare come previsto.

:::note Tipi di Parametri
Se non conosci il termine *parametro*, significa semplicemente un valore configurabile usato dal gioco. In questa guida, ogni parametro controlla una parte della difficoltà del mondo o del comportamento di gioco.
:::

## Aprire il File di Configurazione del Mondo

Per applicare modificatori personalizzati, devi modificare il file corretto del mondo.

1. Ferma il tuo server Windrose nella gestione del gameserver.
2. Apri il **File Manager**.
3. Naviga al percorso seguente:

```text
R5/Saved/SaveProfiles/Default/RocksDB/<game_version>/Worlds/<world_id>/WorldDescription.json
```

Sostituisci i segnaposto come segue:

| Segnaposto | Significato |
| --- | --- |
| `[your_game_version]` | La cartella della versione attuale del gioco Windrose |
| `[your_world_id]` | L’ID del mondo che vuoi modificare |

:::tip Trovare il Mondo Corretto
Se hai più mondi, assicurati di modificare il file `WorldDescription.json` dentro la cartella corretta `[your_world_id]`. Altrimenti, le modifiche influenzeranno un salvataggio diverso.
:::

## Modificare il Blocco WorldSettings

Dentro `WorldDescription.json`, individua il blocco `WorldSettings`. Aggiungi o modifica i tuoi valori personalizzati lì.

Usa la seguente struttura:

```json
"WorldSettings": {
  "bool": {
    "CoopQuests": true,
    "EasyExplore": false
  },
  "float": {
    "MobHealthMultiplier": 1.5,
    "MobDamageMultiplier": 1.2,
    "ShipHealthMultiplier": 1.0,
    "ShipDamageMultiplier": 1.0,
    "BoardingDifficultyMultiplier": 1.0,
    "Coop_StatsCorrectionModifier": 1.0,
    "Coop_ShipStatsCorrectionModifier": 0.5
  },
  "tag": {
    "CombatDifficulty": {
      "TagName": "WDS.Parameter.CombatDifficulty.Hard"
    }
  }
}
```

Dopo aver salvato il file, riavvia il server.

:::info Comportamento del Preset
Se imposti manualmente un valore personalizzato, `WorldPresetType` cambia automaticamente in `Custom` al prossimo avvio del server. Se vuoi usare un preset pulito invece di valori personalizzati, devi usare la configurazione preset appropriata senza mescolare i due metodi.
:::

## Riferimento Completo ai Parametri

Le tabelle seguenti forniscono un riferimento completo per ogni modificatore personalizzato disponibile.

### Parametri di Combattimento

| Parametro | Sezione | Default | Intervallo | Effetto |
| --- | --- | --- | --- | --- |
| `MobHealthMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Moltiplicatore salute nemici |
| `MobDamageMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Moltiplicatore danno nemici |
| `CombatDifficulty` | `tag` | `Normal` | `Easy`, `Normal`, `Hard` | Aggressività boss e difficoltà incontri |

`CombatDifficulty` deve essere scritto come valore tag, per esempio:

```json
"tag": {
  "CombatDifficulty": {
    "TagName": "WDS.Parameter.CombatDifficulty.Hard"
  }
}
```

Valori disponibili:

| Difficoltà | Valore TagName |
| --- | --- |
| Easy | `WDS.Parameter.CombatDifficulty.Easy` |
| Normal | `WDS.Parameter.CombatDifficulty.Normal` |
| Hard | `WDS.Parameter.CombatDifficulty.Hard` |

### Parametri di Combattimento Navale

| Parametro | Sezione | Default | Intervallo | Effetto |
| --- | --- | --- | --- | --- |
| `ShipHealthMultiplier` | `float` | `1.0` | `0.4 - 5.0` | Moltiplicatore salute navi nemiche |
| `ShipDamageMultiplier` | `float` | `1.0` | `0.2 - 2.5` | Moltiplicatore danno navi nemiche |
| `BoardingDifficultyMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Numero di nemici da sconfiggere in abbordaggio |

Queste impostazioni sono utili se vuoi rendere le battaglie navali più facili per equipaggi piccoli o molto più impegnative per gruppi esperti.

### Parametri di Scaling Co-Op

| Parametro | Sezione | Default | Intervallo | Effetto |
| --- | --- | --- | --- | --- |
| `Coop_StatsCorrectionModifier` | `float` | `1.0` | `0.0 - 2.0` | Regola salute nemici e perdita postura in base al numero di giocatori |
| `Coop_ShipStatsCorrectionModifier` | `float` | `0.0` | `0.0 - 2.0` | Regola salute navi nemiche in base al numero di giocatori |

Questi valori sono particolarmente utili per equipaggi più grandi. Permettono di mantenere il combattimento bilanciato man mano che si aggiungono più giocatori nel mondo.

### Parametri di Esplorazione

| Parametro | Sezione | Default | Effetto |
| --- | --- | --- | --- |
| `EasyExplore` | `bool` | `false` | Disabilita i marker sulla mappa per i punti di interesse |

:::note Nome EasyExplore
Nonostante il nome, impostare `EasyExplore` su `true` rende l’esplorazione più difficile perché disabilita i marker sulla mappa per i punti di interesse. È una modalità di esplorazione immersiva.
:::

### Parametri delle Missioni

| Parametro | Sezione | Default | Effetto |
| --- | --- | --- | --- |
| `CoopQuests` | `bool` | `true` | Quando un giocatore completa una missione co-op, si completa automaticamente per tutti gli altri giocatori che l’hanno attiva |

Questa impostazione è utile se vuoi semplificare la progressione di gruppo o richiedere che ogni giocatore completi gli obiettivi individualmente.

## Riferimento Scala Moltiplicatori

Se non sei sicuro di come un valore `float` influenzi il gameplay, usa questa rapida scala di riferimento.

| Valore | Effetto |
| --- | --- |
| `0.5` | `50%` - decisamente più facile |
| `1.0` | `100%` - default o normale |
| `2.0` | `200%` - decisamente più difficile |
| `5.0` | `500%` - estremamente difficile |

Questa tabella è un esempio pratico per bilanciare il tuo mondo. Valori più bassi riducono la difficoltà, valori più alti la aumentano significativamente.

:::tip Parti con Piccole Modifiche
Se stai testando cambi di bilanciamento, aumenta o diminuisci un parametro alla volta. Così è più facile capire quale impostazione ha causato la differenza nel gameplay.
:::

## Configurazioni di Esempio

Gli esempi seguenti possono aiutarti a costruire la tua configurazione personalizzata.

### Equipaggio Casual

Questa configurazione riduce la pressione del combattimento, mantiene abilitata la condivisione delle missioni e rende più facile l’abbordaggio.

```json
"float": {
  "MobHealthMultiplier": 0.6,
  "MobDamageMultiplier": 0.6,
  "BoardingDifficultyMultiplier": 0.5
}
```

### Mari Hardcore

Questa configurazione aumenta la difficoltà sia terrestre che navale, disabilita il completamento condiviso delle missioni e abilita l’esplorazione immersiva.

```json
"bool": {
  "CoopQuests": false,
  "EasyExplore": true
},
"float": {
  "MobHealthMultiplier": 2.0,
  "MobDamageMultiplier": 1.5,
  "ShipHealthMultiplier": 2.0,
  "ShipDamageMultiplier": 1.5
}
```

### Scaling per Gruppi Numerosi

Questa configurazione è utile per gruppi più grandi, ad esempio 8 giocatori, dove lo scaling di default può risultare troppo facile.

```json
"float": {
  "MobHealthMultiplier": 1.0,
  "MobDamageMultiplier": 1.0,
  "Coop_StatsCorrectionModifier": 2.0,
  "Coop_ShipStatsCorrectionModifier": 2.0
}
```

## Best Practice per Modificare i Valori

### Usa Intervalli Validi

Ogni parametro `float` supporta solo un intervallo definito. Rimanere dentro l’intervallo documentato aiuta a evitare comportamenti imprevisti.

| Parametro | Minimo | Massimo |
| --- | --- | --- |
| `MobHealthMultiplier` | `0.2` | `5.0` |
| `MobDamageMultiplier` | `0.2` | `5.0` |
| `ShipHealthMultiplier` | `0.4` | `5.0` |
| `ShipDamageMultiplier` | `0.2` | `2.5` |
| `BoardingDifficultyMultiplier` | `0.2` | `5.0` |
| `Coop_StatsCorrectionModifier` | `0.0` | `2.0` |
| `Coop_ShipStatsCorrectionModifier` | `0.0` | `2.0` |

:::caution Valori Non Validi
Se usi valori non supportati, formattazione errata o metti un parametro nella sezione sbagliata, il gioco potrebbe ignorare l’impostazione o non applicarla correttamente.
:::

### Mantieni la Formattazione JSON Corretta

Quando modifichi `WorldDescription.json`, assicurati che:

- Tutte le chiavi siano tra virgolette doppie
- Le virgole siano posizionate correttamente
- Le parentesi `{}` e le parentesi quadre siano chiuse correttamente
- `true` e `false` siano scritti in minuscolo
- I valori decimali usino il punto, ad esempio `1.5`

Un file JSON corrotto può impedire il caricamento corretto della configurazione del mondo.

### Riavvia Dopo il Salvataggio

Dopo aver finito di modificare:

1. Salva `WorldDescription.json`
2. Riavvia il server
3. Entra nel server e testa le modifiche nel gameplay

Alcuni valori sono più facili da verificare in combattimento, abbordaggio o sessioni co-op piuttosto che subito al login.

## Gestione Configurazioni nella Gestione Gameserver

Puoi gestire i file di configurazione di Windrose direttamente nella gestione gameserver ZAP-Hosting sotto le opzioni di config e file disponibili. Questo è il modo consigliato per modificare `WorldDescription.json` se non vuoi usare strumenti esterni.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Se la voce di configurazione esatta non è elencata direttamente, usa il **File Manager** e naviga manualmente al percorso del file del mondo mostrato prima in questa guida.

:::info Gestione Configurazioni
A seconda dell’interfaccia attuale del gameserver e della tua configurazione del mondo, la lista dei file potrebbe variare. Se una voce specifica non è visibile, usa direttamente il percorso del file invece di presumere una funzione mancante.
:::

## Risoluzione dei Problemi

### Le Modifiche Non Si Applicano

Se i modificatori non sono attivi dopo il riavvio, verifica:

- Hai modificato il file `WorldDescription.json` corretto
- Il server era fermo prima della modifica
- La sintassi JSON è valida
- Ogni parametro è nella sezione corretta: `float`, `bool` o `tag`
- Il server è stato riavviato completamente dopo il salvataggio

### La Difficoltà Non Cambia

Alcuni modificatori sono più evidenti di altri. Per esempio:

- `MobHealthMultiplier` è più facile da notare in combattimenti normali
- `ShipHealthMultiplier` si nota solo durante il combattimento navale
- `Coop_StatsCorrectionModifier` è più visibile con più giocatori
- `EasyExplore` influenza solo il comportamento di esplorazione e i marker sulla mappa

### Il Preset è Cambiato in Custom

Questo è un comportamento previsto una volta che imposti manualmente valori personalizzati. Il gioco cambia automaticamente il tipo di preset del mondo in `Custom` al prossimo avvio.

## Conclusione

Congratulazioni, hai configurato con successo i modificatori del mondo di Windrose. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂