---
id: dedicated-linux-php
title: 'Serveur dédié : Installation de PHP'
description: "Découvrez comment installer PHP sur votre serveur Linux pour le développement web et optimisez votre setup avec les extensions essentielles → En savoir plus maintenant"
sidebar_label: Installer PHP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

PHP est un langage de programmation polyvalent très populaire, notamment dans le développement web. Dans ce guide, on vous explique comment installer PHP sur votre serveur.



## Préparation

Commencez par vous connecter à votre serveur via SSH. Si vous ne savez pas comment faire, jetez un œil à notre [guide d’accès initial (SSH)](vserver-linux-ssh.md).

Une fois connecté, il est recommandé de lancer la commande de mise à jour correspondant à votre système d’exploitation pour garder votre serveur sécurisé et à jour avec les dernières fonctionnalités.

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

Il y a deux façons principales d’installer PHP sur votre serveur Linux : en mode autonome (standalone) ou comme paquet additionnel pour Apache. Si vous utilisez votre propre serveur web qui n’est pas Apache ou pour des tâches générales, on vous conseille la méthode standalone. Sinon, pour une utilisation avec Apache, installez PHP en tant que paquet supplémentaire via la méthode Apache.

## Mode autonome (Standalone)

Utilisez la commande suivante pour installer la dernière version de PHP. Si vous souhaitez installer une version spécifique, vous pouvez utiliser le flag `-y` suivi de la version.
```
# Dernière version
sudo apt install php

# Version spécifique (ex. php7.4)
sudo apt -y install php[version]
```

Vérifiez que l’installation a réussi avec la commande `php -v`. Vous avez installé PHP avec succès sur votre serveur. On vous recommande de lire la section **Extensions PHP** pour vous assurer d’installer les extensions dont vous pourriez avoir besoin.

## Avec Apache

Pour commencer, installez Apache sur votre serveur si ce n’est pas déjà fait. Utilisez cette commande :
```
sudo apt install apache2
```

Une fois installé, assurez-vous que les règles de pare-feu appropriées sont en place pour que le serveur web soit accessible depuis Internet. Ici, on utilise le **pare-feu UFW** car Apache a une application enregistrée pour ça. Si vous utilisez un autre pare-feu, pensez à autoriser le port 80 (HTTP).
```
sudo ufw allow in "Apache"
```

Votre serveur devrait maintenant être accessible. Testez en entrant `http://[votre_ip_serveur]` dans un navigateur.

Avec Apache prêt, installez le paquet PHP pour Apache avec cette commande :
```
sudo apt install php libapache2-mod-php
```

Vérifiez que l’installation a réussi avec la commande `php -v`. PHP est maintenant installé aux côtés de votre serveur web Apache. Pensez à lire la section **Extensions PHP** pour installer les extensions dont vous avez besoin.

## Extensions PHP

PHP propose plein d’extensions optionnelles pour étendre ses fonctionnalités. Pour voir la liste des extensions dispo, lancez cette commande qui affiche les résultats dans la console via `less` :

```
apt search php- | less
```

Utilisez les flèches pour naviguer et appuyez sur `Q` pour quitter. Pour installer une extension, utilisez simplement la commande apt install comme suit. Vous pouvez en mettre plusieurs à la suite, séparées par un espace, pour aller plus vite.

```
sudo apt install [php_extension] [...]
```

## Conclusion

Vous avez installé PHP avec succès sur votre serveur Linux. Pour toute question ou aide, n’hésitez pas à contacter notre support, dispo tous les jours pour vous aider ! 🙂