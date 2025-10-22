---
id: source-custom-content
title: Installer du contenu personnalisé et des mods sur les serveurs de jeux
description: "Découvre comment le contenu personnalisé améliore le gameplay dans les jeux Source comme Counter-Strike et Garry's Mod avec des maps, skins et sons → En savoir plus maintenant"
sidebar_label: Contenu Personnalisé
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## C’est quoi le contenu personnalisé ?

Certains jeux Source comme Counter-Strike ou Garry's Mod sont devenus célèbres pour leur diversité. Tout ça a été rendu possible grâce au support des plugins et du **contenu personnalisé**. Au fil des années, plein de modes de jeu ont été développés, comme Zombie Mod, Cache-Cache, Minijeux, Jailbreak et bien plus encore.

![](https://screensaver01.zap-hosting.com/index.php/s/MxDRfHZDFRHEjog/preview)

<InlineVoucher />

Ces serveurs utilisent souvent des maps, skins de joueurs et sons créés par la communauté. Pour que les joueurs puissent utiliser ou voir le contenu personnalisé du serveur, il faut d’abord que ce contenu soit téléchargé depuis le serveur. Là, deux options s’offrent à toi :

- FastDL
- Steam Workshop

Selon l’usage, une option sera plus adaptée que l’autre. Voici un aperçu des différences entre FastDL et Workshop :

|  Contenu personnalisé  | FastDL | Steam Workshop |
| :--------------------: | :----: | :------------: |
|          Maps          |   ✓    |       ✓        |
| Matériaux/Modèles      |   ✓    |       ✗        |
|         Sons           |   ✓    |       ✗        |



## Configurer le contenu personnalisé



### FastDL

Ici, on t’explique comment configurer un serveur FastDL avec un de nos [produits Hébergement Web](https://zap-hosting.com/en/shop/product/webspace/). Mais tu peux aussi utiliser n’importe quelle autre solution qui propose un serveur web accessible publiquement. Pour commencer, ouvre ton produit hébergement web et accède à l’administration :

![](https://screensaver01.zap-hosting.com/index.php/s/JdmBxGiicrQTxDt/preview)



Une fois là, ouvre le gestionnaire de fichiers et crée les dossiers suivants :

![](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)



Ensuite, il faut autoriser l’hébergement web pour que le téléchargement du contenu dans le jeu fonctionne correctement :

![](https://screensaver01.zap-hosting.com/index.php/s/7xSDbPRW6MYomk4/preview)

:::info
Les permissions doivent être définies pour tous les dossiers !
:::

Maintenant, tu peux uploader le contenu personnalisé. Les fichiers doivent être présents à la fois sur le serveur de jeux et sur le FastDL (hébergement web). Sur le serveur de jeux, les fichiers sont uploadés décompressés, tandis que sur le FastDL ils doivent être uploadés compressés en bzip2. On recommande le programme 7Zip pour ça.

Enfin, il faut juste indiquer l’adresse du serveur FastDL dans la config du serveur de jeux. Ça se fait via le **server.cfg**. Ajoute ces commandes dans ta config :

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // Remplace l’URL par celle de ton hébergement web ZAP.
```

Après un redémarrage et une connexion au serveur, le contenu correspondant devrait se télécharger automatiquement. Tu peux aussi vérifier ça dans la console du jeu :

![](https://screensaver01.zap-hosting.com/index.php/s/Xbk5gSQAMQSK9Me/preview)



### Steam Workshop

Voici comment configurer le Steam Workshop. D’abord, ouvre la page Steam Workshop. Pour ça, choisis le jeu concerné dans Steam et ouvre le workshop. Ici, on prend l’exemple de [CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections). Une fois là, clique sur le menu Parcourir et sélectionne Collection :

![](https://screensaver01.zap-hosting.com/index.php/s/PaTrSqacw7733yB/preview)

Clique droit sur Collection et crée ta collection pour le serveur de jeux :

![](https://screensaver01.zap-hosting.com/index.php/s/JZmsT6KexmteeJw/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/99bEm45t48rCzAT/preview)

La collection est créée avec succès, mais elle est vide par défaut. Retourne donc dans le workshop du jeu et choisis les objets que tu veux ajouter :

![](https://screensaver01.zap-hosting.com/index.php/s/WpYrLbYESYjmmWa/preview)

Quand tu as fini ta sélection, retourne dans la collection, clique droit et choisis Copier l’URL de la page. L’ID de la collection se trouve dans l’URL, qui ressemble à ça :

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

Il faut ensuite ajouter cet ID dans la section Steam Workshop de l’administration de ton serveur de jeux :

![](https://screensaver01.zap-hosting.com/index.php/s/6gCM5rWoeBeg57M/preview)

<InlineVoucher />