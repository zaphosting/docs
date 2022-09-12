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

![image](https://user-images.githubusercontent.com/26007280/189706219-3de71428-db27-4b89-b1a8-c10a5634f6d0.png)

Den Login zur Datenbank erreichst du dort über dieses blaue Icon, links daneben findest du zudem die Logindaten (Benutzername und Passwort) für deine Datenbank:

![image](https://user-images.githubusercontent.com/26007280/189706236-c0b33f3c-bbc1-4963-aaa5-98c529a878bb.png)


Nach einem Klick auf diesen Button befindest du dich nun in phpMyAdmin, der verwaltungsoberfläche deiner Datenbank.
Dort wählst du nun links den Namen deiner per linksklick Datenbank aus:

![image](https://user-images.githubusercontent.com/26007280/189706275-a1ab4ff1-523b-40ce-90fc-000b3388e313.png)

Im Anschluss wählst du ebenfalls per Linksklick die Tabelle **players** aus in welcher du dann die Ränge vergeben kannst:


![image](https://user-images.githubusercontent.com/26007280/189706307-defc23bb-bb90-4915-be47-c3a2ed579d76.png)

Dort suchst du nun nach dem Namen des Spielers welchem du einen Rang zuweisen möchtest und klickst bei diesem auf **Bearbeiten**:

![image](https://user-images.githubusercontent.com/26007280/189706331-1235ed87-426c-4943-994c-1ec7440910ad.png)


## Vergeben der Ränge für Cop's und Medic's


Die Felder für das Cop- so wie Medic-Level findest du direkt recht weit oben in der Liste:

![image](https://user-images.githubusercontent.com/26007280/189706369-0b13c7af-a4c5-41c0-a04a-615f29f3226d.png)

Dort kannst du nun ganz einfach über das Dropdown-Menü das Rang-Level auswählen, zur Verfügung stehen hier Level von 1 bis 7 für Cop's und von 1 bis 5 für Medics.
Je höher das level desto mehr Berechtigungen hat der Cop oder Medic im Spiel, das hat unter anderem Einfluss auf die verfügbaren Waffen und Fahrzeuge.

![image](https://user-images.githubusercontent.com/26007280/189706411-89bba43a-5f83-4a9e-8a12-781ca8d6dc12.png)


## Vergeben der Ränge für Administratoren (Adminlevel)

Das Adminlevel legst du ebenfalls wie oben beschrieben fest, lediglich der Eintrag dazu befindet sich weiter unten:

![image](https://user-images.githubusercontent.com/26007280/189706444-fcc51eeb-18f8-48e4-b897-e9e8f413ae39.png)

Dort kannst du ebenbfalls per Dropdown zwischen 5 verschiedenen Leveln wählen. Je höher das level desto mehr Berechtigungen hat der Administrator im Spiel.


Um die Änderungen zu Speichern genügt ein Klick auf den **OK** Button unten rechts:

![image](https://user-images.githubusercontent.com/26007280/189706469-0c7a2570-b6d5-43b6-a620-f005f11de2fc.png)

Die Ränge wurden nun gespeichert, damit diese für den Spieler aktiv werden muss dieser sich einmal neu zum Server verbinden, ein Neustart
des Servers ist nicht notwendig.
