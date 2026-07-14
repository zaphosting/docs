---
id: palworld-enable-raids
title: "Palworld: Abilitare le Raid"
description: "Scopri come abilitare o disabilitare le raid sul tuo server Palworld modificando l'impostazione corretta per gli attacchi nemici invasori. -> Scopri di più ora"
sidebar_label: Palworld: Abilitare le Raid
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le raid in Palworld sono attacchi nemici invasori che possono colpire le basi dei giocatori sul tuo server. In questa guida, imparerai come abilitare o disabilitare le raid modificando manualmente il file di configurazione corretto nell’amministrazione del server di gioco ZAP-Hosting.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld tramite l’interfaccia web ZAP-Hosting e i permessi per modificare i file di configurazione del server.

:::info Configurazione Manuale Necessaria
Questa configurazione si effettua modificando manualmente il file di configurazione del server Palworld nella sezione **Configs** dell’amministrazione del server di gioco. Dopo aver salvato le modifiche, è necessario riavviare il server affinché la nuova impostazione abbia effetto.
:::

## Individua il File di Configurazione Corretto

Per abilitare o disabilitare le raid, devi modificare il file `PalWorldSettings.ini`.

Nell’amministrazione del server di gioco ZAP-Hosting:

1. Apri il tuo server di gioco **Palworld**.
2. Vai alla sezione **Configs**.
3. Apri il file chiamato `PalWorldSettings.ini`.

Questo file contiene i valori principali di configurazione del gameplay per il tuo server Palworld, inclusa l’impostazione che controlla se le raid sono abilitate.

## Modifica l’Impostazione delle Raid

All’interno di `PalWorldSettings.ini`, cerca la sezione `OptionSettings`. La chiave di configurazione rilevante è:

```ini
bEnableInvaderEnemy=True
```

Questa impostazione controlla se le raid nemiche invasori sono attive sul server.

### Abilitare le Raid

Se vuoi abilitare le raid, imposta il valore su `True`:

```ini
bEnableInvaderEnemy=True
```

Con questo valore, durante il gioco possono verificarsi attacchi nemici periodici alle basi dei giocatori.

### Disabilitare le Raid

Se vuoi disabilitare le raid, imposta il valore su `False`:

```ini
bEnableInvaderEnemy=False
```

Questo disabilita completamente gli attacchi nemici invasori, creando un’esperienza di costruzione più tranquilla e riducendo leggermente il carico sul server.

## Riferimento Configurazione

Usa la tabella seguente come riferimento rapido per l’impostazione delle raid:

| File di Configurazione | Chiave Configurazione | Valore | Effetto |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `True` | Abilita le raid e gli attacchi nemici invasori |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `False` | Disabilita tutte le raid e gli attacchi nemici invasori |

:::note Comportamento Predefinito
Il comportamento predefinito del server Palworld è generalmente `bEnableInvaderEnemy=True`, quindi le raid sono abilitate a meno che non modifichi manualmente questa impostazione.
:::

## Salva e Applica le Modifiche

Dopo aver modificato il valore in `PalWorldSettings.ini`, salva il file nella sezione **Configs** di ZAP-Hosting.

Devi quindi riavviare il tuo server Palworld affinché la configurazione aggiornata venga caricata.

### Riavvia il Server

Usa la funzione di riavvio nell’amministrazione del server di gioco ZAP-Hosting dopo aver salvato il file.

:::caution Riavvio Necessario
Se non riavvii il server, la modifica dell’impostazione delle raid potrebbe non essere applicata. Modificare solo il file non basta.
:::

## Verifica l’Impostazione

Dopo il riavvio, la nuova configurazione delle raid dovrebbe essere attiva.

- Se `bEnableInvaderEnemy=True`, le raid sono abilitate.
- Se `bEnableInvaderEnemy=False`, le raid sono disabilitate.

Se l’impostazione non sembra applicata, riapri `PalWorldSettings.ini` e verifica che il valore sia stato salvato correttamente senza errori di formattazione.

:::tip Costruzione Base in Pace
Disabilitare le raid può essere utile se vuoi concentrarti sull’esplorazione, la costruzione della base o un gameplay cooperativo meno stressante senza attacchi nemici periodici.
:::

## Conclusione

Congratulazioni, hai abilitato o disabilitato con successo le raid sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂