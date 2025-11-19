---
id: dedicated-windows-addip
title: "Serveur dédié : Configurer des adresses IP supplémentaires sous Windows"
description: "Découvrez comment optimiser les performances et la sécurité de votre serveur en utilisant efficacement plusieurs adresses IP → En savoir plus maintenant"
sidebar_label: Adresses IP supplémentaires
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Avoir plusieurs adresses IP sur un serveur peut être super utile pour plusieurs raisons, surtout dans des environnements réseau complexes ou pour répondre à des exigences spécifiques en termes de performance, sécurité et gestion réseau. Attribuer différentes adresses IP à différents services ou applications sur le même serveur permet une meilleure isolation.




## Préparation

L’utilisation de plusieurs adresses IP suppose que votre offre serveur les inclut. Si vous n’avez pas réservé d’adresses IP supplémentaires par défaut, il faudra d’abord les ajouter via une montée en gamme. Ensuite, connectez-vous à votre serveur via [RDP](dedicated-windows-userdp).




## Configuration



### Récupération des informations

Commencez par récupérer les infos sur les adresses IP disponibles. Les adresses IP supplémentaires se consultent dans la gestion du serveur sous la section adresses IP.

![img](https://screensaver01.zap-hosting.com/index.php/s/zAfKskX42rMSRmb/preview)





### Accéder à la configuration réseau

Il y a plusieurs façons d’accéder à la config réseau sur un serveur Windows. Par exemple, vous pouvez passer par le Panneau de contrôle sous **Centre Réseau et partage**.

Ouvrez le **Panneau de contrôle**, cliquez sur **Réseau et Internet**, puis sur **Centre Réseau et partage**. Ensuite, allez dans « Modifier les paramètres de la carte » et double-cliquez sur l’adaptateur réseau (Ethernet 2). Cela ouvre l’adaptateur réseau, où il faut accéder aux propriétés.

Dans les **Propriétés** de l’adaptateur réseau, sélectionnez l’option **Protocole Internet version 4 (TCP/IPv4)**. Vous verrez alors les infos sur l’adresse IP principale, le masque de sous-réseau, la passerelle par défaut et les serveurs DNS. Cliquez sur le bouton **Avancé** pour ajouter l(es) adresse(s) IP supplémentaire(s).

![](https://screensaver01.zap-hosting.com/index.php/s/KtBawR89RASs4Jc/preview)



### Ajouter une ou plusieurs adresses IP

Maintenant, ajoutez l’adresse IP supplémentaire via les **Paramètres TCP/IP avancés**. Pour ça, cliquez sur le bouton **Ajouter** sous les adresses IP et remplissez les champs pour l’**Adresse IP** et le **Masque de sous-réseau**. Dans le champ adresse IP, entrez l’adresse IP supplémentaire. Le masque de sous-réseau utilisé est 255.255.255.0.

![](https://screensaver01.zap-hosting.com/index.php/s/gsaceiYPqdiMC7x/preview)



## Conclusion

L’adresse IP a été configurée et ajoutée avec succès. Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous accompagner ! 🙂