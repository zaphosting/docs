---
id: arma3-altislife-ranks
title: "Arma 3: Ränge auf einem Altis Life Server hinzufügen"
description: "Lerne, wie du Spieler-Ränge wie Cop, Medic und Admin in Arma 3 zuweist und verwaltest, um das Gameplay und die Serverrollen zu verbessern → Jetzt mehr erfahren"
sidebar_label: Altis Life Ränge
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In Arma 3 gibt es verschiedene Ränge, die einem Spieler zugewiesen werden können. Dazu gehören Cop, Medic und die verschiedenen Admin-Ränge.  
Je nach Server können weitere Ränge existieren, wenn zum Beispiel eine neue Fraktion oder ein neuer Beruf hinzugefügt wird.  
Im Folgenden lernst du, wie du die Ränge für Cops, Medics und Administratoren im Spiel zuweist – immer über die Datenbank in der Tabelle **players**.

:::info
WICHTIG: Um den Namen des Spielers in der Datenbank zu finden, muss sich der Spieler mindestens einmal auf dem Server eingeloggt haben!
:::

<InlineVoucher />

## Die Datenbank öffnen

Zuerst navigierst du zu deiner Datenbank, die du über das Menü links unter **Tools** > **Datenbanken** erreichst:

![](https://screensaver01.zap-hosting.com/index.php/s/Y8mZZ7JCNqr9zZM/preview)

Der Login zur Datenbank erfolgt über dieses blaue Icon, links findest du außerdem die Zugangsdaten (Benutzername und Passwort) für deine Datenbank:

![](https://screensaver01.zap-hosting.com/index.php/s/3tta9MQ5XcdZk98/preview)

Nach dem Klick auf den Button bist du jetzt in phpMyAdmin, der Verwaltungsoberfläche deiner Datenbank.  
Dort wählst du links den Namen deiner Datenbank aus:

![](https://screensaver01.zap-hosting.com/index.php/s/YfTpyoXmArbtBwb/preview)

Anschließend wählst du die Tabelle **players** per Linksklick aus, in der du die Ränge zuweisen kannst:

![](https://screensaver01.zap-hosting.com/index.php/s/A643Ds2LFjFCzba/preview)

Dort suchst du nach dem Namen des Spielers, dem du einen Rang zuweisen möchtest, und klickst auf **Bearbeiten**:

![](https://screensaver01.zap-hosting.com/index.php/s/KrnpZMyeiL8YXAm/preview)

## Ränge für Cops und Medics zuweisen

Die Felder für das Cop- sowie Medic-Level findest du ganz oben in der Liste:

![](https://screensaver01.zap-hosting.com/index.php/s/z5KoxwqHf7XMcFd/preview)

Dort kannst du jetzt ganz einfach das Rang-Level über das Dropdown-Menü auswählen. Verfügbar sind Level von 1 bis 7 für Cops und von 1 bis 5 für Medics.  
Je höher das Level, desto mehr Rechte hat der Cop oder Medic im Spiel. Das wirkt sich unter anderem auf die verfügbaren Waffen und Fahrzeuge aus.

![](https://screensaver01.zap-hosting.com/index.php/s/bKr4MHNy5LYnWYr/preview)

## Ränge für Administratoren (Admin-Level) zuweisen

Das Admin-Level setzt du wie oben beschrieben, nur der Eintrag dafür befindet sich weiter unten:

![](https://screensaver01.zap-hosting.com/index.php/s/fc5G93bWkdW7nAj/preview)

Auch hier kannst du per Dropdown zwischen 5 verschiedenen Leveln wählen. Je höher das Level, desto mehr Rechte hat der Administrator im Spiel.

Um die Änderungen zu speichern, klickst du einfach unten rechts auf den **GO**-Button:

![](https://screensaver01.zap-hosting.com/index.php/s/y85Zwq3J8zM9sFi/preview)

Die Ränge sind jetzt gespeichert und werden aktiv, sobald sich der Spieler einmal neu auf dem Server verbindet. Ein Server-Neustart ist nicht nötig.

<InlineVoucher />