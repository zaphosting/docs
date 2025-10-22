---
id: minecraft-commands
title: "Minecraft: Ogólne Komendy Serwera"
description: "Dowiedz się, jak używać komend Minecraft, aby ulepszyć rozgrywkę i efektywnie zarządzać funkcjami → Sprawdź teraz"
sidebar_label: Komendy ogólne
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

### Co to są komendy?

Komendy w Minecraft służą do wykonywania dodatkowych lub specjalnych funkcji. Sam Minecraft zawiera już ponad **100 komend** bez żadnych modyfikacji, które można wykorzystać do aktywacji, zarządzania lub wykonywania różnych funkcji.

W tym artykule naszej dokumentacji omówimy najważniejsze komendy, które są często używane i potrzebne.
Jeśli jakaś komenda nie jest tutaj wymieniona, oficjalna [Minecraft-Wiki](https://minecraft-de.gamepedia.com/) jest bardzo pomocna, ponieważ każdy element (w tym wszystkie komendy) jest szczegółowo wyjaśniony.

<InlineVoucher />

### Użycie

Każda komenda zawsze zaczyna się od "/". Jeśli chcesz użyć komendy, musisz otworzyć czat w grze i najpierw wpisać "/", a następnie samą komendę. Po naciśnięciu klawisza TAB wyświetla się podgląd wszystkich dostępnych komend. Dzięki temu komendy można szybko i łatwo uzupełniać automatycznie, podobnie jak w wyszukiwarkach internetowych.

:::info
Jeśli wykonujesz komendy przez konsolę, "/" jest zbędne i trzeba je usunąć!

Ten znak służy tylko do rozróżnienia zwykłej wiadomości na czacie od komendy w grze.
:::

### Uprawnienia / Prawa

Aby móc korzystać z komend, potrzebne są odpowiednie uprawnienia. W Minecraft-Vanilla lub Forge nie ma prawdziwego systemu uprawnień, który mógłby być używany przez pluginy jak w Spigot. Tutaj można używać tylko systemu poziomów OP. Tutorial o systemie uprawnień OP znajdziesz tutaj: [OP Permissions](minecraft-addop.md)

Jeśli zainstalowano system uprawnień i chcesz przypisać prawa do konkretnych komend Minecraft, odpowiednie uprawnienia można przypisać zgodnie z opisem poniżej.

:::info
Składnia uprawnień dla każdej komendy jest zawsze taka sama i można ją odpowiednio dostosować.

Jeśli chcesz przypisać uprawnienia do komendy Locate jako przykład, należy ustawić uprawnienia: ``minecraft.command.locate``
:::



## Komendy

### /tp

Komenda **/tp** pozwala administratorom teleportować się do innych graczy lub teleportować gracza do wybranego celu.
Komenda może też służyć do teleportowania mobów lub teleportowania siebie na podane współrzędne. Szczegóły poniżej.

**Przykłady:**

``/tp PlayerA``

Teleportuje wykonawcę komendy do innego gracza.

``/tp PlayerA PlayerB``

Teleportuje *PlayerA* do *PlayerB*. Niezależnie od tego, kto wykona komendę, wskazani gracze zostaną przeteleportowani.
Jeśli wykonawcą komendy jest *PlayerB*, *PlayerA* zostanie przeteleportowany do niego.

``/tp -100 75 985``

Wykonawca komendy zostaje przeteleportowany na podane współrzędne.
Podając gracza przed współrzędnymi (``/tp PlayerA -100 75 985``), komenda teleportuje wskazanego gracza zamiast siebie.

``/tp @s @e[type=minecraft:cow,distance=..10,limit=1]``

Teleportuje cię do najbliższej *krowy* w promieniu 10 bloków.
``@s`` można też zamienić na gracza, np. *PlayerA*, co teleportuje tego gracza.

### /locate

Komenda **/locate** pozwala znaleźć współrzędne budowli, której szukasz, np. wioski NPC.

**Przykłady:**

``/locate fortress``

Znajduje i wyświetla pozycję najbliższej twierdzy Nether, gdy jesteś w Netherze.

``/locate village``

Znajduje i wyświetla pozycję wioski NPC, podobnie jak dla twierdzy Nether.

### /worldborder

Ta komenda tworzy granicę świata w aktualnym świecie. Zapobiega to dalszemu eksplorowaniu świata poza określonym obszarem.

**Przykłady:**

``/worldborder center 0 0``

Ustawia punkt centralny świata na współrzędne 0;0, od którego liczony jest i ustawiany promień.

``/worldborder set 16000``

Ustawia limit na 16 000x16 000 bloków. Oznacza to promień 8 000 bloków w każdą stronę.

### /effect

Pozwala nadać graczom (lub nawet jednostkom) normalne efekty mikstur.
Niektóre efekty można uzyskać tylko przez komendy, np. efekt szczęścia, który jeszcze nie ma przypisanej funkcji.

:::info
Komenda zmieniała się na przestrzeni wersji i była rozbudowywana oraz modyfikowana.

Przykłady poniżej pochodzą z najnowszej wersji i mogą wyglądać inaczej w starszych wersjach!
:::

**Przykłady:**

``/effect give PlayerA minecraft:speed``

Nadaje graczowi *PlayerA* efekt szybkości **Speed 1**.

### /gamerule

Komenda służy do zmiany specjalnych ustawień świata lub włączania/wyłączania funkcji.
Na przykład, jak w poniższym przykładzie, można włączyć, że gracze zachowują ekwipunek po śmierci.

**Przykłady:**

``/gamerule keepInventory true``

Ustawienie świata, które pozwala graczom zachować ekwipunek (wraz z doświadczeniem) po śmierci.

``/gamerule mobGriefing false``

Definiuje, czy potwory, np. Creeper, mogą niszczyć świat.

### /save-all

Serwer zapisuje świat co 5 minut i zapisuje dane na dysk.
Ta komenda natychmiast zapisuje świat i resetuje odliczanie automatycznego zapisu do 5 minut.

### /tps

Komenda do sprawdzania TPS (ticks per second) na Spigot i Paper Spigot.
TPS informuje o wydajności serwera. Maksymalny i najlepszy TPS to 20.
Pokazuje ostatnie 60 sekund, a kolejne dwie wartości to średnia z 5 i 15 minut.

### /ban

Komenda służy do zbanowania gracza na serwerze, aby nie mógł już wejść na serwer. Konto gracza jest zbanowane na podstawie UUID.

:::info
Na serwerach z wyłączonym trybem online gracze mogą zmieniać nazwy i odzyskać dostęp. W takim przypadku najlepszym rozwiązaniem jest ban IP przez pluginy.
:::

**Przykłady:**

``/ban PlayerA``

Gracz *PlayerA* zostaje zbanowany na serwerze.

``/ban @a``

Ta komenda banuje wszystkich aktualnych graczy na serwerze. Administratorzy z uprawnieniami OP nie są dotknięci i pozostają na serwerze.

### /pardon

Komenda do odbanowania gracza, aby mógł ponownie wejść na serwer.

**Przykłady:**

``/pardon PlayerA``

Gracz *PlayerA* zostaje usunięty z listy banów i może ponownie wejść na serwer.

### /kick

Komenda zamyka połączenie między serwerem a wskazanym graczem. Wymusza opuszczenie serwera, ale gracz może się ponownie połączyć.

**Przykłady:**

``/kick PlayerA``

Wyrzuca gracza *PlayerA* z serwera z komunikatem "Kicked by an operator".

``/kick PlayerA Powód``

Wyrzuca gracza *PlayerA* z serwera z komunikatem "Powód".

<InlineVoucher />