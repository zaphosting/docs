---
id: gameserver-database-manage-sqlfiles
title: "Serveur de jeux : Importer ou Exporter un fichier SQL"
description: "Découvrez comment gérer la base de données de votre serveur de jeux en important et exportant efficacement des fichiers SQL via phpMyAdmin → En savoir plus maintenant"
sidebar_label: Importer/Exporter des fichiers SQL
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une grande variété de jeux pour votre serveur de jeux utilisent des bases de données pour stocker des données à long terme et fonctionner correctement. Certains jeux, ressources ou mods peuvent vous fournir un fichier `.sql` qui sert à importer les tables et données appropriées dans votre propre base de données. Exporter votre base de données peut aussi être utile pour transférer vos données entre systèmes ou simplement pour sauvegarder manuellement vos fichiers. Dans ce guide, nous allons explorer le processus d’importation et d’exportation de fichiers SQL dans ou depuis la base de données de votre serveur de jeux via l’interface phpMyAdmin.

<InlineVoucher />

## Préparation

Pour commencer, vous devez accéder à la base de données MySQL de votre serveur de jeux, ce qui peut se faire directement via l’interface web. Vous devez également avoir les fichiers `.sql` prêts à être importés dans votre base de données.

:::tip
Certains fichiers SQL peuvent vous obliger à utiliser un nom de base de données spécifique, ce qui peut entrer en conflit avec le nom de base de données ZAP ID qui vous est automatiquement attribué et causer des erreurs.

Vous pouvez identifier ce type de fichier en cherchant une instruction `USE xxx` ou `CREATE DATABASE` en ouvrant le fichier dans un éditeur de texte. Si c’est le cas, vous devez supprimer ces deux instructions et enregistrer le fichier avant l’importation.

![](https://screensaver01.zap-hosting.com/index.php/s/DRoDqGngrS7qbQW/preview)
:::

Rendez-vous dans la section **Outils->Bases de données** et utilisez le bouton bleu lien pour ouvrir l’interface phpMyAdmin. Connectez-vous avec les identifiants présents sur votre page d’interface web.

![](https://screensaver01.zap-hosting.com/index.php/s/8ix7q4tHmPnyYSy/preview)

Pour en savoir plus sur phpMyAdmin, nous vous recommandons de lire notre [guide d’accès à la base de données](gameserver-databases-pma.md), qui couvre l’interface en détail.

## Importer un fichier SQL

Une fois connecté à l’interface phpMyAdmin, sélectionnez la base de données principale, qui devrait être votre ZAP ID. Dans la barre de navigation en haut, trouvez la section **Importer**.

Sur cette page, utilisez le bouton **Parcourir...** pour ouvrir une fenêtre d’explorateur de fichiers. Trouvez le fichier SQL que vous souhaitez importer dans votre base de données et ouvrez-le.

:::note
La taille maximale pour votre fichier SQL est de 2 Mo. Si votre fichier est plus volumineux, nous recommandons d’utiliser un découpeur SQL comme le [Pinetools SQL-Splitter](https://pinetools.com/split-files) qui le divisera en fichiers plus petits. Vous pourrez ensuite les importer séparément.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/TgZZBaSJJmXraZc/preview)

Vous pouvez aussi ajuster quelques paramètres supplémentaires si vous le souhaitez. Pour la plupart des utilisateurs, les valeurs par défaut conviennent, donc faites simplement défiler vers le bas et cliquez sur le bouton **Importer**.

Le fichier SQL devrait maintenant être importé avec succès et vous devriez voir cela reflété dans la base de données par des changements comme de nouvelles tables, des données, etc.

## Exporter un fichier SQL

Exporter votre base de données est une autre fonction essentielle, utile pour transférer facilement des bases ou faire des sauvegardes. Sélectionnez à nouveau la base principale qui devrait être votre ZAP ID et trouvez la section **Exporter** dans la barre de navigation en haut.

Par défaut, la méthode d’export **Rapide** est sélectionnée, ce qui exportera automatiquement toutes vos tables et données. Si vous souhaitez personnaliser les tables et données à exporter, choisissez l’option **Personnalisé** et ajustez les paramètres selon vos préférences. Une fois prêt, cliquez simplement sur le bouton **Exporter** pour télécharger un fichier SQL localement sur votre système.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa2HakWpYGpfzfA/preview)

## Conclusion

Vous avez exporté avec succès votre base de données dans un fichier SQL, ce qui vous permet de l’importer facilement à l’avenir. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />