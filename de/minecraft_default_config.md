---
id: minecraft_default_config
title: Server Config 
sidebar_label: Server Config
---

## Was kann ich in dieser Config einstellen?

In der server.properties kann der Server grundlegend konfiguriert werden.
Wir beschreiben hier, was die einzelnen Punkte bewirken und wie man diese ggf. richtig verändert.
Einige Einstellungen sind behutsam anzugehen, da diese teilweise drastischen Einfluss auf die Performance des Servers haben und der Server dadurch instabil werden könnte.

### view-distance=10

Bei dieser Einstellung kannst du die max. Sichtweite auf dem Server festlegen. Unabhängig wie die Sichtweite im Client reguliert wurde, sendet der Server niemans mehr Chunk-Daten an den Client wie hier festgelegt.
Hierbei kann man den Wert auch herrabsetzen um die Performance des Servers etwas zu schonen. Das Spielerlebnis wird auch bei einem Wert von 5 nicht beeinträchtigt.
Dieser Wert sollte unter keinen Umstände (wenn nicht zwingend notwenig) höher gestellt werden und ist daher mit Vorsicht zu behandeln, da es unter anderem zu einem starken Performanceproblem kommen könnte.

> Diese Einstellung wird nur bei einem Vanilla oder Forge Server angewendet.
> Bei Bukkit, Spigot und Paper Spigot muss der Wert in der jeweils eigenen Config festgelegt werden.
