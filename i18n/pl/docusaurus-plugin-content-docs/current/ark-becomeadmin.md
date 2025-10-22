---
id: ark-becomeadmin
title: "ARK: Zostań administratorem"
description: "Dowiedz się, jak zarządzać swoim serwerem gier z pełnymi uprawnieniami administratora i ulepsz rozgrywkę → Sprawdź teraz"
sidebar_label: Zostań administratorem
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w grze. Wszystkie kroki, które musisz wykonać, aby przyznać uprawnienia administratora na swoim serwerze, opisane są poniżej.  
<InlineVoucher />

## Konfiguracja

Prawa administratora pozwalają na dokonywanie zmian bezpośrednio w grze na Twoim serwerze, bez konieczności modyfikacji plików konfiguracyjnych. Aby przyznać sobie lub innym graczom prawa administratora, musisz najpierw ustawić hasło administratora serwera. Hasło to definiuje się w ustawieniach naszego panelu administracyjnego.

![](https://screensaver01.zap-hosting.com/index.php/s/kLEsKbT6RN6c7Na/preview)

Po ustawieniu hasła serwer musi zostać zrestartowany. Następnie możesz połączyć się z serwerem i zalogować jako admin przez konsolę w grze, używając następującej komendy wraz z hasłem administratora:

```
enableCheats password
```

Po tym możesz wykonywać wszystkie komendy serwera jako administrator. Poniżej znajdziesz przegląd najczęściej używanych komend.

## Najczęściej używane komendy

| Komenda                                        | Opis                                                        |
| ---------------------------------------------- | ------------------------------------------------------------ |
| setcheatplayer TRUE/FALSE                      | Włącza / wyłącza menu cheatów                               |
| admincheat AllowPlayerToJoinNoCheck SteamID    | Dodaje gracza do białej listy                               |
| admincheat DisallowPlayerToJoinNoCheck SteamID | Usuwa gracza z białej listy                                 |
| admincheat SetMessageOfTheDay Wiadomość         | Ustawia wiadomość dnia (MOTD). Pojawia się, gdy gracz łączy się z serwerem gier |
| admincheat broadcast Wiadomość                 | Wysyła wiadomość do wszystkich graczy na serwerze           |
| admincheat god                                 | Włącza nieśmiertelność dla własnego gracza                  |
| admincheat fly                                 | Włącza latanie dla własnego gracza                           |
| admincheat walk                                | Wyłącza latanie dla własnego gracza                          |
| admincheat teleport                            | Teleportuje Twojego gracza w kierunku, w którym aktualnie patrzysz |
| admincheat slomo                               | Zmienia prędkość serwera oraz prędkość ruchu wszystkich graczy |
| admincheat playersonly                         | Zatrzymuje ruch wszystkich stworzeń oraz zatrzymuje / blokuje craftowanie |
| admincheat ghost                               | Włącza tryb Noclip dla własnego gracza                       |
| admincheat forcetame                           | Umożliwia natychmiastowe oswajanie dinozaurów i jazdę bez siodła |
| admincheat listplayers                         | Wyświetla listę wszystkich graczy wraz z ich SteamId64      |
| admincheat banplayer SteamId64                 | Banuje gracza za pomocą SteamID64                            |
| admincheat unbanplayer SteamId64               | Odbanowuje gracza za pomocą SteamID64                        |
| admincheat setplayerpos x y z                  | Teleportuje własnego gracza do wskazanej lokalizacji        |
| admincheat saveworld                           | Zapisuje aktualny stan świata                                |
| admincheat addexperience Ilość                  | Dodaje doświadczenie graczowi                                |
| admincheat settimeofday Czas                   | Zmienia porę dnia na serwerze gier. Przykład: "admincheat settimeofday 12:00" |

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂

<InlineVoucher />