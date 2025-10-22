---
id: vserver-windows-userdp
title: "VPS: Dostęp do Windows Server przez Pulpit Zdalny (RDP)"
description: "Dowiedz się, jak bezpiecznie połączyć się z serwerem Windows zdalnie za pomocą RDP i łatwo zarządzać dostępem → Sprawdź teraz"
sidebar_label: Pierwszy dostęp (RDP)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

System Windows korzysta z protokołu Pulpitu Zdalnego (RDP), który ułatwia zdalne łączenie się z innymi systemami Windows. W tym poradniku przejdziemy przez prosty proces połączenia się z Twoim serwerem Windows za pomocą RDP.

<InlineVoucher />

## Przygotowanie danych do połączenia

Niezależnie od aplikacji, której użyjesz do dostępu do serwera Windows, zawsze będziesz musiał podać dane uwierzytelniające, aby połączyć się z serwerem.

Zacznij od zalogowania się do panelu administracyjnego swojego serwera i przejdź do sekcji **Dostęp i bezpieczeństwo**. Na tej stronie znajdziesz wszystkie niezbędne informacje, głównie **adres IP** serwera oraz dane do logowania. Twoje dane użytkownika to pole **Nazwa użytkownika**, które powinno być `Administrator`, oraz pole **Hasło**.

Jeśli serwer jest nowy, na tej stronie pojawi się okienko z losowo wygenerowanym hasłem startowym. W przeciwnym razie hasło jest ukryte ze względów bezpieczeństwa, ale jeśli zapomnisz hasło, możesz je w każdej chwili wygenerować lub ustawić nowe na tej samej stronie.

![](https://screensaver01.zap-hosting.com/index.php/s/amLy6sC6XzBN5fQ/preview)

Gdy masz już dane do połączenia, przejdź do kolejnej sekcji, aby wybrać odpowiednią aplikację do połączenia.

## Łączenie się przez Windows

Od momentu powstania RDP, system Windows ma wbudowaną aplikację **Połączenie pulpitu zdalnego** jako podstawowy program systemowy. Możesz ją łatwo znaleźć, wpisując jej nazwę w pasku wyszukiwania Windows lub naciskając klawisz Windows/ikonę i korzystając z wyszukiwarki w menu start.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

W nowym oknie wpisz w polu **Komputer** adres IP swojego serwera i kliknij **Połącz**. Powinno pojawić się natywne okno logowania Windows, gdzie wpisz **Nazwa użytkownika** jako `Administrator` oraz **Hasło** – hasło do Twojego serwera Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Kliknij **OK** i powinieneś połączyć się zdalnie ze swoim serwerem Windows. Jeśli masz problemy, sprawdź jeszcze raz, czy dane logowania są poprawne.

:::info
Przy pierwszym połączeniu może pojawić się błąd certyfikatu. To normalne i możesz go bezpiecznie zignorować.
:::

Gratulacje, pomyślnie połączyłeś się z serwerem Windows.

## Inne aplikacje do zdalnego połączenia (RDP)

### Aplikacje desktopowe

Poniższe programy to świetne alternatywy do łączenia się z serwerem Windows przez protokół Pulpitu Zdalnego (RDP). Gorąco polecamy korzystanie z wbudowanej aplikacji, jeśli łączysz się z Windows (jak w poprzednim kroku), bo jest to najprostsze i działa bez zarzutu.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Aplikacje na urządzenia mobilne

Microsoft oferuje oficjalną aplikację Remote Desktop (RDP) na oba główne systemy mobilne. Polecamy korzystać z nich na telefonach i tabletach, bo mają sporo przydatnych funkcji.

Aplikację znajdziesz tutaj, odpowiednio do platformy: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) oraz [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)

<InlineVoucher />