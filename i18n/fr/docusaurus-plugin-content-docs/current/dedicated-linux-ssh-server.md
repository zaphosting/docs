---
id: dedicated-linux-ssh-server
title: "Configurer SSH sur un serveur Linux - Activez un accès distant sécurisé"
description: "Découvrez comment installer et gérer en toute sécurité les serveurs SSH sur un serveur Linux pour garantir un accès distant sûr et une meilleure protection du serveur → En savoir plus maintenant"
sidebar_label: Installer SSH
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Secure Shell (SSH) est un protocole sécurisé qui permet un accès sûr et chiffré aux systèmes distants. Il garantit la confidentialité et l’intégrité des données transmises sur les réseaux.

Dans ce guide, vous apprendrez comment installer ou réinstaller le serveur SSH pour plusieurs distributions Linux que nous proposons actuellement sur nos VPS/serveurs dédiés. La plupart des distributions Linux proposées via nos VPS/serveurs dédiés sont équipées d’un serveur SSH par défaut, ce qui signifie que vous pouvez facilement le gérer via l’interface web du produit. Vous pouvez voir comment faire cela via notre guide : [Accès initial (SSH)](vserver-linux-ssh.md)

Si vous souhaitez en savoir plus pour renforcer la sécurité de votre serveur, nous vous recommandons vivement de consulter notre guide [Conseils de sécurité](vserver-linux-security-tips.md) qui présente plusieurs outils et services pour sécuriser encore plus votre serveur.



## Installation

Pour commencer l’installation, accédez à votre serveur via VNC. Vous pouvez suivre ces étapes en utilisant la [console VNC](vserver-vnc.md).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Si vous souhaitez réinstaller le serveur SSH, assurez-vous de le désinstaller d’abord. Vous pouvez le faire avec la commande : `yum remove openssh`.
:::

Avant d’installer le serveur SSH, assurez-vous que votre système est à jour. Lancez la commande suivante :
```
yum update
```

Procédez maintenant à l’installation du serveur SSH avec la commande suivante :
```
yum install openssh-server
```

Une fois l’installation terminée, vous pouvez démarrer le service SSH avec la commande suivante :
```
systemctl start sshd
```

Assurez-vous d’activer le service pour qu’il démarre automatiquement au démarrage du système. Vous pouvez le faire avec la commande suivante :
```
systemctl enable sshd
```

## Activation de la connexion root

Pour activer la connexion root, vous devez modifier le fichier de configuration openssh. Dans ce guide, nous utiliserons "nano" comme éditeur.

:::info
Si "nano" n’est pas déjà installé, il faut d’abord l’installer. Pour cela, utilisez la commande : `yum install nano`
:::

Ouvrez le fichier de configuration en lançant :
```
nano /etc/ssh/sshd_config 
```

Avec les flèches, cherchez la ligne suivante :
```
#PermitRootLogin prohibit-password
```

Changez-la par la ligne suivante, qui active la connexion root à distance :
```
PermitRootLogin yes
```

Enfin, redémarrez le serveur SSH pour appliquer la nouvelle configuration avec la commande suivante :
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Si vous souhaitez réinstaller le serveur SSH, assurez-vous de le désinstaller d’abord. Vous pouvez le faire avec la commande : `apt remove openssh`.
:::

Avant d’installer le serveur SSH, assurez-vous que votre système est à jour. Lancez la commande suivante :
```
apt update
```

Procédez maintenant à l’installation du serveur SSH avec la commande suivante :
```
apt install openssh-server
```

Une fois l’installation terminée, vous pouvez démarrer le service SSH avec la commande suivante :
```
systemctl start sshd
```

Assurez-vous d’activer le service pour qu’il démarre automatiquement au démarrage du système. Vous pouvez le faire avec la commande suivante :
```
systemctl enable sshd
```

## Activation de la connexion root

Pour activer la connexion root, vous devez modifier le fichier de configuration openssh. Dans ce guide, nous utiliserons "nano" comme éditeur.

:::info
Si vous n’avez pas encore "nano" installé, vous devrez l’installer. Pour cela, utilisez la commande : `apt install nano`
:::

Ouvrez le fichier de configuration en lançant :
```
nano /etc/ssh/sshd_config 
```

Avec les flèches, cherchez la ligne suivante :
```
#PermitRootLogin prohibit-password
```

Changez-la par la ligne suivante, qui active la connexion root à distance :
```
PermitRootLogin yes
```

Enfin, redémarrez le serveur SSH pour appliquer la nouvelle configuration avec la commande suivante :
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Si vous souhaitez réinstaller le serveur SSH, assurez-vous de le désinstaller d’abord. Vous pouvez le faire avec la commande : `apt remove openssh`.
:::

Avant d’installer le serveur SSH, assurez-vous que votre système est à jour. Lancez la commande suivante :
```
apt update
```

Procédez maintenant à l’installation du serveur SSH avec la commande suivante :
```
apt install openssh-server
```

Une fois l’installation terminée, vous pouvez démarrer le service SSH avec la commande suivante :
```
systemctl start sshd
```

Assurez-vous d’activer le service pour qu’il démarre automatiquement au démarrage du système. Vous pouvez le faire avec la commande suivante :
```
systemctl enable sshd
```

## Activation de la connexion root

Pour activer la connexion root, vous devez modifier le fichier de configuration openssh. Dans ce guide, nous utiliserons "nano" comme éditeur.

:::info
Si vous n’avez pas encore "nano" installé, vous devrez l’installer. Pour cela, utilisez la commande : `apt install nano`
:::

Ouvrez le fichier de configuration en lançant :
```
nano /etc/ssh/sshd_config 
```

Avec les flèches, cherchez la ligne suivante :
```
#PermitRootLogin prohibit-password
```

Changez-la par la ligne suivante, qui active la connexion root à distance :
```
PermitRootLogin yes
```

Enfin, redémarrez le serveur SSH pour appliquer la nouvelle configuration avec la commande suivante :
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Si vous souhaitez réinstaller le serveur SSH, assurez-vous de le désinstaller d’abord. Vous pouvez le faire avec la commande : `dnf remove openssh`.
:::

Avant d’installer le serveur SSH, assurez-vous que votre système est à jour. Lancez la commande suivante :
```
dnf update
```

Procédez maintenant à l’installation du serveur SSH avec la commande suivante :
```
dnf install openssh-server
```

Une fois l’installation terminée, vous pouvez démarrer le service SSH avec la commande suivante :
```
systemctl start sshd
```

Assurez-vous d’activer le service pour qu’il démarre automatiquement au démarrage du système. Vous pouvez le faire avec la commande suivante :
```
systemctl enable sshd
```

## Activation de la connexion root

Pour activer la connexion root, vous devez modifier le fichier de configuration openssh. Dans ce guide, nous utiliserons "nano" comme éditeur.

:::info
Si vous n’avez pas encore "nano" installé, vous devrez l’installer. Pour cela, utilisez la commande : `dnf install nano`
:::

Ouvrez le fichier de configuration en lançant :
```
sudo nano /etc/ssh/sshd_config 
```

Avec les flèches, cherchez la ligne suivante :
```
#PermitRootLogin prohibit-password
```

Changez-la par la ligne suivante, qui active la connexion root à distance :
```
PermitRootLogin yes
```

Enfin, redémarrez le serveur SSH pour appliquer la nouvelle configuration avec la commande suivante :
```
systemctl restart sshd
```
</TabItem>
</Tabs>

Vous avez maintenant installé avec succès le service SSH sur votre serveur et pouvez accéder à votre serveur via SSH.