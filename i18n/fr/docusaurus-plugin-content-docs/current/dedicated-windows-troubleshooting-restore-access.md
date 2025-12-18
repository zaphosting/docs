---
id: dedicated-windows-troubleshooting-restore-access
title: "Serveur dédié : Restaurer l’accès"
description: "Découvrez comment retrouver l’accès à votre serveur dédié Windows après un verrouillage par mot de passe et minimiser les temps d’arrêt → En savoir plus maintenant"
sidebar_label: Restaurer l’accès
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ça peut arriver vite... Tu essaies de te connecter à ton serveur Windows, mais ton mot de passe n’est plus accepté ou tu l’as tout simplement oublié. Soudain, tu es bloqué et l’accès à tes données et applications importantes n’est plus possible. Cette situation est évidemment frustrante, mais ce n’est pas la fin du monde. En suivant les étapes ci-dessous, tu peux retrouver l’accès à ton serveur dédié Windows et continuer ton taf avec un minimum d’interruption.



## Préparation
La réinitialisation de l’accès depuis le compte administrateur se fait en utilisant un fichier ISO Windows. Il s’agit donc du même fichier ISO qui a été utilisé à l’origine pour l’installation du système d’exploitation Windows Server.

Cette étape peut être réalisée soit via la [**Première installation**](dedicated-setup.md) soit via **[ISO](dedicated-iso.md)**. Sélectionne ou indique le fichier ISO qui a été utilisé à l’origine, selon la méthode choisie.

Monte l’ISO et redémarre le système ensuite. L’interface d’installation Windows devrait s’ouvrir à nouveau au prochain démarrage. Le résultat devrait ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## Restaurer l’accès

Il est maintenant temps de réinitialiser l’accès du compte administrateur. Pour cela, reprends les premières étapes de l’installation. Cependant, il suffit d’aller jusqu’au début de l’installation puis de cliquer sur **Réparer votre ordinateur**.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



Cela ouvre les options avancées. Clique sur l’option **Dépannage** puis sur **Invite de commandes**. Cela ouvrira la console de commandes (cmd.exe).

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

Les commandes listées ci-dessous doivent maintenant être exécutées une par une dans la console :

```
d:
cd Windows
cd System32
move utilman.exe utilman.exe.bak
copy cmd.exe utilman.exe
net user administrator /active:yes
shutdown -r -t 0
```
:::warning

La disposition du clavier pour la console iLO HTML peut différer de la tienne, ce qui fait que certains symboles se trouvent sur des touches différentes. Prends ça en compte pour exécuter correctement les commandes.

:::

Après le redémarrage du serveur, sur l’écran de connexion, appuie sur la combinaison de touches **Win+U**. Dans la fenêtre de l’invite de commandes, tape ceci :

```
net user Administrator TonNouveauMotDePasse
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

Ton mot de passe a maintenant été changé. Par contre, il faut annuler les modifications faites aux fichiers **Utilman**. Pour ça, redémarre simplement ton serveur et refais ces étapes. Dans l’invite de commandes, exécute à nouveau :

```
d:
cd Windows
cd System32
del utilman.exe ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```





## Conclusion

Une fois le processus terminé, tu devrais avoir réussi à définir un nouveau mot de passe pour l’utilisateur administrateur. Tu peux maintenant t’en servir pour te reconnecter via le bureau à distance.