---
id: fivem-sql-file-import
title: "FiveM: Importazione file SQL"
description: "Scopri come importare correttamente i file SQL per far funzionare al meglio le risorse FiveM con il tuo database → Scopri di più ora"
sidebar_label: Importazione file SQL
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Molte risorse per FiveM richiedono un database per funzionare correttamente. Per questo è fondamentale importare nel modo giusto i file SQL forniti con le risorse nel tuo database, così da permettere alle risorse di creare voci nel database e funzionare come previsto.

:::info
Non tutte le risorse richiedono un database per funzionare! Quando scarichi una risorsa, controlla la descrizione o la documentazione per capire se devi importare un file SQL.
:::

Spesso, nei file scaricati per la risorsa troverai uno o più file con estensione **.sql**. Questi devono essere importati nel database.

<InlineVoucher />

## Preparare il file SQL

In questo esempio importeremo il file SQL per **ESX**. Dovrai preparare il file SQL per la risorsa che vuoi importare. Puoi farlo aprendo la cartella della risorsa che richiede un database e cercando un file con estensione **.sql**.

![](https://screensaver01.zap-hosting.com/index.php/s/3YMrCZ29pc87aW8/preview)

:::info
Prima di procedere con l’importazione, apri il file .sql con un qualsiasi editor di testo e verifica che non ci siano queste righe:

![](https://screensaver01.zap-hosting.com/index.php/s/wXLmBpmiwYp3Zzo/preview)

Se sono presenti, rimuovi le righe `CREATE` e `USE` relative al database e salva il file, altrimenti il file SQL non potrà essere importato.

Questo perché la prima riga dichiara la creazione di un nuovo database, cosa non necessaria dato che il tuo server RedM ha già un database con un nome diverso. La seconda riga indica di usare il database `essentialmode` per l’importazione, ma anche questo non serve perché userai un database esistente.
:::

## Importare il file SQL nel database

Ora accedi alla sezione **Database** nel pannello web del tuo game server.

![](https://screensaver01.zap-hosting.com/index.php/s/jk6BBm4d5dDtNcd/preview)

Nella pagina del database troverai varie funzioni per gestire il database, come backup, creazione, gestione e altro. Qui ci concentreremo sull’accesso al database, ma dai un’occhiata alle nostre altre guide se vuoi approfondire: [Accesso esterno al database](gameserver-database-external-access.md).

Clicca sull’icona blu di reindirizzamento che ti porterà allo strumento **phpmyadmin**, dove potrai accedere facilmente al database. Se richiesto, usa le credenziali fornite nella pagina del database.

Una volta dentro, seleziona il tuo database dalla lista a sinistra. Il nome del database **inizierà sempre** con il prefisso `zap`.

![](https://screensaver01.zap-hosting.com/index.php/s/Qx37APa9233B7zt/preview)

Se non hai mai usato il database, sarà vuoto. Ora puoi finalmente importare il file .sql.

Clicca sul pulsante **Importa** nella barra di navigazione superiore di phpmyadmin per aprire il menu di importazione.

![](https://screensaver01.zap-hosting.com/index.php/s/McfzS8DraJsXPTZ/preview)

Poi clicca su **Sfoglia...** per aprire l’esplora file. Seleziona il file **.sql** che vuoi importare.

![](https://screensaver01.zap-hosting.com/index.php/s/cfTYGYfFGMEyQbA/preview)

:::note
La dimensione massima del file è 2MB. Se il tuo file SQL è più grande, usa uno splitter SQL per dividerlo in parti più piccole. Ti consigliamo lo strumento [Pinetools SQL-Splitter](https://pinetools.com/split-files) che fa tutto in automatico. Poi potrai importare i file SQL normalmente.
:::

Infine, clicca su **Importa** in fondo alla pagina per avviare l’importazione. Se tutto è andato a buon fine, vedrai un messaggio di successo e una nuova tabella sarà creata nel database, visibile nella lista a sinistra.

![](https://screensaver01.zap-hosting.com/index.php/s/iyobgkNtQpnNjoH/preview)

## Conclusione

Importare un file SQL per il tuo server FiveM è fondamentale per usare molte risorse senza problemi. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />