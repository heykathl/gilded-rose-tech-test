class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      // is not aged brie - it increases in quality the older it gets
      // is not backstage passes - increases in quality based on how close the concert is, quality = 0 after concert
      if (
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        // quality is not negative
        if (this.items[i].quality > 0) {
          // item is not sulfurus so that it can be sold
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            // quality decreases daily
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        //quality can never be more than 50
        if (this.items[i].quality < 50) {
          //quality increases in value daily
          this.items[i].quality = this.items[i].quality + 1;

          //if backstage passes (quality increases daily)
          if (
            this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            // quality increases by 2 when 10 days or less
            if (this.items[i].sellIn < 11) {
              //quality no more than 50
              if (this.items[i].quality < 50) {
                // quality increases in value daily (amend to by 2)
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            // quality increases by 3 when 5 days or less
            if (this.items[i].sellIn < 6) {
              //quality no more than 50
              if (this.items[i].quality < 50) {
                // quality increases in value daily (amend to by 3)
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      // if not sulfuras, can never be sold
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        // sellIn (number of days to be sold) - decreases daily
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      // Once the sell by date has passed, Quality degrades twice as fast
      if (this.items[i].sellIn < 0) {
        // is not brie (as it increase in qual the older it gets)
        if (this.items[i].name != "Aged Brie") {
          // are not backstage passes (as quality = 0 after expiration)
          if (
            this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            // if item still has quality/value
            if (this.items[i].quality > 0) {
              // not sulfuras as this cannot be sold
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                // decrease quality daily, to be twice as fast (amend to -2)
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            // if item quality is negative
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          // item cannot exceed quality of 50
          if (this.items[i].quality < 50) {
            // quality increases daily
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
