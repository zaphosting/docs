#!/bin/bash

# Überprüft, ob zwei Argumente übergeben wurden
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <pattern> <new-title-prefix>"
  exit 1
fi

id_pattern=$1
new_prefix=$2

# Durchsucht alle Markdown-Dateien im aktuellen Verzeichnis
for file in *.md; do
  # Überprüft, ob die Datei die spezifische ID mit dem Muster enthält
  if grep -q "id: $id_pattern" "$file"; then
    # Liest die aktuelle Titelzeile
    title_line=$(grep '^title:' "$file")
    # Entfernt den Prefix "title: " für die Verarbeitung
    current_title=${title_line#title: }
    
    # Überprüft, ob der neue Prefix bereits im Titel steht, um Doppelungen zu vermeiden
    if [[ $current_title != $new_prefix* ]]; then
      # Setzt den neuen Titel zusammen und fügt ihn in die Datei ein
      new_title="title: $new_prefix $current_title"
      # Ersetzt die alte Titelzeile mit der neuen Titelzeile
      sed -i "s|^title:.*|$new_title|" "$file"
    fi
  fi
done