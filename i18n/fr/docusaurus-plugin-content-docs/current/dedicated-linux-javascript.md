---
id: dedicated-linux-javascript
title: "Configurer un environnement JavaScript sur un serveur Linux - Lance tes applis web modernes"
description: "Découvre comment installer et configurer Node.js, Deno et Bun sur ton serveur pour gérer efficacement l’exécution JavaScript → En savoir plus maintenant"
sidebar_label: Installer JavaScript
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ce guide te montre comment installer Node.js, Deno et Bun. Ces commandes doivent être lancées via SSH, si tu ne sais pas comment te connecter à ton serveur via SSH, jette un œil à notre [Accès initial (SSH)](vserver-linux-ssh.md).

## Préparation

Avant d’installer quoi que ce soit sur un serveur, il est recommandé de lancer la commande de mise à jour correspondant à ton système d’exploitation pour garder ton serveur sécurisé.

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

Pour commencer, tu dois choisir quel runtime JavaScript installer. Il existe plein de ressources en ligne qui détaillent chacun d’eux. Mais tu peux aussi suivre ce guide qui inclut les commandes de base et des exemples de code. On te recommande NodeJS, c’est l’un des plus utilisés et super populaire.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Installer Node.js Runtime

Tu peux installer Node.js via le gestionnaire de paquets de ta distro Linux ou avec nvm. On recommande apt, c’est souvent plus simple.

<Tabs>
<TabItem value="apt" label="Gestionnaire de paquets" default>

Lance cette commande pour installer Node.js via le gestionnaire de paquets.

```
apt install nodejs -y
```

Pour installer les paquets Node.js pour tes projets, tu devras aussi installer npm, le gestionnaire de paquets.

```
apt install npm
```

### Mettre à jour Node.js vers la dernière version

La commande `node -v` te montre la version installée de Node.js. Ce n’est souvent pas la dernière, donc il faudra la mettre à jour pour profiter des nouveautés. Heureusement, le paquet npm `n` facilite ça.

D’abord, installe-le avec `npm install -g n` puis lance `n [version]`, en remplaçant `[version]` par la version souhaitée, pour installer n’importe quelle version de Node.js.

:::tip
On recommande généralement de rester sur la dernière version Long Term Support. Pour ça, lance `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Installer Node.js via nvm te permet de gérer plusieurs versions de Node.js avec leurs propres paquets.

Assure-toi d’avoir curl installé, puis lance cette commande.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Ça va récupérer et lancer le script d’installation de nvm depuis GitHub.

:::note
Si les commandes nvm ne fonctionnent pas après l’installation, lance `source ~/.bashrc` pour recharger la config bash.
:::

Comme pour la méthode précédente, tu peux maintenant installer une version avec `nvm install v[version]`. Pour voir toutes les versions dispo, lance `nvm list-remote`. Pour voir celles installées, lance `nvm list`.

:::tip
Pour installer la version Long Term Support, lance `nvm install --lts`
:::

</TabItem>
</Tabs>

### Lancer Node.js & npm

Npm est le gestionnaire officiel de paquets Node.js. Tu l’utiliseras pour installer des paquets depuis internet.

:::note
Tu peux trouver tous les paquets npm sur leur [site officiel](https://www.npmjs.com/).
:::

### Créer un nouveau projet

Chaque fois que tu veux démarrer un projet Node.js, crée un nouveau dossier (`mkdir [nom-du-projet]`) ou va dans un dossier vide avec `cd` puis lance `npm init` pour commencer la config. Ça te posera quelques questions pour créer un fichier `package.json`, qui est le fichier de config pour Node.js.

Après avoir initialisé ton projet, crée un fichier `index.js` et écris ton code dedans. Par exemple, on va créer un serveur http simple sur le port 80 qui répond avec un message test quand tu accèdes à localhost. Voilà le code.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Tu peux lancer ce code avec la commande `node .` et vérifier en allant sur `localhost:80` dans ton navigateur.

:::tip
Pour installer des paquets externes depuis npm, utilise `npm install [nom-du-paquet]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Installer Deno Runtime

Installer Deno, c’est aussi simple que de lancer `curl -fsSL https://deno.land/install.sh | sh` dans ta console.

:::tip
Pour vérifier la version installée, lance `deno --version`.
:::

### Mettre à jour Deno vers la dernière version

Pour mettre à jour Deno, lance simplement `deno upgrade`.

### Lancer Deno

Pour commencer avec Deno, crée un fichier `index.ts` et écris du code dedans. Par exemple, un serveur http simple sur le port 80 qui répond avec un message test quand tu accèdes à localhost. Voilà le code.

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Lance ce code avec `deno run --allow-net index.ts` et vérifie en allant sur `localhost:80` dans ton navigateur.

:::info
Deno a été conçu pour être plus sécurisé, il demande donc certaines permissions comme `--allow-net` pour accéder à certains modules.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Installer Bun Runtime

Bun propose 2 façons officielles d’installation, via curl ou npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Lance `curl -fsSL https://bun.sh/install | bash` pour installer Bun sur ton serveur.

:::tip
Pour installer d’autres versions de Bun, lance `curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

Si tu as déjà npm, lance `npm install -g bun`.

</TabItem>
</Tabs>

### Lancer Bun

Bun a été conçu pour être plus rapide que certains autres moteurs JavaScript, avec une config proche de Node.js. Pour lancer Bun, ouvre un dossier vide et lance `bun init`.

:::note
Selon le langage choisi (JS ou TS), Bun crée un fichier de config (jsconfig.json ou tsconfig.json).
:::

Pour commencer avec Bun, crée un fichier `index.ts` et écris du code dedans. Par exemple, un serveur http simple sur le port 80 qui répond avec un message test quand tu accèdes à localhost. Voilà le code.

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Lance ce code avec `bun index.ts` et vérifie en allant sur `localhost:80` dans ton navigateur.

</TabItem>
</Tabs>

En suivant ce guide, tu auras installé avec succès l’un des runtimes JavaScript populaires sur ton serveur Linux.