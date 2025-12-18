---
id: satisfactory-addmods
title: "Satisfactory : Installer des Mods"
description: "Découvre comment gérer et installer des mods en toute sécurité pour les serveurs Satisfactory tout en protégeant ta sauvegarde → En savoir plus maintenant"
sidebar_label: Installer des Mods
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::danger
**IMPORTANT**

Les mods ne fonctionnent pas pour le moment !
:::

:::info
**ATTENTION**

Les mods ne sont **pas officiellement** supportés par les développeurs, mais ils sont tolérés !

Dans le pire des cas, l’installation de mods peut corrompre la sauvegarde, la rendre temporairement injouable à cause d’une mise à jour ou même la détruire !

Une sauvegarde doit être créée **dans tous les cas avant** d’installer des mods et il est conseillé de faire des sauvegardes régulièrement, au cas où !
:::

<InlineVoucher />

## Installer Satisfactory Moddé sur le serveur

Pour pouvoir installer des mods sur ton serveur, tu dois d’abord commander un serveur Satisfactory Moddé : https://zap-hosting.com/en/satisfactory-server-hosting/
Si tu as déjà loué un serveur Satisfactory, le jeu peut être changé à tout moment grâce au système cloud comme expliqué dans [Changement de Jeu](gameserver-gameswitch.md).

## Installer le Mod-Manager

L’outil "SatisfactoryModManager" facilite grandement l’administration et l’installation des mods, et ça se fait en quelques clics.
L’outil est dispo pour Windows et Linux et peut être téléchargé ici : https://github.com/satisfactorymodding/SatisfactoryModManager/releases

Toutes les versions sont listées sur la page liée ; en règle générale, il faut toujours utiliser la dernière version, c’est-à-dire la première entrée en haut.
L’outil peut être téléchargé sous "Assets". Selon ton système d’exploitation (Windows ou Linux), clique sur le fichier approprié, ce qui lancera le téléchargement automatiquement ou, selon ton navigateur ou tes réglages, tu devras confirmer.

![](https://screensaver01.zap-hosting.com/index.php/s/e7q5qCBP7D4ZL5g/preview)

Une fois le téléchargement terminé, lance le fichier et installe le mod manager sur ton PC en choisissant les options qui te conviennent pendant l’installation.

## Installer les Mods

Les mêmes mods doivent être installés à l’identique sur le client (par tous les joueurs !) et sur le serveur pour que la connexion fonctionne et qu’il n’y ait pas de crash.
Dans un premier temps, les mods sont compilés et installés sur le client pour pouvoir ensuite être transférés sur le serveur.

:::info
**ATTENTION**

Tous les mods ne sont pas compatibles avec le multijoueur !

Si un mod est compatible multijoueur, c’est généralement indiqué dans la description du mod.

Note : Même si un mod est indiqué compatible multijoueur, ce n’est pas une garantie !
:::

### Client

Les mods sont sauvegardés dans des profils pour que, par exemple, tu puisses tester d’autres mods dans un monde test et revenir aux mods habituels en un clic.
Commence donc par sélectionner un profil ou en créer un nouveau comme montré dans la capture.

![](https://screensaver01.zap-hosting.com/index.php/s/EMFsKnrsowZAxJE/preview)

Mets d’abord le filtre sur "Compatible" pour n’afficher que les mods compatibles avec la version actuelle.

![](https://screensaver01.zap-hosting.com/index.php/s/jg82aG3ketFxesD/preview)

Tu peux maintenant installer les mods simplement en cliquant sur l’icône de téléchargement, à condition que le mod soit compatible multijoueur, comme expliqué plus haut.

![](https://screensaver01.zap-hosting.com/index.php/s/CH2pBzS8iXxEpRz/preview)

### Serveur

Une fois tous les mods souhaités installés sur le client et la compatibilité multijoueur vérifiée, tu peux installer les mods sur le serveur.
Pour éviter tout problème lors du transfert, assure-toi que ton serveur est arrêté avant !

Connecte-toi maintenant à ton serveur via FTP pour pouvoir uploader les mods à l’étape suivante.
On a tout expliqué sur la connexion FTP dans [Accès via FTP](gameserver-ftpaccess.md).
Une fois connecté, ouvre ce chemin de dossier : `/gXXXX/modded-satisfactory/FactoryGame/Mods`

Il faut maintenant ouvrir le dossier local de Satisfactory sur ton PC.
Les étapes diffèrent un peu entre Steam et Epic Games :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Si tu as installé Satisfactory via Steam, tu peux ouvrir le dossier directement via le client Steam :

![](https://screensaver01.zap-hosting.com/index.php/s/ryEKHqEQFDBkkME/preview)

</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Epic Games n’a pas de bouton pour ouvrir le dossier d’installation, il faut donc l’ouvrir manuellement.
Pour ça, ouvre l’Explorateur Windows et navigue jusqu’au dossier où tu as installé Epic Games.
Le chemin habituel est : `C:\Program Files\Epic Games\SatisfactoryEarlyAccess`

</TabItem>
</Tabs>

Les mods installés sur le client via le mod manager doivent maintenant être uploadés via FTP.
Pour accéder aux mods, ouvre successivement ces dossiers : `FactoryGame -> Mods`.

Sélectionne maintenant tous les dossiers **sauf le dossier SML** en maintenant la touche CTRL enfoncée et en cliquant sur les dossiers.

![](https://screensaver01.zap-hosting.com/index.php/s/jCNjLHiF3JRgB24/preview)

Fais ensuite glisser les dossiers sélectionnés dans le dossier mods ouvert sur le FTP.

## Démarrer le serveur

Une fois les mods uploadés, tu peux simplement démarrer le serveur via l’interface web. Le serveur devrait maintenant être accessible, tu peux en apprendre plus dans le [guide Connexion au Serveur](satisfactory-connect.md).

<InlineVoucher />