import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <View style={styles.incidentList}>
                <View style={styles.incident}>
                    <Text style={styles.IncidentProperty}>ONG:</Text>
                    <Text style={styles.IncidentValue}>APAD</Text>

                    <Text style={styles.IncidentProperty}>CASO:</Text>
                    <Text style={styles.IncidentValue}>Cadelinha atropelada</Text>

                    <Text style={styles.IncidentProperty}>VALOR:</Text>
                    <Text style={styles.IncidentValue}>R$ 120,00</Text>

                    <TouchableOpacity 
                    style={styles.detailsButtom} 
                    onPress={() => {} }>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={17} color={"#E02041"} />
                    </TouchableOpacity>
                </View>

                <View style={styles.incident}>
                    <Text style={styles.IncidentProperty}>ONG:</Text>
                    <Text style={styles.IncidentValue}>APAD</Text>

                    <Text style={styles.IncidentProperty}>CASO:</Text>
                    <Text style={styles.IncidentValue}>Cadelinha atropelada</Text>

                    <Text style={styles.IncidentProperty}>VALOR:</Text>
                    <Text style={styles.IncidentValue}>R$ 120,00</Text>

                    <TouchableOpacity 
                    style={styles.detailsButtom} 
                    onPress={() => {} }>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={17} color={"#E02041"} />
                    </TouchableOpacity>
                </View>

                <View style={styles.incident}>
                    <Text style={styles.IncidentProperty}>ONG:</Text>
                    <Text style={styles.IncidentValue}>APAD</Text>

                    <Text style={styles.IncidentProperty}>CASO:</Text>
                    <Text style={styles.IncidentValue}>Cadelinha atropelada</Text>

                    <Text style={styles.IncidentProperty}>VALOR:</Text>
                    <Text style={styles.IncidentValue}>R$ 120,00</Text>

                    <TouchableOpacity 
                    style={styles.detailsButtom} 
                    onPress={() => {} }>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={17} color={"#E02041"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}