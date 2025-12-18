---
id: dedicated-freebsd
title: "Server Dedicato: Installazione di FreeBSD"
description: "Scopri come installare e configurare FreeBSD sul tuo server dedicato per prestazioni e affidabilità ottimali → Scopri di più ora"
sidebar_label: Installa FreeBSD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Qui ti spieghiamo passo passo come installare e configurare il sistema operativo FreeBSD sul tuo server dedicato. Segui attentamente queste istruzioni per assicurarti di configurare correttamente il sistema operativo e sfruttarlo al massimo.

:::info

La guida si basa sull’uso di FreeBSD 13.0. Le installazioni con versioni precedenti o più recenti potrebbero differire leggermente nel processo.

:::



## Preparazione

Per installare e configurare un sistema operativo, è fondamentale montare l’ISO corrispondente. Ci sono diversi modi per farlo:

1. Montaggio tramite setup iniziale
2. Montaggio tramite iLO (Virtual Media)
3. Montaggio tramite iLO (Remote Console)

Se non hai mai montato un file ISO, ti consigliamo di dare un’occhiata alle nostre guide su [Setup iniziale](dedicated-setup.md) o [ISO personalizzata](dedicated-iso.md).



## Installazione
Quando l’ISO è caricata correttamente, il server entra nella fase di setup.

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

Iniziamo l’installazione premendo `Enter`![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

Scegli la mappatura tastiera che preferisci e continua.

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

Inserisci il nome host che desideri.

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

Puoi scegliere pacchetti di sistema opzionali da installare, poi procedi con OK.

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

Qui puoi creare le partizioni, in questo esempio usiamo un RAID0. Maggiori info sui RAID le trovi in [Configura RAID](dedicated-raid.md)

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

Se non vuoi fare modifiche, procedi con `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

Dato che usiamo RAID0, scegliamo nessuna ridondanza.

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

Seleziona il volume con `Space` e conferma con `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

Verifichiamo che tutti i dati verranno cancellati

:::info
Il server sta ora elaborando il setup, potrebbe richiedere qualche minuto
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

Inserisci la tua password e conferma con `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

Scegli "No" per la configurazione IPv4/IPv6, lo faremo alla fine.

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

Scegli "Sì" e seleziona il fuso orario e la data/ora.

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

Puoi modificare i servizi che si avviano automaticamente all’accensione del server.

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

Se serve, puoi modificare le impostazioni di sicurezza.

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

Setup completato, scegli "Exit" e conferma con `Enter`

:::info
Rimuovi il file ISO dal tuo iLO e scegli "Reboot"
:::



## Configurazione

### Rete

Per attivare la scheda di rete, accedi al sistema con la password

Apri loader.conf con un editor a scelta, ad esempio `ee /boot/loader.conf` e aggiungi questa riga:

```if_oce_load="YES"```

Esci dall’editor con `CTRL+C` e scrivendo exit, poi riavvia il server dedicato

***

Dopo il reboot, modifica rc.conf con `ee /etc/rc.conf`, aggiungi queste righe:

```
ifconfig_oce0="DHCP"
```

:::caution
Il nome della scheda di rete nell’esempio **oce0** potrebbe essere diverso. Assicurati di specificare quella corretta, puoi verificarlo con il comando ifconfig. Le info verranno prese automaticamente dal server DHCP.
:::

Dovrebbe apparire così:

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

Esci dall’editor con `CTRL+C` e scrivi "exit", poi esegui il comando `/etc/netstart` una volta

:::info
Ora il tuo server dovrebbe avere una connessione internet attiva
:::



## Conclusione

Congratulazioni, hai installato con successo FreeBSD sul tuo server dedicato. Per qualsiasi domanda o supporto, il nostro team è sempre disponibile per darti una mano! 🙂