---
id: conan-configuration
title: "Conan Exiles: Configura il tuo server"
description: "Scopri come personalizzare le impostazioni del tuo server Conan Exiles per un gameplay ottimale e sicurezza → Scopri di più ora"
sidebar_label: Configurazione Server
services:
  - gameserver-conan
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Configurazione Server

I server di Conan Exiles possono essere configurati in modo esteso. La configurazione del server avviene tramite i file di config. Li trovi nell’interfaccia web nella gestione del server di gioco sotto Configs. Apri il file di configurazione **ServerSettings.ini**.



![](https://screensaver01.zap-hosting.com/index.php/s/HSqXbCnS62s9mEx/preview)



Qui sotto trovi una panoramica categorizzata di tutti i comandi rilevanti, che puoi usare per configurare liberamente il tuo server come vuoi. Alcuni comandi potrebbero non essere presenti di default nel file di config. Questi comandi possono essere semplicemente aggiunti dopo.

<InlineVoucher />

## Generale

Nelle impostazioni generali trovi tutti i comandi rilevanti per personalizzare il nome del server, le password, l’anti-cheat.

| Opzione                           | Descrizione                                                  | Comando Config                  |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| Nome Server                      | Nome del tuo server.                                         | ServerName="..."                |
| Numero di giocatori              | Numero massimo di giocatori                                  | Dipende dal pacchetto           |
| Messaggio del Giorno             | Messaggio del giorno                                         |                                |
| Password server                 | Qui puoi cambiare la password del server                      | ServerMessageOfTheDay="..."     |
| Password admin                  | Accesso per diventare admin. Leggi di più nella guida Diventare admin | AdminPassword="..."             |
| BattlEye abilitato             | Attiva la protezione anti-cheat BattlEye                      | IsBattlEyeEnabled=              |
| PVP abilitato                  | Attiva o disattiva il PVP. 1 = attivato, 0 = disattivato     | PVPEnabled=                     |
| Restrizione oraria PvP          | Se attivato, il combattimento tra giocatori è possibile solo in orari specifici | RestrictPVPTime=                |
| PvP Blitz abilitato             | Attiva o disattiva il PVP Blitz. 1 = attivato, 0 = disattivato (default) | PVPBlitzServer=                 |
| Restrizione oraria danni strutture PvP | Se attivato, i giocatori possono attaccare e distruggere strutture altrui solo in orari specifici | RestrictPVPBuildingDamageTime=  |
| Community                      | Definisce lo stile della community: 0=None 1=Purist 2=Relaxed 3=Hard Core 4=Role Playing 5=Experimental | ServerCommunity=                |
| Regione Server                 | La selezione della regione server influisce sul filtro nella lista server. Scegli la tua regione per far trovare il server ai giocatori della stessa zona. 0 = Europa, 1 = Nord America, 2 = Asia, 3 = Australia, 4 = Sud America, 5 = Giappone | serverRegion=                   |
| No Ownership                   | Se attivato, non ci sono regole di proprietà sul server. Tutti i giocatori possono saccheggiare tutti i forzieri, usare tutte le macchine, minare tutti gli edifici, ecc. 1 = attivato, 0 = disattivato (default). | NoOwnership=                    |
| Contenitori ignorano proprietà | Se attivato, tutti i contenitori sono aperti agli altri giocatori. 1 = attivato, 0 = disattivato | ContainersIgnoreOwnership=      |
| Danni a strutture di altri giocatori | Se attivato, i giocatori possono attaccare e distruggere le strutture altrui. 1 = attivato, 0 = disattivato | CanDamagePlayerOwnedStructures= |
| Danni ai giocatori             | Se attivato, i giocatori possono subire danni da altri giocatori. 1 = attivato, 0 = disattivato | bCanBeDamaged=                  |
| Abilita tempesta di sabbia    | Attiva le tempeste di sabbia che periodicamente attraversano le Terre Esiliate. | EnableSandStorm=                |
| Dimensione massima clan       | Imposta la dimensione massima dei clan sul server. Quando un clan raggiunge il limite, non può aggiungere nuovi membri. | clanMaxSize=                    |
| Nudità massima                | Imposta il livello massimo di nudità sul server. Sovrascrive l’opzione client. Se il server è impostato su "No Nudity", anche se un giocatore ha il client in "Full Nudity", non vedrà nudità sul server. Se il server permette nudità completa e il client è parziale, il client mostra solo nudità parziale. 0 = nessuna, 1 = parziale, 2 = completa | MaxNudity=                      |
| Voice Chat server             | Determina se la chat vocale è abilitata nel gioco. 1 = attivata, 0 = disattivata | serverVoiceChat=                |



## Progressione

Nelle impostazioni di progressione trovi tutti i comandi per personalizzare l’XP che i giocatori ricevono.

| Opzione                      | Descrizione                                                  | Comando Config             |
| ---------------------------- | ------------------------------------------------------------ | -------------------------- |
| Moltiplicatore XP giocatore  | Moltiplica tutti i tipi di XP che i giocatori ricevono. Permette di regolare il progresso per tutte le attività. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPRateMultiplier=    |
| Moltiplicatore XP tempo      | Conan Exiles dà XP passivamente nel tempo solo per sopravvivere. Questo comando moltiplica la velocità con cui i giocatori ricevono questo XP. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPTimeMultiplier=    |
| Moltiplicatore XP uccisioni | Moltiplica l’XP ricevuto per uccidere mostri e giocatori. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPKillMultiplier=    |
| Moltiplicatore XP raccolta  | Moltiplica l’XP ricevuto per il farming. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPHarvestMultiplier= |
| Moltiplicatore XP crafting  | Moltiplica l’XP ricevuto per il crafting. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPCraftMultiplier=   |



## Tempo

Nelle impostazioni tempo trovi tutti i comandi per regolare il tempo. Puoi configurare giorni e notti più lunghi o più corti a piacere.

| Opzione               | Descrizione                                                  | Comando Config        |
| --------------------- | ------------------------------------------------------------ | --------------------- |
| Velocità ciclo giorno | Moltiplica la velocità dell’intero ciclo di 24 ore. Le singole parti del giorno si possono regolare con le opzioni sotto. Il moltiplicatore si applica in aggiunta alle modifiche seguenti. | DayCycleSpeedScale=   |
| Velocità giorno       | Le ore diurne in Conan Exiles sono tra le 7:00 e le 16:59 ora di gioco. Cambiare questo moltiplicatore aumenta la durata delle ore diurne. | DayTimeSpeedScale=    |
| Velocità notte        | Le ore notturne sono tra le 19:00 e le 4:59 ora di gioco. Cambiare questo moltiplicatore aumenta la durata delle ore notturne. | NightTimeSpeedScale=  |
| Velocità alba/tramonto | L’alba è tra le 5:00 e le 6:59, il tramonto tra le 17:00 e le 18:59. Cambiare questo moltiplicatore moltiplica il tempo passato in queste fasi. | DawnDuskSpeedScale=   |
| Usa tempo di recupero | Attiva o disattiva la meccanica di catch-up timing sul server. true = attivato, false = disattivato. | UseClientCatchUpTime= |
| Tempo di recupero     | Per dare ai nuovi giocatori un inizio fluido, Conan Exiles può forzare il client a partire da un orario specifico indipendentemente dall’orario server. I nuovi personaggi iniziano a quell’ora e giocano fino a che il server non li raggiunge. Consigliamo di non impostare le ore notturne. | ClientCatchUpTime=    |



## Sopravvivenza

Nelle impostazioni sopravvivenza trovi tutti i comandi per personalizzare la sopravvivenza. Per esempio, quanta vita ha un giocatore, quanto velocemente rigenera e altro.

| Opzione                                | Descrizione                                                  | Comando Config                     |
| ------------------------------------- | ------------------------------------------------------------ | ---------------------------------- |
| Moltiplicatore salute giocatore       | Moltiplica direttamente la vita del giocatore. 0.5 = 50 HP, 1.0 = 100 HP (standard), 1.5 = 150 HP | PlayerHealthMultiplier=            |
| Velocità rigenerazione salute         | Moltiplica la velocità di rigenerazione passiva della salute. 0.5 = 2.5 HP/s, 1.0 = 5.0 HP/s (default), 1.5 = 7.5 HP/s | PlayerHealthRegenSpeedScale=       |
| Moltiplicatore stamina giocatore      | Moltiplica la stamina del giocatore. 0.5 = 50 stamina, 1.0 = 100 stamina (default), 1.5 = 150 stamina | PlayerStaminaMultiplier=           |
| Velocità sprint giocatore             | Definisce la velocità di sprint. 0.5 = 1 m/s, 1.0 = 2 m/s (default), 1.5 = 3 m/s | PlayerSprintSpeedScale=            |
| Moltiplicatore costo stamina          | Aumenta o diminuisce la stamina consumata per attività | PlayerStaminaCostMultiplier=       |
| Moltiplicatore costo sprint stamina   | Aumenta o diminuisce la stamina consumata per sprint | PlayerStaminaCostSprintMultiplier= |
| Velocità rigenerazione stamina        | Moltiplica la rigenerazione passiva della stamina. 0 = nessuna perdita, 0.5 = 1.0 perdita acqua/s, 1.0 = 2.0 perdita acqua/s (default), 1.5 = 3.0 perdita acqua/s | PlayerStaminaRegenSpeedScale=      |
| Moltiplicatore sete attiva             | Scala la velocità con cui un giocatore perde o guadagna acqua attivamente. 0 = nessuna perdita, 0.5 = 1.0 perdita acqua/s, 1.0 = 2.0 perdita acqua/s (default), 1.5 = 3.0 perdita acqua/s | PlayerActiveThirstMultiplier=      |
| Moltiplicatore sete inattiva           | Scala la velocità con cui un giocatore perde o guadagna acqua passivamente. 0 = nessuna perdita, 0.5 = 1.0 perdita acqua/s, 1.0 = 2.0 perdita acqua/s (default), 1.5 = 3.0 perdita acqua/s | PlayerIdleThirstMultiplier=        |
| Moltiplicatore sete offline            | Scala la velocità con cui un giocatore perde o guadagna acqua offline. 0 = nessuna perdita, 0.5 = 1.0 perdita acqua/s, 1.0 = 2.0 perdita acqua/s (default), 1.5 = 3.0 perdita acqua/s | PlayerOfflineThirstMultiplier=     |
| Moltiplicatore fame attiva             | Scala la velocità con cui un giocatore perde o guadagna cibo attivamente. 0 = nessuna perdita, 0.5 = 1.0 perdita acqua/s, 1.0 = 2.0 perdita acqua/s (default), 1.5 = 3.0 perdita acqua/s | PlayerActiveHungerMultiplier=      |
| Moltiplicatore fame inattiva           | Scala la velocità con cui un giocatore perde o guadagna cibo passivamente. 0 = nessuna perdita, 0.5 = 1.0 perdita acqua/s, 1.0 = 2.0 perdita acqua/s (default), 1.5 = 3.0 perdita acqua/s | PlayerIdleHungerMultiplier=        |
| Moltiplicatore fame offline            | Scala la velocità con cui un giocatore perde o guadagna cibo offline. 0 = nessuna perdita, 0.5 = 1.0 perdita acqua/s, 1.0 = 2.0 perdita acqua/s (default), 1.5 = 3.0 perdita acqua/s | PlayerOfflineHungerMultiplier=     |
| Personaggi disconnessi restano nel mondo | Se True, i corpi dei giocatori restano nel mondo in stato incosciente, se False, i corpi vengono rimossi offline. (Default: True) | LogoutCharactersRemainInTheWorld=  |
| Drop equipaggiamento alla morte       | Se True, i giocatori che muoiono lasciano cadere l’equipaggiamento al respawn. Se False, risorgono con tutto l’equipaggiamento. (Default True) | DropEquipmentOnDeath=              |
| Drop oggetti barra rapida alla morte  | Se True, i giocatori perdono gli oggetti sulla barra rapida alla morte. Se False, li mantengono. (Default True) | DropShortcutbarOnDeath=            |
| Drop zaino alla morte                  | Se True, i giocatori perdono gli oggetti nello zaino alla morte. Se False, li mantengono. (Default True) | DropBackpackOnDeath=               |
| Tutti possono saccheggiare il cadavere | Se True, chiunque può saccheggiare il cadavere di un giocatore morto. Se False, solo il giocatore può farlo. (Default True) | EverybodyCanLootCorpse=            |
| Moltiplicatore rimozione corruzione thrall | Aumentando questo valore si accelera la rimozione della corruzione da parte dei thrall. Riducendolo si rallenta. | ThrallCorruptionRemovalMultiplier= |
| Moltiplicatore guadagno corruzione giocatore | Moltiplica la corruzione ricevuta dai giocatori.                      | PlayerCorruptionGainMultiplier=    |



## Combattimento

Nelle impostazioni combattimento trovi tutti i comandi per regolare i danni. Include quanto danno fa un giocatore, quanto ne assorbe e altro.

| Opzione                          | Descrizione                                                  | Comando Config                 |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| Moltiplicatore danno giocatore  | Moltiplica il danno inflitto dal giocatore. 0 = nessun danno, 0.5 = 10 danno, 1.0 = 20 danno (default), 1.5 = 30 danno | PlayerDamageMultiplier=        |
| Moltiplicatore danno subito giocatore | Moltiplica il danno subito dal giocatore. 0 = nessun danno, 0.5 = 10 danno, 1.0 = 20 danno (default), 1.5 = 30 danno | PlayerDamageTakenMultiplier=   |
| Moltiplicatore danno minion     | Moltiplica il danno inflitto da thrall e pet. 0 = nessun danno, 0.5 = 10 danno, 1.0 = 20 danno (default), 1.5 = 30 danno | MinionDamageMultiplier=        |
| Moltiplicatore danno subito minion | Moltiplica il danno subito da thrall e pet. 0 = nessun danno, 0.5 = 10 danno, 1.0 = 20 danno (default), 1.5 = 30 danno | MinionDamageTakenMultiplier=   |
| Moltiplicatore danno NPC        | Moltiplica il danno inflitto da NPC e mostri. 0 = nessun danno, 0.5 = 10 danno, 1.0 = 20 danno (default), 1.5 = 30 danno | NPCDamageMultiplier=           |
| Moltiplicatore danno subito NPC | Moltiplica il danno subito da NPC e mostri. | NPCDamageTakenMultiplier=      |
| Moltiplicatore salute NPC       | Aumenta la salute di tutti gli NPC.                            | NPCHealthMultiplier=           |
| Moltiplicatore respawn NPC      | Moltiplica la velocità di respawn degli NPC dopo la morte. Nota: molti NPC *NON* rispettano questo valore. 0 = mai respawn (non testato), 0.5 = 15 secondi, 1.0 = 30 secondi (default), 1.5 = 45 secondi | NPCRespawnMultiplier=          |
| Moltiplicatore danno durabilità | Modifica il danno alla durabilità degli oggetti usati o danneggiati. Influisce su quanto durano armi, strumenti e armature. 0= invulnerabili, 0.5 = 5 perdita durabilità per colpo, 1.0 = 10 perdita durabilità per colpo (default), 1.5 = 15 perdita durabilità per colpo. | DurabilityMultiplier=          |
| Moltiplicatore durabilità scudo | Modifica il danno alla durabilità dello scudo mentre blocca. Influisce sulla durata degli scudi. 0 = invulnerabili, 0.5 = 5 perdite durabilità per colpo, 1.0 = 10 perdite durabilità per colpo (default), 1.5 = 15 perdite durabilità per colpo. | ShieldDurabilityMultiplier=    |
| Tempo risveglio thrall         | Tempo in secondi che un thrall resta incosciente. 0 = risveglio immediato (non testato), 300 = 5 minuti, 600 = 10 minuti (default), 900 = 15 minuti. | UnconsciousTimeSeconds=        |
| Danno thrall incosciente       | Moltiplica il danno subito da un thrall incosciente. | ConciousnessDamageMultiplier=  |
| Durata avatar                 | Durata massima di un Avatar nel mondo. | AvatarLifetime=                |
| Disabilita avatar             | True: gli Avatar non possono essere evocati su questo server, False: possono essere evocati. | AvatarsDisabled=               |
| Tempo evocazione avatar       | Tempo necessario per evocare un Avatar.                       | AvatarSummonTime=              |
| Moltiplicatore durata cupola avatar | Durata delle cupole avatar.                   | AvatarDomeDurationMultiplier=  |
| Disabilita notifiche claim terreno | Disabilita le notifiche di claim terreno. True: disabilita notifiche. False: abilita notifiche. | DisableLandclaimNotifications= |



## Raccolta

Nelle impostazioni raccolta trovi tutti i comandi per personalizzare il farming. Include la velocità di raccolta, il respawn delle risorse, ecc.

| Opzione                            | Descrizione                                                  | Comando Config                  |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------- |
| Scala velocità deperimento cibo   | Influisce sul tempo di deperimento del cibo (valori più bassi = cibo che dura di più). 0 = mai deperisce, 0.5 = 4 minuti, 1.0 = 2 minuti (default), 1.5 = 1 minuto | ItemSpoilRateScale=             |
| Moltiplicatore quantità raccolta  | Moltiplica la quantità di risorse raccolte. 1.0 = 1 risorsa (default), 2.0 = 2 risorse | HarvestAmountMultiplier=        |
| Moltiplicatore velocità respawn risorse | Moltiplica la velocità di respawn delle risorse dopo il raccolto. 0.5 = 7,5 minuti, 1.0 = 15 minuti (default), 1.5 = 30 minuti | ResourceRespawnSpeedMultiplier= |
| Moltiplicatore raggio claim terreno | Aumenta o diminuisce il raggio del claim terreno. Influisce sul respawn di risorse e NPC e sulla possibilità di claim vicino da altri giocatori. 0.5 = 10 metri, 1.0 = 20 metri (standard), 1.5 = 30 metri | LandClaimRadiusMultiplier=      |



## Crafting

Nelle impostazioni crafting trovi tutti i comandi per personalizzare il crafting. Include la velocità di crafting.

| Opzione                                | Descrizione                                                  | Comando Config                      |
| ------------------------------------- | ------------------------------------------------------------ | ----------------------------------- |
| Moltiplicatore tempo crafting          | Aumenta o diminuisce il tempo necessario per craftare oggetti. | CraftingTimeMultiplier=             |
| Moltiplicatore tempo addestramento thrall | Aumenta o diminuisce il tempo per addestrare un thrall. | ThrallCraftingTimeMultiplier=       |
| Moltiplicatore tempo combustibile      | Aumenta o diminuisce il tempo di combustione del carburante. | FuelBurnTimeMultiplier=             |
| Moltiplicatore velocità crafting       | Moltiplica la velocità di crafting. Usare una Ruota del Dolore per convertire thrall è considerato crafting. 0 o meno = immediato, 0.5 = 10 secondi, 1.0 = 20 secondi (default), 1.5 = 30 secondi | ItemConvertionMultiplier=           |
| Moltiplicatore danno strutture         | Moltiplica il danno inflitto da strutture difensive (es. palizzate). 0 = nessun danno (non testato), 0.5 = 10 danno, 1.0 = 20 danno (default), 1.5 = 30 danno | StructureDamageMultiplier=          |
| Moltiplicatore danno subito strutture  | Moltiplica il danno subito da strutture quando attaccate (muri/stazioni crafting extra). 0 = nessun danno (non testato), 0.5 = 10 danno, 1.0 = 20 danno (default), 1.5 = 30 danno | StructureDamageTakenMultiplier=     |
| Moltiplicatore salute strutture       | Moltiplica la salute delle strutture. 0.5 = 500 HP, 1.0 = 1000 HP (default), 1.5 = 1500 HP | StructureHealthMultiplier=          |
| Moltiplicatore ingombro giocatore     | Moltiplica il peso che un oggetto aggiunge al giocatore. (0 non disabilita) 0.5 = 2.5 peso, 1.0 = 5.0 peso (default), 1.5 = 7.5 peso | PlayerEncumbranceMultiplier=        |
| Moltiplicatore penalità ingombro      | Moltiplica le penalità subite quando il giocatore è ingombrato. (0 non disabilita) 0.5 = 35 penalità movimento al 99%, 1.0 = 70 penalità movimento al 99% (default), 1.5 = 125 penalità movimento al 99% | PlayerEncumbrancePenaltyMultiplier= |



## Abbandono

Nelle impostazioni abbandono trovi tutti i comandi per regolare l’abbandono degli edifici.

| Opzione                         | Descrizione                                                  | Comando Config               |
| ------------------------------ | ------------------------------------------------------------ | ---------------------------- |
| Disabilita abbandono edifici   | Se attivato, disabilita il decadimento degli edifici nel tempo. | DisableBuildingAbandonment=  |
| Moltiplicatore tempo decadimento edifici | Aumenta o diminuisce il tempo necessario per il decadimento di pezzi e strutture. | BuildingDecayTimeMultiplier= |



## Chat

Nelle impostazioni chat trovi tutti i comandi per personalizzare la chat. Include attivazione, raggio e lunghezza massima messaggi.

| Opzione             | Descrizione                                                  | Comando Config        |
| ------------------ | ------------------------------------------------------------ | --------------------- |
| Raggio chat locale | Imposta il raggio in centimetri in cui la chat locale si sente intorno al giocatore | ChatLocalRadius=      |
| Lunghezza massima messaggio | Imposta il numero massimo di caratteri in un messaggio chat. | ChatMaxMessageLength= |
| Chat globale abilitata | Permette o vieta la chat globale. La chat in-game ha un canale globale dove tutti possono parlare. | ChatHasGlobal=        |



## Purge

Nelle impostazioni Purge trovi tutti i comandi per regolare la Purge, i suoi step, ecc.

| Opzione                           | Descrizione                                                  | Comando Config                                               |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Abilita Purge                    | Disattivando questa opzione disabiliti completamente gli eventi di Purge | EnablePurge=                                                 |
| Livello Purge                   | Aumentando questo valore aumenta la difficoltà della Purge. 0 disattiva la Purge | PurgeLevel=                                                  |
| -                                | Aumentando questo valore aumenta il numero di Purge in un giorno. Il numero effettivo dipende anche dalle opzioni sotto | PurgePeriodicity=                                            |
| -                                | Se attivato, la Purge è limitata a orari specifici | RestrictPurgeTime=                                           |
| -                                | Il valore 0000 indica che le 00:00 sono l’orario di fine feriale | PurgeTimeWeekdayEnd=                                         |
| -                                | Il valore 0000 indica che le 00:00 sono l’orario di inizio feriale | PurgeTimeWeekdayStart=                                       |
| -                                | Il valore 0000 indica che le 00:00 sono l’orario di fine weekend | PurgeTimeWeekendEnd=                                         |
| -                                | Il valore 0000 indica che le 00:00 sono l’orario di inizio weekend | PurgeTimeWeekendStart=                                       |
| -                                | Il valore 0830 indica che le 08:30 sono l’orario di fine feriale | PurgeRestrictionWeekdayEnd=                                  |
| -                                | Il valore 2200 indica che le 22:00 sono l’orario di fine weekend | PurgeRestrictionWeekdayStart=                                |
| -                                | Il valore 1800 indica che le 18:00 sono l’orario di inizio weekend | PurgeRestrictionWeekendStart=                                |
| Tempo preparazione Purge         | Aumentando questo valore aumenta il tempo in minuti tra l’avviso di Purge e l’inizio della Purge. | Aumentando il valore aumenta il tempo in minuti tra l’avviso di Purge e l’inizio della Purge.PurgePreparationTime= |
| Durata Purge                    | Aumentando questo valore aumenta il tempo massimo della Purge. Se si uccidono tutte le ondate, la Purge può finire prima | PurgeDuration=                                               |
| Numero minimo giocatori online  | Aumentando questo valore la Purge avviene solo se ci sono abbastanza giocatori online. Se 0, la Purge attacca qualsiasi clan sopra la soglia (Purge offline). | MinPurgeOnlinePlayers=                                       |
| Permetti costruzioni durante Purge | Se attivato, è permesso costruire durante la Purge.               | AllowBuilding=                                               |
| Valore trigger Purge Meter       | Aumentando questo valore aumenta le azioni richieste per attivare la Purge. Più alto è il valore, più a lungo un clan deve essere attivo per triggerare la Purge. | ClanPurgeTrigger=                                            |
| Intervallo aggiornamento Purge Meter | Intervallo in cui gli eventi Purge del clan sono aggregati e aggiunti al Purge Meter. Valori più bassi aumentano più velocemente il contatore. | ClanScoreUpateFrenquency=                                    |
| -                                | Aumentando questo valore aumenta i danni inflitti dagli NPC durante la Purge. Esempi: 5.000000, 10.000000, 15.000000, 20.000000, 25.000000 | PurgeNPCBuildingDamageMultiplier=                            |



## Animali domestici e fame

Nelle impostazioni Animali domestici e fame trovi tutti i comandi per la gestione della fame dei pet. Include quanto e quanto velocemente consumano.

| Opzione                              | Descrizione                                                  | Comando Config                   |
| ----------------------------------- | ------------------------------------------------------------ | -------------------------------- |
| Abilita sistema fame: Thrall        | Attiva o disattiva il sistema fame per i thrall.             | ToggleHungerSystemThralls=       |
| Abilita sistema fame: Pet            | Attiva o disattiva il sistema fame per i pet.                | ToggleHungerSystemPets=          |
| Valore nutrizione cibo              | Quantità di nutrizione che il compagno guadagna mangiando.   | FoodNutritionValue=              |
| Tempo fame in minuti                | Minuti necessari perché la fame passi da 100 a 0. Default = 10080 | StarvationTimeInMinutes=         |
| Limite danno fame                   | Quando la fame arriva a 0, il compagno inizia a subire danni. Questo valore indica la % massima di salute che può perdere. | StarvationDamagePenaltyCap=      |
| Moltiplicatore tempo crafting recinto animali | Moltiplica la velocità di crafting nei recinti animali.       | AnimalPenCraftingTimeMultiplier= |
| Moltiplicatore raggio contenitore cibo | Moltiplica la distanza a cui i contenitori cibo possono nutrire i compagni. | FeedBoxRangeMultiplier=          |
| Dieta esclusiva                    | Determina se i compagni mangiano solo gli oggetti nella loro dieta. Disabilitato significa che mangiano qualsiasi cibo oltre alla dieta. | ExclusiveDiet=                   |

<InlineVoucher />