---
id: contribution-guides-guidelines
title: Guide de bonnes pratiques
description: "Découvrez comment créer une documentation cohérente et de haute qualité qui améliore l'expérience et la clarté pour les lecteurs → En savoir plus maintenant"
sidebar_label: Bonnes pratiques
---

![Bannière Guides](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Pour garantir que le contenu de nos ZAP-Docs reste toujours cohérent en termes de qualité et de style, nous avons créé une série de bonnes pratiques à suivre lors de la création ou de la modification de contenu pour notre documentation. Vous **devez** suivre ces bonnes pratiques à la lettre pour que votre suggestion et votre pull request finale soient traitées rapidement. Plus important encore, cela garantit à nos lecteurs une expérience de lecture plus fluide et de haute qualité, tout au long des guides.

Nos bonnes pratiques pour la contribution aux guides sont réparties dans les sections suivantes :

- Structure
- Style
- Mise en forme
- Terminologie

Nous vous recommandons de parcourir ces sections au moins une fois avant de commencer à rédiger du contenu. C’est aussi un bon réflexe à avoir en cas de doute sur la manière d’aborder un point pendant la création.

## Structure

Tous nos guides dans les ZAP-Docs suivent une structure relativement cohérente qui commence par une courte introduction avec les prérequis ou étapes de préparation, suivie du contenu principal et d’une courte conclusion.

La structure peut être modifiée occasionnellement selon le type de guide produit. Cela peut être discuté avec l’équipe ZAP-Docs lors de votre suggestion initiale. Vous pouvez consulter comment utiliser les titres via la section sur les en-têtes, c’est fait avec le Markdown classique.

La structure que nous attendons généralement comporte les titres suivants :

- **Titre de la page** (H1) - Défini via les métadonnées `title` en haut de la page.
- **Introduction** (H2) - 1 à 2 phrases courtes qui expliquent le sujet du guide et surtout ce que le guide vise à accomplir.
- **Préparation** (H2) - Ce titre est **optionnel**. Il est nécessaire uniquement s’il y a des prérequis ou étapes de préparation à réaliser avant que le lecteur puisse suivre le guide. Par exemple, vous pouvez y référencer notre guide [Accès SSH initial](vserver-linux-ssh.md) si l’utilisateur doit d’abord se connecter à son serveur. Ou vous pouvez présenter les exigences logicielles et/ou matérielles. Ou encore donner des instructions rapides pour préparer un logiciel, comme un pare-feu. Nous recommandons de parcourir notre [site ZAP-Docs](https://zap-hosting.com/guides) pour voir s’il existe déjà des guides couvrant ces étapes et, le cas échéant, de les lier.
- **Sujet principal** (H2) - C’est la première grande section du guide. Souvent, ce sera **Installation**, suivie de sous-sections pour chaque étape du processus. Mais ce n’est pas toujours le cas, par exemple les guides informatifs peuvent avoir un sujet principal différent.
- Optionnel : **Sous-sujet 1** (H3)
- Optionnel : **Sous-sujet 2** (H3)
- ...
- Optionnel : **Un autre sujet** (H2)
- **Conclusion** (H2) - En conclusion, vous devez clôturer le guide en 1 à 3 phrases expliquant ce que le lecteur a réussi à faire et fournir un lien vers notre équipe Support si le lecteur rencontre encore des difficultés.

:::info Utilisation des sous-titres (H3 & H4)
Nous vous encourageons à utiliser les titres H3 pour créer des sous-sections dans les sections principales H2 afin d’organiser les gros blocs de contenu. Un exemple est visible dans la section **Sujet principal** ci-dessus.

Vous pouvez aussi utiliser les titres H4. Ils sont utiles si vous souhaitez créer une sous-section supplémentaire sans qu’elle apparaisse dans la table des matières à droite. Ils servent aussi à diviser une section H3 en parties encore plus petites.

Si vous utilisez des sous-titres, il est généralement logique d’en avoir au moins deux ou plus dans la section parente, sinon cela n’a pas vraiment de sens d’en avoir un seul.
:::

À l’avenir, nous ajouterons des templates avec du Markdown pré-préparé, ce qui sera un bon point de départ pour créer de nouvelles pages. Cela arrivera bientôt.

### Titres

Les titres doivent être concis et refléter clairement l’objectif principal du guide. Pensez à ce que le lecteur va accomplir à la fin, comme terminer une installation, configurer un service ou comprendre un sujet technique précis. Le résultat doit être immédiatement identifiable dans le titre.

Chaque titre doit commencer par le préfixe de catégorie produit approprié. Ce préfixe doit correspondre à la section où le guide est placé dans la barre latérale. Parcourir les guides existants dans la même catégorie aide à assurer une cohérence dans la nomenclature.

Par exemple, un guide lié au produit VPS doit suivre une structure comme : `VPS : Configuration SteamCMD Linux`.

Si un guide est écrit de manière générale et s’applique à plusieurs produits, comme un service ou une installation de serveur de jeux fonctionnant à la fois sur VPS et serveurs dédiés, le nom du produit ne doit pas être inclus dans le titre. Dans ce cas, le guide est volontairement indépendant du produit et ne nécessite donc pas de préfixe spécifique.

### Introduction

Les introductions doivent être relativement courtes et directes, généralement 1 à 2 phrases. Vous devez brièvement décrire le sujet traité et surtout expliquer ce que le guide va présenter au lecteur, en lui indiquant l’objectif final.

Un exemple d’introduction idéale pour un guide sur SteamCMD serait :

- **1ère phrase** : SteamCMD est un outil essentiel nécessaire pour installer des serveurs dédiés pour une grande variété de jeux, y compris Palworld, Enshrouded et plus encore.
- **2ème phrase** : Dans ce guide, nous allons explorer le processus d’installation initiale de SteamCMD sur votre serveur Linux. Nous utiliserons Ubuntu dans les exemples, mais le processus est similaire pour d’autres distributions.

Comme dans cet exemple, l’introduction résume brièvement les sujets pertinents du guide et présente l’objectif global pour le lecteur.

### Préparation

La section préparation sert à clarifier les prérequis nécessaires que le lecteur doit remplir avant de pouvoir suivre le guide. Cela peut être des exigences logicielles ou matérielles, des instructions pour préparer un logiciel comme un pare-feu, ou simplement guider l’utilisateur pour se connecter à son serveur via SSH ou RDP.

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

C’est le moment d’écrire le cœur de votre guide. Vous pouvez utiliser les titres H2, H3 et H4 pour structurer correctement votre contenu. Il est logique d’utiliser les H2 pour les grandes sections et de les découper en sous-sections avec H3 et/ou H4.

Dans beaucoup de cas, notamment pour les guides d’installation de logiciels, vous utiliserez un titre **Installation** divisé en plusieurs sous-sections H3. Si vous avez du mal à trouver une structure correcte, pas de panique, nous travaillerons avec vous lors de la phase de suggestion pour planifier une structure bien équilibrée.

Dans chaque section, il est conseillé d’ajouter des phrases d’introduction et de conclusion pour indiquer au lecteur ce qu’il vient de faire et ce qu’il va faire ensuite. Bien sûr, la dernière section principale n’a pas forcément besoin de phrase de conclusion, car elle mène naturellement à la conclusion finale.

Exemples de phrases de transition :

- **Phrase d’entrée** : Dans cette section, vous allez configurer le logiciel selon vos préférences.
- **Phrase de clôture** : Une fois la configuration terminée et le fichier sauvegardé, passez à la section suivante pour créer le compte administrateur et commencer à utiliser le logiciel.

Ces phrases de transition apportent un contexte important et assurent une bonne fluidité du guide. N’oubliez pas d’utiliser la deuxième personne (ex. « Vous allez créer ») plutôt que la première personne pour garder le lecteur impliqué.

### Conclusion

Enfin, la dernière section est la conclusion du guide. Elle doit clôturer le guide en 1 à 3 phrases expliquant ce que le lecteur a réussi à accomplir et fournir des références vers d’autres lectures ou guides pour approfondir le sujet.

Il est idéal de lier ici des guides ZAP-Docs existants, surtout s’ils s’enchaînent naturellement avec votre guide. Nous recommandons aussi de fournir un lien vers notre équipe Support si le lecteur rencontre encore des problèmes.

Un exemple de bonne conclusion est :
```
Vous avez maintenant configuré avec succès le logiciel sur votre serveur Linux ! Nous vous recommandons de parcourir nos guides sur les services Linux dans cette section pour installer d’autres services.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂
```

## Style

Le style d’écriture des docs ZAP-Hosting vise à produire des guides de haute qualité, pratiques et accessibles, couvrant un large éventail de sujets et accompagnant les lecteurs de tous niveaux.

### Technique & précis

Nos articles doivent être techniquement précis et à jour avec les dernières infos du secteur. Ils doivent permettre à l’utilisateur non seulement d’atteindre l’objectif final (apprendre, construire ou configurer), mais aussi de comprendre ce qu’il a fait. Chaque étape doit avoir un but clair et une explication, avec des options ou flags supplémentaires si nécessaire. Vous devez toujours informer le lecteur de ce qu’il fait et pourquoi.

Les rédacteurs doivent relire et tester leurs guides pour s’assurer que tout est techniquement correct et fonctionne avant de soumettre une pull request. L’équipe ZAP-Hosting relira et testera votre guide pour garantir cohérence et exactitude, ou discutera des améliorations si besoin.

:::tip
Nous recommandons toujours d’utiliser un correcteur orthographique avant de créer une pull request. Un site utile est : https://languagetool.org/
:::

### Pratique & utile

À la fin d’un article, le lecteur doit avoir appris, construit ou configuré quelque chose de A à Z. Nos guides doivent accompagner tous les niveaux, donc vos contributions doivent couvrir le sujet en profondeur, en mentionnant tous les détails nécessaires, y compris les prérequis. Vous ne devez envoyer vers des sites externes que s’il n’existe pas de documentation ZAP-Docs sur le sujet, ou pour fournir des détails supplémentaires non essentiels mais utiles pour approfondir les connaissances techniques. Les liens externes ne doivent pas pointer vers la documentation de concurrents.

### Amical, formel & complet

Nous voulons une documentation accessible et amicale, tout en restant formelle. Le ton doit convenir à tous les lecteurs, quel que soit leur niveau ou leur langue.

Comme ces guides visent à éduquer et à faire atteindre un résultat, nous attendons des rédacteurs qu’ils utilisent la deuxième personne (ex. « Vous devez… ») plutôt que la première personne (ex. « Je pense… ») pour garder le lecteur impliqué.

Enfin, tous les rédacteurs doivent respecter notre code de conduite pour que nos guides soient inclusifs, sans discrimination d’âge, origine, genre, expérience, nationalité, religion, orientation politique, sexuelle, statut socio-économique ou choix technologiques. Évitez tout langage offensant ou contenu sensible.

## Mise en forme

Notre documentation est formatée en Markdown, un langage simple et largement utilisé. Découvrez ci-dessous les éléments que nous utilisons et comment.

:::tip
Pour plus d’exemples et explications détaillées sur Markdown, consultez [Markdown Guide](https://www.markdownguide.org/cheat-sheet/).
:::

### Titres

Les titres sont essentiels pour structurer les pages de façon claire et logique. Le titre principal est en H1, mais vous ne devez jamais l’utiliser dans le texte. Il est défini via la métadonnée `title` en haut du fichier.

Dans nos guides, les titres H2 divisent le guide en sections principales. Les titres H3 divisent ces sections en sous-sections, par exemple pour détailler plusieurs étapes. Il existe aussi le H4, plus rare, qui sert à créer des sous-sections sans apparaître dans la table des matières.

:::info
Si vous utilisez des sous-titres (ex. H3 sous H2), assurez-vous qu’il y en ait au moins deux dans la section, sinon c’est une mauvaise utilisation.
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

Nous utilisons plusieurs formats en ligne pour améliorer la lisibilité et s’adapter à tous les niveaux techniques. Voici comment :

#### Texte en gras

Le gras sert à mettre en avant des infos importantes, par exemple :

- Changement de contexte entre étapes
- Noms d’hôtes, identifiants & noms d’utilisateur
- Termes clés

Utilisez deux astérisques autour du texte, ex. `**bonjour**` donne **bonjour**.

#### Italique

L’italique sert à introduire des mots techniques nouveaux, ex. : nous allons configurer un *reverse proxy* aujourd’hui.

Utilisez un astérisque autour du texte, ex. `*ZAP-Hosting - Plus de PUISSANCE !*` donne *ZAP-Hosting - Plus de PUISSANCE !*.

#### Code en ligne

Le code en ligne sert à afficher des infos techniques comme des URLs, noms de fichiers, commandes, ports, etc. Exemples :

- Noms et chemins de fichiers (ex. `C:/User/[your_name]/AppData....test.png`)
- URLs (ex. `https://zap-hosting.com`)
- Ports (ex. `:30120`)
- Commandes (ex. `ipconfig`)
- Requêtes SQL (ex. `SELECT * FROM servers`)
- Touches ou combinaisons (ex. `ENTER` ou `CTRL + C`)

#### Tableaux

Les tableaux sont utiles pour afficher beaucoup d’infos répétitives, par exemple commandes, descriptions et usages dans un jeu. Exemple :

```
| Commande    | Description             | Usage                |
| ----------- | ----------------------- | -------------------- |
| /help       | Envoie la commande aide | /help [catégorie]    |
| /stop       | Arrête le serveur       | /stop [true/false]   |
```

#### Blocs de code

Les blocs de code sont très utiles pour les guides avec commandes, scripts, sorties terminal, etc.

Pour créer un bloc, utilisez ` ``` ` avant et après le texte. Vous pouvez préciser la langue pour la coloration syntaxique, ex. ` ```js ` pour JavaScript.

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Utilisation des admonitions

Les admonitions servent à mettre en avant des infos importantes dans votre guide. Il y a cinq types, chacun avec un but différent.

Chaque admonition doit avoir un titre clair et descriptif pour que le lecteur comprenne immédiatement le contexte et l’importance sans lire tout le texte.

La syntaxe est la même pour tous, seul le mot-clé change selon le type :

```
:::warning Titre
	Votre contenu ici.
:::
```

#### Note

:::note Exemple : Information supplémentaire
Utilisez ce type pour des infos complémentaires qui peuvent aider le lecteur mais ne sont pas essentielles pour finir le guide.
:::

#### Astuce

:::tip Exemple : Astuce d’optimisation des performances
Utilisez ce type pour partager des conseils pratiques, bonnes pratiques ou améliorations d’efficacité basées sur l’expérience.
:::

#### Info

:::info Exemple : Exigence ou détail important
Utilisez ce type pour des infos contextuelles importantes que le lecteur doit connaître avant ou pendant le processus.
:::

#### Attention

:::caution Exemple : Risque de configuration
Utilisez ce type pour avertir le lecteur de problèmes ou erreurs possibles en suivant le guide.
:::

#### Danger

:::danger Exemple : Bug connu ou fonctionnalité obsolète
Utilisez ce type pour des avertissements critiques, bugs connus, actions irréversibles, risques de sécurité ou fonctionnalités dépréciées pouvant causer de graves problèmes.
:::

### Captures d’écran

Les captures d’écran sont super utiles pour guider visuellement les lecteurs et on recommande d’en utiliser quand c’est pertinent. Assurez-vous que tout le contenu visible sur vos captures soit en anglais, car notre documentation est en anglais et les mêmes captures seront utilisées pour les autres langues.

Les captures doivent être en haute résolution pour que tout soit lisible. Évitez les images trop petites ou trop recadrées.

Pour insérer une capture, utilisez cette syntaxe en remplaçant `your_url` par l’URL de l’image :

```
![](your_url)
```

Le mieux est d’utiliser un site comme Imgur pour héberger l’image, ou de la glisser directement dans le champ d’édition sur GitHub, ce qui la téléversera automatiquement.

## Terminologie

Dans notre documentation, certains termes clés sont utilisés fréquemment. Nous attendons que vous utilisiez l’anglais US localisé pour assurer la cohérence dans tous nos articles. Cette section vise à standardiser certains termes courants.

### Produits ZAP-Hosting

Quand vous mentionnez un produit ZAP-Hosting, assurez-vous d’utiliser le nom, l’orthographe et la capitalisation corrects. Vérifiez sur [le site ZAP-Hosting](https://zap-hosting.com) comment le produit est référencé sur la page produit correspondante.

### Attributs définis par l’utilisateur

Dans la plupart des guides, des options de configuration comme utilisateurs, noms d’hôtes, domaines, adresses IP et URLs doivent être personnalisées par le lecteur.

Par défaut, utilisez toujours `[your_attribute]` pour différencier les éléments statiques des éléments uniques, où `attribute` est remplacé par le type d’attribut. Par exemple, pour une IP, écrivez `[your_server_ip]` ou pour une URL `http://[your_server_ip]:30120`.

Cela montre clairement quels attributs le lecteur doit modifier selon sa configuration. Vous devez aussi expliquer ou noter quels attributs changer dès leur première mention pour que tout soit clair.

Utilisez `zaphosting` comme nom d’hôte, nom d’utilisateur ou nom de base de données par défaut.

### Logiciels

Quand vous mentionnez un logiciel dans vos guides, respectez l’orthographe et la capitalisation correctes du nom. Si le site officiel n’est pas cohérent, gardez la même capitalisation dans tout l’article pour la cohérence.

Vous devez créer un lien vers le site officiel du logiciel dès la première mention, si un site officiel existe.