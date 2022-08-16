import React, {useState, useEffect} from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  MeuEstiloheet,
  View,
  FlatList,
  TextInput,
  StatusBar,
} from 'react-native';
import { auth,firestore } from '../firebase'
import MeuEstilo from '../meuestilo';

const ListaComFiltro = () => {
  const [search, setSearch] = useState('');
  const [dadosFiltrados, setdadosFiltrados] = useState([]);
  const [musica, setMusica] = useState([]);
  const [loading, setLoading] = useState(true); 
  

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
        setdadosFiltrados(musica);
        setMusica(musica);
        setLoading(false);
      });
   
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const searchFilter = (text) => {
    if (text) {
      const newData = musica.filter(
        function (item) {
          if (item.musica) {
            const itemData = item.musica.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          }
      });
      setdadosFiltrados(newData);
      setSearch(text);
    } else {
      setdadosFiltrados(musica);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      <Text
        style={MeuEstilo.item}
        onPress={() => getItem(item)}>
        {/* {item.id}
        {' - '} */}
        {item.musica.toUpperCase()}
      </Text>
    );
  };

  const getItem = (item) => {
    
    alert('Musica : ' + item.musica);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={MeuEstilo.containerlistarcomfiltro}>
        <TextInput
          style={MeuEstilo.textInputStyle}
          onChangeText={(text) => searchFilter(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Procure Aqui"
        />
        <FlatList
          data={dadosFiltrados}
          keyExtractor={item => item.musica}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};


export default ListaComFiltro;