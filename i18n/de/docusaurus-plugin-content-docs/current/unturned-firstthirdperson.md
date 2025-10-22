---
id: unturned-firstthirdperson
title: "Unturned: 1st/3rd Person für deinen Server einstellen"
description: "Entdecke, wie du die Spielerperspektive deines Unturned Servers zwischen First- und Third-Person oder beiden Ansichten anpassen kannst für ein besseres Gameplay → Jetzt mehr erfahren"
sidebar_label: 1st/3rd Person
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 1st / 3rd Person Perspektive

Unturned bietet dir die Möglichkeit, die Perspektive auf deinem Server zu ändern. Du kannst zwischen der First- und Third-Person-Perspektive wählen. Standardmäßig wird das Spiel in der First-Person-Perspektive gespielt. Seit Version 3.9.9.0 kannst du das aber auch ändern. Im Folgenden erklären wir dir, wie du das für deinen Server einstellen kannst.



## Konfiguration

Die Änderung erfolgt in der **Commands.dat** Konfigurationsdatei. Diese findest du im **Webinterface unter Configs**. Je nachdem, wie die Ansicht eingestellt werden soll, muss folgender Befehl in die Config eingetragen werden:

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)



### First-Person-Perspektive (Standard):

Diese Option ist standardmäßig schon aktiv, auch wenn der Befehl noch nicht in der Config steht. Trotzdem kannst du den Befehl zur Vollständigkeit ohne Probleme hinzufügen. Der Befehl für diese Option sieht so aus:

```
perspective first
```



### Third-Person-Perspektive:

Wenn du statt der First-Person die Third-Person-Perspektive nutzen möchtest, kannst du das ebenfalls einstellen. Der Befehl dafür sieht so aus:

```
perspective third
```



### Beide Perspektiven:

Beide Varianten kannst du auch zusammen nutzen. In dem Fall muss nur der Wert im Befehl angepasst werden. Der Befehl für diese Option sieht so aus:

```
perspective both
```



Beim nächsten Start deines Servers ist die gewünschte Option dann aktiv!

<InlineVoucher />