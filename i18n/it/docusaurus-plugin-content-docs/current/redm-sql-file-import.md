---
id: redm-sql-file-import
title: "RedM: Importazione file SQL"
description: "Scopri come importare correttamente i file SQL nel tuo database RedM per garantire il funzionamento delle risorse e l'integrazione del database → Scopri di più ora"
sidebar_label: Importazione file SQL
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Importare file SQL nel tuo database RedM

Molte risorse per RedM richiedono un database per funzionare correttamente. Perciò è fondamentale importare correttamente i file SQL forniti con le tue risorse nel database, così che le risorse possano creare voci nel database e funzionare come previsto.

:::info
Non tutte le risorse richiedono un database per funzionare! Quando scarichi una risorsa, controlla la descrizione o la documentazione per capire se devi importare un file SQL.
:::

Spesso, nei file scaricati per la risorsa, troverai uno o più file con estensione **.sql**. Questi devono essere importati nel database.

## Preparare il file SQL

In questo esempio importeremo il file SQL per il framework RP **RedEM**. Dovresti preparare il file SQL per la risorsa che vuoi importare. Puoi farlo aprendo la cartella della risorsa che richiede un database e cercando un file con estensione **.sql**.

![](https://screensaver01.zap-hosting.com/index.php/s/QTeYKS3MrXTPi76/preview)

:::info
Prima di procedere con l'importazione, apri il file .sql con un editor di testo e verifica se sono presenti queste righe:

![](https://screensaver01.zap-hosting.com/index.php/s/wXLmBpmiwYp3Zzo/preview)

Se ci sono, assicurati di rimuovere le righe `CREATE` e `USE` del database e salva il file, altrimenti il file SQL non potrà essere importato.

Questo perché la prima riga dichiara la creazione di un nuovo database, ma non serve perché il tuo server RedM ha già un database con un altro nome. La seconda riga indica di usare il database chiamato `essentialmode`, ma anche questo non serve perché importerai nel database esistente.
:::

## Importa il file SQL nel tuo database RedM

Ora accedi alla sezione **Database** nel pannello web del tuo game server.

![](https://screensaver01.zap-hosting.com/index.php/s/mq2JdMmfiaqjtND/preview)

Nella pagina del database troverai varie funzioni per gestire il database, come backup, creazione, gestione e altro. Qui ci concentreremo sull’accesso al database, ma dai un’occhiata alle nostre altre guide se vuoi approfondire: [Accesso esterno al database](gameserver-database-external-access.md).

Clicca sull’icona blu di reindirizzamento che ti porterà allo strumento **phpmyadmin**, dove potrai accedere facilmente al database. Se ti viene chiesto, usa le credenziali fornite nella pagina del database.

Una volta dentro, seleziona il tuo database dalla lista a sinistra. Il nome del database **inizierà sempre** con il prefisso `zap`.

![](https://screensaver01.zap-hosting.com/index.php/s/Qx37APa9233B7zt/preview)

Se non hai mai usato il database, sarà vuoto. Ora puoi finalmente importare il file .sql.

Clicca sul pulsante **Importa** nella barra di navigazione in alto su phpmyadmin per aprire il menu di importazione.

![](https://screensaver01.zap-hosting.com/index.php/s/McfzS8DraJsXPTZ/preview)

Poi clicca su **Sfoglia...** per aprire l’esplora file. Seleziona il file **.sql** che vuoi importare.

![](https://screensaver01.zap-hosting.com/index.php/s/Dk2Q2QgHzYEMCsa/preview)

:::note
La dimensione massima del file è 2MB. Se il tuo file SQL è più grande, usa uno splitter SQL per dividerlo in parti più piccole. Ti consigliamo lo strumento [Pinetools SQL-Splitter](https://pinetools.com/split-files) che fa tutto per te. Poi potrai importare i file SQL normalmente.
:::

Infine, clicca su **Importa** in fondo alla pagina per avviare l’importazione. Se tutto è andato bene, vedrai un messaggio di successo e una nuova tabella sarà creata nel database, visibile a sinistra.

![](https://screensaver01.zap-hosting.com/index.php/s/iyobgkNtQpnNjoH/preview)

Hai importato con successo un file SQL nel database del tuo game server!


## Conclusione

Importare un file SQL per il tuo server RedM è fondamentale per usare molte risorse senza problemi. Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />