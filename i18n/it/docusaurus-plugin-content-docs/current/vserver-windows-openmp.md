---
id: vserver-windows-openmp
title: "VPS: Configurazione Server Dedicato Open.mp su Windows"
description: "Scopri come installare e configurare un server dedicato open.mp sul tuo VPS Windows per un multiplayer senza intoppi → Scopri di più ora"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows e vuoi installarci il server dedicato open.mp? Sei nel posto giusto! In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS tramite Desktop Remoto (RDP). Se ti serve una mano, dai un’occhiata alla nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta dentro il server, scarica l’ultima release dal [repository GitHub di open.mp](https://github.com/openmultiplayer/open.mp/releases). Assicurati di scegliere la versione **win-x86**.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Installazione

Dopo aver scaricato la release, estrai i file con un tool tipo 7zip o WinRAR. Otterrai una cartella **Server** con tutti i file necessari.

Per avviare il server, basta lanciare **omp-server.exe** e il server inizierà a partire. Però ti consigliamo prima di fare il port forwarding e configurare il server.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Port Forwarding del server

Per far sì che il tuo server sia raggiungibile da tutti, devi configurare il port forwarding per le porte usate dal server dedicato. Puoi farlo direttamente con comandi PowerShell (più semplice) oppure tramite la pagina di Windows Defender Firewall.

:::tip
Al primo avvio del server ti comparirà un prompt UAC. Se accetti, le regole del firewall si creeranno automaticamente e puoi passare alla sezione successiva. Altrimenti, segui uno dei metodi qui sotto.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Apri la ricerca di Windows e cerca **PowerShell**. Ricordati di cliccare con il tasto destro e scegliere **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire PowerShell come amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
:::

Ora copia e incolla questi comandi nel prompt di PowerShell:
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

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server open.mp. Clicca sulle regole in entrata e in uscita e aggiungi queste porte e protocolli:
- TCP in entrata e uscita: 7777
- UDP in entrata e uscita: 7777

Se ti serve una mano, dai un’occhiata alla nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il tuo server sarà raggiungibile tramite l’indirizzo IP del VPS.

Ti consigliamo di configurare prima il server con la sezione qui sotto prima di connetterti.

## Configurazione

A questo punto hai finito l’installazione del server open.mp. Puoi personalizzare ulteriormente il server modificando il file di configurazione.

Torna nella cartella principale e apri il file **config.json**. Qui puoi cambiare un sacco di parametri, dal porto alla password e molto altro.

Ecco qualche esempio di opzioni configurate:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Dai un’occhiata alla nostra guida [Configurazione Server](openmp-configuration.md) per vedere tutte le opzioni disponibili e cosa fanno.

## Avvio e connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale e lancia **omp-server.exe** per far partire il processo. Si aprirà la console del server in un prompt dei comandi.

Potrai connetterti direttamente al server in-game tramite il launcher open.mp. Se vuoi che il server compaia nella lista server con info dettagliate, controlla nella guida [Configurazione Server](openmp-configuration.md) che il parametro `enable_query` sia impostato su true (di default dovrebbe esserlo). Salva il file e riavvia il server.

## Conclusione

Complimenti, hai installato e configurato con successo il server open.mp sul tuo VPS! Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />