---
id: vserver-windows-expand-disk
title: "VPS : Étendre le disque (partition) sur Windows Server"
description: "Découvrez comment étendre en toute sécurité la partition de votre serveur Windows pour utiliser efficacement l’espace disque supplémentaire → En savoir plus maintenant"
sidebar_label: Étendre le disque (partition)
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windows OS propose une gestion intégrée des disques et partitions qui vous permet d’effectuer facilement une grande variété d’actions, comme étendre des partitions, diviser des disques, et plus encore. Une fonctionnalité clé est la possibilité d’étendre les partitions, ce qui est particulièrement important après avoir augmenté la capacité de stockage de votre serveur Windows. Dans ce guide, on vous explique comment étendre une partition sur votre serveur Windows.

<InlineVoucher />

## Préparation

Commencez par vous connecter à votre serveur Windows via RDP. Si vous avez besoin d’aide pour ça, consultez notre [guide d’accès initial (RDP)](vserver-windows-userdp.md).

Il existe deux méthodes pour gérer les disques et partitions : via l’outil **Gestion des disques** avec interface graphique, ou via la ligne de commande **diskpart**. L’outil **Gestion des disques** est une version GUI de Diskpart qui permet de faire la plupart des actions courantes, y compris étendre les partitions. Pour les utilisateurs avancés, `diskpart` est plus complet et puissant.

## Étendre la partition

Dans plusieurs cas, il peut être nécessaire d’étendre votre partition existante pour utiliser l’espace disque nouvellement disponible. Par exemple, après avoir augmenté l’espace disque de votre serveur, cet espace ne sera pas automatiquement attribué tant que vous n’aurez pas étendu la partition principale.

On recommande d’utiliser la méthode via l’outil **Gestion des disques** car elle est beaucoup plus simple, surtout pour les débutants. Ce processus est sûr et n’affecte pas vos données.

<Tabs>
<TabItem value="disk-management" label="Via Gestion des disques (GUI)" default>

Commencez par ouvrir l’outil **Gestion des disques**. Cherchez-le simplement dans le menu démarrer, ou ouvrez-le via Exécuter en appuyant sur `Touche Windows + R` puis en tapant `diskmgmt.msc` et en validant.

![](https://screensaver01.zap-hosting.com/index.php/s/xfMexYdrJMr3L6Y/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/gKjkst3H89knLFa/preview)

Une fois l’outil ouvert, faites un clic droit sur la partition principale et sélectionnez l’action **Étendre le volume** qui ouvrira un nouvel assistant.

:::tip
Le disque principal de démarrage est toujours le lecteur **C:**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/nWMStW6T74SrrRe/preview)

Dans l’assistant, cliquez sur **Suivant** pour accéder à la page de configuration où vous pouvez définir la taille d’espace à ajouter. Par défaut, Windows remplit automatiquement la totalité de l’espace non alloué, ce qui est idéal.

Vous pouvez donc cliquer à nouveau sur **Suivant**, puis enfin sur **Terminer** pour finaliser l’opération.

![](https://screensaver01.zap-hosting.com/index.php/s/MwRFS8eCHoqBSNt/download)

Une fois le processus terminé, la configuration mise à jour s’affiche dans Gestion des disques avec la nouvelle taille du disque.

![](https://screensaver01.zap-hosting.com/index.php/s/M46ca4FkeG42AZz/preview)

</TabItem>

<TabItem value="diskpart" label="Via Diskpart (CLI)">

Commencez par ouvrir une invite de commandes en mode administrateur. Cherchez-la dans le menu démarrer, faites un clic droit et sélectionnez **Exécuter en tant qu’administrateur**.

Lancez la commande `diskpart` pour entrer dans l’utilitaire CLI. Une fois chargé, tapez `list disk` pour afficher la liste de tous les disques connectés.

Ensuite, tapez `select disk [numéro_disque]` en remplaçant `[numéro_disque]` par le numéro du disque que vous souhaitez étendre.

:::tip
Le disque principal de démarrage est toujours le lecteur **C:**.
:::

Avec le disque sélectionné, tapez `list volume` pour afficher tous les volumes du disque sélectionné. Trouvez le volume à étendre puis tapez `select volume [numéro_volume]` en remplaçant `[numéro_volume]` par le numéro du volume.

Avec le disque et le volume sélectionnés, vous pouvez étendre le volume avec la commande suivante. Vous pouvez soit étendre sur tout l’espace non alloué, soit spécifier une taille.
```
# Étendre sur tout l’espace non alloué
extend

# Étendre à une taille spécifique (10240 = 10240MB = 10GB)
extend size=10240
```

Si la commande réussit, la taille du volume augmentera, ce que vous pouvez vérifier en listant à nouveau les disques ou dans l’explorateur de fichiers. Pour quitter l’utilitaire, tapez `quit`.

</TabItem>
</Tabs>

## Conclusion

Vous avez réussi à étendre la partition principale de votre disque pour utiliser tout l’espace disponible. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />