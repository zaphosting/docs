---
id: vserver-linux-add-ip
title: "VPS : Configurer l(es) adresse(s) IP"
description: "Apprenez à configurer et gérer les adresses IP principales et supplémentaires sur les systèmes Debian et Ubuntu pour une configuration réseau optimisée → En savoir plus maintenant"
sidebar_label: Configurer l(es) adresse(s) IP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu veux configurer ta config réseau et définir des adresses IP ?

<InlineVoucher />

## Configuration de l'adresse IP

Cette section explique comment définir et déterminer l'adresse IP principale.

<Tabs>
  <TabItem value="debian" label="Debian" default>

La configuration réseau sous Debian se fait via les interfaces réseau. Lance la commande `sudo nano /etc/network/interfaces` pour ouvrir la config réseau. Par défaut, le contenu devrait ressembler à ça :

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

Si ce n’est pas encore en place, le contenu doit être comme montré. Remplace le placeholder d’adresse IP (XXX.XXX.XXX.XXX) par l’adresse IP de ton serveur, visible dans l’administration serveur sur le tableau de bord. Utilise `255.255.255.0` (réseau classe C) comme masque de sous-réseau et assure-toi que le dernier octet ne contient que le 1 pour la passerelle.

Sauvegarde avec CTRL+X puis confirme avec Entrée. Le module réseau doit maintenant être redémarré pour que la nouvelle adresse IPv4 soit active, fais-le avec la commande suivante :

```
sudo service networking restart
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
[Match]
Name = eth0

[Network]
Description = Interface eth0 autoconfigurée par PVE
Address = 185.223.31.234/24
Gateway = 185.223.31.1
DHCP = no
IPv6AcceptRA = false
```

 </TabItem>
</Tabs>

## Configuration des adresses IP supplémentaires
<Tabs>
  <TabItem value="debian" label="Debian" default>

```
allow-hotplug eth0:1
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

   Placeholder

</TabItem>
</Tabs>

## Tester la configuration
Pour vérifier que l’adresse IP configurée est correcte et fonctionnelle, tu peux faire un test ping. Par exemple, sur ton propre PC, ouvre l’invite de commandes (cmd.exe) et lance la commande suivante :

```
ping <your_server_ip>
```

Après exécution et si l’adresse IP est bien configurée, le résultat devrait ressembler à ça :

```
Pinging XXX.XXX.XXX.XX with 32 bytes of data:
Reply from XXX.XXX.XXX.XX: bytes=32 time=25ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=23ms TTL=56

Ping statistics for XXX.XXX.XXX.XX:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 22ms, Maximum = 25ms, Average = 23ms
```

## Conclusion

Bravo, tu as configuré ta config réseau avec succès. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />