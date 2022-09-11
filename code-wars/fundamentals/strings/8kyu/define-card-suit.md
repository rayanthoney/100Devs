# Define a card suit - (8Kyu)

## Descrition

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

    ('3♣') -> return 'clubs'
    ('3♦') -> return 'diamonds'
    ('3♥') -> return 'hearts'
    ('3♠') -> return 'spades'

```md
P R E P Method =>

|     |     |            |
| --- | --- | ---------- |
|     | P   | Parameters |
|     | R   | Results    |
|     | E   | Examples   |
|     | P   | Psuedocode |
```

## Parameters:

an array of positive integers, whole numbers greater than 0, the array has a min of 4 integers

## Result:

A string of the name of the suit ONLY, in all lowercase letters and plural.

## Examples:

```js
it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit("Q♠"), "spades"));
it('Testing №3 for "9♦"', () =>
  assert.strictEqual(defineSuit("9♦"), "diamonds"));
it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit("J♥"), "hearts"));
```

    ('Q♠'), 'spades'
    ('9♦'), 'diamonds')
    ('J♥'), 'hearts')
    ('3♠'), 'clubs')

## Psuedocode:

A string with two characters , the second of which is the symbolic representation od a card suit

---

## CodeWar

```js
function defineSuit(card) {
  if (card.includes("♠")) console.log("spades");
  if (card.includes("♦")) console.log("diamonds");
  if (card.includes("♥")) console.log("hearts");
  if (card.includes("♣")) console.log("clubs");
}

defineSuit("3♣");
```
