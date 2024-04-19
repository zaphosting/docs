---
id: vserver-ssh-default
title: "vServer: Standard SSH-Schlüssel im Profil verwalten"
description: Informationen zur Verwaltung von SSH-Schlüsseln, die im Profil deines ZAP-Hosting-Kontos festgelegt sind - ZAP-Hosting.com Dokumentation
sidebar_label: Standard SSH-Schlüssel
---

## Einführung
Eine unserer neuesten Erweiterungen des ZAP-Hosting-Webinterfaces ist die Möglichkeit, deinem ZAP-Hosting-Konto über unsere Website Standard-SSH-Schlüssel hinzuzufügen. Der große Vorteil dabei ist, dass die SSH-Schlüssel, die du auf deiner Profilseite einrichtest, automatisch eingerichtet und bei der Ersteinrichtung des Produkts oder der Neuinstallation des Betriebssystems verwendet werden. Dadurch sparst du Zeit, da du deine SSH-Schlüssel nicht mehr manuell einrichten musst.

## Voraussetzungen
Um diese Funktion nutzen zu können, musst du einen SSH-Schlüssel erstellen lassen. Wenn du bereits einen SSH-Schlüssel hast, kannst du mit dem nächsten Abschnitt fortfahren.

Um einen SSH-Schlüssel zu generieren, empfehlen wir dir, den Bereich **Informationen->Zugang & Sicherheit** im Webinterface deines vServers aufzurufen. 

![image](https://screensaver01.zap-hosting.com/index.php/s/RepcLDoHdxM4o8H/preview)

Hier siehst du eine grüne Schaltfläche **SSH-Key generieren**. Sobald du diese Schaltfläche drückst, wird dein privater SSH-Schlüssel automatisch auf deinen PC heruntergeladen. Mit diesem Schlüssel kannst du dich mit deinem Server verbinden, sobald SSH eingerichtet ist.

![image](https://screensaver01.zap-hosting.com/index.php/s/pdTTNDzQKr4ib3x/preview)

Den öffentlichen Schlüssel, den du in der Eingabeaufforderung findest, solltest du jetzt speichern, da du ihn bei der Erstellung des SSH-Schlüssels in deinem Profil angeben musst.

![image](https://screensaver01.zap-hosting.com/index.php/s/Tc9MEGamAC9dDF3/preview)

Sobald du bereit bist, gehst du zum nächsten Abschnitt über.

## SSH-Schlüssel im Profil verwalten
Die Verwaltung deiner Standard-SSH-Schlüssel in deinem Account ist ganz einfach. Gehe zu deiner **[ZAP-Hosting-Profilseite](https://zap-hosting.com/en/customer/home/profile/)** und scrolle nach unten, bis du den Abschnitt **Standardmäßige SSH-Keys** erreichst.

![image](https://screensaver01.zap-hosting.com/index.php/s/pqENQmKeHAecEEf/preview)

### Hinzufügen eines neuen Schlüssels
Um einen Schlüssel hinzuzufügen, drücke zuerst auf das grüne Plus-Symbol, um die Eingabeaufforderung zu öffnen. In dieser Eingabeaufforderung wählst du zunächst einen passenden Namen aus, den du deinem SSH-Schlüssel hinzufügen möchtest.

Anschließend fügst du deinen öffentlichen SSH-Schlüssel in das zweite Feld ein. Dein SSH-Schlüssel sollte im OpenSSH-Format sein, das mit `ssh-rsa` beginnt und mit einem Suffix endet. Wenn du fertig bist, drückst du auf die grüne Schaltfläche **Speichern**, um den Schlüssel hinzuzufügen.

![image](https://screensaver01.zap-hosting.com/index.php/s/EwfJmWHM7ewXH6M/preview)

:::tip
Achte darauf, dass du deinen **SSH Public Key** angibst und nicht den SSH Private Key. Der private SSH-Schlüssel wird bei der Anmeldung zur Authentifizierung mit deinem öffentlichen Schlüssel verwendet.
:::

Du hast erfolgreich einen Standard-SSH-Schlüssel zu deinem ZAP-Hosting-Konto hinzugefügt.

### Bearbeiten oder Entfernen eines Schlüssels
Um einen Schlüssel zu bearbeiten, drückst du einfach auf das blaue Augensymbol, woraufhin sich eine Eingabeaufforderung öffnet. In dieser Eingabeaufforderung siehst du die aktuell eingestellten Details und kannst sie nach Belieben direkt bearbeiten und speichern.

Um eine Taste zu löschen, drückst du auf das rote Mülleimer-Symbol, das die betreffende Taste löscht.

![image](https://screensaver01.zap-hosting.com/index.php/s/YN9YoWcykQE65Nc/preview)
