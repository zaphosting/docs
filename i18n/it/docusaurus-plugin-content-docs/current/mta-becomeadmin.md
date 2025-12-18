---
id: mta-becomeadmin
title: "Multi Theft Auto: Diventa admin sui server MTA"
description: "Scopri come assegnare i permessi di amministratore per il pieno controllo del server e una gestione efficiente del gioco → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente nel gioco. Qui sotto trovi tutti i passaggi necessari per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

### Preparazione

Prima di tutto devi creare un account utente a cui poi verranno dati i diritti admin. Per farlo, esegui questo comando nella Live Console:

```
addaccount [options] <PASSWORD>
```

La Live Console la trovi nel pannello del server di gioco, nell’interfaccia mentre il server è attivo. Ecco come si presenta:

![](https://screensaver01.zap-hosting.com/index.php/s/KHcBA5p5ZC4pJ4R/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/tKLHyoSandPpfx2/preview)




### Configurazione

Una volta creato l’account, devi aggiungerlo al gruppo Admin nel file di configurazione **acl.xml**. Per farlo, connettiti al server via FTP e apri il file che si trova in **gXXXX/gtamta/mods/deathmatch/**. Se non sai cos’è un client FTP o come usarlo, dai un’occhiata a questa guida: [Accesso FTP ai file](gameserver-ftpaccess.md)

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
</group>
```

Qui devi aggiungere un oggetto user per assegnare l’utente al gruppo Admin:

```
<object name="user.BENUTZERNAME"></object>
```

Al posto di BENUTZERNAME scrivi il tuo username. Il risultato dovrebbe essere così:

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
    <object name="user.Benutzername"></object>
</group>
```



### Login come admin

Ora che hai finito di configurare il file **acl.xml**, avvia il gioco/server e connettiti al tuo server. Poi puoi fare il login con questo comando:

```
login USERNAME PASSWORD
```

## Conclusione

Congratulazioni, hai configurato con successo i permessi di amministratore! Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂


<InlineVoucher />