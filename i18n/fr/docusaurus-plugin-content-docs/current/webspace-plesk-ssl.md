---
id: webspace-plesk-ssl
title: "Hébergement web : Créer un certificat SSL"
description: "Découvre comment sécuriser ton site avec un chiffrement SSL et activer HTTPS pour une navigation plus sûre → En savoir plus maintenant"
sidebar_label: Créer un certificat SSL
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Chiffrer ton site avec SSL

:::info
On part du principe que le domaine pointe déjà vers l’adresse IP de l’hébergement web.
:::

Quand un domaine est créé dans l’hébergement web, il est toujours non chiffré au départ. Ça se voit dans le panneau Plesk :

![](https://screensaver01.zap-hosting.com/index.php/s/kkJ67Pd733pt95i/preview)

Et la notification dans le navigateur quand tu ouvres le domaine :

![](https://screensaver01.zap-hosting.com/index.php/s/5iwXSgEb4LrY3xf/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/mpmK8TAjAsgY3FW/preview)

Avec un certificat SSL, un domaine peut être protégé/chiffré comme il faut.

<InlineVoucher />

## Création du certificat

Étape 1️⃣ : Double-clique sur "Certificat SSL/TLS" pour ouvrir ce menu :

![](https://screensaver01.zap-hosting.com/index.php/s/g5sr6WC4eawqzoF/preview)

Tu peux demander un certificat Let's Encrypt gratuit.

Étape 2️⃣ : Renseigne/complète les infos demandées. Pour que le certificat soit demandé, il faut fournir ces détails.

Une adresse mail doit être indiquée et tu dois cocher pour quoi le certificat doit être valide. En général, chaque domaine a aussi le sous-domaine "www" actif, donc il est aussi sélectionné s’il est bien présent dans le DNS du domaine.

![](https://screensaver01.zap-hosting.com/index.php/s/Mwf3CEWsYRwprS3/preview)

Le certificat est ensuite demandé en cliquant sur "Obtenir gratuitement".

Étape 3️⃣ : Le certificat est maintenant créé, tu peux le voir en haut à droite. En plus, il faut activer la redirection automatique de HTTP vers HTTPS, sinon le chiffrement ne peut pas être établi :

![](https://screensaver01.zap-hosting.com/index.php/s/YBdGQqmtNeWKdxA/preview)

Une fois fait, la redirection est active. Peu importe si tu ouvres la page en http ou https directement dans le navigateur, tu seras toujours redirigé vers https.

Étape 4️⃣ : Tu peux maintenant vérifier dans le navigateur si le certificat est reconnu :

Le cadenas doit être présent :

![](https://screensaver01.zap-hosting.com/index.php/s/DkZoqg9XGgR67EK/preview)

Les infos du certificat, accessibles en cliquant sur le cadenas, doivent aussi afficher le domaine :

![](https://screensaver01.zap-hosting.com/index.php/s/p5H6RZ25HksHsow/preview)

Le site est maintenant bien protégé/chiffré.

## Certificats pour les sous-domaines

Tu peux théoriquement suivre les mêmes étapes pour un sous-domaine. Mais il y a une méthode plus simple pour chiffrer tous les sous-domaines en même temps, qu’ils existent déjà ou qu’ils soient nouveaux. On utilise un "certificat wildcard". Ça demande une entrée TXT spéciale dans le DNS du domaine. Une fois en place, il peut délivrer un certificat SSL pour tous les sous-domaines.

Étape 1️⃣ : Rouvre le menu certificat SSL/TLS.

![](https://screensaver01.zap-hosting.com/index.php/s/X4kFeMomqmz3nGp/preview)

Clique ensuite sur "Renouveler le certificat" en haut à gauche.  
La fenêtre de demande Let's Encrypt s’ouvre :

![](https://screensaver01.zap-hosting.com/index.php/s/eCcFtaJHxW3XWgF/preview)

Sélectionne "Sécuriser le domaine wildcard" :

![](https://screensaver01.zap-hosting.com/index.php/s/5STxWaKf3JWGfZe/preview)

Les sous-domaines "www" et "webmail" sont ajoutés automatiquement.  
Clique à nouveau sur "Obtenir gratuitement".

Étape 2️⃣ : Une boîte bleue apparaît avec des infos importantes :

![](https://screensaver01.zap-hosting.com/index.php/s/JHag4cd85Lq6gwx/preview)

Un nom de domaine et une valeur sont indiqués. Ils doivent être présents en permanence comme entrée TXT dans le DNS du domaine, c’est la seule façon pour Let's Encrypt de vérifier que le domaine est authentique.

Une entrée DNS doit ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/qPCeWj5dJRFfYFB/preview)

:::info
Une entrée DNS peut mettre jusqu’à 24h pour être accessible partout dans le monde.
:::

Pour vérifier que l’entrée TXT est active, tu peux utiliser le "TXT Lookup SuperTool" de mxtoolbox : https://mxtoolbox.com/SuperTool.aspx :

![](https://screensaver01.zap-hosting.com/index.php/s/CPSSWeQRpTDsagY/preview)

Si l’entrée apparaît déjà, tu peux confirmer dans la boîte bleue de Plesk en cliquant sur "Recharger". Le système vérifie la présence de l’entrée DNS, et si c’est bon, après quelques secondes "protégé" s’affiche pour "Certificat SSL/TLS" aka "Certificat Wildcard" :

![](https://screensaver01.zap-hosting.com/index.php/s/AwWiJboz3k6iea8/preview)

Si un sous-domaine est créé maintenant, il est déjà protégé :

![](https://screensaver01.zap-hosting.com/index.php/s/XLHzsgkeLmwJ55m/preview)

Tout le transfert de données est maintenant chiffré, c’est fait.

<InlineVoucher />