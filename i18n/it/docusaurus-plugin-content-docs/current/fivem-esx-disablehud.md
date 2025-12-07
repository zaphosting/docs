---
id: fivem-esx-disablehud
title: "FiveM: Disattiva/attiva HUD"
description: "Scopri come aggiornare la configurazione del tuo server ESX per una gestione HUD migliorata e prestazioni ottimali del server → Scopri di più ora"
sidebar_label: Disattiva HUD
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guida Archiviata
Questo documento è stato archiviato. I documenti vengono archiviati se non sono più rilevanti, sono errati o non aggiornati. È stato archiviato per i seguenti motivi:

**Motivo**: Il metodo descritto si riferisce a una versione ESX obsoleta. Questo approccio non può essere utilizzato con la versione ESX attuale, poiché la struttura è cambiata. 
::::



<InlineVoucher />

## 📑 Trova e modifica il Config

Una volta fatto questo, apriamo la pagina Config e cerchiamo es_extended.  
Premi semplicemente CTRL + F e cerca es_extended.  
Così lo trovi subito.  
Lavoreremo su questi.

![](https://screensaver01.zap-hosting.com/index.php/s/FfjdwPMGYgz2k3k/preview)

Ora diamo un’occhiata a: Config.EnableHUD.

![](https://screensaver01.zap-hosting.com/index.php/s/F6w582EoXgbPjeC/preview)

Impostiamo questo su false e salviamo il file.

Poi andiamo su Server.cfg.  
Lo trovi anche nella pagina Config.  
Qui cerchiamo di nuovo con STR + F es_  
Cerchiamo es_ui e cancelliamo completamente questa riga.  
Ora salviamo di nuovo.

Quando hai fatto tutto, ti basta riavviare il server ed è fatta.

<InlineVoucher />