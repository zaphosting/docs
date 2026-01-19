---
id: hytale-permissions
title: "Hytale: Zarządzanie uprawnieniami użytkowników i grup"
description: "Zarządzaj uprawnieniami użytkowników i grup na swoim serwerze Hytale → Dowiedz się więcej"
sidebar_label: Uprawnienia
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Zarządzanie uprawnieniami na serwerze Hytale pozwala kontrolować, co gracze mogą, a czego nie mogą robić. Obejmuje to przypisywanie różnych poziomów dostępu zaufanym graczom, moderatorom i administratorom. Poprawne ustawienie uprawnień jest kluczowe dla utrzymania zrównoważonego i bezpiecznego środowiska serwera, gdzie gracze mogą cieszyć się grą bez niezamierzonych exploitów czy nadużyć.

Oprogramowanie serwera Hytale obsługuje hierarchiczne poziomy uprawnień, które określają, jakie komendy i akcje może wykonać każdy gracz. Można nimi zarządzać przez konsolę na żywo lub za pomocą ustawień konfiguracyjnych, w zależności od konfiguracji serwera.

:::info Informacja o Wczesnym Dostępie

Hytale zostało wydane 13 stycznia 2026 i jest obecnie dostępne we Wczesnym Dostępie. Ponieważ gra jest wciąż w aktywnej fazie rozwoju, oprogramowanie serwera, pliki konfiguracyjne, wsparcie modów oraz procesy instalacji mogą się z czasem zmieniać.

:::

<InlineVoucher />



## Przegląd poziomów uprawnień

Uprawnienia definiują, jakie działania gracz może wykonywać na serwerze. Na najniższym poziomie zwykli gracze mają tylko standardowe uprawnienia do rozgrywki, takie jak poruszanie się, interakcja ze światem i czatowanie. Wyższe poziomy uprawnień, takie jak operator czy administrator, dają dostęp do komend serwera wpływających na rozgrywkę, innych graczy, konfigurację serwera oraz narzędzia moderacji.

System uprawnień składa się z dwóch głównych elementów:

- **Uprawnienia użytkownika**, które dotyczą bezpośrednio konkretnego gracza
- **Uprawnienia grupowe**, które pozwalają grupować uprawnienia i przypisywać je wielu graczom jednocześnie

Każdy gracz jest identyfikowany wewnętrznie przez UUID, który jest wymagany przy zarządzaniu uprawnieniami za pomocą komend.



## Zarządzanie uprawnieniami użytkownika

Uprawnienia użytkownika pozwalają przyznać lub odebrać konkretne uprawnienia pojedynczemu graczowi.

### Wyświetlanie uprawnień użytkownika

Aby wyświetlić wszystkie uprawnienia przypisane bezpośrednio do użytkownika. Ta komenda pokazuje wszystkie aktualnie zastosowane uprawnienia dla wskazanego użytkownika.

```
/perm user list <uuid>
```



### Dodawanie uprawnień użytkownikowi

Aby przyznać jednemu lub więcej uprawnień bezpośrednio użytkownikowi. Wskazane uprawnienia zostaną dodane natychmiast i zaczną działać bez potrzeby restartu serwera.

```
/perm user add <uuid> <permissions>
```



### Usuwanie uprawnień użytkownika

Aby odebrać uprawnienia użytkownikowi. Usuwa tylko wskazane uprawnienia, pozostawiając pozostałe bez zmian.

```
/perm user remove <uuid> <permissions>
```



## Zarządzanie przypisaniami użytkownika do grup

Oprócz uprawnień bezpośrednich, użytkownicy mogą dziedziczyć uprawnienia przez grupy.

### Wyświetlanie grup użytkownika

Ta komenda pokazuje, do jakich grup uprawnień należy aktualnie użytkownik.

```
/perm user group list <uuid>
```



### Dodawanie użytkownika do grupy

Aby przypisać użytkownika do grupy uprawnień. Po dodaniu użytkownik dziedziczy wszystkie uprawnienia zdefiniowane dla tej grupy.

```
/perm user group add <uuid> <group>
```



### Usuwanie użytkownika z grupy

Aby usunąć użytkownika z grupy uprawnień. Po usunięciu użytkownik nie będzie już otrzymywał uprawnień z tej grupy.

```
/perm user group remove <uuid> <group>
```



## Zarządzanie uprawnieniami grup

Grupy pozwalają na centralne zarządzanie uprawnieniami i ich ponowne wykorzystanie dla wielu użytkowników.

### Wyświetlanie uprawnień grupy

Aby wyświetlić wszystkie uprawnienia przypisane do grupy. Ta komenda daje przegląd wszystkich uprawnień powiązanych z daną grupą.

```
/perm group list <group>
```



### Dodawanie uprawnień do grupy

Aby dodać jedno lub więcej uprawnień do grupy. Wszyscy użytkownicy przypisani do tej grupy natychmiast odziedziczą nowe uprawnienia.

```
/perm group add <group> <permissions>
```



### Usuwanie uprawnień z grupy

Usuwa tylko wskazane uprawnienia z grupy, nie wpływając na pozostałe.

```
/perm group remove <group> <permissions>
```



<InlineVoucher />