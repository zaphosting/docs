---
id: conan_becomeadmin
title: Conan Exiles: Admin auf dem eigenen Server werden
description: Informationen, wie du Admin auf deinem Conan Exiles-Server von ZAP-Hosting wirst - ZAP-Hosting.com Dokumentationen
sidebar_label: Admin werden

---



## Admin werden

Mit Administrator-Rechten kannst du direkt im Spiel Änderungen im Live Zustand an deinem Server vornehmen, ohne diese in der Config vorzunehmen. Damit man sich selbst oder auch anderen Spielern Administrator-Rechte zuweisen kann, muss als erstes ein Serveradmin Passwort definiert werden. Das definieren des Passworts erfolgt über die **ServerSettings.ini** Config, welche du im Interface unter Configs findest. 



![img](https://screensaver01.zap-hosting.com/index.php/s/kAjn5pNziYxZHCY/preview)



In der Config angekommen suchen wir den **AdminPassword=** Befehl und definieren dahinter das Passwort. Das ganze sieht dann folgendermaßen aus:



![img](https://screensaver01.zap-hosting.com/index.php/s/LqLRq86dXwdjziW/preview)



Nach dem Definieren des Passwortes muss die Config gespeichert und der Server gestartet werden. Im Anschluss kannst du dich mit deinem Server verbinden und über die ESC-Taste auf Server-Einstellungen klicken und dort dann das Admin Passwort setzen und dich zum Admin machen.

![img](https://screensaver01.zap-hosting.com/index.php/s/kiPxRLgAx7fNNQb/preview)



Im Anschluss kannst du sämtliche Server-Befehle als Admin ausführen. Im folgenden findest du eine Übersicht von den am häufigsten benutzten Befehle.



## Häufig verwendete Befehle

| Befehl                                                | Beschreibung                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| MakeMeAdmin [AdminPassword]                            | Aktiviert den Admin-Modus                                    |
| MakeMeNormal                                           | Beendet den Admin-Modus                                      |
| LearnEmote [emote]                                     | Gebe in den Chat /emote [emote] ein oder halte R gedrückt, um das Emote-Menü aufzurufen. Admin-Modus erforderlich |
| God                                                    | Aktiviert/Deaktiviert den Gott-Modus                         |
| PlayerCanBuildEverywhere [PlayerName]                  | Ermöglicht den Bau von Gebäuden, bei denen das Gebäude für den angegebenen Spieler deaktiviert ist |
| Teleport                                               | Teleportiere dich an eine Oberfläche oder in die Luft        |
| TeleportPlayer X[float] Y[float] Z[float]              | Teleportiert dich oder einen anderen Spieler zu den angegebenen Koordinaten |
| TeleportToPlayer [PlayerName]                          | Teleportiert dich zu dem angegebenen Spieler                 |
| Fly                                                    | Aktiviert den Flug-Modus                                     |
| Ghost                                                  | Aktiviert den Geist-Modus (Unsichtbar, Noclip)               |
| SetServerSetting serverSetting[FString] Value[FString] | Erlaubt das Ändern der Servereinstellungen aus ServerSettings.ini während des Spiels. |



Weitere Admin-Befehle rund ums Spiel findest du auf der [Gamepedia](https://conanexiles.gamepedia.com/Admin_Panel) von Conan Exiles. 



