---
id: dedicated-windows-ftpserver
title: "Serwer dedykowany: Instalacja FTP"
description: "Dowiedz się, jak skonfigurować i zarządzać serwerem FTP FileZilla na Windows, aby bezpiecznie przesyłać pliki i kontrolować dostęp użytkowników → Sprawdź teraz"
sidebar_label: Instalacja FTP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

**FTP (File Transfer Protocol)** to protokół sieciowy służący do przesyłania plików przez sieć TCP/IP. Protokół został stworzony, aby umożliwić łatwą wymianę plików między systemami.

Dzięki **FileZilla Server** możesz postawić taki serwer FTP na systemie Windows. FileZilla Server jest prosty w instalacji i konfiguracji, oferując wiele funkcji, takich jak tworzenie kont użytkowników, zarządzanie uprawnieniami dostępu oraz transfer plików.

<InlineVoucher />

## Przygotowanie

### Pobieranie

Do postawienia serwera FTP potrzebne jest odpowiednie oprogramowanie. Jako rozwiązanie dla systemu Windows możesz użyć FileZilla Server. Opcję pobrania znajdziesz tutaj: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Instalacja

Po pobraniu pliku instalacyjnego, uruchom go. Kliknij na wcześniej pobrany plik. Powinno pojawić się takie okno: ![](https://screensaver01.zap-hosting.com/index.php/s/a2DEpaR5jD28X23/preview)



Możesz tam wybrać pakiety do instalacji. Wystarczy jednak zostawić domyślnie zaznaczone pakiety i kliknąć **Next**, a następnie wybrać ścieżkę instalacji:

![](https://screensaver01.zap-hosting.com/index.php/s/cN7K9Cte9tXFrF2/preview)

W tym przykładzie FileZilla Server zostanie zainstalowany w **C:\Program Files (x86)\FileZilla Server**. Możesz jednak wybrać własną ścieżkę. Po wyborze ścieżki musisz określić, w jaki sposób serwer FTP ma być zainstalowany i uruchamiany. Możesz też ustawić port oraz podać hasło administratora.



![](https://screensaver01.zap-hosting.com/index.php/s/WopFXcW3teFAyJK/preview)

Następnie kliknij **Next**, a w kolejnym kroku na końcu kliknij **Install**, aby rozpocząć instalację. Otworzy się panel administracyjny serwera FTP FileZilla. Kliknij przycisk **Connect to FileZilla FTP Server**.

Pojawi się okno z polami Host, Port i Password. Pola Host i Port możesz zostawić bez zmian, a w polu Password wpisz ustalone wcześniej hasło administratora serwera FTP. Po tym kliknij **Ok**, aby nawiązać połączenie.



## Konfiguracja

### Tworzenie użytkownika

Aby móc połączyć się z serwerem przez FTP, musisz utworzyć użytkownika.  
Kliknij w menu **Server**, a następnie **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/C5WLC8Lp8CjTjQg/preview)

W zakładce Users możesz dodać nowego użytkownika, klikając **Add**:

![](https://screensaver01.zap-hosting.com/index.php/s/dbCS5yJfwqry8Dq/preview)

W tym przykładzie nazwa użytkownika to **YourUserName**. Oczywiście możesz wybrać własną nazwę.



### Hasło i uprawnienia

Po utworzeniu użytkownika musisz skonfigurować dostęp i uprawnienia. Aktywuj użytkownika i ustaw opcje hasła w zakładce **General** pod **Credentials**. Zdecydowanie zalecamy ustawienie hasła dla bezpieczeństwa. Wybierz **Require a password to log in** i wpisz swoje hasło.

![](https://screensaver01.zap-hosting.com/index.php/s/z78wpcFbYEAJYeB/preview)

Aby użytkownik miał odpowiednie uprawnienia, musisz określić, do których katalogów ma dostęp, klikając **Add** przy mount points. Musisz podać ścieżkę wirtualną i rzeczywistą. W naszym przykładzie definiujemy, że dysk C jest dostępny pod \.

![](https://screensaver01.zap-hosting.com/index.php/s/iqQrjGByHpkBcJF/preview)

Po prawej stronie znajdziesz opcję **Permissions**, gdzie ustawisz prawa dostępu do wskazanej ścieżki. Jeśli chcesz, aby użytkownik mógł czytać i edytować dane, zalecamy wybrać **Read+Write**.

::: danger
Ze względów bezpieczeństwa udostępniaj użytkownikowi dostęp tylko do wybranych folderów.
:::

Zmiany zatwierdź klikając **Apply**.



## Wyjątki w zaporze Windows

Aby umożliwić połączenie z serwerem FTP, musisz zezwolić na korzystanie z serwera FTP w zaporze Windows. Otwórz ustawienia zapory w **Panel sterowania\System i zabezpieczenia\Zapora systemu Windows Defender** i kliknij **Zezwalaj aplikacji lub funkcji na dostęp przez Zaporę systemu Windows Defender**.  
W kolejnym oknie wybierz aplikację, którą chcesz zezwolić:

![](https://screensaver01.zap-hosting.com/index.php/s/xHwQzCKokHTn424/preview)

W tym przykładzie ścieżka to **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/Laz3HFb7GrLBY9w/preview)

Na koniec kliknij **OK**, aby zamknąć okno. Połączenie z Twoim serwerem FTP jest teraz możliwe.



## Podsumowanie

Gratulacje, udało Ci się zainstalować serwer FTP! Jeśli masz pytania lub potrzebujesz pomocy, nasz support jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />