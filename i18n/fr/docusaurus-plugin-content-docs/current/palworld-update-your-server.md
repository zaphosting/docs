---
id: palworld-update-your-server
title: "Palworld : Mettre à jour votre serveur"
description: "Apprenez à mettre à jour votre serveur Palworld, déclencher une mise à jour de version et vérifier la dernière build du jeu Palworld sur ZAP-Hosting -> En savoir plus maintenant"
sidebar_label: Palworld : Mettre à jour votre serveur
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les mises à jour du serveur Palworld sont nécessaires pour garder votre serveur compatible avec la dernière version du jeu Palworld et la mise à jour du client. Dans ce guide, vous apprendrez comment mettre à jour votre serveur Palworld sur ZAP-Hosting, où vérifier les paramètres concernés, et que faire si la mise à jour ne s’applique pas correctement.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Préparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld dans l’interface web ZAP-Hosting et la permission de redémarrer ou réinstaller le serveur si nécessaire.

:::info Accès au serveur requis
Vous devez avoir accès à l’administration de votre serveur de jeux, incluant les **Configs**, la **Console**, et les commandes d’alimentation dans le panneau ZAP-Hosting.
:::

:::note À propos des fichiers de configuration
Pour les mises à jour Palworld, il n’y a normalement pas de fichier de configuration de gameplay à modifier pour installer une nouvelle version du jeu. Le processus de mise à jour est généralement géré par l’installation du serveur elle-même. Vous devriez quand même vérifier vos paramètres serveur dans le panneau si vous gérez manuellement le comportement des mises à jour.
:::

## Comment fonctionnent les mises à jour du serveur Palworld sur ZAP-Hosting

Les serveurs dédiés Palworld sur les plateformes d’hébergement mettent souvent à jour leur version lorsque l’installation du serveur vérifie une build plus récente au démarrage. D’après les informations de référence disponibles, les serveurs ZAP-Hosting effectuent généralement cette vérification automatiquement au démarrage ou au redémarrage du serveur.

Si votre serveur est déjà configuré pour les mises à jour automatiques, il suffit en général de le redémarrer après une nouvelle sortie Palworld. Si la mise à jour automatique est désactivée dans les paramètres de votre service, vous devez redémarrer manuellement le serveur après chaque patch pour que la vérification de mise à jour s’exécute.

:::caution Disponibilité des mises à jour automatiques
Le libellé exact et la disponibilité des contrôles de mise à jour automatique peuvent varier selon l’interface actuelle du serveur de jeux ZAP-Hosting et la configuration du produit. Si vous ne voyez pas de bouton lié à la mise à jour dans vos paramètres serveur, ne supposez pas qu’il est définitivement absent ; l’option peut différer selon la version du produit ou être gérée automatiquement en arrière-plan.
:::

## Vérifiez les paramètres serveur concernés

Pour commencer, ouvrez votre serveur Palworld dans l’interface web ZAP-Hosting et examinez les paramètres disponibles liés aux mises à jour et au comportement au démarrage.

### Ouvrir l’administration de votre serveur

1. Connectez-vous à l’interface web ZAP-Hosting.
2. Ouvrez votre serveur de jeux **Palworld**.
3. Parcourez les sections disponibles comme **Configs**, **Console**, et les commandes d’alimentation du serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Vérifiez si un fichier de configuration doit être modifié

Pour le processus de mise à jour Palworld lui-même, il n’existe pas de fichier de configuration Palworld confirmé permettant de changer manuellement la version du jeu dans une opération serveur standard. Les fichiers de configuration Palworld sous **Configs** sont généralement utilisés pour les réglages serveur comme les règles de gameplay, pas pour télécharger une nouvelle build serveur.

Le fichier de paramètres Palworld couramment utilisé est :

| Fichier | Usage typique | Où le trouver |
| --- | --- | --- |
| `PalWorldSettings.ini` | Paramètres de gameplay et comportement serveur | Administration du serveur de jeux sous **Configs** |

:::note Pas d’entrée manuelle de version
Il n’existe pas de clé confirmée dans `PalWorldSettings.ini` pour forcer une mise à jour spécifique de la version serveur Palworld dans une configuration standard ZAP-Hosting. Si votre but est uniquement de mettre à jour le logiciel serveur, modifier `PalWorldSettings.ini` n’est normalement pas nécessaire.
:::

## Mettre à jour le serveur

Une fois que vous avez confirmé votre accès serveur et vérifié les paramètres disponibles, vous pouvez déclencher le processus de mise à jour.

### Redémarrez le serveur pour déclencher une vérification de mise à jour

La méthode principale est de redémarrer le serveur. Sur beaucoup de serveurs Palworld hébergés, le démarrage déclenche une vérification des mises à jour disponibles.

1. Arrêtez ou redémarrez votre serveur Palworld depuis l’interface web ZAP-Hosting.
2. Attendez que le serveur soit complètement arrêté.
3. Démarrez à nouveau le serveur.
4. Laissez plusieurs minutes pour que le démarrage et la mise à jour se terminent.

Si le comportement de mise à jour automatique ZAP-Hosting est actif pour votre service, ce redémarrage devrait déclencher le téléchargement et l’application de la dernière mise à jour Palworld disponible.

### Si les mises à jour automatiques sont désactivées

Si votre service est configuré pour ne pas se mettre à jour automatiquement, vous devez redémarrer manuellement le serveur après chaque patch ou mise à jour de version Palworld publiée.

Utilisez le même processus :

1. Arrêtez le serveur.
2. Redémarrez le serveur.
3. Attendez que le serveur termine son démarrage.

:::tip Meilleure pratique après une sortie Palworld
Après l’annonce d’une nouvelle sortie ou le déploiement d’un patch Palworld, redémarrez votre serveur pendant une période de faible activité. Cela évite les problèmes de connexion des joueurs causés par un décalage entre la version client et serveur.
:::

## Vérifiez que la mise à jour a été appliquée

Après le redémarrage du serveur, vous devez confirmer que la nouvelle version est active.

### Vérifiez la sortie de la console

Ouvrez la **Console** dans l’administration de votre serveur de jeux et consultez le journal de démarrage. Cherchez des signes indiquant que le serveur a démarré normalement et n’a pas rencontré d’erreurs de mise à jour ou de validation de fichiers.

Comme les lignes exactes du journal peuvent varier selon la build serveur, concentrez-vous sur le fait que le serveur démarre avec succès et accepte les connexions des clients sur la dernière version Palworld.

### Utilisez la commande `info`

Si votre console serveur la supporte, lancez la commande suivante :

```text
info
```

Cette commande permet de vérifier les informations serveur après le démarrage.

| Commande | But |
| --- | --- |
| `info` | Affiche les informations serveur pour vérification après la mise à jour |

:::note Disponibilité des commandes
Le support des commandes console peut varier selon l’implémentation actuelle du serveur dédié Palworld et la manière dont l’hébergeur expose l’accès console. Si `info` ne retourne pas de sortie utile dans votre environnement, utilisez plutôt le journal de démarrage et un test de connexion depuis un client de jeu à jour.
:::

## Résoudre un échec de mise à jour

Si le redémarrage ne met pas à jour le serveur, vous devez utiliser les options de récupération disponibles dans le panneau ZAP-Hosting.

### Réinstallez ou vérifiez les fichiers serveur

Si le serveur semble toujours utiliser une ancienne version après un redémarrage :

1. Arrêtez complètement le serveur.
2. Ouvrez l’option de réinstallation ou de récupération dans l’administration de votre serveur de jeux ZAP-Hosting.
3. Si disponible, utilisez une option **Vérifier l’intégrité** ou similaire pour contrôler les fichiers.
4. Redémarrez le serveur après la fin du processus.

Ce processus vérifie ou retélécharge les fichiers serveur Palworld et peut résoudre les mises à jour incomplètes ou échouées.

:::caution Précaution sur les données sauvegardées
Avant d’utiliser les fonctions liées à la réinstallation, assurez-vous de comprendre si l’option sélectionnée affecte uniquement les fichiers du jeu ou aussi les données du monde. Si le panneau ne l’explique pas clairement, faites une sauvegarde d’abord ou contactez le support avant de continuer.
:::

### Confirmez la correspondance des versions client et serveur

Parfois, le serveur est bien mis à jour, mais les joueurs ne peuvent pas se connecter car leur client local est sur une version différente.

Vérifiez les points suivants :

| Vérification | Pourquoi c’est important |
| --- | --- |
| Serveur redémarré après le patch | Le démarrage déclenche souvent la mise à jour |
| Dernière mise à jour client installée | Les joueurs doivent avoir la même version du jeu |
| Pas d’erreurs au démarrage dans la console | Les erreurs peuvent bloquer la mise à jour |
| Vérification des fichiers effectuée | Les fichiers corrompus peuvent empêcher la mise à jour |

## Ce que vous devez modifier dans les Configs

Comme ce guide couvre spécifiquement un processus manuel et que la tâche fait référence aux **Configs**, il est important de clarifier le cadre :

- Les fichiers de configuration Palworld sous **Configs** servent aux réglages serveur.
- Il n’existe pas d’entrée de config Palworld confirmée dans `PalWorldSettings.ini` qui télécharge ou applique manuellement une mise à jour logicielle serveur.
- Pour une mise à jour normale de version, vous n’avez généralement **pas** besoin de modifier une valeur dans le fichier de config.
- L’action requise est habituellement un **redémarrage du serveur**, suivi d’une **vérification des fichiers ou réinstallation** uniquement si la mise à jour échoue.

Si ZAP-Hosting expose plus tard un bouton dédié à la mise à jour ou un paramètre de démarrage dans le panneau, vous devez utiliser le libellé exact affiché dans votre interface plutôt que d’ajouter des entrées non supportées dans le fichier de config.

:::danger Ne pas ajouter de clés de config non vérifiées
Ne collez pas de commandes de mise à jour aléatoires, paramètres SteamCMD, ou clés non documentées dans `PalWorldSettings.ini` ou d’autres fichiers sous **Configs** sauf si elles sont explicitement documentées pour votre service Palworld ZAP-Hosting actuel. Les entrées non supportées ne mettront pas à jour le serveur de manière fiable et peuvent causer des problèmes de configuration.
:::

## Après la mise à jour

Une fois la mise à jour appliquée avec succès :

1. Assurez-vous que le serveur fonctionne normalement.
2. Vérifiez la console pour détecter d’éventuelles erreurs.
3. Testez la connexion au serveur avec un client Palworld à jour.
4. Lancez la commande `info` dans la console si elle est supportée.

À ce stade, votre serveur devrait être prêt pour les joueurs sur la dernière mise à jour de version.

## Conclusion

Félicitations, vous avez mis à jour avec succès votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂