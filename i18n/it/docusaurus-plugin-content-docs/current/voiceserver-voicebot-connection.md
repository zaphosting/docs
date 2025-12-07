---
id: voiceserver-voicebot-connection
title: "Voiceserver: Collega il tuo voicebot al tuo voice server"
description: "Scopri come collegare il tuo voice bot ai server TeamSpeak e Discord per una comunicazione e controllo senza intoppi → Scopri di più ora"
sidebar_label: Collegamento al voice server
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## Introduzione

Vuoi collegare il tuo Voicebot al tuo server TeamSpeak, ma non sai ancora come fare? Nessun problema, qui sotto ti spieghiamo passo passo come fare!



## Collegare il bot al tuo TeamSpeak

Per collegare il tuo voice bot al server TeamSpeak 3, devi aprirlo nel pannello di controllo. Poi vai su **Server** a sinistra, come mostrato qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

Ora puoi selezionare un TeamSpeak sotto **Server** se è stato prenotato con il tuo account. Se è ospitato esternamente, puoi anche scegliere **Custom Teamspeak Server**.

Poi inserisci i dati qui sotto, salva e il voice bot si collegherà al tuo server TeamSpeak 3, ecco un esempio:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## Collegare il bot al tuo Discord

Per collegare il voice bot al tuo Discord, vai su **Server** e poi seleziona **Discord**.

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

Devi inserire il **Discord Bot Token** e il **Discord Bot Client ID**. Dopo di che, il voice bot si collegherà al tuo server Discord.


## Come ottenere il Discord Bot Token e il Client ID

Dato che il tuo server Discord non ha un indirizzo IP o una porta diretta, ci sono alcuni passaggi da fare prima di poter usare il bot sul server Discord.


### Creare un'applicazione Discord

La prima cosa da fare è creare un'applicazione Discord. Il tuo bot sarà assegnato a questa e agirà a suo nome. Per creare l'applicazione, vai su [Discord Developer Portal](https://discord.com/developers/applications/).

Ora crea una nuova applicazione cliccando su **New Application** e assegna un nome, come vedi qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Poi crea l'app cliccando su **Create**. Per i passaggi successivi, annota l’ID dell’applicazione:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Configurare il Bot e ottenere il Token

Quando crei l’app, viene creato automaticamente anche un bot. Puoi ottenere il token cliccando su **Reset Token**. Ti verrà mostrato un token utente che devi annotare o salvare da qualche parte:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Non condividere mai il token del bot con nessuno, così il bot può funzionare senza problemi e non crea rischi di sicurezza. Il token è come una chiave segreta, tienilo per te.
:::

Nella stessa pagina scorri un po’ in basso e abilita **Presence Intent**, **Server Members Intent** e **Message Content Intent**, poi salva le modifiche:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### Invitare il Bot nel tuo Discord

Per invitare il bot, inserisci il client ID annotato nel link qui sotto al posto giusto, apri il link nel browser e aggiungi il bot al tuo server Discord. Dovrebbe essere così:

```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Configura il pannello del Bot

Ora inserisci il token e il client ID nei campi del pannello di controllo ZAP-Hosting e clicca su **Save** in basso:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

Poi puoi avviare il bot. Dovrebbe collegarsi al tuo server Discord in circa 10 secondi.


## Conclusione

Il Voicebot è un prodotto super utile e divertente per tantissimi utenti. Puoi usarlo sia su un server Teamspeak che su Discord. Per qualsiasi domanda o supporto, il nostro team è sempre pronto ad aiutarti ogni giorno! 🙂 

<InlineVoucher />