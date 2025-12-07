---
id: ark-rcon
title: "ARK: Survival Evolved: RCON"
description: "Scopri come gestire e controllare in remoto i server di ARK: Survival Evolved in modo sicuro senza entrare nel gioco → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i gameserver. Permette di accedere alla console del server senza interagire direttamente con l’ambiente di gioco. Così puoi eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In ARK: Survival Evolved, RCON serve per eseguire comandi lato server, come gestire i giocatori, cambiare le impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Il vantaggio principale di RCON è che ti permette di gestire il server **senza dover essere connesso al gioco come player**. Gli admin possono monitorare e controllare ARK: Survival Evolved da tool esterni, interfacce a riga di comando o dashboard web, offrendo massima flessibilità e comodità per la gestione remota.

<InlineVoucher />

## Configurazione

Prima di usare RCON, devi abilitarlo e configurarlo. Lo fai modificando il file di configurazione che trovi sotto **Configs** nel pannello di gestione del gameserver. Nel file chiamato `GameUserSettings.ini`, devi aggiungere o modificare queste righe:

```cfg
[ServerSettings]
RCONEnabled=True
ServerAdminPassword=define-your-password
```
La porta RCON assegnata la trovi in fondo alla pagina delle impostazioni, nella panoramica delle porte, e va specificata lì.



## Connessione via RCON

Per connetterti al server ARK: Survival Evolved via RCON, si usa lo strumento **ARKon**. Lo puoi scaricare da questo [thread Steam]([Steam thread](https://steamcommunity.com/app/346110/discussions/2/3417684283223117680/)). Dopo averlo installato sul tuo PC, crea una nuova voce server con queste info:

- Indirizzo IP del server  
- Porta RCON
- Password RCON 

Salvato il profilo di connessione, seleziona il server dalla lista e connettiti. Una volta connesso, puoi eseguire comandi RCON tramite l’interfaccia grafica. ARKon offre anche funzioni extra pensate per ARK: Survival Evolved, come:

- Lista giocatori in tempo reale e stato online  
- Monitoraggio e interazione con la chat in-game  
- Pulsanti rapidi per comandi admin comuni  
- Log dell’output RCON e cronologia comandi



## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server ARK: Survival Evolved. I comandi disponibili dipendono dal motore di gioco, ma di solito includono azioni per la gestione dei giocatori, interrogazioni di stato e controllo del server.

| Comando                            | Descrizione                                           |
|-----------------------------------|--------------------------------------------------------|
| `EnableCheats <password>`         | Attiva la modalità admin sul server (comandi admin)     |
| `AdminCheat KickPlayer <Steam64ID>` | Espelle un giocatore                                  |
| `AdminCheat BanPlayer <Steam64ID>`  | Bannare un giocatore                                  |
| `AdminCheat UnbanPlayer <playerName>` | Sblocca un giocatore                                |
| `AdminCheat Broadcast <message>`   | Invia un messaggio broadcast a tutti i giocatori       |
| `AdminCheat SaveWorld`            | Salva lo stato attuale del mondo                        |
| `AdminCheat SetTimeOfDay <hh:mm>` | Imposta l’orario di gioco                               |
| `AdminCheat TeleportPlayerIDToMe <playerID>` | Teletrasporta un giocatore da te                  |
| `cheat Slomo <factor>`            | Modifica la velocità di gioco                           |
| `AdminCheat GiveItemNum <ItemID> <quantity> <quality> 0` | Genera oggetti nell’inventario           |




## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server di ARK: Survival Evolved. Permette un accesso rapido e diretto alle funzioni admin, garantendo il controllo tramite password. Una configurazione corretta e sicura è essenziale per mantenere stabile il server e proteggerlo da accessi non autorizzati.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, sempre pronto ad aiutarti ogni giorno! 🙂

<InlineVoucher />