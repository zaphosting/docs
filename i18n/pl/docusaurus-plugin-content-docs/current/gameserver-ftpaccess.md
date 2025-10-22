---
id: gameserver-ftpaccess
title: "Serwer gier: Dostęp przez FTP do zarządzania plikami serwera"
description: "Dowiedz się, jak bezpiecznie uzyskać dostęp i zarządzać plikami serwera za pomocą FTP, aby płynnie przesyłać pliki i kontrolować serwer → Sprawdź teraz"
sidebar_label: Dostęp FTP
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

FTP (File Transfer Protocol) to protokół sieciowy zaprojektowany do przesyłania plików przez sieć TCP/IP. Protokół został stworzony, aby umożliwić łatwą wymianę plików między systemami. Dzięki FTP masz możliwość dostępu i zarządzania plikami na swoim serwerze gier, niezależnie od tego, czy chcesz przesyłać pliki, pobierać je, czy aktywnie je edytować.

<InlineVoucher />

## Przygotowanie

Aby zarządzać plikami za pomocą protokołu FTP, potrzebujesz odpowiedniego klienta FTP. Do wyboru jest całkiem sporo klientów FTP, ale dwoma najbardziej znanymi i sprawdzonymi są **FileZilla** oraz **WinSCP**.

| Klient FTP | Pobierz                                                     |
| ---------- | ------------------------------------------------------------ |
| FileZilla  | [Oficjalna strona](https://filezilla-project.org/download.php?platform=win64) |
| WinSCP     | [Oficjalna strona](https://winscp.net/eng/downloads.php)    |



## Uzyskaj dane FTP

Aby połączyć się z serwerem gier przez FTP, potrzebujesz odpowiednich danych logowania. Znajdziesz je w sekcji **Przeglądarka FTP** w panelu administracyjnym swojego serwera gier.

Wystarczy wpisać **adres IP (serwera FTP)**, **nazwę użytkownika** oraz **hasło**, aby nawiązać połączenie. Dane te znajdziesz na stronie **Przeglądarka FTP**. Port to zawsze **21** i zazwyczaj jest ustawiany automatycznie.

![img](https://screensaver01.zap-hosting.com/index.php/s/6FTFDwyBQZ792Fd/download)



## FileZilla

### Łączenie

Połączenie możesz nawiązać przez funkcję Quickconnect lub przechodząc do **Plik -> Menedżer stron**. Wprowadź tam **dane FTP** swojego serwera, a następnie kliknij **Połącz**.

![](https://screensaver01.zap-hosting.com/index.php/s/wxSSFoW3GTXJdLK/preview)

:::info
Pamiętaj, aby zatrzymać serwer i zaktualizować uprawnienia FTP przed dostępem do plików serwera. W przeciwnym razie mogą pojawić się błędy takie jak "Permission Denied" lub "Access Denied".
:::

### Zarządzanie plikami

Jak wspomniano wcześniej, klient FTP pozwala na przesyłanie, pobieranie i edytowanie plików na serwerze. Klient FTP jest podzielony na dwie części. Lewa połowa to twój klient (komputer), a prawa połowa to serwer. Możesz nawigować po katalogach zarówno lokalnie, jak i na serwerze.

Zarządzanie odbywa się przez kliknięcie prawym przyciskiem myszy na wybrany plik lub folder. W zależności od potrzeb możesz przesyłać, pobierać, edytować, zmieniać nazwę lub przenosić pliki i foldery.

![](https://screensaver01.zap-hosting.com/index.php/s/qizoBD5JnHBRkJc/preview)

:::info
Jeśli masz kilka serwerów gier, najpierw przejdź do odpowiedniego katalogu serwera gier.
:::



### Możliwe problemy i rozwiązania

#### Błąd "530 Login incorrect"
Jeśli ten błąd pojawi się podczas nawiązywania połączenia, oznacza to, że podano nieprawidłowe dane logowania. Sprawdź wszystkie pola pod kątem poprawności i kompletności.

#### Błąd "Transfer connection interrupted"
Jeśli ten błąd pojawi się podczas połączenia lub transferu, spróbuj zmienić tryb transferu z *Pasywnego* na *Aktywny*. Poniżej znajdziesz kroki, jak zmienić to ustawienie w FileZilla.




## WinSCP

### Łączenie
Połączenie możesz nawiązać przez Quickconnect lub u góry przez **Nowa sesja**. Wprowadź tam dane FTP swojego serwera, a następnie kliknij **Połącz**.

![](https://screensaver01.zap-hosting.com/index.php/s/KNnkJsnETTFqZpD/preview)


:::info
Pamiętaj, aby zatrzymać serwer i zaktualizować uprawnienia FTP przed dostępem do plików serwera. W przeciwnym razie mogą pojawić się błędy takie jak "Permission Denied" lub "Access Denied".
:::


### Zarządzanie plikami

Jak wspomniano wcześniej, klient FTP pozwala na przesyłanie, pobieranie i edytowanie plików na serwerze. Klient FTP jest podzielony na dwie części. Lewa połowa to twój klient (komputer), a prawa połowa to serwer. Możesz nawigować po katalogach zarówno lokalnie, jak i na serwerze.

Zarządzanie odbywa się przez kliknięcie prawym przyciskiem myszy na wybrany plik lub folder. W zależności od potrzeb możesz przesyłać, pobierać, edytować, zmieniać nazwę lub przenosić pliki i foldery.

![](https://screensaver01.zap-hosting.com/index.php/s/dAYiFwWQAipgTqW/preview)


### Możliwe problemy i rozwiązania

#### Błąd "530 Login incorrect"
Jeśli ten błąd pojawi się podczas nawiązywania połączenia, oznacza to, że podano nieprawidłowe dane logowania. Sprawdź wszystkie pola pod kątem poprawności i kompletności.

<InlineVoucher />