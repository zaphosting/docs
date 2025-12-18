---
id: vserver-ssh-default
title: "VPS: Zarządzanie domyślnymi kluczami SSH w profilu"
description: "Dowiedz się, jak zautomatyzować konfigurację kluczy SSH dla szybszego dostępu do serwera i uproszczonej instalacji produktów z ZAP-Hosting → Sprawdź teraz"
sidebar_label: Domyślne klucze SSH
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Jedną z naszych najnowszych funkcji w panelu ZAP-Hosting jest możliwość dodania domyślnych kluczy SSH do Twojego konta przez stronę internetową. Super korzyść jest taka, że klucze SSH ustawione na stronie profilu zostaną automatycznie skonfigurowane i użyte podczas pierwszej konfiguracji produktu lub reinstalacji systemu operacyjnego. Oszczędza to Twój czas, bo nie musisz ręcznie ustawiać kluczy SSH.

<InlineVoucher />

## Wymagania
Aby skorzystać z tej funkcji, musisz mieć wygenerowany klucz SSH. Jeśli masz już klucz SSH, możesz przejść do następnej sekcji.

Aby wygenerować klucz SSH, polecamy przejść do sekcji **Informacje->Dostęp i bezpieczeństwo** w panelu Twojego vServera.

![](https://screensaver01.zap-hosting.com/index.php/s/N9FxTpdfibwCWSD/preview)

Znajdziesz tam zielony przycisk **Generuj klucz SSH**. Po kliknięciu tego przycisku Twój prywatny klucz SSH zostanie automatycznie pobrany na Twój komputer. To właśnie ten klucz będziesz używać do łączenia się z serwerem po skonfigurowaniu SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/tdYfxJYNBFC2R9k/preview)

Teraz powinieneś zapisać klucz publiczny, który pojawi się w okienku, ponieważ to właśnie ten klucz będziesz musiał dodać podczas tworzenia klucza SSH w swoim profilu.

![](https://screensaver01.zap-hosting.com/index.php/s/Tc9MEGamAC9dDF3/preview)

Przejdź do następnej sekcji, gdy będziesz gotowy.

## Zarządzanie kluczami SSH w profilu
Zarządzanie domyślnymi kluczami SSH na Twoim koncie jest proste. Przejdź do **[strony profilu ZAP-Hosting](https://zap-hosting.com/en/customer/home/profile/)** i przewiń w dół do sekcji **Standardowe klucze SSH**.

![](https://screensaver01.zap-hosting.com/index.php/s/QzefcYZWPGz3rJr/preview)

### Dodawanie nowego klucza
Aby dodać klucz, najpierw kliknij zieloną ikonę plusa, aby otworzyć okienko tworzenia. W tym okienku najpierw wybierz odpowiednią nazwę, którą chcesz nadać swojemu kluczowi SSH.

Następnie wklej swój publiczny klucz SSH w drugie pole. Twój klucz SSH powinien być w formacie OpenSSH, zaczynającym się od `ssh-rsa` i kończącym na sufiks. Gdy wszystko jest gotowe, kliknij zielony przycisk **Zapisz**, aby dodać klucz.

![](https://screensaver01.zap-hosting.com/index.php/s/CBTcDSiBLfNYi2R/preview)

:::tip
Upewnij się, że dodajesz **publiczny klucz SSH**, a nie prywatny. Prywatny klucz SSH służy do logowania i uwierzytelniania za pomocą klucza publicznego.
:::

Pomyślnie dodałeś domyślny klucz SSH do swojego konta ZAP-Hosting.

### Edytowanie lub usuwanie klucza
Aby edytować klucz, po prostu kliknij niebieską ikonę oka, która otworzy okienko podglądu. W tym okienku możesz zobaczyć aktualne dane i bezpośrednio je edytować oraz zapisać.

Podobnie, aby usunąć klucz, kliknij czerwoną ikonę kosza, która usunie wybrany klucz.

![](https://screensaver01.zap-hosting.com/index.php/s/56mPcDswpZBaHms/preview)

<InlineVoucher />