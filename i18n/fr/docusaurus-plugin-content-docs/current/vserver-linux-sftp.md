---
id: vserver-linux-sftp
title: "VPS : Établir une connexion via SFTP"
description: "Découvrez comment transférer vos fichiers en toute sécurité avec SFTP et protégez vos données grâce à une connexion chiffrée → En savoir plus maintenant"
sidebar_label: Connexion SFTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';





## Introduction

SFTP est un protocole sécurisé pour transférer des fichiers entre ordinateurs via Internet ou un réseau. Cela signifie **« SSH File Transfer Protocol »** ou **« Secure File Transfer Protocol »** et repose sur le **protocole SSH (Secure Shell)**.

Contrairement au FTP (File Transfer Protocol), où les données sont transférées sans chiffrement, SFTP garantit que toutes les données sont chiffrées et donc protégées contre tout accès non autorisé.

<InlineVoucher />



## Établir la connexion

Pour la connexion via **SFTP**, on utilise les identifiants de l’utilisateur root. Cet exemple montre la configuration de la connexion avec l’application WinSCP. Créez une **Nouvelle session** dans WinSCP.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDsMr5mnJpC7FtM/download)

Choisissez `SFTP` comme **protocole de transfert** dans la fenêtre de configuration de la nouvelle session. Ensuite, saisissez l’**adresse IP** de votre serveur et le port **22**. Pour le nom d’utilisateur et le mot de passe, utilisez les identifiants de votre utilisateur `root`.

![img](https://screensaver01.zap-hosting.com/index.php/s/Wq59YHDnirKYkDr/download)

:::warning Utilisation des clés SSH
Si vous utilisez une clé SSH au lieu de l’option simple mot de passe, cliquez sur **Avancé** et allez dans **SSH -> Authentification**. Vous pouvez y enregistrer votre clé SSH.
:::

La première fois que vous vous connectez via SFTP, ce message apparaît car votre ordinateur ne connaît pas encore le serveur. Confirmez avec **« Oui »** si vous faites confiance au serveur. Cela enregistrera sa clé de sécurité et vous ne serez plus sollicité pour les connexions futures. C’est une étape normale lors de la première connexion à un nouveau serveur.

![img](https://screensaver01.zap-hosting.com/index.php/s/DxErsePZJnkxyCp/download)





## Conclusion

Si vous avez suivi toutes les étapes, vous avez réussi à établir une connexion SFTP avec votre serveur. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />