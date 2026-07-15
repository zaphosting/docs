---
id: palworld-increase-xp
title: "Palworld: Aumenta XP"
description: "Scopri come aumentare l'XP nel gioco Palworld modificando la configurazione del server Palworld e regolando correttamente il moltiplicatore XP. -> Scopri di più ora"
sidebar_label: Palworld: Aumenta XP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di regolare i moltiplicatori di gioco tramite la configurazione del server, incluso l’ammontare di XP che i giocatori guadagnano. In questa guida, imparerai come aumentare il tasso di XP sul tuo server Palworld ZAP-Hosting modificando il file di configurazione corretto e applicando le modifiche nel modo giusto.



## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld tramite l’interfaccia web ZAP-Hosting e il permesso di modificare i file di configurazione.

:::info Accesso alla Configurazione Necessario
Devi avere accesso all’amministrazione web del server per modificare i file di configurazione nella sezione `Configs`. Se non riesci ad accedere all’amministrazione del server, verifica prima i permessi del prodotto nel pannello ZAP-Hosting.
:::

## Individua il file di configurazione

Per aumentare l’XP sul tuo server Palworld, devi modificare il file `PalWorldSettings.ini`.

Nell’amministrazione del server di gioco ZAP-Hosting:

1. Apri il tuo server Palworld.
2. Vai alla sezione `Configs`.
3. Apri il file `PalWorldSettings.ini`.

Questo file contiene le impostazioni principali di gioco usate dal server dedicato Palworld, incluso il moltiplicatore XP.

## Modifica il moltiplicatore XP

L’impostazione responsabile del guadagno XP è `ExpRate`.

### Trova l’impostazione corretta

Apri `PalWorldSettings.ini` e cerca la riga `OptionSettings` o la sezione dove sono definiti i moltiplicatori di gioco.

La voce di configurazione rilevante è:

```ini
ExpRate=1.000000
```

### Cambia il valore

Modifica il valore di `ExpRate` con il moltiplicatore che vuoi usare.

| Chiave Config | Valore Predefinito | Valore Esempio | Effetto |
| --- | --- | --- | --- |
| `ExpRate` | `1.000000` | `2.000000` | XP raddoppiati |
| `ExpRate` | `1.000000` | `3.000000` | XP triplicati |

Per esempio, per abilitare XP doppi, imposta:

```ini
ExpRate=2.000000
```

Per abilitare XP tripli, imposta:

```ini
ExpRate=3.000000
```

:::tip Formato Valore Consigliato
Le impostazioni del server Palworld usano comunemente valori decimali come `1.000000` o `2.000000`. Usare lo stesso formato aiuta a mantenere la configurazione coerente e più leggibile.
:::

## Esempio di configurazione

A seconda del contenuto attuale del file, l’impostazione apparirà di solito all’interno del blocco `OptionSettings`. Per esempio:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=2.000000,PalCaptureRate=1.000000)
```

Se `ExpRate` è già presente, cambia solo il suo valore. Se manca, aggiungi `ExpRate=[your_value]` all’interno del blocco `OptionSettings=(...)` esistente.

:::caution Modifica Attenta del Blocco OptionSettings Esistente
Non creare più voci `OptionSettings` a meno che la tua configurazione attuale non lo richieda specificamente. Nella maggior parte dei casi, devi solo modificare la riga `OptionSettings=(...)` esistente cambiando il valore di `ExpRate`.
:::

## Salva e riavvia il server

Dopo aver modificato il moltiplicatore XP:

1. Salva le modifiche in `PalWorldSettings.ini`.
2. Riavvia il tuo server Palworld dall’amministrazione server ZAP-Hosting.

Il riavvio è necessario perché Palworld non applica immediatamente questa modifica alle impostazioni di gioco mentre il server è in esecuzione.

| Azione | Necessaria |
| --- | --- |
| Salva `PalWorldSettings.ini` | Sì |
| Riavvia il server | Sì |
| Esegui comandi console aggiuntivi | No |

:::note Nessun Comando Aggiuntivo Necessario
Per questa impostazione, normalmente non serve alcun comando in-game o da console. Il nuovo tasso XP viene applicato dopo il riavvio del server.
:::

## Verifica il nuovo tasso XP

Quando il server è di nuovo online, entra nel server e svolgi un’azione che concede XP, come sconfiggere nemici, catturare Pals o completare attività di gioco normali.

Se il guadagno XP non sembra cambiare:

- riapri `PalWorldSettings.ini`
- conferma che `ExpRate` sia presente nel blocco `OptionSettings`
- verifica che il valore sia scritto correttamente, ad esempio `2.000000`
- assicurati che il server sia stato riavviato completamente dopo il salvataggio

:::danger Evita Sintassi di Configurazione Non Valida
Se per errore rimuovi virgole, parentesi o altri valori dalla riga `OptionSettings=(...)`, il server potrebbe ignorare l’impostazione o non caricare correttamente la configurazione. Controlla sempre la riga completa prima di salvare.
:::

## Conclusione

Congratulazioni, hai aumentato con successo il tasso di guadagno XP sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂