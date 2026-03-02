import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(initialValue);
  return { count, increment, reset };
}

export default function HomeScreen() {
  const { count, increment, reset } = useCounter(0);

  useEffect(() => {
    console.log(`Счетчик изменился: ${count}`);
  }, [count]);

  return (
    <View style={styles.container}>
      
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Вы нажали: {count} раз</Text>
        
        <View style={styles.buttonGap}>
          <Button title="Увеличить" onPress={increment} />
        </View>
        
        <View style={styles.buttonGap}>
          <Button title="Сбросить" color="red" onPress={reset} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  counterContainer: {
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonGap: {
    marginBottom: 10,
    width: 200,
  }
});
