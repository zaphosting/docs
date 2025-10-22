---
id: vserver-linux-ssh
title: "VPS : Accès initial avec SSH"
description: "Découvre les clients SSH populaires pour gérer tes serveurs Linux via console et apprends à te connecter en toute sécurité avec Putty → En savoir plus maintenant"
sidebar_label: Accès initial (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

Les produits serveur Linux n’incluent pas d’interface graphique de gestion par défaut, c’est pourquoi la connexion et la gestion se font via un client SSH (console). Il existe une large gamme de clients SSH disponibles. Voici un aperçu des clients SSH connus / souvent utilisés. 



| Client SSH | Systèmes d’exploitation supportés | Open-Source |                           Téléchargement                           |
| :--------: | :--------------------------: | :---------: | :----------------------------------------------------------: |
|   Putty    |        Windows, Linux        |     Oui      |               [Clique ici](https://www.putty.org/)                |
|   Kitty    |        Windows, Linux        |     Oui      |        [Clique ici](http://www.9bis.net/kitty/)                   |
| MobaXterm  |        Windows, Linux        |     Oui      |           [Clique ici](https://mobaxterm.mobatek.net/)            |
| SecureCRT  |     Windows, Linux, Mac      |    Non     | [Clique ici](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
| mRemoteNG  |           Windows            |     Oui      |           [Clique ici](https://mremoteng.org/download)            |


<InlineVoucher />

## Adresse IP & accès

Dans ce qui suit, la connexion avec le client SSH Putty est expliquée. Dans la fenêtre de configuration, l’adresse IP du serveur et le port SSH 22 sont saisis pour le **nom d’hôte**. Ensuite, l’établissement de la connexion peut être lancé via le bouton **Open**.



![](https://screensaver01.zap-hosting.com/index.php/s/wyfbo8dENbX3T9E/preview)



:::info
La connexion SSH par mot de passe est désactivée par défaut. Si tu souhaites te connecter avec un mot de passe, tu dois d’abord activer cette option sous **Accès & Sécurité**.
:::



![](https://screensaver01.zap-hosting.com/index.php/s/N7ZL8MZfe55T7zR/preview)



:::info
Lors de la première connexion au serveur, un message de sécurité de Putty apparaît, t’informant qu’aucune clé d’hôte n’a encore été mise en cache dans le registre. Tu peux confirmer avec **Yes** si tu ne veux plus recevoir ce message à chaque connexion. 
:::

 

Cela ouvre la console SSH et demande un **nom d’utilisateur** et un **mot de passe**. Le nom d’utilisateur est "**root**". Le mot de passe se trouve dans l’interface web sous "**Accès & Sécurité**" ou peut y être défini.



![](https://screensaver01.zap-hosting.com/index.php/s/X8ykHmkYFa826aM/preview)





## Administration via SSH

Pour une utilisation optimale du client SSH, il est essentiel de connaître les commandes de base. Voici un aperçu rapide avec toutes les commandes importantes et leur signification :


### Gestion des comptes

| Commande  |                Description                |            Syntaxe            |
| :-----: | :----------------------------------------: | :--------------------------: |
| useradd |          Créer un nouvel utilisateur          | useradd [options] [options] |
| usermod |      Modifier un utilisateur existant       | usermod [options] [options] |
| userdel |        Supprimer un utilisateur existant        | userdel [options] [options] |
| passwd  | Changer le mot de passe d’un utilisateur existant |      passwd [options]       |



### Gestion du système

| Commande  |                         Description                         | Syntaxe                                       |
| :-----: | :----------------------------------------------------------: | -------------------------------------------- |
|   top   | Vue d’ensemble de la charge, des processus et autres infos (similaire au Gestionnaire des tâches Windows)  | top                                          |
|   df    |            Affiche l’utilisation des disques (partition)            | df -h                                        |
|   du    |          Affiche la consommation disque (répertoire)           | du -sh *                                     |
|  free   | Utilisation mémoire du système. Divisée en RAM et espace SWAP. | free                                         |
|  kill   |  Termine le processus avec l’ID de processus (PID) transmis   | kill [ID]                                    |
| killall |        Termine tous les processus portant le nom donné        | killall [nom]                               |
|   mv    |       Déplacer fichiers ou répertoire vers un autre emplacement        | mv cheminSource cheminDestination                        |
|  mkdir  |                    Créer un nouveau répertoire                    | mkdir nomRépertoire                          |
| service |    Démarrer, arrêter, redémarrer un service et vérifier son statut     | service NomService start/stop/restart/status |
| reboot  |                      Redémarrer le système                        | reboot                                       |



### Gestion des fichiers

| Commande | Description | Syntaxe
| ------ | ------------------------------------------ | ---------------------------------------- |
| ls | Affiche les fichiers et dossiers dans un répertoire | ls |
| cd | changer de répertoire | cd [OPTION] RÉPERTOIRE |
| cp | Copier fichiers ou répertoires | cp [OPTIONS] SOURCE DESTINATION |
| mv | déplacer fichier ou répertoire | mv [OPTION] SOURCE DESTINATION |
| mkdir | Créer un nouveau répertoire | mkdir [OPTION] NOM_RÉPERTOIRE |
| rmdir | Supprimer un répertoire existant | rmdir [OPTION] RÉPERTOIRE
| find | parcourir le système de fichiers | find [OPTIONS] [RÉPERTOIRE] [ACTIONS] |
| grep | Rechercher dans des fichiers texte | grep [OPTIONS] MOTIF_RECHERCHE [FICHIER(S)] |



### Administration réseau

| Commande | Description | Syntaxe
| -------- | ------------------------------------------------- | ----------------------------------------- |
| ip | Interroger et configurer les interfaces réseau | ip [OPTIONS] OBJET [COMMANDE [ARGUMENTS]] |
| netstat | Interroger le statut des interfaces réseau | netstat [OPTIONS] |
| nslookup | Interroger les informations DNS | nslookup |
| ping | Vérifier la connexion réseau | ping [OPTIONS] DESTINATION


<InlineVoucher />