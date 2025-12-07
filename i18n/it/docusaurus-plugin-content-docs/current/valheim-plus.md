---
id: valheim-plus
title: "Valheim: Server Valheim Plus"
description: "Scopri come migliorare il gameplay di Valheim con Valheim Plus per funzionalità avanzate e upgrade del server → Scopri di più ora"
sidebar_label: Valheim Plus
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

:::info
Valheim Plus è una modifica lato client. Ti permette di apportare cambiamenti al gioco base.
:::

<InlineVoucher />

## Installazione Valheim Plus Client

Per prima cosa devi aprire la cartella di Valheim sul tuo PC.  
Per farlo, clicca con il tasto destro su Valheim nella libreria Steam, seleziona "***Gestisci***" nelle opzioni e poi "***Sfoglia file locali***".

![](https://screensaver01.zap-hosting.com/index.php/s/oXaiLGR55Z9fH92/preview)

Una volta aperta questa cartella, devi scaricare il file "***WindowsClient.zip***".  
Il file "***WindowsClient.zip***" può essere scaricato [qui](https://github.com/valheimPlus/ValheimPlus/releases) (vai su "Assets").

![](https://screensaver01.zap-hosting.com/index.php/s/ZDsabTk4eMfQcFM/preview)

Dopodiché, il contenuto di "***WindowsClient.zip***" va estratto nella cartella del server Valheim che hai appena aperto.

![](https://screensaver01.zap-hosting.com/index.php/s/wiTfFmLetr9TmJX/preview)

Ora puoi avviare Valheim e la configurazione lato client è completata.

## Installazione Valheim Plus Server

Per modificare il gioco apriamo prima la scheda giochi sul nostro server:

![](https://screensaver01.zap-hosting.com/index.php/s/YE2xKnqfrZfWE4J/preview)

Qui cerchiamo Valheim Plus sotto "Giochi disponibili" e clicchiamo sul pulsante di download:

![](https://screensaver01.zap-hosting.com/index.php/s/GF6Na4EPGiNQSDZ/preview)

Dopo il download il server verrà reinstallato. Una volta finita la reinstallazione puoi rimuovere la password in "**Config**" e ora puoi fare l’upgrade per più slot.

## Upgrade Slot

Per fare l’upgrade degli slot devi aprire la funzione "**UP e Downgrade**" nella dashboard del server di gioco.

![](https://screensaver01.zap-hosting.com/index.php/s/SpAxfojkxY5wmsE/preview)

Ora seleziona il numero di slot desiderato nella pagina UP e Downgrade.

:::info
Qui devi pagare solo il "**sovrapprezzo**", calcolato per il tempo residuo di utilizzo
:::

![](https://screensaver01.zap-hosting.com/index.php/s/jyZGRaKAZ7n5GkR/preview)

Per completare l’upgrade, seleziona il metodo di pagamento in fondo alla pagina.  
Una volta scelto, premi il pulsante "***Esegui upgrade***" e l’upgrade verrà effettuato.

![](https://screensaver01.zap-hosting.com/index.php/s/3eB9FtgLzxBpPgB/preview)

## Configurazione Valheim Plus

Per aprire il file di configurazione devi andare nella pagina "**Config**" nell’interfaccia del server di gioco, dove vedrai "*ValheimPlus: valheim_plus.cfg*".  
Puoi aprirlo cliccando sull’icona blu accanto al file di configurazione.

![](https://screensaver01.zap-hosting.com/index.php/s/grjGPr64RSs69xN/preview)

Ecco una lista di tutti i comandi che puoi usare nel file di configurazione:

### [Player]

| Comando | Valori | Funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | abilita o disabilita modifiche al giocatore |
| baseMegingjordBuff | 150 (float) | aumenta il peso trasportabile di 150 |
| baseMaximumWeight | 300 (float) | imposta il peso massimo a 300 |
| baseAutoPickUpRange | 2 (float) | imposta il raggio per raccogliere oggetti a 2 |
| disableCameraShake | true / false | abilita o disabilita il tremolio della telecamera |
| experienceGainedNotifications | true / false | abilita o disabilita la visualizzazione dell’esperienza guadagnata in alto a sinistra |

### [Food]

| Comando | Valori | Funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | abilita o disabilita modifiche al cibo |
| foodDuration | 0-100% | modifica la durata del cibo in percentuale |

### [Fermenter]

| Comando | Valori | Funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | abilita o disabilita modifiche al fermentatore |
| fermenterDuration | 2400 (float) equivale a 48 ore di gioco | imposta il tempo di produzione nel fermentatore, più basso è il valore più veloce è la produzione |
| fermenterItemsProduced | 6 (integer) | imposta il numero di oggetti prodotti nel fermentatore |

### [Furnace]

| Comando | Valori | Funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | abilita o disabilita modifiche alla fornace |
| maximumOre | 10 (integer) | imposta il numero massimo di minerali nella fornace |
| maximumCoal | 20 (integer) | imposta il numero massimo di carbone nella fornace |
| productionSpeed | 30 (float) | imposta il tempo di produzione nella fornace, più basso è il valore più veloce è la produzione |
| coalUsedPerProduct | 2 (integer) | imposta il numero di carbone usato per prodotto |

### [Kiln]

| Comando | Valori | Funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | abilita o disabilita modifiche al forno |
| productionSpeed | 15 (float) | imposta il tempo di produzione nel forno, più basso è il valore più veloce è la produzione |
| maximumWood | 25 (integer) | imposta la quantità massima di legno nel forno |

### [Items]

| Comando | Valori | Funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | abilita o disabilita modifiche agli oggetti |
| noTeleportPrevention | true / false | impedisce l’uso del teletrasporto |
| baseItemWeight | 0 (float) | imposta il peso degli oggetti, -50% = meno peso, +50% = più peso |
| itemStackMultiplier | 0 (float) | imposta il numero massimo di oggetti impilabili, solo valori positivi. 50 = 50% più oggetti impilabili. *attenzione* se riduci questo valore tutto ciò che supera verrà eliminato |

### [Building]

| Comando | Valori | Funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | abilita o disabilita modifiche alle costruzioni |
| noInvalidPlacementRestriction | true / false | rimuove la restrizione di *posizionamento non valido* |
| noWeatherDamage | true / false | rimuove i danni alle costruzioni causati dal meteo (es. pioggia) |
| maximumPlacementDistance | 5 (float) | imposta la distanza massima di posizionamento |

### [Beehive]

| Comando | Valori | Funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | abilita o disabilita modifiche all’alveare |
| maximumHoneyPerBeehive | 4 (integer) | imposta la quantità massima di miele per alveare |
| honeyProductionSpeed | 1200 (float) equivale a 24 ore di gioco | imposta il tempo di produzione del miele, più basso è il valore più veloce è la produzione |

### [Server]

| Comando | Valori | Funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | abilita o disabilita modifiche al server |
| maxPlayers | 10 (int) | imposta gli slot, sarà settato in base al valore ordinato negli UP- e Downgrade |
| disableServerPassword | true / false | rimuove la password dal server |
| enforceConfiguration | true / false | se abilitato solo i giocatori con la stessa configurazione possono entrare nel server |
| enforceMod | true / false | se abilitato solo i giocatori con la stessa mod possono entrare nel server |

### [Map]

| Comando | Valori | Funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | abilita o disabilita modifiche alla mappa |
| exploreRadius | 100 (float) | imposta il raggio intorno a ogni giocatore in cui la mappa viene scoperta |
| shareMapProgression | true / false | se abilitato la scoperta della mappa è condivisa tra tutti i giocatori, solo quelli visibili contribuiscono |

### [Hotkeys]

Una lista dei controlli possibili la trovi [qui](https://docs.unity3d.com/ScriptReference/KeyCode.html).

| Comando | Valori | Funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| rollForwards | F9 | rotola in avanti |
| rollBackwards | F10 | rotola indietro |
| enterAdvancedBuildingMode | F1 | blocca gli oggetti e permette l’uso del controllo avanzato |
| exitAdvancedBuildingMode | F3 | esce dalla modalità di controllo avanzato e sblocca gli oggetti |
| enterAdvancedEditingMode | Keypad0 | seleziona e modifica l’oggetto visualizzato con AEM |
| confirmPlacementOfAdvancedEditingMode | KeypadEnter | conferma le modifiche di tutti gli oggetti selezionati e modificati |
| resetAdvancedEditingMode | F7 | resetta posizione e rotazione degli oggetti selezionati con AEM |
| abortAndExitAdvancedEditingMode | F8 | resetta posizione e rotazione degli oggetti selezionati con AEM ed esce dalla modalità AEM |

### [AdvancedBuildingMode]

| Comando | Valori | Funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | abilita o disabilita modifiche alla modalità di costruzione avanzata |

### [AdvancedEditingMode]

| comando | valori | funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | abilita o disabilita modifiche alla modalità di editing avanzata |

### [Stamina]

| comando | valori | funzione |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | abilita o disabilita modifiche alla stamina |
| dodgeStaminaUsage | 10 (float) | imposta la quantità di stamina usata per schivare |
| encumberedStaminaDrain | 10 (float) | imposta la quantità di stamina consumata quando si è carichi |
| sneakStaminaDrain | 5 (float) | imposta la stamina consumata per muoversi furtivamente |
| runStaminaDrain | 10 (float) | imposta la stamina consumata per correre |
| staminaRainDelay | 1 (float) | imposta il ritardo per rigenerare la stamina |
| staminaRain | 5 (float) | imposta la quantità di stamina rigenerata |
| swimStaminaDrain | 5 (float) | imposta la stamina consumata nuotando |
| jumpStaminaUsage | 10 (float) | imposta la stamina consumata per saltare |


<InlineVoucher />