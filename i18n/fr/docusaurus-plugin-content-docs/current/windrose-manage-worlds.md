---
id: windrose-manage-worlds
title: "Windrose : Gérer les mondes"
description: "Apprenez à gérer plusieurs mondes Windrose, changer de sauvegarde de monde et configurer les paramètres de votre monde sur un serveur dédié avec la bonne structure de monde. -> En savoir plus maintenant"
sidebar_label: Gérer les mondes
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windrose supporte plusieurs mondes sur un seul serveur dédié, chaque monde utilisant ses propres données de sauvegarde et sa configuration `WorldDescription.json`. Dans ce guide, vous apprendrez à créer de nouveaux mondes, à basculer entre les mondes existants, à les sauvegarder et à les réinitialiser en toute sécurité.

## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Windrose via l’interface web ZAP-Hosting et que votre serveur soit hors ligne avant de modifier les sauvegardes ou les configurations.

:::info Accès requis
Vous devez avoir accès à la gestion du serveur de jeux ZAP-Hosting, incluant les sections **Gestionnaire de fichiers**, **Configs** et **Sauvegardes**, pour gérer vos mondes Windrose en toute sécurité.
:::

:::caution Arrêtez le serveur avant tout
Vous devez toujours arrêter votre serveur avant d’éditer `ServerDescription.json`, modifier `WorldDescription.json`, créer des dossiers de mondes ou supprimer des données de sauvegarde. Cela évite la corruption et les écritures incomplètes des mondes.
:::

## Comprendre la structure des mondes Windrose

Windrose stocke toutes les données des mondes dans le répertoire du profil de sauvegarde. Le premier monde est créé automatiquement lors du premier démarrage du serveur.

La structure pertinente ressemble à ceci :

```text
R5/Saved/SaveProfiles/Default
ServerDescription.json
RocksDB
<game_version>
Worlds
World_1_ID
WorldDescription.json
World_2_ID
```

En pratique, les dossiers des mondes se trouvent ici :

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Chaque dossier de monde porte le nom de son `IslandId` unique. Le serveur utilise cet ID en interne pour identifier quel monde charger.

| Fichier ou dossier | Fonction |
| --- | --- |
| `ServerDescription.json` | Définit la configuration active du serveur, incluant le monde chargé |
| `RocksDB/[your_game_version]/Worlds/` | Contient tous les dossiers de sauvegarde des mondes disponibles |
| `[your_world_id]/WorldDescription.json` | Contient la configuration d’un monde spécifique |
| `WorldIslandId` | Valeur dans `ServerDescription.json` indiquant au serveur quel monde charger |

:::danger Ne renommez pas les dossiers de mondes
Vous ne devez jamais renommer manuellement un dossier de monde. Windrose utilise le nom du dossier comme `IslandId` interne dans la base de données RocksDB. Renommer un dossier peut corrompre le monde ou le rendre inutilisable.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Trouver le monde actif

Avant de changer ou créer des mondes, il est utile d’identifier quel monde est actuellement actif.

### Vérifier la configuration du serveur

Ouvrez la section **Configs** dans la gestion de votre serveur de jeux et localisez `ServerDescription.json`. Si ce fichier n’apparaît pas, utilisez le **Gestionnaire de fichiers** et ouvrez `ServerDescription.json` à la racine des fichiers.

Cherchez ce champ :

```json
"WorldIslandId": "[your_world_id]"
```

Cette valeur définit le monde que le serveur chargera au démarrage.

### Vérifier un ID de monde

Pour identifier un monde sauvegardé spécifique, ouvrez son fichier `WorldDescription.json` dans son dossier et cherchez la valeur `IslandId`.

Exemple :

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "World_Example_ID",
    "WorldName": "Mon Monde",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

L’`IslandId` dans ce fichier doit correspondre exactement au nom du dossier.

## Changer de monde

Si vous avez déjà plusieurs mondes sauvegardés sur votre serveur, vous pouvez basculer entre eux en modifiant le `WorldIslandId` actif.

### Mettre à jour le monde cible

Commencez par arrêter votre serveur depuis l’interface web ZAP-Hosting.

Ensuite, ouvrez `ServerDescription.json` dans la section **Configs** ou via le **Gestionnaire de fichiers** à la racine des fichiers du serveur.

Trouvez ce champ :

```json
"WorldIslandId": "PASTE_TARGET_WORLD_ID_HERE"
```

Remplacez la valeur par l’`IslandId` du monde que vous souhaitez charger. Vous pouvez trouver cet ID en ouvrant le `WorldDescription.json` du monde cible.

### Sauvegarder et redémarrer le serveur

Enregistrez le fichier et redémarrez votre serveur. Windrose chargera désormais le monde sélectionné.

:::tip Vérifiez bien l’ID du monde
Si le `WorldIslandId` ne correspond pas exactement à un dossier de monde existant et à son `IslandId`, le serveur peut ne pas charger le monde voulu ou en générer un nouveau à la place.
:::

## Créer un nouveau monde

Si vous souhaitez héberger plusieurs sessions de jeu sur un même serveur, vous pouvez créer un nouveau monde manuellement.

### Créer le dossier du monde

Arrêtez d’abord votre serveur.

Ouvrez le **Gestionnaire de fichiers** et naviguez vers :

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Créez un nouveau dossier avec un nom unique. Ce nom de dossier deviendra l’`IslandId` du nouveau monde.

Par exemple :

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/MySecondWorld
```

### Créer le fichier de description du monde

Dans ce nouveau dossier, créez un fichier nommé `WorldDescription.json` et collez ce modèle :

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "YOUR_NEW_WORLD_ID",
    "WorldName": "Mon Deuxième Monde",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

Remplacez `YOUR_NEW_WORLD_ID` par l’ID de monde que vous avez choisi.

:::caution Les IDs doivent correspondre
L’`IslandId` dans `WorldDescription.json` doit être identique au nom du dossier. Même une différence minime, comme une majuscule, une minuscule ou un espace en trop, peut empêcher le chargement correct du monde.
:::

### Définir le nouveau monde comme actif

Ouvrez maintenant `ServerDescription.json` et mettez à jour la valeur `WorldIslandId` pour qu’elle pointe vers votre nouvel ID de monde.

Exemple :

```json
"WorldIslandId": "MySecondWorld"
```

Enregistrez le fichier et démarrez le serveur. Windrose générera un nouveau monde frais au démarrage.

## Sauvegarder un monde

Avant de changer de monde, d’effacer des données ou de tester de nouveaux réglages, vous devez créer une sauvegarde de votre monde.

### Utiliser la fonction de sauvegarde ZAP-Hosting

Arrêtez d’abord votre serveur.

Dans la barre latérale du panneau, ouvrez **Sauvegardes** et créez une nouvelle sauvegarde. C’est l’option la plus sûre si vous voulez restaurer l’état complet du serveur plus tard.

### Télécharger manuellement les fichiers du monde

Si vous souhaitez uniquement une copie directe des données de sauvegarde, ouvrez le **Gestionnaire de fichiers** et téléchargez le dossier complet `RocksDB/` via l’option zip ou téléchargement.

Chemin concerné :

```text
R5/Saved/SaveProfiles/Default/RocksDB/
```

| Méthode de sauvegarde | Usage recommandé |
| --- | --- |
| Sauvegarde via panneau | Idéal pour une récupération complète du serveur |
| Téléchargement manuel de `RocksDB/` | Idéal pour archiver directement la sauvegarde d’un monde |
| Les deux méthodes | Idéal pour les mondes importants ou avant une réinitialisation |

:::note Recommandation de sauvegarde
Si vous gérez plusieurs mondes, garder à la fois une sauvegarde via le panneau et une copie manuelle de `RocksDB/` vous offre la plus grande flexibilité pour restaurer un monde spécifique plus tard.
:::

## Réinitialiser un monde

Si vous voulez remettre un monde à zéro, vous pouvez supprimer son dossier de sauvegarde et laisser le serveur en générer un nouveau.

### Supprimer la sauvegarde du monde

Arrêtez votre serveur.

Ouvrez le **Gestionnaire de fichiers** et allez à :

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Supprimez le dossier du monde que vous souhaitez réinitialiser.

### Régénérer le monde

Assurez-vous que `ServerDescription.json` pointe toujours vers cet ID de monde supprimé via le champ `WorldIslandId`.

Au prochain démarrage, Windrose détectera que le dossier du monde cible n’existe plus et générera un nouveau monde pour cet ID.

:::danger Vérifiez bien le dossier avant suppression
Supprimer le mauvais dossier de monde supprime définitivement les données de sauvegarde de ce monde, sauf si vous avez une sauvegarde. Vérifiez bien le nom du dossier et l’`IslandId` avant de continuer.
:::

## Gérer les paramètres des mondes

Chaque monde possède son propre `WorldDescription.json`, ce qui vous permet de maintenir des réglages séparés pour différents mondes sur un même serveur.

### Exemple de configuration de monde

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "MySecondWorld",
    "WorldName": "Mon Deuxième Monde",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

### Valeurs importantes

| Clé | Description |
| --- | --- |
| `Version` | Version de configuration utilisée par le fichier |
| `IslandId` | ID interne du monde, doit correspondre au nom du dossier |
| `WorldName` | Nom affiché du monde |
| `WorldPresetType` | Type de preset pour la génération du monde |
| `WorldSettings` | Paramètres spécifiques au monde si supportés |

:::info Gestion des configs dans le panneau
Les fichiers de configuration Windrose peuvent être gérés dans la gestion de votre serveur de jeux sous **Configs**. Si un fichier n’est pas disponible, utilisez le **Gestionnaire de fichiers** pour l’éditer directement.
:::

## Bonnes pratiques pour gérer plusieurs mondes

Gérer plusieurs mondes sur un serveur est utile pour les tests, événements ou groupes de joueurs séparés. Pour garder tout organisé, suivez ces recommandations :

- Utilisez des IDs de mondes clairs et uniques comme `[your_pvp_world]` ou `[your_build_world]`
- Gardez le nom du dossier et l’`IslandId` strictement identiques
- Faites une sauvegarde avant de changer ou réinitialiser un monde
- Évitez de modifier les fichiers pendant que le serveur tourne
- Documentez quel `WorldIslandId` correspond à quel nom de monde

Cette méthode vous évitera des confusions, surtout si vous maintenez plusieurs mondes sur la durée.

## Conclusion

Félicitations, vous avez réussi à gérer les mondes Windrose sur votre serveur. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂