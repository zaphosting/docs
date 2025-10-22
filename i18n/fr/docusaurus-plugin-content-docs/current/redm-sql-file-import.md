---
id: redm-sql-file-import
title: "RedM : Importation de fichier SQL"
description: "Découvrez comment importer correctement des fichiers SQL dans votre base de données RedM pour assurer le bon fonctionnement des ressources et l’intégration en base → En savoir plus maintenant"
sidebar_label: Importation de fichier SQL
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Importer des fichiers SQL dans votre base de données RedM

Beaucoup de ressources pour RedM nécessitent une base de données pour fonctionner correctement. Il est donc important d’importer correctement les fichiers SQL fournis avec vos ressources dans votre base de données afin que les ressources puissent créer des entrées dans votre base et fonctionner comme prévu.

:::info
Toutes les ressources ne nécessitent pas une base de données pour fonctionner ! Lorsque vous téléchargez une ressource, vérifiez la description ou la documentation pour savoir si vous devez importer un fichier SQL.
:::

Dans de nombreux cas, un ou plusieurs fichiers avec l’extension **.sql** seront inclus dans les fichiers téléchargés pour la ressource. Ceux-ci doivent être importés dans la base de données.

## Préparer le fichier SQL

Dans cet exemple, nous allons importer le fichier SQL pour le framework RP **RedEM**. Vous devez préparer le fichier SQL pour la ressource que vous souhaitez importer. Pour cela, ouvrez le dossier de votre ressource nécessitant une base de données et trouvez un fichier avec l’extension **.sql**.

![](https://github.com/zaphosting/docs/assets/42719082/331d2a3d-0d81-4b39-8ad6-d0aba84ff19c)

:::info
Avant de procéder à l’import, ouvrez le fichier .sql avec un éditeur de texte et vérifiez si les lignes suivantes sont présentes :

![](https://github.com/zaphosting/docs/assets/42719082/dfc43c55-9918-45e7-99eb-1f70193c0be1)

Si elles existent dans votre fichier .sql, assurez-vous de supprimer les lignes `CREATE` et `USE` de la base de données puis sauvegardez le fichier, sinon le fichier SQL ne pourra pas être importé.

Cela s’explique par le fait que la première ligne déclare la création d’une nouvelle base de données, ce qui n’est pas nécessaire car votre serveur de jeux RedM a déjà une base avec un autre nom. La deuxième ligne indique que la base nommée `essentialmode` doit être utilisée pour l’import, mais là encore ce n’est pas nécessaire car vous utiliserez une base existante pour l’import.
:::

## Importer le fichier SQL dans votre base de données RedM

Vous devez maintenant accéder à la section **Base de données** sur l’interface web de votre serveur de jeux.

![](https://github.com/zaphosting/docs/assets/42719082/5f0f81ec-832b-4b9e-a39a-8ec78fd10890)

Sur la page base de données, vous aurez accès à plusieurs fonctions pour gérer votre base, comme les options de sauvegarde, création, gestion, etc. Nous allons nous concentrer sur l’accès à votre base, mais n’hésitez pas à consulter nos autres guides base de données pour plus d’infos : [Accès externe à la base de données](gameserver-database-external-access.md).

Cliquez sur l’icône bleue de redirection qui vous mènera à l’outil **phpmyadmin** où vous pourrez facilement accéder à votre base. Connectez-vous avec les identifiants fournis sur la page base de données si demandé.

Une fois sur la page, sélectionnez votre base dans la liste à gauche. Le nom de votre base commencera **toujours** par le préfixe `zap`.

![](https://github.com/zaphosting/docs/assets/42719082/30fa6041-b94e-4ac8-a3cd-286cca226dba)

Pour l’instant, votre base sera vide si vous ne l’avez jamais utilisée. Vous allez enfin pouvoir importer le fichier .sql.

Cliquez sur le bouton **Importer** dans la barre de navigation en haut de phpmyadmin pour ouvrir le menu d’import.

![](https://github.com/zaphosting/docs/assets/42719082/c0ca30f0-c520-4a71-843a-296064ba5761)

Ensuite, cliquez sur le bouton **Parcourir...** qui ouvrira une fenêtre d’explorateur de fichiers. Sélectionnez le fichier **.sql** que vous souhaitez importer.

![](https://github.com/zaphosting/docs/assets/42719082/02d09225-a68d-498b-a2bd-df57386ce242)

:::note
La taille maximale du fichier est de 2 Mo. Si votre fichier SQL est plus volumineux, utilisez un outil de découpage SQL pour diviser un gros fichier en plusieurs parties plus petites. Nous recommandons l’outil [Pinetools SQL-Splitter](https://pinetools.com/split-files) qui fait ça pour vous. Une fois découpés, vous pouvez importer les fichiers SQL normalement.
:::

Enfin, cliquez sur le bouton **Importer** en bas de la page pour lancer l’import. Si tout s’est bien passé, vous verrez un message de succès et une nouvelle table sera créée dans votre base, visible à gauche.

![](https://github.com/zaphosting/docs/assets/42719082/5fef5d58-78f1-4b59-bc3e-1e0af2ff981b)

Vous avez importé avec succès un fichier SQL dans la base de votre serveur de jeux !

## Conclusion

Importer un fichier SQL pour votre serveur RedM est indispensable pour utiliser beaucoup de ressources sans souci. Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />