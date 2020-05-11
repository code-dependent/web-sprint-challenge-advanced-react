import { useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage'


export const useNightMode = (key, initValue)=>{
    const [value, setValue] = useLocalStorage(key, initValue)
    useEffect(()=>{
        value ? document.querySelector('body').classList.add('nightMode') : document.querySelector('body').classList.remove('nightMode')
        if(document.querySelector('form')){
        value ? document.querySelector('form').classList.add('nightMode') : document.querySelector('form').classList.remove('nightMode')
        }
    },[value])
    return[value, setValue]
}