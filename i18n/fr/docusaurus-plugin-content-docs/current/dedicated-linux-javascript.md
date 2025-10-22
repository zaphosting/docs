---
id: dedicated-linux-javascript
title: 'Serveur dédié : Installation de JavaScript'
description: "Découvrez comment installer et configurer Node.js, Deno et Bun sur votre serveur pour une gestion efficace des environnements d’exécution JavaScript → En savoir plus maintenant"
sidebar_label: Installer JavaScript
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ce guide vous explique les étapes pour installer Node.js, Deno et Bun. Ces commandes doivent être exécutées via SSH. Si vous ne savez pas comment vous connecter à votre serveur via SSH, jetez un œil à notre [Accès initial (SSH)](vserver-linux-ssh.md).

<InlineVoucher />

## Préparation

Avant d’installer quoi que ce soit sur un serveur, il est recommandé d’exécuter la commande de mise à jour correspondant à votre système d’exploitation pour garder votre serveur sécurisé.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Installation

Pour commencer, vous devez choisir quel environnement d’exécution JavaScript installer. Il existe plein de ressources en ligne qui décrivent chacun en détail. Mais vous pouvez aussi lire ce guide car il inclut les commandes de base et des exemples de code. On recommande NodeJS car c’est l’un des plus utilisés et un choix très populaire.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Installer Node.js Runtime

Vous pouvez installer Node.js via le gestionnaire de paquets de votre distro Linux ou en utilisant nvm. On recommande apt car c’est généralement plus simple.

<Tabs>
<TabItem value="apt" label="Gestionnaire de paquets" default>

Lancez la commande suivante pour commencer l’installation de Node.js via le gestionnaire de paquets.

```
apt install nodejs -y
```

Pour installer des paquets Node.js pour vos projets, vous aurez aussi besoin d’installer le gestionnaire de paquets npm.

```
apt install npm
```

### Mettre à jour Node.js vers la dernière version

Exécuter `node -v` vous montrera la version installée de Node.js. Ce n’est généralement pas la dernière, donc vous devrez la mettre à jour pour avoir les dernières fonctionnalités. Heureusement, le paquet npm `n` offre un moyen très simple de le faire.

D’abord, installez-le avec `npm install -g n` puis lancez `n [version]`, en remplaçant `[version]` par le numéro de version souhaité, pour installer n’importe quelle version de Node.js.

:::tip
Il est généralement recommandé de garder votre installation sur la dernière version Long Term Support. Pour ça, lancez `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Installer Node.js via nvm vous donne un contrôle plus fin pour gérer différentes versions de Node.js avec leurs propres paquets.

D’abord, assurez-vous que curl est installé sur votre système, puis lancez la commande suivante.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Cela récupérera le script d’installation de nvm depuis GitHub et l’exécutera.

:::note
Si les commandes nvm ne fonctionnent pas après l’installation, lancez `source ~/.bashrc` pour recharger la config bash.
:::

Comme pour la méthode précédente, vous pouvez maintenant installer une version de Node.js avec la commande `nvm install v[version]`. Pour voir toutes les versions téléchargeables, lancez `nvm list-remote`. Pour voir les versions installées, lancez `nvm list`.

:::tip
Installer la version Long Term Support se fait avec `nvm install --lts`
:::

</TabItem>
</Tabs>

### Utiliser Node.js & npm

Npm est le gestionnaire officiel de paquets de Node.js. Vous l’utiliserez pour installer des paquets depuis internet.

:::note
Vous pouvez trouver tous les paquets npm sur leur [site web](https://www.npmjs.com/).
:::

### Créer un nouveau projet

Chaque fois que vous voulez démarrer un nouveau projet Node.js, créez un nouveau dossier (`mkdir [nom-du-projet]`) ou `cd` dans un dossier vide et lancez la commande `npm init` pour commencer la configuration. Cela vous demandera quelques infos de base pour créer un fichier `package.json`. Ce fichier sera la "config" pour exécuter Node.js.

Après avoir initialisé le projet, créez un fichier `index.js` et écrivez du code dedans. Par exemple, on va créer un serveur http simple sur le port 80 par défaut qui répond avec un message test quand on y accède via localhost. Voici le code.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Vous pouvez maintenant lancer ce code avec la commande `node .` et vérifier le résultat en allant sur `localhost:80` dans votre navigateur.

:::tip
Installer des paquets externes depuis npm se fait avec `npm install [nom-du-paquet]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Installer Deno Runtime

Installer Deno est aussi simple que de taper `curl -fsSL https://deno.land/install.sh | sh` dans votre console.

:::tip
Pour vérifier la version installée, lancez `deno --version`.
:::

### Mettre à jour Deno vers la dernière version

Mettre à jour Deno se fait simplement avec `deno upgrade`.

### Utiliser Deno

Pour commencer avec Deno, créez un fichier `index.ts` et écrivez du code dedans. Par exemple, on crée un serveur http simple sur le port 80 par défaut qui répond avec un message test quand on y accède via localhost. Voici le code.

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Vous pouvez lancer ce code avec la commande `deno run --allow-net index.ts` et vérifier le résultat en allant sur `localhost:80` dans votre navigateur.

:::info
Deno a été créé pour être plus sécurisé et nécessite donc certaines permissions comme `--allow-net` pour accéder à certains modules.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Installer Bun Runtime

Bun propose 2 méthodes officielles d’installation, soit via curl soit via npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Lancer `curl -fsSL https://bun.sh/install | bash` installera Bun sur votre serveur.

:::tip
Pour installer d’autres versions de Bun, lancez `curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

Si vous avez déjà npm installé, vous pouvez lancer `npm install -g bun`.

</TabItem>
</Tabs>

### Utiliser Bun

Bun a été conçu pour être plus rapide que certains autres moteurs JavaScript, tout en ayant une configuration similaire à Node.js. Pour lancer Bun, ouvrez un dossier vide et lancez `bun init`.

:::note
Selon le langage choisi (JS ou TS), Bun créera un fichier de config (jsconfig.json ou tsconfig.json).
:::

Pour commencer avec Bun, créez un fichier `index.ts` et écrivez du code dedans. Par exemple, on crée un serveur http simple sur le port 80 par défaut qui répond avec un message test quand on y accède via localhost. Voici le code.

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Vous pouvez lancer ce code avec la commande `bun index.ts` et vérifier le résultat en allant sur `localhost:80` dans votre navigateur.

</TabItem>
</Tabs>

En suivant ce guide, vous aurez installé avec succès l’un des environnements d’exécution JavaScript populaires sur votre serveur Linux.

<InlineVoucher />