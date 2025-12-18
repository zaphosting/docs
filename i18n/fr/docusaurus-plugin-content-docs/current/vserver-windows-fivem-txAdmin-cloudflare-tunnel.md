---
id: vserver-windows-fivem-txAdmin-cloudflare-tunnel
title: "VPS : Configuration du Cloudflare Tunnel pour txAdmin"
description: "Découvrez comment configurer un tunnel Cloudflare pour txAdmin pour plus de sécurité → En savoir plus maintenant"
sidebar_label: Cloudflare Tunnel pour txAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Si tu veux renforcer la sécurité en plus de la protection DDoS déjà fournie par ZAP-Hosting, tu peux sécuriser davantage ton instance txAdmin en utilisant un Cloudflare Tunnel. Cette configuration garantit que l’interface web de txAdmin n’est plus exposée via l’adresse IP publique de ton serveur, mais accessible en toute sécurité via ton propre domaine. Toutes les attaques ciblant le port txAdmin sont filtrées par Cloudflare, tandis que tu peux complètement verrouiller le port local sans perdre l’accès.



## Prérequis

Pour utiliser un Cloudflare Tunnel sur Windows, tu as besoin d’un VPS Windows, d’une installation txAdmin fonctionnelle, du port txAdmin et d’un domaine déjà connecté à ton compte Cloudflare. Si ton domaine n’est pas encore connecté à Cloudflare, suis d’abord notre [guide de configuration Cloudflare](domain-cloudflare-setup.md).

Le Cloudflare Tunnel fonctionne en créant une connexion sortante chiffrée de ton serveur vers Cloudflare, donc aucun port public n’a besoin d’être ouvert pour txAdmin.


## Configuration Cloudflare

Avant d’installer cloudflared sur ton VPS Windows, crée et configure d’abord le tunnel directement dans ton tableau de bord Cloudflare.

Connecte-toi à ton compte Cloudflare et va dans la section Zero Trust. Là, tu peux créer un nouveau tunnel qui redirigera ensuite le trafic vers ton interface txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Installation du Cloudflare Tunnel

Cloudflare propose un petit outil appelé cloudflared. L’installation de cloudflared sur Windows est très simple. Commence par télécharger le [programme d’installation Windows](https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi).

![img](https://screensaver01.zap-hosting.com/index.php/s/JFsdnjkcR6LrJAr/preview)

Une fois le fichier téléchargé, lance l’installateur et termine la configuration. Après l’installation, ouvre l’Invite de commandes en mode Administrateur. Dans cette fenêtre, exécute la commande fournie :

```
cloudflared.exe service install eyJhIjoiMj...
```

Après avoir lancé la commande, ton serveur se connectera à Cloudflare via le tunnel. Si la configuration réussit, le statut dans la section Connecteurs passera à **Connecté**, confirmant que le tunnel est actif et fonctionne.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Configuration du Cloudflare Tunnel

Ensuite, configure les paramètres de Routage du trafic. Crée une nouvelle entrée de sous-domaine de ton choix. Dans cet exemple, le sous-domaine `txAdmin` est utilisé, qui servira plus tard à accéder à l’interface txAdmin.

Sélectionne le domaine que tu souhaites utiliser, puis définis le type de service sur **HTTP** et entre **localhost:port** comme URL. Remplace port par le port défini pour ton instance txAdmin. Le port 40500 sera utilisé dans cet exemple.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Recommandation de sécurité
Au lieu d’utiliser le port txAdmin par défaut **40120**, il est recommandé d’utiliser un port différent pour une meilleure sécurité.
:::



## Configuration du Pare-feu Windows

Pour empêcher que le port soit accessible en dehors du tunnel, configure le pare-feu Windows pour que le port correspondant accepte uniquement les connexions depuis localhost. Limite le champ d’adresse distante de la règle à 127.0.0.1. Cela force tout le trafic à provenir du système local et bloque tout accès externe, garantissant que le service derrière cloudflared n’est pas accessible depuis le réseau en dehors du tunnel.

```
netsh advfirewall firewall add rule name="Cloudflared Local Only" dir=in action=allow protocol=TCP localport=40500 remoteip=127.0.0.1
```

Avec cette configuration, toute tentative d’accès depuis l’extérieur de la machine est bloquée, assurant que le service derrière cloudflared n’est pas accessible hors tunnel.



## Conclusion

Une fois le Cloudflare Tunnel actif, ton interface txAdmin devient accessible uniquement via ton propre domaine, tandis que toutes les requêtes passent par Cloudflare où elles sont filtrées et sécurisées.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

L’accès direct au port txAdmin via l’IP du serveur est bloqué, ce qui élimine complètement la surface d’attaque initiale. Cela rend txAdmin stable, sécurisé et accessible de manière fiable même si quelqu’un tente de surcharger ou d’attaquer l’interface.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />