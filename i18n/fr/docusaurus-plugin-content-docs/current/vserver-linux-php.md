---
id: vserver-linux-php
title: 'Installer PHP sur un serveur Linux - Boostez vos applications web dynamiques'
description: "Apprenez à installer PHP sur votre serveur Linux pour le développement web et optimisez votre configuration pour Apache ou en mode autonome → Découvrez-le maintenant"
sidebar_label: Installer PHP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

PHP est un langage de programmation polyvalent très populaire, largement utilisé dans le développement web. Dans ce guide, nous couvrons le processus d’installation de PHP sur votre serveur.

<InlineVoucher />

## Préparation

Commencez par vous connecter à votre serveur via SSH. Si vous ne savez pas comment faire, jetez un œil à notre [guide d’accès initial (SSH)](vserver-linux-ssh.md).

Une fois connecté, il est recommandé d’exécuter la commande de mise à jour correspondant à votre système d’exploitation pour garder votre serveur sécurisé et à jour avec les dernières fonctionnalités.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
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

Il y a deux façons principales d’installer PHP sur votre serveur Linux : en mode autonome ou comme module additionnel pour Apache. Si vous utilisez votre propre serveur web qui n’est pas Apache ou pour des tâches générales, on vous conseille la méthode autonome. Sinon, pour une utilisation avec le serveur web Apache, utilisez la méthode Apache pour installer PHP en tant que module supplémentaire.

## Mode autonome

Utilisez la commande suivante pour installer la dernière version de PHP. Si vous souhaitez installer une version spécifique, vous pouvez utiliser le flag `-y` suivi de la version.
```
# Dernière version
sudo apt install php

# Version spécifique (ex. php7.4)
sudo apt -y install php[version]
```

Vérifiez que l’installation a réussi avec la commande `php -v`. Vous avez installé PHP avec succès sur votre serveur. On vous recommande de lire la section **Extensions PHP** pour vous assurer d’installer toutes les extensions dont vous pourriez avoir besoin.

## Avec Apache

Pour commencer, vous devez installer Apache sur votre serveur si ce n’est pas déjà fait. Cela se fait avec la commande suivante.
```
sudo apt install apache2
```

Une fois installé, assurez-vous que les règles du pare-feu sont configurées pour que le serveur web soit accessible depuis Internet. Ici, on utilise le **pare-feu UFW** car Apache a une application enregistrée pour ça. Si vous utilisez un autre pare-feu, assurez-vous d’autoriser le port 80 (HTTP).
```
sudo ufw allow in "Apache"
```

Votre serveur devrait maintenant être accessible. Testez-le en entrant `http://[votre_ip_serveur]` dans un navigateur.

Avec Apache prêt, vous pouvez installer le module PHP pour Apache avec la commande suivante.
```
sudo apt install php libapache2-mod-php
```

Vérifiez que l’installation a réussi avec la commande `php -v`. Vous avez installé PHP avec succès aux côtés de votre serveur web Apache. On vous recommande de lire la section **Extensions PHP** pour vous assurer d’installer toutes les extensions dont vous pourriez avoir besoin.

## Extensions PHP

PHP propose un large choix d’extensions optionnelles pour étendre ses fonctionnalités. Pour voir la liste des extensions disponibles, lancez la commande suivante, qui affichera les résultats dans la console via la commande `less`.

```
apt search php- | less
```

Utilisez les flèches pour naviguer et appuyez sur `Q` pour quitter. Pour installer une extension, utilisez simplement la commande apt install comme suit. Vous pouvez entrer plusieurs extensions séparées par un espace pour accélérer l’installation.

```
sudo apt install [php_extension] [...]
```

## Conclusion

Vous avez installé PHP avec succès sur votre serveur Linux. Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />