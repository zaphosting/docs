---
id: vserver-linux-ssh2fa
title: "VPS : Authentification SSH à deux facteurs"
description: "Découvre comment renforcer la sécurité SSH avec l’authentification 2FA Google Authenticator pour un accès serveur plus sûr et protège ton environnement Linux → En savoir plus maintenant"
sidebar_label: 2FA (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le service d’authentification SSH à deux facteurs (2FA) de Google, appelé **Google Authenticator SSH**, améliore la sécurité de l’accès SSH (Secure Shell) en ajoutant une seconde couche d’authentification. Alors que SSH offre déjà une méthode sécurisée pour établir une connexion chiffrée à un serveur distant, l’intégration de la 2FA augmente le niveau de sécurité en demandant aux utilisateurs non seulement leur mot de passe, mais aussi un code de vérification à usage unique généré par Google Authenticator. Dans ce guide, on va voir comment installer et configurer le service **Google Authenticator SSH** sur un serveur Linux.

<InlineVoucher />

## Installation

Commence par installer Google Authenticator sur ton VPS Linux. Exécute la commande suivante :

```
sudo apt install libpam-google-authenticator
```

Tu seras alors invité à taper "Y" pour installer le paquet, tape-le, appuie sur Entrée et Google Authenticator sera installé !

![](https://screensaver01.zap-hosting.com/index.php/s/AnKdPXEzKdB5xWS/preview)

Lance Google Authenticator en tapant `google-authenticator`. Assure-toi que la taille de ta fenêtre est suffisante pour afficher le QR Code, sinon presse "CTRL+C" et relance la commande.

![](https://screensaver01.zap-hosting.com/index.php/s/8w9aDz5ZbSmNPZ9/preview)

Tu seras à nouveau invité à confirmer l’exécution, tape "Y" pour accepter. Un QR Code va s’afficher. Ouvre ton appli Authenticator sur ton smartphone et scanne ce QR Code. Pour cet exemple, on utilise Google Authenticator :

![](https://screensaver01.zap-hosting.com/index.php/s/J5CL6mjzPRMSiap/preview)

Pense bien à copier les codes de secours, ils peuvent être utilisés une seule fois chacun si tu perds ton authentificateur.

![](https://screensaver01.zap-hosting.com/index.php/s/itdjPyGrFb7Wq39/preview)

L’appli te montre déjà les codes dont tu auras besoin pour te connecter plus tard. Ça ressemble à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/TW24xBe26TbgCqE/preview)

Les questions suivantes vont maintenant s’afficher :

1. Veux-tu sauvegarder la configuration Google Authenticator ?
2. Veux-tu autoriser une seule connexion toutes les 30 secondes ?
3. Faut-il augmenter la durée de validité d’un code ?
4. Faut-il limiter à trois connexions toutes les 30 secondes ? (Protection contre le Brute Force)

Pour la sécurité, on recommande de répondre Oui à toutes.

![](https://screensaver01.zap-hosting.com/index.php/s/bdYRncwk7ssQyYJ/preview)

## Configuration

Maintenant, il faut ajuster Google Authenticator pour qu’il soit bien pris en compte. Ça demande deux modifications.

### /etc/ssh/sshd_config

Active les modules nécessaires dans `/etc/ssh/sshd_config`. Ouvre le fichier avec la commande :
```
sudo nano /etc/ssh/sshd_config
```

Tu es maintenant dans un éditeur de texte. Utilise les flèches pour te déplacer, supprime ou ajoute du texte librement, puis appuie sur `CTRL + X`, ensuite `Y` et enfin `Entrée` pour sauvegarder.

Vérifie que les lignes `UsePAM` et `ChallengeResponseAuthentication` sont bien réglées sur `yes`. Comme ça :

![](https://screensaver01.zap-hosting.com/index.php/s/n8MzX8724T2GFAF/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zLk98HrkF4jk4Jf/preview)

Sauvegarde avec `CTRL + X`, puis `Y` et `Entrée`. Redémarre SSH avec la commande suivante :
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

On ajoute maintenant Google Authenticator à la connexion dans `/etc/pam.d/sshd`. Ouvre le fichier avec :
```
sudo nano /etc/pam.d/sshd
```
Descends jusqu’à la fin du fichier et ajoute la ligne suivante :
```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/xwodXzPifANsQAM/preview)

Sauvegarde avec `CTRL + X`, puis `Y` et `Entrée`.

## Test de l’accès

C’est le moment de te connecter pour la première fois avec la 2FA. Après avoir suivi les étapes ci-dessus, il te suffit de redémarrer ta connexion SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/cN3x3aFbtfxdi7M/preview)

Tu entres ton mot de passe normalement. On te demandera ensuite un code, entre simplement le code 2FA actuel.

![](https://screensaver01.zap-hosting.com/index.php/s/y3dgYXezL8sDbJe/preview)

Et voilà, tu es connecté !

## Conclusion

Félicitations, tu as activé et configuré avec succès la 2FA pour SSH ! Si tu as d’autres questions ou soucis, contacte notre équipe support, dispo tous les jours pour t’aider !

<InlineVoucher />