---
id: vserver-iso-windows
title: "VPS : Installation de Windows X/Windows Server 20XX"
description: "Découvrez comment personnaliser les installations Windows avec des ISOs sur mesure pour un contrôle total sur la configuration et les pilotes → En savoir plus maintenant"
sidebar_label: "Installer Windows X/WS 20XX"
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introduction
Installer une ISO personnalisée vous donne un contrôle total sur la mise en place d’environnements Windows comme Windows 10 ou Windows Server 2016/2019/2022/2025. Contrairement à nos images OS standard préconstruites, cette méthode vous permet d’utiliser un support d’installation adapté à vos besoins spécifiques, par exemple en incluant des pilotes spéciaux, des configurations prédéfinies ou des packages logiciels supplémentaires.

<InlineVoucher />



## Préparation

Pour l’installation et la configuration d’un système d’exploitation, il est d’abord important de monter l’ISO correspondante du système. Si vous ne savez pas encore comment monter un fichier ISO, il est préférable de consulter notre [guide Own ISO](vserver-iso.md).



## Installation

Au début de l’installation du système Windows, vous serez guidé à travers les étapes initiales. Commencez par choisir la **langue** préférée, puis configurez la **disposition du clavier** et enfin sélectionnez la **méthode d’installation**. Pour l’exemple, l’option **Version précédente de l’installation** est utilisée ici. À l’étape suivante, vous choisissez l’édition, et dans cet exemple, **Windows Server 2025 Datacenter Desktop Experience** est sélectionné, offrant l’interface graphique complète.



![img](https://screensaver01.zap-hosting.com/index.php/s/7K227dRoaz5Y4py/download)

À ce stade de l’installation, vous remarquerez qu’aucune partition n’est affichée. Ce n’est pas une erreur, mais parce que Windows ne peut pas détecter les disques virtuels sans pilotes supplémentaires. Les pilotes VirtIO essentiels sont nécessaires pour la reconnaissance des disques et leur gestion correcte. Ces pilotes doivent maintenant être montés et installés, après quoi les disques apparaîtront et vous pourrez continuer avec le partitionnement et l’installation du système.



### Pilote(s) VirtIO

Avant d’installer le système d’exploitation, les pilotes VirtIO doivent être configurés. Ces pilotes Windows sont optimisés pour une utilisation avec des hyperviseurs basés sur KVM et garantissent que les machines virtuelles Windows fonctionnent avec des performances et une compatibilité maximales.

Pour cela, vous devez temporairement changer le support d’installation vers le `virtio-win.iso`. Sélectionnez le fichier ISO VirtIO parmi les ISOs disponibles et cliquez sur **Monter**. Cela rend les pilotes accessibles pendant le processus d’installation, afin qu’ils puissent être installés avant de poursuivre l’installation du système.



![img](https://screensaver01.zap-hosting.com/index.php/s/wtZFngf9FofiQ88/download)

:::warning NE REDÉMARREZ PAS LE SERVEUR
Lors du changement **temporaire** de l’ISO vers celle de VirtIO, il suffit de sélectionner l’ISO. Ne **<u>redémarrez pas</u>** le système, sinon les progrès précédents seront perdus.

:::

Les pilotes nécessaires sont organisés en trois dossiers dédiés nommés **Balloon**, **NetKVM** et **vioscsi**. Chacun de ces dossiers contient un type spécifique de pilote essentiel pour faire tourner une machine virtuelle Windows sur un hyperviseur KVM.

- **Balloon :** Ce pilote gère dynamiquement l’allocation de mémoire, permettant à la RAM assignée à la VM de s’étendre ou se réduire sans redémarrage.  
- **NetKVM :** Ce pilote fournit une interface réseau optimisée et pleinement fonctionnelle, assurant une connectivité réseau stable et performante pour la VM.  
- **Vioscsi :** Ce pilote est un contrôleur SCSI spécialisé qui garantit la détection correcte et un accès rapide aux disques durs virtuels. Il améliore les performances d’E/S et assure que Windows reconnaît bien les disques virtuels.  

Dans chacun de ces dossiers, il y a un sous-dossier correspondant à l’architecture système. Pendant l’installation, vous devez sélectionner le sous-dossier qui correspond au système d’exploitation que vous souhaitez installer. Veillez toujours à utiliser l’architecture amd64 pour ce processus. <u>Répétez la procédure pour les trois dossiers de pilotes comme montré dans la capture d’écran.</u>

![img](https://screensaver01.zap-hosting.com/index.php/s/fisTox5ziW4Y3tt/download)

Une fois les pilotes VirtIO installés avec succès, vous pouvez poursuivre l’installation proprement dite du système d’exploitation. Comme précédemment, il faut changer le fichier ISO. Cette fois, sélectionnez l’ISO d’installation originale du système, puis rouvrez la console VNC pour continuer l’installation.

![img](https://screensaver01.zap-hosting.com/index.php/s/QECit2kf66WQF9R/download)



### Créer et sélectionner la partition

L’étape suivante consiste à configurer le partitionnement. Supprimez d’abord toutes les partitions inconnues restantes. Puis sélectionnez la partition non allouée nouvellement disponible comme cible pour l’installation du système.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRijdykS6CxyrbA/download)

Ensuite, cliquez sur **Suivant** pour continuer, et le reste de l’installation se déroulera automatiquement. À la fin, vous serez invité à définir les identifiants du compte Administrateur.

![img](https://screensaver01.zap-hosting.com/index.php/s/bPzrdmbgYeLGrjJ/download)



## Configuration

Une fois l’installation du système terminée, quelques étapes finales de configuration sont nécessaires pour garantir que le système soit utilisé de manière sécurisée et fiable. Cela inclut l’activation et la gestion de l’accès via **Bureau à distance (RDP)**, la configuration des **règles du pare-feu** pour assurer à la fois protection et fonctionnalité, ainsi que la mise en place de la **configuration réseau** pour intégrer correctement le serveur dans le réseau.

En réalisant ces ajustements, vous vous assurez que l’accès à distance est disponible, que la surveillance et les contrôles d’état fonctionnent sans problème, et que le serveur opère avec des paramètres réseau stables et prévisibles dans votre infrastructure.



### Configuration RDP

Pour activer le Bureau à distance (RDP) sous Windows, la procédure est globalement la même pour Windows 10 (systèmes clients) et Windows Server 2016/2019/2022/2025. Ouvrez le **Panneau de contrôle** ou les **Paramètres**, allez dans **Système → Bureau à distance** (sur les éditions client) ou **Propriétés système → Accès à distance** (sur les éditions serveur), et activez l’option **Autoriser les connexions à distance à cet ordinateur**. Sur les versions serveur, cela s’appelle **Activer le Bureau à distance**.

![img](https://screensaver01.zap-hosting.com/index.php/s/kcA3bWFHamWRwL8/download)



### Configuration du pare-feu

Pour qu’un serveur soit complètement initialisé et que les contrôles d’état comme les tests ping réussissent, le **protocole ICMP** doit être autorisé via le pare-feu Windows. Sans cette règle, les outils de surveillance et les tests réseau ne pourront pas atteindre le serveur, ce qui entraînera des échecs dans les vérifications de santé.

![img](https://screensaver01.zap-hosting.com/index.php/s/jyLqA5Ly3iXDPJ5/download)

Pour activer ICMP, ouvrez **Pare-feu Windows avec fonctions avancées de sécurité** et allez dans la section des règles entrantes. Créez une nouvelle règle personnalisée, définissez le protocole sur "Tous" et sélectionnez **ICMPv4**. Configurez la règle pour qu’elle s’applique à tous les ports et choisissez les profils (Domaine, Privé, Public) où la règle doit être active. Dans la plupart des cas, il est recommandé de l’activer pour tous les profils. Enfin, donnez un nom descriptif comme *Autoriser ICMP entrant* et terminez l’assistant.

Désormais, le serveur acceptera les requêtes ICMP, permettant aux commandes comme `ping` et aux systèmes de monitoring de le joindre et de vérifier son état avec succès.



### Configuration réseau

Pour configurer manuellement les paramètres réseau sous Windows, ouvrez d’abord le **Centre Réseau et partage** via le Panneau de contrôle ou la barre des tâches. Sélectionnez l’adaptateur réseau concerné (LAN ou Wi-Fi), faites un clic droit dessus, puis ouvrez les **Propriétés**. Dans la liste des éléments, sélectionnez **Protocole Internet version 4 (TCP/IPv4)** et cliquez sur **Propriétés**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nEGkdE79tDwLszr/download)

Dans la fenêtre de dialogue, changez le paramètre de Obtenir une adresse IP automatiquement à Utiliser l’adresse IP suivante. Vous pouvez maintenant saisir l’**adresse IP**, le **masque de sous-réseau** et la **passerelle par défaut** pour votre serveur. En dessous, passez les paramètres DNS en manuel et spécifiez `1.1.1.1` et `8.8.8.8` comme serveurs **DNS** primaire et secondaire. Validez avec **OK** pour appliquer la configuration réseau statique.









## Conclusion

Félicitations, vous avez installé et configuré avec succès votre système Windows. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂



<InlineVoucher />