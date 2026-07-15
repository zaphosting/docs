---
id: palworld-change-death-penalty
title: "Palworld: Cambiare la Penalità di Morte"
description: "Scopri come modificare la penalità di morte in Palworld modificando la configurazione del server, inclusi i valori di DeathPenalty e i passaggi per il riavvio. -> Scopri di più ora"
sidebar_label: "Cambiare la Penalità di Morte"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di controllare cosa perdono i giocatori alla morte modificando l’impostazione `DeathPenalty` del server. In questa guida, imparerai come modificare il file di configurazione corretto nell’interfaccia web di ZAP-Hosting e applicare correttamente la modifica.



## Preparazione

Prima di iniziare, assicurati di:

- avere accesso al tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting
- che il server sia offline o essere pronto a riavviarlo dopo aver effettuato le modifiche
- sapere quale comportamento di morte vuoi impostare per i tuoi giocatori

:::info Accesso al File di Configurazione
Per i server Palworld su ZAP-Hosting, le impostazioni rilevanti possono essere modificate tramite l’amministrazione del server di gioco sotto la sezione **Configs**.
:::

## Aprire il File di Configurazione di Palworld

Per cambiare la penalità di morte, devi modificare il file `PalWorldSettings.ini`.

### Trova il file nell’interfaccia ZAP-Hosting

Per prima cosa, accedi all’interfaccia web di ZAP-Hosting e apri il tuo server di gioco Palworld. Poi vai alla sezione **Configs** nell’amministrazione del server e apri il file chiamato `PalWorldSettings.ini`.

Questo file contiene i valori principali di configurazione del gameplay per il tuo server Palworld, inclusa la gestione della penalità di morte.

:::note Modifiche Manuali alla Configurazione
L’impostazione della penalità di morte è memorizzata direttamente nel file di configurazione. Devi modificare il valore manualmente, a meno che la tua interfaccia attuale non offra esplicitamente un’impostazione rapida separata.
:::

## Modificare il Valore DeathPenalty

All’interno di `PalWorldSettings.ini`, cerca la sezione `OptionSettings` dove sono definite le impostazioni di gioco. Devi trovare la voce `DeathPenalty` e cambiarne il valore con l’opzione che preferisci.

### Valori DeathPenalty Supportati

I seguenti valori sono attualmente utilizzati da Palworld per l’impostazione `DeathPenalty`:

| Valore | Effetto |
| --- | --- |
| `None` | I giocatori non perdono nulla alla morte |
| `Item` | I giocatori perdono gli oggetti, ma mantengono l’equipaggiamento |
| `ItemAndEquipment` | I giocatori perdono oggetti ed equipaggiamento |
| `All` | I giocatori perdono oggetti, equipaggiamento e tutti i Pals nella loro squadra |

:::tip Scegliere l’Impostazione Giusta
Se vuoi un’esperienza di gioco più casual, `None` o `Item` sono di solito la scelta migliore. Se vuoi l’esperienza survival predefinita, usa `All`.
:::

### Esempio di voce di configurazione

Nella maggior parte delle configurazioni server Palworld, l’impostazione appare come parte di una riga più lunga `OptionSettings`. Per esempio:

```ini
OptionSettings=(DeathPenalty=All)
```

Per disabilitare completamente la penalità di morte, cambiala in:

```ini
OptionSettings=(DeathPenalty=None)
```

Se il tuo file contiene già molte impostazioni nello stesso blocco `OptionSettings=(...)`, modifica solo il valore `DeathPenalty` lasciando invariati gli altri. Per esempio:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DeathPenalty=ItemAndEquipment,bEnablePlayerToPlayerDamage=False)
```

In questo caso, sostituirai solo `ItemAndEquipment` con il valore che preferisci.

:::caution Conserva la Sintassi Esistente
Non rimuovere virgole, parentesi o altre impostazioni esistenti dal blocco `OptionSettings=(...)`. Una sintassi errata può impedire al server di caricare correttamente la configurazione.
:::

## Salvare e Applicare le Modifiche

Dopo aver modificato il valore `DeathPenalty`, salva le modifiche su `PalWorldSettings.ini`.

### Riavvia il server

Una volta salvato il file, riavvia il tuo server Palworld dall’interfaccia web di ZAP-Hosting. Il riavvio è necessario affinché il server carichi la configurazione aggiornata.

| Azione | Necessaria |
| --- | --- |
| Salvare `PalWorldSettings.ini` | Sì |
| Riavviare il server | Sì |
| Eseguire comandi console aggiuntivi | No |

:::info Riavvio Necessario
Palworld legge questa impostazione dalla configurazione del server. Il nuovo comportamento alla morte entrerà in vigore solo dopo un riavvio completo del server.
:::

## Verificare la Nuova Impostazione di Morte

Dopo il riavvio del server, entra nel gioco e testa il comportamento per confermare la modifica.

### Cosa controllare

A seconda del valore scelto, verifica se i giocatori:

- mantengono tutti gli oggetti dopo la morte
- perdono solo gli oggetti dell’inventario
- perdono oggetti dell’inventario ed equipaggiamento
- perdono oggetti, equipaggiamento e i Pals della squadra

Se l’impostazione non sembra essere cambiata, riapri `PalWorldSettings.ini` e controlla che:

- il valore `DeathPenalty` sia scritto esattamente correttamente
- la modifica sia stata salvata con successo
- il server sia stato riavviato dopo la modifica

:::danger Usa i Nomi Esatti dei Valori
L’impostazione `DeathPenalty` è case-sensitive nella pratica quando scritta come valore di configurazione. Usa sempre i nomi esatti `None`, `Item`, `ItemAndEquipment` o `All`.
:::

## Conclusione

Congratulazioni, hai cambiato con successo la penalità di morte in Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂