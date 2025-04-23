---
id: minecraft-bedrock-addons
title: "Minecraft Bedrock: Addons installieren"
description: Informationen zur Installation von Addons auf deinem Minecraft Bedrock Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Addons installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Einführung
Minecraft Bedrock Edition bietet native Modding-Unterstützung und eine große Community, die es dir ermöglicht, das Spielerlebnis mit deinen Freunden zu erweitern und zu verbessern. In dieser Anleitung erklären wir dir, wie du ein Addon auf deinem Minecraft Bedrock Server installierst und aktivierst.

<InlineVoucher />

## Vorbereitung

Um ein Addon auf deinem Minecraft: Bedrock Server zu installieren, musst du dich per FTP verbinden. Falls du damit nicht vertraut bist, empfehlen wir dir, einen Blick in die [FTP-Zugriff](gameserver-ftpaccess.md) Anleitung zu werfen.

Bevor du mit der Installation fortfährst, musst du auch Addons finden, die du auf deinem Server installieren möchtest. Wir empfehlen dir, auf [CurseForge](https://www.curseforge.com/minecraft-bedrock) zu stöbern, da sie eine riesige Bibliothek von Ressourcenpaketen und Verhaltenspaketen bieten, die von der Community erstellt wurden.

## Installation

Es gibt zwei Möglichkeiten, ein Addon in Minecraft Bedrock zu installieren. Du kannst die Addons entweder in eine neue Welt installieren, was den Prozess sehr einfach macht, oder du kannst sie in eine bestehende Welt installieren, was schwieriger ist.

## Neue Welt verwenden (einfach)

Um eine neue Welt mit Addons zu erstellen, musst du zunächst die heruntergeladene `.mcaddon` oder `.mcpack` Datei öffnen.
Dadurch wird Minecraft Bedrock geöffnet und das Addon in das Spiel importiert.

### Welt erstellen

Um eine Welt zu erstellen und die Addons darin zu installieren, klicke auf `Spielen` und dann auf `Neue Welt erstellen`.
Dann kannst du alle gewünschten Welteinstellungen auswählen:

![](https://screensaver01.zap-hosting.com/index.php/s/fQmAgiwAKApxnJZ/preview)

### Addons installieren

Bevor du auf `Erstellen` klickst, musst du zu `Ressourcenpakete` oder `Verhaltenspakete` navigieren.
Dort klickst du auf `Aktivieren` neben dem Namen des Addons:

![](https://screensaver01.zap-hosting.com/index.php/s/R52pqy2sMncWmJs/preview)

Einige Addons haben sowohl ein Ressourcenpaket als auch ein Verhaltenspaket, also musst du beide aktivieren. Wenn du alle gewünschten Addons aktiviert hast, kannst du auf `Erstellen` klicken.

Um die Welt zu exportieren und auf deinen Server hochzuladen, kannst du die Anleitung [Eigene Welt importieren](minecraft-bedrock-add-world.md) verwenden.

## Bestehende Welt verwenden (schwer)

Das Installieren des Addons in eine bestehende Welt ist schwieriger, hat aber den Vorteil, dass du mit dem Addon spielen und den bereits erzielten Fortschritt behalten kannst.

### 7-zip installieren

Um das Addon in eine bestehende Minecraft-Welt zu installieren, musst du 7-zip installieren, damit du die Addon-Datei öffnen kannst.
Der Installationsprozess ist sehr einfach. Du musst die [7-zip Download-Seite](https://www.7-zip.de/) besuchen, um die neueste Setup-Version zu erhalten:

![](https://screensaver01.zap-hosting.com/index.php/s/kzzJ8DCpRXkxRRj/preview)

Sobald die Datei heruntergeladen ist, öffne sie und klicke auf **Install**.

### Addon extrahieren

Sobald du das gewünschte Addon heruntergeladen hast, kannst du es mit 7-zip extrahieren, indem du mit der rechten Maustaste auf die `.mcaddon` Datei klickst, über `7-zip` fährst und auf `Entpacken nach ORDNERNAME` klickst:

![](https://screensaver01.zap-hosting.com/index.php/s/ZCPPNTLtErtEQWr/preview)

Wenn das Addon sowohl ein Ressourcenpaket als auch ein Verhaltenspaket enthält, musst du dasselbe für den Inhalt des Ordners tun, da es sich ebenfalls um `.mcpack` Dateien handelt:

![](https://screensaver01.zap-hosting.com/index.php/s/tpz8iJ4wymBo6ZF/preview)

Der Unterschied zwischen Ressourcenpaketen und Verhaltenspaketen kann im Ordnernamen erkannt werden. Ressourcenpaket-Ordner haben `RP` in ihrem Namen, Verhaltenspakete haben `BP`.

<Tabs>
  <TabItem value="resource-pack" label="Ressourcenpaket" default>

### Ressourcenpaket hochladen

Um das Ressourcenpaket hochzuladen, navigiere in deinem FTP-Client zu diesem Ordner:

```
/gXXXXXX/minecraft-bedrock/resource_packs
```

Dann kannst du den RP-Ordner per Drag & Drop in den FTP-Client ziehen:

![](https://screensaver01.zap-hosting.com/index.php/s/5c3X4S9fNaXrJFs/preview)

:::caution
Stelle sicher, dass du den richtigen Ordner hochlädst, der direkt das Ressourcenpaket enthält, und nicht nur einen Unterordner.
Der Inhalt des Ordners, den du hochlädst, sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### Ressourcenpaket aktivieren

Um das Ressourcenpaket zu aktivieren, musst du die `manifest.json` im RP-Ordner öffnen. Dann musst du im FTP-Client zum Weltordner navigieren:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Dort musst du die `world_resource_packs.json` öffnen.
Falls du noch nie Addons installiert hast, musst du diese Datei erstellen. Füge den folgenden Text in die Datei ein:

```
[
  {
    "pack_id" : "UUID HIER",
    "version" : [Version, Nummer, hier]
  }
]
```

Ersetze die Werte von `pack_id` und `version` mit den Werten aus der manifest.json, die du zuvor geöffnet hast:

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
Wenn du mehr als ein Paket installieren möchtest, kannst du mehrere Werte hinzufügen.
Es ist wichtig, dass die Werte durch ein Komma `,` getrennt sind, aber du darfst am Ende keines setzen:

```
[
  {
    "pack_id" : "UUID HIER",
    "version" : [Versions, Nummer, hier]
  },
  {
    "pack_id" : "UUID HIER",
    "version" : [Versions, Nummer, hier]
  },
  {
    "pack_id" : "UUID HIER",
    "version" : [Versions, Nummer, hier]
  }
]
```
:::

</TabItem>
<TabItem value="behavior-pack" label="Verhaltenspaket">

### Verhaltenspaket hochladen

Um das Verhaltenspaket hochzuladen, navigiere in deinem FTP-Client zu diesem Ordner:

```
/gXXXXXX/minecraft-bedrock/behavior_packs
```

Dann kannst du den BP-Ordner per Drag & Drop in den FTP-Client ziehen:

![](https://screensaver01.zap-hosting.com/index.php/s/rT5s9ML82d3daeM/preview)

:::caution
Stelle sicher, dass du den richtigen Ordner hochlädst, der direkt das Verhaltenspaket enthält, und nicht nur einen Unterordner.
Der Inhalt des Ordners, den du hochlädst, sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### Verhaltenspaket aktivieren

Um das Verhaltenspaket zu aktivieren, musst du die `manifest.json` im BP-Ordner öffnen. Dann musst du im FTP-Client zum Weltordner navigieren:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Dort musst du die `world_behavior_packs.json` öffnen.
Falls du noch nie Addons installiert hast, musst du diese Datei erstellen. Füge den folgenden Text in die Datei ein:

```
[
  {
    "pack_id" : "UUID HIER",
    "version" : [Versions, Nummer, hier]
  }
]
```

Ersetze die Werte von `pack_id` und `version` mit den Werten aus der manifest.json, die du zuvor geöffnet hast:

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
Wenn du mehr als ein Paket installieren möchtest, kannst du mehrere Werte hinzufügen.
Es ist wichtig, dass die Werte durch ein Komma `,` getrennt sind, aber du darfst am Ende keines setzen:

```
[
  {
    "pack_id" : "UUID HIER",
    "version" : [Versions, Nummer, hier]
  },
  {
    "pack_id" : "UUID HIER",
    "version" : [Versions, Nummer, hier]
  },
  {
    "pack_id" : "UUID HIER",
    "version" : [Versions, Nummer, hier]
  }
]
```
:::
</TabItem>
</Tabs>

### Änderungen überprüfen

Starte deinen Server, verbinde dich mit ihm und überprüfe, ob die Addons korrekt installiert wurden. Teste die neuen Funktionen oder Ressourcen, um sicherzustellen, dass alles wie erwartet funktioniert. Falls etwas nicht wie geplant funktioniert, überprüfe die Schritte erneut und stelle sicher, dass die Dateien korrekt hochgeladen wurden, und suche nach Fehlern in der Serverkonsole.

## Fazit

Das Installieren von Addons auf deinem Minecraft Bedrock Server ist eine großartige Möglichkeit, das Spielerlebnis zu erweitern und neue Inhalte hinzuzufügen. Mit dieser Anleitung kannst du ganz einfach Addons installieren und deinen Server anpassen. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂