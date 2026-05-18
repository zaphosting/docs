---
id: over-the-top-wwi-configure-chat-settings
title: "Over the Top WWI : Configurer les paramètres du chat"
description: "Apprenez à configurer les paramètres de chat et de communication sur votre serveur Over the Top WWI → En savoir plus maintenant"
sidebar_label: Paramètres du chat
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les paramètres du chat dans **Over the Top WWI** contrôlent la façon dont les joueurs communiquent par texte pendant le jeu. Ajuster ces paramètres vous permet d’activer la communication globale, de restreindre l’utilisation du chat ou de couper complètement le son des joueurs si nécessaire.

Une bonne configuration du chat aide à maintenir l’ordre sur le serveur et améliore l’expérience globale des joueurs.

<InlineVoucher />

## Configuration

Les paramètres du chat se configurent dans le fichier de configuration du serveur. Vous pouvez accéder et modifier ce fichier dans votre **panneau de contrôle du serveur de jeux** sous **Configs**. Trouvez et ouvrez le fichier de configuration `ServerConfiguration.ini`. À l’intérieur, repérez les paramètres suivants :

```
AllowAllChat = 1
ServerMuteAll = 0
BannedWordsPathString = BannedWords.txt
```

- `AllowAllChat` active ou désactive la communication globale dans le chat

- `0` → Désactivé
- `1` → Activé

- `ServerMuteAll` coupe tout le chat des joueurs quand activé

- `0` → Désactivé
- `1` → Activé

- `BannedWordsPathString` définit le fichier utilisé pour filtrer les mots interdits. Ce fichier contient la liste des termes bloqués qui ne seront pas autorisés dans le chat

Ajustez ces paramètres pour contrôler la communication des joueurs et appliquer les règles de modération du chat sur votre serveur.

Après avoir modifié le fichier `ServerConfiguration.ini`, sauvegardez-le et redémarrez votre serveur. Les nouveaux paramètres de chat seront appliqués automatiquement.

## Conclusion

Félicitations ! Vous avez configuré avec succès les paramètres du chat sur votre **serveur Over the Top WWI**. Cela vous permet de gérer la communication des joueurs et de maintenir un environnement contrôlé et agréable.

Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous assister ! 🙂

<InlineVoucher />