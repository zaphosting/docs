---
id: projectzomboid-whitelist
title: "Project Zomboid : Liste blanche"
description: "Infos sur comment mettre votre serveur Project Zomboid en liste blanche avec ZAP-Hosting → En savoir plus maintenant"
sidebar_label: Liste blanche
services:
  - gameserver-projectzomboid
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche est un mode de contrôle d’accès qui nécessite de créer explicitement des comptes utilisateurs avant qu’ils puissent rejoindre. Dans Project Zomboid, cela se fait généralement en désactivant l’inscription ouverte dans la config du serveur, puis en ajoutant les utilisateurs via des commandes console.

<InlineVoucher />


## Activation de la liste blanche

Connectez-vous à votre serveur via FTP et ouvrez le fichier de configuration de votre serveur. Il se trouve généralement sous `Zomboid/Server/` et porte le nom de votre serveur, par exemple `servertest.ini` ou `<ServerName>.ini`. Trouvez la ligne `Open` et mettez-la à false.

```ini
Open=false
```

Sauvegardez le fichier et redémarrez le serveur. Avec l’inscription ouverte désactivée, seuls les comptes que vous créez pourront se connecter.

## Gestion des joueurs en liste blanche

Ouvrez la console live dans la gestion de votre serveur de jeux ZAP-Hosting et créez des comptes pour les joueurs autorisés. Utilisez la commande adduser avec un nom d’utilisateur et un mot de passe.

```text
/adduser "username" "password"
```

Pour retirer l’accès à un utilisateur, supprimez-le de la liste blanche avec la commande dédiée.

```text
/removeuserfromwhitelist "username"
```

Si vous aviez auparavant autorisé l’inscription ouverte et souhaitez convertir les comptes déjà connectés en entrées de la liste blanche, utilisez la commande qui ajoute tous les utilisateurs connectés actuellement à la liste blanche.

```text
/addalltowhitelist
```

## Vérification du fonctionnement de la liste blanche

Une fois `Open=false` activé, un nouvel utilisateur non ajouté via `/adduser` ne devrait pas pouvoir rejoindre. Testez avec un compte en liste blanche pour confirmer l’accès.

Si des utilisateurs non listés peuvent encore se connecter, vérifiez que vous avez bien modifié le fichier actif `<ServerName>.ini` et redémarré le serveur.

## Conclusion

Si vous avez suivi toutes les étapes ci-dessus, votre liste blanche est maintenant active et vous contrôlez exactement qui peut rejoindre le serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarrez une fois de plus le serveur et revérifiez le fichier ou la sortie des commandes pour confirmer que le changement a bien été appliqué.

Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />