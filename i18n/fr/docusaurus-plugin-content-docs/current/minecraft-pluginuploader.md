---
id: minecraft-pluginuploader
title: "Minecraft : Serveur avec l’uploader de plugins ZAP-Hosting"
description: "Découvrez comment gérer facilement les plugins de votre serveur de jeux Minecraft Spigot ou Bukkit et améliorez votre expérience de jeu → En savoir plus maintenant"
sidebar_label: Uploader de Plugins
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Uploader de Plugins

Clique sur ton serveur de jeux Minecraft dans l’aperçu des serveurs. Ensuite, sélectionne l’onglet Plugins, qui se trouve dans le sous-menu Paramètres.

:::info
Assure-toi que ton jeu actuel est Spigot ou Bukkit. L’uploader de plugins est uniquement dispo pour ces versions.
:::

## Installer/Envoyer des Plugins

Tu as deux façons d’installer un plugin sur ton serveur de jeux Minecraft.

- Tu peux installer un plugin depuis une de nos sélections préfaites (si dispo)
- Tu peux uploader tes propres plugins en glissant-déposant

### Plugins depuis la Liste

Choisis ton plugin préféré dans la liste « Tous les plugins » et clique sur le bouton vert « Installer ». L’installation peut prendre un moment selon la taille du plugin.

![](https://screensaver01.zap-hosting.com/index.php/s/dxrtY8pQwmtfEP9/preview)

### Upload ton propre Plugin

Glisse le fichier .jar du plugin voulu dans la zone indiquée sur l’image. Tu peux aussi glisser et installer plusieurs plugins en même temps dans cette zone.

![](https://screensaver01.zap-hosting.com/index.php/s/fM2a4AeyspaQzYd/preview)

Une fois le plugin glissé dans le champ d’upload, ça prend un moment avant qu’il soit sur le serveur.

Pour pouvoir utiliser le plugin, tu dois recharger ton serveur avec la commande `/rl` ou `/reload` via la console de ton serveur de jeux (ou redémarrer complètement le serveur).

:::info
Dans de rares cas, il faut redémarrer le serveur pour que le plugin fonctionne parfaitement.
:::


## Désinstaller un Plugin

![](https://screensaver01.zap-hosting.com/index.php/s/dKaeJr8M3jzgMBS/preview)

Pour désinstaller un plugin, clique sur la poubelle rouge à côté de l’entrée.

## Désactiver un Plugin

Pour ça, clique sur le bouton vert avec le cadenas derrière un plugin installé. Si le bouton passe du vert à l’orange, ton plugin est désactivé. Inversement, tu peux le réactiver. Le fichier du plugin reste sur le serveur après désactivation, mais il n’est plus chargé par le serveur de jeux.

:::info
Après avoir désactivé ton plugin, tu dois recharger le serveur une fois pour que les changements prennent effet. Utilise l’une des deux commandes dans la console de ton serveur de jeux ou en jeu : `/rl` ou `/reload`
:::

## Problèmes Courants

**Je ne peux pas uploader mon plugin via la zone "Glisser-Déposer".**

Solutions proposées :

- Ton plugin fait peut-être plus de 5 Mo et n’est donc pas adapté à l’upload via l’interface web. Utilise alors un client FTP.
- Les droits FTP peuvent poser problème. Pour régler ça, clique sur l’onglet navigateur FTP dans l’interface web et clique sur le bouton Réinitialiser les droits FTP. Tu devrais pouvoir uploader tes plugins ensuite.
- Ton plugin peut être invalide et ne pas contenir un plugin.yml valide. Dans ce cas, utilise un client FTP en alternative.
- Parfois, la liste ne se recharge pas. Recharge simplement la page avec F5, etc.

### Je ne peux plus supprimer mon plugin.

:::info
Dans ce cas, contacte le support.
:::

### Je ne peux pas désactiver/activer mon plugin.

Solutions proposées :

- Ton plugin est-il toujours sur le serveur ? Vérifie en cliquant sur le bouton Actualiser au bord du tableau. Ça resynchronise la liste affichée avec les plugins présents sur le serveur. Seuls les plugins réellement sur le serveur s’affichent alors.

### Des plugins manquent dans la section Tous les Plugins.

Solutions proposées :

- Il se peut qu’il n’y ait pas de version actuelle de ce plugin pour la version installée de ton serveur de jeux. Pour demander un plugin, utilise le bouton bleu Plugin manquant ?.

![](https://screensaver01.zap-hosting.com/index.php/s/DeMjH2s74geaLPq/preview)

### La désinstallation/l’installation dans la liste préfaite ne semble pas fonctionner.

Solutions proposées :

- Recharge la page ici pour résoudre le problème.

### Un plugin s’affiche alors qu’il n’est pas du tout sur le serveur.

Solutions proposées :

- Dans ce cas, tu peux simplement supprimer l’entrée du plugin en cliquant sur le bouton désinstaller.
- Sinon, essaie de cliquer sur le bouton Synchroniser.

<InlineVoucher />