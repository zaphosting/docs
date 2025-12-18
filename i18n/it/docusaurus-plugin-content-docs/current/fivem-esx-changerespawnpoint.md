---
id: fivem-esx-changerespawnpoint
title: "FiveM: Imposta punto di respawn"
description: "Scopri come aggiornare i punti di respawn dell'ambulanza in ESX per personalizzare il gameplay e migliorare la gestione del server → Scopri di più ora"
sidebar_label: Cambia Punto di Respawn
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guida Archiviata
Questo documento è stato archiviato. I documenti vengono archiviati se non sono più rilevanti, sono errati o non aggiornati. È stato archiviato per i seguenti motivi:

**Motivo**: Il metodo di realizzazione è per una versione ESX obsoleta. Questo approccio non può essere utilizzato per la versione ESX attuale, poiché la struttura è cambiata.
::::



:::info
ESX deve essere installato
:::

<InlineVoucher />

📔 Preparativi

Per trovare le coordinate ci serve uno script Coords come questo:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
Installalo così: [Installa risorse](fivem-installresources.md)
Dopo aver installato lo script, premi in game */coords*
Così otterremo le coordinate.

📑 Modifica Config

Una volta ottenute le coordinate, andiamo nella scheda Config

Qui premiamo **CTRL + F** e cerchiamo **ambulance**
Apriamo il file che si apre.
Scorriamo fino a trovare **Config_RespawnPoint**.

![](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

Ora modifichiamo questi valori sostituendo le coordinate.
Dopodiché clicchiamo su Salva ed è fatta.

![](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
Dopo un riavvio del server, le modifiche saranno attive.
:::

<InlineVoucher />