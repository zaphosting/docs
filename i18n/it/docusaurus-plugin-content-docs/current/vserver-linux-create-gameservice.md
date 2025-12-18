---
id: vserver-linux-create-gameservice
title: "VPS: Configura il tuo Server di Gioco Dedicato come Servizio Linux"
description: "Scopri come creare e gestire servizi Linux per server di gioco dedicati, per avvii automatici e manutenzione facile → Scopri di più ora"
sidebar_label: Configura Servizio Linux
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I servizi sono una parte fondamentale di Linux e si riferiscono a un processo o applicazione che gira in background, sia come task predefinito che come task basato su eventi. Questo porta vari vantaggi come l’avvio automatico del server al boot, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro! In questa guida vedremo come creare un servizio per il tuo server di gioco dedicato.

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve una mano, usa la nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md).

Dovresti anche seguire una delle nostre guide dedicate ai server di gioco in questa sezione per installare e configurare il server sul tuo sistema Linux. In questa guida useremo come esempio il [server dedicato Palworld](vserver-linux-palworld.md), ma le istruzioni si possono adattare a tutte le nostre guide.

## Creazione del Servizio

Inizia creando un nuovo file di servizio per il server di gioco dedicato che hai configurato. Sostituisci `[your_game]` con il nome che preferisci. Ti consigliamo di usare il nome del gioco per tenere tutto ordinato, quindi useremo `palworld.service`.
```
sudo nano /etc/systemd/system/[your_game].service
```

## Configurazione del Servizio

Con l’editor nano aperto, copia il contenuto base del file che funge da template per il servizio. Abbiamo due versioni: una per guide che usano SteamCMD e una per giochi senza SteamCMD.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="steamcmd" label="Gioco SteamCMD" default>

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[your_server_folder]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[your_server_folder]' +login anonymous +app_update [your_game_steamid] +quit
ExecStart=/home/steam/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>

<TabItem value="regular" label="Gioco Normale">

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=gameservers
Group=gameservers
WorkingDirectory=/home/gameservers/[your_server_folder]
ExecStart=/home/gameservers/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>

Ecco una spiegazione rapida del contenuto del file:
- `Description`: Puoi scrivere qualsiasi cosa, serve a identificare facilmente lo scopo del servizio.
- `User`: Seguendo le nostre guide, dovresti aver creato un utente separato `steam` per SteamCMD, o `gameservers` per giochi senza SteamCMD. Altrimenti, metti l’utente che deve eseguire il servizio.
- `WorkingDirectory`: Il percorso alla cartella principale che contiene tutto ciò che serve al servizio.
- `ExecStartPre` (solo SteamCMD): Qui impostiamo il comando di installazione SteamCMD che viene eseguito ad ogni riavvio del server per mantenerlo aggiornato. Copialo dalla guida dedicata o sostituisci i valori con quelli del tuo gioco.
- `ExecStart`: Il comando che avvia il server. Copialo dalla guida o sostituisci i valori per puntare al file di avvio.

:::important Wine Compatibility Layer
Per giochi che richiedono il layer di compatibilità **Wine** per funzionare, devi includere i comandi **xvfb-run** e **wine** nel parametro `ExecStart`. Esempio per V-Rising:
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Assicurati anche che il comando `ExecStartPre` di SteamCMD includa il parametro `+@sSteamCmdForcePlatformType` se serve per forzare la versione della piattaforma.
:::

Dopo aver adattato tutti i valori al tuo server di gioco dedicato, salva il file e chiudi nano con `CTRL + X`, poi `Y` per confermare e infine `ENTER`.

Con l’esempio Palworld, il file sarà così:
```
[Unit]
Description=Palworld Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/Palworld-Server
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 +quit
ExecStart=/home/steam/Palworld-Server/PalServer.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## Gestione del Servizio

Ora che il file di servizio è pronto, devi abilitarlo. Nell’esempio `palworld.service`, `[your_service]` diventa semplicemente `palworld`.
```
sudo systemctl enable [your_service]
```

:::tip
Se modifichi il file di servizio, ricordati di eseguire `systemctl daemon-reload` per applicare le modifiche.
:::

Puoi avviare il server con il comando `systemctl start`. Allo stesso modo, puoi fermarlo o riavviarlo con comandi simili.
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
Per vedere lo stato del servizio usa `systemctl status`. Per i log utili al debug, usa `journalctl -u [your_service].service` per visualizzare gli ultimi log.
:::

Se vuoi disabilitare l’avvio automatico del servizio, basta disabilitarlo.
```
sudo systemctl disable [your_service]
```

## Conclusione

Hai configurato con successo un servizio per il tuo server di gioco dedicato. Ora il server si avvierà automaticamente al boot del VPS.

Hai anche imparato cosa contiene il file di servizio e come gestirlo con vari comandi.

<InlineVoucher />