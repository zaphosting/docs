---
id: over-the-top-wwi-configure-damage-settings
title: "Over the Top WWI: Configura le Impostazioni del Danno"
description: "Scopri come regolare il danno e il comportamento in combattimento sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Impostazioni del Danno
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le impostazioni del danno in **Over the Top WWI** determinano quanto sono letali i combattimenti e come si comportano le armi durante il gameplay. Regolando questi valori puoi creare un’esperienza più realistica o un ambiente più casual e permissivo.

Modificando i moltiplicatori di danno e le meccaniche di combattimento, puoi influenzare notevolmente la velocità con cui i giocatori vengono eliminati e come si svolgono gli scontri.

<InlineVoucher />

## Configurazione

Le impostazioni del danno si configurano all’interno del file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto la voce **Config**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
ShootingDamageMulti = 100
MeleeDamageMulti = 300
ShootingVelocityMulti = 100
DragEffector = 30
WindEffector = 15
RandomEffectorr = 10
```

- `ShootingDamageMulti` controlla il danno inflitto dalle armi a distanza

- `MeleeDamageMulti` definisce il danno degli attacchi corpo a corpo

- `ShootingVelocityMulti` influisce sulla velocità dei proiettili e può influenzare precisione e registrazione dei colpi

- `DragEffector` determina quanto velocemente i proiettili perdono velocità con la distanza

- `WindEffector` stabilisce quanto il vento influisce sulla traiettoria dei proiettili

- `RandomEffectorr` aggiunge casualità al comportamento dei proiettili, influenzando la precisione

Regolando questi valori puoi creare un comportamento balistico più realistico o semplificare le meccaniche di combattimento a seconda dello stile del tuo server.

Dopo aver modificato il file `ServerConfiguration.ini`, salva e riavvia il server. Le nuove impostazioni di danno e combattimento verranno applicate automaticamente.

## Conclusione

Congratulazioni! Hai configurato con successo le impostazioni del danno sul tuo **server Over the Top WWI**. Regolando questi parametri puoi perfezionare il comportamento in combattimento e creare un’esperienza di gioco su misura per la tua community.

Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />