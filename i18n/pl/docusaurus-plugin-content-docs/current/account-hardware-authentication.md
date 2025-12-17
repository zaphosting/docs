---
id: account-hardware-authentication
title: "Uwierzytelnianie sprzętowe (Passkey)"
description: "Dowiedz się, jak zwiększyć bezpieczeństwo swojego konta dzięki passkey i skutecznie chronić swoje dane osobowe → Sprawdź teraz"
sidebar_label: Uwierzytelnianie sprzętowe
---

import SearchableAccordion from '@site/src/components/SearchableAccordion/SearchableAccordion';
import items from '@site/data/faqs/account-hardware-authentication.json';

## Wprowadzenie

Uwierzytelnianie sprzętowe za pomocą Passkey to nowoczesna i odporna na phishing metoda zabezpieczania konta użytkownika. Zamiast tradycyjnego hasła, używana jest para kluczy kryptograficznych. Klucz prywatny jest bezpiecznie przechowywany na Twoim urządzeniu i nigdy z niego nie wychodzi. Uwierzytelnianie odbywa się lokalnie, wykorzystując weryfikację biometryczną, taką jak odcisk palca czy rozpoznawanie twarzy, lub alternatywnie PIN urządzenia.

## Wymagania

Aby korzystać z uwierzytelniania sprzętowego z Passkey, Twoja konfiguracja musi spełniać określone wymagania. Potrzebujesz kompatybilnego urządzenia, takiego jak smartfon, tablet lub komputer. System operacyjny i przeglądarka muszą obsługiwać Passkey lub WebAuthn. Na urządzeniu musi być skonfigurowana blokada ekranu, np. odcisk palca, Face ID lub lokalny PIN.

## Włącz uwierzytelnianie

Aby włączyć uwierzytelnianie sprzętowe, otwórz ustawienia profilu w panelu klienta i przejdź do sekcji Bezpieczeństwo (Ustawienia profilu → Bezpieczeństwo). W tym miejscu możesz skonfigurować opcje zabezpieczeń dla swojego konta. Wybierz Uwierzytelnianie sprzętowe, aby rozpocząć konfigurację.

Po wybraniu tej opcji otworzy się okno popup. W tym oknie kliknij przycisk Dodaj autoryzator, aby rozpocząć proces konfiguracji.

![img](https://screensaver01.zap-hosting.com/index.php/s/oSEpGD5emG9ToxW/download)

Konfiguracja będzie kontynuowana przez utworzenie logowania Passkey dla ZAP-Hosting. Podczas tego kroku zostaniesz poproszony o zdefiniowanie PIN-u odzyskiwania. Ten PIN jest potrzebny, aby odzyskać dostęp, gdy podstawowa metoda uwierzytelniania będzie tymczasowo niedostępna i powinien być przechowywany w bezpiecznym miejscu.

![img](https://screensaver01.zap-hosting.com/index.php/s/tiPnCDTAkieNHNP/download)

Po potwierdzeniu tych kroków i pomyślnym skonfigurowaniu uwierzytelniania sprzętowego przez Passkey, nastąpi automatyczne wylogowanie. To normalny środek bezpieczeństwa, który zapewnia prawidłowe zastosowanie nowo skonfigurowanej metody uwierzytelniania.

Przy następnym logowaniu, po wpisaniu nazwy użytkownika i hasła, zobaczysz opcję Uwierzytelnianie sprzętowe. Wybierz ją i potwierdź żądanie uwierzytelnienia na swoim urządzeniu, aby zakończyć proces logowania.

![img](https://screensaver01.zap-hosting.com/index.php/s/FEpZkCCLmi9FmLw/download)

## Wyłącz uwierzytelnianie

Aby wyłączyć uwierzytelnianie dwuskładnikowe, przejdź do **Ustawienia profilu → Bezpieczeństwo**. Jeśli użytkownik nadal może się zalogować, skonfigurowany autoryzator można w każdej chwili usunąć z ustawień bezpieczeństwa.

![img](https://screensaver01.zap-hosting.com/index.php/s/Htb3Td7NfbQeCg3/preview)

## Najczęściej zadawane pytania

Jeśli nadal masz wątpliwości co do korzystania z uwierzytelniania sprzętowego lub pytania dotyczące jego wpływu na Twoje konto, poniższe informacje pomogą rozwiać najczęstsze obawy i wyjaśnią, jak ta funkcja działa w praktyce na ZAP-Hosting.

<SearchableAccordion items={items} locale="en" />