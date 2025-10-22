---
id: abuse-report
title: "Zgłoś nadużycie i nielegalne treści – wszystko, co musisz wiedzieć!"
description: "Dowiedz się, jak rozpoznawać i zgłaszać nadużycia online, aby skutecznie chronić użytkowników i usługi → Sprawdź teraz"
sidebar_label: Zgłoś Nadużycie
---

## Wprowadzenie

Internet daje wiele możliwości. Nadużycia szkodzą użytkownikom i usługom. Naszym celem jest szybkie wykrywanie i zatrzymywanie incydentów. Możesz zgłosić podejrzenie nadużycia do naszego Zespołu ds. Nadużyć. Każde zgłoszenie jest przez nas analizowane, dowody są zabezpieczane, działamy zgodnie z obowiązującym prawem i naszymi zasadami, a w razie potrzeby powiadamiamy odpowiednie organy.

## Rodzaje nadużyć

Nadużycia mogą przybierać różne formy. Zgłoś każdy przypadek, który pasuje lub jest bliski poniższym kategoriom:

<details>
  <summary>Spam</summary>

Niechciane lub masowe wiadomości wysyłane przez nasze systemy lub hostowane treści, które wywołują filtry antyspamowe. Warianty to spam e-mailowy, spam w komentarzach, spam SEO, automatyczne tworzenie kont. Podaj przykładowe wiadomości, nagłówki, adresy IP nadawców i wzorce wysyłki.

</details>

<details>
  <summary>Ataki i DDoS</summary>

Wrogie ruchy mające na celu zakłócenie usług lub sondowanie systemów. Typowe formy to wolumetryczne ataki L3 L4, ataki HTTP warstwy 7, amplifikacja, próby brutalnego logowania oraz agresywne skanowanie portów. Wskaźniki to nagłe skoki PPS lub Mbps, podwyższone wskaźniki 4xx i 5xx oraz powtarzające się błędy uwierzytelniania z rotujących źródeł.

</details>

<details>
  <summary>Naruszenia praw autorskich i znaków towarowych</summary>

Nieautoryzowane rozpowszechnianie chronionych dzieł lub niewłaściwe użycie zarejestrowanych znaków. Warianty to pirackie kopie, cracki, podszywanie się pod markę oraz mylące domeny. Podaj dzieło, właściciela praw, dokładną lokalizację i status autoryzacji.

</details>

<details>
  <summary>Phishing</summary>

Treści mające na celu wyłudzenie danych logowania lub płatności przez podszywanie się pod zaufane marki. Warianty to fałszywe portale logowania, oszustwa fakturowe, pułapki QR lub załączniki oraz zmęczenie MFA. Określ markę docelową, miejsca przechwytywania danych i różnice względem oryginalnej strony.

</details>

<details>
  <summary>RODO (GDPR)</summary>

Nieautoryzowane przetwarzanie, ujawnienie lub wyciek danych osobowych. Typowe przypadki to otwarte indeksy, błędnie skonfigurowane zasoby, scrapowanie bez podstawy prawnej oraz publiczne logi. Opisz kategorie danych, zakres, osoby dotknięte i przyczynę wycieku.

</details>

<details>
  <summary>CSAM/SAM</summary>

Wszelkie materiały przedstawiające seksualne wykorzystywanie ludzi. Zero tolerancji.

</details>

<details>
  <summary>Nielegalne treści</summary>

Treści łamiące obowiązujące prawo, takie jak propaganda ekstremistyczna, groźby, mowa nienawiści, nawoływanie do przemocy czy zniesławienie. Warianty to doxxing, jawne groźby i materiały zakazane przez prawo. Podaj dokładną lokalizację i, jeśli znane, podstawę prawną.

</details>

<details>
  <summary>Inne</summary>

Nadużycia, które nie pasują do powyższych kategorii, ale nadal szkodzą użytkownikom lub systemom. Przykłady to hosting malware, botnet C2, oszustwa i nieautoryzowany cryptomining. Podaj hashe, URL-e, wzorce C2 i anomalie w wykorzystaniu zasobów.

</details>

## Wymagane informacje

Aby zgłoszenie było kompletne i możliwe do działania, podaj szczegółowe dane pozwalające zidentyfikować zasób, zweryfikować incydent i podjąć odpowiednie kroki, w tym:
- Lokalizacja: URL, adres IP, port, nazwa hosta, ścieżka pliku, hash
- Znaczniki czasowe w UTC w formacie RRRR-MM-DDTHH:MM:SSZ
- Opis: co się stało, jak wykryto, zaobserwowany wpływ
- Dowody: zrzuty ekranu, logi tekstowe, pełne e-maile z nagłówkami w formacie EML, krótkie PCAP, NetFlow, nagłówki HTTP

## Akceptowane pliki i sposób dostarczenia

Dostarczaj dowody w czytelnych formatach i tak, abyśmy mogli je bezproblemowo otworzyć. Mniejsze pliki dołączaj do maila, większe hostuj zewnętrznie. Załączaj małe i średnie pliki bezpośrednio. Preferuj otwarte, niezmienione formaty. Surowy tekst jest lepszy niż zrzuty ekranu tekstu.

Dla dużych plików podaj stabilny link do pobrania, który nie wymaga interakcji lub zawiera jasne dane dostępowe. Podaj czas ważności linku. Dodaj sumy kontrolne do weryfikacji integralności.

Używaj standardowych formatów takich jak TXT, PDF, PNG, JPG, PCAP lub PCAPNG, EML, HAR, CSV i JSON. Nie dołączaj haseł, kluczy prywatnych ani pełnych danych osobowych, chyba że jest to absolutnie konieczne.

Dla jakości przesyłaj e-maile jako EML z pełnymi nagłówkami, logi jako czysty tekst, zrzuty ruchu sieciowego jako krótkie i istotne PCAP lub PCAPNG, a zrzuty ekranu w oryginalnej rozdzielczości.

Dla bezpieczeństwa usuń wszelkie dane poufne; jeśli trzeba, umieść pliki w archiwum chronionym hasłem i podaj hasło osobno. W przypadku CSAM/SAM nie przesyłaj plików, podaj tylko linki.

## Skontaktuj się z nami

Wyślij zgłoszenie na adres `abuse@zap-hosting.com`. Ważne jest, aby temat maila był jasny, np. `Zgłoszenie Nadużycia Phishing` lub `Zgłoszenie Nadużycia DDoS`. Wysyłaj jeden mail na incydent. Poniżej przykład kompletnego zgłoszenia:

```
Do: abuse@zap-hosting.com
Temat: Zgłoszenie Nadużycia Brute Force (SSH)

Lokalizacja:
- Adres IP celu: XXX.XX.XXX.XX
- Usługa: SSH
- Port: 22
- Nazwa hosta: v12345.zap-hosting.com

Znaczniki czasowe (UTC):
- Pierwsze wykrycie: 2025-08-23T09:12:04Z
- Ostatnie wykrycie: 2025-08-23T10:03:31Z

Opis:
"Powtarzające się próby logowania SSH z rotującymi nazwami użytkowników i adresami IP. Wykryte na podstawie anomalii w auth.log i podwyższonego tempa połączeń. Po wykryciu wyłączono uwierzytelnianie hasłem. Nie zaobserwowano udanego logowania."

Dowody:
- fragment auth.log z wieloma wpisami "Failed password" i "Invalid user"
- fragment logu fail2ban pokazujący blokady i adresy źródłowe
- 60-sekundowy PCAP z próbami TCP na port 22
- Zestawienie: 12 438 prób z 352 adresów IP
- Najczęstsze źródła z informacjami ASN

Przykładowy fragment logu:
2025-08-23T09:55:17Z sshd[2173]: Failed password for invalid user admin from XXX.X.XXX.XX port XXXX ssh2
2025-08-23T09:55:18Z sshd[2173]: Failed password for root from XXX.X.XX
```

## Co dalej?

Nasz Zespół ds. Nadużyć przetwarza Twoje zgłoszenie najszybciej, jak to możliwe i odpowiada szybko. Analizujemy incydent i nadajemy mu priorytet według stopnia zagrożenia.

Na podstawie analizy podejmujemy działania, takie jak powiadomienie klienta, tymczasowe lub stałe zawieszenie, usunięcie zgłoszonych treści, zabezpieczenie dowodów oraz powiadomienie odpowiednich organów, jeśli jest to konieczne.