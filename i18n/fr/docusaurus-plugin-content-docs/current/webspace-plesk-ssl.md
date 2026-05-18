---
id: webspace-plesk-ssl
title: "Hébergement web : Créer un certificat SSL dans Plesk"
description: "Apprenez à sécuriser votre site web avec un certificat SSL dans Plesk et à activer HTTPS pour des connexions chiffrées."
sidebar_label: Créer un certificat SSL
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

Un certificat SSL chiffre la connexion entre votre site web et ses visiteurs. Une fois HTTPS activé, les navigateurs établissent une connexion sécurisée et affichent une icône de cadenas dans la barre d’adresse. Cela protège les données sensibles, augmente la confiance et empêche les navigateurs de marquer votre site comme non sécurisé.

<InlineVoucher />

## Sécuriser votre domaine principal

Lorsqu’un domaine est créé pour la première fois dans Plesk, il est accessible via HTTP et non chiffré. Dans le panneau Plesk, vous pouvez voir qu’aucun certificat n’est encore attribué. Si vous ouvrez le domaine dans un navigateur à ce stade, il sera généralement marqué comme non sécurisé :

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Pour activer le chiffrement, ouvrez le domaine dans votre panneau Plesk et allez dans **Certificats SSL/TLS**. Le menu correspondant s’ouvrira :

![img](https://screensaver01.zap-hosting.com/index.php/s/8rSr7Jt3DsjDzBY/download)

À partir de là, vous pouvez demander un certificat gratuit Let's Encrypt. Lors de la demande, vous devez fournir une adresse e-mail valide et sélectionner les noms de domaine à sécuriser. Dans la plupart des cas, le domaine racine et le sous-domaine www sont sélectionnés, à condition que l’entrée www existe dans votre configuration DNS :

![img](https://screensaver01.zap-hosting.com/index.php/s/LTFN73ekPjtikwp/preview)

Après avoir confirmé la demande en cliquant sur **Obtenir gratuitement**, Plesk communique avec Let's Encrypt et délivre automatiquement le certificat. Une fois le certificat créé avec succès, HTTPS doit être forcé en activant la redirection permanente de HTTP vers HTTPS dans les paramètres d’hébergement :

![img](https://screensaver01.zap-hosting.com/index.php/s/BN7AMzG6MyMKb38/preview)

Après activation, tous les visiteurs sont automatiquement redirigés vers la version HTTPS chiffrée de votre site. Vous pouvez vérifier l’installation en ouvrant votre domaine avec https dans le navigateur.



## Sécuriser tous les sous-domaines avec un certificat Wildcard

Si plusieurs sous-domaines sont utilisés ou prévus, un certificat wildcard est une solution plus efficace. Il sécurise le domaine principal ainsi que tous les sous-domaines existants et futurs. Pour demander un certificat wildcard, ouvrez à nouveau le menu **Certificats SSL/TLS** :

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Sélectionnez l’option pour renouveler ou demander un certificat Let's Encrypt. Activez l’option pour sécuriser le domaine wildcard :

![img](https://screensaver01.zap-hosting.com/index.php/s/ZMcdJk9wCzifBmq/preview)

Après avoir confirmé la demande, Plesk affichera une boîte d’information bleue contenant un enregistrement DNS TXT à créer :

![img](https://screensaver01.zap-hosting.com/index.php/s/wnbNfKeTMsCdsy9/preview)

Cet enregistrement TXT doit être ajouté à la zone DNS de votre domaine exactement comme indiqué. Il confirme la propriété du domaine et permet à Let's Encrypt de valider la demande. Une entrée DNS ressemblera à l’exemple suivant :

![img](https://screensaver01.zap-hosting.com/index.php/s/tDtDaERR7twzaMr/preview)

:::warning Délai de propagation DNS
La propagation DNS peut prendre jusqu’à 24 heures avant que l’enregistrement TXT soit accessible globalement. Pendant ce temps, la validation peut échouer car certains serveurs DNS renvoient encore des informations obsolètes. Si cela arrive, attendez que l’enregistrement soit complètement propagé puis réessayez la vérification.
:::



Pour vous assurer que l’enregistrement TXT a bien été propagé et est accessible publiquement, vous pouvez le vérifier avec un outil externe de recherche DNS comme le MXToolbox SuperTool :

https://mxtoolbox.com/SuperTool.aspx

Ouvrez le site et sélectionnez l’option **Recherche TXT**. Entrez le nom d’hôte complet fourni par Plesk, généralement au format `_acme-challenge.votredomaine.com`, et lancez la recherche. L’outil interrogera les serveurs DNS publics et affichera les enregistrements TXT visibles actuellement.

Si la valeur de vérification correcte s’affiche exactement comme dans Plesk, l’entrée DNS a été propagée avec succès et Let's Encrypt peut valider la propriété du domaine. Si aucun résultat n’est retourné ou si la valeur diffère, la propagation DNS est peut-être encore en cours. Dans ce cas, patientez et répétez la recherche après un certain temps jusqu’à ce que l’entrée correcte soit visible mondialement.

![img](https://screensaver01.zap-hosting.com/index.php/s/iFP5P8SY6oSXQBW/download)

Une fois l’enregistrement visible, retournez dans Plesk et relancez la validation. Si elle réussit, le certificat wildcard sera délivré et affiché comme protégé. Dorénavant, tout sous-domaine créé sera automatiquement sécurisé.



## Conclusion

Félicitations ! Votre site est maintenant protégé avec un chiffrement SSL réussi. Toutes les données transmises entre votre serveur et les visiteurs sont sécurisées, les navigateurs reconnaissent votre domaine comme fiable, et HTTPS est appliqué automatiquement.

Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous assister ! 🙂

<InlineVoucher />