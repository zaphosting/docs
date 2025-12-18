---
id: unturned-workshop
title: "Unturned: Workshop-Inhalte auf dem Server installieren"
description: "Entdecke, wie du deinen Unturned Gameserver mit individuellem Steam Workshop-Content für ein persönliches Spielerlebnis aufpeppen kannst → Jetzt mehr erfahren"
sidebar_label: Workshop-Inhalte
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Der Steam Workshop gibt dir die Möglichkeit, deinen Server noch individueller zu gestalten. Im Folgenden erklären wir dir, wie du mehr Content über den Steam Workshop auf deinem Server hinzufügen kannst.

### Vorbereitung

Es gibt verschiedene Quellen, wo du Mods, Maps, Modelle usw. herunterladen kannst. Die beliebteste ist der Steam Workshop. Dort findest du viele Ressourcen, die du auf deinem Server installieren kannst. Zuerst musst du die gewünschten Workshop-Items finden. Den Steam Workshop für Unturned findest du hier: [Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)

Sobald du dich entschieden hast, musst du die ID des Workshop-Items kopieren und dann im Interface hinzufügen. Je nachdem, ob du den Steam Workshop über deinen Browser oder den Steam Client durchstöberst, kannst du die ID wie folgt kopieren:

- **Steam Client**

  Mach einen Rechtsklick auf die Workshop-Seite des Items und klicke auf „Seiten-URL kopieren“. Kopiere die ID aus der URL.

  ![](https://screensaver01.zap-hosting.com/index.php/s/QD89esrFTQ8gZfb/preview)

- **Browser**

  In der URL-Leiste findest du eine Zahlenkombination nach **.../?id=**. Kopiere diese.

  ![](https://screensaver01.zap-hosting.com/index.php/s/XzRRT98ess4dyFX/preview)

### Content hinzufügen

Sobald du die gewünschten Inhalte gesammelt hast, werden sie jetzt auf dem Server hinzugefügt. Die Inhalte werden in der **WorkshopDownloadConfig.json** Config angegeben, die du im Interface unter Configs findest.

![](https://screensaver01.zap-hosting.com/index.php/s/T7gsio62gDH7DHb/preview)

Wir fügen jetzt die IDs der einzelnen Steam Workshop-Items zu 'FileIDs' hinzu. Das Endergebnis könnte so aussehen:

```json
{
  "File_IDs": [
  	1567256534,
    1234567890, // Platzhalter (Beispiel)
    0987654321  // Platzhalter (Beispiel)
  
  ],
  "Ignore_Children_File_IDs": [],
  "Query_Cache_Max_Age_Seconds": 600,
  "Max_Query_Retries": 2,
  "Use_Cached_Downloads": true,
  "Should_Monitor_Updates": true,
  "Shutdown_Update_Detected_Timer": 600,
  "Shutdown_Update_Detected_Message": "Workshop-Datei-Update erkannt, Shutdown in: {0}",
  "Shutdown_Kick_Message": "Shutdown wegen Workshop-Datei-Update."
}
```

Danach muss der Server gestartet werden. Der hinzugefügte Content wird während des Startvorgangs automatisch heruntergeladen. Das kannst du in der Live-Konsole sehen. Die Ausgabe sollte so aussehen:

```
1 Workshop-Item(s) zum Download...
Workshop-Item 1567256534 wird heruntergeladen
Workshop-Item erfolgreich heruntergeladen: 1567256534
```

Der Content wurde jetzt erfolgreich heruntergeladen, eingerichtet und sollte aktiv sein.

<InlineVoucher />