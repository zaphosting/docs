---
id: fivem-txadmin-import-server-base
title: "FiveM : Importer une base de serveur avec txAdmin"
description: "Découvrez comment importer une base de serveur prête à l’emploi sur votre propre serveur avec txAdmin pour une configuration rapide et une intégration fluide → En savoir plus maintenant"
sidebar_label: Importer une base de serveur
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

Vous avez trouvé une base de serveur prête à l’emploi sur Internet et vous voulez la transférer sur votre propre serveur ? Pas de souci ! Avec txAdmin, vous pouvez importer une base de serveur rapidement et facilement – à condition de respecter quelques exigences et détails importants. Dans ce guide, on vous montre comment importer une base de serveur.



<InlineVoucher />

## Préparation

Pour commencer la configuration, il faut que vous ayez déjà téléchargé une base de serveur prête à l’emploi depuis Internet sur votre ordinateur et que le fichier soit déjà décompressé.

Le contenu d’une base de serveur peut varier selon le type et le contenu du serveur, et les fichiers peuvent donc différer. Cependant, votre base de serveur devrait généralement contenir les données suivantes :

- **Configuration du serveur - `server.cfg` (obligatoire) :** Le fichier de configuration du serveur contient toutes les commandes et réglages importants pour votre serveur.
- **Dossier des ressources - `resource` (obligatoire) :** Le dossier des ressources contient toutes les ressources prêtes à l’emploi utilisées dans la base de serveur fournie.
- **Fichier SQL - `filenameXY.sql` (optionnel) :** Ce fichier contient la structure de base de données finie nécessaire pour l’utilisation et la communication entre les ressources et la base de données (si utilisée).

Les **données (`server.cfg`, `resources`)** de votre base de serveur téléchargée doivent être uploadées sur votre serveur de jeux. Le **fichier SQL** doit être importé dans la base de données ZAP que nous fournissons.

### Fichiers du serveur
L’upload des données de votre base de serveur se fait via FTP. Si vous ne savez pas encore comment ça marche, jetez un œil à ce guide : [Accès FTP](gameserver-ftpaccess.md)

Connectez-vous à votre serveur de jeux via FTP et allez dans le dossier `fivem`. Créez un dossier pour votre base de serveur s’il n’existe pas encore. Dans cet exemple, le nom **ExampleServer** est utilisé pour la base de serveur finale.

![img](https://screensaver01.zap-hosting.com/index.php/s/HzDrADKgK3rqfKm/download)



Une fois le dossier créé, il faut maintenant uploader les données de la base de serveur. Pour cela, allez dans votre dossier fraîchement créé et uploadez le dossier des ressources ainsi que votre config serveur. Le résultat devrait ressembler à ça :

![img](https://screensaver01.zap-hosting.com/index.php/s/xyAZyt8W5XcxGaF/preview)

 

### Base de données

Si votre base de serveur nécessite aussi l’utilisation d’une base de données, le fichier SQL fourni doit être importé dans votre base de données ZAP. Si vous ne savez pas encore comment faire, regardez ce guide : [Importer un fichier SQL](fivem-sql-file-import.md)

Importez votre fichier SQL dans votre base de données comme expliqué dans le guide. Assurez-vous d’abord d’avoir adapté le contenu du fichier SQL et d’avoir indiqué le bon nom de votre base de données ZAP. Pour cela, remplacez la valeur originale dans la commande Use '...' par le nom de votre base de données ZAP.

:::warning Vérifiez bien le contenu du fichier SQL avant l’import
Assurez-vous que le contenu du fichier SQL a bien été adapté et est entièrement correct avant de l’importer. Sinon, vous aurez ce message d’erreur :

`Access denied for user ‘zapXXXXX-X’@’%’ to database ’originalDatabaseName’` 
:::



## Configuration txAdmin

La préparation pour la configuration du serveur est maintenant terminée. La suite de la configuration, installation et paramétrage du serveur se fait via le processus de configuration de l’interface txAdmin. Le guide suivant explique en détail comment accéder à txAdmin et comment se déroule exactement la configuration : [Configuration txAdmin](fivem-txadmin-setup.md)



### Bienvenue

Choisissez un nom que vous souhaitez utiliser pour votre projet. Ce nom n’est pas destiné à la liste des serveurs mais uniquement à un usage dans l’interface txAdmin et pour les messages Chat/Discord. Continuez avec l’étape Type de déploiement.

![img](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)

### Type de déploiement

Sous Type de déploiement, vous devez maintenant choisir comment vous souhaitez configurer votre serveur. Vous avez les options suivantes : **Recettes populaires**, **Données serveur existantes**, **Modèle URL distant**, et **Modèle personnalisé**. Pour votre cas, choisissez **Données serveur existantes**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oMSBwf6jmHMwtYn/preview)

### Sélection des chemins

Ensuite, il faut spécifier le chemin où se trouve votre base de serveur. La structure du dossier commence comme suit et doit être complétée avec le nom de votre base de serveur définie : `/home/zapXXXXX/gXXXXXXXX/fivem/ExampleServer`.

Vous pouvez simplement copier-coller la structure de dossier indiquée comme dans la capture d’écran, puis ajouter le nom de votre dossier de base de serveur créé précédemment. Le résultat devrait ressembler à ça :

![img](https://screensaver01.zap-hosting.com/index.php/s/eDPeDzSqfMbk7Tg/download)



Cliquez sur **Suivant**. Le fichier de configuration serveur `server.cfg` devrait maintenant être reconnu. Confirmez cela et terminez la configuration classique via le bouton **Enregistrer & Démarrer**.



## Configuration

Il est très probable que le serveur ne puisse pas démarrer car toutes les informations nécessaires ne sont pas correctes. Cela est dû notamment à des informations erronées concernant l’adresse IP et le port du serveur, des infos manquantes pour la base de données pour une connexion réussie, ainsi qu’une clé de licence manquante. C’est pourquoi des ajustements finaux dans la configuration du serveur sont encore nécessaires.

### Détails du serveur

Par défaut, les infos d’adresse IP et de port fournies ne sont soit pas disponibles, soit incorrectes. Assurez-vous que les entrées pour les endpoints sont présentes et correctes dans votre fichier de configuration serveur. La syntaxe est la suivante :

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

Remplacez l’adresse IP (0.0.0.0) et le port (30120) par les infos de votre serveur. Vous pouvez les trouver dans l’administration de votre serveur de jeux.

:::warning Adresse IP/port incorrect
Si les infos que vous avez configurées ne sont pas correctes, vous verrez ce message d’erreur :

```
Line XX: [ZAP-Hosting] the 'endpoint_add_tcp' interface MUST be 'XXX.XXX.XXX.XXX'
Line XX: [ZAP-Hosting] the 'endpoint_add_udp' interface MUST be 'XXX.XXX.XXX.XXX'
```
:::


### Base de données

Pour que votre serveur puisse se connecter à la base de données, une chaîne de connexion MySQL avec les infos de la base doit être spécifiée dans le fichier de configuration serveur `server.cfg`. Par défaut, cela peut ressembler à ceci :

```sql
set mysql_connection_string "mysql://username:password@dataBaseHostname/databaseName?charset=utf8mb4"
```

Que cette chaîne de connexion MySQL existe déjà ou non dans votre configuration dépend de la base de serveur que vous utilisez. Si elle n’existe pas ou ne contient pas les infos nécessaires, vous devez l’ajouter et l’adapter. Vous pouvez consulter les infos de la base de données dans l’administration du serveur de jeux sous Bases de données. Par exemple, cela pourrait ressembler à ça :

```sql
set mysql_connection_string "mysql://zapXXXXXXX-X:yourDatabasePassword@mysql-mariadb-XX-XXX.zap-hosting.com/zapXXXXXX-X?charset=utf8mb4"
```

:::tip Simplifiez-vous la vie
Si vous voulez éviter cette étape, vous pouvez aussi cliquer sur le bouton **[Reconfigurer la chaîne de connexion MySQL](https://screensaver01.zap-hosting.com/index.php/s/zZSmQex6ropFK3X/preview)** dans l’administration du serveur de jeux, en bas de la page dans les paramètres.
:::


### Onesync

Si le fichier de configuration `server.cfg` de votre base de serveur contient des infos concernant **Onesync**, celles-ci doivent être supprimées. Cette gestion se fait désormais via les paramètres de l’interface txAdmin. Pour l’activer, vous trouverez l’option sous **Paramètres ⟶ FXServer**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y4LKM8ZRn4ZSFzp/download)

### Clé de licence

Pour faire tourner votre serveur, vous avez besoin de votre propre clé de licence CFX. Vous pouvez découvrir comment créer votre propre clé dans ce guide : [Clé de licence perso](fivem-licensekey.md)

Ajoutez la clé de licence dans le fichier de configuration serveur :

```
sv_licenseKey "votreCleDeLicenceIci"
```



## Conclusion

Félicitations ! Une fois que vous avez uploadé les fichiers avec succès, terminé la configuration txAdmin et enfin fait les modifications nécessaires dans la configuration du serveur, vous pouvez maintenant démarrer et jouer sur votre serveur avec votre base de serveur.

<InlineVoucher />