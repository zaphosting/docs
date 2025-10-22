---
id: scp-becomeadmin
title: "SCP Secret Laboratory : Deviens admin sur ton propre serveur"
description: "Découvre comment attribuer les permissions d’administrateur pour un contrôle total de ton serveur et gérer efficacement les rôles dans ton serveur de jeux → Apprends-en plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction
Attribuer les permissions d’administrateur te permet une administration simple et complète avec un contrôle total de ton serveur. En tant qu’admin, tu peux utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d’administrateur à ton serveur sont décrites ci-dessous.  
<InlineVoucher />

:::info
Depuis les dernières mises à jour de SCP, la connexion par mot de passe ne fonctionne plus. Merci d’utiliser ce guide pour ajouter tes rôles directement via le SteamID. 
:::


## Configuration du Remote Admin Config

### Préparation

Tout d’abord, il te faut récupérer ton Steam64ID.  
Tu peux utiliser cet outil : [SteamID Lookup](https://steamid.io/lookup).  
L’ID sera ensuite à insérer dans le fichier de configuration.

Voici un exemple de comment récupérer ton SteamID en entrant le lien de ton profil :

![](https://screensaver01.zap-hosting.com/index.php/s/k4EEWwFQB3xAxA2/preview)

## Ajouter des Admins

Maintenant, il faut ouvrir et éditer le fichier de configuration.  
Il se trouve dans "**Configs**" sous "**Settings**".

![](https://screensaver01.zap-hosting.com/index.php/s/NSFrZG3SX6ZaQgb/preview)

Là, ouvre le fichier "**config_remoteadmin.txt**" dans lequel tu vas modifier les lignes nécessaires.

![](https://screensaver01.zap-hosting.com/index.php/s/KM6YpQwGC4n8rZW/preview)

Les rôles sont créés et assignés ici.  
Dans ce fichier, remplace "**SomeSteamId64**" devant "**@steam: owner**" par ton SteamID64 que tu as récupéré via le "**steamid lookup**".

![](https://screensaver01.zap-hosting.com/index.php/s/HC4Z2s9wPgdJjXT/preview)

Tu peux faire ça pour chaque utilisateur supplémentaire qui doit recevoir des droits.  
Dans notre exemple, on attribue des droits à trois utilisateurs : un en "**owner**" et deux en "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/9e7YWoMHAxn3z3b/preview)

## Ajouter Plus de Rôles pour Bypasser le Mot de Passe

Si tu as plusieurs rôles qui doivent bypasser le mot de passe du remote admin, tu peux simplement modifier la ligne suivante dans le fichier :  
"**config_remoteadmin.txt**"

Trouve exactement cette section : 

![](https://screensaver01.zap-hosting.com/index.php/s/HoGJ7X2ZEWW34bH/preview)

Pour ajouter plus de rôles, écris-les simplement séparés par des virgules.  
Par exemple, pour ajouter admin et moderator pour bypasser le mot de passe :

![](https://screensaver01.zap-hosting.com/index.php/s/PFLFiG9W3kScZ3d/preview)

:::info
Pour ouvrir la console remote admin en jeu, une fois connecté au serveur, appuie sur la touche "**M**". Si le serveur tourne déjà, il faudra le redémarrer pour que les changements prennent effet. Sinon, si le serveur est éteint, allume-le puis vérifie la console Remote Admin en jeu.
:::


## Conclusion

Félicitations, tu as configuré avec succès les permissions d’administrateur. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />