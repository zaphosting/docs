---
id: scp-colored-servername
title: "SCP Secret Laboratory : Nom de serveur coloré"
description: "Apprends à personnaliser le nom de ton serveur avec du texte coloré pour une meilleure visibilité et du style → Découvre-le maintenant"
sidebar_label: Nom de serveur coloré
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Pour afficher ton serveur dans la liste publique, il est nécessaire de renseigner un ID Pastebin. Tu peux consulter notre guide [ID Pastebin](scp-pastebin.md).

Le serveur doit être éteint pour que les modifications prennent effet.
:::

<InlineVoucher />

Ouvre les paramètres de ton serveur et vérifie si le champ 'Nom du serveur SCP' est vide.

![](https://screensaver01.zap-hosting.com/index.php/s/Y9BXkJnBGXy3jWP/preview)

Quand tu es sûr qu’il n’y a rien d’entré, va dans l’onglet 'Configs', qui se trouve un menu en dessous des paramètres.

Ouvre maintenant le fichier config_gameplay.txt en cliquant sur le bouton bleu.

![](https://screensaver01.zap-hosting.com/index.php/s/FAm8KQfAonpTWp2/preview)

Notre éditeur de config est ouvert, tu peux modifier le nom de ton serveur avec "server_name" en utilisant du [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) pour appliquer plusieurs couleurs différentes.

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

Dans cet exemple, je veux que "Green Text", "Blue Text" et "Red Text" s’affichent dans la couleur correspondante.

Pour ça, il faut utiliser la balise `<color="COLOR">Ton Texte</color>`. Tu peux voir toutes les couleurs dispo [ici](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html). Tu peux aussi modifier d’autres attributs, comme la taille.
:::info
Important : les guillemets " " sont obligatoires autour de la couleur dans la balise, comme dans l’exemple ci-dessus.
:::

Quand tu as fini ta personnalisation, sauvegarde.

:::info
Démarre ton serveur, et ton nom de serveur sera maintenant coloré.
:::

<InlineVoucher />