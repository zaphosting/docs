---
id: abioticfactor-becomeadmin
title: "Abiotic Factor: Admin werden"
description: Informationen darüber, wie man ein Admin auf einem Abiotic Factor Gameserver von ZAP-Hosting wird - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In **Abiotic Factor** benötigen Serveradministratoren erhöhte Rechte, um Spieler zu verwalten, Serverbefehle auszuführen oder Einstellungen während des Spiels zu ändern.

<InlineVoucher />



## Konfiguration

Die Konfiguration erfolgt über die Konfigurationsdatei `admin.ini`. Um darauf zuzugreifen, öffne den Abschnitt **Configs** in der Gameserververwaltung und suche die Datei `admin.ini`. Standardmäßig sollte die Datei den folgenden Eintrag enthalten, in dem Administratoren definiert werden können. Ersetze die `ExampleID` Werte durch die entsprechenden **SteamID64** der Spieler, denen du Admin-Berechtigungen erteilen möchtest.

```
[Moderators]
Moderator=ExampleID1
Moderator=ExampleID2
```



## Abschluss

Sobald die Informationen korrekt hinzugefügt wurden und der Server neu gestartet wurde, hat der angegebene Spieler vollen Admin-Zugriff im Spiel. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂



