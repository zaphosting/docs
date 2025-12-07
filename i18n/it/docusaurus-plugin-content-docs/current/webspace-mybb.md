---
id: webspace-mybb
title: "Webspace: Installa il software forum MyBB"
description: "Scopri come configurare e lanciare il tuo forum MyBB per creare una community online coinvolgente → Scopri di più ora"
sidebar_label: Installa MyBB
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

MyBB, precedentemente MyBulletinBoard, è un software forum gratuito e open source sviluppato dal MyBB Group. In questa guida ti spieghiamo come installare questo software forum sul nostro prodotto webspace.

<InlineVoucher />

## Preparazione

Prima di procedere con l’installazione vera e propria di MyBB, bisogna fare alcune preparazioni. Questo include scaricare il software forum, configurare il database da utilizzare e il server mail (indirizzo email).

**Software**

Il software forum può essere scaricato dal sito ufficiale di MyBB. Il download è disponibile qui: [MyBB](https://mybb.com/download/)

![Bildschirmfoto vom 2022-05-15 23-16-59](https://screensaver01.zap-hosting.com/index.php/s/s8kbtNFq6c79SoH/preview)

Il download contiene un file compresso, che deve essere estratto sul tuo computer locale. All’interno troverai una cartella chiamata **Upload**. Il suo contenuto è necessario e deve essere caricato tramite **FTP o File Manager**. Sotto **Siti Web & Domini** in **Accesso FTP** puoi creare un utente FTP.

Dopo aver aperto il file manager nel Pleskpanel, naviga nella directory **httpdocs** e carica i file del software forum.

![en-file](https://screensaver01.zap-hosting.com/index.php/s/x9oWpWCzrtB87e7/preview)

**Database**

Successivamente, devi creare il database che verrà usato per memorizzare tutte le informazioni del forum. Per farlo, clicca di nuovo su **Siti Web & Domini** e poi su **Database**. Clicca su Aggiungi Database e crea un database:

![en-db](https://screensaver01.zap-hosting.com/index.php/s/f3dwjM5qxQQpzd6/preview)

Clicca su **OK** e il database sarà creato.

**Server mail (indirizzo e-mail)**

Per registrare un account sul forum serve un server mail con un indirizzo email, così le mail di registrazione possono essere inviate agli utenti. Le istruzioni per configurare un indirizzo email le trovi qui: [Invio Email](webspace-plesk-sendmail.md)

## Installazione

Se hai completato tutti i passaggi della preparazione, puoi iniziare l’installazione vera e propria di MyBB. Per farlo, apri il sito web nel browser. Dovrebbe apparire così:

![mybbinstall](https://screensaver01.zap-hosting.com/index.php/s/DzgRZMBFotTgsXZ/preview)

Qui dovrai configurare 9 categorie durante l’installazione. La configurazione controllerà che tutti i prerequisiti siano soddisfatti, configurerà il database e il software forum, e altro. Per cominciare, devi decidere se inviare statistiche anonime a MyBB o no. Poi devi accettare i termini di licenza.

Dovrebbe apparire una panoramica dei requisiti di sistema richiesti, come versione PHP, memoria, ecc. Il webspace dovrebbe essere già configurato per soddisfarli tutti di default.

![install2](https://screensaver01.zap-hosting.com/index.php/s/fTJQGRADn5SF62C/preview)

Se qualche prerequisito non è soddisfatto, contatta il supporto. Altrimenti clicca su **Avanti** per continuare l’installazione. Ora devi configurare il database, che hai già creato in precedenza. Inserisci i dati del database creato:

![](https://screensaver01.zap-hosting.com/index.php/s/GaRZiSizcYCMX3Z/preview)

Il database verrà configurato subito dopo. Potrebbe richiedere qualche istante. Poi verranno importati i dati e i temi di default. Qui devi solo cliccare su **Avanti**.

Ora si passa alla configurazione generale. Qui puoi definire il nome del sito, del forum, URL e altro:

![install3](https://screensaver01.zap-hosting.com/index.php/s/asEA4KqtZGaN65A/preview)

Ultimo step: creare un account amministratore generale prima di completare l’installazione.

![Install4](https://screensaver01.zap-hosting.com/index.php/s/3T6NMLYyMnb4pja/preview)

Se hai fatto tutto e la configurazione è andata a buon fine, vedrai questo messaggio e potrai accedere al tuo forum:

![](https://screensaver01.zap-hosting.com/index.php/s/9N2jBCbzEYe2iyn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/g9iecMjiDX4GoqP/preview)

<InlineVoucher />