---
id: dedicated-linux-sshkey
title: "Serveur dédié : Générer et utiliser des clés SSH pour serveurs Linux"
description: "Découvrez comment générer et gérer en toute sécurité des clés SSH pour votre serveur Linux afin d'améliorer la sécurité des connexions → En savoir plus maintenant"
sidebar_label: Clé SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Générer une clé SSH

Pour une connexion bien plus sécurisée qu’une connexion classique avec mot de passe SSH, l’utilisation des clés SSH est recommandée. Pour cela, ouvre l’onglet "**Accès & Sécurité**" dans le tableau de bord de ton serveur Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

Dans "**Accès & Sécurité**", tu peux maintenant générer une clé avec le bouton "**Générer une clé SSH**".  
Dès que tu cliques dessus, une fenêtre popup s’ouvre et une clé générée aléatoirement est directement téléchargée sur ton PC.  
Pour que la clé soit ajoutée au serveur, il faut cliquer sur le bouton "**Ajouter la clé**".

:::info
Pour les VPS Linux, la clé est ajoutée directement. Pour les serveurs dédiés Linux, il faut redémarrer le serveur pour que les changements prennent effet.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

Si tu as besoin de plusieurs clés, tu peux appuyer sur le bouton "**Générer une clé**" dans la même fenêtre.  
Avec "**Nom de la clé**", tu peux définir un nom pour la clé, qui sera affiché dans le panneau ZAP-Hosting. C’est super pratique pour mieux t’y retrouver.

Une fois toutes les clés souhaitées générées et ajoutées, elles s’affichent maintenant sous "**Accès & Sécurité**".

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

Si tu as ta propre clé publique, générée en externe et pas via notre panneau, tu peux l’intégrer en cliquant sur l’icône "**+**".

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

Un panneau vide s’ouvre où tu peux coller ta clé publique. La clé sera alors ajoutée au serveur en cliquant sur "**Ajouter la clé**" et affichée dans notre panneau.

## OpenSSH vers clé privée PuTTY avec PuTTYGen

Les clés SSH créées par notre panneau sont au format OpenSSH. Pour pouvoir les utiliser avec PuTTY, il faut d’abord les convertir au format clé privée PuTTY. Tu peux utiliser le logiciel "**PuTTYGen**" qui s’installe automatiquement avec PuTTY.

L’application PuTTYGen se trouve dans le répertoire racine de PuTTY. Par défaut, le dossier PuTTY est montré dans l’exemple à "**C:>Program Files>PuTTY**".

Lance PuTTYGen puis clique sur "**Fichier**" -> "**Charger une clé privée**".

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

Maintenant, ouvre le fichier généré par ZAP-Hosting. Pour ça, va dans le dossier standard où sont stockés tous tes téléchargements.

:::info
**Important :** Assure-toi que le filtre est bien réglé sur "**TOUS les fichiers**" comme sur la photo, car le fichier .pri créé par le système n’est pas visible sinon.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/5eRjG5HNMrxW38D/preview)

Une fois chargé, tu peux utiliser les différents champs pour ajouter un commentaire et un mot de passe à la clé. Pour définir un mot de passe, il faut le saisir dans "**Phrase secrète de la clé**" et "**Confirmer la phrase secrète**".  
*Note :* Tu peux aussi laisser ces champs vides et créer la clé sans mot de passe, mais c’est un peu moins sécurisé et donc pas recommandé. Une fois tous les champs remplis, tu peux sauvegarder une clé compatible PuTTY avec le bouton "**Enregistrer la clé privée**".

![](https://screensaver01.zap-hosting.com/index.php/s/S2XNpejKYds6C6K/preview)

Donne un nom à ce fichier .ppk et sauvegarde-le pour le retrouver facilement plus tard.

## Connexion avec la clé SSH

Pour utiliser la clé lors des connexions, il faut d’abord la lier avec PuTTY. Pour ça, clique sur "**SSH**" - "**Auth**" - "**Parcourir...**".

![](https://screensaver01.zap-hosting.com/index.php/s/cxLBRMPiqEXBG55/preview)

Trouve la clé que tu viens de créer avec PuTTYGen et clique sur "**Ouvrir**".

Pour ne pas refaire ces étapes à chaque connexion, il est conseillé de sauvegarder ça dans la session. Clique sur "**Session**" - "**Paramètres par défaut**" - "**Enregistrer**", comme sur la capture.

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

Tu peux maintenant te connecter au serveur avec PuTTY. Le "**Commentaire de la clé**" que tu as mis dans PuTTYGen sera visible.

## Désactiver la connexion par mot de passe

Les clés SSH ont été créées pour renforcer la sécurité. Si la connexion par mot de passe SSH est toujours possible, la sécurité du serveur n’a pas vraiment changé. C’est pour ça qu’il faut maintenant désactiver la connexion SSH par mot de passe. Il y a une différence entre les VPS Linux et les serveurs dédiés Linux sur la façon de désactiver cette connexion. Si la connexion par mot de passe est bien désactivée, seuls les utilisateurs avec la clé SSH que tu as créée pourront se connecter.

### VPS Linux

Tu peux désactiver la connexion par mot de passe facilement dans l’onglet Accès & Sécurité.  
Appuie sur le bouton **Désactiver la connexion par mot de passe** à côté du bouton Générer une clé SSH.  
Une fois désactivée, il n’est plus possible d’accéder au serveur via une connexion par mot de passe.

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

L’affichage pour "**Connexion SSH via mot de passe**" sera alors réglé sur "**Inactif**".

<InlineVoucher />