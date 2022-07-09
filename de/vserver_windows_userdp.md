---
id: vserver_windows_userdp
title: vServer: Erstzugriff auf Windows Server mit RDP
description: Informationen, wie der Erstzugriff auf deinen Windows vServer von ZAP-Hosting mit der Remote Desktopverbindung funktioniert - ZAP-Hosting.com Dokumentationen
sidebar_label: Erstzugriff (RDP)
---

## 🖥 Remotedesktopverbindung

![Remote](https://user-images.githubusercontent.com/13604413/178118543-4b8ca75d-1308-44b6-80c0-da5eb7c48bfc.gif)


Die Verbindung zu deinem Windows Server erfolgt über das von Windows mitgelieferte Programm "Remotedesktopverbindung".  Das Programm lässt sich über die Windows Suche unter dem Begriff "remote" finden.

> Die Windows Suchfunktion ist über das Windows Symbol in der linken unteren Ecke zu finden.

![image](https://user-images.githubusercontent.com/13604413/159172603-28ab83df-7b01-47ff-a7de-820a2f9b21cd.png)

## 🏘 IP-Adresse & Zugang

"Remotedesktopverbindung", fragt nach einem "**Computernamen**". Das ist die IP-Adresse des Servers.

![image](https://user-images.githubusercontent.com/13604413/159172608-95cba5ba-111f-41e5-b3c5-edc28ef495b5.png)

Die IP-Adresse findet sich im ZAP Webinterface unter "**Zugang & Sicherheit**", sowie in der Infobar.

![image](https://user-images.githubusercontent.com/13604413/178118559-6afaf372-99f4-48b4-ad3e-c02df91f549c.png)


Das Programm fragt nach einem **Benutzernamen** und **Kennwort**. Der Benutzername lautet "**Administrator**". Das Passwort lässt sich im Webinterface unter "**Zugang & Sicherheit**" setzen.

![image](https://user-images.githubusercontent.com/13604413/178118566-ab8b05d1-d827-46fb-b680-cbca549593bb.png)


> Standardgemäß ist kein Zertifikat installiert. Das Passwort wird daher unsicher übermittelt. Erfahre hier, wie du ein Zertifikat erstellst: RDP Zertifikat


## 🤷♂ Alternative Remote Programme

Folgende alternative Programme sind geeignet um per Remote auf einen Windows Server zu verbinden: 

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

> Für die **iOS** User: **Microsoft Remote Desktop 10** im Mac App Store, **Android** Parallels Client
