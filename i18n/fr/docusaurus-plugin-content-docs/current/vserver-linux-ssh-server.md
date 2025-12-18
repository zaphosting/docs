---
id: vserver-linux-ssh-server
title: "VPS : Installation de SSH"
description: "Apprenez à accéder et gérer en toute sécurité des serveurs Linux distants avec SSH pour renforcer la protection des données et le contrôle du serveur → En savoir plus maintenant"
sidebar_label: Installer SSH
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

Secure Shell (SSH) est un protocole sécurisé qui permet un accès sûr et chiffré aux systèmes distants. Il garantit la confidentialité et l’intégrité des données transmises sur les réseaux.

Dans ce guide, vous allez apprendre comment installer ou réinstaller le serveur SSH pour plusieurs distributions Linux que nous proposons actuellement sur nos serveurs VPS. La plupart des distributions Linux proposées via nos VPS sont équipées d’un serveur SSH par défaut, ce qui signifie que vous pouvez facilement le gérer via l’interface web du produit. Vous pouvez voir comment faire cela via notre guide : [Accès initial (SSH)](vserver-linux-ssh.md)

Si vous souhaitez en savoir plus pour améliorer la sécurité de votre serveur, nous vous recommandons vivement de consulter notre guide [Conseils de sécurité](vserver-linux-security-tips.md) qui présente plusieurs outils et services pour renforcer la sécurité de votre serveur.

<InlineVoucher />

## Installation

Pour démarrer l’installation, accédez à votre serveur via VNC. Vous pouvez suivre ces étapes en utilisant la [console VNC](vserver-vnc.md).


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
</TabItem>
</Tabs>

## Activation de la connexion root

<Tabs>

<TabItem value="CentOS" label="CentOS" default>
Pour activer la connexion root, vous devez éditer le fichier de configuration openssh. Dans ce guide, nous utiliserons "nano" comme éditeur.

:::info
Si "nano" n’est pas déjà installé, il faut l’installer d’abord. Pour cela, utilisez la commande suivante : `yum install nano`
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

<TabItem value="Debian" label="Debian" default>
Pour activer la connexion root, vous devez éditer le fichier de configuration openssh. Dans ce guide, nous utiliserons "nano" comme éditeur.

:::info
Si "nano" n’est pas déjà installé, il faut l’installer d’abord. Pour cela, utilisez la commande suivante : `yum install nano`
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

<TabItem value="Ubuntu" label="Ubuntu" default>
Pour activer la connexion root, vous devez éditer le fichier de configuration openssh. Dans ce guide, nous utiliserons "nano" comme éditeur.

:::info
Si "nano" n’est pas déjà installé, il faut l’installer d’abord. Pour cela, utilisez la commande suivante : `yum install nano`
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

<TabItem value="Fedora" label="Fedora" default>
Pour activer la connexion root, vous devez éditer le fichier de configuration openssh. Dans ce guide, nous utiliserons "nano" comme éditeur.

:::info
Si "nano" n’est pas déjà installé, il faut l’installer d’abord. Pour cela, utilisez la commande suivante : `yum install nano`
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
</Tabs>


## Conclusion

Félicitations, vous avez installé et configuré avec succès le service SSH ! Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 


<InlineVoucher />