---
id: barotrauma-becomeadmin
title: "Barotrauma: Diventa admin sul tuo server"
description: "Scopri come assegnare i permessi di amministratore per il pieno controllo del server e una gestione fluida in-game → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-barotrauma
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente nel gioco. Qui sotto trovi tutti i passaggi per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

## Configurazione
Aggiungere un admin si fa tramite il file di configurazione **Clientpermissions.xml**, che trovi nell’interfaccia sotto Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/oJNTozXz9YW8sjG/preview)


Devi aggiungere una nuova voce client nel file per aggiungere un nuovo giocatore. La sintassi è questa:

```xml
<Client
    name="<nome giocatore>"
    steamid="<steamid>"
    permissions="<permesso/i>">
    <command
      name="<nomecomando>" />
  </Client>
```



La voce client contiene le variabili **Name, SteamID, Permissions e Command**. Queste vanno modificate. Il nome puoi sceglierlo come vuoi, serve solo come riferimento. Poi devi inserire lo SteamID64 del tuo account Steam.

Lo trovi entrando nel tuo profilo Steam, cliccando col tasto destro in un punto qualsiasi del profilo. Da lì puoi copiare l’URL del profilo Steam.



![](https://screensaver01.zap-hosting.com/index.php/s/C3nfdjemxkjZH5n/preview)



Dopodiché incolla l’URL in uno di questi siti:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/asnbFc4JDifdSHn/preview)



Ti verranno mostrate le info generali dell’account e lo Steam ID. Serve il **Steam ID 64**. Questo va inserito nella voce client sotto **SteamID**. Il risultato sarà così: 

```xml
<Client
    name="Nome"
    steamid="123456789"
    permissions="<permesso/i>">
    <command
      name="<nomecomando>" />
  </Client>
```



A questo punto sei già admin, ma non hai ancora diritti specifici. Puoi aggiungerli inserendo i permessi e i comandi che vuoi abilitare. Per esempio così:

```xml
...
    permissions="<permesso/i>"> ---> permissions="ServerLog, ConsoleCommands">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Nome"
    steamid="123456789"
    permissions="ServerLog, ConsoleCommands">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```



In questo esempio l’admin ha accesso ai log del server, alla console, e ai comandi heal e spawn. Qui sotto trovi una panoramica dei permessi che puoi impostare.



## Permessi

| Permessi         | Descrizione                                                  |
| ---------------- | ------------------------------------------------------------ |
| ManageRound      | Può iniziare/terminare i round.                              |
| Kick             | Può cacciare altri giocatori.                                |
| Ban              | Può bannare altri giocatori.                                 |
| Unban            | Può rimuovere i ban da altri giocatori.                     |
| SelectSub        | Può scegliere il sottomarino.                                |
| SelectMode       | Può scegliere la modalità di gioco.                          |
| ManageCampaign   | Può selezionare destinazione, missione e comprare rifornimenti nel negozio della Campagna. |
| ConsoleCommands  | Può usare i comandi console - attenzione, devi anche dare i permessi per i singoli comandi console. |
| ServerLog        | Può leggere i log del server.                                |
| ManageSettings   | Può modificare le impostazioni del server.                   |
| ManagePermissions| Può modificare i permessi degli altri client.                |
| KarmaImmunity    | È immune agli effetti negativi del sistema karma, non perde karma. |
| All              | Concede tutti i permessi.                                    |



## Conclusione

Complimenti, hai configurato con successo i permessi di amministratore. Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />