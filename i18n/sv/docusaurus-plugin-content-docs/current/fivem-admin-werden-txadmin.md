# Bli en FiveM Admin med txAdmin

## Introduktion  
I den här guiden lär du dig hur du blir admin på en FiveM-server med hjälp av txAdmin. Vi går igenom alla steg för att ställa in dina admin-rättigheter via txAdmin-gränssnittet.

## Krav  
- Tillgång till din FiveM-server via ZAP-Hostings webbgränssnitt eller panel  
- txAdmin måste vara installerat och igång på din FiveM-server  
- Grundläggande förståelse för FiveM-serverhantering  

## Steg-för-steg Guide

### 1. Öppna txAdmin-panelen  
1. Logga in på ditt ZAP-Hosting-konto.  
2. Gå till din FiveM-server dashboard.  
3. Klicka på **Open txAdmin** för att starta txAdmin-gränssnittet.  
   
   ![Open txAdmin](img/fivem-admin-txadmin/open-txadmin.png)  

### 2. Logga in i txAdmin  
1. Om det är första gången du öppnar txAdmin kommer du bli ombedd att skapa ett adminkonto.  
2. Fyll i önskat användarnamn och lösenord, och spara.  
3. Har du redan ett konto, logga bara in med dina uppgifter.  

### 3. Lägg till dina admin-rättigheter  
1. I txAdmin dashboard, gå till fliken **Players**.  
2. Hitta din spelare genom att söka på ditt Steam-ID eller ditt in-game namn.  
3. Klicka på **Manage** bredvid din spelare.  
4. Under permissions, ge dig själv rollen **admin** eller de rättigheter du behöver.  
   
   ![Assign Admin Role](img/fivem-admin-txadmin/assign-admin-role.png)  

### 4. Konfigurera rättigheter (valfritt)  
1. Gå till fliken **Settings** i txAdmin.  
2. Välj **Permissions** för att finjustera vilka kommandon och privilegier admin ska ha.  
3. Anpassa efter behov och spara ändringarna.  

### 5. Spara och starta om servern  
1. Efter att du tilldelat rättigheter, gå tillbaka till **Dashboard**-fliken.  
2. Klicka på **Restart Server** för att alla ändringar ska träda i kraft.  
   
   ```bash
   # Alternativt kan du starta om via ZAP-Hosting panelen:
   # 1. Gå till din server dashboard
   # 2. Klicka på "Restart"
   ```  

### 6. Verifiera din adminstatus i spelet  
1. Gå in på din FiveM-server.  
2. Öppna in-game konsolen (vanligtvis med F8).  
3. Testa admin-kommandon som:  
   
   ```plaintext
   /admin
   /kick [playerID]
   /ban [playerID]
   ```  
   
4. Om kommandona fungerar har du admin-rättigheter.  

> **Tips:** Om du stöter på problem, dubbelkolla ditt Steam-ID och serverns whitelist-inställningar i txAdmin.

## Avslutning  
Genom att följa dessa steg har du nu satt upp dig själv som admin på din FiveM-server med txAdmin. Nu kan du smidigt hantera din server med fulla adminrättigheter.