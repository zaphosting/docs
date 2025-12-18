---
id: dayz-becomeadmin
title: "DayZ : Devenir Admin"
description: "Découvrez comment obtenir un contrôle total sur votre serveur en attribuant les droits d’admin et en gérant efficacement les options du jeu → En savoir plus maintenant"
sidebar_label: Devenir Admin
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Attribuer les droits d’admin vous permet de gérer votre serveur avec un contrôle total, facilement et de manière complète. En tant qu’admin, vous avez la possibilité d’appliquer toutes les options et fonctions disponibles directement dans le jeu. Voici toutes les étapes nécessaires pour attribuer les droits d’admin à votre serveur.  
<InlineVoucher />

## Configuration

La configuration des droits d’admin se fait via le fichier de configuration du serveur. Vous pouvez accéder aux fichiers de configuration de votre serveur dans la gestion du serveur de jeux sous **Configs**. Une fois là, vous trouverez un aperçu des fichiers de configuration disponibles. Ouvrez le fichier **server.DZ.cfg** en cliquant sur le bouton bleu.

![](https://screensaver01.zap-hosting.com/index.php/s/n6FSdPnYxxWp4Po/preview)

Dans le fichier de configuration, vous devriez trouver l’entrée **passwordAdmin**. Ici, vous devez définir le mot de passe souhaité pour l’accès. Entrez votre mot de passe désiré et cliquez sur le bouton **Enregistrer** en bas.

![](https://screensaver01.zap-hosting.com/index.php/s/H3ndjqRYBPXRgRK/preview)

Pour appliquer la modification, le serveur doit être redémarré. Ensuite, connectez-vous à votre serveur et ouvrez le chat en jeu. Exécutez la commande suivante pour vous connecter en tant qu’admin :

```
#login motdepasse
```



## Commandes fréquemment utilisées

Voici une liste de quelques commandes disponibles que vous pouvez utiliser avec vos permissions d’administrateur : 

| COMMANDE                                   | DESCRIPTION                                                  |
| :----------------------------------------- | :----------------------------------------------------------- |
| #login motdepasseadmin                     | Se connecter en tant qu’admin du serveur.                   |
| #logout                                    | Se déconnecter en tant qu’admin.                             |
| #mission nomdefichier Difficulté           | Sélectionner la mission avec le nom connu et définir la difficulté - le paramètre difficulté est optionnel et, s’il n’est pas défini, la difficulté actuelle est conservée. |
| #missions                                  | Sélectionner une mission.                                    |
| ##restart                                  | Redémarrer une mission.                                      |
| #reassign                                  | Recommencer à zéro et réattribuer les rôles.                |
| #shutdown                                  | Éteint le serveur.                                           |
| #restartserver                             | Redémarre le serveur.                                        |
| #shutdownserveraftermission                | Une fois la mission terminée, le serveur s’éteint.          |
| #restartserveraftermission                 | Une fois la mission terminée, le serveur redémarre.         |
| #init                                      | Recharge le fichier de config du serveur chargé par les options -config. |
| #exec ban Nom#exec ban ID#exec ban #Joueur | Permet de bannir un joueur.                                  |
| #kick Nom#kick ID#kick #Joueur              | Permet d’expulser un joueur du serveur.                     |
| #monitor (intervalle en secondes)           | Affiche les infos de performance du serveur. Si l’intervalle est 0, la surveillance s’arrête. |
| #monitords (intervalle en secondes)         | Affiche les infos de performance dans la console serveur. Si l’intervalle est 0, la surveillance s’arrête. |
| #debug off                                 | Désactive le mode debug.                                     |
| #debug (intervalle en secondes)             | L’intervalle par défaut est 10 si aucun autre intervalle n’est sélectionné. |
| #debug (commande) (param)                   | Quelques commandes disponibles : JIPQueueuserQueuecheckFiletotalSentuserSentuserInfo Vous pouvez désactiver chaque commande en ajoutant le paramètre off après chaque commande, ex. #totalSent off. La sortie varie selon les commandes. Certaines écrivent dans le fichier log, d’autres à l’écran, etc. Notez que vous aurez besoin d’un débogueur capable de capturer OutputDebugString sur la machine cliente. |
| #debug (commande)                           | Se déconnecter en tant qu’admin.                             |
| #logout                                    | Deux commandes disponibles : console - Envoie ce qui est dans la console serveur à l’expéditeur. von - Sortie dans le logFile défini dans server.cfg, ex. le fichier log peut s’appeler “server_console.log”. Vous verrez une confirmation de ces commandes dans les canaux de chat. |


## Conclusion

Félicitations, vous avez configuré avec succès les permissions d’administrateur. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />