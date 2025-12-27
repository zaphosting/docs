---
id: account-backup-storage
title: "Stockage des Sauvegardes : Stocker, Restaurer et Télécharger vos Sauvegardes"
description: "Découvrez comment stocker et gérer vos sauvegardes en toute sécurité avec des options de stockage évolutives pour une restauration et un accès faciles → En savoir plus maintenant"
sidebar_label: Stockage des Sauvegardes
---

## Introduction

Le Stockage des Sauvegardes offre un emplacement centralisé pour stocker les sauvegardes créées à partir de vos services. Il vous permet de conserver en toute sécurité les fichiers de sauvegarde, de les restaurer directement sur vos services, ou de les télécharger pour un stockage local.

Chaque compte inclut 10 Go d’espace de Stockage des Sauvegardes gratuit. Si vous avez besoin de plus de capacité, le stockage peut être étendu jusqu’à 200 Go moyennant un coût supplémentaire.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZBy57k2pbTcteKg/preview)



## Fonctionnalités du stockage des sauvegardes

Les sauvegardes sont créées directement via l’interface web du service concerné. Une fois une sauvegarde générée, elle est automatiquement stockée dans le Stockage des Sauvegardes. Les sauvegardes stockées peuvent être utilisées de deux façons :

- Restaurées directement sur le service correspondant via sa fonction de sauvegarde
- Téléchargées depuis le Stockage des Sauvegardes pour une utilisation locale



## Accéder aux fichiers de sauvegarde

Les fichiers de sauvegarde deviennent disponibles dans le Stockage des Sauvegardes immédiatement après leur création. En plus de la restauration via l’interface du service, les fichiers peuvent aussi être accessibles via une connexion FTP.



## Connexion au Stockage des Sauvegardes via FTP

Pour accéder au Stockage des Sauvegardes via FTP, installez un client FTP comme FileZilla pour votre système d’exploitation et ouvrez l’application après l’installation. Une fois ouverte, l’interface de FileZilla s’affichera :

![img](https://screensaver01.zap-hosting.com/index.php/s/4CrofjFEe7TxYCR/preview)

Pour établir la connexion, saisissez les données d’accès FTP dans les champs en haut de FileZilla. Les détails de connexion nécessaires se trouvent dans l’interface web, sur la page du Stockage des Sauvegardes. Ouvrez la section Stockage des Sauvegardes et cliquez sur l’icône située en haut de la barre de menu.

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

Sur la page du Stockage des Sauvegardes, les données d’accès FTP sont affichées dans la section mise en surbrillance ci-dessous. Saisissez les informations suivantes dans FileZilla :

- **Serveur** : adresse IP
- **Nom d’utilisateur** : nom d’utilisateur FTP
- **Mot de passe** : mot de passe FTP

Le port n’a pas besoin d’être spécifié s’il est réglé sur **21**. Cliquez sur **Connexion** pour établir la connexion. Après une connexion réussie, les sauvegardes créées par vos services seront visibles dans les répertoires correspondants.

Saisissez l’adresse IP dans FileZilla dans le champ **Serveur**, le nom d’utilisateur dans le champ **Nom d’utilisateur** et le mot de passe dans le champ **Mot de passe**. Vous n’avez pas besoin d’indiquer le port s’il est égal à *21*. Cliquez maintenant sur **Connexion**.  
Si la connexion réussit, vous trouverez les sauvegardes créées par vos services dans les dossiers respectifs.

![img](https://screensaver01.zap-hosting.com/index.php/s/9PAFpxWHiJx9LnT/preview)



## Messages et journaux de sauvegarde

La section **Messages** dans la barre latérale affiche un journal des actions liées aux sauvegardes. Elle montre quels événements de sauvegarde ont été déclenchés, pour quel service ou package, et à quelle heure.

![img](https://screensaver01.zap-hosting.com/index.php/s/nFfDMfQBNeE4Jt4/preview)