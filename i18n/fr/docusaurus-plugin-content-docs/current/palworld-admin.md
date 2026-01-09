---
id: palworld-admin
title: "Palworld : Configuration Admin"
description: "Découvrez comment sécuriser votre serveur Palworld avec un mot de passe admin et gérer efficacement les joueurs de confiance → En savoir plus maintenant"
sidebar_label: Configuration Admin
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction
Dans ce guide, on va voir comment configurer votre serveur avec un mot de passe admin et vous ajouter comme admin en jeu. Ce mot de passe peut être partagé avec des joueurs de confiance pour leur donner accès à une série de commandes admin. Vous pouvez en apprendre plus sur ces commandes serveur via notre [guide des commandes serveur](palworld-server-commands.md).
<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ramgExKNxeLeDdL/preview" title="Configurez votre serveur Palworld en seulement une MINUTE !" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus fun et immersive !"/>

<InlineVoucher />

## Configurer votre mot de passe Admin

D’abord, il faut accéder aux paramètres de configuration. Il y a plusieurs façons de faire, on vous les liste toutes ci-dessous avec les instructions pour définir le mot de passe. On recommande d’utiliser l’option **Webinterface** car c’est la plus simple. Une fois votre mot de passe admin défini, vous pouvez passer à la section suivante.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

La méthode la plus simple, c’est d’aller dans la section **Settings** sur le webinterface de votre serveur de jeux.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Dans la zone **Settings**, cherchez l’option **Game server password**. Dans ce champ, créez le mot de passe que vous voulez utiliser et saisissez-le.

![](https://screensaver01.zap-hosting.com/index.php/s/aQYQDYMP34NnNXr/preview)

:::info
Une fois que vous avez choisi un mot de passe, remontez en haut et n’oubliez pas de cliquer sur le bouton vert **Save** pour valider.

![](https://screensaver01.zap-hosting.com/index.php/s/YG5MZ6Jt8SdFy4A/preview)
:::

</TabItem>

<TabItem value="configs" label="Via fichier de config WI">

#### Via fichier de config WI

:::note
Le serveur doit être arrêté avant de modifier la config, sinon les changements seront annulés au redémarrage.
:::

Sinon, pour ceux qui préfèrent éditer directement le fichier brut, vous pouvez y accéder via la section **Configs** sur le webinterface de votre serveur de jeux et cliquer sur le bouton bleu d’édition, comme ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Cela ouvrira un éditeur de texte directement sur le site pour que vous puissiez modifier le fichier. Trouvez l’option **AdminPassword** dans le fichier (utilisez `CTRL+F` pour chercher) et remplacez-la par le mot de passe admin que vous voulez définir. Enfin, sauvegardez le fichier puis démarrez votre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/gpBjxxmdsWKD4t2/preview)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Le serveur doit être arrêté avant de modifier la config, sinon les changements seront annulés au redémarrage.
:::

La dernière méthode pour accéder au fichier brut, c’est via FTP. Si vous ne connaissez pas FTP, on vous conseille de jeter un œil à notre guide [Accès via FTP](gameserver-ftpaccess.md). Cela dit, cette méthode est plus longue et si vous voulez juste modifier le contenu du fichier, on recommande d’utiliser la section **Configs** sur le webinterface de votre serveur de jeux comme expliqué plus haut.

</TabItem>
</Tabs>

## Se définir comme admin

Une fois votre mot de passe admin configuré, il faut vous ajouter comme admin. Lancez Palworld et connectez-vous à votre serveur. Si vous avez besoin d’aide, regardez notre guide [Connexion au serveur](palworld-connect.md).

En jeu, ouvrez le chat avec `Entrée`. Ensuite, tapez la commande suivante en remplaçant `[password]` par le mot de passe admin que vous avez défini :

```
/AdminPassword [password]
```

![](https://screensaver01.zap-hosting.com/index.php/s/75D5ejaWNM6oYNX/preview)

Vous devriez recevoir un message de succès dans le chat si c’est bon. Si vous avez une erreur, vérifiez bien que le mot de passe admin que vous avez saisi est correct et correspond à celui que vous avez défini à l’étape précédente.

<InlineVoucher />