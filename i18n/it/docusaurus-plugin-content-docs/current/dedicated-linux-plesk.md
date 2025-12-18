---
id: dedicated-linux-plesk
title: "Dedicated Server: Installazione di Plesk"
description: "Scopri come gestire siti web e server in modo efficiente con la piattaforma versatile di Plesk per tutti i livelli di esperienza → Scopri di più ora"
sidebar_label: Installa Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Plesk è una piattaforma completa per hosting web e gestione server che permette agli utenti di gestire siti web, server, account email e molto altro tramite un’interfaccia user-friendly. È una soluzione versatile, adatta sia ai principianti che agli sviluppatori web e amministratori di sistema più esperti.

## Installare Plesk

:::info
Prima di installare, esegui `apt update` e `apt upgrade` per assicurarti che sul server siano installati i pacchetti più recenti.
:::
Plesk può essere installato solo su Debian 9 (Stretch), Debian 10 (Buster), Ubuntu 18.04 (Bionic Beaver), Ubuntu 20.04 (Focal Fossa), CentOS 7/8, Red Hat Enterprise Linux 7.x/8.x, CloudLinux 7.1+/8, AlmaLinux OS, Rocky Linux 8.x e Virtuozzo Linux 7. L’architettura deve essere a 64 bit.

La connessione al server può essere fatta, per esempio, tramite Putty.

## Avvio dell’installazione

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="Installazione One-Click" default>

Per installare Plesk in modo completamente automatico con i componenti standard usati dalla maggior parte degli utenti Plesk, basta un solo comando:

> L’installer di Plesk installa sempre la versione più recente di Plesk. Può capitare che le immagini/screenshot mostrati qui non riflettano l’ultima versione disponibile.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
Se compare l’errore: "-bash: curl: command not found" devi installare il pacchetto con `apt install curl`.
:::

Dopo aver eseguito questo comando, l’installazione completa di Plesk richiede solitamente tra i 15 e i 60 minuti.

:::info
La sessione SSH non deve essere chiusa mentre l’installer è attivo, altrimenti l’installazione si interrompe.
:::
In caso contrario, il server dovrebbe essere reinstallato per poter riavviare l’installer. Se l’installer viene riavviato senza reinstallare il server, potrebbero verificarsi problemi con funzionalità non funzionanti durante l’installazione o nel pannello Plesk.

:::info
Può sembrare che l’installer sia “bloccato”, ma nel 99% dei casi continua a girare dopo qualche minuto perché sta ancora configurando pacchetti e impostazioni.
:::

L’installazione è completa quando appare questa schermata

![](https://screensaver01.zap-hosting.com/index.php/s/gpNWyd7xZaw22zW/preview)

</TabItem>
<TabItem value="Web Installation" label="Installazione Web">

Per installare Plesk via Web servono solo pochi comandi.

:::info
L’installer di Plesk installa sempre la versione più recente di Plesk. Può capitare che le immagini/screenshot mostrati qui non riflettano l’ultima versione disponibile.
:::

Scarica l’installer di Plesk:
```
wget https://autoinstall.plesk.com/plesk-installer
```

Imposta i permessi corretti:

```
chmod +x plesk-installer
```

Avvia l’installer:

```
./plesk-installer --web-interface
```

</TabItem>
<TabItem value="Konsolen Installation" label="Installazione da Console">

Per installare Plesk via console servono solo pochi comandi.

:::info
L’installer di Plesk installa sempre la versione più recente di Plesk. Può capitare che le immagini/screenshot mostrati qui non riflettano l’ultima versione disponibile.
:::

Scarica l’installer:

```
wget https://autoinstall.plesk.com/plesk-installer
```

Imposta i permessi corretti:

```
chmod +x plesk-installer
```

Avvia l’installer:

```
./plesk-installer
```

Dopo aver eseguito questi tre comandi, la licenza deve essere approvata premendo "F":

![](https://screensaver01.zap-hosting.com/index.php/s/dJiJ3sTxCqoC3RR/preview)

Dopo l’approvazione, il sistema chiederà quale versione di Plesk installare, ad esempio Plesk Obsidian o Plesk Onyx, indicando anche quale sia la più stabile. Di solito si sceglie la versione “stable” per ambienti produttivi. Le opzioni predefinite puntano già alla versione stabile, quindi conferma con "F".

La domanda se Plesk può raccogliere dati per migliorare il prodotto può essere risposta con "Y" (Sì) o "n" (No).

Successivamente il sistema chiederà quale tipo di installazione della versione scelta vuoi effettuare. Di solito la tipologia “Recommended” già selezionata è sufficiente. Moduli eventualmente non installati ora ma necessari possono essere aggiunti successivamente dal pannello Plesk.

La domanda se possono essere installati/aggiornati pacchetti va confermata con "F".

Ora l’installer avvia l’installazione.

:::info
La sessione SSH non deve essere chiusa mentre l’installer è attivo, altrimenti l’installazione si interrompe e il server deve essere reinstallato per poter ripartire.
:::
Può sembrare che l’installer sia “bloccato”, ma nel 99% dei casi continua a girare dopo qualche minuto perché sta ancora configurando pacchetti e impostazioni.

L’installazione è completa quando appare questa schermata:

![](https://screensaver01.zap-hosting.com/index.php/s/2Wk2Nm2HXCkQjkQ/preview)

</TabItem>
</Tabs>

## Apri il Web Installer

Dopo aver avviato l’installer, l’installazione prosegue nel browser. La pagina di installazione è raggiungibile via https://IP:8447 oppure https://Domain.xx:8447.

## Il Pannello Web di Plesk

:::info
Alla prima apertura del Web Panel potrebbe comparire il messaggio: "This is not a secure connection". Conferma per procedere e la pagina si aprirà.
:::

L’interfaccia web è raggiungibile via https://IP:8443 oppure https://Domain.xx:8443 del server. Le credenziali di login sono root/admin e la password root attuale. In alternativa puoi usare uno degli URL mostrati. Se non sono più validi, puoi crearne di nuovi con il comando ``plesk login``.

### Configurazione

Dopo il login, devi configurare l’account Admin. Inserisci un nome di contatto, un’email e una password. Se hai già una licenza Plesk, puoi inserirla subito. In alternativa puoi richiedere una licenza trial di 15 giorni da Plesk. Infine conferma il contratto utente.

Ora Plesk è pronto all’uso.

### Imposta la lingua

Dopo l’installazione, il pannello Plesk è in inglese. Puoi impostare o selezionare il tedesco sotto Tools&Settings ➡️ Plesk Appearance ➡️ Languages. Qui seleziona "de-DE". Poi clicca su "Make default" per impostare la lingua come predefinita per tutti.

Dopo un logout e login, il pannello Plesk sarà in tedesco.

![](https://screensaver01.zap-hosting.com/index.php/s/GtTGYGCYXwewxNQ/preview)

### Aggiungi dominio

Per aggiungere il primo dominio clicca sul pulsante blu "Add domain".

[](https://screensaver01.zap-hosting.com/index.php/s/G3fetgKfLNKFr7N/preview)

Ora inserisci il tuo dominio. Devi anche definire un IP, un nome utente e una password per lo spazio web del dominio. Se il sottodominio "www" è già presente nel DNS del dominio, puoi creare direttamente un certificato SSL da Let’s Encrypt. Questa opzione si seleziona dopo aver inserito un indirizzo email e confermato con il pulsante blu "OK".

[](https://screensaver01.zap-hosting.com/index.php/s/Pw2PSFDKGFDXZi2/preview)

:::info
Il dominio deve puntare all’IP dello spazio web. Se il dominio è ZAP-Hosting, puoi facilmente reindirizzarlo allo spazio web tramite EasyDNS. Se è esterno, devi impostare un record A verso l’IP e i sottodomini "www" e "webmail" devono puntare allo stesso IP. Anche un record MX dovrebbe puntare all’IP dello spazio web.

La propagazione di un nuovo o modificato record DNS può richiedere fino a 24 ore.
:::

## Crittografia SSL

Durante la registrazione del dominio/creazione dello spazio web, è stato già generato un certificato SSL da Let’s Encrypt, che ora puoi selezionare sotto "Hosting settings" del dominio. Poi conferma cliccando su "Apply".

:::info
Per forzare il redirect permanente a HTTPS (SSL) quando si visita il sito, spunta la casella "Permanent, SEO-suitable 301 forwarding from HTTP to HTTPS".
:::

[](https://screensaver01.zap-hosting.com/index.php/s/xad7pbeZWY6QQHK/preview)

Se ora apri il dominio nel browser, vedrai che è protetto da crittografia.

![](https://screensaver01.zap-hosting.com/index.php/s/JrNEjciJfz2LzCX/preview)

:::info
L’installazione e la configurazione del primo dominio con crittografia sono ora completamente terminate.
:::
