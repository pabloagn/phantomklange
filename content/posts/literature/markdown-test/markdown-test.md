---
title: "Markdown Test Document"
date: 2025-03-15
draft: false
categories: ["Analysis"]
tags: ["Test", "Markdown", "Formatting"]
math: true
---

# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

## Basic Formatting

This is a paragraph with **bold text**, *italic text*, and ***bold italic text***. 

This text includes `inline code` formatting.

~~This text is strikethrough.~~

> This is a blockquote. It can span multiple lines and can contain *formatting*.
>
> It can also have multiple paragraphs.

## Links

[Link to Google](https://www.google.com)

[Link with title](https://www.google.com "Google's Homepage")

Reference-style link: [Hugo Documentation][hugo-docs]

[hugo-docs]: https://gohugo.io/documentation/ "Hugo Documentation"

## Lists

### Unordered List

* Item 1
* Item 2
  * Nested item 2.1
  * Nested item 2.2
* Item 3

### Ordered List

1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

### Task List

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task

## Code Blocks

```python
def hello_world():
    print("Hello, world!")
    
# This is a comment
for i in range(10):
    hello_world()
```

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
| Cell 7   | Cell 8   | Cell 9   |

## Horizontal Rule

---

## Images

![Alt text for image](https://via.placeholder.com/150 "Title text for image")

## LaTeX Expressions

Inline expression: $E = mc^2$

Display expression:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

$$\int_{a}^{b} f(x) \, dx = F(b) - F(a)$$

## Footnotes

Here is a sentence with a footnote.[^1]

[^1]: This is the footnote content.

## Definition Lists

Term 1
: Definition 1

Term 2
: Definition 2
: Another definition for term 2

## Abbreviations

*[HTML]: Hyper Text Markup Language
*[CSS]: Cascading Style Sheets

This text contains HTML and CSS abbreviations.

## Extended Formatting

Superscript: X^2^

Subscript: H~2~O

==Highlighted text==

## Blockquotes with Attribution

> "The only true wisdom is in knowing you know nothing."
> — Socrates

## Nested Blockquotes

> This is a blockquote
>
> > This is a nested blockquote
> >
> > > This is a double-nested blockquote