---
id: vserver-linux-plesk
title: "Installer Plesk sur un serveur Linux - Gère tes sites web avec un panneau de contrôle puissant"
description: "Découvre comment gérer efficacement sites web et serveurs avec Plesk, que tu sois débutant ou expert → En savoir plus maintenant"
sidebar_label: Installer Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Plesk est une plateforme complète d’hébergement web et de gestion de serveurs qui permet aux utilisateurs de gérer sites web, serveurs, comptes email et bien plus via une interface super intuitive. C’est une solution polyvalente, parfaite aussi bien pour les débutants que pour les développeurs web et administrateurs système expérimentés.

<InlineVoucher />

## Installer Plesk

:::info
Avant d’installer, lance `apt update` et `apt upgrade` pour que les derniers paquets soient installés sur le serveur.
:::
Plesk peut actuellement être installé uniquement sur Debian 9 (Stretch), Debian 10 (Buster), Ubuntu 18.04 (Bionic Beaver), Ubuntu 20.04 (Focal Fossa), CentOS 7/8, Red Hat Enterprise Linux 7.x/8.x, CloudLinux 7.1+/8, AlmaLinux OS, Rocky Linux 8.x et Virtuozzo Linux 7. L’architecture doit être 64 bits.

La connexion au serveur peut se faire via Putty, par exemple.

## Démarrer l’installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="Installation en 1 clic" default>

Pour que Plesk s’installe automatiquement avec les composants et fonctionnalités standards utilisés par la majorité des utilisateurs, une seule commande suffit :

>Le programme d’installation de Plesk installe toujours la version la plus récente de Plesk. Il se peut que les captures d’écran ici ne montrent pas la toute dernière version.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
Si cette erreur apparaît : "-bash: curl: command not found", il faut installer le paquet avec `apt install curl`.
:::

Une fois la commande lancée, l’installation complète de Plesk prend généralement entre 15 et 60 minutes.

:::info
La session SSH ne doit pas être fermée tant que l’installateur est actif, sinon l’installation sera interrompue.
:::
Sinon, il faudra réinstaller le serveur pour relancer l’installateur.  
Si l’installateur est relancé sans réinstaller le serveur, des problèmes avec des fonctionnalités non fonctionnelles peuvent survenir pendant l’installation ou dans le panneau Plesk.

:::info
Il peut sembler que l’installateur soit "bloqué", mais dans 99% des cas il continue après quelques minutes car il doit encore configurer des paquets et paramètres.
:::

L’installation est terminée quand ce message apparaît :

![](https://screensaver01.zap-hosting.com/index.php/s/9o6bEzBr8rCAWzf/preview)

</TabItem>
<TabItem value="Web Installation" label="Installation Web">

Quelques commandes suffisent pour installer Plesk via l’interface Web.

:::info
Le programme d’installation de Plesk installe toujours la version la plus récente de Plesk. Il se peut que les captures d’écran ici ne montrent pas la toute dernière version.
:::

Télécharge l’installateur Plesk :
```
wget https://autoinstall.plesk.com/plesk-installer
```

Donne les droits d’exécution :

```
chmod +x plesk-installer
```

Lance l’installateur :

```
./plesk-installer --web-interface
```

</TabItem>
<TabItem value="Konsolen Installation" label="Installation Console">

Quelques commandes suffisent pour installer Plesk via la console.

:::info
Le programme d’installation de Plesk installe toujours la version la plus récente de Plesk. Il se peut que les captures d’écran ici ne montrent pas la toute dernière version.
:::

Télécharge l’installateur :

```
wget https://autoinstall.plesk.com/plesk-installer
```

Donne les droits d’exécution :

```
chmod +x plesk-installer
```

Lance l’installateur :

```
./plesk-installer
```

Une fois ces trois commandes lancées, la licence doit être validée avec "F" :

![](https://screensaver01.zap-hosting.com/index.php/s/XrCa3WYALoDx6H3/preview)

Après validation, le système demande quelle version de Plesk installer, par exemple Plesk Obsidian ou Plesk Onyx. Il indique aussi laquelle est la plus stable. En général, on choisit une version "stable" pour un usage en production. Comme les options sélectionnées pointent déjà vers la version stable, confirme encore avec "F".

La question de savoir si Plesk peut collecter des données pour améliorer le produit peut être répondue par "Y" (Oui) ou "n" (Non).

Ensuite, le système demande quel type de version Plesk tu souhaites installer. En général, le type "Recommended" déjà sélectionné suffit. Des modules non installés peuvent être ajoutés plus tard dans le panneau Plesk.

La question suivante sur l’installation/mise à jour des paquets est confirmée avec "F".

L’installation démarre alors.

:::info
La session SSH ne doit pas être fermée tant que l’installateur est actif, sinon l’installation sera interrompue et il faudra réinstaller le serveur pour relancer l’installateur.
:::
Il peut sembler que l’installateur soit "bloqué", mais dans 99% des cas il continue après quelques minutes car il doit encore configurer des paquets et paramètres.

L’installation est terminée quand ce message apparaît :

![](https://screensaver01.zap-hosting.com/index.php/s/8K5p6RHapwYDfZY/preview)

</TabItem>
</Tabs>

## Ouvrir l’installateur Web

Après avoir lancé l’installateur, l’installation se poursuit dans le navigateur. La page d’installation est accessible via https://IP:8447 ou https://Domaine.xx:8447.

## Le panneau Web Plesk

:::info
Au premier accès au panneau Web, le message "Ce n’est pas une connexion sécurisée" s’affiche. Il faut le confirmer une fois, puis la page s’ouvre.
:::

L’interface web est accessible via https://IP:8443 ou https://Domaine.xx:8443 du serveur. Les identifiants sont root/admin et le mot de passe root actuel. Sinon, tu peux utiliser une des URLs affichées. Si elles ne sont plus valides, tu peux en créer de nouvelles avec la commande ``plesk login``.

### Configuration

Une fois l’inscription réussie, il faut configurer le compte Admin. Il faut renseigner un nom de contact, un email et un mot de passe. Si tu as déjà une licence Plesk, tu peux la saisir directement. Sinon, une licence d’essai de 15 jours peut être demandée à Plesk. Enfin, il faut accepter le contrat utilisateur.  
Plesk est maintenant prêt à être utilisé.

### Choisir la langue

Après l’installation, le panneau Plesk est en anglais. Tu peux passer en allemand dans Outils & Paramètres ➡️ Apparence Plesk ➡️ Langues. Sélectionne "de-DE". Ensuite, clique sur "Définir par défaut" pour appliquer la langue à tous.  
Après une déconnexion et reconnexion, le panneau Plesk sera en allemand.

![](https://screensaver01.zap-hosting.com/index.php/s/6Wo8Qz3oMXGzn3t/preview)

### Ajouter un domaine

Pour ajouter ton premier domaine, clique sur le bouton bleu "Ajouter un domaine".

![](https://screensaver01.zap-hosting.com/index.php/s/2S4mgRPctffS452/preview)

Entre ton domaine. Il faut aussi définir une IP ainsi qu’un nom d’utilisateur et un mot de passe pour l’hébergement web du domaine. Si le sous-domaine "www" est déjà configuré dans le DNS du domaine, un certificat SSL Let's Encrypt peut être créé directement. Cette option apparaît après avoir saisi une adresse mail, puis validée avec le bouton bleu "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/SLSBz5TRH2mDBB8/preview)

:::info
Le domaine doit pointer vers l’IP de l’hébergement web. Si le domaine est chez ZAP-Hosting, il peut être redirigé facilement vers l’hébergement via EasyDNS. Sinon, un enregistrement A doit être configuré vers l’IP, et les sous-domaines "www" et "webmail" doivent aussi pointer vers cette IP. Un enregistrement MX doit également pointer vers l’IP de l’hébergement web.

La propagation d’un nouvel enregistrement DNS ou d’une modification peut prendre jusqu’à 24 heures.
:::

## Chiffrement SSL

Lors de l’ajout du domaine/création de l’hébergement web, un certificat SSL Let's Encrypt est déjà généré. Tu peux le sélectionner dans les "Paramètres d’hébergement" du domaine. Clique ensuite sur "Appliquer".

:::info
Pour forcer la redirection permanente vers HTTPS (SSL) lors de l’accès au site, coche la case "Redirection permanente 301 adaptée au SEO de HTTP vers HTTPS".
:::

![](https://screensaver01.zap-hosting.com/index.php/s/HL4tcnTqJtX7be9/preview)

Si tu ouvres maintenant le domaine dans ton navigateur, tu verras que la connexion est sécurisée.

![](https://screensaver01.zap-hosting.com/index.php/s/xcqwAQWK77X3yip/preview)

:::info
L’installation et la configuration du premier domaine avec chiffrement SSL sont maintenant terminées.
:::

## Conclusion

Félicitations, tu as installé et configuré Plesk avec succès ! Si tu as d’autres questions ou soucis, notre équipe support est là pour t’aider tous les jours !

<InlineVoucher />