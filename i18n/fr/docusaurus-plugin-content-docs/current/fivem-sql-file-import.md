---
id: fivem-sql-file-import
title: "FiveM : Importation de fichier SQL"
description: "Comprends comment importer correctement les fichiers SQL pour que les ressources FiveM fonctionnent bien avec ta base de données → Découvre tout maintenant"
sidebar_label: Importation de fichier SQL
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Beaucoup de ressources pour FiveM nécessitent une base de données pour bien fonctionner. Du coup, c’est super important d’importer correctement les fichiers SQL fournis avec tes ressources dans ta base de données pour que les ressources puissent créer des entrées et tourner comme prévu.

:::info
Toutes les ressources ne nécessitent pas une base de données pour fonctionner ! Quand tu télécharges une ressource, check la description ou la doc pour savoir si tu dois importer un fichier SQL.
:::

Dans pas mal de cas, un ou plusieurs fichiers avec l’extension **.sql** seront inclus dans les fichiers téléchargés de la ressource. Ces fichiers doivent être importés dans ta base de données.

<InlineVoucher />

## Préparer le fichier SQL

Dans cet exemple, on va importer le fichier SQL pour **ESX**. Tu dois préparer le fichier SQL pour la ressource que tu veux importer. Pour ça, ouvre le dossier de ta ressource qui nécessite une base de données et trouve un fichier avec l’extension **.sql**.

![](https://github.com/zaphosting/docs/assets/42719082/3d2b4cd2-d98e-4b25-b606-9f451164edc9)

:::info
Avant de lancer l’import, ouvre le fichier .sql avec un éditeur de texte et vérifie si les lignes suivantes sont présentes :

![](https://github.com/zaphosting/docs/assets/42719082/dfc43c55-9918-45e7-99eb-1f70193c0be1)

Si c’est le cas, pense à supprimer les lignes `CREATE` et `USE` de la base de données puis sauvegarde le fichier, sinon le fichier SQL ne pourra pas être importé.

Pourquoi ? Parce que la première ligne indique qu’il faut créer une nouvelle base de données, ce qui n’est pas nécessaire puisque ton serveur de jeux RedM a déjà une base avec un autre nom. La deuxième ligne indique d’utiliser la base `essentialmode` pour l’import, mais là encore ce n’est pas nécessaire car tu as déjà une base existante pour l’import.
:::

## Importer le fichier SQL dans ta base de données

Maintenant, rends-toi dans la section **Base de données** sur le webinterface de ton serveur de jeux.

![](https://github.com/zaphosting/docs/assets/42719082/83ba522a-929e-4a90-8c9e-0badc2d779d4)

Sur la page base de données, tu trouveras plein de fonctions pour gérer ta base, comme faire des sauvegardes, créer, gérer, etc. Ici on va se concentrer sur l’accès à ta base, mais n’hésite pas à jeter un œil à nos autres guides base de données si tu veux plus d’infos : [Accès externe à la base de données](gameserver-database-external-access.md).

Clique sur l’icône bleue de redirection qui te mènera à l’outil **phpmyadmin** où tu pourras accéder facilement à ta base. Connecte-toi avec les identifiants fournis sur la page base de données si demandé.

Une fois sur la page, sélectionne ta base de données dans la liste à gauche. Le nom de ta base commencera **toujours** par `zap` en préfixe.

![](https://github.com/zaphosting/docs/assets/42719082/30fa6041-b94e-4ac8-a3cd-286cca226dba)

Si tu n’as jamais utilisé ta base, elle sera vide pour l’instant. C’est le moment d’importer le fichier .sql.

Clique sur le bouton **Importer** dans la barre de navigation en haut de phpmyadmin pour ouvrir le menu d’import.

![](https://github.com/zaphosting/docs/assets/42719082/c0ca30f0-c520-4a71-843a-296064ba5761)

Ensuite, clique sur le bouton **Parcourir...** qui ouvrira une fenêtre d’explorateur de fichiers. Sélectionne le fichier **.sql** que tu voulais importer à la base.

![](https://github.com/zaphosting/docs/assets/42719082/83ba22fb-fc6c-4dbb-9c47-ad42d3a9fa66)

:::note
La taille max du fichier est de 2 Mo. Si ton fichier SQL est plus gros, utilise un splitter SQL pour découper ton fichier en plusieurs parties plus petites. On recommande l’outil [Pinetools SQL-Splitter](https://pinetools.com/split-files) qui fait ça pour toi. Une fois découpé, tu peux importer les fichiers SQL normalement.
:::

Enfin, clique sur le bouton **Importer** en bas de la page pour lancer l’import. Si tout s’est bien passé, tu verras un message de succès et une nouvelle table sera créée dans ta base, visible à gauche.

![](https://github.com/zaphosting/docs/assets/42719082/5fef5d58-78f1-4b59-bc3e-1e0af2ff981b)

## Conclusion

Importer un fichier SQL pour ton serveur FiveM est indispensable pour utiliser plein de ressources sans galère. Si tu as des questions ou besoin d’aide, n’hésite surtout pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />