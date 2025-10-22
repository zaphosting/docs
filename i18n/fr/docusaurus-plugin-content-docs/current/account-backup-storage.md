---
id: account-backup-storage
title: Stockage des sauvegardes
description: "Découvrez comment stocker et gérer vos sauvegardes en toute sécurité avec des options de stockage évolutives pour une restauration et un accès faciles → En savoir plus maintenant"
sidebar_label: Stockage des sauvegardes
---

## Qu’est-ce que le stockage des sauvegardes ?
Le stockage des sauvegardes offre à nos clients la possibilité de créer des sauvegardes via leurs services. Chaque client dispose d’un espace gratuit de 10 Go sur son stockage de sauvegardes, qu’il peut utiliser entièrement. Cependant, pour un petit supplément, une extension du stockage jusqu’à 200 Go peut être réservée.

## Comment accéder à mes fichiers de sauvegarde ?
Les fichiers de sauvegarde sont placés sur le stockage des sauvegardes dès qu’une sauvegarde est créée via l’interface web. Les fichiers peuvent ensuite être restaurés sur le service concerné en utilisant la fonction de sauvegarde de ce service ou téléchargés depuis le stockage des sauvegardes via une connexion FTP.

### Se connecter au stockage des sauvegardes via FTP
Pour vous connecter au stockage des sauvegardes via FTP, téléchargez et installez le programme [FileZilla](http://www.filezilla.de/download.htm) pour votre système d’exploitation. Une fois l’installation terminée, ouvrez le programme.
Vous devriez maintenant voir l’interface de FileZilla :

![2022-04-08_04-41](https://screensaver01.zap-hosting.com/index.php/s/XHa7gfPBKcGgYj4/preview)

Pour vous connecter à votre stockage des sauvegardes, saisissez les données de connexion dans les champs de texte en haut.
Vous trouverez ces données en allant sur la page de votre stockage des sauvegardes dans l’interface web.
Cliquez sur cette icône en haut de la barre de menu :

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

Sur la page du stockage des sauvegardes, vous trouverez alors vos données d’accès pour la connexion FTP dans la boîte marquée sur l’image :

![2022-04-08_04-39](https://screensaver01.zap-hosting.com/index.php/s/pziwNeT9jmFC5Ax/preview)

Saisissez l’adresse IP dans FileZilla dans le champ **Serveur**, l’utilisateur dans le champ **Nom d’utilisateur** et le mot de passe dans le champ **Mot de passe**. Vous n’avez pas besoin d’indiquer le port s’il est égal à *21*. Cliquez maintenant sur **Connexion**.
Si la connexion réussit, vous trouverez les sauvegardes créées par vos services dans les dossiers respectifs.

![2022-04-08_04-41_1](https://screensaver01.zap-hosting.com/index.php/s/K9MZHf8napDMCjT/preview)

![2022-04-08_04-41_2](https://screensaver01.zap-hosting.com/index.php/s/ca7DkJ2T6DpxTFH/preview)

Les sauvegardes sont sous forme compressée en fichiers **\*.tar.gz** dans les dossiers respectifs et peuvent être décompressées avec des programmes comme WinRAR ou 7-Zip.

## Message d’erreur "Transfert de connexion interrompu"

Si le message d’erreur "Transfert de connexion interrompu : ECCONABORTED - Connexion interrompue" apparaît lors de la connexion ou du transfert, le mode de transfert peut être changé de "**Passif**" à "**Actif**".
Les étapes suivantes montrent comment modifier cela dans les paramètres de FileZilla.

Cliquez sur "**Édition**" dans votre client FileZilla, puis ouvrez directement les "**Paramètres...**" :

![2022-04-08_05-16](https://screensaver01.zap-hosting.com/index.php/s/AgrmP6i5aAEr2kr/preview)

Ensuite, la fenêtre "**Paramètres**" s’ouvre. Là, cliquez sur "**FTP**" pour voir les paramètres de la connexion FTP.
Par défaut, le mode de transfert est réglé sur "**Passif**", vous pouvez sélectionner le bouton radio "**Actif**" et confirmer le changement avec "**OK**".

![2022-04-08_05-17](https://screensaver01.zap-hosting.com/index.php/s/REPQieY3Zbm8arM/preview)

Dès que c’est fait, vous pouvez retenter la connexion FTP.

## Messages
Dans la barre latérale, dans le sous-élément *Messages*, le journal s’affiche, montrant sous quel déclencheur/raison quelle action a été exécutée pendant les sauvegardes pour quel package et quand.

![2022-04-08_04-42](https://screensaver01.zap-hosting.com/index.php/s/GwtGHoDL7d9r3Ds/preview)