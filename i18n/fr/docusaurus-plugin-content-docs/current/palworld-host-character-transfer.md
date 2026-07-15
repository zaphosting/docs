---
id: palworld-host-character-transfer
title: "Palworld : Transfert du personnage hôte"
description: "Apprenez à transférer votre personnage hôte Palworld d'une sauvegarde solo ou coop vers un serveur dédié en utilisant Palworld Save Tools et les fichiers de sauvegarde appropriés. -> En savoir plus maintenant"
sidebar_label: "Transfert du personnage hôte"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le transfert du personnage hôte Palworld vous permet de migrer le personnage d’un hôte solo ou coop vers une sauvegarde de serveur dédié. Dans ce guide, vous préparerez les fichiers de sauvegarde nécessaires, utiliserez l’outil de migration supporté, puis téléchargerez les données de personnage mises à jour sur votre serveur.

:::danger Procédure expérimentale de transfert de personnage
Cette procédure est considérée comme expérimentale et modifie manuellement les données de sauvegarde. Les mises à jour de Palworld peuvent changer la structure des sauvegardes, ce qui peut entraîner un dysfonctionnement des outils ou des étapes de migration.
:::

## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld et à un système Windows local où vous pourrez exécuter l’outil de migration des sauvegardes requis.

### Exigences

Vous avez besoin des éléments suivants :

| Exigence | But |
| --- | --- |
| Accès à votre serveur Palworld ZAP-Hosting | Pour télécharger et téléverser les fichiers de sauvegarde nécessaires |
| Un emplacement de sauvegarde local | Pour conserver une copie sécurisée de vos données de sauvegarde originales |
| [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools) | Pour effectuer la migration du personnage hôte |
| Un personnage serveur dédié nouvellement créé | Les données du personnage hôte seront migrées sur ce personnage serveur dédié |

:::caution Créez une sauvegarde avant toute modification
Avant de modifier les fichiers de sauvegarde, téléchargez et conservez une sauvegarde complète de votre sauvegarde serveur actuelle. En cas d’échec du transfert ou de corruption des données du personnage, vous aurez besoin des fichiers originaux pour restaurer le serveur.
:::

### Notes importantes sur les fichiers de configuration

Ce transfert **ne s’effectue pas** en modifiant un fichier de configuration Palworld sous `Configs`. Selon la documentation actuelle de l’outil et les conseils de la communauté, le transfert du personnage hôte se fait en remplaçant les fichiers de données de sauvegarde.

Les fichiers concernés se trouvent dans le répertoire de sauvegarde de votre serveur, pas dans le fichier de configuration classique du jeu comme `PalWorldSettings.ini`.

## Comprendre les fichiers utilisés

Avant de commencer le transfert, vous devez identifier les fichiers impliqués.

### Fichiers de sauvegarde nécessaires pour le transfert

La migration du personnage hôte utilise les données de sauvegarde suivantes :

| Fichier ou dossier | Emplacement | But |
| --- | --- | --- |
| `Level.sav` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Level.sav` | Contient les données de sauvegarde du monde utilisées par l’outil de migration |
| `Players/` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Players/` | Contient les fichiers de sauvegarde des joueurs, y compris le nouveau personnage serveur dédié |
| `00000001.sav` | Dans `Players/` de la sauvegarde solo ou coop téléchargée | Représente généralement le personnage hôte original dans les sauvegardes coop |

`[your_savefolder_id]` est le nom long du dossier utilisé par la sauvegarde de votre monde Palworld. Cette valeur est différente pour chaque sauvegarde.

### Où trouver les fichiers dans l’interface ZAP

Vous pouvez accéder aux fichiers de sauvegarde requis via le gestionnaire de fichiers de l’administration de votre serveur de jeux.

Naviguez vers :

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Dans ce dossier, vous devriez trouver au minimum :

- `Level.sav`
- `LevelMeta.sav`
- `Players/`



## Préparer le personnage serveur dédié

Avant de pouvoir migrer le personnage hôte, le serveur dédié doit déjà contenir une sauvegarde de joueur nouvellement générée pour votre compte.

### Créer un nouveau personnage sur le serveur

Connectez-vous normalement à votre serveur dédié Palworld et créez un nouveau personnage. Jouez ensuite jusqu’à ce que le personnage atteigne au moins le niveau `2`.

Cette étape est nécessaire car l’outil de transfert a besoin d’un fichier de personnage serveur dédié existant comme cible de migration.

### Forcer ou attendre une sauvegarde

Après avoir créé le nouveau personnage, vous devez vous assurer que le serveur a bien écrit les nouvelles données du joueur sur le disque.

Vous pouvez soit :

- attendre l’intervalle de sauvegarde automatique, généralement autour de `4` minutes, ou
- exécuter la commande `save` dans la console serveur

| Commande | Où l’exécuter | But |
| --- | --- | --- |
| `save` | Console serveur | Force le serveur à écrire les données actuelles du monde et des joueurs sur le disque |

:::info Exigence de la commande save
Si vous utilisez la commande `save`, exécutez-la avant d’arrêter le serveur. Cela garantit que le fichier du nouveau personnage serveur dédié existe bien dans le dossier `Players/`.
:::

### Arrêter le serveur

Une fois la sauvegarde terminée, arrêtez le serveur Palworld depuis votre administration serveur.

Ne continuez pas tant que le serveur est en fonctionnement, car des écritures de sauvegarde actives pourraient écraser ou entrer en conflit avec les fichiers que vous allez remplacer.

## Télécharger les données de sauvegarde nécessaires

Maintenant que le nouveau personnage existe sur le serveur dédié, vous pouvez télécharger les fichiers nécessaires à la migration.

### Ouvrir le répertoire de sauvegarde

Dans le gestionnaire de fichiers ZAP-Hosting, allez à :

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Télécharger les fichiers

Téléchargez les éléments suivants sur votre ordinateur local :

| Élément | Requis |
| --- | --- |
| `Level.sav` | Oui |
| Dossier `Players/` | Oui |

Conservez les deux éléments dans le même dossier local de travail pour que l’outil de migration puisse les traiter correctement.

:::tip Gardez les fichiers ensemble
Placez `Level.sav` et le dossier `Players/` côte à côte dans le même dossier local. Cela correspond au flux de travail attendu par Palworld Save Tools.
:::

## Migrer le personnage hôte

Une fois les données de sauvegarde téléchargées, vous pouvez effectuer le transfert réel du personnage hôte.

### Lancer Palworld Save Tools

Téléchargez et extrayez [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools), puis ouvrez `PalworldSaveTools.exe`.

Dans l’application, choisissez :

```text
Fix Host Save
```



### Sélectionner les bons fichiers

Dans l’outil de migration :

1. Sélectionnez votre `Level.sav` téléchargé
2. Dans le champ de sélection gauche, choisissez `00000001.sav`
3. Dans le champ de sélection droit, choisissez le nouveau personnage que vous avez créé sur le serveur dédié
4. Lancez la migration en sélectionnant `Migrate`

| Champ de l’outil | Valeur à sélectionner |
| --- | --- |
| `Path to Level.sav` | Votre `Level.sav` téléchargé |
| Champ personnage gauche | `00000001.sav` |
| Champ personnage droit | Votre personnage serveur dédié nouvellement créé |
| Action | `Migrate` |

### Ce que fait la migration

Le processus de migration réaffecte les données du personnage hôte original de la sauvegarde solo ou coop vers l’entrée du personnage serveur dédié que vous avez créée précédemment.

C’est pourquoi vous devez d’abord rejoindre le serveur et générer une nouvelle sauvegarde de joueur avant d’utiliser l’outil.

:::caution Vérifiez le personnage cible
Assurez-vous de sélectionner le bon nouveau personnage serveur à droite. Choisir une mauvaise cible pourrait écraser les données de sauvegarde d’un autre joueur.
:::

## Téléverser les fichiers de sauvegarde mis à jour

Après la réussite de la migration, vous devez téléverser les fichiers modifiés sur votre serveur.

### Remplacer les données de sauvegarde existantes

Retournez dans le même répertoire serveur via le gestionnaire de fichiers ZAP-Hosting :

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Téléversez et remplacez :

- le `Level.sav` mis à jour
- le dossier `Players/` mis à jour

Si votre gestionnaire de fichiers vous demande de confirmer le remplacement des fichiers existants, acceptez.

### Modifications des fichiers de configuration

Pour ce transfert spécifique du personnage hôte, il n’y a actuellement aucune exigence vérifiée de modifier un fichier de configuration Palworld tel que `PalWorldSettings.ini`.

| Élément | Requis pour le transfert hôte |
| --- | --- |
| Modifier `PalWorldSettings.ini` | Non |
| Modifier les fichiers sous `Configs` | Aucune exigence vérifiée |
| Remplacer `Level.sav` | Oui |
| Remplacer `Players/` | Oui |

:::note Aucune entrée de config supplémentaire requise
Selon la documentation actuelle de l’outil et les instructions de migration, aucune entrée de configuration supplémentaire ni modification manuelle de `.ini` n’est nécessaire pour le transfert lui-même.
:::

## Démarrer le serveur et tester le personnage

Une fois les fichiers mis à jour téléversés, redémarrez votre serveur Palworld.

### Rejoindre le serveur

Connectez-vous au serveur avec le même compte qui a créé le nouveau personnage serveur dédié. Si la migration a réussi, vous devriez charger le personnage hôte transféré au lieu du personnage temporaire.

### Vérifier les données importantes du personnage

Après la connexion, vérifiez que les données suivantes apparaissent correctement :

- niveau du personnage
- inventaire
- compagnons (pals)
- propriété de la base
- progression

Si quelque chose manque ou est incorrect, arrêtez immédiatement le serveur et restaurez votre sauvegarde avant de réessayer.

:::danger Restaurer la sauvegarde si les données sont incorrectes
Si votre personnage, inventaire ou propriété du monde semble corrompu après la migration, ne continuez pas à jouer. Restaurez d’abord la sauvegarde originale `Level.sav` et `Players/` pour éviter d’enregistrer d’autres modifications indésirables.
:::

## Résumé de référence

### Chemins, fichiers et actions requis

| Type | Valeur |
| --- | --- |
| Chemin de sauvegarde | `Pal/Saved/SaveGames/0/[your_savefolder_id]/` |
| Fichier requis | `Level.sav` |
| Dossier requis | `Players/` |
| Fichier de sauvegarde hôte généralement sélectionné | `00000001.sav` |
| Commande serveur | `save` |
| Redémarrage serveur requis | Oui |
| Modification fichier config requise | Aucune exigence vérifiée |

## Conclusion

Félicitations, vous avez réussi à transférer votre personnage hôte Palworld vers un serveur dédié. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂