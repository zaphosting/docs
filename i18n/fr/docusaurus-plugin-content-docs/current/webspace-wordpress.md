---
id: webspace-wordpress
title: "Hébergement web : Installer WordPress"
description: "Découvre comment configurer WordPress sur ton hébergement web pour créer et gérer ton site efficacement → En savoir plus maintenant"
sidebar_label: Installer
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

WordPress est le système de gestion de contenu gratuit le plus utilisé dans le monde. Il a été programmé à partir de 2003 par Matthew Mullenweg comme logiciel pour weblogs et continue d’être développé en tant que projet open source. Dans ce guide, on t’explique comment installer ce logiciel sur notre produit d’hébergement web. 

![](https://screensaver01.zap-hosting.com/index.php/s/j3Ctfont64EnpcH/preview)

<InlineVoucher />

## Préparation

Avant de pouvoir lancer l’installation de WordPress, il faut faire quelques préparatifs. Ça inclut récupérer le logiciel, configurer la base de données à utiliser et le serveur mail (adresse e-mail).



**Logiciel**

Le logiciel peut être téléchargé depuis le site officiel de WordPress. Le lien de téléchargement est ici : [Télécharger WordPress](https://en.wordpress.org/download/)

![](https://screensaver01.zap-hosting.com/index.php/s/69YD2QWG8iHzzaa/preview)

Le téléchargement contient un fichier zip compressé, qu’il faut décompresser sur ton ordinateur local. À l’intérieur, tu trouveras un dossier nommé **wordpress**. Son contenu est nécessaire et doit être uploadé soit via **FTP ou le gestionnaire de fichiers**. Dans cet exemple, la config est montrée avec FTP. Tu peux créer un utilisateur FTP sous **Sites & Domaines** dans **Accès FTP**.



![](https://screensaver01.zap-hosting.com/index.php/s/nkKsBpyb6GM6Rkp/download/chrome_7Y5hmuXn5f.gif)



Maintenant, connecte-toi à l’hébergement web avec le compte FTP créé. Là, navigue dans le répertoire **httpdocs** et upload les fichiers du logiciel.



![](https://screensaver01.zap-hosting.com/index.php/s/c9JSb9XEjfwGwwQ/preview)



**Base de données**

Ensuite, il faut créer la base de données qui servira à stocker toutes les infos du site. Pour ça, clique à nouveau sur **Sites & Domaines** puis sur **Bases de données**. Clique ensuite sur Ajouter une base de données et crée-la :  



![](https://screensaver01.zap-hosting.com/index.php/s/99BJeGCHjS9QHkz/download/chrome_Jzw3adOg7G.gif)



Clique sur **OK** et la base sera créée.



**Serveur mail (adresse e-mail)**

Pour enregistrer un compte sur le forum, un serveur mail avec une adresse e-mail est nécessaire, afin que les mails d’inscription puissent être envoyés aux utilisateurs. Les instructions pour configurer une telle adresse e-mail sont ici : [Envoyer des e-mails](webspace-plesk-sendmail.md)



## Installation

Si toutes les étapes de préparation sont faites, tu peux lancer l’installation de WordPress. Pour ça, il faut maintenant appeler le site dans ton navigateur. Ça devrait ressembler à ça : 

![](https://screensaver01.zap-hosting.com/index.php/s/8AcGsKyHpsSgKxL/preview)



Une fois là, clique sur **C’est parti !** pour démarrer l’installation. La première étape est de configurer la base de données, qui a déjà été créée pendant la préparation. Les infos de la base créée doivent maintenant être saisies.



![](https://screensaver01.zap-hosting.com/index.php/s/9jnjxz8B9TaeZSD/preview)



Clique sur **Envoyer** puis à l’étape suivante sur **Lancer l’installation**. 



![](https://screensaver01.zap-hosting.com/index.php/s/ZLZdC5NeWDoQBkr/preview)



WordPress a maintenant besoin de quelques infos supplémentaires. Tu peux définir le titre du site, le nom d’utilisateur, le mot de passe et l’adresse e-mail.



![](https://screensaver01.zap-hosting.com/index.php/s/WzckYZ47QJLd7yM/preview)



Une fois tous les champs remplis, clique sur **Installer WordPress**. L’installation sera terminée en quelques secondes et la fenêtre de connexion devrait apparaître. Tu peux alors te connecter avec ton compte créé. Après ça, tu peux configurer ton WordPress comme tu veux !

![](https://screensaver01.zap-hosting.com/index.php/s/MnLRYMDJCXjJJ8i/download/chrome_4KNjihGpo0.gif)



## Conclusion

Félicitations, tu as installé WordPress sur ton hébergement web. Si tu as d’autres questions ou problèmes, contacte notre équipe support, dispo tous les jours pour t’aider !

<InlineVoucher />