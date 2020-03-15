---
id: fivem_userprofiler
title: Profiler Benutzen
sidebar_label: Profiler Benutzen
---

## Was ist der Profiler Eigentlich?

Der Profiler ist dafür da die Performance des Servers zu messen, damit können schlechte und langsame resourcen identifiziert und entfernt werden.

Dieser Profiler ist in FiveM integriert und kann bei jedem Server benutzt werden.

## Nutzung


### 🔑 RCon

Zuerst sollte man sich über IceCon an den Server anmelden, das Passwort dazu kann in den Einstellungen des Servers gefunden werden:

![](https://screensaver01.zap-hosting.com/index.php/s/Y2pcfPJPYC5fnbJ/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SnNcYqkSgkFFsL8/preview)

Nachdem wir angemeldet sind, können wir nun den Profiler mit folgendem Command starten:

```
profiler record 25
```

![](https://screensaver01.zap-hosting.com/index.php/s/syTtBk7RicHYdBP/preview)

Danach sollten wir für ca 10 Sekunden warten, und überprüfen, ob der Profiler noch läuft:

```
profiler status
```

![](https://screensaver01.zap-hosting.com/index.php/s/zRwfoRfXQJq5mem/preview)

Wenn dort "Recording: No" steht, dann ist die Aufnahme fertig und wir können uns nun die aufgenommenen Daten anschauen, über dem Command:

```
profiler view
```

![](https://screensaver01.zap-hosting.com/index.php/s/jecKZDyboFoGbcA/preview)

Diese URL können wir nun in Chrome oder Firefox öffnen.


### ❓ Probleme Identifizieren

![](https://screensaver01.zap-hosting.com/index.php/s/ZkW36eTKXsmsxRq/preview)

Nun sind wir im Profiler und können die Performanceinfos sehen, das sieht am Anfang komplizierter aus, als es ist.

Wir wählen nun einen "Tick" aus, welcher viel Performance verbraucht:

![](https://screensaver01.zap-hosting.com/index.php/s/R7Z4HwF3y2wAHGj/preview)

Nun reinscrollen, sodass wir die einzelnen Zeiten sehen:

![](https://screensaver01.zap-hosting.com/index.php/s/BFJgqJE6SrBK5Ws/preview)

Nun können wir sehen, welche Resourcen sehr viel zeit verbrauchen.

> Resourcen welche insgesamt über 6 ms Verbrauchen können Probleme verursachen

In unserem fall ist nur "Webadmin" etwas langsam, welches aber keine Performanceprobleme verursacht, wenn eine Ressource sehr viel zeit verbraucht sollte diese testweise deaktiviert werden und eine neue Messung angefertigt werden.

