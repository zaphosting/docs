---
id: unturned-workshop
title: "Unturned: Installa contenuti Workshop sul server"
description: "Scopri come potenziare il tuo server Unturned con contenuti personalizzati dallo Steam Workshop per un'esperienza di gioco unica → Scopri di più ora"
sidebar_label: Contenuti Workshop
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Lo Steam Workshop ti dà la possibilità di personalizzare ancora di più il tuo server. Qui sotto ti spieghiamo come aggiungere nuovi contenuti al tuo server usando lo Steam Workshop.

### Preparazione

Esistono varie fonti dove puoi scaricare mod, mappe, modelli, ecc. La più popolare è lo Steam Workshop. Qui puoi trovare tantissime risorse da installare sul tuo server. Prima di tutto devi trovare gli oggetti Workshop che ti interessano. Lo Steam Workshop per Unturned lo trovi qui:  [Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)

Una volta scelto, devi copiare l’ID dell’oggetto Workshop e poi aggiungerlo nell’interfaccia. A seconda che tu stia navigando lo Steam Workshop tramite browser o Steam Client, puoi copiare l’ID come mostrato qui sotto:

- **Steam Client**

  Fai clic destro sulla pagina dello Steam Workshop dell’oggetto e clicca su Copia URL pagina. Copia l’ID dall’URL.

  ![](https://screensaver01.zap-hosting.com/index.php/s/QD89esrFTQ8gZfb/preview)

  

- **Browser**

  Troverai una combinazione di numeri dopo **.../?id=** nella barra URL. Copiala.

  ![](https://screensaver01.zap-hosting.com/index.php/s/XzRRT98ess4dyFX/preview)





### Aggiungi contenuti

Una volta raccolti i contenuti desiderati, ora li aggiungiamo al server. I contenuti vanno specificati nel file di configurazione **WorkshopDownloadConfig.json**, che trovi nell’interfaccia sotto Config.

![](https://screensaver01.zap-hosting.com/index.php/s/T7gsio62gDH7DHb/preview)

Ora aggiungiamo gli ID dei singoli oggetti Steam Workshop in 'FileIDs'. Il risultato finale può essere così:

```json
{
  "File_IDs": [
  	1567256534,
    1234567890, // Esempio (Placeholder)
    0987654321  // Esempio (Placeholder)
  
  ],
  "Ignore_Children_File_IDs": [],
  "Query_Cache_Max_Age_Seconds": 600,
  "Max_Query_Retries": 2,
  "Use_Cached_Downloads": true,
  "Should_Monitor_Updates": true,
  "Shutdown_Update_Detected_Timer": 600,
  "Shutdown_Update_Detected_Message": "Aggiornamento file Workshop rilevato, spegnimento in: {0}",
  "Shutdown_Kick_Message": "Spegnimento per aggiornamento file Workshop."
}
```

Dopodiché devi avviare il server. I contenuti aggiunti verranno scaricati automaticamente durante l’avvio. Puoi vedere tutto nella Live Console. L’output dovrebbe essere così:

```
1 workshop item(s) to download...
Downloading workshop item 1567256534
Successfully downloaded workshop item: 1567256534
```

Il contenuto è stato scaricato, configurato e ora dovrebbe essere attivo.

<InlineVoucher />