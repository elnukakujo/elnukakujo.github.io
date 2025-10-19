import type Header from './Header';

export default interface Card {
    type?: 'card';
    size: 'fit' | 'small' | 'medium' | 'large';
    layer?: number;
    children: React.ReactNode;
    header?: Header;
    className?: string;
}