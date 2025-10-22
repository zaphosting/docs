---
id: dedicated-linux-ssh2fa
title: "Serveur dédié : Authentification SSH à deux facteurs"
description: "Découvrez comment renforcer la sécurité SSH avec l’authentification 2FA Google Authenticator pour un accès serveur plus sûr et protégez votre VPS Linux → En savoir plus maintenant"
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le service d’authentification SSH à deux facteurs (2FA) de Google, appelé **Google Authenticator SSH**, améliore la sécurité de l’accès SSH (Secure Shell) en ajoutant une seconde couche d’authentification. Alors que SSH offre déjà une méthode sécurisée pour établir une connexion chiffrée à un serveur distant, l’intégration de la 2FA augmente le niveau de sécurité en demandant aux utilisateurs de saisir non seulement leur mot de passe, mais aussi un code de vérification à usage unique généré par Google Authenticator. Dans ce guide, nous allons explorer le processus d’installation et de configuration du service **Google Authenticator SSH** sur un serveur Linux.

<InlineVoucher />

## Installation

Commence par installer Google Authenticator sur ton VPS Linux. Exécute la commande suivante :

```
sudo apt install libpam-google-authenticator
```

Tu seras alors invité à taper "Y" pour installer le paquet, fais-le, appuie sur Entrée et Google Authenticator sera installé !

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

Lance Google Authenticator en tapant `google-authenticator`. Assure-toi que la taille de ta fenêtre est suffisante pour afficher le QR Code, sinon presse "CTRL+C" et relance la commande.

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

Tu seras de nouveau invité à confirmer l’exécution, tape "Y" pour accepter. Un QR Code s’affichera. Ouvre ton application Authenticator sur ton smartphone et scanne ce QR Code. Pour cet exemple, on utilise Google Authenticator :

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

N’oublie pas de copier les codes de secours, ils peuvent être utilisés une seule fois chacun en cas de perte de ton authentificateur.

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

L’application te montre déjà les codes nécessaires pour te connecter plus tard. Ça ressemble à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

Les questions suivantes te seront posées :

1. Veux-tu sauvegarder la configuration Google Authenticator ?
2. Veux-tu autoriser une seule connexion toutes les 30 secondes ?
3. Faut-il augmenter la durée pendant laquelle un code est valide ?
4. Veux-tu limiter à trois connexions toutes les 30 secondes ? (Protection contre les attaques par force brute)

Pour des raisons de sécurité, on recommande de répondre Oui à toutes.

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## Configuration

Maintenant, il faut ajuster Google Authenticator pour qu’il soit bien pris en compte. Deux modifications sont nécessaires.

### /etc/ssh/sshd_config

Active les modules requis dans le fichier `/etc/ssh/sshd_config`. Ouvre-le avec la commande :
```
sudo nano /etc/ssh/sshd_config
```

Tu es maintenant dans un éditeur de texte. Utilise les flèches pour naviguer, supprime ou ajoute du texte librement, puis sauvegarde avec 'CTRL + X', confirme avec 'Y' et appuie sur 'Entrée'.

Assure-toi que les lignes `UsePAM` et `ChallengeResponseAuthentication` sont bien réglées sur `yes`. Ça doit ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

Sauvegarde le fichier avec 'CTRL + X', 'Y' puis 'Entrée'. Redémarre ensuite SSH avec la commande :
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

On ajoute maintenant Google Authenticator à la procédure de connexion dans `/etc/pam.d/sshd`. Ouvre ce fichier avec :
```
sudo nano /etc/pam.d/sshd
```
Descends jusqu’à la fin du fichier et ajoute la ligne suivante :
```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

Sauvegarde avec 'CTRL + X', 'Y' puis 'Entrée'.

## Test de connexion

Il est temps de te connecter pour la première fois avec la 2FA. Après avoir suivi les étapes ci-dessus, il te suffit de redémarrer ta connexion SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

Tu entres ton mot de passe normalement. Ensuite, on te demandera un code, saisis simplement le code 2FA actuel.

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

Et voilà, tu es connecté !

## Conclusion

Félicitations, tu as configuré avec succès la 2FA pour ton accès SSH. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />