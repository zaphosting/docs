---
id: rust-connectrcon
title: "Rust: Connessione al server tramite RCON"
description: "Scopri come gestire il tuo server da remoto usando RCON per eseguire comandi e controllare in modo efficiente → Scopri di più ora"
sidebar_label: Connessione via RCON
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Cos'è RCON?

RCON è un protocollo per eseguire comandi sul server senza avere accesso diretto alla console.

<InlineVoucher />

### Abilita WebRCON

Prima di poter connetterti, devi assicurarti che Web RCON sia abilitato.
Per abilitarlo, vai alla scheda **Impostazioni**.

![](https://screensaver01.zap-hosting.com/index.php/s/RqpZcnBcEHY3gN2/preview)

Poi attivalo direttamente su questa pagina.
![](https://screensaver01.zap-hosting.com/index.php/s/wJ5psnbAneZ6rMD/preview)

:::info
È necessario un riavvio del server affinché la modifica abbia effetto. 
:::

### Installa un programma RCON

Per connetterti ti servirà un programma RCON. Ce ne sono diversi disponibili.
Per questo esempio, e come consiglio, puoi scaricare [RustAdmin](https://www.rustadmin.com/).

Puoi installarlo direttamente dal pulsante sul loro sito.
![](https://screensaver01.zap-hosting.com/index.php/s/zNtESocaQPFwzCg/preview)

## Connessione via RCON

Una volta aperto WebAdmin, clicca su **Server** in alto. Poi clicca su **Connect**.

:::info
Il tuo server deve essere completamente ONLINE per essere raggiungibile via RCON. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bHLwGDCqH52Bye8/preview)

Verrai reindirizzato a una pagina di configurazione.
Qui inserirai le informazioni del tuo server.

![](https://screensaver01.zap-hosting.com/index.php/s/qmQFd7S79EpYWTE/preview)

:::info
TIP: La tua porta RCON e la password RCON si trovano nella scheda **Impostazioni** dove hai abilitato WebRCON. 
:::

Dopo aver inserito i dati, puoi salvare la configurazione.

![](https://screensaver01.zap-hosting.com/index.php/s/FDMqdsfAHrbiTpt/preview)

Poi clicca su Server -> Connect.

![](https://screensaver01.zap-hosting.com/index.php/s/4DLGZiQ5X6WJrzA/preview)

Se la connessione ha successo, vedrai la scritta **Connected** in verde in basso.

![](https://screensaver01.zap-hosting.com/index.php/s/qzq68ENHzXGK69T/preview)

Ora puoi usare RCON per gestire il tuo server! :) 


<InlineVoucher />