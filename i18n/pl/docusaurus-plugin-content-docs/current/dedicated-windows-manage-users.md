---
id: dedicated-windows-manage-users
title: "Serwer dedykowany: Zarządzanie użytkownikami na Windows Server"
description: "Dowiedz się, jak zarządzać wieloma użytkownikami Windows Server dla bezpiecznego, jednoczesnego dostępu zdalnego i spersonalizowanych środowisk → Sprawdź teraz"
sidebar_label: Dodaj i zarządzaj użytkownikami
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

System Windows ma wbudowane zarządzanie użytkownikami, które pozwala łatwo dodawać i zarządzać dodatkowymi kontami. Korzyści z korzystania z indywidualnych użytkowników to m.in. jednoczesny (do 2) dostęp do pulpitu zdalnego na własnych danych logowania, indywidualny pulpit i dostęp do plików oraz prosty system uprawnień. W tym poradniku pokażemy, jak zarządzać użytkownikami na Twoim serwerze Windows.

## Przygotowanie

Zacznij od połączenia się z serwerem Windows przez RDP. Jeśli potrzebujesz pomocy, zajrzyj do naszego [poradnika Początkowy dostęp (RDP)](dedicated-windows-userdp.md).

:::important Uprawnienia administratora
Upewnij się, że logujesz się jako użytkownik **Administrator** lub inny z uprawnieniami administratora, inaczej nie będziesz mógł zarządzać użytkownikami.
:::

Każdy użytkownik, którego utworzysz na serwerze Windows, będzie mógł korzystać ze swoich danych logowania, aby połączyć się z serwerem przez Pulpit zdalny. Każdy użytkownik ma swój własny pulpit, pliki i programy, niezależne od innych i widoczne tylko dla użytkowników z uprawnieniami administratora. Programy zainstalowane dla wszystkich użytkowników będą dostępne globalnie.

Z standardową licencją Windows Server, **2** konta mogą jednocześnie logować się i korzystać z serwera. Jeśli limit zostanie przekroczony i ktoś nowy się połączy, pierwszy użytkownik zostanie rozłączony na rzecz nowego. Nie ma natomiast limitu na liczbę kont użytkowników, które można utworzyć.

## Dostęp do zarządzania użytkownikami

Zarządzanie kontami użytkowników odbywa się przez ustawienia w Panelu administracyjnym. Zacznij od otwarcia menu start na serwerze Windows i wybierz **Panel administracyjny**. Następnie wybierz opcję **Konta użytkowników**, która przeniesie Cię do podmenu.

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

Ponownie wybierz opcję **Konta użytkowników** w menu, co przeniesie Cię do widoku ogólnego.

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

Na stronie przeglądu wybierz **Zarządzaj innym kontem**, aby przejść do sekcji **Zarządzanie kontami**, służącej głównie do zarządzania użytkownikami.

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

Teraz możesz zarządzać użytkownikami na swoim serwerze Windows — przejdź do jednej z poniższych sekcji, w zależności od tego, co chcesz zrobić.

## Tworzenie nowego użytkownika

Aby rozpocząć tworzenie użytkownika, wybierz opcję **Dodaj konto użytkownika** w sekcji **Zarządzanie kontami**.

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

Pojawi się okno, w którym musisz podać kilka danych konta, w tym nazwę użytkownika, hasło oraz podpowiedź do hasła. Upewnij się, że hasło jest silne, inaczej możesz otrzymać błąd walidacji.

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

Gdy wszystko będzie gotowe, kliknij przycisk dalej, a nowe konto zostanie utworzone.

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

Na koniec musisz dodać nowego użytkownika do listy połączeń pulpitu zdalnego, aby serwer akceptował połączenia RDP z tego konta. Przejdź do **Panelu administracyjnego** i otwórz **System i zabezpieczenia**.

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

Znajdź tam opcję **Zezwalaj na zdalny dostęp** i kliknij ją, co otworzy nowe menu.

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

W menu kliknij **Wybierz użytkowników...** na dole, co pokaże listę aktualnych użytkowników z dostępem do pulpitu zdalnego.

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

W tym oknie kliknij **Dodaj...**, aby otworzyć selektor użytkowników, a następnie wybierz **Zaawansowane...**.

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

Okno się rozszerzy, ułatwiając znalezienie użytkownika. Kliknij **Znajdź teraz**, aby wyświetlić listę użytkowników i znajdź swojego nowego użytkownika, w tym przykładzie to `ZAP-Docs`.

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

Wybierz użytkownika i klikaj **OK**, aż zamkniesz wszystkie okna i potwierdzisz zmiany.

Pomyślnie utworzyłeś nowego użytkownika na serwerze Windows z dostępem do pulpitu zdalnego. Spróbuj połączyć się z serwerem przez RDP, używając danych nowego użytkownika, aby upewnić się, że wszystko działa.

## Zarządzanie użytkownikami

Wszystkimi użytkownikami możesz łatwo zarządzać w sekcji **Zarządzanie kontami**. Wystarczy wybrać użytkownika, którego chcesz edytować.

:::important Uprawnienia administratora
Aby zarządzać użytkownikami, musisz korzystać z głównego konta **Administrator** lub użytkownika z typem konta administratora, który ma wszystkie niezbędne uprawnienia.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

Na stronie użytkownika możesz korzystać z różnych funkcji, takich jak zmiana nazwy użytkownika, hasła, typu konta oraz usuwanie użytkownika.

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)