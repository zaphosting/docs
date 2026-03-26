---
id: minecraft-bedrock-addons
title: "Minecraft Bedrock: Addons installieren"
description: "Entdecke, wie du deinen Minecraft Bedrock Gameserver mit Addons erweiterst, um das Gameplay zu verbessern und deine Welt individuell zu gestalten → Jetzt mehr erfahren"
sidebar_label: Addons installieren
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Einführung
Minecraft Bedrock Edition unterstützt Modding nativ und hat eine riesige Community, die es dir ermöglicht, das Gameplay mit deinen Freunden zu erweitern und zu verbessern. In dieser Anleitung zeigen wir dir, wie du ein Addon auf deinem Minecraft Bedrock Gameserver installierst und aktivierst.

<InlineVoucher />

## Vorbereitung

Um eine Addon-Map auf deinem Minecraft: Bedrock Gameserver zu installieren, musst du dich per FTP verbinden. Falls du damit noch nicht vertraut bist, empfehlen wir dir einen Blick in die [FTP-Zugang](gameserver-ftpaccess.md) Anleitung.

Bevor du mit der Installation startest, solltest du Addons finden, die du auf deinem Server installieren möchtest. Wir empfehlen dir, auf [CurseForge](https://www.curseforge.com/minecraft-bedrock) zu stöbern, da dort eine riesige Bibliothek an Addons und Resource Packs von der Community angeboten wird.

## Installation

Es gibt zwei Möglichkeiten, ein Addon in Minecraft Bedrock zu installieren. Du kannst die Addons entweder in einer neuen Welt installieren, was sehr einfach ist, oder in einer bestehenden Welt, was etwas komplizierter ist.

## Neue Welt verwenden (einfach)

Um eine neue Welt mit Addons zu erstellen, musst du einfach die heruntergeladene `.mcaddon` oder `.mcpack` Datei öffnen.
Dadurch startet Minecraft Bedrock und importiert das Addon ins Spiel.

### Welt erstellen

Um eine Welt zu erstellen und die Addons zu installieren, klicke auf `Play` und dann auf `Create new world`.
Du kannst dann alle üblichen Welteinstellungen vornehmen:

![](https://screensaver01.zap-hosting.com/index.php/s/jtK2szxRNSSiea5/preview)

### Addons installieren

Bevor du auf `Create` klickst, musst du zu `Resource packs` oder `Behavior packs` navigieren.
Dort klickst du neben dem Addon-Namen auf `Activate`:

![](https://screensaver01.zap-hosting.com/index.php/s/ARnp4YFq5iZjxYZ/preview)

Manche Addons haben sowohl ein Resource Pack als auch ein Behavior Pack, daher musst du beide aktivieren. Wenn du alle gewünschten Addons aktiviert hast, kannst du auf `Create` klicken.

Um die Welt zu exportieren und auf deinen Server hochzuladen, kannst du die [Eigene Welt importieren](minecraft-bedrock-add-world.md) Anleitung nutzen.

## Bestehende Welt verwenden (kompliziert)

Ein Addon in einer bestehenden Welt zu installieren ist schwieriger, hat aber den Vorteil, dass du mit dem Addon spielen kannst und deinen Fortschritt behältst.

### 7-zip installieren

Um das Addon in eine bestehende Minecraft-Welt zu installieren, brauchst du 7-zip, um die Addon-Datei zu öffnen.
Die Installation ist ganz einfach: Besuche die [7-zip Download-Seite](https://www.7-zip.org/) und lade dir die neueste Setup-Version herunter:

![](https://screensaver01.zap-hosting.com/index.php/s/iRxwB5yTpbTYpbt/preview)

Nach dem Download öffnest du die Datei und klickst auf **Installieren**.

### Addon entpacken

Sobald du dein gewünschtes Addon heruntergeladen hast, kannst du es mit 7-zip entpacken, indem du mit der rechten Maustaste auf die `.mcaddon` Datei klickst, dann auf `7-zip` gehst und `Extract to FOLDERNAME` auswählst:

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
Achte darauf, dass du den richtigen Ordner hochlädst, der direkt das Resource Pack enthält, nicht nur einen Unterordner.
Der Inhalt des Ordners, den du hochlädst, sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### Resource Pack aktivieren

Um das Resource Pack zu aktivieren, öffne die `manifest.json` im RP-Ordner. Dann navigiere im FTP-Client zum Welt-Ordner:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Dort öffnest du die `world_resource_packs.json`.
Falls du noch keine Addons installiert hast, musst du diese Datei erstellen. Füge folgenden Text in die Datei ein:

```
[
  {
    "pack_id" : "UUID HIER",
    "version" : [version, nummer, hier]
  }
]
```

Ersetze die Werte von `pack_id` und `version` mit den Werten aus der manifest.json, die du zuvor geöffnet hast:

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
Wenn du mehrere Packs installieren möchtest, kannst du mehrere Werte hinzufügen.
Wichtig ist, dass die Werte durch ein Komma `,` getrennt sind, aber unten kein Komma steht:

```
[
  {
    "pack_id" : "UUID HIER",
    "version" : [version, nummer, hier]
  },
  {
    "pack_id" : "UUID HIER",
    "version" : [version, nummer, hier]
  },
  {
    "pack_id" : "UUID HIER",
    "version" : [version, nummer, hier]
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
Achte darauf, dass du den richtigen Ordner hochlädst, der direkt das Behavior Pack enthält, nicht nur einen Unterordner.
Der Inhalt des Ordners, den du hochlädst, sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### Behavior Pack aktivieren

Um das Behavior Pack zu aktivieren, öffne die `manifest.json` im BP-Ordner. Dann navigiere im FTP-Client zum Welt-Ordner:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Dort öffnest du die `world_behavior_packs.json`.
Falls du noch keine Addons installiert hast, musst du diese Datei erstellen. Füge folgenden Text in die Datei ein:

```
[
  {
    "pack_id" : "UUID HIER",
    "version" : [version, nummer, hier]
  }
]
```

Ersetze die Werte von `pack_id` und `version` mit den Werten aus der manifest.json, die du zuvor geöffnet hast:

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
Wenn du mehrere Packs installieren möchtest, kannst du mehrere Werte hinzufügen.
Wichtig ist, dass die Werte durch ein Komma `,` getrennt sind, aber unten kein Komma steht:

```
[
  {
    "pack_id" : "UUID HIER",
    "version" : [version, nummer, hier]
  },
  {
    "pack_id" : "UUID HIER",
    "version" : [version, nummer, hier]
  },
  {
    "pack_id" : "UUID HIER",
    "version" : [version, nummer, hier]
  }
]
```
:::
</TabItem>
</Tabs>

### Änderungen überprüfen

Starte deinen Server, verbinde dich und überprüfe, ob die Addons korrekt installiert wurden. Teste die neuen Features oder Ressourcen, um sicherzugehen, dass alles wie erwartet funktioniert. Falls etwas nicht klappt, überprüfe die Schritte nochmal, ob die Dateien richtig hochgeladen wurden, und suche nach Fehlern in der Server-Konsole.

## Abschluss

Addons auf deinem Minecraft Bedrock Gameserver zu installieren ist eine super Möglichkeit, das Gameplay zu erweitern und neuen Content hinzuzufügen. Mit dieser Anleitung kannst du Addons einfach installieren und deinen Server individuell anpassen. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – wir helfen dir gerne! 🙂

<InlineVoucher />