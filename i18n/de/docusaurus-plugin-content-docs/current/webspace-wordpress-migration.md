---
id: webspace-wordpress-migration
title: "Webspace: Migriere deine WordPress-Website zu ZAP-Hosting"
description: Informationen darüber, wie du deine WordPress-Website auf deinen Webspace von ZAP-Hosting migrierst - ZAP-Hosting.com Dokumentation
sidebar_label: Migration
services:
  - webspace
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Du interessierst dich für unser leistungsstarkes Webspace-Angebot und möchtest zu uns wechseln? Such nicht weiter! In dieser Anleitung erfahren wir, wie du deine WordPress-Website mithilfe eines WordPress-Plugins auf dein ZAP-Hosting-Webspace-Produkt migrierst.

<InlineVoucher />

## Voraussetzungen

Bevor du mit dieser Anleitung fortfährst, solltest du sicherstellen, dass du Folgendes vorbereitet hast:
- Eine Domain mit Admin-Zugang zur Verwaltung der DNS-Einstellungen.
- Admin-Zugang zu deiner alten WordPress-Instanz.
- Du besitzt ein [Webspace](https://zap-hosting.com/de/shop/product/webspace/) Produkt bei uns.

## Schritt 1: Vorbereiten des Webspace

Besuche zunächst unsere [Webspace](https://zap-hosting.com/de/shop/product/webspace/)-Produktseite und kaufe das passende Webspace-Hosting-Angebot, das den Anforderungen deiner Website entspricht. Sobald das Produkt eingerichtet ist, musst du WordPress darauf installieren. Eine ausführliche Anleitung dazu findest du in unserer [WordPress Installationsanleitung](webspace-wordpress.md).

Wenn du WordPress auf dem Webspace installiert hast, musst du deine Domain mit ihm verknüpfen. Auch hierzu findest du in unserem [Webspace-Domain Anleitung](webspace-adddomain.md) eine ausführliche Anleitung.

![image](https://screensaver01.zap-hosting.com/index.php/s/sHKHMm4Gs4K8aLD/preview)

## Schritt 2: Migrate Guru Plugin einrichten

Um den Migrationsprozess zu automatisieren, verwendest du das **Migrate Guru** WordPress Plugin, das kostenlos ist und häufig verwendet wird. Du musst es sowohl auf deiner neuen als auch auf deiner alten WordPress-Instanz installieren.

:::tip Einloggen in den Admin-Bereich
Um dich als Admin auf einer WordPress-Seite einzuloggen, öffne deinen Browser und navigiere zu deiner Website. Füge `/wp-admin` am Ende der URL deiner Website hinzu (z. B. `[deine_website].com/wp-admin`) und suche danach in deinem Browser. Dadurch wirst du auf die Anmeldeseite für den WordPress-Admin weitergeleitet, wo du dich mit den Anmeldedaten deines alten Hosting-WordPress-Admin-Panels anmelden musst.

![image](https://screensaver01.zap-hosting.com/index.php/s/zwzRyGJwEJMNPGQ/preview)
:::

In deinem WordPress-Panel rufst du die Kategorie **Plugins** auf, die sich auf der linken Seite der Seite befindet. Wähle nun **Neues Plugin hinzufügen** und gib in der Suchleiste **Migrate Guru** ein.

Sobald das Suchergebnis erscheint, klicke auf **Installieren**, gefolgt von **Aktivieren**. Stelle sicher, dass du dies sowohl auf der alten als auch auf der neuen WordPress-Instanz tust, bevor du fortfährst.

Nach der Aktivierung erscheint ein Bildschirm, in dem du aufgefordert wirst, deine E-Mail-Adresse einzugeben und den Geschäftsbedingungen zuzustimmen, was du ausfüllen solltest.

![image](https://screensaver01.zap-hosting.com/index.php/s/c3krf8nQPZ5tx7y/preview)

## Schritt 3: Zugriff auf den Migrationsschlüssel

Wenn das Migrate Guru Plugin auf beiden Instanzen installiert ist, musst du auf den **Migrationsschlüssel** zugreifen, der sich auf deiner **neuen** ZAP-Hosting WordPress-Instanz befindet. 

Du findest ihn im Bereich **Migrate Guru** auf der linken Seite deines WordPress-Panels. Kopiere diesen Schlüssel, da du ihn im nächsten Schritt benötigst.

![image](https://screensaver01.zap-hosting.com/index.php/s/PNW289KnE9bzKsJ/preview))

:::tip Backup vorbereiten
Als zusätzliche Sicherheitsvorkehrung empfehlen wir dir, ein Backup deiner alten WordPress-Instanz zu erstellen, bevor du mit dem Migrationsprozess über das Plugin fortfährst. Bei diesem Vorgang gehen zwar keine Daten verloren, aber es ist immer besser, auf Nummer sicher zu gehen und für den Fall der Fälle ein Backup bereitzuhalten.
:::

## Schritt 4: Migrationsprozess

Gehe zurück in das Admin-Panel deiner **alten** WordPress-Instanz. Klicke im Bereich **Migrate Guru** auf die Schaltfläche **Migrate** und wähle **Other Hosts** aus der Liste.

![img](https://screensaver01.zap-hosting.com/index.php/s/K4FEnGpq6Kj7NSf/preview)

Füge den Migrate Guru-Migrationsschlüssel ein, den du gerade von deiner neuen ZAP-Hosting-WordPress-Instanz kopiert hast, und drücke auf die Schaltfläche **Migrieren**, um mit dem Migrationsprozess fortzufahren.

:::warning
Achte darauf, dass du den Migrationsschlüssel aus deinem **neuen** ZAP-Hosting-WordPress-Administrationsbereich kopierst und ihn in deinen **alten** WordPress-Administrationsbereich einfügst. Wenn du es andersherum machst, werden deine Daten gelöscht.
:::

![image](https://screensaver01.zap-hosting.com/index.php/s/73rq3F95935sckW/preview)

Nachdem du auf die Schaltfläche **Migrieren** geklickt hast, wird der Migrationsprozess nach einigen Validierungsprüfungen sofort gestartet. 

Der Migrationsprozess läuft im Hintergrund und sollte innerhalb weniger Minuten abgeschlossen sein. Bitte habe etwas Geduld, da dies stark von der Größe deiner Website abhängt. Sobald der Vorgang abgeschlossen ist, siehst du eine Erfolgsmeldung.

![image](https://screensaver01.zap-hosting.com/index.php/s/RAFemNcFiemoMJc/preview))

:::tip
Wir empfehlen, dass du die Website auf deiner neuen WordPress-Instanz gründlich testest, um sicherzustellen, dass der gesamte Migrationsprozess erfolgreich war.
:::

## Schritt 5: Aktualisierung der Domain-DNS-Einstellungen

Nachdem die Migration abgeschlossen ist, musst du im letzten Schritt die DNS-Einstellungen deiner Domain aktualisieren, um sie für die neue Webspace-Instanz zu konfigurieren. Du musst die DNS-Einstellungen deiner Domain ändern und sie auf die Webspace-IP-Adresse von ZAP Hosting setzen, damit deine WordPress-Website vom ZAP Hosting-Server gerendert wird.

Um die Webspace-IP-Adresse zu erhalten, gehst du zunächst zum Webinterface deines Webservers auf der ZAP-Hosting-Website und rufst den Bereich **DNS** auf. Auf dieser Seite findest du die IP-Adresse deines Webspace.

![image](https://screensaver01.zap-hosting.com/index.php/s/pFcfzYm4XrwZwyJ/preview)

Wenn du die IP-Adresse parat hast und deine Domain nicht auf deinem ZAP-Hosting-Konto ist, logge dich zunächst auf der Website deines Domain-Anbieters in dein Konto ein.

Suche den Bereich **DNS-Einstellungen** oder einen ähnlichen Bereich bei einem externen Provider. Du musst den bestehenden **A-Eintrag**, der auf deinen alten Hosting-Provider zeigt, durch die IP-Adresse deines ZAP-Webspace ersetzen. 

Führe dies für alle **A Records** durch, die noch auf deinen alten Provider zeigen. Sobald das erledigt ist, kann deine Domain zusammen mit deiner WordPress-Website von ZAP-Hosting genutzt werden.

:::info
Bitte beachte, dass es bis zu 24 Stunden dauern kann, bis Änderungen an DNS-Einträgen übertragen werden. Normalerweise geht das schnell, aber manchmal kann es auch länger dauern.
:::

![image](https://screensaver01.zap-hosting.com/index.php/s/P93CG3MLJc2DL3i/preview)

## Schritt 6: SSL-Zertifikat einrichten

Als letzten Schritt empfehlen wir dir, ein neues SSL-Zertifikat für deine neue Website-Instanz auf deinem ZAP-Hosting-Webspace einzurichten. Wenn eine Domain über den Webspace hinzugefügt wird, bleibt sie standardmäßig unverschlüsselt.

Wir empfehlen dir, unsere [Webspace-SSL-Anleitung](webspace-plesk-ssl.md) zu lesen, um detaillierte Anweisungen zur Einrichtung zu erhalten.

## Abschluss

Wenn du diese Anleitung befolgt hast, solltest du deine alte WordPress-Website erfolgreich auf deinen neuen ZAP-Hosting-Webspace migriert haben. Wir empfehlen, alles gründlich zu testen, um sicherzustellen, dass der Migrationsprozess alles übertragen hat.

