---
title: "{{ replace .Name "-" " " | title }}" # Name of the scent
date: {{ .Date }}
draft: true
type: "scent"
scent_id: "{{ .Name | urlize }}" # Unique ID for image folder
house: "" # Perfume House / Brand
perfumer: "" # Link to a person entry title (optional)
launch_date: "" # YYYY
concentration: "" # e.g., "Eau de Parfum", "Extrait"
notes_top: []
notes_middle: []
notes_base: []
genre: "" # e.g., "Floral", "Oriental", "Chypre"
---

## Description / Impression

(Content about the scent)