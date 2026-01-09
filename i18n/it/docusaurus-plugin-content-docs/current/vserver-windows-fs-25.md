---
id: vserver-windows-fs-25
title: "VPS: Farming Simulator 2025 Dedicated Server Windows Setup"
description: "Scopri come configurare un server dedicato di Farming Simulator 2025 sul tuo VPS Windows per un multiplayer senza intoppi → Scopri di più ora"
sidebar_label: Farming Simulator 2025
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows e vuoi installare il servizio Dedicated Server di Farming Simulator 2025? Sei nel posto giusto. In questa guida ti spiegheremo passo dopo passo come installare questo servizio sul tuo server.

<InlineVoucher />

## Preparazione

Per ospitare un server dedicato di Farming Simulator 2025, devi avere un server Windows pronto e una licenza valida del gioco per far girare il server dedicato.

Prima di procedere con l’installazione, connettiti al tuo Windows Server tramite Remote Desktop (RDP). Se ti serve aiuto, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

### Licenza di Gioco

Per ospitare il server dedicato sul tuo Windows server, devi possedere una copia digitale di Farming Simulator 2025 direttamente dal sito ufficiale di [Farming Simulator](https://www.farming-simulator.com/buy-now.php).

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Non puoi usare la stessa chiave di licenza con cui giochi, quindi dovrai acquistare una **seconda** copia del gioco solo per il tuo Dedicated Server.

:::info Licenza Steam
È possibile usare una licenza Steam per ospitare il server dedicato, ma può essere molto scomodo perché dovresti tenere sempre aperto il client Steam in background. Inoltre, non potrai giocare ad altri giochi su altri sistemi con lo stesso account Steam a causa delle limitazioni di Steam. Per questo ti consigliamo caldamente di acquistare una chiave standalone direttamente dal sito per evitare questi problemi.

Se invece vuoi usare una licenza **Steam**, installa i file tramite Steam come al solito e passa direttamente alla sezione **Configurazione Dedicated Server** della guida.
:::

Dopo aver acquistato la versione digitale dal sito, riceverai un codice prodotto via email all’indirizzo fornito al checkout. Ti servirà questa chiave di licenza nella sezione successiva per scaricare il gioco e validare il server dedicato durante la configurazione.

## Installazione

### Installazione File

Ora che hai la chiave di licenza e il server Windows pronto, vai sulla pagina [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) dal tuo server Windows e inserisci la chiave di licenza ricevuta via email.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Se tutto va a buon fine, accederai a una pagina con diversi metodi di download per il gioco. Trova l’opzione principale Windows **Farming Simulator 25 (Windows 10/11)** e clicca su download.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

Il download partirà e potrebbe richiedere un po’ di tempo perché scaricherai il gioco completo, quindi abbi pazienza.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Quando finisce, vai nella cartella download e trova il file **.img** scaricato. Aprilo con un doppio click, così monterà il drive in Esplora File.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Ora esegui il file **Setup.exe** e accetta il prompt UAC. Segui il menu di installazione, accetta termini e condizioni e, se vuoi, modifica il percorso di installazione.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Ancora una volta, abbi pazienza e aspetta che l’installazione finisca. Quando è pronta, esci dal setup. Ti consigliamo di cliccare col tasto destro sul **DVD Drive** montato in Esplora File e selezionare **Espelli** perché non serve più. A questo punto l’installazione base del gioco è completa.

### Attivazione del Gioco

Con il gioco installato, devi lanciarlo almeno una volta per attivarlo. Avvialo dal collegamento sul desktop o dalla barra di ricerca di Windows.

Al primo avvio vedrai la richiesta di inserire la chiave di licenza. Inserisci la chiave ricevuta via email e conferma. Se tutto va bene, il gioco si attiverà e partirà il caricamento.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Ora puoi chiudere il gioco perché non serve più e procedere con la configurazione del server dedicato e dell’interfaccia web inclusa. Se ricevi un errore **Video Driver**, seleziona semplicemente **no** per annullare l’avvio.

## Configurazione Dedicated Server

Con il gioco pronto, devi modificare alcune impostazioni per il server dedicato. Vai nella cartella di installazione del gioco. Di default si trova in `C:\Program Files (x86)\Farming Simulator 2025`, ma potrebbe essere diversa se hai cambiato percorso durante l’installazione.

Qui trova e apri il file **dedicatedServer.xml** con un editor di testo.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

Ti consigliamo di modificare i campi `username` e `passphrase` in cima al file con le tue credenziali. Queste saranno quelle per accedere al pannello web del server. Salva il file e chiudi quando hai finito.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Accesso all’Interfaccia Web

Con le credenziali configurate, puoi avviare il server eseguendo il file **dedicatedServer.exe** nella stessa cartella principale del gioco.

:::info Privilegi Amministrativi
Assicurati di lanciare l’eseguibile del server dedicato con privilegi amministrativi, altrimenti potresti avere problemi ad avviare il server di gioco. Fai clic destro sul file e seleziona **Esegui come amministratore**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Si aprirà una finestra CMD che genererà automaticamente i certificati necessari, installerà aggiornamenti e strumenti. Al primo avvio potrebbe richiedere un po’ di tempo, quindi abbi pazienza.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Quando è pronto, potrai accedere al pannello web inserendo `http://[tuo_indirizzo_ip]:8080` in un browser. Usa le credenziali che hai salvato per il login.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

Da questo pannello potrai fare un sacco di modifiche al server: cambiare impostazioni, gestire salvataggi, mod e molto altro.

### Port Forwarding del Server

Per far sì che il server sia accessibile pubblicamente, devi configurare il port forwarding per le porte usate dal processo del server dedicato. Puoi farlo tramite comandi PowerShell, che è più semplice, oppure tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **PowerShell**. Ricordati di cliccare col tasto destro e scegliere **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire PowerShell in modalità amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nel prompt PowerShell:
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server Farming Simulator 2025 accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni Windows Firewall con sicurezza avanzata**. Potresti dover cliccare su **Impostazioni avanzate** per aprire la finestra completa se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server FS2025. Fai così per le regole in entrata e uscita, per i protocolli e porte seguenti:
- TCP in entrata e uscita: 8080, 10823
- UDP in entrata e uscita: 8080, 10823

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il server sarà accessibile da internet, quindi potrai accedere al pannello web e connetterti in gioco.

### Avvio Server

Dopo aver configurato tutto e impostato il firewall, vai alla home del pannello web e clicca il pulsante **Start** per avviare il server.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Se tutto va bene, il server inizierà l’avvio e potrai confermarlo dall’interfaccia aggiornata e dalla nuova finestra CMD che esegue il server di gioco. Se hai errori all’avvio, assicurati di eseguire l’interfaccia come amministratore.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Conclusione

Congratulazioni, hai installato e configurato con successo il server dedicato di Farming Simulator 2025 sul tuo VPS! Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />