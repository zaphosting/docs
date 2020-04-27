---
id: source_metamod_plugins
title: Plugins
sidebar_label: Plugins
---

## 🔼 Plugin Installation

Im Folgenden wird erklärt wie man Plugins installieren kann. Für das Nutzen von Plugins wird Sourcemod / Metamod vorausgesetzt. Eine Anleitung zur Installation findest du hier: [SM / MM installation](source_metamod_installation.md)



Um Plugins zu installieren, müssen diese dementsprechend per FTP hochgeladen werden. Dabei müssen die Dateien des Plugins in das **Plugins** Verzeichnis unter **../addons/sourcemod/** hochgeladen werden. Je nach Komplexität des Plugins kann es sein, dass bereits Configs und Übersetzungsdateien vorhanden sind. Ist dies der Fall, dann müssen diese in den **configs** und **translations** Ordner hochgeladen werden.



![img](https://screensaver01.zap-hosting.com/index.php/s/WR2fbqTtsTZPARH/preview)



## 🚮 Plugins deaktivieren / deinstallieren

Im **Plugins** Verzeichnis gibt es einen Unterordner mit dem Namen **disabled**. Dort können die Plugins hineingeschoben werden, welche temporär nicht geladen werden sollen. Hierbei ist es ausreichend die entsprechende **.smx** Datei zu verschieben. 



![img](https://screensaver01.zap-hosting.com/index.php/s/ed6NcaQZ5YaBy8j/preview)



Um ein Plugins permanent zu deaktivieren ist es notwendig die entsprechende Plugin Dateien wieder zu löschen. Nach einem Mapwechsel oder Neustart des Servers ist das Plugin dann deaktiviert.



## 🆘 Häufige Probleme



**Wieso lässt sich mein installiertes Plugin nicht starten?**



Lösungsvorschläge:

- Überprüfe ob bei der Plugin Installation alle Voraussetzungen erfüllt wurden. Manche Plugins benötigen eine Zusammenarbeit mit einer Datenbank, damit sie funktional sind. In dem Fall müssen im Configsverzeichnis in der **database.cfg** weitere Einstellungen vorgenommen werden
- Es gibt regelmäßig Änderungen in der Source-Engine. Daher kann es sein, dass ein Plugin, welches bereits vor einer längeren Zeit veröffentlicht, aber nicht gewartet wurde nicht mehr kompatibel ist. In dem Fall gibt es nur noch die Möglichkeit im Alliedmodders Forum eine inoffizielle behobene Version zu finden oder generell ein alternatives Plugin zu benutzen.
- Treffen bei der oben genannten Optionen nicht zu, dann empfiehlt es sich einen Blick in die Live Konsole oder in den Log-Dateien zu schauen. Dort steht in der Regel die Ursache für die Problematik.
