# Admin worden op FiveM met txAdmin

## Intro  
In deze gids leer je hoe je admin wordt op een FiveM-server met txAdmin. We nemen je mee door de stappen om je adminrechten in te stellen via de txAdmin interface.

## Vereisten  
- Toegang tot je FiveM-server via de ZAP-Hosting webinterface of panel  
- txAdmin moet geïnstalleerd en actief zijn op je FiveM-server  
- Basiskennis van FiveM serverbeheer  

## Stapsgewijze Handleiding

### 1. Open het txAdmin Panel  
1. Log in op je ZAP-Hosting account.  
2. Ga naar je FiveM server dashboard.  
3. Klik op de **Open txAdmin** knop om de txAdmin interface te starten.  
   
   ![Open txAdmin](img/fivem-admin-txadmin/open-txadmin.png)  

### 2. Log in op txAdmin  
1. Als dit je eerste keer is dat je txAdmin opent, wordt je gevraagd een admin account aan te maken.  
2. Vul je gewenste gebruikersnaam en wachtwoord in en sla op.  
3. Heb je al een account? Log dan gewoon in met je gegevens.  

### 3. Voeg je Admin Rechten Toe  
1. Ga in het txAdmin dashboard naar het **Players** tabblad.  
2. Zoek jezelf op via je Steam ID of in-game naam.  
3. Klik op de **Manage** knop naast jouw speler.  
4. Wijs jezelf de **admin** rol toe of de benodigde permissies die je wilt hebben.  
   
   ![Assign Admin Role](img/fivem-admin-txadmin/assign-admin-role.png)  

### 4. Permissies Configureren (Optioneel)  
1. Ga naar het **Settings** tabblad in txAdmin.  
2. Kies **Permissions** om de specifieke commando’s en rechten voor admins aan te passen.  
3. Pas aan wat je nodig hebt en sla de wijzigingen op.  

### 5. Opslaan en Server Herstarten  
1. Na het toewijzen van permissies, ga terug naar het **Dashboard** tabblad.  
2. Klik op **Restart Server** om alle wijzigingen door te voeren.  
   
   ```bash
   # Je kunt ook via het ZAP-Hosting panel herstarten:
   # 1. Ga naar je server dashboard
   # 2. Klik op "Restart"
   ```  

### 6. Check je Admin Status In-Game  
1. Join je FiveM-server.  
2. Open de in-game console (meestal met de F8 toets).  
3. Test admin commando’s zoals:  
   
   ```plaintext
   /admin
   /kick [playerID]
   /ban [playerID]
   ```  
   
4. Werken de commando’s? Dan heb je adminrechten!  

> **Tip:** Heb je problemen? Check dan nog even je Steam ID en de whitelist instellingen in txAdmin.

## Afsluiting  
Met deze stappen heb je jezelf succesvol als admin ingesteld op je FiveM-server via txAdmin. Nu kun je je server makkelijk beheren met admin privileges.