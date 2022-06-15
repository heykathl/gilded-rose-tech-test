const {Shop, Item} = require("../src/gildedRose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  // “Aged Brie” increases in Quality the older it gets
  it("aged brie increases in quality the older it gets", () => {
    const gildedRose = new Shop([
      new Item("Aged Brie", 2, 2),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
    expect(items[0].sellIn).toBe(1)
  })

// Once the sell by date has passed, Quality degrades twice as fast
  it('sellIn is below 0, quality degrade twice as fast', () => {
    const gildedRose = new Shop([
      new Item("Elixir of the Mongoose", 0, 50),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(48);
    expect(items[0].sellIn).toBe(-1)
  })

// The Quality of an item is never negative
  it("quality of item never negative", () => {
    const gildedRose = new Shop([
      new Item("Elixir of the Mongoose", 5, 0),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(4);
  })

// The Quality of an item is never more than 50
  it("quality never exceeds 50", () => {
    const gildedRose = new Shop([
      new Item("Aged Brie", 2, 50),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(1)
  });

// “Sulfuras”, being a legendary item, never has to be sold or decrease in Quality
  it("sulfuras never decreases in quality", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(-1);
  });

// “Backstage passes”, like aged brie, increases in Quality as its SellIn value approaches;
// Quality increases by 2 when there are 10 days or less 
  it("backstage passes quality increases by 2 when there are 10 days or less", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
    expect(items[0].sellIn).toBe(8)
  })

// Quality increases by 3 when there are 5 days or less but
  it("backstage passes' quality increases by 3 when there are 5 days or less", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 2, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
    expect(items[0].sellIn).toBe(1)
  })

// Quality drops to 0 after the concert
  it("backstage passes' quality drops to 0 when sellIn is below 0", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-1)
  })

// any items besides sulfuras, backstage passes and aged brie
  it("items devalue in quality daily", () => {
    const gildedRose = new Shop([
      new Item("Wizard of Oz red heels", 5, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
    expect(items[0].sellIn).toBe(4)
  })
// conjured items degrade in quality twice as fast
  // it("conjured items degrade in quality twice as fast", () => {
  //   const gildedRose = new Shop([
  //     new Item("Conjured Mana Cake", 3, 6),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(4)
  //   expect(items[0].sellIn).toBe(2)
  // })
  
});