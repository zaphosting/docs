---
id: contribution-guides-guidelines
title: Guide Guidelines
description: "Découvrez comment créer une documentation cohérente et de haute qualité qui améliore l'expérience et la clarté pour le lecteur → En savoir plus maintenant"
sidebar_label: Directives
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Pour garantir que le contenu de nos ZAP-Docs reste toujours cohérent en termes de qualité et de style, nous avons créé une série de directives à suivre lors de la création ou de la modification de contenu pour notre documentation. Vous **devez** suivre nos directives de près afin que votre suggestion et votre pull request final soient traités rapidement. Plus important encore, cela garantira à nos lecteurs une expérience de haute qualité plus cohérente lors de la lecture et du suivi des guides.

Nos directives de contribution aux guides sont divisées en sections suivantes :

- Structure
- Style
- Mise en forme
- Terminologie

Nous vous recommandons de parcourir ces sections au moins une fois avant de commencer à rédiger du contenu. C’est aussi un bon endroit où revenir si vous avez un doute sur la manière d’aborder quelque chose pendant la création.

## Structure

Tous nos guides dans les ZAP-Docs suivent une structure relativement cohérente qui commence par une courte introduction avec les prérequis ou étapes de préparation, suivie du contenu principal et d’une courte conclusion.

La structure peut être modifiée occasionnellement selon le type de guide produit. Cela peut être discuté avec l’équipe ZAP-Docs lors de votre suggestion initiale. Vous pouvez voir comment utiliser les titres via la section headers, cela se fait avec le Markdown classique.

La structure que nous attendons généralement comporte les titres suivants :

- **Titre de la page** (H1) - Défini via les métadonnées `title` en haut de la page.
- **Introduction** (H2) - Brève explication en 1-2 phrases du sujet du guide et surtout ce que le guide vise à accomplir.
- **Préparation** (H2) - Ce titre est **optionnel**. Il est nécessaire uniquement s’il y a des prérequis ou étapes de préparation à effectuer avant que le lecteur puisse suivre le guide. Par exemple, vous pouvez référencer notre guide [Accès SSH initial](vserver-linux-ssh.md) si l’utilisateur doit se connecter à son serveur en premier. Ou vous pouvez présenter les exigences logicielles et/ou matérielles nécessaires. Ou encore donner des instructions rapides pour préparer un logiciel, comme un pare-feu. Nous recommandons de parcourir notre [site ZAP-Docs](https://zap-hosting.com/guides) pour voir s’il existe des guides couvrant ces étapes et, le cas échéant, de les lier.
- **Sujet principal** (H2) - C’est la première section principale du guide. Dans beaucoup de cas, ce sera probablement **Installation**, suivie de sous-sections pour chaque partie du processus. Mais ce n’est pas toujours le cas, par exemple les guides informatifs peuvent avoir un sujet principal différent.
- Optionnel : **Sous-sujet 1** (H3)
- Optionnel : **Sous-sujet 2** (H3)
- ...
- Optionnel : **Un autre sujet** (H2)
- **Conclusion** (H2) - En conclusion, vous devez clôturer le guide en 1-3 phrases expliquant ce que le lecteur a réussi à accomplir et fournir une référence à notre équipe Support si le lecteur rencontre encore des problèmes.

:::info Utilisation des sous-titres (H3 & H4)
Nous vous encourageons à utiliser les titres H3 pour créer des sous-sections dans les sections principales H2 afin d’organiser les gros blocs de contenu en sections claires. Un exemple est visible dans la section **Sujet principal** ci-dessus.

Vous pouvez aussi utiliser les titres H4. Ils sont utiles si vous souhaitez créer une autre sous-section sans l’afficher dans la structure à droite du guide. Ils servent aussi à diviser une section H3 en sections encore plus petites.

Si vous utilisez des sous-titres, il est généralement logique d’en avoir au moins deux ou plus dans la section parente, sinon cela n’a pas vraiment de sens d’avoir un seul sous-titre dans une section principale.
:::

À l’avenir, nous ajouterons des templates avec du Markdown pré-préparé, ce qui sera un bon point de départ pour créer de nouvelles pages. Cela arrivera bientôt.

### Titres

Les titres de votre guide doivent être courts et basés sur l’objectif global du guide que vous avez écrit. Réfléchissez bien à ce que le lecteur accomplira à la fin du guide, par exemple installer un logiciel ou fournir des infos sur un sujet précis.

Le titre doit être préfixé par la catégorie produit à laquelle le guide se rapporte, ce qui doit aussi être l’endroit où vous avez placé le guide dans la barre latérale. Vous pouvez facilement vérifier d’autres guides dans la même section pour voir leur préfixe.

Un exemple de bon titre pour un guide lié au produit VPS serait : `VPS : Configuration SteamCMD Linux`

### Introduction

Les introductions de vos guides doivent être relativement courtes et directes, généralement 1-2 phrases. Dans le contenu, vous devez brièvement décrire le sujet traité et surtout expliquer ce que le guide présentera au lecteur, en l’informant de l’objectif final.

Un exemple d’introduction idéale pour un guide sur SteamCMD serait :

- **1ère phrase** : SteamCMD est un outil essentiel nécessaire pour installer des serveurs dédiés pour une grande variété de jeux comme Palworld, Enshrouded et plus encore.
- **2ème phrase** : Dans ce guide, nous allons explorer le processus d’installation initiale de SteamCMD sur votre serveur Linux. Nous utiliserons Ubuntu dans les exemples, mais le processus est similaire pour d’autres distributions.

Comme dans l’exemple, cela résume brièvement les sujets pertinents du guide et présente l’objectif global pour le lecteur.

### Préparation

La section préparation est utile pour clarifier les prérequis nécessaires que le lecteur doit remplir avant de pouvoir suivre le guide. Cela peut être des exigences logicielles ou matérielles, des instructions pour préparer un logiciel comme un pare-feu, ou simplement guider l’utilisateur pour se connecter à son serveur via SSH ou RDP.

Nous recommandons vivement de parcourir notre [site ZAP-Docs](https://zap-hosting.com/guides) pour chercher des guides qui couvrent ou sont liés aux étapes de préparation que vous souhaitez inclure. S’il existe un guide sur un sujet, par exemple [Accès SSH initial](vserver-linux-ssh.md), vous devez le lier et informer le lecteur de le suivre avant de continuer.

Les prérequis courants pour les guides incluent :

- Logiciels requis (ex. Git, Node.js, Python, Docker)
- Tutoriels pour aider le lecteur à acquérir des connaissances de base (ex. une autre page ZAP-Docs)
- Comptes utilisateurs comme des API
- Paramètres requis (ex. DNS/SSL)

Un exemple pour un guide Reverse Proxy serait :
```
Pour configurer un reverse proxy, vous aurez besoin d’un serveur Linux pour héberger votre proxy et vous devez pouvoir vous y connecter. Utilisez notre guide [Accès SSH initial](vserver-linux-ssh.md) si vous avez besoin d’aide pour cela. Vous aurez aussi besoin d’un domaine que vous possédez. Pour chaque sous-domaine que vous souhaitez utiliser, vous devez créer un enregistrement DNS `A` pointant vers l’adresse IP de votre serveur Linux.
```

### Sujet principal

Il est maintenant temps d’écrire la partie principale de votre guide. Vous êtes libre d’utiliser différents titres H2, H3 et H4 pour structurer correctement votre guide. Il est logique d’utiliser les titres H2 pour les grandes sections et de les découper en sous-sections avec H3 et/ou H4.

Dans beaucoup de cas, notamment pour les guides qui couvrent l’installation de logiciels, vous utiliserez probablement un titre **Installation** divisé en plusieurs sous-sections H3. Si vous avez du mal à trouver une structure correcte, pas de panique, nous travaillerons avec vous lors de la phase de suggestion pour planifier une structure bien équilibrée.

Dans chaque section, il est conseillé d’ajouter des phrases d’introduction et de conclusion pour que le lecteur sache toujours ce qu’il a fait et ce qu’il va faire ensuite. Bien sûr, la dernière section principale n’a pas forcément besoin d’une phrase de conclusion, car elle mène naturellement à la conclusion finale.

Exemples de phrases de transition :

- **Phrase d’entrée** : Dans cette section, vous allez configurer le logiciel selon vos préférences.
- **Phrase de clôture** : Une fois la configuration prête et le fichier sauvegardé, passez à la section suivante pour créer le compte administrateur et commencer à utiliser le logiciel.

Ces phrases donnent un contexte important pour assurer un bon déroulement du guide. N’oubliez pas d’utiliser la deuxième personne (ex. « Vous allez créer ») plutôt que la première personne lors de la rédaction.

### Conclusion

Enfin, la dernière section est la conclusion du guide. Elle doit clôturer le guide en 1-3 phrases expliquant ce que le lecteur a réussi à accomplir et fournir des références pour approfondir ou suivre d’autres guides liés au sujet.

Il est idéal de lier ici des guides ZAP-Docs existants, surtout s’ils s’enchaînent naturellement avec votre guide. Nous recommandons aussi de fournir une référence à notre équipe Support si le lecteur rencontre encore des difficultés.

Un exemple de bonne conclusion est :
```
Vous avez maintenant configuré avec succès le logiciel sur votre serveur Linux ! Nous vous recommandons de parcourir nos guides sur les services Linux dans cette section pour installer d’autres services.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂
```

## Style

Le style d’écriture des docs ZAP-Hosting repose sur notre volonté de produire des guides de haute qualité, pratiques et accessibles, couvrant un large éventail de sujets et aidant les lecteurs de tous niveaux.

### Technique & précis

Nos articles visent à être techniquement précis et à jour avec les dernières infos du secteur. Nous attendons des articles qu’ils permettent non seulement à l’utilisateur d’atteindre l’objectif final (apprendre, construire ou configurer quelque chose), mais aussi de comprendre ce qu’il a fait tout au long de l’article. Chaque étape doit avoir un but clair et une explication, avec des options et/ou flags supplémentaires quand c’est pertinent. Vous devez toujours tenir le lecteur informé de ce qu’il fait et pourquoi.

Les rédacteurs doivent toujours relire et tester leurs guides pour s’assurer que tout est techniquement correct et fonctionne comme prévu avant de soumettre un pull request. L’équipe ZAP-Hosting lira et testera votre guide si nécessaire pour garantir cohérence et exactitude, ou discutera des améliorations en cas d’erreur.

:::tip
Nous recommandons toujours à nos rédacteurs de passer leur contenu dans un correcteur orthographique avant de créer un pull request. Un site utile pour cela est : https://languagetool.org/
:::

### Pratique & utile

À la fin d’un article, le lecteur doit avoir appris, construit ou configuré quelque chose de A à Z. Nos guides visent à aider les lecteurs de tous niveaux, donc vos contributions doivent couvrir le sujet en profondeur, en mentionnant tous les détails nécessaires, y compris les prérequis. En tant que rédacteur, vous ne devez envoyer les lecteurs vers des sites externes que s’il n’existe pas de documentation sur ZAP-Docs ou si c’est pour leur permettre d’obtenir des infos supplémentaires non indispensables mais utiles pour approfondir leurs connaissances techniques. Les liens externes ne doivent pas rediriger vers la doc d’un concurrent.

### Amical, formel & complet

Nous voulons que notre documentation soit moderne et accessible pour tous, tout en restant formelle. Dans vos guides, le ton doit être acceptable pour tous les lecteurs, quel que soit leur niveau ou leur langue.

Comme ces guides visent à aider le lecteur à apprendre et atteindre un résultat, nous attendons des rédacteurs qu’ils utilisent la deuxième personne (ex. « Vous devez… ») plutôt que la première personne (ex. « Je pense… ») pour garder le lecteur engagé et centré sur lui.

Enfin, tous les rédacteurs doivent respecter notre code de conduite pour que nos guides soient inclusifs, quel que soit l’âge, l’ethnie, l’identité de genre, le niveau d’expérience, la nationalité, la religion, l’affiliation politique, l’orientation sexuelle, le statut socio-économique ou les choix technologiques. Vous devez éviter tout langage potentiellement offensant ou contenu lié aux sujets mentionnés.

## Mise en forme

Notre documentation est formatée en Markdown, un langage largement utilisé et simple. Découvrez ci-dessous les éléments que nous utilisons et comment.

:::tip
Pour plus d’exemples et d’explications détaillées sur Markdown, consultez le [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) qui fournit plein d’infos.
:::

### Titres

Les titres sont essentiels pour séparer les pages de manière claire et logique. Le titre principal est en H1, mais vous ne devez jamais l’utiliser dans le texte. Utilisez plutôt la métadonnée `title` en haut du fichier guide.

Dans nos guides, les titres H2 divisent le guide en sections principales. Ensuite, les titres H3 divisent ces sections en sous-sections. Par exemple, pour découper une section principale en plusieurs étapes. Enfin, il y a aussi le H4, plus rare, qui sert à diviser encore plus sans apparaître dans la structure du guide.

:::info
Si vous utilisez des sous-titres (ex. H3 sous H2), assurez-vous qu’il y en a deux ou plus au même niveau dans la section, sinon c’est une mauvaise utilisation.
:::

Exemple rapide d’utilisation des titres :

```
## Installation
H2 - Section principale

### Téléchargement des fichiers du serveur de jeux
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

On utilise plusieurs formats en ligne pour améliorer la lisibilité et s’adapter à tous les niveaux techniques. Voici comment les utiliser.

#### Texte en gras

Le gras sert à mettre en avant des infos importantes, par exemple :

- Changement de contexte entre étapes
- Noms d’hôtes, identifiants & noms d’utilisateur
- Terminologie clé

Utilisez deux astérisques autour du texte, ex. `**bonjour**` donne **bonjour**.

#### Italique

L’italique sert surtout à introduire des mots techniques nouveaux dans l’article. Par exemple, on va configurer un *reverse proxy* aujourd’hui.

Utilisez un astérisque autour du texte, ex. `*ZAP-Hosting - Plus de PUISSANCE !*` donne *ZAP-Hosting - Plus de PUISSANCE !*.

#### Code en ligne

Le code en ligne sert à afficher des infos techniques comme des URLs, noms de fichiers, commandes, etc. Par exemple :

- Noms et chemins de fichiers (ex. `C:/User/[your_name]/AppData....test.png`)
- URLs (ex. `https://zap-hosting.com`)
- Ports (ex. `:30120`)
- Commandes (ex. `ipconfig`)
- Requêtes SQL (ex. `SELECT * FROM servers`)
- Touches ou combinaisons (ex. `ENTER` ou `CTRL + C`)

#### Tableaux

Les tableaux sont utiles pour afficher beaucoup d’infos répétitives, par exemple commandes, descriptions et usages dans un jeu. Exemple :

```
| Commande    | Description              | Usage                 |
| ----------- | ------------------------ | --------------------- |
| /help       | Envoie la commande d’aide| /help [catégorie]     |
| /stop       | Arrête le serveur        | /stop [true/false]    |
```

#### Blocs de code

Les blocs de code sont très utiles pour les guides avec commandes, scripts, sorties terminal, etc.

Pour créer un bloc de code, utilisez ` ``` ` avant et après le bloc. Vous pouvez aussi préciser la langue pour la coloration syntaxique, ex. ` ```js ` pour JavaScript.

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Utilisation des admonitions

Vous pouvez utiliser des admonitions pour mettre en avant certaines infos sous 5 labels possibles, expliqués ci-dessous.

La syntaxe est la même, il suffit de remplacer le mot-clé par le type voulu. Exemple :

```
:::note
Ceci est une note ! Remplacez le mot-clé pour changer le type.
:::
```

#### Note

:::note Titre de la note ! (Optionnel)
Utilisez cette balise pour afficher des notes supplémentaires utiles mais pas cruciales.
:::

#### Astuce

:::tip Titre de l’astuce ! (Optionnel)
Placez ici vos conseils basés sur votre expérience.
:::

#### Info

:::info Titre de l’info ! (Optionnel)
Si une info importante doit être connue, placez-la ici.
:::

#### Attention

:::caution Titre d’attention ! (Optionnel)
Si quelque chose dans votre guide nécessite une mise en garde, utilisez cette balise.
:::

#### Danger

:::danger Titre de danger ! (Optionnel)
Utilisez cette admonition pour des infos cruciales, bugs connus ou fonctionnalités dépréciées.
:::

### Captures d’écran

Les captures d’écran sont super utiles pour guider visuellement les lecteurs, on recommande de les utiliser quand c’est pertinent.

Pour la section allemande, quand vous prenez une capture, on attend que vous ajoutiez une version anglaise et une version allemande pour assurer la cohérence. Vous pouvez les placer côte à côte dans votre guide. Les captures allemandes seront retirées et utilisées une fois que l’équipe ZAP-Docs aura traduit votre article.

Pour ajouter une capture, utilisez cette syntaxe en remplaçant `your_url` par l’URL de l’image :
```
![](your_url)
```

Le mieux est d’utiliser un site comme Imgur pour héberger l’image, ou de la glisser directement dans le champ d’édition sur GitHub pour un upload automatique.

## Terminologie

Dans notre documentation, beaucoup de termes clés sont utilisés. Nous attendons que vous utilisiez l’anglais US localisé pour assurer la cohérence dans tous les articles. Ici, on standardise certains termes courants.

### Produits ZAP-Hosting

Quand vous mentionnez un produit ZAP-Hosting, assurez-vous d’utiliser le nom, l’orthographe et la capitalisation corrects. Vérifiez sur [le site ZAP-Hosting](https://zap-hosting.com) comment le produit est référencé.

### Attributs définis par l’utilisateur

Dans la plupart des guides, des options de configuration comme utilisateurs, noms d’hôtes, domaines, adresses IP et URLs seront nécessaires, où le lecteur doit utiliser ses propres infos à la place de nos placeholders.

Par défaut, utilisez toujours `[your_attribute]` pour différencier les éléments statiques des éléments uniques, où `attribute` est remplacé par le type d’attribut. Par exemple, pour une IP, écrivez `[your_server_ip]` ou pour une URL `http://[your_server_ip]:30120`. Cela montre clairement ce que le lecteur doit modifier selon sa config. Vous devez aussi expliquer ou noter quels attributs changer dès leur première mention pour que tout soit clair.

Utilisez `zaphosting` comme nom d’hôte, nom d’utilisateur ou nom de base de données par défaut.

### Logiciels

Quand vous mentionnez un logiciel dans vos guides, assurez-vous de respecter l’orthographe et la capitalisation correctes du nom. Si le site officiel du logiciel n’est pas cohérent sur la capitalisation, suivez la même dans un même article pour garder la cohérence.

Vous devez mettre un lien vers le site officiel du logiciel dès la première mention, si un site officiel existe.