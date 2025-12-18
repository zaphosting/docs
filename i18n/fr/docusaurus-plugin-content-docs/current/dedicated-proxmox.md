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

![](https://github.com/zaphosting/docs/assets/42719082/b457f17a-0bc6-42db-91ec-a553fd456936)

Ensuite, sélectionne un ISO **Proxmox VE** dans le menu déroulant. On te recommande d’utiliser la dernière version pour rester à jour avec les nouveautés. Clique ensuite sur le bouton vert **Insérer**.

![](https://github.com/zaphosting/docs/assets/42719082/2b0baf71-d683-46ad-a34a-bfda9d71939d)

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

![](https://github.com/zaphosting/docs/assets/42719082/3b9ce97e-f974-439b-8e57-ced05f248ef9)

Tu devrais être dans le processus d’installation de Proxmox. Utilise les touches `flèche`, `entrée` et `échapp` pour naviguer. On te conseille de choisir la version **Graphique** de Proxmox, car c’est celle suivie dans ce guide.

![](https://github.com/zaphosting/docs/assets/42719082/614218f2-df12-43ad-95fe-39026b900141)

Patiente quelques secondes que l’installation continue. Tu devras accepter le contrat de licence Proxmox via le bouton **J’accepte** en bas à droite. La page suivante te demande de sélectionner le disque cible pour ton environnement. Si tu utilises un seul disque, les réglages par défaut sont adaptés, tu peux simplement continuer avec le bouton **Suivant**.

![](https://github.com/zaphosting/docs/assets/42719082/090c1f2e-20fe-48f3-b4b4-070c197f4825)

:::note
Si tu souhaites configurer un RAID (certains de nos serveurs dédiés ont deux disques), utilise le bouton **Options** pour choisir ton mode `RAID`. On recommande `RAID1` qui fait un miroir des deux disques.

![](https://github.com/zaphosting/docs/assets/42719082/44e3b6ba-07f3-4313-8d36-b185a6da8089)
:::

La section suivante concerne des réglages généraux comme la langue et la disposition du clavier, qui devraient être détectés automatiquement. Remplis-les puis continue.

![](https://github.com/zaphosting/docs/assets/42719082/931e066c-9868-48d9-a638-f07c932579d2)

Maintenant, tu dois définir un mot de passe solide et une adresse email. L’email sera utilisé par ton panneau pour t’envoyer des alertes et notifications importantes.

:::important
N’oublie pas ce mot de passe, c’est celui que tu utiliseras pour te connecter au panneau après l’installation !
:::

![](https://github.com/zaphosting/docs/assets/42719082/617a504c-9520-4b89-93c3-81fba06e5fdc)

La dernière étape est la configuration réseau. Sélectionne l’interface de gestion disponible et un nom d’hôte pour ton serveur.

![](https://github.com/zaphosting/docs/assets/42719082/d694a5af-20e2-4c1b-9cdb-c1a8ca684cde)

Va ensuite dans la section **Adresses IP** sur le panneau web de ton serveur dédié pour trouver une IP disponible.

![](https://github.com/zaphosting/docs/assets/42719082/e358f264-8535-4280-a1c5-0a15f4b99ed9)

Choisis une adresse IP que tu veux utiliser pour ton panneau Proxmox. Renseigne l’adresse IP, le masque réseau et la passerelle dans l’installateur avec les infos du panneau web. Pour le serveur DNS, tu peux mettre `8.8.8.8` qui est le DNS public de Google.

Une fois tout rempli, clique sur **Suivant** et vérifie toutes les options dans la page de résumé. Si tout est bon, clique sur **Installer** pour lancer l’installation !

## Accéder au panneau
Une fois l’installation terminée et le système redémarré, sélectionne l’option **Proxmox Environment GNU/Linux** dans le menu et appuie sur **Entrée**. Une fois chargé, tu devrais voir un message de bienvenue de Proxmox dans la console avec l’adresse IP et le lien pour accéder à ton panneau via un navigateur (celui que tu as spécifié). Va sur ce lien.

:::note
Ton navigateur peut encore afficher un avertissement de sécurité, ignore-le et accepte pour continuer.
:::

Si le lien n’est pas accessible, cela signifie que tu as probablement fait une erreur dans la configuration réseau lors de l’installation.

Une fois sur le panneau, connecte-toi avec le nom d’utilisateur `root` et le mot de passe que tu as défini pendant l’installation. Assure-toi que le **Domaine** est réglé sur `Authentification standard Linux PAM`.

![](https://github.com/zaphosting/docs/assets/42719082/4072c2ac-6f5c-4350-a5df-0635b1f433c0)

Une fois connecté, tu peux ignorer le message d’abonnement en cliquant sur le bouton **OK**. Et voilà, tu as installé Proxmox VE sur ton serveur dédié et tu es connecté à ton panneau !



## Crée ta première VM
Cette section te donne les étapes de base pour créer ta première machine virtuelle (VM) via ton panneau Proxmox. Va dans `local (panneau)` et sélectionne la section **Images ISO**. Ici, tu peux soit uploader manuellement un fichier `.iso`, soit laisser Proxmox le télécharger en fournissant l’URL directe de l’ISO.

![](https://github.com/zaphosting/docs/assets/42719082/8182bd73-690f-434f-8394-5fdca6889a74)

Une fois fait, tu peux créer ta VM. Regarde en haut à droite et clique sur le bouton **Créer VM**. Un nouveau menu avec plein d’options va s’ouvrir.

Commence par configurer les réglages généraux. Par défaut, le `Nœud` sera celui par défaut (ici `panel`). Tu dois fournir un ID VM unique, qui sera par défaut `100` ou incrémenté si tu as déjà des VM. Ajoute un nom pour ta VM, ça peut être ce que tu veux.

![](https://github.com/zaphosting/docs/assets/42719082/bcd2eb41-a8fc-4a44-9abb-072f9e408d10)

Passe vite à la section des réglages OS. Ici, sélectionne l’image ISO que tu as uploadée précédemment. Pense aussi à définir le type et la version du système d’exploitation que tu vas utiliser.

![](https://github.com/zaphosting/docs/assets/42719082/05d51c46-5a69-4cd7-b2e6-c3472437caf9)

On recommande de laisser la section Système par défaut, elle est bien configurée. Passe à la section Disque où tu peux définir la taille du disque pour ta VM. Tu peux aussi choisir le pool de stockage, qui sera `local-lvm` par défaut. Le reste des réglages peut rester par défaut.

![](https://github.com/zaphosting/docs/assets/42719082/26f11d42-8884-4bb5-b0fe-d7b4df7885a5)

Ensuite, la section CPU où tu peux définir le nombre de sockets et de cœurs CPU à utiliser. Configure ça comme tu veux pour ta VM.

![](https://github.com/zaphosting/docs/assets/42719082/91103b8d-dadc-4305-a3fe-bf4c8f96fc27)

Même chose pour la section Mémoire, tu peux définir la quantité de RAM à allouer et choisir l’état du ballooning.

![](https://github.com/zaphosting/docs/assets/42719082/ac0048cb-0bd4-4791-9a9f-857e5037955d)

On recommande aussi de laisser la section Réseau par défaut, elle est bien configurée pour l’instant. Enfin, tu peux revoir tous les réglages que tu as faits pour ta VM. On conseille d’activer l’option `Démarrer après création` pour que ta VM démarre automatiquement. Si tout te convient, clique sur **Terminer** pour créer la VM.

![](https://github.com/zaphosting/docs/assets/42719082/d14a8b3d-e9bb-4feb-8049-428e84c1e917)

Et voilà, tu as créé ta première VM sur ton panneau Proxmox ! Tu devrais la voir dans la vue serveur à gauche du panneau.





## Conclusion

Félicitations, tu as installé Proxmox avec succès sur ton serveur dédié. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂