---
id: arma3_altislife_ranks
title: Arma 3: Altis Life - Ränge bei einem Altis Life Server hinzufügen
description: Informationen, wie du Ränge auf deinem Altis Life-Server von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Altis Life Ränge
---


## Ränge in ArmA 3: Altis Life

In ArmA 3 gibt es verschiedene Ränge welche einem Spieler zugewiesen werden können. Hierzu gehören Cop, Medic so wie die verschiedenen Admin-Ränge.
Je nach Server kann es noch weitere Ränge geben wenn zum Beispiel eine neue Fraktion oder ein Beruf eingebaut wurde.
Im folgenden lernst du wie du die Ränge für Cop's, Medic's und Administratoren im Spiel vergibst, geschehen tut dies immer mithilfe der Datenbank innerhalb der Tabelle **players**.

> WICHTIG: Damit der Name des jeweiligen Spieler in der Datenbank zu finden ist muss dieser sich mindestens ein mal mit dem Server verbunden haben!


## Öffnen der Datenbank

Als erstes navigierst du zu deiner Datenbank welche du links über Das Menü unter **Werkzeuge** > **Datenbanken** erreichst:

![](https://screensaver01.zap-hosting.com/index.php/s/m2S5LqCX8L9esxS/preview)

Den Login zur Datenbank erreichst du dort über dieses blaue Icon, links daneben findest du zudem die Logindaten (Benutzername und Passwort) für deine Datenbank:

![](https://screensaver01.zap-hosting.com/index.php/s/AHwETkjRPaEsmKT/preview)


Nach einem Klick auf diesen Button befindest du dich nun in phpMyAdmin, der verwaltungsoberfläche deiner Datenbank.
Dort wählst du nun links den Namen deiner per linksklick Datenbank aus:

![](https://screensaver01.zap-hosting.com/index.php/s/HxeWEfByXPRHrqa/preview)

Im Anschluss wählst du ebenfalls per Linksklick die Tabelle **players** aus in welcher du dann die Ränge vergeben kannst:


![](https://screensaver01.zap-hosting.com/index.php/s/HGDLpGnCo88eJ3f/preview)

Dort suchst du nun nach dem Namen des Spielers welchem du einen Rang zuweisen möchtest und klickst bei diesem auf **Bearbeiten**:

![](https://screensaver01.zap-hosting.com/index.php/s/kaGg4iFw9n7C7sn/preview)


## Vergeben der Ränge für Cop's und Medic's


Die Felder für das Cop- so wie Medic-Level findest du direkt recht weit oben in der Liste:

![](https://screensaver01.zap-hosting.com/index.php/s/CpToEDrPSMMHyxw/preview)

Dort kannst du nun ganz einfach über das Dropdown-Menü das Rang-Level auswählen, zur Verfügung stehen hier Level von 1 bis 7 für Cop's und von 1 bis 5 für Medics.
Je höher das level desto mehr Berechtigungen hat der Cop oder Medic im Spiel, das hat unter anderem Einfluss auf die verfügbaren Waffen und Fahrzeuge.

![](https://screensaver01.zap-hosting.com/index.php/s/dMeDWPMKG2CtTAT/preview)


## Vergeben der Ränge für Administratoren (Adminlevel)

Das Adminlevel legst du ebenfalls wie oben beschrieben fest, lediglich der Eintrag dazu befindet sich weiter unten:

![](https://screensaver01.zap-hosting.com/index.php/s/zmerMmgbE8ng5Pt/preview)

Dort kannst du ebenbfalls per Dropdown zwischen 5 verschiedenen Leveln wählen. Je höher das level desto mehr Berechtigungen hat der Administrator im Spiel.


Um die Änderungen zu Speichern genügt ein Klick auf den **OK** Button unten rechts:

![](https://screensaver01.zap-hosting.com/index.php/s/37q6TFyEDrNgHEX/preview)

Die Ränge wurden nun gespeichert, damit diese für den Spieler aktiv werden muss dieser sich einmal neu zum Server verbinden, ein Neustart
des Servers ist nicht notwendig.
