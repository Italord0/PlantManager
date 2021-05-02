import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView , FlatList , View, ActivityIndicator} from 'react-native';
import { Style } from '../styles/views/plantSelect/style' 
import { EnviromentButton } from '../components/enviromentButton'
import colors from '../styles/colors'
import { ToolBar } from '../components/toolbar'
import { api } from '../services/api';
import { PlantCardPrimaryButton } from '../components/plantCardPrimaryButton';
import Skeleton from 'react-loading-skeleton';
import { useNavigation } from '@react-navigation/native';

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

    //api loading state
    const [loadingEnviroments , setLoadingEnviroments] = useState(true);
    const [loadingPlants , setLoadingPlants] = useState(true);

    //page state
    const [page , setPage] = useState(1);
    const [loadingMore , setLoadingMore] = useState(false)
    const [loadedAll , setLoadedAll] = useState(false)

    const navigation = useNavigation()

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

    function handlePlant(plant : PlantProps){
      navigation.navigate('PlantSave' , { plant } )
    }
    
    return (
      <SafeAreaView style={Style.container}>

        <View style={Style.content}>
          <ToolBar userName="Italo"/>

          <Text style={Style.title} >Em qual ambiente</Text>
          <Text style={Style.subtitle} >você quer colocar sua planta?</Text>

        </View> 

        <View>
        {(() => {
          if (loadingEnviroments == true){
            return (
              <ActivityIndicator color = {colors.green} />
            )
        } else {
          return(
          <FlatList data={environments}
            keyExtractor = {(item) => String(item.key)}
            renderItem={
             ( { item }) => (<EnviromentButton 
              title = {item.title} 
              active = {item.key === environmentSelected}
              onPress = { ()=> handleEnvironment(item.key) }
              /> )
            }
            horizontal 
            showsHorizontalScrollIndicator = {false}
            contentContainerStyle={Style.enviromentList}
            
            />)
          }})()}
        </View>

        <View style = {Style.plants}>
        {(() => {
              if (loadingPlants == true){
                  return (
                    <ActivityIndicator color = {colors.green} />
                  )
              } else {
                return (<FlatList 
                  data={filteredPlants} 
                  keyExtractor = {(item) => String(item.id)}
                  renderItem={( { item }) => (<PlantCardPrimaryButton 
                    data = {item}
                    onPress = {() => handlePlant(item)}
                    />)}
                  showsVerticalScrollIndicator = {false}            
                  contentContainerStyle={Style.plantList}
                  numColumns = {2}
                  onEndReachedThreshold={0.3}
                  onEndReached = { () => handleFetchMore()}
                  ListFooterComponent={loadingMore ? <ActivityIndicator color={colors.green} /> : <></>}/>)
              }
            })()}
        </View>

      </SafeAreaView>
    );
  }