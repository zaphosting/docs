---
id: unturned_firstthirdperson
title: Unturned: 1st/3rd Person für Server einstellen
description: Informationen, wie du auf deinem Unturned-Server von ZAP-Hosting die 1st- oder die 3rd-Person-Perspektive einstellst - ZAP-Hosting.com Dokumentationen
sidebar_label: 1st/3rd Person
---



## 1st / 3rd Person-Perspektive

Unturned bietet die Möglichkeit die Sichtweise auf dem Server zu ändern. So kann sowohl die Firstperson (Egoperspektive / Ich-Perspektive) als auch Thirdperson Perspektive aktiviert werden. Standardmäßig findet das Spiel geschehen in der Firstperson Perspektive statt. Seit der 3.9.9.0 Version kann dies allerdings auch umgestellt werden. Im Folgenden erklären wir dir wie du dies bei deinem Server anpassen kannst. 



## Konfiguration

Die Änderung dafür wird in der **Commands.dat** Config vorgenommen. Diese findest du im **Webinterface bei der Verwaltungsoberfläche deines Gameservers unter Configs**. Bei der Config angelangt müssen wir dann je nachdem wie die Ansicht eingestellt werden soll folgenden Befehl hinzufügen:

![img](https://screensaver01.zap-hosting.com/index.php/s/EwNBFTdRJkSJ8Qn/preview)



### 1st-Person-Perspektive (Standard): 

Diese Option ist bereits aktiv, auch wenn der Befehl  noch nicht in der Config eingetragen wurde. Nichtsdestotrotz kannst du diesen Befehl der Vollständigkeit wegen trotzdem problemlos hinzufügen. Der Befehl sieht dann wie folgt aus: 

```
perspective first
```

### 3rd-Person-Perspektive:

Wenn statt der 1st Person die 3rd Person Ansicht genutzt werden, dann kann dies ebenfalls eingestellt werden. Der Befehl sieht dann wie folgt aus:

```
perspective first
```

### Beide Perspektiven:

Natürlich gehen auch beide Varianten zusammen. Hierfür muss dann lediglich der Wert des Befehls angepasst werden. Der Befehl sieht dann wie folgt aus:

```
perspective both
```



Beim nächsten Startvorgang deines Servers sollte die gewünschte Option dann aktiviert sein!
