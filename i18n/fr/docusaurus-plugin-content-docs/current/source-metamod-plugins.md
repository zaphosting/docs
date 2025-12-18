---
id: source-metamod-plugins
title: Installation des plugins
description: "Découvre comment gérer et dépanner efficacement les plugins Sourcemod pour booster les perfs de ton serveur → En savoir plus maintenant"
sidebar_label: Plugins
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Installation des plugins

Voici comment installer des plugins. Pour pouvoir utiliser des plugins, tu as besoin de Sourcemod / Metamod. Les instructions pour l’installer sont ici : [Installation](source-metamod-installation.md)



Pour installer des plugins, tu dois les uploader via FTP. Les fichiers du plugin doivent être placés dans le dossier **Plugins** sous **../addons/sourcemod/**. Selon la complexité du plugin, il est possible que des fichiers de config et de traduction soient déjà fournis. Dans ce cas, il faut aussi uploader ces fichiers dans les dossiers **configs** et **translations**.



## Désactiver / supprimer des plugins

Dans le dossier **Plugins**, tu trouveras un sous-dossier nommé **disabled**. Tu peux y mettre les plugins que tu ne veux pas charger temporairement. Il suffit de déplacer le fichier **.smx** correspondant.



Si tu veux désactiver un plugin définitivement, il faut supprimer les fichiers du plugin. Le plugin sera alors désactivé après un changement de map ou un redémarrage du serveur.



## Problèmes courants


**Pourquoi mon plugin installé ne fonctionne pas ?**

Solutions :

- Assure-toi que toutes les prérequis sont remplis lors de l’installation du plugin. Certains plugins nécessitent une base de données pour fonctionner correctement. Dans ce cas, tu dois faire des ajustements dans le fichier **database.cfg** situé dans le dossier config.
- Le moteur Source est régulièrement mis à jour. Donc un plugin sorti il y a longtemps et non maintenu peut ne plus être compatible. Dans ce cas, la seule option est de visiter le forum Alliedmodders pour trouver une version corrigée non officielle ou utiliser un plugin alternatif.
- Si aucune des options ci-dessus ne marche, regarde la console en direct ou les fichiers logs. En général, la cause du problème s’y trouve.

<InlineVoucher />