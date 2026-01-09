---
id: domain-teamspeak-redirect
title: "Domaine : Configurer la redirection TeamSpeak 3"
description: "Découvre comment simplifier la connexion à ton serveur TeamSpeak 3 en utilisant des domaines ou sous-domaines personnalisés pour un accès facile → En savoir plus maintenant"
sidebar_label: Redirection TeamSpeak 3
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Note que les modifications des entrées DNS peuvent prendre jusqu’à 24 heures avant d’être actives !
:::

## Introduction

Tu peux rediriger soit ton domaine entier, soit juste un sous-domaine vers ton serveur TeamSpeak 3.  
Comme ça, personne n’a besoin de retenir l’adresse IP compliquée composée de chiffres, et peut simplement se connecter à ton serveur TeamSpeak 3 via le domaine.

:::note
Par défaut, les **nouveaux** serveurs TeamSpeak 3 reçoivent maintenant un alias `.zap.cloud` avec un préfixe aléatoire utilisable pour la connexion.
:::

<InlineVoucher />

## Utiliser la configuration rapide TSDNS

On a mis en place un nouveau système TSDNS pour nos serveurs TeamSpeak 3, qui te permet de configurer un sous-domaine pour ton serveur TeamSpeak 3 en quelques clics !  
Si tu n’as pas de domaine chez nous, passe à la section suivante pour configurer manuellement les enregistrements DNS.

Commence simplement par aller dans la section **Paramètres->TSDNS** sur l’interface web de ton TeamSpeak sur notre site. Là, tu pourras choisir un sous-domaine (préfixe avant le domaine) ainsi que soit notre domaine `zap-ts3.com`, soit un de tes propres domaines que tu as chez nous sur ton compte ZAP-Hosting.

:::info
Pour cette fonction de configuration rapide, tu dois [acheter un domaine parfait directement chez nous](https://zap-hosting.com/en/shop/product/domain/) ou transférer ton propre domaine sur ton compte ZAP-Hosting. Ces domaines apparaîtront dans la section TSDNS une fois configurés. Sinon, tu peux utiliser gratuitement le domaine classique `zap-ts3.com`.
:::

Dans notre exemple, on crée un nouveau sous-domaine avec le domaine `.zap.cloud`, qui nous redirigera vers notre serveur TeamSpeak 3 quand on l’utilise.

![](https://screensaver01.zap-hosting.com/index.php/s/Mi3wK7cY639Rp3x/preview)

:::note
Note que la propagation du domaine peut prendre jusqu’à 3 heures avant de fonctionner.
:::

## Configuration DNS classique

Pour rediriger l’adresse IP, crée soit un sous-domaine qui pointe vers l’adresse IP du serveur TeamSpeak 3, soit redirige le domaine entier sans sous-domaine.  
Cela suffit si le serveur TeamSpeak 3 utilise le port par défaut **9987**.  
Par contre, si le serveur TeamSpeak 3 utilise un port différent, un **enregistrement SRV** supplémentaire sera nécessaire pour rediriger le domaine ou sous-domaine vers le bon port.

### Service SRV

Le nom du service commence toujours par un **underscore**.  
Pour un serveur TeamSpeak 3, le nom du service est toujours **_ts3**, sans exception.

### Protocole SRV

Le protocole spécifie le protocole Internet utilisé pour la connexion. Ici, **UDP** et **TCP** sont disponibles.  
La spécification du protocole commence aussi toujours par un **underscore** et est soit **_udp** soit **_tcp**.  
Pour un serveur TeamSpeak 3, c’est toujours **_udp**, sans exception.

## Redirection du domaine sans sous-domaine

Pour rediriger ton domaine vers un serveur de jeux sans créer de sous-domaine, ouvre d’abord ton domaine dans  
le tableau de bord, puis ouvre la gestion DNS dans le menu à gauche.

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)

Tu verras alors toutes les entrées DNS existantes pour ton domaine.  
Si tu n’as pas encore créé tes propres entrées, tu peux voir toutes les entrées existantes en cliquant  
sur la poubelle rouge à droite.

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

Clique ensuite sur **Nouvelle entrée** pour créer un nouvel enregistrement DNS.  
Comme **Nom**, choisis ici le nom du domaine, par exemple **teamspeak-server.de**, le **type est A** et la **valeur** est l’IP de ton serveur TeamSpeak 3, ici **88.214.57.116**.  
Tu peux laisser le champ **TTL** tel quel.

![](https://screensaver01.zap-hosting.com/index.php/s/cTGTdBFrigs7HDG/preview)

Quand tout est saisi, clique sur **Enregistrer**, l’entrée sera sauvegardée dans les paramètres DNS et sera active sous  
24 heures.

:::info
Il peut toujours falloir jusqu’à 24 heures pour que les nouvelles entrées DNS soient actives. Personne ne peut influencer ça malheureusement.
:::

## Redirection du domaine avec sous-domaine

Si tu veux créer un sous-domaine, par exemple ts.teamspeak-server.de, fais comme dans l’exemple précédent,  
mais pour le **Nom**, ne mets pas le nom du domaine, mais le sous-domaine.  
Ça donne ça :

![](https://screensaver01.zap-hosting.com/index.php/s/ocaqgX2DSdspGQ8/preview)

## Redirection du domaine avec port (SRV)

Si le port standard **9987** n’est pas utilisé, un **enregistrement SRV** supplémentaire doit être créé pour rediriger non seulement le domaine vers l’IP du serveur de jeux, mais aussi vers le bon port.

Tu peux soit créer un **sous-domaine** comme expliqué plus haut, soit rediriger le domaine directement vers le serveur TeamSpeak 3, les deux fonctionnent.

### Redirection sans sous-domaine

Après avoir redirigé ton domaine vers l’IP de ton serveur TeamSpeak 3 comme expliqué plus haut, clique sur **Nouvelle entrée**  
et crée une entrée qui ressemble à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/H3NGmYZHyJsCYnf/preview)

Le champ **Nom** contient le nom du service, ici notre serveur TeamSpeak 3, donc **_ts3**. Il contient aussi le type de protocole, ici **_udp**, ainsi que le **nom de domaine**.  
Le champ **Type** indique le type d’entrée, ici un enregistrement **SRV**.  
Le champ **Valeur** contient le port du jeu et le domaine, ici **0 1234 teamspeak-server.de**, où **1234** est le **port du jeu** et **teamspeak-server.de** le domaine vers lequel la redirection est faite.  
La valeur **0** n’a plus d’importance et reste toujours la même. Les champs **TTL** et **Prio** ne sont pas affectés.

Ensuite, clique sur **Enregistrer**.

:::info
Important : un **point** doit être ajouté à la fin du domaine dans le champ **valeur** !
:::

### Redirection avec sous-domaine

Avec un sous-domaine, c’est quasiment pareil. D’abord, crée un sous-domaine comme expliqué plus haut et redirige-le vers l’IP de ton serveur TeamSpeak 3.  
Puis clique sur **Nouvelle entrée** et crée une entrée avec ce contenu :

![](https://screensaver01.zap-hosting.com/index.php/s/aEkro3z9WBgWf8g/preview)

Le champ **Nom** contient le nom du service, ici notre serveur TeamSpeak 3, donc **_ts3**. Il contient aussi le type de protocole, ici **_udp**, ainsi que le **nom de domaine** avec le **sous-domaine**, ici **ts.teamspeak-server.de**.  
Le champ **Type** indique le type d’entrée, ici un enregistrement **SRV**.  
Le champ **Valeur** contient le port et le domaine avec sous-domaine, ici **0 1234 ts.teamspeak-server.de**, où **1234** est le **port du serveur TeamSpeak 3** et **ts.teamspeak-server.de** le domaine avec sous-domaine vers lequel la redirection est faite.  
La valeur **0** n’a plus d’importance et reste toujours la même. Les champs **TTL** et **Prio** ne sont pas affectés.

<InlineVoucher />