# @skui/style

Common styles used by many components

## Index

- [colors](#colors)
- [fonts](#fonts)
- [Usage in scss](#usage-in-scss)
- [Usage in typescript](#usage-in-typescript)

## Colors

### Grayscale

| Name  |                                                                 | Color   |
| ----- | --------------------------------------------------------------- | ------- |
| GS00  | ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) | #ffffff |
| GS10  | ![#e6e6e6](https://via.placeholder.com/15/e6e6e6/000000?text=+) | #e6e6e6 |
| GS20  | ![#cccccc](https://via.placeholder.com/15/cccccc/000000?text=+) | #cccccc |
| GS45  | ![#8c8c8c](https://via.placeholder.com/15/8c8c8c/000000?text=+) | #8c8c8c |
| GS70  | ![#6a6a6a](https://via.placeholder.com/15/6a6a6a/000000?text=+) | #6a6a6a |
| GS90  | ![#323232](https://via.placeholder.com/15/323232/000000?text=+) | #323232 |
| GS100 | ![#000000](https://via.placeholder.com/15/000000/000000?text=+) | #000000 |

### Primary

| Name   |                                                                 | Color   |
| ------ | --------------------------------------------------------------- | ------- |
| PURPLE | ![#8000ff](https://via.placeholder.com/15/8000ff/000000?text=+) | #8000ff |
| PINK   | ![#e60060](https://via.placeholder.com/15/e60060/000000?text=+) | #e60060 |
| LIME   | ![#00bf60](https://via.placeholder.com/15/00bf60/000000?text=+) | #00bf60 |
| CYAN   | ![#1cc1c4](https://via.placeholder.com/15/1cc1c4/000000?text=+) | #1cc1c4 |
| BLUE   | ![#0073e6](https://via.placeholder.com/15/0073e6/000000?text=+) | #0073e6 |
| ORANGE | ![#ff4f1a](https://via.placeholder.com/15/ff4f1a/000000?text=+) | #ff4f1a |
| RED    | ![#d90036](https://via.placeholder.com/15/d90036/000000?text=+) | #d90036 |

### Mid-dark colors

| Name            |                                                                 | Color   |
| --------------- | --------------------------------------------------------------- | ------- |
| MID_DARK_PURPLE | ![#5900b3](https://via.placeholder.com/15/5900b3/000000?text=+) | #5900b3 |
| MID_DARK_PINK   | ![#990040](https://via.placeholder.com/15/990040/000000?text=+) | #990040 |
| MID_DARK_LIME   | ![#007339](https://via.placeholder.com/15/007339/000000?text=+) | #007339 |
| MID_DARK_CYAN   | ![#08888a](https://via.placeholder.com/15/08888a/000000?text=+) | #08888a |
| MID_DARK_BLUE   | ![#004d99](https://via.placeholder.com/15/004d99/000000?text=+) | #004d99 |
| MID_DARK_ORANGE | ![#a72600](https://via.placeholder.com/15/a72600/000000?text=+) | #a72600 |
| MID_DARK_RED    | ![#b4002d](https://via.placeholder.com/15/b4002d/000000?text=+) | #b4002d |

### Dark color

| Name        |                                                                 | Color   |
| ----------- | --------------------------------------------------------------- | ------- |
| DARK_PURPLE | ![#2a0361](https://via.placeholder.com/15/2a0361/000000?text=+) | #2a0361 |
| DARK_PINK   | ![#3d041c](https://via.placeholder.com/15/3d041c/000000?text=+) | #3d041c |
| DARK_LIME   | ![#00462c](https://via.placeholder.com/15/00462c/000000?text=+) | #00462c |
| DARK_CYAN   | ![#045463](https://via.placeholder.com/15/045463/000000?text=+) | #045463 |
| DARK_BLUE   | ![#012b68](https://via.placeholder.com/15/012b68/000000?text=+) | #012b68 |
| DARK_ORANGE | ![#36150c](https://via.placeholder.com/15/36150c/000000?text=+) | #36150c |
| DARK_RED    | ![#530015](https://via.placeholder.com/15/530015/000000?text=+) | #530015 |

## Fonts

| Name | Font-Size | Font-Weight | Color | Text-decoration-line |
| ---- | --------- | ----------- | ----- | -------------------- |
| H1   | 17px      | normal      | GS90  | none                 |
| H2   | 17px      | 600         | GS90  | none                 |
| H3   | 14px      | normal      | GS90  | none                 |
| H4   | 14px      | 600         | GS70  | none                 |
| H5   | 14px      | 600         | GS90  | none                 |
| PRI  | 17px      | normal      | GS90  | none                 |
| SEC  | 14px      | normal      | GS70  | none                 |
| THI  | 12px      | normal      | GS70  | none                 |
| LINK | 17px      | bold        | GS90  | underline            |
| BTN  | 17px      | normal      | GS90  | none                 |

## Usage in scss

```scss
@import "node_modules/@skui/style/functions";

H2 {
  @include KaiOS_font(H4);
  color: KaiOS_color(ORANGE);
}
```

## Usage in typescript

```typescript
import type { KaiOS_color } from "@skui/types";
import { ORANGE } from "@skui/style";

const custom_color: KaiOS_color = ORANGE;
```

## License

MIT License

Copyright (c) 2021 Wouter van der Wal
