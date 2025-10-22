---
id: cs16-plugins
title: "CS 1.6 : Installer des plugins sur ton propre serveur"
description: "Découvre comment améliorer ton serveur Counter-Strike 1.6 avec AMXmodX et Metamod pour une personnalisation et une administration avancées → En savoir plus maintenant"
sidebar_label: Installer des Plugins
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs16-plugins.json';

## Introduction

**AMXmodX** et **Metamod** sont indispensables pour utiliser des plugins sur un serveur de jeux Counter-Strike 1.6. Ce sont deux extensions Half Life qui te permettent de personnaliser ton serveur bien plus que d’habitude. Cela inclut par exemple l’utilisation de plugins et une administration étendue de ton serveur.

<InlineVoucher />

## Installation d’AMXmodX / Metamod

### Préparation

Tout d’abord, il te faut les extensions elles-mêmes. Tu peux les télécharger sur [amxmodx.org](https://amxmodx.org/downloads-new.php). Pense toujours à prendre les dernières versions (**stables**), pour qu’elles restent pleinement fonctionnelles et compatibles.

![img](https://screensaver01.zap-hosting.com/index.php/s/SxJaFb7Cz79c7ER/preview)

Tu as besoin des paquets Linux **AMX Mod X Base, Counter-Strike Addon et Metamod**. Télécharge-les depuis ce site. Tu devrais récupérer trois fichiers compressés. Décompresse-les sur ton PC. Tu obtiens alors un dossier **addons** qui contient les dossiers **amxmodx** et **metamod** :

![](https://screensaver01.zap-hosting.com/index.php/s/LQdb93T39YApA6B/preview)

### Installation

Une fois ces étapes faites, place à l’installation proprement dite. Les fichiers doivent être uploadés sur ton serveur via FTP. Il te faut un client FTP pour envoyer les fichiers sur ton serveur. Si tu ne sais pas ce qu’est le FTP ni comment ça marche, jette un œil à ce guide : [Accès via FTP](gameserver-ftpaccess.md)

Maintenant, il faut uploader le dossier **addons** dans le répertoire principal de ton serveur. La structure des fichiers devrait ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/A5zqJ9GxL47tCrW/preview)

La configuration d’**AMXmodX** et **Metamod** est maintenant terminée. Connecte-toi à ton serveur en jeu et utilise la commande ``amxx version`` dans la console pour vérifier si AMX est bien installé. Le résultat devrait ressembler à ça :

```
AMX Mod X 1.8.2
Authors: ....
Compiled: Feb 14 2013, 00:56:31
URL:http://www.amxmodx.org/
Core mode: JIT
```

Si tu vois le message **Unknown command**, c’est qu’il y a eu un souci pendant l’installation.

## Installation des plugins

### Préparation

Une fois AMXmodX et Metamod installés et fonctionnels, tu peux commencer à installer des plugins. D’abord, télécharge les plugins que tu souhaites ajouter sur ton serveur. Tu trouveras un large choix sur [amxmodx.org](https://www.amxmodx.org/compiler.php). De nombreux plugins y ont été publiés au fil des années et la liste s’agrandit régulièrement. Tu as besoin du fichier **.amxx** correspondant à chaque plugin.

### Installation

Quand tu as téléchargé les plugins désirés, tu peux lancer leur installation. Ça se fait aussi via FTP. Les fichiers des plugins doivent être uploadés dans le dossier plugins sous ``../addons/amx``.

![](https://screensaver01.zap-hosting.com/index.php/s/FG2ocNpWCRManSd/preview)

Au prochain démarrage du serveur, les plugins uploadés devraient se charger automatiquement.

## Plugins populaires

Tu cherches encore les plugins parfaits pour ton serveur ?  
Parcours notre liste soigneusement sélectionnée des plugins les plus populaires et recommandés pour booster ton gameplay et donner la touche finale à ton serveur. Inspire-toi et trouve exactement les ajouts qui collent à ton projet.

<SearchableItemList items={items} />

## Conclusion

Si tu as suivi toutes les étapes, tu as maintenant AMXmodX / Metamod et tes plugins préférés installés avec succès. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour te filer un coup de main ! 🙂

<InlineVoucher />