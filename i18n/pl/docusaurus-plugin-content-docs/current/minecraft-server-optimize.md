---
id: minecraft-server-optimize
title: "Minecraft: optymalizacja wydajności serwera"
description: "Dowiedz się, jak zoptymalizować serwery Minecraft, aby działały płynniej i zapewniały lepszą rozgrywkę dzięki skutecznym zmianom ustawień → Sprawdź teraz"
sidebar_label: Optymalizacja serwera Minecraft
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Co dokładnie dzieje się podczas optymalizacji?

Optymalizacja to ważny punkt dla serwerów Minecraft, aby mogły działać płynnie i zdecydowanie warto poświęcić na to odpowiednio dużo czasu na serwerze publicznym. Tylko dzięki wielu testom i cierpliwości można osiągnąć najlepszy efekt. Ta dokumentacja nie musi być więc traktowana jako sztywna instrukcja, a raczej jako pomoc w obraniu właściwego kierunku.

W większości przypadków optymalizacja zmienia wiele ustawień na serwerach, co czasem znacząco wpływa na zachowanie samego serwera. Między innymi niektóre ustawienia są ograniczane, co odciąża serwer i może zapewnić więcej wydajności. Jednak, aby ogólne doświadczenie z gry nie ucierpiało, zawsze warto znaleźć złoty środek.

## Vanilla

Opcje optymalizacji vanilla serwera są niestety bardzo ograniczone, ponieważ dostępnych jest tylko kilka ustawień. Staramy się dać vanilla serwerowi trochę więcej mocy, stosując następujące działania:

### Widoczność

Często stosowanym rozwiązaniem jest zmniejszenie zasięgu widzenia. Standardowy zasięg widzenia to 10 chunków, ale wielu graczy gra z dużo mniejszym, np. 6-8. Niektórzy przesadzają z ilością chunków i czasem ustawiają to na 32, co oznacza, że serwer musi ładować i przetwarzać wszystkie te chunki, co kosztuje dużo wydajności.

W vanilla serwerze zasięg widzenia można zmienić w pliku konfiguracyjnym "server.properties", modyfikując wartość "view-distance". Aby nie ograniczać zbytnio rozgrywki, zaleca się ustawienie wartości na 5-6, co odciąża serwer nawet o 50%. Mamy już wpis w naszej dokumentacji na ten temat, który znajdziesz [tutaj](minecraft-default-config.md).

### Kompresja danych

Na serwerze odbywa się stała wymiana danych między serwerem a podłączonymi graczami. Ruchy graczy są przesyłane do serwera, który następnie rozsyła je do pozostałych graczy. Również akcje graczy czy zdarzenia w świecie, np. eksplozje, są częścią danych przesyłanych wielokrotnie.

Aby usprawnić tę wymianę, można podwoić rozmiar pakowanych danych, co oznacza, że serwer musi wykonać tylko 50% wysiłku, aby wymienić te same dane z graczami w porównaniu do stanu poprzedniego. W tym celu należy zmienić wartość "network-compression-threshold" w pliku "server.properties" na 512. Mamy też wpis w dokumentacji, który znajdziesz [tutaj](minecraft-default-config.md).

## Forge

Podobnie jak w Vanilla, opcje dostępne bezpośrednio na serwerze są ograniczone, ponieważ dostępne są tylko małe pliki konfiguracyjne. Możliwe jest jednak instalowanie dodatkowych modów, co pozwala na dalsze odciążenie serwera.

### Wstępne ładowanie chunków

Jednym ze sposobów na odciążenie serwera jest wstępne ładowanie chunków. Serwer podczas późniejszej pracy z graczami musi wtedy tylko załadować zapisane dane chunków, a nie tworzyć i generować ich od nowa. Najlepiej przeprowadzić ten proces nocą, uruchamiając go wieczorem.

Do tego potrzebny jest dodatkowy mod. Bardzo dobry mod można pobrać [tutaj](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator). Mod instaluje się normalnie na serwerze zgodnie z naszymi instrukcjami.

Przed restartem serwera upewnij się, że w "server.properties" wartość "max-tick-time" jest ustawiona na "-1", inaczej serwer może się zrestartować. Zalecane jest też, aby serwer miał co najmniej 8-10 GB pamięci RAM, ponieważ proces ten wymaga dużo RAM. Możesz tymczasowo zwiększyć pamięć RAM na noc, a potem ją zmniejszyć po zakończeniu procesu.

:::info
Pamiętaj, że wspomniany mod może nie być kompatybilny z Twoją wersją Forge i proces może się różnić, jeśli używasz innego moda.
:::

Po uruchomieniu serwera z modem, otwórz konsolę. Zalecamy utworzenie granicy świata o promieniu 16 000 bloków. Wykonaj kolejno następujące komendy:

- worldborder center 0 0
- worldborder set 16000

:::info
W razie potrzeby zmień współrzędne na własne centrum świata, aby nie "uciąć" już zbudowanego świata.
:::

Po ustawieniu granicy można rozpocząć faktyczne wstępne ładowanie:

- pregen gen startWorldBorder

Teraz wszystkie chunki w obrębie granicy są ładowane kolejno. Proces może trwać do 8 godzin, w zależności od liczby zainstalowanych modów. Postęp jest regularnie wyświetlany w konsoli. Po zakończeniu procesu pojawi się odpowiednia informacja!

:::info
Mod można zostawić na serwerze po zakończeniu procesu. Będzie dalej optymalizował chunki podczas działania, nawet gdy nie ma graczy na serwerze.
:::

### Widoczność

Często stosowaną metodą jest zmniejszenie zasięgu widzenia. Standardowy zasięg to 10 chunków, ale wielu graczy gra z mniejszym, np. 6-8. Niektórzy przesadzają i ustawiają nawet 32 chunki, co mocno obciąża serwer.

Widoczność na serwerze Forge można zmienić w pliku "server.properties", modyfikując wartość "view-distance". Zalecamy ustawienie na 5-6, co odciąża serwer nawet o 50%. Mamy wpis w dokumentacji [tutaj](minecraft-default-config.md).

### Kompresja danych

Na serwerze odbywa się ciągła wymiana danych między serwerem a graczami. Ruchy graczy i zdarzenia w świecie są przesyłane wielokrotnie.

Aby usprawnić wymianę, można podwoić rozmiar pakowanych danych, zmieniając "network-compression-threshold" w "server.properties" na 512. Mamy wpis w dokumentacji [tutaj](minecraft-default-config.md).

## Bukkit

### Widoczność

Często zmniejsza się zasięg widzenia z domyślnych 10 chunków do 6-8, aby odciążyć serwer. Niektórzy przesadzają i ustawiają nawet 32 chunki, co mocno obciąża serwer.

Widoczność na serwerze Bukkit zmienia się w "server.properties", modyfikując "view-distance". Zalecamy 5-6 dla odciążenia serwera do 50%. Mamy wpis w dokumentacji [tutaj](minecraft-default-config.md).

### Kompresja danych

Stała wymiana danych między serwerem a graczami, ruchy i zdarzenia są przesyłane wielokrotnie.

Podwajając rozmiar pakowanych danych (ustawiając "network-compression-threshold" na 512 w "server.properties") zmniejszamy obciążenie serwera o połowę. Mamy wpis w dokumentacji [tutaj](minecraft-default-config.md).

### Limity spawnów

Zmniejszamy ogólne tempo pojawiania się mobów na serwerze, co zwykle nie jest zauważalne, ale może wpłynąć na działanie farm mobów.

W pliku "bukkit.yml" zmień wartości w "spawn-limits":
- monsters: 50 #Domyślnie: 70
- animals: 10 #Domyślnie: 15
- water-animals: 3 #Domyślnie: 5
- ambient: 4 #Domyślnie: 15

:::info
Możesz oczywiście dostosować wartości według własnych potrzeb, powyższe to dobry średni poziom.
:::

Dla lepszego spawnów zmień też "monster-spawns" w "ticks-per" w "bukkit.yml":
- monster-spawns: 2 #Domyślnie: 1

Jeśli masz problemy z mobami (np. według raportu timing), możesz ustawić do 5 i obserwować zachowanie serwera.

### Przetwarzanie chunków

Minecraft działa na chunkach (16x16 bloków). Serwer ładuje chunki do RAM i przetwarza je. Im więcej chunków jest załadowanych, tym większe obciążenie serwera.

Standardowo serwery nie usuwają załadowanych chunków, co mocno obciąża RAM i spowalnia serwer.

W "bukkit.yml" pod "chunk-gc" zmień:
- period-in-ticks: 300 #Domyślnie: 600
- load-threshold: 300 #Domyślnie: 0

"period-in-ticks" to interwał w sekundach, co ile chunki mają być usuwane. Możesz zmniejszyć, ale uważaj na efekt pętli, gdzie chunk jest ładowany i usuwany na zmianę, co obciąża serwer bardziej niż dłuższe trzymanie chunków.

## Spigot

### Widoczność

Zmniejsz zasięg widzenia z 10 do 5-6 chunków w "spigot.yml" (wartość "view-distance"), co odciąża serwer nawet o 50%.

:::info
Możesz też ustawić 4, co pomaga na serwerach farm na wersji 1.13+.
:::

### Kompresja danych

Podwój rozmiar pakowanych danych w "server.properties" ("network-compression-threshold" na 512), co zmniejsza obciążenie serwera o połowę. Mamy wpis w dokumentacji [tutaj](minecraft-default-config.md).

### Limity spawnów

W "bukkit.yml" zmień "spawn-limits":
- monsters: 50 #Domyślnie: 70
- animals: 10 #Domyślnie: 15
- water-animals: 3 #Domyślnie: 5
- ambient: 4 #Domyślnie: 15

Dostosuj według potrzeb.

Zmień też "monster-spawns" w "ticks-per":
- monster-spawns: 2 #Domyślnie: 1

### Przetwarzanie chunków

W "bukkit.yml" pod "chunk-gc":
- period-in-ticks: 300 #Domyślnie: 600
- load-threshold: 300 #Domyślnie: 0

Uważaj na efekt pętli.

### Zasięg spawnów

W "spigot.yml" w "world-settings":
- mob-spawn-range: 3 #Domyślnie: 4

### Zasięgi aktywacji encji

W "spigot.yml" pod "entity-activation-range":
- animals: 6 #Domyślnie: 32
- monsters: 16 #Domyślnie: 32
- misc: 2 #Domyślnie: 16
- water: 6 #Domyślnie: 6
- tick-inactive-villagers: true #Domyślnie: true

### Optymalizacje hopperów

W "spigot.yml":
- hopper-transfer: 24 #Domyślnie: 8
- hopper-check: 24 #Domyślnie: 8
- hopper-amount: 3 #Domyślnie: 1

### Kolizje

W "spigot.yml":
- max-entity-collisions: 1 #Domyślnie: 8

Dotyczy tylko mobów, nie graczy.

### Promień łączenia

W "spigot.yml" pod "merge-radius":
- item: 4.0 #Domyślnie: 2.5
- exp: 6.0 #Domyślnie: 3.0

:::info
Nie ustawiaj wyżej niż 8, bo może powodować lagi.
:::

## Paper Spigot

### Widoczność

Zmniejsz zasięg widzenia w "spigot.yml" ("view-distance") do 5-6, co odciąża serwer do 50%.

:::info
Możesz też ustawić 4, co pomaga na serwerach farm na wersji 1.13+.
:::

### Kompresja danych

W "server.properties" ustaw "network-compression-threshold" na 512. Mamy wpis w dokumentacji [tutaj](minecraft-default-config.md).

### Limity spawnów

W "bukkit.yml" zmień "spawn-limits":
- monsters: 50 #Domyślnie: 70
- animals: 10 #Domyślnie: 15
- water-animals: 3 #Domyślnie: 5
- ambient: 4 #Domyślnie: 15

Zmień też "monster-spawns" w "ticks-per":
- monster-spawns: 2 #Domyślnie: 1

### Przetwarzanie chunków

W "bukkit.yml" pod "chunk-gc":
- period-in-ticks: 300 #Domyślnie: 600
- load-threshold: 300 #Domyślnie: 0

### Zasięg spawnów

W "spigot.yml" w "world-settings":
- mob-spawn-range: 3 #Domyślnie: 4

### Mob-Spawner

W "paper.yml":
- mob-spawner-tick-rate: 3 #Domyślnie: 1

:::info
Ta zmiana nie wpływa znacząco na rozgrywkę.
:::

### Zasięgi aktywacji encji

W "spigot.yml" pod "entity-activation-range":
- animals: 6 #Domyślnie: 32
- monsters: 16 #Domyślnie: 32
- misc: 2 #Domyślnie: 16
- water: 6 #Domyślnie: 6
- tick-inactive-villagers: true #Domyślnie: true

### Optymalizacja hopperów

W "spigot.yml":
- hopper-transfer: 24 #Domyślnie: 8
- hopper-check: 24 #Domyślnie: 8
- hopper-amount: 3 #Domyślnie: 1

:::info
Upewnij się, że "use-hopper-check" jest ustawione na "true" w "paper.yml"!
:::

### Kolizje

W "spigot.yml":
- max-entity-collisions: 1 #Domyślnie: 8

Dotyczy tylko mobów.

### Promień łączenia

W "spigot.yml" pod "merge-radius":
- item: 4.0 #Domyślnie: 2.5
- exp: 6.0 #Domyślnie: 3.0

:::info
Nie ustawiaj wyżej niż 8, bo może powodować lagi.
:::

### Eksplozje

W "paper.yml":
- optimize-explosions: true #Domyślnie: false

### Skrzynie

W "paper.yml":
- disable-chest-cat-detection: true #Domyślnie: false

### Inwentarze

W "paper.yml":
- container-update-tick-rate: 3 #Domyślnie: 1

:::info
Nie ustawiaj wyżej niż 5, bo mogą być błędy. W trybach jak SurvivalGames zostaw na 1.
:::

### Aktualizacje światła

W "paper.yml":
- queue-light-updates: true #Domyślnie: false

### Zapisywanie danych chunków

W "paper.yml":
- max-auto-save-chunks-per-tick: 10 #Domyślnie: 24

### Redstone

W "paper.yml":
- use-faster-eigencraft-redstone: true #Domyślnie: false

:::info
**Uwaga! W niektórych sytuacjach może to mocno zmienić działanie Redstone!**
:::

<InlineVoucher />