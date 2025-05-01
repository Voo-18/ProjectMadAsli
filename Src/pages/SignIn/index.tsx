import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import TextInput from '../../Componets/molecules/TextInput';
import Button from '../../Componets/atoms/Buttom';
import Gap from '../../Componets/atoms/Gap';

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.pageContainer}>
          <Text style={styles.title}>Sign in</Text>

          <View style={styles.contentContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput placeholder="Johndoe@exemple.com" style={styles.input} />

            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
            />


            <Button
              label="Log in"
              backgroundColor="#FF6C44"
              textColor="#FFFFFF"
              height={50}
              borderRadius={20}
              onPress={() => navigation.navigate('Home')}
            />

            {/* Garis pemisah dan teks log in with */}
            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={styles.loginWithText}>Log in with</Text>
              <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.googleButton}>
              <Image
                source={require('../../assets/icon/Google.jpg')}
                style={styles.googleIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.normalText}>No account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupText}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#FFF'},
  scrollContainer: {flexGrow: 1, justifyContent: 'center'},
  pageContainer: {flex: 1, paddingHorizontal: 24},
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 60,
    color: '#3A3A3A',
  },
  contentContainer: {marginTop: 40},
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3A3A3A',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  forgotContainer: {alignItems: 'flex-end', marginTop: 8},
  forgotText: {color: '#FF6C44', fontSize: 12},
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#C4C4C4',
  },
  loginWithText: {
    marginHorizontal: 8,
    fontSize: 14,
    color: '#3A3A3A',
  },
  googleButton: {
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 8,
    padding: 8,
  },
  googleIcon: {width: 24, height: 24},
  signupContainer: {flexDirection: 'row', justifyContent: 'center'},
  normalText: {fontSize: 14, color: '#3A3A3A'},
  signupText: {fontSize: 14, color: '#FF6C44', fontWeight: '600'},
});
