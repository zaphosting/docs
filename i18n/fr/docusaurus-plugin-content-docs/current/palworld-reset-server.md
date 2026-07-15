---
id: palworld-reset-server
title: "Palworld : Réinitialiser le serveur"
description: "Apprenez à réinitialiser votre serveur Palworld dans l’interface web ZAP, comprenez quelles configurations sont supprimées, et restaurez les données par défaut du serveur en toute sécurité. -> En savoir plus maintenant"
sidebar_label: "Réinitialiser le serveur"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stocke votre monde, la progression des joueurs et les paramètres du serveur sur le serveur de jeux. Dans ce guide, vous apprendrez comment réinitialiser complètement votre serveur Palworld sur ZAP-Hosting et repartir avec une installation par défaut toute neuve.

:::danger Avertissement : Suppression Totale des Données
Une réinitialisation complète supprime définitivement vos sauvegardes existantes, les modifications de configuration et tous les autres fichiers du serveur présents sur l’installation actuelle. Utilisez cette option uniquement en dernier recours.
:::



## Préparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld dans l’interface web ZAP-Hosting et que vous n’avez plus besoin des données actuelles du monde.

:::info Sauvegardez Vos Données Importantes Avant Tout
Si vous souhaitez conserver une copie de votre monde actuel ou de votre configuration, créez une sauvegarde avant de continuer. Une fois la réinitialisation effectuée, les données supprimées ne peuvent normalement pas être restaurées.
:::

## Comprendre ce que fait une réinitialisation du serveur Palworld

Une réinitialisation complète de Palworld ne correspond pas à modifier un seul paramètre dans le fichier de configuration. Elle réinstalle entièrement le serveur et supprime les données actuelles du serveur.

Le processus de réinitialisation supprime généralement les éléments suivants :

| Type de données | Supprimé lors de la réinitialisation |
| --- | --- |
| Données de sauvegarde du monde | Oui |
| Progression des joueurs | Oui |
| Modifications de configuration du serveur | Oui |
| Mods installés ou fichiers personnalisés | Oui |
| Fichiers de jeu par défaut | Réinstallés automatiquement |

Après la réinitialisation, votre serveur démarre avec une installation fraîche et des paramètres par défaut.

## Vérifiez d’abord l’emplacement de la configuration

Pour les modifications normales de configuration Palworld, vous pouvez accéder aux fichiers concernés dans l’administration de votre serveur de jeux sous `Configs`. Les principaux paramètres de Palworld sont généralement stockés dans le fichier suivant :

| Fichier | Utilité |
| --- | --- |
| `PalWorldSettings.ini` | Fichier principal de configuration du serveur Palworld |

Dans l’interface ZAP-Hosting, vous pouvez généralement y accéder via l’administration de votre serveur Palworld sous `Configs`.

:::note La réinitialisation ne nécessite pas d’édition manuelle de la config
Une réinitialisation complète du serveur ne vous oblige pas à modifier manuellement `PalWorldSettings.ini`. Ce fichier est pertinent pour les changements de paramètres normaux, mais une réinitialisation complète s’effectue en réinstallant ou en formatant le serveur pour recréer tous les fichiers avec les valeurs par défaut.
:::

Si votre objectif est uniquement de modifier les paramètres de jeu sans supprimer tout le serveur, vous devez éditer le fichier de configuration dans `Configs` plutôt que de faire une réinitialisation complète.

## Arrêtez le serveur

Avant de lancer la réinitialisation, vous devez arrêter complètement le serveur Palworld.

1. Connectez-vous à l’interface web ZAP-Hosting.
2. Ouvrez votre serveur de jeux Palworld.
3. Arrêtez le serveur via les contrôles d’administration du serveur.
4. Attendez que le statut du serveur confirme qu’il est hors ligne.

:::caution Ne réinitialisez pas pendant que le serveur tourne
Si vous lancez une réinitialisation alors que le serveur est encore actif, les fichiers risquent de ne pas être supprimés correctement et les données de sauvegarde peuvent devenir incohérentes.
:::

## Réinstallez et réinitialisez le serveur

Une réinitialisation complète sur Palworld s’effectue en réinstallant le serveur avec des options de formatage ou de réinitialisation dans l’interface ZAP.

### Ouvrez la fonction de réinstallation

Dans l’administration de votre serveur Palworld, cherchez la fonction de réinstallation ou de réinitialisation dans la gestion du serveur.

Comme les libellés de l’interface peuvent varier selon les versions du panneau, le texte exact peut différer légèrement. Sur ZAP-Hosting, cette fonction se trouve généralement dans la zone d’administration du serveur où les actions de réinstallation ou de formatage sont disponibles.



### Lancez la réinitialisation complète

Utilisez l’option de réinstallation disponible qui effectue un formatage complet ou une réinitialisation des données du serveur.

Lors de cette étape, confirmez l’action si le panneau demande une confirmation.

:::danger Cette action supprime toutes les données du serveur
Une réinstallation complète ou un formatage supprime les sauvegardes, configurations et fichiers personnalisés du serveur. Continuez uniquement si vous êtes certain de vouloir tout réinitialiser.
:::

### Attendez la fin de l’installation

Après avoir confirmé la réinitialisation, patientez jusqu’à la fin du processus de réinstallation. Selon l’état du panneau et la taille du serveur, cela peut prendre quelques minutes.

Ne coupez pas le processus pendant la réinstallation du serveur.

## Démarrez le serveur Palworld fraîchement réinstallé

Une fois la réinstallation terminée, démarrez à nouveau le serveur Palworld depuis l’administration du serveur.

Après le démarrage :

- une nouvelle sauvegarde du monde sera créée
- les paramètres par défaut du serveur seront utilisés
- la progression précédente des joueurs et du monde ne sera plus présente

Si besoin, vous pouvez maintenant retourner dans `Configs` et ajuster à nouveau vos paramètres Palworld dans `PalWorldSettings.ini`.

## Vérifiez le résultat de la réinitialisation

Après le démarrage du serveur, connectez-vous et confirmez que la réinitialisation a réussi.

Vous devez vérifier les points suivants :

| Vérification | Résultat attendu |
| --- | --- |
| État du monde | Monde tout neuf |
| Données des joueurs | Aucune progression précédente |
| Paramètres du serveur | Valeurs par défaut sauf modification ultérieure |
| Fichiers personnalisés ou mods | Supprimés sauf réinstallation manuelle |

Si l’ancien monde apparaît encore, arrêtez le serveur et vérifiez si le processus de réinstallation s’est bien terminé dans le panneau ZAP. Si le panneau n’a pas effectué un formatage complet, vous devrez peut-être répéter la procédure avec soin.

## Reconfigurez les paramètres du serveur après la réinitialisation

Après une réinitialisation réussie, votre serveur Palworld utilisera les valeurs de configuration par défaut. Si vous souhaitez personnaliser à nouveau le serveur, ouvrez la section `Configs` dans l’administration de votre serveur de jeux et éditez `PalWorldSettings.ini`.

Les tâches typiques après réinitialisation peuvent inclure :

- changer le nom du serveur
- définir un mot de passe
- ajuster la difficulté ou les valeurs de gameplay
- réappliquer les modifications de configuration personnalisées
- réinstaller les mods supportés ou fichiers additionnels si nécessaire

:::tip Réappliquez les paramètres avec précaution
Si une configuration précédente posait problème, évitez de recopier immédiatement tous les anciens paramètres. Réappliquez uniquement ceux dont vous avez vraiment besoin pour identifier plus facilement les changements problématiques.
:::

## Référence de configuration

Le tableau suivant résume le fichier concerné et le comportement de la réinitialisation :

| Élément | Détails |
| --- | --- |
| Fichier de config principal | `PalWorldSettings.ini` |
| Emplacement ZAP pour éditer la config | `Configs` dans l’administration du serveur de jeux |
| Modification manuelle requise pour réinitialisation complète | Non |
| Action requise pour réinitialisation complète | Réinstaller ou formater/réinitialiser le serveur |
| Redémarrage requis après | Oui, redémarrez le serveur après réinstallation |
| Commandes supplémentaires requises | Aucune confirmée |

:::note Le nommage dans l’interface peut varier
Le libellé exact de l’option de réinstallation ou de formatage peut différer selon la version actuelle de l’interface web ZAP. Si vous ne trouvez pas la fonction de réinitialisation, contactez le support avant d’essayer d’autres méthodes de suppression de fichiers.
:::

## Conclusion

Félicitations, vous avez réussi à réinitialiser votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂