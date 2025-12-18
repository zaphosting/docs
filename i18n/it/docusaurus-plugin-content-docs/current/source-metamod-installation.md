---
id: source-metamod-installation
title: Installa Source Mod e Meta Mod sul server
description: "Scopri come potenziare il tuo server di gioco Source engine con Source- e Metamod per una personalizzazione e amministrazione avanzata → Scopri di più ora"
sidebar_label: Installazione
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Che cos’è SM e MM?

Source- e Metamod sono due estensioni per Half Life 2 che permettono di personalizzare ancora di più un server di gioco Source engine (es. CS: S, CS: GO, DoD: S, TF2, ecc.). Questo include, per esempio, l’uso di plugin e una gestione avanzata del tuo server.

<InlineVoucher />

## Installazione SM / MM

### Scarica i file

Prima di tutto servono le estensioni vere e proprie. È importante usare sempre le versioni più recenti (**stable**) per garantirne il corretto funzionamento e compatibilità. Le ultime versioni si possono scaricare da questi siti:

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)
- 
![](https://screensaver01.zap-hosting.com/index.php/s/zb6LsPbnAYJSHap/preview)

:::info
I server di gioco Source engine su ZAP-Hosting girano solitamente su sistema operativo Linux. Perciò serve la versione Linux delle estensioni.
:::

### Estrai i file

Dopo il download riceverai due file compressi (sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar) che vanno estratti prima di caricarli. Puoi usare Winrar, 7zip o programmi simili.

![](https://screensaver01.zap-hosting.com/index.php/s/fw8r376kqKr5rgL/preview)

Dai file estratti ottieni le cartelle addons e cfg:

![](https://screensaver01.zap-hosting.com/index.php/s/oJazFjaDWCjt9oP/preview)

### Carica i file

Ora inizia l’installazione vera e propria. Devi connetterti al server via FTP per caricare le cartelle delle estensioni.

I file vanno caricati nella directory principale. La directory principale si trova in questa struttura cartelle:

| Gioco | Cartella  |
| :-----: |:-------------:| 
| CS: Global Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://screensaver01.zap-hosting.com/index.php/s/g384YWYRN8TaPRx/preview)

La struttura cartelle dovrebbe poi apparire così:

![](https://screensaver01.zap-hosting.com/index.php/s/JTwTwzeXQdZrYY7/preview)

## Controlla l’installazione SM / MM

Ci sono due modi per verificare se le estensioni sono state installate correttamente:

1. Console di gioco
2. Console remota (HLSW - RCON)

### Controllo versione via comandi

Ecco come verificare la versione sul tuo server:

1. Connettiti al server in gioco
2. Apri la console e inserisci questi comandi:

```
sm version
meta version
```

Otterrai un output simile a questo:

![](https://screensaver01.zap-hosting.com/index.php/s/qdNywS6PLdJkrnP/preview)

### 📖 Controllo versione via RCON

![](https://screensaver01.zap-hosting.com/index.php/s/jZZ6FFxksJgcCSf/preview)

Ecco come fare per controllare la versione via RCON:

1. Inserisci l’indirizzo IP in alto sotto IP / Port
2. Vai su Rcon Configuration più in basso
3. Inserisci la tua password Rcon sotto Rcon password
4. Apri la console e digita questi comandi:

```
sm version
meta version
```

Otterrai un output simile a questo:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Scarica HLSW: http://www.hlsw.net/hlsw/download/

<InlineVoucher />