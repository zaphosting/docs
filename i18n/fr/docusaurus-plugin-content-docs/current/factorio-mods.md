---
id: factorio-mods
title: "Factorio : Installer des Mods/DLCs sur votre serveur Factorio"
description: "Découvrez comment améliorer votre expérience Factorio en activant les DLCs et en ajoutant des mods pour une expérience personnalisée → En savoir plus maintenant"
sidebar_label: Installer Mods/DLCs
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/factorio-mods.json';

## Introduction

Factorio supporte nativement le modding, ce qui vous permet d’ajouter facilement une grande variété de mods à votre jeu et serveur, en plus des DLCs achetés. Dans ce guide, nous allons couvrir le processus d’activation des DLCs et d’installation des mods sur votre client et serveur Factorio.

<InlineVoucher />

## Préparation

Vous pouvez accéder au site officiel des [mods Factorio](https://mods.factorio.com/) pour parcourir les mods. Sur ce site, vous trouverez une énorme bibliothèque de mods gratuits créés par la communauté dans une large variété de catégories.

:::tip
Assurez-vous que les mods que vous parcourez et téléchargez sont compatibles avec la version de votre serveur Factorio.
:::

## Activation des DLCs

Avec la mise à jour Factorio 2.0, le tout premier DLC nommé Space Age a été introduit. Pour cela, une nouvelle option de configuration a été ajoutée dans le panneau de l’interface web pour vous permettre d’activer ou désactiver ce DLC.

<YouTube videoId="i9CuAsCxUsk" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BRa5saY3L76xe5F/preview" title="Activer le DLC Space Age de Factorio" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus immersive !"/>

Rendez-vous dans le panneau de l’interface web de votre produit et accédez à la section **Paramètres**. Descendez et trouvez l’option **Space Age DLC**, qui devrait être activée par défaut.

![](https://screensaver01.zap-hosting.com/index.php/s/T5G5GrEzwoxM3Xk/preview)

Activez ou désactivez la fonctionnalité puis cliquez sur le bouton vert **Enregistrer** en bas de la page. Vous avez maintenant activé avec succès un DLC Factorio.

## Ajouter & Télécharger des Mods

Maintenant que vous avez téléchargé les mods de votre choix, vous devez les uploader sur votre serveur Factorio via FTP. Utilisez notre guide [Accès FTP](gameserver-ftpaccess.md) pour vous aider à vous connecter à votre serveur.

:::note
Le serveur doit être arrêté avant d’ajouter ou modifier des mods, sinon les modifications risquent de ne pas être prises en compte.
:::

Une fois prêt, naviguez vers le répertoire suivant et uploadez vos mods téléchargés, qui doivent être au format `.zip`.

```
../factorio/saves/mods
```

![](https://screensaver01.zap-hosting.com/index.php/s/APFEnmg29jBCFKn/preview)

:::tip
Lors du modding, les mods doivent être synchronisés entre le client et le serveur. Factorio facilite cela. Lorsque vous rejoignez le serveur pour la première fois après avoir modifié les mods, votre jeu vous proposera de synchroniser automatiquement vos mods.
:::

Enfin, redémarrez votre serveur pour activer et installer automatiquement les mods sur votre serveur Factorio. Si vous rencontrez des erreurs, comme un arrêt automatique du serveur, vérifiez la section **Informations->Journal des événements** dans votre interface web pour voir les erreurs. Il est probable qu’un problème de version soit à l’origine de ces soucis.



## Mods Populaires

Vous cherchez encore les mods parfaits pour votre serveur ? Parcourez notre liste soigneusement sélectionnée des mods les plus populaires et recommandés pour améliorer votre expérience de jeu et donner à votre serveur la touche finale qu’il mérite. Trouvez l’inspiration et dénichez exactement les ajouts qui correspondent à votre projet.

<SearchableItemList items={items} />



## Conclusion

Félicitations, vous avez installé avec succès des mods sur votre serveur Factorio. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />