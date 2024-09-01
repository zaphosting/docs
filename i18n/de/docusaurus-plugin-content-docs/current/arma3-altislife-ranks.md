---
id: arma3-altislife-ranks
title: "Arma 3: Ränge bei einem Altis Life Server hinzufügen"
description: Informationen, wie du Ränge auf deinem Altis Life-Server von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Altis Life Ränge
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In Arma 3 gibt es verschiedene Ränge, welche einem Spieler zugewiesen werden können. Hierzu gehören Cop, Medic so wie die verschiedenen Admin-Ränge.
Je nach Server kann es noch weitere Ränge geben, wenn zum Beispiel eine neue Fraktion oder ein Beruf eingebaut wurde.
Im Folgenden lernst du wie du die Ränge für Cop's, Medic's und Administratoren im Spiel vergibst, geschehen tut dies immer mithilfe der Datenbank innerhalb der Tabelle **players**.

:::info
WICHTIG: Damit der Name des jeweiligen Spielers in der Datenbank zu finden ist, muss dieser sich mindestens ein mal mit dem Server verbunden haben!
:::

<InlineVoucher />

## Öffnen der Datenbank

Als Erstes navigierst du zu deiner Datenbank, welche du links über das Menü unter **Werkzeuge** > **Datenbanken** erreichst:

![image](https://screensaver01.zap-hosting.com/index.php/s/WPifJDE3QgLS73E/preview)

Den Login zur Datenbank erreichst du dort über dieses blaue Icon, links daneben findest du zudem die Logindaten (Benutzername und Passwort) für deine Datenbank:

![image](https://screensaver01.zap-hosting.com/index.php/s/Gx2PKCySnL9is4J/preview)


Nach einem Klick auf diesen Button befindest du dich nun in PhpMyAdmin, der Verwaltungsoberfläche deiner Datenbank.
Dort wählst du nun links den Namen deiner per Linksklick Datenbank aus:

![image](https://screensaver01.zap-hosting.com/index.php/s/ZBr5ATAq9kXnrzS/preview)

Im Anschluss wählst du ebenfalls per Linksklick die Tabelle **players** aus, in welcher du dann die Ränge vergeben kannst:


![image](https://screensaver01.zap-hosting.com/index.php/s/fG67Qt3a4LqmPTH/preview)

Dort suchst du nun nach dem Namen des Spielers, welchem du einen Rang zuweisen möchtest und klickst bei diesem auf **Bearbeiten**:

![image](https://screensaver01.zap-hosting.com/index.php/s/mPoEJpRxq3MyR7N/preview)


## Vergeben der Ränge für Cop's und Medic's


Die Felder für das Cop- so wie Medic-Level findest du direkt recht weit oben in der Liste:

![image](https://screensaver01.zap-hosting.com/index.php/s/dxxnG3PDSeYmgad/preview)

Dort kannst du nun ganz einfach über das Dropdown-Menü das Rang-Level auswählen, zur Verfügung stehen hier Level von 1 bis 7 für Cop's und von 1 bis 5 für Medics.
Je höher das level desto mehr Berechtigungen hat der Cop oder Medic im Spiel, das hat unter anderem Einfluss auf die verfügbaren Waffen und Fahrzeuge.

![image](https://screensaver01.zap-hosting.com/index.php/s/5S3FEgxe6WsMRzC/preview)


## Vergeben der Ränge für Administratoren (Adminlevel)

Das Adminlevel legst du ebenfalls wie oben beschrieben fest, lediglich der Eintrag dazu befindet sich weiter unten:

![image](https://screensaver01.zap-hosting.com/index.php/s/MJ2LpAfiLW8JfEd/preview)

Dort kannst du ebenfalls per Dropdown zwischen 5 verschiedenen Leveln wählen. Je höher das Level, desto mehr Berechtigungen hat der Administrator im Spiel.


Um die Änderungen zu speichern, genügt ein Klick auf den **OK** Button unten rechts:

![image](https://screensaver01.zap-hosting.com/index.php/s/28ZxaiFRqZ3TtND/preview)

Die Ränge wurden nun gespeichert, damit diese für den Spieler aktiv werden muss dieser sich einmal neu zum Server verbinden, ein Neustart
des Servers ist nicht notwendig.