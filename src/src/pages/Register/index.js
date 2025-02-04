import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import {useForm, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    nome: yup.string().required("Informe seu nome"),
    sobrenome: yup.string().required("Informe seu sobrenome"),
    email: yup.string().email("E-mail inválido!").required("Informe seu e-mail!"),
    senha: yup.string().min(8, "A senha deve conter no mínimo 8 caracteres").required("Informe sua senha"),
    confirmaSenha: yup.string().min(8, "As senhas não conferem").required("Informe a senha conforme o campo anterior")
})



export default function Register(){
    const navigation = useNavigation();

    const {control, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    }) //esta pode ser chamada quando o usuario clicar no botão de finalizar cadastro, utilizada para teste

    function handleRegister(data){
        console.log(data)
    }
    
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}/* BLOCO DE CAMPO */>
                <Text style={styles.title}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Controller
                    control={control}
                    name='nome'
                    render={({field:{onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.campo}
                            onChangeText={onChange}
                            onBlur={onBlur} //chamado quando o text input é tocado ein
                            value={value} 
                            placeholder='Seu nome.'
                        />
                    )}
                />
                {errors.nome && <Text style={styles.labelError}>{errors.nome?.message}</Text>}

                <Controller
                        control={control}
                        name='sobrenome'
                        render={({field:{onChange, onBlur, value}}) => (
                            <TextInput
                                style={styles.campo}
                                onChangeText={onChange}
                                onBlur={onBlur} //chamado quando o text input é tocado ein
                                value={value} 
                                placeholder='Seu sobrenome.'
                            />
                        )}
                    />
                {errors.sobrenome && <Text style={styles.labelError}>{errors.sobrenome?.message}</Text>}

                <Controller
                        control={control}
                        name='email'
                        render={({field:{onChange, onBlur, value}}) => (
                            <TextInput
                                style={styles.campo}
                                onChangeText={onChange}
                                onBlur={onBlur} //chamado quando o text input é tocado ein
                                value={value} 
                                placeholder='Digite seu e-mail.'
                            />
                        )}
                    />
                {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}


                <Controller
                        control={control}
                        name='senha'
                        render={({field:{onChange, onBlur, value}}) => (
                            <TextInput
                                style={styles.campo}
                                onChangeText={onChange}
                                onBlur={onBlur} //chamado quando o text input é tocado ein
                                value={value} 
                                placeholder='Digite sua senha.'
                            />
                        )}
                    />
                {errors.senha && <Text style={styles.labelError}>{errors.senha?.message}</Text>}

                <Controller
                        control={control}
                        name='confirmaSenha'
                        render={({field:{onChange, onBlur, value}}) => (
                            <TextInput
                                style={styles.campo}
                                onChangeText={onChange}
                                onBlur={onBlur} //chamado quando o text input é tocado ein
                                value={value} 
                                placeholder='Confirme a sua senha.'
                            />
                        )}
                    />
                {errors.confirmaSenha && <Text style={styles.labelError}>{errors.confirmaSenha?.message}</Text>}
               
                <TouchableOpacity onPress={ () => navigation.navigate('Objective')}style={styles.button}>
                    <Text style={styles.buttonText}>Finalizar Cadastro</Text>    
                </TouchableOpacity>
                

            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: 'white'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    button:{
        backgroundColor: '#7D9C3E',
        width: '40%',
        borderRadius: 100,
        paddingVertical: 8,
        marginTop: 19,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText:{
        fontWeight:'bold',
    },
    containerForm:{
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    campo:{
        padding:9,
        borderRadius: 20,
        backgroundColor: '#F3F6F6',
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#7D9C3E"

    },
    labelError:{
        alignSelf: 'flex-start',
        color: '#ff375b',
        marginBottom: 8
    }
})
    
