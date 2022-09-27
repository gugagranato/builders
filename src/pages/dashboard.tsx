import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { WeatherHailDay } from '@styled-icons/fluentui-system-filled'
import { Refresh } from '@styled-icons/boxicons-regular'
import axios from 'axios'
import { toast } from 'react-toastify'

import Paper from 'components/Paper'
import Button from 'components/Button'
import Base from 'templates/Base'
import { convertTemperature } from 'utils/convertTemperature'
import { isToday } from 'helpers/functions'

import * as S from './styles'
import Image from 'next/image'

const GOOGLE_MAPS_KEY = `AIzaSyA4qWtMB7nt92Hl47Cw-56k0YiuOtci6_c`
const WEATHER_KEY = `8ba70a82649a2cbe8bad13dea2ea2a4e`

const containerStyle = {
  maxWidth: '70rem',
  width: 'auto',
  height: '34rem'
}

type GeolocationProps = {
  lat: number
  lng: number
}

type NextDaysWeatherProps = {
  list: ListNextDaysWeatherProps[]
}

type ListNextDaysWeatherProps = {
  dt: number
  dt_txt: string
  weather: WeatherProps[]
  main: {
    temp: number
  }
}

type MainWeatherProps = {
  temp: number
  humidity: number
  temp_max: number
  temp_min: number
}

type WindWeatherProps = {
  speed: number
}

type WeatherProps = {
  name: string
  main: MainWeatherProps
  wind: WindWeatherProps
  icon?: string
}

const Dashboard = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_KEY
  })
  const [data, setData] = useState<WeatherProps | null>(null)
  const [nextDaysWeather, setNextDaysWeather] =
    useState<NextDaysWeatherProps | null>(null)
  const [loading, setLoading] = useState(false)
  const [geolocation, setGeolocation] = useState<GeolocationProps | null>(null)

  const getWeather = async (geolocation: GeolocationProps) => {
    const { lat, lng } = geolocation
    try {
      setLoading(true)
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_KEY}`
      )
      if (response.status === 200) {
        const { data } = response
        setData(data)
      } else {
        toast.error('Algo errado aconteceu')
      }
    } catch (error) {
      toast.error('Não foi possível buscar os dados')
    } finally {
      setLoading(false)
    }
  }

  const getWeatherNextDays = async (position: GeolocationProps) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${position.lat}&lon=${position.lng}&appid=${WEATHER_KEY}`
      )
      if (response.status === 200) {
        setNextDaysWeather(response.data)
      }
    } catch (error) {
      toast.error('Erro ao buscar o tempo e clima das próximas horas.')
    }
  }

  useEffect(() => {
    geolocation && getWeather(geolocation)
  }, [geolocation])

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const data = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        setGeolocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
        getWeatherNextDays(data)
      })
    }
  }, [])

  return (
    <Base>
      <S.DashboardWrapper grid={'primary'}>
        <Paper>
          {loading ? (
            <S.LoadingHeading>
              <h3>Carregando...</h3>
            </S.LoadingHeading>
          ) : (
            <>
              {data && (
                <>
                  <S.DescriptionNow>
                    Tempo agora em {data.name}, MG
                  </S.DescriptionNow>
                  <S.WrapperCurrentTemperature>
                    <WeatherHailDay size={80} />
                    <S.TemperatureHeading>
                      {convertTemperature(data?.main?.temp)}°
                    </S.TemperatureHeading>
                  </S.WrapperCurrentTemperature>
                  <S.ContentWind>
                    <S.WindInformation>Vento</S.WindInformation>
                    <S.WindInformation>
                      {data?.wind?.speed} m/s
                    </S.WindInformation>
                  </S.ContentWind>
                  <S.ContentWind>
                    <S.WindInformation>Umidade</S.WindInformation>
                    <S.WindInformation>
                      {data.main?.humidity}%
                    </S.WindInformation>
                  </S.ContentWind>

                  <S.WrapperButton>
                    {geolocation && (
                      <Button
                        onClick={() => getWeather(geolocation)}
                        size="medium"
                        icon={<Refresh size={20} />}
                      >
                        Atualizar
                      </Button>
                    )}
                  </S.WrapperButton>
                  <S.ReferenceAPI>
                    Dados de{' '}
                    <S.OpenWeatherTitle href="https://openweathermap.org/api">
                      <i>Open Weather API</i>
                    </S.OpenWeatherTitle>
                  </S.ReferenceAPI>
                </>
              )}
            </>
          )}
        </Paper>
        <Paper size="large">
          {geolocation && isLoaded ? (
            <S.WrapperGoogleMaps>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={geolocation}
                zoom={18}
              />
            </S.WrapperGoogleMaps>
          ) : (
            <>Carregando o mapa...</>
          )}
        </Paper>
      </S.DashboardWrapper>
      <S.DescriptionCurrentTime>
        Tempo hoje de 3 em 3 horas
      </S.DescriptionCurrentTime>
      <S.DashboardWrapper grid={'secondary'}>
        {nextDaysWeather &&
          nextDaysWeather.list.map((e) => {
            const { icon, main } = e.weather[0]
            const { dt_txt: dateString, dt: timestamp } = e
            const { temp } = e.main

            return (
              isToday(timestamp) && (
                <Paper key={timestamp} size="small">
                  <S.WrapperSmallPaper>
                    <S.WrapperImage>
                      <Image
                        width={50}
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                      />
                      <h2>{dateString}</h2>
                    </S.WrapperImage>
                    <S.ContentTemperature>
                      <h1>{main}</h1>
                      <h1>{convertTemperature(temp)}°</h1>
                    </S.ContentTemperature>
                  </S.WrapperSmallPaper>
                </Paper>
              )
            )
          })}
      </S.DashboardWrapper>
    </Base>
  )
}

export default Dashboard
