---
id: dedicated-linux-debian
title: "Serveur dédié : Installation de Debian"
description: "Apprenez à installer et configurer Debian OS sur votre serveur dédié pour des performances et une fiabilité optimales → Découvrez-le maintenant"
sidebar_label: Installer Debian
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Voici un guide étape par étape pour installer et configurer le système d’exploitation Debian sur votre serveur dédié. Suivez ces instructions attentivement pour réussir l’installation et exploiter au mieux votre système.

:::info

La structure de ce guide est basée sur l’utilisation de Debian 10. Les installations sur des versions antérieures ou plus récentes peuvent légèrement différer dans le processus.

:::



## Préparation

Pour installer et configurer un système d’exploitation, il est d’abord important de monter l’ISO correspondante. Plusieurs méthodes sont possibles :

1. Montage via la configuration initiale
2. Montage via iLO (Média virtuel)
3. Montage via iLO (Console distante)

Si vous ne savez pas encore comment monter une image ISO, référez-vous à notre [guide Configuration initiale](dedicated-setup.md) ou [ISO personnalisée](dedicated-iso.md).



## Installation

Une fois l’ISO chargée avec succès, le serveur passe en mode installation.

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

Dans cet exemple, nous allons suivre le processus d’installation « classique ».

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

Choisissez la langue dans laquelle l’assistant d’installation sera affiché. Cette langue impactera aussi la langue finale du système installé.

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

Notre emplacement désiré n’est pas dans la première page, on clique donc sur « Autre ».

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

Dans notre exemple, on sélectionne l’option « Europe ».

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

Selon le fuseau horaire souhaité, on choisit ici le fuseau horaire allemand.

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

On choisit les États-Unis comme locale.

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

Ici, on choisit la disposition de clavier allemande, soit QWERTZ. Si vous êtes en Amérique, la disposition par défaut serait QWERTY.

:::info
Votre serveur prépare maintenant certains composants nécessaires à l’installation, cela peut prendre quelques minutes.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

Le serveur configure automatiquement son interface réseau via DHCP. Sélectionnez `eno1`, l’adaptateur réseau par défaut de votre serveur dédié ZAP. ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

Le nom d’hôte peut être modifié si vous le souhaitez, mais ce n’est pas obligatoire.

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

Le nom de domaine n’a pas besoin d’être changé non plus.

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

Ici, vous devez définir le mot de passe pour le compte « root ». Notez bien ce mot de passe.

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

Confirmez le mot de passe en le saisissant à nouveau.

:::info
L’assistant d’installation vous demande de créer un second compte utilisateur.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

Entrez maintenant le nom du propriétaire pour un compte utilisateur normal. Vous êtes libre de choisir ce que vous voulez.

:::info
Vous pouvez bien sûr utiliser le compte « root » à la fin.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

Entrez le nom d’utilisateur du compte. Choisissez aussi un mot de passe et confirmez-le. Le serveur prépare maintenant les prochaines étapes d’installation.

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

Vous pouvez créer des partitions ou utiliser tout le SSD comme une seule partition. Si vous ne voulez rien modifier, choisissez « Guidé – Utiliser tout le disque ».

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

Sélectionnez le SSD installé dans votre serveur. ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

En général, il est conseillé de stocker toute la structure sur une seule partition. ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

Confirmez la configuration avec « Terminer le partitionnement et écrire les changements sur le disque ».

:::info
S’il y a d’anciennes partitions sur votre SSD, confirmez leur écrasement avec « Oui ».
:::

Le serveur effectue maintenant le partitionnement et prépare l’installation du système.

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

Si vous souhaitez ajouter d’autres médias d’installation, par exemple pour certains paquets, c’est possible maintenant. Normalement, vous pouvez télécharger tous les paquets facilement après via le gestionnaire de paquets (apt).

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

Nos serveurs dédiés sont situés en Allemagne, il est donc recommandé de choisir un miroir allemand pour obtenir les meilleures vitesses de téléchargement.

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

Nous recommandons d’utiliser le dépôt Debian par défaut.

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

Si vous souhaitez utiliser un proxy HTTP, vous pouvez entrer les données ici (ce n’est pas obligatoire).

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

Le système souhaite collecter des statistiques anonymisées, vous pouvez refuser ou accepter.

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

Sélectionnez maintenant les paquets à installer :

* Environnement de bureau Debian  
Créerait une interface graphique sur votre serveur, mais ici on utilise uniquement le shell.

* Serveur SSH  
Nécessaire pour se connecter via PuTTY par exemple.

* Utilitaires système standards  
Fournit un ensemble de paquets de base.

La sélection se fait avec `TAB` et les flèches. Sélectionnez/désélectionnez avec la barre d’espace. Quand vous êtes prêt, appuyez sur `TAB` jusqu’à « Continuer » et validez avec Entrée.

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

Confirmez que ce système d’exploitation sera le seul sur ce serveur avec « Oui ».

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

Choisissez l’emplacement de stockage par défaut sur votre SSD.

:::info
🎉 L’installation de votre système Debian est maintenant terminée.
:::

Ouvrez « Média virtuel » dans votre iLO et cliquez sur « Éjecter le média » pour retirer l’ISO du système.

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

Une fois fait, sélectionnez Continuer, le serveur va redémarrer.

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## Configuration

### Connexion SSH

Après le redémarrage et une installation réussie, vous serez invité à vous connecter.

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

Bien sûr, vous voulez gérer votre serveur via SSH, par exemple avec PuTTY, il faut donc activer la connexion SSH :

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

Ouvrez avec nano le fichier de config SSH `nano /etc/ssh/sshd_config`.

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

Cherchez `#PermitRootLogin no` et changez-le en `PermitRootLogin yes`.

Puis faites `CTRL + X` et confirmez avec `Y`.

Ensuite, redémarrez le service SSH avec la commande `service ssh restart`.

Votre connexion SSH est maintenant activée, vous pouvez vous connecter via PuTTY par exemple.  
Entrez l’adresse IP de votre serveur visible dans votre tableau de bord ZAP et utilisez les identifiants définis.

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
Si vous avez des questions ou problèmes, notre support est là pour vous aider !
:::





## Conclusion

Félicitations, vous avez installé avec succès Debian sur votre serveur dédié. Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous accompagner ! 🙂