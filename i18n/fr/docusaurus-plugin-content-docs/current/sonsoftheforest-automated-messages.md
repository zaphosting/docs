---
id: sonsoftheforest-automated-messages
title: "Sons of the Forest : Messages Automatisés du Serveur - Tiens tes joueurs au courant des news, liens sociaux et plus encore !"
description: "Configure des messages automatisés sur ton serveur grâce aux tâches planifiées pour afficher des annonces récurrentes"
sidebar_label: Messages Automatisés du Serveur
services:
- gameserver-sonsoftheforest
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les messages automatisés du serveur sont un moyen simple mais efficace de communiquer des infos importantes aux joueurs directement en jeu. Tu peux les utiliser pour afficher les règles du serveur, annoncer des événements, partager des astuces utiles ou envoyer des rappels à intervalles réguliers sans que les admins aient à intervenir manuellement.

Avec les **Tâches Planifiées**, les messages du serveur peuvent être envoyés automatiquement dans le chat en jeu de **Sons of the Forest** en exécutant des commandes prédéfinies selon un planning récurrent.

<InlineVoucher />

## Comment fonctionnent les messages automatisés

Les messages automatisés sont créés en programmant une tâche qui exécute une commande serveur à un moment ou intervalle défini. La commande peut servir à envoyer un message dans le chat, une diffusion ou une notification serveur.

Une fois configurée, la tâche tourne automatiquement en arrière-plan et affiche le message à tous les joueurs connectés. Ça garantit une communication régulière sans que le staff ait besoin d’être en ligne.

## Créer un message automatisé

Pour créer des messages automatisés sur ton serveur de jeux, ouvre ton tableau de bord serveur et va dans la section **Tâches Planifiées**. Crée une nouvelle tâche planifiée et choisis l’option d’exécuter une **commande**. Dans le champ commande, entre la commande message supportée par ton serveur de jeux.

```
<commande message> <ton texte de message>
```

Remplace la commande par la commande du jeu ou d’une extension que tu veux utiliser pour déclencher les messages et `<ton texte de message>` par le message que tu souhaites afficher aux joueurs.

Tu peux ensuite définir la fréquence d’envoi du message, par exemple toutes les quelques minutes, toutes les heures, ou à des heures précises de la journée. Pour des instructions détaillées sur la création de tâches planifiées, consulte le [guide Tâches planifiées](gameserver-scheduled-tasks.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)

## Personnaliser les intervalles des messages

Les tâches planifiées offrent un contrôle total sur quand et à quelle fréquence les messages apparaissent. Les cas d’usage courants incluent :

- Afficher les règles du serveur toutes les quelques minutes
- Annoncer les événements à venir à des heures fixes
- Envoyer des astuces de jeu aux nouveaux ou aux joueurs de retour
- Rappeler aux joueurs les liens Discord ou site web

L’intervalle peut être modifié à tout moment sans redémarrer le serveur, ce qui permet une flexibilité au fur et à mesure que ton serveur grandit.

## Notes importantes

La fonctionnalité des messages automatisés dépend des capacités du jeu et des commandes disponibles. Si les messages planifiés basiques peuvent être mis en place avec les commandes serveur standards, cette méthode peut être limitée en termes de mise en forme, conditions ou personnalisation avancée.

Si le jeu supporte des plugins, mods ou extensions offrant plus de flexibilité et d’options de personnalisation, il peut être intéressant d’utiliser ces solutions. Dans ce cas, des systèmes de messagerie spécialisés peuvent proposer des fonctionnalités plus riches que les commandes de base du jeu et être mieux adaptés aux serveurs complexes ou très personnalisés.

## Conclusion

Les messages automatisés du serveur sont un moyen fiable de garder les joueurs informés et engagés sans effort manuel. En utilisant les tâches planifiées pour exécuter des commandes message, les admins peuvent assurer une communication constante sur leur serveur.

Une fois configurés, les messages automatisés tournent de manière autonome et peuvent être facilement réutilisés en ajustant simplement la commande message spécifique au jeu et le texte.

Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />