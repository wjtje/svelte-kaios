# @skui/style

Common styles used by many components

## Index

- colors
- fonts
- Usage in scss
- Usage in typescript

## Colors

### Grayscale

| Name  |                                                                         | Color   |
| ----- | ----------------------------------------------------------------------- | ------- |
| GS00  | <div style="width: 15px; height:15px; background-color:#ffffff;"></div> | #ffffff |
| GS10  | <div style="width: 15px; height:15px; background-color:#e6e6e6;"></div> | #e6e6e6 |
| GS20  | <div style="width: 15px; height:15px; background-color:#cccccc;"></div> | #cccccc |
| GS45  | <div style="width: 15px; height:15px; background-color:#8c8c8c;"></div> | #8c8c8c |
| GS70  | <div style="width: 15px; height:15px; background-color:#6a6a6a;"></div> | #6a6a6a |
| GS90  | <div style="width: 15px; height:15px; background-color:#323232;"></div> | #323232 |
| GS100 | <div style="width: 15px; height:15px; background-color:#000000;"></div> | #000000 |

### Primary

| Name   |                                                                         | Color   |
| ------ | ----------------------------------------------------------------------- | ------- |
| PURPLE | <div style="width: 15px; height:15px; background-color:#8000ff;"></div> | #8000ff |
| PINK   | <div style="width: 15px; height:15px; background-color:#e60060;"></div> | #e60060 |
| LIME   | <div style="width: 15px; height:15px; background-color:#00bf60;"></div> | #00bf60 |
| CYAN   | <div style="width: 15px; height:15px; background-color:#1cc1c4;"></div> | #1cc1c4 |
| BLUE   | <div style="width: 15px; height:15px; background-color:#0073e6;"></div> | #0073e6 |
| ORANGE | <div style="width: 15px; height:15px; background-color:#ff4f1a;"></div> | #ff4f1a |
| RED    | <div style="width: 15px; height:15px; background-color:#d90036;"></div> | #d90036 |

### Mid-dark colors

| Name            |                                                                         | Color   |
| --------------- | ----------------------------------------------------------------------- | ------- |
| MID_DARK_PURPLE | <div style="width: 15px; height:15px; background-color:#5900b3;"></div> | #5900b3 |
| MID_DARK_PINK   | <div style="width: 15px; height:15px; background-color:#990040;"></div> | #990040 |
| MID_DARK_LIME   | <div style="width: 15px; height:15px; background-color:#007339;"></div> | #007339 |
| MID_DARK_CYAN   | <div style="width: 15px; height:15px; background-color:#08888a;"></div> | #08888a |
| MID_DARK_BLUE   | <div style="width: 15px; height:15px; background-color:#004d99;"></div> | #004d99 |
| MID_DARK_ORANGE | <div style="width: 15px; height:15px; background-color:#a72600;"></div> | #a72600 |
| MID_DARK_RED    | <div style="width: 15px; height:15px; background-color:#b4002d;"></div> | #b4002d |

### Dark color

| Name        |                                                                         | Color   |
| ----------- | ----------------------------------------------------------------------- | ------- |
| DARK_PURPLE | <div style="width: 15px; height:15px; background-color:#2a0361;"></div> | #2a0361 |
| DARK_PINK   | <div style="width: 15px; height:15px; background-color:#3d041c;"></div> | #3d041c |
| DARK_LIME   | <div style="width: 15px; height:15px; background-color:#00462c;"></div> | #00462c |
| DARK_CYAN   | <div style="width: 15px; height:15px; background-color:#045463;"></div> | #045463 |
| DARK_BLUE   | <div style="width: 15px; height:15px; background-color:#012b68;"></div> | #012b68 |
| DARK_ORANGE | <div style="width: 15px; height:15px; background-color:#36150c;"></div> | #36150c |
| DARK_RED    | <div style="width: 15px; height:15px; background-color:#530015;"></div> | #530015 |

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
