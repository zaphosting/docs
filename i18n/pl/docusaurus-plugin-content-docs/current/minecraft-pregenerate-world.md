---
id: minecraft-pregenerate-world
title: "Minecraft: Wstępne generowanie świata (chunków)"
description: "Dowiedz się, jak efektywnie wstępnie wygenerować światy Minecraft za pomocą pluginów lub modów, aby zapewnić płynniejszą rozgrywkę i zoptymalizowaną wydajność serwera → Sprawdź teraz"
sidebar_label: Wstępne generowanie świata (chunków)
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Chcesz wygenerować swój świat szybko, efektywnie i bezpiecznie z wyprzedzeniem, zamiast podczas gry? Minecraft nie oferuje domyślnie takiej funkcji. Można to jednak zrealizować za pomocą specjalnie zaprojektowanych pluginów lub modów. Jak z nich korzystać i na co zwrócić uwagę, wyjaśniamy poniżej.



## Przygotowanie

Przede wszystkim musisz upewnić się, że Twój serwer jest przystosowany do użycia pluginów lub modów. Do tego wymagane jest korzystanie z jednej z poniższych wersji Minecraft:

- Minecraft: Forge, Minecraft Fabric (mody)
- Minecraft: Spigot, Minecraft Bukkit, Minecraft: Paper Spigot (pluginy)

Jeśli obecnie nie korzystasz z żadnej z tych wersji Minecraft, możesz użyć opcji [zmiany gry (gameserver-gameswitch.md), aby wybrać odpowiednią wersję.


## Instalacja
Najpopularniejszą metodą na wstępne generowanie chunków jest użycie [Chunky](https://github.com/pop4959/Chunky), dostępnego dla wielu implementacji serwerów zarówno jako plugin, jak i mod. W tym przykładzie wyjaśniamy i pokazujemy generowanie chunków za pomocą Chunky.

| Wersja | Pobierz |
| -------- | ------------------------------------------------------------ |
| Mod | [Forge](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge) [Fabric](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator) |
| Plugin | [Spigot/Bukkit](https://www.spigotmc.org/resources/chunky.81534/) |

Pobierz **Chunky** jako plugin lub mod i zainstaluj go na swoim serwerze. Jeśli nie wiesz dokładnie, jak instalować [pluginy](minecraft-pluginuploader.md) lub [mody](minecraft-forge-fabric-add-mods-modpacks), odpowiednie poradniki Ci pomogą.




## Użytkowanie

Gdy **Chunky** zostanie pomyślnie zainstalowany, możesz rozpocząć generowanie chunków. Proces uruchomisz komendą `chunky start`.

Jeśli chcesz tymczasowo przerwać generowanie i kontynuować później, użyj komend `chunky pause` i `chunky continue`. Aby całkowicie zakończyć proces, użyj `chunky cancel`. Komendy możesz wykonywać zarówno przez konsolę live, jak i jako operator bezpośrednio w grze na swoim serwerze.

:::warning Nadmierne obciążenie
Stałe przekraczanie limitów zasobów przez dłuższy czas może prowadzić do tymczasowego zawieszenia. Aby tego uniknąć, generowanie chunków powinno odbywać się w zrównoważonym tempie i zakresie, tak aby obciążenie systemu pozostawało w akceptowalnych granicach.

Więcej informacji o limitach zasobów i możliwych działaniach znajdziesz w naszym [poradniku o limitach zasobów](gameserver-resourcelimit.md). 
:::



## Komendy

Poniżej znajdziesz wszystkie komendy, które Chunky wykorzystuje do generowania i zarządzania chunkami.

#### Zarządzanie zadaniami

| Komenda         | Opis                                                  |
| --------------- | ----------------------------------------------------- |
| chunky start    | Rozpoczyna nowe zadanie generowania chunków od aktualnego wyboru |
| chunky pause    | Wstrzymuje aktualne zadania generowania chunków i zapisuje postęp |
| chunky continue | Wznawia aktualne lub zapisane zadania generowania chunków |
| chunky cancel   | Zatrzymuje aktualne zadania generowania chunków i anuluje postęp |



#### Wybór

| Komenda                                    | Opis                                                  |
| ------------------------------------------ | ----------------------------------------------------- |
| chunky world [world]                       | Ustawia aktualnie wybrany świat                        |
| chunky shape `<shape>`                     | Ustawia kształt generowania                            |
| chunky center [`<x>` `<z>`]                | Ustawia aktualny środek (blok centralny)              |
| chunky radius `<radius>`                   | Ustawia aktualny promień                               |
| chunky worldborder                         | Ustawia środek i promień tak, aby odpowiadały granicy świata w wybranym świecie |
| chunky spawn                               | Ustawia środek na punkt startowy (spawn)              |
| chunky corners `<x1>` `<z1>` `<x2>` `<z2>` | Ustawia wybór za pomocą współrzędnych narożników      |
| chunky pattern `<pattern>`                 | Ustawia preferowany wzór generowania                   |
| chunky slection                            | Wyświetla aktualny wybór                               |





#### Różne

| Komenda                   | Opis                                                  |
| ------------------------- | ----------------------------------------------------- |
| chunky silent             | Przełącza wyświetlanie komunikatów aktualizacji       |
| chunky quiet `<interval>` | Ustawia interwał ciszy w sekundach dla komunikatów aktualizacji |
| chunky progress           | Wyświetla postęp wstępnego generowania w grze dla wszystkich zadań |
| chunky reload             | Przeładowuje konfigurację                             |
| chunky trim               | Usuwa chunki poza wybranym obszarem                   |



## Podsumowanie

Wykonując powyższe kroki, pomyślnie zainstalowałeś Chunky i możesz teraz wstępnie generować swój świat (chunki). Gratulacje! Jeśli wszystko poszło zgodnie z planem, powinieneś mieć nawiązane połączenie z serwerem. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />