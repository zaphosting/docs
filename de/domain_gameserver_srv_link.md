---
id: domain_gameserver_link
title: Domain Gameserver Weiterleitung
sidebar_label: Domain Gameserver Weiterleitung
---


## Domain auf Gameserver weiterleiten

Du kannst entweder deine Domain vollständig, oder lediglich eine Subdomain auf deinen Gameserver weiterleiten.
So muss sich niemand die komplizierte IP Adresse welche aus Zahlen besteht merken sondern kann sich einfach mithilfe der Domain auf deinen Gameserver verbinden.
In den folgenden Beispielen erstellen zir zwei Subdomains und leiten diese auf einen Minecraft- und auf einen FiveM Gameserver weiter.


## Wie funktioniert das?

### Bevor wir mit der Erstellung von Einträgen in den DNS Einstellungen der Domain beginnen, hier ein paar Informationen vorab:
Für die Weiterleitung der IP Adresse wird eine Subdomain erstellt welche auf die IP Adresse des Gameservers leitet.
Dies würde bereits ausreichen wenn der Gameserver den Standartport des jeweiligen Spiels verwendet.
Verwendet der Gameserver jedoch einen anderen Port als den Standartport des jeweiligen Spiels, wird zusätzlich noch ein sogenannter **SRV Eintrag**
benötigt um die Subdomain auf den richtigen Port weiterleiten zu können.

> Nicht alle Spiele unterstützen die Weiterleitung einer Domain auf den Spielport per SRV Eintrag, informiere dich daher vorher ob 
dein Spiel SRV Einträge unterstützt.


### SRV Service

Der Servicename hängt vom jeweiligen Spiel ab und beginnt immer mit einem **Unterstrich**.
Zum Beispiel lautet der Servicename für einen Minecraft Gameserver immer **_minecraft** und für einen FiveM Gameserver **_cfx**.


### SRV Protokoll

Als Protokoll geben wir das für die Verbindung verwendete Internetprotokoll an. Hier stehen **UDP** und **TCP** zur Verfügung.
Welches Protokoll hier verwendet wird hängt ebenfalls vom jeweiligen Spiel ab, die Angabe des Protokolls beginnt ebenfalls immer
mit einem **Unterstrich** und lautet entweder **_udp** oder **_tcp**.


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
Als **Name** wählen wir hier den Namen der Domain, als Beispiel fivem-server.de, der **Typ ist A** und der **Wert** entspricht der
zahlen IP deines Gameservers, in diesem Fall **88.214.57.116**.
Das Feld **TTL** kannst du unberührt lassen.

![](https://puu.sh/Fuzsi/3bbe761892.png)

Wenn du alle seingetragen hast klickst du auf **Speichern**, der Eintrag wird dann in den DNS Einstellungen hinterlegt und wird innerhalb
von 24 Stunden erreichbar.

> Es kann immer bis zu 24 Stunden dauern bis neue DNS Einträge aktiv werden. Darauf hat leider niemand Einfluss.


## Weiterleitung der Domain mit Subdomain

Willst du eine Subdomain, also zum Beispiel minecraft.fivem-server.de erstellen, erledigst du das wie im vorheringen Beispiel, 
gibst jedoch bei **Name** nicht den Namen der Domain, sondern der Subdomain an.
Das sieht so aus:

![](https://puu.sh/Fuzxd/de90d297e8.png)


## Weiterleitung der Domain mit Spielport (SRV)

Wird nicht der Spielport genutzt so muss zusätzlich ein sogenannter **SRV Eintrag** angelegt werden um nicht nur die Domain
auf die IP des Gameservers sondern auch auf den korrekten Port weiterzuleiten.

Zuerst erstellt du wie oben beschrieben entweder eine **Subdomain** oder du leitest die Domain wie oben beschrieben
direkt auf den Gameserver weiter, beides ist möglich. 

### Weiterleitung ohne Subdomain


Nachdem du wie oben beschrieben deine Domain auf die IP Adresse deines Gameservers weitergeleitet hast klickst du auf **Neuer Eintrag**
und erstellst einen Eintrag der wie folgt aussieht:

![](https://puu.sh/FuXZs/a4d7149643.png)

Das Feld **Name** beinhaltet den Namen des Service's, was in diesem Fall unser Minecraft Gameserver ist, also **_minecraft**.
Das Feld **Typ** gibt an um welche Art von Eintrag es sich handelt, in diesem Fall ist es ein **SRV** Eintrag.
Der Wert ist in diesem Fall **0 2132 fivem-server.de**, wobei **2132** der **Port des Spiels** ist und **fivem-server.de** die Domain zu welcher die Weiterleitung erfolgt. 
Der Wert **0** ist nicht weiter relevant und bleibt immer gleich.

Danach kannst du auf **Speichern** klicken.

