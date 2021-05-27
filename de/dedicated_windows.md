---
id: dedicated_windows
title: Windows installieren
sidebar_label: Windows installieren
---
> Die Anleitung basiert auf Windows Server 2019, bei anderen Versionen sind die Schritte aber nahezu identisch

## Installation eines Windows Servers
Um einen Windows Server zu installieren, benötigen wir eine ISO unserer Wahl, bitte wähle im Webinterface die gewünschte Version von Windows und wähle die ISO aus.
Alternativ kannst du natürlich eine eigene ISO einbinden. Detailierte Anleitungen hierzu findest du in der "Dedicated Server" Kategorie hier unseren Docs.

![](https://screensaver01.zap-hosting.com/index.php/s/w8PKw2k6WJmXxCJ/preview)

Wenn du dieses Fenster in einer Remote Console deiner Wahl siehst, wurde die ISO korrekt eingebunden und wir können mit dem Setup starten.
Wähle deine gewünschte Sprache und bestätige die Einstellungen dann mit "Weiter"

![](https://screensaver01.zap-hosting.com/index.php/s/Ny7CCBzCbrPWdPq/preview)

Mit "Jetzt installieren" das Setup starten.

![](https://screensaver01.zap-hosting.com/index.php/s/RpKTjiM5GN6JmSa/preview)

Windows verlangt nun die Eingabe eines Produkt-Keys, solltest du bereits einen haben, kannst du diesen dort eintragen.

> Wir vertreiben keine Windows-Lizenzen, du musst also den Key selbst beschaffen

Produkt-Keys können in zahlreichen Webshops erworben werden, stelle sicher das du den richtigen Key kaufst, da es bei Windows verschiedene Versionen gibt.
Bei 2019 z.B. die normale Edition und die sogenannte Datacenter Edition.
Solltest du dir noch unsicher sein was genau du brauchst, kannst du auch erstmal mit "Ich habe keinen Produkt Key" fortfahren.

![](https://screensaver01.zap-hosting.com/index.php/s/75aAREBeyJnBZXB/preview)

Wähle nun die gewünschte Version aus welche du auf deinem Dedicated Server nutzen möchtest.
Stelle sicher das du die richtige Version installierst, das ändern der Version ist später nicht mehr möglich.
Achte darauf immer eine Version mit (Desktopdarstellung) zu nehmen, da andernfalls dein Windows über keine grafische Oberfläche verfügt.
Wenn du deine Version ausgesucht hast, bestätige deine Auswahl mit "Weiter"

![](https://screensaver01.zap-hosting.com/index.php/s/eNG4AsHYq4eg2mg/preview)

Wir akzeptieren die Lizenzbedingungen und fahren mit "Weiter" fort.

![](https://screensaver01.zap-hosting.com/index.php/s/pCbTZemgYeNEPPa/preview)

Wir wählen "Benutzerdefiniert" da wir ein vollständig neues Windows installieren möchten. Upgrade eignet sich z.B. wenn man von Windows Server 2016 auf 2019 upgraden möchte.

![](https://screensaver01.zap-hosting.com/index.php/s/qAJFmTGQo3jNMGW/preview)

Jetzt muss die Partitionierung festgelegt werden, im Regelfall sollte keine Partition auf deiner SSD vorhanden sein, sollte etwas vorhanden sein, wähle diese aus und klicke auf "Löschen" bis es wie im Screenshot aussieht.
Du kannst natürlich die Partitionierung einteilen wie du möchtest, grundsätzlich empfehlen wir die Partition für Windows mindestens 50GB groß zu machen. Selbstverständlich kann auch einfach eine große Partition erstellt werden.
Klicke auf "Neu" um eine neue Partition zu erstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/T552aGTxmqf7jtX/preview)

Die Größe kann unverändert bleiben sofern du nur eine große Partition möchtest, das Setup wählt automatisch die maximale Kapazität.
Bestätige mit "Übernehmen" die Partitionierung. Die Festplatte wird nun partitioniert dies kann einen Augenblick dauern.

![](https://screensaver01.zap-hosting.com/index.php/s/S26szFXeYxWREFW/preview)

Windows benötigt eine kleine Systempartition, dies bestätigen wir ebenfalls mit "OK"

![](https://screensaver01.zap-hosting.com/index.php/s/PJbZ6BiqTLFRiMG/preview)

Wenn du mit deiner Partitionierung zufrieden bist, wähle die korrekte aus auf welcher Windows installiert werden soll und bestätige mit "Weiter"
Das Windows-Setup erledigt nun alles weitere, dies kann einige Zeit in Anspruch nehmen.
Ein weiteres Eingreifen ist vorerst nicht erforderlich.

## Konfiguration eines Windows Servers

Wenn das Setup abgeschlossen ist, fordert Windows uns dazu auf ein Passwort festzulegen.

![](https://screensaver01.zap-hosting.com/index.php/s/nE8dRRC7zaSy2sj/preview)

Setze dein gewünschtes Passwort.

> Wir empfehlen ein sicheres Passwort mit Sonderzeichen zu verwenden
> Wenn du das Passwort vergessen solltest, gibt es keinen einfachen Weg dieses zurückzusetzen. Denke also daran es abzuspeichern!

Nachdem das Passwort gesetzt wurde, landen wir im Windows-Lockscreen

![](https://screensaver01.zap-hosting.com/index.php/s/tbHXMJ6xJmFswP5/preview)

Wir müssen nun die Tastenkombination STRG + ALT + ENTF senden, was beispielweise bei der HTML5 Console über das Tastatur Symbol und "CTRL + ALT + DEL" geht.
(Bei der Java Console über Keyboard)
Melde dich nun mit deinem Passwort an.

Als nächstes muss noch Remote-Desktop aktiviert werden, damit du eine Remotesitzung zu deinem Dedicated Server herstellen kannst.
Öffne den Windows-Explorer und mach einen Rechtsklick auf "Dieser PC"

![](https://screensaver01.zap-hosting.com/index.php/s/iB3pyDt4MWFLo84/preview)

Wähle Eigenschaften aus.

![](https://screensaver01.zap-hosting.com/index.php/s/yBMMqrxTYxgBwf4/preview)

Klicke auf "Remoteeinstellungen" 

![](https://screensaver01.zap-hosting.com/index.php/s/es9ZfxoGJqD5mYX/preview)

Bestätige die aufkommende Firewallmeldung mit "OK" und klicke dann "Übernehmen"

Öffne nun Remotedesktop auf deinem Computer und trage dort die IP welche in deinem ZAP-Kundeninterface steht ein.
Der Nutzername ist immer Administrator, das Passwort haben wir vor einigen Schritten gesetzt.

![](https://screensaver01.zap-hosting.com/index.php/s/gAeyexGJZooYqKZ/preview)

Die Zertifikatwarnung kann natürlich ignoriert werden, setze direkt den Haken bei "Nicht erneut nach Verbindung mit diesem Computer fragen"
Dann erscheint diese Meldung in Zukunft nicht mehr. Bestätige mit "Ja"

![](https://screensaver01.zap-hosting.com/index.php/s/6sZt77HZrZrY7BX/preview)

Remotedesktop verbindet sich nun zu deinem Dedicated Server und du kannst diesen nun vollständig nutzen.
Die Netzwerkkonfiguration wird direkt via DHCP auf deinem Server gespeichert, somit musst du nichts verändern.

![](https://screensaver01.zap-hosting.com/index.php/s/yGGzxJ4QQZyL4L4/preview)

> Bei weiteren Fragen oder Problemen steht dir unser Support jederzeit gerne zur Verfügung!
