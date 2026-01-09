---
id: vserver-windows-fivem
title: "VPS : Installation d’un serveur dédié FiveM"
description: "Découvre comment installer et configurer ton propre serveur dédié FiveM sur un VPS pour un gaming multijoueur sans accroc → En savoir plus maintenant"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introduction

Tu as un VPS et tu veux installer et gérer ton propre serveur dédié FiveM avec txAdmin ? T’es au bon endroit ! On va t’expliquer toutes les étapes nécessaires pour l’installer, le configurer et ce à quoi tu dois faire gaffe. 


## Préparation

Pour mettre en place un serveur FiveM, il y a quelques étapes de préparation à faire avant de pouvoir commencer l’installation du serveur dédié FiveM.



### Installer la base de données

Si tu veux utiliser et installer des ressources qui nécessitent une base de données, tu auras besoin d’un **serveur de base de données** en plus. Il y a plusieurs façons de configurer ce serveur. Dans notre [guide Installer MySQL](vserver-windows-installmysql.md), on te montre comment installer ton propre **serveur de base de données** sur ton **VPS**.



### Télécharger le logiciel serveur FiveM

L’étape suivante, c’est de télécharger le logiciel serveur FiveM. Pour ça, va sur le site [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) de FiveM via un des navigateurs Internet installés sur ton VPS et télécharge la dernière version du serveur FiveM.

Dézippe le fichier téléchargé dans le dossier Téléchargements et déplace les fichiers du serveur FiveM de préférence dans un dossier à part. Dans cet exemple, le logiciel serveur est dans un dossier nommé **FiveM** sur le bureau.

:::warning Outil de décompression nécessaire
Pour décompresser le logiciel serveur FiveM téléchargé, il te faut un outil de décompression adapté au fichier compressé. Ici, on utilise [7Zip](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Créer la clé de licence du serveur FiveM

Chaque serveur FiveM a besoin de sa propre clé de licence, gérée via le nouveau [Portail Cfx.re](http://portal.cfx.re/). La clé de licence est liée à ton compte Cfx.re. Connecte-toi au site, va dans la catégorie **Server** et clique sur le bouton **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuration

Maintenant, tu peux commencer l’installation du serveur FiveM et de txAdmin. Pour ça, ouvre à nouveau ton dossier du serveur FiveM et lance l’application `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Une fois l’application serveur lancée, la console serveur et txAdmin vont s’ouvrir. Dans l’interface txAdmin, tu dois connecter ton **compte Cfx.re** à txAdmin.  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### Configuration de txAdmin

Pendant la configuration de txAdmin, ton propre serveur FiveM est installé et configuré en cinq étapes. Suis les instructions dans l’interface txAdmin et commence par définir un **nom de serveur**. Ensuite, choisis le **type de serveur** souhaité. Cet exemple montre l’installation d’un serveur FiveM avec QBCore préinstallé.

Sélectionne l’option **Popular Recipes** dans l’étape **Deployment Type**, puis choisis le **QBCore Framework Template**. Confirme le **répertoire de données** voulu et lance le **Recipe Deployer** pour finir l’installation.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Pendant le Recipe Deployer, il faut encore ajouter les dernières infos nécessaires avant de pouvoir démarrer le serveur. Entre ta clé de licence FiveM créée précédemment dans le champ **License Key**. Clique ensuite sur **Show/Hide Database Options (Advanced)** et renseigne les identifiants de ton serveur de base de données. Ici, seul le mot de passe défini pour l’utilisateur **root** est nécessaire. Les autres réglages peuvent rester tels quels. Vérifie tes infos puis clique sur **Run Recipe** pour lancer le processus.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Configuration du pare-feu
Pour que ton serveur soit accessible publiquement, tu dois modifier les règles de redirection de ports pour les ports utilisés par le processus du serveur dédié. Tu peux faire ça soit via des commandes Powershell, ce qui est plus simple, soit via la page du pare-feu Windows Defender.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvre la barre de recherche Windows et cherche **Powershell**. Clique droit et choisis **Exécuter en tant qu’administrateur** pour avoir les permissions nécessaires et que tout fonctionne bien.

:::info
Assure-toi de lancer Powershell en mode administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copie-colle ensuite ces commandes dans ta console Powershell :
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Ces commandes vont créer automatiquement les règles de pare-feu nécessaires pour que ton serveur FiveM soit accessible publiquement.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilise la recherche Windows pour ouvrir les **Paramètres du pare-feu Windows avec sécurité avancée**. Tu devras peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre nécessaire si tu ouvres la page de base du pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Tu dois créer de nouvelles règles pour ton serveur FiveM. Pour ça, clique sur les règles entrantes et sortantes comme expliqué ci-dessous et ajoute-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 30120
- UDP entrant et sortant : 30120

Si tu as besoin d’aide pour ça, consulte notre [guide Redirection de ports (Pare-feu)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Conclusion

Tu as réussi à installer et configurer un serveur dédié FiveM sur ton VPS. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂


<InlineVoucher />