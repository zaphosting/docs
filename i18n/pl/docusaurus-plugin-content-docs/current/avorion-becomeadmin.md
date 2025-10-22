---
id: avorion-becomeadmin
title: "Avorion: Zostań adminem na swoim serwerze"
description: "Dowiedz się, jak przyznać uprawnienia administratora, aby mieć pełną kontrolę nad serwerem i efektywnie zarządzać funkcjami gry → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-avorion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako admin masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w niej. Wszystkie kroki, które musisz wykonać, aby przyznać uprawnienia administratora na swoim serwerze, opisane są poniżej.  
<InlineVoucher />

## Konfiguracja

Dodanie admina odbywa się przez stronę ustawień w panelu webowym. Kliknij w **Administracja serwerem gier** na **Ustawienia** i przewiń do sekcji **Ustawienia serwera**.

![](https://screensaver01.zap-hosting.com/index.php/s/gzei7sWedJMrqzc/preview)



Tam znajdziesz pole o nazwie **Admin SteamIDs**. Wpisz tam swój SteamID64. SteamID64 znajdziesz, najpierw otwierając swój profil Steam, a następnie klikając prawym przyciskiem myszy w dowolnym miejscu na profilu. Następnie kliknij **Kopiuj adres URL Steam**. 



![](https://screensaver01.zap-hosting.com/index.php/s/q7E3qSd9GoLCswM/preview)



Następnie otwórz jedną z poniższych stron i wklej tam adres URL swojego profilu: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Strony te pokażą Ci ogólne informacje oraz Steam ID Twojego konta. Potrzebujemy tylko SteamID64. SteamID64 wpisz odpowiednio w pole. Powinno to wyglądać tak:



![](https://screensaver01.zap-hosting.com/index.php/s/qakTq9iLW72jkyC/preview)



Kliknij **Zapisz**. Po restarcie serwera możesz wykonywać komendy admina w grze. Aby to zrobić, naciśnij Enter, aby otworzyć czat, a następnie wpisuj komendy poprzedzone symbolem /.



## Komendy admina

Poniżej znajdziesz przegląd najczęściej używanych komend, które możesz wykonać jako admin.



**Komendy ogólne**

| Komenda                 | Opis                                                        |
| :---------------------- | :---------------------------------------------------------- |
| /help                   | wyświetla pomoc                                            |
| /w [nazwa gracza]       | wysyła prywatną wiadomość do gracza                         |
| /save                   | zapisuje aktualny stan                                      |
| /stop                   | zatrzymuje serwer                                          |
| /seed                   | seed serwera                                               |
| /version                | pokazuje aktualną wersję serwera                           |
| /suicide                | niszczy Twój aktualny statek                               |
| /player                 | pokazuje liczbę graczy                                     |
| /status                 | wyświetla informacje o aktualnym stanie serwera           |
| /admin -a [nazwa gracza]| dodaje gracza jako admina                                  |
| /admin -r [nazwa gracza]| usuwa gracza z adminów                                    |
| /kick [nazwa gracza]    | wyrzuca gracza z serwera                                   |
| /ban [nazwa gracza]     | dodaje gracza do czarnej listy                             |
| /unban [nazwa gracza]   | usuwa gracza z czarnej listy                              |
| /banip [adres IP gracza]| dodaje adres IP gracza do czarnej listy                   |
| /unbanip [adres IP gracza]| usuwa adres IP gracza z czarnej listy                   |
| /blacklist              | pokazuje opcje czarnej listy                              |
| /whitelist              | pokazuje opcje białej listy                               |



**Komendy cheat (w grze):**

| Komenda                                | Opis                                                    |
| :------------------------------------- | :------------------------------------------------------- |
| /give [nazwa gracza] [ilość] credits   | daje graczowi żądaną ilość kredytów                      |
| /give [nazwa gracza] [ilość] [nazwa rudy] | daje graczowi żądaną ilość wybranej rudy                |



**Komendy serwera (konsola):**

| Komenda                       | Opis                                                        |
| :---------------------------- | :---------------------------------------------------------- |
| /max-logs [wartość]           | liczba plików logów do przechowywania                      |
| /difficulty [wartość]         | trudność serwera, dozwolone wartości: -3, -2, -1, 0, 1, 2, 3 Domyślnie: 0 |
| /collision-damage [wartość]   | ilość obrażeń przy kolizji, od 0 do 1. 0: brak obrażeń, 1: pełne obrażenia. Domyślnie: 1 |
| /exit-on-last-admin-logout    | wyłącz serwer po wylogowaniu ostatniego administratora     |
| /public [wartość]             | określa, czy serwer ma pozwalać innym graczom dołączać      |
| /infinite-resources [wartość] | włącza nieskończone zasoby dla wszystkich graczy           |
| /listed [wartość]             | określa, czy serwer ma być widoczny na publicznych listach serwerów |
| /max-players [wartość]        | maksymalna liczba graczy online Domyślnie: 10               |
| /save-interval [wartość]      | odstęp czasowy między zapisami Domyślnie: 300               |
| /same-start-sector arg        | określa, czy wszyscy gracze mają zaczynać w tym samym sektorze |
| /server-name [wartość]        | nazwa serwera, wyświetlana przy zapytaniach                 |
| /use-steam-networking [wartość] | używaj Steam Networking i uwierzytelniania użytkowników    |
| /galaxy-name [wartość]        | nazwa galaktyki, dodawana do ścieżki danych, ostateczna ścieżka to [datapath]/[galaxyname] |
| /datapath [wartość]           | folder, w którym będą przechowywane galaktyki, dodawany przed nazwę galaktyki |
| /admin [wartość]              | steam id(e) administratora(ów) serwera                      |


## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂

<InlineVoucher />