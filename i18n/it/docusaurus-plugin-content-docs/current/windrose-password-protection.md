---
id: windrose-password-protection
title: "Windrose: Protezione con Password"
description: "Imposta una password sul tuo server di gioco Windrose per proteggere l'accesso e gestire in modo sicuro le impostazioni di cambio password nella configurazione del server -> Scopri di più ora"
sidebar_label: Protezione con Password
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Windrose supporta la protezione con password, che ti permette di limitare l'accesso al tuo server dedicato con una password di accesso. In questa guida, imparerai come abilitare, modificare o rimuovere la password sul tuo server Windrose usando la gestione del gameserver di ZAP-Hosting.

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server Windrose nell'interfaccia web di ZAP-Hosting e il permesso di modificare i file del server.

:::info Accesso Richiesto
Devi avere accesso al Dashboard del server e all'area di gestione file per poter modificare il file `ServerDescription.json`.
:::

## Come Funziona la Protezione con Password in Windrose

Impostare una password aiuta a prevenire l'accesso non autorizzato al tuo server di gioco Windrose. I giocatori possono comunque raggiungere il server tramite il codice invito, ma devono inserire la password corretta prima di potersi connettere.

Questo è utile se vuoi:
- limitare l'accesso a amici, staff o a un gruppo privato
- proteggere un server di test dall'accesso pubblico
- controllare chi può entrare senza affidarti a un gestore di password esterno o a un sistema di password account

:::note Comportamento della Password
Windrose utilizza la password configurata direttamente nel file del server. Questa è separata dalla password del tuo account ZAP-Hosting e non è collegata a strumenti come gestori di password, integrazione Google o liste di password.
:::

## Abilitare la Protezione con Password

Per applicare una password, devi prima fermare il server, modificare il file di configurazione e poi riavviare il server.

### Ferma il Server

Apri il Dashboard del tuo server nell'interfaccia web di ZAP-Hosting e ferma completamente il server prima di apportare modifiche.

:::caution Ferma il Server Prima di Modificare
Devi fermare il server prima di modificare `ServerDescription.json` per evitare conflitti di configurazione o che il file venga sovrascritto mentre il server è in esecuzione.
:::

### Apri il File di Configurazione

Nel menu laterale del pannello, apri `Files`.

Poi individua e apri il file `ServerDescription.json` nella directory principale della lista file del server.

### Modifica le Impostazioni della Password

All'interno di `ServerDescription.json`, imposta `IsPasswordProtected` su `true` e definisci la password desiderata nel campo `Password`.

```json
"IsPasswordProtected": true,
"Password": "YourPasswordHere"
```

Sostituisci `YourPasswordHere` con la tua password sicura.

:::tip Scegli una Password Forte
Usa una password unica che non sia riutilizzata dalla password del tuo account o da altri servizi. Questo aiuta a proteggere il tuo server Windrose da accessi indesiderati.
:::

### Salva e Riavvia il Server

Dopo aver modificato il file, clicca su `Save Content`.

Una volta salvato il file, riavvia il server dal Dashboard. Ora il tuo server Windrose richiederà la password configurata quando i giocatori tenteranno di entrare.

## Riferimento Configurazione

La tabella seguente spiega le impostazioni rilevanti in `ServerDescription.json`:

| Chiave | Tipo | Esempio | Descrizione |
| --- | --- | --- | --- |
| `IsPasswordProtected` | Booleano | `true` | Abilita o disabilita la protezione con password |
| `Password` | Stringa | `"YourPasswordHere"` | Definisce la password di accesso usata quando la protezione è attiva |

## Cambiare la Password Esistente

Se vuoi cambiare la password in un secondo momento, il procedimento è lo stesso della configurazione iniziale.

### Aggiorna il Valore della Password

Ferma il server, apri `ServerDescription.json` e modifica il valore nel campo `Password` con la nuova password.

Esempio:

```json
"IsPasswordProtected": true,
"Password": "[your_new_password]"
```

Il segnaposto `[your_new_password]` rappresenta la nuova password che vuoi far usare ai giocatori per entrare nel server.

### Salva e Riavvia di Nuovo

Salva il file e riavvia il server affinché la modifica della password abbia effetto.

:::note Controllo Password
Se i giocatori non riescono a entrare dopo il cambio password, chiedi loro di verificare attentamente l'inserimento, inclusi caratteri maiuscoli e minuscoli se applicabile.
:::

## Rimuovere la Protezione con Password

Se non vuoi più proteggere il tuo server Windrose con una password, puoi disabilitare la funzione nello stesso file di configurazione.

### Disabilita l'Impostazione

Ferma il server e apri di nuovo `ServerDescription.json`.

Imposta `IsPasswordProtected` su `false`. Il valore di `Password` viene ignorato quando questa opzione è disabilitata.

```json
"IsPasswordProtected": false,
"Password": ""
```

### Salva e Riavvia il Server

Clicca su `Save Content` e riavvia il server. I giocatori potranno così entrare senza inserire una password.

## Risoluzione Problemi

Se la protezione con password non funziona come previsto, controlla i seguenti punti.

| Problema | Possibile Causa | Soluzione |
| --- | --- | --- |
| Il server non chiede la password | `IsPasswordProtected` è ancora impostato su `false` | Impostalo su `true`, salva il file e riavvia il server |
| I giocatori non riescono a entrare con la password corretta | Password inserita in modo errato | Verifica il valore configurato e chiedi ai giocatori di controllare attentamente l'inserimento |
| Le modifiche non si applicano | Il server non è stato riavviato dopo la modifica | Riavvia il server dopo aver salvato `ServerDescription.json` |
| Le modifiche al file si perdono | Il file è stato modificato mentre il server era in esecuzione | Ferma prima il server, riapplica le modifiche, poi salva e riavvia |

:::danger Non Conservare Password Sensibili Pubblicamente
Non condividere la password del server pubblicamente in post di community, screenshot o esportazioni di file. Evita anche di usare password da vecchie liste o di riutilizzare credenziali di altri servizi.
:::

## Conclusione

Congratulazioni, hai configurato con successo la protezione con password sul tuo server Windrose. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂