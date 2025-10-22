---
id: webspace-wordpress-migration
title: "Hébergement web : Migrer votre site WordPress vers ZAP-Hosting"
description: "Découvrez comment migrer facilement votre site WordPress vers l’hébergement web ZAP-Hosting et boostez votre présence en ligne → En savoir plus maintenant"
sidebar_label: Migration
services:
  - webspace
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous êtes intéressé par nos offres puissantes d’hébergement web et vous souhaitez passer chez nous ? Ne cherchez plus ! Dans ce guide, on va voir comment migrer votre site WordPress vers votre produit Hébergement Web ZAP-Hosting grâce à un plugin WordPress.

<InlineVoucher />

## Préparation

Avant de continuer, assurez-vous d’avoir préparé les éléments suivants :
- Un domaine, avec un accès admin pour gérer les paramètres DNS.
- Un accès admin à votre ancienne instance WordPress.
- Posséder un produit [Hébergement Web](https://zap-hosting.com/en/shop/product/webspace/) chez nous.

## Étape 1 : Préparer l’hébergement web

Commencez par visiter notre page produit [Hébergement Web](https://zap-hosting.com/en/shop/product/webspace/) et achetez le plan d’hébergement web adapté aux besoins de votre site. Une fois le produit configuré, vous devrez installer WordPress dessus. Pour ça, consultez notre [guide d’installation](webspace-wordpress.md) dédié avec toutes les instructions.

Avec WordPress installé sur l’hébergement web, il faudra ensuite lier votre domaine à celui-ci. Là encore, suivez notre guide dédié [Ajouter un domaine](webspace-adddomain.md) pour faire ça correctement.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa3mmmQtTybNgGj/preview)


## Étape 2 : Installer le plugin Migrate Guru

Pour automatiser la migration, vous allez utiliser le plugin WordPress **Migrate Guru**, qui est gratuit et très populaire. Il faudra l’installer sur vos anciennes et nouvelles instances WordPress.

:::tip Connexion au panneau admin
Pour vous connecter en admin sur un site WordPress, ouvrez votre navigateur et allez sur votre site. Ajoutez `/wp-admin` à la fin de l’URL (ex. `[votre_site].com/wp-admin`) et lancez la recherche. Vous arriverez sur la page de connexion admin WordPress où vous devrez entrer vos identifiants du panneau admin WordPress de votre ancien hébergement.

![](https://screensaver01.zap-hosting.com/index.php/s/zwzRyGJwEJMNPGQ/preview)
:::

Dans votre panneau WordPress, allez dans la catégorie **Extensions** à gauche. Cliquez sur **Ajouter** puis tapez **Migrate Guru** dans la barre de recherche.

Quand le plugin apparaît, cliquez sur **Installer** puis **Activer**. Faites ça sur les deux instances WordPress, ancienne et nouvelle, avant de continuer.

Une fois activé, une fenêtre vous demandera votre adresse email et d’accepter les conditions d’utilisation, remplissez ça.

![](https://screensaver01.zap-hosting.com/index.php/s/SXYGfpWJTwNyYjJ/preview)

## Étape 3 : Récupérer la clé de migration

Avec Migrate Guru installé sur les deux instances, vous devez récupérer la **clé de migration** sur votre nouvelle instance WordPress ZAP-Hosting.

Pour ça, allez dans la section **Migrate Guru** à gauche dans votre panneau WordPress. Copiez cette clé, elle sera nécessaire à l’étape suivante.

![](https://screensaver01.zap-hosting.com/index.php/s/g3X9fMrqoWyfwtN/preview)

:::tip Préparez une sauvegarde
Par précaution, on vous conseille de faire une sauvegarde de votre ancienne instance WordPress avant de lancer la migration via le plugin. Ce processus ne cause pas de perte de données, mais c’est toujours mieux d’être safe avec une sauvegarde sous la main.
:::

## Étape 4 : Lancer la migration

Retournez dans le panneau admin de votre **ancienne** instance WordPress. Dans la section **Migrate Guru**, cliquez sur le bouton **Migrate** puis choisissez **Other Hosts** dans la liste.

![](https://screensaver01.zap-hosting.com/index.php/s/x6ctdxnL2mdpTt5/preview)

Collez la clé de migration Migrate Guru que vous venez de copier depuis votre nouvelle instance WordPress ZAP-Hosting, puis cliquez sur **Migrate** pour lancer la migration.

:::warning
Assurez-vous de copier la clé de migration depuis votre panneau admin WordPress **nouveau** ZAP-Hosting, et de la coller dans votre panneau admin WordPress **ancien**. Si vous faites l’inverse, vous risquez d’effacer des données.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/7nEr2L48PKCDXrj/preview)

Après avoir cliqué sur **Migrate**, la migration démarre instantanément après quelques vérifications.

La migration se fait en arrière-plan sans interruption de service et devrait se terminer en quelques minutes. Soyez patient, ça dépend de la taille de votre site. Une fois fini, vous verrez un écran de succès.

![](https://screensaver01.zap-hosting.com/index.php/s/YHSAwLkCjWBHsHT/preview)

:::tip
On vous conseille de bien tester votre site sur la nouvelle instance WordPress pour vérifier que la migration s’est bien passée.
:::

## Étape 5 : Mettre à jour les paramètres DNS du domaine

Une fois la migration terminée, la dernière étape est de mettre à jour les paramètres DNS de votre domaine pour le configurer avec la nouvelle instance Hébergement Web. Vous devez modifier les paramètres DNS de votre domaine et le pointer vers l’adresse IP de l’hébergement web ZAP-Hosting pour que votre site WordPress soit servi depuis nos serveurs.

Pour récupérer l’adresse IP de l’hébergement web, connectez-vous à l’interface web de votre serveur sur le site ZAP-Hosting, puis allez dans la section **DNS**. Vous y trouverez l’adresse IP de votre hébergement web.

![](https://screensaver01.zap-hosting.com/index.php/s/pd8iQdXsd8Kaobd/preview)

Maintenant que vous avez l’adresse IP, si votre domaine n’est pas sur votre compte ZAP-Hosting, connectez-vous sur le site de votre fournisseur de domaine.

Trouvez la section **Paramètres DNS** ou équivalent chez votre fournisseur externe. Remplacez tous les **enregistrements A** qui pointent vers votre ancien hébergement par l’adresse IP de votre hébergement web ZAP.

Faites ça pour tous les enregistrements A encore liés à votre ancienne instance. Une fois fait, votre domaine sera prêt à fonctionner avec votre site WordPress hébergé chez ZAP-Hosting.

:::info
Notez que les modifications DNS peuvent prendre jusqu’à 24h pour se propager. En général c’est rapide, mais parfois ça peut prendre plus de temps.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/P93CG3MLJc2DL3i/preview)

## Étape 6 : Configurer le certificat SSL

Pour finir, on vous recommande de configurer un nouveau certificat SSL pour votre nouveau site sur votre Hébergement Web ZAP-Hosting. Par défaut, quand un domaine est ajouté via l’hébergement web, il reste non chiffré.

Consultez notre guide dédié [Créer un certificat SSL](webspace-plesk-ssl.md) pour savoir comment faire.

## Conclusion

En suivant ce guide, vous avez normalement migré avec succès votre ancienne instance WordPress vers votre nouvel Hébergement Web ZAP-Hosting. On vous conseille de tout tester à fond pour être sûr que la migration a bien transféré toutes vos données.

<InlineVoucher />