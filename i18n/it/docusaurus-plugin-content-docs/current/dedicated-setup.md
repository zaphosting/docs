---
id: dedicated-setup
title: "Dedicated Server: Configurazione iniziale"
description: "Scopri come configurare facilmente il tuo ZAP Dedicated Server e accedi a una vasta gamma di sistemi operativi → Scopri di più ora"
sidebar_label: Configurazione iniziale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Sei ancora nuovo in questo campo e temi di non riuscire a gestire la configurazione di un servizio del genere o di incontrare difficoltà durante il processo? Nessun problema! Questa guida e il nostro assistente di configurazione ti accompagneranno passo dopo passo nella configurazione iniziale del tuo ZAP Dedicated Server.

## Preparazione

### Attivazione di iLO
Per la configurazione iniziale, è necessario prima attivare l’interfaccia di amministrazione iLO. Questo processo potrebbe richiedere qualche istante. Per maggiori informazioni e per un utilizzo avanzato dell’interfaccia iLO, ti consigliamo di dare un’occhiata alla guida [iLO](dedicated-ilo.md).

![EN](https://screensaver01.zap-hosting.com/index.php/s/xmAFAt4CXTt7b7c/preview)

Non appena iLO è attivato, lo stato iLO dovrebbe mostrarsi come **Attivo**. La sessione iLO è sempre attivata per tre ore di default e dovrà essere riattivata se vuoi accedervi di nuovo. Ora puoi procedere con la selezione dell’ISO.

### Selezione dell’ISO

Il passo successivo è scegliere un ISO da montare per la configurazione iniziale. Per farlo, clicca sul menu a tendina, seleziona un file ISO e clicca sul pulsante **Inserisci**.

![EN](https://screensaver01.zap-hosting.com/index.php/s/SfMfrWHpjAGeMgo/preview)

Offriamo una vasta gamma di file ISO per i sistemi operativi più comuni come Debian, Ubuntu, FreeBSD, Windows, CentOS, ArchLinux e Proxmox di default. Nella tabella qui sotto trovi una panoramica di tutti i sistemi operativi disponibili e le loro versioni.

| ISO (Sistema operativo) | Versioni                                              |
| ----------------------- | ---------------------------------------------------- |
| Debian                  | 12, 11, 10.9, 9.13                                   |
| Ubuntu                  | 22.04.3, 22.04, 22.02, 18.04                         |
| FreeBSD                 | 13.0, 12.2, 11.4                                     |
| Windows                 | 2022 (EN/DE), 2019 (EN/DE), 2016 (EN/DE), 2012 (EN/DE) |
| CentOS                  | 7.9, 8.3                                             |
| ArchLinux               | 2023                                                 |
| Proxmox                 | 8.0-2, 7.4-1, 7.1-1, 7.0-1, 6.4-1, 6.3-1             |

È anche possibile aggiungere e montare il tuo ISO personalizzato. Per maggiori dettagli su come montare un ISO proprio, ti consigliamo di consultare la guida **[ISO personalizzato](dedicated-iso.md)**.

## Installazione

### Montare e avviare l’ISO

Una volta selezionato e inserito correttamente il file ISO, il sistema deve essere riavviato una volta affinché la modifica venga accettata e il boot venga eseguito tramite il file ISO. Per farlo, clicca semplicemente sul pulsante **Reboot**. Il riavvio potrebbe richiedere qualche istante.

![EN](https://screensaver01.zap-hosting.com/index.php/s/zPQagx6yD5nCM7L/preview)

### Usare iLO per installare il sistema operativo

Ora hai tutto il necessario per installare il sistema operativo che desideri. Il sistema ha montato l’ISO e avviato la configurazione di conseguenza. Apri quindi l’**interfaccia di amministrazione iLO** del tuo server e clicca direttamente su "Integrated Remote Console: **HTML 5**" per accedere allo schermo del tuo server. Maggiori informazioni sulla gestione della console nell’interfaccia iLO le trovi nella nostra guida [iLO](dedicated-ilo.md).

L’installazione del sistema operativo avviene ora nella console HTML. Offriamo anche guide per i sistemi operativi più comuni. Per maggiori dettagli sui passaggi successivi, dai un’occhiata alle guide dedicate:

- [Installare Windows](dedicated-windows.md)
- [Installare Debian](dedicated-linux-debian.md)
- [Installare Ubuntu](dedicated-linux-ubuntu.md)
- [Installare FreeBSD](dedicated-freebsd.md)
- [Installare CentOS](dedicated-centos.md)
- [Installare Proxmox](dedicated-proxmox.md)