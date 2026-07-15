---
id: palworld-performance-guide
title: "Palworld: Guida alle Prestazioni"
description: "Migliora le prestazioni del server Palworld, riduci i cali di performance e diminuisci il carico del server con modifiche manuali alla configurazione. -> Scopri di più ora"
sidebar_label: "Guida alle Prestazioni"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le prestazioni del server Palworld possono diminuire nel tempo, soprattutto su server attivi con molte basi, lavoratori, oggetti abbandonati e Pals selvatici. In questa guida imparerai come ottimizzare il file `PalWorldSettings.ini` nell’interfaccia web ZAP-Hosting per ridurre il carico del server e migliorare le prestazioni complessive.

## Preparazione

Prima di iniziare, devi avere accesso all’amministrazione del tuo server di gioco Palworld e il permesso di modificare i file di configurazione.

:::info Accesso Richiesto
Devi avere accesso al tuo server Palworld nel pannello di amministrazione server di gioco ZAP-Hosting. Il file di configurazione necessario si trova nella sezione `Configs`.
:::

:::caution Crea Prima un Backup
La modifica delle impostazioni di performance può influenzare significativamente il gameplay. Prima di modificare la configurazione, è consigliato creare un backup per poter ripristinare le impostazioni precedenti se necessario.
:::

## Apri il File di Configurazione di Palworld

Per ottimizzare il server, devi modificare il file principale di configurazione del server Palworld.

1. Accedi all’interfaccia web ZAP-Hosting.
2. Apri l’amministrazione del tuo server di gioco **Palworld**.
3. Vai su **Configs**.
4. Apri il file `PalWorldSettings.ini`.



:::note Dove Apportare le Modifiche
Le impostazioni relative alle prestazioni sono memorizzate in `PalWorldSettings.ini`. Devi modificare manualmente i valori delle opzioni esistenti in questo file.
:::

## Comprendere le Impostazioni Rilevanti

Diverse impostazioni di Palworld influenzano direttamente le prestazioni del server. Alcuni valori riducono il carico su CPU, memoria e simulazione del mondo, mentre altri aiutano a limitare l’accumulo causato da giocatori inattivi o entità eccessive nel mondo.

### Impostazioni Principali per le Prestazioni

Le seguenti impostazioni sono le più importanti se vuoi ridurre i cali di prestazioni su un server molto attivo.

| Impostazione | Default | Modifica Consigliata | Effetto |
|---|---:|---|---|
| `BuildObjectDeteriorationDamageRate` | `1.0` | Mantieni a `0.1` o superiore | Un deterioramento più alto aiuta a rimuovere più velocemente strutture abbandonate |
| `bAutoResetGuildNoOnlinePlayers` | `False` | Imposta su `True` se appropriato | Rimuove basi di gilde inattive dopo il periodo di grazia configurato |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Regola secondo necessità | Definisce il tempo di inattività in ore prima del reset della gilda |
| `PalSpawnNumRate` | `1.0` | Diminuisci | Riduce il numero di Pals selvatici spawnati e il carico di simulazione |
| `DropItemMaxNum` | `3000` | Diminuisci | Limita il numero di oggetti abbandonati nel mondo |
| `DropItemAliveMaxHours` | `1.0` | Diminuisci | Rimuove più rapidamente gli oggetti abbandonati |
| `BaseCampMaxNumInGuild` | `4` | Diminuisci | Riduce il numero di basi per gilda |
| `ServerReplicatePawnCullDistance` | `15000.0` | Diminuisci | Riduce la distanza di sincronizzazione dei Pal e il carico di rete/server |
| `BaseCampWorkerMaxNum` | `15` | Diminuisci | Limita il numero di Pals lavoratori per base |
| `MaxBuildingLimitNum` | `0` | Imposta un valore | Limita il numero totale di edifici per giocatore |
| `bEnableInvaderEnemy` | `True` | Imposta su `False` | Disabilita nemici invasori in stile raid e riduce il carico |
| `bEnableFastTravel` | `True` | Imposta su `False` se necessario | Può ridurre i freeze causati dagli eventi di viaggio rapido |
| `bIsPvP` | `False` | Mantieni `False` a meno che non sia richiesto | Il PvP può aumentare il carico del server in ambienti attivi |

### Impostazioni Secondarie per le Prestazioni

Queste impostazioni possono aiutare soprattutto su server pubblici più grandi.

| Impostazione | Default | Modifica Consigliata | Effetto |
|---|---:|---|---|
| `BaseCampMaxNum` | `128` | Diminuisci | Riduce il numero totale di basi consentite sul server |
| `AutoSaveSpan` | `240` | Aumenta | Riduce la frequenza dei salvataggi automatici del server |

:::tip Cambia Poco per Volta
È meglio modificare solo pochi valori alla volta e poi testare il comportamento del server. Così è più facile capire quale impostazione ha migliorato le prestazioni e quale ha influenzato troppo il gameplay.
:::

## Modifica la Configurazione

Palworld memorizza le opzioni del server nella sezione `OptionSettings` all’interno di `PalWorldSettings.ini`. Devi modificare manualmente le voci rilevanti.

### Esempio di Configurazione Ottimizzata

L’esempio seguente mostra una configurazione conservativa focalizzata sulle prestazioni. Sostituisci solo i valori che vuoi effettivamente usare per il tuo server.

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=0.800000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=False,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=2000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=64,BaseCampWorkerMaxNum=10,DropItemAliveMaxHours=0.500000,bAutoResetGuildNoOnlinePlayers=True,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=False,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,ServerReplicatePawnCullDistance=10000.000000,bEnableGuildPlayerSelect=False,BanListURL="https://api.palworldgame.com/api/banlist.txt",bAutoResetGuildNoOnlinePlayers=True,BaseCampMaxNumInGuild=3)
```

:::caution Verifica le Voci Esistenti
Il formato di configurazione di Palworld può cambiare tra gli aggiornamenti. Prima di salvare, assicurati di modificare la riga `OptionSettings` già presente nel file, evitando di creare voci duplicate o conflittuali.
:::

### Modifiche Consigliate ai Valori

Se non vuoi sostituire tutta la riga, puoi modificare solo i valori rilevanti nella tua configurazione esistente.

| Voce | Valore Esempio | Perché Modificarlo |
|---|---:|---|
| `PalSpawnNumRate` | `0.8` | Riduce gli spawn di Pals selvatici |
| `DropItemMaxNum` | `2000` | Diminuisce l’accumulo di oggetti |
| `DropItemAliveMaxHours` | `0.5` | Rimuove più velocemente gli oggetti abbandonati |
| `BaseCampMaxNum` | `64` | Riduce il numero totale di basi |
| `BaseCampMaxNumInGuild` | `3` | Limita l’espansione delle basi di gilda |
| `BaseCampWorkerMaxNum` | `10` | Riduce il carico dei lavoratori AI |
| `ServerReplicatePawnCullDistance` | `10000.0` | Diminuisce la distanza di replicazione |
| `bEnableInvaderEnemy` | `False` | Disabilita il carico legato ai raid |
| `bEnableFastTravel` | `False` | Evita freeze legati al viaggio rapido |
| `bAutoResetGuildNoOnlinePlayers` | `True` | Pulisce le basi di gilde inattive |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Imposta il periodo di grazia per inattività |
| `MaxBuildingLimitNum` | `[your_limit]` | Limita costruzioni eccessive |
| `bIsPvP` | `False` | Previene carichi aggiuntivi PvP |
| `AutoSaveSpan` | `[your_value]` | Riduce la frequenza dei salvataggi se supportato dal formato attuale |

:::danger Il Reset delle Gilde Inattive Cancella le Basi
Se abiliti `bAutoResetGuildNoOnlinePlayers=True`, le gilde inattive possono essere sciolte automaticamente dopo il tempo impostato in `AutoResetGuildTimeNoOnlinePlayers`. Questo può cancellare definitivamente basi e strutture appartenenti a giocatori inattivi.
:::

## Salva e Applica le Modifiche

Dopo aver modificato il file, devi salvare la configurazione e riavviare il server affinché le nuove impostazioni vengano caricate.

1. Salva le modifiche in `PalWorldSettings.ini`.
2. Torna all’amministrazione del server di gioco.
3. Riavvia il server Palworld.



:::info Riavvio Necessario
È necessario un riavvio dopo aver modificato `PalWorldSettings.ini`. Senza riavvio, il server continuerà a usare le impostazioni precedenti.
:::

## Best Practice per Prestazioni a Lungo Termine

Le modifiche manuali aiutano, ma sono solo una parte dell’ottimizzazione complessiva del server.

### Usa Riavvii Automatici Giornalieri

Un riavvio giornaliero è una best practice comune per i server Palworld perché l’uso delle risorse può accumularsi nel tempo.

- Crea un programma di riavvio automatico nell’amministrazione server ZAP-Hosting
- Scegli un orario con bassa attività dei giocatori
- Avvisa i tuoi giocatori in anticipo se la community è attiva

### Limita la Crescita del Mondo

La causa principale del calo di prestazioni su server Palworld a lungo termine è solitamente la complessità del mondo.

Per ridurre questo:

- abbassa i limiti delle basi
- riduci il numero di lavoratori
- diminuisci l’accumulo di oggetti abbandonati
- riduci gli spawn di Pals selvatici
- pulisci con attenzione le gilde inattive
- considera di impostare un limite di costruzioni con `MaxBuildingLimitNum`

### Testa le Modifiche Gradualmente

Non applicare riduzioni estreme subito, a meno che il server non sia già instabile.

Un buon processo è:

1. Riduci prima spawn e valori degli oggetti
2. Poi diminuisci limiti di basi e lavoratori
3. Disabilita funzionalità opzionali ad alto carico se necessario
4. Riavvia e monitora le prestazioni dopo ogni serie di modifiche

:::tip Bilancia Prestazioni e Gameplay
Le impostazioni migliori dipendono dal tipo di server. Un piccolo server privato può mantenere valori più alti, mentre un grande server pubblico spesso necessita limiti più severi per evitare cali di prestazioni.
:::

## Conclusione

Congratulazioni, hai ottimizzato con successo le prestazioni del tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂