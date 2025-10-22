---
id: dedicated-network-analysis-winmtr
title: "Serveur dédié : Identifier les problèmes réseau avec WinMTR/MTR"
description: "Découvrez comment diagnostiquer les problèmes réseau en analysant les routes sortantes et de retour pour identifier efficacement la latence et la perte de paquets → En savoir plus maintenant"
sidebar_label: Problèmes réseau
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les problèmes réseau peuvent être très gênants et, bien sûr, ne devraient pas faire partie du quotidien. Cependant, lorsqu'ils surviennent, il est important d'identifier rapidement et efficacement la cause pour résoudre le souci. Des informations détaillées sur les problèmes réseau peuvent être analysées efficacement grâce à l'application **WinMTR (Windows)** ou **MTR (Linux/Mac OS)**.

![img](https://screensaver01.zap-hosting.com/index.php/s/RecNoSB7J7A7B72/preview)

WinMTR/MTR est un outil de diagnostic réseau qui combine les fonctions de Ping et Traceroute. Il permet une analyse détaillée à la fois de la **route sortante (Client → Serveur)** et de la **route de retour (Serveur → Client)** en suivant le chemin des paquets de données dans les deux sens. Ce faisant, il capture des informations importantes telles que la latence et la perte de paquets, essentielles pour diagnostiquer et résoudre précisément les problèmes réseau.

**Route sortante (Client → Serveur)** : Un rapport pour la **route sortante** est utile lorsque des problèmes comme des coupures de connexion, des connexions lentes ou des difficultés à établir la connexion surviennent. Cette analyse aide à identifier les problèmes potentiels sur le chemin du client vers le serveur, comme la congestion réseau, la perte de paquets ou un routage défectueux.

**Route de retour (Serveur → Client)** : Un rapport pour la **route de retour** n’a de sens qu’une fois qu’une connexion stable et fonctionnelle sur la route sortante a été confirmée. Cela signifie que le rapport de la route de retour devient particulièrement pertinent lorsque la route sortante ne montre aucun problème, mais que des soucis comme des réponses lentes du serveur, des temps de chargement retardés ou des transmissions de données incomplètes persistent.

En résumé, si des problèmes réseau visibles surviennent, la **route sortante (Client → Serveur)** doit être analysée en premier. Si le rapport sortant ne montre aucune anomalie et que les problèmes persistent, il est nécessaire de vérifier la **route de retour (Serveur → Client)** pour identifier d’éventuels problèmes asymétriques. Les problèmes réseau asymétriques peuvent survenir lorsque les paquets de données sont transmis sans problème dans un sens, tandis que des retards ou pertes de paquets se produisent dans l’autre sens.

## Installation

Maintenant que nous avons clarifié quand les rapports pour les routes entrantes et sortantes sont utiles, passons à l’installation côté client et serveur.

### Client

Pour la route sortante, l’application doit être installée sur le client (**votre ordinateur**). Les étapes suivantes expliquent comment installer l’application selon votre système d’exploitation.

<Tabs>
<TabItem value="windows" label="Windows" default>

Sur un ordinateur Windows, l’analyse réseau se fait via l’application WinMTR. Pour installer WinMTR sur votre ordinateur, téléchargez d’abord l’application depuis le site ZAP-Hosting. Après téléchargement, extrayez le fichier. Vous obtiendrez alors le fichier exécutable `WinMTR.exe`.

| Application | Téléchargement                            |
| ----------- | ---------------------------------------- |
| WinMTR      | [Lien](https://zap-hosting.com/winmtr.zip) |

</TabItem>

<TabItem value="linux" label="Linux">

Sur un ordinateur Linux, l’analyse réseau se fait via l’application MTR. Pour installer MTR sur votre système, ouvrez le terminal et exécutez la commande d’installation adaptée à votre distribution :

**Debian**

```
apt install mtr -y
```

**Ubuntu**

```
apt install mtr -y
```

**OpenSUSE**
```
zypper addrepo https://download.opensuse.org/repositories/openSUSE:11.4/standard/openSUSE:11.4.repo
zypper refresh
zypper install mtr
```

**Fedora**
```
yum install mtr -y
```

</TabItem>

<TabItem value="macos" label="MacOS">

Sur un ordinateur Mac OS, l’analyse réseau se fait via l’application MTR. Cependant, MTR n’est pas préinstallé sur Mac OS et n’est pas disponible sur l’Apple Store. Pour installer MTR, vous devez d’abord installer Homebrew, le gestionnaire de paquets.

**Installation de Homebrew**

Ouvrez le terminal et lancez la commande suivante pour installer Homebrew :

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Installation de MTR**

Suivez les étapes affichées pour finaliser l’installation. Une fois Homebrew installé, vous pouvez installer MTR en tapant dans le terminal :

```
brew install mtr
```

</TabItem>
</Tabs>


### Serveur
Pour la route de retour, l’application doit être installée sur le serveur. Les étapes suivantes expliquent comment installer l’application selon le système d’exploitation de votre serveur.

<Tabs>

<TabItem value="linux" label="Serveur sous Linux" default>

Connectez-vous à votre serveur via **[SSH](vserver-linux-ssh.md)**. Pour installer MTR, exécutez la commande d’installation adaptée à votre système :

**Debian**
```
apt install mtr -y
```

**Ubuntu**
```
apt install mtr -y
```

**OpenSUSE**
```
zypper addrepo https://download.opensuse.org/repositories/openSUSE:11.4/standard/openSUSE:11.4.repo
zypper refresh
zypper install mtr
```

**Fedora**
```
yum install mtr -y
```

</TabItem>

<TabItem value="windows" label="Serveur sous Windows">

Connectez-vous à votre serveur via **[Bureau à distance](vserver-windows-userdp.md)**. Pour installer WinMTR, téléchargez d’abord l’application depuis le site ZAP-Hosting. Après téléchargement, extrayez le fichier. Vous obtiendrez alors le fichier exécutable `WinMTR.exe`.

| Application | Téléchargement                            |
| ----------- | ---------------------------------------- |
| WinMTR      | [Lien](https://zap-hosting.com/winmtr.zip) |

</TabItem>
</Tabs>

## Créer un rapport

Nous allons maintenant créer un rapport avec l’application WinMTR/MTR, pour la **route sortante (Client → Serveur)** et la **route de retour (Serveur → Client)**.

:::warning Créez le rapport pendant que le problème est actif 
Le rapport doit être généré lorsque le problème est actif et visible. Ce n’est qu’à ce moment-là que le rapport fournira des informations utiles pour aider au diagnostic et à la résolution.
:::

### Route sortante (Client → Serveur)

Pour analyser la route de votre ordinateur vers le serveur, ouvrez WinMTR/MTR sur votre ordinateur et suivez les étapes ci-dessous.

<Tabs>
<TabItem value="windows" label="Windows" default>

Lancez WinMTR en double-cliquant sur `WinMTR.exe`. Dans le champ `Host`, entrez l’adresse IP ou le nom d’hôte du serveur. Démarrez ensuite le rapport. Laissez l’application tourner au moins **une minute** pour collecter suffisamment de données. Une fois les données collectées, arrêtez l’analyse et sauvegardez le résultat en cliquant sur `Export TEXT`.

![img](https://screensaver01.zap-hosting.com/index.php/s/pYNikLsj3jHxBSD/preview)

</TabItem>

<TabItem value="linux" label="Linux">

Sur Linux, ouvrez un terminal et lancez la commande suivante :

```
mtr <adresse-ip-de-votre-serveur>
```

Laissez l’application tourner au moins **une minute** pour collecter suffisamment de données. Une fois les données collectées, arrêtez l’analyse et sauvegardez le résultat.

</TabItem>

<TabItem value="macos" label="MacOS">

Sur MacOS, ouvrez un terminal et lancez la commande suivante :

```
mtr <adresse-ip-de-votre-serveur>
```

Laissez l’application tourner au moins **une minute** pour collecter suffisamment de données. Une fois les données collectées, arrêtez l’analyse et sauvegardez le résultat.

</TabItem>
</Tabs>

### Route de retour (Serveur → Client)

Pour analyser la route du serveur vers votre ordinateur, connectez-vous à votre serveur et suivez les étapes ci-dessous.

<Tabs>
<TabItem value="linux" label="Serveur sous Linux" default>

Sur votre serveur, lancez la commande suivante dans le terminal SSH :
```
mtr <adresse-ip-de-votre-client>
```

Laissez l’application tourner au moins **une minute** pour collecter suffisamment de données. Une fois les données collectées, arrêtez l’analyse et sauvegardez le résultat.

:::info
Vous ne connaissez pas votre adresse IP ou ne savez pas comment la trouver ? Plusieurs méthodes existent pour la déterminer. La plus rapide est d’utiliser un service en ligne comme WhatIsMyIPAddress.
:::

</TabItem>

<TabItem value="windows" label="Serveur sous Windows">

Dans le champ `Host`, entrez l’adresse IP de votre connexion. Démarrez ensuite le rapport. Laissez l’application tourner au moins **une minute** pour collecter suffisamment de données. Une fois les données collectées, arrêtez l’analyse et sauvegardez le résultat en cliquant sur `Export TEXT`.

:::info
Vous ne connaissez pas votre adresse IP ou ne savez pas comment la trouver ? Plusieurs méthodes existent pour la déterminer. La plus rapide est d’utiliser un service en ligne comme **[WhatIsMyIPAddress](https://whatismyipaddress.com/)**.
:::

</TabItem>
</Tabs>


## Évaluer le rapport

Lors de l’évaluation des résultats, plusieurs points clés sont à garder en tête. La section suivante explique ces points en détail et clarifie leur importance pour l’analyse. Y prêter attention est crucial pour un diagnostic précis et pour identifier efficacement les causes potentielles.

### Perte de paquets

Si vous voyez une perte de paquets dans les résultats, cela indique des problèmes réseau potentiels. Une perte temporaire mineure de 1-2 % peut ne pas être problématique, mais des valeurs plus élevées suggèrent des soucis plus sérieux. La perte de paquets peut provoquer des retards ou des interruptions dans les connexions des services. Si la perte est répartie uniformément sur tous les sauts, le problème peut venir de votre réseau local ou du serveur. En revanche, si la perte se produit uniquement à un saut ou une zone spécifique, le souci vient probablement de ce nœud ou de la connexion vers le suivant. Il est aussi important de savoir que de petites pertes sur les premiers sauts, qui appartiennent à votre réseau local, ne sont pas forcément critiques, car ces appareils priorisent souvent moins les requêtes ICMP (comme le ping) et peuvent les ignorer.

### Latence (temps de ping)

Les valeurs de latence (`Avg`, `Best`, `Worst`) donnent un aperçu de la vitesse et de la stabilité de la connexion. Si vous remarquez que la latence reste constamment élevée à un saut particulier, cela peut indiquer une congestion réseau ou un routeur lent. Une augmentation soudaine de la latence entre deux sauts pointe vers un possible goulot d’étranglement. Normalement, la latence augmente progressivement le long du chemin vers la destination. Cependant, soyez attentif aux pics soudains et importants, souvent signe d’un problème. Comparer les routes sortante et de retour peut aussi aider à identifier des problèmes asymétriques, indiquant que le trafic dans un sens rencontre des difficultés.

Avec une analyse attentive de ces facteurs, vous pouvez déterminer précisément où se situe le problème réseau — que ce soit dans votre propre réseau, chez le fournisseur d’accès internet, ou quelque part sur le chemin vers le serveur.

### Exemples de diagnostics

Pour mieux comprendre, clarifions ces informations avec quelques exemples de diagnostics. Nous avons compilé plusieurs scénarios illustrant différentes situations et causes possibles. Ces exemples vous aideront à interpréter les données et diagnostiquer les problèmes réseau plus efficacement.

:::info
Les exemples de diagnostics suivants illustrent divers scénarios basés sur des rapports WinMTR/MTR fictifs. Les adresses IP, noms d’hôtes et routes contenus sont entièrement fictifs et sans lien avec des réseaux ou hôtes réels.
:::

<Tabs>
<TabItem value="mtrResultsExample1" label="Exemple 1" default>

**Exemple :** Perte de paquets côté client

**Description**

Dans cet exemple, la perte de paquets se produit côté client, visible sur les routes sortante et de retour.

**Route sortante (Client → Serveur)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                     15.0%   20    1.1    3.4   1.0   10.2  2.8
2. 10.0.0.1                        10.0%   20   12.3   15.7  10.5   30.8  5.5
3. 172.16.0.1                       0.0%   20   25.1   26.0  24.8   27.2  0.6
4. 203.0.113.5                      0.0%   20   35.4   34.5  33.2   36.1  0.9
5. be1234.ccr42.isp.net             0.0%   20   50.6   49.8  49.1   51.5  0.8
6. be5678.ccr21.isp.net             0.0%   20   60.1   59.9  59.5   61.0  0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3  0.5
8. Destination-IP (Serveur)                 0.0%   20   80.2   80.0  79.5   81.2  0.6
```

**Route de retour (Serveur → Client)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serveur)                 0.0%   20   80.2   80.0  79.5   81.2  0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2  0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7  0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0  0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0  0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3  0.7
7. 10.0.0.1                        10.0%   20   15.8   16.5  15.0   35.2  6.2
8. 192.168.1.1                     15.0%   20    2.0    4.0   1.2   12.0  3.8
```

**Évaluation**

L’évaluation révèle une perte de paquets côté client. Les deux routes montrent des pertes aux premiers sauts (Saut 1 et 2), indiquant un problème côté client, soit dans le réseau local, soit avec le routeur.

</TabItem>

<TabItem value="mtrResultsExample2" label="Exemple 2">

**Exemple :** Perte de paquets côté serveur

**Description**

Dans cet exemple, la perte de paquets se produit côté serveur, visible sur les routes sortante et de retour.

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0  0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5  0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
7. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
8. Destination-IP (Serveur)                15.0%   20   85.3   90.2  85.0  105.0  7.0
```

**Route de retour (Serveur → Client)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serveur)                15.0%   20   85.3   90.2  85.0  105.0  7.0
2. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5  0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0  0.3
```

**Évaluation**

L’évaluation indique une perte de paquets côté serveur. Les deux routes montrent des pertes aux derniers sauts (Saut 7 et 8), pointant vers un problème côté serveur.

</TabItem>

<TabItem value="mtrResultsExample3" label="Exemple 3">

**Exemple :** Problèmes de latence côté client

**Description**

Dans cet exemple, la latence élevée se produit côté client, visible sur les routes sortante et de retour.

**Route sortante (Client → Serveur)**

```console {2-3} 
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
2. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
3. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
4. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
5. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
6. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Serveur)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Route de retour (Serveur → Client)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serveur)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
7. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
8. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
```

**Évaluation**

L’évaluation montre une latence élevée côté client. Les deux routes présentent une latence accrue aux premiers sauts (Saut 1 et 2), indiquant un problème côté client.

</TabItem>

<TabItem value="mtrResultsExample4" label="Exemple 4">

**Exemple :** Problèmes de latence côté serveur

**Description**

Dans cet exemple, la latence élevée se produit côté serveur, visible sur les routes sortante et de retour.

**Route sortante (Client → Serveur)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
8. Destination-IP (Serveur)                 0.0%   20  300.5  320.0 300.0  350.0  15.0
```

**Route de retour (Serveur → Client)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serveur)                 0.0%   20  300.5  320.0 300.0  350.0  15.0
2. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Évaluation**

L’évaluation montre une latence élevée côté serveur. Les deux routes présentent une latence accrue aux derniers sauts (Saut 7 et 8), indiquant un problème côté serveur.

</TabItem>

<TabItem value="mtrResultsExample5" label="Exemple 5">

**Exemple :** Problème de routage (routage ISP)

**Description**

Dans cet exemple, la route du Client X vers le serveur fonctionne sans problème, tandis que la route du Client Y vers le serveur présente des problèmes de routage, entraînant une perte de paquets. Cela indique un souci avec le routage chez le fournisseur d’accès internet (ISP).

**Route sortante (Client X → Serveur)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                   0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Serveur)                 0.0%   20   80.2   80.0  79.5   81.2   0.6

```

**Route sortante (Client Y → Serveur)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                     30.0%   20   30.6   50.3  29.5   95.0  20.5
5. be1234.ccr42.isp.net            25.0%   20   80.2  120.0  70.0  250.0  55.0
6. be5678.ccr21.isp.net            10.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Serveur)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Route de retour (Serveur → Client X)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serveur)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Route de retour (Serveur  → Client Y)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serveur)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3

```

**Évaluation**

L’évaluation montre un problème de routage chez l’ISP. Alors que la route du Client X vers le serveur est stable, celle du Client Y présente des problèmes importants, entraînant perte de paquets et latence élevée.

</TabItem>

<TabItem value="mtrResultsExample6" label="Exemple 6">

**Exemple :** Perte de paquets uniquement sur la route sortante (Client → Serveur)

**Description**

Dans cet exemple, la perte de paquets se produit uniquement sur la route sortante (du client vers le serveur), tandis que la route de retour (du serveur vers le client) ne montre aucune perte. Cela peut indiquer un problème dans un segment réseau vers le serveur, causé par des routeurs défectueux, de la congestion ou une mauvaise connexion sur le chemin.

**Route sortante (Client → Serveur)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                     10.0%   20   35.7   35.0  34.5   36.5   0.6
5. be1234.ccr42.isp.net            15.0%   20   50.6   55.5  50.0   70.0   6.0
6. be5678.ccr21.isp.net            10.0%   20   65.1   65.9  65.0   67.0   0.6
7. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Destination-IP (Serveur)                 0.0%   20   85.3   85.0  84.5   86.0   0.5

```

**Route de retour (Serveur → Client)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serveur)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  65.0   66.0   0.3
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.7   35.0  34.5   36.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Évaluation**

L’évaluation montre que la perte de paquets se produit uniquement sur la route sortante. Les pertes sont visibles aux sauts 4, 5 et 6, indiquant un problème sur le chemin du client vers le serveur, comme de la congestion ou des équipements réseau défectueux sur un segment de la route. Sur la route de retour, aucune perte n’est constatée, ce qui signifie que la connexion dans l’autre sens est stable.

</TabItem>

<TabItem value="mtrResultsExample7" label="Exemple 7">

**Exemple :** Perte de paquets uniquement sur la route de retour (Serveur → Client)

**Description**

Dans cet exemple, la perte de paquets se produit uniquement sur la route de retour (du serveur vers le client), tandis que la route sortante (du client vers le serveur) ne montre aucune perte. Cela peut indiquer un problème dans un segment réseau sur le chemin de retour.

**Route sortante (Client → Serveur)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  64.5   66.5   0.5
7. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Destination-IP (Serveur)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
```

**Route de retour (Serveur → Client)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Serveur)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  64.5   66.5   0.5
4. be1234.ccr42.isp.net            10.0%   20   50.6   51.0  50.0   55.0   1.2
5. 203.0.113.5                     15.0%   20   35.7   36.5  34.5   40.0   1.8
6. 172.16.0.1                      10.0%   20   20.2   21.5  19.5   25.0   2.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Évaluation**

L’évaluation montre que la perte de paquets se produit uniquement sur la route de retour. Les pertes sont visibles aux sauts 4, 5 et 6 de la route de retour, indiquant un problème sur le chemin du serveur vers le client.

</TabItem>

</Tabs>

## Signaler un problème

Même si ZAP-Hosting surveille continuellement le réseau, il est important de contacter rapidement notre support en cas de problème réseau. Pour garantir un diagnostic précis et une résolution rapide, merci de nous fournir les résultats de vos rapports WinMTR/MTR pour les routes sortante et de retour. Ces informations nous aident à identifier précisément les zones problématiques et à résoudre le souci rapidement.

<InlineVoucher />