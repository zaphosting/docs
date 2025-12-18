---
id: exiled-plugins
title: "SCP EXILED: Instalacja pluginów"
description: "Dowiedz się, jak rozbudować i spersonalizować swój serwer dzięki zaufanym pluginom dla lepszej funkcjonalności i personalizacji → Sprawdź teraz"
sidebar_label: Instalacja Pluginów
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/scp-plugins.json';


## Wprowadzenie

Pluginy pozwalają jeszcze bardziej rozbudować i spersonalizować Twój serwer. Poniżej wyjaśnimy, gdzie znaleźć najczęściej używane pluginy i jak je skonfigurować.

<InlineVoucher />

## Przygotowanie

Najpierw musisz pobrać pluginy, które chcesz zainstalować na swoim serwerze. Szeroki wybór pluginów EXILED znajdziesz na ich oficjalnej stronie GitHub. Po wybraniu repozytorium pluginu znajdziesz tam sekcję releases, gdzie możesz pobrać najnowszą wersję. Szczegółowe instrukcje, jak to zrobić, znajdziesz poniżej.

Chociaż pluginy można pobierać z różnych źródeł, zalecamy korzystanie ze sprawdzonych platform, takich jak oficjalne repozytorium GitHub, ponieważ są one generalnie najbezpieczniejsze. Zawsze zachowuj ostrożność przy dodawaniu pluginów na serwer. Upewnij się, że zweryfikowałeś źródło, sprawdziłeś twórców i dokładnie rozumiesz, co dany plugin robi, zanim go zainstalujesz.

Aby pobrać plugin z GitHub, zacznij od odwiedzenia oficjalnej [strony EXILED na GitHub](https://github.com/Exiled-Team) i wybierz repozytorium pluginu, którego chcesz użyć.  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

Po wejściu do repozytorium pluginu, poszukaj sekcji **Releases**, która znajduje się po prawej stronie.  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

W sekcji Releases znajdziesz plik **.dll** do pobrania. Kliknij na niego, aby rozpocząć pobieranie.  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

To wszystko! Po pobraniu możesz przejść do kroków instalacji opisanych dalej w tym poradniku, aby dowiedzieć się, jak zainstalować plik **.dll** na swoim serwerze.


## Instalacja

Gdy już pobierzesz wybrane pluginy, możesz przejść do instalacji. Odbywa się to przez **FTP**, więc będziesz potrzebować klienta FTP, aby przesłać pliki na serwer. Jeśli nie znasz jeszcze FTP i jak to działa, zerknij na nasz poradnik: [Dostęp przez FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

Poprawny katalog na pluginy znajdziesz pod ścieżką: ```/gXXXXXX/.config/EXILED/Plugins```. Wystarczy, że wrzucisz pobrane pliki **.dll** do tego folderu. Po przesłaniu powinno to wyglądać mniej więcej tak:  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

Po wykonaniu tego kroku instalacja pluginu jest zakończona. Na koniec sprawdź **konsolę na żywo**, aby potwierdzić, że plugin został poprawnie skompilowany i załadowany. Potwierdzenie w konsoli powinno wyglądać tak:  

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)



## Popularne Pluginy

Wciąż szukasz idealnych pluginów na swój serwer? Przejrzyj naszą starannie wyselekcjonowaną listę najpopularniejszych i polecanych pluginów, które wzbogacą rozgrywkę i dodadzą Twojemu serwerowi ten ostatni szlif. Zainspiruj się i znajdź dokładnie te dodatki, które pasują do Twojego projektu.

<SearchableItemList items={items} />


## Podsumowanie

Jeśli wykonałeś wszystkie kroki, powinieneś pomyślnie zainstalować swój plugin. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />