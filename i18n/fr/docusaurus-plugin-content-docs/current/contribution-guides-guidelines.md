---
id: contribution-guides-guidelines
title: Guide de bonnes pratiques
description: "Découvre comment créer une documentation cohérente et de haute qualité qui améliore l'expérience et la clarté pour les lecteurs → En savoir plus maintenant"
sidebar_label: Bonnes pratiques
---

![Bannière Guides](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Pour garantir que le contenu de nos ZAP-Docs reste toujours cohérent en termes de qualité et de style, nous avons créé une série de bonnes pratiques à suivre lors de la création ou de la modification de contenu pour notre documentation. Tu **dois** suivre ces bonnes pratiques à la lettre pour que ta suggestion et ta pull request finale soient traitées rapidement. Plus important encore, cela garantit que nos lecteurs bénéficient d’une expérience de lecture plus fluide et de qualité constante lorsqu’ils suivent les guides.

Nos bonnes pratiques pour la contribution aux guides sont divisées en sections suivantes :

- Structure
- Style
- Mise en forme
- Terminologie

On te recommande de parcourir ces sections au moins une fois avant de commencer à écrire du contenu. C’est aussi un bon point de référence si tu as un doute sur la manière d’aborder un sujet pendant la création.

## Structure

Tous nos guides dans les ZAP-Docs suivent une structure assez cohérente qui commence par une courte introduction avec les prérequis ou étapes de préparation, suivie du contenu principal et d’une courte conclusion.

La structure peut être modifiée occasionnellement selon le type de guide produit. Cela peut être discuté avec l’équipe ZAP-Docs lors de ta suggestion initiale. Tu peux voir comment utiliser les titres via la section headers, cela se fait avec le Markdown classique.

La structure que nous attendons généralement comporte les titres suivants :

- **Titre de la page** (H1) - Défini via la métadonnée `title` en haut de la page.
- **Introduction** (H2) - 1 à 2 phrases courtes qui expliquent le sujet du guide et surtout ce que le guide vise à accomplir.
- **Préparation** (H2) - Ce titre est **optionnel**. Il est nécessaire uniquement s’il y a des prérequis ou étapes de préparation à faire avant que le lecteur puisse suivre le guide. Par exemple, tu peux référencer notre guide [Accès SSH initial](vserver-linux-ssh.md) si l’utilisateur doit d’abord se connecter à son serveur. Ou tu peux présenter les exigences logicielles et/ou matérielles. Ou encore donner des instructions rapides pour préparer un logiciel, comme un pare-feu. On recommande de parcourir notre [site ZAP-Docs](https://zap-hosting.com/guides) pour voir s’il existe déjà un guide couvrant ces étapes et, si oui, de faire un lien vers lui.
- **Sujet principal** (H2) - C’est ta première section principale du guide. Souvent, ce sera **Installation**, suivie de sous-sections pour chaque étape du processus. Mais ce n’est pas toujours le cas, par exemple les guides informatifs peuvent avoir un sujet principal différent.
- Optionnel : **Sous-sujet 1** (H3)
- Optionnel : **Sous-sujet 2** (H3)
- ...
- Optionnel : **Un autre sujet** (H2)
- **Conclusion** (H2) - En conclusion, tu dois clôturer le guide en 1 à 3 phrases expliquant ce que le lecteur a réussi à accomplir et fournir un lien vers notre équipe Support si le lecteur rencontre encore des problèmes.

:::info Utilisation des sous-titres (H3 & H4)
Tu es encouragé à utiliser des titres H3 pour créer des sous-sections dans les sections principales H2 afin d’organiser davantage les gros blocs de contenu. Un exemple est visible dans la section **Sujet principal** ci-dessus.

Tu peux aussi utiliser des titres H4. Ils sont utiles si tu souhaites créer une sous-section supplémentaire sans l’afficher dans la table des matières à droite. Ils servent aussi à diviser une section H3 en parties encore plus petites.

Si tu utilises des sous-titres, il est généralement logique d’en avoir au moins deux ou plus dans la section parente, sinon ça n’a pas vraiment de sens d’avoir un seul sous-titre dans une section principale.
:::

À l’avenir, nous ajouterons des templates avec du Markdown pré-préparé, ce qui sera un bon point de départ pour créer de nouvelles pages. Cela arrivera bientôt.

### Titres

Les titres de ton guide doivent être courts et basés sur l’objectif global du guide que tu as écrit. Réfléchis bien à ce que le lecteur va accomplir à la fin du guide, par exemple installer un logiciel ou fournir des infos sur un sujet précis.

Le titre doit être préfixé par la catégorie produit à laquelle le guide se rapporte, et c’est aussi là que tu dois placer le guide dans la barre latérale. Tu peux facilement vérifier d’autres guides dans la même section pour voir leur préfixe.

Un exemple de bon titre pour un guide lié au produit VPS serait : `VPS : Configuration SteamCMD Linux`

### Introduction

L’introduction de ton guide doit être relativement courte et directe, généralement 1 à 2 phrases. Dans ce contenu, tu dois décrire brièvement le sujet et surtout expliquer ce que le guide va présenter au lecteur, en lui indiquant l’objectif final.

Un exemple d’introduction idéale pour un guide sur SteamCMD serait :

- **1ère phrase** : SteamCMD est un outil essentiel nécessaire pour installer des serveurs dédiés pour une grande variété de jeux comme Palworld, Enshrouded et plus encore.
- **2ème phrase** : Dans ce guide, nous allons explorer le processus d’installation initiale de SteamCMD sur ton serveur Linux. Nous utiliserons Ubuntu dans les exemples, mais le processus est similaire pour d’autres distributions.

Comme dans l’exemple, cela résume brièvement les sujets pertinents du guide et présente l’objectif global pour le lecteur.

### Préparation

La section préparation est utile pour clarifier les prérequis nécessaires que le lecteur doit remplir avant de pouvoir suivre le guide. Cela peut être des exigences logicielles ou matérielles, des instructions pour préparer un logiciel comme un pare-feu, ou simplement guider l’utilisateur pour se connecter à son serveur via SSH ou RDP.

On recommande fortement de parcourir notre [site ZAP-Docs](https://zap-hosting.com/guides) pour chercher des guides qui couvrent ou sont liés aux étapes de préparation que tu souhaites inclure. S’il existe un guide sur un sujet, par exemple [Accès SSH initial](vserver-linux-ssh.md), tu dois faire un lien vers ce guide et informer le lecteur de le suivre avant de continuer.

Les prérequis courants pour les guides incluent :

- Logiciels requis (ex : Git, Node.js, Python, Docker)
- Tutoriels pour aider le lecteur à acquérir des connaissances de base (ex : une autre page ZAP-Docs)
- Comptes utilisateurs comme des API
- Paramètres requis (ex : DNS/SSL)

Un exemple pour un guide Reverse Proxy serait :
```
Pour configurer un reverse proxy, tu auras besoin d’un serveur Linux pour héberger ton proxy et tu dois pouvoir t’y connecter. Utilise notre guide [Accès SSH initial](vserver-linux-ssh.md) si tu as besoin d’aide pour cela. Tu devras aussi avoir accès à un domaine que tu possèdes. Pour chaque sous-domaine que tu souhaites utiliser, tu dois créer un enregistrement DNS `A` pointant vers l’adresse IP de ton serveur Linux.
```

### Sujet principal

C’est le moment d’écrire la partie principale de ton guide. Tu peux utiliser librement les titres H2, H3 et H4 pour structurer correctement ton guide. Il est logique d’utiliser les H2 pour les grandes sections et de les découper en sous-sections avec H3 et/ou H4.

Dans beaucoup de cas, surtout pour les guides qui couvrent l’installation d’un logiciel, tu utiliseras un titre **Installation** divisé en plusieurs sous-sections H3. Si tu as du mal à trouver une structure correcte, pas de stress, on travaillera avec toi pendant la phase de suggestion pour planifier une structure bien équilibrée.

Dans chaque section, il est conseillé d’ajouter des phrases d’introduction et de conclusion pour indiquer au lecteur ce qu’il vient de faire et ce qu’il va faire ensuite. Bien sûr, la dernière section principale n’a pas forcément besoin d’une phrase de conclusion, car elle mène naturellement à la conclusion finale.

Exemples de phrases de transition :

- **Phrase d’entrée** : Dans cette section, tu vas configurer le logiciel selon tes préférences.
- **Phrase de clôture** : Une fois la configuration terminée et le fichier sauvegardé, passe à la section suivante pour créer le compte administrateur et commencer à utiliser le logiciel.

Ces phrases de transition donnent un contexte important au lecteur et assurent une bonne fluidité du guide. N’oublie pas d’utiliser la deuxième personne (ex : « Tu vas créer ») plutôt que la première personne quand tu écris ton contenu et tes transitions.

### Conclusion

Enfin, la dernière section est la conclusion du guide. Elle doit clôturer le guide en 1 à 3 phrases expliquant ce que le lecteur a réussi à accomplir et fournir des références pour approfondir ou suivre d’autres guides liés au sujet.

Ce serait top de faire un lien vers d’autres guides ZAP-Docs existants, surtout s’ils suivent naturellement ton guide. On recommande aussi de fournir un lien vers notre équipe Support si le lecteur rencontre encore des difficultés.

Un exemple de bonne conclusion est :
```
Tu as maintenant configuré avec succès le logiciel sur ton serveur Linux ! On te recommande de parcourir nos guides Linux Service dans cette section pour installer d’autres services.

Pour toute question ou assistance, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂
```

## Style

Le style d’écriture des docs ZAP-Hosting vise à produire des guides de haute qualité, pratiques et accessibles, couvrant un large éventail de sujets et aidant les lecteurs de tous niveaux.

### Technique & précis

Nos articles doivent être techniquement précis et à jour avec les dernières infos du secteur. On attend des articles qu’ils permettent non seulement à l’utilisateur d’atteindre l’objectif final (apprendre, construire ou configurer quelque chose), mais aussi de comprendre ce qu’il a fait tout au long de l’article. Chaque étape doit avoir un but clair et une explication, avec des options ou flags supplémentaires quand c’est pertinent. Tu dois toujours tenir le lecteur informé de ce qu’il fait et pourquoi.

Les rédacteurs doivent toujours relire et tester leurs guides pour s’assurer que tout est techniquement correct et fonctionne comme prévu avant de soumettre une pull request. L’équipe docs ZAP-Hosting lira et testera ton guide si besoin pour garantir cohérence et exactitude, ou discutera des améliorations si une erreur est détectée.

:::tip
On recommande toujours à nos rédacteurs de passer leur contenu dans un correcteur orthographique pour vérifier l’orthographe et la grammaire avant de créer une pull request. Un site utile pour ça est : https://languagetool.org/
:::

### Pratique & utile

Quand un lecteur termine un article, il doit avoir appris, construit ou configuré quelque chose de A à Z. Nos guides visent à aider tous les niveaux, donc ta contribution doit couvrir le sujet en profondeur, en mentionnant tous les détails nécessaires, y compris les prérequis. Tu ne dois envoyer vers des sites externes que s’il n’existe pas de documentation équivalente dans les ZAP-Docs ou si c’est pour que l’utilisateur puisse approfondir des détails non essentiels mais utiles pour sa culture technique. Les liens externes ne doivent pas pointer vers la doc d’un concurrent.

### Sympa, formel & complet

On veut que notre doc soit moderne et accessible pour tous, tout en restant formelle. Le ton doit être acceptable pour tous les lecteurs, quel que soit leur niveau ou leur langue maternelle.

Comme ces guides visent à aider le lecteur à apprendre et atteindre un résultat, on attend des rédacteurs qu’ils utilisent la deuxième personne (ex : « Tu dois… ») plutôt que la première personne (ex : « Je pense… ») pour garder le lecteur engagé et centré sur lui.

Enfin, tous les rédacteurs doivent respecter notre code de conduite pour que nos guides soient inclusifs, sans discrimination d’âge, origine, genre, expérience, nationalité, religion, orientation politique, sexuelle, statut socio-économique ou choix technologiques. Évite tout langage ou contenu potentiellement offensant ou sensible.

## Mise en forme

Notre documentation est formatée en Markdown, un langage simple et largement utilisé. Parcours les sections ci-dessous pour comprendre ce qu’on utilise et comment.

:::tip
Pour plus d’exemples et d’explications détaillées sur Markdown, va voir [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) qui donne plein d’infos.
:::

### Titres

Les titres sont essentiels pour séparer les pages de façon claire et logique. Le titre principal est en H1, mais tu ne dois jamais l’utiliser dans le texte. Il est défini via la métadonnée `title` en haut du fichier.

Dans nos guides, les titres H2 divisent le guide en sections principales. Ensuite, les H3 divisent ces sections en sous-sections. Par exemple, pour découper une section principale en plusieurs étapes. Il y a aussi le H4, plus rare, qui sert à diviser encore plus sans apparaître dans la structure du guide.

:::info
Si tu utilises des sous-titres (ex : H3 sous H2), assure-toi qu’il y en a au moins deux dans la section, sinon c’est une mauvaise utilisation.
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

On utilise plusieurs formats en ligne pour améliorer la lisibilité et s’adapter à tous les niveaux techniques. Voici comment on les utilise.

#### Texte en gras

Le gras sert à mettre en avant des infos importantes, par exemple :

- Changement de contexte entre étapes
- Noms d’hôtes, identifiants & noms d’utilisateur
- Termes clés

Tu peux faire du gras avec deux astérisques autour du texte, ex : `**hello there**` donne **hello there**.

#### Italique

L’italique sert surtout à introduire des mots techniques nouveaux dans ton article. Par exemple, on va configurer un *reverse proxy* aujourd’hui.

Pour faire de l’italique, mets un astérisque autour du texte, ex : `*ZAP-Hosting - More POWER!*` donne *ZAP-Hosting - More Power!*.

#### Code en ligne

Le code en ligne sert à afficher des infos techniques comme des URLs. Exemples :

- Noms et chemins de fichiers (ex : `C:/User/[your_name]/AppData....test.png`)
- URLs (ex : `https://zap-hosting.com`)
- Ports (ex : `:30120`)
- Commandes (ex : `ipconfig`)
- Requêtes SQL (ex : `SELECT * FROM servers`)
- Touches ou combinaisons (ex : `ENTER` ou `CTRL + C`)

#### Tableaux

Les tableaux sont utiles pour afficher beaucoup d’infos répétitives, par exemple commandes, descriptions et usages dans un jeu. Exemple :

```
| Commande    | Description              | Usage                 |
| ----------- | ------------------------ | --------------------- |
| /help       | Envoie la commande aide  | /help [catégorie]     |
| /stop       | Arrête le serveur        | /stop [true/false]    |
```

#### Blocs de code

Les blocs de code sont très utiles pour les guides avec commandes, scripts, sorties terminal, etc.

Pour un bloc de code, entoure le texte avec trois backticks `` ``` ``. Tu peux aussi préciser la langue pour la coloration syntaxique, ex :

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Utilisation des admonitions

Tu peux utiliser des admonitions pour mettre en avant certaines infos sous 5 labels possibles, expliqués ci-dessous.

La syntaxe est la même, il suffit de remplacer le mot-clé par le type voulu. Exemple :

```
:::note
Ceci est une note ! Change le mot-clé pour changer le type.
:::
```

#### Note

:::note Titre de la note ! (Optionnel)
Utilise ce tag pour afficher des notes supplémentaires utiles mais pas cruciales.
:::

#### Astuce

:::tip Titre de l’astuce ! (Optionnel)
Place ici des conseils tirés de ton expérience.
:::

#### Info

:::info Titre info ! (Optionnel)
Si une info importante doit être connue, mets-la ici.
:::

#### Attention

:::caution Titre attention ! (Optionnel)
Si quelque chose dans ton guide nécessite une mise en garde, utilise ce tag.
:::

#### Danger

:::danger Titre danger ! (Optionnel)
Utilise ce tag pour signaler des bugs connus ou des fonctionnalités obsolètes.
:::

### Captures d’écran

Les captures d’écran sont super utiles pour guider visuellement les lecteurs, on recommande d’en mettre quand c’est pertinent. Assure-toi que tout ce qui est visible sur les captures est en anglais, car notre doc est en anglais et les mêmes captures seront utilisées pour les autres langues. Les captures doivent être en haute résolution pour que tout soit lisible. Évite les images petites ou trop recadrées.

Pour insérer une capture, utilise cette syntaxe en remplaçant `your_url` par l’URL de l’image :

```
![](your_url)
```

Le mieux est d’utiliser un site comme Imgur pour héberger l’image, ou tu peux aussi la glisser directement dans le champ d’édition sur GitHub, ce qui la téléversera automatiquement.

## Terminologie

Dans notre doc, on utilise beaucoup de termes clés. On attend que tu utilises l’anglais US pour l’orthographe afin d’assurer la cohérence. Ici, on standardise certains termes courants.

### Produits ZAP-Hosting

Quand tu parles d’un produit ZAP-Hosting, assure-toi d’utiliser le nom, l’orthographe et la capitalisation corrects. Tu peux vérifier sur [le site ZAP-Hosting](https://zap-hosting.com) comment le produit est référencé.

### Attributs définis par l’utilisateur

Dans la plupart des guides, tu devras mentionner des options de config comme utilisateurs, noms d’hôtes, domaines, adresses IP et URLs, où le lecteur doit remplacer par ses propres infos.

Par défaut, utilise toujours `[your_attribute]` pour différencier les éléments statiques des éléments uniques, où `attribute` est remplacé par le type d’attribut. Par exemple, pour une IP, écris `[your_server_ip]` dans ton guide, ou pour une URL `http://[your_server_ip]:30120`. Ça montre clairement ce que le lecteur doit modifier selon sa config. Explique ou note quels attributs doivent être changés dès la première mention pour que ce soit clair.

Utilise `zaphosting` comme nom d’hôte, nom d’utilisateur ou nom de base de données par défaut.

### Logiciels

Quand tu mentionnes un logiciel dans tes guides, assure-toi de respecter l’orthographe et la capitalisation correctes du nom. Si le site officiel du logiciel n’est pas cohérent, garde la même capitalisation dans tout l’article pour la cohérence.

Tu dois faire un lien vers le site officiel du logiciel dès la première mention, si un site officiel existe.