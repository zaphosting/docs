---
id: satisfactory-switchexperimental
title: "Satisfactory: Build Sperimentale"
description: "Scopri i vantaggi e i rischi dell'usare la build sperimentale di Satisfactory per accedere in anticipo ai grandi aggiornamenti e migliorare la tua esperienza di gioco → Scopri di più ora"
sidebar_label: Build Sperimentale
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Cos'è la build sperimentale?
Satisfactory ha due versioni: la build regolare e la build sperimentale. La build regolare è più affidabile, stabile e meno soggetta a bug perché è una versione più definitiva. La build sperimentale, invece, ti dà accesso in anteprima ai grandi aggiornamenti prima che vengano rilasciati nella build regolare, quindi ha più probabilità di bug e aggiornamenti molto più frequenti, ma il vantaggio di provare per primo le novità importanti!

:::info
Nota: Indipendentemente dalla build che scegli, sia il tuo server che il client di gioco devono essere sulla stessa versione della build per potersi connettere.
:::

<InlineVoucher />

## Come passare alla build sperimentale?
Con il nostro sistema di game server, è super semplice cambiare la build del server direttamente dal sito. Prima di iniziare, ti consigliamo di fare un backup dei tuoi salvataggi di Satisfactory perché cambiare la build cancellerà tutti i file.

### Backup dei salvataggi
Fare il backup dell’intero server di gioco o dei salvataggi è facilissimo. Vai sulla pagina prodotto di Satisfactory e apri la scheda `Tools -> Backups`.

![Screenshot 2023-02-21 192618](https://screensaver01.zap-hosting.com/index.php/s/sMA9kQxoLoozsPa/preview)

Qui puoi fare un sacco di cose, inclusi backup automatici che spieghiamo meglio in [Backups](gameserver-backups.md). Qui ci concentriamo sul backup manuale.

In alto alla pagina, clicca sull’icona verde + e conferma la richiesta per fare il backup completo del server di gioco sullo storage backup di ZAP.

![Screenshot 2023-02-21 193113](https://screensaver01.zap-hosting.com/index.php/s/Gf2XRLzz46WNHHE/preview)

Il backup è stato creato e puoi accedervi via FTP, come spiegato in [Accesso via FTP](gameserver-ftpaccess.md).

In alternativa, puoi scaricare i file di salvataggio direttamente dalla sezione `Savegame Manager` nell’interfaccia web. Trovi tutto qui: [Savegame Manager](satisfactory-savegame.md).

### Passare al server di gioco sperimentale
Prima di tutto, vai sulla pagina prodotto di Satisfactory e apri la scheda `Settings -> Games`.

![Screenshot 2023-02-21 191212](https://screensaver01.zap-hosting.com/index.php/s/nyksz8LjPtRGq4w/preview)

Vedrai la sezione `Installed games` che mostra i giochi già installati. Se hai già cambiato build in passato, la troverai lì e puoi passare direttamente all’ultimo step per attivare il gioco.

Scorri in basso e apri il menu a tendina `Available Games`, poi cerca "Satisfactory" nella casella di testo.

![Screenshot 2023-02-21 191713](https://screensaver01.zap-hosting.com/index.php/s/CPein9Qctkwp8Yd/preview)

Clicca sul pulsante verde di download e conferma l’installazione nella finestra che appare. Partirà il download della build server selezionata.

![Screenshot 2023-02-21 191956](https://screensaver01.zap-hosting.com/index.php/s/C3zwiXf9THNpdDk/preview)

>Il download può richiedere qualche minuto. Aspetta che finisca prima di procedere con l’ultimo step.

Ora entrambe le versioni compariranno sotto `Installed games` per un accesso più rapido in futuro, così puoi switchare facilmente tra le due.

Infine, devi attivare il gioco nella sezione `Installed games`. Premi sull’icona blu per attivare il gioco.

:::info
Attenzione: Tutti i dati del gioco verranno cancellati durante la reinstallazione, assicurati di aver fatto il backup prima di procedere.
:::

![Screenshot 2023-02-22 020606](https://screensaver01.zap-hosting.com/index.php/s/nmJ56coL946CNBG/preview)

Se vuoi tornare alla build regolare, segui gli stessi passaggi ma scegli il server di gioco Satisfactory regolare durante la selezione!

## Passare il client di gioco alla build sperimentale
:::info
Nota: Indipendentemente dalla build che scegli, sia il server che il client di gioco devono essere sulla stessa versione della build per potersi connettere.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Prima apri Steam e vai nella tua libreria giochi. Cerca "Satisfactory", clicca col tasto destro e seleziona il menu proprietà.

![Screenshot 2023-02-21 203108](https://screensaver01.zap-hosting.com/index.php/s/3iqTTQNQdNpX976/preview)

Nel nuovo menu, vai nella sezione `Betas` e seleziona `experimental`.

![Screenshot 2023-02-21 203435](https://screensaver01.zap-hosting.com/index.php/s/PnMTyGWqWd78iZa/preview)

Fatto! Ora aspetta che Steam aggiorni il gioco alla build selezionata, poi potrai avviare il gioco e goderti il server!
</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Per Epic Games è ancora più semplice passare alla build sperimentale. Basta andare nella tua libreria e trovare il gioco "Satisfactory Experimental". Su Epic Games launcher le due build sono giochi separati in libreria.

Fatto! Ora aspetta che Epic Games scarichi e installi il gioco, poi potrai avviarlo e goderti il server!

</TabItem>
</Tabs>

<InlineVoucher />