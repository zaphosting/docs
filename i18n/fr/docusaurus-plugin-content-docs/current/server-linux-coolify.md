---
id: server-linux-coolify
title: "Installer Coolify sur un serveur Linux - Applications Cloud auto-hébergées"
description: "Découvrez comment installer et configurer Coolify pour auto-héberger facilement vos propres applications, bases de données et services → En savoir plus maintenant"
sidebar_label: Installer Coolify
services:
  - vserver-service-coolify
  - dedicated-service-coolify
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

[Coolify](https://coolify.io/) est une alternative open-source auto-hébergée à Heroku et Vercel qui vous permet de gérer facilement vos serveurs, applications et bases de données.

![img](https://screensaver01.zap-hosting.com/index.php/s/nrXeZsgjXn43sfw/preview)

Le tableau de bord intuitif de Coolify rend l’auto-hébergement simple. Il vous donne un contrôle total sur votre infrastructure, des déploiements GitHub automatisés, et maintient vos coûts cloud bas.

Dans ce guide, nous vous accompagnons étape par étape pour l’installer, préconfigurer votre compte admin, et configurer tout ce que vous devez savoir.

<InlineVoucher />

## Cas d’usage de Coolify

Coolify peut être utilisé dans plein de scénarios du quotidien et convient à tous ceux qui veulent automatiser le déploiement d’applications, héberger des bases de données, ou faire tourner des workers en arrière-plan. Coolify est parfait aussi bien pour les débutants que pour les pros.

Coolify supporte nativement le déploiement de sites statiques, Node.js, Python, PHP, Rust, et des conteneurs Docker. Il propose des templates populaires en un clic comme WordPress, Ghost, Grafana, Appwrite, Nextcloud, et des bases PostgreSQL. Il gère automatiquement les certificats SSL Let's Encrypt et le routage reverse proxy via Traefik.

## Préparation

Même si Coolify est léger à la base, la consommation de ressources peut augmenter fortement selon le nombre d’applications déployées, de builds Docker, et de bases de données lancées en même temps. On recommande les configurations matérielles suivantes pour héberger Coolify sur votre VPS/serveur dédié.

| Matériel   | Minimum      | Recommandé                |
| ---------- | ------------ | -------------------------- |
| CPU        | 2 cœurs vCPU | 4 cœurs vCPU               |
| RAM        | 2 Go         | 4 Go+                      |
| Espace disque | 30 Go      | 50 Go+                     |

<InlineServiceLink />

Avant d’installer Coolify, connectez-vous à votre serveur et assurez-vous que le système d’exploitation est à jour. Vous devez vous connecter en SSH avec les droits root. On a déjà un guide sur [l’accès initial SSH](vserver-linux-ssh.md) si vous avez besoin d’aide.

:::tip[Authentification par clé SSH]
On vous **recommande vivement** de configurer une clé SSH plutôt qu’un mot de passe pour l’authentification. Découvrez comment faire dans notre tutoriel [Configuration clé SSH](vserver-linux-sshkey.md).
:::

## Installation

Une fois connecté à votre serveur, mettez à jour vos paquets système et installez `curl`, nécessaire pour récupérer le script d’installation de Coolify :

```bash
sudo apt update && sudo apt upgrade -y && sudo apt install curl -y
```



### Préparez vos identifiants admin

Coolify applique des règles de sécurité strictes pour votre compte administrateur. Avant de lancer l’installation, préparez vos identifiants root Coolify selon ces critères :

* **Nom d’utilisateur**
  * Longueur minimale : 3 caractères
  * Longueur maximale : 255 caractères
  * Peut contenir uniquement lettres, chiffres, espaces, underscores et tirets
* **Email**
  * Doit être une adresse email valide
  * Doit avoir un enregistrement DNS valide
  * Longueur maximale : 255 caractères
* **Mot de passe**
  * Longueur minimale : 8 caractères
  * Doit contenir des lettres majuscules et minuscules
  * Doit contenir au moins un chiffre
  * Doit contenir au moins un symbole spécial
  * Ne doit pas être un mot de passe commun ou compromis



### Lancez le script d’installation

Coolify propose un script d’installation rapide et automatisé. Pour sécuriser l’installation, on va utiliser des variables d’environnement pour pré-définir le compte administrateur root. Ça évite les accès non autorisés pendant la configuration.

Lancez la commande suivante en remplaçant le nom d’utilisateur, l’email et le mot de passe par vos propres identifiants sécurisés :

```bash
env ROOT_USERNAME=zaphosting ROOT_USER_EMAIL=info@zap-hosting.com ROOT_USER_PASSWORD=zaphosting bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```
:::note[Open Source]
Vous pouvez consulter le code source du script d’installation dans le [dépôt officiel Coolify](https://github.com/coollabsio/coolify/blob/v4.x/scripts/install.sh)
:::

Le script installera automatiquement Docker, configurera les réseaux nécessaires, et mettra en place les conteneurs Coolify. Ce processus peut prendre quelques minutes selon la puissance de votre serveur.

![img](https://screensaver01.zap-hosting.com/index.php/s/Zx5DXzEH2MmrkrX/preview)



### Accéder à Coolify

Une fois l’installation terminée, la prochaine étape est d’accéder au tableau de bord via un navigateur web. Entrez l’adresse IP de votre serveur suivie du port 8000 : `http://[votre_ip_serveur]:8000`

Comme vous avez déjà fourni vos identifiants via la commande d’installation, vous verrez directement l’écran de connexion au lieu de l’assistant de configuration initial.

Entrez l’email et le mot de passe que vous avez utilisés dans la ligne de commande pour accéder à votre tableau de bord.



### Configuration des enregistrements DNS

Après vous être connecté au tableau de bord Coolify, la première chose à faire est de configurer un domaine personnalisé. Accéder à Coolify via votre adresse IP (`http://[votre_ip_serveur]:8000`) n’est pas sécurisé.

Connecter un domaine permet à Coolify de générer automatiquement des certificats SSL gratuits pour votre tableau de bord et toutes vos futures applications.

Rendez-vous dans la gestion DNS de votre fournisseur de domaine et ajoutez deux nouveaux enregistrements `A` pointant vers votre serveur. Si votre domaine est enregistré chez ZAP-Hosting, vous pouvez suivre notre guide [Enregistrements de domaine](domain-records.md) pour apprendre à ajouter facilement ces entrées :

| Nom / Hôte | Type | Valeur             | TTL           |
| ---------- | ---- | ------------------ | ------------- |
| `@`        | A    | `[votre_ip_serveur]` | Auto / Le plus bas |
| `*`        | A    | `[votre_ip_serveur]` | Auto / Le plus bas |

:::info[Routage DNS]
*   L’enregistrement `@` permet à Coolify d’utiliser la racine de votre domaine
*   L’enregistrement `*` (joker) permet à Coolify de router automatiquement tout nouveau sous-domaine (ex : `api.[votre_domaine]`) sans ajouter d’enregistrements DNS pour chaque projet.
:::



### Configuration du domaine de l’instance

Pour sécuriser votre instance Coolify avec un certificat SSL, vous devez lui assigner un domaine. Allez dans **Paramètres** dans la barre latérale gauche et trouvez le champ **Domaine de l’instance**. Entrez votre domaine, avec le préfixe `https://` (ex : `https://coolify.[votre_domaine]`). Cliquez sur **Enregistrer** pour valider.

![img](https://screensaver01.zap-hosting.com/index.php/s/jYW63sF9k5sZez3/preview)



## Déployer votre première appli

Ensuite, vous pourrez visiter l’onglet **Projets** et commencer à déployer votre première application !

Cliquez sur **+ Ajouter une ressource** pour ajouter un dépôt public ou un fichier Docker Compose, ou sélectionnez un des nombreux services préconfigurés dans la bibliothèque de templates en un clic. Votre installation Coolify est prête à l’emploi !

![img](https://screensaver01.zap-hosting.com/index.php/s/nEf9XBDrfypijE7/preview)



## Conclusion et ressources supplémentaires

Bravo ! Vous avez installé Coolify avec succès sur votre serveur et pouvez commencer à déployer vos projets immédiatement. On vous recommande aussi de jeter un œil aux ressources suivantes, qui pourront vous aider et vous guider dans la configuration de votre serveur.

- [coolify.io](https://coolify.io/) - Site officiel
- [coolify.io/docs](https://coolify.io/docs/) - Documentation Coolify

Vous avez des questions spécifiques non couvertes ici ? Pour toute demande ou assistance, n’hésitez pas à contacter notre support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />