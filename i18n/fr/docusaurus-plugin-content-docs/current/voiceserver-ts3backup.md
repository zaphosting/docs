---
id: voiceserver-ts3backup
title: "Serveur vocal : Crée, télécharge et importe des sauvegardes"
description: "Découvre comment créer et gérer facilement des sauvegardes avec un stockage gratuit et des options de mise à niveau pour une protection sécurisée des données → En savoir plus maintenant"
sidebar_label: Sauvegardes
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

On te propose la possibilité de créer des sauvegardes individuelles en un clic. Ça te permet de faire des sauvegardes facilement et sans prise de tête, et de les importer quand tu veux plus tard. Toutes les sauvegardes sont stockées sur ton serveur de stockage, qui inclut par défaut 10 Go d’espace gratuit. Si tu as besoin de plus, tu peux aussi passer au Stockage Premium.

<InlineVoucher />

## Créer des sauvegardes

<Tabs>

<TabItem value="Webinterface" label="Produit Serveur TeamSpeak" default>

Pour créer une sauvegarde sur notre site, tu dois ouvrir ton service Serveur vocal dans l’interface web et aller dans **Snapshots** dans l’administration. Une fois là, clique sur le bouton vert **Créer un snapshot** pour générer une sauvegarde.

![img](https://screensaver01.zap-hosting.com/index.php/s/G2EfYtMnqGzrjpC/download)

:::warning Sauvegardes externes
L’import de sauvegardes externes (snapshots) n’est pas possible pour des raisons de sécurité. Aucune exception possible. 
:::

</TabItem>
<TabItem value="self_hosted" label="Auto-hébergé (VPS/serveur dédié)">

Comme avec le produit Serveur TeamSpeak, si tu utilises l’interface GS/TS3, tu peux créer une sauvegarde (snapshot) en un clic via l’administration du service Serveur TeamSpeak. Mais tu peux aussi créer une sauvegarde manuellement en utilisant les identifiants de connexion de l’instance TeamSpeak (Query) et l’application externe YatQA.

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

Pour créer un snapshot dans YatQA, va dans **Divers** en haut de l’application, puis clique sur **Créer et sauvegarder un snapshot**.

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## Télécharger des sauvegardes

Les sauvegardes créées (snapshots) peuvent être téléchargées depuis ton serveur de stockage via FTP. Les identifiants de connexion se trouvent dans l’interface web de ton service serveur de stockage. Si tu ne sais pas comment utiliser FTP, on te recommande notre [guide général FTP](gameserver-ftpaccess.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/NTR5oygagD6M6mY/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## Conclusion

Tu as réussi à créer une sauvegarde si tu as suivi toutes les étapes mentionnées. Pour toute question ou aide, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />