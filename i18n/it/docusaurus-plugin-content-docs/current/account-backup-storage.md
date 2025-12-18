---
id: account-backup-storage
title: Backup Storage
description: "Scopri come archiviare e gestire in sicurezza i tuoi backup con opzioni di storage scalabili per un facile ripristino e accesso → Scopri di più ora"
sidebar_label: Backup Storage
---

## Cos’è il backup storage?
Il Backup Storage offre ai nostri clienti la possibilità di creare backup tramite i loro servizi. Ogni cliente ha a disposizione uno spazio gratuito di 10GB sul suo backup storage, che può utilizzare completamente. Tuttavia, con un piccolo sovrapprezzo è possibile prenotare un’estensione dello spazio fino a 200GB.

## Come accedo ai miei file di backup?
I file di backup vengono salvati sul backup storage non appena viene creato un backup tramite l’interfaccia web. I file possono poi essere ripristinati sul servizio corrispondente usando la funzione di backup di quel servizio oppure scaricati dal backup storage tramite connessione FTP.

### Collegarsi al backup storage via FTP
Per collegarti al Backup Storage via FTP, scarica e installa il programma [FileZilla](http://www.filezilla.de/download.htm) per il tuo sistema operativo. Una volta completata l’installazione, apri il programma.
Dovresti vedere l’interfaccia di FileZilla:

![2022-04-08_04-41](https://screensaver01.zap-hosting.com/index.php/s/XHa7gfPBKcGgYj4/preview)

Per collegarti al tuo backup storage, inserisci i dati di connessione nei campi di testo in alto.
Puoi trovare questi dati andando sulla pagina del tuo backup storage nell’interfaccia web.
Clicca su questa icona in alto nella barra del menu:

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

Nella pagina del Backup Storage troverai i dati di accesso per la connessione FTP nella casella evidenziata nell’immagine:

![2022-04-08_04-39](https://screensaver01.zap-hosting.com/index.php/s/pziwNeT9jmFC5Ax/preview)

Inserisci l’indirizzo IP in FileZilla nel campo **Server**, l’utente nel campo **Nome utente** e la password nel campo **Password**. Non serve specificare la porta se è *21*. Ora clicca su **Connetti**.
Se la connessione va a buon fine, troverai i backup creati dai tuoi servizi nelle rispettive cartelle.

![2022-04-08_04-41_1](https://screensaver01.zap-hosting.com/index.php/s/K9MZHf8napDMCjT/preview)

![2022-04-08_04-41_2](https://screensaver01.zap-hosting.com/index.php/s/ca7DkJ2T6DpxTFH/preview)

I backup sono archiviati in formato compresso come file **\*.tar.gz** nelle rispettive cartelle e possono essere estratti con programmi come WinRAR o 7-Zip.

## Messaggio di errore "Transfer connection interrupted"

Se durante la connessione o il trasferimento compare il messaggio di errore "Transfer connection interrupted: ECCONABORTED - Connection aborted", puoi cambiare la modalità di trasferimento da "**Passiva**" a "**Attiva**".
Ecco come fare nelle impostazioni di FileZilla.

Premi su "**Modifica**" nel client FileZilla, poi apri direttamente "**Impostazioni...**":

![2022-04-08_05-16](https://screensaver01.zap-hosting.com/index.php/s/AgrmP6i5aAEr2kr/preview)

Si aprirà la finestra "**Impostazioni**". Qui clicca su "**FTP**" per vedere le impostazioni della connessione FTP.
Di default la modalità di trasferimento è impostata su "**Passiva**", seleziona il pulsante radio "**Attiva**" e conferma con "**OK**".

![2022-04-08_05-17](https://screensaver01.zap-hosting.com/index.php/s/REPQieY3Zbm8arM/preview)

Ora puoi provare di nuovo a connetterti via FTP.

## Messaggi
Nel menu laterale, sotto la voce *Messaggi*, viene mostrato il log che indica quale azione è stata eseguita, per quale pacchetto e quando, in base al trigger o motivo durante i backup.

![2022-04-08_04-42](https://screensaver01.zap-hosting.com/index.php/s/GwtGHoDL7d9r3Ds/preview)