---
id: voiceserver-query
title: "Serveur vocal : Accès TeamSpeak Query"
description: "Découvrez comment gérer votre serveur TeamSpeak en externe grâce au Login Query pour un contrôle et une administration efficaces → En savoir plus maintenant"
sidebar_label: Login Query
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le login query de TeamSpeak vous permet d’accéder à l’interface query du serveur, où vous pouvez gérer votre serveur TeamSpeak en externe via des commandes.

:::warning Accès Query Admin Serveur
Nos produits Serveur TeamSpeak n’incluent pas l’accès Server Admin Query. 
:::

<InlineVoucher />

## Détails de connexion

<Tabs>
<TabItem value="Webinterface" label="Produit Serveur TeamSpeak" default>

Pour des raisons de sécurité, le login **Server Admin Query** n’est pas disponible avec le **produit serveur TeamSpeak**. Cependant, si vous avez les droits admin sur votre serveur TeamSpeak, vous pouvez créer votre propre Login Query en suivant ces étapes.

:::info
Des fonctionnalités comme l’import de snapshot, le changement de slots/ports et similaires ne sont pas disponibles. Ces réglages sont prédéfinis par nos soins et ne peuvent pas être modifiés manuellement. 
:::

Pour créer votre propre Login Query, cliquez sur "Server Query Login" dans le client TeamSpeak sous Outils.
Ensuite, entrez un nom pour le login, qui sera aussi le nom de connexion, par exemple "MyQueryLogin" :

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

Après confirmation avec "OK", un mot de passe s’affiche. Il doit être sauvegardé, car il ne peut pas être modifié par la suite.

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)

Avec ces identifiants créés, vous pouvez établir une connexion, par exemple via [YaTQA](https://yat.qa). Pour cela, vous aurez besoin de l’adresse IP du serveur, du port Query, du port serveur ainsi que du nom et mot de passe du login Query.

L’adresse IP du serveur, le port Query et le port serveur sont visibles dans le tableau de bord de l’interface web :

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>
<TabItem value="self_hosted" label="Auto-hébergé (VPS/Serveur dédié)">

Si le serveur TeamSpeak a été installé sur votre propre VPS ou serveur dédié via l’interface web, vous pouvez utiliser le login classique "Server Admin Query". Les identifiants se trouvent dans l’interface web de votre instance TeamSpeak.

</TabItem>
</Tabs>

## Accès Query

Renseignez les identifiants fournis ou créés pour votre Login Query dans la section Connexion rapide de l’application **YatQA**, puis cliquez sur le **bouton Connexion**.

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)

:::warning Erreur Port Query Personnalisé
Par défaut, une erreur peut survenir après une installation initiale si vous spécifiez un port autre que le port query par défaut. C’est normal et se résout comme suit :

![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::

## Conclusion

Vous avez réussi à établir une connexion à la query via YatQA. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre support, disponible tous les jours pour vous accompagner ! 🙂

<InlineVoucher />