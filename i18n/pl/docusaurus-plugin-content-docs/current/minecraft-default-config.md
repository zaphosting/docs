---
id: minecraft-default-config
title: "Minecraft: Ustawienia konfiguracji serwera"
description: "Dowiedz się, jak zoptymalizować ustawienia serwera Minecraft pod kątem wydajności i stabilności, jednocześnie dostosowując rozgrywkę → Sprawdź teraz"
sidebar_label: Konfiguracja serwera
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Co mogę ustawić w tej konfiguracji?

Minecraft już ma mały plik konfiguracyjny o nazwie *server.properties*.  
To tutaj można fundamentalnie skonfigurować serwer. Opisujemy, co robią poszczególne opcje i na co zwrócić uwagę przy ich zmianie. Niektóre ustawienia należy traktować **ostrożnie**, bo mogą drastycznie wpłynąć na wydajność serwera, co może prowadzić m.in. do jego niestabilności.

<InlineVoucher />

### view-distance

To ustawienie określa *maksymalną widoczność* na serwerze. Niezależnie od tego, jak klient ustawił widoczność, serwer nigdy nie wyśle danych chunków dalej niż tutaj określono. Możesz też obniżyć tę wartość, by chronić wydajność serwera. Doświadczenie z gry nie ucierpi nawet przy wartości 5. Niższe wartości niż 5 nie są zalecane i mogą w rzadkich przypadkach powodować problemy.  
**WAŻNE:** Wartość ta nie powinna być podnoszona ponad zalecaną (chyba że to absolutnie konieczne), bo może to spowodować poważne problemy z wydajnością.

:::info
To ustawienie działa tylko na serwerach Vanilla lub Forge.

Dla Bukkit, Spigot i Paper Spigot wartość ustawia się w ich własnych plikach konfiguracyjnych.
:::

### max-build-height

Określa maksymalną wysokość (współrzędna Y), do której można budować lub niszczyć bloki. Wartości powyżej 256 są **niedozwolone** i ignorowane przez serwer. To ustawienie jest przydatne, jeśli chcesz ograniczyć maksymalną wysokość budowy.

### server-ip

Jeśli masz wykupione kilka adresów IP dla swojego serwera dedykowanego lub VPS, możesz tu wskazać, który adres IP ma być używany. Jeśli masz tylko jeden adres IP, pole to możesz zostawić puste – tak samo dotyczy to serwera gier.

### level-seed

Domyślnie generator świata tworzy losowy [seed](https://minecraft.fandom.com/wiki/Seed_(level_generation)) i tym samym zupełnie losowy świat.  
Możesz jednak zdefiniować własny seed złożony z **liter lub cyfr**, a serwer wygeneruje wtedy odpowiedni świat. Maksymalna długość to **32 znaki**.

:::info
Istnieją generatory seedów, które pozwalają skonfigurować świat według własnych pomysłów.

[Ten](https://minecraft.tools/en/custom.php) generator jest jednym z najlepszych i potrafi praktycznie wszystko.
:::

### gamemode

Ta opcja pozwala ustawić domyślny tryb gry na serwerze. Tryb gry jest nadawany każdemu graczowi przy pierwszej wizycie na serwerze i można go potem zmieniać komendą [/gamemode](https://minecraft.fandom.com/wiki/Gameplay).

Jeśli nie znasz ID poszczególnych trybów, oto lista:

| wartość | Tryb gry |
|--|--|
| 0 | Survival |
| 1 | Creative |
| 2 | Adventure |
| 3 | Spectator |

### server-port

Możesz przypisać stały port do serwera, przez który będzie dostępny wraz z adresem IP. Jeśli chcesz uruchomić kilka serwerów na jednym serwerze dedykowanym lub VPS, każdy musi mieć inny port. Zazwyczaj tę opcję można zostawić bez zmian, jest potrzebna głównie przy sieciach BungeeCord.

### enable-command-block

Pozwala włączyć [command blocki](https://minecraft.fandom.com/wiki/Command_Block) na serwerze. Jeśli ich nie potrzebujesz, ustaw wartość na *false*, bo istnieją metody, dzięki którym command blocki mogą uszkodzić lub zniszczyć serwer.

### allow-nether

Ta opcja włącza lub wyłącza Nether. Jeśli jest wyłączona, nie da się już wejść do Netheru przez portal. Dostęp jest jednak nadal możliwy przez pluginy, np. [Multiverse Core](https://www.spigotmc.org/resources/multiverse-core.390/).

### enable-rcon

Dzięki RCON można wykonywać komendy z konsoli z dowolnego miejsca. Wymagane jest hasło i osobny port. Ustawienia te definiuje się również w tym pliku konfiguracyjnym. Zalecamy wyłączenie RCON, by zapobiec nieautoryzowanym włamaniom.

### op-permission-level

Tutaj ustawiasz domyślny poziom uprawnień OP, który dostaje nowy operator. Szczegóły dotyczące poziomów i przypisywania znajdziesz [tutaj](minecraft-addop.md).

### enable-query

Query udostępnia zewnętrznym usługom, np. stronie www, dane takie jak aktualna liczba graczy czy dokładna lista graczy na serwerze. Możesz dzięki temu wyświetlać dane na stronie przez PHP. Niektóre listy serwerów korzystają z tej funkcji, by poprawnie wyświetlać serwer w rankingu.

### prevent-proxy-connections

To ustawienie decyduje, czy gracze mogą łączyć się przez VPN/proxy. VPN często służy do obejścia bana na adres IP, więc ta opcja może być bardzo przydatna. Czasem jednak może blokować też normalne połączenia przez błędną klasyfikację.

:::info
Aby mieć pełną kontrolę nad połączeniami VPN/proxy, warto zainstalować odpowiedni plugin.

Wiele darmowych pluginów znajdziesz szybko, ale ten (płatny) [plugin](https://www.spigotmc.org/resources/antibotdeluxe-%E2%80%BA-the-most-advanced-antibot-spigot-bungee-1500-purchases-1-7-1-15.31700/updates) przekonał nas najbardziej i chroni serwer przed atakami botów.
:::

### generator-settings

Podobnie jak w trybie singleplayer, serwer może wygenerować świat według określonych parametrów. Podobnie jak seed, świat można skonfigurować wcześniej, a serwer wygeneruje go na tej podstawie. Różnica jest taka, że to nadal losowy świat, więc nie jest identyczny jak inny.

Przykładowy kod generacji dla płaskiego świata wygląda tak:

`{"biome":"minecraft:plains","layers":[{"block":"minecraft:bedrock","height":1},{"block":"minecraft:dirt","height":2},{"block":"minecraft:grass_block","height":1}],structures:{"village":{}}}`

### resource-pack

Jeśli chcesz użyć na serwerze specjalnego pakietu tekstur, możesz podać **bezpośredni link do pobrania**.  
Pakiet zostanie wtedy automatycznie pobrany i aktywowany po potwierdzeniu przez gracza.

### player-idle-timeout

Gracze nieaktywni mogą być automatycznie wyrzucani po określonej liczbie sekund. To bardzo przydatne, gdy serwer jest pełny i chcesz zrobić miejsce dla aktywnych graczy.

### level-name

Domyślnie świat nazywa się "world". Możesz tu ustawić inną nazwę, która będzie nazwą świata. Jeśli świat o tej nazwie już istnieje, zostanie utworzony nowy świat o tej nazwie, a stary pozostanie w poprzednim folderze.

### motd

Możesz tu ustawić wiadomość wyświetlaną na liście serwerów, jeśli ją dodasz. Wiadomość nie pojawia się przy bezpośrednim połączeniu, chyba że klient ma specjalne mody. Możesz używać wszystkich kolorów i formatowania dostępnych w Minecraft.

:::info
MOTD możesz szybko i łatwo stworzyć za pomocą tego [narzędzia](https://minecraft.tools/en/motd.php).
:::

### force-gamemode

Określa, czy gracz zawsze ma być ustawiany na domyślny tryb gry przy wejściu na serwer. Niezależnie od tego, w jakim trybie był wcześniej, zawsze zostanie ustawiony domyślny.

### hardcore

Tryb hardcore sprawia, że gracze po śmierci są wyrzucani lub trafiają do trybu widza. Jeśli chcesz go włączyć, **musisz** stworzyć nowy świat, bo tryb hardcore wpływa na generację świata.

### white-list

Aktywuje [Whitelistę](https://minecraft.fandom.com/wiki/Commands/whitelist), dzięki której dostęp mają tylko gracze z listy. Komendy do dodawania i usuwania graczy z whitelisty znajdziesz na tej stronie.

### broadcast-console-to-ops

Określa, czy operatorzy mają otrzymywać powiadomienia na czacie, gdy ktoś wykonuje komendy w grze.

### pvp

Włącza lub wyłącza PVP na serwerze. Jeśli PVP jest wyłączone, gracze nie mogą się nawzajem ranić. Ta opcja nie blokuje jednak np. celowego ustawiania lawy – więc ataki pośrednie są nadal możliwe.

### spawn-npcs

W wioskach pojawiają się wieśniacy, jeśli ta opcja jest włączona. Jeśli ustawisz *false*, na całym serwerze nie będzie wieśniaków. To przydatne, jeśli chcesz ograniczyć handel tylko do graczy i wzmocnić ekonomię na serwerze ekonomicznym.

### generate-structures

To ustawienie wpływa na generator świata. Określa, czy mają się generować struktury, np. wioski czy świątynie.

### spawn-animals

Określa, czy na serwerze mają się pojawiać zwierzęta. Listę wszystkich zwierząt znajdziesz  
[tu](https://minecraft.fandom.com/wiki/Animal).

### snooper-enabled

Jeśli włączone, serwer wysyła anonimowe dane do Mojang w celu dalszego rozwoju i optymalizacji. Nie wpływa to na wydajność serwera.

### difficulty

Pozwala ustawić ogólny poziom trudności na serwerze. W zależności od ustawienia, potwory zadają więcej lub mniej obrażeń. Szczegóły i możliwe opcje znajdziesz [tutaj](https://minecraft.fandom.com/wiki/Difficulty).

### network-compression-threshold

Wartość określa rozmiar danych, od którego następuje kompresja między klientem a serwerem. Przy małej wartości, np. standardowej 256, dane wymieniane są ok. 20 razy na sekundę. Zalecamy wartość 512, która odciąża serwer i nie ma negatywnego wpływu. Wartość **nigdy nie powinna przekraczać 1024**.

**To ustawienie traktuj ostrożnie, bo złe wartości mogą powodować poważne problemy dla graczy i nieodwracalne uszkodzenia świata.**

### level-type

Określa typ świata, według którego generator tworzy świat. Po zmianie tej opcji powinieneś **utworzyć nowy świat**, bo inaczej pojawią się niechciane przerwy tam, gdzie będą generowane nowe chunk’i.

| Wartość | Znaczenie |
|--|--|
| DEFAULT | Normalny świat z górami, dolinami, wioskami itd. |
| FLAT | Całkowicie płaski świat, gdzie są tylko wioski |
| LARGEBIOMES | Podobny do normalnego świata, ale z większymi biomami |
| AMPLIFIED | Również podobny do normalnego, ale bardzo poszarpany i z dużymi różnicami wysokości |
| BUFFET | Świat typu buffet, gdzie ustawienia definiujesz przez *generator-settings* |

### spawn-monsters

Określa, czy na serwerze mają się pojawiać potwory. Listę wszystkich potworów znajdziesz  
[tu](https://minecraft.fandom.com/wiki/Mob).

### max-tick-time

Reguluje maksymalny czas trwania ticka. Tick to jednostka czasu, w której serwer wykonuje różne zadania. Jeśli tick trwa dłużej niż domyślnie 60 sekund, serwer jest automatycznie zatrzymywany.

Na serwerach Forge bywa to uciążliwe, bo mody często wymagają więcej czasu. W takim wypadku warto ustawić *-1*, co wyłącza automatyczne zatrzymanie.

### max-players

Ustawia liczbę slotów, czyli maksymalną liczbę graczy, którzy mogą być na serwerze.

### enforce-whitelist

Ta opcja powoduje, że whitelistę zmiany są akceptowane od razu. Normalnie whitelistę trzeba przeładować, by zmiany zaczęły działać.

### online-mode

Określa, czy gracze mogą łączyć się bez konta premium. Jeśli serwer jest publiczny, gracze mogą zdobyć uprawnienia, bo mogą wybrać nazwę operatora, a serwer **tylko** sprawdza nazwę.

Wtedy gracz może mieć nieautoryzowane uprawnienia. Żeby temu zapobiec, na serwerze z pluginami (np. Spigot) warto koniecznie zainstalować plugin z hasłem.

### allow-flight

Włącza lub wyłącza wbudowany w Minecraft anty-cheat dotyczący latania. Przez hacki gracze mogą latać bez pozwolenia.

:::info
Zawsze jednak polecamy zainstalować anty-cheat w formie pluginu!
:::

### function-permission-level

Określa poziom OP, z którym można wykonywać komendy. Na poziomie 4 można np. zatrzymać serwer lub wyrzucać i banować graczy.

<InlineVoucher />