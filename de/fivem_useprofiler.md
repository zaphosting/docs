---
id: fivem_useprofiler
title: FiveM: Profiler benutzen und Serverprobleme identifizieren
description: Informationenen, wie du den Profiler für deinen FiveM-Server on ZAP-Hosting zur Problemidentifizierung benutzt und interpretierst - ZAP-Hosting.com Dokumentationen
sidebar_label: Profiler Benutzen
---

## Was ist der Profiler Eigentlich?

Der Profiler ist dafür da die Performance des Servers zu messen, damit können schlechte und langsame resourcen identifiziert und entfernt werden.

Dieser Profiler ist in FiveM integriert und kann bei jedem Server benutzt werden.

## Nutzung


### 🔑 RCon

Zuerst sollte man sich über [Icecon](https://github.com/icedream/icecon/releases) an den Server anmelden, das Passwort dazu kann in den Einstellungen des Servers gefunden werden:

![](https://screensaver01.zap-hosting.com/index.php/s/YkH4JRrCTx8GD6P/preview)

Nachdem wir angemeldet sind, können wir nun den Profiler mit folgendem Command starten:

```
profiler record 25
```

Danach sollten wir für ca 10 Sekunden warten, und überprüfen, ob der Profiler noch läuft:

```
profiler status
```

Wenn dort "Recording: No" steht, dann ist die Aufnahme fertig und wir können uns nun die aufgenommenen Daten anschauen, über dem Command:

```
profiler view
```

![](https://screensaver01.zap-hosting.com/index.php/s/FRgiSsiYeoQ5EER/preview)

Diese URL können wir nun in Chrome oder Firefox öffnen.


### ❓ Probleme Identifizieren

![](https://screensaver01.zap-hosting.com/index.php/s/ksymeAb62DtY4Kg/preview)

Nun sind wir im Profiler und können die Performanceinfos sehen, das sieht am Anfang komplizierter aus, als es ist.

Wir wählen nun einen "Tick" aus, welcher viel Performance verbraucht:

![](https://screensaver01.zap-hosting.com/index.php/s/gPaQ2LwowKtN8W6/preview)

Nun reinscrollen, sodass wir die einzelnen Zeiten sehen:

![](https://screensaver01.zap-hosting.com/index.php/s/7bYbwFkwdKFJRbB/preview)

Nun können wir sehen, welche Resourcen sehr viel zeit verbrauchen.

In unserem fall ist nur "webadmin" etwas langsam, welches aber keine Performanceprobleme verursacht, wenn eine Ressource sehr viel zeit verbraucht sollte diese testweise deaktiviert werden und eine neue Messung angefertigt werden.


> Resourcen welche insgesamt über 6 ms Verbrauchen können Probleme verursachen

