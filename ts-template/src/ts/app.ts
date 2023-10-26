import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie'
import Gadgets from './domain/Gadgets';

const cart = new Cart();

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1, 'Test', 1000, 1978, 'Test', 'Test', ['test', 'test'], 172+' мин', 'test', true, 'test'))
cart.add(new Gadgets(3, 'Iphone', 50000, '12 Pro Max', 4, 2020));


cart.reducingQuantityProduct(3);
console.log(cart.items);