---
id: hytale-disable-world-fall-damage
title: "Hytale : Désactiver les dégâts de chute dans le monde"
description: "Découvrez comment désactiver les dégâts de chute sur votre serveur Hytale → En savoir plus maintenant"
sidebar_label: Désactiver les dégâts de chute
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Sur un serveur Hytale, la gravité et les dégâts de chute font partie des mécaniques de gameplay du monde. Quand les dégâts de chute sont activés, les joueurs subissent des dégâts en tombant de haut ; quand ils sont désactivés, les joueurs peuvent tomber librement sans prendre de dégâts. Désactiver les dégâts de chute peut être utile pour les serveurs créatifs, les projets de construction, les environnements de test, ou tout scénario où les dégâts de chute ne doivent pas impacter l’expérience des joueurs.

<InlineVoucher />



## Configuration

Les dégâts de chute sont contrôlés individuellement pour chaque monde via le fichier de configuration du monde. Chaque monde dans l’univers du serveur possède son propre `config.json`, et dans ce fichier, un paramètre détermine si les dégâts de chute sont appliqués.

Pour désactiver les dégâts de chute, ouvrez le `config.json` du monde situé dans le dossier correspondant sous `universe/worlds/<nom_du_monde>/config.json`. Trouvez le paramètre qui contrôle les dégâts de chute, généralement représenté par un booléen comme `IsFallDamageEnabled`, et mettez-le à `false` :

```
{
  "IsFallDamageEnabled": false
}
```

Quand cette valeur est à `false`, les joueurs ne subiront plus de dégâts en tombant. Si les dégâts de chute doivent rester activés, la valeur doit être `true` :

```
{
  "IsFallDamageEnabled": true
}
```

Après avoir modifié le fichier, sauvegardez les changements et **redémarrez le serveur**.  
Les modifications de configuration ne sont prises en compte que lors du rechargement du monde par le serveur, donc un redémarrage est nécessaire pour que le nouveau paramètre soit effectif.



## Conclusion

En configurant le flag des dégâts de chute dans le fichier de configuration du monde, vous contrôlez totalement si les joueurs subissent des dégâts en tombant. Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous accompagner ! 🙂

<InlineVoucher />