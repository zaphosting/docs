---
id: domain-records
title: "Domaine : Paramètres des enregistrements de domaine"
description: "Découvrez comment configurer et comprendre les différents types d’enregistrements DNS pour optimiser la gestion de votre domaine → En savoir plus maintenant"
sidebar_label: Enregistrements de domaine
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les domaines peuvent être configurés facilement en utilisant une grande variété de types d’enregistrements DNS qui effectuent différentes actions. Dans ce guide, nous allons couvrir tous les types d’enregistrements et expliquer leur fonctionnement.

<InlineVoucher />

## Configuration

Vous pouvez configurer les enregistrements de domaine dans l’administration de votre domaine sous la gestion DNS. Pour cela, cliquez sur le bouton vert **Nouvelle entrée**. Une fenêtre popup s’ouvrira. À partir de là, vous pouvez configurer et créer de nouveaux enregistrements comme vous le souhaitez.

![img](https://screensaver01.zap-hosting.com/index.php/s/5qGjz8jDi4sNGcQ/download)

:::info
Nous utilisons le domaine **zap-hosting.com** pour illustrer les différents types d’enregistrements DNS. Veuillez utiliser votre propre domaine dans votre cas.
:::

:::warning
Lors de la configuration d’un enregistrement DNS, assurez-vous qu’un point est placé à la fin de l’enregistrement pour indiquer que le nom de domaine est complet et éviter toute confusion lors de l’attribution dans le système DNS.
:::

## Types d’enregistrements DNS

Il existe différents types d’enregistrements DNS qui ont des significations et des objectifs variés. Leur signification et leurs différences seront expliquées ci-dessous.

### Enregistrements A

Un enregistrement A est utilisé pour créer une redirection d’un "**sous-domaine**" ou "**domaine principal**" vers une "**adresse IPv4**".

| Nom (Exemple)   | Type | Valeur (Exemple) | TTL  | Priorité |
| --------------- | ---- | ---------------- | ---- | -------- |
| zap-hosting.com. | A    | Adresse IPv4     | 1440 | 0        |



### Enregistrements AAAA

Un enregistrement AAAA est utilisé pour créer une redirection d’un "**sous-domaine**" ou "**domaine principal**" vers une "**adresse IPv6**".

| Nom (Exemple)   | Type | Valeur (Exemple) | TTL  | Priorité |
| --------------- | ---- | ---------------- | ---- | -------- |
| zap-hosting.com. | AAAA | Adresse IPv6     | 1440 | 0        |


### Enregistrements CNAME

Un enregistrement CNAME est utilisé pour créer une redirection d’un "**sous-domaine**" vers un "**sous-domaine**" ou "**domaine principal**".

| Nom (Exemple) | Type  | Valeur (Exemple) | TTL  | Priorité |
| ------------- | ----- | ---------------- | ---- | -------- |
| zap-test.     | CNAME | zap-hosting.com  | 1440 | 0        |



### Enregistrements MX

Un enregistrement MX est utilisé pour créer une redirection d’un "**sous-domaine**" ou "**domaine principal**" vers un "**domaine**" ou un "**enregistrement A**". Cet enregistrement MX sert à spécifier un ou plusieurs serveurs mail. La priorité indique quel serveur mail doit être utilisé en priorité s’il y a plusieurs enregistrements MX. La priorité doit être un entier entre 0 et 65535, plus la valeur est basse, plus la priorité est élevée.

| Nom (Exemple)   | Type  | Valeur (Exemple)  | TTL  | Priorité |
| --------------- | ----- | ----------------- | ---- | -------- |
| zap-hosting.com. | CNAME | mailserverxy.com  | 1440 | 0        |



### Enregistrements PTR

Un enregistrement PTR est utilisé pour créer une redirection d’une "**adresse IPv4**" ou "**adresse IPv6**" vers un "**sous-domaine**" ou "**domaine principal**". Cet enregistrement PTR est l’inverse de l’enregistrement A ou AAAA.

| Nom (Exemple)          | Type | Valeur (Exemple)   | TTL  | Priorité |
| ---------------------- | ---- | ------------------ | ---- | -------- |
| 1.0.0.127.in-addr.arpa.| PTR  | zap-hosting.com.   | 1440 | 0        |



### Enregistrements RP

Un enregistrement RP est utilisé pour fournir des informations sur le propriétaire du domaine. En général, une adresse e-mail est renseignée à cet effet, où le symbole "**@**" est remplacé par un "**point**".

| Nom (Exemple) | Type | Valeur (Exemple)       | TTL  | Priorité |
| ------------- | ---- | ---------------------- | ---- | -------- |
| rp.           | RP   | info.zap-hosting.com.  | 1440 | 0        |

### Enregistrements SRV

Un enregistrement SRV est utilisé pour créer une redirection d’un "**sous-domaine**" ou "**domaine principal**" vers un "**enregistrement A**".  
Les enregistrements SRV sont utilisés pour des applications où aucun port standard n’est utilisé et où un transfert de port est donc nécessaire.  
La priorité définit quel service doit être utilisé en priorité si plusieurs enregistrements SRV sont utilisés pour les mêmes services.  
La priorité doit être un entier, plus la valeur est basse, plus la priorité est élevée.

| Nom (Exemple)   | Type | Valeur (Exemple)          | TTL  | Priorité |
| --------------- | ---- | ------------------------- | ---- | -------- |
| zap-hosting.com.| SRV  | 0 2006 zap-hosting.com.   | 1440 | 0        |

### Enregistrements TXT

Un enregistrement TXT est utilisé pour ajouter un texte de votre choix. Sur certains systèmes, le contenu est utilisé pour encoder des données administratives. Cet enregistrement TXT sert à créer des entrées SPF, DMARC et DKIM.

| Nom (Exemple)   | Type | Valeur (Exemple) | TTL  | Priorité |
| --------------- | ---- | ---------------- | ---- | -------- |
| zap-hosting.com.| TXT  | v=spf1 -all      | 1440 | 0        |



## Conclusion

Félicitations, vous avez créé et configuré avec succès vos enregistrements DNS. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />