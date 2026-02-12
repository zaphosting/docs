---
id: dedicated-linux-hytale
title: "Serwer dedykowany: Konfiguracja serwera Hytale na serwerze dedykowanym"
description: "Dowiedz sie, jak skonfigurowac serwer Hytale na swoim serwerze dedykowanym z Linuxem, aby zarzadzac rozgrywka bez problemów ? Sprawdz teraz"
sidebar_label: Hytale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany z Linuxem i chcesz na nim zainstalowac Hytale? Trafiles idealnie. W tym poradniku krok po kroku wyjasnimy, jak zainstalowac ten serwer na Twoim Linuxowym serwerze dedykowanym.

## Przygotowanie

Aby uruchomic serwer Hytale, Twój system musi spelniac kilka podstawowych wymagan. Serwer dziala na Javie 25 i wymaga co najmniej 4 GB pamieci RAM. Obslugiwane sa architektury x64 oraz arm64. Rzeczywiste zuzycie zasobów zalezy od liczby graczy, odleglosci renderowania i aktywnosci swiata, wiec dla wiekszych serwerów moze byc potrzebne wiecej zasobów.

Przed kontynuacja upewnij sie, ze masz zainstalowana Jave 25. Mozesz to sprawdzic poleceniem:

```
java --version
```

Jesli Java nie jest jeszcze zainstalowana, skorzystaj z naszego dedykowanego [poradnika Instalacja Java](dedicated-linux-java) dla serwerów Linux. Ten poradnik pokaze Ci, jak poprawnie zainstalowac i skonfigurowac Jave w Twoim srodowisku.



## Instalacja

Zacznij od utworzenia dedykowanego katalogu dla serwera Hytale. Dzieki temu wszystkie pliki serwera beda uporzadkowane w jednym miejscu.

```
sudo mkdir -p /opt/hytale
sudo chown -R $(whoami):$(whoami) /opt/hytale
cd /opt/hytale
```

Serwer wymaga dwóch glównych komponentów: samej aplikacji serwera oraz zasobów gry. Pliki te mozna pobrac za pomoca narzedzia wiersza polecen Hytale downloader, które jest przeznaczone do wdrozen serwerowych i ulatwia aktualizacje.

CLI downloader zapewnia uporzadkowany sposób pobierania i aktualizacji plików serwera Hytale. Po pobraniu archiwum downloadera, rozpakuj je do tymczasowego katalogu. W archiwum znajdziesz plik QUICKSTART.md, który opisuje podstawowe uzycie narzedzia.

Uruchom downloader z linii polecen i postepuj zgodnie z instrukcjami, aby pobrac najnowsza wersje serwera. Po zakonczeniu skopiuj pobrane pliki serwera oraz archiwum zasobów do katalogu serwera. Po tym kroku katalog powinien zawierac plik JAR serwera oraz archiwum zasobów, np. Assets.zip.

| **Polecenie**                                   | **Opis**                              |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | Pobierz najnowsza wersje              |
| `./hytale-downloader -print-version`          | Pokaz wersje gry bez pobierania       |
| `./hytale-downloader -version`                | Pokaz wersje hytale-downloader        |
| `./hytale-downloader -check-update`           | Sprawdz aktualizacje hytale-downloader|
| `./hytale-downloader -download-path game.zip` | Pobierz do okreslonego pliku          |
| `./hytale-downloader -patchline pre-release`  | Pobierz z kanalu pre-release           |
| `./hytale-downloader -skip-update-check`      | Pomin automatyczne sprawdzanie aktualizacji |



## Konfiguracja

### Uruchamianie serwera

Serwer uruchamia sie przez odpalenie pliku JAR i wskazanie sciezki do archiwum zasobów. Dostosuj sciezke, jesli Twoje zasoby sa w innym miejscu.

```
java -jar HytaleServer.jar --assets /opt/hytale/Assets.zip --bind 0.0.0.0:5520
```

### Autoryzacja

Przy pierwszym uruchomieniu serwer musi zostac uwierzytelniony, zanim gracze beda mogli sie polaczyc. Odbywa sie to bezposrednio przez konsole serwera za pomoca logowania urzadzeniem. Postepuj zgodnie z instrukcjami wyswietlanymi w konsoli, aby zakonczyc autoryzacje.

```
/auth login device
```

Wyjscie bedzie wygladac tak:

```
> /auth login device
===================================================================
AUTORYZACJA URZADZENIA
===================================================================
Odwiedz: https://accounts.hytale.com/device
Wprowadz kod: ABCD-1234
Lub odwiedz: https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
Oczekiwanie na autoryzacje (wygasa za 900 sekund)...

[Uzytkownik konczy autoryzacje w przegladarce]

> Autoryzacja zakonczona sukcesem! Tryb: OAUTH_DEVICE
```

Po uwierzytelnieniu Twój serwer moze przyjmowac polaczenia od graczy.



### Konfiguracja zapory sieciowej

Domyslnie serwer nasluchuje na UDP port 5520 i wiaze sie ze wszystkimi dostepnymi interfejsami. Mozesz zmienic adres i port, jesli potrzebujesz. Serwer komunikuje sie przez UDP uzywajac protokolu QUIC. Upewnij sie, ze Twoja zapora sieciowa pozwala na przychodzacy ruch UDP na wybranym porcie, korzystajac z Iptables lub UFW.

```
sudo iptables -A INPUT -p udp --dport 5520 -j ACCEPT
sudo ufw allow 5520/udp
```



## Uwagi dotyczace wydajnosci

Odleglosc renderowania (view distance) to jeden z najwazniejszych czynników wplywajacych na zuzycie pamieci. Wyzsze wartosci zwiekszaja uzycie RAM, poniewaz wiecej danych swiata musi byc aktywnych jednoczesnie.

Dla wiekszosci konfiguracji maksymalna odleglosc renderowania 12 chunków (384 bloków) zapewnia dobry balans miedzy wydajnoscia serwera a komfortem gry.

Dla porównania, serwery Minecrafta domyslnie uzywaja odleglosci 10 chunków (160 bloków). Domyslne 384 bloki w Hytale to mniej wiecej 24 chunków Minecrafta, co tlumaczy wyzsze wymagania pamieciowe. Ta wartosc powinna byc dostosowana do przewidywanej liczby graczy i dostepnych zasobów systemowych.



## Podsumowanie

Gratulacje, masz teraz dzialajacy serwer Hytale na swoim systemie. Mozesz rozbudowac konfiguracje, instalujac mody, dostosowujac ustawienia swiata i optymalizujac parametry wydajnosci, aby dopasowac ja do swojej spolecznosci graczy. Zalecamy regularne monitorowanie zuzycia zasobów, aby zapewnic stabilna prace serwera wraz z jego rozwojem.

W razie pytan lub potrzeby pomocy, smialo kontaktuj sie z naszym zespolem wsparcia, który jest dostepny codziennie, by Ci pomóc! ??