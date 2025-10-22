---
id: factorio-becomeadmin
title: "Factorio : Devenir Admin"
description: "Découvrez comment attribuer les permissions d’administrateur pour un contrôle total de votre serveur et gérer efficacement les options en jeu → En savoir plus maintenant"
sidebar_label: Devenir admin
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
L’attribution des permissions d’administrateur vous permet une administration simple et complète avec un contrôle total de votre serveur. En tant qu’administrateur, vous avez la possibilité d’utiliser toutes les options et fonctions disponibles directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d’administrateur à votre serveur sont décrites ci-dessous.  
<InlineVoucher />

## Configuration

Les droits d’administrateur vous permettent de faire des modifications directement dans le jeu sur votre serveur sans avoir à les changer dans la Config. L’ajout d’un admin se fait via le fichier **server-settings.json** de la Config, que vous pouvez trouver dans l’interface sous Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/nDGgzXfmgzqDrf5/preview)

À la fin du fichier de config se trouve la partie importante. Les admins y sont définis :

```
  "_comment_admins": "Liste des noms d’utilisateur insensibles à la casse, qui seront immédiatement promus",
  "admins": []
}
```

Les noms des joueurs qui doivent recevoir les droits d’administrateur doivent être spécifiés ici. Si plusieurs admins sont ajoutés, cela pourrait ressembler à ceci par exemple :

```
  "_comment_admins": "Liste des noms d’utilisateur insensibles à la casse, qui seront immédiatement promus",
  "admins": [
  	"PlayerName1",
  	"PlayerName2",
  	"PlayerName3"
  ]
}
```

Les joueurs portant les noms **PlayerName1, PlayerName2, PlayerName3** ont maintenant reçu les permissions. Les commandes admin peuvent désormais être exécutées en jeu via la console. Vous trouverez ci-dessous un aperçu des commandes les plus courantes.



### Commandes courantes

|                Commande                 |                         Description                          |
| :------------------------------------: | :----------------------------------------------------------: |
|                 /admin                 |               Ouvre l’interface de gestion des joueurs.      |
|           /ban player reason           |                          Bannir un joueur                   |
|                 /bans                  |               Affiche la liste des joueurs bannis.           |
|             /unban player              |                         Débannir un joueur                   |
|  /banlist add/remove/get/clear player  | Ajoute ou retire un joueur de la liste de bannissement. Même fonction que /ban ou /unban. |
|          /kick player reason           |                         Expulser un joueur                   |
|              /mute player              |                         Mettre un joueur en sourdine          |
|             /unmute player             |                        Réactiver le son d’un joueur          |
| /whitelist add/remove/get/clear player |         Ajoute ou retire un joueur de la liste blanche        |

D’autres commandes sont disponibles sur le [Wiki officiel de Factorio](https://wiki.factorio.com/Console).


## Conclusion

Félicitations, vous avez configuré avec succès les permissions d’administrateur. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />