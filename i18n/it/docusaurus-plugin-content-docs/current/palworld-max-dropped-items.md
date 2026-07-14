---
id: palworld-max-dropped-items
title: "Palworld: Numero massimo di oggetti lasciati a terra"
description: "Scopri come modificare i limiti degli oggetti lasciati a terra e le impostazioni di scomparsa degli oggetti sul tuo server Palworld modificando i valori di configurazione corretti. -> Scopri di più ora"
sidebar_label: Palworld: Numero massimo di oggetti lasciati a terra
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di controllare quanti oggetti lasciati a terra possono esistere nel tuo mondo e per quanto tempo rimangono prima di scomparire. In questa guida, imparerai come modificare il file di configurazione corretto nell’interfaccia ZAP-Hosting, regolare le impostazioni degli oggetti lasciati a terra e applicare le modifiche in modo sicuro.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld nell’interfaccia web ZAP-Hosting e il permesso di modificare i suoi file di configurazione.

:::info Configurazione Manuale Necessaria
Questa configurazione va eseguita manualmente modificando la configurazione del server Palworld. Il file richiesto è accessibile nell’amministrazione del server di gioco sotto `Configs`.
:::

## Apri il file di configurazione di Palworld

Per modificare il limite degli oggetti lasciati a terra, devi modificare il file `PalWorldSettings.ini`.

Nell’amministrazione del server di gioco ZAP-Hosting:

1. Apri il tuo server Palworld
2. Vai su `Configs`
3. Apri il file `PalWorldSettings.ini`

Questo file contiene i valori principali di configurazione del gameplay per il tuo server Palworld, inclusi i comportamenti degli oggetti lasciati a terra.

## Modifica le impostazioni degli oggetti lasciati a terra

Le impostazioni degli oggetti lasciati a terra si configurano tramite voci all’interno di `PalWorldSettings.ini`. Devi regolare i valori rilevanti nella riga o sezione attiva del file.

### Chiavi di configurazione rilevanti

Usa le seguenti chiavi di configurazione per controllare gli oggetti lasciati a terra:

| Chiave di configurazione | Valore predefinito | Descrizione |
| --- | --- | --- |
| `DropItemMaxNum` | `3000` | Numero massimo di oggetti lasciati a terra che possono esistere contemporaneamente nel mondo |
| `DropItemAliveMaxHours` | `1.0` | Tempo in ore prima che gli oggetti lasciati a terra scompaiano automaticamente |

### Esempio di configurazione

A seconda del contenuto attuale del file, questi valori fanno solitamente parte della voce delle opzioni di Palworld. Per esempio:

```ini
OptionSettings=(DropItemMaxNum=3000,DropItemAliveMaxHours=1.000000)
```

Se queste chiavi esistono già nella tua voce `OptionSettings`, modifica solo i valori. Per esempio:

```ini
OptionSettings=(DropItemMaxNum=2000,DropItemAliveMaxHours=0.500000)
```

In questo esempio:

- `DropItemMaxNum=2000` limita il mondo a `2000` oggetti lasciati a terra
- `DropItemAliveMaxHours=0.500000` fa scomparire gli oggetti dopo `0.5` ore, cioè `30` minuti

:::note Formato del valore
Le impostazioni del server Palworld spesso usano valori decimali con zeri finali multipli, come `1.000000`. Dovresti mantenere lo stile di formattazione esistente nel tuo file quando possibile.
:::

## Scegli valori adatti

I valori corretti dipendono dal numero di giocatori, dall’attività del server e dalla generazione del loot.

### Casi d’uso consigliati

| Scenario | `DropItemMaxNum` | `DropItemAliveMaxHours` |
| --- | --- | --- |
| Piccolo server privato | `3000` | `1.000000` |
| Server multiplayer affollato | `2000` | `0.500000` |
| Configurazione orientata alle prestazioni | `1000` a `1500` | `0.250000` a `0.500000` |

### Considerazioni sulle prestazioni

Limiti più bassi sugli oggetti lasciati a terra possono migliorare le prestazioni del server, specialmente se:

- molti giocatori sono attivi contemporaneamente
- il tuo mondo genera un gran numero di oggetti
- i giocatori fanno farming, costruiscono o lasciano loot a terra frequentemente

:::tip Migliora le prestazioni con limiti più bassi
Se noti lag o riduzione della reattività del server, abbassare sia il valore massimo degli oggetti lasciati a terra sia il timer di scomparsa può aiutare a ridurre il disordine nel mondo e migliorare la stabilità.
:::

:::caution Evita valori troppo bassi
Se imposti questi valori troppo bassi, i giocatori potrebbero notare che gli oggetti scompaiono troppo rapidamente o che il limite massimo viene raggiunto prima del previsto. Testa attentamente le modifiche dopo averle applicate.
:::

## Salva e applica le modifiche

Dopo aver modificato `PalWorldSettings.ini`, salva il file nell’interfaccia ZAP-Hosting.

Una volta salvato il file, riavvia il tuo server Palworld affinché le nuove impostazioni sugli oggetti lasciati a terra vengano caricate.

| Azione | Necessaria |
| --- | --- |
| Salva `PalWorldSettings.ini` | Sì |
| Riavvia il server | Sì |
| Comando console aggiuntivo | No |

:::info Riavvio necessario
Le modifiche a `PalWorldSettings.ini` non avranno effetto finché non riavvii il server Palworld.
:::

## Verifica le nuove impostazioni

Dopo il riavvio, entra nel server e monitora il comportamento degli oggetti lasciati a terra durante il gameplay normale.

Dovresti controllare se:

- il numero di oggetti lasciati a terra è controllato come previsto
- gli oggetti rimangono a terra per il tempo previsto
- le prestazioni del server migliorano dopo aver ridotto la quantità o la durata degli oggetti

Se necessario, torna a `PalWorldSettings.ini` e affina ulteriormente i valori.

## Conclusione

Congratulazioni, hai configurato con successo il numero massimo di oggetti lasciati a terra e il timer di scomparsa sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂