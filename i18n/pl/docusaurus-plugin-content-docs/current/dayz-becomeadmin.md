---
id: dayz-becomeadmin
title: "DayZ: Zostań Adminem"
description: "Dowiedz się, jak zdobyć pełną kontrolę nad serwerem, przydzielając prawa admina i efektywnie zarządzając opcjami gry → Sprawdź teraz"
sidebar_label: Zostań Adminem
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przydzielenie praw admina pozwala Ci łatwo i kompleksowo zarządzać serwerem z pełną kontrolą. Jako admin masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w grze. Poniżej znajdziesz wszystkie niezbędne kroki, które musisz wykonać, aby przydzielić prawa admina na swoim serwerze.  
<InlineVoucher />

## Konfiguracja

Konfiguracja praw admina odbywa się poprzez plik konfiguracyjny serwera. Możesz uzyskać dostęp do plików konfiguracyjnych swojego serwera w panelu zarządzania serwerem gier, w zakładce **Konfiguracje**. Tam znajdziesz przegląd dostępnych plików konfiguracyjnych. Otwórz plik **server.DZ.cfg**, klikając niebieski przycisk.

![](https://screensaver01.zap-hosting.com/index.php/s/n6FSdPnYxxWp4Po/preview)

W pliku konfiguracyjnym powinieneś znaleźć wpis **passwordAdmin**. Tutaj musisz ustawić wybrane hasło dostępu. Wpisz swoje hasło i kliknij przycisk **Zapisz** poniżej.

![](https://screensaver01.zap-hosting.com/index.php/s/H3ndjqRYBPXRgRK/preview)

Aby zmiana zaczęła działać, serwer musi zostać zrestartowany. Po restarcie połącz się z serwerem i otwórz czat w grze. Wykonaj poniższe polecenie, aby zalogować się jako admin:

```
#login hasło
```



## Najczęściej używane komendy

Poniżej znajdziesz listę kilku dostępnych komend, które możesz wykorzystać z uprawnieniami administratora:

| KOMENDA                                    | OPIS                                                        |
| :----------------------------------------- | :----------------------------------------------------------- |
| #login hasłoadmina                         | Zaloguj się jako admin serwera.                             |
| #logout                                    | Wyloguj się jako admin.                                     |
| #mission nazwa_pliku Difficulty            | Wybierz misję o znanej nazwie i ustaw poziom trudności - parametr trudności jest opcjonalny, jeśli nie zostanie ustawiony, zachowany zostanie aktualny poziom trudności. |
| #missions                                  | Wybierz misję.                                              |
| ##restart                                  | Zrestartuj misję.                                           |
| #reassign                                  | Zacznij od nowa i przydziel role na nowo.                  |
| #shutdown                                  | Wyłącz serwer.                                              |
| #restartserver                             | Zrestartuj serwer.                                          |
| #shutdownserveraftermission                | Po zakończeniu misji serwer zostanie wyłączony.            |
| #restartserveraftermission                 | Po zakończeniu misji serwer zostanie zrestartowany.        |
| #init                                      | Przeładuj plik konfiguracyjny serwera załadowany przez opcję -config. |
| #exec ban Nazwa#exec ban ID#exec ban #Gracz | Pozwala zbanować gracza.                                    |
| #kick Nazwa#kick ID#kick #Gracz            | Pozwala wyrzucić gracza z serwera.                          |
| #monitor (interwał w sekundach)             | Pokazuje informacje o wydajności serwera. Jeśli interwał to 0, monitorowanie zostaje zatrzymane. |
| #monitords (interwał w sekundach)           | Pokazuje informacje o wydajności na konsoli serwera. Jeśli interwał to 0, monitorowanie zostaje zatrzymane. |
| #debug off                                 | Wyłącza debugowanie.                                        |
| #debug (interwał w sekundach)               | Domyślny interwał to 10, jeśli nie wybrano innego.          |
| #debug (komenda) (parametr)                 | Dostępne komendy: JIPQueue userQueue checkFile totalSent userSent userInfo. Możesz wyłączyć każdą komendę dodając parametr off po niej, np. #totalSent off. Wyniki różnią się w zależności od komendy – niektóre trafiają do pliku logów, inne na ekran itd. Pamiętaj, że potrzebujesz debuggera zdolnego do przechwytywania OutputDebugString działającego na maszynie klienta. |
| #debug (komenda)                           | Wyloguj się jako admin.                                     |
| #logout                                    | Dostępne są dwie komendy: console - wysyła zawartość konsoli serwera do nadawcy; von - wypisuje do pliku logów zdefiniowanego w server.cfg, np. plik może nazywać się „server_console.log”. Potwierdzenie tych komend zobaczysz na kanałach czatu. |


## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />