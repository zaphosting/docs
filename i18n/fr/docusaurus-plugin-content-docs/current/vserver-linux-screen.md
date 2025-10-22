---
id: vserver-linux-screen
title: "VPS : Installation de Screen"
description: "Découvrez comment gérer efficacement plusieurs sessions terminal sur les systèmes Unix-like avec l’utilitaire Screen → Apprenez-en plus maintenant"
sidebar_label: Installer Screen
services:
  - vserver
---

## Introduction

Screen est un multiplexeur de terminal pour les systèmes d’exploitation Unix-like, comme Linux. Il permet aux utilisateurs de gérer plusieurs sessions terminal dans une seule fenêtre ou connexion distante. Dans ce guide, nous allons couvrir les étapes d’installation et vous donner des conseils d’utilisation pour que vous soyez à l’aise avec screen.

## Préparation

Avant d’installer quoi que ce soit sur un serveur, il est recommandé d’exécuter la commande de mise à jour correspondant à votre système d’exploitation pour garder votre serveur sécurisé.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt update && sudo apt upgrade
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf update
```

</TabItem>
</Tabs>

## Installation

Installer l’utilitaire screen est aussi simple que d’exécuter la commande suivante selon votre distribution Linux :

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt install screen
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum install screen
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper install screen
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf install screen
```

</TabItem>
</Tabs>

## Utilisation basique de Screen

Comme mentionné plus haut, screen permet de créer plusieurs sessions. Pour en démarrer une, il suffit d’exécuter la commande suivante, en remplaçant `[name]` par ce que vous voulez.
```
screen -S [name]
```

:::info
Gardez en tête que les commandes présentées dans ce guide sont sensibles à la casse, surtout pour les options.
:::

Cela ouvrira une nouvelle session screen où vous pourrez lancer n’importe quel script ou programme que vous souhaitez garder actif même après la fermeture de la connexion distante.

Vous pouvez quitter une session screen en utilisant `CTRL + A`, suivi de `D` ou simplement en tapant `exit` dans la console.

:::tip
Vous pouvez lister toutes les sessions/screens actives avec la commande `screen -ls` ou `screen -list`.
:::

Pour revenir à une session screen déjà créée, exécutez la commande `screen -r [name]` qui vous ramènera directement à la session correspondante.

## Options de Screen

Screen propose plein d’options `-` pour configurer les commandes. Voici les plus importantes dans ce tableau.

| Option | Alias | Info |
| ---- | ----- | ---- |
| -v   | | Affiche la version actuelle de screen |
| -S `[name]` | | Démarre une nouvelle session screen nommée `[name]` |
| -ls | -list | Liste toutes les sessions screen en cours |
| -wipe `[name]` | | Supprime les sessions, optionnellement celles nommées `[name]` |
| -r `[name]` | | Se rattache à la session screen `[name]` |
| -d -r `[name]` | | Détache la session courante et se rattache à `[name]` |

:::tip
Vous pouvez voir toutes les options disponibles avec `screen -h` qui affiche la liste complète.
:::

## Utilisation avancée de Screen

### Gestion des fenêtres

Maintenant que vous connaissez les commandes basiques de screen, voici quelques raccourcis pour naviguer plus efficacement entre vos sessions. Dans une session screen, vous pouvez créer plusieurs fenêtres séparées pour différentes tâches.

:::note 
Tous les raccourcis de cette partie doivent être utilisés après avoir pressé `CTRL + A`.
:::

Appuyer sur `C` crée une nouvelle fenêtre vide dans votre répertoire courant. Pour naviguer entre les fenêtres, utilisez `N` (suivante), `P` (précédente) ou `"` pour afficher la liste des fenêtres et choisir avec les flèches.

Par défaut, toutes les fenêtres ont le même nom (souvent celui du shell utilisé). Pour le changer, tapez `A` et choisissez un nouveau nom.

Enfin, pour fermer une fenêtre, appuyez sur `K`.

#### Fenêtres divisées

Pour afficher 2 fenêtres en mode split, utilisez `S` (horizontal) ou `|` (vertical) et naviguez entre elles avec `Tab`.

:::tip
Après avoir créé une fenêtre split, allez-y avec `Tab` et tapez `"` pour ouvrir une fenêtre précédente dans la 2e vue du split.
:::

Vous pouvez diviser les fenêtres autant que vous voulez, mais la consommation de RAM du serveur peut augmenter rapidement, comme on s’y attend en multitâche.

## Conclusion

On espère que ce guide vous a aidé à comprendre comment fonctionne l’utilitaire screen sous Linux. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre support, disponible tous les jours pour vous aider ! 🙂