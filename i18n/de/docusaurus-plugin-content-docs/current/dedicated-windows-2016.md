---
id: dedicated-windows-2016
title: "Dedicated Server: Installation von Windows Server 2016"
description: Informationen, wie du das Windows Betriebssystem auf deinem Dedicated Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Windows Server 2016
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

Im Folgenden wird dir Schritt für Schritt erklärt, wie du das Windows Server Betriebssystem auf deinem Dedicated Server installieren und konfigurieren kannst. Folge diesen Anweisungen sorgfältig, um sicherzustellen, dass du das Betriebssystem erfolgreich einrichtest und optimal nutzt.

:::info Windows Server 2016 
Die Einrichtungsschritte und Veranschaulichung in dieser Anleitung basieren auf dem Windows Server 2016 (2019 Optik - gleiches Design) Betriebssystem. Ältere Versionen können vom Aufbau und Design abweichen. Die Vorgehensweise ähnelt sich allerdings.
:::

:::warning Neuere Version verfügbar / EOL Details

Die neueste Windows Server Version von Microsoft ist die [2025](dedicated-windows.md) Version. Wir empfehlen, die neueste Version für langfristige Projekte zu verwenden. 

Der Support für ältere Windows Server-Versionen wird früher oder später eingestellt werden. Die folgenden Termine sind für die Version 2016 vorgesehen: 

- Aktiver Support: 09.01.2024
- Sicherheits-Support: 09.01.2029

:::

<InlineVoucher />

## Vorbereitung

Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, dass die entsprechende ISO vom Betriebssystem gemountet wird. Für das Mounten gibt es mehrere mögliche Wege: 

1. Mounten über die Ersteinrichtung
2. Mounten über die iLO (Virtual Media)
3. Mounten über die iLO (Remote Console)

Solltest du mit dem Mounten einer ISO-Datei noch nicht vertraut sein, dann schaue dir am besten unsere [Ersteinrichtung](dedicated-setup.md) oder [Eigene ISO](dedicated-iso.md) Anleitung an.



## Installation
Um einen Windows-Server zu installieren, benötigen wir eine ISO unserer Wahl, bitte wähle im Webinterface die gewünschte Version von Windows und wähle die ISO aus. Alternativ kannst du natürlich eine eigene ISO einbinden. Detaillierte Anleitungen hierzu findest du in der "Dedicated Server" Kategorie hier unseren Docs.

![](https://screensaver01.zap-hosting.com/index.php/s/Gr8fCfaXReRPn7y/preview)

Wenn du dieses Fenster in einer Remote Console deiner Wahl siehst, wurde die ISO korrekt eingebunden und wir können mit dem Setup starten.
Wähle deine gewünschte Sprache und bestätige die Einstellungen dann mit "Weiter"

![](https://screensaver01.zap-hosting.com/index.php/s/rpaF9YAxwp2mZeN/preview)

Mit "Jetzt installieren" das Setup starten.

![](https://screensaver01.zap-hosting.com/index.php/s/GGWyoYXnfMegiRr/preview)

Windows verlangt nun die Eingabe eines Produkt-Keys, solltest du bereits einen haben, kannst du diesen dort eintragen.

:::info
Wichtig: Wir vertreiben keine Windows-Lizenzen, du musst also den Key selbst beschaffen.
:::

Produkt-Keys können in zahlreichen Webshops erworben werden, stelle sicher, dass du den richtigen Key kaufst, da es bei Windows verschiedene Versionen gibt.
Bei 2016 z.B. die normale Edition und die sogenannte Datacenter Edition.
Solltest du dir noch unsicher sein, was genau du brauchst, kannst du auch erstmal mit "Ich habe keinen Produkt Key" fortfahren.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Wähle die gewünschte Version aus, welche du auf deinem Dedicated Server nutzen möchtest.
Stelle sicher, dass du die richtige Version installierst, das Ändern der Version ist später nicht mehr möglich.
Achte darauf immer eine Version mit (Desktopdarstellung) zu nehmen, da andernfalls dein Windows über keine grafische Oberfläche verfügt.
Wenn du deine Version ausgesucht hast, bestätige deine Auswahl mit "Weiter"

![](https://screensaver01.zap-hosting.com/index.php/s/G7mFSfqRy4bx2Km/preview)

Wir akzeptieren die Lizenzbedingungen und fahren mit "Weiter" fort.

![](https://screensaver01.zap-hosting.com/index.php/s/kiC57qwRSRC6YQC/preview)

Wir wählen "Benutzerdefiniert", da wir ein vollständig neues Windows installieren möchten. Upgrade eignet sich z.B. wenn man von Windows Server 2016 auf 2016 upgraden möchte.

![](https://screensaver01.zap-hosting.com/index.php/s/Dqzb5fstrPgEMxB/preview)

Jetzt muss die Partitionierung festgelegt werden, im Regelfall sollte keine Partition auf deiner SSD vorhanden sein, sollte etwas vorhanden sein, wähle diese aus und klicke auf "Löschen" bis es wie im Screenshot aussieht.
Du kannst natürlich die Partitionierung einteilen wie du möchtest, grundsätzlich empfehlen wir die Partition für Windows mindestens 50GB groß zu machen. Selbstverständlich kann auch einfach eine große Partition erstellt werden.
Klicke auf "Neu", um eine neue Partition zu erstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/RRmwHWbqMC5fs6J/preview)

Die Größe kann unverändert bleiben, sofern du nur eine große Partition möchtest, das Setup wählt automatisch die maximale Kapazität.
Bestätige mit "Übernehmen" die Partitionierung. Die Festplatte wird nun partitioniert, dies kann einen Augenblick dauern.

![](https://screensaver01.zap-hosting.com/index.php/s/K3q4GMW7NLw7SoP/preview)

Windows benötigt eine kleine Systempartition, dies bestätigen wir ebenfalls mit "OK"

![](https://screensaver01.zap-hosting.com/index.php/s/pLBB8PnTRyX9Brm/preview)

Wenn du mit deiner Partitionierung zufrieden bist, wähle die korrekte aus, auf welcher Windows installiert werden soll und bestätige mit "Weiter"
Das Windows-Setup erledigt alles Weitere, dies kann einige Zeit in Anspruch nehmen.
Ein weiteres Eingreifen ist vorerst nicht erforderlich.

## Konfiguration

Wenn das Setup abgeschlossen ist, fordert Windows uns dazu auf, ein Passwort festzulegen.

![](https://screensaver01.zap-hosting.com/index.php/s/K8qEy9XjSn7zsEr/preview)

Setze dein gewünschtes Passwort.

:::info
Wir empfehlen ein sicheres Passwort mit Sonderzeichen zu verwenden

Wenn du das Passwort vergessen solltest, gibt es keinen einfachen Weg, dieses zurückzusetzen. Denke also daran, es abzuspeichern!
:::

Nachdem das Passwort gesetzt wurde, landen wir im Windows-Lockscreen

![](https://screensaver01.zap-hosting.com/index.php/s/ttSTeEnjEdo4mPE/preview)

Wir müssen nun die Tastenkombination STRG + ALT + ENTF senden, was beispielsweise bei der HTML5 Console über das Tastatursymbol und "CTRL + ALT + DEL" geht.
(Bei der Java Console über Keyboard)
Melde dich jetzt mit deinem Passwort an.

Als Nächstes muss noch Remote-Desktop aktiviert werden, damit du eine Remotesitzung zu deinem Dedicated Server herstellen kannst.
Öffne den Windows-Explorer und mach einen Rechtsklick auf "Dieser PC"

![](https://screensaver01.zap-hosting.com/index.php/s/DCeXCmcz5CxAR94/preview)

Wähle Eigenschaften aus.

![](https://screensaver01.zap-hosting.com/index.php/s/4ftYxFntWC597C7/preview)

Klicke auf "Remoteeinstellungen" 

![](https://screensaver01.zap-hosting.com/index.php/s/XdXsdw6EoYkq4SG/preview)

Bestätige die aufkommende Firewallmeldung mit "OK" und klicke dann "Übernehmen"

Öffne Remotedesktop auf deinem Computer und trage dort die IP, welche in deinem ZAP-Kundeninterface steht, ein.
Der Nutzername ist immer Administrator, das Passwort haben wir vor einigen Schritten gesetzt.

![](https://screensaver01.zap-hosting.com/index.php/s/H8k2HGzaoJ9QWwm/preview)

Die Zertifikatswarnung kann natürlich ignoriert werden, setze direkt den Haken bei "Nicht erneut nach Verbindung mit diesem Computer fragen"
Dann erscheint diese Meldung in Zukunft nicht mehr. Bestätige mit "Ja"

![](https://screensaver01.zap-hosting.com/index.php/s/Jy3FAYsDqgD6Cnq/preview)

Remotedesktop verbindet sich jetzt zu deinem Dedicated Server und du kannst diesen nun vollständig nutzen.
Die Netzwerkkonfiguration wird direkt via DHCP auf deinem Server gespeichert, somit musst du nichts verändern.

![](https://screensaver01.zap-hosting.com/index.php/s/N6mQ9x8XMKKJ3NK/preview)

:::info
Bei weiteren Fragen oder Problemen steht dir unser Support jederzeit gerne zur Verfügung!
:::



## Abschluss
Glückwunsch, du hast das Windows Server 2016 Betriebssystem erfolgreich auf deinem Dedicated Server installiert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂