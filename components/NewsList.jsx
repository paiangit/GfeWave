import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import styled from 'styled-components/native';
import { getNewsByChannel } from '../api/news';

const ListItem = styled.View`
  margin: 0 20px;
  padding: 20px 0;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;
const Abstract = styled.Text`
  font-size: 12px;
  color: #999;
  margin-top: 5px;
`;
const Line = styled.View`
  height: 1px;
  background-color: #e2e2e2;
  margin: 4px 20px;
`;
const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 40px;
`;
const LoadingText = styled.Text`
  font-size: 12px;
  color: #999;
`;
// const Loading = styled.ActivityIndicator`
//   padding: 10px 0;
// `;

export default function () {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      const content = await getNewsByChannel(null, page);
      setContent(prevContent => prevContent.concat(content));
    };
    fetchNews();
  }, [setContent]);

  const loadMore = useCallback(
    () => {
      setPage(page => page + 1);
    },
    [setPage],
  );

  return (
    <FlatList
      data={content}
      onEndReached={loadMore}
      onEndReachedThreshold={0.2}
      ListFooterComponent={() => <Loading><LoadingText>loading...</LoadingText></Loading>}
      // ListFooterComponent={() => <Loading size="small" color="#999" />}
      ItemSeparatorComponent={() => {
        return (<Line />)
      }}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => alert(item.url)}>
            <ListItem>
              <Title>{item.title}</Title>
              <Abstract>{item.abstract}</Abstract>
            </ListItem>
          </TouchableOpacity>
        );
      }}
    />
  );
}
