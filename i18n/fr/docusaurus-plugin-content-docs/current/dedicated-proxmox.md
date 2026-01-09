---
id: dedicated-proxmox
title: "Serveur dédié : Installation de Proxmox VE"
description: "Découvrez comment configurer et gérer Proxmox VE pour la virtualisation d’entreprise avec des outils intégrés et une haute disponibilité → En savoir plus maintenant"
sidebar_label: Installer Proxmox
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Proxmox Virtual Environment est une plateforme complète et open-source de gestion de serveurs pour la virtualisation d’entreprise. Elle intègre étroitement l’hyperviseur KVM et les conteneurs Linux (LXC), les fonctionnalités de stockage et de réseau définies par logiciel, le tout sur une seule plateforme. Avec l’interface utilisateur web intégrée, tu peux gérer facilement les machines virtuelles (VM) et les conteneurs, la haute disponibilité pour les clusters, ou encore les outils intégrés de reprise après sinistre.



## Préparation

Pour commencer, tu dois monter et démarrer depuis l’installateur ISO de Proxmox VE (Virtual Environment) sur ton serveur dédié. Il y a deux façons de faire : la méthode la plus simple via le panneau web de ton serveur dédié, ou la méthode un peu plus longue via le panneau iLO de ton serveur.



### Monter l’ISO via l’interface web
Rends-toi dans la section **Installation initiale** sur le panneau web de ton serveur dédié. Ici, tu dois d’abord cliquer sur le bouton vert **activer iLO**. Patiente un instant jusqu’à ce que les sections deviennent visibles. Il se peut que tu doives rafraîchir la page pour qu’elle charge complètement.

![](https://screensaver01.zap-hosting.com/index.php/s/r6XNqDqQeEec7wW/preview)

Ensuite, sélectionne un ISO **Proxmox VE** dans le menu déroulant. On te recommande d’utiliser la dernière version pour rester à jour avec les nouveautés. Clique ensuite sur le bouton vert **Insérer**.

![](https://screensaver01.zap-hosting.com/index.php/s/xXfWzqtE6JMG9Ka/preview)

Enfin, tu dois redémarrer ton serveur dédié pour pouvoir démarrer depuis l’ISO. Tu peux le faire via le bouton de redémarrage sous l’étape 3.



### Monter l’ISO via l’iLO
Prépare ton ISO Proxmox VE en te rendant sur le [site de téléchargement Proxmox](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso). Tu dois ensuite l’uploader et le monter sur ton serveur dédié en suivant les guides [iLO](dedicated-ilo.md) & [ISO perso](dedicated-iso.md) qui expliquent comment te connecter et uploader ton ISO personnalisé.



## Installation & configuration

:::important
Assure-toi d’avoir redémarré ton serveur après avoir importé et monté le nouvel ISO avant de continuer.
:::

Maintenant que ton ISO est monté, tu dois démarrer dessus. Tu peux le faire via la **console distante HTML5** sur ton panneau iLO. Depuis l’interface web, clique sur le lien **Ouvrir ici** sous `Accès web iLO` qui t’emmènera sur ton panneau, puis connecte-toi avec les identifiants fournis.

:::note
Ton navigateur peut afficher un avertissement de sécurité, ignore-le et accepte pour continuer.
:::

Une fois connecté, dans la section **Vue d’ensemble**, clique sur le lien **HTML5** sous la section `Console distante intégrée`. Cela ouvrira une fenêtre en superposition.

![](https://screensaver01.zap-hosting.com/index.php/s/HPWJ3oksyo3SdW6/preview)

Tu devrais être dans le processus d’installation de Proxmox. Utilise les touches `flèche`, `entrée` et `échapp` pour naviguer. On te conseille de choisir la version **Graphique** de Proxmox, car c’est celle suivie dans ce guide.

![](https://screensaver01.zap-hosting.com/index.php/s/MGqm3EAxYc8EBQw/preview)

Patiente quelques secondes que l’installation continue. Tu devras accepter le contrat de licence Proxmox via le bouton **J’accepte** en bas à droite. La page suivante te demande de sélectionner le disque cible pour ton environnement. Si tu utilises un seul disque, les réglages par défaut sont adaptés, tu peux simplement continuer avec le bouton **Suivant**.

![](https://screensaver01.zap-hosting.com/index.php/s/pZ8FiFJT6tJKFsS/preview)

:::note
Si tu souhaites configurer un RAID (certains de nos serveurs dédiés ont deux disques), utilise le bouton **Options** pour choisir ton mode `RAID`. On recommande `RAID1` qui fait un miroir des deux disques.

![](https://screensaver01.zap-hosting.com/index.php/s/WqiYPowiLttzoeZ/preview)
:::

La section suivante concerne des réglages généraux comme la langue et la disposition du clavier, qui devraient être détectés automatiquement. Remplis-les puis continue.

![](https://screensaver01.zap-hosting.com/index.php/s/As4J4NzytcZFrHp/preview)

Maintenant, tu dois définir un mot de passe solide et une adresse email. L’email sera utilisé par ton panneau pour t’envoyer des alertes et notifications importantes.

:::important
N’oublie pas ce mot de passe, c’est celui que tu utiliseras pour te connecter au panneau après l’installation !
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QAEaygacSXNfgot/preview)

La dernière étape est la configuration réseau. Sélectionne l’interface de gestion disponible et un nom d’hôte pour ton serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/EZDzsaq4aXpP4we/preview)

Va ensuite dans la section **Adresses IP** sur le panneau web de ton serveur dédié pour trouver une IP disponible.

![](https://screensaver01.zap-hosting.com/index.php/s/KQC4DLj6LxTX4io/preview)

Choisis une adresse IP que tu veux utiliser pour ton panneau Proxmox. Renseigne l’adresse IP, le masque réseau et la passerelle dans l’installateur avec les infos du panneau web. Pour le serveur DNS, tu peux mettre `8.8.8.8` qui est le DNS public de Google.

Une fois tout rempli, clique sur **Suivant** et vérifie toutes les options dans la page de résumé. Si tout est bon, clique sur **Installer** pour lancer l’installation !

## Accéder au panneau
Une fois l’installation terminée et le système redémarré, sélectionne l’option **Proxmox Environment GNU/Linux** dans le menu et appuie sur **Entrée**. Une fois chargé, tu devrais voir un message de bienvenue de Proxmox dans la console avec l’adresse IP et le lien pour accéder à ton panneau via un navigateur (celui que tu as spécifié). Va sur ce lien.

:::note
Ton navigateur peut encore afficher un avertissement de sécurité, ignore-le et accepte pour continuer.
:::

Si le lien n’est pas accessible, cela signifie que tu as probablement fait une erreur dans la configuration réseau lors de l’installation.

Une fois sur le panneau, connecte-toi avec le nom d’utilisateur `root` et le mot de passe que tu as défini pendant l’installation. Assure-toi que le **Domaine** est réglé sur `Authentification standard Linux PAM`.

![](https://screensaver01.zap-hosting.com/index.php/s/iKcErA9Bx5LpB3n/preview)

Une fois connecté, tu peux ignorer le message d’abonnement en cliquant sur le bouton **OK**. Et voilà, tu as installé Proxmox VE sur ton serveur dédié et tu es connecté à ton panneau !



## Crée ta première VM
Cette section te donne les étapes de base pour créer ta première machine virtuelle (VM) via ton panneau Proxmox. Va dans `local (panneau)` et sélectionne la section **Images ISO**. Ici, tu peux soit uploader manuellement un fichier `.iso`, soit laisser Proxmox le télécharger en fournissant l’URL directe de l’ISO.

![](https://screensaver01.zap-hosting.com/index.php/s/GJjxxkPAkiRM7Fw/preview)

Une fois fait, tu peux créer ta VM. Regarde en haut à droite et clique sur le bouton **Créer VM**. Un nouveau menu avec plein d’options va s’ouvrir.

Commence par configurer les réglages généraux. Par défaut, le `Nœud` sera celui par défaut (ici `panel`). Tu dois fournir un ID VM unique, qui sera par défaut `100` ou incrémenté si tu as déjà des VM. Ajoute un nom pour ta VM, ça peut être ce que tu veux.

![](https://screensaver01.zap-hosting.com/index.php/s/6LmXZ26bnNY46yS/preview)

Passe vite à la section des réglages OS. Ici, sélectionne l’image ISO que tu as uploadée précédemment. Pense aussi à définir le type et la version du système d’exploitation que tu vas utiliser.

![](https://screensaver01.zap-hosting.com/index.php/s/QWjGQ7grR8ttaqZ/preview)

On recommande de laisser la section Système par défaut, elle est bien configurée. Passe à la section Disque où tu peux définir la taille du disque pour ta VM. Tu peux aussi choisir le pool de stockage, qui sera `local-lvm` par défaut. Le reste des réglages peut rester par défaut.

![](https://screensaver01.zap-hosting.com/index.php/s/2XJyydoZwaEMDeZ/preview)

Ensuite, la section CPU où tu peux définir le nombre de sockets et de cœurs CPU à utiliser. Configure ça comme tu veux pour ta VM.

![](https://screensaver01.zap-hosting.com/index.php/s/RrWWT2wMRaQzde7/preview)

Même chose pour la section Mémoire, tu peux définir la quantité de RAM à allouer et choisir l’état du ballooning.

![](https://screensaver01.zap-hosting.com/index.php/s/DaXCsYLwWeMr9aJ/preview)

On recommande aussi de laisser la section Réseau par défaut, elle est bien configurée pour l’instant. Enfin, tu peux revoir tous les réglages que tu as faits pour ta VM. On conseille d’activer l’option `Démarrer après création` pour que ta VM démarre automatiquement. Si tout te convient, clique sur **Terminer** pour créer la VM.

![](https://screensaver01.zap-hosting.com/index.php/s/EfNAZ4idcxizDsa/preview)

Et voilà, tu as créé ta première VM sur ton panneau Proxmox ! Tu devrais la voir dans la vue serveur à gauche du panneau.





## Conclusion

Félicitations, tu as installé Proxmox avec succès sur ton serveur dédié. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂