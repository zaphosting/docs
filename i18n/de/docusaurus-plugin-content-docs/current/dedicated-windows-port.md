---
id: dedicated-windows-port
title: "Dedicated Server: Ports bei Windows Servern freigeben"
description: Informationen, wie du Ports bei deinem Windows Dedicated Server von ZAP-Hosting freigeben kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Port freigeben
---

## Die Firewall

Eine Firewall kontrolliert den ein- und ausgehenden Verkehr zwischen Server und Internet.
Geöffnete Ports können ein Sicherheitsrisiko darstellen, aufgrund dessen wird nicht automatisch jeder Port geöffnet.

Wenn geblockte Ports für einen Spiele Server oder bestimmte Applikationen benötigt werden, muss eine Portfreigabe durchgeführt werden.

Zu Beginn muss die "**Windows Firewall mit erweiterter Sicherheit**" geöffnet werden.
Diese kann nach einem Klick auf das Windows Logo gesucht werden

![](https://screensaver01.zap-hosting.com/index.php/s/cgTZwYcb5w2tGRs/preview)

***

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value=" Programme in der Windows-Firewall freigeben" label=" Programme in der Windows-Firewall freigeben">


## Programme in der Windows-Firewall freigeben

Die freigabe für die "**Ausgehende Regel**" funktioniert auf gleichem Wege wie für die "**Eingehende Regel**", wir zeigen in diesem Beispiel daher nur die Freigabe eines Programms für die "**Eingehende Regel**".

Sobald in der Firewall Verwaltung die "**Eingehende Regel**" oder "**Ausgehende Regel**" ausgewählt wurde, muss bei diesem eine "**Neue Regel**" erstellt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/CmPdBRDbWGx69xa/preview)

Bei dieser neuen Regel wird als "**Regeltyp**" "**Programm**" gewählt und mit "**Weiter >**" bestätigt

![](https://screensaver01.zap-hosting.com/index.php/s/sfxa5xiaeSrY4z4/preview)

Hier kann direkt nach unserem Programm gesucht werden, in unserem fall nehmen wir beispielweise Chrome:

![](https://screensaver01.zap-hosting.com/index.php/s/YQG2k2PyontxPno/preview)

Nun kann gewählt werden ob der Server die Verbindung mit dem Programm erlaubt, nur unter bestimmten Voraussetzungen zulässt oder blockieren soll.

![](https://screensaver01.zap-hosting.com/index.php/s/cr4q7rsLP3WoBam/preview)

Dies wird erneut mit dem "**Weiter >**" bestätigt.

In dem "**Profil**" kann nun gewählt werden, ob diese Regel nur für bestimmte Netzwerke oder alle aktiv sein soll. 

![](https://screensaver01.zap-hosting.com/index.php/s/j27BXdzrgTFMtwM/preview)

Bei "**Name**" muss nur noch ein Name für diese neue "**Regel**" eingetragen werden, dieser ist frei wählbar.

:::info
Hierbei sollte ein Name gewählt werden der noch ungenutzt und eindeutig ist, damit dieser unter "**Eingehende Regel**" bzw. "**Ausgehende Regel**" wiedergefunden werden kann.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ZR4qQFm8tHT2wRr/preview)

Sobald mit dem Button "**Fertig stellen**" bestätigt, wird die Regel aktiviert und der Port ist freigegeben.

</TabItem>
<TabItem value=" Port in der Windows-Firewall freigeben" label=" Port in der Windows-Firewall freigeben">


## Port in der Windows-Firewall freigeben


Bei der eingehenden Regel werden die Ports für Anwendungen freigegeben welche von außen versuchen mit dem Server zu kommunizieren.
Bei der ausgehenden Regel werden die Ports für Anwendungen freigegeben welche vom Server nach außen kommunizieren möchten.

Die Portfreigabe für die "**Ausgehende Regel**" funktioniert auf gleichem Wege wie für die "**Eingehende Regel**", wir zeigen in diesem Beispiel daher nur die Freigabe eines Ports für die "**Eingehende Regel**".

Sobald in der Firewall Verwaltung die "**Eingehende Regel**" oder "**Ausgehende Regel**" ausgewählt wurde, muss bei diesem eine "**Neue Regel**" erstellt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/JcZF6iqMaE2nqs4/preview)

Bei dieser neuen Regel wird als "**Regeltyp**" der "**Port**" gewählt und mit "**Weiter >**" bestätigt

![](https://screensaver01.zap-hosting.com/index.php/s/mE68YpraZSFSFHc/preview)

Je nach Anwendung muss nun "**TCP**" oder "**UDP**" gewählt werden. 
Sobald herausgefunden und ausgewählt wurde welches der Beiden für die gewünschte Anwendung genutzt werden soll, muss nun bei "**Bestimmte lokale Ports:**" der Port eingetragen werden welcher freigegeben werden soll.
Dies wird erneut mit dem "**Weiter >**" bestätigt.

![](https://screensaver01.zap-hosting.com/index.php/s/tGq9XsmctHkCfF5/preview)

Nun kann gewählt werden ob der Server die Verbindung mit dem Port zulassen, nur unter bestimmten Voraussetzungen zulassen oder blockieren soll.
Dies wird erneut mit dem "**Weiter >**" bestätigt.

![](https://screensaver01.zap-hosting.com/index.php/s/CDkF4FT8sPbngZn/preview)

In dem "**Profil**" kann nun gewählt werden, ob diese Regel nur für bestimmte Netzwerke oder alle aktiv sein soll. 
Dies wird erneut mit dem "**Weiter >**" bestätigt.

![](https://screensaver01.zap-hosting.com/index.php/s/YTX4NBqyRan3PiJ/preview)

Bei "**Name**" muss nur noch ein Name für diese neue "**Regel**" eingetragen werden, dieser ist frei wählbar.

:::info
Hierbei sollte ein Name gewählt werden der noch ungenutzt und eindeutig ist, damit dieser unter "**Eingehende Regel**" bzw. "**Ausgehende Regel**" wiedergefunden werden kann.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/29tFMeL7PazRtWB/preview)

Sobald mit dem Button "**Fertig stellen**" bestätigt, wird die Regel aktiviert und der Port ist freigegeben.

</TabItem>
</Tabs>
