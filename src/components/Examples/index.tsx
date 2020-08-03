import { Button, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useExamples } from '_store/hooks/useExamples';

const Examples = () => {
  const { examples, loadMore, isFetching, error } = useExamples(null);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title='Test redux' onPress={loadMore}/>
        <View>
          {
            isFetching ?
              <Text style={styles.loading}> LOADING </Text>:
              (error ? <Text style={styles.error}> {error.message}</Text>
                : examples.map((example) => <Text style={styles.text} key={example.id}> {example.title }</Text>))
          }
        </View>
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 30
  },
  loading: {
    fontSize: 20,
    color: 'yellow'
  },
  error: {
    fontSize: 30,
    color: 'red'
  }
});

export default Examples;
