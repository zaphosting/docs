---
id: spaceengineers-addmods
title: "Space Engineers: Installazione dei mod"
description: "Scopri come configurare e aggiungere mod al tuo server di Space Engineers in modo sicuro per un'esperienza di gioco personalizzata → Scopri di più ora"
sidebar_label: Installa mod
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Preparazione

Per poter aggiungere mod su un server, è necessario modificare un file di configurazione. Per evitare problemi nell'applicazione delle modifiche, assicurati che il server sia spento prima di procedere!

Per far sì che venga elaborata la configurazione corretta, bisogna prima scoprire il nome del salvataggio. Se non hai modificato questa impostazione, il default è "zap001". Per sicurezza, controlla come descritto qui sotto:

Per accedere alle impostazioni del tuo server, apri la voce "Impostazioni" nella lista a sinistra sotto la scheda "Settings"

![](https://screensaver01.zap-hosting.com/index.php/s/Begs32xtfWitRDA/preview)

Il nome del salvataggio può essere visualizzato o modificato nel primo campo di questa pagina. Ricordati questo nome perché ti servirà per modificare il file di configurazione giusto più avanti.

![](https://screensaver01.zap-hosting.com/index.php/s/DHs7JGyxRMSfDKN/preview)

Per seguire questa guida, è anche necessario installare **Notepad++** così da poter eseguire i passaggi esattamente come indicato!

## Scegli i Mod

Tantissimi mod li trovi nel workshop di Space Engineers. Puoi accedere al workshop [qui](https://steamcommunity.com/workshop/about/?appid=244850).

Quando trovi un mod interessante, cliccaci sopra per vedere tutti i dettagli. Se ti piace, devi salvarti l’ID del mod. L’ID mod di solito è evidenziato in grassetto a lato o in cima nella barra URL:

![](https://screensaver01.zap-hosting.com/index.php/s/k6WKbbZEizX7TpR/preview)

## Apri i File di Configurazione

Ci sono due modi per modificare i file di un server: tramite [Accesso FTP](gameserver-ftpaccess.md) oppure tramite il Config Editor direttamente nell’interfaccia web.

In questo caso modificheremo la config manualmente via FTP per evitare errori di sintassi. Come collegarti via FTP è spiegato dettagliatamente nella guida linkata sopra.

Una volta stabilita la connessione FTP, naviga nella cartella:

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

Qui trovi tutte le cartelle dei salvataggi creati sul server. Per modificare la config del salvataggio giusto, apri la cartella corrispondente. Nel nostro esempio è "zap001":

![](https://screensaver01.zap-hosting.com/index.php/s/cLT8FLSnQE42ZwN/preview)

Ora devi modificare il file sandbox in questa cartella. Apri proprio questo file come mostrato nello screenshot!

![](https://screensaver01.zap-hosting.com/index.php/s/bKrCK6LcCMbkwbb/preview)

## Aggiungi i Mod

Alla fine del file di config c’è già una sezione mod. Selezionala tutta con il mouse e cancellala. Poi inserisci questo contenuto:

`<Mods></Mods>`

Dopo aver incollato, posiziona il cursore tra "&gt;" e "&lt;" e premi INVIO una volta. Così il formato XML si sistema automaticamente e puoi continuare.

![](https://screensaver01.zap-hosting.com/index.php/s/JbTqfX455XbffRs/preview)

Adesso aggiungiamo il primo mod. Per farlo usiamo un "ModItem", che rappresenta un singolo mod. Copia questo blocco e incollalo nella config come nel GIF:

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![](https://screensaver01.zap-hosting.com/index.php/s/FkgJmMTBAp8SLzp/preview)

:::info
Qui 12345 va sostituito con l’ID del mod che hai scelto!
:::

Come vedi nel GIF, per aggiungere altri mod basta ripetere gli stessi passaggi. Quando hai finito di aggiungere tutti i mod che vuoi, salva la config con **CTRL+S** e chiudi il file. Ora puoi avviare il server normalmente e i mod verranno installati automaticamente.

<InlineVoucher />