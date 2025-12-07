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

![](https://github.com/zaphosting/docs/assets/42719082/331d2a3d-0d81-4b39-8ad6-d0aba84ff19c)

:::info
Prima di procedere con l'importazione, apri il file .sql con un editor di testo e verifica se sono presenti queste righe:

![](https://github.com/zaphosting/docs/assets/42719082/dfc43c55-9918-45e7-99eb-1f70193c0be1)

Se ci sono, assicurati di rimuovere le righe `CREATE` e `USE` del database e salva il file, altrimenti il file SQL non potrà essere importato.

Questo perché la prima riga dichiara la creazione di un nuovo database, ma non serve perché il tuo server RedM ha già un database con un altro nome. La seconda riga indica di usare il database chiamato `essentialmode`, ma anche questo non serve perché importerai nel database esistente.
:::

## Importa il file SQL nel tuo database RedM

Ora accedi alla sezione **Database** nel pannello web del tuo game server.

![](https://github.com/zaphosting/docs/assets/42719082/5f0f81ec-832b-4b9e-a39a-8ec78fd10890)

Nella pagina del database troverai varie funzioni per gestire il database, come backup, creazione, gestione e altro. Qui ci concentreremo sull’accesso al database, ma dai un’occhiata alle nostre altre guide se vuoi approfondire: [Accesso esterno al database](gameserver-database-external-access.md).

Clicca sull’icona blu di reindirizzamento che ti porterà allo strumento **phpmyadmin**, dove potrai accedere facilmente al database. Se ti viene chiesto, usa le credenziali fornite nella pagina del database.

Una volta dentro, seleziona il tuo database dalla lista a sinistra. Il nome del database **inizierà sempre** con il prefisso `zap`.

![](https://github.com/zaphosting/docs/assets/42719082/30fa6041-b94e-4ac8-a3cd-286cca226dba)

Se non hai mai usato il database, sarà vuoto. Ora puoi finalmente importare il file .sql.

Clicca sul pulsante **Importa** nella barra di navigazione in alto su phpmyadmin per aprire il menu di importazione.

![](https://github.com/zaphosting/docs/assets/42719082/c0ca30f0-c520-4a71-843a-296064ba5761)

Poi clicca su **Sfoglia...** per aprire l’esplora file. Seleziona il file **.sql** che vuoi importare.

![](https://github.com/zaphosting/docs/assets/42719082/02d09225-a68d-498b-a2bd-df57386ce242)

:::note
La dimensione massima del file è 2MB. Se il tuo file SQL è più grande, usa uno splitter SQL per dividerlo in parti più piccole. Ti consigliamo lo strumento [Pinetools SQL-Splitter](https://pinetools.com/split-files) che fa tutto per te. Poi potrai importare i file SQL normalmente.
:::

Infine, clicca su **Importa** in fondo alla pagina per avviare l’importazione. Se tutto è andato bene, vedrai un messaggio di successo e una nuova tabella sarà creata nel database, visibile a sinistra.

![](https://github.com/zaphosting/docs/assets/42719082/5fef5d58-78f1-4b59-bc3e-1e0af2ff981b)

Hai importato con successo un file SQL nel database del tuo game server!


## Conclusione

Importare un file SQL per il tuo server RedM è fondamentale per usare molte risorse senza problemi. Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />