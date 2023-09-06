import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Card, Text} from 'react-native-paper';
import {MainView} from '../common';
import {PostListViewModel} from '../../viewmodels';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';

export function HomeScreen() {
  const navigation: NavigationProp<any> = useNavigation();

  const posts = useSelector((state: RootState) => state.post.post);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const fetchPosts = async (pageNumber: number) => {
    try {
      if (pageNumber === 1) {
        setIsRefreshing(true);
      } else {
        setIsLoadingMore(true);
      }

      await PostListViewModel.fetchPosts(pageNumber, 10);

      if (pageNumber === 1) {
        setIsRefreshing(false);
      } else {
        setIsLoadingMore(false);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setIsRefreshing(false);
      setIsLoadingMore(false);
    }
  };

  const handleRefresh = () => {
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <SafeAreaView>
      <MainView>
        <FlatList
          data={posts}
          keyExtractor={item => {
            return `${item.id}`;
          }}
          renderItem={({item}) => (
            <Card
              mode="outlined"
              onPress={() => {
                navigation.navigate('Detail', item);
              }}>
              <Card.Title
                title={item.title}
                titleVariant="titleLarge"
                titleNumberOfLines={4}
              />
              <Card.Content>
                <Text>{item.body}</Text>
              </Card.Content>
            </Card>
          )}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={isLoadingMore ? <ActivityIndicator /> : null}
        />
      </MainView>
    </SafeAreaView>
  );
}
