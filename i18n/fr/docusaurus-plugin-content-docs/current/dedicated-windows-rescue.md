---
id: dedicated-windows-rescue
title: "Serveur dédié : Récupérez vos fichiers avec System Rescue"
description: "Découvrez comment récupérer des données et créer des sauvegardes depuis un serveur non bootable avec SystemRescue ISO et un transfert de fichiers sécurisé → En savoir plus maintenant"
sidebar_label: System Rescue (Sauvegarde)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Votre serveur ne démarre plus ? Vous êtes bloqué hors de votre système ou vous souhaitez créer une sauvegarde avant de faire des modifications ?  
En démarrant votre serveur avec l’**ISO SystemRescue**, vous pouvez toujours accéder à vos disques, restaurer des fichiers importants et créer des sauvegardes localement. Ça marche même si le système d’exploitation d’origine n’est plus accessible.

Pour transférer les données récupérées en toute sécurité, vous pouvez utiliser **SFTP (Secure File Transfer Protocol)**. Cette méthode vous permet de copier des fichiers depuis le système de secours vers votre ordinateur local ou un autre serveur via une connexion sécurisée et chiffrée.

<InlineVoucher />

## Préparation

Pour effectuer la sauvegarde des données, vous utiliserez l’**ISO SystemRescue version 12.01**.  
Commencez par accéder à l’interface de votre serveur dédié et rendez-vous dans la section **Installation initiale**.

Sélectionnez l’ISO **SystemRescue 12.01** parmi les options disponibles. Après avoir choisi la bonne ISO, cliquez sur **Démarrer depuis l’ISO** pour lancer le processus de boot. Une fois le serveur démarré depuis l’ISO, connectez-vous via l’[interface iLO](dedicated-ilo.md) pour continuer.

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)

Dans l’**interface de gestion iLO**, ouvrez la **console HTML** pour accéder à l’affichage distant de votre serveur. Une fois la console active, vous verrez le menu de démarrage de l’**ISO SystemRescue**. Sélectionnez ici l’option pour démarrer avec les **paramètres par défaut**.

Cela garantit que SystemRescue démarre avec la configuration standard recommandée, offrant un environnement stable et prêt à l’emploi pour la maintenance système ou la sauvegarde des données.

![img](https://screensaver01.zap-hosting.com/index.php/s/gzLJxw9FWZs4AJ7/download)

## Monter le(s) disque(s)

Avant de monter un disque, il est important d’avoir une vue d’ensemble des périphériques de stockage disponibles et de leurs partitions. Vous pouvez faire ça avec la commande suivante :

```
fdisk -l
```

Cette commande liste tous les disques détectés avec les détails de leurs partitions. Le résultat inclut :

- Les périphériques de stockage connectés (ex : `/dev/sda`, `/dev/sdb`),  
- La taille de chaque disque,  
- Les types de partitions,  
- Les partitions disponibles (ex : `/dev/sda1`, `/dev/sda2`, …),  
- Le type de système de fichiers (si détecté).

Dans cet exemple, le disque `/dev/sda` a trois partitions : `/dev/sda1`, `/dev/sda2` et `/dev/sda3`. Assurez-vous de sélectionner la bonne partition avant de la monter. La sortie de `fdisk -l` vous aide à éviter les erreurs en montrant clairement quel disque contient quelles données. Exemple :

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device     Boot   Start       End   Sectors  Size Id Type
/dev/sda1  *       2048    206847    204800  100M  7 HPFS/NTFS/exFAT
/dev/sda2        206848 232935855 232728008  111G  7 HPFS/NTFS/exFAT
/dev/sda3     232935856 234373119   1431264  699M 27 Hidden NTFS WinRE
```

Une fois la bonne partition identifiée, l’étape suivante est de créer un dossier qui servira de point de montage. C’est l’endroit où la partition sera accessible. Ensuite, montez la partition désirée dans ce dossier. Il est recommandé de monter en **mode lecture seule** pour garantir un accès sécurisé aux données.

Pour créer le point de montage et attacher la partition, utilisez les commandes suivantes :

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Remplacez `/dev/sdaX` par l’identifiant correct de la partition que vous avez trouvé avec `fdisk -l`. Dans cet exemple, `/dev/sda2` serait la bonne partition pour notre disque.

:::tip Partitions Windows en veille prolongée

Linux ne peut pas ouvrir en toute sécurité les partitions Windows qui sont en veille prolongée ou affectées par le démarrage rapide (Fast Boot). Pour éviter toute perte ou corruption de données, montez toujours ces partitions **en mode lecture seule**.

:::

## Configuration du pare-feu

Pour des raisons de sécurité, SystemRescue active son pare-feu par défaut. Cela signifie que toutes les connexions entrantes sont bloquées pour protéger le système contre les accès non autorisés.

Cependant, ici, vous devez autoriser une connexion depuis votre machine locale vers le serveur SFTP qui tourne sur SystemRescue. Pour cela, vous devez soit configurer le pare-feu pour autoriser le trafic SFTP, soit le désactiver temporairement.

Si vous travaillez dans un réseau de confiance, la solution la plus simple et rapide est d’arrêter le service pare-feu dans SystemRescue avec la commande suivante :

```
systemctl stop iptables
```

## Définir le mot de passe root

Le client SFTP doit s’authentifier avec un nom d’utilisateur et un mot de passe pour accéder aux données du serveur SFTP. Le compte root du système est utilisé pour que le client puisse accéder aux fichiers visibles dans SystemRescue. Par défaut, l’authentification en root n’est pas autorisée dans SystemRescue. Il faut définir un mot de passe pour permettre au client de s’authentifier. Définissez un mot de passe avec la commande suivante :

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```

## Transfert des données

Vous êtes maintenant prêt à sauvegarder vos données. Pour cela, ouvrez simplement le client FTP de votre choix et établissez une connexion à votre serveur. Assurez-vous de sélectionner `SFTP` comme protocole de transfert. Pour le nom d’hôte, entrez l’`adresse IP` de votre serveur, utilisez le port `21` et connectez-vous avec le nom d’utilisateur `root` et le `mot de passe` que vous avez défini précédemment.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Lors de votre première connexion à un serveur via **SFTP**, WinSCP affiche cette alerte de sécurité. L’avertissement apparaît parce que la **clé d’hôte** du serveur n’est pas encore enregistrée dans votre cache local.

Dans ce cas, si vous êtes sûr que l’adresse IP est correcte et que vous avez lancé cette connexion volontairement, **il est sûr de faire confiance au serveur**. Cliquez simplement sur **"Oui"** pour confirmer. Cela ajoutera la clé du serveur à votre cache et vous ne serez plus dérangé pour ce serveur à l’avenir.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Une fois connecté, naviguez jusqu’au **répertoire rescue** que vous avez créé plus tôt. Vous aurez alors accès à vos fichiers et pourrez commencer à les télécharger sur votre machine locale. Parcourez simplement les dossiers, sélectionnez les données à sauvegarder et transférez-les en toute sécurité via SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Conclusion

Vous avez maintenant réussi à récupérer et sauvegarder vos fichiers importants.  
Cela signifie que vos données sont en sécurité et prêtes à être restaurées quand vous le souhaitez. Vous pouvez maintenant poursuivre avec d’autres actions, comme réinstaller votre serveur, réparer le système ou migrer vos données vers un nouvel environnement.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />