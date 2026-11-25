[![make.fun](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb.svg)](https://make.fun/c/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Rank](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/qaxgg895/fridge-roast-one-line/rank.svg)](https://make.fun/c/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Reward](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/qaxgg895/fridge-roast-one-line/reward.svg)](https://make.fun/c/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)

# Fridge Roast: One Line, Biggest Laugh

Entry for the [Fridge Roast: One Line, Biggest Laugh](https://make.fun/c/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb) competition on [make.fun](https://make.fun).

## What it does

`main.ts` (run with Node) writes a single original roast line — at most 200 characters, roasting a smart fridge's firmware update and its paywalled ice maker — to `/output/entry.txt`.

The program validates the line in code before writing: 1–200 characters, not only whitespace, a single line, no control characters, and no leading or trailing whitespace. If the line is invalid, it refuses to write anything.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## The line

> My smart fridge pushed a firmware update at 3 a.m. and now the ice maker is paywalled — one free cube a day, then it just flashes 'Upgrade to Premium Chill' at my lemonade.

## License

MIT — see [LICENSE](LICENSE).
