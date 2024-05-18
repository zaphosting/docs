---
id: vserver-windows-port
title: "vServer: Ports bei Windows Servern freigeben (Firewall)"
description: Informationen, wie du Ports bei deinem Windows vServer von ZAP-Hosting freigeben kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Port freigeben
---

## Die Firewall

Eine Firewall kontrolliert den ein- und ausgehenden Verkehr zwischen Server und Internet.
Geöffnete Ports können ein Sicherheitsrisiko darstellen, aufgrund dessen wird nicht automatisch jeder Port geöffnet.

Wenn geblockte Ports für einen Spiele Server oder bestimmte Applikationen benötigt werden, muss eine Portfreigabe durchgeführt werden.

Zu Beginn muss die "**Windows Firewall mit erweiterter Sicherheit**" geöffnet werden.
Diese kann nach einem Klick auf das Windows Logo gesucht werden

![](https://user-images.githubusercontent.com/61839701/166196225-575cd720-6e9c-4383-8918-a65620930d4f.png)

***

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value=" Programme in der Windows-Firewall freigeben" label=" Programme in der Windows-Firewall freigeben">


## Programme in der Windows-Firewall freigeben

Die freigabe für die "**Ausgehende Regel**" funktioniert auf gleichem Wege wie für die "**Eingehende Regel**", wir zeigen in diesem Beispiel daher nur die Freigabe eines Programms für die "**Eingehende Regel**".

Sobald in der Firewall Verwaltung die "**Eingehende Regel**" oder "**Ausgehende Regel**" ausgewählt wurde, muss bei diesem eine "**Neue Regel**" erstellt werden.

![](https://user-images.githubusercontent.com/61839701/166196248-d3fea6fc-1111-45f3-afb6-f29fc612e264.png)

Bei dieser neuen Regel wird als "**Regeltyp**" "**Programm**" gewählt und mit "**Weiter >**" bestätigt

![](https://user-images.githubusercontent.com/61839701/166196273-17cdc85b-38b9-49c8-9935-4fe58aec1134.png)

Hier kann direkt nach unserem Programm gesucht werden, in unserem fall nehmen wir beispielweise Chrome:

![](https://user-images.githubusercontent.com/61839701/166196294-911b8e60-007d-4e5f-bb5f-645f73a1fa0f.png)

Nun kann gewählt werden ob der Server die Verbindung mit dem Programm erlaubt, nur unter bestimmten Voraussetzungen zulässt oder blockieren soll.

![](https://user-images.githubusercontent.com/61839701/166196311-b9c2c430-5885-4022-8267-66b90d713898.png)

Dies wird erneut mit dem "**Weiter >**" bestätigt.

In dem "**Profil**" kann nun gewählt werden, ob diese Regel nur für bestimmte Netzwerke oder alle aktiv sein soll. 

![](https://user-images.githubusercontent.com/61839701/166196402-98c13256-3c11-4160-bf6b-c28a2d9c5a17.png)

Bei "**Name**" muss nur noch ein Name für diese neue "**Regel**" eingetragen werden, dieser ist frei wählbar.

:::info
Hierbei sollte ein Name gewählt werden der noch ungenutzt und eindeutig ist, damit dieser unter "**Eingehende Regel**" bzw. "**Ausgehende Regel**" wiedergefunden werden kann.
:::

![](https://user-images.githubusercontent.com/61839701/166196419-6d443e71-18ff-4e46-9bda-4f32db3c9fd8.png)

Sobald mit dem Button "**Fertig stellen**" bestätigt, wird die Regel aktiviert und der Port ist freigegeben.

</TabItem>
<TabItem value=" Port in der Windows-Firewall freigeben" label=" Port in der Windows-Firewall freigeben">


## Port in der Windows-Firewall freigeben


Bei der eingehenden Regel werden die Ports für Anwendungen freigegeben welche von außen versuchen mit dem Server zu kommunizieren.
Bei der ausgehenden Regel werden die Ports für Anwendungen freigegeben welche vom Server nach außen kommunizieren möchten.

Die Portfreigabe für die "**Ausgehende Regel**" funktioniert auf gleichem Wege wie für die "**Eingehende Regel**", wir zeigen in diesem Beispiel daher nur die Freigabe eines Ports für die "**Eingehende Regel**".

Sobald in der Firewall Verwaltung die "**Eingehende Regel**" oder "**Ausgehende Regel**" ausgewählt wurde, muss bei diesem eine "**Neue Regel**" erstellt werden.

![](https://user-images.githubusercontent.com/61839701/166196453-1670f479-b6b9-4dff-868c-1b977086ec68.png)

Bei dieser neuen Regel wird als "**Regeltyp**" der "**Port**" gewählt und mit "**Weiter >**" bestätigt

![](https://user-images.githubusercontent.com/61839701/166196486-d2163bde-7f8c-43d7-9be9-3a3c0ec13b21.png)

Je nach Anwendung muss nun "**TCP**" oder "**UDP**" gewählt werden. 
Sobald herausgefunden und ausgewählt wurde welches der Beiden für die gewünschte Anwendung genutzt werden soll, muss nun bei "**Bestimmte lokale Ports:**" der Port eingetragen werden welcher freigegeben werden soll.
Dies wird erneut mit dem "**Weiter >**" bestätigt.

![](https://user-images.githubusercontent.com/61839701/166196510-d4204faf-9a0d-47f8-bb8c-13528b95cb2a.png)

Nun kann gewählt werden ob der Server die Verbindung mit dem Port zulassen, nur unter bestimmten Voraussetzungen zulassen oder blockieren soll.
Dies wird erneut mit dem "**Weiter >**" bestätigt.

![](https://user-images.githubusercontent.com/61839701/166196533-5e6e44da-117d-4648-b6dc-8053d2c35245.png)

In dem "**Profil**" kann nun gewählt werden, ob diese Regel nur für bestimmte Netzwerke oder alle aktiv sein soll. 
Dies wird erneut mit dem "**Weiter >**" bestätigt.

![](https://user-images.githubusercontent.com/61839701/166196581-ece45bbd-c55e-4da7-bf60-ba8e304276e7.png)

Bei "**Name**" muss nur noch ein Name für diese neue "**Regel**" eingetragen werden, dieser ist frei wählbar.

:::info
Hierbei sollte ein Name gewählt werden der noch ungenutzt und eindeutig ist, damit dieser unter "**Eingehende Regel**" bzw. "**Ausgehende Regel**" wiedergefunden werden kann.
:::

![](https://user-images.githubusercontent.com/61839701/166196602-7cd1ce91-a826-4737-b74e-d062489b7630.png)

Sobald mit dem Button "**Fertig stellen**" bestätigt, wird die Regel aktiviert und der Port ist freigegeben.

</TabItem>
</Tabs>
