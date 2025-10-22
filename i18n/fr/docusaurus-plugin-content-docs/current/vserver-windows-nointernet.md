---
id: vserver-windows-nointernet
title: "VPS : Résoudre le problème de connexion Internet"
description: "Découvrez comment dépanner et réparer efficacement les problèmes de connexion Internet sur votre VPS Windows → En savoir plus maintenant"
sidebar_label: Résoudre le problème de connexion Internet
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Une connexion Internet interrompue ou défaillante peut avoir plusieurs causes, comme une adresse IP, un masque de sous-réseau, une passerelle, un serveur DNS ou des réglages de pare-feu incorrects. Dans ce guide, on vous explique comment dépanner et résoudre les problèmes réseau potentiels.

<YouTube videoId="VfZyNge5ikA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pqpjBWoHGJWztQG/preview" title="Comment réparer les problèmes de connexion Internet sur un VPS Windows" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus fun et visuelle !" />



<InlineVoucher />

## Accès VNC sans Internet

Si vous ne pouvez pas vous connecter à votre serveur via RDP (Bureau à distance) à cause d’une connexion Internet non fonctionnelle, une alternative est d’utiliser la console VNC (Virtual Network Computing) disponible sur notre site.

Cette option vous permet d’accéder à votre serveur et de résoudre les problèmes même si la connexion Internet ne marche pas. Pour y accéder, rendez-vous dans la section **Outils->Console VNC** sur le panneau web de votre serveur.

Sur cette page, vous pourrez activer la console en cliquant sur le bouton **Ouvrir le client web** et en vous connectant avec vos identifiants habituels.

![](https://screensaver01.zap-hosting.com/index.php/s/L9ZPLHEXbydc6ZS/preview)

## Méthodes de dépannage

### Vérifier l’adresse IP, le masque de sous-réseau et la passerelle

La première étape est de vérifier que la configuration technique de l’adaptateur réseau de votre serveur est correcte, notamment l’adresse IP, le masque de sous-réseau et la passerelle.

Commencez par aller dans la section **Paramètres->Adresses IP** sur le panneau web de votre serveur où vous pourrez voir toutes les adresses IP que vous louez actuellement avec votre service.

![](https://screensaver01.zap-hosting.com/index.php/s/8gF7Qsq5k5aYxbq/preview)

Ensuite, connectez-vous à votre serveur via RDP ou la console VNC si vous avez des soucis. Ouvrez les paramètres de l’adaptateur réseau Windows en suivant ce chemin : 
```
Paramètres -> Réseau et Internet -> Modifier les options d’adaptateur -> Adaptateur réseau
```

Trouvez l’option **Protocole Internet version 4 (TCP/IPv4)** dans la liste et cliquez sur **Propriétés**.

![](https://screensaver01.zap-hosting.com/index.php/s/xYSSa2txkRkM4bx/preview)

#### Configuration de l’adaptateur

Comparez les infos trouvées dans l’adaptateur et assurez-vous qu’elles correspondent à ceci :
- Adresse IP : doit être l’adresse IP affichée dans la page **Adresses IP** du panneau web.
- Masque de sous-réseau : généralement `255.255.255.0` car notre réseau utilise une classe C.
- Passerelle par défaut : doit être votre adresse IP, identique à la première valeur mais avec le dernier octet (`.xxx`) remplacé par `.1`.

#### Exemple de configuration

:::info
Notez que c’est un **exemple** pour faciliter la compréhension. Remplacez l’adresse IP par celle de **votre propre** serveur.
:::

Avec une adresse IP `185.223.28.163`, votre config devrait ressembler à ça :

| Paramètre       | Valeur         |
| --------------- | -------------- |
| Adresse IP      | 185.223.28.163 |
| Masque de sous-réseau | 255.255.255.0  |
| Passerelle par défaut | 185.223.28.1   |

![](https://screensaver01.zap-hosting.com/index.php/s/PTjQZc5gqP2okAC/preview)

Quand c’est prêt, cliquez sur **Ok** pour appliquer les changements. On recommande de redémarrer le serveur pour finaliser le dépannage.



### Paramètres du serveur DNS

Si vous avez toujours des soucis de connexion Internet, vérifiez que le serveur DNS est bien configuré. Remplacez les valeurs DNS manquantes ou existantes par un serveur connu.

On recommande d’utiliser les serveurs DNS de Google ou Cloudflare, qui sont fiables et largement utilisés.

| Fournisseur DNS | Valeurs du serveur DNS               |
| --------------- | ---------------------------------- |
| Google          | Préféré : 8.8.8.8 / Alternatif : 8.8.4.4 |
| Cloudflare      | Préféré : 1.1.1.1 / Alternatif : 1.0.0.1 |

![](https://screensaver01.zap-hosting.com/index.php/s/oqcR5BHBKLa3ink/preview)

Une fois prêt, cliquez encore sur **Ok** pour appliquer. Là aussi, on recommande de redémarrer le serveur pour finaliser le dépannage.

:::tip
Vous pouvez ouvrir l’invite de commandes (cmd.exe) sur votre serveur et exécuter cette commande pour configurer rapidement les serveurs DNS : 
```
powershell “Get-NetAdapter | Get-NetIPAddress | ForEach-Object { netsh interface ip set dns name=”$($_.InterfaceAlias)“ static 8.8.8.8; netsh interface ip add dns name=”$($_.InterfaceAlias)“ 1.1.1.1 index=2 }”
```
:::



### Paramètres du pare-feu

Dernière étape de dépannage : vérifier que le pare-feu Windows est bien configuré.

On vous conseille de désactiver temporairement le pare-feu Windows pour voir si le problème persiste. Utilisez la recherche Windows pour ouvrir les **Paramètres du pare-feu Windows Defender** et sélectionnez l’option **Activer ou désactiver le pare-feu Windows Defender** dans la colonne de gauche.

![](https://screensaver01.zap-hosting.com/index.php/s/bWcPqHcCZ7ajJSA/preview)

Si le problème disparaît quand le pare-feu est désactivé, c’est sûrement une mauvaise config du pare-feu qui cause le souci.

La solution dépendra du problème rencontré. Pour gérer les règles du pare-feu, consultez notre [guide Redirection de ports (Pare-feu)](vserver-windows-port.md) si besoin.



## Réinitialiser la configuration réseau

Vous pouvez réinitialiser la configuration réseau depuis l’administration web de votre VPS en cliquant sur le bouton **Réinitialiser la configuration réseau** dans la page des paramètres. Cela remettra à zéro la configuration de l’adresse IP, du masque de sous-réseau, de la passerelle et du serveur DNS.

![img](https://screensaver01.zap-hosting.com/index.php/s/YsLZZJZEaf3pemt/preview)


## Conclusion
Si vous avez suivi toutes les étapes, la connexion devrait fonctionner normalement à nouveau. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />