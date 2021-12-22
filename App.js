import * as React from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableOpacity, Touchable, ScrollView, ImageBackground, BackHandler} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {style, style2} from './Style'

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="goHome" component={HomeTabScreen} />
        <Stack.Screen options={{headerShown: false}} name="Information" component={Information} />
        <Stack.Screen options={{headerShown: false}} name="Notification" component={Notification} />
        <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Lokasi" component={Lokasi} />
        <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Event" component={Event} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Ubah Profil" component={UbahProfil} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Syarat Dan Ketentuan" component={SyaratDanKetentuan} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Kebijakan Privasi" component={KebijakanPrivasi} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Pernyataan Umum" component={PernyataanUmum} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Sell" component={Sell} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Drop Off" component={DropOff} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          title: 'Drop Off',
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26,
          },
          headerTitleAlign:'center',
          }} name="Drop Off Info" component={DropOffInfo} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          title: 'Drop Off',
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26,
          },
          headerTitleAlign:'center',
          }} name="Drop Off Diproses" component={DropOffDiproses} />
        <Stack.Screen options={{headerShown: false}} name="Edit Profil Berhasil" component={EditProfilBerhasil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabScreen() {
  return (
    <Tab.Navigator barStyle={{backgroundColor: '#B7E1DA'}}>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="home" color={focused ? "#33D1C1" : "#524848"} size={26}/>
        ),
      }}
      />
      <Tab.Screen 
      name="My Order" 
      component={MyOrder} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="exchange" color={focused ? "#33D1C1" : "#524848"} size={26} />
        ),
      }}
      />
      <Tab.Screen 
      name="History" 
      component={History} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="history" color={focused ? "#33D1C1" : "#524848"} size={26} />
        ),
      }}
      />
      <Tab.Screen 
      name="Account" 
      component={Account} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="user" color={focused ? "#33D1C1" : "#524848"} size={26} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(166, 164, 164, 0.3)'}}>
        <View style={{flex: 1, alignSelf:'flex-start', paddingTop: 20, paddingLeft: 25}}>
          <TouchableOpacity onPress={()=> {
            navigation.navigate('Information')
            }}>
            <Image source={require('./assets/icon/info.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{flex: 2}}>
          <Text style={{ fontFamily: 'Oswald-SemiBold', color:'#33D1C1', fontSize: 36}}>TrashMon</Text>
        </View>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Notification')
            }}>
          <View style={{ paddingRight: 25, paddingTop: 20}}>
            <Image source={require('./assets/icon/notification.png')}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ fontFamily: 'NotoSansTC-Bold-Alphabetic', color:'#554D4D', fontSize: 26}}>Hai, Alvin Anandra</Text>
          <Image source={require('./assets/icon/profile-picture.png')}/>
        </View>
        <View style={{paddingTop: 55, position: 'absolute', paddingLeft: 25}}>
          <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#7C7C7C', fontSize: 16}}>Mari peduli lingkungan dan tukarkan sampahmu !</Text>
        </View>
        <View style={{marginTop: 25, backgroundColor: '#DBF5F3', borderRadius: 4, borderWidth: 1, borderColor: '#A6A4A4'}}>
          <View style={{justifyContent:'space-between', flexDirection:'row', borderBottomWidth: 1, borderBottomColor: '#A6A4A4', paddingHorizontal: 20, marginTop: 10, paddingBottom: 10, marginBottom: 10}}>
            <Text style={{color:'#554D4D', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 26}}>TM Points</Text>
            <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 26}}>500000</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity onPress={()=> {
            navigation.navigate('Sell')
            }}>
              <Image source={require('./assets/icon/sell.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/icon/share.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/icon/sell.png')}/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', marginBottom: 10}}>
              <Text style={{marginLeft: 40, fontFamily: 'ABeeZee-Regular', fontSize: 16}}>Sell</Text>
              <Text style={{marginLeft: 20, fontFamily: 'ABeeZee-Regular', fontSize: 16}}>Share</Text>
              <Text style={{marginRight: 25, fontFamily: 'ABeeZee-Regular', fontSize: 16}}>Redeem</Text>
          </View>
        </View>
        <View style={{paddingTop: 30}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', color:'#554D4D', fontSize: 26}}>Rekomendasi</Text>
        </View>
        <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
          <Image style={{height: 212, width: 345}} source={require('./assets/dummy/pegadaian.png')}/>
          <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
            <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, textAlign: 'center', paddingTop: 10}}>Tukarkan Poinmu menjadi tabungan emas senilai 15.000</Text>
            <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 12}}>
              <View style={{paddingTop: 10, flexDirection: 'row'}}>
                <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>15000 </Text>
                <Text style={{color:'#766F6F', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>Points</Text>
              </View>
              <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, marginLeft: 120, elevation: 5}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Tukar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function Sell({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <TouchableOpacity onPress={()=> {
            navigation.navigate('Drop Off')
            }}>
        <View style={{ flexDirection: 'row', paddingTop: 15, backgroundColor: '#BCE3E0', marginHorizontal: 25, borderRadius: 15, marginTop: 25, paddingBottom: 80}}>
            <View style={{position: 'absolute', paddingTop: 10, paddingLeft: 10}}>
              <Image source={require('./assets/icon/drop-off.png')}/>
            </View>
            <View style={{paddingLeft: 70, position:'absolute'}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, marginLeft: 10, marginTop: 3, paddingTop: 5}}>Drop Off</Text>
              <Text style={{fontFamily: 'ABeeZee-Regular', fontSize: 16, marginLeft: 10, marginTop: 3}}>Antar sendiri sampahmu ke bank{"\n"}sampah terdekat. Dan dapatkan{"\n"}poin lebih banyak.</Text>
            </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{ flexDirection: 'row', paddingTop: 15, backgroundColor: '#BCE3E0', marginHorizontal: 25, borderRadius: 15, marginTop: 20, paddingBottom: 100}}>
            <View style={{position: 'absolute', paddingTop: 10, paddingLeft: 10}}>
              <Image source={require('./assets/icon/pick-up.png')}/>
            </View>
            <View style={{paddingLeft: 70, position:'absolute'}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, marginLeft: 10, marginTop: 3, paddingTop: 5}}>Pick Up</Text>
              <Text style={{fontFamily: 'ABeeZee-Regular', fontSize: 16, marginLeft: 10, marginTop: 3}}>Sampahmu akan dijemput{"\n"}kerumah. Kamu bisa bersantai{"\n"}sembari menunggu agen sampah{"\n"}kami.</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function DropOff({ navigation }) {
  const [sampahPlastik, setSampahPlastik] = React.useState()
  const [sampahKertas, setSampahKertas] = React.useState()
  const [sampahKaca, setSampahKaca] = React.useState()
  const [sampahElektronik, setSampahElektronik] = React.useState()

  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View>
          <View style={{paddingTop: 25, flexDirection:'row'}}>
            <View style={{}}>
              <Text style={{fontSize: 14, color: '#666666'}}>Antar langsung sampahmu ke Drop Off{"\n"}Point terdekat. Lihat panduan berat sampah</Text>
            </View>
            <TouchableOpacity onPress={()=> {
            navigation.navigate('Drop Off Info')
            }}>
              <View Style={{position: 'absolute'}}>
                <Text style={{color: '#00FFE5', paddingTop: 17, paddingLeft: 3, fontWeight:'bold'}}>disini</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={{paddingTop: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#524848'}}>Informasi Sampah</Text>
          </View>
          <View style={{paddingTop: 5}}>
            <Text style={{fontSize: 14, color: '#666666'}}>Pilih jenis dan masukkan perkiraan berat sampah, tidak ada batasan berat minimal.</Text>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 5}}>
              <Image source={require('./assets/icon/plastik.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 5}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Plastik</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahPlastik(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 10}}>
              <Image source={require('./assets/icon/kertas.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 11}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Kertas</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahKertas(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 12}}>
              <Image source={require('./assets/icon/kaca.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 5}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Kaca</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahKaca(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 8}}>
              <Image source={require('./assets/icon/elektronik.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 9}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Elektronik</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahElektronik(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 90}}>
          <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, elevation: 5}} onPress={()=> {
            navigation.navigate('Drop Off Diproses')
            }}>
            <Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Lanjut</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 15, paddingHorizontal: 80}}>
          <TouchableOpacity style={{backgroundColor: '#1E7970', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, elevation: 5}} onPress={()=> {
            navigation.navigate('Lokasi')
            }}>
            <Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Lokasi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function DropOffDiproses({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor : '#E9FFFD', alignItems: 'center'}}>
      <View style={{marginBottom: 40, paddingTop: 140}}>
        <Image source={require('./assets/logo/transaksi-drop-off-diproses.png')}/>
      </View>
      <View style={{}}>
        <Text style={{fontSize: 24, color: '#424242', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Transaksi Sedang Diproses</Text>
      </View>
      <View style={{paddingTop: 5}}>
        <Text style={{fontSize: 16, color: '#7C7C7C', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Silahkan antar sampah anda</Text>
      </View>
      <View style={{paddingTop: 5}}>
        <Text style={{fontSize: 16, color: '#7C7C7C', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>ke bank sampah terdekat dan dapatkan bayaran</Text>
      </View>
      <View style={{paddingTop: 90}}>
        <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 125, paddingVertical: 8, borderRadius: 10, elevation: 5}} onPress={()=> {
          navigation.navigate('goHome')
          }}>
          <Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DropOffInfo({ navigation }) {
  const [sampahPlastik, setSampahPlastik] = React.useState()
  const [sampahKertas, setSampahKertas] = React.useState()
  const [sampahKaca, setSampahKaca] = React.useState()
  const [sampahElektronik, setSampahElektronik] = React.useState()

  return (
    <View style={{}}>
      <View style={{paddingHorizontal: 25, backgroundColor : '#E9FFFD', backgroundColor: '#7C7C7C', opacity: 0.5}}>
        <View>
          <View style={{paddingTop: 25, flexDirection:'row'}}>
            <View style={{}}>
              <Text style={{fontSize: 14, color: '#000'}}>Antar langsung sampahmu ke Drop Off{"\n"}Point terdekat. Lihat panduan berat sampah</Text>
            </View>
            <TouchableOpacity>
              <View Style={{position: 'absolute'}}>
                <Text style={{color: '#33D1C1', paddingTop: 17, paddingLeft: 3, fontWeight:'bold'}}>disini</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={{paddingTop: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000'}}>Informasi Sampah</Text>
          </View>
          <View style={{paddingTop: 5}}>
            <Text style={{fontSize: 14, color: '#000'}}>Pilih jenis dan masukkan perkiraan berat sampah, tidak ada batasan berat minimal.</Text>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 5}}>
              <Image source={require('./assets/icon/plastik.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 5}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Plastik</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35, opacity: 0.3}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='#000'
              onChangeText={text => setSampahPlastik(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 10}}>
              <Image source={require('./assets/icon/kertas.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 11}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Kertas</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35, opacity: 0.3}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='#000'
              onChangeText={text => setSampahKertas(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 12}}>
              <Image source={require('./assets/icon/kaca.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 5}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Kaca</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahKaca(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25, paddingBottom: 10}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 8}}>
              <Image source={require('./assets/icon/elektronik.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 9}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Elektronik</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahElektronik(text)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: 'white', position: 'absolute', marginTop: 275, paddingHorizontal: 25, borderRadius: 10}}>
        <View style={{paddingTop: 20}}>
          <Text style={{color: '#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 24, marginRight: 168}}>Ketentuan Berat</Text>
        </View>
        <View style={{paddingTop: 25, flexDirection:'row'}}>
          <View style={{zIndex: 1}}>
            <Image source={require('./assets/icon/lingkaran-biru.png')}/>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute', backgroundColor: 'white'}}>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25, paddingLeft: 35}}>Berat dibawah </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold', paddingTop: 25}}>1 Kg </Text>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25}}>dan sampah satuan (contoh : </Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 25}}>
            <Text style={{color: '#666666', fontSize: 14, paddingLeft: 13}}>Botol, plastik, Gelas Plastik, Kemasan Oli, dsb)</Text>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute'}}>
            <Text style={{color: '#666666', fontSize: 14, paddingLeft: 34, paddingTop: 75, zIndex: 1}}>dapat ditukarkan menjadi </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold', paddingTop: 75, zIndex: 1}}>10 Poin</Text>
          </View>
        </View>
        <View style={{paddingTop: 50, flexDirection:'row'}}>
          <View style={{zIndex: 1}}>
            <Image source={require('./assets/icon/lingkaran-biru.png')}/>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute', backgroundColor: 'white'}}>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 50, paddingLeft: 35}}>Berat dibawah </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold', paddingTop: 50}}>1 Kg </Text>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 50}}>s.d </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold', paddingTop: 50}}>5 Kg </Text>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 50}}>hanya dapat </Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 25}}>
            <Text style={{color: '#666666', fontSize: 14, paddingLeft: 13}}>ditukarkan menjadi TM Poin.</Text>
          </View>
        </View>
        <View style={{paddingTop: 25, flexDirection:'row'}}>
          <View style={{zIndex: 1}}>
            <Image source={require('./assets/icon/lingkaran-biru.png')}/>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute', backgroundColor: 'white'}}>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25, paddingLeft: 35}}>Berat melebihi </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold', paddingTop: 25}}>5 Kg </Text>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25}}>dapat ditukarkan menjadi </Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 25}}>
            <Text style={{color: '#666666', fontSize: 14, paddingLeft: 13}}>uang tunai atau TM Poin.</Text>
          </View>
        </View>
        <View style={{paddingTop: 25, marginBottom: 50}}>
          <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, elevation: 5}} onPress={()=> {
            navigation.navigate('Drop Off')
            }}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Mengerti</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function Information({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(166, 164, 164, 0.3)', marginBottom: 30}}>
        <View style={{flex: 1, alignSelf:'flex-start', paddingTop: 20, paddingLeft: 25}}>
          <TouchableOpacity onPress={()=> {
            navigation.navigate('goHome')
            }}>
            <Image source={require('./assets/icon/info.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{flex: 2}}>
          <Text style={{ fontFamily: 'Oswald-SemiBold', color:'#33D1C1', fontSize: 36}}>TrashMon</Text>
        </View>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Notification')
            }}>
          <View style={{ paddingRight: 25, paddingTop: 20}}>
            <Image source={require('./assets/icon/notification.png')}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#9EDCD7', marginHorizontal: 25, borderRadius: 8}}>
        <View>
          <View style={{paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#A6A4A4'}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', color:'#554D4D', fontSize: 26, textAlign: 'center'}}>Info</Text>
          </View>
          <View style={{paddingTop: 20}}>
            <TouchableOpacity  onPress={()=> {
            navigation.navigate('Lokasi')
            }}>  
              <View style={{backgroundColor: '#BCE3E0', width: 200, height: 41, borderRadius: 15, marginLeft: 10, paddingLeft: 5, flexDirection: 'row', marginBottom: 15}}>
                <Image source={require('./assets/icon/location.png')}/>
                <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, marginTop: 13, marginLeft: 10}}>Lokasi Bank Sampah</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {
            navigation.navigate('Event')
            }}>
              <View style={{backgroundColor: '#BCE3E0', width: 120, height: 41, borderRadius: 15, marginLeft: 10, paddingLeft: 5, flexDirection: 'row', marginBottom: 15}}>
                <Image style={{marginTop: 5}} source={require('./assets/icon/event.png')}/>
                <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, marginTop: 13, marginLeft: 10}}>Event</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 60}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', color:'#554D4D', fontSize: 26}}>Rekomendasi</Text>
        </View>
        <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
          <Image style={{height: 212, width: 345}} source={require('./assets/dummy/pegadaian.png')}/>
          <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
            <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, textAlign: 'center', paddingTop: 10}}>Tukarkan Poinmu menjadi tabungan emas senilai 15.000</Text>
            <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 12}}>
              <View style={{paddingTop: 10, flexDirection: 'row'}}>
                <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>15000 </Text>
                <Text style={{color:'#766F6F', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>Points</Text>
              </View>
              <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, marginLeft: 120, elevation: 5}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Tukar</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    </View>
  );
}

function Notification({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(166, 164, 164, 0.3)', marginBottom: 30}}>
        <View style={{flex: 1, alignSelf:'flex-start', paddingTop: 20, paddingLeft: 25}}>
          <TouchableOpacity onPress={()=> {
            navigation.navigate('Information')
            }}>
            <Image source={require('./assets/icon/info.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{flex: 2}}>
          <Text style={{ fontFamily: 'Oswald-SemiBold', color:'#33D1C1', fontSize: 36}}>TrashMon</Text>
        </View>
        <TouchableOpacity  onPress={()=> {
            navigation.navigate('goHome')
            }}>
          <View style={{ paddingRight: 25, paddingTop: 20}}>
            <Image source={require('./assets/icon/notification.png')}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#9EDCD7', marginHorizontal: 25, borderRadius: 8}}>
        <View>
          <View style={{paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#A6A4A4'}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', color:'#554D4D', fontSize: 26, textAlign: 'center'}}>Notification</Text>
          </View>
          <View style={{paddingTop: 20}}>
            <TouchableOpacity>  
              <View style={{ marginLeft: 10, paddingLeft: 5, flexDirection: 'row', marginBottom: 15}}>
                <Image source={require('./assets/icon/notification-mail.png')}/>
                <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, marginLeft: 10, marginTop: 3}}>Transaksi Anda Berhasil.{"\n"}Ayo kumpulkan lebih banyak poin</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ marginLeft: 10, paddingLeft: 5, flexDirection: 'row', marginBottom: 15}}>
                <Image style={{marginTop: 5}} source={require('./assets/icon/notification-mail.png')}/>
                <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, marginLeft: 10, marginTop: 7}}>Transaksi Anda Berhasil.{"\n"}Ayo kumpulkan lebih banyak poin</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 60}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', color:'#554D4D', fontSize: 26}}>Rekomendasi</Text>
        </View>
        <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
          <Image style={{height: 212, width: 345}} source={require('./assets/dummy/pegadaian.png')}/>
          <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
            <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, textAlign: 'center', paddingTop: 10}}>Tukarkan Poinmu menjadi tabungan emas senilai 15.000</Text>
            <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 12}}>
              <View style={{paddingTop: 10, flexDirection: 'row'}}>
                <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>15000 </Text>
                <Text style={{color:'#766F6F', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>Points</Text>
              </View>
              <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, marginLeft: 120, elevation: 5}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Tukar</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    </View>
  );
}

function Lokasi({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{}}>
        <View style={{paddingTop: 20, flexDirection: 'row', paddingHorizontal: 20, borderBottomColor: '#A6A4A4', borderBottomWidth: 1, paddingBottom: 20}}>
          <Image source={require('./assets/dummy/lokasi-1.png')}/>
          <View style={{paddingLeft: 10}}>
            <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Bank Sampah Wijaya Kusuma</Text>
            <Text style={{fontSize: 11, lineHeight: 25}} >Jl.Teuku Cik Ditiro II No.5 RT.1/RW2,{"\n"}Gondangdia, Kec. Menteng, Kota Jakarta{"\n"}Pusat, Daerah Khusus Ibukota Jakarta{"\n"}10350</Text>
          </View>
        </View>
        <View style={{paddingTop: 20, flexDirection: 'row', paddingHorizontal: 20, borderBottomColor: '#A6A4A4', borderBottomWidth: 1, paddingBottom: 20}}>
          <Image source={require('./assets/dummy/lokasi-2.png')}/>
          <View style={{paddingLeft: 10}}>
            <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Bank Sampah Melati Bersih</Text>
            <Text style={{fontSize: 11, lineHeight: 25}} >Perumahan Ciputat Baru. Jl. Flamboyan{"\n"}RT 02/RW06, Kelurahan Sawah, Ciputat{"\n"}Tangerang Selatan</Text>
          </View>
        </View>
        <View style={{paddingTop: 20, flexDirection: 'row', paddingHorizontal: 20, borderBottomColor: '#A6A4A4', borderBottomWidth: 1, paddingBottom: 20}}>
          <Image source={require('./assets/dummy/lokasi-3.png')}/>
          <View style={{paddingLeft: 10}}>
            <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Bank Sampah Induk Hijau Lestari</Text>
            <Text style={{fontSize: 11, lineHeight: 25}} >Jl. Jendral Ahmad Yani No.752, Cicaheum,{"\n"}Kec. Kiaracondong, Kota Bandung, Jawa{"\n"}Barat 40282</Text>
          </View>
        </View>
        <View style={{paddingTop: 20, flexDirection: 'row', paddingHorizontal: 20, borderBottomColor: '#A6A4A4', borderBottomWidth: 1, paddingBottom: 20}}>
          <Image source={require('./assets/dummy/lokasi-4.png')}/>
          <View style={{paddingLeft: 10}}>
            <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Bank Sampah Babakan Ciamis</Text>
            <Text style={{fontSize: 11, lineHeight: 25}} >Jl. Babakan Ciamis No.109, Babakan{"\n"}Ciamis, Kec. Sumur Bandung, Kota{"\n"}Bandung, Jawa Barat 40117</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function Event({ navigation }) {
  return (
    <ScrollView  style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View>
        <View style={{}}>
          <View style={{paddingHorizontal: 25}}>
            <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
              <Image style={{height: 212, width: 345}} source={require('./assets/dummy/event-1.png')}/>
              <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
                <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, paddingLeft: 5, marginTop: 15}}>Sosialisasi Mengenai Bank Sampah</Text>
                <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 10}}>
                  <View style={{paddingTop: 10, flexDirection: 'row'}}>
                    <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>20-07-2021</Text>
                  </View>
                  <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 20, paddingVertical: 7, borderRadius: 10, marginLeft: 140, elevation: 5}}>
                    <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Join Event</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{paddingTop: 35}}>
              <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
                <Image style={{height: 212, width: 345}} source={require('./assets/dummy/event-2.png')}/>
                <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
                  <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, paddingLeft: 5, marginTop: 15}}>Kerja Bakti Bulanan, di kawasan Sukabirus</Text>
                  <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 10}}>
                    <View style={{paddingTop: 10, flexDirection: 'row'}}>
                      <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>20-03-2021</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 20, paddingVertical: 7, borderRadius: 10, marginLeft: 115, elevation: 5}}>
                      <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Event Berakhir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={{paddingTop: 35, marginBottom: 65}}>
              <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
                <Image style={{height: 212, width: 345}} source={require('./assets/dummy/event-3.png')}/>
                <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
                  <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, paddingLeft: 5, marginTop: 15}}>Proses daur ulang sampah plastik, menjadi tas</Text>
                  <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 10}}>
                    <View style={{paddingTop: 10, flexDirection: 'row'}}>
                      <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>15-02-2021</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 20, paddingVertical: 7, borderRadius: 10, marginLeft: 115, elevation: 5}}>
                      <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Event Berakhir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function MyOrder({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{borderBottomWidth: 1, borderBottomColor: 'rgba(166, 164, 164, 0.3)'}}>
        <Text style={{ fontFamily: 'Oswald-SemiBold', color:'#33D1C1', fontSize: 36, textAlign: 'center'}}>TrashMon</Text>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 15, backgroundColor: '#BCE3E0', marginHorizontal: 25, borderRadius: 15, marginTop: 25, paddingBottom: 60}}>
          <View style={{position: 'absolute', paddingTop: 10, paddingLeft: 15}}>
            <Image source={require('./assets/icon/running.png')}/>
          </View>
          <View style={{paddingLeft: 70, position:'absolute'}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, marginLeft: 10, marginTop: 3, paddingTop: 5}}>Pick Up</Text>
            <Text style={{fontFamily: 'ABeeZee-Regular', fontSize: 16, marginLeft: 10, marginTop: 3}}>Agen kami sedang menuju ke{"\n"}lokasi anda harap tunggu</Text>
          </View>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 15, backgroundColor: '#BCE3E0', marginHorizontal: 25, borderRadius: 15, marginTop: 20, paddingBottom: 60}}>
          <View style={{position: 'absolute', paddingTop: 10, paddingLeft: 15}}>
            <Image source={require('./assets/icon/running.png')}/>
          </View>
          <View style={{paddingLeft: 70, position:'absolute'}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, marginLeft: 10, marginTop: 3, paddingTop: 5}}>Drop off</Text>
            <Text style={{fontFamily: 'ABeeZee-Regular', fontSize: 16, marginLeft: 10, marginTop: 3}}>Agen kami sudah menunggu anda{"\n"}segera antarkan sampah anda</Text>
          </View>
      </View>
    </View>
  );
}

function History({ navigation }) {
  return (
    <ScrollView  style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{borderBottomWidth: 1, borderBottomColor: 'rgba(166, 164, 164, 0.3)' }}>
        <Text style={{ fontFamily: 'Oswald-SemiBold', color:'#33D1C1', fontSize: 36, textAlign: 'center'}}>TrashMon</Text>
      </View>
      <View>
        <View style={{ marginLeft: 10, paddingLeft: 5, flexDirection: 'row', paddingTop: 25}}>
          <Image source={require('./assets/icon/history-centang.png')}/>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, marginLeft: 10, marginTop: 3, paddingTop: 5}}>Sampah anda sudah sampai{"\n"}poin anda sudah ditambahkan</Text>
        </View>
      </View>
      <View>
        <View style={{ marginLeft: 10, paddingLeft: 5, flexDirection: 'row', paddingTop: 15}}>
          <Image source={require('./assets/icon/history-centang.png')}/>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, marginLeft: 10, marginTop: 3, paddingTop: 5}}>Sampah anda sudah diambil agen kami{"\n"}poin anda sudah ditambahkan</Text>
        </View>
      </View>

      <View>
        <View style={{ marginLeft: 10, paddingLeft: 5, flexDirection: 'row', paddingTop: 15}}>
          <Image source={require('./assets/icon/history-centang.png')}/>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, marginLeft: 10, marginTop: 3, paddingTop: 5}}>Poin yang anda kirim telah berhasil{"\n"}aricahya@gmail.com berterima kasih</Text>
        </View>
      </View>
      <View>
        <View style={{ marginLeft: 10, paddingLeft: 5, flexDirection: 'row', paddingTop: 15}}>
          <Image source={require('./assets/icon/history-centang.png')}/>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, marginLeft: 10, marginTop: 3, paddingTop: 5}}>Poin anda sudah di redeem ke Dompet Dhuafa{"\n"}kumpulkan lebih banyak dan redeem lagi</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function Account({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'rgba(166, 164, 164, 0.3)' }}>
          <Text style={{ fontFamily: 'Oswald-SemiBold', color:'#33D1C1', fontSize: 36, textAlign: 'center'}}>TrashMon</Text>
        </View>
      <View style={{paddingHorizontal: 25, marginTop: 25}}>
        <View style={{alignItems: 'center', backgroundColor: '#DBF5F3', paddingTop: 15, borderRadius: 10}}>
          <Image source={require('./assets/icon/profile-picture.png')}/>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 26, marginTop: 3, paddingTop: 5, color: '#554D4D'}}>Alvin Anandra Brilliandy</Text>
          <View style={{flexDirection: 'row', marginBottom: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#33D1C1'}}>50000 </Text>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#766F6F'}}>Points</Text>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, marginTop: 3, paddingTop: 5, color: '#524848', opacity: 0.59}}>Profile</Text>
        </View>
        <TouchableOpacity  onPress={()=> {
            navigation.navigate('Ubah Profil')
            }}>
          <View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Image style={{width: 27, height: 31}} source={require('./assets/icon/ubah-profil.png')}/>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#524848', paddingLeft: 10}}>Ubah Profil</Text>
              <View style={{marginLeft: 208, paddingTop: 3}}>
                <Image source={require('./assets/icon/next.png')}/>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, marginTop: 3, paddingTop: 5, color: '#524848', opacity: 0.59}}>Tentang</Text>
        </View>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Syarat Dan Ketentuan')
            }}>
          <View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Image source={require('./assets/icon/syarat-dan-ketentuan.png')}/>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#524848', paddingLeft: 5}}>Syarat dan ketentuan</Text>
              <View style={{marginLeft: 133, paddingTop: 3}}>
                <Image source={require('./assets/icon/next.png')}/>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#A6A4A4', paddingTop: 10, opacity: 0.3}}></View>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Kebijakan Privasi')
            }}>
          <View style={{paddingTop: 5, paddingLeft: 3}}>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Image source={require('./assets/icon/kebijakan-privasi.png')}/>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#524848', paddingLeft: 10}}>Kebijakan Privasi</Text>
              <View style={{marginLeft: 161, paddingTop: 3}}>
                <Image source={require('./assets/icon/next.png')}/>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#A6A4A4', paddingTop: 10, opacity: 0.3}}></View>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Pernyataan Umum')
            }}>
          <View style={{paddingTop: 5, paddingLeft: 3}}>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Image source={require('./assets/icon/pernyataan-umum.png')}/>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#524848', paddingLeft: 10}}>Pernyataan Umum</Text>
              <View style={{marginLeft: 153, paddingTop: 3}}>
                <Image source={require('./assets/icon/next.png')}/>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#A6A4A4', paddingTop: 10, opacity: 0.3}}></View>
          <View style={{paddingTop: 10}}>
            <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, marginTop: 3, paddingTop: 5, color: '#524848', opacity: 0.59}}>Lainnya</Text>
          </View>
        </View>
        <View style={{paddingTop: 5, paddingLeft: 25}}>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Image source={require('./assets/icon/versi.png')}/>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#524848', paddingLeft: 10}}>Versi App</Text>
              <View style={{paddingLeft: 180}}>
                <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#524848', paddingLeft: 10}}>1.0.34</Text>
              </View>
            </View>
        </View>
        <View style={{paddingHorizontal: 25}}>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#A6A4A4', paddingTop: 10, opacity: 0.3}}></View>
        </View>
        <TouchableOpacity onPress={()=> {
            BackHandler.exitApp()
            }}>
          <View style={{paddingTop: 5, paddingLeft: 25}}>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Image source={require('./assets/icon/keluar.png')}/>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#F13535', paddingLeft: 10}}>Keluar</Text>
            </View>
          </View>
        </TouchableOpacity>
    </View>
  );
}

function UbahProfil({ navigation }) {
  const [namaLengkap, setNamaLengkap] = React.useState()
  const [jenisGender, setjenisGender] = React.useState()
  const [tanggalLahir, setTanggalLahir] = React.useState()
  const [NoHandphone, setNoHandphone] = React.useState()
  const [Email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  const [alamat, setAlamat] = React.useState()

  var jenisKelamin = [
    {label: 'Laki - laki', value: 0 },
    {label: 'Perempuan', value: 1 }
  ];
    
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1, paddingHorizontal: 25}}>
      <ScrollView>
        <View>
          <View style={{alignItems: 'center', paddingTop: 25}}>
            <Image source={require('./assets/icon/profile-picture-ubah-profil.png')}/>
            <TouchableOpacity>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, paddingTop: 15, color: '#33D1C1'}}>Perbarui Foto Profil</Text>
            </TouchableOpacity>
          </View>
          <View>      
            <View style={{backgroundColor : '#E9FFFD', paddingLeft: 15}}>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, paddingTop: 15, color: '#33D1C1'}}>Nama Lengkap</Text>
            </View>
            <View style={{width: 340, paddingTop: 10}}>
              <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: 'rgba(0, 0, 0, 0.31)', fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15}}
              placeholder= "Alvin Anandra Brilliandy"
              placeholderTextColor='#33D1C1'
              onChangeText={text => setNamaLengkap(text)}
              />
            </View>
          </View>
          <View style={{paddingLeft: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, paddingTop: 15, color: '#33D1C1'}}>Jenis Kelamin</Text>
          </View>
          <View style={{paddingHorizontal: 25, paddingTop: 10}}>
            <RadioForm
                radio_props={jenisKelamin}
                initial={0}
                formHorizontal={true}
                labelHorizontal={true}
                selectedButtonColor={'#33D1C1'}
                animation={true}
                onPress={(value) => {setjenisGender({value:value})}}
            />
          </View>
          <View style={{paddingLeft: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, paddingTop: 15, color: '#33D1C1'}}>Tanggal Lahir</Text>
          </View>
          <View style={{width: 340, paddingTop: 10}}>
              <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: 'rgba(0, 0, 0, 0.31)', fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15}}
              placeholder= "05 Februari 2001"
              placeholderTextColor='#33D1C1'
              onChangeText={text => setTanggalLahir(text)}
              />
          </View>
          <View style={{paddingLeft: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, paddingTop: 15, color: '#33D1C1'}}>No Handphone</Text>
          </View>
          <View style={{width: 340, paddingTop: 10}}>
              <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: 'rgba(0, 0, 0, 0.31)', fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15}}
              placeholder= "08663129928"
              placeholderTextColor='#33D1C1'
              onChangeText={text => setNoHandphone(text)}
              />
          </View>
          <View style={{paddingLeft: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, paddingTop: 15, color: '#33D1C1'}}>Email</Text>
          </View>
          <View style={{width: 340, paddingTop: 10}}>
              <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: 'rgba(0, 0, 0, 0.31)', fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15}}
              placeholder= "alvinanandra@gmail.com"
              placeholderTextColor='#33D1C1'
              onChangeText={text => setEmail(text)}
              />
          </View>
          <View style={{paddingLeft: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, paddingTop: 15, color: '#33D1C1'}}>Password</Text>
          </View>
          <View style={{width: 340, paddingTop: 10}}>
              <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: 'rgba(0, 0, 0, 0.31)', fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15}}
              placeholder= "**********"
              placeholderTextColor='#33D1C1'
              secureTextEntry= {true}
              onChangeText={text => setPassword(text)}
              />
          </View>
          <View style={{paddingLeft: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, paddingTop: 15, color: '#33D1C1'}}>Alamat</Text>
          </View>
          <View style={{width: 340, paddingTop: 10, marginBottom: 25}}>
              <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: 'rgba(0, 0, 0, 0.31)', fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15}}
              placeholder= "Bandung"
              placeholderTextColor='#33D1C1'
              onChangeText={text => setPassword(text)}
              />
          </View>
          <View style={{marginBottom: 25}}>
            <TouchableOpacity
              onPress={()=> {
                navigation.navigate('Edit Profil Berhasil')
                }}
              style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, elevation: 5}}>
                <Text style={{fontSize: 16, color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function SyaratDanKetentuan({ navigation }) {
  return (
    <ScrollView  style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 25}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>Syarat dan ketentuan</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Dengan menggunakan atau mengunjungi situs aplikasi{"\n"}kami (aplikasi TrashMon), Anda dianggap telah{"\n"}membaca, memahami, menerima dan menyetujui{"\n"}Ketentuan Penggunaan ini. Ketentuan Penggunaan ini{"\n"}merupakan suatu perjanjian sah antara Anda dan PT{"\n"}TrashMon Indonesia.</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>MOHON MEMBACA KETENTUAN PENGGUNAAN DAN{"\n"}KEBIJAKAN PRIVASI KAMI DENGAN SEKSAMA,{"\n"}SEBELUM MENGAKSES DAN MENGGUNAKAN{"\n"}LAYANAN KAMI.</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>1. Hal-hal Umum</Text>
        </View>
        <View style={{paddingLeft: 15}}>
          <View style={{paddingTop: 10}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Aplikasi ini merupakan layanan berbentuk aplikasi yang{"\n"}menyediakan beragam layanan pengelolaan sampah{"\n"}dengan cara menghubungkan pengguna dengan{"\n"}penyedia layanan seperti Bank sampah maupun{"\n"}unit-unit pengelola sampah yang lain. Jenis layanan{"\n"}yang dapat dilayani melalui situs kami adalah: </Text>
          </View>
          <View style={{paddingTop: 10}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Layanan Jual-beli sampah yang transaksinya dilakukan{"\n"}secara langsung (COD) maupun melalui uang digital{"\n"}berupa poin (TrashMon poin)</Text>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>2. Ketentuan untuk Menggunakan Aplikasi</Text>
        </View>
        <View style={{paddingLeft: 15}}>
          <View style={{paddingTop: 10, marginBottom: 20}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Anda menyatakan dan menjamin bahwa Anda adalah{"\n"}individu yang secara hukum berhak untuk mengadakan{"\n"}perjanjian yang mengikat berdasarkan hukum Negara{"\n"}Republik Indonesia, khususnya Ketentuan Penggunaan,{"\n"}untuk menggunakan situs Mallsampah dan bahwa Anda{"\n"}telah berusia minimal 13 tahun atau sudah menikah dan{"\n"}tidak berada di bawah perwalian. Jika tidak, kami atau{"\n"}Penyedia Layanan terkait, berhak berdasarkan hukum{"\n"}untuk membatalkan perjanjian yang dibuat dengan Anda.{"\n"}Anda selanjutnya menyatakan dan menjamin bahwa{"\n"}Anda memiliki hak, wewenang dan kapasitas untuk{"\n"}menggunakan Layanan dan mematuhi Ketentuan{"\n"}Penggunaan. Jika Anda mendaftar atas nama suatu{"\n"}badan hukum, Anda juga menyatakan dan menjamin{"\n"}bahwa Anda berwenang untuk mengadakan, dan{"\n"}mengikatkan diri entitas tersebut pada Ketentuan{"\n"}Penggunaan ini.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function KebijakanPrivasi({ navigation }) {
  return (
    <ScrollView  style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 25}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>Kebijakan Privasi</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Ketentuan yang termuat di dalam Kebijakan Privasi{"\n"}berikut, menjelaskan bagaimana kami (PT. TrashMon{"\n"}Indonesia) mengumpulkan, dan menggunakan informasi{"\n"}pribadi anda yang kami dapatkan dari penggunaan{"\n"}layanan kami (Aps TrashMon). Dengan menggunakan atau{"\n"}mengunjungi situs/layanan Mallsampah, maka anda{"\n"}dianggap telah mengetahui dan menyetujui seluruh{"\n"}ketentuan kebijakan privasi ini. Berikut kami uraikan{"\n"}ketentuan Kebijakan Privasi dari layanan kami</Text>
        </View>
        <View style={{paddingTop: 30}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>1. Informasi yang kami kumpulkan</Text>
        </View>
        <View style={{paddingLeft: 10}}>
          <View style={{paddingTop: 20}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>1. Kami mengumpulkan Informasi Pribadi tertentu dari{"\n"}anda agar layanan kami dapat berjalan sebagaimana{"\n"}mestinya untuk anda akses dan gunakan, contoh :{"\n"}untuk dapat mengakses fitur-fitur yang lebih lengkap,{"\n"}anda diharuskan mendaftar dan melengkapi data{"\n"}pribadi anda terlebih dahulu.{"\n"}</Text>
          </View>
          <View>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>2. Ketika anda mengunjungi Situs web/aplikasi kami,{"\n"}administrator situs web/aplikasi kami akan{"\n"}memproses data teknis seperti alamat IP anda,{"\n"}halaman web yang pernah anda kunjungi, browser{"\n"}internet yang anda gunakan, halaman web yang{"\n"}sebelumnya /selanjutnya anda kunjungi dan durasi{"\n"}setiap kunjungan/sesi yang memungkinkan kami{"\n"}untuk mengirimkan fungsi-fungsi Situs{"\n"}web/aplikasi.</Text>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>2. Penggunaan Informasi yang Kami Kumpulkan</Text>
        </View>
        <View style={{paddingLeft: 15}}>
          <View style={{paddingTop: 10, marginBottom: 20}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Kami menggunakan email, nama, dan sandi akun{"\n"}anda untuk memverifikasi kepemilikan anda atas{"\n"}suatu akun, untuk berkomunikasi dengan anda{"\n"}sehubungan dengan penggunaan layanan dan{"\n"}untuk memberikan anda informasi mengenai situs{"\n"}Mallsampah. Kami juga dapat menggunakan email{"\n"}dan nomor telfon anda untuk mengirimkan pesan,{"\n"}pembaharuan yang bersifat umum atas situs{"\n"}Mallsampah, penawaran-penawaran khusus atau{"\n"}promosi-promosi. Kami juga akan mengirimkan email kepada anda yang meminta anda untuk{"\n"}berlangganan Daftar Surat Menyurat (Mailing List){"\n"}kami. Anda dapat memilih untuk tidak menerima{"\n"}informasi mengenai pembahrauan ini.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function PernyataanUmum({ navigation }) {
  return (
    <ScrollView  style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 25}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>Apa itu TrashMon?</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>TrashMon adalah aplikasi jual beli sampah online {"\n"}(Recycling platform). TrashMon menghubungkan{"\n"}penghasil sampah (rumah tangga, bisnis dan kantor){"\n"}dengan kolektor local (pengepul) terdekat, sehingga lebih{"\n"}mudah dalam menjual sampah. TrashMon berfokus pada{"\n"}pola daur ulang sampah di sektor hulu, bukan layanan{"\n"}pengangkutan sampah atau kerajinan tangan daur ulang.</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>Apa perbedaan TrashMon dengan Bank Sampah atau layanan pengelola sampah lainnya?</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Layanan mallsampah gratis di gunakan oleh siapa saja, kami bukan perusahaan layanan penjemputan sampah, kami mencoba memberikan nilai yang lebih dari itu, yaitu sampah yang di jemput oleh mitra kami, seluruhnya akan di daur ulang dan tidak di buang ke TPA. Baik layanan menjual sampah atau program daur ulang, semuanya akan di daur ulang kembali.</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>Bagaimana cara menjual sampah melalui TrashMon?</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Menjual sampah melalui TrashMon sangatlah mudah, pastikan kamu sudah mendownload aplikasi TrashMon di playstore atau ios, selanjutnya buka aplikasi TrashMon, pilih fitur “jual sampah” masukan informasi sampah, alamat dan waktu penjemputan, submit dan tunggu sampai pengepul menjemput dan membayar sampahmu. Selengkapnya lihat panduan menjual sampah.</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>Bagaimana cara berlangganan program daur ulang sampah?</Text>
        </View>
        <View style={{paddingTop: 10, marginBottom: 20}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Jika kamu pemilik bisnis atau penyelenggara event, kamu dapat terlibat dalam menciptakan dunia yang lebih hijau, buka aplikasi mallsampah, pilih fitur “program daur ulang” selanjutnya masukan informasi bisnis/event mu, setelah berhasil mendaftar, kamu akan mendapatkan email panduan untuk mempelajari lebih lanjut. Selengkapnya lihat panduan “program daur ulang”.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function EditProfilBerhasil({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Account'); 
}, 3000)
  return (
    <View style={{flex: 1, backgroundColor : '#E9FFFD', alignItems: 'center'}}>
      <View style={{marginBottom: 40, paddingTop: 200}}>
        <Image source={require('./assets/logo/berhasil.png')}/>
      </View>
      <View style={{}}>
        <Text style={{fontSize: 24, color: '#424242', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Edit Profil Berhasil</Text>
      </View>
      <View style={{paddingTop: 5}}>
        <Text style={{fontSize: 16, color: '#7C7C7C', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Akun berhasil diedit</Text>
      </View>
    </View>
  );
}

export default App;