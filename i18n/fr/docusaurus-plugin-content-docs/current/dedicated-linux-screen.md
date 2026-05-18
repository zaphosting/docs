---
id: dedicated-linux-screen
title: "Configurer Screen sur un serveur Linux - Gérer des sessions terminal persistantes"
description: "Découvrez comment gérer plusieurs sessions terminal sous Linux avec Screen pour booster votre productivité et garder vos sessions actives → Apprenez-en plus maintenant"
sidebar_label: Installer Screen
services:
  - vserver
  - dedicated
---

## Introduction

Screen est un multiplexeur de terminal pour les systèmes Unix-like, comme Linux. Il permet aux utilisateurs de gérer plusieurs sessions terminal dans une seule fenêtre ou connexion distante. Dans ce guide, on va voir comment l’installer et vous donner des conseils pour bien l’utiliser.

## Préparation

Avant d’installer quoi que ce soit sur un serveur, il est recommandé de lancer la commande de mise à jour adaptée à votre système d’exploitation pour garder votre serveur sécurisé.

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

Installer l’utilitaire screen, c’est aussi simple que de lancer la commande suivante selon votre distro Linux :

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

Comme dit plus haut, screen permet de créer plusieurs sessions. Pour en lancer une, il suffit de taper la commande suivante, en remplaçant `[name]` par ce que vous voulez.
```
screen -S [name]
```

:::info
Gardez en tête que les commandes dans ce guide sont sensibles à la casse, surtout pour les options.
:::

Cela ouvrira une nouvelle session screen où vous pourrez lancer n’importe quel script ou programme que vous souhaitez garder actif même après avoir fermé la connexion distante.

Pour quitter une session screen, utilisez `CTRL + A` puis `D` ou tapez simplement `exit` dans la console.

:::tip
Vous pouvez lister toutes les sessions/screens actives avec la commande `screen -ls` ou `screen -list`.
:::

Pour revenir à une session screen déjà créée, lancez la commande `screen -r [name]` qui vous ramènera directement à la session concernée.

## Options de Screen

Screen propose plein d’options avec des flags `-` pour configurer les commandes. Voici les plus importantes dans ce tableau.

| Flag | Alias | Info |
| ---- | ----- | ---- |
| -v   | | Affiche la version actuelle de screen |
| -S `[name]` | | Démarre une nouvelle session screen nommée `[name]` |
| -ls | -list | Liste toutes les sessions screen en cours |
| -wipe `[name]` | | Supprime les sessions, optionnellement celle nommée `[name]` |
| -r `[name]` | | Se rattache à la session screen `[name]` |
| -d -r `[name]` | | Détache la session courante et se rattache à `[name]` |

:::tip
Pour voir toutes les options disponibles, lancez `screen -h` pour obtenir la liste complète.
:::

## Utilisation avancée de Screen

### Gestion des fenêtres

Maintenant que vous connaissez les bases, voici quelques raccourcis pour naviguer plus efficacement dans vos sessions. Dans une session screen, vous pouvez créer plusieurs fenêtres séparées pour différentes tâches.

:::note 
Tous les raccourcis de cette partie doivent être utilisés après avoir pressé `CTRL + A`.
:::

Appuyer sur `C` crée une nouvelle fenêtre vide dans le répertoire courant. Pour naviguer entre les fenêtres, utilisez `N` (suivante), `P` (précédente) ou `"` pour afficher la liste des fenêtres et choisir avec les flèches.

Par défaut, toutes les fenêtres ont le même nom (souvent celui du shell utilisé). Pour le changer, tapez `A` et choisissez un nouveau nom.

Enfin, pour fermer une fenêtre, appuyez sur `K`.

#### Fenêtres divisées

Pour afficher 2 fenêtres en mode split, tapez `S` (horizontal) ou `|` (vertical) et naviguez entre elles avec `Tab`.

:::tip
Après avoir créé une fenêtre split, allez dessus avec `Tab` et tapez `"` pour ouvrir une fenêtre précédente dans la 2e partie du split.
:::

Vous pouvez diviser les fenêtres autant que vous voulez, mais attention, la RAM du serveur risque de monter rapidement comme on s’y attend en multitâche.

## Conclusion

On espère que ce guide vous a aidé à comprendre comment fonctionne l’utilitaire screen sous Linux. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre support, dispo tous les jours pour vous filer un coup de main ! 🙂