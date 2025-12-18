---
id: dst-create-cave
title: "Don't Starve Together : Créer des cavernes sur les serveurs"
description: "Découvrez comment configurer des serveurs master et esclave pour les cavernes dans Don't Starve Together afin d'améliorer l'expérience de jeu → En savoir plus maintenant"
sidebar_label: Créer des cavernes
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Préparation pour les cavernes

Pour utiliser les cavernes dans Don't Starve Together, il faut commander deux serveurs chez nous. Un serveur sera le "master" utilisé pour le monde supérieur et le second serveur sera le "slave" utilisé uniquement pour les cavernes. Le choix du serveur qui sera "master" et celui qui sera "slave" se fait via les configurations des fichiers server.ini et cluster.ini.

Les deux configs sont visibles dans l’interface sous "**Configs**" et peuvent être modifiées directement là.

![](https://screensaver01.zap-hosting.com/index.php/s/mgjpecSGBsyasmc/preview)

Seule la partie "**[SHARD]**" est modifiée dans les deux fichiers .ini

## Master

Le master est le serveur du monde supérieur, ce serveur doit être configuré comme master dans les configs.

### server.ini

:::info
**IMPORTANT** le "**MASTERIP**" correspond à l’adresse IP du serveur master, si cette IP est 123.123.123.123 alors il faut mettre "bind_ip = 123.123.123.123".

"**MASTERIP**" n’est pas une valeur statique à entrer dans server.ini à "bind_ip = ".
:::

Par défaut, dans "**[SHARD]**" de server.ini, il y a seulement "is_master = true", ajoutez maintenant les commandes suivantes :
```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

### cluster.ini

Par défaut, dans "**[SHARD]**" de cluster.ini, il y a seulement "is_master = true", ajoutez maintenant les commandes suivantes :

```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

## Slave

Le slave est le serveur des cavernes, les données du master doivent être renseignées dans ses configs.

### server.ini

:::info
**IMPORTANT** le "**SLAVEIP**" correspond à l’adresse IP du serveur slave, si cette IP est 123.123.123.123 alors il faut mettre "bind_ip = 123.123.123.123".

"**SLAVEIP**" n’est pas une valeur statique à entrer dans server.ini à "bind_ip = ".

"**MASTERIP**" n’est pas une valeur statique à entrer dans server.ini à "master_ip = ".
:::

Par défaut, dans "**[SHARD]**" de server.ini, il y a seulement "is_master = true", ajoutez maintenant les commandes suivantes :

```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Caves
id=200
```

### cluster.ini

Par défaut, dans "**[SHARD]**" de cluster.ini, il y a seulement "is_master = true", ajoutez maintenant les commandes suivantes :

```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Caves
cluster_key = deinclusterkey
```

### Générer un nouveau monde

Si toutes les configs sont bien configurées, il faut générer un nouveau monde pour le serveur slave. Un nouveau fichier est nécessaire pour que les cavernes soient créées correctement.

Utilisez le [guide Accès via FTP](gameserver-ftpaccess.md) pour accéder au serveur slave dans le répertoire : */starve/Save/Cluster_1/Master/*  
Créez un nouveau fichier nommé "*worldgenoverride.lua*" dans ce répertoire.  
Remplissez ce fichier avec le contenu suivant :

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

Ensuite, maintenez la touche "**TAB**" sur le serveur pour afficher le statut du serveur. Cliquez sur les 3 points en haut à gauche et régénérez le monde une fois avec le paramètre modifié via "**Regenerate World**".

Une fois le rechargement terminé, tout est prêt et vous pouvez jouer avec les cavernes sur votre serveur.

<InlineVoucher />