---
id: satisfactory-blueprints
title: "Satisfactory : Gérer les Blueprints (Import/Export)"
description: "Découvrez comment créer, partager et gérer des blueprints personnalisés pour des constructions et agencements efficaces dans Satisfactory → En savoir plus maintenant"
sidebar_label:  Gérer les Blueprints
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Satisfactory propose un système de blueprints personnalisés qui permet aux joueurs de créer et partager des plans de construction avec la communauté. Ces blueprints vont des agencements d’usines optimisés aux lounges design en passant par des réseaux ferroviaires complexes.

Une large sélection de blueprints est disponible via le site Satisfactory Calculator. Les blueprints peuvent être importés et exportés très facilement.

<InlineVoucher />

## Gérer les Blueprints

La gestion des blueprints sur un serveur de jeux Satisfactory se fait entièrement via FTP. Si tu ne sais pas encore comment te connecter à ton serveur avec FTP, consulte notre [guide Accès FTP](gameserver-ftpaccess.md) pour commencer.

### Importer des Blueprints
Pour commencer, il te faut récupérer les fichiers blueprint que tu souhaites uploader. Ceux-ci comprennent un fichier `.sbp` et, optionnellement, un fichier de configuration `.sbpcfg` associé. Ces fichiers peuvent provenir de sources fiables de la communauté ou être créés depuis d’autres parties.

Avant de lancer l’upload, il est conseillé d’arrêter complètement le serveur via ton interface de gestion. Cela évite tout conflit de fichiers ou problème de mémoire pendant l’upload.

Ensuite, connecte-toi au serveur avec un client FTP. Une fois connecté, rends-toi dans le dossier des blueprints :

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

Dans ce dossier, il doit y avoir un sous-dossier nommé exactement comme le monde (ou la session) utilisé. Ce nom correspond au fichier `.sav` stocké sur le serveur. Si ce dossier n’existe pas encore, il faut le créer manuellement avec le nom exact du fichier de sauvegarde.

Une fois le bon sous-dossier prêt, upload les fichiers blueprint dans ce dossier. Il est important d’inclure à la fois le fichier `.sbp` et, si disponible, le fichier `.sbpcfg`. Après l’upload, redémarre le serveur. Une fois relancé, les blueprints uploadés seront accessibles dans le jeu via l’interface du Blueprint Designer, prêts à être utilisés normalement.

### Exporter des Blueprints

Exporter des blueprints depuis un serveur Satisfactory signifie télécharger les fichiers blueprint du serveur pour les stocker localement sur ton PC. Commence par arrêter le serveur, cela garantit que les fichiers blueprint sont dans un état stable et accessible. Ouvre ton client FTP et connecte-toi au serveur. Navigue jusqu’au dossier :

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

Trouve le sous-dossier correspondant au monde/session dont tu veux exporter les blueprints. Dans ce dossier, tu trouveras les fichiers `.sbp` ainsi que le fichier optionnel `.sbpcfg` pour chaque blueprint sauvegardé.

Télécharge les fichiers blueprint souhaités directement sur ton ordinateur via le client FTP. Une fois le transfert terminé, tu peux archiver les fichiers, les ouvrir localement ou les importer dans une autre installation ou environnement serveur. Si tu veux réutiliser les blueprints sur un autre serveur, suis exactement la même procédure d’import décrite plus haut.

## Conclusion

Gérer les blueprints sur un serveur de jeux Satisfactory est un processus simple quand on suit les étapes expliquées. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂


<InlineVoucher />