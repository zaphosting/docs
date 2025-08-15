---
id: vserver-windows-expand-disk
title: "vServer: Festplatte (Partition) auf Windows Server erweitern"
description: Informationen, wie du die Festplatte deines Windows vServers von ZAP-Hosting nach einem Upgrade erweitern kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Festplatte erweitern
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Windows-Betriebssystem hat eine eingebaute Festplatten- und Partitionsverwaltung, mit der du ganz einfach verschiedene Festplattenverwaltungsaktionen durchführen kannst, wie zum Beispiel Partitionen erweitern, Festplatten aufteilen und vieles mehr. Dazu gehört auch das Erweitern von Partitionen, was besonders wichtig ist, wenn du die Speicherkapazität deines Windows-Servers aufrüstest. In dieser Anleitung zeigen wir dir, wie du eine Partition auf deinem Windows-Server erweiterst.

<InlineVoucher />

## Voraussetzungen

Verbinde dich erst mal über RDP mit deinem Windows-Server. Wenn du dabei Hilfe brauchst, schau dir unsere Anleitung [Erstzugriff (RDP)](vserver-windows-userdp.md) an.

Es gibt zwei Möglichkeiten, Festplatten und Partitionen zu verwalten: über das Dienstprogramm **Datenträgerverwaltung** oder über die Befehlszeilenschnittstelle **diskpart**. Das Tool **Datenträgerverwaltung** bietet eine grafische Version von diskpart, mit der du die meisten gängigen Aktionen ausführen kannst, einschließlich der Erweiterung von Partitionen. Fortgeschrittene Benutzer können jedoch diskpart verwenden, da dieses Tool viel umfangreicher und leistungsfähiger ist.

## Partition erweitern

In manchen Fällen musst du vielleicht deine aktuelle Partition vergrößern, um neuen Speicherplatz zu nutzen. Das kann zum Beispiel nötig sein, wenn du den Speicherplatz deines Servers aufrüsten willst, der standardmäßig erst nach dem Vergrößern der Hauptpartition zugewiesen wird.

Wir empfehlen dir, das Dienstprogramm **Datenträgerverwaltung** zu verwenden, da dies besonders für Anfänger viel einfacher ist. Dieser Vorgang ist sicher und hat keinerlei Auswirkungen auf deine Daten.

<Tabs>
<TabItem value="disk-management" label="Über die Datenträgerverwaltung (GUI)" default>

Öffne zuerst das Tool **Datenträgerverwaltung**. Such einfach im Startmenü danach oder öffne es über Ausführen, indem du die `Windows-Taste + R` drückst, `diskmgmt.msc` eingibst und dann auf **OK** klickst.

![](https://screensaver01.zap-hosting.com/index.php/s/xfMexYdrJMr3L6Y/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/gKjkst3H89knLFa/preview)

Öffne das Tool, klicke mit der rechten Maustaste auf die Hauptpartition und wähle die Option **Volume erweitern**, um ein neues Assistentenmenü zu öffnen.

:::tip
Das Hauptlaufwerk ist immer das Laufwerk **C:**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/nWMStW6T74SrrRe/preview)

Klicke im Assistenten auf **Weiter**, um zur Einrichtungsseite zu gelangen, wo du den Speicherplatz zuweisen kannst, den du hinzufügen möchtest. Standardmäßig füllt Windows hier automatisch den gesamten nicht zugewiesenen Speicherplatz aus, was ideal ist.

Klicke daher erneut auf **Weiter** und dann auf **Fertig stellen**, um den Vorgang abzuschließen.

![](https://screensaver01.zap-hosting.com/index.php/s/MwRFS8eCHoqBSNt/download)

Wenn alles fertig ist, wird die aktuelle Konfiguration wieder in der Datenträgerverwaltung angezeigt, mit der neuen Größe.

![](https://screensaver01.zap-hosting.com/index.php/s/M46ca4FkeG42AZz/preview)

</TabItem>

<TabItem value="diskpart" label="Über Diskpart (CLI)">

Öffne zuerst die Eingabeaufforderung als Administrator. Such im Windows-Startmenü danach, klicke mit der rechten Maustaste drauf und wähle **Als Administrator ausführen**.

Führ einfach den Befehl `diskpart` aus, um das CLI-Dienstprogramm zu starten. Sobald das Dienstprogramm geladen ist, führ `list disk` aus, um eine Liste aller aktuell verbundenen Festplatten anzuzeigen.

Als Nächstes gibst du `select disk [festplattennummer]` ein und ersetzt `[festplattennummer]` durch die Nummer des Laufwerks aus der vorherigen Liste, das du erweitern möchtest.

:::tip
Das Hauptlaufwerk ist immer das Laufwerk **C:**.
:::

Wenn du die Festplatte ausgewählt hast, gib `list volume` ein, um eine Liste aller Volumes auf dem ausgewählten Laufwerk anzuzeigen. Such das Volume, das du vergrößern willst, und gib dann `select volume [volume_number]` ein, wobei du `[volume_number]` durch die Nummer des Volumes aus der vorherigen Liste ersetzt.

Nachdem du das Laufwerk und das Volume ausgewählt hast, kannst du mit dem folgenden Befehl das Volume vergrößern. Du kannst entweder nur den Befehl ausführen, um den gesamten nicht zugewiesenen Speicherplatz zu nutzen, oder eine Größe angeben.
```
# Auf den ganzen nicht zugewiesenen Speicherplatz erweitern
extend

# Auf eine bestimmte Größe erweitern (10240 = 10240 MB = 10 GB)
extend size=10240
```

Wenn alles geklappt hat, solltest du sehen, dass die Volumengröße größer ist, wenn du die Festplatten nochmal auflistest und im Datei-Explorer anschaust. Um die CLI zu verlassen, gib einfach den Befehl `quit` ein.

</TabItem>
</Tabs>

## Abschluss

Du hast die Hauptpartition auf deiner Festplatte erfolgreich vergrößert, um den gesamten Speicherplatz zu nutzen. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
