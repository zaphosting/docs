---
id: domain_teamspeak_redirect
title: Domain TeamSpeak 3 Weiterleitung
sidebar_label: Domain TeamSpeak 3 Weiterleitung
---

> Bitte beachte dass es immer bis zu 24 Stunden dauern kann bis Änderungen an DNS Einträgen aktiv werden!

## Domain auf TeamSpeak 3 Server weiterleiten

Du kannst entweder deine Domain vollständig, oder lediglich eine Subdomain auf deinen TeamSpeak 3 Server weiterleiten.
So muss sich niemand die komplizierte IP Adresse welche aus Zahlen besteht merken sondern kann sich einfach mithilfe der Domain auf deinen TeamSpeak 3 Server verbinden.


## Wie funktioniert das?

### Bevor wir mit der Erstellung von Einträgen in den DNS Einstellungen der Domain beginnen, hier ein paar Informationen vorab:

Für die Weiterleitung der IP Adresse wird entweder eine Subdomain erstellt welche auf die IP Adresse des TeamSpeak 3 Servers leitet, oder du leitest die komplette Domain ohne Subdomain weiter.
Dies würde bereits ausreichen wenn der TeamSpeak 3 Server den Standartport **9987** verwendet.
Verwendet der TeamSpeak 3 Server jedoch einen anderen Port als den Standartport, wird zusätzlich noch ein sogenannter **SRV Eintrag**
benötigt um die Domain oder Subdomain auf den richtigen Port weiterleiten zu können.

### SRV Service

Der Servicename beginnt immer mit einem **Unterstrich**.
Für einen TeamSpeak 3 Server lautet der Servicename immer **_ts3**, ohne Ausnahme.

### SRV Protokoll

Als Protokoll geben wir das für die Verbindung verwendete Internetprotokoll an. Hier stehen **UDP** und **TCP** zur Verfügung.
Die Angabe des Protokolls beginnt ebenfalls immer mit einem **Unterstrich** und lautet entweder **_udp** oder **_tcp**.
Für einen TeamSpeak 3 Server wird immer **_udp** verwendet, ohne Ausnahme. 


## Weiterleitung der Domain ohne Subdomain

Um deine Domain ohne die Erstellung einer Subdomain auf einen Gameserver weiterzuleiten, öffnest du zuerst deine Domain indem du
im Dashboard auf diese klickst, anschließend öffnest du die DNS-Verwaltung über das Menü auf der linken Seite.

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)


Dort siehst du nun alle bereits vorhandenen DNS Einträge für deine Domain.
Sofern du dort noch keine eigenen Einträge erstellt hast kannst du alle bisher vorhandenen EInträge durch einen Klick 
auf den roten Mülleimer auf der rechten Seite löschen.

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

Anschließend klickst du auf **Neuer Eintrag** und landest dann in der Erstellung für einen neuen DNS Eintrag.
Als **Name** wählen wir hier den Namen der Domain, als Beispiel **teamspeak-server.de**, der **Typ ist A** und der **Wert** entspricht der
zahlen IP deines TeamSpeak 3 Servers, in diesem Fall **88.214.57.116**.
Das Feld **TTL** kannst du unberührt lassen.

![](https://screensaver01.zap-hosting.com/index.php/s/5LZBjHzAr3ZEcYM/preview)

Wenn du alles eingetragen hast klickst du auf **Speichern**, der Eintrag wird dann in den DNS Einstellungen hinterlegt und wird innerhalb
von 24 Stunden erreichbar.

> Es kann immer bis zu 24 Stunden dauern bis neue DNS Einträge aktiv werden. Darauf hat leider niemand Einfluss.

## Weiterleitung der Domain mit Subdomain

Willst du eine Subdomain, also zum Beispiel ts.teamspeak-server.de erstellen, erledigst du das wie im vorheringen Beispiel, 
gibst jedoch bei **Name** nicht den Namen der Domain, sondern der Subdomain an.
Das sieht so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/Q4JFdKtgtgbmt5e/preview)


## Weiterleitung der Domain mit Port (SRV)

Wird nicht der Standartport **9987** genutzt so muss zusätzlich ein sogenannter **SRV Eintrag** angelegt werden um nicht nur die Domain
auf die IP des Gameservers sondern auch auf den korrekten Port weiterzuleiten.

Zuerst erstellt du wie oben beschrieben entweder eine **Subdomain** oder du leitest die Domain wie oben beschrieben
direkt auf den TeamSpeak 3 Server weiter, beides ist möglich. 

### Weiterleitung ohne Subdomain


Nachdem du wie oben beschrieben deine Domain auf die IP Adresse deines TeamSpeak 3 Servers weitergeleitet hast klickst du auf **Neuer Eintrag**
und erstellst einen Eintrag der wie folgt aussieht:

![](https://screensaver01.zap-hosting.com/index.php/s/xeCr4mB83KACFBd/preview)

Das Feld **Name** beinhaltet den Namen des Service's, was in diesem Fall unser TeamSpeak 3 Server ist, also **_ts3**. Ebenso ist dort der Protokolltyp, in diesem Fall **_udp** so wie der **Domainname** angegeben. 
Das Feld **Typ** gibt an um welche Art von Eintrag es sich handelt, in diesem Fall ist es ein **SRV** Eintrag.
Das Feld **Wert** enthält den Spielport und die Domain, also in diesem Fall **0 1234 teamspeak-server.de**, wobei **1234** der **Port des Spiels** ist und **teamspeak-server.de** die Domain zu welcher die Weiterleitung erfolgt. 
Der Wert **0** ist nicht weiter relevant und bleibt immer gleich. Das Feld **TTL** und **Prio** lässt du ebenfalls unberührt.

Danach kannst du auf **Speichern** klicken.

> Wichtig ist, dass im Feld **Wert** am Ende der Domain ein **Punkt** gesetzt wird!


### Weiterleitung mit Subdomain

Mit einer Subdomain verhält es sich fast genau so. Du erstellst zuerst wie oben beschrieben eine Subdomain und leitest diese auf die IP Adresse deines TeamSpeak 3 Servers weiter. Im Anschluss klickst du auf **Neuer Eintrag** und erstellst dort einen Eintrag mit folgendem Inhalt:

![](https://screensaver01.zap-hosting.com/index.php/s/G8sT8LrEiZHrmis/preview)


Das Feld **Name** beinhaltet den Namen des Service's, was in diesem Fall unser TeamSpeak 3 Server ist, also **_ts3**. Ebenso ist dort der Protokolltyp, in diesem Fall **_udp** so wie der **Domainname** zusammen mit der **Subdomain**, also **ts.teamspeak-server.de** angegeben. 
Das Feld **Typ** gibt an um welche Art von Eintrag es sich handelt, in diesem Fall ist es ein **SRV** Eintrag.
Das Feld **Wert** enthält den Port und die Domain mit Subdomain, also in diesem Fall **0 1234 ts.teamspeak-server.de**, wobei **1234** der **Port des TeamSpeak 3 Servers** ist und **ts.teamspeak-server.de** die Domain mit Subdomain zu welcher die Weiterleitung erfolgt. 
Der Wert **0** ist nicht weiter relevant und bleibt immer gleich. Das Feld **TTL** und **Prio** lässt du ebenfalls unberührt.
