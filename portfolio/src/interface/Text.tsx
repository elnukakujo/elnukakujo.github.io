export default interface Text {
    text: string;
    type: 'text' | 'header' | 'subheader' | 'subsubheader';
    className?: string;
}