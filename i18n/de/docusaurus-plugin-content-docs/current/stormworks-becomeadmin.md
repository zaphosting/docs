---
id: stormworks-becomeadmin
title: "Stormworks: Stormworks Admin werden - Gameserver von ZAP-Hosting"
description: Anleitung, wie du dich zum Admin für Stormworks Gameserver machst - ZAP-Hosting.com Dokumentation 
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

### Konfiguration

Klicke im Webinterface deines Gameservers links unter Einstellungen auf "Configs":

![404-325-max](https://screensaver01.zap-hosting.com/index.php/s/CGPMLcRTjKAmtdF/preview)

Jetzt siehst du die "Stormworks server_config.xml". Klicke zum Bearbeiten auf den blauen Stift:

![752-69-max](https://screensaver01.zap-hosting.com/index.php/s/gHcMfxHbEPN5rfN/preview)

Anschließend kannst du in der Sektion "admin" eine Steam64ID hinzufügen, welche Admin Rechte erhalten soll:

![image](https://screensaver01.zap-hosting.com/index.php/s/68LsAWRmDoYzmTY/preview)

Wenn du weitere Admins hinzufügen möchtest, trage sie untereinander ein:

![image](https://screensaver01.zap-hosting.com/index.php/s/2Fait3TFez7DXD8/preview)

Nachdem du die Admins eingetragen hast, kannst du die Config mit dem "Speichern" Button speichern:

![image](https://screensaver01.zap-hosting.com/index.php/s/5Wjtz9q3D84xbda/preview)

Starte nun deinen Server neu, damit alle eingetragenen Steam64IDs ihre Admin-Berechtigungen erhalten. 
