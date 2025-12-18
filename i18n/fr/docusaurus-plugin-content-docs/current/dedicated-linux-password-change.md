---
id: dedicated-linux-password-change
title: "Serveur dédié : Changer le mot de passe root pour serveur Linux"
description: "Découvrez comment changer et gérer en toute sécurité le mot de passe de votre serveur via l’interface web ou la console pour un contrôle d’accès renforcé → En savoir plus maintenant"
sidebar_label: Changer le mot de passe
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Interface Web

Le mot de passe peut être changé via notre interface web. Ouvre la page « Accès et Sécurité », que tu trouveras à gauche dans la navigation.

![](https://screensaver01.zap-hosting.com/index.php/s/Kt3B9n4sGpbpn5q/preview)

Le champ du mot de passe root se trouve là, où tu peux définir le mot de passe souhaité. 

:::info
N’oublie pas qu’il doit faire au moins 8 caractères et contenir des lettres majuscules et minuscules (a-z/A-Z), des chiffres (1-9) et des caractères spéciaux (!@=#$%&-?_;:.,). Sinon, il ne sera pas appliqué au serveur.
:::

Après avoir saisi le mot de passe, un message pop-up apparaît que tu peux confirmer avec « ok ». 

![](https://screensaver01.zap-hosting.com/index.php/s/Ckc6PLB3tRY5epR/preview)

Si toutes les conditions sont remplies, le système confirmera que le mot de passe a été changé avec succès. 


✅ Le mot de passe a maintenant été changé. 


Dès maintenant, le mot de passe peut être consulté dans notre interface web pendant 3 heures. Passé ce délai, il sera supprimé pour des raisons de sécurité. Pour voir le mot de passe, clique simplement sur l’icône œil à côté de « Mot de passe »

![](https://screensaver01.zap-hosting.com/index.php/s/XfpFrGg5LyKEiRL/preview)

Une fenêtre pop-up s’ouvre alors avec l’affichage du mot de passe.


## Console Serveur

Le mot de passe peut aussi être changé via la Console Serveur, que tu y accèdes via Putty ou via la console série.

:::info
Important : Cette option ne peut être utilisée que si tu as encore accès au serveur.
:::

Une fois connecté à la console, tu peux changer le mot de passe avec la commande « passwd ». Ensuite, tu dois retaper le mot de passe pour le confirmer. Si c’est fait et que les deux mots de passe correspondent, la console confirmera le changement.


Si les deux mots de passe ne sont pas identiques, la console annulera l’opération. Dans ce cas, il faut relancer la commande « passwd ».

:::info
Important : Si tu changes le mot de passe via la Console, il ne pourra pas être affiché pendant 3 heures dans notre interface web sous Accès et Sécurité.
:::


