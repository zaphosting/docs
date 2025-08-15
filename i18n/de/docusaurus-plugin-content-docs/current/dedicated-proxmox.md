---
id: dedicated-proxmox
title: "Dedicated Server: Installation von Proxmox VE"
description: Informationen, wie du das Proxmox Virtual Environment auf deinem Dedicated Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Proxmox installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Proxmox Virtual Environment ist eine komplette Open Source-Virtualisierungsplattform für Server. Es kombiniert KVM- und Container-basierte Virtualisierung und verwaltet virtuelle Maschinen, Container, Storage, virtuelle Netzwerke und Hochverfügbarkeits-Cluster übersichtlich über die zentrale Managementoberfläche.

<InlineVoucher />

## Vorbereitung

Zu Beginn muss das Proxmox VE (Virtual Environment) ISO-Installationsprogramm auf deinem dedizierten Server installiert und gebootet werden. Es gibt zwei Möglichkeiten, dies zu tun. Die einfachere Methode über das Webinterface deines dedizierten Servers oder die langwierigere Methode, die manuell über das iLO-Panel deines Servers erfolgt.



### ISO über das Webinterface einbinden

Navigiere zum Abschnitt **Erstinstallation** im Webinterface von deinem dedizierten Server. Hier musst du zunächst auf den grünen Button **iLO aktivieren** drücken. Warte einen kurzen Moment, bis die Abschnitte wieder sichtbar werden. Möglicherweise musst du deine Seite aktualisieren, um sicherzustellen, dass die Seite vollständig geladen wird.

![](https://github.com/zaphosting/docs/assets/42719082/ad471e8b-37af-45dc-94d6-695e439361a5)

Wähle als nächstes eine **Proxmox VE** ISO aus dem Dropdown-Menü. Wir empfehlen, die neueste Version zu verwenden, um mit den letzten Änderungen auf dem Laufenden zu bleiben. Klicken nun auf den grünen Button **Einfügen**.

![](https://github.com/zaphosting/docs/assets/42719082/ebc1b725-3037-4379-bd7f-ce3e371578b6)

Abschließend musst du deinen dedizierten Server neu starten, um von der ISO booten zu können. Dies kannst du über den Button Neustart unter Schritt 3 tun.



### ISO über die iLO einbinden
Bereite deine Proxmox VE-ISO vor, indem du auf die [Proxmox Download-Seite](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso) gehst. Du musst diese dann auf deinen dedizierten Server hochladen und mounten, indem du die [iLO](dedicated-ilo.md) & [Eigene ISO](dedicated-iso.md) befolgst, die zeigen, wie du dich anmeldest und deine benutzerdefinierte ISO hochlädst.



## Einrichtung und Konfiguration

:::important
Stelle sicher, dass du deinen Server nach dem Importieren und Mouten der neuen ISO neu gestartet hast, bevor du weitermachst.
:::

Nachdem du nun dein ISO eingebunden hast, musst du davon booten. Dazu kannst du die **HTML5-Remote-Konsole** bei deiner iLO verwenden. Klicke im Webinterface auf den Hyperlink **Hier öffnen** unter "iLO-Webzugriff", der dich zu deinem Panel führt. Benutze die Anmeldedaten, die du für die Anmeldung erhalten hast.

:::note
Möglicherweise zeigt dein Browser eine Sicherheitsabfrage an, die du ignorieren und akzeptieren solltest, um fortzufahren.
:::

Sobald du eingeloggt bist, solltest du unter dem Abschnitt **Übersicht** den Link **HTML5** suchen und benutzen, der unter dem Abschnitt "Integrierte Remote-Konsole" zu finden ist. Dadurch wird ein neues Fenster geöffnet.

![](https://github.com/zaphosting/docs/assets/42719082/3b9ce97e-f974-439b-8e57-ced05f248ef9)

Dein Proxmox sollte sich im Einrichtungsprozess befinden. Verwende die "Pfeiltasten", "Enter" und "Esc", um das System zu aktivieren. Wir empfehlen, die **grafische** Version von Proxmox auszuwählen, da diese in der Anleitung verwendet wird.

![](https://github.com/zaphosting/docs/assets/42719082/614218f2-df12-43ad-95fe-39026b900141)

Warte ein paar Sekunden, bis der Einrichtungsprozess fortgesetzt wird. Du musst die EULA von Proxmox über den Button **Ich stimme zu** unten rechts akzeptieren. Auf der nächsten Seite wirst du aufgefordert, das Ziellaufwerk für deine Umgebung auszuwählen. Wenn du ein einzelnes Laufwerk verwendest, sind die Standardeinstellungen für dich vorgegeben, so dass du einfach über den Button **Next** fortfahren kannst.

![](https://github.com/zaphosting/docs/assets/42719082/090c1f2e-20fe-48f3-b4b4-070c197f4825)

:::note
Wenn du ein RAID einrichten möchtest, da einige unserer dedizierten Server zwei Laufwerke bieten, musst du den Button **Optionen** verwenden, um den gewünschten `RAID`-Modus auszuwählen. Wir empfehlen `RAID1`, welches die beiden Laufwerke spiegelt.

![](https://github.com/zaphosting/docs/assets/42719082/44e3b6ba-07f3-4313-8d36-b185a6da8089)
:::

Der nächste Abschnitt enthält allgemeine Angaben wie Sprache und Tastaturauswahl, die automatisch erkannt werden sollten. Füllen diese Felder aus und fahre dann fort.

![](https://github.com/zaphosting/docs/assets/42719082/931e066c-9868-48d9-a638-f07c932579d2)

Nun musst du ein sicheres Passwort und eine E-Mail-Adresse festlegen. Die E-Mail-Adresse wird von deinem Panel verwendet, um wichtige Alarme und Benachrichtigungen zu senden.

:::important
Merken dir das Passwort, denn du musst es verwenden, wenn du dich zum ersten Mal nach der Installation am Panel anmeldest! :::

![](https://github.com/zaphosting/docs/assets/42719082/617a504c-9520-4b89-93c3-81fba06e5fdc)

Der letzte Schritt ist das Einrichten der Netzwerkkonfiguration. Wähle die verfügbare Verwaltungsoberfläche und einen Hostnamen für deinen Server. 

![](https://github.com/zaphosting/docs/assets/42719082/d694a5af-20e2-4c1b-9cdb-c1a8ca684cde)

Gehen nun zum Abschnitt **IP-Adressen** auf dem Webinterface des dedizierten Servers, um eine verfügbare IP zu finden.![](https://github.com/zaphosting/docs/assets/42719082/9e8149c8-6917-4577-8161-7d254c3dc118)

Wählen eine IP-Adresse, die du für dein Proxmox-Panel verwenden möchtest. Gebe die IP-Adresse, die Netzmaske und das Gateway in das Installationsprogramm ein, indem du die Details aus dem Webinterface verwendest. Abschließend kannst du für den DNS-Server "8.8.8.8" eingeben, was der öffentliche DNS-Server von Google ist.

Wenn du alles ausgefüllt hast, drücke **Weiter** und überprüfe alle ausgewählten Optionen auf der Übersichtsseite. Wenn alles korrekt aussieht, klicke auf **Installieren**, um fortzufahren!



## Zugriff auf das Panel
Nachdem die Installation abgeschlossen ist und das System neu gestartet wurde, klicke im Menü auf die Option **Proxmox Environment GNU/Linux** und drücke **Enter**.

Sobald das System geladen ist, solltest du eine Willkommensnachricht von Proxmox in der Konsole sehen, die die IP-Adresse und den Link enthält, über den du über einen Browser auf dein Panel zugreifen kannst (den du zuvor angegeben hast). Navigiere zu diesem Link.

:::note
Dein Browser zeigt möglicherweise erneut eine Sicherheitsabfrage an, die du ignorieren und akzeptieren musst, um fortzufahren.
:::

Wenn der angegebene Link nicht zugänglich ist, deutet dies darauf hin, dass du während der Einrichtung eine Konfiguration vorgenommen haben, wahrscheinlich in Bezug auf die Netzwerkkonfigurationseinstellungen.

Nachdem du dich nun im Panel befindest, musst du dich anmelden. Dies kannst du mit dem Benutzernamen `root` und dem Passwort tun, welches du während des Installationsprozesses festgelegt hast. Stelle sicher, dass **Realm** auf `Linux PAM standard authentication` eingestellt ist.

![](https://github.com/zaphosting/docs/assets/42719082/4072c2ac-6f5c-4350-a5df-0635b1f433c0)

Nach der Anmeldung kannst du die Anmeldemeldung ignorieren, indem du auf den Button **OK** drückst, um dies zu bestätigen. Und schon hast du Proxmox VE erfolgreich auf deinem dedizierten Server installiert und dich bei deinem Panel angemeldet!



## Erstellen deiner ersten VM
In diesem Abschnitt werden die grundlegenden Schritte beschrieben, die erforderlich sind, um deine erste virtuelle Maschine (VM) über dein Proxmox-Panel zu erstellen. Gehe zu "local (panel)" und wählen den Abschnitt **ISO Images** aus. Hier kannst du entweder die .iso-Datei manuell hochladen oder sie von Proxmox abrufen lassen, indem du die direkte Download-URL der ISO-Datei angibst.

![](https://github.com/zaphosting/docs/assets/42719082/8182bd73-690f-434f-8394-5fdca6889a74)

Danach kannst du mit der Erstellung deiner VM fortfahren. Schauee nach rechts oben und klicke auf den Button **VM erstellen**. Es öffnet sich ein neues Menü mit einer großen Auswahl an Optionen.

Zunächst musst du den Abschnitt mit den allgemeinen Einstellungen konfigurieren. Standardmäßig ist der "Knoten" auf den Standardknoten (in diesem Fall "Panel") eingestellt. Du musst eine eindeutige VM-ID angeben, die standardmäßig auf `100` eingestellt ist oder sich erhöht, wenn du bereits eine VM hast. Füge nun einen Namen für deine VM hinzu, dieser kann beliebig sein.

![](https://github.com/zaphosting/docs/assets/42719082/bcd2eb41-a8fc-4a44-9abb-072f9e408d10)

Gehen nun schnell zum Abschnitt Betriebssystemeinstellungen. Hier solltest du das ISO-Image auswählen, das du verwenden möchtest, nämlich das, das du in einem früheren Schritt hochgeladen hast. Stellen sicher, dass du auch den Typ und die Version des Betriebssystems festlegst, das du verwendest.

![](https://github.com/zaphosting/docs/assets/42719082/05d51c46-5a69-4cd7-b2e6-c3472437caf9)

Wir empfehlen, den Abschnitt Systemeinstellungen standardmäßig zu belassen, da er entsprechend konfiguriert sein sollte. Gehe weiter zum Abschnitt Festplatteneinstellungen, wo du die Festplattengröße angeben kannst, die du für deine VM verwenden möchtest. Du kannst auch den Speicherpool festlegen, den du verwenden möchtest, obwohl dieser standardmäßig `local-lvm` ist. Der Rest der Einstellungen sollte standardmäßig gut funktionieren.

![](https://github.com/zaphosting/docs/assets/42719082/26f11d42-8884-4bb5-b0fe-d7b4df7885a5)

Der nächste Schritt ist der Abschnitt CPU-Einstellungen, in dem du die Optionen wie den Sockel und die Anzahl der Kerne, die verwendet werden sollen, festlegen kannst. Dies kannst du so konfigurieren, wie du es für deine VM benötigst.

![](https://github.com/zaphosting/docs/assets/42719082/91103b8d-dadc-4305-a3fe-bf4c8f96fc27)

Im Abschnitt Speichereinstellungen kannst du ebenfalls festlegen, wie viel Speicher du der VM zur Verfügung stellen möchtest und den Status des Ballooning wählen.

![](https://github.com/zaphosting/docs/assets/42719082/ac0048cb-0bd4-4791-9a9f-857e5037955d)

We also recommend leaving the Network settings section default as it should be configured appropriately for now. Finally, you can review all the settings that you have configured throughout this VM setup. We recommend setting the `Start after created` option on so that your VM automatically starts for you. If you are satisfied with everything, proceed to create the VM by pressing the **Finish** button.

![](https://github.com/zaphosting/docs/assets/42719082/d14a8b3d-e9bb-4feb-8049-428e84c1e917)

Wir empfehlen außerdem, den Abschnitt Netzwerkeinstellungen standardmäßig zu belassen, da er für den Moment angemessen konfiguriert sein sollte. Abschließend kannst du alle Einstellungen überprüfen, die du während der VM-Einrichtung vorgenommen hast. Wir empfehlen, die Option "Nach der Erstellung starten" zu aktivieren, damit deine VM automatisch für dich startet. Wenn du mit allem zufrieden bist, fahre mit der Erstellung der VM fort, indem du auf den Button **Finish** drückst.





## Abschluss

Glückwunsch, du hast Proxmox erfolgreich installiert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
