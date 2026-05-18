---
id: abioticfactor-becomeadmin
title: "Abiotic Factor: Admin werden"
description: "Entdecke, wie du Spielern Admin-Rechte gibst, um volle Kontrolle über den Server zu haben und das Gameplay besser zu managen → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In **Abiotic Factor** brauchen Server-Admins erweiterte Rechte, um Spieler zu verwalten, Serverbefehle auszuführen oder Einstellungen während des Spiels anzupassen.

<InlineVoucher />

## Konfiguration

Die Konfiguration erfolgt über die `admin.ini` Datei. Um darauf zuzugreifen, öffne den Bereich **Configs** in der Gameserver-Verwaltung und suche die `admin.ini`. Standardmäßig sollte die Datei folgenden Eintrag enthalten, in dem Admins definiert werden können. Ersetze die `ExampleID` Werte durch die entsprechenden **SteamID64** der Spieler, denen du Admin-Rechte geben möchtest.

```
[Moderators]
Moderator=ExampleID1
Moderator=ExampleID2
```

## Abschluss

Sobald die Angaben korrekt eingetragen und der Server neu gestartet wurde, hat der angegebene Spieler vollen Admin-Zugriff im Spiel. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂


<InlineVoucher />