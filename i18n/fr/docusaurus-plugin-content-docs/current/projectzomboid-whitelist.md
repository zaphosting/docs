---
id: projectzomboid-whitelist
title: "Project Zomboid : Liste blanche"
description: "Infos pour mettre votre serveur Project Zomboid en liste blanche chez ZAP-Hosting → Découvre ça maintenant"
sidebar_label: Liste blanche
services:
  - gameserver-projectzomboid
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une liste blanche, c’est un mode de contrôle d’accès qui t’oblige à créer explicitement des comptes utilisateurs avant qu’ils puissent rejoindre. Sur Project Zomboid, ça se fait souvent en désactivant l’inscription ouverte dans la config du serveur, puis en ajoutant les joueurs via des commandes console.

<InlineVoucher />


## Activer la liste blanche

Connecte-toi à ton serveur via FTP et ouvre le fichier de config de ton serveur. Il se trouve généralement dans `Zomboid/Server/` et porte le nom de ton serveur, par exemple `servertest.ini` ou `<ServerName>.ini`. Trouve la ligne `Open` et mets-la à false.

```ini
Open=false
```

Sauvegarde le fichier et redémarre le serveur. Avec l’inscription ouverte désactivée, seuls les comptes que tu crées pourront se connecter.

## Gérer les joueurs en liste blanche

Ouvre la console live dans la gestion de ton serveur de jeux ZAP-Hosting et crée les comptes des joueurs autorisés. Utilise la commande adduser avec un nom d’utilisateur et un mot de passe.

```text
/adduser "username" "password"
```

Pour retirer l’accès à un utilisateur, enlève-le de la liste blanche avec la commande dédiée.

```text
/removeuserfromwhitelist "username"
```

Si tu avais activé l’inscription ouverte avant et que tu veux convertir les comptes déjà connectés en entrées de la liste blanche, utilise la commande qui ajoute tous les utilisateurs connectés actuellement à la liste blanche.

```text
/addalltowhitelist
```

## Vérifier que la liste blanche fonctionne

Après avoir mis `Open=false`, un nouvel utilisateur non ajouté avec `/adduser` ne devrait pas pouvoir se connecter. Teste avec un compte en liste blanche pour confirmer l’accès.

Si des utilisateurs non listés peuvent encore rejoindre, vérifie que tu as bien modifié le fichier `<ServerName>.ini` actif et redémarré le serveur.

## Conclusion

Si tu as suivi toutes les étapes ci-dessus, ta liste blanche est maintenant active et tu contrôles exactement qui peut rejoindre le serveur. Si l’accès ne fonctionne toujours pas comme prévu, redémarre une fois de plus le serveur et vérifie le fichier ou la sortie des commandes pour confirmer que le changement a bien été pris en compte.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />