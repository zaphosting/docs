---
id: fivem-installeup
title: "FiveM: Installa EUP (Emergency Uniform Pack)"
description: "Scopri come configurare l'Emergency Uniform Pack per i personaggi in free mode con abbonamento Element Club richiesto → Scopri di più ora"
sidebar_label: Installa EUP
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

**EUP**, conosciuto anche come Emergency Uniform Pack, ti permette di avere le divise dei servizi di emergenza sui personaggi in free mode. Qui sotto ti spieghiamo passo passo come installarlo.

:::warning Abbonamento Element Club richiesto
Per installare e usare EUP, è necessario un abbonamento Element Club. Prendi il tuo abbonamento sul [Cfx.re Portal](https://portal.cfx.re/subscriptions/element-club)!
:::

<InlineVoucher />



## Preparazione

Per iniziare l’installazione di **EUP**, devi prima fare qualche preparativo. Scarica e decomprimi sul tuo PC [EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) e [NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip). Dopo il download, dovresti avere questi file ZIP:

- `eup-ui.7z`
- `eup-stream.7z` 
- `NativeUI-master.zip`

Ora decomprimi questi file localmente sul tuo computer. Dentro dovresti trovare un `__resource.lua` o `fxmanifest.lua` e i file/cartelle degli script.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
Per NativeUI, apri prima la cartella "NativeUI-master", lì troverai gli script corretti. Se non li vedi subito, potrebbero essere in una sottocartella con lo stesso nome.
:::

## Installazione
Ora sei pronto per partire con l’installazione. Collegati al tuo server via [FTP](gameserver-ftpaccess.md) e carica i file. I file/cartelle vanno caricati nella cartella `resources`. La trovi in questa struttura:

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## Configurazione

Per far sì che le risorse installate vengano caricate, devi inserirle nel file di configurazione del server. Accedi all’interfaccia txAdmin e vai nel CFG Editor.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## Conclusione

Hai installato con successo EUP sul tuo server FiveM. Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂


<InlineVoucher />