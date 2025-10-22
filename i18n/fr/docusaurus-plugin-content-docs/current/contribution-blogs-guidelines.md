---
id: contribution-blogs-guidelines
title: Guide pour les Blogs
description: "Découvrez comment créer des articles de blog de haute qualité et cohérents qui captivent les lecteurs et améliorent vos compétences en écriture → En savoir plus maintenant"
sidebar_label: Guide
---

![Blogs Banner](https://screensaver01.zap-hosting.com/index.php/s/ysxLZ26K3dSRLJQ/preview)

Pour garantir que tous les articles du Blog ZAP-Hosting soient cohérents en termes de qualité et de style, nous avons élaboré une série de directives à suivre lors de la création de contenu pour notre Programme de Contribution aux Blogs. Vous devez suivre nos directives de près afin que vos suggestions et brouillons soient traités rapidement. Plus important encore, cela garantira à nos lecteurs une expérience de lecture de meilleure qualité et plus homogène.

Nos directives de contribution au blog se divisent en plusieurs sections principales, à savoir :

- Structure
- Style
- Mise en forme
- Terminologie

## Structure

Les articles de blog dans notre programme de contribution doivent suivre une structure relativement cohérente, suscitant l’intérêt du lecteur et fournissant des informations et actualités. L’équipe de Contribution ZAP travaillera avec vous pour s’assurer que votre structure est appropriée lors de la création d’une suggestion de blog.

- **Titre de la page** (H1)
- **Introduction** (H2) 
- **Préparation** (H2)
- **Sujet principal** (H2)
- Optionnel : **Sous-sujet 1** (H3)
- Optionnel : **Sous-sujet 2** (H3)
- ...
- Optionnel : **Un autre sujet** (H2)
- **Conclusion** (H2)

:::info Utilisation des sous-titres (H3 & H4)
Nous vous encourageons à utiliser des titres H3 pour créer des sous-sections au sein des sections principales H2 afin d’organiser davantage les contenus volumineux en sections claires. Un exemple est visible dans la section **Sujet principal** ci-dessus.

Si vous utilisez des sous-titres, il est généralement logique d’en avoir au moins deux ou plus dans la section parente, sinon il n’est pas pertinent d’avoir un seul sous-titre dans un titre principal.
:::

:::info
Gardez à l’esprit que ce qui précède est une référence approximative. Le corps principal de votre article peut avoir des titres différents selon ce qui est approprié pour votre contenu, mais tous les articles doivent toujours comporter un titre, une introduction et une conclusion entourant le contenu principal.
:::

### Titres

Le titre de votre article doit être court, clair et accrocheur pour capter l’attention du lecteur. Il doit indiquer précisément le sujet de votre article, par exemple, s’agit-il d’actualités ou de conseils ? Un bon exemple de titre serait : **Top 10 des scripts FiveM Police**.

### Introduction

Les introductions doivent être relativement courtes et directes, généralement 1 à 2 phrases. Vous devez brièvement décrire le sujet abordé et surtout expliquer ce que l’article présentera au lecteur, en l’informant de l’objectif final.

Un exemple d’introduction idéale pour un article sur SteamCMD serait :

- **1ère phrase** : SteamCMD est un outil essentiel nécessaire pour installer des serveurs dédiés pour une grande variété de jeux comme Palworld, Enshrouded et plus encore.
- **2ème phrase** : Dans cet article, nous allons explorer le processus d’installation initiale de SteamCMD sur votre serveur Linux. Nous utiliserons Ubuntu dans les exemples, mais le processus est similaire pour d’autres distributions.

Comme dans cet exemple, l’introduction résume brièvement les sujets pertinents et présente l’objectif global pour le lecteur.

### Préparation

La section préparation sert à clarifier les prérequis nécessaires que le lecteur doit remplir avant de pouvoir suivre l’article. Cela peut être des exigences logicielles ou matérielles, des instructions pour préparer un logiciel comme un pare-feu, ou simplement guider l’utilisateur pour se connecter à son serveur via SSH ou RDP.

Nous recommandons vivement de parcourir notre [site ZAP-Docs](https://zap-hosting.com/guides) pour rechercher des guides qui couvrent ou sont liés aux étapes de préparation que vous souhaitez inclure. S’il existe un guide sur un sujet, par exemple [Accès initial SSH](vserver-linux-ssh.md), vous devez le lier et informer le lecteur de le suivre avant de continuer.

Les prérequis courants pour les articles incluent :

- Logiciels requis (ex. Git, Node.js, Python, Docker)
- Tutoriels pour aider le lecteur à acquérir des connaissances de base (ex. une autre page ZAP-Docs)
- Comptes utilisateurs comme les API
- Paramètres requis (ex. DNS/SSL)

Un exemple pour un article sur un Reverse Proxy serait :
```
Pour configurer un reverse proxy, vous aurez besoin d’un serveur Linux pour héberger votre proxy et vous devez vous y connecter. Utilisez notre guide [Accès initial SSH](vserver-linux-ssh.md) si vous avez besoin d’aide. Vous aurez également besoin d’un domaine que vous possédez. Pour chaque sous-domaine que vous souhaitez utiliser, vous devez créer un enregistrement DNS `A` pointant vers l’adresse IP de votre serveur Linux.
```

### Sujet principal

C’est le moment d’écrire la majeure partie de votre article. Nous recommandons de diviser l’article en plusieurs sections pour aider le lecteur à rester engagé. Il n’y a pas de règle stricte sur la manière de diviser, mais en général, vous devriez fractionner un contenu volumineux en plusieurs titres. L’équipe de Contributions ZAP vous aidera tout au long du processus.

Si votre article fournit des informations procédurales étape par étape ou des tutoriels, il est judicieux d’inclure le numéro de l’étape et une courte description dans le titre principal, par exemple **Étape 1 - Création du dossier**. Vous devez brièvement décrire ce que fait le lecteur dans cette étape pour donner un objectif global dans la première phrase. Entre les étapes, créez une introduction et une transition de clôture pour informer le lecteur de ce qu’il a fait et de ce qui va suivre. Ces transitions apportent un contexte important. Évitez les répétitions et variez le vocabulaire.

### Conclusion

Enfin, la dernière section est la conclusion de l’article. Elle doit clore le guide en 1 à 3 phrases expliquant ce que le lecteur a accompli, appris ou pour fournir une conclusion informative.

Il est aussi pertinent de proposer des références pour approfondir la lecture ou d’autres articles ou guides que l’utilisateur peut suivre pour élargir ses connaissances. Vous devez lier ici tout guide ou article ZAP-Docs existant, surtout s’ils s’enchaînent naturellement avec votre guide.

## Style

Le style d’écriture des docs ZAP-Hosting vise à produire des articles de blog de haute qualité, pratiques et facilement accessibles, couvrant un large éventail de sujets et aidant les lecteurs de tous niveaux.

### Technique & précis

Nos articles visent à être techniquement précis et à jour avec les dernières infos du secteur. Chaque article doit fournir des informations bien écrites et de qualité sur de nouveaux sujets et technologies, ainsi que des tutoriels pour apprendre. Si votre article est un tutoriel étape par étape, chaque étape doit avoir un but clair et une explication, avec des options ou flags supplémentaires si nécessaire.

Les rédacteurs doivent toujours relire et tester leurs articles pour s’assurer que tout est techniquement correct et fonctionne comme prévu avant de soumettre un brouillon. L’équipe de Contributions ZAP lira et testera votre article si besoin pour garantir cohérence et exactitude, ou discutera des améliorations en cas d’erreur.

:::tip
Nous recommandons toujours à nos rédacteurs de passer leur contenu dans un correcteur orthographique pour vérifier l’orthographe et la grammaire avant de soumettre un brouillon. Un site utile est : https://languagetool.org/
:::

### Pratique & utile

À la fin de la lecture, le lecteur doit avoir appris, construit ou configuré quelque chose de A à Z. Nos articles visent à soutenir tous les niveaux d’expérience, donc vous devez couvrir votre sujet en profondeur, avec tous les détails nécessaires, y compris les prérequis. Vous ne devez envoyer vers des sites externes que s’il n’existe pas de documentation ZAP-Docs sur le sujet ou si c’est pour permettre au lecteur d’approfondir des détails non essentiels mais utiles. Les liens externes ne doivent pas rediriger vers la documentation de concurrents.

### Amical, formel & complet

Nous voulons que notre documentation soit accessible et amicale pour tous, tout en restant formelle. Le ton de votre article doit être acceptable pour tous les lecteurs, quel que soit leur niveau ou leur langue.

Comme ces articles visent à aider le lecteur à apprendre et atteindre un résultat, utilisez la deuxième personne (ex. « Vous devez… ») plutôt que la première personne (ex. « Je pense… ») pour garder le lecteur impliqué et centré sur lui.

Enfin, tous les rédacteurs doivent respecter notre code de conduite pour garantir que nos articles soient acceptables pour tous, sans distinction d’âge, origine, genre, expérience, nationalité, religion, orientation politique, sexuelle, statut socio-économique ou choix technologiques. Évitez tout langage offensant ou contenu sensible lié à ces sujets.

## Mise en forme

Notre Blog utilise le langage de balisage Markdown, très répandu. Utilisez les sections ci-dessous pour comprendre les éléments que nous utilisons et comment les intégrer dans vos articles.

Vous pouvez utiliser n’importe quel outil d’écriture, mais nous recommandons **fortement** d’utiliser **[StackEdit](https://stackedit.io/app#)** pour écrire votre contenu tout en conservant toutes les fonctionnalités Markdown. Vous pouvez ensuite exporter directement vers Google Drive ou une appli de partage de fichiers et nous envoyer un lien.

:::tip
Pour plus d’exemples et explications détaillées sur Markdown, consultez [Markdown Guide](https://www.markdownguide.org/cheat-sheet/).
:::

### Titres

Les titres sont essentiels pour structurer clairement les articles. Le titre principal est en H1.

Dans nos blogs, les titres H2 divisent l’article en sections principales. Les titres H3 divisent ces sections en sous-sections, par exemple pour détailler plusieurs étapes. Le H4 est plus rare mais sert aussi à subdiviser.

:::info
Si vous utilisez des sous-titres (ex. H3 sous H2), assurez-vous qu’il y en ait au moins deux au même niveau dans la section, sinon c’est une mauvaise utilisation.
:::

Exemple rapide d’utilisation des titres :

```
## Installation
H2 - Section principale

### Téléchargement des fichiers de jeu
H3 - Sous-section de H2

#### Via SteamCMD
H4 - Sous-section de H3

#### Manuellement via GitHub
H4 - Sous-section de H3

### Préparation de la configuration
H3 - Sous-section de H2

### Démarrage du serveur
H3 - Sous-section de H2
```

### Markdown en ligne

Nous utilisons plusieurs formats en ligne pour améliorer la lisibilité et s’adapter à tous les niveaux techniques. Voici leur usage.

#### Texte en gras

Le gras sert à mettre en avant des infos importantes, par exemple :

- Changement de contexte entre étapes
- Noms d’hôtes, identifiants & noms d’utilisateur
- Terminologie clé

Utilisez deux astérisques autour du texte, ex. `**bonjour**` donne **bonjour**.

#### Italique

L’italique sert à introduire de nouveaux mots techniques. Par exemple, nous allons configurer un *reverse proxy* aujourd’hui.

Utilisez un astérisque autour du texte, ex. `*ZAP-Hosting - Plus de PUISSANCE !*` donne *ZAP-Hosting - Plus de PUISSANCE !*.

#### Code en ligne

Le code en ligne sert à afficher des infos techniques comme des URL, chemins, commandes, etc. Exemples :

- Noms de fichiers et chemins (ex. `C:/User/[VotreNom]/AppData....test.png`)
- URL (ex. `https://zap-hosting.com`)
- Ports (ex. `:30120`)
- Commandes (ex. `ipconfig`)
- Requêtes SQL (ex. `SELECT * FROM servers`)
- Touches ou raccourcis (ex. `ENTER` ou `CTRL + C`)

#### Tableaux

Les tableaux sont utiles pour afficher beaucoup d’infos répétitives, par exemple commandes, descriptions et usages dans un jeu. Exemple :

```
| Commande    | Description              | Usage                 |
| ----------- | ------------------------ | --------------------- |
| /help       | Envoie la commande d’aide| /help [catégorie]     |
| /stop       | Arrête le serveur        | /stop [true/false]    |
```

#### Blocs de code

Les blocs de code sont très utiles pour afficher des commandes, scripts, sorties terminal, etc.

Pour un bloc de code, utilisez ` ``` ` avant et après le texte. Vous pouvez préciser la langue pour la coloration syntaxique, ex. ` ```js ` pour JavaScript.

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Captures d’écran

Les captures d’écran sont super utiles pour guider visuellement les lecteurs, on recommande vivement d’en utiliser.

Pour insérer une capture, utilisez la syntaxe suivante en remplaçant `your_url` par l’URL de l’image :
```
![](your_url)
```

Le mieux est d’héberger vos images sur un site comme [Imgur](https://imgur.com/) et d’utiliser le lien dans votre markdown.

## Terminologie

Dans nos articles, certains termes clés reviennent souvent. Nous attendons que vous utilisiez l’anglais US localisé pour assurer la cohérence. Voici quelques normes à suivre.

### Produits ZAP-Hosting

Quand vous mentionnez un produit ZAP-Hosting, assurez-vous d’utiliser le nom, l’orthographe et la capitalisation corrects. Vérifiez sur [le site ZAP-Hosting](https://zap-hosting.com) comment le produit est référencé.

### Attributs définis par l’utilisateur

Dans certains articles, vous devrez mentionner des options de configuration comme utilisateurs, noms d’hôtes, domaines, adresses IP ou URL où le lecteur doit remplacer par ses propres infos.

Par défaut, utilisez `[your_attribute]` pour différencier les éléments statiques des éléments uniques, où `[attribute]` est remplacé par le type d’attribut. Par exemple, pour une IP, écrivez `[your_server_ip]` ou pour une URL `http://[your_server_ip]:30120`. Cela montre clairement ce que le lecteur doit modifier. Expliquez ou notez quels attributs changer dès la première mention pour que ce soit clair.

Utilisez `zaphosting` comme nom d’hôte, nom d’utilisateur ou nom de base de données par défaut.

### Logiciels

Quand vous mentionnez un logiciel, respectez l’orthographe et la capitalisation correctes. Si le site officiel n’est pas cohérent, gardez la même capitalisation dans l’article pour la cohérence.

Lien toujours vers le site officiel du logiciel à la première mention, si disponible.