import Cart from '../service/Cart';
import MusicAlbum from '../domain/MusicAlbum';
import Gadgets from '../domain/Gadgets';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Добавление товаров в корзину', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.items[0]).toEqual(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
});

test('Подсчет общей суммы покупки без скидки', ()=> {
  const cart = new Cart();
  
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 1000));

  expect(cart.fullPrice()).toEqual(1900);
});

test('Подсчет суммы покупки, с учетом скидки', ()=> {
  const cart = new Cart();
  
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 1000));

  expect(cart.fullPriceDiscount(10)).toEqual(1710);
});

test('Удаление товара из корзины', ()=> {
  const cart = new Cart();
  
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new MusicAlbum(1009, 'Meteora', 'Linkin Park', 1000));

  cart.removeProduct(1009);
  expect(cart.items[0]).toEqual(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900))
});

test('Уменьшение количества единиц товара в корзине, если товара > 1', () => {
  const cart = new Cart();
  cart.add(new Gadgets(3, 'Iphone', 50000, '12 Pro Max', 4, 2020));

  cart.reducingQuantityProduct(3);

  expect(cart.items[0]).toEqual(new Gadgets(3, 'Iphone', 50000, '12 Pro Max', 3, 2020));

})

test('Уменьшение количества единиц товара в корзине, если товара = 1', () => {
  const cart = new Cart();
  cart.add(new Gadgets(3, 'Iphone', 50000, '12 Pro Max', 1, 2020));

  cart.reducingQuantityProduct(3);
  cart.removeProduct(3);
  expect(cart.items).toEqual([]);

})