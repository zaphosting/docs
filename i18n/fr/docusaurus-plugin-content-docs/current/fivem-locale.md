---
id: fivem-locale
title: "FiveM : Changer la langue / l’emplacement (drapeau)"
description: "Découvre comment personnaliser la langue et le drapeau de ton serveur FiveM pour une expérience joueur unique → En savoir plus maintenant"
sidebar_label: Langue / emplacement (drapeau)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs FiveM peuvent s’afficher dans différentes langues. Cela concerne à la fois l’affichage du drapeau du serveur dans le navigateur de serveurs ainsi que la langue utilisée activement sur le serveur. La langue peut être personnalisée si besoin. Tu as donc la possibilité de choisir ta langue et le drapeau de ton pays pour ton serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/FJZc7pJmppG28mX/preview)

<InlineVoucher />

## Configuration

La configuration du drapeau et de la langue du serveur se fait via l’option Locales. La configuration des locales se fait via la config du serveur. Cela est défini par la valeur de la commande **sets locale**. Par défaut, la langue anglaise et l’Antarctique comme emplacement (drapeau) sont affichés.

### Ouvrir le fichier de configuration du serveur

Le fichier de configuration du serveur `server.cfg` est accessible dans l’interface txAdmin sous `CFG Editor`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/qDsN5ggCjaaJLS5/preview)



### Trouver le code locale/langue pour ta langue

La définition de la langue/affichage se fait via les locales (codes langue/codes pays) basés sur les standards ISO 639-1/ISO 3166-1. On a résumé une petite liste des pays/langues les plus pertinents ci-dessous. La liste complète est bien sûr beaucoup plus grande :

| Pays           | Langue     | Locale |
| -------------- | ---------- | ------ |
| Allemagne      | Allemand   | de-DE  |
| USA            | Anglais    | en-US  |
| Canada         | Anglais    | en-CA  |
| Australie      | Anglais    | en-AU  |
| Royaume-Uni    | Anglais    | en-GB  |
| Finlande       | Finnois    | fi-FI  |
| France         | Français   | fr-FR  |
| Pays-Bas       | Néerlandais| nl-NL  |
| Portugal       | Portugais  | pt-PT  |
| Brésil         | Portugais  | pt-BR  |
| Espagne        | Espagnol   | es-ES  |
| Singapour      | Anglais    | en-SG  |

:::caution 
L’affichage du drapeau du serveur est généralement supporté pour tous les pays disponibles. Cependant, toutes les ressources ne contiennent pas toutes les langues. Assure-toi donc que ton pays/ta langue est bien supporté(e) à l’avance !
:::



### Modifier le contenu du fichier de configuration du serveur

Une fois le fichier de config ouvert et que tu as récupéré le code locale/langue, la configuration peut être faite. D’abord, vérifie si la commande **sets locale** existe déjà. Sinon, l’entrée ressemble à ça :

```
# Un identifiant locale valide pour la langue principale de ton serveur.
# Par exemple "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "root-AQ" 
# merci de REMPLACER root-AQ sur la ligne CI-DESSUS par une vraie langue ! :)
```

La valeur de la commande **sets locale** est par défaut **root-AQ**. Il faut maintenant la modifier. Par exemple, si tu veux utiliser le drapeau des USA et l’anglais comme langue, tu mettras **en-US** comme valeur. Sauvegarde ta modification.


## Conclusion

La dernière étape est de redémarrer le serveur pour que le changement soit pris en compte. Ensuite, tu peux recharger la liste des serveurs dans ton client FiveM et tu devrais voir la modification que tu viens de faire. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />