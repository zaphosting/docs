---
id: dedicated-linux-ssh2fa
title: "Serveur dédié : Authentification SSH à deux facteurs"
description: "Découvrez comment renforcer la sécurité SSH avec Google Authenticator 2FA pour un accès serveur plus sûr et protégez votre VPS Linux → En savoir plus maintenant"
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le service d’authentification SSH à deux facteurs (2FA) de Google, appelé **Google Authenticator SSH**, améliore la sécurité de l’accès SSH (Secure Shell) en ajoutant une seconde couche d’authentification. Alors que SSH offre déjà une méthode sécurisée pour établir une connexion chiffrée à un serveur distant, l’intégration de la 2FA augmente le niveau de sécurité en demandant aux utilisateurs non seulement leur mot de passe, mais aussi un code de vérification à usage unique généré par Google Authenticator. Dans ce guide, nous allons explorer le processus d’installation et de configuration du service **Google Authenticator SSH** sur un serveur Linux.

## Installation

Commencez par installer Google Authenticator sur votre VPS Linux. Exécutez la commande suivante :

```
sudo apt install libpam-google-authenticator
```

Vous serez ensuite invité à taper "Y" pour installer le paquet, faites-le, appuyez sur Entrée et Google Authenticator sera installé !

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

Lancez Google Authenticator en tapant `google-authenticator`. Assurez-vous que la taille de votre fenêtre est suffisante pour afficher le QR Code, sinon appuyez sur "CTRL+C" et relancez la commande.

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

On vous demandera à nouveau si vous souhaitez exécuter la configuration, tapez "Y" pour accepter. Vous obtiendrez alors un QR Code. Ouvrez votre application Authenticator sur votre smartphone et scannez le QR Code. Pour cet exemple, nous utilisons Google Authenticator :

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

Pensez bien à copier les codes de secours, chacun peut être utilisé une fois en cas de perte de votre authentificateur.

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

L’application vous affiche déjà les codes nécessaires pour vous connecter plus tard. Ça ressemble à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

Les questions suivantes vous seront posées :

1. Voulez-vous sauvegarder la configuration Google Authenticator ?
2. Voulez-vous une seule connexion toutes les 30 secondes ?
3. Faut-il augmenter la durée pendant laquelle un code est valide ?
4. Faut-il limiter à trois connexions toutes les 30 secondes ? (Protection contre les attaques par force brute)

Pour des raisons de sécurité, on recommande de répondre Oui à toutes.

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## Configuration

Il faut maintenant ajuster Google Authenticator pour qu’il soit bien pris en compte. Deux modifications sont nécessaires.

### /etc/ssh/sshd_config

Activez les modules requis dans le fichier `/etc/ssh/sshd_config`. Ouvrez-le avec la commande :  
```
sudo nano /etc/ssh/sshd_config
```

Vous êtes maintenant dans un éditeur de texte. Déplacez-vous avec les flèches, supprimez ou ajoutez du texte librement, puis sauvegardez avec `CTRL + X`, tapez `Y` et validez avec `Entrée`.

Assurez-vous que les lignes `UsePAM` et `ChallengeResponseAuthentication` soient bien réglées sur `yes`. Comme ceci :

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

Sauvegardez le fichier avec `CTRL + X`, puis `Y` et `Entrée`. Redémarrez ensuite SSH avec la commande suivante :  
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

Ajoutez maintenant Google Authenticator à la connexion dans le fichier `/etc/pam.d/sshd`. Ouvrez-le avec :  
```
sudo nano /etc/pam.d/sshd
```

Descendez jusqu’à la fin du fichier et ajoutez la ligne suivante :  
```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

Sauvegardez avec `CTRL + X`, puis `Y` et `Entrée`.

## Test d’accès

Il est temps de vous connecter pour la première fois avec la 2FA. Après avoir suivi les étapes ci-dessus, il vous suffit de redémarrer votre connexion SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

Entrez votre mot de passe comme d’habitude. On vous demandera un code, entrez simplement le code 2FA actuel.

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

Et voilà, vous êtes connecté !

## Conclusion

Félicitations, vous avez configuré avec succès la 2FA pour votre accès SSH. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂