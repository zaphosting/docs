---
id: minecraft-crossplay
title: "Minecraft : Configurer le crossplay entre les éditions Minecraft Java & Bedrock"
description: "Découvrez comment activer un crossplay fluide entre Minecraft Java et Bedrock grâce aux plugins GeyserMC et Floodgate pour une expérience multijoueur améliorée → En savoir plus maintenant"
sidebar_label: Crossplay Java & Bedrock
services:
  - gameserver-minecraft
---

## Introduction

Jouer ensemble entre les éditions Minecraft Java et Bedrock n’était traditionnellement pas possible, car ces deux éditions sont considérées comme des plateformes complètement séparées. Heureusement, aujourd’hui, tu peux rendre le crossplay possible en utilisant des plugins spécifiques pour les serveurs Java Edition qui permettent aux joueurs Bedrock de rejoindre. Dans ce guide, on va voir comment installer et configurer le plugin GeyserMC avec le plugin Floodgate pour rendre le crossplay entre les deux plateformes simple et efficace.

## Préparation

Pour configurer le crossplay, tu dois avoir un serveur Minecraft qui tourne sur un des logiciels serveur Java compatibles. On recommande d’utiliser Paper, Spigot ou Bukkit, qui sont les options les plus populaires.

Tu dois avoir un serveur de jeux Minecraft prêt avec l’un de ces jeux installé et activé. Si tu as besoin d’aide pour ça, consulte notre [guide Changement de jeu](gameserver-gameswitch.md).

## Installation

Pour commencer l’installation, rends-toi sur le tableau de bord de l’interface web de ton serveur de jeux et va dans la section **Paramètres->Plugins**. Sur cette page, trouve le menu déroulant **GeyserMC** et sélectionne-le. Clique sur le bouton d’installation pour installer automatiquement le plugin sur ton serveur et attends que la barre de progression soit terminée.

On recommande aussi d’installer le plugin **Floodgate** qui se trouve dans la même section, car il offre plusieurs avantages comme :
- Permettre aux joueurs Bedrock de rejoindre sans avoir besoin d’un compte Java.
- Voir les skins Bedrock sur l’édition Java.
- Divers avantages pour les développeurs.

:::note
Le plugin Floodgate est optionnel, mais on te le conseille vivement car il facilite grandement le crossplay pour les joueurs Bedrock.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cagcHmzwR2yBZSo/preview)

Une fois les plugins installés sur ton serveur, passe à la section suivante pour configurer les paramètres.

## Configuration des plugins

Dans la même section **Plugins** de l’interface web, clique sur l’icône bleue des paramètres à côté du plugin GeyserMC, cela te mènera automatiquement à la zone correspondante dans la section **Paramètres**.

![](https://screensaver01.zap-hosting.com/index.php/s/RAZKNSdePa5wBs4/preview)

Sur cette page, tu peux personnaliser le nom du serveur et les lignes MOTD qui seront affichées spécifiquement aux joueurs Bedrock.

![](https://screensaver01.zap-hosting.com/index.php/s/kBzxQkmNgdsWgZb/preview)

En faisant défiler jusqu’en bas de la page, tu verras aussi les ports assignés à ton serveur.

- Le **Port de jeu** est le port principal du serveur, à utiliser pour se connecter avec les clients Java Edition classiques.
- Le **Port 5** est le port utilisé par le plugin GeyserMC. C’est celui à utiliser pour les clients Bedrock Edition.

Quand tu te connectes depuis un client, assure-toi d’utiliser le bon port selon l’édition Minecraft.

:::tip
Pour les clients avec l’option de configuration serveur **IP propre**, il est possible de demander une attribution personnalisée de port pour l’adapter à tes préférences. Tu peux [contacter le support](https://zap-hosting.com/en/customer/support/) via un ticket pour faire cette demande.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/joA62kWeJ5crCmY/preview)

## Connexion & dépannage

Avec le plugin configuré, redémarre ton serveur pour que les nouveaux paramètres soient pris en compte. Essaie ensuite de te connecter au serveur depuis les deux éditions pour vérifier que tout fonctionne.

Assure-toi d’utiliser les bons ports selon l’édition du jeu. Ce sera **Port 5** pour les joueurs Bedrock et le **Port de jeu** pour les joueurs Java, que tu trouveras dans l’onglet **Paramètres**. Tu peux aussi voir ces ports en passant la souris sur l’icône d’information dans le tableau de bord de l’interface web.

![](https://screensaver01.zap-hosting.com/index.php/s/M42ZkamKHieRcEz/preview)

Si tout est bon, tu devrais maintenant pouvoir faire du crossplay et te connecter facilement depuis les clients des deux éditions.

![](https://screensaver01.zap-hosting.com/index.php/s/oMRWkaSs5KKbkzy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xyMaENLFx4BCSPF/preview)

Si tu rencontres des problèmes pour te connecter au serveur, essaie les étapes de dépannage suivantes, qui devraient résoudre la plupart des soucis courants.

#### Client obsolète - Serveur obsolète

Cette erreur signifie que la version du serveur et celle du client ne correspondent pas. Si tu as ce problème sur Java Edition, change simplement la version du jeu via le launcher.

Malheureusement, il n’est pas facile de changer la version sur Bedrock. Donc si tu as ce souci sur un client Minecraft Bedrock, assure-toi de mettre à jour l’application et le serveur vers les dernières versions.

On recommande aussi d’utiliser les plugins ViaVersion et ViaBackwards qui élargissent les versions de jeu compatibles avec le serveur, permettant aux utilisateurs avec une version plus basse ou plus haute de se connecter quand même. Comme avant, va dans la section **Plugins** de l’interface web, puis dans le menu déroulant **Tous les plugins**, trouve **ViaVersion** et **ViaBackwards**. Clique sur l’icône verte de téléchargement pour les installer sur ton serveur.

:::note
Si tu as des soucis pour installer le plugin via l’interface web, il est possible que le plugin n’ait pas de version stable récente. Dans ce cas, on recommande de télécharger manuellement une version beta du plugin depuis le site officiel et de l’uploader via FTP. Pour en savoir plus, consulte notre [guide Accès FTP](gameserver-ftpaccess.md).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QCcndf6TGMsrw7x/preview)

Une fois les plugins installés, essaie de te reconnecter, ce qui devrait maintenant être possible depuis une plus grande variété de versions de jeu.

#### Impossible de se connecter au monde

La raison la plus fréquente de cette erreur est l’utilisation du mauvais port lors de l’ajout du serveur dans ton client. Assure-toi d’utiliser le port indiqué sous **Port 5** dans la section **Paramètres** de l’interface web de ton serveur quand tu te connectes depuis un client Bedrock. Pour les clients Java, utilise la valeur principale du **Port de jeu**.

Si le problème persiste, on recommande de vérifier le fichier de configuration du plugin GeyserMC pour s’assurer que les bons ports sont bien configurés automatiquement. Va dans la section **Configs** de ton interface web et ouvre le fichier `plugins/Geyser-[ton_type_serveur]/config.yml` avec le bouton bleu d’édition.

Dans ce fichier, trouve les paramètres `port` sous les sections `bedrock` et `remote`. Assure-toi que le port bedrock est bien celui indiqué sous **Port 5** dans la section **Paramètres** et que le port remote est soit **25565** soit le **Port de jeu**.

![](https://screensaver01.zap-hosting.com/index.php/s/AcZ5JAasBcKQpCm/preview)

## Conclusion

Félicitations, tu as installé et configuré avec succès le plugin GeyserMC sur ton serveur Minecraft, ce qui permet désormais le crossplay entre les éditions Java et Bedrock ! Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂