---
id: vrising-becomeadmin
title: "V Rising : Devenir admin"
description: "Découvrez comment gérer et attribuer efficacement les permissions d’administrateur complet pour votre serveur de jeux → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
L’attribution des permissions d’administrateur vous permet une administration simple et complète avec un contrôle total de votre serveur. En tant qu’administrateur, vous avez la possibilité d’utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d’administrateur à votre serveur sont décrites ci-dessous.  
<InlineVoucher />

### Ajouter des permissions

La gestion des permissions admin se fait via le fichier de config **adminlist.txt**. Vous pouvez accéder à ce fichier dans l’interface web sous Configs. Le SteamID64 du joueur est nécessaire pour ajouter un admin. Vous pouvez l’obtenir en ouvrant votre profil Steam et en faisant un clic droit n’importe où. Vous aurez alors la possibilité de copier l’URL de la page. Cette URL peut ensuite être entrée sur l’un des sites suivants : https://steamid.io/ https://steamrep.com/ https://steamidfinder.com/ 

![](https://screensaver01.zap-hosting.com/index.php/s/QT5HRX4t966kRjQ/preview)

Une fois sur le site, collez l’URL de votre profil Steam dans le champ prévu à cet effet, et vous obtiendrez votre SteamID64. Ajoutez ce SteamID64 dans le fichier de config **adminlist.txt**. Pour cela, rendez-vous dans l’interface web de l’administration de votre serveur de jeux dans la catégorie Configs et ouvrez le fichier adminlist.txt. 

![](https://screensaver01.zap-hosting.com/index.php/s/Y35BDx5xJ5zLGoS/preview)

:::info
Si vous souhaitez attribuer les permissions admin à plusieurs joueurs, chaque SteamID doit être sur une ligne distincte.
:::

### Activer les permissions

Avant de pouvoir attribuer les permissions admin dans le jeu, vous devez activer la console pour votre jeu. Connectez-vous à votre serveur et allez dans les paramètres. Dans les paramètres, activez l’option **Console Enabled**. La console peut être ouverte par défaut avec la touche Gravis du clavier. Les permissions admin peuvent ensuite être activées dans la console avec la commande `adminauth`. 

![](https://screensaver01.zap-hosting.com/index.php/s/MLS9wbcC56ZomAb/preview)


### Liste des commandes admin

Voici un aperçu rapide des commandes admin les plus courantes que vous pouvez exécuter sur votre serveur. 

|                          |                                                         |
| ------------------------ | ------------------------------------------------------- |
| adminauth                | Attribution des permissions admin                        |
| admindeauth              | Suppression des permissions admin                        |
| banuser [nom/IP/userID]  | Bannir un joueur spécifique par nom, IP ou user ID      |
| banned                   | Affiche la liste de tous les joueurs bannis             |
| bancharacter             | Utilisé pour bannir un personnage spécifique             |
| give [nom]               | Vous donne un objet spécifique dans le jeu               |
| giveset                  | Permet d’explorer différents ensembles d’armures et armes|
| kick [nom/IP/userID]     | Expulse un joueur spécifique par nom, IP ou user ID      |
| unban [nom/IP/userID]    | Débannir un joueur spécifique par nom, IP ou user ID     |


## Conclusion

Félicitations, vous avez configuré avec succès les permissions d’administrateur. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />