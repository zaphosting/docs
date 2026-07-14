---
id: palworld-reset-world
title: "Palworld : Réinitialiser le Monde"
description: "Apprenez à réinitialiser le monde de votre serveur de jeux Palworld en supprimant les données de sauvegarde actuelles et en démarrant une nouvelle carte du monde Palworld sur le même serveur. -> En savoir plus maintenant"
sidebar_label: Palworld : Réinitialiser le Monde
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stocke votre monde actif dans les données de sauvegarde du serveur plutôt que dans un paramètre de monde configurable. Dans ce guide, vous apprendrez comment réinitialiser le monde de votre serveur de jeux Palworld sur ZAP-Hosting en supprimant le dossier de sauvegarde existant afin que le serveur génère un nouveau monde au prochain démarrage.

:::danger Suppression Permanente des Données
La réinitialisation de votre monde Palworld supprime définitivement le monde actuel, y compris la progression des joueurs, les structures, les Pals et toutes les autres données sauvegardées dans ce monde.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Préparation

Avant de commencer, assurez-vous d’avoir accès à l’administration de votre serveur de jeux Palworld et que le serveur soit actuellement hors ligne avant de supprimer des fichiers de sauvegarde.

:::tip Créez une Sauvegarde Avant Tout
Si vous pensez avoir besoin du monde actuel plus tard, créez une sauvegarde avant de continuer. Si disponible pour votre produit, vous pouvez utiliser les fonctionnalités de sauvegarde de votre serveur ou télécharger manuellement le dossier de sauvegarde avant de le supprimer.
:::

## Comprendre le Fonctionnement de la Réinitialisation du Monde Palworld

Une réinitialisation du monde Palworld ne nécessite normalement pas de modifier une valeur de gameplay dans un fichier de configuration. Le monde actif est stocké dans le répertoire de sauvegarde du serveur.

D’après la structure publique actuelle du serveur dédié Palworld, la sauvegarde du monde se trouve généralement dans le chemin suivant :

```text
Pal/Saved/SaveGames/0/
```

Dans ce répertoire, vous trouverez habituellement un dossier avec un nom hexadécimal aléatoire et long, par exemple :

```text
84B5E2264EC387DEDB43179D666031A1
```

Ce dossier contient la sauvegarde du monde actuel. Lorsque vous le supprimez et redémarrez le serveur, Palworld crée automatiquement un nouveau monde.

:::note Aucune Valeur de Config Requise
Pour une réinitialisation standard du monde, aucune entrée de configuration supplémentaire, commande console ou paramètre de démarrage n’est normalement nécessaire. La réinitialisation s’effectue en supprimant les données de sauvegarde existantes.
:::

## Arrêter le Serveur

Avant de supprimer les fichiers du monde, arrêtez votre serveur Palworld depuis l’administration du serveur de jeux ZAP-Hosting.

Supprimer les données de sauvegarde alors que le serveur est en fonctionnement peut provoquer une corruption des fichiers ou une suppression incomplète des données du monde.

:::caution Le Serveur Doit Être Hors Ligne
Assurez-vous que le serveur soit complètement arrêté avant de continuer. Si le serveur tourne encore, il peut recréer ou verrouiller des fichiers pendant que vous les modifiez.
:::

## Ouvrir le Répertoire de Sauvegarde

Dans l’administration de votre serveur Palworld sur ZAP-Hosting, ouvrez la zone de gestion des fichiers et naviguez vers le chemin suivant :

```text
Pal/Saved/SaveGames/0/
```

Selon la configuration de votre produit, vous pouvez y accéder via le gestionnaire de fichiers ou une section similaire d’accès aux fichiers dans l’interface web.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Référence du Chemin

| Élément | Valeur |
| --- | --- |
| Chemin de sauvegarde de base | `Pal/Saved/SaveGames/0/` |
| Nom du dossier du monde | Dossier hexadécimal aléatoire |
| Exemple de dossier | `84B5E2264EC387DEDB43179D666031A1` |
| Action requise | Supprimer le dossier du monde |

## Supprimer la Sauvegarde du Monde Actuel

Dans `Pal/Saved/SaveGames/0/`, localisez le dossier au nom hexadécimal aléatoire. Supprimez ce dossier complètement.

### Ce que Vous Devez Supprimer

| Type de dossier | Action requise |
| --- | --- |
| Dossier de sauvegarde du monde actuel dans `Pal/Saved/SaveGames/0/` | Supprimer |
| `PalworldSettings.ini` ou autres fichiers de config | Ne pas modifier pour cette réinitialisation sauf si vous souhaitez aussi changer les paramètres du serveur |

S’il n’y a qu’un seul dossier hexadécimal dans `Pal/Saved/SaveGames/0/`, c’est généralement la sauvegarde du monde actif. S’il y a plusieurs dossiers et que vous ne savez pas lequel est utilisé, ne devinez pas. Dans ce cas, vérifiez soigneusement vos fichiers serveur actuels ou contactez le support avant de supprimer quoi que ce soit.

:::info Clarification sur la Section Configurations
Bien que de nombreux paramètres Palworld puissent être gérés via la zone **Configs**, la réinitialisation du monde elle-même ne s’effectue généralement pas en modifiant un fichier de configuration. L’action requise est de supprimer le dossier de sauvegarde du monde dans les fichiers du serveur.
:::

## Redémarrer le Serveur

Après avoir supprimé le dossier de sauvegarde, redémarrez votre serveur Palworld.

Au démarrage, le serveur devrait automatiquement générer un nouveau monde car aucune sauvegarde précédente n’est disponible à l’emplacement attendu.

### Commandes ou Modifications Supplémentaires

| Tâche | Requise |
| --- | --- |
| Modifier un fichier de configuration | Non |
| Exécuter une commande en jeu | Non |
| Exécuter une commande console | Non |
| Redémarrer ou démarrer le serveur après suppression | Oui |

:::tip Premier Démarrage Plus Long
Le premier démarrage après suppression de la sauvegarde du monde peut prendre un peu plus de temps que d’habitude car Palworld doit générer un nouveau monde.
:::

## Vérifier la Réinitialisation

Une fois le serveur de nouveau en ligne, connectez-vous et confirmez qu’un nouveau monde a été créé.

Vous pouvez généralement vérifier cela en observant :

- un nouvel état de spawn
- aucune structure construite précédemment par les joueurs
- aucune progression antérieure
- un nouveau dossier de sauvegarde généré dans `Pal/Saved/SaveGames/0/`

Si l’ancien monde apparaît toujours, arrêtez de nouveau le serveur et vérifiez que le bon dossier hexadécimal a bien été supprimé.

## Conclusion

Félicitations, vous avez réussi à réinitialiser votre monde Palworld et à démarrer une nouvelle sauvegarde sur votre serveur existant. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂