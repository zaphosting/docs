---
id: csgo-plugins
title: "CS:GO : Installation de plugins"
description: "Apprends à installer des plugins Sourcemod sur ton serveur de jeux CS:GO et étends le gameplay avec des fonctionnalités personnalisées → Découvre tout maintenant"
sidebar_label: Installer des plugins
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Introduction

CS:GO perpétue la longue tradition de personnalisation des serveurs portée par la communauté. Les plugins permettent aux propriétaires de serveurs d’étendre le gameplay, d’ajouter des fonctionnalités pratiques, d’implémenter des règles personnalisées ou de créer des modes de jeu entièrement nouveaux.

Pour les serveurs de jeux CS:GO, **Sourcemod** est le framework le plus utilisé pour les plugins côté serveur. Sourcemod fonctionne avec **Metamod:Source**, qui sert de couche de base permettant aux plugins de s’accrocher au moteur du jeu. En installant ces deux composants, les admins de serveurs peuvent gérer facilement les plugins et étendre les fonctionnalités du serveur.

<InlineVoucher />



## Installation de Metamod:Source

Metamod:Source doit être installé en premier, car Sourcemod en dépend. Commence par télécharger la dernière version de Metamod:Source depuis le site officiel. Extrayez l’archive téléchargée sur ton ordinateur.

Dans l’archive, tu trouveras un dossier `addons`. Upload ce dossier sur ton serveur de jeux CS:GO via [FTP](gameserver-ftpaccess.md) pour qu’il fusionne avec le répertoire de jeu existant `../csgo/`.


Après avoir uploadé les fichiers, redémarre ton serveur. Pour vérifier que Metamod fonctionne correctement, ouvre la console du serveur et exécute la commande suivante :

```
meta version
```


Si Metamod est bien installé, la console affichera la version installée ainsi que des infos supplémentaires.

<Button label="Télécharger Metamod:Source" link="https://www.metamodsource.net/downloads.php" block />



## Installation de Sourcemod

Une fois Metamod:Source installé, tu peux installer Sourcemod. Télécharge la dernière version stable de Sourcemod depuis le site officiel et extrait l’archive. Upload les dossiers `addons` et `cfg` inclus sur ton serveur CS:GO via [FTP](gameserver-ftpaccess.md). Ces dossiers doivent être placés dans le répertoire de jeu CS:GO `../csgo/`. Après l’upload, redémarre le serveur. Sourcemod sera alors chargé automatiquement via Metamod.

Pour confirmer que Sourcemod fonctionne, ouvre la console du serveur et lance :

```
sm version
```


Si l’installation a réussi, le serveur retournera la version actuelle de Sourcemod et les infos de build.

<Button label="Télécharger Sourcemod" link="https://www.sourcemod.net/downloads.php" block />



## Installation des plugins

Les plugins Sourcemod sont généralement distribués sous forme de fichiers `.smx`. Ces fichiers compilés doivent être uploadés dans le dossier `plugins` de l’installation Sourcemod.

```
../csgo/addons/sourcemod/plugins/
```


Après avoir uploadé le fichier plugin, redémarre le serveur ou recharge le plugin directement via la console du serveur avec la commande suivante :

```
sm plugins load <nomduplugin>
```


Si un plugin ne se charge pas correctement, vérifie les logs du serveur situés dans le dossier `logs` de Sourcemod pour trouver d’éventuels messages d’erreur.

Certains plugins peuvent aussi inclure des fichiers de configuration supplémentaires. Ces fichiers se placent généralement dans :

```
../csgo/addons/sourcemod/configs/
```


Suis toujours les instructions d’installation fournies par le développeur du plugin pour garantir un fonctionnement correct.



## Plugins populaires

<SearchableItemList items={items} />



## Conclusion

Si tu as suivi toutes les étapes, tu as normalement installé avec succès Metamod:Source, Sourcemod et les plugins de ton choix sur ton serveur de jeux CS:GO. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />