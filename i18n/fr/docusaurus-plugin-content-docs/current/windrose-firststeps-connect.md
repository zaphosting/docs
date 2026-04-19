---
id: windrose-firststeps-connect
title: "Windrose : Se connecter au serveur"
description: "Apprenez à vous connecter à votre serveur Windrose en utilisant le bon code d’invitation et établissez une connexion fiable sans problèmes courants -> Découvrez-le maintenant"
sidebar_label: Se connecter au serveur
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous ne savez pas comment vous connecter à votre serveur **Hytale** ou ce dont vous avez besoin pour commencer ? Pas de souci, on vous guide ! Nous allons vous expliquer tout ce qu’il faut savoir, des outils et infos nécessaires jusqu’au processus de connexion, avec les points clés pour assurer une expérience fluide et sans accrocs. Suivez ce guide et vous serez connecté en un rien de temps !

## Obtenir les informations du serveur
Avant de vous connecter, vous devez récupérer les informations importantes de votre serveur de jeux ZAP-Hosting via l’interface web. Pour Windrose, le détail le plus important est le **code d’invitation**.

Vous trouverez ce code dans la gestion de votre serveur, dans les fichiers de configuration sous `InviteCode.txt`.

:::info Code d’invitation obligatoire
Pour Windrose, le code d’invitation est la clé pour se connecter au serveur. Si vous utilisez un code erroné ou obsolète, la connexion échouera.
:::

Les informations suivantes sont utiles avant de commencer :

| Information | Utilité |
| --- | --- |
| Contenu de `InviteCode.txt` | Nécessaire pour se connecter au serveur Windrose |
| Nom du serveur | Permet d’identifier le bon serveur |
| Mot de passe serveur optionnel | Peut être demandé selon votre configuration |

![](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

## Établir la connexion au serveur
Une fois que vous avez votre code d’invitation, vous pouvez vous connecter directement au serveur Windrose via le jeu.

### Trouver le code d’invitation dans la gestion du serveur
Ouvrez l’interface web de gestion de votre serveur de jeux ZAP-Hosting et allez dans la section des fichiers de configuration. Trouvez le fichier nommé `InviteCode.txt` et ouvrez-le.

Vous y trouverez le code d’invitation actuel de votre serveur. Copiez-le exactement comme indiqué.

:::note Valeurs de remplacement
Si vous voyez une valeur comme `[your_invite_code]` dans ce guide, remplacez-la par le code réel de votre fichier `InviteCode.txt`.
:::

### Rejoindre le serveur dans Windrose
Lancez Windrose et ouvrez le menu de connexion au serveur ou multijoueur. Cherchez l’option pour rejoindre un serveur via un code d’invitation.

Entrez le code d’invitation de `InviteCode.txt` dans le champ demandé et validez la connexion. Si votre serveur est protégé, il vous sera peut-être aussi demandé un mot de passe à cette étape.

| Champ | À saisir |
| --- | --- |
| Code d’invitation | `[your_invite_code]` |
| Mot de passe | `[your_server_password]` si configuré |

Après avoir soumis le code d’invitation, le jeu devrait établir la connexion avec votre serveur Windrose.

:::tip Copier le code à l’identique
Pour éviter les problèmes de connexion, copiez-collez le code directement depuis `InviteCode.txt` si possible. Une petite erreur de frappe peut empêcher la connexion.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/t3R6by5GrswnZsQ/download)

## Problèmes courants et solutions
Si la connexion au serveur ne fonctionne pas immédiatement, vérifiez les causes les plus fréquentes ci-dessous.

### Le code d’invitation ne fonctionne pas
Si le code est refusé, vérifiez d’abord que vous avez bien copié tout le contenu de `InviteCode.txt` sans espaces superflus avant ou après.

Il est aussi possible que le code ait changé après un redémarrage, une mise à jour ou une modification de configuration du serveur. Dans ce cas, rouvrez `InviteCode.txt` et utilisez la valeur actuelle.

### Le serveur n’est pas encore prêt
Si le serveur est encore en cours de démarrage ou n’a pas fini son initialisation, les joueurs ne pourront pas se connecter même avec le bon code.

Vérifiez la console et les logs du serveur dans votre gestion de serveur pour confirmer que le serveur a bien démarré et est en ligne.

:::caution Attendez le démarrage complet
Ne tentez pas de vous connecter pendant que le serveur charge ou redémarre. Cela provoque des échecs de connexion même si le code est correct.
:::

### Problèmes de configuration ou de fichiers
Si le serveur reste inaccessible, il peut y avoir un problème de configuration ou des fichiers corrompus empêchant le démarrage correct. Dans ce cas, vérifiez les modifications récentes et consultez les logs pour détecter des erreurs.

Si besoin, restaurez une sauvegarde fonctionnelle ou annulez les changements récents.

### Pas de solution ou aide insuffisante
Si vous ne parvenez toujours pas à vous connecter après avoir vérifié le code, le statut du serveur et la configuration, contactez le support ZAP-Hosting via la [page officielle de support](https://zap-hosting.com/en/customer/support/).

Lors de votre demande, fournissez un maximum de détails, notamment :

- Le problème exact rencontré
- Si le serveur démarre correctement
- Si le code dans `InviteCode.txt` est visible
- Les messages d’erreur éventuels dans la console ou les logs

## Conclusion
Félicitations, vous vous êtes connecté avec succès à votre serveur Windrose grâce au code d’invitation. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous assister ! 🙂