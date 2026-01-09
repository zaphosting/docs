---
id: dedicated-windows-fs-22-epic
title: "Dedicated Server: Farming Simulator 2022 (Epic Games) Dedicated Server Windows Setup"
description: "Scopri come configurare un server dedicato per Farming Simulator 22 versione Epic Games con prestazioni ottimizzate e requisiti unici → Scopri di più ora"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Configurare un server per la versione Epic Games di Farming Simulator 22 è leggermente diverso rispetto al processo per un server standard. Questa guida ti accompagnerà passo passo, concentrandosi sugli aspetti unici della versione Epic Games.

## Preparazione

Prima di iniziare, assicurati che la tua configurazione soddisfi i seguenti requisiti:
- **Sistema Operativo:** Windows Server 2016/2019 (64-bit)
- **CPU:** Almeno 4x 2.4 GHz (AMD/Intel)
- **RAM:** Almeno 4GB (DDR3/4)
- **Spazio su Disco:** Almeno 50GB liberi (preferibile SSD o superiore)
- **Account Epic Games:** Un account Epic Games con Farming Simulator 22.

:::info
Quando il server è attivo, non puoi ospitare il server e giocare con lo stesso account Epic Games. Questo significa che ti servirà una seconda copia del gioco su un altro account se vuoi giocare sul server.
:::

## Passo 1: Preparazione per l’installazione del server
Inizia collegandoti al tuo server tramite Remote Desktop (RDP). Se ti serve aiuto, consulta il nostro [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta connesso, dovrai installare un prerequisito necessario, Microsoft Visual C++ Redistributable, scaricabile dal [sito Microsoft](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170). Dopo il download, segui le istruzioni a schermo per completare l’installazione.

:::tip
Potresti già avere installato il C++ Redistributable; in tal caso l’installer potrebbe segnalare un errore. Puoi ignorarlo tranquillamente e procedere.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

Ora devi installare l’Epic Games Launcher, scaricabile dal [sito Epic Games](https://store.epicgames.com/en-US/download). Segui di nuovo le istruzioni a schermo per completare l’installazione.

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

Dopo l’installazione, è molto probabile che il launcher debba scaricare alcuni file aggiuntivi e aggiornamenti prima di avviarsi.

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

Una volta aperto il launcher, devi effettuare il login con il tuo account Epic Games, che deve possedere Farming Simulator 2022 nella libreria.

## Passo 2: Scaricare Farming Simulator 2022

Nel launcher Epic Games, clicca sulla scheda **Libreria** e trova Farming Simulator 22. Usa il pulsante **Installa** e scegli la cartella dove vuoi scaricare il gioco.

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

Ora devi aspettare che il download e l’installazione siano completati. La velocità dipende dalla banda del tuo server.

## Passo 3: Configurare le opzioni di avvio

Una volta installato il gioco, torna alla scheda **Libreria** nel launcher Epic Games. Trova Farming Simulator 22, clicca sui tre puntini accanto e seleziona **Gestisci**.

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

Scorri fino alla sezione **Opzioni di avvio** e attivala. Nel campo di testo che appare, inserisci `-server` e chiudi il menu.

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## Passo 4: Avviare il Server

Ora puoi avviare Farming Simulator 2022 dal launcher Epic Games o dal collegamento sul desktop. Il gioco dovrebbe partire tramite un prompt dei comandi (CMD) in modalità server dedicato. Se non succede, verifica di aver configurato correttamente l’opzione di avvio.

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## Passo 5: Abilitare l’interfaccia web (opzionale)

I server dedicati di Farming Simulator 22 includono un’interfaccia web che puoi abilitare per il tuo server. È opzionale, ma può tornarti utile per modificare impostazioni e visualizzare tante info, quindi ti consigliamo di attivarla.

Prima di procedere, chiudi il server uscendo dal prompt dei comandi. Così eviti che le modifiche fatte in questo passaggio vengano sovrascritte.

Vai nella cartella di installazione del gioco, di solito `C:\Program Files\Epic Games\FarmingSimulator22` se hai usato la directory predefinita.

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

Trova e apri il file `dedicatedServer.xml` nella cartella principale con un editor di testo come Notepad.

Imposta username e password per l’admin modificando i campi corrispondenti.
```xml
  <initial_admin>
    <username>admin</username> //username
    <passphrase>your_password</passphrase> //password
  </initial_admin>
```

![](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

Salva il file prima di chiuderlo e avvia `dedicatedServer.exe` che si trova nella stessa cartella principale.

![](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

Ora dovresti poter accedere all’interfaccia web andando su `http://[tuo_ip_server]:8080` nel browser, sostituendo `[tuo_ip_server]` con l’indirizzo IP del server. Se vuoi accedere direttamente dal server stesso, puoi usare anche `http://127.0.0.1:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
A causa della configurazione unica della versione Epic Games, potresti avere difficoltà a usare l’interfaccia web a pieno regime. Puoi comunque fare modifiche e fermare il server tramite l’interfaccia, ma non puoi ad esempio avviare il server da lì.

Se incontri problemi, prima ferma dedicatedServer.exe, poi avvia direttamente Farming Simulator 22 per assicurarti che il server funzioni. Dopo, avvia dedicatedServer.exe per attivare l’interfaccia web.

È fondamentale che tu avvii il server **prima** e l’interfaccia web **dopo**, altrimenti Epic Games potrebbe riconoscere entrambi come lo stesso file e impedirti di lanciare il server principale.
:::

## Passo 6: Port Forwarding

Per far sì che il tuo server sia accessibile pubblicamente, devi modificare le regole di port forwarding per le porte usate dal processo del server dedicato. Puoi farlo tramite comandi PowerShell, che è più semplice, oppure tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **PowerShell**. Ricordati di cliccare con il tasto destro e scegliere **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire PowerShell in modalità Amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
:::

Ora copia e incolla questi comandi nel prompt di PowerShell:
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server Farming Simulator 22 accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni Windows Firewall con sicurezza avanzata**. Potrebbe servirti cliccare su **Impostazioni avanzate** per aprire la finestra corretta se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server Farming Simulator 22. Per farlo, clicca sulle regole in ingresso e in uscita come descritto qui sotto e aggiungile per i seguenti protocolli e porte:
- TCP in ingresso e uscita: 3724, 27015
- UDP in ingresso e uscita: 3724, 27015

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Passo 7: Collegarsi al Server
Avvia il gioco e vai nel menu multiplayer. Cerca il nome del server, che trovi nell’interfaccia web ed è personalizzabile.

Quando lo trovi, cliccaci sopra per connetterti. Se richiesto, inserisci la password, che sarà visibile anche nell’interfaccia web.

Hai installato con successo Farming Simulator 22 (versione Epic Games) sul tuo Dedicated Server Windows.