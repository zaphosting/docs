---
id: domain_gameserver_srv_link
title: Domain Gameserver Weiterleitung
sidebar_label: Domain Gameserver Weiterleitung
---

> Bitte beachte dass es immer bis zu 24 Stunden dauern kann bis Änderungen an DNS Einträgen aktiv werden!

## Domain auf Gameserver weiterleiten

Du kannst entweder deine Domain vollständig, oder lediglich eine Subdomain auf deinen Gameserver weiterleiten.
So muss sich niemand die komplizierte IP Adresse welche aus Zahlen besteht merken sondern kann sich einfach mithilfe der Domain auf deinen Gameserver verbinden.
In den folgenden Beispielen erstellen wir zwei Subdomains und leiten diese auf einen Minecraft- und auf einen FiveM Gameserver weiter.

## Wie funktioniert das?

### Bevor wir mit der Erstellung von Einträgen in den DNS Einstellungen der Domain beginnen, hier ein paar Informationen vorab:
Für die Weiterleitung der IP Adresse wird entweder eine Subdomain erstellt welche auf die IP Adresse des Gameservers leitet, oder du leitest die komplette Domain ohne Subdomain weiter.
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

## Vorbereitung
Um deine Domain ohne die Erstellung einer Subdomain auf einen Gameserver weiterzuleiten, öffnest du zuerst deine Domain indem du
im Dashboard auf diese klickst, anschließend öffnest du die DNS-Verwaltung über das Menü auf der linken Seite.

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)

Dort siehst du nun alle bereits vorhandenen DNS Einträge für deine Domain.
Sofern du dort noch keine eigenen Einträge erstellt hast kannst du alle bisher vorhandenen EInträge durch einen Klick 
auf den roten Mülleimer auf der rechten Seite löschen.

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

## Weiterleitung der Domain ohne Subdomain aber mit dem Standardport
Insofern du die Hauptdomain verwenden möchtest UND der Zielserver den Standardport besitzt, bist du hier richtig!

### Minecraft + Fivem
Du kannst in deiner Domain Verwaltung auf **Neuer Eintrag** klicken und landest dann in der Erstellung für einen neuen DNS Eintrag.
Als **Name** wählen wir hier den Namen der Domain, als Beispiel **minecraft-server.de**, der **Typ ist A** und der **Wert** entspricht der
IP deines Gameservers, in diesem Fall **88.214.57.116**.
Das Feld **TTL** kannst du unberührt lassen.

![](https://screensaver01.zap-hosting.com/index.php/s/iCX7mJScBTZSqQe/preview)

Wenn du alles eingetragen hast, klickst du auf **Speichern**, der Eintrag wird dann in den DNS Einstellungen hinterlegt und wird innerhalb
von 24 Stunden erreichbar. Somit kannst du dich dann im Anschluss mit der Domain "minecraft-server.de" mit deinem Fivem Server bzw Minecraft Server verbinden!

> Es kann immer **bis** zu 24 Stunden dauern bis neue DNS Einträge aktiv werden. Darauf hat leider niemand Einfluss.


## Weiterleitung der Domain mit Subdomain und mit dem Standardport

### Minecraft + Fivem
Willst du eine Subdomain, also zum Beispiel lobby.minecraft-server.de erstellen, erledigst du das wie im vorheringen Beispiel, 
gibst jedoch bei **Name** nicht den Namen der Domain, sondern der Subdomain an.
Das sieht so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/NzmLzAJkgcaZpqa/preview)

Auch hier nach dem eintragen auf **Speichern** klicken.
Es kann dann **bis** zu 24 Stunden dauern bis dieser global übernommen wurde.
Du kannst dich dann mit lobby.minecraft-server.de mit deinem Minecraft / Fivem Server verbinden.

## Weiterleitung der Domain ohne Standardport und ohne Subdomain

Wird nicht der Spielport genutzt so muss zusätzlich ein sogenannter **SRV Eintrag** angelegt werden um nicht nur die Domain
auf die IP des Gameservers sondern auch auf den korrekten Port weiterzuleiten.

Anfangs erstellst du wieder wie gewohnt eine Subdomain, welche auf die IP deines Servers verweist.
Der Name der Subdomain spielt dabei überhaupt keine Rolle.
In unserem Beispiel heißt unsere Subdomain "SRV".
Das sieht dann so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/DXTB2MtjC8FcgqE/preview)

Im Anschluss muss ein weiterer Record erstellt werden. In diesem Fall nun der besagte reine SRV Eintrag.
Hierbei unterscheiden wir aber nun zwischen Fivem und Minecraft.

### Minecraft
Hast du einen Minecraft Server bist du hier richtig!
Klicke in deiner Domain Verwaltung erneut auf **Neuer Eintrag**.
Hier arbeiten wir uns nun Zeile für Zeile durch um die Verknüpfung abzuschließen.

Das Feld **Name** beinhaltet den Namen des Service's, was in diesem Fall unser Minecraft Gameserver ist, also **_minecraft**. Ebenso ist dort der Protokolltyp, in diesem Fall **_tcp** so wie der **Domainname** anzugeben.
Das würde dann wie folgt aussehen: 

![](https://screensaver01.zap-hosting.com/index.php/s/MPtWqE3WHkYBKGr/preview)

Das Feld **Typ** gibt an um welche Art von Eintrag es sich handelt, in diesem Fall ist es ein **SRV** Eintrag.

Das Feld **Wert** enthält den Port vom Server sowie die Subdomain welche du anfangs erstellt hast und welche auf die IP vom Server verweist. Also in diesem Fall **0 2132 srv.minecraft-server.de**, wobei **2132** der **Port des Spiels** ist und **srv.minecraft-server.de** die Domain zu welcher die Weiterleitung erfolgt.
In unserem Beispiel würde das so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/TjAcNMW4jRMFema/preview)
 
Der Wert **0** ist nicht weiter relevant und bleibt immer gleich. Das Feld **TTL** sowie **Prio** lässt du ebenfalls unberührt.

Der fertige komplette SRV Eintrag sieht wie folgt aus:

![](https://screensaver01.zap-hosting.com/index.php/s/34ByFQMrs3YKkzT/preview)

Danach kannst du auf **Speichern** klicken.

> Wichtig ist, dass im Feld **Wert** am Ende der Domain ein **Punkt** gesetzt wird!

### Fivem
Bei Fivem ist das nahezu identisch wie auch bei Minecraft.
Auch hier erstellen wir einen neuen Eintrag, indem wir auf **Neuer Eintrag** klicken.
Hier arbeiten wir uns nun auch Zeile für Zeile durch, um die Verknüpfung abzuschließen.

Das Feld **Name** beinhaltet den Namen des Service's, was in diesem Fall unser Fivem Gameserver ist, also **_cfx**. Ebenso ist dort der Protokolltyp, in diesem Fall **_udp** so wie der **Domainname** anzugeben.
Das würde dann wie folgt aussehen: 

![](https://screensaver01.zap-hosting.com/index.php/s/jj5epyCGe5pDLsz/preview)

Das Feld **Typ** gibt an um welche Art von Eintrag es sich handelt, in diesem Fall ist es ein **SRV** Eintrag.

Das Feld **Wert** enthält den Port vom Server sowie die Subdomain welche du anfangs erstellt hast und welche auf die IP vom Server verweist. Also in diesem Fall **0 33121 srv.fivem-server.de**, wobei **33121** der **Port vom Fivem Server** ist und **srv.fivem-server.de** die Domain zu welcher die Weiterleitung erfolgt.
In unserem Beispiel würde das so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/nHoMS5FkXmCWYGQ/preview)
 
Der Wert **0** ist nicht weiter relevant und bleibt immer gleich. Das Feld **TTL** sowie **Prio** lässt du ebenfalls unberührt.

Der fertige komplette SRV Eintrag sieht wie folgt aus:

![](https://screensaver01.zap-hosting.com/index.php/s/GaJ4H3afityAked/preview)

Danach kannst du auf **Speichern** klicken.

> Wichtig ist, dass im Feld **Wert** am Ende der Domain ein **Punkt** gesetzt wird!

## Weiterleitung der Domain ohne Standardport und mit Subdomain

Mit einer Subdomain verhält es sich fast genau so. Du erstellst zuerst wie oben beschrieben eine Subdomain und leitest diese auf die IP Adresse deines Gameservers weiter. 
Beispielsweise "docs.fivem-server.de" bzw "docs.minecraft-server.de".
Das würde dann so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/dKpXBQgQG7frCfR/preview)

Nun differenzieren wir erneut zwischen FiveM und zwischen Minecraft. Allerdings ist die Prozedur bei beiden 1:1 identisch.

### Minecraft

Du erstellst einen neuen Eintrag indem du auf **Neuer Eintrag** klickst.
Hier gehen wir nun nach und nach die möglichen Felder durch.

Das Feld **Name** beinhaltet den Namen des Service's, was in diesem Fall unser Minecraft Gameserver ist, also **_minecraft**. Ebenso ist dort der Protokolltyp, in diesem Fall **_tcp** so wie der **Domainname MIT der anfangs erstellten Subdomain** anzugeben.
Das würde dann wie folgt aussehen: 

![](https://screensaver01.zap-hosting.com/index.php/s/nLMqFxsAAabd8wT/preview)

Das Feld **Typ** gibt an um welche Art von Eintrag es sich handelt, in diesem Fall ist es ein **SRV** Eintrag.

Das Feld **Wert** enthält den Port vom Server sowie die Subdomain welche du anfangs erstellt hast und welche auf die IP vom Server verweist. Also in diesem Fall **0 2132 docs.minecraft-server.de**, wobei **2132** der **Port des Spiels** ist und **docs.minecraft-server.de** die Domain zu welcher die Weiterleitung erfolgt.
In unserem Beispiel würde das so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/gm6bKkPGSEX7osx/preview)
 
Der Wert **0** ist nicht weiter relevant und bleibt immer gleich. Das Feld **TTL** sowie **Prio** lässt du ebenfalls unberührt.

Der fertige komplette SRV Eintrag sieht wie folgt aus:

![](https://screensaver01.zap-hosting.com/index.php/s/DFjAbKwLoZCtgpS/preview)

Danach kannst du auf **Speichern** klicken.

> Wichtig ist, dass im Feld **Wert** am Ende der Domain ein **Punkt** gesetzt wird!

### Fivem
Bei Fivem ist das nahezu identisch wie auch bei Minecraft.
Auch hier erstellen wir einen neuen Eintrag, indem wir auf **Neuer Eintrag** klicken.
Hier arbeiten wir uns nun auch Zeile für Zeile durch, um die Verknüpfung abzuschließen.

Das Feld **Name** beinhaltet den Namen des Service's, was in diesem Fall unser Fivem Gameserver ist, also **_cfx**. Ebenso ist dort der Protokolltyp, in diesem Fall **_udp** so wie der **Domainname MIT Subdomain** anzugeben.
Das würde dann wie folgt aussehen: 

![](https://screensaver01.zap-hosting.com/index.php/s/gxkLiFmB9g4HfBL/preview)

Das Feld **Typ** gibt an um welche Art von Eintrag es sich handelt, in diesem Fall ist es ein **SRV** Eintrag.

Das Feld **Wert** enthält den Port vom Server sowie die Subdomain welche du anfangs erstellt hast und welche auf die IP vom Server verweist. Also in diesem Fall **0 33121 docs.fivem-server.de**, wobei **33121** der **Port vom Fivem Server** ist und **docs.fivem-server.de** die Domain zu welcher die Weiterleitung erfolgt.
In unserem Beispiel würde das so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/4mot7XSbMGZw7Pa/preview)
 
Der Wert **0** ist nicht weiter relevant und bleibt immer gleich. Das Feld **TTL** sowie **Prio** lässt du ebenfalls unberührt.

Der fertige komplette SRV Eintrag sieht wie folgt aus:

![](https://screensaver01.zap-hosting.com/index.php/s/s8WskQR22GXAiCH/preview)

Danach kannst du auf **Speichern** klicken.

> Wichtig ist, dass im Feld **Wert** am Ende der Domain ein **Punkt** gesetzt wird!
