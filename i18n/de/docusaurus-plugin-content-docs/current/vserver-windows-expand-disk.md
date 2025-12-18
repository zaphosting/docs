---
id: vserver-windows-expand-disk
title: "vServer: Festplatte (Partition) unter Windows Server erweitern"
description: "Entdecke, wie du deine Windows Server-Partition sicher erweiterst, um neuen Speicherplatz effektiv zu nutzen → Jetzt mehr erfahren"
sidebar_label: Partition erweitern
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Windows OS bietet integrierte Tools zur Festplatten- und Partitionsverwaltung, mit denen du eine Vielzahl von Aktionen durchführen kannst – darunter Partitionen erweitern, Festplatten aufteilen und mehr. Besonders wichtig ist das Erweitern von Partitionen, wenn du den Speicherplatz deines Windows Servers aufgerüstet hast. In dieser Anleitung zeigen wir dir, wie du eine Partition auf deinem Windows Server erweiterst.

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per RDP mit deinem Windows Server. Falls du dabei Hilfe brauchst, schau dir unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

Es gibt zwei Methoden, um Festplatten und Partitionen zu verwalten: Zum einen das **Datenträgerverwaltung**-Tool mit GUI und zum anderen die Kommandozeile **diskpart**. Das **Datenträgerverwaltung**-Tool ist eine grafische Oberfläche zu Diskpart und deckt die meisten Standardaufgaben ab, inklusive Partitionen erweitern. Für fortgeschrittene Nutzer ist `diskpart` die mächtigere und umfangreichere Option.

## Partition erweitern

In verschiedenen Fällen ist es nötig, deine bestehende Partition zu erweitern, um neuen Speicherplatz zu nutzen. Ein typisches Szenario ist das Upgrade des Speicherplatzes deines Servers, der standardmäßig erst nach der Erweiterung der Hauptpartition zugewiesen wird.

Wir empfehlen die Methode über das **Datenträgerverwaltung**-Tool, da sie besonders für Einsteiger viel einfacher ist. Der Vorgang ist sicher und beeinträchtigt deine Daten nicht.

<Tabs>
<TabItem value="disk-management" label="Über Datenträgerverwaltung (GUI)" default>

Öffne zuerst das **Datenträgerverwaltung**-Tool. Suche einfach im Startmenü danach oder öffne es über Ausführen mit `Windows-Taste + R` und gib `diskmgmt.msc` ein, dann bestätige.

![](https://screensaver01.zap-hosting.com/index.php/s/xfMexYdrJMr3L6Y/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/gKjkst3H89knLFa/preview)

Im Tool klickst du mit der rechten Maustaste auf die Hauptpartition und wählst **Volume erweitern** aus, woraufhin sich ein Assistent öffnet.

:::tip
Das Hauptlaufwerk ist immer das **C:**-Laufwerk.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/nWMStW6T74SrrRe/preview)

Im Assistenten klickst du auf **Weiter** und gelangst zu einer Seite, auf der du festlegen kannst, wie viel Speicherplatz du hinzufügen möchtest. Standardmäßig füllt Windows automatisch den gesamten nicht zugewiesenen Speicherplatz aus – das ist ideal.

Du kannst also direkt auf **Weiter** klicken und zum Schluss auf **Fertig stellen**, um den Vorgang abzuschließen.

![](https://screensaver01.zap-hosting.com/index.php/s/MwRFS8eCHoqBSNt/download)

Nach Abschluss wird die neue Konfiguration in der Datenträgerverwaltung mit der aktualisierten Festplattengröße angezeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/M46ca4FkeG42AZz/preview)

</TabItem>

<TabItem value="diskpart" label="Über Diskpart (CLI)">

Öffne zunächst die Eingabeaufforderung als Administrator. Suche im Windows-Startmenü danach, klicke mit Rechts und wähle **Als Administrator ausführen**.

Gib den Befehl `diskpart` ein, um das CLI-Tool zu starten. Sobald es geladen ist, gib `list disk` ein, um alle aktuell verbundenen Festplatten anzuzeigen.

Wähle dann mit `select disk [Festplattennummer]` die Festplatte aus, die du erweitern möchtest. Ersetze `[Festplattennummer]` durch die Nummer aus der Liste.

:::tip
Das Hauptlaufwerk ist immer das **C:**-Laufwerk.
:::

Mit der ausgewählten Festplatte gib `list volume` ein, um alle Volumes auf dieser Festplatte anzuzeigen. Suche das Volume, das du erweitern möchtest, und wähle es mit `select volume [Volumenummer]` aus. Ersetze `[Volumenummer]` durch die entsprechende Nummer.

Mit ausgewählter Festplatte und Volume kannst du das Volume jetzt erweitern. Entweder nutzt du den gesamten nicht zugewiesenen Speicherplatz oder gibst eine bestimmte Größe an:
```
# Erweiterung auf gesamten nicht zugewiesenen Speicherplatz
extend

# Erweiterung auf eine bestimmte Größe (10240 = 10240MB = 10GB)
extend size=10240
```

Wenn der Vorgang erfolgreich war, siehst du die vergrößerte Volume-Größe bei erneuter Anzeige der Volumes und im Explorer. Zum Beenden gib `quit` ein.

</TabItem>
</Tabs>

## Fazit

Du hast erfolgreich deine Hauptpartition erweitert und nutzt jetzt den gesamten verfügbaren Speicherplatz. Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />