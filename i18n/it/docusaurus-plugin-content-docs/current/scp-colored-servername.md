---
id: scp-colored-servername
title: "SCP Secret Laboratory: Nome Server Colorato"
description: "Scopri come personalizzare il nome del tuo server con testo colorato per una migliore visibilità e stile → Scopri di più ora"
sidebar_label: Nome Server Colorato
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Per mostrare il tuo server nella lista pubblica è necessario impostare un ID Pastebin. Puoi trovare la nostra guida [Pastebin ID](scp-pastebin.md).

Il server deve essere spento affinché le modifiche abbiano effetto.
:::

<InlineVoucher />

Apri le impostazioni del tuo server e verifica che 'SCP Servername' sia vuoto.

![](https://screensaver01.zap-hosting.com/index.php/s/Y9BXkJnBGXy3jWP/preview)

Quando sei sicuro che non ci sia nulla inserito, vai alla scheda 'Configs', che si trova un menu sotto le impostazioni.

Ora apri il file config_gameplay.txt cliccando sul pulsante blu.

![](https://screensaver01.zap-hosting.com/index.php/s/FAm8KQfAonpTWp2/preview)

Il nostro Config-Editor è ora aperto, puoi modificare il nome del tuo server con "server_name" usando il [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) per applicare diversi colori.

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

In questo esempio, voglio che "Green Text", "Blue Text" e "Red Text" vengano mostrati nel colore corrispondente.

Per farlo, devi usare il tag `<color="COLOR">Il Tuo Testo</color>`. Puoi vedere tutti i colori disponibili [qui](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html). È anche possibile modificare altri attributi, come la dimensione.
:::info
È importante ricordare che le virgolette " " sono obbligatorie attorno al colore all’interno del tag, come nell’esempio sopra.
:::

Quando hai finito con la personalizzazione, salva le modifiche.

:::info
Avvia il tuo server, ora il nome del server sarà colorato.
:::

<InlineVoucher />