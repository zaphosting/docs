---
id: dedicated-linux-rsync
title: "Serveur dédié : Sauvegarder des serveurs Linux avec Rsync"
description: "Découvrez comment créer des sauvegardes locales et distantes efficaces avec Rsync pour une synchronisation et une protection fiables des données → En savoir plus maintenant"
sidebar_label: Créer des sauvegardes avec Rsync
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les sauvegardes peuvent être réalisées avec l’outil Rsync. Elles peuvent être copiées sur le système local lui-même vers un autre répertoire/disque ou vers un système distant.  

## Copier des données vers un autre répertoire ou disque local :

:::info
Attention : La première exécution peut prendre beaucoup plus de temps que les suivantes, selon la quantité de données. En effet, la première fois Rsync synchronise toutes les données, à partir de la deuxième fois, seules les données modifiées seront synchronisées. 
:::
>On crée donc une sauvegarde incrémentale.  

## Étape 1

Rsync peut être installé avec la commande suivante :

```
apt install rsync
```

Une fois installé, il peut être utilisé directement. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Sauvegarde quotidienne vers un répertoire/disque local" label="Sauvegarde quotidienne vers un répertoire/disque local">
## Étape 2

Dans cet exemple, le dossier Client sous /home doit être synchronisé avec le dossier Backup sous /home. 

Cela peut se faire avec la commande suivante : 

```
rsync -arz /home/Client /home/Backup
```
-a=Archivage, les attributs seront copiés
<br/>
-r=Récursif, les sous-dossiers sont aussi synchronisés
<br/>
-z=Compression, selon la quantité/taille des données, compression activée


Le dossier a été synchronisé avec succès.

Si un fichier, etc. dans le dossier client est supprimé maintenant, il restera dans le dossier de sauvegarde.  
Mais comme les fichiers doivent toujours être synchronisés 1:1, la commande rsync peut facilement être modifiée, ce changement garantira que les données qui ne sont plus présentes dans le dossier client seront aussi supprimées du dossier de sauvegarde. 

La commande modifiée est : 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=Archivage, les attributs seront copiés
<br/>
-r=Récursif, les sous-dossiers sont aussi synchronisés
<br/>
-z=Compression, selon la quantité/taille des données, compression activée
<br/>
--delete= Supprime les données qui n’existent plus dans la source mais qui existent encore dans la cible

## Étape 3

Pour ne pas avoir à exécuter la commande manuellement à chaque fois, elle peut simplement être placée dans un cronjob.  
Par exemple, une sauvegarde doit être créée tous les jours à 3h du matin : 

Ouvrir crontab -e :

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

Avec le numéro 1, "nano" peut être utilisé comme éditeur.
Avec le numéro 2, "vim" peut être utilisé comme éditeur.  

Après avoir ouvert le fichier avec par exemple Nano, un crontab peut être généré et saisi.  
Un crontab peut être créé avec ce [Générateur](https://crontab-generator.org/). 

Le crontab saisi ressemble alors à ceci : 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Tous les jours à 3h du matin, la commande est exécutée et une sauvegarde est créée. 

</TabItem>
<TabItem value="Sauvegarde quotidienne vers un système distant" label="Sauvegarde quotidienne vers un système distant">

## Étape 4

Dans cet exemple, le dossier Client sous /home doit être synchronisé avec le dossier Backup sur un système distant. La connexion doit se faire via une clé SSH, afin que la sauvegarde puisse aussi être automatisée.  
>Important : Rsync doit aussi être installé sur le serveur distant.  
>```
>apt install rsync
>```

Par exemple, la commande suivante peut être utilisée pour sauvegarder les données sur l’hôte distant (personnalisation requise) : 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=Archivage, les attributs seront copiés
<br/>
-r=Récursif, les sous-dossiers sont aussi synchronisés
<br/>
-z=Compression, selon la quantité/taille des données, compression activée
<br/>
-e=Spécifie le port SSH (par défaut 22)
<br/>
Spécifie la clé SSH (chemin)("ssh -i /home/sshkey/keybackup")= ssh -i /[chemin vers la clé]
<br/>
Spécifie le répertoire à sauvegarder (/home/client/)= /[répertoire]
<br/>
Hôte distant(root@123.123.123.123:)= Nom d’utilisateur sur l’hôte distant et adresse : nom@IP/Domaine
<br/>
Répertoire cible pour les données sur l’hôte distant(:/home/Backup/Home-Server1/)= :/[chemin vers le répertoire]

Le dossier/fichiers ont été synchronisés/enregistrés avec succès dans le répertoire distant après exécution de la commande.
  

Si un fichier, etc. est supprimé dans le dossier client, il restera dans le dossier de sauvegarde sur l’hôte distant.  
Mais comme les fichiers doivent toujours être synchronisés 1:1, la commande rsync peut facilement être modifiée pour supprimer les données qui ne sont plus présentes dans le dossier client du dossier de sauvegarde sur l’hôte distant. 

La commande modifiée est :

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=Archivage, les attributs seront copiés
<br/>
-r=Récursif, les sous-dossiers sont aussi synchronisés
<br/>
-z=Compression, selon la quantité/taille des données, compression activée
<br/>
--delete= Supprime les données qui n’existent plus dans la source mais qui existent encore dans la cible
<br/>
-e=Spécifie le port SSH (par défaut 22)
<br/>
Spécifie la clé SSH (chemin)("ssh -i /home/sshkey/keybackup")= ssh -i /[chemin vers la clé]
<br/>
Spécifie le répertoire à sauvegarder (/home/client/)= /[répertoire]
<br/>
Hôte distant(root@123.123.123.123:)= Nom d’utilisateur sur l’hôte distant et adresse : nom@IP/Domaine
<br/>
Répertoire cible pour les données sur l’hôte distant(:/home/Backup/Home-Server1/)= :/[Chemin vers le répertoire cible]

## Étape 5

Pour ne pas avoir à exécuter la commande manuellement à chaque fois, elle peut simplement être placée dans un cronjob.  
Par exemple, une sauvegarde doit être créée tous les jours à 3h du matin : 

Ouvrir crontab -e :

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

Avec le numéro 1, "nano" peut être utilisé comme éditeur.
Avec le numéro 2, "vim" peut être utilisé comme éditeur.  

Après avoir ouvert le fichier avec par exemple Nano, un crontab peut être généré et saisi.  
Un crontab peut être créé avec ce [Générateur](https://crontab-generator.org/). 

Le crontab saisi ressemble alors à ceci : 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Tous les jours à 3h du matin, la commande est exécutée et une sauvegarde est créée. 

</TabItem>
</Tabs>