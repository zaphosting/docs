---
id: account-hardware-authentication
title: "Authentification matérielle (Passkey)"
description: "Découvrez comment renforcer la sécurité de votre compte avec la passkey et protégez efficacement vos informations personnelles → En savoir plus maintenant"
sidebar_label: Authentification matérielle
---

import SearchableAccordion from '@site/src/components/SearchableAccordion/SearchableAccordion';
import items from '@site/data/faqs/account-hardware-authentication.json';

## Introduction

L’authentification matérielle avec Passkeys est une méthode moderne et résistante au phishing pour sécuriser votre compte utilisateur. Au lieu de s’appuyer sur un mot de passe traditionnel, une paire de clés cryptographiques est utilisée. La clé privée est stockée en toute sécurité sur votre appareil et ne le quitte jamais. L’authentification se fait localement via une vérification biométrique comme l’empreinte digitale ou la reconnaissance faciale, ou alternativement un code PIN de l’appareil.

## Exigences

Pour utiliser l’authentification matérielle avec Passkeys, votre configuration doit répondre à certaines exigences. Vous avez besoin d’un appareil compatible comme un smartphone, une tablette ou un ordinateur. Le système d’exploitation et le navigateur doivent prendre en charge les Passkeys ou WebAuthn. Un verrouillage d’écran doit être configuré sur l’appareil, par exemple une empreinte digitale, Face ID ou un code PIN local.

## Activer l’authentification

Pour activer l’authentification matérielle, ouvrez les paramètres de profil dans l’espace client et allez dans la section Sécurité (Paramètres du profil → Sécurité). Dans cette zone, vous pouvez configurer les options de sécurité pour votre compte. Sélectionnez Authentification matérielle pour continuer la configuration.

Après avoir sélectionné cette option, une fenêtre popup s’ouvrira. Dans cette fenêtre, cliquez sur le bouton Ajouter un authentificateur pour démarrer le processus de configuration.

![img](https://screensaver01.zap-hosting.com/index.php/s/oSEpGD5emG9ToxW/download)

La configuration continue ensuite avec la création d’une connexion Passkey pour ZAP-Hosting. Lors de cette étape, il vous sera demandé de définir un code PIN de récupération. Ce PIN est nécessaire pour retrouver l’accès en cas d’indisponibilité temporaire de la méthode d’authentification principale et doit être conservé en lieu sûr.

![img](https://screensaver01.zap-hosting.com/index.php/s/tiPnCDTAkieNHNP/download)

Une fois ces étapes confirmées et l’authentification matérielle via Passkey configurée avec succès, vous serez automatiquement déconnecté une fois. C’est une mesure de sécurité normale qui garantit que la nouvelle méthode d’authentification est bien appliquée.

Lors de la prochaine connexion, après avoir saisi votre nom d’utilisateur et mot de passe, vous verrez l’option Authentification matérielle. Sélectionnez cette option et confirmez la demande d’authentification sur votre appareil pour finaliser la connexion.

![img](https://screensaver01.zap-hosting.com/index.php/s/FEpZkCCLmi9FmLw/download)

## Désactiver l’authentification

Pour désactiver l’authentification à deux facteurs, rendez-vous dans **Paramètres du profil → Sécurité**. Si l’utilisateur peut toujours se connecter, l’authentificateur configuré peut être supprimé à tout moment depuis les paramètres de sécurité.

![img](https://screensaver01.zap-hosting.com/index.php/s/Htb3Td7NfbQeCg3/preview)

## Questions fréquentes

Si vous avez encore des doutes sur l’utilisation de l’authentification matérielle ou des questions sur son impact sur votre compte, les informations suivantes vous aideront à clarifier les préoccupations courantes et expliquent comment cette fonctionnalité fonctionne concrètement chez ZAP-Hosting.

<SearchableAccordion items={items} locale="en" />