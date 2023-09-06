import React from 'react';
import {SafeAreaView} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {MainView} from '../common';

export function PostDetailScreen(props: any) {
  const postDetail = props.route.params;

  return (
    <SafeAreaView>
      <MainView>
        <Card mode="outlined">
          <Card.Title
            title={postDetail.title}
            titleVariant="titleLarge"
            titleNumberOfLines={4}
          />
          <Card.Content>
            <Text>{postDetail.body}</Text>
          </Card.Content>
        </Card>
      </MainView>
    </SafeAreaView>
  );
}
