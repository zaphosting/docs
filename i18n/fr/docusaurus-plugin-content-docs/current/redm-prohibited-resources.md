---
id: redm-prohibited-resources
title: "RedM : « La ressource contient-elle une logique interdite ? »"
description: "Comprends comment protéger ton serveur des ressources RedM malveillantes et garantir un gameplay sécurisé et performant → Découvre tout maintenant"
sidebar_label: Ressource contenant une logique interdite
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les développeurs de ressources RedM ont déployé beaucoup d’efforts ces dernières années pour protéger leur code source avec des techniques comme l’obfuscation, le verrouillage IP, le chargement de code à distance et d’autres méthodes. Malheureusement, ces mesures causent souvent des problèmes, que beaucoup connaissent déjà. Certaines de ces méthodes ne ralentissent pas seulement considérablement les performances du code, mais introduisent aussi de nombreuses failles de sécurité.

Cfx.re a donc commencé à bloquer les ressources malveillantes contenant du code conçu pour infecter les serveurs et autres ressources. Ces ressources tentent parfois de « propager » leur code à d’autres ressources pour donner à des tiers un accès aux scripts et bases de données. Il est important de noter que ces ressources peuvent généralement être comparées à des virus et représentent donc une menace sérieuse.

<InlineVoucher />

## Signification

Notre système vérifie toutes les ressources avant le démarrage pour les raisons de sécurité mentionnées ci-dessus et désactive toutes les ressources reconnues comme dangereuses. Cette étape est absolument nécessaire, c’est pourquoi il n’y a malheureusement aucune exception possible ici. La sécurité passe avant tout !

Si l’une de tes ressources uploadées est concernée, la console du serveur fournira des infos supplémentaires à ce sujet. Le contenu de ces infos peut par exemple ressembler à ceci :

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)

## Comment procéder

Comme première et plus importante étape, on te recommande de supprimer immédiatement toutes les ressources malveillantes. Ensuite, tu devrais uniquement installer des ressources provenant de sources fiables. Un bon point de départ est par exemple le site officiel ou le [Forum](https://forum.cfx.re/c/development/releases/7) de RedM. Tu y trouveras un large choix de ressources.

En tant que développeur ou en contact avec un développeur, on te conseille de te référer au **système RedM Asset Escrow**, développé par Cfx.re en collaboration avec **Tebex**. Plus de détails sont disponibles dans le post officiel du [Forum Cfx.re](https://forum.cfx.re/t/introducing-redm-asset-escrow/5303450).

## Ressources interdites

Il n’existe malheureusement pas de liste officielle des ressources pouvant déclencher ce message. En principe, tu ne devrais pas utiliser de ressources qui utilisent d’autres méthodes d’obfuscation ou qui ne sont pas basées sur le système RedM Asset Escrow.

## Conclusion

Pour garder un environnement serveur sécurisé et stable, il est essentiel d’utiliser uniquement des ressources de confiance et de supprimer immédiatement celles qui sont signalées. En suivant ces recommandations et en utilisant le système RedM Asset Escrow, tu contribues à garantir la sécurité et la conformité dans l’écosystème RedM. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />