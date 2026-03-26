# Jak zostać administratorem FiveM z txAdmin

## Wprowadzenie  
W tym poradniku dowiesz się, jak zostać administratorem na serwerze FiveM korzystając z txAdmin. Przeprowadzimy Cię przez niezbędne kroki, aby ustawić uprawnienia admina przez interfejs txAdmin.

## Wymagania  
- Dostęp do Twojego serwera FiveM przez panel ZAP-Hosting lub stronę www  
- txAdmin musi być zainstalowany i uruchomiony na Twoim serwerze FiveM  
- Podstawowa znajomość zarządzania serwerem FiveM  

## Poradnik krok po kroku

### 1. Wejdź do panelu txAdmin  
1. Zaloguj się na swoje konto ZAP-Hosting.  
2. Przejdź do panelu głównego swojego serwera FiveM.  
3. Kliknij przycisk **Open txAdmin**, aby uruchomić interfejs txAdmin.  
   
   ![Open txAdmin](img/fivem-admin-txadmin/open-txadmin.png)  

### 2. Zaloguj się do txAdmin  
1. Jeśli to Twój pierwszy raz w txAdmin, zostaniesz poproszony o utworzenie konta administratora.  
2. Wpisz wybraną nazwę użytkownika i hasło, a następnie zapisz.  
3. Jeśli masz już konto, po prostu wpisz swoje dane logowania.  

### 3. Dodaj swoje uprawnienia administratora  
1. W panelu txAdmin przejdź do zakładki **Players**.  
2. Znajdź siebie, wyszukując po Steam ID lub nicku w grze.  
3. Kliknij przycisk **Manage** obok swojego wpisu.  
4. W sekcji uprawnień przypisz sobie rolę **admin** lub inne potrzebne uprawnienia.  
   
   ![Assign Admin Role](img/fivem-admin-txadmin/assign-admin-role.png)  

### 4. Skonfiguruj uprawnienia (opcjonalnie)  
1. Przejdź do zakładki **Settings** w txAdmin.  
2. Wybierz **Permissions**, aby doprecyzować konkretne komendy i przywileje dla adminów.  
3. Dostosuj według potrzeb i zapisz zmiany.  

### 5. Zapisz i zrestartuj serwer  
1. Po przypisaniu uprawnień wróć do zakładki **Dashboard**.  
2. Kliknij **Restart Server**, aby zastosować zmiany.  
   
   ```bash
   # Alternatywnie możesz zrestartować serwer przez panel ZAP-Hosting:
   # 1. Przejdź do panelu głównego serwera
   # 2. Kliknij "Restart"
   ```  

### 6. Sprawdź swój status admina w grze  
1. Dołącz do swojego serwera FiveM.  
2. Otwórz konsolę w grze (zazwyczaj klawisz F8).  
3. Przetestuj komendy admina, np.:  
   
   ```plaintext
   /admin
   /kick [playerID]
   /ban [playerID]
   ```  
   
4. Jeśli komendy działają, masz uprawnienia administratora.  

> **Uwaga:** Jeśli napotkasz problemy, sprawdź dokładnie swoje Steam ID oraz ustawienia whitelisty w txAdmin.

## Podsumowanie  
Wykonując powyższe kroki, skutecznie ustawiłeś się jako administrator na swoim serwerze FiveM z txAdmin. Teraz możesz efektywnie zarządzać serwerem z uprawnieniami admina.