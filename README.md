# Gilded Rose Tech Test

A program which dictates the quality of items sold in a store based on the expiration date which varies with amongst a variety of items.

## How to install
Fork or clone the respository to your local machine.
```
git clone https://github.com/heykathl/gilded-rose-tech-test
```
Once the repository has been cloned you will be able to install the dependencies.
```
npm install
```

## How to use
Run `node` and set up the files and classes as follows:

## Testing
There are a series of tests which can be run with the following.
Change into the relevant directory with 
```
cd gilded-rose-tech-test
```
Run 
```
jest
``` 
To run tests from specific class files, this can be done by:
```
jest test/<filename>.test.js
```

## My approach to the challenge

1. There were alot of nested if statements, so I began writing comments to understand what each line of the code was doing. 
2. I proceeded to write tests and ensure that the current code base would pass these tests.
3. With the tests present, this would act as a scaffold for this program and would allow me to refactor without breaking the program, whilst achieving the same output.

## Requirements
Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a `SellIn` value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Backstage passes”, like aged brie, increases in Quality as it’s `SellIn` value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

* “Conjured” items degrade in Quality twice as fast as normal items
