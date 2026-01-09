---
id: dedicated-windows-fs-25
title: "Dedicated Server: Farming Simulator 2025 Dedicated Server Windows Setup"
description: "Scopri come configurare un server dedicato di Farming Simulator 2025 su Windows per ospitare partite multiplayer senza intoppi → Scopri di più ora"
sidebar_label: Farming Simulator 2025
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un server dedicato Windows e vuoi installare il servizio Farming Simulator Dedicated Server 2025? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

## Preparazione

Per ospitare un server dedicato di Farming Simulator 2025, devi avere un server Windows pronto e una licenza valida del gioco per far girare il server dedicato.

Prima di procedere con l’installazione, connettiti al tuo server Windows tramite Desktop Remoto (RDP). Se ti serve aiuto, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

### Licenza di Gioco

Per ospitare il server dedicato sul tuo server Windows, devi possedere una copia digitale di Farming Simulator 2025 direttamente dal sito ufficiale di [Farming Simulator](https://www.farming-simulator.com/buy-now.php).

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Non puoi usare la stessa chiave di licenza con cui giochi, quindi dovrai acquistare una **seconda** copia del gioco solo per il tuo Dedicated Server.

:::info Licenza Steam
È possibile usare una licenza Steam per ospitare il server dedicato, ma è molto scomodo perché dovresti tenere sempre aperto il client Steam in background. Inoltre, non potrai giocare ad altri giochi su altri dispositivi con lo stesso account Steam a causa delle limitazioni di Steam. Per questo ti consigliamo caldamente di comprare una chiave standalone direttamente dal sito per evitare questi problemi.

Se invece vuoi usare una licenza **Steam**, installa i file tramite Steam come al solito e passa direttamente alla sezione **Setup Dedicated Server** della guida.
:::

Dopo aver acquistato la versione digitale dal sito, riceverai un codice prodotto via email. Ti servirà in seguito per scaricare il gioco e validare il server dedicato durante la configurazione.

## Installazione

### Installazione File

Ora che hai la licenza e il server Windows pronti, vai sulla pagina [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) dal tuo server Windows e inserisci la chiave di licenza ricevuta via email.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Se tutto va bene, accederai a una pagina con diversi metodi di download. Trova l’opzione principale per Windows **Farming Simulator 25 (Windows 10/11)** e clicca su scarica.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

Il download partirà e potrebbe richiedere un po’ di tempo perché scarica tutto il gioco, quindi abbi pazienza.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Quando finisce, vai nella cartella download e trova il file **.img** scaricato. Aprilo con un doppio click, così monterà il drive in Esplora File.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Ora esegui il file **Setup.exe** e accetta il prompt UAC. Segui il menu di installazione, accetta termini e condizioni e, se vuoi, cambia il percorso di installazione.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Ancora una volta, aspetta che l’installazione finisca. Quando è pronta, esci dal setup. Ti consigliamo di cliccare col tasto destro sul drive DVD montato in Esplora File e selezionare **Espelli** perché non serve più. A questo punto l’installazione base del gioco è completa.

### Attivazione del Gioco

Con il gioco installato, devi lanciarlo almeno una volta per attivarlo. Avvialo dal collegamento sul desktop o dalla barra di ricerca di Windows.

Al primo avvio vedrai la richiesta di inserire la chiave di licenza. Inserisci quella ricevuta via email e conferma. Se tutto va bene, il gioco si attiverà e partirà il caricamento.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Ora puoi chiudere il gioco, non serve più, e passare alla sezione successiva per configurare il server dedicato e la sua interfaccia web. Se ricevi un errore **Video Driver**, seleziona semplicemente **no** per annullare l’avvio.

## Configurazione Dedicated Server

Con il gioco pronto, devi modificare alcune impostazioni per il server dedicato. Vai nella cartella di installazione del gioco. Di default è `C:\Program Files (x86)\Farming Simulator 2025`, a meno che tu non abbia cambiato percorso durante l’installazione.

Qui trova e apri il file **dedicatedServer.xml** con un editor di testo.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

Ti consigliamo di modificare i campi `username` e `passphrase` in cima al file con le tue credenziali. Saranno quelle per accedere al pannello web del server. Salva e chiudi il file.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Accesso all’Interfaccia Web

Con le credenziali configurate, avvia il server eseguendo il file **dedicatedServer.exe** nella cartella principale del gioco.

:::info Privilegi Amministrativi
Assicurati di lanciare l’eseguibile del server dedicato con privilegi amministrativi, altrimenti potresti avere problemi ad avviare il server. Fai click destro sul file e scegli **Esegui come amministratore**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Si aprirà una finestra CMD che genererà certificati, installerà aggiornamenti e tool necessari. Al primo avvio può richiedere un po’ di tempo, quindi abbi pazienza.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Quando è pronto, potrai accedere al pannello web aprendo `http://[tuo_indirizzo_ip]:8080` in un browser. Usa le credenziali che hai salvato per fare login.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

Da questo pannello puoi modificare tantissime impostazioni del server, gestire salvataggi, mod e molto altro.

### Port Forwarding del Server

Per far sì che il server sia accessibile pubblicamente, devi configurare il port forwarding per le porte usate dal server dedicato. Puoi farlo tramite comandi PowerShell, che è più semplice, oppure tramite la pagina di Windows Defender Firewall.

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
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server Farming Simulator 2025 accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Apri la ricerca di Windows e cerca **Impostazioni Firewall di Windows con sicurezza avanzata**. Se apri la pagina base del firewall, clicca su **Impostazioni avanzate** per aprire la finestra giusta.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il server FS2025. Clicca su regole in entrata e in uscita e aggiungi le porte e protocolli seguenti:
- TCP in entrata e uscita: 8080, 10823
- UDP in entrata e uscita: 8080, 10823

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il server sarà accessibile da internet, potrai entrare nel pannello web e connetterti in gioco.

### Avvio Server

Dopo aver configurato tutto e impostato il firewall, vai nella home del pannello web e clicca il pulsante **Start** per avviare il server.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Se tutto va bene, il server inizierà l’avvio e lo vedrai sia nell’interfaccia aggiornata che nella nuova finestra CMD che esegue il server di gioco. Se hai errori, assicurati di eseguire il pannello come amministratore.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Conclusione

Congratulazioni, hai installato e configurato con successo il server dedicato di Farming Simulator 2025 sul tuo Dedicated Server! Se hai domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!