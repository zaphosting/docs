---
id: cs16-plugins
title: "CS 1.6: Instalacja pluginów na własnym serwerze"
description: "Dowiedz się, jak wzbogacić swój serwer gier Counter-Strike 1.6 o AMXmodX i Metamod, aby uzyskać zaawansowaną personalizację i administrację → Sprawdź teraz"
sidebar_label: Instalacja Pluginów
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs16-plugins.json';

## Wprowadzenie

**AMXmodX** i **Metamod** są niezbędne do korzystania z pluginów na serwerze gier Counter-Strike 1.6. To dwie rozszerzenia Half Life, które pozwalają na jeszcze większą personalizację serwera niż zwykle. Obejmuje to na przykład użycie pluginów oraz rozszerzoną administrację Twoim serwerem.

<InlineVoucher />

## Instalacja AMXmodX / Metamod

### Przygotowanie

Przede wszystkim potrzebne są same rozszerzenia. Można je pobrać ze strony [amxmodx.org](https://amxmodx.org/downloads-new.php). Zawsze korzystaj z najnowszych wersji (**stable**), aby były w pełni funkcjonalne i kompatybilne.

![img](https://screensaver01.zap-hosting.com/index.php/s/SxJaFb7Cz79c7ER/preview)

Potrzebujesz pakietów Linux: **AMX Mod X Base, Counter-Strike Addon oraz Metamod**. Można je tam pobrać. Po pobraniu powinieneś mieć trzy spakowane pliki. Rozpakuj je na swoim komputerze. Powinno to dać Ci folder **addons**, który zawiera foldery **amxmodx** i **metamod**:

![](https://screensaver01.zap-hosting.com/index.php/s/LQdb93T39YApA6B/preview)

### Instalacja

Po wykonaniu powyższych kroków czas na właściwą instalację. Pliki muszą zostać przesłane na Twój serwer przez FTP. Do tego potrzebny jest klient FTP. Jeśli nie wiesz, czym jest FTP i jak działa, zerknij na nasz poradnik: [Dostęp przez FTP](gameserver-ftpaccess.md)

Teraz folder **addons** musi zostać przesłany do głównego katalogu serwera. Struktura plików powinna wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/A5zqJ9GxL47tCrW/preview)

Konfiguracja **AMXmodX** i **Metamod** jest teraz zakończona. Możesz połączyć się z serwerem w grze i użyć komendy ``amxx version`` w konsoli, aby sprawdzić, czy AMX został poprawnie zainstalowany. Wyświetlony komunikat powinien wyglądać tak:

```
AMX Mod X 1.8.2
Authors: ....
Compiled: Feb 14 2013, 00:56:31
URL:http://www.amxmodx.org/
Core mode: JIT
```

Jeśli pojawi się komunikat **Unknown command**, coś poszło nie tak podczas instalacji.

## Instalacja pluginów

### Przygotowanie

Gdy konfiguracja **AMXmodX** i **Metamod** jest gotowa i działa, możesz zacząć instalować pluginy. Najpierw pobierz pluginy, które chcesz zainstalować na serwerze. Duży wybór pluginów znajdziesz na [amxmodx.org](https://www.amxmodx.org/compiler.php). Przez lata opublikowano tam mnóstwo pluginów, a ciągle dodawane są nowe. Potrzebujesz pliku **.amxx** dla wybranego pluginu.

### Instalacja

Po pobraniu wybranych pluginów możesz rozpocząć ich instalację. Instalacja pluginów odbywa się również przez FTP. Pliki pluginów muszą zostać przesłane do katalogu pluginów pod ścieżką ``../addons/amx``.

![](https://screensaver01.zap-hosting.com/index.php/s/FG2ocNpWCRManSd/preview)

Przy następnym uruchomieniu serwera przesłane pluginy powinny zostać automatycznie załadowane.

## Popularne pluginy

Wciąż szukasz idealnych pluginów na swój serwer?
 Przejrzyj naszą starannie wyselekcjonowaną listę najpopularniejszych i wysoko ocenianych pluginów, które wzbogacą rozgrywkę i nadadzą Twojemu serwerowi ten wyjątkowy charakter. Zainspiruj się i znajdź dokładnie te dodatki, które pasują do Twojego projektu.

<SearchableItemList items={items} />

## Podsumowanie

Jeśli wykonałeś wszystkie kroki, powinieneś mieć poprawnie zainstalowane AMXmodX / Metamod oraz wybrane pluginy. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />