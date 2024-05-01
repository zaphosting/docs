---
id: redm-licensekey
title: "RedM: Fügen deinen eigenen Lizenzschlüssel (Patreon) zum Server hinzu"
description: Informationen, wie du deinen eigenen Lizenzschlüssel (von Patreon) erstellen und zu deinem FiveM Server von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Eigener Lizenzschlüssel
---

## Warum benötigst du einen eigenen Lizenzschlüssel?

Du benötigst einen eigenen Lizenzschlüssel, vor allem wenn du deine [RedM Patreon](https://www.patreon.com/fivem/posts) Vorteile wie Onesync, farbige Servernamen und mehr nutzen möchtest. Alternativ kannst du auch einen eigenen Lizenzschlüssel benötigen, um den Eigentümer in der Serverliste zu ändern oder wenn du eine Fehlermeldung erhältst, dass der automatisch generierte ZAP-Schlüssel ungültig ist.



## Vorbereitung

Um deinen eigenen Lizenzschlüssel zu erstellen, musst du dich zunächst auf der [Cfx.re Keymaster Webseite](https://keymaster.fivem.net) anmelden. Wenn du kein bestehendes Cfx.re Forum-Konto hast, musst du eines erstellen, um dich anmelden und fortfahren zu können.

![image](https://github.com/zaphosting/docs/assets/42719082/4c5bd4d9-ea1a-49aa-b70c-b5d7f07682c2)

Nachdem du eingeloggt bist, klicke auf den Button **Neuer Server** in der Navigationsleiste links, der dich zur Seite für die Erstellung des Schlüssels führt:

![image](https://github.com/zaphosting/docs/assets/42719082/8562c10c-3453-4fb8-bb1f-ed65219580a9)

## Konfiguration

### Angabe der Daten

Du musst nun die angeforderten Daten wie folgt ausfüllen:

- **Label:** Beschreibung des Labels, z.B. der Name.
- **Server IP Adresse:** Die Server IP, ohne Port
- **Servertyp:** Der Servertyp, in deinem Fall "Server Provider (gemieteter Server)"

### IP-Adresse eingeben

Die IP deines Servers findest du im Webinterface deines Gameservers oder im Bereich **FTP-Browser** des Webinterfaces.

:::note
Du musst die IP **ohne** den Port eingeben.
:::



## Lizenzschlüssel generieren

Sobald du alle notwendigen Informationen eingegeben hast, solltest du in der Lage sein, einen Lizenzschlüssel zu generieren. Deine Seite sollte ungefähr so aussehen wie unten. Klicken nun auf den Button **Generieren** und es wird ein Lizenzschlüssel erstellt.

![image](https://github.com/zaphosting/docs/assets/42719082/5a543db9-e604-451f-9426-52c986fd61d2)

Kehre zur Startseite zurück, und der neu registrierte Lizenzschlüssel wird dir angezeigt.



## Lizenzschlüssel hinzufügen

Abschließend musst du im Webinterface deines Gameservers zum Bereich **Einstellungen** navigieren und dort das Feld **Benutzerdefinierter Lizenzschlüssel** aufrufen. Füge in dieses Feld den generierten Code ein.

![image](https://github.com/zaphosting/docs/assets/42719082/5e2f3fce-0f34-4401-8003-ecdcd1e175ce)

:::info
**Für txAdmin:**
Wenn du die txAdmin-Version des Gameservers verwendest, musst du stattdessen den Schlüssel unter dem Parameter `sv_licensekey` definieren. Du kannst auf deine `server.cfg` Datei entweder über dein txAdmin Interface Panel, den Bereich **Configs** auf dem Webinterface deines Gameservers oder direkt über einen FTP Zugang zugreifen.
:::

Nachdem du deinen individuellen Lizenzschlüssel gesetzt hast, kannst du deinen RedM Server neu starten. Du hast erfolgreich einen individuellen Lizenzschlüssel für deinen RedM Gameserver gesetzt!