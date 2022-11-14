---
id: rust_decay
title: Decay verändern
sidebar_label: Decay
---

Mithilfe eines RCON Tools kannst du auf deinem Server beliebige Befehle ausführen, auch Adminrechte können so vergeben werden.
Zuerst musst du [via RCON verbinden](rust_connectrcon.md).

> Dein Server muss vollständig gestartet sein um via RCON erreichbar zu sein. 

Sobald du verbunden bist, navigiere in das Feld in welchem du Consolenbefehle ausführen kannst. In unserem Beispiel nutzen wir **RustAdmin**.

Du kannst mit der Zahl die Decay-Rate anpassen, zum Beispiel:

`decay.scale 1.0` Unveränderte Decay Rate<br>
`decay.scale 0.5` Decay Rate auf 50% reduziert<br>
`decay.scale 0` Decay ist komplett deaktiviert<br>

Angenommen du möchtest den Decay komplett deaktivieren dann muss der Befehl

```decay.scale 0``` ausgeführt werden. Die Eingabe muss mit Enter bestätigt werden.

Du kannst nun im Consolen-Tab sehen ob der Befehl erfolgreich übermittelt wurde.

![image](https://user-images.githubusercontent.com/26007280/189934246-35f2930a-02d4-4ab3-a203-23ca6345d6ed.png)


Um unsere Änderungen nun zu speichern, muss noch einmalig

```server.writecfg``` eingegeben und ebenfalls mit Enter bestätigt werden.

![image](https://user-images.githubusercontent.com/26007280/189934350-a5b8f858-3e6d-4258-b896-d59e30673884.png)

Sofern nun in deiner Console `Config Saved` steht, wurde die Änderung erfolgreich übernommen.


