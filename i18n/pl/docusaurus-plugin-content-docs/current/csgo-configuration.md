---
id: csgo-configuration
title: "CSGO: Konfiguracja serwera"
description: "Sprawdź, jak skonfigurować serwery Counter-Strike dla różnych trybów gry i ustawień, aby zoptymalizować rozgrywkę → Dowiedz się więcej już teraz"
sidebar_label: Konfiguracja Serwera
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archiwalny poradnik
Ten dokument został zarchiwizowany. Dokumenty są archiwizowane, gdy nie są już aktualne, poprawne lub istotne. Zarchiwizowano go z następujących powodów:

Powód: CS:GO nie jest już aktywnie oferowane ani rozwijane. CS2 to następca CS:GO. Zalecamy przejście na CS2.
::::



## Wprowadzenie

Serwery Counter-Strike można szeroko konfigurować. Podstawowe ustawienia można zmieniać za pomocą pliku **Server.cfg** oraz na stronie ustawień w interfejsie webowym. Zaawansowana konfiguracja odbywa się przez pliki konfiguracyjne trybów gry, takie jak gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg, gamemode_demolition.cfg itd.

W ustawieniach możesz wybrać tryb gry, którego chcesz używać. Komendy z tego pliku konfiguracyjnego zostaną wtedy odpowiednio załadowane. Można nimi zarządzać zarówno przez panel administracyjny serwera gier, jak i ręcznie przez FTP w katalogu **gXXXXXX/csgo/csgo/cfg/**. 


<InlineVoucher />

## Konfiguracja


### Konfiguracja przez interfejs (Ustawienia)

Na stronie ustawień możesz dostosować podstawowe opcje takie jak token GSL, typ/tryb gry, grupę map, tickrate i inne.  

![](https://screensaver01.zap-hosting.com/index.php/s/rfHJDH8e4mSQ4Mg/preview)



**Token GSL**

Gameserver Login Tokens (GSLT) to procedura wprowadzona przez Steam jako środek ochronny. Aby uruchomić serwery gier niektórych tytułów Steam (głównie gier Source), konieczne jest wygenerowanie tokenu. Szczegółowe informacje znajdziesz tutaj:

[GSL-Token](source-gsltoken.md)



**Typ gry**

Dostępne są różne tryby gry. Poniżej lista wszystkich opcji:

- Classic Casual
- Classic Competitive
- Arms Race
- Demolition
- Deathmatch
- Wingman



**Grupa map**

Grupy map to zestawy map, które zwykle odpowiadają określonej kategorii. Domyślnie dostępne są grupy **mg_active, mg_armsrace, mg_demolition, mg_allclassic**. Możesz też stworzyć własną grupę. Należy ją dodać do pliku **Gamemodes_server.txt**. Struktura takiej grupy map jest prosta i wygląda tak:

```
{	 	 	 	 
 	"mg_meine_mapgroup"	 	 	 
 	{	 	 	 
 	 	"name"	"mg_meine_mapgroup"	 
 	 	"maps"	 	 
 	 	{	 	 
 	 	 	"de_map1"	""
 	 	 	"de_map2"	""
 	 	 	"de_map3"	""
 	 	 	"de_map4"	""
 	 	}	 	 
 	}	 	 	 
}
```



**Tickrate**

Ustawiony tickrate określa częstotliwość, z jaką serwer wysyła pozycję jednego gracza do pozostałych. Im wyższa wartość, tym lepsze wrażenia z gry. Można ustawić wartości: 33, 64, 100 oraz 128 (najlepsza wartość). 



**Mapa startowa**

Mapa startowa określa, która mapa zostanie załadowana podczas uruchamiania serwera. Ważne, aby nazwa mapy była wpisana w całości i poprawnie. Rozszerzenie pliku nie jest potrzebne. 



**Pingboost**

Pingboost to sposób na poprawę odczucia gry poprzez różne metody, aby osiągnąć jak najniższy ping.



### Konfiguracja przez server.cfg

W pliku **server.cfg** możesz zmienić ustawienia takie jak nazwa serwera, hasło rcon oraz hasło serwera. 

![](https://screensaver01.zap-hosting.com/index.php/s/RRyRgMzwaQPTR8b/preview)



**hostname**

Nazwa hosta definiuje nazwę serwera. Będzie ona wyświetlana na liście serwerów oraz na tablicy wyników.



**rcon_password**

Hasło rcon jest potrzebne do wykonywania komend serwera w grze lub przez narzędzia Rcon, takie jak HLSW. Używa się go tak:

```
rcon_password TwojeHaslo
rcon command // Na przykład: rcon changelevel de_dust2
```



**sv_password**

Jeśli chcesz, aby serwer był prywatny lub dostępny tylko dla wybranych osób, możesz ustawić hasło serwera. Przy łączeniu się z serwerem będzie wymagane podanie tego hasła.



**sv_cheats**

Niektóre komendy są chronione i można ich używać tylko, gdy włączone są cheaty. Komendę tę można włączyć lub wyłączyć wartością 0 (wyłączone) lub 1 (włączone). Chronione komendy to m.in.:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 i kilka innych.



### Konfiguracja specyficzna dla trybu gry

Jak opisano na początku, możesz wybrać tryb gry w interfejsie na stronie ustawień. Następnie dostosuj swoje ustawienia i zmodyfikuj odpowiedni plik konfiguracyjny. W plikach konfiguracyjnych trybów gry możesz wprowadzać szczegółowe zmiany dotyczące rozgrywki, zachowania botów itd.



#### Komendy dla botów



**bot_chatter**
Ta komenda definiuje, co boty mogą mówić w grze. Można ustawić: off, radio, minimal lub normal.



**bot_difficulty**
Ta komenda definiuje poziom trudności botów. Dostępne wartości:  

- 0 - łatwy
- 1 - normalny
- 2 - trudny
- 3 - ekspert



**bot_quota**
Ta komenda określa maksymalną liczbę botów na serwerze. Domyślnie jest to 10.



**bot_quota_mode**
Ta komenda definiuje tryb kontrolujący liczbę botów. Opcje to: normal, fill i match. Normal to standardowe zachowanie. Fill wypełnia serwer botami do wartości "bot_quota". Match uzupełnia sloty graczy. Na przykład, jeśli jest 3 graczy i ustawiono 10 botów, to zostanie użytych tylko 7 botów.




#### Komendy dotyczące pieniędzy

**cash_player_bomb_defused**
Ta komenda określa, ile pieniędzy gracz dostaje za rozbrojenie bomby. Nie można przyznać więcej niż maksymalna kwota dostępna na serwerze.



**cash_player_bomb_planted**
Ta komenda określa, ile pieniędzy gracz otrzymuje za podłożenie bomby.



**cash_player_damage_hostage**
Ta komenda określa, ile pieniędzy jest odejmowane lub dodawane za zranienie zakładnika. Domyślnie gracz traci 30$ za każde zranienie zakładnika.



**cash_player_interact_with_hostage**
Ta komenda określa, ile pieniędzy jest zarabiane lub tracone za interakcję z zakładnikiem.



**cash_player_killed_enemy_default**
Ta komenda określa, ile pieniędzy zarabia lub traci gracz za zabicie przeciwnika bronią podstawową.



**cash_player_killed_enemy_factor**
Ta komenda określa, ile pieniędzy zarabia się za zabicie przeciwnika jedną z głównych broni (standardowe pistolety, karabiny takie jak AK/M4 itd.).



**cash_player_killed_hostage**
Ta komenda określa, ile pieniędzy zarabia lub traci gracz za zabicie zakładnika.



**cash_player_killed_teammate**
Ta komenda określa, ile pieniędzy zarabia lub traci gracz za zabicie członka drużyny.



**cash_player_rescued_hostage**
Ta komenda określa, ile pieniędzy zarabia lub traci gracz za bezpieczne uratowanie zakładnika w trybie Hostage.



**cash_team_elimination_bomb_map**
Ta komenda określa, ile pieniędzy zarabia każdy członek drużyny, jeśli wszyscy 5 przeciwników na mapie z bombą (np. Mirage lub Dust II) zostaną zabici.



**cash_team_elimination_hostage_map_t**
Ta komenda określa, ile pieniędzy zarabia każdy terrorysta za wygraną rundę na mapie z zakładnikami przez eliminację.



**cash_team_elimination_hostage_map_ct**
Ta komenda określa, ile pieniędzy zarabia każdy członek drużyny CT, jeśli wyeliminują wszystkich 5 terrorystów na mapie z zakładnikami.



**cash_team_hostage_alive**
Ta komenda określa, ile pieniędzy zarabia lub traci drużyna, jeśli zakładnik przeżyje rundę. 



**cash_team_hostage_interaction**
Ta komenda określa, ile pieniędzy zarabia lub traci gracz za interakcję z zakładnikiem.



**cash_team_loser_bonus**
Ta komenda określa początkową kwotę pieniędzy, którą drużyna dostaje za przegraną rundę. Kwota ta rośnie w stałych krokach, kontrolowanych przez inną komendę.



**cash_team_loser_bonus_consecutive_rounds**
Ta komenda określa, o ile pieniędzy ma wzrosnąć bonus za kolejne przegrane rundy. Jeśli wartość to 500$ (ustawienie domyślne), oznacza to, że każda kolejna przegrana runda daje drużynie przegrywającej o 500$ więcej niż poprzednia. Dotyczy to maksymalnie 5 kolejnych przegranych rund.



**cash_team_planted_bomb_but_defused**
Ta komenda określa, ile pieniędzy drużyna terrorystów dostaje za podłożenie bomby, która ostatecznie zostaje rozbrojona. Ta kwota **nakłada się na bonus za przegraną rundę**. Domyślnie jest to 800$.



**cash_team_rescued_hostage**
Ta komenda określa, ile pieniędzy **cała drużyna** dostaje, gdy jeden gracz uratuje zakładnika.



**cash_team_terrorist_win_bomb**
Ta komenda określa, ile pieniędzy dostaje każdy gracz drużyny terrorystów, gdy wygrają rundę przez wybuch bomby.



**cash_team_win_by_defusing_bomb**
Ta komenda określa, ile pieniędzy dostaje drużyna CT za wygraną rundę przez rozbrojenie bomby.



**cash_team_win_by_hostage_rescue**
Ta komenda cheat definiuje, ile pieniędzy dostają członkowie drużyny za wygraną rundę przez uratowanie zakładnika.



**cash_team_win_by_time_running_out_hostage**
Ta komenda określa, ile pieniędzy dostaje drużyna broniąca zakładników, jeśli wygra rundę, nie pozwalając na uratowanie zakładników w wyznaczonym czasie.



**cash_team_win_by_time_running_out_bomb**
Ta komenda określa, ile pieniędzy dostają gracze drużyny antyterrorystów za wygraną rundę, gdy czas się skończył. Oznacza to, że terroryści nie podłożyli bomby lub nie wyeliminowali wszystkich antyterrorystów w wymaganym czasie.



#### Komendy rozgrywki



**mp_afterroundmoney**
Ta komenda określa, ile pieniędzy dostaje każdy gracz każdej drużyny po zakończeniu rundy, niezależnie od wyniku. Domyślnie 0 (bonus za wygraną/przegraną ustawia inna komenda).



**mp_buytime**
Ta komenda określa czas (w sekundach), jaki gracze mają na zakup ekwipunku po rozpoczęciu rundy. 



**mp_buy_anywhere**
Ta komenda określa, czy gracze mogą korzystać z menu zakupów poza strefą zakupową. Pamiętaj, że czas na zakupy nadal obowiązuje. 



**mp_death_drop_defuser**
Ta komenda określa, czy zestawy do rozbrajania bomby są zrzucane po śmierci gracza. 



**mp_death_drop_grenade**
Ta komenda określa, którą granatę (jeśli w ogóle) zrzuca gracz po śmierci:

- Wartość: 0 - Nie zrzuca granatów po śmierci
- Wartość: 1 - Zrzuca najlepszą, najcenniejszą granatę po śmierci



**mp_death_drop_gun**
Ta komenda określa, którą broń zrzuca gracz po śmierci. Domyślnie 1 (najlepszą). Wybierz jedną z opcji:

- Wartość: 0 - Nie zrzuca broni po śmierci
- Wartość: 1 - Zrzuca najlepszą broń po śmierci
- Wartość: 2 - Jeśli gracz trzymał broń w ręku w chwili śmierci, zrzuca ją, jeśli nie, zrzuca najcenniejszą broń



**mp_defuser_allocation**
Ta komenda określa, czy gracze dostają zestaw do rozbrajania bomby za darmo na początku rundy i kto go dostaje:

- Wartość: 1 - Brak darmowych zestawów
- Wartość: 2 - Losowi gracze dostają zestaw
- Wartość: 3 - Wszyscy gracze dostają zestaw



**mp_force_pick_time** 

Ta komenda określa czas w sekundach, jaki gracz ma na wybór drużyny. Po tym czasie drużyna jest wybierana automatycznie. Domyślnie 15 sekund.



**mp_forcecamera**

Ta komenda ustawia zakres widoku dla widzów (kogo mogą oglądać po śmierci). Szczegóły zakresów:

- Wartość: 0 - Martwi gracze mogą oglądać każdego gracza
- Wartość: 1 - Martwi gracze mogą oglądać tylko swoich teammate’ów
- Wartość: 2 - Ekran robi się czarny do następnej rundy



**mp_free_armor**

Ta komenda określa, czy gracz dostaje darmową zbroję i hełm na początku rundy:

- Wartość: 0 - Wyłączone
- Wartość: 1 - Włączone



**mp_freezetime**

Ta komenda określa, jak długo gracze są zamrożeni na początku rundy. Ten czas pozwala na zakup sprzętu i omówienie taktyki. Domyślnie 15 sekund.



**mp_friendlyfire**

Ta komenda określa, czy friendly fire jest włączony czy wyłączony. Gdy jest włączony, gracze mogą ranić swoich teammate’ów. Domyślne ustawienie zależy od trybu gry. W trybach competitive friendly fire jest włączony, w casual wyłączony.



**mp_win_panel_display_time**

Ta komenda określa czas (w sekundach), przez jaki tablica wyników jest wyświetlana między rundami. Domyślnie 3 sekundy.



**mp_respawn_immunitytime**

Ta komenda określa, ile sekund gracze mają immunitet po respawnie. Używana w trybie Deathmatch.



**mp_halftime**

Ta komenda określa, czy drużyny zmieniają się w połowie meczu. Domyślnie 1.



**mp_maxmoney**

Ta komenda określa maksymalną ilość pieniędzy, jaką może mieć gracz.



**mp_maxrounds**

Ta komenda określa maksymalną liczbę rund, które serwer rozegra.



**mp_roundtime**

Ta komenda określa maksymalną liczbę minut trwania rundy przed jej wygraną/przegraną. Jeśli runda zostanie przerwana po tym czasie, zwycięstwo przypada drużynie antyterrorystów. Sekundy podawane są w formacie dziesiętnym, np. 1.92 = 1m55s.



**mp_solid_teammates**

Ta komenda określa, czy można kolidować z teammate’ami:

- Wartość: 0 - Kolizje wyłączone
- Wartość: 1 - Kolizje włączone



**mp_startmoney**

Ta komenda określa, ile pieniędzy gracz dostaje na początku połowy. Domyślnie 800$.



**mp_timelimit**

Ta komenda określa maksymalny czas trwania gry w minutach. Domyślnie wyłączone (0).



**mp_warmuptime**

Ta komenda określa, jak długo trwa rozgrzewka przed właściwą grą. Czas podawany w sekundach.



**sv_allow_votes**

Ta komenda określa, czy głosowania (np. o timeout) są dozwolone:

- Wartość: 0 - Wyłączone
- Wartość: 1 - Włączone



**sv_infinite_ammo**

Ta komenda określa, czy gracze mają nieskończoną amunicję:

- Wartość: 1 - Nieskończona amunicja, którą można strzelać bez przeładowania.
- Wartość: 2 - Nieskończona liczba magazynków, ale trzeba przeładować po opróżnieniu magazynka.



**ammo_grenade_limit_flashbang**

Ta komenda określa, ile granatów błyskowych może mieć gracz.



**ammo_grenade_limit_total**

Ta komenda określa, ile łącznie granatów może mieć gracz.





### Konfiguracja gotowa pod esport (ESL Configs)

Jeśli chcesz używać serwera do celów esportowych, warto wgrać konfiguracje dostarczone przez ESL. Możesz je pobrać z oficjalnej strony ESL: [Download](https://play.eslgaming.com/download/26251762/)

Pliki konfiguracyjne należy wgrać do katalogu **cfg** i można je uruchomić w grze za pomocą następujących komend:

```
rcon_password TwojeHaslo // Logowanie przez rcon do wykonywania komend rcon
rcon exec esl5on5
```

Po tym wszystkie wartości komend ESL zostaną załadowane i gra może się rozpocząć!

<InlineVoucher />