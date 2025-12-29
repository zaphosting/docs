---
id: vserver-linux-troubleshooting-restore-access
title: "VPS : Restaurer l’accès"
description: "Découvrez comment retrouver l’accès à votre VPS Linux après un verrouillage par mot de passe et minimisez les temps d’arrêt → En savoir plus maintenant"
sidebar_label: Restaurer l’accès
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ça peut arriver vite. Vous essayez de vous connecter à votre serveur Linux, mais le mot de passe n’est plus accepté ou a été oublié. Résultat : l’accès au système et aux données ou services critiques est impossible. Cette situation peut être frustrante, surtout quand le serveur est indispensable pour vos opérations en cours. Sur la plupart des distributions Linux, l’accès peut être restauré via le mode récupération sans réinstaller le système d’exploitation. En suivant les étapes ci-dessous, vous pourrez reprendre le contrôle de votre serveur et continuer à bosser avec un minimum de perturbations.



## Restaurer l’accès

Pour réinitialiser le mot de passe via le mode récupération, le système doit démarrer avec accès au menu de démarrage GRUB. Pendant le démarrage, ouvrez le menu GRUB et sélectionnez **Options avancées pour Ubuntu**.

![img](https://screensaver01.zap-hosting.com/index.php/s/j6DKWdM95fFWWZi/preview)

Sur l’écran suivant, choisissez l’entrée qui lance le système en **mode récupération**. Cela chargera l’environnement de récupération au lieu du système d’exploitation normal.

Une fois le menu de récupération affiché, sélectionnez **root – Passer en invite de commande root** et confirmez. Appuyez de nouveau sur Entrée pour accéder au shell root.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFjTj3FxKQwHemD/preview)

En mode récupération, le système de fichiers root est monté en lecture seule par défaut. Pour pouvoir changer le mot de passe, il faut le remonter en mode écriture. Exécutez la commande suivante :

```bash
mount -o remount,rw /
```

Si vous ne connaissez pas le nom d’utilisateur, vous pouvez lister tous les comptes disponibles en vérifiant les répertoires home :

```
ls /home
```

Pour réinitialiser le mot de passe, utilisez la commande `passwd` suivie du nom d’utilisateur :

```
passwd username
```

Remplacez `username` par le nom réel du compte. Saisissez le nouveau mot de passe et confirmez-le quand demandé. La saisie du mot de passe ne s’affichera pas à l’écran. Une fois le mot de passe mis à jour avec succès, redémarrez le système avec la commande `reboot`.



## Conclusion

Une fois la procédure terminée, vous aurez défini un nouveau mot de passe pour l’utilisateur souhaité. Vous pouvez maintenant vous reconnecter via la connexion à distance. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂