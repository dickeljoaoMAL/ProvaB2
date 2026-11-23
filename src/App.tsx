import React, { useEffect, useState } from 'react';
import {
    Bookshelf,
    Header,
    ScreenContainer,
    ScreenTitle,
    SearchInput,
} from './App';
export default function App() {
    const [searchQuery, setSearchQuery] = useState('');


    const books: { id: number; title: string; author: string }[] = [
        {
            id: 1,
            title: 'book 1',
            author: 'author 1',
        },
        {

            id: 2,
            title: 'book 2',
            author: "author 2",
        },
        {

            id: 3,
            title: 'book 3',
            author: "author 3",
        },
        {
            id: 4,
            title: 'book 4',
            author: "author 4",
        },
        {
            id: 5,
            title: 'book 5',
            author: "author 5",
        },
        {
            id: 6,
            title: 'book 6',
            author: "author 6",
        },
        {
            id: 7,
            title: 'book 7',
            author: "author 7",
        },
        {
            id: 8,
            title: 'book 8',
            author: "author 8",
        },
        {
            id: 9,
            title: 'book 9',
            author: "author 9",
        },
        {
            id: 10,
            title: 'book 10',
            author: "author 10",
        },
        {
            id: 11,
            title: 'book 11',
            author: "author 11",
        },
        {
            id: 12,
            title: 'book 12',
            author: "author 12",
        },
        {
            id: 13,
            title: 'book 13',
            author: "author 13",
        },
        {
            id: 14,
            title: 'book 14',
            author: "author 14",
        },
        {
            id: 15,
            title: 'book 15',
            author: "author 15",
        },
    ];


    const filteredProducts = books.filter((product) => {
        const matchesSearch: boolean = product.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return matchesSearch;
    });


    function ProductGrid(props: {
        data: typeof books;
        numColumns: number,
        keyExtractor: (item: any) => string,
        renderItem: ({item}: any) => React.JSX.Element
    }) {
        return null;
    }

    function Home({navigation}: any) {


        return (
            <ScreenContainer>
                <Header>
                    <ScreenTitle>Leitura Viva</ScreenTitle>
                    <SearchInput
                        placeholder="Buscar produtos"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />

                </Header>

                <ProductGrid
                    data={filteredProducts}
                    numColumns={2}
                    keyExtractor={(books: any) => String(books.title)}
                    renderItem={({books}: any) => (
                        books
                    )}
                />
            </ScreenContainer>
        );
    }
}
