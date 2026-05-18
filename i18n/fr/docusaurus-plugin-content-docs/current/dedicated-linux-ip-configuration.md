---
id: dedicated-linux-ip-configuration
title: "Serveur dédié : Configuration IP (Ubuntu/Debian)"
description: "Apprends à configurer une adresse IP statique sur un serveur Linux sous Ubuntu ou Debian → Découvre-le maintenant"
sidebar_label: Configurer les adresses IP
services:
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Configurer les adresses IP sur ton serveur dédié Linux te permet de contrôler comment ton serveur communique au sein du réseau. Cela inclut l’attribution des adresses IP, la définition de la passerelle par défaut, et la configuration des serveurs DNS nécessaires à la connectivité réseau.

:::warning Serveur inaccessible à cause d’une connexion internet manquante ?
Si ton serveur devient inaccessible à cause d’une mauvaise configuration réseau ou d’une absence de connexion internet, l’accès à distance via SSH peut ne plus fonctionner. Utilise la [console iLO HTML](dedicated-ilo.md#the-html5-console) pour te connecter à ton serveur et corriger la configuration réseau.
:::

<InlineVoucher />

## Préparation

Avant de configurer une adresse IP statique, assure-toi d’avoir les infos suivantes sous la main :

- Adresse IP que tu souhaites attribuer  
- Masque de sous-réseau  
- Passerelle par défaut  
- Serveurs DNS  

Tu peux retrouver ces infos dans l’interface web. Pour cela, ouvre ta **gestion du serveur dédié** et va dans **Adresses IP**.

## Configuration

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Les installations Ubuntu utilisent **Netplan** pour la configuration réseau. Connecte-toi à ton serveur dédié via SSH et localise le fichier de configuration Netplan dans le dossier `/etc/netplan/`. Ouvre le fichier de config :

```bash
nano /etc/netplan/50-cloud-init.yaml
```

Modifie la configuration pour définir une adresse IP statique :
```
network:
  version: 2
  ethernets:
    eth0:
      match:
        macaddress: "bc:24:11:5f:5c:34"
      addresses:
      - "109.230.238.45/24"
      nameservers:
        addresses:
        - 8.8.8.8
        - 1.1.1.1
      set-name: "eth0"
      routes:
      - to: "default"
        via: "109.230.238.1"
```

Adapte les valeurs suivantes pour correspondre à ta config réseau :

- 109.230.238.45 → Ton adresse IP statique  
- 109.230.238.1 → Ta passerelle  
- Adresses DNS → Tes serveurs DNS préférés  

Sauvegarde le fichier et applique la config :

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

Debian utilise souvent le fichier de configuration des interfaces réseau au lieu de Netplan. Connecte-toi à ton serveur dédié via SSH et ouvre le fichier de config des interfaces réseau :

```
nano /etc/network/interfaces
```

Ajoute ou modifie la configuration pour ton interface réseau. Exemple de config :

```bash
auto lo
iface lo inet loopback

# L’interface réseau principale
allow-hotplug ens18
iface ens18 inet static
        address 134.255.219.160/24
        gateway 134.255.219.1
        # les options dns-* sont gérées par le paquet resolvconf, si installé
        dns-nameservers 1.1.1.1
```

Adapte les valeurs selon ta config réseau :  
- address → Ton adresse IP statique  
- netmask → Ton masque de sous-réseau  
- gateway → Ta passerelle par défaut  
- dns-nameservers → Tes serveurs DNS préférés  

Après avoir sauvegardé le fichier de config, redémarre le service réseau :

```
systemctl restart networking
```

</TabItem> </Tabs>



## Vérification

Après avoir appliqué la configuration, il est recommandé de vérifier que la nouvelle adresse IP a bien été prise en compte. Pour cela, lance la commande suivante dans ton terminal :

```
ip a
```

Cette commande affiche toutes les **interfaces réseau** disponibles sur le système avec leurs détails de configuration actuels. Dans la sortie, repère l’interface que tu as configurée, généralement nommée `eth0`, `ens18` ou un identifiant similaire selon le système.

Dans la section de l’interface, cherche l’entrée **`inet`**, qui représente l’adresse IPv4 attribuée à l’interface. La sortie devrait contenir l’adresse IP statique que tu as configurée. Par exemple :

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

Si l’adresse correcte apparaît dans la sortie, la configuration IP statique a été appliquée avec succès. Si la nouvelle adresse IP n’apparaît pas, vérifie à nouveau le fichier de configuration et assure-toi que les modifications ont bien été sauvegardées avant de réappliquer la configuration.



## Conclusion

Félicitations ! Tu as configuré avec succès ton adresse IP sur ton serveur Linux. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />