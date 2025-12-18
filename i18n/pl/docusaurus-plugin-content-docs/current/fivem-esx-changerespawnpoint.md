---
id: fivem-esx-changerespawnpoint
title: "FiveM: Ustaw punkt respawnu"
description: "Dowiedz się, jak zmienić punkty respawnu ambulansu w ESX, aby spersonalizować rozgrywkę i usprawnić zarządzanie serwerem → Sprawdź teraz"
sidebar_label: Zmień punkt respawnu
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archiwalny poradnik
Ten dokument został zarchiwizowany. Dokumenty są archiwizowane, gdy nie są już aktualne, są niepoprawne lub przestarzałe. Został zarchiwizowany z następujących powodów:

**Powód**: Metoda realizacji dotyczy przestarzałej wersji ESX. To podejście nie działa w obecnej wersji ESX, ponieważ struktura uległa zmianie.
::::



:::info
ESX musi być zainstalowany
:::

<InlineVoucher />

📔 Przygotowania

Aby znaleźć współrzędne, potrzebujemy skryptu Coords, takiego jak ten:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
Zainstaluj go tak: [Instalacja zasobów](fivem-installresources.md)
Po zainstalowaniu skryptu wciśnij w grze */coords*
To pokaże nam współrzędne.

📑 Edycja konfiguracji

Gdy mamy już współrzędne, przechodzimy do zakładki Config

Tam naciskamy **CTRL + F** i szukamy **ambulance**
Otworzy się wtedy ten plik.
Przewijamy w dół, aż znajdziemy **Config_RespawnPoint**.

![](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

Teraz edytujemy te wartości i podmieniamy współrzędne.
Na koniec klikamy Zapisz i gotowe.

![](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
Zmiany zaczną działać po restarcie serwera.
:::

<InlineVoucher />