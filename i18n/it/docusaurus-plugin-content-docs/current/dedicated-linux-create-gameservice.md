---
id: dedicated-linux-create-gameservice
title: "Dedicated Server: Configura il tuo Dedicated Game Server come servizio Linux"
description: "Scopri come configurare e gestire servizi per il tuo dedicated game server su Linux per un’automazione fluida e un controllo facile → Scopri di più ora"
sidebar_label: Configura servizio Linux
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I servizi sono una parte fondamentale di Linux e si riferiscono a un processo o applicazione che gira in background, sia come task predefinito che come task basato su eventi. Questo porta vari vantaggi come l’avvio automatico del server al boot, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro! In questa guida vedremo come creare un servizio per il tuo dedicated game server.

## Preparazione

Per cominciare, connettiti al tuo dedicated server via SSH. Se ti serve aiuto, usa la nostra guida [SSH Initial Access](vserver-linux-ssh.md).

Dovresti anche seguire una delle nostre guide dedicate ai game server in questa sezione per installare e configurare un game server sul tuo sistema Linux. In questa guida useremo come esempio il [Palworld dedicated game server](dedicated-linux-palworld.md), ma le istruzioni si possono adattare a tutte le nostre guide.

## Creazione del servizio

Inizia creando un nuovo file di servizio per il dedicated game server che hai configurato. Sostituisci `[your_game]` con il nome che preferisci. Ti consigliamo di usare il nome del gioco per tenere tutto organizzato, quindi useremo `palworld.service`.
```
sudo nano /etc/systemd/system/[your_game].service
```

## Configurazione del servizio

Con l’editor nano aperto, copia il contenuto base del file, che è un template di servizio riutilizzabile. Abbiamo due versioni: una per guide che usano SteamCMD e un’altra per giochi senza SteamCMD.

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

<TabItem value="regular" label="Gioco normale">

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

Ecco una spiegazione dei contenuti del file per capirlo meglio:
- `Description`: Può essere qualsiasi cosa, utile per distinguere facilmente lo scopo del servizio.
- `User`: Seguendo le nostre guide, dovresti aver creato un utente separato `steam` per SteamCMD, o `gameservers` per giochi senza SteamCMD. Se no, metti l’utente che deve far girare il servizio.
- `WorkingDirectory`: Il percorso alla cartella principale che contiene tutto ciò che serve al servizio.
- `ExecStartPre` (solo SteamCMD): Qui impostiamo il comando di installazione SteamCMD, che viene eseguito ogni volta che il server si riavvia per assicurarsi che sia aggiornato. Copialo dalla guida dedicata o sostituisci i valori manualmente.
- `ExecStart`: Il task predefinito che deve partire con il servizio. Anche qui, copia il percorso dalla guida o sostituisci i valori per puntare al file di avvio.
:::important Wine Compatibility Layer
Per giochi che richiedono il layer di compatibilità **Wine** per girare, devi includere i comandi **xvfb-run** e **wine** dentro il parametro `ExecStart`. Esempio per V-Rising:
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Assicurati anche che il comando `ExecStartPre` di SteamCMD includa il parametro `+@sSteamCmdForcePlatformType` se serve per forzare la versione della piattaforma.
:::

Dopo aver adattato tutti i valori al tuo dedicated game server, salva il file e esci da nano con `CTRL + X`, poi `Y` per confermare e infine `ENTER`.

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

## Gestione del servizio

Ora che il file di servizio è creato, devi abilitarlo. Con l’esempio `palworld.service`, `[your_service]` diventa semplicemente `palworld`.
```
sudo systemctl enable [your_service]
```

:::tip
Se modifichi il file di servizio, ricordati di eseguire `systemctl daemon-reload` per applicare le modifiche.
:::

Puoi ora avviare il server con `systemctl start`. Allo stesso modo, puoi fermare o riavviare il server con comandi simili.
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
Per vedere i dettagli del servizio usa `systemctl status`. Se ti servono i log per debug, usa `journalctl -u [your_service].service` per vedere gli ultimi log.
:::

Infine, se vuoi che il servizio non parta più all’avvio, disabilitalo.
```
sudo systemctl disable [your_service]
```

## Conclusione

Hai configurato con successo un servizio per il tuo dedicated game server. Ora il server partirà automaticamente al boot.

Hai anche imparato cosa contiene il file di servizio e come gestirlo con vari comandi.