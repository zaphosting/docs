---
id: voiceserver-query
title: "Voiceserver: Accesso TeamSpeak Query"
description: "Scopri come gestire il tuo server TeamSpeak esternamente usando il Query Login per un controllo e amministrazione efficiente del server → Scopri di più ora"
sidebar_label: Query Login
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il query login di TeamSpeak ti permette di accedere all’interfaccia server query, dove puoi gestire il tuo server TeamSpeak esternamente tramite comandi.

:::warning Accesso Server Admin Query
I nostri prodotti Teamspeak Server non includono l’accesso Server Admin Query. 
:::

<InlineVoucher />

## Dettagli di login

<Tabs>
<TabItem value="Webinterface" label="Prodotto TeamSpeak Server" default>

Per motivi di sicurezza, il login **Server Admin Query** non è disponibile con il **prodotto TeamSpeak server**. Tuttavia, se hai i diritti admin sul tuo server Teamspeak, puoi creare il tuo Query Login seguendo questi passaggi.

:::info
Funzionalità come import snapshot, modifica slot/porte e simili non sono disponibili. Queste impostazioni sono predefinite da noi e non possono essere modificate manualmente. 
:::

Per creare il tuo Query Login, clicca su "Server Query Login" nel client Teamspeak sotto Strumenti.
Poi inserisci un nome per il login, che sarà anche il nome utente, es. "MyQueryLogin":

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

Dopo aver confermato con "OK", verrà mostrata una password. Salvala, non potrà essere cambiata in seguito.

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)

Con i dati di login appena creati puoi connetterti ad esempio tramite [YaTQA](https://yat.qa). Ti serviranno l’IP del server, la porta Query, la porta del server, il nome utente e la password del Query login.

IP del server, porta Query e porta server li trovi nel Dashboard dell’interfaccia web:

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>
<TabItem value="self_hosted" label="Self hosted (VPS/Server Dedicato)">

Se il server Teamspeak è stato installato sul tuo VPS o Server Dedicato tramite l’interfaccia web, puoi usare il normale "Server Admin Query". I dati di login li trovi nell’interfaccia web dell’istanza Teamspeak.

</TabItem>
</Tabs>

## Accesso Query

Inserisci i dati di login forniti o creati per il tuo Query Login sotto Quick Connect nell’app **YatQA** e clicca sul **pulsante Connect**.

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)

:::warning Errore Porta Query Personalizzata
Di default, dopo un’installazione iniziale, se specifichi una porta diversa dalla porta query di default, dovrebbe comparire un errore. È normale e si risolve così:

![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::

## Conclusione

Hai collegato con successo la query usando YatQA. Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />