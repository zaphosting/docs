---
id: hytale-permissions
title: "Hytale: Benutzer- und Gruppenrechte verwalten"
description: "Verwalte Benutzer- und Gruppenrechte auf deinem Hytale Gameserver → Jetzt mehr erfahren"
sidebar_label: Rechte
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Das Verwalten von Rechten auf deinem Hytale Gameserver ermöglicht dir, zu steuern, was Spieler dürfen und was nicht. Dazu gehört, verschiedenen vertrauenswürdigen Spielern, Moderatoren und Admins unterschiedliche Zugriffslevel zuzuweisen. Die korrekte Einrichtung der Rechte ist essenziell, um eine ausgewogene und sichere Server-Umgebung zu schaffen, in der alle ohne unerwünschte Exploits oder Missbrauch Spaß am Spiel haben können.

Die Server-Software von Hytale unterstützt hierarchische Rechteebenen, die bestimmen, welche Befehle und Aktionen jeder Spieler ausführen darf. Diese können je nach Server-Setup über die Live-Konsole oder Konfigurationsdateien verwaltet werden.

:::info Early Access Hinweis

Hytale wurde am 13. Januar 2026 veröffentlicht und befindet sich aktuell im Early Access. Da sich das Spiel noch in aktiver Entwicklung befindet, können sich Server-Software, Konfigurationsdateien, Modding-Support und Installationsabläufe weiterhin ändern.

:::

<InlineVoucher />



## Überblick über die Rechteebenen

Rechte definieren, welche Aktionen ein Spieler auf dem Server ausführen darf. Auf der grundlegendsten Ebene haben normale Spieler nur Standard-Spielrechte, wie sich bewegen, mit der Welt interagieren und chatten. Höhere Rechteebenen wie Operator oder Admin gewähren Zugriff auf Server-Befehle, die das Gameplay, andere Spieler, Server-Konfiguration und Moderationstools beeinflussen.

Das Rechtesystem besteht aus zwei Hauptkomponenten:

- **Benutzerrechte**, die direkt auf einen bestimmten Spieler angewendet werden
- **Gruppenrechte**, die Rechte bündeln und mehreren Spielern gleichzeitig zugewiesen werden können

Jeder Spieler wird intern durch eine UUID identifiziert, die für die Rechteverwaltung via Befehle benötigt wird.



## Benutzerrechte verwalten

Benutzerrechte erlauben es dir, einem einzelnen Spieler bestimmte Rechte zu vergeben oder zu entziehen.

### Benutzerrechte anzeigen

Zeigt alle Rechte an, die direkt einem Benutzer zugewiesen sind. Dieser Befehl listet alle aktuell für den angegebenen Benutzer geltenden Rechte auf.

```
/perm user list <uuid>
```



### Rechte einem Benutzer hinzufügen

Um einem Benutzer direkt ein oder mehrere Rechte zu vergeben. Die angegebenen Rechte werden sofort hinzugefügt und sind ohne Server-Neustart aktiv.

```
/perm user add <uuid> <permissions>
```



### Rechte von einem Benutzer entfernen

Um einem Benutzer bestimmte Rechte zu entziehen. Dabei werden nur die angegebenen Rechte entfernt, alle anderen bleiben erhalten.

```
/perm user remove <uuid> <permissions>
```



## Benutzer-Gruppenzuweisungen verwalten

Neben direkten Rechten können Benutzer Rechte auch über Gruppen erben.

### Benutzer-Gruppen anzeigen

Dieser Befehl zeigt, in welchen Berechtigungsgruppen der Benutzer aktuell Mitglied ist.

```
/perm user group list <uuid>
```



### Benutzer zu einer Gruppe hinzufügen

Um einen Benutzer einer Berechtigungsgruppe zuzuweisen. Nach der Zuweisung erbt der Benutzer alle Rechte, die für diese Gruppe definiert sind.

```
/perm user group add <uuid> <group>
```



### Benutzer aus einer Gruppe entfernen

Um einen Benutzer aus einer Berechtigungsgruppe zu entfernen. Danach erhält der Benutzer keine Rechte mehr aus dieser Gruppe.

```
/perm user group remove <uuid> <group>
```



## Gruppenrechte verwalten

Gruppen ermöglichen es, Rechte zentral zu verwalten und für mehrere Benutzer wiederzuverwenden.

### Gruppenrechte anzeigen

Zeigt alle Rechte an, die einer Gruppe zugewiesen sind. Dieser Befehl gibt einen Überblick über alle Rechte, die mit der angegebenen Gruppe verbunden sind.

```
/perm group list <group>
```



### Rechte einer Gruppe hinzufügen

Um einer Gruppe ein oder mehrere Rechte hinzuzufügen. Alle Benutzer, die dieser Gruppe zugewiesen sind, erben die neuen Rechte sofort.

```
/perm group add <group> <permissions>
```



### Rechte von einer Gruppe entfernen

Entfernt nur die angegebenen Rechte von der Gruppe, ohne andere Rechte zu beeinflussen.

```
/perm group remove <group> <permissions>
```



<InlineVoucher />

