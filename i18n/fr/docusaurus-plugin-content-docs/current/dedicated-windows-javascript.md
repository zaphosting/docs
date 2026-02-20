---
id: dedicated-windows-javascript
title: "Configurer l’environnement d’exécution JavaScript sur un serveur Windows - Active l’exécution moderne d’applications web"
description: "Découvrez comment installer et configurer Node.js, Deno et Bun sur Windows pour exécuter JavaScript efficacement → En savoir plus maintenant"
sidebar_label: Installer JavaScript
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ce guide te montre comment installer Node.js, Deno et Bun sur Windows. Les étapes ci-dessous doivent être réalisées via RDP. Si tu ne sais pas comment te connecter à ton serveur via RDP, jette un œil à notre [guide d’accès initial (RDP)](vserver-windows-userdp.md).

## Installation

Pour commencer, tu dois choisir quel runtime JavaScript installer. Il existe plein de ressources en ligne qui détaillent chacun d’eux. Mais tu peux aussi lire ce guide, car il inclut les commandes de base et des exemples de code. On te recommande Node.js, car c’est l’un des plus utilisés et un choix très populaire.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Installer Node.js

### Étape 1 : Télécharger les fichiers  
Ouvre ton navigateur préféré (je vais utiliser Chrome pour ce guide) et rends-toi sur [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

Clique maintenant sur le bouton `Download Node.js (LTS)` et attends la fin du téléchargement.

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip  
Il est généralement recommandé de garder ton installation sur la dernière version Long Term Support (LTS).  
:::

### Étape 2 : Installer Node.js  
Lance l’installateur en cliquant dessus. Tu vas devoir configurer quelques options. Sur la page `Welcome`, clique sur `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Lis et accepte (en cochant la case) le contrat de licence Node.js, puis clique sur `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

Ensuite, choisis l’emplacement d’installation de Node.js.

:::note  
On recommande d’utiliser l’emplacement d’installation par défaut.  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

À la page suivante, tu peux choisir de ne pas installer certains paquets de base de Node.js. Pour une installation normale (recommandée), clique simplement sur `Next`. Tu auras aussi la possibilité d’installer Chocolatey, mais ce n’est pas nécessaire.

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### Étape 3 : Finaliser l’installation  
Clique sur `Install` et patiente pendant la configuration. Ça peut prendre un peu de temps. :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

Une fois terminé, clique sur `Finish` et commence à utiliser Node.js sur ton serveur.

### Mettre à jour Node.js vers la dernière version

La commande `node -v` affiche la version installée de Node.js. Pense à vérifier régulièrement que tu utilises la dernière version LTS. Pour mettre à jour Node.js, suis à nouveau la section de ce guide [Installer JavaScript](dedicated-windows-javascript.md).

### Utiliser Node.js & npm

npm est le gestionnaire officiel de paquets de Node.js. Tu l’utiliseras pour installer des paquets depuis internet.

:::tip  
Tu peux trouver tous les paquets npm sur leur [site officiel](https://www.npmjs.com/).  
:::

### Créer un nouveau projet

Chaque fois que tu veux démarrer un nouveau projet Node.js, crée un nouveau dossier avec l’Explorateur de fichiers, ouvre l’invite de commandes ou PowerShell dedans, puis lance la commande `npm init` pour commencer la configuration. On te demandera quelques infos de base pour créer un fichier `package.json`. Ce fichier sera la "config" pour ton projet Node.js.

:::tip  
Sous Windows, clique une fois sur le chemin actuel dans l’Explorateur de fichiers, tape `cmd` puis appuie sur `Entrée` pour ouvrir l’invite de commandes directement dans ce dossier, c’est plus rapide.  
:::

Après avoir initialisé le projet, crée un fichier `index.js` et écris ton code dedans. Par exemple, voici un serveur http simple sur le port 80 qui répond avec un message test quand tu accèdes à `localhost`.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Lance ce code avec la commande `node .` et vérifie le résultat en allant sur `localhost:80` dans ton navigateur.

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip  
Pour installer des paquets externes depuis npm, utilise la commande `npm install [nom-du-paquet]`.  
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Installer Deno

Installer Deno, c’est aussi simple que de taper `irm https://deno.land/install.ps1 | iex` dans une fenêtre PowerShell. Cherche `Powershell` dans la barre de recherche Windows, ouvre-le en mode administrateur et lance cette commande, puis suis les instructions.

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip  
Pour vérifier la version installée, lance `deno --version`.  
:::

### Mettre à jour Deno vers la dernière version

Pour mettre à jour Deno, il suffit de lancer `deno upgrade`.

### Utiliser Deno

Pour commencer avec Deno, crée un fichier `index.ts` et écris du code dedans. Par exemple, un serveur http simple sur le port 80 qui répond avec un message test quand tu accèdes à `localhost`.

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Lance ce code avec la commande `deno run --allow-net index.ts` et vérifie le résultat en allant sur `localhost:80` dans ton navigateur.

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info  
Deno a été créé pour être plus sécurisé et nécessite donc certaines permissions comme `--allow-net` pour accéder à certains modules.  
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Installer Bun

Bun propose aussi un installateur en une commande, mais tu peux aussi l’installer via npm si tu as déjà utilisé Node.js.

<Tabs>
<TabItem value="command" label="Commande" default>

Lance `irm bun.sh/install.ps1|iex` dans PowerShell pour installer Bun sur ton serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info  
Il se peut que ton serveur manque certains fichiers requis. Bun t’en informera et te donnera des liens pour les télécharger lors de l’installation.

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)  
:::

</TabItem>
<TabItem value="npm" label="npm">

Si tu as déjà npm, lance `npm install -g bun` pour installer Bun.

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Utiliser Bun

Bun a été conçu pour être plus rapide que certains autres moteurs JavaScript, tout en ayant une configuration proche de Node.js. Pour lancer Bun, ouvre un dossier vide et tape `bun init` dans l’invite de commandes.

:::note  
Selon le langage choisi (JS ou TS), Bun créera un fichier de config (jsconfig.json ou tsconfig.json).  
:::

Pour commencer avec Bun, crée un fichier `index.ts` et écris du code dedans. Par exemple, un serveur http simple sur le port 80 qui répond avec un message test quand tu accèdes à `localhost`.

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Lance ce code avec la commande `bun index.ts` et vérifie le résultat en allant sur `localhost:80` dans ton navigateur.

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>

## Conclusion

Bravo, tu as installé JavaScript avec succès. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂