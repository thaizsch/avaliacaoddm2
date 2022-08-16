import React ,{useState, useEffect} from 'react'
import {ActivityIndicator, SafeAreaView, View, FlatList, MeuEstiloheet, Text, StatusBar } from 'react-native';
import { auth,firestore } from '../firebase'
import MeuEstilo from '../meuestilo';

const Listar = () => {
  const [loading, setLoading] = useState(true); 
  const [musica, setMusica] = useState([]);

  useEffect(() => {
    const subscriber = firestore.collection('User').doc(auth.currentUser.uid).collection('Musica')
      .onSnapshot(querySnapshot => {
        const musica = [];
        querySnapshot.forEach(documentSnapshot => {
          musica.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.musica,
          });
        });
        setMusica(musica);
        setLoading(false);
      });
    
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

const Item = ({ musica }) => (
  <View style={MeuEstilo.item}>
    <Text style={MeuEstilo.title}>{musica}</Text>
  </View>
);

 

  const renderItem = ({ item }) => <Item musica={item.musica} />;


  return (
    <SafeAreaView style={MeuEstilo.containerlistar}>
      <FlatList 
      data={musica} 
      renderItem={renderItem} 
      keyExtractor={item => item.musica} 

      />
    </SafeAreaView>
  );
};


export default Listar;
