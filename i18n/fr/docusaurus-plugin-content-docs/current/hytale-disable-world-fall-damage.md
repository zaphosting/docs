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

Sur un serveur Hytale, la gravité et les dégâts de chute font partie des mécaniques de gameplay du monde. Quand les dégâts de chute sont activés, les joueurs subissent des dégâts en tombant de haut ; quand ils sont désactivés, les joueurs peuvent tomber librement sans subir de dégâts. Désactiver les dégâts de chute peut être utile pour les serveurs créatifs, les projets de construction, les environnements de test, ou tout scénario où les dégâts de chute ne doivent pas impacter l’expérience des joueurs.

<InlineVoucher />



## Configuration

Les dégâts de chute sont contrôlés individuellement pour chaque monde via le fichier de configuration du monde. Chaque monde dans l’univers du serveur possède son propre `config.json`, et dans ce fichier une option détermine si les dégâts de chute sont appliqués.

Pour désactiver les dégâts de chute, ouvrez le `config.json` du monde situé dans le dossier correspondant sous `universe/worlds/<nom_du_monde>/config.json`. Trouvez l’option qui contrôle les dégâts de chute, généralement un booléen nommé `IsFallDamageEnabled`, et mettez-la à `false` :

```
{
  "IsFallDamageEnabled": false
}
```

Quand cette valeur est à `false`, les joueurs ne subiront plus de dégâts en tombant. Si vous souhaitez que les dégâts de chute restent activés, la valeur doit être `true` :

```
{
  "IsFallDamageEnabled": true
}
```

Après avoir modifié le fichier, enregistrez les changements et **redémarrez le serveur**.  
Les modifications de configuration ne sont prises en compte qu’au rechargement du monde, donc un redémarrage est nécessaire pour appliquer le nouveau paramètre.



## Conclusion

En configurant le flag des dégâts de chute dans le fichier de configuration du monde, vous contrôlez totalement si les joueurs subissent des dégâts en tombant. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous assister ! 🙂

<InlineVoucher />