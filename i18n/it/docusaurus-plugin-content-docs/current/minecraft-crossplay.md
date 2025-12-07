---
id: minecraft-crossplay
title: "Minecraft: Configurare il crossplay tra le edizioni Minecraft Java & Bedrock"
description: "Scopri come abilitare il crossplay fluido tra Minecraft Java e Bedrock con i plugin GeyserMC e Floodgate per un'esperienza multiplayer potenziata → Scopri di più ora"
sidebar_label: Crossplay Java & Bedrock
services:
  - gameserver-minecraft
---

## Introduzione

Tradizionalmente non era possibile giocare insieme tra le edizioni Minecraft Java e Bedrock, dato che sono considerate piattaforme completamente separate. Fortunatamente, oggi puoi rendere possibile il crossplay utilizzando plugin specifici per i server Java Edition che permettono ai giocatori Bedrock di connettersi. In questa guida vedremo come installare e configurare il plugin GeyserMC insieme a Floodgate per rendere il crossplay tra le due piattaforme semplice e funzionale.

## Preparazione

Per configurare il crossplay, devi avere un server Minecraft che utilizzi uno dei software server Java compatibili. Ti consigliamo di usare Paper, Spigot o Bukkit, che sono le opzioni più popolari.

Assicurati di avere un Game Server Minecraft pronto con uno di questi giochi installato e attivato. Se ti serve aiuto, dai un’occhiata alla nostra guida [Cambio Gioco](gameserver-gameswitch.md).

## Installazione

Per iniziare l’installazione, vai al pannello web del tuo game server e naviga nella sezione **Impostazioni->Plugin**. Qui trova il menu a tendina **GeyserMC** e selezionalo. Usa il pulsante di installazione per aggiungere automaticamente il plugin al tuo server e aspetta che la barra di progresso arrivi al 100%.

Ti consigliamo anche di installare il plugin **Floodgate**, che si trova nella stessa sezione, perché offre diversi vantaggi come:
- Permettere ai giocatori Bedrock di entrare senza un account Java.
- Visualizzare le skin Bedrock anche su Java Edition.
- Vari benefici per gli sviluppatori.

:::note
Il plugin Floodgate è opzionale, ma lo consigliamo fortemente perché rende il crossplay molto più semplice per i giocatori Bedrock.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cagcHmzwR2yBZSo/preview)

Con i plugin installati, passa alla sezione successiva per configurare le impostazioni.

## Configurazione dei Plugin

Sempre nella sezione **Plugin** del pannello web, clicca sull’icona blu delle impostazioni accanto al plugin GeyserMC, che ti porterà automaticamente nell’area corretta delle **Impostazioni**.

![](https://screensaver01.zap-hosting.com/index.php/s/RAZKNSdePa5wBs4/preview)

Qui puoi personalizzare il nome del server e le righe MOTD che saranno mostrate specificamente ai giocatori Bedrock.

![](https://screensaver01.zap-hosting.com/index.php/s/kBzxQkmNgdsWgZb/preview)

Scorrendo fino in fondo alla pagina, vedrai anche le porte assegnate al tuo server.

- La **Game Port** è la porta principale del server, da usare per connettersi con i client Java Edition.
- La **Port 5** è la porta usata dal plugin GeyserMC, da utilizzare per i client Bedrock Edition.

Quando ti connetti da un client, assicurati di usare la porta corretta in base all’edizione Minecraft.

:::tip
Per i clienti con l’opzione server **Own IP**, è possibile richiedere una porta personalizzata per adattarla ai tuoi gusti. Puoi [contattare il supporto](https://zap-hosting.com/en/customer/support/) tramite ticket per fare questa richiesta.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/joA62kWeJ5crCmY/preview)

## Connessione & Risoluzione Problemi

Dopo aver configurato il plugin, riavvia il server per applicare le nuove impostazioni. Prova a connetterti da entrambe le edizioni per verificare che tutto funzioni.

Ricordati di usare le porte giuste: **Port 5** per i giocatori Bedrock e la **Game Port** per quelli Java, che trovi nella scheda **Impostazioni**. Puoi anche vederle passando con il mouse sull’icona informazioni nella dashboard del pannello web.

![](https://screensaver01.zap-hosting.com/index.php/s/M42ZkamKHieRcEz/preview)

Se tutto va bene, ora potrai fare crossplay e connetterti facilmente da entrambe le edizioni.

![](https://screensaver01.zap-hosting.com/index.php/s/oMRWkaSs5KKbkzy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xyMaENLFx4BCSPF/preview)

Se hai problemi a connetterti, prova questi passaggi di troubleshooting che risolvono la maggior parte degli errori comuni.

#### Client Obsoleto - Server Obsoleto

Questo errore indica che la versione del server e del client non corrispondono. Se succede su Java Edition, cambia semplicemente la versione del gioco dal launcher.

Purtroppo su Bedrock non è facile cambiare versione. Se hai questo problema su Bedrock, assicurati di aggiornare sia l’app che il server all’ultima versione.

Ti consigliamo anche di usare i plugin ViaVersion e ViaBackwards, che ampliano le versioni di gioco da cui il server è accessibile, così utenti con versioni più vecchie o più nuove possono comunque connettersi. Vai nella sezione **Plugin** del pannello web, sotto il menu a tendina **Tutti i Plugin**, trova **ViaVersion** e **ViaBackwards** e clicca sull’icona verde per installarli.

:::note
Se hai problemi a installare i plugin via web, potrebbe essere che non ci sia una versione stabile recente. In questi casi ti consigliamo di scaricare manualmente una versione beta dal sito ufficiale e caricarla via FTP. Scopri come fare nella nostra guida [Accesso FTP](gameserver-ftpaccess.md).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QCcndf6TGMsrw7x/preview)

Dopo l’installazione, prova di nuovo a connetterti: ora dovrebbe funzionare con più versioni di gioco.

#### Impossibile connettersi al mondo

La causa più comune è usare la porta sbagliata quando aggiungi il server nel client. Assicurati di usare la porta indicata come **Port 5** nella sezione **Impostazioni** del pannello web per i client Bedrock. Per i client Java, usa la **Game Port**.

Se il problema persiste, controlla il file di configurazione del plugin GeyserMC per verificare che le porte siano corrette. Vai nella sezione **Config** del pannello web e apri il file `plugins/Geyser-[tuo_servertype]/config.yml` con il pulsante blu di modifica.

In questo file, trova i parametri `port` sotto le sezioni `bedrock` e `remote`. Assicurati che la porta bedrock corrisponda a quella di **Port 5** e che la porta remote sia impostata su **25565** o sulla **Game Port**.

![](https://screensaver01.zap-hosting.com/index.php/s/AcZ5JAasBcKQpCm/preview)

## Conclusione

Congratulazioni, hai installato e configurato con successo il plugin GeyserMC sul tuo server Minecraft, abilitando il crossplay tra le edizioni Java e Bedrock! Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂