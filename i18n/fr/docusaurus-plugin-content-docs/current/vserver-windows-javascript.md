---
id: vserver-windows-javascript
title: 'VPS : Installation de JavaScript'
description: "Découvrez comment installer Node.js, Deno et Bun sur Windows pour configurer efficacement votre environnement d'exécution JavaScript → En savoir plus maintenant"
sidebar_label: Installer JavaScript
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ce guide vous explique les étapes pour installer Node.js, Deno et Bun sur Windows. Les étapes ci-dessous doivent être exécutées via RDP. Si vous ne savez pas comment vous connecter à votre serveur via RDP, jetez un œil à notre [guide d’Accès Initial (RDP)](vserver-windows-userdp.md).
<InlineVoucher />

## Installation

Pour commencer, vous devez choisir quel runtime JavaScript installer. Il existe plein de ressources en ligne qui expliquent chacun en détail. Mais vous pouvez aussi lire ce guide, car il inclut les commandes de base et des exemples de code. On vous recommande Node.js, car c’est l’un des plus utilisés et un choix très populaire.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Installer le runtime Node.js

### Étape 1 : Télécharger les fichiers
Ouvrez le navigateur de votre choix (je vais utiliser Chrome pour ce guide) et rendez-vous sur [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

Cliquez maintenant sur le bouton `Download Node.js (LTS)` et attendez que le téléchargement se termine.

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
Il est généralement recommandé de garder votre installation sur la dernière version Long Term Support (LTS).
:::

### Étape 2 : Installer Node.js
Lancez l’installateur en cliquant dessus. Vous serez invité à configurer quelques options. Sur la page `Welcome`, cliquez sur `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Lisez et acceptez (en cochant la case) le contrat de licence Node.js, puis cliquez sur `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

Ensuite, choisissez l’emplacement d’installation de Node.js.

:::note
On recommande d’utiliser l’emplacement d’installation par défaut.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

À la page suivante, vous pouvez choisir de ne pas installer certains packages de base de Node.js. Pour une installation normale, ce qui est recommandé, cliquez simplement sur `Next`. Vous aurez aussi la possibilité d’installer Chocolatey, mais ce n’est pas nécessaire.

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### Étape 3 : Finaliser l’installation
Cliquez sur `Install` et patientez pendant la configuration. Ça peut prendre un peu de temps. :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

Une fois terminé, cliquez sur `Finish` et commencez à utiliser Node.js sur votre serveur.

### Mettre à jour Node.js vers la dernière version

La commande `node -v` affiche la version installée de Node.js. De temps en temps, vérifiez que vous utilisez la dernière version LTS. Pour mettre à jour Node.js, refaites la procédure décrite dans la [section d’installation](vserver-windows-javascript.md#installing-nodejs-runtime).

### Utiliser Node.js & npm

npm est le gestionnaire officiel de paquets de Node.js. Vous l’utiliserez pour installer des paquets depuis internet.

:::tip
Vous pouvez trouver tous les paquets npm sur leur [site web](https://www.npmjs.com/).
:::

### Créer un nouveau projet

Chaque fois que vous voulez démarrer un nouveau projet Node.js, créez un nouveau dossier avec l’Explorateur de fichiers, ouvrez l’Invite de commandes ou PowerShell dedans et lancez la commande `npm init` pour commencer la configuration. On vous demandera quelques infos basiques pour créer un fichier `package.json`. Ce fichier sera la "config" pour exécuter Node.js.

:::tip
Sous Windows, cliquez une fois sur le chemin actuel dans l’Explorateur de fichiers, tapez `cmd` puis appuyez sur `Entrée` pour ouvrir l’Invite de commandes dans ce dossier, c’est plus simple.
:::

Après avoir initialisé le projet, créez un fichier `index.js` et écrivez du code dedans. Par exemple, on va créer un serveur http simple sur le port 80 par défaut qui répond avec un message test quand on y accède via localhost. Voici le code.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Lancez ce code avec la commande `node .` et vérifiez le résultat en allant sur `localhost:80` dans votre navigateur.

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
Pour installer des paquets externes depuis npm, utilisez la commande `npm install [nom-du-paquet]`.
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Installer le runtime Deno

Installer Deno, c’est aussi simple que de taper `irm https://deno.land/install.ps1 | iex` dans une instance PowerShell. Utilisez la barre de recherche Windows et cherchez `Powershell`. Ouvrez une invite en mode administrateur et lancez la commande ci-dessus, en suivant les instructions éventuelles.

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
Pour vérifier la version installée, lancez `deno --version`.
:::

### Mettre à jour Deno vers la dernière version

Pour mettre à jour Deno, il suffit de lancer `deno upgrade`.

### Utiliser Deno

Pour commencer avec Deno, créez un fichier `index.ts` et écrivez du code dedans. Par exemple, on crée un serveur http simple sur le port 80 par défaut qui répond avec un message test quand on y accède via localhost. Voici le code.

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Lancez ce code avec la commande `deno run --allow-net index.ts` et vérifiez le résultat en allant sur `localhost:80` dans votre navigateur.

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Deno a été créé pour être plus sécurisé et nécessite donc certaines permissions comme `--allow-net` pour accéder à certains modules.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Installer le runtime Bun

Bun propose aussi un installateur simple en une commande, mais offre aussi la possibilité d’installer via npm si vous avez déjà utilisé Node.js.

<Tabs>
<TabItem value="command" label="Commande" default>

Lancez `irm bun.sh/install.ps1|iex` dans PowerShell pour installer Bun sur votre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
Le serveur peut manquer certains fichiers requis. Bun vous informera et vous donnera des liens pour les télécharger lors de l’exécution de l’installateur.

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

Si vous avez déjà npm, lancez `npm install -g bun` pour installer Bun.

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Utiliser Bun

Bun a été conçu pour être plus rapide que certains autres moteurs JavaScript, tout en ayant une configuration similaire à Node.js. Pour lancer Bun, ouvrez un dossier vide et lancez `bun init` dans l’Invite de commandes.

:::note
Selon la langue choisie (JS ou TS), Bun créera un fichier de config (jsconfig.json ou tsconfig.json).
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

Lancez ce code avec la commande `bun index.ts` et vérifiez le résultat en allant sur `localhost:80` dans votre navigateur.

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>



## Conclusion

Félicitations, vous avez installé et configuré JavaScript sur votre VPS avec succès ! Si vous avez d’autres questions ou problèmes, contactez notre équipe support, disponible tous les jours pour vous aider !

<InlineVoucher />