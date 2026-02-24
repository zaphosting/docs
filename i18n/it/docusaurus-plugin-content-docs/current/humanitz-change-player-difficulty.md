---
id: humanitz-change-player-difficulty
title: "HumanitZ: Cambia la Difficoltà del Giocatore"
description: "Scopri come regolare la difficoltà del giocatore e le impostazioni di sopravvivenza sul tuo server HumanitZ → Scopri di più ora"
sidebar_label: "Cambia la Difficoltà del Giocatore"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

La difficoltà del giocatore in HumanitZ determina quanto è punitiva l’esperienza di sopravvivenza. Dalla morte permanente alla velocità di drenaggio delle vitalità e alla forza dei banditi, queste impostazioni influenzano direttamente quanto il tuo server risulti sfidante.

<InlineVoucher />

## Configurazione

Le impostazioni della difficoltà del giocatore si gestiscono nel file `GameServerSettings.ini`. Puoi accedere a questo file dal pannello di gestione del server sotto **Configs**. All’interno del file di configurazione, trova i seguenti parametri:

````
;Quando impostato su true, il giocatore morto perderà il personaggio e dovrà crearne uno nuovo
PermaDeath=false

;0=Non perdi nulla, 1=Perdi zaino e arma in mano, 2=Precedente + tasche e zaino, 3=Tutto quanto sopra + Equipaggiamento
OnDeath=2

;Effetto privazione del sonno false=Disabilitato true=Abilitato
Sleep=true

;Quanto velocemente si esauriscono le vitalità 0=Lento, 1=Normale, 2=Veloce
VitalDrain=1

;Salute del cane compagno 0=Bassa 1=Default 2=Alta
CompanionHealth=1

;Danno del cane compagno 0=Basso 1=Default 2=Alto
CompanionDmg=1

;Tempo in minuti per il respawn dei banditi umani, impostare a 0 per disabilitare il respawn
HumanRespawnTimer=90

;Difficoltà salute banditi umani 0=Molto Facile, 1=Facile, 2=Default, 3=Difficile, 4=Molto Difficile, 5=Incubo
HumanHealth=2

;Difficoltà velocità banditi umani 0=Molto Facile, 1=Facile, 2=Default, 3=Difficile, 4=Molto Difficile, 5=Incubo
HumanSpeed=2

;Difficoltà danno banditi umani 0=Molto Facile, 1=Facile, 2=Default, 3=Difficile, 4=Molto Difficile, 5=Incubo
HumanDamage=2
````

Ecco cosa controlla ogni impostazione:

- `PermaDeath` – Se impostato su `true`, i giocatori perdono definitivamente il personaggio alla morte e devono crearne uno nuovo  
- `OnDeath` – Definisce quanto inventario si perde alla morte  
- `Sleep` – Abilita o disabilita gli effetti della privazione del sonno  
- `VitalDrain` – Controlla la velocità con cui fame, sete e altre vitalità si esauriscono  
- `CompanionHealth` – Imposta il livello di salute del cane compagno  
- `CompanionDmg` – Imposta il livello di danno del cane compagno  
- `HumanRespawnTimer` – Determina quanto tempo ci mette il respawn dei banditi umani (0 disabilita il respawn)  
- `HumanHealth` – Regola la difficoltà della salute dei banditi  
- `HumanSpeed` – Regola la difficoltà della velocità di movimento dei banditi  
- `HumanDamage` – Regola la difficoltà del danno dei banditi  

Modifica i valori in base al livello di difficoltà che vuoi. Dopo aver salvato il file, riavvia il server per applicare le nuove impostazioni.



## Esempi di Preset Difficoltà

### Setup Sopravvivenza Facile

Questo setup crea un’esperienza più rilassata con drenaggio vitale lento, nemici più deboli e nessuna morte permanente.

```
PermaDeath=false
OnDeath=1
Sleep=false
VitalDrain=0
CompanionHealth=2
CompanionDmg=2
HumanRespawnTimer=180
HumanHealth=1
HumanSpeed=1
HumanDamage=1
```



### Setup Sopravvivenza Difficile

Questo setup aumenta la pressione della sopravvivenza con morte permanente, drenaggio vitale veloce e banditi più forti.

```
PermaDeath=true
OnDeath=3
Sleep=true
VitalDrain=2
CompanionHealth=0
CompanionDmg=0
HumanRespawnTimer=60
HumanHealth=4
HumanSpeed=4
HumanDamage=4
```



## Conclusione

Complimenti! Regolando i valori di difficoltà nel file `GameServerSettings.ini`, hai personalizzato con successo le impostazioni di difficoltà giocatore sul tuo server HumanitZ. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />