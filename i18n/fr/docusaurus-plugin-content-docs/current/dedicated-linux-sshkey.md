---
id: dedicated-linux-sshkey
title: "Serveur dédié : Génération et utilisation des clés SSH pour serveurs Linux"
description: "Découvrez comment générer et gérer en toute sécurité des clés SSH pour votre serveur Linux afin d'améliorer la sécurité des connexions → En savoir plus maintenant"
sidebar_label: Clé SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Générer une clé SSH

Pour une connexion bien plus sécurisée qu’une connexion classique avec mot de passe SSH, l’utilisation des clés SSH est recommandée. Pour cela, ouvrez l’onglet "**Accès & Sécurité**" dans le tableau de bord de votre serveur Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

Dans "**Accès & Sécurité**", vous pouvez maintenant générer une clé avec le bouton "**Générer une clé SSH**".  
Dès que vous cliquez dessus, une fenêtre popup s’ouvre et une clé générée aléatoirement est directement téléchargée sur votre PC.  
Pour que la clé soit ajoutée au serveur, il faut cliquer sur le bouton "**Ajouter la clé**".

:::info
Pour les VPS Linux, la clé est ajoutée directement. Pour les serveurs dédiés Linux, il faut redémarrer le serveur pour que les modifications prennent effet.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

Si vous avez besoin de plusieurs clés, vous pouvez appuyer sur le bouton "**Générer une clé**" dans la même fenêtre.  
Avec "**Nom de la clé**", vous pouvez attribuer un nom à la clé, qui sera affiché dans le panneau ZAP-Hosting. C’est recommandé pour une meilleure organisation.

Une fois toutes les clés souhaitées générées et ajoutées, elles s’affichent maintenant sous "**Accès & Sécurité**".

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

Si vous avez votre propre clé publique, générée en externe et non via notre panneau, vous pouvez l’intégrer en cliquant sur l’icône "**+**".

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

Un panneau vide s’ouvre dans lequel vous pouvez insérer votre clé publique. La clé est ensuite ajoutée au serveur en cliquant sur la fonction "**Ajouter la clé**" puis affichée dans notre panneau.

## OpenSSH vers clé privée PuTTY avec PuTTYGen

Les clés SSH créées par notre panneau sont au format OpenSSH. Pour pouvoir les utiliser avec PuTTY, il faut d’abord convertir ces clés au format clé privée PuTTY. Vous pouvez utiliser le logiciel "**PuTTYGen**" qui est automatiquement installé avec PuTTY.

L’application PuTTYGen se trouve dans le répertoire racine de PuTTY. Par défaut, le dossier PuTTY serait affiché dans l’exemple à "**C:>Program Files>PuTTY**".

Lancez l’application PuTTYGen puis cliquez sur "**Fichier**" -> "**Charger une clé privée**".

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

Ouvrez maintenant le fichier généré par ZAP-Hosting. Pour cela, rendez-vous dans le dossier standard où sont stockés tous vos téléchargements.

:::info
**Important :** Assurez-vous que le filtre est bien réglé sur "**TOUS les fichiers**" comme montré sur l’image, car le fichier .pri créé par le système n’est pas visible autrement.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/5eRjG5HNMrxW38D/preview)

Une fois chargé, vous pouvez utiliser les différents champs pour ajouter un commentaire et un mot de passe à la clé. Pour définir un mot de passe, il faut entrer le même mot de passe dans "**Phrase secrète de la clé**" et "**Confirmer la phrase secrète**".  
*Note :* Vous pouvez aussi laisser ces champs vides et créer la clé sans mot de passe, mais ce serait un peu moins sécurisé et donc pas recommandé. Une fois tous les champs remplis, vous pouvez sauvegarder une clé compatible PuTTY avec le bouton "**Enregistrer la clé privée**".

![](https://screensaver01.zap-hosting.com/index.php/s/S2XNpejKYds6C6K/preview)

Donnez un nom à ce fichier .ppk et enregistrez-le pour pouvoir le retrouver facilement plus tard.


## Connexion avec clé SSH

Pour utiliser la clé lors des connexions, il faut d’abord la lier avec PuTTY. Pour cela, cliquez sur "**SSH**" - "**Auth**" - "**Parcourir...**".

![](https://screensaver01.zap-hosting.com/index.php/s/cxLBRMPiqEXBG55/preview)

Trouvez la clé que vous venez de créer avec PuTTYGen et cliquez sur "**Ouvrir**".

Pour ne pas avoir à refaire ces étapes à chaque connexion, il est recommandé de sauvegarder cette configuration dans la session. Pour cela, cliquez sur "**Session**" - "**Paramètres par défaut**" - "**Enregistrer**", comme montré dans la capture d’écran.

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

Vous pouvez maintenant vous connecter au serveur avec PuTTY. Le "**Commentaire de la clé**" saisi dans PuTTYGen sera visible à ce moment-là.

## Désactiver la connexion par mot de passe

Les clés SSH ont été créées pour renforcer la sécurité. Si la connexion par mot de passe SSH est toujours possible, la sécurité du serveur n’a pas vraiment changé. C’est pourquoi il faut maintenant désactiver la connexion SSH par mot de passe. Il y a une différence entre les VPS Linux et les serveurs dédiés Linux sur la manière de désactiver cette connexion. Si la connexion est correctement désactivée, seuls les utilisateurs disposant de la clé SSH que vous avez créée pourront se connecter.

### VPS Linux

Vous pouvez désactiver la connexion par mot de passe facilement dans l’onglet Accès & Sécurité.  
Appuyez sur le bouton **Désactiver la connexion par mot de passe** à côté du bouton Générer une clé SSH.  
Une fois désactivée, il n’est plus possible d’accéder au serveur via une connexion par mot de passe.

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

L’affichage pour "**Connexion SSH via mot de passe**" sera alors réglé sur "**Inactif**".