---
id: vserver-linux-gs-interface
title: "VPS: Interfaccia Gameserver/TS3"
description: "Scopri come configurare facilmente server di gioco e vocali su VPS Linux senza conoscenze pregresse grazie a un’interfaccia automatizzata → Scopri di più ora"
sidebar_label: Interfaccia GS/TS3
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Se i prodotti di game server non fanno al caso tuo o non soddisfano le tue aspettative, oppure se hai bisogno del tuo servizio in modi diversi, usare un VPS è spesso la scelta migliore. Però spesso ti trovi davanti alla sfida che non tutti i servizi sono automatizzati o preinstallati. Configurare servizi come game server, server Teamspeak 3 e music bot va fatto in autonomia.

Per risolvere questo problema, abbiamo sviluppato una soluzione super pratica per i nostri VPS o server dedicati basati su Linux. La cosiddetta interfaccia Gameserver/Teamspeak 3 Server (Interfaccia GS/TS3)!

<YouTube videoId="V6qyQFPp_Ls" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/frWNEMQqcMxzRcM/preview" title="Configura un Game Server usando Linux VPS SENZA ESPERIENZA!" description="Ti sembra più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>

<InlineVoucher />

## Caso d’uso

Con l’interfaccia GS/TS3 super user-friendly puoi installare Teamspeak 3 o altri servizi selezionati di game server sul tuo VPS o server dedicato Linux con pochi click. Non serve alcuna conoscenza tecnica per questa installazione. La configurazione di tutti i pacchetti necessari, i file server e l’installazione vera e propria sono completamente automatizzati, risparmiandoti tempo e fatica.

:::warning
La funzione interfaccia GS/TS3 è utilizzabile con i seguenti sistemi operativi:

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) Stiamo già lavorando per rendere disponibili a breve altri sistemi operativi e versioni più recenti.
:::



## Servizi / giochi disponibili

L’interfaccia GS/TS3 supporta l’installazione di game server, voice server e music bot. La maggior parte dei giochi che offriamo per i nostri prodotti game server sono disponibili anche tramite l’interfaccia GS/TS3. Questo vale per tutti i giochi che gestiamo attivamente su Linux. Purtroppo non è possibile installare giochi che girano solo su sistemi Windows. In quel caso è possibile solo un’installazione manuale, se il gioco supporta una versione server Linux.

| Servizi    | Supportato |
| ----------- | ---- |
| Game server  | ✔️    |
| Voice server | ✔️    |
| Musicbot (Sinuxbot)   | ✔️    |



## Installazione e configurazione

Per installare l’interfaccia GS/TS3, vai nel pannello di navigazione **Impostazioni** nell’amministrazione del tuo server e clicca sulla voce secondaria **Gameserver / TS3**. 

La prima volta che apri l’interfaccia GS/TS3, verrai guidato da un setup assistant super intuitivo. Per configurare l’interfaccia e collegarla al tuo server, devi prima creare una chiave SSH. Questa chiave serve al sito per stabilire una connessione sicura col server. Così puoi configurare, gestire e controllare servizi come game server e Teamspeak 3 direttamente dall’interfaccia.

Una volta lì, crea la chiave SSH cliccando su **Genera chiave SSH** e poi aggiungila con il pulsante **Aggiungi chiave**. 


![](https://screensaver01.zap-hosting.com/index.php/s/teZ87eGKRm6iJRa/preview)



Dopo aver cliccato su **Aggiungi chiave**, la chiave SSH viene salvata sul tuo server. Ora puoi aggiungere l’interfaccia GS/TS3 al tuo server.



![](https://screensaver01.zap-hosting.com/index.php/s/QqtCFmC3oxPErD9/preview)



:::info
**Nota:** Se la chiave SSH non viene riconosciuta subito, prova a riavviare il server e aggiornare la pagina.
:::

Durante l’installazione puoi monitorare i progressi. Tieni presente che l’installazione e la configurazione dell’interfaccia e dei suoi pacchetti possono richiedere un po’ di tempo, solitamente tra 5 e 15 minuti.

![](https://screensaver01.zap-hosting.com/index.php/s/xkWQBEp74BqQdM6/preview)

:::info
**Attenzione**: Non proseguire finché l’interfaccia non è completamente installata. Capirai che è finita quando la barra di progresso sparisce e al posto di “Mancante” per ogni pacchetto richiesto compare “Installato”.
:::



### Crea Game server

Se la creazione e installazione dell’interfaccia GS/TS3 è andata a buon fine, puoi iniziare a configurare i servizi. L’installazione di un game server si fa cliccando sul pulsante **Installa game server** nella categoria **Game server**.

![](https://screensaver01.zap-hosting.com/index.php/s/4TD3w3dpXrFYNcb/preview)



Nel passaggio successivo puoi scegliere l’indirizzo IP del game server desiderato (se il tuo server ha più IP). Puoi anche impostare la porta, il numero di slot e il boost RAM a piacere.

![](https://screensaver01.zap-hosting.com/index.php/s/icfwifbTrmwZQ6q/preview)

Controlla che tutti i dati siano corretti e rispecchino le tue esigenze. Quando hai finito, clicca su "Installa game server ora" per avviare l’installazione. Il game server verrà configurato secondo le tue impostazioni e potrai iniziare a giocare presto. Ora puoi vedere e gestire il tuo nuovo game server nella lista.



![](https://screensaver01.zap-hosting.com/index.php/s/MTRmMwc9GyMFW5A/preview)



Sei ora nell’amministrazione del tuo game server. Qui puoi scegliere e installare il gioco che vuoi nel pannello **Impostazioni** sotto **Giochi**.

![](https://screensaver01.zap-hosting.com/index.php/s/xqxLAAR6jbdmM3Z/preview)

Troverai una lista di tutti i giochi installabili sul server. In questo esempio stiamo installando un server con il gioco (pacchetto) Minecraft: Paperspigot. Seleziona il gioco che vuoi e clicca sul pulsante verde per avviare l’installazione.

![](https://screensaver01.zap-hosting.com/index.php/s/MtrsxLoYxssJLBt/preview)

Ti verrà mostrata una panoramica con tutte le condizioni necessarie. Se tutto è a posto, conferma con il pulsante **Accetta e installa**.

![](https://screensaver01.zap-hosting.com/index.php/s/GjijXaM3z9EgnYG/preview)

La configurazione del gioco può richiedere un po’ di tempo a seconda del titolo. Lo stato di avanzamento è visibile nell’interfaccia. Dopo puoi avviare il game server e connetterti in game!



### Crea Voice server

L’installazione di un **Voiceserver (Teamspeak 3 Server)** è simile a quella di un game server. Devi cliccare di nuovo su "Gameserver / TS3". Qui trovi l’opzione **Installa voice server**, cliccaci per avviare l’installazione del server Teamspeak 3.

![](https://screensaver01.zap-hosting.com/index.php/s/xct5DPC57wWeABG/preview)

Nel passaggio successivo puoi impostare i parametri del tuo Teamspeak 3 server, come IP, porta e numero di slot disponibili. Quando hai inserito tutto, clicca su **Installa voice server ora** per completare l’installazione.

![](https://screensaver01.zap-hosting.com/index.php/s/2XnJrDEDyLwBsHk/preview)

Controlla che tutte le info siano corrette e rispecchino le tue esigenze. Quando hai finito, clicca su **Installa Teamspeak 3/5 Server ora** per partire con l’installazione. Ora puoi vedere e cliccare sul Teamspeak 3 installato nella **Panoramica Voiceserver**.

![](https://screensaver01.zap-hosting.com/index.php/s/bgpZJgPjz7Ybpke/preview)

:::info
**Attenzione**: Questa è l’istanza su cui verrà installato il server Teamspeak 3.
:::

Sei ora nell’interfaccia dell’istanza del tuo Teamspeak 3 server installato. Puoi avviare l’istanza cliccando sul pulsante **Avvia**.

![](https://screensaver01.zap-hosting.com/index.php/s/G96RPrjEdm96CCj/preview)


Ora clicca su **Virtual Servers** nel menu. Qui trovi tutti i server Teamspeak 3 installati sull’istanza, elencati chiaramente. Per aprire l’interfaccia del singolo server, clicca sull’icona “occhio”.

![](https://screensaver01.zap-hosting.com/index.php/s/awJdyTgJPSia5B2/preview)

Nell’interfaccia del server Teamspeak 3 trovi tutte le info e le opzioni per personalizzare e gestire il server a modo tuo. Per esempio, nella scheda "Chiave di autorizzazione" puoi creare un token che ti dà i diritti admin sul server. Così hai il pieno controllo su utenti e accessi.

Nel menu "Impostazioni" hai altre opzioni per personalizzare il server. Puoi cambiare il nome, impostare una password per limitare l’accesso o inserire un messaggio di benvenuto che gli utenti vedono entrando nel server.

:::caution Info sulle licenze Teamspeak
Di default non c’è nessuna licenza installata sul server Teamspeak 3. Questo significa che puoi usare un server Teamspeak 3 con massimo 32 slot. Se vuoi più slot o funzioni extra, puoi acquistare una licenza direttamente da Teamspeak.
:::


## Conclusione

Congratulazioni, hai installato e configurato con successo la nostra interfaccia GS/TS3! Se hai altre domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />