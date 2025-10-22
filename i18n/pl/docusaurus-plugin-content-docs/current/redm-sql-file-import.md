---
id: redm-sql-file-import
title: "RedM: Import pliku SQL"
description: "Dowiedz się, jak poprawnie zaimportować pliki SQL do bazy danych RedM, aby zapewnić działanie zasobów i integrację z bazą danych → Sprawdź teraz"
sidebar_label: Import pliku SQL
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Importowanie plików SQL do bazy danych RedM

Wiele zasobów dla RedM wymaga bazy danych, aby działać poprawnie. Dlatego ważne jest, aby poprawnie zaimportować pliki SQL do bazy danych, które są dołączone do zasobów, aby zasoby mogły tworzyć wpisy w bazie i działać zgodnie z oczekiwaniami.

:::info
Nie wszystkie zasoby wymagają bazy danych do działania! Po pobraniu zasobu sprawdź opis lub dokumentację, aby dowiedzieć się, czy musisz zaimportować plik SQL.
:::

W wielu przypadkach w plikach do pobrania zasobu znajdziesz jeden lub więcej plików z rozszerzeniem **.sql**. Te pliki muszą zostać zaimportowane do bazy danych.

## Przygotowanie pliku SQL

W tym przykładzie zaimportujemy plik SQL dla frameworka RP **RedEM**. Powinieneś przygotować plik SQL dla zasobu, który chcesz zaimportować. Zrób to, otwierając folder zasobu, który wymaga bazy danych, i znajdź plik z rozszerzeniem **.sql**.

![](https://github.com/zaphosting/docs/assets/42719082/331d2a3d-0d81-4b39-8ad6-d0aba84ff19c)

:::info
Przed przystąpieniem do importu otwórz plik .sql w dowolnym edytorze tekstu i sprawdź, czy znajdują się w nim następujące linie:

![](https://github.com/zaphosting/docs/assets/42719082/dfc43c55-9918-45e7-99eb-1f70193c0be1)

Jeśli tak, usuń linie `CREATE` i `USE` bazy danych i zapisz plik, w przeciwnym razie plik SQL nie zostanie zaimportowany.

Dzieje się tak, ponieważ pierwsza linia deklaruje utworzenie nowej bazy danych, co nie jest potrzebne, ponieważ Twój serwer gier RedM ma już bazę danych o innej nazwie. Druga linia wskazuje, że do importu powinna być użyta baza o nazwie `essentialmode`, ale ponownie nie jest to potrzebne, ponieważ masz już istniejącą bazę, do której chcesz importować.
:::

## Import pliku SQL do bazy danych RedM

Teraz przejdź do sekcji **Baza danych** w panelu głównym Twojego serwera gier.

![](https://github.com/zaphosting/docs/assets/42719082/5f0f81ec-832b-4b9e-a39a-8ec78fd10890)

Na stronie bazy danych znajdziesz różne funkcje do zarządzania bazą, takie jak tworzenie kopii zapasowej, tworzenie, zarządzanie i inne. Skupimy się na dostępie do bazy, ale jeśli chcesz więcej informacji, sprawdź nasze inne poradniki dotyczące baz danych: [Zewnętrzny dostęp do bazy danych](gameserver-database-external-access.md).

Kliknij niebieską ikonę przekierowania, która przeniesie Cię do narzędzia **phpmyadmin**, gdzie łatwo uzyskasz dostęp do bazy danych. Zaloguj się danymi podanymi na stronie bazy danych, jeśli pojawi się monit.

Po wejściu na stronę wybierz swoją bazę danych z listy po lewej stronie. Nazwa Twojej bazy danych **zawsze** zaczyna się od prefiksu `zap`.

![](https://github.com/zaphosting/docs/assets/42719082/30fa6041-b94e-4ac8-a3cd-286cca226dba)

Jeśli jeszcze nie korzystałeś z bazy, będzie ona pusta. Teraz możesz zaimportować plik .sql.

Kliknij przycisk **Import** na górnym pasku nawigacyjnym w phpmyadmin, aby otworzyć menu importu.

![](https://github.com/zaphosting/docs/assets/42719082/c0ca30f0-c520-4a71-843a-296064ba5761)

Następnie kliknij przycisk **Przeglądaj...**, który otworzy okno eksploratora plików. Wybierz plik **.sql**, który chcesz zaimportować.

![](https://github.com/zaphosting/docs/assets/42719082/02d09225-a68d-498b-a2bd-df57386ce242)

:::note
Maksymalny rozmiar pliku to 2MB. Jeśli Twój plik SQL jest większy, użyj narzędzia do dzielenia plików SQL na mniejsze części. Polecamy [Pinetools SQL-Splitter](https://pinetools.com/split-files), które zrobi to za Ciebie. Po podzieleniu możesz importować pliki normalnie.
:::

Na koniec kliknij przycisk **Importuj** na dole strony, aby rozpocząć proces importu. Jeśli wszystko pójdzie dobrze, zobaczysz komunikat o sukcesie, a w bazie pojawi się nowa tabela, którą zobaczysz po lewej stronie.

![](https://github.com/zaphosting/docs/assets/42719082/5fef5d58-78f1-4b59-bc3e-1e0af2ff981b)

Gratulacje! Pomyślnie zaimportowałeś plik SQL do bazy danych swojego serwera gier!

## Podsumowanie

Import pliku SQL dla Twojego serwera RedM jest konieczny, aby wiele zasobów działało bez problemów. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />