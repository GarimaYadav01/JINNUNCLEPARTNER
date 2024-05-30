
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { profile_detail } from '../apiconfig/Apiconfig';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isgetprofile, setIsgetprofile] = useState([]);
    console.log("isgetprofile---->", isgetprofile)
    const gethandleprofile = async () => {
        try {
            const token = await AsyncStorage.getItem("token")
            const myHeaders = new Headers();
            myHeaders.append("token", token);
            myHeaders.append("Cookie", "ci_session=d24279455052bb8a801fb587eff4db2f43de7d00");
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };
            const response = await fetch(profile_detail, requestOptions);
            const result = await response.json();
            if (result.status == 200) {
                setIsgetprofile(result.data)
            }
            console.log("result---profile_detail-->", result.data)
        } catch (error) {
            console.log("error---profile_detail>", error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                gethandleprofile,
                isgetprofile,
                setIsgetprofile,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
