---
id: palworld-pal-damage-multiplier
title: "Palworld: Moltiplicatore Danno Pal"
description: "Scopri come modificare il moltiplicatore del danno dei Pal in Palworld modificando le impostazioni di attacco e difesa sul tuo server. -> Scopri di più ora"
sidebar_label: Palworld: Moltiplicatore Danno Pal
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di regolare quanto danno i tuoi Pal infliggono e ricevono modificando le impostazioni del moltiplicatore di danno del server. In questa guida, imparerai quale file di configurazione modificare nell’interfaccia ZAP-Hosting, quali valori cambiare e come applicare correttamente le nuove impostazioni.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld tramite il pannello di amministrazione server di gioco ZAP-Hosting.

:::info Configurazione Manuale Necessaria
Questa configurazione si effettua modificando manualmente il file di configurazione di Palworld. Non è necessario alcun comando in-game separato per questa modifica.
:::

## Apri il file di configurazione corretto

Per modificare il moltiplicatore del danno dei Pal, devi modificare il file `PalWorldSettings.ini`.

Nel pannello di amministrazione del server di gioco ZAP-Hosting, apri la sezione `Configs` e individua il file `PalWorldSettings.ini`. Questo file contiene i valori principali di configurazione del mondo e del gameplay per il tuo server Palworld.

:::note Posizione della Configurazione
Il file rilevante per questa guida è `PalWorldSettings.ini`, disponibile tramite l’amministrazione del server di gioco sotto `Configs`.
:::

## Modifica i valori del moltiplicatore danno Pal

All’interno di `PalWorldSettings.ini`, cerca la sezione `OptionSettings`. Le impostazioni del moltiplicatore danno Pal sono memorizzate come chiavi di configurazione in questa sezione.

Devi modificare le seguenti voci:

| Chiave di Configurazione | Valore Predefinito | Scopo |
| --- | --- | --- |
| `PalDamageRateAttack` | `1.000000` | Controlla quanto danno infliggono i tuoi Pal |
| `PalDamageRateDefense` | `1.000000` | Controlla quanto danno ricevono i tuoi Pal |

### Esempio di configurazione

Se le chiavi esistono già, cambia i loro valori con il moltiplicatore desiderato. Se mancano, aggiungile all’interno della voce `OptionSettings`.

```ini
PalDamageRateAttack=1.500000
PalDamageRateDefense=0.800000
```

### Cosa significano i valori

Usa questo comportamento come riferimento quando scegli i valori del moltiplicatore:

| Variazione del Valore | Effetto |
| --- | --- |
| Aumento di `PalDamageRateAttack` | I tuoi Pal infliggono più danno |
| Diminuzione di `PalDamageRateAttack` | I tuoi Pal infliggono meno danno |
| Aumento di `PalDamageRateDefense` | I tuoi Pal ricevono una difesa meno favorevole e subiscono danno secondo il moltiplicatore aumentato |
| Diminuzione di `PalDamageRateDefense` | I tuoi Pal ricevono più danno |

:::caution Controlla attentamente i valori del moltiplicatore
Le impostazioni del server Palworld usano valori numerici decimali per i moltiplicatori. Inserisci solo numeri decimali validi come `0.500000`, `1.000000` o `2.000000`. Formattazioni errate possono impedire al server di caricare correttamente la configurazione.
:::

## Salva le modifiche

Dopo aver modificato i valori in `PalWorldSettings.ini`, salva il file nell’editor di configurazione ZAP-Hosting.

Se stai regolando il bilanciamento per PvE o modalità cooperativa, è consigliato modificare un moltiplicatore alla volta. Questo rende più semplice testare quanto è cambiato il danno inflitto o subito.

:::tip Parti con piccole modifiche
Un aumento moderato come `1.200000` per `PalDamageRateAttack` è spesso più facile da bilanciare rispetto a un salto grande come `3.000000`.
:::

## Riavvia il server

Una volta salvata la configurazione aggiornata, riavvia il tuo server Palworld per caricare le nuove impostazioni del moltiplicatore danno.

Non sono necessari comandi console aggiuntivi dopo la modifica del file. Un riavvio completo del server è sufficiente per applicare le modifiche.

| Azione | Necessaria |
| --- | --- |
| Salva `PalWorldSettings.ini` | Sì |
| Esegui comandi extra | No |
| Riavvia server | Sì |

## Verifica le nuove impostazioni danno

Dopo il riavvio del server, entra nel tuo server Palworld e testa il combattimento con i tuoi Pal. Controlla se:

- i tuoi Pal infliggono la quantità di danno prevista
- i tuoi Pal ricevono la quantità di danno prevista
- il bilanciamento del gameplay è ancora adatto alla configurazione del tuo server

Se il risultato è troppo forte o troppo debole, torna a `PalWorldSettings.ini`, modifica di nuovo i valori del moltiplicatore, salva il file e riavvia il server un’altra volta.

## Conclusione

Congratulazioni, hai modificato con successo il moltiplicatore del danno dei Pal sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂