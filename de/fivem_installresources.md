---
id: fivem_installresources
title: Resourcen Installieren
sidebar_label: Resourcen Installieren
---

## Mit FTP Verbinden

Bevor Resourcen installiert werden können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

!()[https://screensaver01.zap-hosting.com/index.php/s/ekYw27nA4cgiNAk/preview]]

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server ordner geöffnet werden:

!()[https://screensaver01.zap-hosting.com/index.php/s/MHt37AFEeZYgs97/preview]]


## Vorbereitung

Nachdem eine Resource Runtergeladen wurde, ist diese normalerweise ZIP-Gepackt, diese muss nun entpackt werden (z.b. mit 7Zip, WinRar oder WinZip)

!()[https://screensaver01.zap-hosting.com/index.php/s/RAnCTpmKW4GgCS4/preview]

Nachdem die Resource Entpackt wurde, sollte darin nun eine __resource.lua oder fxmanifest.lua und script files/ordner sein.

!()[https://screensaver01.zap-hosting.com/index.php/s/gNtZNKnbjMcgwoE/preview]

## Resourcen Hochladen


Um mit WinSCP Resourcen zu installieren, können diese über drag&drop in den "resources" ordner hochgeladen werden

!()[https://screensaver01.zap-hosting.com/index.php/s/DdYcbM798ZX2iDc/preview]

Nachdem diese hochgeladen wurde, muss die server.cfg im server-data ordner geöffnet werden:

!()[https://screensaver01.zap-hosting.com/index.php/s/d3EAFx73JzJfcf9/preview]

unter den restlichen starteinträgen für resourcen kann nun der eintrag für unsere resource, in diesem fall "SexySpeedometer-FiveM-master", hinzugefügt werden:


!()[https://screensaver01.zap-hosting.com/index.php/s/ygky6YiDr43C8Ns/preview]

> Beachte: Es muss der *name des ordners* eingetragen werden.


Danach kann der server neugestartet werden und die resource sollte ingame erscheinen!