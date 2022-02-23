import defaultModules from 'assets/data/modules.json';
import useFetch from "use-http";
import { useLocalStorage } from "./use-localstorage";
import baseModule from 'assets/data/baseModule.json';

export function useModule(moduleId: string) {
  const defaultModuleData: any = defaultModules.modules;
  const [ modules, setModules ] = useLocalStorage("modules", defaultModuleData);
  const module = modules[moduleId];
  const { url } = module;
  const { data, loading, error } = useFetch(url, {
    persist: true
  }, []);
  return {
    data: {
      ...baseModule,
      ...module,
      ...data
    },
    loading, 
    error
  };
}