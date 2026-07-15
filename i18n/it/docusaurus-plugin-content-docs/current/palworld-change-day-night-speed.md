---
id: palworld-change-day-night-speed
title: "Palworld: Cambiare la Velocità Giorno Notte"
description: "Scopri come modificare la velocità del ciclo giorno e notte in Palworld modificando le impostazioni del ciclo giorno sul tuo server. -> Scopri di più ora"
sidebar_label: "Cambiare la Velocità Giorno Notte"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di regolare la velocità con cui passa il ciclo giorno e notte sul tuo server. In questa guida, imparerai come cambiare la velocità del giorno e della notte modificando il file di configurazione corretto nella gestione del tuo server di gioco ZAP-Hosting e applicando correttamente le modifiche.



## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld tramite l’interfaccia web di ZAP-Hosting e il permesso di modificare i file di configurazione del server.

:::info Configurazione Manuale Necessaria
Questa configurazione va effettuata manualmente tramite i file di configurazione del server. Devi modificare direttamente le impostazioni di Palworld invece di usare comandi automatici in gioco.
:::

## Individua il File di Configurazione

Per cambiare la velocità del giorno e della notte, devi modificare il file `PalWorldSettings.ini`.

Nella gestione del server di gioco ZAP-Hosting, puoi accedere a questo file tramite la sezione **Configs**. Apri il tuo server Palworld nell’interfaccia web e vai all’area di gestione dei file di configurazione.

Il file rilevante è:

```ini
PalWorldSettings.ini
```

:::note Posizione del File di Configurazione
A seconda del template del server di gioco e del layout del pannello, il file è disponibile tramite l’area **Configs** nell’amministrazione ZAP-Hosting. Se nella tua interfaccia viene mostrato il percorso interno completo, di solito si tratta del file delle impostazioni del server Palworld usato per la configurazione del gameplay.
:::

## Modifica le Impostazioni della Velocità Giorno e Notte

All’interno di `PalWorldSettings.ini`, cerca le voci di configurazione del gameplay relative alla velocità del giorno e della notte.

Devi modificare i seguenti valori:

| Chiave Config | Valore Predefinito | Descrizione |
| --- | --- | --- |
| `DayTimeSpeedRate` | `1.000000` | Controlla la velocità con cui passa il giorno |
| `NightTimeSpeedRate` | `1.000000` | Controlla la velocità con cui passa la notte |

Valori più alti fanno passare il tempo più velocemente, valori più bassi lo rallentano.

### Esempio di Configurazione

Se vuoi far passare sia il giorno che la notte più velocemente, puoi impostare valori più alti così:

```ini
DayTimeSpeedRate=2.000000
NightTimeSpeedRate=2.000000
```

Se vuoi un giorno più lungo ma una notte più veloce, puoi usare valori diversi, per esempio:

```ini
DayTimeSpeedRate=0.500000
NightTimeSpeedRate=2.000000
```

### Dove Inserire i Valori

Palworld memorizza molte impostazioni di gameplay nella sezione `OptionSettings` di `PalWorldSettings.ini`. Dovresti modificare le voci esistenti `DayTimeSpeedRate` e `NightTimeSpeedRate` lì, invece di aggiungere chiavi duplicate altrove.

Una sezione tipica può apparire così:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

Dopo la modifica, potrebbe diventare così:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=2.000000,NightTimeSpeedRate=1.500000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

:::caution Modifica Attenta delle Voci Esistenti
Assicurati di cambiare solo il valore dopo `DayTimeSpeedRate=` e `NightTimeSpeedRate=`. Non rimuovere virgole, parentesi o altre impostazioni esistenti nella riga `OptionSettings`, perché una formattazione errata può impedire al server di caricare correttamente la configurazione.
:::

## Salva e Applica le Modifiche

Una volta aggiornati i valori in `PalWorldSettings.ini`, salva il file nell’editor di configurazione di ZAP-Hosting.

Dopo il salvataggio, riavvia il tuo server Palworld per caricare le nuove impostazioni del ciclo giorno.

| Azione | Necessaria |
| --- | --- |
| Salva `PalWorldSettings.ini` | Sì |
| Riavvia il server | Sì |
| Esegui comandi console aggiuntivi | No |

:::tip Riavvio Necessario
Le modifiche alla configurazione del mondo di Palworld non vengono applicate in modo affidabile finché il server non viene riavviato. Riavvia sempre il server dopo aver cambiato la velocità del giorno o della notte.
:::

## Verifica il Nuovo Ciclo Giorno

Dopo il riavvio, entra nel tuo server e osserva la progressione del tempo in gioco.

Ora dovresti notare che:

- il **giorno** passa più velocemente o più lentamente in base a `DayTimeSpeedRate`
- la **notte** passa più velocemente o più lentamente in base a `NightTimeSpeedRate`

Se la velocità non sembra cambiare, riapri `PalWorldSettings.ini` e verifica che:

- i valori siano stati salvati correttamente
- la formattazione della riga `OptionSettings` sia ancora valida
- il server sia stato riavviato dopo la modifica

## Riferimento Configurazione

Usa la tabella seguente come riferimento rapido se vuoi cambiare di nuovo le impostazioni del giorno in futuro.

| Impostazione | Esempio | Risultato |
| --- | --- | --- |
| `DayTimeSpeedRate=0.500000` | Giorno più lento | Il giorno dura di più |
| `DayTimeSpeedRate=2.000000` | Giorno più veloce | Il giorno passa più rapidamente |
| `NightTimeSpeedRate=0.500000` | Notte più lenta | La notte dura di più |
| `NightTimeSpeedRate=2.000000` | Notte più veloce | La notte passa più rapidamente |

:::note Impostazioni Bilanciate
Se vuoi un’esperienza di gioco più naturale, evita valori estremamente alti. Cambiamenti troppo rapidi di giorno e notte possono rendere più difficile pianificare agricoltura, esplorazione e gestione della base.
:::

## Conclusione

Congratulazioni, hai cambiato con successo la velocità del ciclo giorno e notte sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂