import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    fullPrice():number {
     const sum:number = this.items.reduce((sum, current) => {
        if(!current.count) {
            return sum + current.price;
        }
        return sum + current.price*current.count;
      },0);
      return sum;
    }

    fullPriceDiscount(discount:number):number {
        const result:number = this.fullPrice();
        return result-(result*discount/100);
    }

    removeProduct(id: number): void {
        this._items = this._items.filter((item) => item.id !== id);
    }
    reducingQuantityProduct(id: number):void {
        this._items.forEach(item => {
            if(item.count) {
                --item.count;
                return item;
            } 
            if(item.count == 1) {
                this.removeProduct(id);
            }

        })
    }
}