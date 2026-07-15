---
id: palworld-enable-fast-travel
title: "Palworld: Abilitare il Viaggio Veloce"
description: "Scopri come configurare il viaggio veloce sul tuo server Palworld, incluse le impostazioni per il viaggio veloce solo tra basi e le modifiche manuali al file di configurazione. -> Scopri di più ora"
sidebar_label: "Abilitare il Viaggio Veloce"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di controllare come i giocatori usano il viaggio veloce sul tuo server tramite la configurazione principale. In questa guida imparerai a modificare il file di configurazione corretto nell’interfaccia ZAP-Hosting, regolare le impostazioni del viaggio veloce e applicare correttamente le modifiche.



## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld nell’interfaccia web ZAP-Hosting e i permessi per modificare i file di configurazione.

:::info Configurazione Manuale Necessaria
Questa configurazione si effettua modificando manualmente il file di configurazione del server Palworld. Puoi accedere al file richiesto tramite l’amministrazione del server di gioco sotto `Configs`.
:::

## Individua il File di Configurazione

Per cambiare il comportamento del viaggio veloce, devi modificare il file `PalWorldSettings.ini`.

Nell’amministrazione del server di gioco ZAP-Hosting:

1. Apri il tuo server Palworld.
2. Vai su `Configs`.
3. Apri il file `PalWorldSettings.ini`.

Questo file contiene le impostazioni di gioco del server, incluse le opzioni per il viaggio veloce.

:::note Posizione della Configurazione
A seconda del layout attuale del pannello, il file si gestisce tramite l’area `Configs` nell’amministrazione del server. Se il percorso esatto non è mostrato nell’interfaccia, puoi comunque modificare in sicurezza i valori richiesti direttamente in `PalWorldSettings.ini`.
:::

## Comprendere le Impostazioni del Viaggio Veloce

Palworld offre due chiavi di configurazione rilevanti per il comportamento del viaggio veloce.

| Chiave Config | Tipo valore | Valore predefinito | Funzione |
| --- | --- | --- | --- |
| `bEnableFastTravel` | `True` / `False` | `True` | Abilita o disabilita completamente il viaggio veloce |
| `bEnableFastTravelOnlyBaseCamp` | `True` / `False` | `False` | Limita il viaggio veloce solo tra le basi |

Questi valori fanno parte della stringa di opzioni del server dentro `PalWorldSettings.ini`.

:::tip Scegli la Configurazione Giusta
Se vuoi un’esperienza di gioco più immersiva e con più esplorazione, puoi disabilitare completamente il viaggio veloce. Se vuoi mantenere il viaggio disponibile ma limitare la libertà di movimento sulla mappa, il viaggio veloce solo tra basi è solitamente la scelta migliore.
:::

## Modifica i Valori del Viaggio Veloce

Apri `PalWorldSettings.ini` e cerca la sezione `OptionSettings=`. In Palworld molte impostazioni del server sono memorizzate come valori separati da virgola all’interno di questa voce.

### Abilitare il Viaggio Veloce Normale

Per permettere il viaggio veloce standard, assicurati che sia presente questo valore:

```ini
bEnableFastTravel=True
```

Se vuoi che i giocatori possano usare tutte le opzioni normali di viaggio veloce, assicurati anche che questo valore sia impostato così:

```ini
bEnableFastTravelOnlyBaseCamp=False
```

### Disabilitare Completamente il Viaggio Veloce

Per disabilitare il viaggio veloce completamente, imposta:

```ini
bEnableFastTravel=False
```

Quando è disabilitato, i giocatori devono viaggiare manualmente nel mondo di gioco.

### Limitare il Viaggio Veloce Solo alle Basi

Se vuoi permettere il viaggio veloce solo tra le basi, usa questa combinazione:

```ini
bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True
```

Questa configurazione è spesso preferita per server PvP perché permette un viaggio limitato senza dare libertà di movimento illimitata.

:::caution Mantieni Intatta la Sintassi Esistente
Non rimuovere altri valori esistenti dalla riga `OptionSettings=` a meno che tu non voglia modificarli intenzionalmente. Palworld memorizza molte impostazioni in un’unica voce separata da virgole, quindi una formattazione errata può impedire il caricamento delle impostazioni.
:::

## Esempio di Configurazione

Ecco un esempio di come potrebbe apparire la parte rilevante della configurazione dentro `PalWorldSettings.ini`:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True)
```

Sostituisci i valori del viaggio veloce nella tua configurazione esistente in base alla configurazione che vuoi usare.

:::note Configurazioni Server Esistenti
La tua riga `OptionSettings=` conterrà di solito molti più valori rispetto all’esempio sopra. Devi solo modificare `bEnableFastTravel` e `bEnableFastTravelOnlyBaseCamp` mantenendo intatto il resto della riga.
:::

## Configurazioni Consigliate

Puoi usare le seguenti combinazioni a seconda del tipo di server che vuoi gestire:

| Tipo di server | `bEnableFastTravel` | `bEnableFastTravelOnlyBaseCamp` | Risultato |
| --- | --- | --- | --- |
| Gameplay standard | `True` | `False` | Viaggio veloce completo abilitato |
| Focus su esplorazione | `False` | `False` | Viaggio veloce completamente disabilitato |
| PvP o viaggio limitato | `True` | `True` | Viaggio veloce solo tra basi |

## Applica le Modifiche

Dopo aver salvato le modifiche in `PalWorldSettings.ini`, devi riavviare il server per caricare le nuove impostazioni.

### Riavvia il Server

Usa la funzione di riavvio nell’amministrazione del server di gioco ZAP-Hosting dopo aver salvato il file.

Di solito non sono necessari comandi in-game o da console per questa modifica. La nuova configurazione del viaggio veloce si applica al riavvio del server.

:::info Riavvio Necessario
Le modifiche a `PalWorldSettings.ini` non si applicheranno correttamente finché il server Palworld non sarà stato riavviato.
:::

## Verifica il Risultato

Quando il server è di nuovo online, entra nel gioco e testa il comportamento del viaggio veloce.

Dovresti verificare che:

- il viaggio veloce completo funzioni se abilitato
- non ci siano opzioni di viaggio veloce se disabilitato
- funzioni solo il viaggio tra basi se hai abilitato il viaggio solo tra basi

:::tip Risoluzione Problemi Comportamento Errato
Se l’impostazione non si applica, riapri `PalWorldSettings.ini` e controlla errori di formattazione nella riga `OptionSettings=`, in particolare virgole mancanti, chiavi duplicate o valori `True` / `False` non validi.
:::

## Conclusione

Congratulazioni, hai abilitato o configurato con successo il viaggio veloce sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂