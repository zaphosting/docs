# Devenir Admin FiveM avec txAdmin

## Introduction  
Dans ce guide, tu vas apprendre comment devenir admin sur un serveur FiveM grâce à txAdmin. On va voir ensemble les étapes nécessaires pour configurer tes permissions admin via l’interface txAdmin.

## Prérequis  
- Accès à ton serveur de jeux FiveM via l’interface web ou le panneau ZAP-Hosting  
- txAdmin doit être installé et en fonctionnement sur ton serveur FiveM  
- Connaissances de base en gestion de serveur FiveM  

## Guide Pas à Pas

### 1. Accéder au panneau txAdmin  
1. Connecte-toi à ton compte ZAP-Hosting.  
2. Va sur le tableau de bord de ton serveur FiveM.  
3. Clique sur le bouton **Open txAdmin** pour lancer l’interface txAdmin.  
   
   ![Open txAdmin](img/fivem-admin-txadmin/open-txadmin.png)  

### 2. Se connecter à txAdmin  
1. Si c’est ta première connexion à txAdmin, tu devras créer un compte admin.  
2. Remplis ton nom d’utilisateur et ton mot de passe, puis sauvegarde.  
3. Si tu as déjà un compte, entre simplement tes identifiants pour te connecter.  

### 3. Ajouter tes permissions admin  
1. Dans le tableau de bord txAdmin, va dans l’onglet **Players**.  
2. Trouve ton joueur en cherchant ton Steam ID ou ton pseudo en jeu.  
3. Clique sur le bouton **Manage** à côté de ton entrée.  
4. Dans la section permissions, attribue-toi le rôle **admin** ou les permissions nécessaires.  
   
   ![Assign Admin Role](img/fivem-admin-txadmin/assign-admin-role.png)  

### 4. Configurer les permissions (optionnel)  
1. Va dans l’onglet **Settings** de txAdmin.  
2. Sélectionne **Permissions** pour ajuster précisément les commandes et privilèges disponibles aux admins.  
3. Modifie selon tes besoins et sauvegarde les changements.  

### 5. Sauvegarder et redémarrer le serveur  
1. Après avoir attribué les permissions, retourne dans l’onglet **Dashboard**.  
2. Clique sur **Restart Server** pour appliquer toutes les modifications.  
   
   ```bash
   # Sinon, redémarre via le panneau ZAP-Hosting :
   # 1. Va sur le tableau de bord de ton serveur
   # 2. Clique sur "Restart"
   ```  

### 6. Vérifier ton statut admin en jeu  
1. Rejoins ton serveur FiveM.  
2. Ouvre la console en jeu (généralement avec la touche F8).  
3. Teste des commandes admin comme :  
   
   ```plaintext
   /admin
   /kick [playerID]
   /ban [playerID]
   ```  
   
4. Si les commandes fonctionnent, tu as bien les droits admin.  

> **Note :** En cas de problème, vérifie bien ton Steam ID ou les réglages de whitelist dans txAdmin.

## Conclusion  
En suivant ces étapes, tu es maintenant admin sur ton serveur FiveM via txAdmin. Tu peux gérer ton serveur efficacement avec tes privilèges d’admin.