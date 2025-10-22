---
id: dedicated-linux-plesk
title: "Serveur dédié : Installation de Plesk"
description: "Découvrez comment gérer efficacement sites web et serveurs avec la plateforme polyvalente de Plesk, adaptée à tous les niveaux → En savoir plus maintenant"
sidebar_label: Installer Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Plesk est une plateforme complète d’hébergement web et de gestion de serveurs qui permet aux utilisateurs de gérer sites web, serveurs, comptes e-mail et bien plus via une interface intuitive. C’est une solution polyvalente adaptée aussi bien aux débutants qu’aux développeurs web et administrateurs système expérimentés.

<InlineVoucher />

## Installer Plesk

:::info
Avant l’installation, lancez `apt update` et `apt upgrade` pour que les derniers paquets soient installés sur le serveur.
:::
Plesk peut actuellement être installé uniquement sur Debian 9 (Stretch), Debian 10 (Buster), Ubuntu 18.04 (Bionic Beaver), Ubuntu 20.04 (Focal Fossa), CentOS 7/8, Red Hat Enterprise Linux 7.x/8.x, CloudLinux 7.1+/8, AlmaLinux OS, Rocky Linux 8.x et Virtuozzo Linux 7. L’architecture doit être 64 bits.

La connexion au serveur peut se faire via Putty, par exemple.

## Démarrer l’installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="Installation en un clic" default>

Pour que Plesk s’installe automatiquement avec les composants standards utilisés par la majorité des utilisateurs, une seule commande suffit :

>Le programme d’installation de Plesk installe toujours la version la plus récente de Plesk. Il se peut que les captures d’écran ici ne montrent pas la dernière version.

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
Il peut sembler que l’installateur soit "bloqué", dans 99% des cas il continue après quelques minutes car il doit encore configurer des paquets et paramètres.
:::

L’installation est terminée lorsque ceci s’affiche :

![](https://screensaver01.zap-hosting.com/index.php/s/gpNWyd7xZaw22zW/preview)

</TabItem>
<TabItem value="Web Installation" label="Installation Web">

Quelques commandes suffisent pour installer Plesk via l’interface Web.

:::info
Le programme d’installation de Plesk installe toujours la version la plus récente de Plesk. Il se peut que les captures d’écran ici ne montrent pas la dernière version.
:::

Téléchargez l’installateur Plesk :
```
wget https://autoinstall.plesk.com/plesk-installer
```

Attribuez les droits d’exécution :

```
chmod +x plesk-installer
```

Lancez l’installateur :

```
./plesk-installer --web-interface
```

</TabItem>
<TabItem value="Konsolen Installation" label="Installation Console">

Quelques commandes suffisent pour installer Plesk via la console.

:::info
Le programme d’installation de Plesk installe toujours la version la plus récente de Plesk. Il se peut que les captures d’écran ici ne montrent pas la dernière version.
:::

Téléchargez l’installateur :

```
wget https://autoinstall.plesk.com/plesk-installer
```

Attribuez les droits d’exécution :

```
chmod +x plesk-installer
```

Lancez l’installateur :

```
./plesk-installer
```

Après ces trois commandes, la licence doit être approuvée avec "F" :

![](https://screensaver01.zap-hosting.com/index.php/s/dJiJ3sTxCqoC3RR/preview)

Après approbation, le système demande quelle version de Plesk installer, par exemple Plesk Obsidian ou Plesk Onyx, en indiquant laquelle est la plus stable. En général, on choisit une version "stable" pour un usage en production. Les options sélectionnées pointent déjà vers la version stable, confirmez donc avec "F".

La question sur la collecte de données pour améliorer le produit peut être répondue par "Y" (Oui) ou "n" (Non).

Ensuite, le système demande quel type de version Plesk vous souhaitez installer. En général, le type "Recommended" déjà sélectionné suffit. Des modules non installés peuvent être ajoutés plus tard via le panneau Plesk.

La question sur l’installation/mise à jour des paquets est confirmée avec "F".

L’installation démarre alors.

:::info
La session SSH ne doit pas être fermée tant que l’installateur est actif, sinon l’installation sera interrompue et il faudra réinstaller le serveur pour relancer l’installateur.
:::
Il peut sembler que l’installateur soit "bloqué", dans 99% des cas il continue après quelques minutes car il doit encore configurer des paquets et paramètres.

L’installation est terminée lorsque ceci s’affiche :

![](https://screensaver01.zap-hosting.com/index.php/s/2Wk2Nm2HXCkQjkQ/preview)

</TabItem>
</Tabs>

## Ouvrir l’installateur Web

Une fois l’installateur lancé, l’installation se poursuit dans le navigateur. La page d’installation est accessible via https://IP:8447 ou https://Domaine.xx:8447.

## Le panneau Web Plesk

:::info
Au premier accès au panneau Web, le message "Ce n’est pas une connexion sécurisée" s’affiche. Il faut le confirmer une fois, puis la page s’ouvre.
:::

L’interface web est accessible via https://IP:8443 ou https://Domaine.xx:8443 du serveur. Les identifiants sont root/admin et le mot de passe root actuel. Sinon, vous pouvez utiliser une des URLs affichées. Si elles ne sont plus valides, vous pouvez en générer de nouvelles avec la commande ``plesk login``.

### Configuration

Une fois l’inscription réussie, le compte Admin doit être configuré. Il faut renseigner un nom de contact, un e-mail et un mot de passe. Si vous avez déjà une licence Plesk, vous pouvez la saisir directement. Sinon, une licence d’essai de 15 jours peut être demandée à Plesk. Enfin, le contrat utilisateur doit être validé.  
Plesk est maintenant prêt à l’emploi.

### Choisir la langue

Après l’installation, le panneau Plesk est en anglais. Vous pouvez passer au français dans Outils & Paramètres ➡️ Apparence Plesk ➡️ Langues. Sélectionnez "fr-FR". Ensuite, cliquez sur "Définir par défaut" pour appliquer la langue à tous.  
Après une déconnexion/reconnexion, le panneau Plesk sera en français.

![](https://screensaver01.zap-hosting.com/index.php/s/GtTGYGCYXwewxNQ/preview)

### Ajouter un domaine

Pour ajouter un premier domaine, cliquez sur le bouton bleu "Ajouter un domaine".

[](https://screensaver01.zap-hosting.com/index.php/s/G3fetgKfLNKFr7N/preview)

Saisissez votre domaine. Définissez aussi une IP ainsi qu’un nom d’utilisateur et un mot de passe pour l’hébergement web du domaine. Si le sous-domaine "www" est déjà configuré dans le DNS du domaine, un certificat SSL Let's Encrypt peut être généré directement. Cette option peut être sélectionnée après avoir saisi une adresse mail, puis validée avec le bouton bleu "OK".

[](https://screensaver01.zap-hosting.com/index.php/s/Pw2PSFDKGFDXZi2/preview)

:::info
Le domaine doit pointer vers l’IP de l’hébergement web. Si le domaine est chez ZAP-Hosting, il peut être redirigé facilement vers l’hébergement via EasyDNS. S’il est externe, un enregistrement A doit pointer vers l’IP, et les sous-domaines "www" et "webmail" doivent aussi pointer vers cette IP. Un enregistrement MX doit également pointer vers l’IP de l’hébergement web.

La propagation d’un nouvel enregistrement DNS ou d’une modification peut prendre jusqu’à 24 heures.
:::

## Chiffrement SSL

Lors de l’ajout du domaine/création de l’hébergement web, un certificat SSL Let's Encrypt est déjà généré. Il peut être sélectionné dans les "Paramètres d’hébergement" du domaine. Validez ensuite avec "Appliquer".

:::info
Pour forcer une redirection permanente vers HTTPS (SSL) lors de l’accès au site, cochez la case "Redirection permanente 301 adaptée au SEO de HTTP vers HTTPS".
:::

[](https://screensaver01.zap-hosting.com/index.php/s/xad7pbeZWY6QQHK/preview)

Si vous ouvrez maintenant le domaine dans un navigateur, vous verrez que la connexion est sécurisée.

![](https://screensaver01.zap-hosting.com/index.php/s/JrNEjciJfz2LzCX/preview)

:::info
L’installation ainsi que la configuration du premier domaine avec chiffrement sont maintenant complètement terminées.
:::

<InlineVoucher />