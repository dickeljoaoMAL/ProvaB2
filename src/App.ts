import { FlatList, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';




export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
`;

export const Header = styled.View`
  padding: 16px 16px 0;
`;

export const ScreenTitle = styled.Text`
  font-size: 24px;
`;

export const SearchInput = styled.TextInput`
  border-color: #c02bc7;
  border-width: 1px;
  height: 44px;
  margin-top: 12px;
  padding: 0 12px;
`;

export const Bookshelf = styled.View`
  padding: 16px;
`;

export const BookCard = styled.View`
  flex: 1;
  margin: 8px;
  padding: 16px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 8px;
`;

export const BookTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const BookAuthor = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;


export const ProductGrid = styled.View`
  padding: 16px;
`;
