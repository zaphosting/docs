---
id: minecraft-worlds
title: "Minecraft : Gérer les sauvegardes de mondes"
description: "Découvrez comment gérer, convertir et sauvegarder vos mondes Minecraft entre différentes plateformes pour garder votre progression de jeu en sécurité et sans accroc → En savoir plus maintenant"
sidebar_label: Gérer les Mondes
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Au cœur de Minecraft, les sauvegardes de jeu sont stockées sous forme de **mondes**, chaque monde étant une sauvegarde autonome. Dans ce guide, on va explorer comment gérer les mondes sur votre serveur de jeux Minecraft, y compris la conversion des mondes entre plateformes, la régénération des mondes, la sauvegarde de vos mondes locaux et serveur, ainsi que l’upload de mondes sur votre serveur.

<InlineVoucher />

## Préparation

Pour gérer vos mondes, vous devrez commencer par accéder à votre serveur de jeux Minecraft via FTP. Si vous ne savez pas comment utiliser FTP, consultez notre [guide Accès via FTP](gameserver-ftpaccess.md).

## Comparaison des différences entre plateformes

Une différence clé entre un serveur vanilla et les plateformes serveur est que les serveurs vanilla combinent le monde normal, le Nether et l’End en une seule sauvegarde complète.

En revanche, les plateformes serveur alternatives comme Spigot, PaperMC et Bukkit séparent chaque dimension en sauvegardes de mondes distinctes. Vous pouvez consulter le tableau ci-dessous qui compare comment un monde exemple nommé **zapdocs** est traité par les deux types de plateformes serveur.

| Dimension du Monde | Serveur Vanilla (Combiné) | Plateformes Serveur (Individuel)  |
| ------------------ | ------------------------- | -------------------------------- |
| Normal/Overworld   | zapdocs                   | zapdocs                          |
| Nether             | zapdocs                   | zapdocs_nether                   |
| The End            | zapdocs                   | zapdocs_the_end                  |

## Conversion des mondes

Quand vous passez d’un serveur vanilla à une plateforme serveur, vous voudrez peut-être garder votre sauvegarde de monde. À cause des différences ci-dessus, vous devrez ajuster la structure des fichiers pour extraire ou fusionner les mondes individuels du Nether et de l’End selon l’action.

:::info
Cela n’est nécessaire que si vous passez entre vanilla et plateformes serveur tout en voulant conserver et déplacer un monde existant. Si vous passez simplement d’un vanilla à un autre vanilla ou entre plateformes serveur, vous n’avez pas besoin de convertir quoi que ce soit.
:::

:::note
Assurez-vous d’éteindre le serveur avant de continuer pour éviter tout conflit ou rollback.
:::

<Tabs>
<TabItem value="converting-from-vanilla" label="Convertir depuis Vanilla" default>

Pour convertir un monde du format vanilla vers une plateforme serveur, vous devrez extraire certains dossiers pour créer de nouveaux mondes individuels pour chaque dimension. Bien sûr, on suppose que vous allez déplacer tous les mondes vers un nouveau serveur qui tourne sur une plateforme serveur comme Spigot, PaperMC ou Bukkit.

Accédez à votre serveur via FTP et suivez le chemin `../vanilla/[votre_monde]` pour accéder à la sauvegarde du monde que vous souhaitez convertir. Repérez les dossiers **DIM1** et **DIM-1**.

![](https://screensaver01.zap-hosting.com/index.php/s/FKiFmjYQembZ7qQ/preview)

Le dossier **DIM1** contient les données de l’End tandis que le dossier **DIM-1** contient les données du Nether.

Vous devrez déplacer chaque dossier dans son propre dossier de monde séparé, comme suit :
- Pour le Nether, créez un nouveau dossier `[votre_monde]_nether` à la racine. Déplacez le dossier **DIM-1** dans ce nouveau dossier de monde séparé.
- De même pour l’End, créez un nouveau dossier `[votre_monde]_the_end` à la racine. Déplacez le dossier **DIM1** dans ce nouveau dossier de monde séparé.

:::info
Il se peut que vous deviez écraser les dossiers `DIM`, c’est normal car par défaut les plateformes serveur génèrent toutes les dimensions immédiatement.
:::

Dans cet exemple, le monde s’appelle `world`, donc les dossiers `world_nether` et `world_the_end` ont été créés à la racine, avec les dossiers `DIM` appropriés déplacés dedans.

![](https://screensaver01.zap-hosting.com/index.php/s/CSgKsHj6fnxZCgy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/iYKHiQNzwmgQaz7/preview)

Les trois mondes individuels sont maintenant prêts à être utilisés sur les plateformes serveur.

</TabItem>

<TabItem value="converting-to-vanilla" label="Convertir vers Vanilla">

Pour convertir un monde d’une plateforme serveur vers le format vanilla, le processus est pratiquement identique mais à l’envers. Vous devrez extraire les données des mondes individuels du Nether et de l’End pour les fusionner en un seul monde. Bien sûr, on suppose que vous allez déplacer le monde combiné vers un nouveau serveur vanilla.

Accédez à votre serveur via FTP et entrez dans le chemin racine. Repérez les trois dossiers de mondes individuels qui devraient être `[votre_monde]`, `[votre_monde]_nether` et `[votre_monde]_the_end` en remplaçant `[votre_monde]` par le nom du monde.

Ouvrez le dossier individuel `[votre_monde]_nether` et déplacez le dossier `DIM-1` dans le dossier principal `[votre_monde]`. Dans cet exemple, comme avant, le monde s’appelle par défaut `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/3tAijYDAbymJcrC/preview)

Faites de même pour le dossier individuel `[votre_monde]_the_end` et déplacez `DIM1` dans le dossier principal `[votre_monde]`.

![](https://screensaver01.zap-hosting.com/index.php/s/ao663qGk9Sz3WNt/preview)

Le monde combiné est maintenant prêt à être utilisé sur un serveur vanilla.

</TabItem>
</Tabs>

## Génération des mondes

Générer des mondes est simple, vous pouvez choisir de générer un tout nouveau monde ou de régénérer le monde actuel à neuf. Minecraft utilise un système de **seed** où chaque monde a une seed unique, ce qui signifie qu’avec la seed seule vous pouvez régénérer une copie exacte du monde de départ.

<Tabs>
<TabItem value="generating-new" label="Générer un nouveau monde" default>

Pour générer un nouveau monde, éteignez simplement le serveur et connectez-vous via FTP. Ouvrez aussi le fichier de configuration `server.properties`, soit via la section **Configs** dans le panneau web de votre serveur, soit via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Pour générer un nouveau monde, vous pouvez soit :
- Via FTP, trouver le monde nommé comme le paramètre `level-name` dans le fichier de config et le supprimer.
- Modifier le paramètre `level-name` dans le fichier de config en mettant un autre nom et sauvegarder.

Si vous voulez garder l’ancienne sauvegarde, on recommande la deuxième option, ainsi le monde restera sur le serveur mais sera "inactif".

Redémarrez le serveur, il détectera que le monde avec le nom `level-name` est manquant et générera donc un nouveau monde avec une nouvelle seed.

</TabItem>

<TabItem value="regenerating-current" label="Régénérer le monde actuel">

Pour régénérer le monde actuel, vous devez noter la seed. Cela peut se faire via la section **Console** dans le panneau web de votre serveur ou directement en jeu, mais notez que vous devez être OP (opérateur) pour le faire en jeu.

Exécutez la commande `/seed` dans la console ou en jeu, cela vous donnera la valeur de la **seed** du monde actuel. Notez cette seed.

![](https://screensaver01.zap-hosting.com/index.php/s/6s3fWaPMrDGSLrz/preview)

Avec la seed connue, vous devez modifier le paramètre `level-seed` dans le fichier de configuration `server.properties`. Vous pouvez le faire via la section **Configs** dans le panneau web ou via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

:::note
Assurez-vous d’éteindre le serveur avant pour que le fichier se sauvegarde correctement.
:::

Changez le paramètre `level-seed` avec la valeur de la seed et sauvegardez le fichier. Connectez-vous ensuite à votre serveur via FTP.

Pour régénérer le monde, vous pouvez soit :
- Via FTP, trouver le monde nommé comme le paramètre `level-name` dans le fichier de config et le supprimer.
- Modifier le paramètre `level-name` dans le fichier de config en mettant un autre nom et sauvegarder.

Si vous voulez garder l’ancienne sauvegarde, on recommande la deuxième option, ainsi le monde restera sur le serveur mais sera "inactif".

![](https://screensaver01.zap-hosting.com/index.php/s/Z7GwpKo8tQjk3cb/preview)

Redémarrez le serveur, il détectera que le monde avec le nom `level-name` est manquant et régénérera donc le monde actuel en utilisant la seed fournie via le paramètre `level-seed`.

</TabItem>
</Tabs>

## Sauvegarder les mondes

### Sauvegardes locales

Les sauvegardes locales sont celles que vous avez créées en jouant en solo. Elles se trouvent dans votre dossier Windows AppData, précisément dans ce chemin :
```
../AppData/Roaming/.minecraft/saves
```

:::tip
Vous pouvez accéder facilement à ce chemin en appuyant simultanément sur `CTRL` + `R` et en entrant ce chemin dans la fenêtre d’exécution : `%appdata%/.minecraft/saves/`. Cliquez sur **OK** et vous serez directement dans le dossier.

![](https://screensaver01.zap-hosting.com/index.php/s/jfrnkXX6XtwniEL/preview)
:::

Dans ce dossier, vous verrez toutes vos sauvegardes locales regroupées.

![](https://screensaver01.zap-hosting.com/index.php/s/Li7Qn23Ej6Yiomc/preview)

### Accès aux sauvegardes via FTP

Sauvegarder votre monde depuis le serveur est simple. Une fois connecté à votre serveur de jeux via un client FTP, accédez simplement au dossier racine de la plateforme serveur que vous utilisez. Les sauvegardes de mondes s’y trouvent directement, le nom par défaut du monde étant `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/X2FQLSrC5QgrexQ/preview)

### Sauvegarde automatique

On propose aussi une option pour sauvegarder automatiquement votre monde (et fichier de config) directement via notre interface web. Rendez-vous dans l’interface web de votre serveur de jeux, section **Outils->Sauvegardes**. Vous pouvez configurer plusieurs options pour planifier des sauvegardes automatiques. On vous offre 10 Go de stockage gratuit pour vos sauvegardes. Pour plus d’infos sur les sauvegardes, consultez notre guide dédié [Sauvegardes](gameserver-backups.md).

## Upload de sauvegarde de monde

Comme pour la sauvegarde, uploader votre monde est simple. Connectez-vous d’abord à votre serveur de jeux via un client FTP. Une fois prêt, allez dans le chemin racine de la plateforme serveur que vous utilisez.

:::info Mondes Vanilla & Plateformes Serveur
Rappelez-vous que les serveurs vanilla et les plateformes serveur stockent les mondes dans des formats légèrement différents.

Si vous déplacez une sauvegarde de vanilla vers une plateforme serveur comme PaperMC, ou inversement, consultez la section conversion des mondes du guide.
:::

Glissez-déposez simplement vos sauvegardes de mondes dans le dossier racine via votre client FTP, elles seront uploadées sur votre serveur.

:::tip
Il peut être utile de copier le nom du dossier de la sauvegarde que vous avez uploadée, car vous en aurez besoin pour l’activer dans la section suivante.
:::

## Activation de la sauvegarde de monde

Pour utiliser une sauvegarde de monde spécifique, vous devez modifier le fichier de configuration `server.properties`, plus précisément le paramètre `level-name`.

Vous pouvez le faire via la section **Configs** dans le panneau web de votre serveur ou via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Dans le fichier, trouvez le paramètre `level-name` et modifiez-le pour qu’il corresponde au nom du dossier de votre sauvegarde de monde. Si vous utilisez une plateforme serveur, utilisez le nom du dossier principal et non les dossiers `_nether` ou `_the_end`.





## Conclusion

Vous savez maintenant comment gérer vos mondes Minecraft en toute confiance. De la conversion des sauvegardes entre vanilla et plateformes serveur, à la génération de nouveaux mondes, la régénération des anciens via les seeds, la création de sauvegardes fiables, l’upload de mondes personnalisés et leur activation sur votre serveur. Avec ces connaissances, vous êtes prêt à gérer vos mondes sans accroc et à garder vos aventures en sécurité et bien organisées.

Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />