---
id: vserver-windows-troubleshooting-restore-access
title: "VPS : Restaurer l’accès"
description: "Découvrez comment retrouver l’accès à votre VPS Windows après un verrouillage par mot de passe et minimisez les interruptions → En savoir plus maintenant"
sidebar_label: Restaurer l’accès
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ça peut arriver vite... Vous essayez de vous connecter à votre serveur Windows, mais votre mot de passe n’est plus accepté ou vous l’avez tout simplement oublié. Soudain, vous êtes bloqué et l’accès à vos données et applications importantes n’est plus possible. Cette situation est évidemment frustrante, mais ce n’est pas la fin du monde. En suivant les étapes ci-dessous, vous pouvez récupérer l’accès à votre VPS Windows et reprendre votre travail avec un minimum d’interruption.



## Préparation
La réinitialisation de l’accès depuis le compte administrateur se fait en utilisant un fichier ISO Windows. Il s’agit donc du même fichier ISO qui a été utilisé à l’origine pour l’installation du système d’exploitation Windows Server.

Cette étape peut être réalisée soit via la [**Première installation**](dedicated-setup.md) soit via **[ISO](dedicated-iso.md)**. Sélectionnez ou indiquez le fichier ISO qui a été utilisé initialement, selon la méthode choisie.

Montez l’ISO et redémarrez ensuite le système. L’interface d’installation Windows devrait s’ouvrir à nouveau au prochain démarrage. Le résultat devrait ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## Restaurer l’accès

Il est maintenant temps de réinitialiser l’accès du compte administrateur. Pour cela, reprenez les premières étapes de l’installation. Cependant, vous n’avez besoin d’aller que jusqu’au début de l’installation puis de cliquer sur **Réparer votre ordinateur**.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



Cela ouvre les options avancées. Cliquez sur l’option **Dépannage** puis sur **Invite de commandes**. Cela ouvrira la console de commandes (cmd.exe).

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

Les commandes listées ci-dessous doivent maintenant être exécutées une par une dans la console de commandes :

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

La disposition du clavier pour la console iLO HTML peut différer de la vôtre, ce qui fait que certains symboles se trouvent sur des touches différentes. Prenez cela en compte pour exécuter correctement les commandes.

:::

Après le redémarrage du serveur, sur l’écran de connexion, appuyez sur la combinaison de touches **Win+U**. Dans la fenêtre de l’Invite de commandes, tapez ceci :

```
net user Administrator VotreNouveauMotDePasse
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

Votre mot de passe a maintenant été changé. Cependant, vous devez annuler les modifications apportées aux fichiers **Utilman**. Pour cela, redémarrez simplement votre serveur et refaites ces étapes. Dans la console de commandes, exécutez à nouveau les commandes suivantes :

```
d:
cd Windows
cd System32
del utilman.exe ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```





## Conclusion

Une fois le processus terminé, vous devriez avoir défini avec succès un nouveau mot de passe pour l’utilisateur administrateur. Vous pouvez maintenant vous reconnecter via la connexion bureau à distance. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂