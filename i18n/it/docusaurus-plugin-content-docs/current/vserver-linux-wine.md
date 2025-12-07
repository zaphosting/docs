---
id: vserver-linux-wine
title: "VPS: Configurazione Wine Compatibility Layer su Linux"
description: "Scopri come configurare Wine su Linux per far girare software Windows e game server senza intoppi sul tuo sistema → Scopri di più ora"
sidebar_label: Configura Wine Compatibility Layer
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Wine è una compatibility layer open-source per Linux che permette di eseguire software originariamente sviluppato per Windows su sistemi Linux. Questo è particolarmente importante per i game server dedicati che offrono solo file server Windows e può essere un prerequisito per le nostre altre guide dedicate ai game server Linux. In questa guida vedremo come fare il setup iniziale per installare Wine sul tuo server Linux. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve aiuto, dai un’occhiata alla nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md).

## Installazione di Wine

Inizia assicurandoti che la cartella `/etc/apt/keyrings/` esista, perché è necessaria per Wine.
```
sudo mkdir -pm755 /etc/apt/keyrings
```

Poi scarica e salva la chiave GPG di Wine in questa cartella, così il sistema potrà verificare che il pacchetto sia autentico.
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

Devi anche salvare la lista delle sorgenti per WineHQ, cosa che puoi fare con questo comando già pronto:
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

Infine, installa qualche pacchetto extra per assicurarti che Wine funzioni al meglio con i game server dedicati, eseguendo questo comando:
```
sudo apt install cabextract winbind screen xvfb
```

## Conclusione

Hai appena configurato con successo la compatibility layer Wine, che ti permetterà di far girare programmi Windows sul tuo server Linux. Con questo prerequisito fondamentale installato, puoi ora procedere con l’installazione di game server dedicati anche se sono pensati per Windows.

Ti consigliamo di dare un’occhiata alle altre guide di questa sezione, che spiegano come installare giochi specifici usando SteamCMD e, se serve, Wine per i file server dedicati Windows.

<InlineVoucher />