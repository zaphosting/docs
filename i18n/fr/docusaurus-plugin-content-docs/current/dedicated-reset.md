---
id: dedicated-reset
title: "Serveur dédié : Réinitialisation du serveur (État d’usine)"
description: "Découvrez comment réinitialiser efficacement votre serveur pour restaurer ses performances ou repartir à zéro avec une suppression sécurisée des données → En savoir plus maintenant"
sidebar_label: Réinitialisation du serveur
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Votre serveur ne fonctionne plus comme il devrait ou vous souhaitez repartir de zéro mais vous ne savez pas comment faire ? Pas de souci, vous pouvez réinitialiser votre serveur en le réinstallant. Ce guide vous expliquera comment procéder et ce à quoi vous devez faire attention.





## Préparatifs

Avant de réinitialiser les données sur votre serveur, vous devez savoir que les données existantes seront perdues. Si vous avez des données importantes, c’est le moment idéal pour d’abord faire une sauvegarde avant de lancer la réinstallation. Ensuite, vous devrez décider de la manière dont vous souhaitez réinitialiser votre système.



## Réinitialisation des données

Il existe deux façons différentes de réinitialiser les données, selon vos besoins et votre situation. Nous expliquons en détail les deux options ci-dessous :

- Réinitialisation des données via la configuration RAID (Méthode rapide)
- Réinitialisation des données via Wipe ISO (Méthode complète)

Lors de la réinitialisation des données via la configuration RAID, les données existantes sont effacées logiquement et remplacées par de nouvelles données, ce qui en fait une solution rapide et efficace pour la réinstallation du système.

En comparaison, la réinitialisation avec Wipe ISO implique plusieurs cycles de suppression, garantissant que toutes les données sont supprimées de manière permanente et irréversible. Cette méthode est idéale pour un effacement complet du système lorsque la suppression approfondie des données est nécessaire.



### Méthode rapide

Comme pour la configuration du RAID, la configuration RAID doit être ouverte avec la touche `F8` pendant le processus de démarrage. Ouvrez l’option de menu **Delete Logical Drive** dans la configuration RAID. Cela devrait afficher la configuration RAID actuelle et les disques durs. Appuyez sur la touche `F8` pour supprimer le RAID existant. Cette action doit être confirmée en appuyant sur la touche `F3`.

Ensuite, revenez à la configuration RAID et ouvrez l’option de menu **Create Logical Drive**. Sélectionnez maintenant les disques durs et la configuration RAID souhaitée (Raid 0/1) et créez le RAID en confirmant avec la touche `Entrée`.

Si vous ne savez pas comment configurer le RAID sur votre système, nous vous recommandons également de consulter notre [guide Configurer RAID](dedicated-raid.md).



### Méthode complète

Le Wipe ISO requis doit être monté et exécuté pour effectuer le processus réel de réinitialisation des données. Les fichiers ISO peuvent être montés soit via l’iLO, soit via la console distante. Si vous ne savez pas encore comment faire, veuillez consulter le guide [Own ISO](http://localhost:3000/guides/docs/dedicated-iso).

Montez le fichier Wipe ISO suivant sur votre serveur et redémarrez-le :


```
http://185.223.30.65/dedicatedisos/wipedisk.iso
```

Une fois le serveur redémarré, le Wipe ISO devrait être détecté et chargé automatiquement. Connectez-vous à votre serveur dédié via une console distante (HTML5, .NET, Java Web Start) de votre choix.

Vous verrez alors comment le serveur exécute automatiquement le processus et l’avancement du formatage. Votre serveur écrasera tous les volumes existants, supprimant ainsi toutes les données. Selon la taille du SSD, ce processus peut prendre de 45 minutes à 2 heures.

![](https://screensaver01.zap-hosting.com/index.php/s/4nfaexaqiK78t6e/preview)



:::danger
Ce processus est irréversible et donc définitif. Il n’y a pas de sauvegardes supplémentaires pouvant être importées en cas de besoin.
Nous déconseillons fortement d’effectuer ce processus à moins d’être absolument certain de vouloir supprimer toutes vos données.
:::



## Conclusion

Félicitations, vous avez réussi à supprimer les données sur votre serveur dédié. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂