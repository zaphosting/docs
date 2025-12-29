---
id: vserver-iso
title: "VPS : Monter un fichier ISO"
description: "Découvrez comment personnaliser votre VPS avec votre ISO préférée pour un contrôle total de votre environnement serveur → En savoir plus maintenant"
sidebar_label: Monter un fichier ISO
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introduction
Vous voulez encore plus de liberté dans le choix de votre système ? En plus de nos templates OS, vous pouvez bien sûr monter vos propres ISOs. C’est super simple avec nos produits VPS. Comme ça, vous obtenez exactement le système d’exploitation que vous voulez vraiment sur votre serveur !

<InlineVoucher />



## Fichiers ISO disponibles

En plus de nos templates OS standards préconfigurés, nous proposons aussi la possibilité de monter des fichiers ISO supplémentaires. Cela offre encore plus de flexibilité pour configurer et gérer votre environnement serveur. Nos produits VPS supportent actuellement les fichiers ISO suivants : 

<SearchableItemList items={items} />





## Upload d’un ISO personnalisé

Si l’image ISO requise n’est pas disponible dans la liste par défaut, vous pouvez fournir un ISO personnalisé via une URL publique. L’URL doit être accessible en HTTP ou HTTPS et ne doit pas nécessiter d’authentification ni de lien de téléchargement limité dans le temps.

Après avoir entré l’URL dans le champ **Ajouter un ISO personnalisé** et cliqué sur **Uploader l’ISO**, l’ISO est importée automatiquement et devient disponible pour l’installation sur le serveur.

![img](https://screensaver01.zap-hosting.com/index.php/s/E93dLjnpnBPFiH7/preview)

Un maximum de trois images ISO personnalisées peuvent être stockées en même temps. Chaque ISO uploadée est conservée seulement 72 heures puis supprimée automatiquement. Si l’ISO est encore nécessaire après cette période, il faudra la recharger. Le client est responsable du contenu, des licences et de la sécurité de l’ISO fournie.







## Monter un fichier ISO
Pour monter un ISO, rendez-vous dans le panneau de gestion de votre VPS et ouvrez **Paramètres → ISOs**. Sélectionnez le fichier ISO souhaité, ajustez l’ordre de démarrage, puis redémarrez votre serveur.

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Après le redémarrage, vous pouvez vous connecter à votre serveur via le client VNC et commencer l’installation et la configuration du système d’exploitation.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Statut en ligne ou connexions à distance après montage ISO

Après avoir monté un ISO, votre serveur n’est pas encore configuré. Par conséquent, aucun **statut en ligne** ne sera affiché dans le panneau, et les connexions **RDP** ou **SSH** ne seront pas disponibles. Elles ne seront accessibles qu’une fois le système d’exploitation installé et configuré avec succès.

:::




## Conclusion
Félicitations, vous avez sélectionné et monté votre fichier ISO avec succès. Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous accompagner ! 🙂



<InlineVoucher />