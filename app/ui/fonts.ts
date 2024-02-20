import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
// import { Inter, Lusitana } from 'next/font/google';
// can also be written as this ffor both the fonts
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ 
    weight: '400', 
    subsets: ['latin'], 
});
