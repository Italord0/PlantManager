import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView , FlatList , View, ActivityIndicator} from 'react-native';
import { PlantSelectStyle } from '../styles/plantSelect_style' 
import { EnviromentButton } from '../components/enviromentButton'
import colors from '../styles/colors'
import { ToolBar } from '../components/toolbar'
import { api } from '../services/api';
import { PlantCardPrimaryButton } from '../components/plantCardPrimaryButton';
import Skeleton from 'react-loading-skeleton';

interface EnviromentProps {
  key : string;
  title : string;
}

interface PlantProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export default function App() {

    const [environments , setEnvironments] = useState<EnviromentProps[]>([]);
    const [plants , setPlants] = useState<PlantProps[]>([]);

    const [filteredPlants , setFilteredPlants] = useState<PlantProps[]>([]);

    //selected state
    const [environmentSelected , setEnvironmentSelected] = useState('all');

    const [loadingEnviroments , setLoadingEnviroments] = useState(true);
    const [loadingPlants , setLoadingPlants] = useState(true);

    const [page , setPage] = useState(1);
    const [loadingMore , setLoadingMore] = useState(false)
    const [loadedAll , setLoadedAll] = useState(false)

    useEffect( () => {
      async function fetchEnviroment(){
        try {
          const { data } = await api.get('plants_environments?_sort=title&_order=asc');
          setEnvironments([
            { key : 'all', title : 'Todos' },
            ...data
          ]);
          setLoadingEnviroments(false)
        } catch(error) {
          console.log(error)
        }
      }
      fetchEnviroment();
    },[])

    useEffect( () => {
      fetchPlants();
    },[])

    function handleEnvironment(environment : string){
      setEnvironmentSelected(environment)

      if (environment === 'all'){
        return setFilteredPlants(plants)
      } else {
        const filtered = plants.filter( plant => plant.environments.includes(environment))
        setFilteredPlants(filtered)
      }
    }

    function handleFetchMore(){
      if (!loadedAll) {
        setLoadingMore(true)
        setPage(oldValue => oldValue + 1)
        fetchPlants()
      }
    }
    
    async function fetchPlants(){
      try {
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
        
        if(data.length < 8){
          setLoadedAll(true)
        }

        if (page > 1) {
          setPlants (oldValue => [ ... oldValue, ... data ])
          setFilteredPlants (oldValue => [ ... oldValue, ... data ])
        } else {
          setPlants(data);
          setFilteredPlants(data)
        }

        setLoadingPlants(false)
        setLoadingMore(false)

      } catch(error) {
        console.log(error)
      }
    }
    
    return (
      <SafeAreaView style={PlantSelectStyle.container}>

        <View style={PlantSelectStyle.content}>
          <ToolBar userName="Italo"/>

          <Text style={PlantSelectStyle.title} >Em qual ambiente</Text>
          <Text style={PlantSelectStyle.subtitle} >você quer colocar sua planta?</Text>

        </View> 

        <View>
        {(() => {
          if (loadingEnviroments == true){
            return (
              <ActivityIndicator color = {colors.green} />
            )
        } else {
          return(
          <FlatList data={environments} renderItem={
             ( { item }) => (<EnviromentButton 
              title = {item.title} 
              active = {item.key === environmentSelected}
              onPress = { ()=> handleEnvironment(item.key) }
              /> )
            }
            horizontal 
            showsHorizontalScrollIndicator = {false} 
            
            contentContainerStyle={PlantSelectStyle.enviromentList} />)
          }})()}
        </View>

        <View style = {PlantSelectStyle.plants}>
        {(() => {
              if (loadingPlants == true){
                  return (
                    <ActivityIndicator color = {colors.green} />
                  )
              } else {
                return (<FlatList data={filteredPlants} renderItem={
                  ( { item }) => (<PlantCardPrimaryButton data = {item} />)
                 }
                 showsVerticalScrollIndicator = {false}            
                 contentContainerStyle={PlantSelectStyle.plantList}
                 numColumns = {2}
                 onEndReachedThreshold={0.3}
                 onEndReached = { () => handleFetchMore()}
                 ListFooterComponent={
                   loadingMore ? 
                   <ActivityIndicator color={colors.green} /> : <></>}  
                   />)
              }
            })()}
        </View>

      </SafeAreaView>
    );
  }