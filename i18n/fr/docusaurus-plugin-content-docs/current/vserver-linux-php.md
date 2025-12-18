---
id: vserver-linux-php
title: 'VPS : Installation de PHP'
description: "Apprends à installer PHP sur ton serveur Linux pour le développement web et optimise ta configuration pour Apache ou une utilisation autonome → Découvre-le maintenant"
sidebar_label: Installer PHP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

PHP est un langage de programmation polyvalent très populaire, notamment dans le développement web. Dans ce guide, on te montre comment installer PHP sur ton serveur.

<InlineVoucher />

## Préparation

Commence par te connecter à ton serveur via SSH. Si tu ne sais pas comment faire, jette un œil à notre [guide d’accès initial (SSH)](vserver-linux-ssh.md).

Une fois connecté, il est recommandé de lancer la commande de mise à jour correspondant à ton système d’exploitation pour garder ton serveur sécurisé et à jour avec les dernières fonctionnalités.

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

Il y a deux façons principales d’installer PHP sur ton serveur Linux : en mode autonome ou comme module additionnel pour Apache. Si tu utilises ton propre serveur web qui n’est pas Apache ou pour des tâches générales, on te conseille la méthode autonome. Sinon, pour une utilisation avec le serveur web Apache, utilise la méthode Apache pour installer PHP en tant que module.

## Mode autonome

Utilise la commande suivante pour installer la dernière version de PHP. Si tu souhaites installer une version spécifique, tu peux utiliser le flag `-y` suivi de la version.
```
# Dernière version
sudo apt install php

# Version spécifique (ex. php7.4)
sudo apt -y install php[version]
```

Vérifie que l’installation a réussi avec la commande `php -v`. Tu as installé PHP avec succès sur ton serveur. On te recommande de lire la section **Extensions PHP** pour t’assurer d’installer les extensions dont tu pourrais avoir besoin.

## Avec Apache

Pour commencer, installe Apache sur ton serveur si ce n’est pas déjà fait. Tu peux le faire avec la commande suivante.
```
sudo apt install apache2
```

Une fois installé, assure-toi que les règles du pare-feu sont configurées pour que le serveur web soit accessible depuis Internet. Ici, on utilise le **pare-feu UFW** car Apache a une application enregistrée pour ça. Si tu utilises un autre pare-feu, assure-toi d’autoriser le port 80 (HTTP).
```
sudo ufw allow in "Apache"
```

Ton serveur devrait maintenant être accessible. Tu peux tester en entrant `http://[ton_ip_serveur]` dans un navigateur.

Avec Apache prêt, installe le module PHP pour Apache avec la commande suivante.
```
sudo apt install php libapache2-mod-php
```

Vérifie que l’installation a réussi avec la commande `php -v`. Tu as installé PHP avec succès aux côtés de ton serveur web Apache. On te recommande de lire la section **Extensions PHP** pour t’assurer d’installer les extensions dont tu pourrais avoir besoin.

## Extensions PHP

PHP propose un large choix d’extensions optionnelles pour étendre ses fonctionnalités. Pour voir la liste des extensions disponibles, lance la commande suivante qui affiche les résultats dans la console via `less`.

```
apt search php- | less
```

Utilise les flèches pour défiler et appuie sur `Q` pour quitter. Pour installer une extension, utilise simplement la commande apt install comme suit. Tu peux installer plusieurs extensions en même temps en les séparant par un espace pour aller plus vite.

```
sudo apt install [php_extension] [...]
```

## Conclusion

Tu as installé PHP avec succès sur ton serveur Linux. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />