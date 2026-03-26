# FiveM Admin werden mit txAdmin

## Einführung  
In dieser Anleitung lernst du, wie du Admin auf einem FiveM Gameserver mit txAdmin wirst. Dabei zeigen wir dir die nötigen Schritte, um deine Admin-Rechte über die txAdmin-Oberfläche einzurichten.

## Voraussetzungen  
- Zugriff auf deinen FiveM Gameserver über das ZAP-Hosting Webinterface oder Control Panel  
- txAdmin muss auf deinem FiveM Gameserver installiert und aktiv sein  
- Grundkenntnisse in der FiveM Serververwaltung  

## Schritt-für-Schritt Anleitung

### 1. txAdmin Panel öffnen  
1. Logge dich in deinen ZAP-Hosting Account ein.  
2. Gehe zum Dashboard deines FiveM Gameservers.  
3. Klicke auf den **Open txAdmin** Button, um die txAdmin-Oberfläche zu starten.  
   
   ![Open txAdmin](img/fivem-admin-txadmin/open-txadmin.png)  

### 2. In txAdmin einloggen  
1. Wenn du txAdmin zum ersten Mal öffnest, wirst du aufgefordert, ein Admin-Konto anzulegen.  
2. Gib deinen gewünschten Benutzernamen und Passwort ein und speichere.  
3. Falls du schon ein Konto hast, melde dich einfach mit deinen Zugangsdaten an.  

### 3. Admin-Rechte vergeben  
1. Im txAdmin Dashboard wechselst du zum Tab **Players**.  
2. Suche deinen Spieler über deine Steam ID oder deinen Ingame-Namen.  
3. Klicke neben deinem Eintrag auf den **Manage** Button.  
4. Im Bereich für Berechtigungen weist du dir die Rolle **admin** oder die benötigten Rechte zu.  
   
   ![Assign Admin Role](img/fivem-admin-txadmin/assign-admin-role.png)  

### 4. Berechtigungen anpassen (optional)  
1. Gehe zum Tab **Settings** in txAdmin.  
2. Wähle **Permissions**, um die verfügbaren Admin-Kommandos und Privilegien individuell zu konfigurieren.  
3. Passe die Einstellungen nach deinen Wünschen an und speichere.  

### 5. Speichern und Server neu starten  
1. Nach der Rechtevergabe gehst du zurück zum Tab **Dashboard**.  
2. Klicke auf **Restart Server**, damit alle Änderungen wirksam werden.  
   
   ```bash
   # Alternativ kannst du den Server auch über das ZAP-Hosting Control Panel neu starten:
   # 1. Gehe zum Server-Dashboard
   # 2. Klicke auf "Restart"
   ```  

### 6. Admin-Status im Spiel überprüfen  
1. Starte deinen FiveM Gameserver und verbinde dich.  
2. Öffne die Ingame-Konsole (meist mit der F8-Taste).  
3. Teste Admin-Kommandos wie:  
   
   ```plaintext
   /admin
   /kick [playerID]
   /ban [playerID]
   ```  
   
4. Wenn die Kommandos funktionieren, hast du Admin-Rechte.  

> **Tipp:** Falls es Probleme gibt, überprüfe nochmal deine Steam ID und die Whitelist-Einstellungen im txAdmin.

## Fazit  
Mit diesen Schritten hast du dich erfolgreich als Admin auf deinem FiveM Gameserver via txAdmin eingerichtet. Jetzt kannst du deinen Server mit Admin-Rechten bequem verwalten.