---
id: palworld-admin
title: "Palworld: Setup Admin"
description: Informationen zum Einrichten und Hinzufügen von Administratoren für einen Palworld-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Setup Admin
---

In dieser Anleitung werden wir uns ansehen, wie du deinen Server mit einem Admin-Passwort konfigurierst und dich selbst als Admin im Spiel hinzufügst. Dieses Passwort kann mit vertrauenswürdigen Spielern geteilt werden, um eine Reihe von Admin-Befehlen zu erhalten. Mehr über diese Serverbefehle erfährst du in unserem [Palworld Server Commands Anleitung](palworld-server-commands.md).

## Konfiguriere dein Admin-Passwort

Als Erstes musst du auf deine Konfigurationseinstellungen zugreifen. Dazu gibt es mehrere Möglichkeiten, die wir im Folgenden auflisten, einschließlich einer Anleitung zum Festlegen des Passworts. Wir empfehlen, die Option **Webinterface** zu verwenden, da diese am benutzerfreundlichsten ist. Sobald du dein Admin-Passwort festgelegt hast, kannst du zum nächsten Abschnitt übergehen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Einstellungen" label="Über Webinterface" default>

#### Über Webinterface

Die benutzerfreundlichste Methode ist es, im Webinterface deines Gameservers in den Bereich **Einstellungen** zu gehen.

![image](https://screensaver01.zap-hosting.com/index.php/s/cGbSnRp5gfbWnnb/preview)

Suche im Bereich **Einstellungen** nach der Option **Gameserver Passwort**. Erstelle in diesem Feld ein Passwort, das du verwenden möchtest, und gib es ein.

![image](https://github.com/zaphosting/docs/assets/42719082/1cd01ae3-1abd-45d5-9bdb-69e63364764d)

:::info
Wenn du ein Passwort ausgewählt hast, scrolle nach oben und drücke die grüne Taste **Speichern**, um die Auswahl zu bestätigen.

![image](https://github.com/zaphosting/docs/assets/42719082/0c314a42-1644-4dcf-9d71-45428059cd53)
:::

</TabItem>

<TabItem value="configs" label="Über die WI-Konfigurationsdatei">

#### Über die WI-Konfigurationsdatei

:::note
Der Server muss angehalten werden, bevor die Konfiguration bearbeitet werden kann. Wenn du die Konfiguration bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Wenn du die Rohdatei direkt bearbeiten möchtest, kannst du dies auch tun, indem du im Webinterface deines Gameservers in den Bereich **Configs** gehst und dort auf die blaue Schaltfläche "Datei bearbeiten" klickst, wie unten zu sehen:

![image](https://github.com/zaphosting/docs/assets/42719082/ba2b275b-952f-4a5e-bdc0-5850b4eb5a85)

Dadurch wird ein Texteditor direkt auf der Seite geöffnet, mit dem du die Datei bearbeiten kannst. Finde die Option **AdminPassword** in der Datei (benutze die Tastenkombination `CTRL+F`, um die Suche zu erleichtern) und gib das gewünschte Admin-Passwort ein. Zum Schluss speicherst du die Datei und kannst dann deinen Server starten.

![image](https://github.com/zaphosting/docs/assets/42719082/d86376b8-1a41-4fb0-b8cd-8570ddcaa9ae)

</TabItem>

<TabItem value="ftp" label="Über FTP">

#### Über FTP

:::note
Der Server muss angehalten werden, bevor die Konfiguration bearbeitet werden kann. Wenn du die Konfiguration bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Die letzte Methode, um auf die Rohdatei zuzugreifen, ist über FTP. Wenn du dich mit FTP nicht auskennst, empfehlen wir dir, einen Blick in die Anleitung [Zugriff per FTP](gameserver-ftpaccess.md) zu werfen. Diese Methode dauert jedoch länger und wenn du den Inhalt der Datei direkt bearbeiten möchtest, empfehlen wir dir, wie bereits erwähnt, den Bereich **Configs** im Webinterface deines Gameservers zu verwenden.

</TabItem>
</Tabs>

## Sich als Admin einstellen

Sobald dein Admin-Passwort festgelegt ist, musst du dich selbst als Admin hinzufügen. Starte Palworld und verbinde dich mit deinem Server. Wenn du dabei Hilfe brauchst, wirf einen Blick in unserer [Palworld mit dem Server verbinden Anleitung](palworld-connect.md).

Öffne im Spiel den Chat mit "Enter". Gib dann den folgenden Befehl ein und ersetze dabei "Passwort" durch das Admin-Passwort, das du zuvor festgelegt hast:

```
/AdminPassword [Passwort]
```

![image](https://github.com/zaphosting/docs/assets/42719082/2f6e3ee7-e83f-4b71-87dc-d36f9b8c7340)

Du solltest eine Erfolgsmeldung im Chat erhalten, wenn dies korrekt war. Wenn du eine Fehlermeldung erhältst, vergewissere dich bitte, dass das eingegebene Admin-Passwort korrekt ist und das, das du im vorherigen Schritt festgelegt hast.