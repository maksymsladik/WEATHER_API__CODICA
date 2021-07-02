/* WEATHER PAGE */

export interface WeatherReducerState {
    locationValue: string;
    saveListLocationToLocalStorage: Array<string>;
    listLocationDataWeather: Array<LocationDataWeather>;
    loading: boolean;
}

export interface LocationDataWeather {
    id: number;
    name: string;
    time: string;
    main: {
        temp: number;
        feels_like: number;
    };
}

export interface InputProps {
    locationValue: string;
    setLocationValue: (e: string) => void;
    dispatch: (dispatch: any) => void;
}

export interface BtnProps {
    findLocationClearValue: () => void;
}

export interface BriefInfoIListProps {
    listLocationDataWeather: Array<LocationDataWeather>;
    removeLocation: (index: number) => void;
    fetchUpdateLocationData: (name: string, index: number) => void;
    clearLocationValue: () => void;
    dispatch: (dispatch: any) => void;
}

export interface BriefInfoItemProps {
    index: number;
    name: string;
    main: Degrees;
    time: string;
    removeLocation: (index: number) => void;
    fetchUpdateLocationData: (name: string, index: number) => void;
    clearLocationValue: () => void;
    dispatch: (dispatch: any) => void;
}

interface Degrees {
    temp: number;
    feels_like: number;
}

/* DETAILS WEATHER PAGE */

export interface RouteParams {
    id: string;
}

export interface DetailsWeatherState {
    detailsWeatherToday: object;
    weatherForecast: Array<WeatherForecastData>;
    dataDays: Array<string>;
    selectedDay: string;
    loading: boolean;
}

export interface WeatherForecastData {
    time: string;
    day: string;
    degrees: number;
}

export interface ItemDay {
    main: {
        temp: number;
    };
    dt_txt: string;
}

export interface DetailsWeatherInfoProps {
    name?: string;
    main?: {
        temp: number;
        temp_min: number;
        temp_max: number;
        feels_like: number;
    };
    wind?: {
        speed: number;
    };
}

export interface SelectProps {
    dataDays: Array<string>;
    selectedDay: string;
    setSelectedDay: (e: string) => void;
    dispatch: (dispatch: any) => void;
}

export interface ListSelectProps {
    dataDays: string[];
}

export interface ItemSelectProps {
    day: string;
}

export interface TableProps {
    weatherForecast: Array<WeatherForecastData>;
    selectedDay: string;
}