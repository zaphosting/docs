---
id: contribution-guides
title: Processus des Guides
description: "Découvrez comment contribuer des guides précieux et originaux à ZAP-Docs et aider les utilisateurs avec un contenu clair et pratique → En savoir plus maintenant"
sidebar_label: Processus des Guides
---

![Bannière Guides](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Découvre ici le processus pour contribuer à nos ZAP-Docs. Le processus est présenté dans l’ordre chronologique sur cette page, donc on te recommande de commencer par ici.

## Étape 1 : Proposer du contenu

La première étape consiste à créer une issue de suggestion via notre dépôt GitHub. Tu dois nous fournir des détails sur les changements et améliorations que tu souhaites apporter.

Assure-toi que ton idée n’est pas un doublon d’un guide ou d’une suggestion existante et que tu es convaincu qu’elle sera utile aux débutants comme aux utilisateurs avancés. Tu peux consulter les suggestions existantes sur la [page Issues](https://github.com/zaphosting/docs/issues?q=is%3Aissue).

:::tip
On te conseille de jeter un œil à nos [Directives](contribution-guides-guidelines.md) pour comprendre le style de contenu et de documentation qu’on recherche.
:::

### Quels sujets recherchons-nous ?

Dans nos guides, on cherche une large gamme de guides pratiques et de qualité couvrant les produits, services et logiciels open-source disponibles via ZAP-Hosting ou liés à nos services. Si tu manques d’idées ou d’inspiration, explore nos pages ZAP-Docs pour te faire une idée de notre style d’écriture et du type de contenu publié.

Comme mentionné en intro, tout contenu doit être original pour respecter les lois sur le droit d’auteur. L’usage non autorisé d’outils IA/génératifs et/ou d’autres propriétés intellectuelles est strictement interdit. Nos guides visent à fournir des infos de qualité via une série d’étapes pour que le lecteur comprenne ce qu’il fait et comment le faire, avec pour but final de l’éduquer et lui fournir la solution.

#### Liste des guides recherchés

On a une liste utile de super suggestions ci-dessous, pour des nouveaux guides que tu pourrais vouloir écrire. Certains sujets peuvent même avoir un bonus de récompense. Tu peux accéder à la [liste manuellement ici](https://docs.google.com/document/d/13R321FP6Yo3TMQZ07vMARQFlX6n_Or6RIrLpU7IsMfs/edit?usp=sharing).

<iframe width="800" height="750" src="https://docs.google.com/document/d/e/2PACX-1vRACoNJMjk3rcWyo6LDt8WCvtqB17JpdjsPW3YHpLaZJgfPxGlt4pDEnD1ezOwGW1eljWZYPSyfgrb3/pub?embedded=true"></iframe>
<br></br>

:::note
Garde en tête que ce ne sont que des idées utiles, tu **n’es pas obligé** d’écrire strictement sur ces sujets, tes suggestions peuvent être créatives comme dit plus haut.
:::

### Soumettre une suggestion

Maintenant que tu es sûr que ta suggestion est adaptée à notre doc, rends-toi sur notre [dépôt GitHub ZAP Docs](https://github.com/zaphosting/docs) et ouvre une issue en utilisant le template **Contribution Suggestion**. Suis bien le template et remplis tous les détails nécessaires. Tu devras aussi confirmer que tu acceptes nos Conditions Générales du Programme de Contribution, disponibles ici : [Conditions de Contribution](contribution-terms.md).

:::caution
Assure-toi de bien renseigner ton ID ZAP pour recevoir ta récompense sur le bon compte !
:::

Après avoir soumis ta suggestion, on vise à te répondre sous 3-5 jours. Tu recevras une réponse directement dans ton issue GitHub.

:::tip
**Un souci ?** Rejoins notre [serveur Discord ZAP-Hosting](https://zap-hosting.com/discord), la communauté ZAP et nous serons ravis de t’aider. Sinon, contacte-nous via un [ticket sur notre site](https://zap-hosting.com/en/customer/support/) en mentionnant "Programme de Contribution - Guides" pour que ton message soit transmis à l’équipe Contributions ZAP-Hosting.
:::

Dans notre réponse, on te donnera des retours ou détails à ajuster sur ta suggestion. En cas de problème, on te contactera directement via ton issue GitHub.

## Étape 2 : Rédiger le guide

Quand tu ajoutes ou modifies du contenu dans notre doc, suis bien nos [Directives](contribution-guides-guidelines.md) pour garantir cohérence et qualité. Cette sous-section détaille les bonnes pratiques et le workflow optimal pour créer ou modifier du contenu. Si tu débutes avec GitHub, utilise les tutos rapides ci-dessous pour comprendre comment éditer ou créer du contenu facilement.

:::note
Assure-toi d’avoir créé une suggestion sur notre [dépôt GitHub](https://github.com/zaphosting/docs) et qu’elle a été validée par un membre de l’équipe Contributions ZAP avant de bosser sur un guide ou des modifs. On ne pourra pas garantir de récompense si tu n’as pas suivi ce process et que ce n’est pas validé.
:::

**Prérequis :**
- [Compte GitHub](https://github.com/)

La première étape est de créer ton propre fork du dépôt ZAP-Docs sur GitHub. Pour ça, rends-toi sur le [dépôt GitHub ZAP Docs](https://github.com/zaphosting/docs) et clique sur le bouton **Fork** en haut de la page.

![](https://screensaver01.zap-hosting.com/index.php/s/3AGoSTE7dGTsdz7/preview)

Nomme ton dépôt selon la suggestion acceptée et coche `Copy the master branch only`. Clique ensuite sur créer et attends quelques secondes que le fork soit prêt.

Avec ton fork prêt, tu peux passer à la section suivante pour compléter ta contribution. Il y a deux méthodes principales pour produire du contenu : directement via le site GitHub ou en clonant le dépôt localement. La première est plus simple et user-friendly, la seconde permet de tester Docusaurus en local pour voir les changements en direct.

:::tip
Pour les débutants ou ceux qui ne connaissent pas Git, on recommande la **Méthode 1** pour écrire ton contenu, c’est plus simple, rapide et tout se fait via navigateur sur GitHub. Pas besoin d’installer quoi que ce soit en local.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Méthodes pour créer des guides

<Tabs>
<TabItem value="direct" label="Méthode 1 : Directement via GitHub" default>

La façon la plus simple et recommandée de créer du contenu est via le site GitHub. Ici, on te montre comment créer un nouveau guide et modifier un guide existant via GitHub.

Commence par aller sur ton fork créé à l’étape précédente. Une fois sur ton fork ZAP Docs, tu peux accéder à tous les guides dans le dossier **docs**.

![](https://screensaver01.zap-hosting.com/index.php/s/dqptZFrSTrBBHAJ/preview)

Les fichiers docs suivent une convention simple : le premier mot indique le type de guide (jeu, produit ou section) et les mots suivants la section spécifique. On te conseille de jeter un œil à notre site [ZAP-Docs en ligne](https://zap-hosting.com/guides) pour trouver où ton guide devrait aller. Par exemple, `dedicated-windows.md` correspond à la section Serveur dédié, spécifiquement Windows.

Tu devras soit ouvrir un guide existant, soit en créer un nouveau selon que ta contribution soit une mise à jour ou un nouveau guide. Utilise l’onglet adapté ci-dessous pour les instructions, car un nouveau guide demande un peu plus de préparation.

<Tabs>
<TabItem value="direct_new" label="Créer un nouveau fichier guide" default>

Dans cet exemple, on veut créer un nouveau guide pour le jeu Rust, sur les commandes disponibles. En regardant le site ZAP-Docs et/ou le dépôt, on voit qu’une section **Rust** existe déjà dans la catégorie serveurs de jeux. Selon la convention de nommage et les guides existants, le nouveau guide s’appellera `rust-commands.md`.

Pour créer un nouveau fichier, va dans le [dépôt GitHub](https://github.com/zaphosting/docs), ouvre le dossier **docs** et à droite, clique sur **Add File**. Dans le menu, choisis **Create new file** qui ouvrira un nouvel onglet.

![](https://screensaver01.zap-hosting.com/index.php/s/xgL3QF9HzJnwARA/preview)

En haut, dans le chemin du fichier, donne-lui le nom. Ici, ce sera `rust-commands.md`.

:::info
N’oublie pas l’extension `.md` car tous les guides sont en Markdown.
:::

Ensuite, ajoute les métadonnées clés en début de fichier. Le plus simple est d’ouvrir un autre fichier comme `rust-plugins.md`, copier les métadonnées en haut, puis modifier chaque valeur pour ton nouveau guide. Le plus important est le champ `id` qui **doit** correspondre au nom du fichier (sans `.md`).

Dans notre exemple, ça donne :
```
---
id: rust-commands
title: "Rust : Commandes Admin"
description: "Infos sur les commandes Admin pour Rust chez ZAP-Hosting"
sidebar_label: Commandes Admin
services:
  - gameserver
---
```

:::note
On vérifie les métadonnées lors de la revue, donc pas de stress si tu galères, continue simplement.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/2CJFHoc5LeD4YSn/preview)

</TabItem>

<TabItem value="direct_existing" label="Modifier un fichier guide existant" default>

Ici, ouvre le fichier cible à modifier. Par exemple, `dedicated-linux-satisfactory.md` dans le dossier `/docs`. Une fois ouvert, tu verras un aperçu brut en Markdown.

En haut à droite, clique sur l’icône d’édition (stylo). Ça ouvrira un nouvel onglet pour modifier directement.

![](https://screensaver01.zap-hosting.com/index.php/s/SZTsAikipzCZcg3/preview)

</TabItem>
</Tabs>

#### Suite : Rédiger le contenu

Maintenant que ton fichier est prêt, écris le contenu validé dans ta suggestion. Pense à sauvegarder ou commit régulièrement pour ne pas perdre ton travail.

:::tip Garde ton travail en sécurité
Pendant que tu écris, commit ou copie souvent car l’éditeur GitHub n’a pas d’auto-save. Si tu fermes l’onglet ou autre, tu risques de perdre tout.

On recommande **fortement** d’utiliser l’outil Markdown **[StackEdit](https://stackedit.io/app#)** pour écrire ton contenu, tu peux sauvegarder localement et synchroniser avec ton drive ou comptes. Quand c’est fini, copie-colle dans GitHub et commit.
:::

Tu peux utiliser le bouton **Preview** en haut de l’éditeur pour voir un aperçu et revenir à l’édition avec **Edit**.

![](https://screensaver01.zap-hosting.com/index.php/s/4YcQo6q3iAAGYkZ/preview)

:::note Éléments Docusaurus
Certains éléments spécifiques Docusaurus comme les admonitions (`:::note`, `:::tip` etc.) ou les onglets ne s’affichent pas bien dans la preview GitHub car ce n’est pas du Markdown classique. Ils s’affichent bien en local et en production.
:::

:::info Suis nos Directives
Consulte les [Directives](contribution-guides-guidelines.md) pour tout ce qui concerne Markdown, structure, terminologie, etc.
:::

Quand tu as fini, clique sur **Commit changes...** qui ouvrira une fenêtre.

![](https://screensaver01.zap-hosting.com/index.php/s/2iQCZzzAHsHS2rt/preview)

Mets un message de commit clair expliquant ce que tu as fait, ajoute une description si besoin, puis commit. Ça enregistrera dans ton fork. Tu peux ensuite passer à la section **Soumettre le contenu** pour créer une Pull Request vers le dépôt principal ZAP-Docs.

</TabItem>

<TabItem value="local" label="Méthode 2 : En local via IDE (git clone)">

Tu préfères peut-être écrire en local via un IDE comme Visual Studio Code. Ici, on te montre comment créer ou modifier un guide localement.

**Prérequis :**
- IDE au choix, ici on prend [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/) (ou autre outil Git)

Commence par cloner ton fork. Le plus simple est GitHub Desktop : clique sur **Add**, puis **Clone repository** et choisis ton fork. Tu peux aussi faire ça via l’IDE si il gère Git.

![](https://screensaver01.zap-hosting.com/index.php/s/g8AwEcGa6mBrQ75/preview)

Ouvre ensuite le dossier du dépôt dans Visual Studio Code. Dans l’onglet **Explorer** à gauche, tu verras tous les dossiers.

Les fichiers docs suivent la même convention de nommage que précédemment. Consulte le site [ZAP-Docs](https://zap-hosting.com/guides) pour trouver la bonne section. Par exemple, `dedicated-windows.md` est pour Serveur dédié Windows.

Tu devras ouvrir un guide existant ou en créer un nouveau selon ta contribution. Utilise l’onglet adapté ci-dessous pour les instructions, car un nouveau guide demande un peu plus de préparation.

<Tabs>
<TabItem value="local_new" label="Créer un nouveau fichier guide" default>

Dans cet exemple, on crée un guide pour Rust sur les commandes. La section **Rust** existe déjà dans les serveurs de jeux. Le nouveau guide s’appellera `rust-commands.md`.

Ouvre le dossier `/docs` dans ton IDE et crée un nouveau fichier avec le nom adapté.

:::info
N’oublie pas l’extension `.md` car tous les guides sont en Markdown.
:::

Ajoute ensuite les métadonnées en début de fichier. Le plus simple est de copier celles d’un autre fichier comme `rust-plugins.md` et modifier les valeurs. Le champ `id` **doit** correspondre au nom du fichier (sans `.md`).

Exemple :
```
---
id: rust-commands
title: "Rust : Commandes Admin"
description: "Infos sur les commandes Admin pour Rust chez ZAP-Hosting"
sidebar_label: Commandes Admin
services:
  - gameserver
---
```

:::note
On vérifie les métadonnées lors de la revue, donc pas de stress si tu galères, continue simplement.
:::

Pour que ta page apparaisse dans la sidebar Docusaurus, ajoute-la dans le fichier `sidebar.js` à la bonne section. La section **Rust** existe déjà, cherche-la avec `CTRL+F` et tape rust.

Sous le dernier élément, ajoute une nouvelle ligne avec le nom de ton fichier, ici `rust-commands`. Si la section n’existe pas, crée-la en suivant le format des autres sections.

![](https://screensaver01.zap-hosting.com/index.php/s/TwKjWmCofG5Rs8f/preview)

:::note
N’oublie pas la virgule (`,`) sur la ligne avant ta nouvelle ligne pour que la syntaxe soit correcte.
:::

</TabItem>

<TabItem value="local_existing" label="Modifier un fichier guide existant" default>

Modifier un fichier existant est simple, pas besoin de configurer toute la structure.

Ouvre simplement le fichier guide cible dans `/docs` et fais les modifs validées dans ta suggestion.

</TabItem>
</Tabs>

#### Suite : Rédiger le contenu

Ton fichier est prêt, écris le contenu validé. Sauvegarde ou commit souvent pour ne rien perdre.

Utilise `CTRL+SHIFT+V` ou l’icône preview en haut à droite pour voir les changements Markdown en direct.

:::note Éléments Docusaurus
Certains éléments Docusaurus comme admonitions (`:::note`, `:::tip` etc.) ne s’affichent pas bien dans la preview GitHub car ce n’est pas du Markdown classique. Ils s’affichent bien en local et en production.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cXgQEswNsbpGMsR/preview)

:::info Suis nos Directives
Consulte les [Directives](contribution-guides-guidelines.md) pour tout ce qui concerne Markdown, structure, terminologie, etc.
:::

Quand tu as fini, pousse un commit sur ton fork et crée une Pull Request. Avec GitHub Desktop (ou autre), ajoute un titre et description, puis pousse via le bouton.

![](https://screensaver01.zap-hosting.com/index.php/s/tFdrLknnXn62sZc/preview)

Tu peux ensuite passer à la section **Soumettre le contenu** pour créer ta Pull Request vers le dépôt principal ZAP-Docs.

:::tip
On te conseille aussi de lire la section optionnelle **Tester la build en local**, tu peux combiner ça avec le travail local pour un workflow optimal avec mise à jour en direct. Mais ce n’est pas obligatoire.
:::

</TabItem>
</Tabs>

### Optionnel : Tester la build en local

Avant de créer la Pull Request finale, c’est une bonne pratique de builder et tester en local pour vérifier que tout fonctionne bien avec tes changements. On recommande de tester en local pour que ta PR soit traitée rapidement. Mais ce n’est pas obligatoire, tu peux passer à la section suivante si tu veux.

:::tip
Ce n’est **PAS** obligatoire, on lance automatiquement une build quand tu soumets une PR. Mais ça peut t’aider à débugger et tester en live localement.
:::

:::note
Si tu as suivi le tuto pour bosser en local, tu peux sauter la première étape de clonage car tu l’as déjà.
:::

**Prérequis :**
- [Node.js v16.14 ou plus](https://nodejs.org/en)
- [GitHub Desktop](https://desktop.github.com/) ou [Git](https://git-scm.com/)

Commence par cloner ton fork. Le plus simple est GitHub Desktop : clique sur **Add**, puis **Clone repository** et choisis ton fork.

Tu peux aussi utiliser Git en ligne de commande. Crée un dossier (ex : `Docs Test`), ouvre Git Bash dedans (clic droit > Git Bash sous Windows). Récupère l’URL de ton fork sur GitHub et lance :
```
git clone [ton_url]
```

Tu as maintenant le dépôt cloné localement. Ensuite, télécharge les modules nécessaires. Va dans le dossier du dépôt, clic droit > ouvrir un terminal (ou utilise la fenêtre Git). Lance :
```
npm install
```

Ça peut prendre un moment, mais ça créera un dossier `node_modules` dans ton dépôt. Si tu as des erreurs, c’est sûrement que Node.js n’est pas installé.

Enfin, lance le site de doc en local avec :
```
npm start
```

Une fois fini, une version locale du site s’ouvre automatiquement dans ton navigateur par défaut sur le port `3000`. Cette version est identique à la prod, tu peux tout tester !

Quand tu es satisfait, passe à la section suivante pour créer ta Pull Request vers le dépôt principal.

## Étape 3 : Soumettre le contenu

Quand tu as fait tes contributions, que tu penses qu’elles respectent bien nos directives et sont top qualité, crée une Pull Request. Va sur ton fork du dépôt ZAP Docs, clique sur **Contribute** sous les boutons principaux et ouvre une PR.

![](https://screensaver01.zap-hosting.com/index.php/s/GLjSno3Ltz3zFpZ/preview)

Une nouvelle page s’ouvre avec les changements que tu as faits. Par défaut, la description contient une checklist pour vérifier que tout est ok. Tu peux supprimer ce template après l’avoir lu.

Mets un titre clair qui explique ce que tu as fait. Dans la description, mentionne ou lie ta suggestion avec `#000` suivi de l’ID de la suggestion. Si tu ne la trouves pas dans le menu, va sur le dépôt principal [ZAP Docs GitHub](https://github.com/zaphosting/docs), dans la section issues, et cherche ta suggestion avec son ID.

Quand titre, description et changements sont prêts, crée ta PR avec le bouton pour la soumettre.

![](https://screensaver01.zap-hosting.com/index.php/s/mrGm5f2WMttYzFT/preview)

Notre système vérifie que tes changements passent des contrôles de syntaxe et qualité. Si tout est ok, l’équipe ZAP-Docs reviewera ta PR sous quelques jours.

Pendant la revue, on peut te demander des modifs ou en faire nous-mêmes si besoin. Une fois les changements faits, on approuve ta PR pour publication.

## Étape 4 : Publication des changements & paiement de la récompense

Quand ta PR est acceptée après les éventuelles modifs, on te répondra sur ta PR avec les infos clés. Ça inclut la publication de ton guide et le paiement de ta récompense pour ta contribution réussie.

:::info
La récompense dépend de plusieurs critères, surtout la qualité et l’ampleur du contenu, ainsi que d’autres critères évalués par l’équipe Contributions ZAP. Plus d’infos dans notre [page Récompenses](contribution-rewards.md).
:::

Félicitations pour ta contribution aux Guides ZAP-Hosting ! On apprécie vraiment toutes tes contributions ! 💚