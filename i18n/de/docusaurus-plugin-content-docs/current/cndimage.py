import os
import re
import webbrowser

def read_file_with_different_encodings(file_path, encodings=['utf-8', 'latin-1', 'cp1252']):
    """
    Versucht eine Datei mit verschiedenen Kodierungen zu lesen, bis es erfolgreich ist.
    """
    for encoding in encodings:
        try:
            with open(file_path, 'r', encoding=encoding) as file:
                print(f"[DEBUG] Datei erfolgreich gelesen mit Kodierung: {encoding}")
                return file.read()
        except UnicodeDecodeError:
            print(f"[DEBUG] UnicodeDecodeError mit Kodierung: {encoding} für Datei: {file_path}")
            continue
    print(f"[ERROR] Keine der Kodierungen konnte die Datei {file_path} erfolgreich lesen.")
    raise UnicodeDecodeError(f'Keine der Kodierungen konnte die Datei {file_path} erfolgreich lesen.')

def find_cdn_cloudflare_links_in_markdown(directory):
    cdn_links = []
    # Regex, um Links zu `cdn.cloudflare.steamstatic.com` zu finden
    cdn_pattern = re.compile(r'!\[.*?\]\((https://cdn\.cloudflare\.steamstatic\.com/steam/apps/\d+/.*?\.(jpg|png|gif).*?)\)')
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                print(f"[INFO] Verarbeite Datei: {file_path}")
                try:
                    content = read_file_with_different_encodings(file_path)
                    matches = cdn_pattern.findall(content)
                    if matches:
                        print(f"[INFO] {len(matches)} CDN-Link(s) in Datei gefunden: {file_path}")
                        # `findall` gibt eine Liste von Tuples zurück, wir brauchen nur den ersten Teil (den Link)
                        cdn_links.extend([match[0] for match in matches])
                    else:
                        print(f"[INFO] Keine CDN-Links in Datei gefunden: {file_path}")
                except UnicodeDecodeError:
                    print(f"[WARNUNG] Datei {file_path} konnte nicht gelesen werden.")
    
    print(f"[INFO] Insgesamt {len(cdn_links)} CDN-Links gefunden.")
    return cdn_links

def open_links_in_browser(links):
    for link in links:
        print(f"[INFO] Öffne Link im Browser: {link}")
        webbrowser.open(link)

if __name__ == "__main__":
    # Verwende das aktuelle Verzeichnis, in dem das Skript ausgeführt wird
    directory = os.getcwd()
    print(f"[INFO] Durchsuche das Verzeichnis: {directory}")
    
    # Finde alle CDN-Links in den Markdown-Dateien
    cdn_links = find_cdn_cloudflare_links_in_markdown(directory)
    
    # Öffne alle gefundenen CDN-Links im Browser
    open_links_in_browser(cdn_links)
