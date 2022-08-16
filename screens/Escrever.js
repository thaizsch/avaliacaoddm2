import React, { useState } from 'react';
import {  View,  Text,  TextInput,  TouchableOpacity,  KeyboardAvoidingView
} from 'react-native';
import MeuEstilo from '../meuestilo'
import { auth,firestore } from '../firebase'

const Escrever = () => {
  const [musica,  setMusica] = useState('')
  const [lancamento,   setLancamento] = useState('')
  const [cantor,  setCantor] = useState('')

  const ref = firestore.collection('User').doc(auth.currentUser.uid).collection('Musica').doc();
  const enviarDados = () => {
      ref.set
      ({

       musica:musica,
       cantor:cantor,
       lancamento:lancamento,
       id: ref.id,

     })
     .then(() => {
       alert('Musica ' + musica + ' Adicionado com Sucesso! :)')
         
     });
    
  }

  const limparFormulario = () => {
  
  }

  return (
    <KeyboardAvoidingView
      style={MeuEstilo.containerlistar}
      behavior="padding"
    >
      <View style={MeuEstilo.inputcontainerlistar}>
        <TextInput
          placeholder="Musica"
          value={musica}
          onChangeText={text => setMusica(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Cantor"
          value={cantor}
          onChangeText={text => setCantor(text)}
          style={MeuEstilo.input}
        />
          <TextInput
          placeholder="Lancamento"
          value={lancamento}
          onChangeText={text => setLancamento(text)}
          style={MeuEstilo.input}
        />
       
      </View>

      <View style={MeuEstilo.buttoncontainerlistar}>
        <TouchableOpacity
          onPress={enviarDados}
          style={MeuEstilo.button}
        >
          <Text style={MeuEstilo.buttonText}>Enviar Dados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={limparFormulario}
          style={[MeuEstilo.button, MeuEstilo.buttonOutline]}
        >
          <Text style={MeuEstilo.buttonOutlineText}>Limpar Formulario</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Escrever

