---
id: minecraft-bedrock-addons
title: "Minecraft Bedrock: Addons installieren"
description: "Entdecke, wie du deinen Minecraft Bedrock Server mit Addons aufpeppen kannst, um das Gameplay zu erweitern und deine Welt individuell zu gestalten → Jetzt mehr erfahren"
sidebar_label: Addons installieren
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Einführung
Minecraft Bedrock Edition unterstützt Modding nativ und hat eine riesige Community, die es dir ermöglicht, das Gameplay mit deinen Freunden zu erweitern und zu verbessern. In diesem Guide zeigen wir dir, wie du ein Addon auf deinem Minecraft Bedrock Server installierst und aktivierst.

<InlineVoucher />

## Vorbereitung

Um ein Addon-Map auf deinem Minecraft: Bedrock Server zu installieren, musst du dich per FTP verbinden. Falls du damit noch nicht vertraut bist, empfehlen wir dir einen Blick in unseren [FTP-Zugang](gameserver-ftpaccess.md) Guide.

Bevor du mit der Installation startest, solltest du dir die Addons raussuchen, die du auf deinem Server installieren möchtest. Wir empfehlen dir, auf [CurseForge](https://www.curseforge.com/minecraft-bedrock) zu stöbern, da dort eine riesige Bibliothek an Addons und Resource Packs von der Community bereitsteht.

## Installation

Es gibt zwei Wege, ein Addon in Minecraft Bedrock zu installieren. Entweder du installierst die Addons in eine neue Welt, was super easy ist, oder du installierst sie in eine bestehende Welt, was etwas komplizierter ist.

## Neue Welt verwenden (einfach)

Um eine neue Welt mit Addons zu erstellen, musst du einfach die heruntergeladene `.mcaddon` oder `.mcpack` Datei öffnen.
Dadurch startet Minecraft Bedrock und importiert das Addon ins Spiel.

### Welt erstellen

Um eine Welt zu erstellen und die Addons zu installieren, klickst du auf `Play` und dann auf `Create new world`.
Danach kannst du alle üblichen Welteinstellungen nach deinem Geschmack wählen:

![](https://screensaver01.zap-hosting.com/index.php/s/jtK2szxRNSSiea5/preview)

### Addons installieren

Bevor du auf `Create` klickst, musst du zu `Resource packs` oder `Behavior packs` navigieren.
Dort klickst du neben dem Addon-Namen auf `Activate`:

![](https://screensaver01.zap-hosting.com/index.php/s/ARnp4YFq5iZjxYZ/preview)

Manche Addons haben sowohl ein Resource Pack als auch ein Behavior Pack, also musst du beide aktivieren. Wenn du alle gewünschten Addons aktiviert hast, kannst du auf `Create` klicken.

Um die Welt zu exportieren und auf deinen Server hochzuladen, kannst du unseren [Eigenen Welt importieren](minecraft-bedrock-add-world.md) Guide nutzen.

## Bestehende Welt verwenden (kompliziert)

Ein Addon in eine bestehende Welt zu installieren ist etwas schwieriger, hat aber den Vorteil, dass du mit dem Addon spielen kannst und deinen Fortschritt behältst.

### 7-zip installieren

Um das Addon in eine bestehende Minecraft Welt zu installieren, brauchst du 7-zip, um die Addon-Datei zu öffnen.
Die Installation ist super easy: Besuche die [7-zip Downloadseite](https://www.7-zip.org/) und lade dir die neueste Setup-Version runter:

![](https://screensaver01.zap-hosting.com/index.php/s/iRxwB5yTpbTYpbt/preview)

Nach dem Download öffnest du die Datei und klickst auf **Install**.

### Addon entpacken

Sobald du dein gewünschtes Addon heruntergeladen hast, kannst du es mit 7-zip entpacken, indem du mit Rechtsklick auf die `.mcaddon` Datei klickst, über `7-zip` hoverst und dann `Extract to FOLDERNAME` auswählst:

![](https://screensaver01.zap-hosting.com/index.php/s/ZCPPNTLtErtEQWr/preview)

Falls das Addon sowohl ein Resource Pack als auch ein Behavior Pack enthält, musst du das Gleiche für die Inhalte des Ordners machen, da diese ebenfalls `.mcpack` Dateien sind:

![](https://screensaver01.zap-hosting.com/index.php/s/tpz8iJ4wymBo6ZF/preview)

Der Unterschied zwischen Resource Packs und Behavior Packs zeigt sich im Ordnernamen. Resource Pack Ordner haben `RP` im Namen, Behavior Packs `BP`.

<Tabs>
  <TabItem value="resource-pack" label="Resource Pack" default>

### Resource Pack hochladen

Um das Resource Pack hochzuladen, navigiere in deinem FTP-Client zu folgendem Ordner:

```
/gXXXXXX/minecraft-bedrock/resource_packs
```

Dann kannst du den RP-Ordner per Drag & Drop in den FTP-Client ziehen:

![](https://screensaver01.zap-hosting.com/index.php/s/5c3X4S9fNaXrJFs/preview)

:::caution
Achte darauf, dass du den richtigen Ordner hochlädst, der direkt das Resource Pack enthält – nicht nur einen Unterordner.
Der Inhalt des Ordners, den du hochlädst, sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### Resource Pack aktivieren

Um das Resource Pack zu aktivieren, öffne die `manifest.json` im RP-Ordner. Dann navigiere im FTP-Client zum Welt-Ordner:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Dort öffnest du die `world_resource_packs.json`.
Falls du noch keine Addons installiert hast, musst du diese Datei neu anlegen. Füge folgenden Text ein:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```

Ersetze die Werte bei `pack_id` und `version` mit den Werten aus der manifest.json, die du vorher geöffnet hast:

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
Wenn du mehrere Packs installieren willst, kannst du mehrere Einträge hinzufügen.
Wichtig: Zwischen den Einträgen muss ein Komma `,` stehen, aber nicht am Ende:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```
:::

</TabItem>
<TabItem value="behavior-pack" label="Behavior Pack">

### Behavior Pack hochladen

Um das Behavior Pack hochzuladen, navigiere in deinem FTP-Client zu folgendem Ordner:

```
/gXXXXXX/minecraft-bedrock/behavior_packs
```

Dann kannst du den BP-Ordner per Drag & Drop in den FTP-Client ziehen:

![](https://screensaver01.zap-hosting.com/index.php/s/rT5s9ML82d3daeM/preview)

:::caution
Achte darauf, dass du den richtigen Ordner hochlädst, der direkt das Behavior Pack enthält – nicht nur einen Unterordner.
Der Inhalt des Ordners, den du hochlädst, sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### Behavior Pack aktivieren

Um das Behavior Pack zu aktivieren, öffne die `manifest.json` im BP-Ordner. Dann navigiere im FTP-Client zum Welt-Ordner:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Dort öffnest du die `world_behavior_packs.json`.
Falls du noch keine Addons installiert hast, musst du diese Datei neu anlegen. Füge folgenden Text ein:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```

Ersetze die Werte bei `pack_id` und `version` mit den Werten aus der manifest.json, die du vorher geöffnet hast:

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
Wenn du mehrere Packs installieren willst, kannst du mehrere Einträge hinzufügen.
Wichtig: Zwischen den Einträgen muss ein Komma `,` stehen, aber nicht am Ende:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```
:::
</TabItem>
</Tabs>

### Änderungen überprüfen

Starte deinen Server, verbinde dich und check, ob die Addons korrekt installiert wurden. Teste die neuen Features oder Ressourcen, um sicherzugehen, dass alles wie gewünscht läuft. Falls was nicht klappt, überprüfe nochmal alle Schritte, ob die Dateien richtig hochgeladen wurden, und schau in die Server-Konsole nach Fehlern.

## Fazit

Addons auf deinem Minecraft Bedrock Server zu installieren ist eine super Möglichkeit, das Gameplay zu erweitern und neuen Content hinzuzufügen. Mit diesem Guide kannst du ganz easy Addons installieren und deinen Server individuell anpassen. Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />