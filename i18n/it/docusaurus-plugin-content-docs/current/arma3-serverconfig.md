---
id: arma3-serverconfig
title: "Arma 3: Modifica il file di configurazione del server"
description: "Scopri come personalizzare le impostazioni del tuo server Arma 3 per un gameplay e prestazioni ottimali → Scopri di più ora"
sidebar_label: Server.cfg
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Parametri e configurazione di Server.cfg

Il Server.cfg di Arma 3 è indispensabile per il funzionamento di qualsiasi server Arma 3 e offre tante possibilità per configurare il server in modo personalizzato.

Il Server.cfg può essere modificato direttamente via FTP su un game server o VPS già installato.  
Con un game server, nel menu a sinistra dell’interfaccia è disponibile anche la voce Configs, da cui puoi modificare il Server.cfg con pochi click.

<InlineVoucher />

## Modifica del Server.cfg tramite l’editor ZAP

Per modificare il server.cfg del tuo server Arma 3 nell’editor ZAP, clicca prima sul tuo server nell’interfaccia e poi seleziona “Configs” nel menu a sinistra sotto “Impostazioni”.

![](https://puu.sh/Fo5i6/183ee65ef3.png)

Qui vedrai la lista dei file di configurazione disponibili per Arma 3, ora modifichiamo solo il Server.cfg.  
Cliccando sul pulsante blu “Apri file” entri nell’editor ZAP.

![](https://puu.sh/Fk7Ez/b0f32d8c61.png)

Qui puoi configurare il tuo server Arma 3 in modo personalizzato, incluso il nome del server e il numero di slot.  
Modifica le impostazioni come preferisci e clicca su “Salva” dopo.

![](https://puu.sh/Fk7I1/407a039e38.png)

Quando imposti il nome del server, assicurati di racchiuderlo tra virgolette, altrimenti il server non lo leggerà.  
È importante anche terminare ogni riga con un punto e virgola (;), altrimenti il server non riuscirà a leggere le impostazioni successive.  
Un’eccezione è l’opzione “motd[]”, dove ogni riga deve terminare con una virgola, tranne l’ultima che non deve averla.

## Corretto:

Qui virgolette, punto e virgola e virgole sono usati correttamente.

![](https://puu.sh/Fk7Mq/e2542b12f7.png)

## Sbagliato:

Qui mancano virgolette, punto e virgola e virgole, così il server non partirebbe.

![](https://puu.sh/Fk7NK/f96a31199d.png)

## Modifica del Server.cfg via FTP

Invece dell’editor ZAP, puoi modificare il Server.cfg anche direttamente via FTP.  
In questo esempio usiamo **FileZilla** per connetterci via FTP al game server e navigare tra le cartelle del server.

Qui impari come connetterti al tuo game server via FTP: [Accesso via FTP](gameserver-ftpaccess.md).

## Connessione e navigazione al percorso del server.cfg

:::info
Assicurati che il tuo game server sia spento mentre lavori via FTP.
:::

Dopo esserti connesso al game server via FTP come spiegato sopra, naviga con FileZilla nella finestra in basso a destra fino alla cartella del server.cfg, che trovi in: **/g198376/arma3/config**

![](https://puu.sh/Fo5eC/4d222f5a99.png)

:::info
Il nome della prima cartella (g198376) è l’ID del tuo server, così puoi distinguere le cartelle se hai più game server.
:::

![](https://puu.sh/Fo4Tw/06f7a53914.png)

Nella cartella trovi il Server.cfg del tuo server Arma 3 e altri file di configurazione.  
Ora puoi fare **click destro** sul server.cfg e selezionare **Visualizza/Modifica**.

![](https://puu.sh/Fo5fM/f3519a8936.png)

Si aprirà un editor standard dove puoi modificare il Server.cfg come spiegato sopra.  
Dopo aver modificato il file, salvalo con **CTRL+S**. Poi chiudi l’editor, il server è pronto per essere riavviato.

<InlineVoucher />