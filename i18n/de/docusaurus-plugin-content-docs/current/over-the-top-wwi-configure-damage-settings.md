---
id: over-the-top-wwi-configure-damage-settings
title: "Over the Top WWI: Schadenseinstellungen konfigurieren"
description: "Lerne, wie du Schaden und Kampfverhalten auf deinem Over the Top WWI Server anpasst → Jetzt mehr erfahren"
sidebar_label: Schadenseinstellungen
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Schadenseinstellungen in **Over the Top WWI** bestimmen, wie tödlich der Kampf ist und wie sich Waffen im Spiel verhalten. Durch das Anpassen dieser Werte kannst du ein realistischeres Erlebnis schaffen oder eine lockerere und nachsichtigere Spielumgebung.

Indem du Schadensmultiplikatoren und Kampfmechaniken veränderst, kannst du maßgeblich beeinflussen, wie schnell Spieler ausgeschaltet werden und wie Gefechte ablaufen.

<InlineVoucher />

## Konfiguration

Die Schadenseinstellungen werden in der Server-Konfigurationsdatei festgelegt. Du kannst diese Datei in deinem **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. In dieser Datei findest du folgende Parameter:

```
ShootingDamageMulti = 100
MeleeDamageMulti = 300
ShootingVelocityMulti = 100
DragEffector = 30
WindEffector = 15
RandomEffectorr = 10
```

- `ShootingDamageMulti` steuert den Schaden von Fernkampfwaffen

- `MeleeDamageMulti` definiert den Schaden von Nahkampfangriffen

- `ShootingVelocityMulti` beeinflusst die Projektilgeschwindigkeit und kann Genauigkeit sowie Treffererkennung beeinflussen

- `DragEffector` bestimmt, wie schnell Kugeln über Distanz an Geschwindigkeit verlieren

- `WindEffector` legt fest, wie stark der Wind die Kugelbahn beeinflusst

- `RandomEffectorr` fügt der Kugelbewegung Zufälligkeiten hinzu und beeinflusst so die Genauigkeit

Durch das Anpassen dieser Werte kannst du entweder ein realistischeres ballistisches Verhalten erzeugen oder die Kampfmechaniken vereinfachen – je nachdem, wie dein Serverstil ist.

Nachdem du die `ServerConfiguration.ini` geändert hast, speichere die Datei und starte deinen Server neu. Die neuen Schaden- und Kampfeinstellungen werden dann automatisch übernommen.

## Fazit

Glückwunsch! Du hast erfolgreich die Schadenseinstellungen auf deinem **Over the Top WWI Gameserver** konfiguriert. Mit diesen Parametern kannst du das Kampfverhalten feinjustieren und ein Spielerlebnis schaffen, das perfekt zu deiner Community passt.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />