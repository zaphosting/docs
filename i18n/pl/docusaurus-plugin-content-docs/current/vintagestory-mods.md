---
id: vintagestory-mods
title: "Vintage Story: Instalacja Modów"
description: "Dowiedz się, jak zainstalować mody na swoim serwerze Vintage Story, aby dodać nowe funkcje i mechaniki rozgrywki → Sprawdź teraz"
sidebar_label: Instalacja Modów
services:
- gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Mody to kluczowy element doświadczenia w Vintage Story, pozwalający właścicielom serwerów na rozszerzenie gry o nowe mechaniki, przedmioty, funkcje generowania świata czy usprawnienia jakości rozgrywki. Instalacja modów na Twoim serwerze gier gwarantuje, że wszyscy gracze podłączeni do serwera będą mogli korzystać z tych samych ulepszeń rozgrywki.

Vintage Story oferuje ogromną bibliotekę modów społecznościowych, od drobnych poprawek po pełne przeróbki rozgrywki. Wiele z nich znajdziesz na oficjalnej Bazie Modów Vintage Story lub na forach społeczności.

<InlineVoucher />

## Przygotowanie

Zanim zainstalujesz mody na swoim serwerze Vintage Story, upewnij się, że wykonałeś następujące kroki:

- Pobierz wybrany mod z zaufanego źródła, np. z Bazy Modów Vintage Story  
- Sprawdź, czy wersja moda odpowiada wersji gry na Twoim serwerze  
- Zatrzymaj serwer przed przesłaniem nowych plików  

Większość modów do Vintage Story jest dystrybuowana w formacie `.zip` i nie należy ich rozpakowywać przed instalacją.

## Instalacja

Mody do serwera Vintage Story muszą być przesłane bezpośrednio do systemu plików serwera. Robi się to przez połączenie FTP. Najpierw połącz się z serwerem za pomocą klienta FTP i zaloguj się, używając danych FTP swojego serwera.

Po połączeniu przejdź do następującego katalogu:

```
/gxxxxxx/VintagestoryData/
```

W tym katalogu musisz utworzyć dwie foldery, jeśli jeszcze ich nie ma:

```
VintagestoryData
├── Mods
└── ModConfigs
```

- **Mods** – zawiera wszystkie zainstalowane mody serwera  
- **ModConfigs** – przechowuje pliki konfiguracyjne tworzone przez zainstalowane mody  

Po utworzeniu tych folderów prześlij pobrane pliki modów do katalogu **Mods**. Przykładowa struktura:

```
VintagestoryData
└── Mods
    ├── examplemod.zip
    ├── anothermod.zip
```

Vintage Story automatycznie załaduje wszystkie pliki modów umieszczone w tym folderze podczas uruchamiania serwera.

## Weryfikacja instalacji

Po przesłaniu wszystkich plików modów wróć do panelu administracyjnego serwera i uruchom serwer ponownie. Podczas startu serwer wykryje mody w folderze `Mods` i załaduje je automatycznie. Jeśli mod wymaga konfiguracji, może po pierwszym uruchomieniu wygenerować nowy plik konfiguracyjny w folderze `ModConfigs`.

Po pomyślnym uruchomieniu serwera połącz się z nim i sprawdź, czy mod działa. Mody powinny pojawić się w logach serwera podczas startu. Jeśli mod się nie załadował, sprawdź:

- Czy wersja moda odpowiada wersji serwera  
- Czy wszystkie wymagane zależności są zainstalowane  
- Czy plik `.zip` znajduje się w poprawnym folderze `Mods`

## Podsumowanie

Gratulacje! Pomyślnie zainstalowałeś mody na swoim serwerze Vintage Story. Mody pozwalają rozszerzyć rozgrywkę, wprowadzić nowe mechaniki i spersonalizować doświadczenie dla Twojej społeczności. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />