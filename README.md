## Suggest - highlight

Утилитa для выделения текста в компонентах autosuggest и autocomplete.

<a name="installation"></a>
### Installation

```bash
npm 
```
<a name="api"></a>
### API

 Function | Description |
| :--- | :--- |
| [`match(text, query)`](#match) | Подсчитывает символы, которые нужно подсветить в `text` основываясь на `query`. |
| [`parse(text, matches)`](#parse) | Разбивает поданный на обработку `text` на части, используя `matches`. |

<a name="match"></a>
#### match(text, query)
Подсчитывает символы, которые нужно подсветить в `text` основываясь на `query`.

Возвращает массив пар. Каждя пара `[a, b]` означает, что `text.slice(a, b)` должна быть подсвечена.

Например:
```ts
import {matches} from "src/matches";

const matchesInText = matches('Some Text', 't'); // [[5, 6], [8, 9]]

```

<a name="parse"></a>
#### parse(text, matches)

Разбивает данный текст на части на основе совпадений.

Он возвращает массив текстовых частей, указывая, должна ли каждая часть быть выделена или нет.

Например:
````ts
import {parse} from "src/parse";

// text indices:     01234567890
// highlighting:       vvvvvv
const parts = parse('Hello world', [[2, 4], [4, 8]]);
/*
  [
    {
        text: 'He',
        highlight: false
    },
    {
        text: 'll',
        highlight: true
    },
    {
        text: 'o wo',
        highlight: true
    },
    {
        text: 'rld',
        highlight: false
    }
  ]
*/
````