---
id: dedicated-linux-wine
title: "Dedicated Server: Configurazione Wine Compatibility Layer su Linux"
description: "Scopri come configurare Wine su Linux per far girare senza problemi server di gioco Windows su Ubuntu e sistemi simili → Scopri di più ora"
sidebar_label: Configura Wine Compatibility Layer
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Wine è un livello di compatibilità open-source per Linux che permette di eseguire software originariamente sviluppato per Windows su sistemi Linux. Questo è particolarmente importante per i server di gioco dedicati che offrono solo file server Windows e può essere un prerequisito per le nostre altre guide dedicate ai server Linux. In questa guida vedremo come configurare Wine per la prima volta sul tuo server Linux. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

## Preparazione

Per iniziare, connettiti al tuo Dedicated Server via SSH. Se ti serve aiuto, dai un’occhiata alla nostra guida [SSH Initial Access](vserver-linux-ssh.md).

## Installazione di Wine

Inizia assicurandoti che la cartella `/etc/apt/keyrings/` esista, perché è necessaria per Wine.
```
sudo mkdir -pm755 /etc/apt/keyrings
```

Poi scarica e salva la chiave GPG di Wine in questa cartella, così il sistema potrà verificare che il pacchetto sia autentico.
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

Devi anche salvare la lista delle sorgenti di WineHQ, cosa che puoi fare con questo comando già pronto:
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

Aggiorna la lista dei pacchetti per far leggere e installare le modifiche.
```
sudo apt update
```

Ora puoi procedere con il passaggio principale: scaricare l’ultima versione di Wine. Potrebbe volerci un po’ di tempo.
```
sudo apt install --install-recommends winehq-staging
```

Infine, installa qualche pacchetto extra per assicurarti che Wine funzioni al meglio con i server di gioco dedicati:
```
sudo apt install cabextract winbind screen xvfb
```

## Conclusione

Hai configurato con successo il layer di compatibilità Wine, che ti permetterà di far girare programmi Windows sul tuo server Linux. Con questo prerequisito fondamentale installato, puoi procedere a installare server di gioco dedicati anche se sono pensati per Windows.

Ti consigliamo di dare un’occhiata alle altre guide di questa sezione, che spiegano come installare giochi specifici usando SteamCMD e, se serve, Wine per i file server dedicati Windows.