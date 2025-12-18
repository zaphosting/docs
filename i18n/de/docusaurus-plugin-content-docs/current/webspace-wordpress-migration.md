---
id: webspace-wordpress-migration
title: "Webspace: So migrierst du deine WordPress-Website zu ZAP-Hosting"
description: "Entdecke, wie du deine WordPress-Seite nahtlos zu ZAP-Hosting Webspace migrierst und deine Webpräsenz verbesserst → Jetzt mehr erfahren"
sidebar_label: Migration
services:
  - webspace
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du interessierst dich für unsere starken Webspace-Produkte und willst zu uns wechseln? Dann bist du hier genau richtig! In dieser Anleitung zeigen wir dir, wie du deine WordPress-Seite mit einem WordPress-Plugin auf deinen ZAP-Hosting Webspace migrierst.

<InlineVoucher />

## Vorbereitung

Bevor du mit der Anleitung weitermachst, stelle sicher, dass du Folgendes vorbereitet hast:
- Eine Domain, mit Admin-Zugang zur Verwaltung der DNS-Einstellungen.
- Admin-Zugang zu deiner alten WordPress-Instanz.
- Ein eigenes [Webspace](https://zap-hosting.com/en/shop/product/webspace/) Produkt bei uns.

## Schritt 1: Webspace vorbereiten

Besuche zuerst unsere [Webspace](https://zap-hosting.com/en/shop/product/webspace/) Produktseite und bestelle den passenden Webspace-Tarif, der zu deinen Website-Anforderungen passt. Sobald das Produkt eingerichtet ist, musst du WordPress darauf installieren. Für eine detaillierte Anleitung schau dir bitte unsere spezielle [Installationsanleitung](webspace-wordpress.md) an.

Nachdem WordPress auf dem Webspace installiert ist, musst du deine Domain damit verknüpfen. Auch hier empfehlen wir dir, unsere spezielle [Domain hinzufügen](webspace-adddomain.md) Anleitung zu lesen.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa3mmmQtTybNgGj/preview)


## Schritt 2: Migrate Guru Plugin einrichten

Um den Migrationsprozess zu automatisieren, nutzt du das kostenlose und beliebte WordPress-Plugin **Migrate Guru**. Dieses musst du sowohl auf deiner neuen als auch auf deiner alten WordPress-Instanz installieren.

:::tip Admin-Login
Um dich als Admin bei einer WordPress-Seite einzuloggen, öffne deinen Browser und gehe auf deine Website. Hänge `/wp-admin` an die URL deiner Website an (z.B. `[deine_website].com/wp-admin`) und rufe diese auf. Du wirst dann zur WordPress-Admin-Login-Seite weitergeleitet, wo du dich mit deinen Zugangsdaten des alten Hostings einloggen kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/zwzRyGJwEJMNPGQ/preview)
:::

Im WordPress-Panel findest du links die Kategorie **Plugins**. Klicke dort auf **Neu hinzufügen** und gib in der Suche **Migrate Guru** ein.

Wenn das Plugin erscheint, klicke auf **Installieren** und danach auf **Aktivieren**. Mach das auf beiden WordPress-Instanzen, bevor du weitermachst.

Nach der Aktivierung erscheint ein Bildschirm, auf dem du deine E-Mail-Adresse eingeben und den Nutzungsbedingungen zustimmen musst – das solltest du erledigen.

![](https://screensaver01.zap-hosting.com/index.php/s/SXYGfpWJTwNyYjJ/preview)

## Schritt 3: Migrationsschlüssel abrufen

Nachdem das Migrate Guru Plugin auf beiden Instanzen installiert ist, musst du den **Migrationsschlüssel** auf deiner **neuen** ZAP-Hosting WordPress-Instanz abrufen.

Diesen findest du im Menüpunkt **Migrate Guru** links im WordPress-Panel. Kopiere den Schlüssel, du brauchst ihn im nächsten Schritt.

![](https://screensaver01.zap-hosting.com/index.php/s/g3X9fMrqoWyfwtN/preview)

:::tip Backup vorbereiten
Als zusätzliche Sicherheitsmaßnahme empfehlen wir, vor der Migration ein Backup deiner alten WordPress-Instanz zu erstellen. Die Migration verursacht normalerweise keine Datenverluste, aber sicher ist sicher.
:::

## Schritt 4: Migration starten

Wechsle zurück zum Admin-Panel deiner **alten** WordPress-Instanz. Im Bereich **Migrate Guru** klickst du auf den Button **Migrate** und wählst **Other Hosts** aus der Liste.

![](https://screensaver01.zap-hosting.com/index.php/s/x6ctdxnL2mdpTt5/preview)

Füge den Migrate Guru Migrationsschlüssel ein, den du gerade von deiner neuen ZAP-Hosting WordPress-Instanz kopiert hast, und klicke auf **Migrate**, um die Migration zu starten.

:::warning
Achte darauf, den Migrationsschlüssel aus deinem **neuen** ZAP-Hosting WordPress-Admin-Panel zu kopieren und im **alten** WordPress-Admin-Panel einzufügen. Wenn du es andersherum machst, werden Daten gelöscht.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/7nEr2L48PKCDXrj/preview)

Nach dem Klick auf **Migrate** startet der Prozess sofort nach einigen Prüfungen.

Die Migration läuft im Hintergrund ohne Ausfallzeiten und sollte in wenigen Minuten abgeschlossen sein. Je nach Größe deiner Website kann es etwas dauern. Sobald alles fertig ist, siehst du eine Erfolgsmeldung.

![](https://screensaver01.zap-hosting.com/index.php/s/YHSAwLkCjWBHsHT/preview)

:::tip
Teste deine Website auf der neuen WordPress-Instanz gründlich, um sicherzugehen, dass die Migration komplett erfolgreich war.
:::

## Schritt 5: DNS-Einstellungen der Domain aktualisieren

Nach der Migration ist der letzte Schritt, die DNS-Einstellungen deiner Domain zu aktualisieren, damit sie auf die neue Webspace-Instanz zeigt. Du musst die DNS-Einstellungen deiner Domain so anpassen, dass sie auf die IP-Adresse deines ZAP-Hosting Webspace zeigen, damit deine WordPress-Seite vom ZAP-Hosting-Server ausgeliefert wird.

Um die Webspace-IP-Adresse zu finden, logge dich in das Webinterface deines Webspaces auf der ZAP-Hosting Website ein und gehe zum Bereich **DNS**. Dort findest du die IP-Adresse deines Webspaces.

![](https://screensaver01.zap-hosting.com/index.php/s/pd8iQdXsd8Kaobd/preview)

Wenn deine Domain nicht bei ZAP-Hosting liegt, logge dich bei deinem Domain-Anbieter ein.

Suche dort die **DNS-Einstellungen** oder einen ähnlichen Bereich. Ersetze alle bestehenden **A Records**, die auf deinen alten Hosting-Anbieter zeigen, mit der IP-Adresse deines ZAP-Webspaces.

Mach das für alle **A Records**, die noch auf deine alte Instanz zeigen. Danach ist deine Domain bereit, deine WordPress-Seite von ZAP-Hosting auszuliefern.

:::info
Beachte, dass DNS-Änderungen bis zu 24 Stunden brauchen können, bis sie weltweit wirksam sind. Meistens geht es schneller, aber manchmal dauert es etwas länger.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/P93CG3MLJc2DL3i/preview)

## Schritt 6: SSL-Zertifikat einrichten

Zum Schluss empfehlen wir, ein neues SSL-Zertifikat für deine neue Website-Instanz auf deinem ZAP-Hosting Webspace einzurichten. Standardmäßig bleibt eine Domain, die über den Webspace hinzugefügt wird, unverschlüsselt.

Für eine ausführliche Anleitung schau dir unsere spezielle [SSL-Zertifikat erstellen](webspace-plesk-ssl.md) Anleitung an.

## Fazit

Wenn du dieser Anleitung gefolgt bist, hast du deine alte WordPress-Website erfolgreich auf deinen neuen ZAP-Hosting Webspace migriert. Teste am besten alles gründlich, um sicherzugehen, dass die Migration komplett reibungslos gelaufen ist.

<InlineVoucher />