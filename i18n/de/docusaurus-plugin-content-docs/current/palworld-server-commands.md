---
id: palworld-server-commands
title: "Palworld: Palworld Serverbefehle"
description: "Entdecke, wie du Palworld Gameserver effektiv mit integrierten Befehlen für Admin-Kontrolle und Gameplay verwaltest → Jetzt mehr erfahren"
sidebar_label: Serverbefehle
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Palworld Gameserver kommen alle mit einer Reihe nützlicher integrierter Serverbefehle, die sowohl im Spiel als auch über deine Serverkonsole genutzt werden können. In dieser Anleitung schauen wir uns viele dieser Befehle an und liefern dir Beschreibungen sowie Anwendungsbeispiele.

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/85ennn4gSYBPNYo/preview" title="Richte deinen PALWORLD Gameserver in nur einer MINUTE ein!" description="Lernst du besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder einfach am liebsten auf die spannendste Art und Weise Infos aufsaugst!"/>

<InlineVoucher />

## Admin einrichten

Du musst zuerst ein Admin-Passwort für deinen Palworld Gameserver festlegen und dich im Spiel als Admin hinzufügen, bevor du Zugriff auf die Admin-Serverbefehle im nächsten Abschnitt hast.

Das Admin-Passwort kannst du über den **Einstellungen**-Tab im Webinterface deines Servers oder über die **PalWorldSettings.ini** Konfigurationsdatei setzen. Sobald das Passwort gesetzt ist, kannst du den Befehl `/AdminPassword [Passwort]` im Spiel nutzen, um dich als Admin hinzuzufügen.

:::tip
Wir empfehlen dir dringend, einen Blick in unsere [Admin einrichten](palworld-admin.md) Anleitung zu werfen. Diese ist speziell für dieses Thema gemacht und bietet dir tiefere Einblicke zum Setzen des Admin-Passworts und Hinzufügen von Nutzern als Admin.
:::

## Verfügbare Befehle

Die folgende Tabelle zeigt dir eine Auswahl an Serverbefehlen für Palworld, inklusive Anwendungsbeispielen und Beschreibungen, die du im Spiel und über die Serverkonsole nutzen kannst.

Wenn der Parameter `steamid` benötigt wird, kannst du die SteamID eines Spielers ganz einfach kopieren, indem du in der Spieler-Liste zweimal mit der rechten Maustaste klickst.

:::info
Du musst ein Admin-Passwort einrichten und dir mit dem Befehl `/AdminPassword` die Berechtigung geben, bevor du diese Befehle nutzen kannst. Ansonsten bekommst du eine Fehlermeldung wegen fehlender Rechte. Lies den nächsten Abschnitt in dieser Anleitung, um zu erfahren, wie das geht.
:::

| Befehlssyntax                 | Akzeptierte Werte | Beschreibung                                                          | 
| ----------------------------- | ----------------- | -------------------------------------------------------------------- | 
| /Shutdown [Sekunden] [Nachricht] | Integer, String   | Fährt den Server nach der angegebenen Zeit mit der Nachricht herunter | 
| /DoExit                      | -                 | Erzwingt das Stoppen des Servers                                     | 
| /Broadcast                   | String            | Sendet eine Nachricht an alle aktuell auf dem Server verbundenen Spieler | 
| /KickPlayer [steamid]        | String            | Kickt den angegebenen Spieler vom Server                             | 
| /BanPlayer [steamid]         | String            | Bannt den angegebenen Spieler vom Server                             | 
| /TeleportToPlayer [steamid]  | String            | Teleportiert dich zum angegebenen Spieler                            | 
| /TeleportToMe [steamid]      | String            | Teleportiert den angegebenen Spieler zu dir                          | 
| /ShowPlayers                 | -                 | Zeigt Informationen über alle aktuell verbundenen Spieler an        | 
| /Info                        | -                 | Zeigt Serverinformationen an                                         | 
| /Save                        | -                 | Speichert die aktuellen Weltdaten                                   |

:::note
Derzeit kannst du einen Spieler im Spiel nicht entbannen, da kein entsprechender Befehl verfügbar ist. Du müsstest die `banlist.txt` Datei im Serververzeichnis manuell bearbeiten, wenn du einen Spieler entbannen möchtest.
:::

<InlineVoucher />