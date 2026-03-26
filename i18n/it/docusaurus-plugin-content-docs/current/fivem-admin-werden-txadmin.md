# Diventare Admin FiveM con txAdmin

## Introduzione  
In questa guida scoprirai come diventare admin su un server FiveM usando txAdmin. Ti spiegheremo tutti i passaggi necessari per configurare i permessi admin tramite l’interfaccia di txAdmin.

## Requisiti  
- Accesso al tuo server FiveM tramite l’interfaccia web o il pannello ZAP-Hosting  
- txAdmin deve essere installato e attivo sul tuo server FiveM  
- Conoscenze base sulla gestione di server FiveM  

## Guida Passo-Passo

### 1. Accedi al Pannello txAdmin  
1. Effettua il login nel tuo account ZAP-Hosting.  
2. Vai al dashboard del tuo server FiveM.  
3. Clicca sul pulsante **Open txAdmin** per aprire l’interfaccia txAdmin.  
   
   ![Open txAdmin](img/fivem-admin-txadmin/open-txadmin.png)  

### 2. Effettua il Login su txAdmin  
1. Se è la prima volta che accedi a txAdmin, ti verrà chiesto di creare un account admin.  
2. Inserisci username e password a tua scelta, poi salva.  
3. Se hai già un account, inserisci semplicemente le tue credenziali per accedere.  

### 3. Aggiungi i Tuoi Permessi Admin  
1. Nel dashboard di txAdmin, vai alla scheda **Players**.  
2. Cerca il tuo player tramite Steam ID o nome in-game.  
3. Clicca sul pulsante **Manage** accanto al tuo player.  
4. Nella sezione permessi, assegna a te stesso il ruolo **admin** o i permessi necessari.  
   
   ![Assign Admin Role](img/fivem-admin-txadmin/assign-admin-role.png)  

### 4. Configura i Permessi (Opzionale)  
1. Vai alla scheda **Settings** in txAdmin.  
2. Seleziona **Permissions** per personalizzare i comandi e i privilegi disponibili agli admin.  
3. Modifica secondo le tue esigenze e salva le modifiche.  

### 5. Salva e Riavvia il Server  
1. Dopo aver assegnato i permessi, torna alla scheda **Dashboard**.  
2. Clicca su **Restart Server** per applicare tutte le modifiche.  
   
   ```bash
   # In alternativa, riavvia tramite il pannello ZAP-Hosting:
   # 1. Vai al dashboard del server
   # 2. Clicca su "Restart"
   ```  

### 6. Verifica il Tuo Stato Admin In-Game  
1. Entra nel tuo server FiveM.  
2. Apri la console in-game (di solito con il tasto F8).  
3. Prova comandi admin come:  
   
   ```plaintext
   /admin
   /kick [playerID]
   /ban [playerID]
   ```  
   
4. Se i comandi funzionano, hai i diritti admin.  

> **Nota:** Se riscontri problemi, ricontrolla il tuo Steam ID o le impostazioni della whitelist nel txAdmin.

## Conclusione  
Seguendo questi passaggi, ti sei configurato con successo come admin sul tuo server FiveM usando txAdmin. Ora puoi gestire il tuo server in modo semplice ed efficace con i privilegi amministrativi.