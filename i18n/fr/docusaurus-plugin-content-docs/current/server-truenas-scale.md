---
id: server-truenas-scale
title: "Installer TrueNAS SCALE sur un serveur - Construisez votre NAS personnel"
description: "Découvrez comment installer TrueNAS SCALE sur votre serveur dédié pour le stockage en réseau et le partage de fichiers → En savoir plus maintenant"
sidebar_label: Installation de TrueNAS SCALE
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

TrueNAS SCALE est une plateforme de stockage open-source qui vous permet de construire un système de stockage en réseau (NAS) sur un serveur. Dans ce guide, vous allez installer TrueNAS SCALE sur un serveur dédié et configurer la mise en place initiale, incluant les pools de stockage, les comptes utilisateurs et le partage de fichiers SMB.

:::danger VPS non adapté
Nos produits VPS ne sont pas adaptés car ils ne contiennent qu’un seul disque virtuel. Vous pouvez installer TrueNAS SCALE sur un VPS, mais vous ne pourrez pas créer de pools de stockage puisque tout le disque est utilisé pour le système d’exploitation.

Pour installer TrueNAS SCALE, une [configuration serveur dédié](https://zap-hosting.com/en/dedicated-server-hosting/) avec au moins deux disques durs est nécessaire.
 :::

<InlineVoucher />

## Préparation

Avant de commencer l’installation, assurez-vous de disposer des configurations minimales suivantes :

| Matériel   | Minimum     | Recommandation ZAP-Hosting |
| ---------- | ----------- | -------------------------- |
| CPU        | 2 cœurs CPU | 8 cœurs vCPU               |
| RAM        | 8 Go        | 16 Go                      |
| Espace disque | 16 Go OS  | Selon l’usage              |

<InlineServiceLink />

Rendez-vous sur le site officiel [TrueNAS](https://www.truenas.com/download-truenas-scale/) et téléchargez la dernière version stable. Vous pouvez soit uploader l’ISO sur un emplacement accessible publiquement (votre propre serveur web ou stockage cloud), soit le garder localement sur votre ordinateur pour un montage direct.

:::tip[Hébergement ISO]
Si vous prévoyez de monter l’ISO via URL dans la console distante, assurez-vous que l’URL de votre fichier ISO se termine par `.iso` et soit accessible publiquement sans authentification.
:::

**Montage de l’ISO**

Connectez-vous à votre [tableau de bord ZAP-Hosting](https://zap-hosting.com/en/customer/) et accédez à votre serveur dédié dans la liste des services. Une fois là, ouvrez la page de gestion du serveur et cliquez sur **Activer iLO** pour accéder à l’interface de gestion du serveur.

![img](https://screensaver01.zap-hosting.com/index.php/s/or8HJ8e3QeAJm6z/preview)

Dans l’interface iLO, trouvez l’option **Console distante intégrée**. Choisissez votre type de console préféré et lancez-la. Une nouvelle fenêtre s’ouvre avec un accès direct à l’affichage de votre serveur.

Dans la console distante, cliquez sur l’**icône CD** en haut et sélectionnez **CD/DVD**. Choisissez **URL média scriptée** si vous avez uploadé l’ISO en ligne et entrez son URL directe. Sinon, sélectionnez **Fichier .iso local** pour parcourir votre ordinateur. Dans les deux cas, l’ISO sera monté sur le lecteur CD/DVD virtuel.

![img](https://screensaver01.zap-hosting.com/index.php/s/F98tgjsqq2S6nqp/preview)

:::tip Méthodes alternatives
Pour d’autres méthodes de montage ISO, y compris via l’interface Virtual Media, consultez le [guide Own ISO](dedicated-iso.md).
:::

Une fois l’ISO monté, utilisez le menu **Power** dans la console pour redémarrer. Sélectionnez **Reset** et le serveur redémarrera en bootant depuis l’ISO TrueNAS SCALE.

## Installation

Surveillez la console pendant le démarrage. L’écran d’installation TrueNAS SCALE apparaît et l’installateur se charge automatiquement. Le chargement de l’environnement d’installation prend quelques minutes.

![img](https://screensaver01.zap-hosting.com/index.php/s/TJwMWFZeorwGryn/preview)

L’installateur affiche **Choisir le média de destination** avec vos disques disponibles. Naviguez avec les **flèches** et sélectionnez le disque à utiliser pour le système d’exploitation. Choisissez le plus petit disque pour l’installation OS (ce disque sera entièrement dédié à TrueNAS SCALE). Appuyez sur **Espace** pour le sélectionner, puis sur **Entrée**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z5o7TFye6BPor7Q/preview)

Un avertissement indique que l’installation va **effacer** tout le contenu du disque sélectionné. Naviguez sur **Oui** avec les flèches et appuyez sur **Entrée**.

![img](https://screensaver01.zap-hosting.com/index.php/s/LS2mJBQ2deawKFp/preview)

Ensuite, l’installateur demande la configuration de l’authentification. **Option 1** permet de définir le mot de passe maintenant, tandis que **Option 2** vous laisse le configurer plus tard via l’interface web. Nous utiliserons **Option 2 : Configurer via l’interface Web** pour plus de flexibilité. Sélectionnez-la et appuyez sur **Entrée**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oPpMLCZ5nPePdLW/preview)

L’installateur demande **"Autoriser le démarrage EFI ?"**. Sélectionnez **Oui** (recommandé) et appuyez sur **Entrée**.

![img](https://screensaver01.zap-hosting.com/index.php/s/We8tqgctQrjz5oS/preview)

L’installation commence et prend généralement 15-20 minutes. Suivez la progression à l’écran pendant la copie des fichiers et la configuration du système.

![img](https://screensaver01.zap-hosting.com/index.php/s/BAykMjmxDn76sJB/preview)

À la fin, vous verrez **"L’installation de TrueNAS est réussie"**. Appuyez sur **Entrée**.

![img](https://screensaver01.zap-hosting.com/index.php/s/GmNwHaTfY6KHSbN/preview)

Avant de redémarrer, **démontez l’ISO** sinon vous bootez à nouveau sur l’installateur. Cliquez sur l’**icône DVD**, sélectionnez **CD/DVD**, puis cliquez sur **Éjecter le média**. Redémarrez via le menu Power ou laissez-le redémarrer automatiquement.

<InlineServiceLink />

## Configuration

Après l’installation, vous devez configurer le disque de démarrage du serveur. TrueNAS SCALE est installé, mais il faut indiquer au serveur de booter sur le bon disque via la configuration ROM du contrôleur RAID.

:::info[Étape critique]
Après l’installation, vous devez configurer le volume de démarrage dans la ROM du contrôleur RAID pour garantir que le serveur démarre sur le bon disque.
:::

**Définir le disque de démarrage dans la ROM**

Surveillez la console au démarrage. Lorsque le message **"Appuyez sur F8 pour la configuration ROM de l’utilitaire de tableaux"** apparaît, appuyez immédiatement sur **F8**.

![img](https://screensaver01.zap-hosting.com/index.php/s/BCosyXCBnZJjeiX/preview)

L’utilitaire de configuration ROM s’ouvre. Naviguez jusqu’à **Sélectionner le volume de démarrage** avec les flèches et appuyez sur **Entrée**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw4netxJPkX3354/preview)

Vos disques disponibles sont listés ici. Sélectionnez le disque où TrueNAS SCALE est installé et appuyez sur **Entrée**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7mPgXFMqn9Q475Z/preview)

Avec le disque sélectionné, appuyez sur **F8** pour sauvegarder. Confirmez si demandé, puis quittez l’utilitaire. Votre serveur démarre maintenant sur TrueNAS SCALE.

![img](https://screensaver01.zap-hosting.com/index.php/s/YEFokMkz3RSB625/preview)

**Accéder à l’interface Web**

Après le premier démarrage, la console TrueNAS SCALE affiche l’URL d’accès à l’interface Web : `http://[votre_ip_serveur]`. Notez cette adresse IP car vous en aurez besoin pour accéder à l’interface web.

![img](https://screensaver01.zap-hosting.com/index.php/s/8JwikNGRTz4La3y/preview)

:::tip Auto-configuration réseau
TrueNAS SCALE configure généralement automatiquement le réseau via DHCP. Passez cette étape sauf si vous avez plusieurs adresses IP ou besoin d’une IP statique spécifique.
:::

Pour une configuration réseau manuelle, sélectionnez **1) Configurer les interfaces réseau** dans le menu console. Choisissez votre interface principale (comme `enp0s3` ou `eth0`), sélectionnez **Configurer IPv4**, puis **Statique**. Entrez votre adresse IP, masque de sous-réseau et passerelle (retrouvez ces infos dans votre tableau de bord ZAP-Hosting).

Ouvrez un navigateur web et allez sur `http://[votre_ip_serveur]` avec l’adresse IP affichée dans la console.

Comme nous avons choisi **Configurer via l’interface Web** plus tôt, c’est ici que vous définissez le mot de passe. La page de connexion affiche `truenas_admin` comme nom d’utilisateur. Entrez un mot de passe fort, confirmez-le, puis cliquez sur **Soumettre**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dZrpdZYQwKBFksJ/preview)

:::danger Sécurité importante
Choisissez un mot de passe fort et unique pour votre compte admin TrueNAS. Ce compte a un accès complet au système.
:::

Après la connexion, le tableau de bord s’affiche avec les infos système, statut réseau, pools de stockage, services et alertes. Vous avez configuré TrueNAS SCALE avec succès et êtes prêt à configurer le stockage.

![img](https://screensaver01.zap-hosting.com/index.php/s/fYkDpDfpqwTT5yY/preview)

**Créer des pools de stockage**

Cliquez sur **Stockage** dans la barre latérale gauche, puis cliquez sur le bouton **Créer un pool**.

![img](https://screensaver01.zap-hosting.com/index.php/s/fFeSjm3YnnPfxq5/preview)

Commencez par donner un nom à votre pool, par exemple `Disk`, `tank` ou ce qui vous parle. Cliquez sur **Suivant** quand vous êtes prêt.

![img](https://screensaver01.zap-hosting.com/index.php/s/23MNpcrHmmGz2L2/preview)

Dans la section **Données**, ouvrez le menu déroulant **Disposition** et choisissez la configuration qui correspond à vos besoins :

- **Stripe** : Capacité maximale utilisable mais sans redondance
- **Miroir** : Stocke des données identiques sur deux disques, offrant une redondance au prix d’une capacité réduite
- **RAIDZ1** : Offre une redondance d’un disque
- **RAIDZ2** : Offre une redondance de deux disques
- **RAIDZ3** : Offre une redondance de trois disques

![img](https://screensaver01.zap-hosting.com/index.php/s/wKHy7f8xoifEXB6/preview)

Sous **Sélection des disques**, tous vos disques de stockage sont listés. Cliquez sur ceux que vous voulez inclure dans le pool, ils passent dans la zone de configuration avec la capacité estimée.

:::info Disque de démarrage non disponible
Le disque d’installation n’apparaît pas ici car il est réservé exclusivement au système d’exploitation.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/McEcGQSBzHaZNNc/preview)

Laissez les options facultatives par défaut et cliquez sur **Suivant**. La page de révision affiche votre configuration avec nom, disposition, disques et capacité. Vérifiez et cliquez sur **Créer le pool** pour valider.

![img](https://screensaver01.zap-hosting.com/index.php/s/RDitijsoGWtEoT5/preview)

**Organisation avec les datasets**

Avec votre pool de stockage créé, vous pouvez organiser vos données via des datasets. Les datasets sont des subdivisions logiques du pool qui permettent de séparer différents types de données. Cliquez sur **Datasets** dans la barre latérale. Votre nouveau pool apparaît (exemple : "Disk").

![img](https://screensaver01.zap-hosting.com/index.php/s/oZPctpbLcCESWWt/preview)

Cliquez sur **Ajouter un dataset**. Le pool est automatiquement défini comme parent. Donnez-lui un nom comme `documents`, `media` ou `backups`. Laissez les options avancées par défaut sauf besoin spécifique. Cliquez sur **Enregistrer**.

![img](https://screensaver01.zap-hosting.com/index.php/s/JxPmPW53zke9NQL/preview)

**Créer des comptes utilisateurs**

Cliquez sur **Identifiants** dans la barre latérale, puis sur **Ajouter**. Choisissez un nom d’utilisateur (ex : `john` ou `fileuser`), ajoutez le nom complet et définissez un mot de passe. Laissez groupe principal, répertoire personnel et shell par défaut. Descendez en bas et activez l’option **SMB** pour l’accès Windows.

Personnalisez les permissions selon vos besoins de sécurité. Pour un partage simple, les options par défaut avec SMB activé suffisent. Une fois terminé, cliquez sur **Soumettre**.

:::danger Important pour l’accès SMB
N’utilisez **pas** `root` ou `truenas_admin` pour le partage de fichiers. Ces comptes système ne fonctionnent pas avec SMB. Créez des utilisateurs dédiés.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/3SLGk75E3KP57ZS/preview)

**Configurer les partages SMB**

Cliquez sur **Partages** dans la barre latérale. Trois options apparaissent : Windows (SMB) pour Windows/macOS/Linux, Unix (NFS) pour Linux/Unix, et Bloc (iSCSI) pour le stockage en bloc. Nous allons configurer SMB. Cliquez sur **Ajouter** dans la section Windows (SMB).

![img](https://screensaver01.zap-hosting.com/index.php/s/fgWcqjyxXLD2dRy/preview)

La fenêtre **Ajouter SMB** s’ouvre. Pour **Chemin**, naviguez vers votre dataset (ex : `/mnt/Disk/documents`). Pour **Nom**, entrez un nom comme `documents` (c’est ce que les utilisateurs verront sur le réseau). **But** peut rester par défaut dans la plupart des cas. Ajoutez une description si vous voulez. Il y a des options avancées (paramètres ACL et autres), mais laissez l’accès invité désactivé pour la sécurité. Cliquez sur **Enregistrer**.

![img](https://screensaver01.zap-hosting.com/index.php/s/D2xQYHQfbmsKRwT/preview)

Après la création du partage, un popup indique que le **service SMB n’est pas en cours d’exécution**. Cliquez sur **Démarrer le service**. Cochez aussi **Démarrer automatiquement** pour qu’il se lance au démarrage. Le partage SMB est maintenant disponible sur le réseau.

![img](https://screensaver01.zap-hosting.com/index.php/s/KQH5zoA7FYWaXMa/preview)

Pour les partages NFS avec Linux/Unix, allez dans **Partages** → **Partages Unix (NFS)** et cliquez sur **Ajouter**. Sélectionnez votre dataset, configurez réseaux et permissions, activez NFS quand demandé, puis enregistrez.

<InlineServiceLink />

## Accéder à votre partage

Pour accéder à votre partage par exemple depuis un PC Windows, ouvrez l’**Explorateur de fichiers**. Faites un clic droit sur **Ce PC** (ou **Poste de travail**) et sélectionnez **Ajouter un emplacement réseau**.

![img](https://screensaver01.zap-hosting.com/index.php/s/NDJWjdpC6ZCq6c3/preview)

L’**Assistant Ajouter un emplacement réseau** s’ouvre. Continuez avec **Suivant**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7KXPxNQJy4qsiBy/preview)

Quand on vous demande l’emplacement, utilisez ce format : `\\[votre_ip_serveur]\[nom_partage]`. Par exemple : `\\192.168.1.100\documents`. Remplacez `[votre_ip_serveur]` par l’IP de votre serveur TrueNAS et `[nom_partage]` par le nom donné au partage SMB. Continuez avec **Suivant**.

![img](https://screensaver01.zap-hosting.com/index.php/s/2yaoWfiCTX6XLAz/preview)

Entrez le **nom d’utilisateur** et le **mot de passe** de l’utilisateur créé dans TrueNAS. N’utilisez pas `root` ou `truenas_admin` car ils ne fonctionnent pas avec SMB. Cochez **Mémoriser mes informations d’identification** pour les sauvegarder. Cliquez sur **OK**.

![img](https://screensaver01.zap-hosting.com/index.php/s/4nFReNbPLkHfmMp/preview)

Le partage TrueNAS est maintenant accessible. Parcourez les fichiers, créez des dossiers et copiez des données comme sur n’importe quel lecteur réseau. Vous avez connecté avec succès votre PC Windows au partage TrueNAS.

![img](https://screensaver01.zap-hosting.com/index.php/s/nBqrkmkCYJntwW2/preview)

:::tip Accès rapide
Pour un accès plus simple, utilisez **Connecter un lecteur réseau** au lieu de **Ajouter un emplacement réseau**. Le partage apparaît alors comme une lettre de lecteur (ex : `Z:`) dans l’Explorateur.
:::

:::info Accès depuis macOS ou Linux
**macOS** : Dans Finder, appuyez sur `Cmd+K` et entrez `smb://[votre_ip_serveur]/[nom_partage]`

**Linux** : Utilisez l’option "Se connecter au serveur" de votre gestionnaire de fichiers avec `smb://[votre_ip_serveur]/[nom_partage]`, ou montez via la ligne de commande avec `mount.cifs`
:::

## Conclusion

Félicitations, vous avez installé et configuré TrueNAS SCALE sur votre serveur avec succès. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂