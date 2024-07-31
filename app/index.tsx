import { Text, View } from "react-native";
import Login from './../components/Login';
import { auth } from './../configs/FireBaseConfig';
import { Redirect } from "expo-router";
import { useRef } from "react";
export default function Index() {
  const user = useRef(auth.currentUser);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user.current? <Redirect href={'/mytrip'} /> : <Login />

      }
    </View>
  );
}
