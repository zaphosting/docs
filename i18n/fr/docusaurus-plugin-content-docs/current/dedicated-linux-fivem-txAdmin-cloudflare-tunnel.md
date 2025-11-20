---
id: dedicated-linux-fivem-txAdmin-cloudflare-tunnel
title: "Serveur dédié : Configuration du tunnel Cloudflare pour txAdmin"
description: "Découvrez comment configurer un tunnel Cloudflare pour txAdmin pour plus de sécurité → En savoir plus maintenant"
sidebar_label: Tunnel Cloudflare pour txAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Si tu veux renforcer la sécurité en plus de la protection DDoS déjà fournie par ZAP-Hosting, tu peux sécuriser davantage ton instance txAdmin en utilisant un tunnel Cloudflare. Cette configuration garantit que l’interface web de txAdmin n’est plus exposée via l’adresse IP publique de ton serveur, mais accessible en toute sécurité via ton propre domaine. Les attaques ciblant le port txAdmin sont filtrées par Cloudflare, tandis que tu peux complètement verrouiller le port local sans perdre l’accès.

<InlineVoucher />

## Prérequis

Pour utiliser un tunnel Cloudflare sur Linux, tu as besoin d’un serveur dédié Linux, d’une installation txAdmin fonctionnelle, du port txAdmin et d’un domaine déjà connecté à ton compte Cloudflare. Si ton domaine n’est pas encore connecté à Cloudflare, suis d’abord notre [guide de configuration Cloudflare](domain-cloudflare-setup.md).

Le tunnel Cloudflare fonctionne en créant une connexion sortante chiffrée de ton serveur vers Cloudflare, donc aucun port public n’a besoin de rester ouvert pour txAdmin.


## Configuration Cloudflare

Avant d’installer cloudflared sur ton vServer Linux, crée et configure d’abord le tunnel directement dans ton tableau de bord Cloudflare.

Connecte-toi à ton compte Cloudflare et va dans la section Zero Trust. Là, tu peux créer un nouveau tunnel qui redirigera plus tard le trafic vers ton interface txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Installation du tunnel Cloudflare

Cloudflare fournit un petit outil appelé cloudflared. L’installation de cloudflared sur Linux est très simple. Commence par télécharger et lancer l’installateur Linux.

![img](https://screensaver01.zap-hosting.com/index.php/s/93TFH8xfxEEDobd/preview)

```
# Ajoute la clé GPG de Cloudflare
sudo mkdir -p --mode=0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-public-v2.gpg | sudo tee /usr/share/keyrings/cloudflare-public-v2.gpg >/dev/null

# Ajoute ce dépôt à tes sources apt
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-public-v2.gpg] https://pkg.cloudflare.com/cloudflared any main' | sudo tee /etc/apt/sources.list.d/cloudflared.list

# installe cloudflared
sudo apt-get update && sudo apt-get install cloudflared
```

Une fois l’installation terminée, exécute la commande fournie :

```
cloudflared.exe service install eyJhIjoiMj...
```

Après avoir lancé les commandes, ton serveur se connectera à Cloudflare via le tunnel. Si la configuration réussit, le statut dans la section Connectors passera à **Connected**, confirmant que le tunnel est actif et fonctionnel.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Configuration du tunnel Cloudflare

Ensuite, configure les paramètres Route Traffic. Crée une nouvelle entrée de sous-domaine de ton choix. Dans cet exemple, le sous-domaine `txAdmin` est utilisé, qui servira plus tard à accéder à l’interface txAdmin.

Sélectionne le domaine que tu souhaites utiliser, puis définis le type de service sur **HTTP** et entre **localhost:port** comme URL. Remplace port par le port défini pour ton instance txAdmin. Le port 40500 sera utilisé dans cet exemple.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Recommandation de sécurité
Au lieu d’utiliser le port txAdmin par défaut **40120**, il est conseillé d’utiliser un port différent pour renforcer la sécurité.
:::



## Configuration du pare-feu Linux

Pour empêcher que le port soit accessible en dehors du tunnel, configure le pare-feu Linux (iptables) afin que le port correspondant accepte uniquement les connexions depuis localhost. Limite le champ d’adresse distante de la règle à 127.0.0.1. Cela force tout le trafic à provenir du système local et bloque tout accès externe, garantissant que le service derrière cloudflared n’est pas accessible depuis le réseau extérieur au tunnel.

```
sudo iptables -A INPUT -p tcp --dport 40500 ! -s 127.0.0.1 -j DROP
```

Avec cette configuration, toute tentative d’accès depuis l’extérieur de la machine est bloquée, assurant que le service derrière cloudflared n’est pas accessible hors tunnel.



## Conclusion

Une fois le tunnel Cloudflare actif, ton interface txAdmin devient accessible uniquement via ton propre domaine, tandis que toutes les requêtes passent par Cloudflare où elles sont filtrées et sécurisées.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

L’accès direct au port txAdmin via l’IP du serveur est bloqué, ce qui élimine complètement la surface d’attaque initiale. Cela rend txAdmin stable, sécurisé et accessible de manière fiable même si quelqu’un tente de surcharger ou d’attaquer l’interface.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />