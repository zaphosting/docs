---
id: webspace-htaccess-discord
title: "Hébergement web : Configurer une redirection Discord via domaine"
description: "Découvrez comment rediriger votre domaine vers une URL spécifique grâce à la configuration du serveur web pour une redirection fluide → En savoir plus maintenant"
sidebar_label: Redirection Discord
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Par défaut, un domaine ne peut pas être redirigé directement vers une URL spécifique, seulement vers l’adresse principale d’un serveur ou d’un site web. Cependant, pour pointer vers une URL précise, vous pouvez configurer une redirection via un serveur web en combinant cela avec un fichier `.htaccess`. Cela redirige automatiquement l’appel du domaine vers l’URL cible souhaitée.

<InlineVoucher />

## Préparation

Pour réaliser cette redirection, on part du principe que vous avez déjà votre propre domaine (TLD) et un package d’hébergement web. Connectez le domaine à votre package d’hébergement web. Si vous ne savez pas exactement comment faire, vous pouvez utiliser notre option simple et pratique [EasyDNS](domain-easydns.md).

:::warning Les modifications DNS prennent du temps

Les changements dans les paramètres DNS peuvent prendre jusqu’à **24 heures** pour être complètement appliqués et effectifs dans le monde entier. Parfois, la mise en place est plus rapide, mais des délais sont normaux à cause du cache sur différents serveurs.

:::

Dès que le domaine pointe correctement vers l’hébergement web et est accessible, vous pouvez commencer à configurer la redirection Discord.

## Configuration

Un fichier `.htaccess` doit être créé et configuré pour mettre en place la redirection. Pour cela, rendez-vous dans le gestionnaire de fichiers du panneau Plesk pour votre domaine. Une fois là, cliquez sur le symbole plus pour créer un nouveau dossier nommé `discord`.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZAJAd7EXp7yJE64/download)

Allez dans le dossier `discord` et créez un nouveau fichier nommé `.htaccess`. Ouvrez ensuite ce fichier avec l’éditeur de texte. La règle de redirection va maintenant être ajoutée. Copiez-collez le contenu suivant :
```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]
```

Pour que la règle et la redirection fonctionnent avec votre domaine, vous devez modifier le nom du domaine. Remplacez le domaine d’exemple `example-example.de` par le vôtre, puis sauvegardez le fichier. Remplacez aussi l’URL d’invitation Discord par celle de votre serveur.

Vous devriez maintenant pouvoir appeler la redirection avec votre domaine et le chemin Discord défini. La structure ressemblerait à ceci dans notre exemple : `beispiel-example.de/discord`.

## Conclusion

Si vous avez suivi toutes les étapes, vous avez configuré avec succès la redirection de votre domaine vers votre serveur Discord. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />