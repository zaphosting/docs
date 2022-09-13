---
id: fivem_installeup
title: FiveM: EUP auf Server installieren
description: Informationen, wie du EUP auf deinen FiveM-Server von ZAP-Hosting.com installieren kannst - ZAP-Hosting.com Dokumenationen
sidebar_label: EUP Installieren
---

> Um den EUP zu installieren wird ein Fivem Element Argentum (oder höher) Schlüssel benötigt [Fivem Patreon](https://www.patreon.com/fivem)

## Mit FTP verbinden

Bevor EUP installiert werden kann, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![image](https://user-images.githubusercontent.com/26007280/189978562-f2a5d73b-b453-4e02-ba0f-34c6c2daedb6.png)

## Vorbereitung

Nun laden wir EUP von den [FiveM Foren](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) runter.

Außerdem müssen wir [NativeUI herunterladen](https://github.com/FrazzIe/NativeUILua/archive/master.zip)

nachdem wir die `eup-ui.7z`, `eup-stream.7z` und "NativeUI-master.zip" runtergeladen haben, müssen wir diese entpacken:

![image](https://user-images.githubusercontent.com/13604413/159167172-33ea451b-fc5f-4dd7-8768-c55dd4e791c5.png)

> Beachte: Bei NativeUI muss erst der "NativeUI-master" ordner geöffnet werden, dort befinden sich die richtigen scripts.

Nachdem die Resource entpackt wurde, sollte darin nun eine __resource.lua oder fxmanifest.lua und Script Files/Ordner sein.

**eup-ui**
![image](https://user-images.githubusercontent.com/13604413/159167183-5a3c682f-5e9f-4df3-938f-f8168f2c8ab6.png)

**eup-stream**
![image](https://user-images.githubusercontent.com/13604413/159167191-887fb1a0-961d-4b57-9beb-78a6a0a5ef00.png)

**NativeUI**
![image](https://user-images.githubusercontent.com/13604413/159167198-1c976213-42f3-41df-b444-b8dafb8ebeec.png)

> Wenn dies nicht der Fall ist, befinden sich diese ggf. in einem Unterordner, meist mit dem gleichen Namen.

## Resourcen hochladen


Nun installieren wir die resourcen, in unserem beispiel über WinSCP, wir können diese über drag&drop in den "resources" Ordner hochladen

![image](https://user-images.githubusercontent.com/13604413/159167216-255c1841-8db9-4d43-a0ec-58f6783ead3a.png)

Nachdem diese hochgeladen wurde, muss die server.cfg im server-data Ordner geöffnet werden:

![image](https://user-images.githubusercontent.com/13604413/159167223-cd8e0b4b-67a4-420e-9f0d-c74e070e489f.png)


Unter den restlichen Starteinträgen für Ressourcen kann nun der Eintrag für unsere resources, in diesem Fall "NativeUI", "eup-stream" und "eup-ui", hinzugefügt werden:

![image](https://user-images.githubusercontent.com/13604413/159167238-56880863-9a49-4651-a95c-daa070743def.png)


Danach kann der Server neugestartet werden und EUP sollte Ingame über das `/eup` Command verfügbar sein!
