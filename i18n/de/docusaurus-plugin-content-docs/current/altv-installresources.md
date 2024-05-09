---
id: altv-installresources
title: "Alt:V: Installation von Ressourcen"
description: 'Informationen, wie du Ressourcen auf deinen ALT:V Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation'
sidebar_label: Ressourcen installieren
---

## Mit FTP verbinden

Bevor Ressourcen installiert werden können, muss der [FTP-Zugang](gameserver-ftpaccess.md) eingerichtet werden:

![image](https://user-images.githubusercontent.com/13604413/159184693-261d0660-4cfb-472e-b3bb-945ab6a33346.png)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![image](https://user-images.githubusercontent.com/13604413/169707290-e987df75-e338-4fb7-aa64-e9fb80fd3df0.png)



## Vorbereitung

Nachdem eine Ressource heruntergeladen wurde, ist diese normalerweiseals  ZIP-gepackt. Diese muss nun entpackt werden (z. B. mit 7Zip, WinRar oder WinZip)

Nachdem die Ressource entpackt wurde, sollte darin nun eine resource.cfg und Script Files/Ordner sein.

![image](https://user-images.githubusercontent.com/13604413/169707329-52aaa6ab-2de2-48ac-9c45-3a5d95968edc.png)


:::info
Wenn dies nicht der Fall ist, befinden sich diese ggf. in einem Unterordner, meist mit dem gleichen Namen.
:::

## Ressourcen hochladen


Um mit WinSCP Ressourcen zu installieren, können diese über drag&drop in den "resources" Ordner hochgeladen werden

![image](https://user-images.githubusercontent.com/13604413/169707344-7e6e6266-5540-4b9b-a287-ce633a0f592e.png)

Nachdem diese hochgeladen wurde, muss die server.cfg im gta5-altv-linux Ordner geöffnet werden:

![image](https://user-images.githubusercontent.com/13604413/169707357-3a63ede6-1385-485c-bfa2-6b62fb9e629a.png)

Unter den restlichen Starteinträgen für Ressourcen kann nun der Eintrag für unsere resource, in diesem Fall "altV-3D-Speedo", hinzugefügt werden:


![image](https://user-images.githubusercontent.com/13604413/169707378-85eb7c30-aba5-4b17-8b5f-4ed931aee14d.png)

:::info
Beachte: Es muss nach jeder Zeile in dieser Liste, außer bei der letzten, ein Komma stehen.
:::

Danach kann der Server neu gestartet werden und die Ressource sollte im Spiel angezeigt werden!