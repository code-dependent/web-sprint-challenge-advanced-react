import{useState} from 'react';

export const useLocalStorage = (key, initValue)=>{
    const [storedValue,setStoredValue]=useState(()=>{
        return window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : initValue
    });
    
    const valueSetter = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))

    }
    return [storedValue, valueSetter];
}