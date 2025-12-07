---
id: dedicated-windows-openmp
title: "Dedicated Server: Configurazione Open.mp Dedicated Server su Windows"
description: "Scopri come configurare e avviare un Open.mp Dedicated Server su Windows per un multiplayer senza intoppi → Scopri di più ora"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un Dedicated Server Windows e vuoi installarci il servizio Open.mp Dedicated Server? Sei nel posto giusto! In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

## Preparazione

Per cominciare, connettiti al tuo Dedicated Server tramite Remote Desktop (RDP). Se ti serve aiuto, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta entrato nel server, scarica l’ultima release dal [repository GitHub di open.mp](https://github.com/openmultiplayer/open.mp/releases). Assicurati di scegliere la versione **win-x86**.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Installazione

Quando hai scaricato la release, estrai i file con un tool tipo 7zip o WinRAR. Otterrai una cartella **Server** con tutti i file necessari.

Per avviare il server, basta lanciare **omp-server.exe** e il server inizierà il boot. Però ti consigliamo prima di fare il port forwarding e configurare il server.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Port Forwarding del server

Per far sì che il server sia raggiungibile pubblicamente, devi modificare le regole di port forwarding per le porte usate dal processo del server dedicato. Puoi farlo tramite comandi PowerShell (più semplice) o tramite la pagina di Windows Defender Firewall.

:::tip
Al primo avvio del server dovrebbe comparire un prompt UAC. Se accetti, le regole firewall si configureranno automaticamente e puoi passare alla sezione successiva. Altrimenti, segui uno dei metodi qui sotto.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **PowerShell**. Fai click destro e scegli **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire PowerShell come amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nel prompt PowerShell:
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server open.mp accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni Windows Firewall con sicurezza avanzata**. Potrebbe servirti cliccare su **Impostazioni avanzate** per aprire la finestra giusta se apri la pagina base del firewall.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Devi creare nuove regole per il server open.mp. Clicca su regole in entrata e in uscita e aggiungi queste porte e protocolli:
- TCP in entrata e uscita: 7777
- UDP in entrata e uscita: 7777

Se ti serve una mano, dai un’occhiata alla nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il server sarà raggiungibile tramite l’indirizzo IP del server.

Ti consigliamo di configurare prima il server con la sezione qui sotto prima di connetterti.

## Configurazione

A questo punto hai finito l’installazione del server open.mp. Puoi configurarlo ulteriormente tramite un file di configurazione.

Torna nella cartella principale e apri il file **config.json**. Qui puoi modificare tanti parametri del server, dal porto alla password e molto altro.

Ecco qualche esempio di configurazione:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Dai un’occhiata alla nostra guida [Configurazione Server](openmp-configuration.md) per vedere tutte le opzioni disponibili e cosa fanno.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale e lancia **omp-server.exe** per far partire il processo. Si aprirà la console del server in un prompt dei comandi e inizierà l’avvio.

Potrai connetterti direttamente al server in-game tramite il launcher open.mp. Se vuoi che il server compaia nella lista server, controlla la nostra guida [Configurazione Server](openmp-configuration.md) e assicurati che il parametro `enable_query` sia impostato su true (di default dovrebbe esserlo). Salva il file e rilancia il server.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server open.mp sul tuo Dedicated Server! Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!