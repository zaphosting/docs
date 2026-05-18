---
id: arma-reforger-mods
title: "Arma Reforger : Installer des mods via le Workshop"
description: "Apprends comment installer et activer les mods Arma Reforger Workshop sur ton serveur → Découvre-le maintenant"
sidebar_label: Installer des mods
services:
  - gameserver-arma-reforger
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les mods jouent un rôle clé pour enrichir l’expérience de jeu dans **Arma Reforger**. Grâce au **Workshop Arma Reforger**, les joueurs et créateurs publient des missions personnalisées, des modifications de gameplay, des cartes et du contenu additionnel utilisables sur les serveurs.

Installer des mods permet aux propriétaires de serveurs de personnaliser le gameplay, d’introduire de nouvelles mécaniques ou de proposer des missions uniques à leur communauté. Une fois installés, les joueurs qui rejoignent le serveur téléchargeront automatiquement les mods requis avant de se connecter.


<InlineVoucher />

## Trouver des mods

Tu as d’abord besoin de l’**ID Workshop** du mod que tu souhaites installer. Ouvre le **Workshop Arma Reforger** et rends-toi sur le mod désiré. Chaque entrée du workshop possède un identifiant unique que le serveur utilise pour télécharger automatiquement le mod.

![img](https://screensaver01.zap-hosting.com/index.php/s/jMNGbRAQdjKcDyn/preview)

## Configuration

Pour installer des mods Workshop sur ton serveur, ouvre ton **panneau de contrôle du serveur de jeux** et va dans **Paramètres**. Trouve le champ de configuration nommé **Workshop-Mods**. Dans ce champ, saisis l’**ID Workshop** du mod que tu veux installer. Exemple de configuration avec un seul mod :

```
1234567890
```
Si tu souhaites installer plusieurs mods, entre chaque ID Workshop en les séparant par une **virgule**. Exemple de configuration avec plusieurs mods :

```
1234567890,9876543210,1357924680
```
Après avoir saisi les IDs des mods souhaités, **enregistre les paramètres** et redémarre le serveur. Au démarrage, le serveur téléchargera automatiquement les mods listés depuis le Workshop Arma Reforger et les chargera.



## Conclusion

Félicitations ! Tu as installé avec succès des **mods Arma Reforger Workshop** sur ton serveur. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />