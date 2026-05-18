---
id: vserver-linux-plesk
title: "Configura Plesk su un Server Linux - Gestisci i tuoi siti con un potente pannello di controllo"
description: "Scopri come gestire siti web e server in modo efficiente con Plesk, per principianti ed esperti → Scopri di più ora"
sidebar_label: Installa Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Plesk è una piattaforma completa per hosting web e gestione server che permette di gestire siti web, server, account email e molto altro tramite un’interfaccia super intuitiva. È una soluzione versatile, perfetta sia per chi è alle prime armi sia per sviluppatori web e sysadmin esperti.

<InlineVoucher />

## Installa Plesk

:::info
Prima di installare, esegui `apt update` e `apt upgrade` per avere i pacchetti più aggiornati sul server.
:::
Plesk può essere installato solo su Debian 9 (Stretch), Debian 10 (Buster), Ubuntu 18.04 (Bionic Beaver), Ubuntu 20.04 (Focal Fossa), CentOS 7/8, Red Hat Enterprise Linux 7.x/8.x, CloudLinux 7.1+/8, AlmaLinux OS, Rocky Linux 8.x e Virtuozzo Linux 7. L’architettura deve essere a 64 bit.

La connessione al server può essere fatta ad esempio tramite Putty.

## Avvio dell’installazione

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="Installazione One-Click" default>

Per installare Plesk in modo completamente automatico con i componenti standard usati dalla maggior parte degli utenti Plesk, basta un solo comando:

>Il programma di installazione Plesk installa sempre la versione più recente. Può capitare che le immagini/screenshot qui mostrati non rappresentino l’ultima versione disponibile.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
Se compare l’errore: "-bash: curl: command not found" devi installare il pacchetto con `apt install curl`.
:::

Dopo aver eseguito il comando, l’installazione completa di Plesk richiede solitamente tra i 15 e i 60 minuti.

:::info
Non chiudere la sessione SSH mentre l’installer è attivo, altrimenti l’installazione si interrompe.
:::
In caso contrario, dovrai reinstallare il server per poter riavviare l’installer. Se provi a riavviare l’installer senza reinstallare il server, potresti incorrere in problemi con funzionalità non funzionanti durante l’installazione o nel pannello Plesk.

:::info
Può sembrare che l’installer sia “bloccato”, ma nel 99% dei casi continua a girare dopo qualche minuto perché sta ancora configurando pacchetti e impostazioni.
:::

L’installazione è completa quando appare questa schermata:

![](https://screensaver01.zap-hosting.com/index.php/s/9o6bEzBr8rCAWzf/preview)

</TabItem>
<TabItem value="Web Installation" label="Installazione Web">

Per installare Plesk via Web servono solo pochi comandi.

:::info
Il programma di installazione Plesk installa sempre la versione più recente. Può capitare che le immagini/screenshot qui mostrati non rappresentino l’ultima versione disponibile.
:::

Scarica l’installer Plesk:
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

Per installare Plesk da console servono solo pochi comandi.

:::info
Il programma di installazione Plesk installa sempre la versione più recente. Può capitare che le immagini/screenshot qui mostrati non rappresentino l’ultima versione disponibile.
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

Dopo aver eseguito questi tre comandi, devi approvare la licenza premendo "F":

![](https://screensaver01.zap-hosting.com/index.php/s/XrCa3WYALoDx6H3/preview)

Dopo l’approvazione, il sistema chiederà quale versione di Plesk installare, ad esempio Plesk Obsidian o Plesk Onyx, indicando anche quale sia la più stabile. Di solito si sceglie la versione “stable” per ambienti di produzione. Le opzioni selezionate puntano già alla versione stabile, quindi conferma con "F".

Ti verrà chiesto se Plesk può raccogliere dati per migliorare il prodotto: rispondi con "Y" (sì) o "n" (no).

Successivamente, il sistema chiederà quale tipo di installazione della versione scelta vuoi fare. Di solito la modalità “Recommended” è già impostata e sufficiente. Moduli non installati ora ma necessari possono essere aggiunti in seguito dal pannello Plesk.

La domanda successiva se installare/aggiornare pacchetti va confermata con "F".

Ora l’installer avvierà l’installazione.

:::info
Non chiudere la sessione SSH mentre l’installer è attivo, altrimenti l’installazione si interrompe e dovrai reinstallare il server per ripartire.
:::
Può sembrare che l’installer sia “bloccato”, ma nel 99% dei casi continua a girare dopo qualche minuto perché sta ancora configurando pacchetti e impostazioni.

L’installazione è completa quando appare questa schermata:

![](https://screensaver01.zap-hosting.com/index.php/s/8K5p6RHapwYDfZY/preview)

</TabItem>
</Tabs>

## Apri il Web Installer

Dopo aver avviato l’installer, l’installazione prosegue nel browser. Puoi raggiungere la pagina di installazione tramite https://IP:8447 oppure https://Domain.xx:8447.

## Il Pannello Web di Plesk

:::info
Quando accedi al Web Panel, potrebbe comparire il messaggio: "This is not a secure connection". Conferma questa avvertenza la prima volta per aprire la pagina.
:::

L’interfaccia web è raggiungibile via https://IP:8443 o https://Domain.xx:8443 del server. Le credenziali di login sono root/admin e la password root attuale. In alternativa puoi usare uno degli URL mostrati. Se non sono più validi, puoi crearne di nuovi con il comando ``plesk login``.

### Configurazione

Dopo il login, devi configurare l’account Admin inserendo nome, email e password. Se hai già una licenza Plesk, puoi inserirla subito. Altrimenti puoi richiedere una licenza trial di 15 giorni. Infine conferma il contratto utente.  
Ora puoi usare Plesk.

### Imposta la lingua

Dopo l’installazione, il pannello Plesk è in inglese. Puoi impostare il tedesco o altre lingue in Tools&Settings ➡️ Plesk Appearance ➡️ Languages. Qui seleziona "de-DE". Poi clicca su "Make default" per impostare la lingua come predefinita per tutti.  
Dopo logout e login, il pannello sarà in tedesco.

![](https://screensaver01.zap-hosting.com/index.php/s/6Wo8Qz3oMXGzn3t/preview)

### Aggiungi dominio

Per aggiungere il primo dominio clicca sul pulsante blu "Add domain".

![](https://screensaver01.zap-hosting.com/index.php/s/2S4mgRPctffS452/preview)

Ora inserisci il tuo dominio. Devi anche definire IP, username e password per lo spazio web del dominio. Se il sottodominio "www" è già configurato nel DNS del dominio, puoi creare subito un certificato SSL gratuito con Let’s Encrypt. Questa opzione si seleziona inserendo una mail e confermando con il pulsante blu "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/SLSBz5TRH2mDBB8/preview)

:::info
Il dominio deve puntare all’IP dello spazio web. Se il dominio è ZAP-Hosting, puoi reindirizzarlo facilmente tramite EasyDNS. Se è esterno, devi impostare un record A verso l’IP e i sottodomini "www" e "webmail" devono puntare allo stesso IP. Anche un record MX dovrebbe puntare all’IP dello spazio web.

La propagazione DNS può richiedere fino a 24 ore.
:::

## Crittografia SSL

Durante la registrazione del dominio/spazio web, è stato già generato un certificato SSL Let’s Encrypt, che puoi selezionare sotto "Hosting settings" del dominio. Conferma cliccando su "Apply".

:::info
Per forzare il redirect permanente a HTTPS (SSL) quando si visita il sito, spunta la casella "Permanent, SEO-suitable 301 forwarding from HTTP to HTTPS".
:::

![](https://screensaver01.zap-hosting.com/index.php/s/HL4tcnTqJtX7be9/preview)

Se ora apri il dominio nel browser, vedrai che è protetto.

![](https://screensaver01.zap-hosting.com/index.php/s/xcqwAQWK77X3yip/preview)

:::info
Installazione e configurazione del primo dominio con crittografia SSL completate al 100%.
:::

## Conclusione

Congratulazioni, hai installato e configurato Plesk con successo! Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />