---
id: redm-deletecache
title: "RedM : Vider le cache"
description: "Découvrez comment vider le cache de votre serveur RedM améliore les performances et résout les erreurs pour une expérience de jeu plus fluide → En savoir plus maintenant"
sidebar_label: Supprimer le cache
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Vider le cache sur un serveur RedM permet de supprimer les fichiers temporairement stockés. Cela force le serveur à retélécharger ou recréer tous les fichiers nécessaires lors du prochain démarrage. Cela aide à éliminer les données obsolètes ou corrompues, ce qui peut résoudre des problèmes de performance, des erreurs de scripts, des plantages ou des soucis de chargement du monde de jeu.

<InlineVoucher />

## Méthode simple

Supprimer le cache sur ton serveur de jeux RedM est vraiment simple. Commence par te connecter à l’interface web de ton serveur de jeux. Trouve et ouvre la section **Paramètres** dans l’interface web de ton serveur.

![img](https://screensaver01.zap-hosting.com/index.php/s/qAiDSjC7jjmAq5B/download)



Ensuite, descends tout en bas de la page pour trouver plusieurs boutons sous la sous-section **Actions**. Là, clique sur le bouton **Supprimer les fichiers cache** pour vider le cache de ton serveur de jeux.

![img](https://screensaver01.zap-hosting.com/index.php/s/CW8HcxLbNyrw3Qy/download)

:::warning 
Cela va immédiatement redémarrer ton serveur pour vider les fichiers cache, alors assure-toi d’être prêt avant de lancer l’opération.
:::


## Méthode alternative

D’abord, tu dois te connecter à ton serveur via FTP. Si tu ne connais pas encore FTP, on te conseille de jeter un œil à notre [guide d’accès FTP](gameserver-ftpaccess.md). Ensuite, il faut trouver le dossier cache et le supprimer. Suis ce chemin `/gXXXXXX/redm-txadmin/server-data/cache` pour accéder au dossier cache.

![img](https://screensaver01.zap-hosting.com/index.php/s/BkcqxjZ2dDeeMK2/download)

Maintenant, il te suffit de vider le cache. Pour ça, clique sur le dossier **Cache** puis sur **Fichiers**. Sélectionne tous les dossiers présents dans le dossier **Cache** et supprime-les.

![img](https://screensaver01.zap-hosting.com/index.php/s/sb9Ttc2gEWwAzRP/download)

Enfin, redémarre ton serveur RedM pour que les changements prennent effet. Au redémarrage, le serveur va recréer le cache. 



## Conclusion

Si tu as suivi toutes les étapes, tu as réussi à vider le cache de ton serveur. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />