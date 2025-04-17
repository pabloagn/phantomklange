---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }} # Date the entry was created, or the painting's date? Decide convention.
draft: true
type: "painting"
painting_id: "{{ .Name | urlize }}" # Unique ID for image folder
artist: "" # Link to a person entry title
creation_date: "" # YYYY, or "c. YYYY" for circa
medium: "" # e.g., "Oil on canvas"
dimensions: "" # e.g., "100 x 150 cm"
location: "" # e.g., "Museum Name, City"
period: "" # e.g., "Renaissance", "Impressionism"
genre: "" # e.g., "Portrait", "Landscape"
---

## Description / Analysis

(Content about the painting)