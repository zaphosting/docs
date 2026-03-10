---
id: vserver-windows-ip-configuration
title: "VPS : Configuration IP (Windows)"
description: "Apprends à configurer les paramètres IP sur un VPS Windows → Découvre-le maintenant"
sidebar_label: Configurer les adresses IP
services:
- vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Configurer les adresses IP sur ton VPS Windows te permet de contrôler comment ton serveur communique au sein du réseau. Cela inclut l’attribution des adresses IP, la définition de la passerelle par défaut, et la configuration des serveurs DNS nécessaires à la connectivité réseau.

Une configuration IP correcte est essentielle pour les serveurs qui hébergent des services comme des serveurs de jeux, des serveurs web, des bases de données ou des systèmes d’accès à distance, car elle garantit une communication réseau stable et une accessibilité fiable.

:::warning Serveur inaccessible à cause d’une connexion internet manquante ?
Si ton serveur devient inaccessible à cause d’une mauvaise configuration réseau ou d’une connexion internet absente, l’accès à distance via RDP peut ne plus fonctionner. Utilise la [console VNC](vserver-vnc.md) dans l’interface web pour te connecter à ton serveur et corriger la configuration réseau.
:::

<InlineVoucher />

## Préparation

Avant de configurer les adresses IP, assure-toi d’avoir les informations suivantes à portée de main :

- Adresse IP que tu souhaites attribuer
- Masque de sous-réseau
- Passerelle par défaut
- Serveurs DNS

Tu peux retrouver ces infos dans l’interface web. Pour cela, ouvre ta **gestion VPS** et rends-toi dans **Adresses IP**.

## Configuration

Connecte-toi à ton VPS via **Remote Desktop (RDP)**. Une fois connecté, ouvre le **Panneau de contrôle**. Navigue vers **Panneau de contrôle → Réseau et Internet → Centre Réseau et partage**.

Clique sur **Modifier les paramètres de la carte** à gauche. Tu verras les interfaces réseau disponibles. Clique droit sur ton adaptateur réseau actif (généralement **Ethernet**) et sélectionne **Propriétés**. Dans la liste, choisis **Protocole Internet version 4 (TCP/IPv4)** puis clique sur **Propriétés**.

![img](https://screensaver01.zap-hosting.com/index.php/s/3EpqZXg5pgWHoLK/download)

Sélectionne **Utiliser l’adresse IP suivante** et saisis les valeurs demandées :

- **Adresse IP** → Ton adresse IP attribuée
- **Masque de sous-réseau** → Ton masque de sous-réseau
- **Passerelle par défaut** → Ta passerelle
- **Serveurs DNS →** 1.1.1.1, 8.8.8.8

Configure ensuite les serveurs DNS en sélectionnant **Utiliser les adresses de serveur DNS suivantes** et en entrant tes serveurs DNS préférés. Une fois toutes les valeurs saisies, valide la configuration avec **OK** et ferme les fenêtres restantes.

## Vérification

Pour vérifier la configuration, ouvre l’**Invite de commandes** et lance :
```
ipconfig
```
![img](https://screensaver01.zap-hosting.com/index.php/s/AK8F3jppqL8xnsx/download)

Cette commande affiche toutes les interfaces réseau et leur configuration IP actuelle. Cherche ton adaptateur réseau actif et vérifie que l’**Adresse IPv4** correspond bien à l’adresse IP que tu as configurée. Si l’adresse IP correcte apparaît, la configuration a été appliquée avec succès.

## Conclusion

Félicitations ! Tu as configuré avec succès les paramètres IP sur ton VPS Windows. Si tu as d’autres questions ou besoin d’aide, notre équipe support est dispo tous les jours pour te filer un coup de main.

<InlineVoucher />