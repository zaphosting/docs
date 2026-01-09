---
id: redm-server-customisation
title: "RedM: Personalizza i dettagli del server"
description: "Scopri come personalizzare il nome del tuo server con colori ed emoji per farlo risaltare nella lista server → Scopri di più ora"
sidebar_label: Personalizza Dettagli Server
services:
  - gameserver-redm
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Vuoi personalizzare il tuo server per mostrare informazioni custom nella lista server? È facilissimo! In questa guida imparerai a impostare diverse personalizzazioni disponibili per far risaltare il tuo server nella lista!



<InlineVoucher />



## Nome Server Personalizzato

### Codici Colore

Ci sono diversi colori che puoi aggiungere al nome del tuo server. Questi si specificano usando un prefisso quando vuoi cambiare colore. La lista dei colori disponibili la trovi nella tabella qui sotto.

:::info
Per usare i colori nel nome del server, devi avere un [abbonamento Cfx.re valido](https://portal.cfx.re/subscriptions) che includa questo beneficio. Se ce l’hai ma non funziona, assicurati di aver impostato una [Licenza Propria](redm-licensekey.md).
:::

Ora puoi cambiare il nome del tuo server con uno dei tre metodi descritti nella sezione di accesso alla configurazione. Ecco un esempio di utilizzo dei colori e il risultato che producono:
```
sv_hostname "^2ZAP-Hosting ^0| ^4Official Community Server ^0- ^1Events coming ^8soon^1!"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)



| Codice | Colore     | Codice Hex |
| ------ | ----------| --------- |
| ^0     | Bianco    | #F0F0F0   |
| ^1     | Rosso     | #F44336   |
| ^2     | Verde     | #4CAF50   |
| ^3     | Giallo    | #FFEB3B   |
| ^4     | Blu       | #42A5F5   |
| ^5     | Azzurro   | #03A9F4   |
| ^6     | Viola     | #9C27B0   |
| ^7     | Bianco    | #F0F0F0   |
| ^8     | Arancione | #FF5722   |
| ^9     | Grigio    | #9E9E9E   |

### Emoji

RedM ti permette anche di inserire emoji direttamente nel nome del server. Basta mettere le emoji che vuoi nel parametro `sv_hostname` nella configurazione del server e funziona subito. Non serve un abbonamento Cfx.re per questo.



## Impostare i Dettagli del Progetto

### Descrizione Server

Impostare una descrizione server è utile per dare una panoramica breve e diretta del tuo server. Puoi facilmente impostare una piccola descrizione progetto per il tuo server RedM, che verrà mostrata accanto al nome del server nella lista. Ecco un esempio di descrizione progetto e il risultato:

```
sets sv_projectDesc "Unisciti al nostro Discord per restare aggiornato sugli eventi! discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### Tag Server

Impostare i tag server aiuta a definire meglio di cosa tratta il tuo server e permette ai giocatori di trovarlo più facilmente filtrando in base ai loro gusti. Una volta impostati, i tag saranno visibili nella pagina del tuo server nella lista e saranno usati per filtrare il server. Ecco un esempio di tag progetto e il risultato:

```
sets tags "zap, zap-hosting, official, community, zap-community, zap-community-server"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### Altri Dettagli Vari

Puoi anche modificare qualche altro dettaglio vario del server a tuo piacimento.

#### Tipo di Gioco

Impostare il parametro gametype cambia cosa viene mostrato nella pagina del tuo server nella lista. Questo **non** cambia la modalità di gioco sul server stesso. Puoi cambiare il gametype tramite il webinterface del tuo server o impostando un tag:

```
sets gametype "Freeroam"
```

#### Lingua

Infine, puoi cambiare la lingua del tuo server che viene mostrata nella pagina del server nella lista. Abbiamo una [Guida Lingua / Localizzazione (bandiera)](redm-locale.md) per impostare la localizzazione. Puoi farlo tramite il webinterface del server o impostando un tag:

```
sets locale "en-GB"
```

Puoi trovare la lista completa di tutti i tag locale consultando [questa risorsa](https://github.com/TiagoDanin/Locale-Codes#locale-list) o simili.



## Conclusione

Se hai seguito tutti i passaggi, hai personalizzato con successo il tuo server RedM. Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />