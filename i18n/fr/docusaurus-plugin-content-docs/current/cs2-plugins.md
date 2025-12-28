---
id: cs2-plugins
title: "CS2 : Installation des plugins"
description: "Explore l’univers en évolution des plugins CS2 et des projets communautaires pour booster ton expérience Counter-Strike → Découvre tout maintenant"
sidebar_label: Installer des plugins
services:
  - gameserver-cs2
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs2-plugins.json';



## Introduction

Counter-Strike 2 perpétue la longue tradition de la personnalisation des serveurs par la communauté. Les plugins permettent aux propriétaires de serveurs d’étendre le gameplay, d’ajouter des fonctionnalités pratiques, d’implémenter des règles personnalisées ou même de créer des modes de jeu entièrement nouveaux.

Avec la transition vers Source 2, l’écosystème des plugins a beaucoup évolué. Pour CS2, **CounterStrikeSharp** s’est imposé comme le framework principal et activement maintenu pour le développement de plugins côté serveur.

<InlineVoucher />



## Installation de Metamod:Source

Metamod doit être installé en premier, car CounterStrikeSharp en dépend. Après avoir téléchargé la [version Dev de Metamod:Source 2.x](https://www.metamodsource.net/downloads.php?branch=dev), extrait l’archive. À l’intérieur, tu trouveras un dossier `addons`. Ce dossier doit être uploadé directement dans le répertoire du jeu CS2 via [FTP](gameserver-ftpaccess.md).

```
../game/csgo/
```

Après avoir copié les fichiers, localise le fichier `gameinfo.gi` dans `/game/csgo/`. Ouvre-le avec un éditeur de texte. Dans ce fichier, trouve la ligne contenant `Game_LowViolence csgo_lv`. Juste en dessous, ajoute cette ligne :

```
Game csgo/addons/metamod
```

<Button label="Télécharger Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## Installation de CounterStrikeSharp

Une fois que Metamod est bien lancé, tu peux installer CounterStrikeSharp. Ce dernier est distribué via son dépôt officiel GitHub et proposé sous forme de package précompilé. Télécharge la release de CounterStrikeSharp qui inclut le runtime. Extrait l’archive et copie le dossier `addons` inclus dans le même répertoire du jeu CS2 via [FTP](gameserver-ftpaccess.md).

```
/game/csgo/
```

Ne fusionne pas et ne renomme pas les dossiers manuellement. La structure fournie par l’archive doit rester intacte. Après avoir uploadé les fichiers, redémarre ton serveur. Au démarrage, Metamod chargera automatiquement CounterStrikeSharp. Pour vérifier l’installation, ouvre la console du serveur et lance :

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="Télécharger CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## Installation des plugins

Les plugins pour CounterStrikeSharp sont fournis sous forme de fichiers compilés `.dll`. Ces fichiers doivent être placés dans le dossier `plugins` à l’intérieur du chemin d’installation de CounterStrikeSharp.

Après avoir copié un plugin dans ce dossier et redémarré le serveur, CounterStrikeSharp charge automatiquement tous les plugins disponibles. Si un plugin ne se charge pas, consulte les logs du serveur pour trouver les messages d’erreur liés à CounterStrikeSharp ou au plugin concerné.




## Plugins populaires

<SearchableItemList items={items} />



## Conclusion

Si tu as suivi toutes les étapes, tu as réussi à installer Metamod/CounterStrikeSharp ainsi que les plugins que tu voulais. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂




<InlineVoucher />