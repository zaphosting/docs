---
id: unturned_workshop
title: Workshop Inhalte
sidebar_label: Workshop Inhalte
---

Mit dem Steam Workshop hast du die Möglichkeit deinen Server noch individueller anzupassen. Im folgenden wird erklärt wie du mittels Steam Workshop weitere Inhalte zu deinem Server hinzufügen kannst. 

### Vorbereitung

Es gibt verschiedene Quellen wo du Mods, Maps, Models, etc. herunterladen kannst. Die bekannteste Variante ist der Steam Workshop. Dort findest du zahlreiche Möglichkeiten die du auf deinen Server installieren kannst. Dafür müssen zunächst einmal die gewünschten Workshop Items rausgesucht werden. Den Steam Workshop zu Unturned findest du hier:  [Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)



Wenn du dich entschieden hast, dann musst du die ID des Workshop Eintrags kopieren und im Anschluss im Interface hinzufügen. Je nachdem ob du den Steam Workshop über den Browser oder Steam Client durchstöberst kannst du folgendermaßen die ID kopieren:

- **Steam Client**

  Mache einen Rechtsklick bei der Steam Workshop Seite des Mods und klicke auf Seitenurl kopieren. Aus der URL kopierst du die ID. 

  ![img](https://screensaver01.zap-hosting.com/index.php/s/GFRMkRyFemGYJkJ/preview)

  

- **Browser**

  In der URL-Leiste findest du in der URL hinter **.../?id=** eine Zahlenkombination. Diese musst du kopieren. 

  ![img](https://screensaver01.zap-hosting.com/index.php/s/d5t8p3iSZm52KbS/preview)





### Inhalte hinzufügen

Nachdem die gewünschten Inhalte rausgesucht wurden, werden diese nun beim Server eingetragen. Die Inhalte werden in der **WorkshopDownloadConfig.json** Config eingetragen, die im Interface unter Configs gefunden werden kann.

![img](https://screensaver01.zap-hosting.com/index.php/s/GfmCJcCHZCxywtJ/preview)

Bei `FileIDs` werden nun die IDs der einzelnen Steam Workshop Inhalte eingetragen. Das Endresultat davon kann dann die folgt aussehen:

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
  "Shutdown_Update_Detected_Message": "Workshop file update detected, shutdown in: {0}",
  "Shutdown_Kick_Message": "Shutdown for Workshop file update."
}
```

Im Anschluss muss der Server gestartet werden. Beim Startvorgang werden die eingetragenen Inhalte automatisch heruntergeladen. Das kannst du in der Live Konsole nachvollziehen. Die Ausgabe dazu sollte folgendermaßen aussehen:

```
1 workshop item(s) to download...
Downloading workshop item 1567256534
Successfully downloaded workshop item: 1567256534
```

Der Inhalt wurde nun erfolgreich heruntergeladen, eingerichtet und sollte im Anschluss bereits aktiv sein. 
