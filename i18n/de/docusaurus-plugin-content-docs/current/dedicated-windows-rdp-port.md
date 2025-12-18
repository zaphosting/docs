---
id: dedicated-windows-rdp-port
title: "Dedicated Server: Windows RDP-Port ändern"
description: "Erfahre, wie du den Windows RDP-Port änderst → Jetzt mehr erfahren"
sidebar_label: RDP-Port ändern
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Das Remote Desktop Protocol nutzt standardmäßig den Port 3389. Dieser Port ist allgemein bekannt und wird häufig von automatisierten Scans angegriffen. Durch das Ändern des RDP-Ports kannst du unerwünschte Verbindungsversuche reduzieren und die grundlegende Sicherheit verbessern.

<InlineVoucher />



## RDP-Port in der Registry ändern

Melde dich lokal am Server oder über eine bestehende Remote Desktop-Verbindung an. Öffne den Ausführen-Dialog mit **Win + R**, gib `regedit` ein und bestätige, um den Registrierungs-Editor zu öffnen. Navigiere zum folgenden Registry-Pfad:

```
HKEY_LOCAL_MACHINE
 └─ SYSTEM
    └─ CurrentControlSet
       └─ Control
          └─ Terminal Server
             └─ WinStations
                └─ RDP-Tcp
```

Suche den Registry-Eintrag namens **PortNumber**. Ändere das Werteformat auf **Dezimal** und gib die gewünschte neue Portnummer ein. Empfohlen wird ein Port über 1024, der nicht bereits von einem anderen Dienst verwendet wird. Nach der Änderung schließe den Registrierungs-Editor.

## Windows-Firewall-Regeln anpassen

Der neue RDP-Port muss in der Windows-Firewall freigegeben werden. Öffne die **Windows Defender Firewall mit erweiterter Sicherheit** und navigiere zum Bereich der eingehenden Regeln.

Passe die bestehende Remote Desktop-Regel an oder erstelle eine neue eingehende Regel, die TCP-Verkehr auf dem neu konfigurierten Port erlaubt. Stelle sicher, dass die Regel die Verbindung zulässt und auf die benötigten Netzwerkprofile angewendet wird.

## Dienst neu starten, um Änderungen zu übernehmen

Die Port-Änderung wird erst nach einem Neustart der Remote Desktop Services oder einem Systemneustart aktiv. Ein kompletter Server-Neustart wird empfohlen, um sicherzustellen, dass die Konfiguration durchgängig angewendet wird.

## Verbindung mit dem neuen Port herstellen

Beim Aufbau einer neuen Remote Desktop-Verbindung muss der Port explizit angegeben werden, indem du ihn an die IP-Adresse oder den Hostnamen anhängst. Beispiel:

```
203.0.113.10:3390
```

## Fazit

Das Ändern des Windows RDP-Ports verringert die Angriffsfläche gegenüber automatisierten Scans und unautorisierten Verbindungsversuchen. Der Prozess umfasst das Aktualisieren der Windows-Registry, das Freigeben des neuen Ports in der Firewall und das Neustarten des Systems oder der Dienste.

Nach Abschluss solltest du den Zugriff sofort überprüfen und den konfigurierten Port dokumentieren, um zukünftige Verbindungsprobleme zu vermeiden. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />