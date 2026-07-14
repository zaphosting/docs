---
id: palworld-randomized-pals
title: "Palworld: Pals Randomizzati"
description: "Scopri come abilitare i Pals randomizzati in Palworld modificando la configurazione del server, inclusi il tipo di randomizer e le impostazioni del seed per il mondo di gioco di Palworld. -> Scopri di più ora"
sidebar_label: Palworld: Pals Randomizzati
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld include impostazioni di randomizzazione che possono modificare come i Pals appaiono nel tuo mondo di gioco. In questa guida, imparerai come abilitare e configurare manualmente i Pals randomizzati sul tuo server Palworld di ZAP-Hosting modificando il file di configurazione corretto.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld tramite l’interfaccia web di ZAP-Hosting e i permessi per modificare i file di configurazione del server.

:::info Accesso alla Configurazione Necessario
Devi avere accesso all’amministrazione web del server per aprire la sezione `Configs` e modificare i file di configurazione di Palworld.
:::

## Apri il file di configurazione corretto

Per configurare i Pals randomizzati, devi modificare il file `PalWorldSettings.ini`.

Nell’amministrazione del server di gioco ZAP-Hosting:

1. Apri il tuo server **Palworld**.
2. Vai su **Configs**.
3. Apri il file chiamato `PalWorldSettings.ini`.

Questo file contiene i valori principali di configurazione del gameplay per il tuo server Palworld, incluse le opzioni del randomizer.

## Configura i Pals randomizzati

Le impostazioni del randomizer sono memorizzate come chiavi all’interno di `PalWorldSettings.ini`. Devi individuare il blocco di impostazioni esistente e modificare manualmente i valori rilevanti.

### Panoramica delle impostazioni del randomizer

Usa le seguenti chiavi di configurazione per la randomizzazione degli spawn dei Pals:

| Chiave Config | Valori consentiti | Default | Scopo |
| --- | --- | --- | --- |
| `RandomizerType` | `None`, `Region` | `None` | Controlla se lo spawn random dei Pals è disabilitato o randomizzato per regione |
| `bIsRandomizerPalLevelRandom` | `True`, `False` | `False` | Abilita livelli wild dei Pals completamente casuali se impostato su `True` |
| `RandomizerSeed` | `[your_seed_value]` o vuoto | `""` | Definisce il seed usato durante la generazione del mondo |

:::caution Compatibilità Server Dedicati
Il valore `All` è stato segnalato come incompatibile con i server dedicati di Palworld. Usa solo valori supportati come `None` o `Region`.
:::

### Esempio di configurazione

Aggiungi o modifica i seguenti valori nel file `PalWorldSettings.ini` secondo necessità:

```ini
RandomizerType=Region
bIsRandomizerPalLevelRandom=True
RandomizerSeed="zaphosting"
```

Sostituisci `zaphosting` con il tuo valore seed se vuoi una configurazione randomizzata specifica. Un seed garantisce che lo stesso schema di randomizzazione venga usato durante la generazione del mondo.

### Cosa fa ogni impostazione

#### `RandomizerType`

Questa impostazione controlla se gli spawn dei Pals sono randomizzati.

- `None` disabilita la randomizzazione
- `Region` abilita la randomizzazione regionale degli spawn dei Pals

Se vuoi Pals randomizzati nella mappa del mondo di Palworld, imposta questo valore su `Region`.

#### `bIsRandomizerPalLevelRandom`

Questa impostazione controlla i livelli dei Pals selvatici.

- `False` mantiene il comportamento normale dei livelli
- `True` abilita livelli wild dei Pals completamente casuali

Questo può rendere il gioco Palworld molto meno prevedibile, specialmente nelle fasi iniziali.

#### `RandomizerSeed`

Questa impostazione opzionale definisce il seed di randomizzazione usato durante la generazione del mondo.

Esempio:

```ini
RandomizerSeed="[your_seed_value]"
```

Sostituisci `[your_seed_value]` con qualsiasi testo o numero personalizzato che vuoi usare come seed.

:::note Comportamento del Seed
Il seed del randomizer viene applicato quando il mondo viene generato. Se cambi `RandomizerSeed` in un mondo già esistente, la modifica non avrà effetto a meno che non resetti il mondo o ne crei uno nuovo.
:::

## Salva e applica le modifiche

Dopo aver modificato il file, salva le modifiche nella sezione `Configs` di ZAP-Hosting.

Una volta salvato il file, riavvia il tuo server Palworld per caricare la configurazione aggiornata.

| Azione | Necessaria |
| --- | --- |
| Salva `PalWorldSettings.ini` | Sì |
| Riavvia il server | Sì |
| Esegui comandi console aggiuntivi | No |
| Reset del mondo per modifiche al seed su salvataggi esistenti | Se cambi `RandomizerSeed` |

:::tip Quando iniziare un mondo nuovo
Se stai abilitando la randomizzazione per la prima volta, specialmente con un `RandomizerSeed` personalizzato, è meglio usare un mondo nuovo per assicurarti che le impostazioni si applichino correttamente.
:::

## Verifica il risultato

Dopo il riavvio, entra nel server e verifica se gli spawn dei Pals si comportano secondo le impostazioni di randomizzazione selezionate.

Dovresti controllare:

- se gli spawn regionali randomizzati sono attivi
- se i livelli wild dei Pals sono randomizzati se abilitati
- se il comportamento del mondo corrisponde al seed configurato su un mondo nuovo

Se le modifiche non sembrano funzionare, riapri `PalWorldSettings.ini` e verifica che:

- le chiavi siano state inserite correttamente
- i valori usino la corretta capitalizzazione come `True` e `False`
- il server sia stato riavviato dopo il salvataggio
- sia stato creato un mondo nuovo se hai cambiato il seed

## Risoluzione dei problemi

### I Pals randomizzati non appaiono

Controlla che `RandomizerType=Region` sia presente in `PalWorldSettings.ini`. Se è ancora impostato su `None`, la randomizzazione è disabilitata.

### Le modifiche al seed non hanno effetto

Di solito significa che il mondo era già stato generato prima dell’aggiunta del nuovo seed. In questo caso, devi resettare il mondo o crearne uno nuovo perché il seed venga applicato.

### Problemi al server dopo aver cambiato le impostazioni del randomizer

Se hai usato un valore non supportato, come `All`, ripristina l’impostazione a un valore supportato come `None` o `Region`, salva il file e riavvia di nuovo il server.

:::danger Evita valori randomizer non supportati
Non usare `RandomizerType=All` su un server dedicato a meno che la documentazione ufficiale di Palworld non confermi il supporto. Questa impostazione è attualmente nota come incompatibile negli ambienti server dedicati.
:::

## Conclusione

Congratulazioni, hai configurato con successo i Pals randomizzati sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂