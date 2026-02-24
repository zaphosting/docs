---
id: vserver-linux-gitlab
title: "Installer GitLab sur un serveur Linux - Hébergez votre propre plateforme DevOps"
description: "Découvrez comment installer efficacement GitLab sur Linux pour optimiser vos workflows DevOps et améliorer la collaboration en équipe → En savoir plus maintenant"
sidebar_label: Installer GitLab
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

GitLab est une plateforme DevOps complète qui permet aux équipes de collaborer sur le code, d’automatiser les workflows et de gérer efficacement tout le cycle de vie du développement logiciel. Dans ce guide, l’installation de GitLab sur un serveur Linux sera expliquée.

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## Préparation

Les exigences suivantes sont recommandées par l’équipe officielle [GitLab](https://docs.gitlab.com/ee/install/requirements.html) et il est fortement conseillé de suivre ces prérequis pour éviter des désagréments et problèmes par la suite.

#### Matériel

| Composants    | Minimum                | Recommandé                 |
| ------------- | ---------------------- | -------------------------- |
| CPU           | 2x 2 GHz               | 4x 2.6+ GHz                |
| RAM           | 4 Go                   | 8 Go                       |
| Stockage      | 10 Go                  | 50+ Go                     |
| Bande passante| 100 Mbit/s (upload & download) | 100 Mbit/s (upload & download) |

#### Logiciel

| Plateforme         | Options                                                      |
| ------------------ | ------------------------------------------------------------ |
| Système d’exploitation | Ubuntu (20.04, 22.04, 24.04), Debian (10, 11, 12), OpenSUSE (15.5) |
| Base de données    | PostgreSQL 14.9+                                             |
| Serveur web        | NGINX (inclus avec GitLab), Puma 6.4.2+                      |
| Autres             | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+               |

:::info
Pour les informations les plus précises et à jour concernant les spécifications, veuillez consulter la documentation officielle de GitLab sur les [exigences matérielles](https://docs.gitlab.com/ee/install/requirements.html).
:::

Une connexion doit être établie via un client SSH pour installer GitLab sur votre serveur Linux. Consultez notre [guide d’accès initial (SSH)](vserver-linux-ssh.md) pour en savoir plus.

Une fois la connexion établie, vous pouvez commencer à installer les paquets nécessaires à l’installation de GitLab.

## Étape 1 : Installation des dépendances

Tout d’abord, vous devez installer certaines dépendances pour pouvoir lancer l’installateur GitLab. Utilisez les commandes suivantes pour installer les dépendances requises sur votre serveur Linux.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Mettez à jour la liste des paquets à la dernière version et installez le paquet OpenSSH Server ainsi que les prérequis nécessaires avec la commande suivante. C’est ainsi que votre panneau d’interface web pour GitLab sera hébergé.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

Vous pouvez aussi installer Postfix (serveur SMTP) si vous souhaitez pouvoir envoyer des notifications par email avec GitLab. C’est **optionnel**.

Si vous souhaitez utiliser les notifications par email, installez Postfix avec la commande suivante.
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

Mettez à jour la liste des paquets à la dernière version et installez le paquet OpenSSH Server ainsi que les prérequis nécessaires avec la commande suivante. C’est ainsi que votre panneau d’interface web pour GitLab sera hébergé.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

Vous pouvez aussi installer Postfix (serveur SMTP) si vous souhaitez pouvoir envoyer des notifications par email avec GitLab. C’est **optionnel**.

Si vous souhaitez utiliser les notifications par email, installez Postfix avec la commande suivante.
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

Installez le paquet OpenSSH Server ainsi que les prérequis nécessaires avec la commande suivante. C’est ainsi que votre panneau d’interface web pour GitLab sera hébergé.

```
sudo zypper install curl openssh perl
```

Ensuite, assurez-vous que le démon OpenSSH est activé avec les commandes suivantes.
```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

Vous devez vérifier que le pare-feu autorise l’accès nécessaire, si vous utilisez `firewalld`.

Vérifiez si vous utilisez `firewalld` en lançant la commande suivante :

```bash
sudo systemctl status firewalld
```

Si c’est le cas, assurez-vous d’ouvrir les ports requis (80 et 443 par défaut) :

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

Vous pouvez aussi installer Postfix (serveur SMTP) si vous souhaitez pouvoir envoyer des notifications par email avec GitLab. C’est **optionnel**.

Si vous souhaitez utiliser les notifications par email, installez Postfix avec les commandes suivantes.
```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Lors de l’installation de Postfix, une configuration peut apparaître. Dans ce cas, sélectionnez 'Internet Site' et appuyez sur Entrée. Utilisez le DNS externe de votre serveur Linux pour le 'mail name' et appuyez sur Entrée. Si d’autres écrans apparaissent, continuez à appuyer sur Entrée pour accepter les paramètres par défaut.

Si vous souhaitez utiliser une autre solution pour envoyer des emails, passez cette étape et [configurez un serveur SMTP externe](https://docs.gitlab.com/omnibus/settings/smtp) après l’installation de GitLab sur votre serveur Linux en suivant un guide officiel de GitLab.
:::

## Étape 2 : Installation de GitLab

Après avoir téléchargé et installé toutes les dépendances requises, vous êtes maintenant prêt à installer GitLab.

Dans ce guide, nous installerons GitLab directement depuis les dépôts officiels.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
Le script suivant ajoutera les dépôts GitLab au gestionnaire de paquets apt :

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Une fois fait, le paquet `gitlab-ee` peut être installé :

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
Le script suivant ajoutera les dépôts GitLab au gestionnaire de paquets Zypper :

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

Une fois fait, le paquet `gitlab-ee` peut être installé :

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

Une fois ce processus terminé, GitLab devrait être prêt à l’emploi sur votre serveur Linux. Passez à la section suivante où vous configurerez quelques paramètres essentiels pour assurer le bon fonctionnement du serveur.

## Étape 3 : Configuration de GitLab

Pour garantir que tout fonctionne, vous devez effectuer quelques modifications dans le fichier de configuration. Commencez par ouvrir le fichier de configuration GitLab avec votre éditeur de texte préféré. Ici, nous utiliserons l’éditeur `nano` préinstallé.
```
sudo nano /etc/gitlab/gitlab.rb
```

Ensuite, cherchez la ligne `external_url` et entrez soit votre domaine, soit l’adresse IP de votre serveur Linux si vous n’avez pas de domaine à utiliser avec GitLab.

<!-- Le code suivant provient du fichier /etc/gitlab/gitlab.rb -->
```
## GitLab URL
##! URL sur laquelle GitLab sera accessible.
##! Pour plus de détails sur la configuration de external_url, voir :
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! Note : Pendant l’installation/mises à jour, la valeur de la variable d’environnement
##! EXTERNAL_URL sera utilisée pour remplir/remplacer cette valeur.
##! Sur les instances AWS EC2, nous tentons aussi de récupérer le nom d’hôte/public IP
##! depuis AWS. Pour plus de détails, voir :
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`Votre domaine / adresse IPv4 de votre serveur Linux`'
```

De plus, nous recommandons d’entrer votre email dans la ligne `letsencrypt['contact_emails']`. Cela permettra à Let's Encrypt de vous envoyer des notifications et de vous contacter concernant les certificats SSL automatiques et gratuits.

:::note
Vous devez utiliser un domaine si vous souhaitez obtenir un certificat SSL gratuit de Let's Encrypt. Vous ne pouvez pas en demander un directement pour votre adresse IP.
:::

<!-- Le code suivant provient du fichier /etc/gitlab/gitlab.rb -->
```
################################################################################
# Intégration Let's Encrypt
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`Votre email ici`] # Ceci doit être un tableau d’adresses email à contacter
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# Voir https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically pour plus d’infos sur ces paramètres
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # Doit être un nombre ou une expression cron, si spécifié.
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
Vous pouvez utiliser `CTRL+W` pour rechercher `letsencrypt['contact_emails']` et appuyer sur Entrée pour ne pas avoir à chercher manuellement dans tout le fichier.
:::

Une fois prêt, appuyez sur `CTRL+X` puis `Y` et `Entrée` pour confirmer les modifications.

Enfin, lancez la commande suivante pour reconfigurer GitLab avec les nouvelles options de configuration.
```
sudo gitlab-ctl reconfigure
```

Ce processus peut prendre un moment car il initialise GitLab avec les informations de configuration mises à jour, via des processus automatisés. Les certificats SSL seront également émis si un domaine a été utilisé.

## Étape 4 : Accéder à l’interface web

Après l’initialisation, le serveur devrait maintenant être accessible via un navigateur web. Rendez-vous sur votre site en entrant votre nom de domaine ou votre adresse IP comme suit :
```
https://[votre_domaine] OU http://[votre_adresse_ip]
```

Lors de la première connexion à l’interface web, une page de connexion s’affichera.

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

Pour obtenir l’accès admin lors de votre première connexion, connectez-vous en tant qu’utilisateur root avec `root` comme nom d’utilisateur.

Pour le mot de passe, vous devrez accéder à un fichier sur votre serveur Linux où il est stocké. Ouvrez ce fichier avec la commande suivante et trouvez le champ `Password`.
```
sudo nano /etc/gitlab/initial_root_password
```

<!-- Le code suivant provient du fichier /etc/gitlab/initial_root_password -->
```
# ATTENTION : Cette valeur est valide uniquement dans les conditions suivantes

# 1. Si elle a été fournie manuellement (via la variable d’environnement `GITLAB_ROOT_PASSWORD` ou via le paramètre `gitlab_rails['initial_root_password']` dans `gitlab.rb`), avant que la base de données ne soit initialisée.

# 2. Le mot de passe n’a pas été changé manuellement, ni via l’interface ni en ligne de commande.

#

# Si le mot de passe affiché ici ne fonctionne pas, vous devez réinitialiser le mot de passe admin en suivant https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `[VOTRE_MOT_DE_PASSE_ICI]`

# NOTE : Ce fichier sera automatiquement supprimé lors de la première reconfiguration après 24 heures.
```

Entrez le nom d’utilisateur et le mot de passe sur la page de connexion pour accéder à votre tableau de bord GitLab pour la première fois. Vous devriez maintenant pouvoir accéder à votre panneau GitLab sur votre propre serveur Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

Nous recommandons vivement de créer un nouvel utilisateur et/ou de changer le mot de passe de l’utilisateur `root`. Tout cela peut se faire en accédant à **Admin** en bas à gauche puis en sélectionnant **Vue d’ensemble->Utilisateurs**. Sur cette page, vous pourrez gérer les utilisateurs de votre instance GitLab.

## Optionnel : Configurer un pare-feu avec ufw

Vous pouvez passer cette étape si vous ne souhaitez pas configurer un pare-feu ou si vous utilisez déjà `firewalld` par exemple sur OpenSUSE.
Assurez-vous d’autoriser les ports 80/443 et le port 22.

### Installer ufw

Si vous avez déjà installé `ufw`, vous pouvez passer cette étape en toute sécurité.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt-get install -y ufw
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
```bash
sudo zypper install ufw
```
</TabItem>

</Tabs>

### Ouvrir les ports nécessaires

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### Activer le pare-feu

:::warning
Cela bloquera par défaut l’accès à tous les ports sauf ceux autorisés. Assurez-vous que la liste blanche est correctement configurée avant d’exécuter cette commande.
:::

Pour que le pare-feu prenne effet, activez-le avec la commande suivante.

```
sudo ufw enable
```

## Conclusion

Félicitations, vous avez installé GitLab avec succès ! Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !

Si vous souhaitez effectuer des configurations supplémentaires, nous vous recommandons de lire la [documentation officielle GitLab](https://docs.gitlab.com/ee/install/next_steps.html) pour les prochaines étapes.

<InlineVoucher />