---
id: palworld-technology-ids
title: "Palworld: Technology IDs"
description: "Learn how to manage Palworld technology IDs, disable specific technology entries, and understand the required config values on your server -> Learn more now"
sidebar_label: Palworld: Technology IDs
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld utilizza gli *ID tecnologia* per identificare le tecnologie sbloccabili e alcune impostazioni correlate basate sugli oggetti. In questa guida, imparerai come disabilitare tecnologie specifiche sul tuo server Palworld di ZAP-Hosting modificando manualmente la voce di configurazione corretta.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting e il permesso di modificare i file di configurazione del server.

:::info Accesso richiesto
Devi avere accesso all’amministrazione del server Palworld e alla sezione `Configs` nel pannello ZAP-Hosting per completare questa configurazione.
:::

:::note Origine degli ID tecnologia
Gli ID tecnologia di Palworld sono stringhe interne definite dal gioco, come `GrapplingGun` o `SkillUnlock_JetDragon`. Non esiste una lista ufficiale in-game nel pannello ZAP-Hosting, quindi devi usare un riferimento esterno affidabile per gli ID validi.
:::

## Comprendere gli ID tecnologia

Gli ID tecnologia sono identificatori interni usati da Palworld per le tecnologie sbloccabili. Invece di usare il nome visibile in gioco, la configurazione del server richiede la stringa ID esatta.

Per disabilitare le tecnologie, Palworld usa l’impostazione `DenyTechnologyList`. Questo valore accetta una lista di ID tecnologia separati da virgola.

### Cosa fa `DenyTechnologyList`

Quando aggiungi ID tecnologia validi a `DenyTechnologyList`, quelle tecnologie vengono bloccate sul tuo server. Questo è utile se vuoi limitare la progressione, rimuovere strumenti di mobilità specifici o personalizzare le regole di gioco per la tua community.

### Formato supportato del valore

Il valore deve essere inserito come lista separata da virgole senza spiegazioni aggiuntive.

| Chiave di Configurazione | Scopo | Formato | Esempio |
|---|---|---|---|
| `DenyTechnologyList` | Disabilita tecnologie selezionate | Stringhe ID tecnologia separate da virgola | `GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon` |

:::caution Corrispondenza esatta degli ID
Gli ID tecnologia devono corrispondere esattamente al valore interno del gioco. Se un ID è scritto male o non è più valido per la versione attuale di Palworld, l’impostazione potrebbe non funzionare come previsto.
:::

## Apri il file di configurazione corretto

Su ZAP-Hosting, questa modifica si effettua modificando manualmente il file di configurazione di Palworld.

### File da modificare

Devi modificare il seguente file:

```ini
PalWorldSettings.ini
```

### Dove trovarlo nell’interfaccia ZAP-Hosting

Apri l’amministrazione del tuo server di gioco Palworld, poi vai su:

```text
Configs
```

Da lì, apri `PalWorldSettings.ini`.

:::tip Posizione della configurazione su ZAP-Hosting
Se il tuo server offre più file modificabili, assicurati di selezionare `PalWorldSettings.ini`, poiché è il file usato per le impostazioni di gioco del server come `DenyTechnologyList`.
:::

## Modifica l’impostazione degli ID tecnologia

Una volta aperto `PalWorldSettings.ini`, individua la lista delle opzioni del server e aggiungi o modifica la voce `DenyTechnologyList`.

### Aggiungi gli ID tecnologia a `DenyTechnologyList`

Usa una lista separata da virgola delle tecnologie che vuoi disabilitare.

Esempio:

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

Questo esempio disabilita:

| ID Tecnologia | Significato |
|---|---|
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Variante di Grappling Gun di livello superiore |
| `SkillUnlock_JetDragon` | Sblocco relativo a JetDragon |

:::note Formato con virgolette
A seconda di come è strutturata la tua voce esistente in `PalWorldSettings.ini`, il valore potrebbe apparire all’interno di un blocco di opzioni più grande. Mantieni lo stile di sintassi già usato nel file e modifica solo il valore di `DenyTechnologyList`.
:::

### Esempio all’interno di un blocco di opzioni

Su molti server Palworld, le impostazioni sono memorizzate all’interno di una riga `OptionSettings` più ampia. In questo caso, la voce potrebbe apparire così:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon")
```

Se `DenyTechnologyList` non è già presente, aggiungila all’interno dello stesso blocco `OptionSettings=(...)` separandola dalle altre voci con una virgola.

:::caution Conserva la sintassi esistente
Non rimuovere altre impostazioni da `OptionSettings`. Una virgola, parentesi o virgolette mancanti possono causare il mancato caricamento corretto della configurazione.
:::

## Scegli ID tecnologia validi

Devi usare ID tecnologia interni validi, non i nomi visualizzati in gioco.

### Esempi di ID tecnologia

Ecco alcuni esempi noti di ID tecnologia usati da Palworld:

| ID Tecnologia | Significato esempio |
|---|---|
| `AIcore` | AI Core |
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Variante di Grappling Gun |
| `GrapplingGun3` | Variante di Grappling Gun |
| `GrapplingGun4` | Variante di Grappling Gun |
| `GrapplingGun5` | Variante di Grappling Gun |
| `SkillUnlock_JetDragon` | Sblocco JetDragon |
| `SkillUnlock_IceHorse` | Sblocco Ice Horse |
| `PALBOX` | Tecnologia relativa a Palbox |
| `RepairBench` | Banco di riparazione |

Poiché Palworld riceve aggiornamenti, la lista completa degli ID può cambiare nel tempo. Se ti serve una lista più ampia, verifica gli ID con una fonte affidabile e aggiornata prima di applicarli.

### Uso correlato degli ID in altre impostazioni

ID interni in stile tecnologia possono essere usati anche in altre opzioni di configurazione di Palworld. Un esempio noto è:

| Chiave di Configurazione | Scopo |
|---|---|
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Imposta un drop personalizzato per uccisioni PvP |

:::info Impostazione PvP correlata
Se prevedi di usare gli ID per personalizzare i drop PvP, verifica che il tipo di ID richiesto da `AdditionalDropItemWhenPlayerKillingInPvPMode` corrisponda all’oggetto che vuoi usare. Questa guida si concentra specificamente su `DenyTechnologyList`.
:::

## Salva e riavvia il server

Dopo aver modificato il file, salva le modifiche nell’interfaccia ZAP-Hosting.

Per applicare la nuova configurazione, riavvia il tuo server Palworld.

### Azioni richieste dopo la modifica

| Azione | Necessaria |
|---|---|
| Salva `PalWorldSettings.ini` | Sì |
| Riavvia il server | Sì |
| Esegui comandi console aggiuntivi | Nessun comando confermato necessario |

Il riavvio è necessario perché Palworld legge queste impostazioni del server all’avvio. Senza riavvio, le nuove restrizioni sulle tecnologie potrebbero non avere effetto.

:::tip Testa dopo il riavvio
Dopo il riavvio del server, connettiti e verifica che le tecnologie selezionate non siano più disponibili come previsto. Questo ti aiuta a confermare che gli ID e la sintassi siano stati inseriti correttamente.
:::

## Risoluzione dei problemi

Se le tecnologie sono ancora disponibili dopo il riavvio, controlla i seguenti punti.

### Verifica l’ortografia degli ID

Assicurati che ogni ID tecnologia sia scritto esattamente come richiesto, inclusa la maiuscola/minuscola.

### Controlla la sintassi della configurazione

Se hai modificato il blocco `OptionSettings=(...)`, verifica che:

- ogni impostazione sia separata da una virgola
- le virgolette siano aperte e chiuse correttamente
- le parentesi siano complete
- `DenyTechnologyList` sia all’interno del blocco corretto

### Conferma che il server sia stato riavviato correttamente

Se il server non si è riavviato correttamente, la configurazione aggiornata potrebbe non essere stata caricata.

:::danger Rischio di configurazione non valida
Un file `PalWorldSettings.ini` formattato in modo errato può impedire il caricamento corretto delle impostazioni. Se succede, ripristina la versione funzionante precedente del file e riapplica la modifica con attenzione.
:::

## Conclusione

Congratulazioni, hai disabilitato con successo tecnologie specifiche sul tuo server Palworld usando gli ID tecnologia. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂